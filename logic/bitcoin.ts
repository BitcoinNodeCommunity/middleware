import getClient from '../services/bitcoin.js';
import type {
  ChainInfo,
  IBitcoinClient,
  MempoolInfo,
  MiningInfo,
  NetworkInfo,
  Transaction,
  TxIn,
} from '../services/bitcoin/abstract';

/**
 * A higher-level interface to the Bitcoin client.
 *
 * This provides some logic which can be calculated no matter what Bitcoin client is actually used by the data returned from the client
 *
 * This avoids having to repeat code in every client implementation.
 */
export default class BitcoinLogic {
  #bitcoinClient: IBitcoinClient;

  constructor() {
    this.#bitcoinClient = getClient();
  }

  async getBlockCount(): Promise<number> {
    return this.#bitcoinClient.getBlockCount();
  }

  async getConnectionsCount(): Promise<{
    total: number;
    inbound: number;
    outbound: number;
  }> {
    const peerInfo = await this.#bitcoinClient.getPeerInfo();

    let outBoundConnections = 0;
    let inBoundConnections = 0;

    for (const peer of peerInfo) {
      if (!peer.inbound) {
        outBoundConnections++;

        continue;
      }

      inBoundConnections++;
    }

    const connections = {
      total: inBoundConnections + outBoundConnections,
      inbound: inBoundConnections,
      outbound: outBoundConnections,
    };

    return connections;
  }

  async getStatus(): Promise<{operational: boolean}> {
    try {
      await this.#bitcoinClient.getPeerInfo();

      return {operational: true};
    } catch {
      return {operational: false};
    }
  }

  // Return the max synced header for all connected peers or -1 if no data is available.
  async getMaxSyncHeader(): Promise<number> {
    const peerInfo = await this.#bitcoinClient.getPeerInfo();

    if (peerInfo.length === 0) {
      return -1;
    }

    const maxPeer = peerInfo.reduce(function (previous, current) {
      return previous.synced_headers > current.synced_headers
        ? previous
        : current;
    });

    return maxPeer.synced_headers;
  }

  async getMempoolInfo(): Promise<MempoolInfo> {
    return this.#bitcoinClient.getMempoolInfo();
  }

  async getLocalSyncInfo(): Promise<{
    chain: string;
    percent: number;
    currentBlock: number;
    headerCount: number;
  }> {
    const info = await this.#bitcoinClient.getBlockchainInfo();

    const blockChainInfo = info;
    const chain = blockChainInfo.chain;
    const blockCount = blockChainInfo.blocks;
    const headerCount = blockChainInfo.headers;
    const percent = blockChainInfo.verificationprogress;

    return {
      chain,
      percent,
      currentBlock: blockCount,
      headerCount,
    };
  }

  async getSyncStatus(): Promise<{
    chain: string;
    percent: number;
    currentBlock: number;
    headerCount: number;
  }> {
    const maxPeerHeader = await this.getMaxSyncHeader();
    const localSyncInfo = await this.getLocalSyncInfo();

    if (maxPeerHeader > localSyncInfo.headerCount) {
      localSyncInfo.headerCount = maxPeerHeader;
    }

    return localSyncInfo;
  }

  async getVersion(): Promise<string> {
    return this.#bitcoinClient.getVersion();
  }

  async getTransaction(txid: string): Promise<{
    txid: string;
    timestamp: number;
    confirmations: number;
    blockhash: string;
    size: number;
    input: string;
    utxo: unknown;
    rawtx: string;
  }> {
    const transactionObject = await this.#bitcoinClient.getRawTransaction(txid);
    const vintxid: string = Array.isArray(transactionObject.vin)
      ? transactionObject.vin[0].txid
      : (<TxIn>(<unknown>transactionObject.vin)).txid;
    const vouttx: unknown = Array.isArray(transactionObject.vout)
      ? transactionObject.vout[0]
      : transactionObject.vout;
    return {
      txid,
      timestamp: transactionObject.time,
      confirmations: transactionObject.confirmations,
      blockhash: transactionObject.blockhash,
      size: transactionObject.size,
      input: vintxid,
      utxo: vouttx,
      rawtx: transactionObject.hex,
    };
  }

  async getNetworkInfo(): Promise<NetworkInfo> {
    return this.#bitcoinClient.getNetworkInfo();
  }

  async getBlock(hash: string): Promise<{
    block: string;
    confirmations: number;
    size: number;
    height: number;
    blocktime: number;
    prevblock: string;
    nextblock: string | undefined;
    transactions: string | Transaction[];
  }> {
    const blockObject = await this.#bitcoinClient.getBlock(hash);
    return {
      block: hash,
      confirmations: blockObject.confirmations,
      size: blockObject.size,
      height: blockObject.height,
      blocktime: blockObject.time,
      prevblock: blockObject.previousblockhash,
      nextblock: blockObject.nextblockchash,
      transactions: blockObject.tx,
    };
  }

  async getBlocks(
    fromHeight: number,
    toHeight: number,
  ): Promise<
    Array<{
      hash: string;
      height: number;
      numTransactions: number;
      confirmations: number;
      time: number;
      size: number;
    }>
  > {
    const startingBlockHashRaw = await this.#bitcoinClient.getBlockHash(
      toHeight,
    );

    let currentHash = startingBlockHashRaw;

    const blocks = [];

    // Loop from 'to height' till 'from Height'
    for (
      let currentHeight = toHeight;
      currentHeight >= fromHeight;
      currentHeight--
    ) {
      const block = await this.#bitcoinClient.getBlock(currentHash);

      const formattedBlock = {
        hash: block.hash,
        height: block.height,
        numTransactions: block.tx.length,
        confirmations: block.confirmations,
        time: block.time,
        size: block.size,
      };

      blocks.push(formattedBlock);

      currentHash = block.previousblockhash;
      // Terminate loop if we reach the genesis block
      if (!currentHash) {
        break;
      }
    }

    return blocks;
  }

  async getBlockHash(height: number): Promise<string> {
    const getBlockHashObject = await this.#bitcoinClient.getBlockHash(height);

    return getBlockHashObject;
  }

  async nodeStatusDump(): Promise<{
    blockchainInfo: ChainInfo;
    networkInfo: NetworkInfo;
    mempoolInfo: MempoolInfo;
    miningInfo: MiningInfo;
  }> {
    const blockchainInfo = await this.#bitcoinClient.getBlockchainInfo();
    const networkInfo = await this.#bitcoinClient.getNetworkInfo();
    const mempoolInfo = await this.#bitcoinClient.getMempoolInfo();
    const miningInfo = await this.#bitcoinClient.getMiningInfo();

    return {
      blockchainInfo,
      networkInfo,
      mempoolInfo,
      miningInfo,
    };
  }

  async nodeStatusSummary(): Promise<{
    difficulty: number;
    size: number;
    mempool: number;
    connections: number;
    networkhashps: number;
  }> {
    const status = await this.nodeStatusDump();

    return {
      difficulty: status.blockchainInfo.difficulty,
      size: status.blockchainInfo.size_on_disk,
      mempool: status.mempoolInfo.bytes,
      connections: status.networkInfo.connections,
      networkhashps: status.miningInfo.networkhashps,
    };
  }
}
