/* eslint-disable */
import Long from 'long';
// Manually patched with the extension
import _m0 from 'protobufjs/minimal.js';

export const protobufPackage = 'lnrpc';

/**
 * `AddressType` has to be one of:
 *
 * - `p2wkh`: Pay to witness key hash (`WITNESS_PUBKEY_HASH` = 0)
 * - `np2wkh`: Pay to nested witness key hash (`NESTED_PUBKEY_HASH` = 1)
 */
export enum AddressType {
  WITNESS_PUBKEY_HASH = 0,
  NESTED_PUBKEY_HASH = 1,
  UNUSED_WITNESS_PUBKEY_HASH = 2,
  UNUSED_NESTED_PUBKEY_HASH = 3,
  UNRECOGNIZED = -1,
}

export function addressTypeFromJSON(object: any): AddressType {
  switch (object) {
    case 0:
    case 'WITNESS_PUBKEY_HASH':
      return AddressType.WITNESS_PUBKEY_HASH;
    case 1:
    case 'NESTED_PUBKEY_HASH':
      return AddressType.NESTED_PUBKEY_HASH;
    case 2:
    case 'UNUSED_WITNESS_PUBKEY_HASH':
      return AddressType.UNUSED_WITNESS_PUBKEY_HASH;
    case 3:
    case 'UNUSED_NESTED_PUBKEY_HASH':
      return AddressType.UNUSED_NESTED_PUBKEY_HASH;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return AddressType.UNRECOGNIZED;
  }
}

export function addressTypeToJSON(object: AddressType): string {
  switch (object) {
    case AddressType.WITNESS_PUBKEY_HASH:
      return 'WITNESS_PUBKEY_HASH';
    case AddressType.NESTED_PUBKEY_HASH:
      return 'NESTED_PUBKEY_HASH';
    case AddressType.UNUSED_WITNESS_PUBKEY_HASH:
      return 'UNUSED_WITNESS_PUBKEY_HASH';
    case AddressType.UNUSED_NESTED_PUBKEY_HASH:
      return 'UNUSED_NESTED_PUBKEY_HASH';
    default:
      return 'UNKNOWN';
  }
}

export enum CommitmentType {
  /** UNKNOWN_COMMITMENT_TYPE - Returned when the commitment type isn't known or unavailable. */
  UNKNOWN_COMMITMENT_TYPE = 0,
  /**
   * LEGACY - A channel using the legacy commitment format having tweaked to_remote
   * keys.
   */
  LEGACY = 1,
  /**
   * STATIC_REMOTE_KEY - A channel that uses the modern commitment format where the key in the
   * output of the remote party does not change each state. This makes back
   * up and recovery easier as when the channel is closed, the funds go
   * directly to that key.
   */
  STATIC_REMOTE_KEY = 2,
  /**
   * ANCHORS - A channel that uses a commitment format that has anchor outputs on the
   * commitments, allowing fee bumping after a force close transaction has
   * been broadcast.
   */
  ANCHORS = 3,
  /**
   * SCRIPT_ENFORCED_LEASE - A channel that uses a commitment type that builds upon the anchors
   * commitment format, but in addition requires a CLTV clause to spend outputs
   * paying to the channel initiator. This is intended for use on leased channels
   * to guarantee that the channel initiator has no incentives to close a leased
   * channel before its maturity date.
   */
  SCRIPT_ENFORCED_LEASE = 4,
  UNRECOGNIZED = -1,
}

export function commitmentTypeFromJSON(object: any): CommitmentType {
  switch (object) {
    case 0:
    case 'UNKNOWN_COMMITMENT_TYPE':
      return CommitmentType.UNKNOWN_COMMITMENT_TYPE;
    case 1:
    case 'LEGACY':
      return CommitmentType.LEGACY;
    case 2:
    case 'STATIC_REMOTE_KEY':
      return CommitmentType.STATIC_REMOTE_KEY;
    case 3:
    case 'ANCHORS':
      return CommitmentType.ANCHORS;
    case 4:
    case 'SCRIPT_ENFORCED_LEASE':
      return CommitmentType.SCRIPT_ENFORCED_LEASE;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return CommitmentType.UNRECOGNIZED;
  }
}

export function commitmentTypeToJSON(object: CommitmentType): string {
  switch (object) {
    case CommitmentType.UNKNOWN_COMMITMENT_TYPE:
      return 'UNKNOWN_COMMITMENT_TYPE';
    case CommitmentType.LEGACY:
      return 'LEGACY';
    case CommitmentType.STATIC_REMOTE_KEY:
      return 'STATIC_REMOTE_KEY';
    case CommitmentType.ANCHORS:
      return 'ANCHORS';
    case CommitmentType.SCRIPT_ENFORCED_LEASE:
      return 'SCRIPT_ENFORCED_LEASE';
    default:
      return 'UNKNOWN';
  }
}

export enum Initiator {
  INITIATOR_UNKNOWN = 0,
  INITIATOR_LOCAL = 1,
  INITIATOR_REMOTE = 2,
  INITIATOR_BOTH = 3,
  UNRECOGNIZED = -1,
}

export function initiatorFromJSON(object: any): Initiator {
  switch (object) {
    case 0:
    case 'INITIATOR_UNKNOWN':
      return Initiator.INITIATOR_UNKNOWN;
    case 1:
    case 'INITIATOR_LOCAL':
      return Initiator.INITIATOR_LOCAL;
    case 2:
    case 'INITIATOR_REMOTE':
      return Initiator.INITIATOR_REMOTE;
    case 3:
    case 'INITIATOR_BOTH':
      return Initiator.INITIATOR_BOTH;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Initiator.UNRECOGNIZED;
  }
}

export function initiatorToJSON(object: Initiator): string {
  switch (object) {
    case Initiator.INITIATOR_UNKNOWN:
      return 'INITIATOR_UNKNOWN';
    case Initiator.INITIATOR_LOCAL:
      return 'INITIATOR_LOCAL';
    case Initiator.INITIATOR_REMOTE:
      return 'INITIATOR_REMOTE';
    case Initiator.INITIATOR_BOTH:
      return 'INITIATOR_BOTH';
    default:
      return 'UNKNOWN';
  }
}

export enum ResolutionType {
  TYPE_UNKNOWN = 0,
  /** ANCHOR - We resolved an anchor output. */
  ANCHOR = 1,
  /**
   * INCOMING_HTLC - We are resolving an incoming htlc on chain. This if this htlc is
   * claimed, we swept the incoming htlc with the preimage. If it is timed
   * out, our peer swept the timeout path.
   */
  INCOMING_HTLC = 2,
  /**
   * OUTGOING_HTLC - We are resolving an outgoing htlc on chain. If this htlc is claimed,
   * the remote party swept the htlc with the preimage. If it is timed out,
   * we swept it with the timeout path.
   */
  OUTGOING_HTLC = 3,
  /** COMMIT - We force closed and need to sweep our time locked commitment output. */
  COMMIT = 4,
  UNRECOGNIZED = -1,
}

export function resolutionTypeFromJSON(object: any): ResolutionType {
  switch (object) {
    case 0:
    case 'TYPE_UNKNOWN':
      return ResolutionType.TYPE_UNKNOWN;
    case 1:
    case 'ANCHOR':
      return ResolutionType.ANCHOR;
    case 2:
    case 'INCOMING_HTLC':
      return ResolutionType.INCOMING_HTLC;
    case 3:
    case 'OUTGOING_HTLC':
      return ResolutionType.OUTGOING_HTLC;
    case 4:
    case 'COMMIT':
      return ResolutionType.COMMIT;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return ResolutionType.UNRECOGNIZED;
  }
}

export function resolutionTypeToJSON(object: ResolutionType): string {
  switch (object) {
    case ResolutionType.TYPE_UNKNOWN:
      return 'TYPE_UNKNOWN';
    case ResolutionType.ANCHOR:
      return 'ANCHOR';
    case ResolutionType.INCOMING_HTLC:
      return 'INCOMING_HTLC';
    case ResolutionType.OUTGOING_HTLC:
      return 'OUTGOING_HTLC';
    case ResolutionType.COMMIT:
      return 'COMMIT';
    default:
      return 'UNKNOWN';
  }
}

export enum ResolutionOutcome {
  /** OUTCOME_UNKNOWN - Outcome unknown. */
  OUTCOME_UNKNOWN = 0,
  /** CLAIMED - An output was claimed on chain. */
  CLAIMED = 1,
  /** UNCLAIMED - An output was left unclaimed on chain. */
  UNCLAIMED = 2,
  /**
   * ABANDONED - ResolverOutcomeAbandoned indicates that an output that we did not
   * claim on chain, for example an anchor that we did not sweep and a
   * third party claimed on chain, or a htlc that we could not decode
   * so left unclaimed.
   */
  ABANDONED = 3,
  /**
   * FIRST_STAGE - If we force closed our channel, our htlcs need to be claimed in two
   * stages. This outcome represents the broadcast of a timeout or success
   * transaction for this two stage htlc claim.
   */
  FIRST_STAGE = 4,
  /** TIMEOUT - A htlc was timed out on chain. */
  TIMEOUT = 5,
  UNRECOGNIZED = -1,
}

export function resolutionOutcomeFromJSON(object: any): ResolutionOutcome {
  switch (object) {
    case 0:
    case 'OUTCOME_UNKNOWN':
      return ResolutionOutcome.OUTCOME_UNKNOWN;
    case 1:
    case 'CLAIMED':
      return ResolutionOutcome.CLAIMED;
    case 2:
    case 'UNCLAIMED':
      return ResolutionOutcome.UNCLAIMED;
    case 3:
    case 'ABANDONED':
      return ResolutionOutcome.ABANDONED;
    case 4:
    case 'FIRST_STAGE':
      return ResolutionOutcome.FIRST_STAGE;
    case 5:
    case 'TIMEOUT':
      return ResolutionOutcome.TIMEOUT;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return ResolutionOutcome.UNRECOGNIZED;
  }
}

export function resolutionOutcomeToJSON(object: ResolutionOutcome): string {
  switch (object) {
    case ResolutionOutcome.OUTCOME_UNKNOWN:
      return 'OUTCOME_UNKNOWN';
    case ResolutionOutcome.CLAIMED:
      return 'CLAIMED';
    case ResolutionOutcome.UNCLAIMED:
      return 'UNCLAIMED';
    case ResolutionOutcome.ABANDONED:
      return 'ABANDONED';
    case ResolutionOutcome.FIRST_STAGE:
      return 'FIRST_STAGE';
    case ResolutionOutcome.TIMEOUT:
      return 'TIMEOUT';
    default:
      return 'UNKNOWN';
  }
}

export enum NodeMetricType {
  UNKNOWN = 0,
  BETWEENNESS_CENTRALITY = 1,
  UNRECOGNIZED = -1,
}

export function nodeMetricTypeFromJSON(object: any): NodeMetricType {
  switch (object) {
    case 0:
    case 'UNKNOWN':
      return NodeMetricType.UNKNOWN;
    case 1:
    case 'BETWEENNESS_CENTRALITY':
      return NodeMetricType.BETWEENNESS_CENTRALITY;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return NodeMetricType.UNRECOGNIZED;
  }
}

export function nodeMetricTypeToJSON(object: NodeMetricType): string {
  switch (object) {
    case NodeMetricType.UNKNOWN:
      return 'UNKNOWN';
    case NodeMetricType.BETWEENNESS_CENTRALITY:
      return 'BETWEENNESS_CENTRALITY';
    default:
      return 'UNKNOWN';
  }
}

export enum InvoiceHTLCState {
  ACCEPTED = 0,
  SETTLED = 1,
  CANCELED = 2,
  UNRECOGNIZED = -1,
}

export function invoiceHTLCStateFromJSON(object: any): InvoiceHTLCState {
  switch (object) {
    case 0:
    case 'ACCEPTED':
      return InvoiceHTLCState.ACCEPTED;
    case 1:
    case 'SETTLED':
      return InvoiceHTLCState.SETTLED;
    case 2:
    case 'CANCELED':
      return InvoiceHTLCState.CANCELED;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return InvoiceHTLCState.UNRECOGNIZED;
  }
}

export function invoiceHTLCStateToJSON(object: InvoiceHTLCState): string {
  switch (object) {
    case InvoiceHTLCState.ACCEPTED:
      return 'ACCEPTED';
    case InvoiceHTLCState.SETTLED:
      return 'SETTLED';
    case InvoiceHTLCState.CANCELED:
      return 'CANCELED';
    default:
      return 'UNKNOWN';
  }
}

export enum PaymentFailureReason {
  /** FAILURE_REASON_NONE - Payment isn't failed (yet). */
  FAILURE_REASON_NONE = 0,
  /** FAILURE_REASON_TIMEOUT - There are more routes to try, but the payment timeout was exceeded. */
  FAILURE_REASON_TIMEOUT = 1,
  /**
   * FAILURE_REASON_NO_ROUTE - All possible routes were tried and failed permanently. Or were no
   * routes to the destination at all.
   */
  FAILURE_REASON_NO_ROUTE = 2,
  /** FAILURE_REASON_ERROR - A non-recoverable error has occured. */
  FAILURE_REASON_ERROR = 3,
  /**
   * FAILURE_REASON_INCORRECT_PAYMENT_DETAILS - Payment details incorrect (unknown hash, invalid amt or
   * invalid final cltv delta)
   */
  FAILURE_REASON_INCORRECT_PAYMENT_DETAILS = 4,
  /** FAILURE_REASON_INSUFFICIENT_BALANCE - Insufficient local balance. */
  FAILURE_REASON_INSUFFICIENT_BALANCE = 5,
  UNRECOGNIZED = -1,
}

export function paymentFailureReasonFromJSON(
  object: any,
): PaymentFailureReason {
  switch (object) {
    case 0:
    case 'FAILURE_REASON_NONE':
      return PaymentFailureReason.FAILURE_REASON_NONE;
    case 1:
    case 'FAILURE_REASON_TIMEOUT':
      return PaymentFailureReason.FAILURE_REASON_TIMEOUT;
    case 2:
    case 'FAILURE_REASON_NO_ROUTE':
      return PaymentFailureReason.FAILURE_REASON_NO_ROUTE;
    case 3:
    case 'FAILURE_REASON_ERROR':
      return PaymentFailureReason.FAILURE_REASON_ERROR;
    case 4:
    case 'FAILURE_REASON_INCORRECT_PAYMENT_DETAILS':
      return PaymentFailureReason.FAILURE_REASON_INCORRECT_PAYMENT_DETAILS;
    case 5:
    case 'FAILURE_REASON_INSUFFICIENT_BALANCE':
      return PaymentFailureReason.FAILURE_REASON_INSUFFICIENT_BALANCE;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return PaymentFailureReason.UNRECOGNIZED;
  }
}

export function paymentFailureReasonToJSON(
  object: PaymentFailureReason,
): string {
  switch (object) {
    case PaymentFailureReason.FAILURE_REASON_NONE:
      return 'FAILURE_REASON_NONE';
    case PaymentFailureReason.FAILURE_REASON_TIMEOUT:
      return 'FAILURE_REASON_TIMEOUT';
    case PaymentFailureReason.FAILURE_REASON_NO_ROUTE:
      return 'FAILURE_REASON_NO_ROUTE';
    case PaymentFailureReason.FAILURE_REASON_ERROR:
      return 'FAILURE_REASON_ERROR';
    case PaymentFailureReason.FAILURE_REASON_INCORRECT_PAYMENT_DETAILS:
      return 'FAILURE_REASON_INCORRECT_PAYMENT_DETAILS';
    case PaymentFailureReason.FAILURE_REASON_INSUFFICIENT_BALANCE:
      return 'FAILURE_REASON_INSUFFICIENT_BALANCE';
    default:
      return 'UNKNOWN';
  }
}

export enum FeatureBit {
  DATALOSS_PROTECT_REQ = 0,
  DATALOSS_PROTECT_OPT = 1,
  INITIAL_ROUING_SYNC = 3,
  UPFRONT_SHUTDOWN_SCRIPT_REQ = 4,
  UPFRONT_SHUTDOWN_SCRIPT_OPT = 5,
  GOSSIP_QUERIES_REQ = 6,
  GOSSIP_QUERIES_OPT = 7,
  TLV_ONION_REQ = 8,
  TLV_ONION_OPT = 9,
  EXT_GOSSIP_QUERIES_REQ = 10,
  EXT_GOSSIP_QUERIES_OPT = 11,
  STATIC_REMOTE_KEY_REQ = 12,
  STATIC_REMOTE_KEY_OPT = 13,
  PAYMENT_ADDR_REQ = 14,
  PAYMENT_ADDR_OPT = 15,
  MPP_REQ = 16,
  MPP_OPT = 17,
  WUMBO_CHANNELS_REQ = 18,
  WUMBO_CHANNELS_OPT = 19,
  ANCHORS_REQ = 20,
  ANCHORS_OPT = 21,
  ANCHORS_ZERO_FEE_HTLC_REQ = 22,
  ANCHORS_ZERO_FEE_HTLC_OPT = 23,
  AMP_REQ = 30,
  AMP_OPT = 31,
  UNRECOGNIZED = -1,
}

export function featureBitFromJSON(object: any): FeatureBit {
  switch (object) {
    case 0:
    case 'DATALOSS_PROTECT_REQ':
      return FeatureBit.DATALOSS_PROTECT_REQ;
    case 1:
    case 'DATALOSS_PROTECT_OPT':
      return FeatureBit.DATALOSS_PROTECT_OPT;
    case 3:
    case 'INITIAL_ROUING_SYNC':
      return FeatureBit.INITIAL_ROUING_SYNC;
    case 4:
    case 'UPFRONT_SHUTDOWN_SCRIPT_REQ':
      return FeatureBit.UPFRONT_SHUTDOWN_SCRIPT_REQ;
    case 5:
    case 'UPFRONT_SHUTDOWN_SCRIPT_OPT':
      return FeatureBit.UPFRONT_SHUTDOWN_SCRIPT_OPT;
    case 6:
    case 'GOSSIP_QUERIES_REQ':
      return FeatureBit.GOSSIP_QUERIES_REQ;
    case 7:
    case 'GOSSIP_QUERIES_OPT':
      return FeatureBit.GOSSIP_QUERIES_OPT;
    case 8:
    case 'TLV_ONION_REQ':
      return FeatureBit.TLV_ONION_REQ;
    case 9:
    case 'TLV_ONION_OPT':
      return FeatureBit.TLV_ONION_OPT;
    case 10:
    case 'EXT_GOSSIP_QUERIES_REQ':
      return FeatureBit.EXT_GOSSIP_QUERIES_REQ;
    case 11:
    case 'EXT_GOSSIP_QUERIES_OPT':
      return FeatureBit.EXT_GOSSIP_QUERIES_OPT;
    case 12:
    case 'STATIC_REMOTE_KEY_REQ':
      return FeatureBit.STATIC_REMOTE_KEY_REQ;
    case 13:
    case 'STATIC_REMOTE_KEY_OPT':
      return FeatureBit.STATIC_REMOTE_KEY_OPT;
    case 14:
    case 'PAYMENT_ADDR_REQ':
      return FeatureBit.PAYMENT_ADDR_REQ;
    case 15:
    case 'PAYMENT_ADDR_OPT':
      return FeatureBit.PAYMENT_ADDR_OPT;
    case 16:
    case 'MPP_REQ':
      return FeatureBit.MPP_REQ;
    case 17:
    case 'MPP_OPT':
      return FeatureBit.MPP_OPT;
    case 18:
    case 'WUMBO_CHANNELS_REQ':
      return FeatureBit.WUMBO_CHANNELS_REQ;
    case 19:
    case 'WUMBO_CHANNELS_OPT':
      return FeatureBit.WUMBO_CHANNELS_OPT;
    case 20:
    case 'ANCHORS_REQ':
      return FeatureBit.ANCHORS_REQ;
    case 21:
    case 'ANCHORS_OPT':
      return FeatureBit.ANCHORS_OPT;
    case 22:
    case 'ANCHORS_ZERO_FEE_HTLC_REQ':
      return FeatureBit.ANCHORS_ZERO_FEE_HTLC_REQ;
    case 23:
    case 'ANCHORS_ZERO_FEE_HTLC_OPT':
      return FeatureBit.ANCHORS_ZERO_FEE_HTLC_OPT;
    case 30:
    case 'AMP_REQ':
      return FeatureBit.AMP_REQ;
    case 31:
    case 'AMP_OPT':
      return FeatureBit.AMP_OPT;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return FeatureBit.UNRECOGNIZED;
  }
}

export function featureBitToJSON(object: FeatureBit): string {
  switch (object) {
    case FeatureBit.DATALOSS_PROTECT_REQ:
      return 'DATALOSS_PROTECT_REQ';
    case FeatureBit.DATALOSS_PROTECT_OPT:
      return 'DATALOSS_PROTECT_OPT';
    case FeatureBit.INITIAL_ROUING_SYNC:
      return 'INITIAL_ROUING_SYNC';
    case FeatureBit.UPFRONT_SHUTDOWN_SCRIPT_REQ:
      return 'UPFRONT_SHUTDOWN_SCRIPT_REQ';
    case FeatureBit.UPFRONT_SHUTDOWN_SCRIPT_OPT:
      return 'UPFRONT_SHUTDOWN_SCRIPT_OPT';
    case FeatureBit.GOSSIP_QUERIES_REQ:
      return 'GOSSIP_QUERIES_REQ';
    case FeatureBit.GOSSIP_QUERIES_OPT:
      return 'GOSSIP_QUERIES_OPT';
    case FeatureBit.TLV_ONION_REQ:
      return 'TLV_ONION_REQ';
    case FeatureBit.TLV_ONION_OPT:
      return 'TLV_ONION_OPT';
    case FeatureBit.EXT_GOSSIP_QUERIES_REQ:
      return 'EXT_GOSSIP_QUERIES_REQ';
    case FeatureBit.EXT_GOSSIP_QUERIES_OPT:
      return 'EXT_GOSSIP_QUERIES_OPT';
    case FeatureBit.STATIC_REMOTE_KEY_REQ:
      return 'STATIC_REMOTE_KEY_REQ';
    case FeatureBit.STATIC_REMOTE_KEY_OPT:
      return 'STATIC_REMOTE_KEY_OPT';
    case FeatureBit.PAYMENT_ADDR_REQ:
      return 'PAYMENT_ADDR_REQ';
    case FeatureBit.PAYMENT_ADDR_OPT:
      return 'PAYMENT_ADDR_OPT';
    case FeatureBit.MPP_REQ:
      return 'MPP_REQ';
    case FeatureBit.MPP_OPT:
      return 'MPP_OPT';
    case FeatureBit.WUMBO_CHANNELS_REQ:
      return 'WUMBO_CHANNELS_REQ';
    case FeatureBit.WUMBO_CHANNELS_OPT:
      return 'WUMBO_CHANNELS_OPT';
    case FeatureBit.ANCHORS_REQ:
      return 'ANCHORS_REQ';
    case FeatureBit.ANCHORS_OPT:
      return 'ANCHORS_OPT';
    case FeatureBit.ANCHORS_ZERO_FEE_HTLC_REQ:
      return 'ANCHORS_ZERO_FEE_HTLC_REQ';
    case FeatureBit.ANCHORS_ZERO_FEE_HTLC_OPT:
      return 'ANCHORS_ZERO_FEE_HTLC_OPT';
    case FeatureBit.AMP_REQ:
      return 'AMP_REQ';
    case FeatureBit.AMP_OPT:
      return 'AMP_OPT';
    default:
      return 'UNKNOWN';
  }
}

export enum UpdateFailure {
  UPDATE_FAILURE_UNKNOWN = 0,
  UPDATE_FAILURE_PENDING = 1,
  UPDATE_FAILURE_NOT_FOUND = 2,
  UPDATE_FAILURE_INTERNAL_ERR = 3,
  UPDATE_FAILURE_INVALID_PARAMETER = 4,
  UNRECOGNIZED = -1,
}

export function updateFailureFromJSON(object: any): UpdateFailure {
  switch (object) {
    case 0:
    case 'UPDATE_FAILURE_UNKNOWN':
      return UpdateFailure.UPDATE_FAILURE_UNKNOWN;
    case 1:
    case 'UPDATE_FAILURE_PENDING':
      return UpdateFailure.UPDATE_FAILURE_PENDING;
    case 2:
    case 'UPDATE_FAILURE_NOT_FOUND':
      return UpdateFailure.UPDATE_FAILURE_NOT_FOUND;
    case 3:
    case 'UPDATE_FAILURE_INTERNAL_ERR':
      return UpdateFailure.UPDATE_FAILURE_INTERNAL_ERR;
    case 4:
    case 'UPDATE_FAILURE_INVALID_PARAMETER':
      return UpdateFailure.UPDATE_FAILURE_INVALID_PARAMETER;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return UpdateFailure.UNRECOGNIZED;
  }
}

export function updateFailureToJSON(object: UpdateFailure): string {
  switch (object) {
    case UpdateFailure.UPDATE_FAILURE_UNKNOWN:
      return 'UPDATE_FAILURE_UNKNOWN';
    case UpdateFailure.UPDATE_FAILURE_PENDING:
      return 'UPDATE_FAILURE_PENDING';
    case UpdateFailure.UPDATE_FAILURE_NOT_FOUND:
      return 'UPDATE_FAILURE_NOT_FOUND';
    case UpdateFailure.UPDATE_FAILURE_INTERNAL_ERR:
      return 'UPDATE_FAILURE_INTERNAL_ERR';
    case UpdateFailure.UPDATE_FAILURE_INVALID_PARAMETER:
      return 'UPDATE_FAILURE_INVALID_PARAMETER';
    default:
      return 'UNKNOWN';
  }
}

export interface SubscribeCustomMessagesRequest {}

export interface CustomMessage {
  /** Peer from which the message originates */
  peer: Uint8Array;
  /** Message type. This value will be in the custom range (>= 32768). */
  type: number;
  /** Raw message data */
  data: Uint8Array;
}

export interface SendCustomMessageRequest {
  /** Peer to send the message to */
  peer: Uint8Array;
  /** Message type. This value needs to be in the custom range (>= 32768). */
  type: number;
  /** Raw message data. */
  data: Uint8Array;
}

export interface SendCustomMessageResponse {}

export interface Utxo {
  /** The type of address */
  addressType: AddressType;
  /** The address */
  address: string;
  /** The value of the unspent coin in satoshis */
  amountSat: string;
  /** The pkscript in hex */
  pkScript: string;
  /** The outpoint in format txid:n */
  outpoint: OutPoint | undefined;
  /** The number of confirmations for the Utxo */
  confirmations: string;
}

export interface Transaction {
  /** The transaction hash */
  txHash: string;
  /** The transaction amount, denominated in satoshis */
  amount: string;
  /** The number of confirmations */
  numConfirmations: number;
  /** The hash of the block this transaction was included in */
  blockHash: string;
  /** The height of the block this transaction was included in */
  blockHeight: number;
  /** Timestamp of this transaction */
  timeStamp: string;
  /** Fees paid for this transaction */
  totalFees: string;
  /** Addresses that received funds for this transaction */
  destAddresses: string[];
  /** The raw transaction hex. */
  rawTxHex: string;
  /** A label that was optionally set on transaction broadcast. */
  label: string;
}

export interface GetTransactionsRequest {
  /**
   * The height from which to list transactions, inclusive. If this value is
   * greater than end_height, transactions will be read in reverse.
   */
  startHeight: number;
  /**
   * The height until which to list transactions, inclusive. To include
   * unconfirmed transactions, this value should be set to -1, which will
   * return transactions from start_height until the current chain tip and
   * unconfirmed transactions. If no end_height is provided, the call will
   * default to this option.
   */
  endHeight: number;
  /** An optional filter to only include transactions relevant to an account. */
  account: string;
}

export interface TransactionDetails {
  /** The list of transactions relevant to the wallet. */
  transactions: Transaction[];
}

export interface FeeLimit {
  /**
   * The fee limit expressed as a fixed amount of satoshis.
   *
   * The fields fixed and fixed_msat are mutually exclusive.
   */
  fixed: string | undefined;
  /**
   * The fee limit expressed as a fixed amount of millisatoshis.
   *
   * The fields fixed and fixed_msat are mutually exclusive.
   */
  fixedMsat: string | undefined;
  /** The fee limit expressed as a percentage of the payment amount. */
  percent: string | undefined;
}

export interface SendRequest {
  /**
   * The identity pubkey of the payment recipient. When using REST, this field
   * must be encoded as base64.
   */
  dest: Uint8Array;
  /**
   * The hex-encoded identity pubkey of the payment recipient. Deprecated now
   * that the REST gateway supports base64 encoding of bytes fields.
   *
   * @deprecated
   */
  destString: string;
  /**
   * The amount to send expressed in satoshis.
   *
   * The fields amt and amt_msat are mutually exclusive.
   */
  amt: string;
  /**
   * The amount to send expressed in millisatoshis.
   *
   * The fields amt and amt_msat are mutually exclusive.
   */
  amtMsat: string;
  /**
   * The hash to use within the payment's HTLC. When using REST, this field
   * must be encoded as base64.
   */
  paymentHash: Uint8Array;
  /**
   * The hex-encoded hash to use within the payment's HTLC. Deprecated now
   * that the REST gateway supports base64 encoding of bytes fields.
   *
   * @deprecated
   */
  paymentHashString: string;
  /**
   * A bare-bones invoice for a payment within the Lightning Network. With the
   * details of the invoice, the sender has all the data necessary to send a
   * payment to the recipient.
   */
  paymentRequest: string;
  /**
   * The CLTV delta from the current height that should be used to set the
   * timelock for the final hop.
   */
  finalCltvDelta: number;
  /**
   * The maximum number of satoshis that will be paid as a fee of the payment.
   * This value can be represented either as a percentage of the amount being
   * sent, or as a fixed amount of the maximum fee the user is willing the pay to
   * send the payment.
   */
  feeLimit: FeeLimit | undefined;
  /**
   * The channel id of the channel that must be taken to the first hop. If zero,
   * any channel may be used.
   */
  outgoingChanId: string;
  /** The pubkey of the last hop of the route. If empty, any hop may be used. */
  lastHopPubkey: Uint8Array;
  /**
   * An optional maximum total time lock for the route. This should not exceed
   * lnd's `--max-cltv-expiry` setting. If zero, then the value of
   * `--max-cltv-expiry` is enforced.
   */
  cltvLimit: number;
  /**
   * An optional field that can be used to pass an arbitrary set of TLV records
   * to a peer which understands the new records. This can be used to pass
   * application specific data during the payment attempt. Record types are
   * required to be in the custom range >= 65536. When using REST, the values
   * must be encoded as base64.
   */
  destCustomRecords: Record<string, Uint8Array>;
  /** If set, circular payments to self are permitted. */
  allowSelfPayment: boolean;
  /**
   * Features assumed to be supported by the final node. All transitive feature
   * dependencies must also be set properly. For a given feature bit pair, either
   * optional or remote may be set, but not both. If this field is nil or empty,
   * the router will try to load destination features from the graph as a
   * fallback.
   */
  destFeatures: FeatureBit[];
  /** The payment address of the generated invoice. */
  paymentAddr: Uint8Array;
}

export interface SendRequest_DestCustomRecordsEntry {
  key: string;
  value: Uint8Array;
}

export interface SendResponse {
  paymentError: string;
  paymentPreimage: Uint8Array;
  paymentRoute: Route | undefined;
  paymentHash: Uint8Array;
}

export interface SendToRouteRequest {
  /**
   * The payment hash to use for the HTLC. When using REST, this field must be
   * encoded as base64.
   */
  paymentHash: Uint8Array;
  /**
   * An optional hex-encoded payment hash to be used for the HTLC. Deprecated now
   * that the REST gateway supports base64 encoding of bytes fields.
   *
   * @deprecated
   */
  paymentHashString: string;
  /** Route that should be used to attempt to complete the payment. */
  route: Route | undefined;
}

export interface ChannelAcceptRequest {
  /** The pubkey of the node that wishes to open an inbound channel. */
  nodePubkey: Uint8Array;
  /** The hash of the genesis block that the proposed channel resides in. */
  chainHash: Uint8Array;
  /** The pending channel id. */
  pendingChanId: Uint8Array;
  /**
   * The funding amount in satoshis that initiator wishes to use in the
   * channel.
   */
  fundingAmt: string;
  /** The push amount of the proposed channel in millisatoshis. */
  pushAmt: string;
  /** The dust limit of the initiator's commitment tx. */
  dustLimit: string;
  /**
   * The maximum amount of coins in millisatoshis that can be pending in this
   * channel.
   */
  maxValueInFlight: string;
  /**
   * The minimum amount of satoshis the initiator requires us to have at all
   * times.
   */
  channelReserve: string;
  /** The smallest HTLC in millisatoshis that the initiator will accept. */
  minHtlc: string;
  /**
   * The initial fee rate that the initiator suggests for both commitment
   * transactions.
   */
  feePerKw: string;
  /**
   * The number of blocks to use for the relative time lock in the pay-to-self
   * output of both commitment transactions.
   */
  csvDelay: number;
  /** The total number of incoming HTLC's that the initiator will accept. */
  maxAcceptedHtlcs: number;
  /**
   * A bit-field which the initiator uses to specify proposed channel
   * behavior.
   */
  channelFlags: number;
  /** The commitment type the initiator wishes to use for the proposed channel. */
  commitmentType: CommitmentType;
}

export interface ChannelAcceptResponse {
  /** Whether or not the client accepts the channel. */
  accept: boolean;
  /** The pending channel id to which this response applies. */
  pendingChanId: Uint8Array;
  /**
   * An optional error to send the initiating party to indicate why the channel
   * was rejected. This field *should not* contain sensitive information, it will
   * be sent to the initiating party. This field should only be set if accept is
   * false, the channel will be rejected if an error is set with accept=true
   * because the meaning of this response is ambiguous. Limited to 500
   * characters.
   */
  error: string;
  /**
   * The upfront shutdown address to use if the initiating peer supports option
   * upfront shutdown script (see ListPeers for the features supported). Note
   * that the channel open will fail if this value is set for a peer that does
   * not support this feature bit.
   */
  upfrontShutdown: string;
  /** The csv delay (in blocks) that we require for the remote party. */
  csvDelay: number;
  /**
   * The reserve amount in satoshis that we require the remote peer to adhere to.
   * We require that the remote peer always have some reserve amount allocated to
   * them so that there is always a disincentive to broadcast old state (if they
   * hold 0 sats on their side of the channel, there is nothing to lose).
   */
  reserveSat: string;
  /**
   * The maximum amount of funds in millisatoshis that we allow the remote peer
   * to have in outstanding htlcs.
   */
  inFlightMaxMsat: string;
  /** The maximum number of htlcs that the remote peer can offer us. */
  maxHtlcCount: number;
  /** The minimum value in millisatoshis for incoming htlcs on the channel. */
  minHtlcIn: string;
  /** The number of confirmations we require before we consider the channel open. */
  minAcceptDepth: number;
}

export interface ChannelPoint {
  /**
   * Txid of the funding transaction. When using REST, this field must be
   * encoded as base64.
   */
  fundingTxidBytes: Uint8Array | undefined;
  /**
   * Hex-encoded string representing the byte-reversed hash of the funding
   * transaction.
   */
  fundingTxidStr: string | undefined;
  /** The index of the output of the funding transaction */
  outputIndex: number;
}

export interface OutPoint {
  /** Raw bytes representing the transaction id. */
  txidBytes: Uint8Array;
  /** Reversed, hex-encoded string representing the transaction id. */
  txidStr: string;
  /** The index of the output on the transaction. */
  outputIndex: number;
}

export interface LightningAddress {
  /** The identity pubkey of the Lightning node */
  pubkey: string;
  /**
   * The network location of the lightning node, e.g. `69.69.69.69:1337` or
   * `localhost:10011`
   */
  host: string;
}

export interface EstimateFeeRequest {
  /** The map from addresses to amounts for the transaction. */
  AddrToAmount: Record<string, string>;
  /**
   * The target number of blocks that this transaction should be confirmed
   * by.
   */
  targetConf: number;
  /**
   * The minimum number of confirmations each one of your outputs used for
   * the transaction must satisfy.
   */
  minConfs: number;
  /** Whether unconfirmed outputs should be used as inputs for the transaction. */
  spendUnconfirmed: boolean;
}

export interface EstimateFeeRequest_AddrToAmountEntry {
  key: string;
  value: string;
}

export interface EstimateFeeResponse {
  /** The total fee in satoshis. */
  feeSat: string;
  /**
   * Deprecated, use sat_per_vbyte.
   * The fee rate in satoshi/vbyte.
   *
   * @deprecated
   */
  feerateSatPerByte: string;
  /** The fee rate in satoshi/vbyte. */
  satPerVbyte: string;
}

export interface SendManyRequest {
  /** The map from addresses to amounts */
  AddrToAmount: Record<string, string>;
  /**
   * The target number of blocks that this transaction should be confirmed
   * by.
   */
  targetConf: number;
  /**
   * A manual fee rate set in sat/vbyte that should be used when crafting the
   * transaction.
   */
  satPerVbyte: string;
  /**
   * Deprecated, use sat_per_vbyte.
   * A manual fee rate set in sat/vbyte that should be used when crafting the
   * transaction.
   *
   * @deprecated
   */
  satPerByte: string;
  /** An optional label for the transaction, limited to 500 characters. */
  label: string;
  /**
   * The minimum number of confirmations each one of your outputs used for
   * the transaction must satisfy.
   */
  minConfs: number;
  /** Whether unconfirmed outputs should be used as inputs for the transaction. */
  spendUnconfirmed: boolean;
}

export interface SendManyRequest_AddrToAmountEntry {
  key: string;
  value: string;
}

export interface SendManyResponse {
  /** The id of the transaction */
  txid: string;
}

export interface SendCoinsRequest {
  /** The address to send coins to */
  addr: string;
  /** The amount in satoshis to send */
  amount: string;
  /**
   * The target number of blocks that this transaction should be confirmed
   * by.
   */
  targetConf: number;
  /**
   * A manual fee rate set in sat/vbyte that should be used when crafting the
   * transaction.
   */
  satPerVbyte: string;
  /**
   * Deprecated, use sat_per_vbyte.
   * A manual fee rate set in sat/vbyte that should be used when crafting the
   * transaction.
   *
   * @deprecated
   */
  satPerByte: string;
  /**
   * If set, then the amount field will be ignored, and lnd will attempt to
   * send all the coins under control of the internal wallet to the specified
   * address.
   */
  sendAll: boolean;
  /** An optional label for the transaction, limited to 500 characters. */
  label: string;
  /**
   * The minimum number of confirmations each one of your outputs used for
   * the transaction must satisfy.
   */
  minConfs: number;
  /** Whether unconfirmed outputs should be used as inputs for the transaction. */
  spendUnconfirmed: boolean;
}

export interface SendCoinsResponse {
  /** The transaction ID of the transaction */
  txid: string;
}

export interface ListUnspentRequest {
  /** The minimum number of confirmations to be included. */
  minConfs: number;
  /** The maximum number of confirmations to be included. */
  maxConfs: number;
  /** An optional filter to only include outputs belonging to an account. */
  account: string;
}

export interface ListUnspentResponse {
  /** A list of utxos */
  utxos: Utxo[];
}

export interface NewAddressRequest {
  /** The type of address to generate. */
  type: AddressType;
  /**
   * The name of the account to generate a new address for. If empty, the
   * default wallet account is used.
   */
  account: string;
}

export interface NewAddressResponse {
  /** The newly generated wallet address */
  address: string;
}

export interface SignMessageRequest {
  /**
   * The message to be signed. When using REST, this field must be encoded as
   * base64.
   */
  msg: Uint8Array;
  /**
   * Instead of the default double-SHA256 hashing of the message before signing,
   * only use one round of hashing instead.
   */
  singleHash: boolean;
}

export interface SignMessageResponse {
  /** The signature for the given message */
  signature: string;
}

export interface VerifyMessageRequest {
  /**
   * The message over which the signature is to be verified. When using REST,
   * this field must be encoded as base64.
   */
  msg: Uint8Array;
  /** The signature to be verified over the given message */
  signature: string;
}

export interface VerifyMessageResponse {
  /** Whether the signature was valid over the given message */
  valid: boolean;
  /** The pubkey recovered from the signature */
  pubkey: string;
}

export interface ConnectPeerRequest {
  /** Lightning address of the peer, in the format `<pubkey>@host` */
  addr: LightningAddress | undefined;
  /**
   * If set, the daemon will attempt to persistently connect to the target
   * peer. Otherwise, the call will be synchronous.
   */
  perm: boolean;
  /**
   * The connection timeout value (in seconds) for this request. It won't affect
   * other requests.
   */
  timeout: string;
}

export interface ConnectPeerResponse {}

export interface DisconnectPeerRequest {
  /** The pubkey of the node to disconnect from */
  pubKey: string;
}

export interface DisconnectPeerResponse {}

export interface HTLC {
  incoming: boolean;
  amount: string;
  hashLock: Uint8Array;
  expirationHeight: number;
  /** Index identifying the htlc on the channel. */
  htlcIndex: string;
  /**
   * If this HTLC is involved in a forwarding operation, this field indicates
   * the forwarding channel. For an outgoing htlc, it is the incoming channel.
   * For an incoming htlc, it is the outgoing channel. When the htlc
   * originates from this node or this node is the final destination,
   * forwarding_channel will be zero. The forwarding channel will also be zero
   * for htlcs that need to be forwarded but don't have a forwarding decision
   * persisted yet.
   */
  forwardingChannel: string;
  /** Index identifying the htlc on the forwarding channel. */
  forwardingHtlcIndex: string;
}

export interface ChannelConstraints {
  /**
   * The CSV delay expressed in relative blocks. If the channel is force closed,
   * we will need to wait for this many blocks before we can regain our funds.
   */
  csvDelay: number;
  /** The minimum satoshis this node is required to reserve in its balance. */
  chanReserveSat: string;
  /** The dust limit (in satoshis) of the initiator's commitment tx. */
  dustLimitSat: string;
  /**
   * The maximum amount of coins in millisatoshis that can be pending in this
   * channel.
   */
  maxPendingAmtMsat: string;
  /** The smallest HTLC in millisatoshis that the initiator will accept. */
  minHtlcMsat: string;
  /** The total number of incoming HTLC's that the initiator will accept. */
  maxAcceptedHtlcs: number;
}

export interface Channel {
  /** Whether this channel is active or not */
  active: boolean;
  /** The identity pubkey of the remote node */
  remotePubkey: string;
  /**
   * The outpoint (txid:index) of the funding transaction. With this value, Bob
   * will be able to generate a signature for Alice's version of the commitment
   * transaction.
   */
  channelPoint: string;
  /**
   * The unique channel ID for the channel. The first 3 bytes are the block
   * height, the next 3 the index within the block, and the last 2 bytes are the
   * output index for the channel.
   */
  chanId: string;
  /** The total amount of funds held in this channel */
  capacity: string;
  /** This node's current balance in this channel */
  localBalance: string;
  /** The counterparty's current balance in this channel */
  remoteBalance: string;
  /**
   * The amount calculated to be paid in fees for the current set of commitment
   * transactions. The fee amount is persisted with the channel in order to
   * allow the fee amount to be removed and recalculated with each channel state
   * update, including updates that happen after a system restart.
   */
  commitFee: string;
  /** The weight of the commitment transaction */
  commitWeight: string;
  /**
   * The required number of satoshis per kilo-weight that the requester will pay
   * at all times, for both the funding transaction and commitment transaction.
   * This value can later be updated once the channel is open.
   */
  feePerKw: string;
  /** The unsettled balance in this channel */
  unsettledBalance: string;
  /** The total number of satoshis we've sent within this channel. */
  totalSatoshisSent: string;
  /** The total number of satoshis we've received within this channel. */
  totalSatoshisReceived: string;
  /** The total number of updates conducted within this channel. */
  numUpdates: string;
  /** The list of active, uncleared HTLCs currently pending within the channel. */
  pendingHtlcs: HTLC[];
  /**
   * Deprecated. The CSV delay expressed in relative blocks. If the channel is
   * force closed, we will need to wait for this many blocks before we can regain
   * our funds.
   *
   * @deprecated
   */
  csvDelay: number;
  /** Whether this channel is advertised to the network or not. */
  private: boolean;
  /** True if we were the ones that created the channel. */
  initiator: boolean;
  /** A set of flags showing the current state of the channel. */
  chanStatusFlags: string;
  /**
   * Deprecated. The minimum satoshis this node is required to reserve in its
   * balance.
   *
   * @deprecated
   */
  localChanReserveSat: string;
  /**
   * Deprecated. The minimum satoshis the other node is required to reserve in
   * its balance.
   *
   * @deprecated
   */
  remoteChanReserveSat: string;
  /**
   * Deprecated. Use commitment_type.
   *
   * @deprecated
   */
  staticRemoteKey: boolean;
  /** The commitment type used by this channel. */
  commitmentType: CommitmentType;
  /**
   * The number of seconds that the channel has been monitored by the channel
   * scoring system. Scores are currently not persisted, so this value may be
   * less than the lifetime of the channel [EXPERIMENTAL].
   */
  lifetime: string;
  /**
   * The number of seconds that the remote peer has been observed as being online
   * by the channel scoring system over the lifetime of the channel
   * [EXPERIMENTAL].
   */
  uptime: string;
  /**
   * Close address is the address that we will enforce payout to on cooperative
   * close if the channel was opened utilizing option upfront shutdown. This
   * value can be set on channel open by setting close_address in an open channel
   * request. If this value is not set, you can still choose a payout address by
   * cooperatively closing with the delivery_address field set.
   */
  closeAddress: string;
  /**
   * The amount that the initiator of the channel optionally pushed to the remote
   * party on channel open. This amount will be zero if the channel initiator did
   * not push any funds to the remote peer. If the initiator field is true, we
   * pushed this amount to our peer, if it is false, the remote peer pushed this
   * amount to us.
   */
  pushAmountSat: string;
  /**
   * This uint32 indicates if this channel is to be considered 'frozen'. A
   * frozen channel doest not allow a cooperative channel close by the
   * initiator. The thaw_height is the height that this restriction stops
   * applying to the channel. This field is optional, not setting it or using a
   * value of zero will mean the channel has no additional restrictions. The
   * height can be interpreted in two ways: as a relative height if the value is
   * less than 500,000, or as an absolute height otherwise.
   */
  thawHeight: number;
  /** List constraints for the local node. */
  localConstraints: ChannelConstraints | undefined;
  /** List constraints for the remote node. */
  remoteConstraints: ChannelConstraints | undefined;
}

export interface ListChannelsRequest {
  activeOnly: boolean;
  inactiveOnly: boolean;
  publicOnly: boolean;
  privateOnly: boolean;
  /**
   * Filters the response for channels with a target peer's pubkey. If peer is
   * empty, all channels will be returned.
   */
  peer: Uint8Array;
}

export interface ListChannelsResponse {
  /** The list of active channels */
  channels: Channel[];
}

export interface ChannelCloseSummary {
  /** The outpoint (txid:index) of the funding transaction. */
  channelPoint: string;
  /** The unique channel ID for the channel. */
  chanId: string;
  /** The hash of the genesis block that this channel resides within. */
  chainHash: string;
  /** The txid of the transaction which ultimately closed this channel. */
  closingTxHash: string;
  /** Public key of the remote peer that we formerly had a channel with. */
  remotePubkey: string;
  /** Total capacity of the channel. */
  capacity: string;
  /** Height at which the funding transaction was spent. */
  closeHeight: number;
  /** Settled balance at the time of channel closure */
  settledBalance: string;
  /** The sum of all the time-locked outputs at the time of channel closure */
  timeLockedBalance: string;
  /** Details on how the channel was closed. */
  closeType: ChannelCloseSummary_ClosureType;
  /**
   * Open initiator is the party that initiated opening the channel. Note that
   * this value may be unknown if the channel was closed before we migrated to
   * store open channel information after close.
   */
  openInitiator: Initiator;
  /**
   * Close initiator indicates which party initiated the close. This value will
   * be unknown for channels that were cooperatively closed before we started
   * tracking cooperative close initiators. Note that this indicates which party
   * initiated a close, and it is possible for both to initiate cooperative or
   * force closes, although only one party's close will be confirmed on chain.
   */
  closeInitiator: Initiator;
  resolutions: Resolution[];
}

export enum ChannelCloseSummary_ClosureType {
  COOPERATIVE_CLOSE = 0,
  LOCAL_FORCE_CLOSE = 1,
  REMOTE_FORCE_CLOSE = 2,
  BREACH_CLOSE = 3,
  FUNDING_CANCELED = 4,
  ABANDONED = 5,
  UNRECOGNIZED = -1,
}

export function channelCloseSummary_ClosureTypeFromJSON(
  object: any,
): ChannelCloseSummary_ClosureType {
  switch (object) {
    case 0:
    case 'COOPERATIVE_CLOSE':
      return ChannelCloseSummary_ClosureType.COOPERATIVE_CLOSE;
    case 1:
    case 'LOCAL_FORCE_CLOSE':
      return ChannelCloseSummary_ClosureType.LOCAL_FORCE_CLOSE;
    case 2:
    case 'REMOTE_FORCE_CLOSE':
      return ChannelCloseSummary_ClosureType.REMOTE_FORCE_CLOSE;
    case 3:
    case 'BREACH_CLOSE':
      return ChannelCloseSummary_ClosureType.BREACH_CLOSE;
    case 4:
    case 'FUNDING_CANCELED':
      return ChannelCloseSummary_ClosureType.FUNDING_CANCELED;
    case 5:
    case 'ABANDONED':
      return ChannelCloseSummary_ClosureType.ABANDONED;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return ChannelCloseSummary_ClosureType.UNRECOGNIZED;
  }
}

export function channelCloseSummary_ClosureTypeToJSON(
  object: ChannelCloseSummary_ClosureType,
): string {
  switch (object) {
    case ChannelCloseSummary_ClosureType.COOPERATIVE_CLOSE:
      return 'COOPERATIVE_CLOSE';
    case ChannelCloseSummary_ClosureType.LOCAL_FORCE_CLOSE:
      return 'LOCAL_FORCE_CLOSE';
    case ChannelCloseSummary_ClosureType.REMOTE_FORCE_CLOSE:
      return 'REMOTE_FORCE_CLOSE';
    case ChannelCloseSummary_ClosureType.BREACH_CLOSE:
      return 'BREACH_CLOSE';
    case ChannelCloseSummary_ClosureType.FUNDING_CANCELED:
      return 'FUNDING_CANCELED';
    case ChannelCloseSummary_ClosureType.ABANDONED:
      return 'ABANDONED';
    default:
      return 'UNKNOWN';
  }
}

export interface Resolution {
  /** The type of output we are resolving. */
  resolutionType: ResolutionType;
  /** The outcome of our on chain action that resolved the outpoint. */
  outcome: ResolutionOutcome;
  /** The outpoint that was spent by the resolution. */
  outpoint: OutPoint | undefined;
  /** The amount that was claimed by the resolution. */
  amountSat: string;
  /**
   * The hex-encoded transaction ID of the sweep transaction that spent the
   * output.
   */
  sweepTxid: string;
}

export interface ClosedChannelsRequest {
  cooperative: boolean;
  localForce: boolean;
  remoteForce: boolean;
  breach: boolean;
  fundingCanceled: boolean;
  abandoned: boolean;
}

export interface ClosedChannelsResponse {
  channels: ChannelCloseSummary[];
}

export interface Peer {
  /** The identity pubkey of the peer */
  pubKey: string;
  /** Network address of the peer; eg `127.0.0.1:10011` */
  address: string;
  /** Bytes of data transmitted to this peer */
  bytesSent: string;
  /** Bytes of data transmitted from this peer */
  bytesRecv: string;
  /** Satoshis sent to this peer */
  satSent: string;
  /** Satoshis received from this peer */
  satRecv: string;
  /** A channel is inbound if the counterparty initiated the channel */
  inbound: boolean;
  /** Ping time to this peer */
  pingTime: string;
  /** The type of sync we are currently performing with this peer. */
  syncType: Peer_SyncType;
  /** Features advertised by the remote peer in their init message. */
  features: Record<number, Feature>;
  /**
   * The latest errors received from our peer with timestamps, limited to the 10
   * most recent errors. These errors are tracked across peer connections, but
   * are not persisted across lnd restarts. Note that these errors are only
   * stored for peers that we have channels open with, to prevent peers from
   * spamming us with errors at no cost.
   */
  errors: TimestampedError[];
  /**
   * The number of times we have recorded this peer going offline or coming
   * online, recorded across restarts. Note that this value is decreased over
   * time if the peer has not recently flapped, so that we can forgive peers
   * with historically high flap counts.
   */
  flapCount: number;
  /**
   * The timestamp of the last flap we observed for this peer. If this value is
   * zero, we have not observed any flaps for this peer.
   */
  lastFlapNs: string;
  /** The last ping payload the peer has sent to us. */
  lastPingPayload: Uint8Array;
}

export enum Peer_SyncType {
  /** UNKNOWN_SYNC - Denotes that we cannot determine the peer's current sync type. */
  UNKNOWN_SYNC = 0,
  /** ACTIVE_SYNC - Denotes that we are actively receiving new graph updates from the peer. */
  ACTIVE_SYNC = 1,
  /** PASSIVE_SYNC - Denotes that we are not receiving new graph updates from the peer. */
  PASSIVE_SYNC = 2,
  /** PINNED_SYNC - Denotes that this peer is pinned into an active sync. */
  PINNED_SYNC = 3,
  UNRECOGNIZED = -1,
}

export function peer_SyncTypeFromJSON(object: any): Peer_SyncType {
  switch (object) {
    case 0:
    case 'UNKNOWN_SYNC':
      return Peer_SyncType.UNKNOWN_SYNC;
    case 1:
    case 'ACTIVE_SYNC':
      return Peer_SyncType.ACTIVE_SYNC;
    case 2:
    case 'PASSIVE_SYNC':
      return Peer_SyncType.PASSIVE_SYNC;
    case 3:
    case 'PINNED_SYNC':
      return Peer_SyncType.PINNED_SYNC;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Peer_SyncType.UNRECOGNIZED;
  }
}

export function peer_SyncTypeToJSON(object: Peer_SyncType): string {
  switch (object) {
    case Peer_SyncType.UNKNOWN_SYNC:
      return 'UNKNOWN_SYNC';
    case Peer_SyncType.ACTIVE_SYNC:
      return 'ACTIVE_SYNC';
    case Peer_SyncType.PASSIVE_SYNC:
      return 'PASSIVE_SYNC';
    case Peer_SyncType.PINNED_SYNC:
      return 'PINNED_SYNC';
    default:
      return 'UNKNOWN';
  }
}

export interface Peer_FeaturesEntry {
  key: number;
  value: Feature | undefined;
}

export interface TimestampedError {
  /** The unix timestamp in seconds when the error occurred. */
  timestamp: string;
  /** The string representation of the error sent by our peer. */
  error: string;
}

export interface ListPeersRequest {
  /**
   * If true, only the last error that our peer sent us will be returned with
   * the peer's information, rather than the full set of historic errors we have
   * stored.
   */
  latestError: boolean;
}

export interface ListPeersResponse {
  /** The list of currently connected peers */
  peers: Peer[];
}

export interface PeerEventSubscription {}

export interface PeerEvent {
  /** The identity pubkey of the peer. */
  pubKey: string;
  type: PeerEvent_EventType;
}

export enum PeerEvent_EventType {
  PEER_ONLINE = 0,
  PEER_OFFLINE = 1,
  UNRECOGNIZED = -1,
}

export function peerEvent_EventTypeFromJSON(object: any): PeerEvent_EventType {
  switch (object) {
    case 0:
    case 'PEER_ONLINE':
      return PeerEvent_EventType.PEER_ONLINE;
    case 1:
    case 'PEER_OFFLINE':
      return PeerEvent_EventType.PEER_OFFLINE;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return PeerEvent_EventType.UNRECOGNIZED;
  }
}

export function peerEvent_EventTypeToJSON(object: PeerEvent_EventType): string {
  switch (object) {
    case PeerEvent_EventType.PEER_ONLINE:
      return 'PEER_ONLINE';
    case PeerEvent_EventType.PEER_OFFLINE:
      return 'PEER_OFFLINE';
    default:
      return 'UNKNOWN';
  }
}

export interface GetInfoRequest {}

export interface GetInfoResponse {
  /** The version of the LND software that the node is running. */
  version: string;
  /** The SHA1 commit hash that the daemon is compiled with. */
  commitHash: string;
  /** The identity pubkey of the current node. */
  identityPubkey: string;
  /** If applicable, the alias of the current node, e.g. "bob" */
  alias: string;
  /** The color of the current node in hex code format */
  color: string;
  /** Number of pending channels */
  numPendingChannels: number;
  /** Number of active channels */
  numActiveChannels: number;
  /** Number of inactive channels */
  numInactiveChannels: number;
  /** Number of peers */
  numPeers: number;
  /** The node's current view of the height of the best block */
  blockHeight: number;
  /** The node's current view of the hash of the best block */
  blockHash: string;
  /** Timestamp of the block best known to the wallet */
  bestHeaderTimestamp: string;
  /** Whether the wallet's view is synced to the main chain */
  syncedToChain: boolean;
  /** Whether we consider ourselves synced with the public channel graph. */
  syncedToGraph: boolean;
  /**
   * Whether the current node is connected to testnet. This field is
   * deprecated and the network field should be used instead
   *
   * @deprecated
   */
  testnet: boolean;
  /** A list of active chains the node is connected to */
  chains: Chain[];
  /** The URIs of the current node. */
  uris: string[];
  /**
   * Features that our node has advertised in our init message, node
   * announcements and invoices.
   */
  features: Record<number, Feature>;
}

export interface GetInfoResponse_FeaturesEntry {
  key: number;
  value: Feature | undefined;
}

export interface GetRecoveryInfoRequest {}

export interface GetRecoveryInfoResponse {
  /** Whether the wallet is in recovery mode */
  recoveryMode: boolean;
  /** Whether the wallet recovery progress is finished */
  recoveryFinished: boolean;
  /** The recovery progress, ranging from 0 to 1. */
  progress: number;
}

export interface Chain {
  /** The blockchain the node is on (eg bitcoin, litecoin) */
  chain: string;
  /** The network the node is on (eg regtest, testnet, mainnet) */
  network: string;
}

export interface ConfirmationUpdate {
  blockSha: Uint8Array;
  blockHeight: number;
  numConfsLeft: number;
}

export interface ChannelOpenUpdate {
  channelPoint: ChannelPoint | undefined;
}

export interface ChannelCloseUpdate {
  closingTxid: Uint8Array;
  success: boolean;
}

export interface CloseChannelRequest {
  /**
   * The outpoint (txid:index) of the funding transaction. With this value, Bob
   * will be able to generate a signature for Alice's version of the commitment
   * transaction.
   */
  channelPoint: ChannelPoint | undefined;
  /**
   * If true, then the channel will be closed forcibly. This means the
   * current commitment transaction will be signed and broadcast.
   */
  force: boolean;
  /**
   * The target number of blocks that the closure transaction should be
   * confirmed by.
   */
  targetConf: number;
  /**
   * Deprecated, use sat_per_vbyte.
   * A manual fee rate set in sat/vbyte that should be used when crafting the
   * closure transaction.
   *
   * @deprecated
   */
  satPerByte: string;
  /**
   * An optional address to send funds to in the case of a cooperative close.
   * If the channel was opened with an upfront shutdown script and this field
   * is set, the request to close will fail because the channel must pay out
   * to the upfront shutdown addresss.
   */
  deliveryAddress: string;
  /**
   * A manual fee rate set in sat/vbyte that should be used when crafting the
   * closure transaction.
   */
  satPerVbyte: string;
}

export interface CloseStatusUpdate {
  closePending: PendingUpdate | undefined;
  chanClose: ChannelCloseUpdate | undefined;
}

export interface PendingUpdate {
  txid: Uint8Array;
  outputIndex: number;
}

export interface ReadyForPsbtFunding {
  /**
   * The P2WSH address of the channel funding multisig address that the below
   * specified amount in satoshis needs to be sent to.
   */
  fundingAddress: string;
  /**
   * The exact amount in satoshis that needs to be sent to the above address to
   * fund the pending channel.
   */
  fundingAmount: string;
  /**
   * A raw PSBT that contains the pending channel output. If a base PSBT was
   * provided in the PsbtShim, this is the base PSBT with one additional output.
   * If no base PSBT was specified, this is an otherwise empty PSBT with exactly
   * one output.
   */
  psbt: Uint8Array;
}

export interface BatchOpenChannelRequest {
  /** The list of channels to open. */
  channels: BatchOpenChannel[];
  /**
   * The target number of blocks that the funding transaction should be
   * confirmed by.
   */
  targetConf: number;
  /**
   * A manual fee rate set in sat/vByte that should be used when crafting the
   * funding transaction.
   */
  satPerVbyte: string;
  /**
   * The minimum number of confirmations each one of your outputs used for
   * the funding transaction must satisfy.
   */
  minConfs: number;
  /**
   * Whether unconfirmed outputs should be used as inputs for the funding
   * transaction.
   */
  spendUnconfirmed: boolean;
  /** An optional label for the batch transaction, limited to 500 characters. */
  label: string;
}

export interface BatchOpenChannel {
  /**
   * The pubkey of the node to open a channel with. When using REST, this
   * field must be encoded as base64.
   */
  nodePubkey: Uint8Array;
  /** The number of satoshis the wallet should commit to the channel. */
  localFundingAmount: string;
  /**
   * The number of satoshis to push to the remote side as part of the initial
   * commitment state.
   */
  pushSat: string;
  /**
   * Whether this channel should be private, not announced to the greater
   * network.
   */
  private: boolean;
  /**
   * The minimum value in millisatoshi we will require for incoming HTLCs on
   * the channel.
   */
  minHtlcMsat: string;
  /**
   * The delay we require on the remote's commitment transaction. If this is
   * not set, it will be scaled automatically with the channel size.
   */
  remoteCsvDelay: number;
  /**
   * Close address is an optional address which specifies the address to which
   * funds should be paid out to upon cooperative close. This field may only be
   * set if the peer supports the option upfront feature bit (call listpeers
   * to check). The remote peer will only accept cooperative closes to this
   * address if it is set.
   *
   * Note: If this value is set on channel creation, you will *not* be able to
   * cooperatively close out to a different address.
   */
  closeAddress: string;
  /**
   * An optional, unique identifier of 32 random bytes that will be used as the
   * pending channel ID to identify the channel while it is in the pre-pending
   * state.
   */
  pendingChanId: Uint8Array;
  /**
   * The explicit commitment type to use. Note this field will only be used if
   * the remote peer supports explicit channel negotiation.
   */
  commitmentType: CommitmentType;
}

export interface BatchOpenChannelResponse {
  pendingChannels: PendingUpdate[];
}

export interface OpenChannelRequest {
  /**
   * A manual fee rate set in sat/vbyte that should be used when crafting the
   * funding transaction.
   */
  satPerVbyte: string;
  /**
   * The pubkey of the node to open a channel with. When using REST, this field
   * must be encoded as base64.
   */
  nodePubkey: Uint8Array;
  /**
   * The hex encoded pubkey of the node to open a channel with. Deprecated now
   * that the REST gateway supports base64 encoding of bytes fields.
   *
   * @deprecated
   */
  nodePubkeyString: string;
  /** The number of satoshis the wallet should commit to the channel */
  localFundingAmount: string;
  /**
   * The number of satoshis to push to the remote side as part of the initial
   * commitment state
   */
  pushSat: string;
  /**
   * The target number of blocks that the funding transaction should be
   * confirmed by.
   */
  targetConf: number;
  /**
   * Deprecated, use sat_per_vbyte.
   * A manual fee rate set in sat/vbyte that should be used when crafting the
   * funding transaction.
   *
   * @deprecated
   */
  satPerByte: string;
  /**
   * Whether this channel should be private, not announced to the greater
   * network.
   */
  private: boolean;
  /**
   * The minimum value in millisatoshi we will require for incoming HTLCs on
   * the channel.
   */
  minHtlcMsat: string;
  /**
   * The delay we require on the remote's commitment transaction. If this is
   * not set, it will be scaled automatically with the channel size.
   */
  remoteCsvDelay: number;
  /**
   * The minimum number of confirmations each one of your outputs used for
   * the funding transaction must satisfy.
   */
  minConfs: number;
  /**
   * Whether unconfirmed outputs should be used as inputs for the funding
   * transaction.
   */
  spendUnconfirmed: boolean;
  /**
   * Close address is an optional address which specifies the address to which
   * funds should be paid out to upon cooperative close. This field may only be
   * set if the peer supports the option upfront feature bit (call listpeers
   * to check). The remote peer will only accept cooperative closes to this
   * address if it is set.
   *
   * Note: If this value is set on channel creation, you will *not* be able to
   * cooperatively close out to a different address.
   */
  closeAddress: string;
  /**
   * Funding shims are an optional argument that allow the caller to intercept
   * certain funding functionality. For example, a shim can be provided to use a
   * particular key for the commitment key (ideally cold) rather than use one
   * that is generated by the wallet as normal, or signal that signing will be
   * carried out in an interactive manner (PSBT based).
   */
  fundingShim: FundingShim | undefined;
  /**
   * The maximum amount of coins in millisatoshi that can be pending within
   * the channel. It only applies to the remote party.
   */
  remoteMaxValueInFlightMsat: string;
  /**
   * The maximum number of concurrent HTLCs we will allow the remote party to add
   * to the commitment transaction.
   */
  remoteMaxHtlcs: number;
  /**
   * Max local csv is the maximum csv delay we will allow for our own commitment
   * transaction.
   */
  maxLocalCsv: number;
  /**
   * The explicit commitment type to use. Note this field will only be used if
   * the remote peer supports explicit channel negotiation.
   */
  commitmentType: CommitmentType;
}

export interface OpenStatusUpdate {
  /**
   * Signals that the channel is now fully negotiated and the funding
   * transaction published.
   */
  chanPending: PendingUpdate | undefined;
  /**
   * Signals that the channel's funding transaction has now reached the
   * required number of confirmations on chain and can be used.
   */
  chanOpen: ChannelOpenUpdate | undefined;
  /**
   * Signals that the funding process has been suspended and the construction
   * of a PSBT that funds the channel PK script is now required.
   */
  psbtFund: ReadyForPsbtFunding | undefined;
  /**
   * The pending channel ID of the created channel. This value may be used to
   * further the funding flow manually via the FundingStateStep method.
   */
  pendingChanId: Uint8Array;
}

export interface KeyLocator {
  /** The family of key being identified. */
  keyFamily: number;
  /** The precise index of the key being identified. */
  keyIndex: number;
}

export interface KeyDescriptor {
  /** The raw bytes of the key being identified. */
  rawKeyBytes: Uint8Array;
  /** The key locator that identifies which key to use for signing. */
  keyLoc: KeyLocator | undefined;
}

export interface ChanPointShim {
  /**
   * The size of the pre-crafted output to be used as the channel point for this
   * channel funding.
   */
  amt: string;
  /** The target channel point to refrence in created commitment transactions. */
  chanPoint: ChannelPoint | undefined;
  /** Our local key to use when creating the multi-sig output. */
  localKey: KeyDescriptor | undefined;
  /** The key of the remote party to use when creating the multi-sig output. */
  remoteKey: Uint8Array;
  /**
   * If non-zero, then this will be used as the pending channel ID on the wire
   * protocol to initate the funding request. This is an optional field, and
   * should only be set if the responder is already expecting a specific pending
   * channel ID.
   */
  pendingChanId: Uint8Array;
  /**
   * This uint32 indicates if this channel is to be considered 'frozen'. A frozen
   * channel does not allow a cooperative channel close by the initiator. The
   * thaw_height is the height that this restriction stops applying to the
   * channel. The height can be interpreted in two ways: as a relative height if
   * the value is less than 500,000, or as an absolute height otherwise.
   */
  thawHeight: number;
}

export interface PsbtShim {
  /**
   * A unique identifier of 32 random bytes that will be used as the pending
   * channel ID to identify the PSBT state machine when interacting with it and
   * on the wire protocol to initiate the funding request.
   */
  pendingChanId: Uint8Array;
  /**
   * An optional base PSBT the new channel output will be added to. If this is
   * non-empty, it must be a binary serialized PSBT.
   */
  basePsbt: Uint8Array;
  /**
   * If a channel should be part of a batch (multiple channel openings in one
   * transaction), it can be dangerous if the whole batch transaction is
   * published too early before all channel opening negotiations are completed.
   * This flag prevents this particular channel from broadcasting the transaction
   * after the negotiation with the remote peer. In a batch of channel openings
   * this flag should be set to true for every channel but the very last.
   */
  noPublish: boolean;
}

export interface FundingShim {
  /**
   * A channel shim where the channel point was fully constructed outside
   * of lnd's wallet and the transaction might already be published.
   */
  chanPointShim: ChanPointShim | undefined;
  /**
   * A channel shim that uses a PSBT to fund and sign the channel funding
   * transaction.
   */
  psbtShim: PsbtShim | undefined;
}

export interface FundingShimCancel {
  /** The pending channel ID of the channel to cancel the funding shim for. */
  pendingChanId: Uint8Array;
}

export interface FundingPsbtVerify {
  /**
   * The funded but not yet signed PSBT that sends the exact channel capacity
   * amount to the PK script returned in the open channel message in a previous
   * step.
   */
  fundedPsbt: Uint8Array;
  /** The pending channel ID of the channel to get the PSBT for. */
  pendingChanId: Uint8Array;
  /**
   * Can only be used if the no_publish flag was set to true in the OpenChannel
   * call meaning that the caller is solely responsible for publishing the final
   * funding transaction. If skip_finalize is set to true then lnd will not wait
   * for a FundingPsbtFinalize state step and instead assumes that a transaction
   * with the same TXID as the passed in PSBT will eventually confirm.
   * IT IS ABSOLUTELY IMPERATIVE that the TXID of the transaction that is
   * eventually published does have the _same TXID_ as the verified PSBT. That
   * means no inputs or outputs can change, only signatures can be added. If the
   * TXID changes between this call and the publish step then the channel will
   * never be created and the funds will be in limbo.
   */
  skipFinalize: boolean;
}

export interface FundingPsbtFinalize {
  /**
   * The funded PSBT that contains all witness data to send the exact channel
   * capacity amount to the PK script returned in the open channel message in a
   * previous step. Cannot be set at the same time as final_raw_tx.
   */
  signedPsbt: Uint8Array;
  /** The pending channel ID of the channel to get the PSBT for. */
  pendingChanId: Uint8Array;
  /**
   * As an alternative to the signed PSBT with all witness data, the final raw
   * wire format transaction can also be specified directly. Cannot be set at the
   * same time as signed_psbt.
   */
  finalRawTx: Uint8Array;
}

export interface FundingTransitionMsg {
  /**
   * The funding shim to register. This should be used before any
   * channel funding has began by the remote party, as it is intended as a
   * preparatory step for the full channel funding.
   */
  shimRegister: FundingShim | undefined;
  /** Used to cancel an existing registered funding shim. */
  shimCancel: FundingShimCancel | undefined;
  /**
   * Used to continue a funding flow that was initiated to be executed
   * through a PSBT. This step verifies that the PSBT contains the correct
   * outputs to fund the channel.
   */
  psbtVerify: FundingPsbtVerify | undefined;
  /**
   * Used to continue a funding flow that was initiated to be executed
   * through a PSBT. This step finalizes the funded and signed PSBT, finishes
   * negotiation with the peer and finally publishes the resulting funding
   * transaction.
   */
  psbtFinalize: FundingPsbtFinalize | undefined;
}

export interface FundingStateStepResp {}

export interface PendingHTLC {
  /** The direction within the channel that the htlc was sent */
  incoming: boolean;
  /** The total value of the htlc */
  amount: string;
  /** The final output to be swept back to the user's wallet */
  outpoint: string;
  /** The next block height at which we can spend the current stage */
  maturityHeight: number;
  /**
   * The number of blocks remaining until the current stage can be swept.
   * Negative values indicate how many blocks have passed since becoming
   * mature.
   */
  blocksTilMaturity: number;
  /** Indicates whether the htlc is in its first or second stage of recovery */
  stage: number;
}

export interface PendingChannelsRequest {}

export interface PendingChannelsResponse {
  /** The balance in satoshis encumbered in pending channels */
  totalLimboBalance: string;
  /** Channels pending opening */
  pendingOpenChannels: PendingChannelsResponse_PendingOpenChannel[];
  /**
   * Deprecated: Channels pending closing previously contained cooperatively
   * closed channels with a single confirmation. These channels are now
   * considered closed from the time we see them on chain.
   *
   * @deprecated
   */
  pendingClosingChannels: PendingChannelsResponse_ClosedChannel[];
  /** Channels pending force closing */
  pendingForceClosingChannels: PendingChannelsResponse_ForceClosedChannel[];
  /** Channels waiting for closing tx to confirm */
  waitingCloseChannels: PendingChannelsResponse_WaitingCloseChannel[];
}

export interface PendingChannelsResponse_PendingChannel {
  remoteNodePub: string;
  channelPoint: string;
  capacity: string;
  localBalance: string;
  remoteBalance: string;
  /**
   * The minimum satoshis this node is required to reserve in its
   * balance.
   */
  localChanReserveSat: string;
  /**
   * The minimum satoshis the other node is required to reserve in its
   * balance.
   */
  remoteChanReserveSat: string;
  /** The party that initiated opening the channel. */
  initiator: Initiator;
  /** The commitment type used by this channel. */
  commitmentType: CommitmentType;
  /** Total number of forwarding packages created in this channel. */
  numForwardingPackages: string;
}

export interface PendingChannelsResponse_PendingOpenChannel {
  /** The pending channel */
  channel: PendingChannelsResponse_PendingChannel | undefined;
  /** The height at which this channel will be confirmed */
  confirmationHeight: number;
  /**
   * The amount calculated to be paid in fees for the current set of
   * commitment transactions. The fee amount is persisted with the channel
   * in order to allow the fee amount to be removed and recalculated with
   * each channel state update, including updates that happen after a system
   * restart.
   */
  commitFee: string;
  /** The weight of the commitment transaction */
  commitWeight: string;
  /**
   * The required number of satoshis per kilo-weight that the requester will
   * pay at all times, for both the funding transaction and commitment
   * transaction. This value can later be updated once the channel is open.
   */
  feePerKw: string;
}

export interface PendingChannelsResponse_WaitingCloseChannel {
  /** The pending channel waiting for closing tx to confirm */
  channel: PendingChannelsResponse_PendingChannel | undefined;
  /** The balance in satoshis encumbered in this channel */
  limboBalance: string;
  /**
   * A list of valid commitment transactions. Any of these can confirm at
   * this point.
   */
  commitments: PendingChannelsResponse_Commitments | undefined;
}

export interface PendingChannelsResponse_Commitments {
  /** Hash of the local version of the commitment tx. */
  localTxid: string;
  /** Hash of the remote version of the commitment tx. */
  remoteTxid: string;
  /** Hash of the remote pending version of the commitment tx. */
  remotePendingTxid: string;
  /**
   * The amount in satoshis calculated to be paid in fees for the local
   * commitment.
   */
  localCommitFeeSat: string;
  /**
   * The amount in satoshis calculated to be paid in fees for the remote
   * commitment.
   */
  remoteCommitFeeSat: string;
  /**
   * The amount in satoshis calculated to be paid in fees for the remote
   * pending commitment.
   */
  remotePendingCommitFeeSat: string;
}

export interface PendingChannelsResponse_ClosedChannel {
  /** The pending channel to be closed */
  channel: PendingChannelsResponse_PendingChannel | undefined;
  /** The transaction id of the closing transaction */
  closingTxid: string;
}

export interface PendingChannelsResponse_ForceClosedChannel {
  /** The pending channel to be force closed */
  channel: PendingChannelsResponse_PendingChannel | undefined;
  /** The transaction id of the closing transaction */
  closingTxid: string;
  /** The balance in satoshis encumbered in this pending channel */
  limboBalance: string;
  /** The height at which funds can be swept into the wallet */
  maturityHeight: number;
  /**
   * Remaining # of blocks until the commitment output can be swept.
   * Negative values indicate how many blocks have passed since becoming
   * mature.
   */
  blocksTilMaturity: number;
  /** The total value of funds successfully recovered from this channel */
  recoveredBalance: string;
  pendingHtlcs: PendingHTLC[];
  anchor: PendingChannelsResponse_ForceClosedChannel_AnchorState;
}

export enum PendingChannelsResponse_ForceClosedChannel_AnchorState {
  LIMBO = 0,
  RECOVERED = 1,
  LOST = 2,
  UNRECOGNIZED = -1,
}

export function pendingChannelsResponse_ForceClosedChannel_AnchorStateFromJSON(
  object: any,
): PendingChannelsResponse_ForceClosedChannel_AnchorState {
  switch (object) {
    case 0:
    case 'LIMBO':
      return PendingChannelsResponse_ForceClosedChannel_AnchorState.LIMBO;
    case 1:
    case 'RECOVERED':
      return PendingChannelsResponse_ForceClosedChannel_AnchorState.RECOVERED;
    case 2:
    case 'LOST':
      return PendingChannelsResponse_ForceClosedChannel_AnchorState.LOST;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return PendingChannelsResponse_ForceClosedChannel_AnchorState.UNRECOGNIZED;
  }
}

export function pendingChannelsResponse_ForceClosedChannel_AnchorStateToJSON(
  object: PendingChannelsResponse_ForceClosedChannel_AnchorState,
): string {
  switch (object) {
    case PendingChannelsResponse_ForceClosedChannel_AnchorState.LIMBO:
      return 'LIMBO';
    case PendingChannelsResponse_ForceClosedChannel_AnchorState.RECOVERED:
      return 'RECOVERED';
    case PendingChannelsResponse_ForceClosedChannel_AnchorState.LOST:
      return 'LOST';
    default:
      return 'UNKNOWN';
  }
}

export interface ChannelEventSubscription {}

export interface ChannelEventUpdate {
  openChannel: Channel | undefined;
  closedChannel: ChannelCloseSummary | undefined;
  activeChannel: ChannelPoint | undefined;
  inactiveChannel: ChannelPoint | undefined;
  pendingOpenChannel: PendingUpdate | undefined;
  fullyResolvedChannel: ChannelPoint | undefined;
  type: ChannelEventUpdate_UpdateType;
}

export enum ChannelEventUpdate_UpdateType {
  OPEN_CHANNEL = 0,
  CLOSED_CHANNEL = 1,
  ACTIVE_CHANNEL = 2,
  INACTIVE_CHANNEL = 3,
  PENDING_OPEN_CHANNEL = 4,
  FULLY_RESOLVED_CHANNEL = 5,
  UNRECOGNIZED = -1,
}

export function channelEventUpdate_UpdateTypeFromJSON(
  object: any,
): ChannelEventUpdate_UpdateType {
  switch (object) {
    case 0:
    case 'OPEN_CHANNEL':
      return ChannelEventUpdate_UpdateType.OPEN_CHANNEL;
    case 1:
    case 'CLOSED_CHANNEL':
      return ChannelEventUpdate_UpdateType.CLOSED_CHANNEL;
    case 2:
    case 'ACTIVE_CHANNEL':
      return ChannelEventUpdate_UpdateType.ACTIVE_CHANNEL;
    case 3:
    case 'INACTIVE_CHANNEL':
      return ChannelEventUpdate_UpdateType.INACTIVE_CHANNEL;
    case 4:
    case 'PENDING_OPEN_CHANNEL':
      return ChannelEventUpdate_UpdateType.PENDING_OPEN_CHANNEL;
    case 5:
    case 'FULLY_RESOLVED_CHANNEL':
      return ChannelEventUpdate_UpdateType.FULLY_RESOLVED_CHANNEL;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return ChannelEventUpdate_UpdateType.UNRECOGNIZED;
  }
}

export function channelEventUpdate_UpdateTypeToJSON(
  object: ChannelEventUpdate_UpdateType,
): string {
  switch (object) {
    case ChannelEventUpdate_UpdateType.OPEN_CHANNEL:
      return 'OPEN_CHANNEL';
    case ChannelEventUpdate_UpdateType.CLOSED_CHANNEL:
      return 'CLOSED_CHANNEL';
    case ChannelEventUpdate_UpdateType.ACTIVE_CHANNEL:
      return 'ACTIVE_CHANNEL';
    case ChannelEventUpdate_UpdateType.INACTIVE_CHANNEL:
      return 'INACTIVE_CHANNEL';
    case ChannelEventUpdate_UpdateType.PENDING_OPEN_CHANNEL:
      return 'PENDING_OPEN_CHANNEL';
    case ChannelEventUpdate_UpdateType.FULLY_RESOLVED_CHANNEL:
      return 'FULLY_RESOLVED_CHANNEL';
    default:
      return 'UNKNOWN';
  }
}

export interface WalletAccountBalance {
  /** The confirmed balance of the account (with >= 1 confirmations). */
  confirmedBalance: string;
  /** The unconfirmed balance of the account (with 0 confirmations). */
  unconfirmedBalance: string;
}

export interface WalletBalanceRequest {}

export interface WalletBalanceResponse {
  /** The balance of the wallet */
  totalBalance: string;
  /** The confirmed balance of a wallet(with >= 1 confirmations) */
  confirmedBalance: string;
  /** The unconfirmed balance of a wallet(with 0 confirmations) */
  unconfirmedBalance: string;
  /** A mapping of each wallet account's name to its balance. */
  accountBalance: Record<string, WalletAccountBalance>;
}

export interface WalletBalanceResponse_AccountBalanceEntry {
  key: string;
  value: WalletAccountBalance | undefined;
}

export interface Amount {
  /** Value denominated in satoshis. */
  sat: string;
  /** Value denominated in milli-satoshis. */
  msat: string;
}

export interface ChannelBalanceRequest {}

export interface ChannelBalanceResponse {
  /**
   * Deprecated. Sum of channels balances denominated in satoshis
   *
   * @deprecated
   */
  balance: string;
  /**
   * Deprecated. Sum of channels pending balances denominated in satoshis
   *
   * @deprecated
   */
  pendingOpenBalance: string;
  /** Sum of channels local balances. */
  localBalance: Amount | undefined;
  /** Sum of channels remote balances. */
  remoteBalance: Amount | undefined;
  /** Sum of channels local unsettled balances. */
  unsettledLocalBalance: Amount | undefined;
  /** Sum of channels remote unsettled balances. */
  unsettledRemoteBalance: Amount | undefined;
  /** Sum of channels pending local balances. */
  pendingOpenLocalBalance: Amount | undefined;
  /** Sum of channels pending remote balances. */
  pendingOpenRemoteBalance: Amount | undefined;
}

export interface QueryRoutesRequest {
  /** The 33-byte hex-encoded public key for the payment destination */
  pubKey: string;
  /**
   * The amount to send expressed in satoshis.
   *
   * The fields amt and amt_msat are mutually exclusive.
   */
  amt: string;
  /**
   * The amount to send expressed in millisatoshis.
   *
   * The fields amt and amt_msat are mutually exclusive.
   */
  amtMsat: string;
  /**
   * An optional CLTV delta from the current height that should be used for the
   * timelock of the final hop. Note that unlike SendPayment, QueryRoutes does
   * not add any additional block padding on top of final_ctlv_delta. This
   * padding of a few blocks needs to be added manually or otherwise failures may
   * happen when a block comes in while the payment is in flight.
   */
  finalCltvDelta: number;
  /**
   * The maximum number of satoshis that will be paid as a fee of the payment.
   * This value can be represented either as a percentage of the amount being
   * sent, or as a fixed amount of the maximum fee the user is willing the pay to
   * send the payment.
   */
  feeLimit: FeeLimit | undefined;
  /**
   * A list of nodes to ignore during path finding. When using REST, these fields
   * must be encoded as base64.
   */
  ignoredNodes: Uint8Array[];
  /**
   * Deprecated. A list of edges to ignore during path finding.
   *
   * @deprecated
   */
  ignoredEdges: EdgeLocator[];
  /**
   * The source node where the request route should originated from. If empty,
   * self is assumed.
   */
  sourcePubKey: string;
  /**
   * If set to true, edge probabilities from mission control will be used to get
   * the optimal route.
   */
  useMissionControl: boolean;
  /** A list of directed node pairs that will be ignored during path finding. */
  ignoredPairs: NodePair[];
  /**
   * An optional maximum total time lock for the route. If the source is empty or
   * ourselves, this should not exceed lnd's `--max-cltv-expiry` setting. If
   * zero, then the value of `--max-cltv-expiry` is used as the limit.
   */
  cltvLimit: number;
  /**
   * An optional field that can be used to pass an arbitrary set of TLV records
   * to a peer which understands the new records. This can be used to pass
   * application specific data during the payment attempt. If the destination
   * does not support the specified records, an error will be returned.
   * Record types are required to be in the custom range >= 65536. When using
   * REST, the values must be encoded as base64.
   */
  destCustomRecords: Record<string, Uint8Array>;
  /**
   * The channel id of the channel that must be taken to the first hop. If zero,
   * any channel may be used.
   */
  outgoingChanId: string;
  /** The pubkey of the last hop of the route. If empty, any hop may be used. */
  lastHopPubkey: Uint8Array;
  /** Optional route hints to reach the destination through private channels. */
  routeHints: RouteHint[];
  /**
   * Features assumed to be supported by the final node. All transitive feature
   * dependencies must also be set properly. For a given feature bit pair, either
   * optional or remote may be set, but not both. If this field is nil or empty,
   * the router will try to load destination features from the graph as a
   * fallback.
   */
  destFeatures: FeatureBit[];
}

export interface QueryRoutesRequest_DestCustomRecordsEntry {
  key: string;
  value: Uint8Array;
}

export interface NodePair {
  /**
   * The sending node of the pair. When using REST, this field must be encoded as
   * base64.
   */
  from: Uint8Array;
  /**
   * The receiving node of the pair. When using REST, this field must be encoded
   * as base64.
   */
  to: Uint8Array;
}

export interface EdgeLocator {
  /** The short channel id of this edge. */
  channelId: string;
  /**
   * The direction of this edge. If direction_reverse is false, the direction
   * of this edge is from the channel endpoint with the lexicographically smaller
   * pub key to the endpoint with the larger pub key. If direction_reverse is
   * is true, the edge goes the other way.
   */
  directionReverse: boolean;
}

export interface QueryRoutesResponse {
  /**
   * The route that results from the path finding operation. This is still a
   * repeated field to retain backwards compatibility.
   */
  routes: Route[];
  /**
   * The success probability of the returned route based on the current mission
   * control state. [EXPERIMENTAL]
   */
  successProb: number;
}

export interface Hop {
  /**
   * The unique channel ID for the channel. The first 3 bytes are the block
   * height, the next 3 the index within the block, and the last 2 bytes are the
   * output index for the channel.
   */
  chanId: string;
  /** @deprecated */
  chanCapacity: string;
  /** @deprecated */
  amtToForward: string;
  /** @deprecated */
  fee: string;
  expiry: number;
  amtToForwardMsat: string;
  feeMsat: string;
  /**
   * An optional public key of the hop. If the public key is given, the payment
   * can be executed without relying on a copy of the channel graph.
   */
  pubKey: string;
  /**
   * If set to true, then this hop will be encoded using the new variable length
   * TLV format. Note that if any custom tlv_records below are specified, then
   * this field MUST be set to true for them to be encoded properly.
   */
  tlvPayload: boolean;
  /**
   * An optional TLV record that signals the use of an MPP payment. If present,
   * the receiver will enforce that the same mpp_record is included in the final
   * hop payload of all non-zero payments in the HTLC set. If empty, a regular
   * single-shot payment is or was attempted.
   */
  mppRecord: MPPRecord | undefined;
  /**
   * An optional TLV record that signals the use of an AMP payment. If present,
   * the receiver will treat all received payments including the same
   * (payment_addr, set_id) pair  as being part of one logical payment. The
   * payment will be settled by XORing the root_share's together and deriving the
   * child hashes and preimages according to BOLT XX. Must be used in conjunction
   * with mpp_record.
   */
  ampRecord: AMPRecord | undefined;
  /**
   * An optional set of key-value TLV records. This is useful within the context
   * of the SendToRoute call as it allows callers to specify arbitrary K-V pairs
   * to drop off at each hop within the onion.
   */
  customRecords: Record<string, Uint8Array>;
}

export interface Hop_CustomRecordsEntry {
  key: string;
  value: Uint8Array;
}

export interface MPPRecord {
  /**
   * A unique, random identifier used to authenticate the sender as the intended
   * payer of a multi-path payment. The payment_addr must be the same for all
   * subpayments, and match the payment_addr provided in the receiver's invoice.
   * The same payment_addr must be used on all subpayments.
   */
  paymentAddr: Uint8Array;
  /**
   * The total amount in milli-satoshis being sent as part of a larger multi-path
   * payment. The caller is responsible for ensuring subpayments to the same node
   * and payment_hash sum exactly to total_amt_msat. The same
   * total_amt_msat must be used on all subpayments.
   */
  totalAmtMsat: string;
}

export interface AMPRecord {
  rootShare: Uint8Array;
  setId: Uint8Array;
  childIndex: number;
}

/**
 * A path through the channel graph which runs over one or more channels in
 * succession. This struct carries all the information required to craft the
 * Sphinx onion packet, and send the payment along the first hop in the path. A
 * route is only selected as valid if all the channels have sufficient capacity to
 * carry the initial payment amount after fees are accounted for.
 */
export interface Route {
  /**
   * The cumulative (final) time lock across the entire route. This is the CLTV
   * value that should be extended to the first hop in the route. All other hops
   * will decrement the time-lock as advertised, leaving enough time for all
   * hops to wait for or present the payment preimage to complete the payment.
   */
  totalTimeLock: number;
  /**
   * The sum of the fees paid at each hop within the final route. In the case
   * of a one-hop payment, this value will be zero as we don't need to pay a fee
   * to ourselves.
   *
   * @deprecated
   */
  totalFees: string;
  /**
   * The total amount of funds required to complete a payment over this route.
   * This value includes the cumulative fees at each hop. As a result, the HTLC
   * extended to the first-hop in the route will need to have at least this many
   * satoshis, otherwise the route will fail at an intermediate node due to an
   * insufficient amount of fees.
   *
   * @deprecated
   */
  totalAmt: string;
  /** Contains details concerning the specific forwarding details at each hop. */
  hops: Hop[];
  /** The total fees in millisatoshis. */
  totalFeesMsat: string;
  /** The total amount in millisatoshis. */
  totalAmtMsat: string;
}

export interface NodeInfoRequest {
  /** The 33-byte hex-encoded compressed public of the target node */
  pubKey: string;
  /** If true, will include all known channels associated with the node. */
  includeChannels: boolean;
}

export interface NodeInfo {
  /**
   * An individual vertex/node within the channel graph. A node is
   * connected to other nodes by one or more channel edges emanating from it. As
   * the graph is directed, a node will also have an incoming edge attached to
   * it for each outgoing edge.
   */
  node: LightningNode | undefined;
  /** The total number of channels for the node. */
  numChannels: number;
  /** The sum of all channels capacity for the node, denominated in satoshis. */
  totalCapacity: string;
  /** A list of all public channels for the node. */
  channels: ChannelEdge[];
}

/**
 * An individual vertex/node within the channel graph. A node is
 * connected to other nodes by one or more channel edges emanating from it. As the
 * graph is directed, a node will also have an incoming edge attached to it for
 * each outgoing edge.
 */
export interface LightningNode {
  lastUpdate: number;
  pubKey: string;
  alias: string;
  addresses: NodeAddress[];
  color: string;
  features: Record<number, Feature>;
}

export interface LightningNode_FeaturesEntry {
  key: number;
  value: Feature | undefined;
}

export interface NodeAddress {
  network: string;
  addr: string;
}

export interface RoutingPolicy {
  timeLockDelta: number;
  minHtlc: string;
  feeBaseMsat: string;
  feeRateMilliMsat: string;
  disabled: boolean;
  maxHtlcMsat: string;
  lastUpdate: number;
}

/**
 * A fully authenticated channel along with all its unique attributes.
 * Once an authenticated channel announcement has been processed on the network,
 * then an instance of ChannelEdgeInfo encapsulating the channels attributes is
 * stored. The other portions relevant to routing policy of a channel are stored
 * within a ChannelEdgePolicy for each direction of the channel.
 */
export interface ChannelEdge {
  /**
   * The unique channel ID for the channel. The first 3 bytes are the block
   * height, the next 3 the index within the block, and the last 2 bytes are the
   * output index for the channel.
   */
  channelId: string;
  chanPoint: string;
  /** @deprecated */
  lastUpdate: number;
  node1Pub: string;
  node2Pub: string;
  capacity: string;
  node1Policy: RoutingPolicy | undefined;
  node2Policy: RoutingPolicy | undefined;
}

export interface ChannelGraphRequest {
  /**
   * Whether unannounced channels are included in the response or not. If set,
   * unannounced channels are included. Unannounced channels are both private
   * channels, and public channels that are not yet announced to the network.
   */
  includeUnannounced: boolean;
}

/** Returns a new instance of the directed channel graph. */
export interface ChannelGraph {
  /** The list of `LightningNode`s in this channel graph */
  nodes: LightningNode[];
  /** The list of `ChannelEdge`s in this channel graph */
  edges: ChannelEdge[];
}

export interface NodeMetricsRequest {
  /** The requested node metrics. */
  types: NodeMetricType[];
}

export interface NodeMetricsResponse {
  /**
   * Betweenness centrality is the sum of the ratio of shortest paths that pass
   * through the node for each pair of nodes in the graph (not counting paths
   * starting or ending at this node).
   * Map of node pubkey to betweenness centrality of the node. Normalized
   * values are in the [0,1] closed interval.
   */
  betweennessCentrality: Record<string, FloatMetric>;
}

export interface NodeMetricsResponse_BetweennessCentralityEntry {
  key: string;
  value: FloatMetric | undefined;
}

export interface FloatMetric {
  /** Arbitrary float value. */
  value: number;
  /** The value normalized to [0,1] or [-1,1]. */
  normalizedValue: number;
}

export interface ChanInfoRequest {
  /**
   * The unique channel ID for the channel. The first 3 bytes are the block
   * height, the next 3 the index within the block, and the last 2 bytes are the
   * output index for the channel.
   */
  chanId: string;
}

export interface NetworkInfoRequest {}

export interface NetworkInfo {
  graphDiameter: number;
  avgOutDegree: number;
  maxOutDegree: number;
  numNodes: number;
  numChannels: number;
  totalNetworkCapacity: string;
  avgChannelSize: number;
  minChannelSize: string;
  maxChannelSize: string;
  medianChannelSizeSat: string;
  /** The number of edges marked as zombies. */
  numZombieChans: string;
}

export interface StopRequest {}

export interface StopResponse {}

export interface GraphTopologySubscription {}

export interface GraphTopologyUpdate {
  nodeUpdates: NodeUpdate[];
  channelUpdates: ChannelEdgeUpdate[];
  closedChans: ClosedChannelUpdate[];
}

export interface NodeUpdate {
  /**
   * Deprecated, use node_addresses.
   *
   * @deprecated
   */
  addresses: string[];
  identityKey: string;
  /**
   * Deprecated, use features.
   *
   * @deprecated
   */
  globalFeatures: Uint8Array;
  alias: string;
  color: string;
  nodeAddresses: NodeAddress[];
  /**
   * Features that the node has advertised in the init message, node
   * announcements and invoices.
   */
  features: Record<number, Feature>;
}

export interface NodeUpdate_FeaturesEntry {
  key: number;
  value: Feature | undefined;
}

export interface ChannelEdgeUpdate {
  /**
   * The unique channel ID for the channel. The first 3 bytes are the block
   * height, the next 3 the index within the block, and the last 2 bytes are the
   * output index for the channel.
   */
  chanId: string;
  chanPoint: ChannelPoint | undefined;
  capacity: string;
  routingPolicy: RoutingPolicy | undefined;
  advertisingNode: string;
  connectingNode: string;
}

export interface ClosedChannelUpdate {
  /**
   * The unique channel ID for the channel. The first 3 bytes are the block
   * height, the next 3 the index within the block, and the last 2 bytes are the
   * output index for the channel.
   */
  chanId: string;
  capacity: string;
  closedHeight: number;
  chanPoint: ChannelPoint | undefined;
}

export interface HopHint {
  /** The public key of the node at the start of the channel. */
  nodeId: string;
  /** The unique identifier of the channel. */
  chanId: string;
  /** The base fee of the channel denominated in millisatoshis. */
  feeBaseMsat: number;
  /**
   * The fee rate of the channel for sending one satoshi across it denominated in
   * millionths of a satoshi.
   */
  feeProportionalMillionths: number;
  /** The time-lock delta of the channel. */
  cltvExpiryDelta: number;
}

export interface SetID {
  setId: Uint8Array;
}

export interface RouteHint {
  /**
   * A list of hop hints that when chained together can assist in reaching a
   * specific destination.
   */
  hopHints: HopHint[];
}

export interface AMPInvoiceState {
  /** The state the HTLCs associated with this setID are in. */
  state: InvoiceHTLCState;
  /** The settle index of this HTLC set, if the invoice state is settled. */
  settleIndex: string;
  /** The time this HTLC set was settled expressed in unix epoch. */
  settleTime: string;
  /** The total amount paid for the sub-invoice expressed in milli satoshis. */
  amtPaidMsat: string;
}

export interface Invoice {
  /**
   * An optional memo to attach along with the invoice. Used for record keeping
   * purposes for the invoice's creator, and will also be set in the description
   * field of the encoded payment request if the description_hash field is not
   * being used.
   */
  memo: string;
  /**
   * The hex-encoded preimage (32 byte) which will allow settling an incoming
   * HTLC payable to this preimage. When using REST, this field must be encoded
   * as base64.
   */
  rPreimage: Uint8Array;
  /**
   * The hash of the preimage. When using REST, this field must be encoded as
   * base64.
   */
  rHash: Uint8Array;
  /**
   * The value of this invoice in satoshis
   *
   * The fields value and value_msat are mutually exclusive.
   */
  value: string;
  /**
   * The value of this invoice in millisatoshis
   *
   * The fields value and value_msat are mutually exclusive.
   */
  valueMsat: string;
  /**
   * Whether this invoice has been fulfilled
   *
   * @deprecated
   */
  settled: boolean;
  /** When this invoice was created */
  creationDate: string;
  /** When this invoice was settled */
  settleDate: string;
  /**
   * A bare-bones invoice for a payment within the Lightning Network. With the
   * details of the invoice, the sender has all the data necessary to send a
   * payment to the recipient.
   */
  paymentRequest: string;
  /**
   * Hash (SHA-256) of a description of the payment. Used if the description of
   * payment (memo) is too long to naturally fit within the description field
   * of an encoded payment request. When using REST, this field must be encoded
   * as base64.
   */
  descriptionHash: Uint8Array;
  /** Payment request expiry time in seconds. Default is 3600 (1 hour). */
  expiry: string;
  /** Fallback on-chain address. */
  fallbackAddr: string;
  /** Delta to use for the time-lock of the CLTV extended to the final hop. */
  cltvExpiry: string;
  /**
   * Route hints that can each be individually used to assist in reaching the
   * invoice's destination.
   */
  routeHints: RouteHint[];
  /** Whether this invoice should include routing hints for private channels. */
  private: boolean;
  /**
   * The "add" index of this invoice. Each newly created invoice will increment
   * this index making it monotonically increasing. Callers to the
   * SubscribeInvoices call can use this to instantly get notified of all added
   * invoices with an add_index greater than this one.
   */
  addIndex: string;
  /**
   * The "settle" index of this invoice. Each newly settled invoice will
   * increment this index making it monotonically increasing. Callers to the
   * SubscribeInvoices call can use this to instantly get notified of all
   * settled invoices with an settle_index greater than this one.
   */
  settleIndex: string;
  /**
   * Deprecated, use amt_paid_sat or amt_paid_msat.
   *
   * @deprecated
   */
  amtPaid: string;
  /**
   * The amount that was accepted for this invoice, in satoshis. This will ONLY
   * be set if this invoice has been settled. We provide this field as if the
   * invoice was created with a zero value, then we need to record what amount
   * was ultimately accepted. Additionally, it's possible that the sender paid
   * MORE that was specified in the original invoice. So we'll record that here
   * as well.
   */
  amtPaidSat: string;
  /**
   * The amount that was accepted for this invoice, in millisatoshis. This will
   * ONLY be set if this invoice has been settled. We provide this field as if
   * the invoice was created with a zero value, then we need to record what
   * amount was ultimately accepted. Additionally, it's possible that the sender
   * paid MORE that was specified in the original invoice. So we'll record that
   * here as well.
   */
  amtPaidMsat: string;
  /** The state the invoice is in. */
  state: Invoice_InvoiceState;
  /** List of HTLCs paying to this invoice [EXPERIMENTAL]. */
  htlcs: InvoiceHTLC[];
  /** List of features advertised on the invoice. */
  features: Record<number, Feature>;
  /**
   * Indicates if this invoice was a spontaneous payment that arrived via keysend
   * [EXPERIMENTAL].
   */
  isKeysend: boolean;
  /**
   * The payment address of this invoice. This value will be used in MPP
   * payments, and also for newer invoices that always require the MPP payload
   * for added end-to-end security.
   */
  paymentAddr: Uint8Array;
  /** Signals whether or not this is an AMP invoice. */
  isAmp: boolean;
  /**
   * [EXPERIMENTAL]:
   *
   * Maps a 32-byte hex-encoded set ID to the sub-invoice AMP state for the
   * given set ID. This field is always populated for AMP invoices, and can be
   * used along side LookupInvoice to obtain the HTLC information related to a
   * given sub-invoice.
   */
  ampInvoiceState: Record<string, AMPInvoiceState>;
}

export enum Invoice_InvoiceState {
  OPEN = 0,
  SETTLED = 1,
  CANCELED = 2,
  ACCEPTED = 3,
  UNRECOGNIZED = -1,
}

export function invoice_InvoiceStateFromJSON(
  object: any,
): Invoice_InvoiceState {
  switch (object) {
    case 0:
    case 'OPEN':
      return Invoice_InvoiceState.OPEN;
    case 1:
    case 'SETTLED':
      return Invoice_InvoiceState.SETTLED;
    case 2:
    case 'CANCELED':
      return Invoice_InvoiceState.CANCELED;
    case 3:
    case 'ACCEPTED':
      return Invoice_InvoiceState.ACCEPTED;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Invoice_InvoiceState.UNRECOGNIZED;
  }
}

export function invoice_InvoiceStateToJSON(
  object: Invoice_InvoiceState,
): string {
  switch (object) {
    case Invoice_InvoiceState.OPEN:
      return 'OPEN';
    case Invoice_InvoiceState.SETTLED:
      return 'SETTLED';
    case Invoice_InvoiceState.CANCELED:
      return 'CANCELED';
    case Invoice_InvoiceState.ACCEPTED:
      return 'ACCEPTED';
    default:
      return 'UNKNOWN';
  }
}

export interface Invoice_FeaturesEntry {
  key: number;
  value: Feature | undefined;
}

export interface Invoice_AmpInvoiceStateEntry {
  key: string;
  value: AMPInvoiceState | undefined;
}

/** Details of an HTLC that paid to an invoice */
export interface InvoiceHTLC {
  /** Short channel id over which the htlc was received. */
  chanId: string;
  /** Index identifying the htlc on the channel. */
  htlcIndex: string;
  /** The amount of the htlc in msat. */
  amtMsat: string;
  /** Block height at which this htlc was accepted. */
  acceptHeight: number;
  /** Time at which this htlc was accepted. */
  acceptTime: string;
  /** Time at which this htlc was settled or canceled. */
  resolveTime: string;
  /** Block height at which this htlc expires. */
  expiryHeight: number;
  /** Current state the htlc is in. */
  state: InvoiceHTLCState;
  /** Custom tlv records. */
  customRecords: Record<string, Uint8Array>;
  /** The total amount of the mpp payment in msat. */
  mppTotalAmtMsat: string;
  /** Details relevant to AMP HTLCs, only populated if this is an AMP HTLC. */
  amp: AMP | undefined;
}

export interface InvoiceHTLC_CustomRecordsEntry {
  key: string;
  value: Uint8Array;
}

/** Details specific to AMP HTLCs. */
export interface AMP {
  /**
   * An n-of-n secret share of the root seed from which child payment hashes
   * and preimages are derived.
   */
  rootShare: Uint8Array;
  /** An identifier for the HTLC set that this HTLC belongs to. */
  setId: Uint8Array;
  /**
   * A nonce used to randomize the child preimage and child hash from a given
   * root_share.
   */
  childIndex: number;
  /** The payment hash of the AMP HTLC. */
  hash: Uint8Array;
  /**
   * The preimage used to settle this AMP htlc. This field will only be
   * populated if the invoice is in InvoiceState_ACCEPTED or
   * InvoiceState_SETTLED.
   */
  preimage: Uint8Array;
}

export interface AddInvoiceResponse {
  rHash: Uint8Array;
  /**
   * A bare-bones invoice for a payment within the Lightning Network. With the
   * details of the invoice, the sender has all the data necessary to send a
   * payment to the recipient.
   */
  paymentRequest: string;
  /**
   * The "add" index of this invoice. Each newly created invoice will increment
   * this index making it monotonically increasing. Callers to the
   * SubscribeInvoices call can use this to instantly get notified of all added
   * invoices with an add_index greater than this one.
   */
  addIndex: string;
  /**
   * The payment address of the generated invoice. This value should be used
   * in all payments for this invoice as we require it for end to end
   * security.
   */
  paymentAddr: Uint8Array;
}

export interface PaymentHash {
  /**
   * The hex-encoded payment hash of the invoice to be looked up. The passed
   * payment hash must be exactly 32 bytes, otherwise an error is returned.
   * Deprecated now that the REST gateway supports base64 encoding of bytes
   * fields.
   *
   * @deprecated
   */
  rHashStr: string;
  /**
   * The payment hash of the invoice to be looked up. When using REST, this field
   * must be encoded as base64.
   */
  rHash: Uint8Array;
}

export interface ListInvoiceRequest {
  /**
   * If set, only invoices that are not settled and not canceled will be returned
   * in the response.
   */
  pendingOnly: boolean;
  /**
   * The index of an invoice that will be used as either the start or end of a
   * query to determine which invoices should be returned in the response.
   */
  indexOffset: string;
  /** The max number of invoices to return in the response to this query. */
  numMaxInvoices: string;
  /**
   * If set, the invoices returned will result from seeking backwards from the
   * specified index offset. This can be used to paginate backwards.
   */
  reversed: boolean;
}

export interface ListInvoiceResponse {
  /**
   * A list of invoices from the time slice of the time series specified in the
   * request.
   */
  invoices: Invoice[];
  /**
   * The index of the last item in the set of returned invoices. This can be used
   * to seek further, pagination style.
   */
  lastIndexOffset: string;
  /**
   * The index of the last item in the set of returned invoices. This can be used
   * to seek backwards, pagination style.
   */
  firstIndexOffset: string;
}

export interface InvoiceSubscription {
  /**
   * If specified (non-zero), then we'll first start by sending out
   * notifications for all added indexes with an add_index greater than this
   * value. This allows callers to catch up on any events they missed while they
   * weren't connected to the streaming RPC.
   */
  addIndex: string;
  /**
   * If specified (non-zero), then we'll first start by sending out
   * notifications for all settled indexes with an settle_index greater than
   * this value. This allows callers to catch up on any events they missed while
   * they weren't connected to the streaming RPC.
   */
  settleIndex: string;
}

export interface Payment {
  /** The payment hash */
  paymentHash: string;
  /**
   * Deprecated, use value_sat or value_msat.
   *
   * @deprecated
   */
  value: string;
  /**
   * Deprecated, use creation_time_ns
   *
   * @deprecated
   */
  creationDate: string;
  /**
   * Deprecated, use fee_sat or fee_msat.
   *
   * @deprecated
   */
  fee: string;
  /** The payment preimage */
  paymentPreimage: string;
  /** The value of the payment in satoshis */
  valueSat: string;
  /** The value of the payment in milli-satoshis */
  valueMsat: string;
  /** The optional payment request being fulfilled. */
  paymentRequest: string;
  /** The status of the payment. */
  status: Payment_PaymentStatus;
  /** The fee paid for this payment in satoshis */
  feeSat: string;
  /** The fee paid for this payment in milli-satoshis */
  feeMsat: string;
  /** The time in UNIX nanoseconds at which the payment was created. */
  creationTimeNs: string;
  /** The HTLCs made in attempt to settle the payment. */
  htlcs: HTLCAttempt[];
  /**
   * The creation index of this payment. Each payment can be uniquely identified
   * by this index, which may not strictly increment by 1 for payments made in
   * older versions of lnd.
   */
  paymentIndex: string;
  failureReason: PaymentFailureReason;
}

export enum Payment_PaymentStatus {
  UNKNOWN = 0,
  IN_FLIGHT = 1,
  SUCCEEDED = 2,
  FAILED = 3,
  UNRECOGNIZED = -1,
}

export function payment_PaymentStatusFromJSON(
  object: any,
): Payment_PaymentStatus {
  switch (object) {
    case 0:
    case 'UNKNOWN':
      return Payment_PaymentStatus.UNKNOWN;
    case 1:
    case 'IN_FLIGHT':
      return Payment_PaymentStatus.IN_FLIGHT;
    case 2:
    case 'SUCCEEDED':
      return Payment_PaymentStatus.SUCCEEDED;
    case 3:
    case 'FAILED':
      return Payment_PaymentStatus.FAILED;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Payment_PaymentStatus.UNRECOGNIZED;
  }
}

export function payment_PaymentStatusToJSON(
  object: Payment_PaymentStatus,
): string {
  switch (object) {
    case Payment_PaymentStatus.UNKNOWN:
      return 'UNKNOWN';
    case Payment_PaymentStatus.IN_FLIGHT:
      return 'IN_FLIGHT';
    case Payment_PaymentStatus.SUCCEEDED:
      return 'SUCCEEDED';
    case Payment_PaymentStatus.FAILED:
      return 'FAILED';
    default:
      return 'UNKNOWN';
  }
}

export interface HTLCAttempt {
  /** The unique ID that is used for this attempt. */
  attemptId: string;
  /** The status of the HTLC. */
  status: HTLCAttempt_HTLCStatus;
  /** The route taken by this HTLC. */
  route: Route | undefined;
  /** The time in UNIX nanoseconds at which this HTLC was sent. */
  attemptTimeNs: string;
  /**
   * The time in UNIX nanoseconds at which this HTLC was settled or failed.
   * This value will not be set if the HTLC is still IN_FLIGHT.
   */
  resolveTimeNs: string;
  /** Detailed htlc failure info. */
  failure: Failure | undefined;
  /** The preimage that was used to settle the HTLC. */
  preimage: Uint8Array;
}

export enum HTLCAttempt_HTLCStatus {
  IN_FLIGHT = 0,
  SUCCEEDED = 1,
  FAILED = 2,
  UNRECOGNIZED = -1,
}

export function hTLCAttempt_HTLCStatusFromJSON(
  object: any,
): HTLCAttempt_HTLCStatus {
  switch (object) {
    case 0:
    case 'IN_FLIGHT':
      return HTLCAttempt_HTLCStatus.IN_FLIGHT;
    case 1:
    case 'SUCCEEDED':
      return HTLCAttempt_HTLCStatus.SUCCEEDED;
    case 2:
    case 'FAILED':
      return HTLCAttempt_HTLCStatus.FAILED;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return HTLCAttempt_HTLCStatus.UNRECOGNIZED;
  }
}

export function hTLCAttempt_HTLCStatusToJSON(
  object: HTLCAttempt_HTLCStatus,
): string {
  switch (object) {
    case HTLCAttempt_HTLCStatus.IN_FLIGHT:
      return 'IN_FLIGHT';
    case HTLCAttempt_HTLCStatus.SUCCEEDED:
      return 'SUCCEEDED';
    case HTLCAttempt_HTLCStatus.FAILED:
      return 'FAILED';
    default:
      return 'UNKNOWN';
  }
}

export interface ListPaymentsRequest {
  /**
   * If true, then return payments that have not yet fully completed. This means
   * that pending payments, as well as failed payments will show up if this
   * field is set to true. This flag doesn't change the meaning of the indices,
   * which are tied to individual payments.
   */
  includeIncomplete: boolean;
  /**
   * The index of a payment that will be used as either the start or end of a
   * query to determine which payments should be returned in the response. The
   * index_offset is exclusive. In the case of a zero index_offset, the query
   * will start with the oldest payment when paginating forwards, or will end
   * with the most recent payment when paginating backwards.
   */
  indexOffset: string;
  /** The maximal number of payments returned in the response to this query. */
  maxPayments: string;
  /**
   * If set, the payments returned will result from seeking backwards from the
   * specified index offset. This can be used to paginate backwards. The order
   * of the returned payments is always oldest first (ascending index order).
   */
  reversed: boolean;
}

export interface ListPaymentsResponse {
  /** The list of payments */
  payments: Payment[];
  /**
   * The index of the first item in the set of returned payments. This can be
   * used as the index_offset to continue seeking backwards in the next request.
   */
  firstIndexOffset: string;
  /**
   * The index of the last item in the set of returned payments. This can be used
   * as the index_offset to continue seeking forwards in the next request.
   */
  lastIndexOffset: string;
}

export interface DeletePaymentRequest {
  /** Payment hash to delete. */
  paymentHash: Uint8Array;
  /** Only delete failed HTLCs from the payment, not the payment itself. */
  failedHtlcsOnly: boolean;
}

export interface DeleteAllPaymentsRequest {
  /** Only delete failed payments. */
  failedPaymentsOnly: boolean;
  /** Only delete failed HTLCs from payments, not the payment itself. */
  failedHtlcsOnly: boolean;
}

export interface DeletePaymentResponse {}

export interface DeleteAllPaymentsResponse {}

export interface AbandonChannelRequest {
  channelPoint: ChannelPoint | undefined;
  pendingFundingShimOnly: boolean;
  /**
   * Override the requirement for being in dev mode by setting this to true and
   * confirming the user knows what they are doing and this is a potential foot
   * gun to lose funds if used on active channels.
   */
  iKnowWhatIAmDoing: boolean;
}

export interface AbandonChannelResponse {}

export interface DebugLevelRequest {
  show: boolean;
  levelSpec: string;
}

export interface DebugLevelResponse {
  subSystems: string;
}

export interface PayReqString {
  /** The payment request string to be decoded */
  payReq: string;
}

export interface PayReq {
  destination: string;
  paymentHash: string;
  numSatoshis: string;
  timestamp: string;
  expiry: string;
  description: string;
  descriptionHash: string;
  fallbackAddr: string;
  cltvExpiry: string;
  routeHints: RouteHint[];
  paymentAddr: Uint8Array;
  numMsat: string;
  features: Record<number, Feature>;
}

export interface PayReq_FeaturesEntry {
  key: number;
  value: Feature | undefined;
}

export interface Feature {
  name: string;
  isRequired: boolean;
  isKnown: boolean;
}

export interface FeeReportRequest {}

export interface ChannelFeeReport {
  /** The short channel id that this fee report belongs to. */
  chanId: string;
  /** The channel that this fee report belongs to. */
  channelPoint: string;
  /** The base fee charged regardless of the number of milli-satoshis sent. */
  baseFeeMsat: string;
  /**
   * The amount charged per milli-satoshis transferred expressed in
   * millionths of a satoshi.
   */
  feePerMil: string;
  /**
   * The effective fee rate in milli-satoshis. Computed by dividing the
   * fee_per_mil value by 1 million.
   */
  feeRate: number;
}

export interface FeeReportResponse {
  /**
   * An array of channel fee reports which describes the current fee schedule
   * for each channel.
   */
  channelFees: ChannelFeeReport[];
  /**
   * The total amount of fee revenue (in satoshis) the switch has collected
   * over the past 24 hrs.
   */
  dayFeeSum: string;
  /**
   * The total amount of fee revenue (in satoshis) the switch has collected
   * over the past 1 week.
   */
  weekFeeSum: string;
  /**
   * The total amount of fee revenue (in satoshis) the switch has collected
   * over the past 1 month.
   */
  monthFeeSum: string;
}

export interface PolicyUpdateRequest {
  /** If set, then this update applies to all currently active channels. */
  global: boolean | undefined;
  /** If set, this update will target a specific channel. */
  chanPoint: ChannelPoint | undefined;
  /** The base fee charged regardless of the number of milli-satoshis sent. */
  baseFeeMsat: string;
  /**
   * The effective fee rate in milli-satoshis. The precision of this value
   * goes up to 6 decimal places, so 1e-6.
   */
  feeRate: number;
  /** The required timelock delta for HTLCs forwarded over the channel. */
  timeLockDelta: number;
  /**
   * If set, the maximum HTLC size in milli-satoshis. If unset, the maximum
   * HTLC will be unchanged.
   */
  maxHtlcMsat: string;
  /**
   * The minimum HTLC size in milli-satoshis. Only applied if
   * min_htlc_msat_specified is true.
   */
  minHtlcMsat: string;
  /** If true, min_htlc_msat is applied. */
  minHtlcMsatSpecified: boolean;
}

export interface FailedUpdate {
  /** The outpoint in format txid:n */
  outpoint: OutPoint | undefined;
  /** Reason for the policy update failure. */
  reason: UpdateFailure;
  /** A string representation of the policy update error. */
  updateError: string;
}

export interface PolicyUpdateResponse {
  /** List of failed policy updates. */
  failedUpdates: FailedUpdate[];
}

export interface ForwardingHistoryRequest {
  /**
   * Start time is the starting point of the forwarding history request. All
   * records beyond this point will be included, respecting the end time, and
   * the index offset.
   */
  startTime: string;
  /**
   * End time is the end point of the forwarding history request. The
   * response will carry at most 50k records between the start time and the
   * end time. The index offset can be used to implement pagination.
   */
  endTime: string;
  /**
   * Index offset is the offset in the time series to start at. As each
   * response can only contain 50k records, callers can use this to skip
   * around within a packed time series.
   */
  indexOffset: number;
  /** The max number of events to return in the response to this query. */
  numMaxEvents: number;
}

export interface ForwardingEvent {
  /**
   * Timestamp is the time (unix epoch offset) that this circuit was
   * completed. Deprecated by timestamp_ns.
   *
   * @deprecated
   */
  timestamp: string;
  /** The incoming channel ID that carried the HTLC that created the circuit. */
  chanIdIn: string;
  /**
   * The outgoing channel ID that carried the preimage that completed the
   * circuit.
   */
  chanIdOut: string;
  /**
   * The total amount (in satoshis) of the incoming HTLC that created half
   * the circuit.
   */
  amtIn: string;
  /**
   * The total amount (in satoshis) of the outgoing HTLC that created the
   * second half of the circuit.
   */
  amtOut: string;
  /** The total fee (in satoshis) that this payment circuit carried. */
  fee: string;
  /** The total fee (in milli-satoshis) that this payment circuit carried. */
  feeMsat: string;
  /**
   * The total amount (in milli-satoshis) of the incoming HTLC that created
   * half the circuit.
   */
  amtInMsat: string;
  /**
   * The total amount (in milli-satoshis) of the outgoing HTLC that created
   * the second half of the circuit.
   */
  amtOutMsat: string;
  /**
   * The number of nanoseconds elapsed since January 1, 1970 UTC when this
   * circuit was completed.
   */
  timestampNs: string;
}

export interface ForwardingHistoryResponse {
  /**
   * A list of forwarding events from the time slice of the time series
   * specified in the request.
   */
  forwardingEvents: ForwardingEvent[];
  /**
   * The index of the last time in the set of returned forwarding events. Can
   * be used to seek further, pagination style.
   */
  lastOffsetIndex: number;
}

export interface ExportChannelBackupRequest {
  /** The target channel point to obtain a back up for. */
  chanPoint: ChannelPoint | undefined;
}

export interface ChannelBackup {
  /** Identifies the channel that this backup belongs to. */
  chanPoint: ChannelPoint | undefined;
  /**
   * Is an encrypted single-chan backup. this can be passed to
   * RestoreChannelBackups, or the WalletUnlocker Init and Unlock methods in
   * order to trigger the recovery protocol. When using REST, this field must be
   * encoded as base64.
   */
  chanBackup: Uint8Array;
}

export interface MultiChanBackup {
  /** Is the set of all channels that are included in this multi-channel backup. */
  chanPoints: ChannelPoint[];
  /**
   * A single encrypted blob containing all the static channel backups of the
   * channel listed above. This can be stored as a single file or blob, and
   * safely be replaced with any prior/future versions. When using REST, this
   * field must be encoded as base64.
   */
  multiChanBackup: Uint8Array;
}

export interface ChanBackupExportRequest {}

export interface ChanBackupSnapshot {
  /**
   * The set of new channels that have been added since the last channel backup
   * snapshot was requested.
   */
  singleChanBackups: ChannelBackups | undefined;
  /**
   * A multi-channel backup that covers all open channels currently known to
   * lnd.
   */
  multiChanBackup: MultiChanBackup | undefined;
}

export interface ChannelBackups {
  /** A set of single-chan static channel backups. */
  chanBackups: ChannelBackup[];
}

export interface RestoreChanBackupRequest {
  /** The channels to restore as a list of channel/backup pairs. */
  chanBackups: ChannelBackups | undefined;
  /**
   * The channels to restore in the packed multi backup format. When using
   * REST, this field must be encoded as base64.
   */
  multiChanBackup: Uint8Array | undefined;
}

export interface RestoreBackupResponse {}

export interface ChannelBackupSubscription {}

export interface VerifyChanBackupResponse {}

export interface MacaroonPermission {
  /** The entity a permission grants access to. */
  entity: string;
  /** The action that is granted. */
  action: string;
}

export interface BakeMacaroonRequest {
  /** The list of permissions the new macaroon should grant. */
  permissions: MacaroonPermission[];
  /** The root key ID used to create the macaroon, must be a positive integer. */
  rootKeyId: string;
  /**
   * Informs the RPC on whether to allow external permissions that LND is not
   * aware of.
   */
  allowExternalPermissions: boolean;
}

export interface BakeMacaroonResponse {
  /** The hex encoded macaroon, serialized in binary format. */
  macaroon: string;
}

export interface ListMacaroonIDsRequest {}

export interface ListMacaroonIDsResponse {
  /** The list of root key IDs that are in use. */
  rootKeyIds: string[];
}

export interface DeleteMacaroonIDRequest {
  /** The root key ID to be removed. */
  rootKeyId: string;
}

export interface DeleteMacaroonIDResponse {
  /** A boolean indicates that the deletion is successful. */
  deleted: boolean;
}

export interface MacaroonPermissionList {
  /** A list of macaroon permissions. */
  permissions: MacaroonPermission[];
}

export interface ListPermissionsRequest {}

export interface ListPermissionsResponse {
  /**
   * A map between all RPC method URIs and their required macaroon permissions to
   * access them.
   */
  methodPermissions: Record<string, MacaroonPermissionList>;
}

export interface ListPermissionsResponse_MethodPermissionsEntry {
  key: string;
  value: MacaroonPermissionList | undefined;
}

export interface Failure {
  /** Failure code as defined in the Lightning spec */
  code: Failure_FailureCode;
  /** An optional channel update message. */
  channelUpdate: ChannelUpdate | undefined;
  /** A failure type-dependent htlc value. */
  htlcMsat: string;
  /** The sha256 sum of the onion payload. */
  onionSha256: Uint8Array;
  /** A failure type-dependent cltv expiry value. */
  cltvExpiry: number;
  /** A failure type-dependent flags value. */
  flags: number;
  /**
   * The position in the path of the intermediate or final node that generated
   * the failure message. Position zero is the sender node.
   */
  failureSourceIndex: number;
  /** A failure type-dependent block height. */
  height: number;
}

export enum Failure_FailureCode {
  /**
   * RESERVED - The numbers assigned in this enumeration match the failure codes as
   * defined in BOLT #4. Because protobuf 3 requires enums to start with 0,
   * a RESERVED value is added.
   */
  RESERVED = 0,
  INCORRECT_OR_UNKNOWN_PAYMENT_DETAILS = 1,
  INCORRECT_PAYMENT_AMOUNT = 2,
  FINAL_INCORRECT_CLTV_EXPIRY = 3,
  FINAL_INCORRECT_HTLC_AMOUNT = 4,
  FINAL_EXPIRY_TOO_SOON = 5,
  INVALID_REALM = 6,
  EXPIRY_TOO_SOON = 7,
  INVALID_ONION_VERSION = 8,
  INVALID_ONION_HMAC = 9,
  INVALID_ONION_KEY = 10,
  AMOUNT_BELOW_MINIMUM = 11,
  FEE_INSUFFICIENT = 12,
  INCORRECT_CLTV_EXPIRY = 13,
  CHANNEL_DISABLED = 14,
  TEMPORARY_CHANNEL_FAILURE = 15,
  REQUIRED_NODE_FEATURE_MISSING = 16,
  REQUIRED_CHANNEL_FEATURE_MISSING = 17,
  UNKNOWN_NEXT_PEER = 18,
  TEMPORARY_NODE_FAILURE = 19,
  PERMANENT_NODE_FAILURE = 20,
  PERMANENT_CHANNEL_FAILURE = 21,
  EXPIRY_TOO_FAR = 22,
  MPP_TIMEOUT = 23,
  INVALID_ONION_PAYLOAD = 24,
  /** INTERNAL_FAILURE - An internal error occurred. */
  INTERNAL_FAILURE = 997,
  /** UNKNOWN_FAILURE - The error source is known, but the failure itself couldn't be decoded. */
  UNKNOWN_FAILURE = 998,
  /**
   * UNREADABLE_FAILURE - An unreadable failure result is returned if the received failure message
   * cannot be decrypted. In that case the error source is unknown.
   */
  UNREADABLE_FAILURE = 999,
  UNRECOGNIZED = -1,
}

export function failure_FailureCodeFromJSON(object: any): Failure_FailureCode {
  switch (object) {
    case 0:
    case 'RESERVED':
      return Failure_FailureCode.RESERVED;
    case 1:
    case 'INCORRECT_OR_UNKNOWN_PAYMENT_DETAILS':
      return Failure_FailureCode.INCORRECT_OR_UNKNOWN_PAYMENT_DETAILS;
    case 2:
    case 'INCORRECT_PAYMENT_AMOUNT':
      return Failure_FailureCode.INCORRECT_PAYMENT_AMOUNT;
    case 3:
    case 'FINAL_INCORRECT_CLTV_EXPIRY':
      return Failure_FailureCode.FINAL_INCORRECT_CLTV_EXPIRY;
    case 4:
    case 'FINAL_INCORRECT_HTLC_AMOUNT':
      return Failure_FailureCode.FINAL_INCORRECT_HTLC_AMOUNT;
    case 5:
    case 'FINAL_EXPIRY_TOO_SOON':
      return Failure_FailureCode.FINAL_EXPIRY_TOO_SOON;
    case 6:
    case 'INVALID_REALM':
      return Failure_FailureCode.INVALID_REALM;
    case 7:
    case 'EXPIRY_TOO_SOON':
      return Failure_FailureCode.EXPIRY_TOO_SOON;
    case 8:
    case 'INVALID_ONION_VERSION':
      return Failure_FailureCode.INVALID_ONION_VERSION;
    case 9:
    case 'INVALID_ONION_HMAC':
      return Failure_FailureCode.INVALID_ONION_HMAC;
    case 10:
    case 'INVALID_ONION_KEY':
      return Failure_FailureCode.INVALID_ONION_KEY;
    case 11:
    case 'AMOUNT_BELOW_MINIMUM':
      return Failure_FailureCode.AMOUNT_BELOW_MINIMUM;
    case 12:
    case 'FEE_INSUFFICIENT':
      return Failure_FailureCode.FEE_INSUFFICIENT;
    case 13:
    case 'INCORRECT_CLTV_EXPIRY':
      return Failure_FailureCode.INCORRECT_CLTV_EXPIRY;
    case 14:
    case 'CHANNEL_DISABLED':
      return Failure_FailureCode.CHANNEL_DISABLED;
    case 15:
    case 'TEMPORARY_CHANNEL_FAILURE':
      return Failure_FailureCode.TEMPORARY_CHANNEL_FAILURE;
    case 16:
    case 'REQUIRED_NODE_FEATURE_MISSING':
      return Failure_FailureCode.REQUIRED_NODE_FEATURE_MISSING;
    case 17:
    case 'REQUIRED_CHANNEL_FEATURE_MISSING':
      return Failure_FailureCode.REQUIRED_CHANNEL_FEATURE_MISSING;
    case 18:
    case 'UNKNOWN_NEXT_PEER':
      return Failure_FailureCode.UNKNOWN_NEXT_PEER;
    case 19:
    case 'TEMPORARY_NODE_FAILURE':
      return Failure_FailureCode.TEMPORARY_NODE_FAILURE;
    case 20:
    case 'PERMANENT_NODE_FAILURE':
      return Failure_FailureCode.PERMANENT_NODE_FAILURE;
    case 21:
    case 'PERMANENT_CHANNEL_FAILURE':
      return Failure_FailureCode.PERMANENT_CHANNEL_FAILURE;
    case 22:
    case 'EXPIRY_TOO_FAR':
      return Failure_FailureCode.EXPIRY_TOO_FAR;
    case 23:
    case 'MPP_TIMEOUT':
      return Failure_FailureCode.MPP_TIMEOUT;
    case 24:
    case 'INVALID_ONION_PAYLOAD':
      return Failure_FailureCode.INVALID_ONION_PAYLOAD;
    case 997:
    case 'INTERNAL_FAILURE':
      return Failure_FailureCode.INTERNAL_FAILURE;
    case 998:
    case 'UNKNOWN_FAILURE':
      return Failure_FailureCode.UNKNOWN_FAILURE;
    case 999:
    case 'UNREADABLE_FAILURE':
      return Failure_FailureCode.UNREADABLE_FAILURE;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Failure_FailureCode.UNRECOGNIZED;
  }
}

export function failure_FailureCodeToJSON(object: Failure_FailureCode): string {
  switch (object) {
    case Failure_FailureCode.RESERVED:
      return 'RESERVED';
    case Failure_FailureCode.INCORRECT_OR_UNKNOWN_PAYMENT_DETAILS:
      return 'INCORRECT_OR_UNKNOWN_PAYMENT_DETAILS';
    case Failure_FailureCode.INCORRECT_PAYMENT_AMOUNT:
      return 'INCORRECT_PAYMENT_AMOUNT';
    case Failure_FailureCode.FINAL_INCORRECT_CLTV_EXPIRY:
      return 'FINAL_INCORRECT_CLTV_EXPIRY';
    case Failure_FailureCode.FINAL_INCORRECT_HTLC_AMOUNT:
      return 'FINAL_INCORRECT_HTLC_AMOUNT';
    case Failure_FailureCode.FINAL_EXPIRY_TOO_SOON:
      return 'FINAL_EXPIRY_TOO_SOON';
    case Failure_FailureCode.INVALID_REALM:
      return 'INVALID_REALM';
    case Failure_FailureCode.EXPIRY_TOO_SOON:
      return 'EXPIRY_TOO_SOON';
    case Failure_FailureCode.INVALID_ONION_VERSION:
      return 'INVALID_ONION_VERSION';
    case Failure_FailureCode.INVALID_ONION_HMAC:
      return 'INVALID_ONION_HMAC';
    case Failure_FailureCode.INVALID_ONION_KEY:
      return 'INVALID_ONION_KEY';
    case Failure_FailureCode.AMOUNT_BELOW_MINIMUM:
      return 'AMOUNT_BELOW_MINIMUM';
    case Failure_FailureCode.FEE_INSUFFICIENT:
      return 'FEE_INSUFFICIENT';
    case Failure_FailureCode.INCORRECT_CLTV_EXPIRY:
      return 'INCORRECT_CLTV_EXPIRY';
    case Failure_FailureCode.CHANNEL_DISABLED:
      return 'CHANNEL_DISABLED';
    case Failure_FailureCode.TEMPORARY_CHANNEL_FAILURE:
      return 'TEMPORARY_CHANNEL_FAILURE';
    case Failure_FailureCode.REQUIRED_NODE_FEATURE_MISSING:
      return 'REQUIRED_NODE_FEATURE_MISSING';
    case Failure_FailureCode.REQUIRED_CHANNEL_FEATURE_MISSING:
      return 'REQUIRED_CHANNEL_FEATURE_MISSING';
    case Failure_FailureCode.UNKNOWN_NEXT_PEER:
      return 'UNKNOWN_NEXT_PEER';
    case Failure_FailureCode.TEMPORARY_NODE_FAILURE:
      return 'TEMPORARY_NODE_FAILURE';
    case Failure_FailureCode.PERMANENT_NODE_FAILURE:
      return 'PERMANENT_NODE_FAILURE';
    case Failure_FailureCode.PERMANENT_CHANNEL_FAILURE:
      return 'PERMANENT_CHANNEL_FAILURE';
    case Failure_FailureCode.EXPIRY_TOO_FAR:
      return 'EXPIRY_TOO_FAR';
    case Failure_FailureCode.MPP_TIMEOUT:
      return 'MPP_TIMEOUT';
    case Failure_FailureCode.INVALID_ONION_PAYLOAD:
      return 'INVALID_ONION_PAYLOAD';
    case Failure_FailureCode.INTERNAL_FAILURE:
      return 'INTERNAL_FAILURE';
    case Failure_FailureCode.UNKNOWN_FAILURE:
      return 'UNKNOWN_FAILURE';
    case Failure_FailureCode.UNREADABLE_FAILURE:
      return 'UNREADABLE_FAILURE';
    default:
      return 'UNKNOWN';
  }
}

export interface ChannelUpdate {
  /**
   * The signature that validates the announced data and proves the ownership
   * of node id.
   */
  signature: Uint8Array;
  /**
   * The target chain that this channel was opened within. This value
   * should be the genesis hash of the target chain. Along with the short
   * channel ID, this uniquely identifies the channel globally in a
   * blockchain.
   */
  chainHash: Uint8Array;
  /** The unique description of the funding transaction. */
  chanId: string;
  /**
   * A timestamp that allows ordering in the case of multiple announcements.
   * We should ignore the message if timestamp is not greater than the
   * last-received.
   */
  timestamp: number;
  /**
   * The bitfield that describes whether optional fields are present in this
   * update. Currently, the least-significant bit must be set to 1 if the
   * optional field MaxHtlc is present.
   */
  messageFlags: number;
  /**
   * The bitfield that describes additional meta-data concerning how the
   * update is to be interpreted. Currently, the least-significant bit must be
   * set to 0 if the creating node corresponds to the first node in the
   * previously sent channel announcement and 1 otherwise. If the second bit
   * is set, then the channel is set to be disabled.
   */
  channelFlags: number;
  /**
   * The minimum number of blocks this node requires to be added to the expiry
   * of HTLCs. This is a security parameter determined by the node operator.
   * This value represents the required gap between the time locks of the
   * incoming and outgoing HTLC's set to this node.
   */
  timeLockDelta: number;
  /** The minimum HTLC value which will be accepted. */
  htlcMinimumMsat: string;
  /**
   * The base fee that must be used for incoming HTLC's to this particular
   * channel. This value will be tacked onto the required for a payment
   * independent of the size of the payment.
   */
  baseFee: number;
  /** The fee rate that will be charged per millionth of a satoshi. */
  feeRate: number;
  /** The maximum HTLC value which will be accepted. */
  htlcMaximumMsat: string;
  /**
   * The set of data that was appended to this message, some of which we may
   * not actually know how to iterate or parse. By holding onto this data, we
   * ensure that we're able to properly validate the set of signatures that
   * cover these new fields, and ensure we're able to make upgrades to the
   * network in a forwards compatible manner.
   */
  extraOpaqueData: Uint8Array;
}

export interface MacaroonId {
  nonce: Uint8Array;
  storageId: Uint8Array;
  ops: Op[];
}

export interface Op {
  entity: string;
  actions: string[];
}

export interface CheckMacPermRequest {
  macaroon: Uint8Array;
  permissions: MacaroonPermission[];
  fullMethod: string;
}

export interface CheckMacPermResponse {
  valid: boolean;
}

export interface RPCMiddlewareRequest {
  /**
   * The unique ID of the intercepted original gRPC request. Useful for mapping
   * request to response when implementing full duplex message interception. For
   * streaming requests, this will be the same ID for all incoming and outgoing
   * middleware intercept messages of the _same_ stream.
   */
  requestId: string;
  /**
   * The raw bytes of the complete macaroon as sent by the gRPC client in the
   * original request. This might be empty for a request that doesn't require
   * macaroons such as the wallet unlocker RPCs.
   */
  rawMacaroon: Uint8Array;
  /**
   * The parsed condition of the macaroon's custom caveat for convenient access.
   * This field only contains the value of the custom caveat that the handling
   * middleware has registered itself for. The condition _must_ be validated for
   * messages of intercept_type stream_auth and request!
   */
  customCaveatCondition: string;
  /**
   * Intercept stream authentication: each new streaming RPC call that is
   * initiated against lnd and contains the middleware's custom macaroon
   * caveat can be approved or denied based upon the macaroon in the stream
   * header. This message will only be sent for streaming RPCs, unary RPCs
   * must handle the macaroon authentication in the request interception to
   * avoid an additional message round trip between lnd and the middleware.
   */
  streamAuth: StreamAuth | undefined;
  /**
   * Intercept incoming gRPC client request message: all incoming messages,
   * both on streaming and unary RPCs, are forwarded to the middleware for
   * inspection. For unary RPC messages the middleware is also expected to
   * validate the custom macaroon caveat of the request.
   */
  request: RPCMessage | undefined;
  /**
   * Intercept outgoing gRPC response message: all outgoing messages, both on
   * streaming and unary RPCs, are forwarded to the middleware for inspection
   * and amendment. The response in this message is the original response as
   * it was generated by the main RPC server. It can either be accepted
   * (=forwarded to the client), replaced/overwritten with a new message of
   * the same type, or replaced by an error message.
   */
  response: RPCMessage | undefined;
  /**
   * The unique message ID of this middleware intercept message. There can be
   * multiple middleware intercept messages per single gRPC request (one for the
   * incoming request and one for the outgoing response) or gRPC stream (one for
   * each incoming message and one for each outgoing response). This message ID
   * must be referenced when responding (accepting/rejecting/modifying) to an
   * intercept message.
   */
  msgId: string;
}

export interface StreamAuth {
  /**
   * The full URI (in the format /<rpcpackage>.<ServiceName>/MethodName, for
   * example /lnrpc.Lightning/GetInfo) of the streaming RPC method that was just
   * established.
   */
  methodFullUri: string;
}

export interface RPCMessage {
  /**
   * The full URI (in the format /<rpcpackage>.<ServiceName>/MethodName, for
   * example /lnrpc.Lightning/GetInfo) of the RPC method the message was sent
   * to/from.
   */
  methodFullUri: string;
  /** Indicates whether the message was sent over a streaming RPC method or not. */
  streamRpc: boolean;
  /**
   * The full canonical gRPC name of the message type (in the format
   * <rpcpackage>.TypeName, for example lnrpc.GetInfoRequest).
   */
  typeName: string;
  /**
   * The full content of the gRPC message, serialized in the binary protobuf
   * format.
   */
  serialized: Uint8Array;
}

export interface RPCMiddlewareResponse {
  /**
   * The request message ID this response refers to. Must always be set when
   * giving feedback to an intercept but is ignored for the initial registration
   * message.
   */
  refMsgId: string;
  /**
   * The registration message identifies the middleware that's being
   * registered in lnd. The registration message must be sent immediately
   * after initiating the RegisterRpcMiddleware stream, otherwise lnd will
   * time out the attempt and terminate the request. NOTE: The middleware
   * will only receive interception messages for requests that contain a
   * macaroon with the custom caveat that the middleware declares it is
   * responsible for handling in the registration message! As a security
   * measure, _no_ middleware can intercept requests made with _unencumbered_
   * macaroons!
   */
  register: MiddlewareRegistration | undefined;
  /**
   * The middleware received an interception request and gives feedback to
   * it. The request_id indicates what message the feedback refers to.
   */
  feedback: InterceptFeedback | undefined;
}

export interface MiddlewareRegistration {
  /**
   * The name of the middleware to register. The name should be as informative
   * as possible and is logged on registration.
   */
  middlewareName: string;
  /**
   * The name of the custom macaroon caveat that this middleware is responsible
   * for. Only requests/responses that contain a macaroon with the registered
   * custom caveat are forwarded for interception to the middleware. The
   * exception being the read-only mode: All requests/responses are forwarded to
   * a middleware that requests read-only access but such a middleware won't be
   * allowed to _alter_ responses. As a security measure, _no_ middleware can
   * change responses to requests made with _unencumbered_ macaroons!
   * NOTE: Cannot be used at the same time as read_only_mode.
   */
  customMacaroonCaveatName: string;
  /**
   * Instead of defining a custom macaroon caveat name a middleware can register
   * itself for read-only access only. In that mode all requests/responses are
   * forwarded to the middleware but the middleware isn't allowed to alter any of
   * the responses.
   * NOTE: Cannot be used at the same time as custom_macaroon_caveat_name.
   */
  readOnlyMode: boolean;
}

export interface InterceptFeedback {
  /**
   * The error to return to the user. If this is non-empty, the incoming gRPC
   * stream/request is aborted and the error is returned to the gRPC client. If
   * this value is empty, it means the middleware accepts the stream/request/
   * response and the processing of it can continue.
   */
  error: string;
  /**
   * A boolean indicating that the gRPC response should be replaced/overwritten.
   * As its name suggests, this can only be used as a feedback to an intercepted
   * response RPC message and is ignored for feedback on any other message. This
   * boolean is needed because in protobuf an empty message is serialized as a
   * 0-length or nil byte slice and we wouldn't be able to distinguish between
   * an empty replacement message and the "don't replace anything" case.
   */
  replaceResponse: boolean;
  /**
   * If the replace_response field is set to true, this field must contain the
   * binary serialized gRPC response message in the protobuf format.
   */
  replacementSerialized: Uint8Array;
}

function createBaseSubscribeCustomMessagesRequest(): SubscribeCustomMessagesRequest {
  return {};
}

export const SubscribeCustomMessagesRequest = {
  encode(
    _: SubscribeCustomMessagesRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): SubscribeCustomMessagesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubscribeCustomMessagesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): SubscribeCustomMessagesRequest {
    const message = createBaseSubscribeCustomMessagesRequest();
    return message;
  },

  toJSON(_: SubscribeCustomMessagesRequest): unknown {
    const object: any = {};
    return object;
  },

  fromPartial(
    _: DeepPartial<SubscribeCustomMessagesRequest>,
  ): SubscribeCustomMessagesRequest {
    const message = createBaseSubscribeCustomMessagesRequest();
    return message;
  },
};

function createBaseCustomMessage(): CustomMessage {
  return {peer: new Uint8Array(), type: 0, data: new Uint8Array()};
}

export const CustomMessage = {
  encode(
    message: CustomMessage,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.peer.length > 0) {
      writer.uint32(10).bytes(message.peer);
    }

    if (message.type !== 0) {
      writer.uint32(16).uint32(message.type);
    }

    if (message.data.length > 0) {
      writer.uint32(26).bytes(message.data);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CustomMessage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCustomMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.peer = reader.bytes();
          break;
        case 2:
          message.type = reader.uint32();
          break;
        case 3:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): CustomMessage {
    const message = createBaseCustomMessage();
    message.peer =
      object.peer !== undefined && object.peer !== null
        ? bytesFromBase64(object.peer)
        : new Uint8Array();
    message.type =
      object.type !== undefined && object.type !== null
        ? Number(object.type)
        : 0;
    message.data =
      object.data !== undefined && object.data !== null
        ? bytesFromBase64(object.data)
        : new Uint8Array();
    return message;
  },

  toJSON(message: CustomMessage): unknown {
    const object: any = {};
    message.peer !== undefined &&
      (object.peer = base64FromBytes(
        message.peer !== undefined ? message.peer : new Uint8Array(),
      ));
    message.type !== undefined && (object.type = Math.round(message.type));
    message.data !== undefined &&
      (object.data = base64FromBytes(
        message.data !== undefined ? message.data : new Uint8Array(),
      ));
    return object;
  },

  fromPartial(object: DeepPartial<CustomMessage>): CustomMessage {
    const message = createBaseCustomMessage();
    message.peer = object.peer ?? new Uint8Array();
    message.type = object.type ?? 0;
    message.data = object.data ?? new Uint8Array();
    return message;
  },
};

function createBaseSendCustomMessageRequest(): SendCustomMessageRequest {
  return {peer: new Uint8Array(), type: 0, data: new Uint8Array()};
}

export const SendCustomMessageRequest = {
  encode(
    message: SendCustomMessageRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.peer.length > 0) {
      writer.uint32(10).bytes(message.peer);
    }

    if (message.type !== 0) {
      writer.uint32(16).uint32(message.type);
    }

    if (message.data.length > 0) {
      writer.uint32(26).bytes(message.data);
    }

    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): SendCustomMessageRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSendCustomMessageRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.peer = reader.bytes();
          break;
        case 2:
          message.type = reader.uint32();
          break;
        case 3:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SendCustomMessageRequest {
    const message = createBaseSendCustomMessageRequest();
    message.peer =
      object.peer !== undefined && object.peer !== null
        ? bytesFromBase64(object.peer)
        : new Uint8Array();
    message.type =
      object.type !== undefined && object.type !== null
        ? Number(object.type)
        : 0;
    message.data =
      object.data !== undefined && object.data !== null
        ? bytesFromBase64(object.data)
        : new Uint8Array();
    return message;
  },

  toJSON(message: SendCustomMessageRequest): unknown {
    const object: any = {};
    message.peer !== undefined &&
      (object.peer = base64FromBytes(
        message.peer !== undefined ? message.peer : new Uint8Array(),
      ));
    message.type !== undefined && (object.type = Math.round(message.type));
    message.data !== undefined &&
      (object.data = base64FromBytes(
        message.data !== undefined ? message.data : new Uint8Array(),
      ));
    return object;
  },

  fromPartial(
    object: DeepPartial<SendCustomMessageRequest>,
  ): SendCustomMessageRequest {
    const message = createBaseSendCustomMessageRequest();
    message.peer = object.peer ?? new Uint8Array();
    message.type = object.type ?? 0;
    message.data = object.data ?? new Uint8Array();
    return message;
  },
};

function createBaseSendCustomMessageResponse(): SendCustomMessageResponse {
  return {};
}

export const SendCustomMessageResponse = {
  encode(
    _: SendCustomMessageResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): SendCustomMessageResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSendCustomMessageResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): SendCustomMessageResponse {
    const message = createBaseSendCustomMessageResponse();
    return message;
  },

  toJSON(_: SendCustomMessageResponse): unknown {
    const object: any = {};
    return object;
  },

  fromPartial(
    _: DeepPartial<SendCustomMessageResponse>,
  ): SendCustomMessageResponse {
    const message = createBaseSendCustomMessageResponse();
    return message;
  },
};

function createBaseUtxo(): Utxo {
  return {
    addressType: 0,
    address: '',
    amountSat: '0',
    pkScript: '',
    outpoint: undefined,
    confirmations: '0',
  };
}

export const Utxo = {
  encode(message: Utxo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.addressType !== 0) {
      writer.uint32(8).int32(message.addressType);
    }

    if (message.address !== '') {
      writer.uint32(18).string(message.address);
    }

    if (message.amountSat !== '0') {
      writer.uint32(24).int64(message.amountSat);
    }

    if (message.pkScript !== '') {
      writer.uint32(34).string(message.pkScript);
    }

    if (message.outpoint !== undefined) {
      OutPoint.encode(message.outpoint, writer.uint32(42).fork()).ldelim();
    }

    if (message.confirmations !== '0') {
      writer.uint32(48).int64(message.confirmations);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Utxo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUtxo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addressType = reader.int32() as any;
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
          message.amountSat = longToString(reader.int64() as Long);
          break;
        case 4:
          message.pkScript = reader.string();
          break;
        case 5:
          message.outpoint = OutPoint.decode(reader, reader.uint32());
          break;
        case 6:
          message.confirmations = longToString(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Utxo {
    const message = createBaseUtxo();
    message.addressType =
      object.addressType !== undefined && object.addressType !== null
        ? addressTypeFromJSON(object.addressType)
        : 0;
    message.address =
      object.address !== undefined && object.address !== null
        ? String(object.address)
        : '';
    message.amountSat =
      object.amountSat !== undefined && object.amountSat !== null
        ? String(object.amountSat)
        : '0';
    message.pkScript =
      object.pkScript !== undefined && object.pkScript !== null
        ? String(object.pkScript)
        : '';
    message.outpoint =
      object.outpoint !== undefined && object.outpoint !== null
        ? OutPoint.fromJSON(object.outpoint)
        : undefined;
    message.confirmations =
      object.confirmations !== undefined && object.confirmations !== null
        ? String(object.confirmations)
        : '0';
    return message;
  },

  toJSON(message: Utxo): unknown {
    const object: any = {};
    message.addressType !== undefined &&
      (object.addressType = addressTypeToJSON(message.addressType));
    message.address !== undefined && (object.address = message.address);
    message.amountSat !== undefined && (object.amountSat = message.amountSat);
    message.pkScript !== undefined && (object.pkScript = message.pkScript);
    message.outpoint !== undefined &&
      (object.outpoint = message.outpoint
        ? OutPoint.toJSON(message.outpoint)
        : undefined);
    message.confirmations !== undefined &&
      (object.confirmations = message.confirmations);
    return object;
  },

  fromPartial(object: DeepPartial<Utxo>): Utxo {
    const message = createBaseUtxo();
    message.addressType = object.addressType ?? 0;
    message.address = object.address ?? '';
    message.amountSat = object.amountSat ?? '0';
    message.pkScript = object.pkScript ?? '';
    message.outpoint =
      object.outpoint !== undefined && object.outpoint !== null
        ? OutPoint.fromPartial(object.outpoint)
        : undefined;
    message.confirmations = object.confirmations ?? '0';
    return message;
  },
};

function createBaseTransaction(): Transaction {
  return {
    txHash: '',
    amount: '0',
    numConfirmations: 0,
    blockHash: '',
    blockHeight: 0,
    timeStamp: '0',
    totalFees: '0',
    destAddresses: [],
    rawTxHex: '',
    label: '',
  };
}

export const Transaction = {
  encode(
    message: Transaction,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.txHash !== '') {
      writer.uint32(10).string(message.txHash);
    }

    if (message.amount !== '0') {
      writer.uint32(16).int64(message.amount);
    }

    if (message.numConfirmations !== 0) {
      writer.uint32(24).int32(message.numConfirmations);
    }

    if (message.blockHash !== '') {
      writer.uint32(34).string(message.blockHash);
    }

    if (message.blockHeight !== 0) {
      writer.uint32(40).int32(message.blockHeight);
    }

    if (message.timeStamp !== '0') {
      writer.uint32(48).int64(message.timeStamp);
    }

    if (message.totalFees !== '0') {
      writer.uint32(56).int64(message.totalFees);
    }

    for (const v of message.destAddresses) {
      writer.uint32(66).string(v);
    }

    if (message.rawTxHex !== '') {
      writer.uint32(74).string(message.rawTxHex);
    }

    if (message.label !== '') {
      writer.uint32(82).string(message.label);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Transaction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransaction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txHash = reader.string();
          break;
        case 2:
          message.amount = longToString(reader.int64() as Long);
          break;
        case 3:
          message.numConfirmations = reader.int32();
          break;
        case 4:
          message.blockHash = reader.string();
          break;
        case 5:
          message.blockHeight = reader.int32();
          break;
        case 6:
          message.timeStamp = longToString(reader.int64() as Long);
          break;
        case 7:
          message.totalFees = longToString(reader.int64() as Long);
          break;
        case 8:
          message.destAddresses.push(reader.string());
          break;
        case 9:
          message.rawTxHex = reader.string();
          break;
        case 10:
          message.label = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Transaction {
    const message = createBaseTransaction();
    message.txHash =
      object.txHash !== undefined && object.txHash !== null
        ? String(object.txHash)
        : '';
    message.amount =
      object.amount !== undefined && object.amount !== null
        ? String(object.amount)
        : '0';
    message.numConfirmations =
      object.numConfirmations !== undefined && object.numConfirmations !== null
        ? Number(object.numConfirmations)
        : 0;
    message.blockHash =
      object.blockHash !== undefined && object.blockHash !== null
        ? String(object.blockHash)
        : '';
    message.blockHeight =
      object.blockHeight !== undefined && object.blockHeight !== null
        ? Number(object.blockHeight)
        : 0;
    message.timeStamp =
      object.timeStamp !== undefined && object.timeStamp !== null
        ? String(object.timeStamp)
        : '0';
    message.totalFees =
      object.totalFees !== undefined && object.totalFees !== null
        ? String(object.totalFees)
        : '0';
    message.destAddresses = (object.destAddresses ?? []).map((e: any) =>
      String(e),
    );
    message.rawTxHex =
      object.rawTxHex !== undefined && object.rawTxHex !== null
        ? String(object.rawTxHex)
        : '';
    message.label =
      object.label !== undefined && object.label !== null
        ? String(object.label)
        : '';
    return message;
  },

  toJSON(message: Transaction): unknown {
    const object: any = {};
    message.txHash !== undefined && (object.txHash = message.txHash);
    message.amount !== undefined && (object.amount = message.amount);
    message.numConfirmations !== undefined &&
      (object.numConfirmations = Math.round(message.numConfirmations));
    message.blockHash !== undefined && (object.blockHash = message.blockHash);
    message.blockHeight !== undefined &&
      (object.blockHeight = Math.round(message.blockHeight));
    message.timeStamp !== undefined && (object.timeStamp = message.timeStamp);
    message.totalFees !== undefined && (object.totalFees = message.totalFees);
    object.destAddresses = message.destAddresses
      ? message.destAddresses.map((e) => e)
      : [];
    message.rawTxHex !== undefined && (object.rawTxHex = message.rawTxHex);
    message.label !== undefined && (object.label = message.label);
    return object;
  },

  fromPartial(object: DeepPartial<Transaction>): Transaction {
    const message = createBaseTransaction();
    message.txHash = object.txHash ?? '';
    message.amount = object.amount ?? '0';
    message.numConfirmations = object.numConfirmations ?? 0;
    message.blockHash = object.blockHash ?? '';
    message.blockHeight = object.blockHeight ?? 0;
    message.timeStamp = object.timeStamp ?? '0';
    message.totalFees = object.totalFees ?? '0';
    message.destAddresses = object.destAddresses?.map((e) => e) || [];
    message.rawTxHex = object.rawTxHex ?? '';
    message.label = object.label ?? '';
    return message;
  },
};

function createBaseGetTransactionsRequest(): GetTransactionsRequest {
  return {startHeight: 0, endHeight: 0, account: ''};
}

export const GetTransactionsRequest = {
  encode(
    message: GetTransactionsRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.startHeight !== 0) {
      writer.uint32(8).int32(message.startHeight);
    }

    if (message.endHeight !== 0) {
      writer.uint32(16).int32(message.endHeight);
    }

    if (message.account !== '') {
      writer.uint32(26).string(message.account);
    }

    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): GetTransactionsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTransactionsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.startHeight = reader.int32();
          break;
        case 2:
          message.endHeight = reader.int32();
          break;
        case 3:
          message.account = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): GetTransactionsRequest {
    const message = createBaseGetTransactionsRequest();
    message.startHeight =
      object.startHeight !== undefined && object.startHeight !== null
        ? Number(object.startHeight)
        : 0;
    message.endHeight =
      object.endHeight !== undefined && object.endHeight !== null
        ? Number(object.endHeight)
        : 0;
    message.account =
      object.account !== undefined && object.account !== null
        ? String(object.account)
        : '';
    return message;
  },

  toJSON(message: GetTransactionsRequest): unknown {
    const object: any = {};
    message.startHeight !== undefined &&
      (object.startHeight = Math.round(message.startHeight));
    message.endHeight !== undefined &&
      (object.endHeight = Math.round(message.endHeight));
    message.account !== undefined && (object.account = message.account);
    return object;
  },

  fromPartial(
    object: DeepPartial<GetTransactionsRequest>,
  ): GetTransactionsRequest {
    const message = createBaseGetTransactionsRequest();
    message.startHeight = object.startHeight ?? 0;
    message.endHeight = object.endHeight ?? 0;
    message.account = object.account ?? '';
    return message;
  },
};

function createBaseTransactionDetails(): TransactionDetails {
  return {transactions: []};
}

export const TransactionDetails = {
  encode(
    message: TransactionDetails,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.transactions) {
      Transaction.encode(v, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TransactionDetails {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransactionDetails();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.transactions.push(
            Transaction.decode(reader, reader.uint32()),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): TransactionDetails {
    const message = createBaseTransactionDetails();
    message.transactions = (object.transactions ?? []).map((e: any) =>
      Transaction.fromJSON(e),
    );
    return message;
  },

  toJSON(message: TransactionDetails): unknown {
    const object: any = {};
    if (message.transactions) {
      object.transactions = message.transactions.map((e) =>
        e ? Transaction.toJSON(e) : undefined,
      );
    } else {
      object.transactions = [];
    }

    return object;
  },

  fromPartial(object: DeepPartial<TransactionDetails>): TransactionDetails {
    const message = createBaseTransactionDetails();
    message.transactions =
      object.transactions?.map((e) => Transaction.fromPartial(e)) || [];
    return message;
  },
};

function createBaseFeeLimit(): FeeLimit {
  return {fixed: undefined, fixedMsat: undefined, percent: undefined};
}

export const FeeLimit = {
  encode(
    message: FeeLimit,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.fixed !== undefined) {
      writer.uint32(8).int64(message.fixed);
    }

    if (message.fixedMsat !== undefined) {
      writer.uint32(24).int64(message.fixedMsat);
    }

    if (message.percent !== undefined) {
      writer.uint32(16).int64(message.percent);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FeeLimit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeeLimit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fixed = longToString(reader.int64() as Long);
          break;
        case 3:
          message.fixedMsat = longToString(reader.int64() as Long);
          break;
        case 2:
          message.percent = longToString(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): FeeLimit {
    const message = createBaseFeeLimit();
    message.fixed =
      object.fixed !== undefined && object.fixed !== null
        ? String(object.fixed)
        : undefined;
    message.fixedMsat =
      object.fixedMsat !== undefined && object.fixedMsat !== null
        ? String(object.fixedMsat)
        : undefined;
    message.percent =
      object.percent !== undefined && object.percent !== null
        ? String(object.percent)
        : undefined;
    return message;
  },

  toJSON(message: FeeLimit): unknown {
    const object: any = {};
    message.fixed !== undefined && (object.fixed = message.fixed);
    message.fixedMsat !== undefined && (object.fixedMsat = message.fixedMsat);
    message.percent !== undefined && (object.percent = message.percent);
    return object;
  },

  fromPartial(object: DeepPartial<FeeLimit>): FeeLimit {
    const message = createBaseFeeLimit();
    message.fixed = object.fixed ?? undefined;
    message.fixedMsat = object.fixedMsat ?? undefined;
    message.percent = object.percent ?? undefined;
    return message;
  },
};

function createBaseSendRequest(): SendRequest {
  return {
    dest: new Uint8Array(),
    destString: '',
    amt: '0',
    amtMsat: '0',
    paymentHash: new Uint8Array(),
    paymentHashString: '',
    paymentRequest: '',
    finalCltvDelta: 0,
    feeLimit: undefined,
    outgoingChanId: '0',
    lastHopPubkey: new Uint8Array(),
    cltvLimit: 0,
    destCustomRecords: {},
    allowSelfPayment: false,
    destFeatures: [],
    paymentAddr: new Uint8Array(),
  };
}

export const SendRequest = {
  encode(
    message: SendRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.dest.length > 0) {
      writer.uint32(10).bytes(message.dest);
    }

    if (message.destString !== '') {
      writer.uint32(18).string(message.destString);
    }

    if (message.amt !== '0') {
      writer.uint32(24).int64(message.amt);
    }

    if (message.amtMsat !== '0') {
      writer.uint32(96).int64(message.amtMsat);
    }

    if (message.paymentHash.length > 0) {
      writer.uint32(34).bytes(message.paymentHash);
    }

    if (message.paymentHashString !== '') {
      writer.uint32(42).string(message.paymentHashString);
    }

    if (message.paymentRequest !== '') {
      writer.uint32(50).string(message.paymentRequest);
    }

    if (message.finalCltvDelta !== 0) {
      writer.uint32(56).int32(message.finalCltvDelta);
    }

    if (message.feeLimit !== undefined) {
      FeeLimit.encode(message.feeLimit, writer.uint32(66).fork()).ldelim();
    }

    if (message.outgoingChanId !== '0') {
      writer.uint32(72).uint64(message.outgoingChanId);
    }

    if (message.lastHopPubkey.length > 0) {
      writer.uint32(106).bytes(message.lastHopPubkey);
    }

    if (message.cltvLimit !== 0) {
      writer.uint32(80).uint32(message.cltvLimit);
    }

    for (const [key, value] of Object.entries(message.destCustomRecords)) {
      SendRequest_DestCustomRecordsEntry.encode(
        {key: key as any, value},
        writer.uint32(90).fork(),
      ).ldelim();
    }

    if (message.allowSelfPayment) {
      writer.uint32(112).bool(message.allowSelfPayment);
    }

    writer.uint32(122).fork();
    for (const v of message.destFeatures) {
      writer.int32(v);
    }

    writer.ldelim();
    if (message.paymentAddr.length > 0) {
      writer.uint32(130).bytes(message.paymentAddr);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SendRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSendRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.dest = reader.bytes();
          break;
        case 2:
          message.destString = reader.string();
          break;
        case 3:
          message.amt = longToString(reader.int64() as Long);
          break;
        case 12:
          message.amtMsat = longToString(reader.int64() as Long);
          break;
        case 4:
          message.paymentHash = reader.bytes();
          break;
        case 5:
          message.paymentHashString = reader.string();
          break;
        case 6:
          message.paymentRequest = reader.string();
          break;
        case 7:
          message.finalCltvDelta = reader.int32();
          break;
        case 8:
          message.feeLimit = FeeLimit.decode(reader, reader.uint32());
          break;
        case 9:
          message.outgoingChanId = longToString(reader.uint64() as Long);
          break;
        case 13:
          message.lastHopPubkey = reader.bytes();
          break;
        case 10:
          message.cltvLimit = reader.uint32();
          break;
        case 11:
          const entry11 = SendRequest_DestCustomRecordsEntry.decode(
            reader,
            reader.uint32(),
          );
          if (entry11.value !== undefined) {
            message.destCustomRecords[entry11.key] = entry11.value;
          }

          break;
        case 14:
          message.allowSelfPayment = reader.bool();
          break;
        case 15:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.destFeatures.push(reader.int32() as any);
            }
          } else {
            message.destFeatures.push(reader.int32() as any);
          }

          break;
        case 16:
          message.paymentAddr = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SendRequest {
    const message = createBaseSendRequest();
    message.dest =
      object.dest !== undefined && object.dest !== null
        ? bytesFromBase64(object.dest)
        : new Uint8Array();
    message.destString =
      object.destString !== undefined && object.destString !== null
        ? String(object.destString)
        : '';
    message.amt =
      object.amt !== undefined && object.amt !== null
        ? String(object.amt)
        : '0';
    message.amtMsat =
      object.amtMsat !== undefined && object.amtMsat !== null
        ? String(object.amtMsat)
        : '0';
    message.paymentHash =
      object.paymentHash !== undefined && object.paymentHash !== null
        ? bytesFromBase64(object.paymentHash)
        : new Uint8Array();
    message.paymentHashString =
      object.paymentHashString !== undefined &&
      object.paymentHashString !== null
        ? String(object.paymentHashString)
        : '';
    message.paymentRequest =
      object.paymentRequest !== undefined && object.paymentRequest !== null
        ? String(object.paymentRequest)
        : '';
    message.finalCltvDelta =
      object.finalCltvDelta !== undefined && object.finalCltvDelta !== null
        ? Number(object.finalCltvDelta)
        : 0;
    message.feeLimit =
      object.feeLimit !== undefined && object.feeLimit !== null
        ? FeeLimit.fromJSON(object.feeLimit)
        : undefined;
    message.outgoingChanId =
      object.outgoingChanId !== undefined && object.outgoingChanId !== null
        ? String(object.outgoingChanId)
        : '0';
    message.lastHopPubkey =
      object.lastHopPubkey !== undefined && object.lastHopPubkey !== null
        ? bytesFromBase64(object.lastHopPubkey)
        : new Uint8Array();
    message.cltvLimit =
      object.cltvLimit !== undefined && object.cltvLimit !== null
        ? Number(object.cltvLimit)
        : 0;
    message.destCustomRecords = Object.entries(
      object.destCustomRecords ?? {},
    ).reduce<Record<string, Uint8Array>>((acc, [key, value]) => {
      acc[key] = bytesFromBase64(value as string);
      return acc;
    }, {});
    message.allowSelfPayment =
      object.allowSelfPayment !== undefined && object.allowSelfPayment !== null
        ? Boolean(object.allowSelfPayment)
        : false;
    message.destFeatures = (object.destFeatures ?? []).map((e: any) =>
      featureBitFromJSON(e),
    );
    message.paymentAddr =
      object.paymentAddr !== undefined && object.paymentAddr !== null
        ? bytesFromBase64(object.paymentAddr)
        : new Uint8Array();
    return message;
  },

  toJSON(message: SendRequest): unknown {
    const object: any = {};
    message.dest !== undefined &&
      (object.dest = base64FromBytes(
        message.dest !== undefined ? message.dest : new Uint8Array(),
      ));
    message.destString !== undefined &&
      (object.destString = message.destString);
    message.amt !== undefined && (object.amt = message.amt);
    message.amtMsat !== undefined && (object.amtMsat = message.amtMsat);
    message.paymentHash !== undefined &&
      (object.paymentHash = base64FromBytes(
        message.paymentHash !== undefined
          ? message.paymentHash
          : new Uint8Array(),
      ));
    message.paymentHashString !== undefined &&
      (object.paymentHashString = message.paymentHashString);
    message.paymentRequest !== undefined &&
      (object.paymentRequest = message.paymentRequest);
    message.finalCltvDelta !== undefined &&
      (object.finalCltvDelta = Math.round(message.finalCltvDelta));
    message.feeLimit !== undefined &&
      (object.feeLimit = message.feeLimit
        ? FeeLimit.toJSON(message.feeLimit)
        : undefined);
    message.outgoingChanId !== undefined &&
      (object.outgoingChanId = message.outgoingChanId);
    message.lastHopPubkey !== undefined &&
      (object.lastHopPubkey = base64FromBytes(
        message.lastHopPubkey !== undefined
          ? message.lastHopPubkey
          : new Uint8Array(),
      ));
    message.cltvLimit !== undefined &&
      (object.cltvLimit = Math.round(message.cltvLimit));
    object.destCustomRecords = {};
    if (message.destCustomRecords) {
      for (const [k, v] of Object.entries(message.destCustomRecords)) {
        object.destCustomRecords[k] = base64FromBytes(v);
      }
    }

    message.allowSelfPayment !== undefined &&
      (object.allowSelfPayment = message.allowSelfPayment);
    object.destFeatures = message.destFeatures
      ? message.destFeatures.map((e) => featureBitToJSON(e))
      : [];
    message.paymentAddr !== undefined &&
      (object.paymentAddr = base64FromBytes(
        message.paymentAddr !== undefined
          ? message.paymentAddr
          : new Uint8Array(),
      ));
    return object;
  },

  fromPartial(object: DeepPartial<SendRequest>): SendRequest {
    const message = createBaseSendRequest();
    message.dest = object.dest ?? new Uint8Array();
    message.destString = object.destString ?? '';
    message.amt = object.amt ?? '0';
    message.amtMsat = object.amtMsat ?? '0';
    message.paymentHash = object.paymentHash ?? new Uint8Array();
    message.paymentHashString = object.paymentHashString ?? '';
    message.paymentRequest = object.paymentRequest ?? '';
    message.finalCltvDelta = object.finalCltvDelta ?? 0;
    message.feeLimit =
      object.feeLimit !== undefined && object.feeLimit !== null
        ? FeeLimit.fromPartial(object.feeLimit)
        : undefined;
    message.outgoingChanId = object.outgoingChanId ?? '0';
    message.lastHopPubkey = object.lastHopPubkey ?? new Uint8Array();
    message.cltvLimit = object.cltvLimit ?? 0;
    message.destCustomRecords = Object.entries(
      object.destCustomRecords ?? {},
    ).reduce<Record<string, Uint8Array>>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = value;
      }

      return acc;
    }, {});
    message.allowSelfPayment = object.allowSelfPayment ?? false;
    message.destFeatures = object.destFeatures?.map((e) => e) || [];
    message.paymentAddr = object.paymentAddr ?? new Uint8Array();
    return message;
  },
};

function createBaseSendRequest_DestCustomRecordsEntry(): SendRequest_DestCustomRecordsEntry {
  return {key: '0', value: new Uint8Array()};
}

export const SendRequest_DestCustomRecordsEntry = {
  encode(
    message: SendRequest_DestCustomRecordsEntry,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.key !== '0') {
      writer.uint32(8).uint64(message.key);
    }

    if (message.value.length > 0) {
      writer.uint32(18).bytes(message.value);
    }

    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): SendRequest_DestCustomRecordsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSendRequest_DestCustomRecordsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.value = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SendRequest_DestCustomRecordsEntry {
    const message = createBaseSendRequest_DestCustomRecordsEntry();
    message.key =
      object.key !== undefined && object.key !== null
        ? String(object.key)
        : '0';
    message.value =
      object.value !== undefined && object.value !== null
        ? bytesFromBase64(object.value)
        : new Uint8Array();
    return message;
  },

  toJSON(message: SendRequest_DestCustomRecordsEntry): unknown {
    const object: any = {};
    message.key !== undefined && (object.key = message.key);
    message.value !== undefined &&
      (object.value = base64FromBytes(
        message.value !== undefined ? message.value : new Uint8Array(),
      ));
    return object;
  },

  fromPartial(
    object: DeepPartial<SendRequest_DestCustomRecordsEntry>,
  ): SendRequest_DestCustomRecordsEntry {
    const message = createBaseSendRequest_DestCustomRecordsEntry();
    message.key = object.key ?? '0';
    message.value = object.value ?? new Uint8Array();
    return message;
  },
};

function createBaseSendResponse(): SendResponse {
  return {
    paymentError: '',
    paymentPreimage: new Uint8Array(),
    paymentRoute: undefined,
    paymentHash: new Uint8Array(),
  };
}

export const SendResponse = {
  encode(
    message: SendResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.paymentError !== '') {
      writer.uint32(10).string(message.paymentError);
    }

    if (message.paymentPreimage.length > 0) {
      writer.uint32(18).bytes(message.paymentPreimage);
    }

    if (message.paymentRoute !== undefined) {
      Route.encode(message.paymentRoute, writer.uint32(26).fork()).ldelim();
    }

    if (message.paymentHash.length > 0) {
      writer.uint32(34).bytes(message.paymentHash);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SendResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSendResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.paymentError = reader.string();
          break;
        case 2:
          message.paymentPreimage = reader.bytes();
          break;
        case 3:
          message.paymentRoute = Route.decode(reader, reader.uint32());
          break;
        case 4:
          message.paymentHash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SendResponse {
    const message = createBaseSendResponse();
    message.paymentError =
      object.paymentError !== undefined && object.paymentError !== null
        ? String(object.paymentError)
        : '';
    message.paymentPreimage =
      object.paymentPreimage !== undefined && object.paymentPreimage !== null
        ? bytesFromBase64(object.paymentPreimage)
        : new Uint8Array();
    message.paymentRoute =
      object.paymentRoute !== undefined && object.paymentRoute !== null
        ? Route.fromJSON(object.paymentRoute)
        : undefined;
    message.paymentHash =
      object.paymentHash !== undefined && object.paymentHash !== null
        ? bytesFromBase64(object.paymentHash)
        : new Uint8Array();
    return message;
  },

  toJSON(message: SendResponse): unknown {
    const object: any = {};
    message.paymentError !== undefined &&
      (object.paymentError = message.paymentError);
    message.paymentPreimage !== undefined &&
      (object.paymentPreimage = base64FromBytes(
        message.paymentPreimage !== undefined
          ? message.paymentPreimage
          : new Uint8Array(),
      ));
    message.paymentRoute !== undefined &&
      (object.paymentRoute = message.paymentRoute
        ? Route.toJSON(message.paymentRoute)
        : undefined);
    message.paymentHash !== undefined &&
      (object.paymentHash = base64FromBytes(
        message.paymentHash !== undefined
          ? message.paymentHash
          : new Uint8Array(),
      ));
    return object;
  },

  fromPartial(object: DeepPartial<SendResponse>): SendResponse {
    const message = createBaseSendResponse();
    message.paymentError = object.paymentError ?? '';
    message.paymentPreimage = object.paymentPreimage ?? new Uint8Array();
    message.paymentRoute =
      object.paymentRoute !== undefined && object.paymentRoute !== null
        ? Route.fromPartial(object.paymentRoute)
        : undefined;
    message.paymentHash = object.paymentHash ?? new Uint8Array();
    return message;
  },
};

function createBaseSendToRouteRequest(): SendToRouteRequest {
  return {
    paymentHash: new Uint8Array(),
    paymentHashString: '',
    route: undefined,
  };
}

export const SendToRouteRequest = {
  encode(
    message: SendToRouteRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.paymentHash.length > 0) {
      writer.uint32(10).bytes(message.paymentHash);
    }

    if (message.paymentHashString !== '') {
      writer.uint32(18).string(message.paymentHashString);
    }

    if (message.route !== undefined) {
      Route.encode(message.route, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SendToRouteRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSendToRouteRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.paymentHash = reader.bytes();
          break;
        case 2:
          message.paymentHashString = reader.string();
          break;
        case 4:
          message.route = Route.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SendToRouteRequest {
    const message = createBaseSendToRouteRequest();
    message.paymentHash =
      object.paymentHash !== undefined && object.paymentHash !== null
        ? bytesFromBase64(object.paymentHash)
        : new Uint8Array();
    message.paymentHashString =
      object.paymentHashString !== undefined &&
      object.paymentHashString !== null
        ? String(object.paymentHashString)
        : '';
    message.route =
      object.route !== undefined && object.route !== null
        ? Route.fromJSON(object.route)
        : undefined;
    return message;
  },

  toJSON(message: SendToRouteRequest): unknown {
    const object: any = {};
    message.paymentHash !== undefined &&
      (object.paymentHash = base64FromBytes(
        message.paymentHash !== undefined
          ? message.paymentHash
          : new Uint8Array(),
      ));
    message.paymentHashString !== undefined &&
      (object.paymentHashString = message.paymentHashString);
    message.route !== undefined &&
      (object.route = message.route ? Route.toJSON(message.route) : undefined);
    return object;
  },

  fromPartial(object: DeepPartial<SendToRouteRequest>): SendToRouteRequest {
    const message = createBaseSendToRouteRequest();
    message.paymentHash = object.paymentHash ?? new Uint8Array();
    message.paymentHashString = object.paymentHashString ?? '';
    message.route =
      object.route !== undefined && object.route !== null
        ? Route.fromPartial(object.route)
        : undefined;
    return message;
  },
};

function createBaseChannelAcceptRequest(): ChannelAcceptRequest {
  return {
    nodePubkey: new Uint8Array(),
    chainHash: new Uint8Array(),
    pendingChanId: new Uint8Array(),
    fundingAmt: '0',
    pushAmt: '0',
    dustLimit: '0',
    maxValueInFlight: '0',
    channelReserve: '0',
    minHtlc: '0',
    feePerKw: '0',
    csvDelay: 0,
    maxAcceptedHtlcs: 0,
    channelFlags: 0,
    commitmentType: 0,
  };
}

export const ChannelAcceptRequest = {
  encode(
    message: ChannelAcceptRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.nodePubkey.length > 0) {
      writer.uint32(10).bytes(message.nodePubkey);
    }

    if (message.chainHash.length > 0) {
      writer.uint32(18).bytes(message.chainHash);
    }

    if (message.pendingChanId.length > 0) {
      writer.uint32(26).bytes(message.pendingChanId);
    }

    if (message.fundingAmt !== '0') {
      writer.uint32(32).uint64(message.fundingAmt);
    }

    if (message.pushAmt !== '0') {
      writer.uint32(40).uint64(message.pushAmt);
    }

    if (message.dustLimit !== '0') {
      writer.uint32(48).uint64(message.dustLimit);
    }

    if (message.maxValueInFlight !== '0') {
      writer.uint32(56).uint64(message.maxValueInFlight);
    }

    if (message.channelReserve !== '0') {
      writer.uint32(64).uint64(message.channelReserve);
    }

    if (message.minHtlc !== '0') {
      writer.uint32(72).uint64(message.minHtlc);
    }

    if (message.feePerKw !== '0') {
      writer.uint32(80).uint64(message.feePerKw);
    }

    if (message.csvDelay !== 0) {
      writer.uint32(88).uint32(message.csvDelay);
    }

    if (message.maxAcceptedHtlcs !== 0) {
      writer.uint32(96).uint32(message.maxAcceptedHtlcs);
    }

    if (message.channelFlags !== 0) {
      writer.uint32(104).uint32(message.channelFlags);
    }

    if (message.commitmentType !== 0) {
      writer.uint32(112).int32(message.commitmentType);
    }

    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ChannelAcceptRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChannelAcceptRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nodePubkey = reader.bytes();
          break;
        case 2:
          message.chainHash = reader.bytes();
          break;
        case 3:
          message.pendingChanId = reader.bytes();
          break;
        case 4:
          message.fundingAmt = longToString(reader.uint64() as Long);
          break;
        case 5:
          message.pushAmt = longToString(reader.uint64() as Long);
          break;
        case 6:
          message.dustLimit = longToString(reader.uint64() as Long);
          break;
        case 7:
          message.maxValueInFlight = longToString(reader.uint64() as Long);
          break;
        case 8:
          message.channelReserve = longToString(reader.uint64() as Long);
          break;
        case 9:
          message.minHtlc = longToString(reader.uint64() as Long);
          break;
        case 10:
          message.feePerKw = longToString(reader.uint64() as Long);
          break;
        case 11:
          message.csvDelay = reader.uint32();
          break;
        case 12:
          message.maxAcceptedHtlcs = reader.uint32();
          break;
        case 13:
          message.channelFlags = reader.uint32();
          break;
        case 14:
          message.commitmentType = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ChannelAcceptRequest {
    const message = createBaseChannelAcceptRequest();
    message.nodePubkey =
      object.nodePubkey !== undefined && object.nodePubkey !== null
        ? bytesFromBase64(object.nodePubkey)
        : new Uint8Array();
    message.chainHash =
      object.chainHash !== undefined && object.chainHash !== null
        ? bytesFromBase64(object.chainHash)
        : new Uint8Array();
    message.pendingChanId =
      object.pendingChanId !== undefined && object.pendingChanId !== null
        ? bytesFromBase64(object.pendingChanId)
        : new Uint8Array();
    message.fundingAmt =
      object.fundingAmt !== undefined && object.fundingAmt !== null
        ? String(object.fundingAmt)
        : '0';
    message.pushAmt =
      object.pushAmt !== undefined && object.pushAmt !== null
        ? String(object.pushAmt)
        : '0';
    message.dustLimit =
      object.dustLimit !== undefined && object.dustLimit !== null
        ? String(object.dustLimit)
        : '0';
    message.maxValueInFlight =
      object.maxValueInFlight !== undefined && object.maxValueInFlight !== null
        ? String(object.maxValueInFlight)
        : '0';
    message.channelReserve =
      object.channelReserve !== undefined && object.channelReserve !== null
        ? String(object.channelReserve)
        : '0';
    message.minHtlc =
      object.minHtlc !== undefined && object.minHtlc !== null
        ? String(object.minHtlc)
        : '0';
    message.feePerKw =
      object.feePerKw !== undefined && object.feePerKw !== null
        ? String(object.feePerKw)
        : '0';
    message.csvDelay =
      object.csvDelay !== undefined && object.csvDelay !== null
        ? Number(object.csvDelay)
        : 0;
    message.maxAcceptedHtlcs =
      object.maxAcceptedHtlcs !== undefined && object.maxAcceptedHtlcs !== null
        ? Number(object.maxAcceptedHtlcs)
        : 0;
    message.channelFlags =
      object.channelFlags !== undefined && object.channelFlags !== null
        ? Number(object.channelFlags)
        : 0;
    message.commitmentType =
      object.commitmentType !== undefined && object.commitmentType !== null
        ? commitmentTypeFromJSON(object.commitmentType)
        : 0;
    return message;
  },

  toJSON(message: ChannelAcceptRequest): unknown {
    const object: any = {};
    message.nodePubkey !== undefined &&
      (object.nodePubkey = base64FromBytes(
        message.nodePubkey !== undefined
          ? message.nodePubkey
          : new Uint8Array(),
      ));
    message.chainHash !== undefined &&
      (object.chainHash = base64FromBytes(
        message.chainHash !== undefined ? message.chainHash : new Uint8Array(),
      ));
    message.pendingChanId !== undefined &&
      (object.pendingChanId = base64FromBytes(
        message.pendingChanId !== undefined
          ? message.pendingChanId
          : new Uint8Array(),
      ));
    message.fundingAmt !== undefined &&
      (object.fundingAmt = message.fundingAmt);
    message.pushAmt !== undefined && (object.pushAmt = message.pushAmt);
    message.dustLimit !== undefined && (object.dustLimit = message.dustLimit);
    message.maxValueInFlight !== undefined &&
      (object.maxValueInFlight = message.maxValueInFlight);
    message.channelReserve !== undefined &&
      (object.channelReserve = message.channelReserve);
    message.minHtlc !== undefined && (object.minHtlc = message.minHtlc);
    message.feePerKw !== undefined && (object.feePerKw = message.feePerKw);
    message.csvDelay !== undefined &&
      (object.csvDelay = Math.round(message.csvDelay));
    message.maxAcceptedHtlcs !== undefined &&
      (object.maxAcceptedHtlcs = Math.round(message.maxAcceptedHtlcs));
    message.channelFlags !== undefined &&
      (object.channelFlags = Math.round(message.channelFlags));
    message.commitmentType !== undefined &&
      (object.commitmentType = commitmentTypeToJSON(message.commitmentType));
    return object;
  },

  fromPartial(object: DeepPartial<ChannelAcceptRequest>): ChannelAcceptRequest {
    const message = createBaseChannelAcceptRequest();
    message.nodePubkey = object.nodePubkey ?? new Uint8Array();
    message.chainHash = object.chainHash ?? new Uint8Array();
    message.pendingChanId = object.pendingChanId ?? new Uint8Array();
    message.fundingAmt = object.fundingAmt ?? '0';
    message.pushAmt = object.pushAmt ?? '0';
    message.dustLimit = object.dustLimit ?? '0';
    message.maxValueInFlight = object.maxValueInFlight ?? '0';
    message.channelReserve = object.channelReserve ?? '0';
    message.minHtlc = object.minHtlc ?? '0';
    message.feePerKw = object.feePerKw ?? '0';
    message.csvDelay = object.csvDelay ?? 0;
    message.maxAcceptedHtlcs = object.maxAcceptedHtlcs ?? 0;
    message.channelFlags = object.channelFlags ?? 0;
    message.commitmentType = object.commitmentType ?? 0;
    return message;
  },
};

function createBaseChannelAcceptResponse(): ChannelAcceptResponse {
  return {
    accept: false,
    pendingChanId: new Uint8Array(),
    error: '',
    upfrontShutdown: '',
    csvDelay: 0,
    reserveSat: '0',
    inFlightMaxMsat: '0',
    maxHtlcCount: 0,
    minHtlcIn: '0',
    minAcceptDepth: 0,
  };
}

export const ChannelAcceptResponse = {
  encode(
    message: ChannelAcceptResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.accept) {
      writer.uint32(8).bool(message.accept);
    }

    if (message.pendingChanId.length > 0) {
      writer.uint32(18).bytes(message.pendingChanId);
    }

    if (message.error !== '') {
      writer.uint32(26).string(message.error);
    }

    if (message.upfrontShutdown !== '') {
      writer.uint32(34).string(message.upfrontShutdown);
    }

    if (message.csvDelay !== 0) {
      writer.uint32(40).uint32(message.csvDelay);
    }

    if (message.reserveSat !== '0') {
      writer.uint32(48).uint64(message.reserveSat);
    }

    if (message.inFlightMaxMsat !== '0') {
      writer.uint32(56).uint64(message.inFlightMaxMsat);
    }

    if (message.maxHtlcCount !== 0) {
      writer.uint32(64).uint32(message.maxHtlcCount);
    }

    if (message.minHtlcIn !== '0') {
      writer.uint32(72).uint64(message.minHtlcIn);
    }

    if (message.minAcceptDepth !== 0) {
      writer.uint32(80).uint32(message.minAcceptDepth);
    }

    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ChannelAcceptResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChannelAcceptResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accept = reader.bool();
          break;
        case 2:
          message.pendingChanId = reader.bytes();
          break;
        case 3:
          message.error = reader.string();
          break;
        case 4:
          message.upfrontShutdown = reader.string();
          break;
        case 5:
          message.csvDelay = reader.uint32();
          break;
        case 6:
          message.reserveSat = longToString(reader.uint64() as Long);
          break;
        case 7:
          message.inFlightMaxMsat = longToString(reader.uint64() as Long);
          break;
        case 8:
          message.maxHtlcCount = reader.uint32();
          break;
        case 9:
          message.minHtlcIn = longToString(reader.uint64() as Long);
          break;
        case 10:
          message.minAcceptDepth = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ChannelAcceptResponse {
    const message = createBaseChannelAcceptResponse();
    message.accept =
      object.accept !== undefined && object.accept !== null
        ? Boolean(object.accept)
        : false;
    message.pendingChanId =
      object.pendingChanId !== undefined && object.pendingChanId !== null
        ? bytesFromBase64(object.pendingChanId)
        : new Uint8Array();
    message.error =
      object.error !== undefined && object.error !== null
        ? String(object.error)
        : '';
    message.upfrontShutdown =
      object.upfrontShutdown !== undefined && object.upfrontShutdown !== null
        ? String(object.upfrontShutdown)
        : '';
    message.csvDelay =
      object.csvDelay !== undefined && object.csvDelay !== null
        ? Number(object.csvDelay)
        : 0;
    message.reserveSat =
      object.reserveSat !== undefined && object.reserveSat !== null
        ? String(object.reserveSat)
        : '0';
    message.inFlightMaxMsat =
      object.inFlightMaxMsat !== undefined && object.inFlightMaxMsat !== null
        ? String(object.inFlightMaxMsat)
        : '0';
    message.maxHtlcCount =
      object.maxHtlcCount !== undefined && object.maxHtlcCount !== null
        ? Number(object.maxHtlcCount)
        : 0;
    message.minHtlcIn =
      object.minHtlcIn !== undefined && object.minHtlcIn !== null
        ? String(object.minHtlcIn)
        : '0';
    message.minAcceptDepth =
      object.minAcceptDepth !== undefined && object.minAcceptDepth !== null
        ? Number(object.minAcceptDepth)
        : 0;
    return message;
  },

  toJSON(message: ChannelAcceptResponse): unknown {
    const object: any = {};
    message.accept !== undefined && (object.accept = message.accept);
    message.pendingChanId !== undefined &&
      (object.pendingChanId = base64FromBytes(
        message.pendingChanId !== undefined
          ? message.pendingChanId
          : new Uint8Array(),
      ));
    message.error !== undefined && (object.error = message.error);
    message.upfrontShutdown !== undefined &&
      (object.upfrontShutdown = message.upfrontShutdown);
    message.csvDelay !== undefined &&
      (object.csvDelay = Math.round(message.csvDelay));
    message.reserveSat !== undefined &&
      (object.reserveSat = message.reserveSat);
    message.inFlightMaxMsat !== undefined &&
      (object.inFlightMaxMsat = message.inFlightMaxMsat);
    message.maxHtlcCount !== undefined &&
      (object.maxHtlcCount = Math.round(message.maxHtlcCount));
    message.minHtlcIn !== undefined && (object.minHtlcIn = message.minHtlcIn);
    message.minAcceptDepth !== undefined &&
      (object.minAcceptDepth = Math.round(message.minAcceptDepth));
    return object;
  },

  fromPartial(
    object: DeepPartial<ChannelAcceptResponse>,
  ): ChannelAcceptResponse {
    const message = createBaseChannelAcceptResponse();
    message.accept = object.accept ?? false;
    message.pendingChanId = object.pendingChanId ?? new Uint8Array();
    message.error = object.error ?? '';
    message.upfrontShutdown = object.upfrontShutdown ?? '';
    message.csvDelay = object.csvDelay ?? 0;
    message.reserveSat = object.reserveSat ?? '0';
    message.inFlightMaxMsat = object.inFlightMaxMsat ?? '0';
    message.maxHtlcCount = object.maxHtlcCount ?? 0;
    message.minHtlcIn = object.minHtlcIn ?? '0';
    message.minAcceptDepth = object.minAcceptDepth ?? 0;
    return message;
  },
};

function createBaseChannelPoint(): ChannelPoint {
  return {
    fundingTxidBytes: undefined,
    fundingTxidStr: undefined,
    outputIndex: 0,
  };
}

export const ChannelPoint = {
  encode(
    message: ChannelPoint,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.fundingTxidBytes !== undefined) {
      writer.uint32(10).bytes(message.fundingTxidBytes);
    }

    if (message.fundingTxidStr !== undefined) {
      writer.uint32(18).string(message.fundingTxidStr);
    }

    if (message.outputIndex !== 0) {
      writer.uint32(24).uint32(message.outputIndex);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChannelPoint {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChannelPoint();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fundingTxidBytes = reader.bytes();
          break;
        case 2:
          message.fundingTxidStr = reader.string();
          break;
        case 3:
          message.outputIndex = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ChannelPoint {
    const message = createBaseChannelPoint();
    message.fundingTxidBytes =
      object.fundingTxidBytes !== undefined && object.fundingTxidBytes !== null
        ? bytesFromBase64(object.fundingTxidBytes)
        : undefined;
    message.fundingTxidStr =
      object.fundingTxidStr !== undefined && object.fundingTxidStr !== null
        ? String(object.fundingTxidStr)
        : undefined;
    message.outputIndex =
      object.outputIndex !== undefined && object.outputIndex !== null
        ? Number(object.outputIndex)
        : 0;
    return message;
  },

  toJSON(message: ChannelPoint): unknown {
    const object: any = {};
    message.fundingTxidBytes !== undefined &&
      (object.fundingTxidBytes =
        message.fundingTxidBytes !== undefined
          ? base64FromBytes(message.fundingTxidBytes)
          : undefined);
    message.fundingTxidStr !== undefined &&
      (object.fundingTxidStr = message.fundingTxidStr);
    message.outputIndex !== undefined &&
      (object.outputIndex = Math.round(message.outputIndex));
    return object;
  },

  fromPartial(object: DeepPartial<ChannelPoint>): ChannelPoint {
    const message = createBaseChannelPoint();
    message.fundingTxidBytes = object.fundingTxidBytes ?? undefined;
    message.fundingTxidStr = object.fundingTxidStr ?? undefined;
    message.outputIndex = object.outputIndex ?? 0;
    return message;
  },
};

function createBaseOutPoint(): OutPoint {
  return {txidBytes: new Uint8Array(), txidStr: '', outputIndex: 0};
}

export const OutPoint = {
  encode(
    message: OutPoint,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.txidBytes.length > 0) {
      writer.uint32(10).bytes(message.txidBytes);
    }

    if (message.txidStr !== '') {
      writer.uint32(18).string(message.txidStr);
    }

    if (message.outputIndex !== 0) {
      writer.uint32(24).uint32(message.outputIndex);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OutPoint {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOutPoint();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txidBytes = reader.bytes();
          break;
        case 2:
          message.txidStr = reader.string();
          break;
        case 3:
          message.outputIndex = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): OutPoint {
    const message = createBaseOutPoint();
    message.txidBytes =
      object.txidBytes !== undefined && object.txidBytes !== null
        ? bytesFromBase64(object.txidBytes)
        : new Uint8Array();
    message.txidStr =
      object.txidStr !== undefined && object.txidStr !== null
        ? String(object.txidStr)
        : '';
    message.outputIndex =
      object.outputIndex !== undefined && object.outputIndex !== null
        ? Number(object.outputIndex)
        : 0;
    return message;
  },

  toJSON(message: OutPoint): unknown {
    const object: any = {};
    message.txidBytes !== undefined &&
      (object.txidBytes = base64FromBytes(
        message.txidBytes !== undefined ? message.txidBytes : new Uint8Array(),
      ));
    message.txidStr !== undefined && (object.txidStr = message.txidStr);
    message.outputIndex !== undefined &&
      (object.outputIndex = Math.round(message.outputIndex));
    return object;
  },

  fromPartial(object: DeepPartial<OutPoint>): OutPoint {
    const message = createBaseOutPoint();
    message.txidBytes = object.txidBytes ?? new Uint8Array();
    message.txidStr = object.txidStr ?? '';
    message.outputIndex = object.outputIndex ?? 0;
    return message;
  },
};

function createBaseLightningAddress(): LightningAddress {
  return {pubkey: '', host: ''};
}

export const LightningAddress = {
  encode(
    message: LightningAddress,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.pubkey !== '') {
      writer.uint32(10).string(message.pubkey);
    }

    if (message.host !== '') {
      writer.uint32(18).string(message.host);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LightningAddress {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLightningAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pubkey = reader.string();
          break;
        case 2:
          message.host = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): LightningAddress {
    const message = createBaseLightningAddress();
    message.pubkey =
      object.pubkey !== undefined && object.pubkey !== null
        ? String(object.pubkey)
        : '';
    message.host =
      object.host !== undefined && object.host !== null
        ? String(object.host)
        : '';
    return message;
  },

  toJSON(message: LightningAddress): unknown {
    const object: any = {};
    message.pubkey !== undefined && (object.pubkey = message.pubkey);
    message.host !== undefined && (object.host = message.host);
    return object;
  },

  fromPartial(object: DeepPartial<LightningAddress>): LightningAddress {
    const message = createBaseLightningAddress();
    message.pubkey = object.pubkey ?? '';
    message.host = object.host ?? '';
    return message;
  },
};

function createBaseEstimateFeeRequest(): EstimateFeeRequest {
  return {
    AddrToAmount: {},
    targetConf: 0,
    minConfs: 0,
    spendUnconfirmed: false,
  };
}

export const EstimateFeeRequest = {
  encode(
    message: EstimateFeeRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const [key, value] of Object.entries(message.AddrToAmount)) {
      EstimateFeeRequest_AddrToAmountEntry.encode(
        {key: key as any, value},
        writer.uint32(10).fork(),
      ).ldelim();
    }

    if (message.targetConf !== 0) {
      writer.uint32(16).int32(message.targetConf);
    }

    if (message.minConfs !== 0) {
      writer.uint32(24).int32(message.minConfs);
    }

    if (message.spendUnconfirmed) {
      writer.uint32(32).bool(message.spendUnconfirmed);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EstimateFeeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEstimateFeeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = EstimateFeeRequest_AddrToAmountEntry.decode(
            reader,
            reader.uint32(),
          );
          if (entry1.value !== undefined) {
            message.AddrToAmount[entry1.key] = entry1.value;
          }

          break;
        case 2:
          message.targetConf = reader.int32();
          break;
        case 3:
          message.minConfs = reader.int32();
          break;
        case 4:
          message.spendUnconfirmed = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EstimateFeeRequest {
    const message = createBaseEstimateFeeRequest();
    message.AddrToAmount = Object.entries(object.AddrToAmount ?? {}).reduce<
      Record<string, string>
    >((acc, [key, value]) => {
      acc[key] = String(value);
      return acc;
    }, {});
    message.targetConf =
      object.targetConf !== undefined && object.targetConf !== null
        ? Number(object.targetConf)
        : 0;
    message.minConfs =
      object.minConfs !== undefined && object.minConfs !== null
        ? Number(object.minConfs)
        : 0;
    message.spendUnconfirmed =
      object.spendUnconfirmed !== undefined && object.spendUnconfirmed !== null
        ? Boolean(object.spendUnconfirmed)
        : false;
    return message;
  },

  toJSON(message: EstimateFeeRequest): unknown {
    const object: any = {};
    object.AddrToAmount = {};
    if (message.AddrToAmount) {
      for (const [k, v] of Object.entries(message.AddrToAmount)) {
        object.AddrToAmount[k] = v;
      }
    }

    message.targetConf !== undefined &&
      (object.targetConf = Math.round(message.targetConf));
    message.minConfs !== undefined &&
      (object.minConfs = Math.round(message.minConfs));
    message.spendUnconfirmed !== undefined &&
      (object.spendUnconfirmed = message.spendUnconfirmed);
    return object;
  },

  fromPartial(object: DeepPartial<EstimateFeeRequest>): EstimateFeeRequest {
    const message = createBaseEstimateFeeRequest();
    message.AddrToAmount = Object.entries(object.AddrToAmount ?? {}).reduce<
      Record<string, string>
    >((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }

      return acc;
    }, {});
    message.targetConf = object.targetConf ?? 0;
    message.minConfs = object.minConfs ?? 0;
    message.spendUnconfirmed = object.spendUnconfirmed ?? false;
    return message;
  },
};

function createBaseEstimateFeeRequest_AddrToAmountEntry(): EstimateFeeRequest_AddrToAmountEntry {
  return {key: '', value: '0'};
}

export const EstimateFeeRequest_AddrToAmountEntry = {
  encode(
    message: EstimateFeeRequest_AddrToAmountEntry,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.key !== '') {
      writer.uint32(10).string(message.key);
    }

    if (message.value !== '0') {
      writer.uint32(16).int64(message.value);
    }

    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): EstimateFeeRequest_AddrToAmountEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEstimateFeeRequest_AddrToAmountEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = longToString(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EstimateFeeRequest_AddrToAmountEntry {
    const message = createBaseEstimateFeeRequest_AddrToAmountEntry();
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : '';
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : '0';
    return message;
  },

  toJSON(message: EstimateFeeRequest_AddrToAmountEntry): unknown {
    const object: any = {};
    message.key !== undefined && (object.key = message.key);
    message.value !== undefined && (object.value = message.value);
    return object;
  },

  fromPartial(
    object: DeepPartial<EstimateFeeRequest_AddrToAmountEntry>,
  ): EstimateFeeRequest_AddrToAmountEntry {
    const message = createBaseEstimateFeeRequest_AddrToAmountEntry();
    message.key = object.key ?? '';
    message.value = object.value ?? '0';
    return message;
  },
};

function createBaseEstimateFeeResponse(): EstimateFeeResponse {
  return {feeSat: '0', feerateSatPerByte: '0', satPerVbyte: '0'};
}

export const EstimateFeeResponse = {
  encode(
    message: EstimateFeeResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.feeSat !== '0') {
      writer.uint32(8).int64(message.feeSat);
    }

    if (message.feerateSatPerByte !== '0') {
      writer.uint32(16).int64(message.feerateSatPerByte);
    }

    if (message.satPerVbyte !== '0') {
      writer.uint32(24).uint64(message.satPerVbyte);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EstimateFeeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEstimateFeeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feeSat = longToString(reader.int64() as Long);
          break;
        case 2:
          message.feerateSatPerByte = longToString(reader.int64() as Long);
          break;
        case 3:
          message.satPerVbyte = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EstimateFeeResponse {
    const message = createBaseEstimateFeeResponse();
    message.feeSat =
      object.feeSat !== undefined && object.feeSat !== null
        ? String(object.feeSat)
        : '0';
    message.feerateSatPerByte =
      object.feerateSatPerByte !== undefined &&
      object.feerateSatPerByte !== null
        ? String(object.feerateSatPerByte)
        : '0';
    message.satPerVbyte =
      object.satPerVbyte !== undefined && object.satPerVbyte !== null
        ? String(object.satPerVbyte)
        : '0';
    return message;
  },

  toJSON(message: EstimateFeeResponse): unknown {
    const object: any = {};
    message.feeSat !== undefined && (object.feeSat = message.feeSat);
    message.feerateSatPerByte !== undefined &&
      (object.feerateSatPerByte = message.feerateSatPerByte);
    message.satPerVbyte !== undefined &&
      (object.satPerVbyte = message.satPerVbyte);
    return object;
  },

  fromPartial(object: DeepPartial<EstimateFeeResponse>): EstimateFeeResponse {
    const message = createBaseEstimateFeeResponse();
    message.feeSat = object.feeSat ?? '0';
    message.feerateSatPerByte = object.feerateSatPerByte ?? '0';
    message.satPerVbyte = object.satPerVbyte ?? '0';
    return message;
  },
};

function createBaseSendManyRequest(): SendManyRequest {
  return {
    AddrToAmount: {},
    targetConf: 0,
    satPerVbyte: '0',
    satPerByte: '0',
    label: '',
    minConfs: 0,
    spendUnconfirmed: false,
  };
}

export const SendManyRequest = {
  encode(
    message: SendManyRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const [key, value] of Object.entries(message.AddrToAmount)) {
      SendManyRequest_AddrToAmountEntry.encode(
        {key: key as any, value},
        writer.uint32(10).fork(),
      ).ldelim();
    }

    if (message.targetConf !== 0) {
      writer.uint32(24).int32(message.targetConf);
    }

    if (message.satPerVbyte !== '0') {
      writer.uint32(32).uint64(message.satPerVbyte);
    }

    if (message.satPerByte !== '0') {
      writer.uint32(40).int64(message.satPerByte);
    }

    if (message.label !== '') {
      writer.uint32(50).string(message.label);
    }

    if (message.minConfs !== 0) {
      writer.uint32(56).int32(message.minConfs);
    }

    if (message.spendUnconfirmed) {
      writer.uint32(64).bool(message.spendUnconfirmed);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SendManyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSendManyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = SendManyRequest_AddrToAmountEntry.decode(
            reader,
            reader.uint32(),
          );
          if (entry1.value !== undefined) {
            message.AddrToAmount[entry1.key] = entry1.value;
          }

          break;
        case 3:
          message.targetConf = reader.int32();
          break;
        case 4:
          message.satPerVbyte = longToString(reader.uint64() as Long);
          break;
        case 5:
          message.satPerByte = longToString(reader.int64() as Long);
          break;
        case 6:
          message.label = reader.string();
          break;
        case 7:
          message.minConfs = reader.int32();
          break;
        case 8:
          message.spendUnconfirmed = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SendManyRequest {
    const message = createBaseSendManyRequest();
    message.AddrToAmount = Object.entries(object.AddrToAmount ?? {}).reduce<
      Record<string, string>
    >((acc, [key, value]) => {
      acc[key] = String(value);
      return acc;
    }, {});
    message.targetConf =
      object.targetConf !== undefined && object.targetConf !== null
        ? Number(object.targetConf)
        : 0;
    message.satPerVbyte =
      object.satPerVbyte !== undefined && object.satPerVbyte !== null
        ? String(object.satPerVbyte)
        : '0';
    message.satPerByte =
      object.satPerByte !== undefined && object.satPerByte !== null
        ? String(object.satPerByte)
        : '0';
    message.label =
      object.label !== undefined && object.label !== null
        ? String(object.label)
        : '';
    message.minConfs =
      object.minConfs !== undefined && object.minConfs !== null
        ? Number(object.minConfs)
        : 0;
    message.spendUnconfirmed =
      object.spendUnconfirmed !== undefined && object.spendUnconfirmed !== null
        ? Boolean(object.spendUnconfirmed)
        : false;
    return message;
  },

  toJSON(message: SendManyRequest): unknown {
    const object: any = {};
    object.AddrToAmount = {};
    if (message.AddrToAmount) {
      for (const [k, v] of Object.entries(message.AddrToAmount)) {
        object.AddrToAmount[k] = v;
      }
    }

    message.targetConf !== undefined &&
      (object.targetConf = Math.round(message.targetConf));
    message.satPerVbyte !== undefined &&
      (object.satPerVbyte = message.satPerVbyte);
    message.satPerByte !== undefined &&
      (object.satPerByte = message.satPerByte);
    message.label !== undefined && (object.label = message.label);
    message.minConfs !== undefined &&
      (object.minConfs = Math.round(message.minConfs));
    message.spendUnconfirmed !== undefined &&
      (object.spendUnconfirmed = message.spendUnconfirmed);
    return object;
  },

  fromPartial(object: DeepPartial<SendManyRequest>): SendManyRequest {
    const message = createBaseSendManyRequest();
    message.AddrToAmount = Object.entries(object.AddrToAmount ?? {}).reduce<
      Record<string, string>
    >((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }

      return acc;
    }, {});
    message.targetConf = object.targetConf ?? 0;
    message.satPerVbyte = object.satPerVbyte ?? '0';
    message.satPerByte = object.satPerByte ?? '0';
    message.label = object.label ?? '';
    message.minConfs = object.minConfs ?? 0;
    message.spendUnconfirmed = object.spendUnconfirmed ?? false;
    return message;
  },
};

function createBaseSendManyRequest_AddrToAmountEntry(): SendManyRequest_AddrToAmountEntry {
  return {key: '', value: '0'};
}

export const SendManyRequest_AddrToAmountEntry = {
  encode(
    message: SendManyRequest_AddrToAmountEntry,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.key !== '') {
      writer.uint32(10).string(message.key);
    }

    if (message.value !== '0') {
      writer.uint32(16).int64(message.value);
    }

    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): SendManyRequest_AddrToAmountEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSendManyRequest_AddrToAmountEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = longToString(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SendManyRequest_AddrToAmountEntry {
    const message = createBaseSendManyRequest_AddrToAmountEntry();
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : '';
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : '0';
    return message;
  },

  toJSON(message: SendManyRequest_AddrToAmountEntry): unknown {
    const object: any = {};
    message.key !== undefined && (object.key = message.key);
    message.value !== undefined && (object.value = message.value);
    return object;
  },

  fromPartial(
    object: DeepPartial<SendManyRequest_AddrToAmountEntry>,
  ): SendManyRequest_AddrToAmountEntry {
    const message = createBaseSendManyRequest_AddrToAmountEntry();
    message.key = object.key ?? '';
    message.value = object.value ?? '0';
    return message;
  },
};

function createBaseSendManyResponse(): SendManyResponse {
  return {txid: ''};
}

export const SendManyResponse = {
  encode(
    message: SendManyResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.txid !== '') {
      writer.uint32(10).string(message.txid);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SendManyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSendManyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txid = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SendManyResponse {
    const message = createBaseSendManyResponse();
    message.txid =
      object.txid !== undefined && object.txid !== null
        ? String(object.txid)
        : '';
    return message;
  },

  toJSON(message: SendManyResponse): unknown {
    const object: any = {};
    message.txid !== undefined && (object.txid = message.txid);
    return object;
  },

  fromPartial(object: DeepPartial<SendManyResponse>): SendManyResponse {
    const message = createBaseSendManyResponse();
    message.txid = object.txid ?? '';
    return message;
  },
};

function createBaseSendCoinsRequest(): SendCoinsRequest {
  return {
    addr: '',
    amount: '0',
    targetConf: 0,
    satPerVbyte: '0',
    satPerByte: '0',
    sendAll: false,
    label: '',
    minConfs: 0,
    spendUnconfirmed: false,
  };
}

export const SendCoinsRequest = {
  encode(
    message: SendCoinsRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.addr !== '') {
      writer.uint32(10).string(message.addr);
    }

    if (message.amount !== '0') {
      writer.uint32(16).int64(message.amount);
    }

    if (message.targetConf !== 0) {
      writer.uint32(24).int32(message.targetConf);
    }

    if (message.satPerVbyte !== '0') {
      writer.uint32(32).uint64(message.satPerVbyte);
    }

    if (message.satPerByte !== '0') {
      writer.uint32(40).int64(message.satPerByte);
    }

    if (message.sendAll) {
      writer.uint32(48).bool(message.sendAll);
    }

    if (message.label !== '') {
      writer.uint32(58).string(message.label);
    }

    if (message.minConfs !== 0) {
      writer.uint32(64).int32(message.minConfs);
    }

    if (message.spendUnconfirmed) {
      writer.uint32(72).bool(message.spendUnconfirmed);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SendCoinsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSendCoinsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addr = reader.string();
          break;
        case 2:
          message.amount = longToString(reader.int64() as Long);
          break;
        case 3:
          message.targetConf = reader.int32();
          break;
        case 4:
          message.satPerVbyte = longToString(reader.uint64() as Long);
          break;
        case 5:
          message.satPerByte = longToString(reader.int64() as Long);
          break;
        case 6:
          message.sendAll = reader.bool();
          break;
        case 7:
          message.label = reader.string();
          break;
        case 8:
          message.minConfs = reader.int32();
          break;
        case 9:
          message.spendUnconfirmed = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SendCoinsRequest {
    const message = createBaseSendCoinsRequest();
    message.addr =
      object.addr !== undefined && object.addr !== null
        ? String(object.addr)
        : '';
    message.amount =
      object.amount !== undefined && object.amount !== null
        ? String(object.amount)
        : '0';
    message.targetConf =
      object.targetConf !== undefined && object.targetConf !== null
        ? Number(object.targetConf)
        : 0;
    message.satPerVbyte =
      object.satPerVbyte !== undefined && object.satPerVbyte !== null
        ? String(object.satPerVbyte)
        : '0';
    message.satPerByte =
      object.satPerByte !== undefined && object.satPerByte !== null
        ? String(object.satPerByte)
        : '0';
    message.sendAll =
      object.sendAll !== undefined && object.sendAll !== null
        ? Boolean(object.sendAll)
        : false;
    message.label =
      object.label !== undefined && object.label !== null
        ? String(object.label)
        : '';
    message.minConfs =
      object.minConfs !== undefined && object.minConfs !== null
        ? Number(object.minConfs)
        : 0;
    message.spendUnconfirmed =
      object.spendUnconfirmed !== undefined && object.spendUnconfirmed !== null
        ? Boolean(object.spendUnconfirmed)
        : false;
    return message;
  },

  toJSON(message: SendCoinsRequest): unknown {
    const object: any = {};
    message.addr !== undefined && (object.addr = message.addr);
    message.amount !== undefined && (object.amount = message.amount);
    message.targetConf !== undefined &&
      (object.targetConf = Math.round(message.targetConf));
    message.satPerVbyte !== undefined &&
      (object.satPerVbyte = message.satPerVbyte);
    message.satPerByte !== undefined &&
      (object.satPerByte = message.satPerByte);
    message.sendAll !== undefined && (object.sendAll = message.sendAll);
    message.label !== undefined && (object.label = message.label);
    message.minConfs !== undefined &&
      (object.minConfs = Math.round(message.minConfs));
    message.spendUnconfirmed !== undefined &&
      (object.spendUnconfirmed = message.spendUnconfirmed);
    return object;
  },

  fromPartial(object: DeepPartial<SendCoinsRequest>): SendCoinsRequest {
    const message = createBaseSendCoinsRequest();
    message.addr = object.addr ?? '';
    message.amount = object.amount ?? '0';
    message.targetConf = object.targetConf ?? 0;
    message.satPerVbyte = object.satPerVbyte ?? '0';
    message.satPerByte = object.satPerByte ?? '0';
    message.sendAll = object.sendAll ?? false;
    message.label = object.label ?? '';
    message.minConfs = object.minConfs ?? 0;
    message.spendUnconfirmed = object.spendUnconfirmed ?? false;
    return message;
  },
};

function createBaseSendCoinsResponse(): SendCoinsResponse {
  return {txid: ''};
}

export const SendCoinsResponse = {
  encode(
    message: SendCoinsResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.txid !== '') {
      writer.uint32(10).string(message.txid);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SendCoinsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSendCoinsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txid = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SendCoinsResponse {
    const message = createBaseSendCoinsResponse();
    message.txid =
      object.txid !== undefined && object.txid !== null
        ? String(object.txid)
        : '';
    return message;
  },

  toJSON(message: SendCoinsResponse): unknown {
    const object: any = {};
    message.txid !== undefined && (object.txid = message.txid);
    return object;
  },

  fromPartial(object: DeepPartial<SendCoinsResponse>): SendCoinsResponse {
    const message = createBaseSendCoinsResponse();
    message.txid = object.txid ?? '';
    return message;
  },
};

function createBaseListUnspentRequest(): ListUnspentRequest {
  return {minConfs: 0, maxConfs: 0, account: ''};
}

export const ListUnspentRequest = {
  encode(
    message: ListUnspentRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.minConfs !== 0) {
      writer.uint32(8).int32(message.minConfs);
    }

    if (message.maxConfs !== 0) {
      writer.uint32(16).int32(message.maxConfs);
    }

    if (message.account !== '') {
      writer.uint32(26).string(message.account);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListUnspentRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListUnspentRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.minConfs = reader.int32();
          break;
        case 2:
          message.maxConfs = reader.int32();
          break;
        case 3:
          message.account = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ListUnspentRequest {
    const message = createBaseListUnspentRequest();
    message.minConfs =
      object.minConfs !== undefined && object.minConfs !== null
        ? Number(object.minConfs)
        : 0;
    message.maxConfs =
      object.maxConfs !== undefined && object.maxConfs !== null
        ? Number(object.maxConfs)
        : 0;
    message.account =
      object.account !== undefined && object.account !== null
        ? String(object.account)
        : '';
    return message;
  },

  toJSON(message: ListUnspentRequest): unknown {
    const object: any = {};
    message.minConfs !== undefined &&
      (object.minConfs = Math.round(message.minConfs));
    message.maxConfs !== undefined &&
      (object.maxConfs = Math.round(message.maxConfs));
    message.account !== undefined && (object.account = message.account);
    return object;
  },

  fromPartial(object: DeepPartial<ListUnspentRequest>): ListUnspentRequest {
    const message = createBaseListUnspentRequest();
    message.minConfs = object.minConfs ?? 0;
    message.maxConfs = object.maxConfs ?? 0;
    message.account = object.account ?? '';
    return message;
  },
};

function createBaseListUnspentResponse(): ListUnspentResponse {
  return {utxos: []};
}

export const ListUnspentResponse = {
  encode(
    message: ListUnspentResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.utxos) {
      Utxo.encode(v, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListUnspentResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListUnspentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.utxos.push(Utxo.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ListUnspentResponse {
    const message = createBaseListUnspentResponse();
    message.utxos = (object.utxos ?? []).map((e: any) => Utxo.fromJSON(e));
    return message;
  },

  toJSON(message: ListUnspentResponse): unknown {
    const object: any = {};
    object.utxos = message.utxos
      ? message.utxos.map((e) => (e ? Utxo.toJSON(e) : undefined))
      : [];
    return object;
  },

  fromPartial(object: DeepPartial<ListUnspentResponse>): ListUnspentResponse {
    const message = createBaseListUnspentResponse();
    message.utxos = object.utxos?.map((e) => Utxo.fromPartial(e)) || [];
    return message;
  },
};

function createBaseNewAddressRequest(): NewAddressRequest {
  return {type: 0, account: ''};
}

export const NewAddressRequest = {
  encode(
    message: NewAddressRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }

    if (message.account !== '') {
      writer.uint32(18).string(message.account);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NewAddressRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNewAddressRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32() as any;
          break;
        case 2:
          message.account = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): NewAddressRequest {
    const message = createBaseNewAddressRequest();
    message.type =
      object.type !== undefined && object.type !== null
        ? addressTypeFromJSON(object.type)
        : 0;
    message.account =
      object.account !== undefined && object.account !== null
        ? String(object.account)
        : '';
    return message;
  },

  toJSON(message: NewAddressRequest): unknown {
    const object: any = {};
    message.type !== undefined &&
      (object.type = addressTypeToJSON(message.type));
    message.account !== undefined && (object.account = message.account);
    return object;
  },

  fromPartial(object: DeepPartial<NewAddressRequest>): NewAddressRequest {
    const message = createBaseNewAddressRequest();
    message.type = object.type ?? 0;
    message.account = object.account ?? '';
    return message;
  },
};

function createBaseNewAddressResponse(): NewAddressResponse {
  return {address: ''};
}

export const NewAddressResponse = {
  encode(
    message: NewAddressResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.address !== '') {
      writer.uint32(10).string(message.address);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NewAddressResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNewAddressResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): NewAddressResponse {
    const message = createBaseNewAddressResponse();
    message.address =
      object.address !== undefined && object.address !== null
        ? String(object.address)
        : '';
    return message;
  },

  toJSON(message: NewAddressResponse): unknown {
    const object: any = {};
    message.address !== undefined && (object.address = message.address);
    return object;
  },

  fromPartial(object: DeepPartial<NewAddressResponse>): NewAddressResponse {
    const message = createBaseNewAddressResponse();
    message.address = object.address ?? '';
    return message;
  },
};

function createBaseSignMessageRequest(): SignMessageRequest {
  return {msg: new Uint8Array(), singleHash: false};
}

export const SignMessageRequest = {
  encode(
    message: SignMessageRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.msg.length > 0) {
      writer.uint32(10).bytes(message.msg);
    }

    if (message.singleHash) {
      writer.uint32(16).bool(message.singleHash);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SignMessageRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignMessageRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.msg = reader.bytes();
          break;
        case 2:
          message.singleHash = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SignMessageRequest {
    const message = createBaseSignMessageRequest();
    message.msg =
      object.msg !== undefined && object.msg !== null
        ? bytesFromBase64(object.msg)
        : new Uint8Array();
    message.singleHash =
      object.singleHash !== undefined && object.singleHash !== null
        ? Boolean(object.singleHash)
        : false;
    return message;
  },

  toJSON(message: SignMessageRequest): unknown {
    const object: any = {};
    message.msg !== undefined &&
      (object.msg = base64FromBytes(
        message.msg !== undefined ? message.msg : new Uint8Array(),
      ));
    message.singleHash !== undefined &&
      (object.singleHash = message.singleHash);
    return object;
  },

  fromPartial(object: DeepPartial<SignMessageRequest>): SignMessageRequest {
    const message = createBaseSignMessageRequest();
    message.msg = object.msg ?? new Uint8Array();
    message.singleHash = object.singleHash ?? false;
    return message;
  },
};

function createBaseSignMessageResponse(): SignMessageResponse {
  return {signature: ''};
}

export const SignMessageResponse = {
  encode(
    message: SignMessageResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.signature !== '') {
      writer.uint32(10).string(message.signature);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SignMessageResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignMessageResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signature = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SignMessageResponse {
    const message = createBaseSignMessageResponse();
    message.signature =
      object.signature !== undefined && object.signature !== null
        ? String(object.signature)
        : '';
    return message;
  },

  toJSON(message: SignMessageResponse): unknown {
    const object: any = {};
    message.signature !== undefined && (object.signature = message.signature);
    return object;
  },

  fromPartial(object: DeepPartial<SignMessageResponse>): SignMessageResponse {
    const message = createBaseSignMessageResponse();
    message.signature = object.signature ?? '';
    return message;
  },
};

function createBaseVerifyMessageRequest(): VerifyMessageRequest {
  return {msg: new Uint8Array(), signature: ''};
}

export const VerifyMessageRequest = {
  encode(
    message: VerifyMessageRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.msg.length > 0) {
      writer.uint32(10).bytes(message.msg);
    }

    if (message.signature !== '') {
      writer.uint32(18).string(message.signature);
    }

    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): VerifyMessageRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVerifyMessageRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.msg = reader.bytes();
          break;
        case 2:
          message.signature = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): VerifyMessageRequest {
    const message = createBaseVerifyMessageRequest();
    message.msg =
      object.msg !== undefined && object.msg !== null
        ? bytesFromBase64(object.msg)
        : new Uint8Array();
    message.signature =
      object.signature !== undefined && object.signature !== null
        ? String(object.signature)
        : '';
    return message;
  },

  toJSON(message: VerifyMessageRequest): unknown {
    const object: any = {};
    message.msg !== undefined &&
      (object.msg = base64FromBytes(
        message.msg !== undefined ? message.msg : new Uint8Array(),
      ));
    message.signature !== undefined && (object.signature = message.signature);
    return object;
  },

  fromPartial(object: DeepPartial<VerifyMessageRequest>): VerifyMessageRequest {
    const message = createBaseVerifyMessageRequest();
    message.msg = object.msg ?? new Uint8Array();
    message.signature = object.signature ?? '';
    return message;
  },
};

function createBaseVerifyMessageResponse(): VerifyMessageResponse {
  return {valid: false, pubkey: ''};
}

export const VerifyMessageResponse = {
  encode(
    message: VerifyMessageResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.valid) {
      writer.uint32(8).bool(message.valid);
    }

    if (message.pubkey !== '') {
      writer.uint32(18).string(message.pubkey);
    }

    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): VerifyMessageResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVerifyMessageResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.valid = reader.bool();
          break;
        case 2:
          message.pubkey = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): VerifyMessageResponse {
    const message = createBaseVerifyMessageResponse();
    message.valid =
      object.valid !== undefined && object.valid !== null
        ? Boolean(object.valid)
        : false;
    message.pubkey =
      object.pubkey !== undefined && object.pubkey !== null
        ? String(object.pubkey)
        : '';
    return message;
  },

  toJSON(message: VerifyMessageResponse): unknown {
    const object: any = {};
    message.valid !== undefined && (object.valid = message.valid);
    message.pubkey !== undefined && (object.pubkey = message.pubkey);
    return object;
  },

  fromPartial(
    object: DeepPartial<VerifyMessageResponse>,
  ): VerifyMessageResponse {
    const message = createBaseVerifyMessageResponse();
    message.valid = object.valid ?? false;
    message.pubkey = object.pubkey ?? '';
    return message;
  },
};

function createBaseConnectPeerRequest(): ConnectPeerRequest {
  return {addr: undefined, perm: false, timeout: '0'};
}

export const ConnectPeerRequest = {
  encode(
    message: ConnectPeerRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.addr !== undefined) {
      LightningAddress.encode(message.addr, writer.uint32(10).fork()).ldelim();
    }

    if (message.perm) {
      writer.uint32(16).bool(message.perm);
    }

    if (message.timeout !== '0') {
      writer.uint32(24).uint64(message.timeout);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConnectPeerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConnectPeerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addr = LightningAddress.decode(reader, reader.uint32());
          break;
        case 2:
          message.perm = reader.bool();
          break;
        case 3:
          message.timeout = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ConnectPeerRequest {
    const message = createBaseConnectPeerRequest();
    message.addr =
      object.addr !== undefined && object.addr !== null
        ? LightningAddress.fromJSON(object.addr)
        : undefined;
    message.perm =
      object.perm !== undefined && object.perm !== null
        ? Boolean(object.perm)
        : false;
    message.timeout =
      object.timeout !== undefined && object.timeout !== null
        ? String(object.timeout)
        : '0';
    return message;
  },

  toJSON(message: ConnectPeerRequest): unknown {
    const object: any = {};
    message.addr !== undefined &&
      (object.addr = message.addr
        ? LightningAddress.toJSON(message.addr)
        : undefined);
    message.perm !== undefined && (object.perm = message.perm);
    message.timeout !== undefined && (object.timeout = message.timeout);
    return object;
  },

  fromPartial(object: DeepPartial<ConnectPeerRequest>): ConnectPeerRequest {
    const message = createBaseConnectPeerRequest();
    message.addr =
      object.addr !== undefined && object.addr !== null
        ? LightningAddress.fromPartial(object.addr)
        : undefined;
    message.perm = object.perm ?? false;
    message.timeout = object.timeout ?? '0';
    return message;
  },
};

function createBaseConnectPeerResponse(): ConnectPeerResponse {
  return {};
}

export const ConnectPeerResponse = {
  encode(
    _: ConnectPeerResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConnectPeerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConnectPeerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): ConnectPeerResponse {
    const message = createBaseConnectPeerResponse();
    return message;
  },

  toJSON(_: ConnectPeerResponse): unknown {
    const object: any = {};
    return object;
  },

  fromPartial(_: DeepPartial<ConnectPeerResponse>): ConnectPeerResponse {
    const message = createBaseConnectPeerResponse();
    return message;
  },
};

function createBaseDisconnectPeerRequest(): DisconnectPeerRequest {
  return {pubKey: ''};
}

export const DisconnectPeerRequest = {
  encode(
    message: DisconnectPeerRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.pubKey !== '') {
      writer.uint32(10).string(message.pubKey);
    }

    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): DisconnectPeerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDisconnectPeerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pubKey = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): DisconnectPeerRequest {
    const message = createBaseDisconnectPeerRequest();
    message.pubKey =
      object.pubKey !== undefined && object.pubKey !== null
        ? String(object.pubKey)
        : '';
    return message;
  },

  toJSON(message: DisconnectPeerRequest): unknown {
    const object: any = {};
    message.pubKey !== undefined && (object.pubKey = message.pubKey);
    return object;
  },

  fromPartial(
    object: DeepPartial<DisconnectPeerRequest>,
  ): DisconnectPeerRequest {
    const message = createBaseDisconnectPeerRequest();
    message.pubKey = object.pubKey ?? '';
    return message;
  },
};

function createBaseDisconnectPeerResponse(): DisconnectPeerResponse {
  return {};
}

export const DisconnectPeerResponse = {
  encode(
    _: DisconnectPeerResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): DisconnectPeerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDisconnectPeerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): DisconnectPeerResponse {
    const message = createBaseDisconnectPeerResponse();
    return message;
  },

  toJSON(_: DisconnectPeerResponse): unknown {
    const object: any = {};
    return object;
  },

  fromPartial(_: DeepPartial<DisconnectPeerResponse>): DisconnectPeerResponse {
    const message = createBaseDisconnectPeerResponse();
    return message;
  },
};

function createBaseHTLC(): HTLC {
  return {
    incoming: false,
    amount: '0',
    hashLock: new Uint8Array(),
    expirationHeight: 0,
    htlcIndex: '0',
    forwardingChannel: '0',
    forwardingHtlcIndex: '0',
  };
}

export const HTLC = {
  encode(message: HTLC, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.incoming) {
      writer.uint32(8).bool(message.incoming);
    }

    if (message.amount !== '0') {
      writer.uint32(16).int64(message.amount);
    }

    if (message.hashLock.length > 0) {
      writer.uint32(26).bytes(message.hashLock);
    }

    if (message.expirationHeight !== 0) {
      writer.uint32(32).uint32(message.expirationHeight);
    }

    if (message.htlcIndex !== '0') {
      writer.uint32(40).uint64(message.htlcIndex);
    }

    if (message.forwardingChannel !== '0') {
      writer.uint32(48).uint64(message.forwardingChannel);
    }

    if (message.forwardingHtlcIndex !== '0') {
      writer.uint32(56).uint64(message.forwardingHtlcIndex);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HTLC {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHTLC();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.incoming = reader.bool();
          break;
        case 2:
          message.amount = longToString(reader.int64() as Long);
          break;
        case 3:
          message.hashLock = reader.bytes();
          break;
        case 4:
          message.expirationHeight = reader.uint32();
          break;
        case 5:
          message.htlcIndex = longToString(reader.uint64() as Long);
          break;
        case 6:
          message.forwardingChannel = longToString(reader.uint64() as Long);
          break;
        case 7:
          message.forwardingHtlcIndex = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): HTLC {
    const message = createBaseHTLC();
    message.incoming =
      object.incoming !== undefined && object.incoming !== null
        ? Boolean(object.incoming)
        : false;
    message.amount =
      object.amount !== undefined && object.amount !== null
        ? String(object.amount)
        : '0';
    message.hashLock =
      object.hashLock !== undefined && object.hashLock !== null
        ? bytesFromBase64(object.hashLock)
        : new Uint8Array();
    message.expirationHeight =
      object.expirationHeight !== undefined && object.expirationHeight !== null
        ? Number(object.expirationHeight)
        : 0;
    message.htlcIndex =
      object.htlcIndex !== undefined && object.htlcIndex !== null
        ? String(object.htlcIndex)
        : '0';
    message.forwardingChannel =
      object.forwardingChannel !== undefined &&
      object.forwardingChannel !== null
        ? String(object.forwardingChannel)
        : '0';
    message.forwardingHtlcIndex =
      object.forwardingHtlcIndex !== undefined &&
      object.forwardingHtlcIndex !== null
        ? String(object.forwardingHtlcIndex)
        : '0';
    return message;
  },

  toJSON(message: HTLC): unknown {
    const object: any = {};
    message.incoming !== undefined && (object.incoming = message.incoming);
    message.amount !== undefined && (object.amount = message.amount);
    message.hashLock !== undefined &&
      (object.hashLock = base64FromBytes(
        message.hashLock !== undefined ? message.hashLock : new Uint8Array(),
      ));
    message.expirationHeight !== undefined &&
      (object.expirationHeight = Math.round(message.expirationHeight));
    message.htlcIndex !== undefined && (object.htlcIndex = message.htlcIndex);
    message.forwardingChannel !== undefined &&
      (object.forwardingChannel = message.forwardingChannel);
    message.forwardingHtlcIndex !== undefined &&
      (object.forwardingHtlcIndex = message.forwardingHtlcIndex);
    return object;
  },

  fromPartial(object: DeepPartial<HTLC>): HTLC {
    const message = createBaseHTLC();
    message.incoming = object.incoming ?? false;
    message.amount = object.amount ?? '0';
    message.hashLock = object.hashLock ?? new Uint8Array();
    message.expirationHeight = object.expirationHeight ?? 0;
    message.htlcIndex = object.htlcIndex ?? '0';
    message.forwardingChannel = object.forwardingChannel ?? '0';
    message.forwardingHtlcIndex = object.forwardingHtlcIndex ?? '0';
    return message;
  },
};

function createBaseChannelConstraints(): ChannelConstraints {
  return {
    csvDelay: 0,
    chanReserveSat: '0',
    dustLimitSat: '0',
    maxPendingAmtMsat: '0',
    minHtlcMsat: '0',
    maxAcceptedHtlcs: 0,
  };
}

export const ChannelConstraints = {
  encode(
    message: ChannelConstraints,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.csvDelay !== 0) {
      writer.uint32(8).uint32(message.csvDelay);
    }

    if (message.chanReserveSat !== '0') {
      writer.uint32(16).uint64(message.chanReserveSat);
    }

    if (message.dustLimitSat !== '0') {
      writer.uint32(24).uint64(message.dustLimitSat);
    }

    if (message.maxPendingAmtMsat !== '0') {
      writer.uint32(32).uint64(message.maxPendingAmtMsat);
    }

    if (message.minHtlcMsat !== '0') {
      writer.uint32(40).uint64(message.minHtlcMsat);
    }

    if (message.maxAcceptedHtlcs !== 0) {
      writer.uint32(48).uint32(message.maxAcceptedHtlcs);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChannelConstraints {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChannelConstraints();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.csvDelay = reader.uint32();
          break;
        case 2:
          message.chanReserveSat = longToString(reader.uint64() as Long);
          break;
        case 3:
          message.dustLimitSat = longToString(reader.uint64() as Long);
          break;
        case 4:
          message.maxPendingAmtMsat = longToString(reader.uint64() as Long);
          break;
        case 5:
          message.minHtlcMsat = longToString(reader.uint64() as Long);
          break;
        case 6:
          message.maxAcceptedHtlcs = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ChannelConstraints {
    const message = createBaseChannelConstraints();
    message.csvDelay =
      object.csvDelay !== undefined && object.csvDelay !== null
        ? Number(object.csvDelay)
        : 0;
    message.chanReserveSat =
      object.chanReserveSat !== undefined && object.chanReserveSat !== null
        ? String(object.chanReserveSat)
        : '0';
    message.dustLimitSat =
      object.dustLimitSat !== undefined && object.dustLimitSat !== null
        ? String(object.dustLimitSat)
        : '0';
    message.maxPendingAmtMsat =
      object.maxPendingAmtMsat !== undefined &&
      object.maxPendingAmtMsat !== null
        ? String(object.maxPendingAmtMsat)
        : '0';
    message.minHtlcMsat =
      object.minHtlcMsat !== undefined && object.minHtlcMsat !== null
        ? String(object.minHtlcMsat)
        : '0';
    message.maxAcceptedHtlcs =
      object.maxAcceptedHtlcs !== undefined && object.maxAcceptedHtlcs !== null
        ? Number(object.maxAcceptedHtlcs)
        : 0;
    return message;
  },

  toJSON(message: ChannelConstraints): unknown {
    const object: any = {};
    message.csvDelay !== undefined &&
      (object.csvDelay = Math.round(message.csvDelay));
    message.chanReserveSat !== undefined &&
      (object.chanReserveSat = message.chanReserveSat);
    message.dustLimitSat !== undefined &&
      (object.dustLimitSat = message.dustLimitSat);
    message.maxPendingAmtMsat !== undefined &&
      (object.maxPendingAmtMsat = message.maxPendingAmtMsat);
    message.minHtlcMsat !== undefined &&
      (object.minHtlcMsat = message.minHtlcMsat);
    message.maxAcceptedHtlcs !== undefined &&
      (object.maxAcceptedHtlcs = Math.round(message.maxAcceptedHtlcs));
    return object;
  },

  fromPartial(object: DeepPartial<ChannelConstraints>): ChannelConstraints {
    const message = createBaseChannelConstraints();
    message.csvDelay = object.csvDelay ?? 0;
    message.chanReserveSat = object.chanReserveSat ?? '0';
    message.dustLimitSat = object.dustLimitSat ?? '0';
    message.maxPendingAmtMsat = object.maxPendingAmtMsat ?? '0';
    message.minHtlcMsat = object.minHtlcMsat ?? '0';
    message.maxAcceptedHtlcs = object.maxAcceptedHtlcs ?? 0;
    return message;
  },
};

function createBaseChannel(): Channel {
  return {
    active: false,
    remotePubkey: '',
    channelPoint: '',
    chanId: '0',
    capacity: '0',
    localBalance: '0',
    remoteBalance: '0',
    commitFee: '0',
    commitWeight: '0',
    feePerKw: '0',
    unsettledBalance: '0',
    totalSatoshisSent: '0',
    totalSatoshisReceived: '0',
    numUpdates: '0',
    pendingHtlcs: [],
    csvDelay: 0,
    private: false,
    initiator: false,
    chanStatusFlags: '',
    localChanReserveSat: '0',
    remoteChanReserveSat: '0',
    staticRemoteKey: false,
    commitmentType: 0,
    lifetime: '0',
    uptime: '0',
    closeAddress: '',
    pushAmountSat: '0',
    thawHeight: 0,
    localConstraints: undefined,
    remoteConstraints: undefined,
  };
}

export const Channel = {
  encode(
    message: Channel,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.active) {
      writer.uint32(8).bool(message.active);
    }

    if (message.remotePubkey !== '') {
      writer.uint32(18).string(message.remotePubkey);
    }

    if (message.channelPoint !== '') {
      writer.uint32(26).string(message.channelPoint);
    }

    if (message.chanId !== '0') {
      writer.uint32(32).uint64(message.chanId);
    }

    if (message.capacity !== '0') {
      writer.uint32(40).int64(message.capacity);
    }

    if (message.localBalance !== '0') {
      writer.uint32(48).int64(message.localBalance);
    }

    if (message.remoteBalance !== '0') {
      writer.uint32(56).int64(message.remoteBalance);
    }

    if (message.commitFee !== '0') {
      writer.uint32(64).int64(message.commitFee);
    }

    if (message.commitWeight !== '0') {
      writer.uint32(72).int64(message.commitWeight);
    }

    if (message.feePerKw !== '0') {
      writer.uint32(80).int64(message.feePerKw);
    }

    if (message.unsettledBalance !== '0') {
      writer.uint32(88).int64(message.unsettledBalance);
    }

    if (message.totalSatoshisSent !== '0') {
      writer.uint32(96).int64(message.totalSatoshisSent);
    }

    if (message.totalSatoshisReceived !== '0') {
      writer.uint32(104).int64(message.totalSatoshisReceived);
    }

    if (message.numUpdates !== '0') {
      writer.uint32(112).uint64(message.numUpdates);
    }

    for (const v of message.pendingHtlcs) {
      HTLC.encode(v, writer.uint32(122).fork()).ldelim();
    }

    if (message.csvDelay !== 0) {
      writer.uint32(128).uint32(message.csvDelay);
    }

    if (message.private) {
      writer.uint32(136).bool(message.private);
    }

    if (message.initiator) {
      writer.uint32(144).bool(message.initiator);
    }

    if (message.chanStatusFlags !== '') {
      writer.uint32(154).string(message.chanStatusFlags);
    }

    if (message.localChanReserveSat !== '0') {
      writer.uint32(160).int64(message.localChanReserveSat);
    }

    if (message.remoteChanReserveSat !== '0') {
      writer.uint32(168).int64(message.remoteChanReserveSat);
    }

    if (message.staticRemoteKey) {
      writer.uint32(176).bool(message.staticRemoteKey);
    }

    if (message.commitmentType !== 0) {
      writer.uint32(208).int32(message.commitmentType);
    }

    if (message.lifetime !== '0') {
      writer.uint32(184).int64(message.lifetime);
    }

    if (message.uptime !== '0') {
      writer.uint32(192).int64(message.uptime);
    }

    if (message.closeAddress !== '') {
      writer.uint32(202).string(message.closeAddress);
    }

    if (message.pushAmountSat !== '0') {
      writer.uint32(216).uint64(message.pushAmountSat);
    }

    if (message.thawHeight !== 0) {
      writer.uint32(224).uint32(message.thawHeight);
    }

    if (message.localConstraints !== undefined) {
      ChannelConstraints.encode(
        message.localConstraints,
        writer.uint32(234).fork(),
      ).ldelim();
    }

    if (message.remoteConstraints !== undefined) {
      ChannelConstraints.encode(
        message.remoteConstraints,
        writer.uint32(242).fork(),
      ).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Channel {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChannel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.active = reader.bool();
          break;
        case 2:
          message.remotePubkey = reader.string();
          break;
        case 3:
          message.channelPoint = reader.string();
          break;
        case 4:
          message.chanId = longToString(reader.uint64() as Long);
          break;
        case 5:
          message.capacity = longToString(reader.int64() as Long);
          break;
        case 6:
          message.localBalance = longToString(reader.int64() as Long);
          break;
        case 7:
          message.remoteBalance = longToString(reader.int64() as Long);
          break;
        case 8:
          message.commitFee = longToString(reader.int64() as Long);
          break;
        case 9:
          message.commitWeight = longToString(reader.int64() as Long);
          break;
        case 10:
          message.feePerKw = longToString(reader.int64() as Long);
          break;
        case 11:
          message.unsettledBalance = longToString(reader.int64() as Long);
          break;
        case 12:
          message.totalSatoshisSent = longToString(reader.int64() as Long);
          break;
        case 13:
          message.totalSatoshisReceived = longToString(reader.int64() as Long);
          break;
        case 14:
          message.numUpdates = longToString(reader.uint64() as Long);
          break;
        case 15:
          message.pendingHtlcs.push(HTLC.decode(reader, reader.uint32()));
          break;
        case 16:
          message.csvDelay = reader.uint32();
          break;
        case 17:
          message.private = reader.bool();
          break;
        case 18:
          message.initiator = reader.bool();
          break;
        case 19:
          message.chanStatusFlags = reader.string();
          break;
        case 20:
          message.localChanReserveSat = longToString(reader.int64() as Long);
          break;
        case 21:
          message.remoteChanReserveSat = longToString(reader.int64() as Long);
          break;
        case 22:
          message.staticRemoteKey = reader.bool();
          break;
        case 26:
          message.commitmentType = reader.int32() as any;
          break;
        case 23:
          message.lifetime = longToString(reader.int64() as Long);
          break;
        case 24:
          message.uptime = longToString(reader.int64() as Long);
          break;
        case 25:
          message.closeAddress = reader.string();
          break;
        case 27:
          message.pushAmountSat = longToString(reader.uint64() as Long);
          break;
        case 28:
          message.thawHeight = reader.uint32();
          break;
        case 29:
          message.localConstraints = ChannelConstraints.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 30:
          message.remoteConstraints = ChannelConstraints.decode(
            reader,
            reader.uint32(),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Channel {
    const message = createBaseChannel();
    message.active =
      object.active !== undefined && object.active !== null
        ? Boolean(object.active)
        : false;
    message.remotePubkey =
      object.remotePubkey !== undefined && object.remotePubkey !== null
        ? String(object.remotePubkey)
        : '';
    message.channelPoint =
      object.channelPoint !== undefined && object.channelPoint !== null
        ? String(object.channelPoint)
        : '';
    message.chanId =
      object.chanId !== undefined && object.chanId !== null
        ? String(object.chanId)
        : '0';
    message.capacity =
      object.capacity !== undefined && object.capacity !== null
        ? String(object.capacity)
        : '0';
    message.localBalance =
      object.localBalance !== undefined && object.localBalance !== null
        ? String(object.localBalance)
        : '0';
    message.remoteBalance =
      object.remoteBalance !== undefined && object.remoteBalance !== null
        ? String(object.remoteBalance)
        : '0';
    message.commitFee =
      object.commitFee !== undefined && object.commitFee !== null
        ? String(object.commitFee)
        : '0';
    message.commitWeight =
      object.commitWeight !== undefined && object.commitWeight !== null
        ? String(object.commitWeight)
        : '0';
    message.feePerKw =
      object.feePerKw !== undefined && object.feePerKw !== null
        ? String(object.feePerKw)
        : '0';
    message.unsettledBalance =
      object.unsettledBalance !== undefined && object.unsettledBalance !== null
        ? String(object.unsettledBalance)
        : '0';
    message.totalSatoshisSent =
      object.totalSatoshisSent !== undefined &&
      object.totalSatoshisSent !== null
        ? String(object.totalSatoshisSent)
        : '0';
    message.totalSatoshisReceived =
      object.totalSatoshisReceived !== undefined &&
      object.totalSatoshisReceived !== null
        ? String(object.totalSatoshisReceived)
        : '0';
    message.numUpdates =
      object.numUpdates !== undefined && object.numUpdates !== null
        ? String(object.numUpdates)
        : '0';
    message.pendingHtlcs = (object.pendingHtlcs ?? []).map((e: any) =>
      HTLC.fromJSON(e),
    );
    message.csvDelay =
      object.csvDelay !== undefined && object.csvDelay !== null
        ? Number(object.csvDelay)
        : 0;
    message.private =
      object.private !== undefined && object.private !== null
        ? Boolean(object.private)
        : false;
    message.initiator =
      object.initiator !== undefined && object.initiator !== null
        ? Boolean(object.initiator)
        : false;
    message.chanStatusFlags =
      object.chanStatusFlags !== undefined && object.chanStatusFlags !== null
        ? String(object.chanStatusFlags)
        : '';
    message.localChanReserveSat =
      object.localChanReserveSat !== undefined &&
      object.localChanReserveSat !== null
        ? String(object.localChanReserveSat)
        : '0';
    message.remoteChanReserveSat =
      object.remoteChanReserveSat !== undefined &&
      object.remoteChanReserveSat !== null
        ? String(object.remoteChanReserveSat)
        : '0';
    message.staticRemoteKey =
      object.staticRemoteKey !== undefined && object.staticRemoteKey !== null
        ? Boolean(object.staticRemoteKey)
        : false;
    message.commitmentType =
      object.commitmentType !== undefined && object.commitmentType !== null
        ? commitmentTypeFromJSON(object.commitmentType)
        : 0;
    message.lifetime =
      object.lifetime !== undefined && object.lifetime !== null
        ? String(object.lifetime)
        : '0';
    message.uptime =
      object.uptime !== undefined && object.uptime !== null
        ? String(object.uptime)
        : '0';
    message.closeAddress =
      object.closeAddress !== undefined && object.closeAddress !== null
        ? String(object.closeAddress)
        : '';
    message.pushAmountSat =
      object.pushAmountSat !== undefined && object.pushAmountSat !== null
        ? String(object.pushAmountSat)
        : '0';
    message.thawHeight =
      object.thawHeight !== undefined && object.thawHeight !== null
        ? Number(object.thawHeight)
        : 0;
    message.localConstraints =
      object.localConstraints !== undefined && object.localConstraints !== null
        ? ChannelConstraints.fromJSON(object.localConstraints)
        : undefined;
    message.remoteConstraints =
      object.remoteConstraints !== undefined &&
      object.remoteConstraints !== null
        ? ChannelConstraints.fromJSON(object.remoteConstraints)
        : undefined;
    return message;
  },

  toJSON(message: Channel): unknown {
    const object: any = {};
    message.active !== undefined && (object.active = message.active);
    message.remotePubkey !== undefined &&
      (object.remotePubkey = message.remotePubkey);
    message.channelPoint !== undefined &&
      (object.channelPoint = message.channelPoint);
    message.chanId !== undefined && (object.chanId = message.chanId);
    message.capacity !== undefined && (object.capacity = message.capacity);
    message.localBalance !== undefined &&
      (object.localBalance = message.localBalance);
    message.remoteBalance !== undefined &&
      (object.remoteBalance = message.remoteBalance);
    message.commitFee !== undefined && (object.commitFee = message.commitFee);
    message.commitWeight !== undefined &&
      (object.commitWeight = message.commitWeight);
    message.feePerKw !== undefined && (object.feePerKw = message.feePerKw);
    message.unsettledBalance !== undefined &&
      (object.unsettledBalance = message.unsettledBalance);
    message.totalSatoshisSent !== undefined &&
      (object.totalSatoshisSent = message.totalSatoshisSent);
    message.totalSatoshisReceived !== undefined &&
      (object.totalSatoshisReceived = message.totalSatoshisReceived);
    message.numUpdates !== undefined &&
      (object.numUpdates = message.numUpdates);
    if (message.pendingHtlcs) {
      object.pendingHtlcs = message.pendingHtlcs.map((e) =>
        e ? HTLC.toJSON(e) : undefined,
      );
    } else {
      object.pendingHtlcs = [];
    }

    message.csvDelay !== undefined &&
      (object.csvDelay = Math.round(message.csvDelay));
    message.private !== undefined && (object.private = message.private);
    message.initiator !== undefined && (object.initiator = message.initiator);
    message.chanStatusFlags !== undefined &&
      (object.chanStatusFlags = message.chanStatusFlags);
    message.localChanReserveSat !== undefined &&
      (object.localChanReserveSat = message.localChanReserveSat);
    message.remoteChanReserveSat !== undefined &&
      (object.remoteChanReserveSat = message.remoteChanReserveSat);
    message.staticRemoteKey !== undefined &&
      (object.staticRemoteKey = message.staticRemoteKey);
    message.commitmentType !== undefined &&
      (object.commitmentType = commitmentTypeToJSON(message.commitmentType));
    message.lifetime !== undefined && (object.lifetime = message.lifetime);
    message.uptime !== undefined && (object.uptime = message.uptime);
    message.closeAddress !== undefined &&
      (object.closeAddress = message.closeAddress);
    message.pushAmountSat !== undefined &&
      (object.pushAmountSat = message.pushAmountSat);
    message.thawHeight !== undefined &&
      (object.thawHeight = Math.round(message.thawHeight));
    message.localConstraints !== undefined &&
      (object.localConstraints = message.localConstraints
        ? ChannelConstraints.toJSON(message.localConstraints)
        : undefined);
    message.remoteConstraints !== undefined &&
      (object.remoteConstraints = message.remoteConstraints
        ? ChannelConstraints.toJSON(message.remoteConstraints)
        : undefined);
    return object;
  },

  fromPartial(object: DeepPartial<Channel>): Channel {
    const message = createBaseChannel();
    message.active = object.active ?? false;
    message.remotePubkey = object.remotePubkey ?? '';
    message.channelPoint = object.channelPoint ?? '';
    message.chanId = object.chanId ?? '0';
    message.capacity = object.capacity ?? '0';
    message.localBalance = object.localBalance ?? '0';
    message.remoteBalance = object.remoteBalance ?? '0';
    message.commitFee = object.commitFee ?? '0';
    message.commitWeight = object.commitWeight ?? '0';
    message.feePerKw = object.feePerKw ?? '0';
    message.unsettledBalance = object.unsettledBalance ?? '0';
    message.totalSatoshisSent = object.totalSatoshisSent ?? '0';
    message.totalSatoshisReceived = object.totalSatoshisReceived ?? '0';
    message.numUpdates = object.numUpdates ?? '0';
    message.pendingHtlcs =
      object.pendingHtlcs?.map((e) => HTLC.fromPartial(e)) || [];
    message.csvDelay = object.csvDelay ?? 0;
    message.private = object.private ?? false;
    message.initiator = object.initiator ?? false;
    message.chanStatusFlags = object.chanStatusFlags ?? '';
    message.localChanReserveSat = object.localChanReserveSat ?? '0';
    message.remoteChanReserveSat = object.remoteChanReserveSat ?? '0';
    message.staticRemoteKey = object.staticRemoteKey ?? false;
    message.commitmentType = object.commitmentType ?? 0;
    message.lifetime = object.lifetime ?? '0';
    message.uptime = object.uptime ?? '0';
    message.closeAddress = object.closeAddress ?? '';
    message.pushAmountSat = object.pushAmountSat ?? '0';
    message.thawHeight = object.thawHeight ?? 0;
    message.localConstraints =
      object.localConstraints !== undefined && object.localConstraints !== null
        ? ChannelConstraints.fromPartial(object.localConstraints)
        : undefined;
    message.remoteConstraints =
      object.remoteConstraints !== undefined &&
      object.remoteConstraints !== null
        ? ChannelConstraints.fromPartial(object.remoteConstraints)
        : undefined;
    return message;
  },
};

function createBaseListChannelsRequest(): ListChannelsRequest {
  return {
    activeOnly: false,
    inactiveOnly: false,
    publicOnly: false,
    privateOnly: false,
    peer: new Uint8Array(),
  };
}

export const ListChannelsRequest = {
  encode(
    message: ListChannelsRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.activeOnly) {
      writer.uint32(8).bool(message.activeOnly);
    }

    if (message.inactiveOnly) {
      writer.uint32(16).bool(message.inactiveOnly);
    }

    if (message.publicOnly) {
      writer.uint32(24).bool(message.publicOnly);
    }

    if (message.privateOnly) {
      writer.uint32(32).bool(message.privateOnly);
    }

    if (message.peer.length > 0) {
      writer.uint32(42).bytes(message.peer);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListChannelsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListChannelsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.activeOnly = reader.bool();
          break;
        case 2:
          message.inactiveOnly = reader.bool();
          break;
        case 3:
          message.publicOnly = reader.bool();
          break;
        case 4:
          message.privateOnly = reader.bool();
          break;
        case 5:
          message.peer = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ListChannelsRequest {
    const message = createBaseListChannelsRequest();
    message.activeOnly =
      object.activeOnly !== undefined && object.activeOnly !== null
        ? Boolean(object.activeOnly)
        : false;
    message.inactiveOnly =
      object.inactiveOnly !== undefined && object.inactiveOnly !== null
        ? Boolean(object.inactiveOnly)
        : false;
    message.publicOnly =
      object.publicOnly !== undefined && object.publicOnly !== null
        ? Boolean(object.publicOnly)
        : false;
    message.privateOnly =
      object.privateOnly !== undefined && object.privateOnly !== null
        ? Boolean(object.privateOnly)
        : false;
    message.peer =
      object.peer !== undefined && object.peer !== null
        ? bytesFromBase64(object.peer)
        : new Uint8Array();
    return message;
  },

  toJSON(message: ListChannelsRequest): unknown {
    const object: any = {};
    message.activeOnly !== undefined &&
      (object.activeOnly = message.activeOnly);
    message.inactiveOnly !== undefined &&
      (object.inactiveOnly = message.inactiveOnly);
    message.publicOnly !== undefined &&
      (object.publicOnly = message.publicOnly);
    message.privateOnly !== undefined &&
      (object.privateOnly = message.privateOnly);
    message.peer !== undefined &&
      (object.peer = base64FromBytes(
        message.peer !== undefined ? message.peer : new Uint8Array(),
      ));
    return object;
  },

  fromPartial(object: DeepPartial<ListChannelsRequest>): ListChannelsRequest {
    const message = createBaseListChannelsRequest();
    message.activeOnly = object.activeOnly ?? false;
    message.inactiveOnly = object.inactiveOnly ?? false;
    message.publicOnly = object.publicOnly ?? false;
    message.privateOnly = object.privateOnly ?? false;
    message.peer = object.peer ?? new Uint8Array();
    return message;
  },
};

function createBaseListChannelsResponse(): ListChannelsResponse {
  return {channels: []};
}

export const ListChannelsResponse = {
  encode(
    message: ListChannelsResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.channels) {
      Channel.encode(v, writer.uint32(90).fork()).ldelim();
    }

    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ListChannelsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListChannelsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 11:
          message.channels.push(Channel.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ListChannelsResponse {
    const message = createBaseListChannelsResponse();
    message.channels = (object.channels ?? []).map((e: any) =>
      Channel.fromJSON(e),
    );
    return message;
  },

  toJSON(message: ListChannelsResponse): unknown {
    const object: any = {};
    if (message.channels) {
      object.channels = message.channels.map((e) =>
        e ? Channel.toJSON(e) : undefined,
      );
    } else {
      object.channels = [];
    }

    return object;
  },

  fromPartial(object: DeepPartial<ListChannelsResponse>): ListChannelsResponse {
    const message = createBaseListChannelsResponse();
    message.channels =
      object.channels?.map((e) => Channel.fromPartial(e)) || [];
    return message;
  },
};

function createBaseChannelCloseSummary(): ChannelCloseSummary {
  return {
    channelPoint: '',
    chanId: '0',
    chainHash: '',
    closingTxHash: '',
    remotePubkey: '',
    capacity: '0',
    closeHeight: 0,
    settledBalance: '0',
    timeLockedBalance: '0',
    closeType: 0,
    openInitiator: 0,
    closeInitiator: 0,
    resolutions: [],
  };
}

export const ChannelCloseSummary = {
  encode(
    message: ChannelCloseSummary,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.channelPoint !== '') {
      writer.uint32(10).string(message.channelPoint);
    }

    if (message.chanId !== '0') {
      writer.uint32(16).uint64(message.chanId);
    }

    if (message.chainHash !== '') {
      writer.uint32(26).string(message.chainHash);
    }

    if (message.closingTxHash !== '') {
      writer.uint32(34).string(message.closingTxHash);
    }

    if (message.remotePubkey !== '') {
      writer.uint32(42).string(message.remotePubkey);
    }

    if (message.capacity !== '0') {
      writer.uint32(48).int64(message.capacity);
    }

    if (message.closeHeight !== 0) {
      writer.uint32(56).uint32(message.closeHeight);
    }

    if (message.settledBalance !== '0') {
      writer.uint32(64).int64(message.settledBalance);
    }

    if (message.timeLockedBalance !== '0') {
      writer.uint32(72).int64(message.timeLockedBalance);
    }

    if (message.closeType !== 0) {
      writer.uint32(80).int32(message.closeType);
    }

    if (message.openInitiator !== 0) {
      writer.uint32(88).int32(message.openInitiator);
    }

    if (message.closeInitiator !== 0) {
      writer.uint32(96).int32(message.closeInitiator);
    }

    for (const v of message.resolutions) {
      Resolution.encode(v, writer.uint32(106).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChannelCloseSummary {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChannelCloseSummary();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channelPoint = reader.string();
          break;
        case 2:
          message.chanId = longToString(reader.uint64() as Long);
          break;
        case 3:
          message.chainHash = reader.string();
          break;
        case 4:
          message.closingTxHash = reader.string();
          break;
        case 5:
          message.remotePubkey = reader.string();
          break;
        case 6:
          message.capacity = longToString(reader.int64() as Long);
          break;
        case 7:
          message.closeHeight = reader.uint32();
          break;
        case 8:
          message.settledBalance = longToString(reader.int64() as Long);
          break;
        case 9:
          message.timeLockedBalance = longToString(reader.int64() as Long);
          break;
        case 10:
          message.closeType = reader.int32() as any;
          break;
        case 11:
          message.openInitiator = reader.int32() as any;
          break;
        case 12:
          message.closeInitiator = reader.int32() as any;
          break;
        case 13:
          message.resolutions.push(Resolution.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ChannelCloseSummary {
    const message = createBaseChannelCloseSummary();
    message.channelPoint =
      object.channelPoint !== undefined && object.channelPoint !== null
        ? String(object.channelPoint)
        : '';
    message.chanId =
      object.chanId !== undefined && object.chanId !== null
        ? String(object.chanId)
        : '0';
    message.chainHash =
      object.chainHash !== undefined && object.chainHash !== null
        ? String(object.chainHash)
        : '';
    message.closingTxHash =
      object.closingTxHash !== undefined && object.closingTxHash !== null
        ? String(object.closingTxHash)
        : '';
    message.remotePubkey =
      object.remotePubkey !== undefined && object.remotePubkey !== null
        ? String(object.remotePubkey)
        : '';
    message.capacity =
      object.capacity !== undefined && object.capacity !== null
        ? String(object.capacity)
        : '0';
    message.closeHeight =
      object.closeHeight !== undefined && object.closeHeight !== null
        ? Number(object.closeHeight)
        : 0;
    message.settledBalance =
      object.settledBalance !== undefined && object.settledBalance !== null
        ? String(object.settledBalance)
        : '0';
    message.timeLockedBalance =
      object.timeLockedBalance !== undefined &&
      object.timeLockedBalance !== null
        ? String(object.timeLockedBalance)
        : '0';
    message.closeType =
      object.closeType !== undefined && object.closeType !== null
        ? channelCloseSummary_ClosureTypeFromJSON(object.closeType)
        : 0;
    message.openInitiator =
      object.openInitiator !== undefined && object.openInitiator !== null
        ? initiatorFromJSON(object.openInitiator)
        : 0;
    message.closeInitiator =
      object.closeInitiator !== undefined && object.closeInitiator !== null
        ? initiatorFromJSON(object.closeInitiator)
        : 0;
    message.resolutions = (object.resolutions ?? []).map((e: any) =>
      Resolution.fromJSON(e),
    );
    return message;
  },

  toJSON(message: ChannelCloseSummary): unknown {
    const object: any = {};
    message.channelPoint !== undefined &&
      (object.channelPoint = message.channelPoint);
    message.chanId !== undefined && (object.chanId = message.chanId);
    message.chainHash !== undefined && (object.chainHash = message.chainHash);
    message.closingTxHash !== undefined &&
      (object.closingTxHash = message.closingTxHash);
    message.remotePubkey !== undefined &&
      (object.remotePubkey = message.remotePubkey);
    message.capacity !== undefined && (object.capacity = message.capacity);
    message.closeHeight !== undefined &&
      (object.closeHeight = Math.round(message.closeHeight));
    message.settledBalance !== undefined &&
      (object.settledBalance = message.settledBalance);
    message.timeLockedBalance !== undefined &&
      (object.timeLockedBalance = message.timeLockedBalance);
    message.closeType !== undefined &&
      (object.closeType = channelCloseSummary_ClosureTypeToJSON(
        message.closeType,
      ));
    message.openInitiator !== undefined &&
      (object.openInitiator = initiatorToJSON(message.openInitiator));
    message.closeInitiator !== undefined &&
      (object.closeInitiator = initiatorToJSON(message.closeInitiator));
    if (message.resolutions) {
      object.resolutions = message.resolutions.map((e) =>
        e ? Resolution.toJSON(e) : undefined,
      );
    } else {
      object.resolutions = [];
    }

    return object;
  },

  fromPartial(object: DeepPartial<ChannelCloseSummary>): ChannelCloseSummary {
    const message = createBaseChannelCloseSummary();
    message.channelPoint = object.channelPoint ?? '';
    message.chanId = object.chanId ?? '0';
    message.chainHash = object.chainHash ?? '';
    message.closingTxHash = object.closingTxHash ?? '';
    message.remotePubkey = object.remotePubkey ?? '';
    message.capacity = object.capacity ?? '0';
    message.closeHeight = object.closeHeight ?? 0;
    message.settledBalance = object.settledBalance ?? '0';
    message.timeLockedBalance = object.timeLockedBalance ?? '0';
    message.closeType = object.closeType ?? 0;
    message.openInitiator = object.openInitiator ?? 0;
    message.closeInitiator = object.closeInitiator ?? 0;
    message.resolutions =
      object.resolutions?.map((e) => Resolution.fromPartial(e)) || [];
    return message;
  },
};

function createBaseResolution(): Resolution {
  return {
    resolutionType: 0,
    outcome: 0,
    outpoint: undefined,
    amountSat: '0',
    sweepTxid: '',
  };
}

export const Resolution = {
  encode(
    message: Resolution,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.resolutionType !== 0) {
      writer.uint32(8).int32(message.resolutionType);
    }

    if (message.outcome !== 0) {
      writer.uint32(16).int32(message.outcome);
    }

    if (message.outpoint !== undefined) {
      OutPoint.encode(message.outpoint, writer.uint32(26).fork()).ldelim();
    }

    if (message.amountSat !== '0') {
      writer.uint32(32).uint64(message.amountSat);
    }

    if (message.sweepTxid !== '') {
      writer.uint32(42).string(message.sweepTxid);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Resolution {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResolution();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.resolutionType = reader.int32() as any;
          break;
        case 2:
          message.outcome = reader.int32() as any;
          break;
        case 3:
          message.outpoint = OutPoint.decode(reader, reader.uint32());
          break;
        case 4:
          message.amountSat = longToString(reader.uint64() as Long);
          break;
        case 5:
          message.sweepTxid = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Resolution {
    const message = createBaseResolution();
    message.resolutionType =
      object.resolutionType !== undefined && object.resolutionType !== null
        ? resolutionTypeFromJSON(object.resolutionType)
        : 0;
    message.outcome =
      object.outcome !== undefined && object.outcome !== null
        ? resolutionOutcomeFromJSON(object.outcome)
        : 0;
    message.outpoint =
      object.outpoint !== undefined && object.outpoint !== null
        ? OutPoint.fromJSON(object.outpoint)
        : undefined;
    message.amountSat =
      object.amountSat !== undefined && object.amountSat !== null
        ? String(object.amountSat)
        : '0';
    message.sweepTxid =
      object.sweepTxid !== undefined && object.sweepTxid !== null
        ? String(object.sweepTxid)
        : '';
    return message;
  },

  toJSON(message: Resolution): unknown {
    const object: any = {};
    message.resolutionType !== undefined &&
      (object.resolutionType = resolutionTypeToJSON(message.resolutionType));
    message.outcome !== undefined &&
      (object.outcome = resolutionOutcomeToJSON(message.outcome));
    message.outpoint !== undefined &&
      (object.outpoint = message.outpoint
        ? OutPoint.toJSON(message.outpoint)
        : undefined);
    message.amountSat !== undefined && (object.amountSat = message.amountSat);
    message.sweepTxid !== undefined && (object.sweepTxid = message.sweepTxid);
    return object;
  },

  fromPartial(object: DeepPartial<Resolution>): Resolution {
    const message = createBaseResolution();
    message.resolutionType = object.resolutionType ?? 0;
    message.outcome = object.outcome ?? 0;
    message.outpoint =
      object.outpoint !== undefined && object.outpoint !== null
        ? OutPoint.fromPartial(object.outpoint)
        : undefined;
    message.amountSat = object.amountSat ?? '0';
    message.sweepTxid = object.sweepTxid ?? '';
    return message;
  },
};

function createBaseClosedChannelsRequest(): ClosedChannelsRequest {
  return {
    cooperative: false,
    localForce: false,
    remoteForce: false,
    breach: false,
    fundingCanceled: false,
    abandoned: false,
  };
}

export const ClosedChannelsRequest = {
  encode(
    message: ClosedChannelsRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.cooperative) {
      writer.uint32(8).bool(message.cooperative);
    }

    if (message.localForce) {
      writer.uint32(16).bool(message.localForce);
    }

    if (message.remoteForce) {
      writer.uint32(24).bool(message.remoteForce);
    }

    if (message.breach) {
      writer.uint32(32).bool(message.breach);
    }

    if (message.fundingCanceled) {
      writer.uint32(40).bool(message.fundingCanceled);
    }

    if (message.abandoned) {
      writer.uint32(48).bool(message.abandoned);
    }

    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ClosedChannelsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClosedChannelsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cooperative = reader.bool();
          break;
        case 2:
          message.localForce = reader.bool();
          break;
        case 3:
          message.remoteForce = reader.bool();
          break;
        case 4:
          message.breach = reader.bool();
          break;
        case 5:
          message.fundingCanceled = reader.bool();
          break;
        case 6:
          message.abandoned = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ClosedChannelsRequest {
    const message = createBaseClosedChannelsRequest();
    message.cooperative =
      object.cooperative !== undefined && object.cooperative !== null
        ? Boolean(object.cooperative)
        : false;
    message.localForce =
      object.localForce !== undefined && object.localForce !== null
        ? Boolean(object.localForce)
        : false;
    message.remoteForce =
      object.remoteForce !== undefined && object.remoteForce !== null
        ? Boolean(object.remoteForce)
        : false;
    message.breach =
      object.breach !== undefined && object.breach !== null
        ? Boolean(object.breach)
        : false;
    message.fundingCanceled =
      object.fundingCanceled !== undefined && object.fundingCanceled !== null
        ? Boolean(object.fundingCanceled)
        : false;
    message.abandoned =
      object.abandoned !== undefined && object.abandoned !== null
        ? Boolean(object.abandoned)
        : false;
    return message;
  },

  toJSON(message: ClosedChannelsRequest): unknown {
    const object: any = {};
    message.cooperative !== undefined &&
      (object.cooperative = message.cooperative);
    message.localForce !== undefined &&
      (object.localForce = message.localForce);
    message.remoteForce !== undefined &&
      (object.remoteForce = message.remoteForce);
    message.breach !== undefined && (object.breach = message.breach);
    message.fundingCanceled !== undefined &&
      (object.fundingCanceled = message.fundingCanceled);
    message.abandoned !== undefined && (object.abandoned = message.abandoned);
    return object;
  },

  fromPartial(
    object: DeepPartial<ClosedChannelsRequest>,
  ): ClosedChannelsRequest {
    const message = createBaseClosedChannelsRequest();
    message.cooperative = object.cooperative ?? false;
    message.localForce = object.localForce ?? false;
    message.remoteForce = object.remoteForce ?? false;
    message.breach = object.breach ?? false;
    message.fundingCanceled = object.fundingCanceled ?? false;
    message.abandoned = object.abandoned ?? false;
    return message;
  },
};

function createBaseClosedChannelsResponse(): ClosedChannelsResponse {
  return {channels: []};
}

export const ClosedChannelsResponse = {
  encode(
    message: ClosedChannelsResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.channels) {
      ChannelCloseSummary.encode(v, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ClosedChannelsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClosedChannelsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channels.push(
            ChannelCloseSummary.decode(reader, reader.uint32()),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ClosedChannelsResponse {
    const message = createBaseClosedChannelsResponse();
    message.channels = (object.channels ?? []).map((e: any) =>
      ChannelCloseSummary.fromJSON(e),
    );
    return message;
  },

  toJSON(message: ClosedChannelsResponse): unknown {
    const object: any = {};
    if (message.channels) {
      object.channels = message.channels.map((e) =>
        e ? ChannelCloseSummary.toJSON(e) : undefined,
      );
    } else {
      object.channels = [];
    }

    return object;
  },

  fromPartial(
    object: DeepPartial<ClosedChannelsResponse>,
  ): ClosedChannelsResponse {
    const message = createBaseClosedChannelsResponse();
    message.channels =
      object.channels?.map((e) => ChannelCloseSummary.fromPartial(e)) || [];
    return message;
  },
};

function createBasePeer(): Peer {
  return {
    pubKey: '',
    address: '',
    bytesSent: '0',
    bytesRecv: '0',
    satSent: '0',
    satRecv: '0',
    inbound: false,
    pingTime: '0',
    syncType: 0,
    features: {},
    errors: [],
    flapCount: 0,
    lastFlapNs: '0',
    lastPingPayload: new Uint8Array(),
  };
}

export const Peer = {
  encode(message: Peer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pubKey !== '') {
      writer.uint32(10).string(message.pubKey);
    }

    if (message.address !== '') {
      writer.uint32(26).string(message.address);
    }

    if (message.bytesSent !== '0') {
      writer.uint32(32).uint64(message.bytesSent);
    }

    if (message.bytesRecv !== '0') {
      writer.uint32(40).uint64(message.bytesRecv);
    }

    if (message.satSent !== '0') {
      writer.uint32(48).int64(message.satSent);
    }

    if (message.satRecv !== '0') {
      writer.uint32(56).int64(message.satRecv);
    }

    if (message.inbound) {
      writer.uint32(64).bool(message.inbound);
    }

    if (message.pingTime !== '0') {
      writer.uint32(72).int64(message.pingTime);
    }

    if (message.syncType !== 0) {
      writer.uint32(80).int32(message.syncType);
    }

    for (const [key, value] of Object.entries(message.features)) {
      Peer_FeaturesEntry.encode(
        {key: key as any, value},
        writer.uint32(90).fork(),
      ).ldelim();
    }

    for (const v of message.errors) {
      TimestampedError.encode(v, writer.uint32(98).fork()).ldelim();
    }

    if (message.flapCount !== 0) {
      writer.uint32(104).int32(message.flapCount);
    }

    if (message.lastFlapNs !== '0') {
      writer.uint32(112).int64(message.lastFlapNs);
    }

    if (message.lastPingPayload.length > 0) {
      writer.uint32(122).bytes(message.lastPingPayload);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Peer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePeer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pubKey = reader.string();
          break;
        case 3:
          message.address = reader.string();
          break;
        case 4:
          message.bytesSent = longToString(reader.uint64() as Long);
          break;
        case 5:
          message.bytesRecv = longToString(reader.uint64() as Long);
          break;
        case 6:
          message.satSent = longToString(reader.int64() as Long);
          break;
        case 7:
          message.satRecv = longToString(reader.int64() as Long);
          break;
        case 8:
          message.inbound = reader.bool();
          break;
        case 9:
          message.pingTime = longToString(reader.int64() as Long);
          break;
        case 10:
          message.syncType = reader.int32() as any;
          break;
        case 11:
          const entry11 = Peer_FeaturesEntry.decode(reader, reader.uint32());
          if (entry11.value !== undefined) {
            message.features[entry11.key] = entry11.value;
          }

          break;
        case 12:
          message.errors.push(TimestampedError.decode(reader, reader.uint32()));
          break;
        case 13:
          message.flapCount = reader.int32();
          break;
        case 14:
          message.lastFlapNs = longToString(reader.int64() as Long);
          break;
        case 15:
          message.lastPingPayload = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Peer {
    const message = createBasePeer();
    message.pubKey =
      object.pubKey !== undefined && object.pubKey !== null
        ? String(object.pubKey)
        : '';
    message.address =
      object.address !== undefined && object.address !== null
        ? String(object.address)
        : '';
    message.bytesSent =
      object.bytesSent !== undefined && object.bytesSent !== null
        ? String(object.bytesSent)
        : '0';
    message.bytesRecv =
      object.bytesRecv !== undefined && object.bytesRecv !== null
        ? String(object.bytesRecv)
        : '0';
    message.satSent =
      object.satSent !== undefined && object.satSent !== null
        ? String(object.satSent)
        : '0';
    message.satRecv =
      object.satRecv !== undefined && object.satRecv !== null
        ? String(object.satRecv)
        : '0';
    message.inbound =
      object.inbound !== undefined && object.inbound !== null
        ? Boolean(object.inbound)
        : false;
    message.pingTime =
      object.pingTime !== undefined && object.pingTime !== null
        ? String(object.pingTime)
        : '0';
    message.syncType =
      object.syncType !== undefined && object.syncType !== null
        ? peer_SyncTypeFromJSON(object.syncType)
        : 0;
    message.features = Object.entries(object.features ?? {}).reduce<
      Record<number, Feature>
    >((acc, [key, value]) => {
      acc[Number(key)] = Feature.fromJSON(value);
      return acc;
    }, {});
    message.errors = (object.errors ?? []).map((e: any) =>
      TimestampedError.fromJSON(e),
    );
    message.flapCount =
      object.flapCount !== undefined && object.flapCount !== null
        ? Number(object.flapCount)
        : 0;
    message.lastFlapNs =
      object.lastFlapNs !== undefined && object.lastFlapNs !== null
        ? String(object.lastFlapNs)
        : '0';
    message.lastPingPayload =
      object.lastPingPayload !== undefined && object.lastPingPayload !== null
        ? bytesFromBase64(object.lastPingPayload)
        : new Uint8Array();
    return message;
  },

  toJSON(message: Peer): unknown {
    const object: any = {};
    message.pubKey !== undefined && (object.pubKey = message.pubKey);
    message.address !== undefined && (object.address = message.address);
    message.bytesSent !== undefined && (object.bytesSent = message.bytesSent);
    message.bytesRecv !== undefined && (object.bytesRecv = message.bytesRecv);
    message.satSent !== undefined && (object.satSent = message.satSent);
    message.satRecv !== undefined && (object.satRecv = message.satRecv);
    message.inbound !== undefined && (object.inbound = message.inbound);
    message.pingTime !== undefined && (object.pingTime = message.pingTime);
    message.syncType !== undefined &&
      (object.syncType = peer_SyncTypeToJSON(message.syncType));
    object.features = {};
    if (message.features) {
      for (const [k, v] of Object.entries(message.features)) {
        object.features[k] = Feature.toJSON(v);
      }
    }

    if (message.errors) {
      object.errors = message.errors.map((e) =>
        e ? TimestampedError.toJSON(e) : undefined,
      );
    } else {
      object.errors = [];
    }

    message.flapCount !== undefined &&
      (object.flapCount = Math.round(message.flapCount));
    message.lastFlapNs !== undefined &&
      (object.lastFlapNs = message.lastFlapNs);
    message.lastPingPayload !== undefined &&
      (object.lastPingPayload = base64FromBytes(
        message.lastPingPayload !== undefined
          ? message.lastPingPayload
          : new Uint8Array(),
      ));
    return object;
  },

  fromPartial(object: DeepPartial<Peer>): Peer {
    const message = createBasePeer();
    message.pubKey = object.pubKey ?? '';
    message.address = object.address ?? '';
    message.bytesSent = object.bytesSent ?? '0';
    message.bytesRecv = object.bytesRecv ?? '0';
    message.satSent = object.satSent ?? '0';
    message.satRecv = object.satRecv ?? '0';
    message.inbound = object.inbound ?? false;
    message.pingTime = object.pingTime ?? '0';
    message.syncType = object.syncType ?? 0;
    message.features = Object.entries(object.features ?? {}).reduce<
      Record<number, Feature>
    >((acc, [key, value]) => {
      if (value !== undefined) {
        acc[Number(key)] = Feature.fromPartial(value);
      }

      return acc;
    }, {});
    message.errors =
      object.errors?.map((e) => TimestampedError.fromPartial(e)) || [];
    message.flapCount = object.flapCount ?? 0;
    message.lastFlapNs = object.lastFlapNs ?? '0';
    message.lastPingPayload = object.lastPingPayload ?? new Uint8Array();
    return message;
  },
};

function createBasePeer_FeaturesEntry(): Peer_FeaturesEntry {
  return {key: 0, value: undefined};
}

export const Peer_FeaturesEntry = {
  encode(
    message: Peer_FeaturesEntry,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).uint32(message.key);
    }

    if (message.value !== undefined) {
      Feature.encode(message.value, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Peer_FeaturesEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePeer_FeaturesEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.uint32();
          break;
        case 2:
          message.value = Feature.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Peer_FeaturesEntry {
    const message = createBasePeer_FeaturesEntry();
    message.key =
      object.key !== undefined && object.key !== null ? Number(object.key) : 0;
    message.value =
      object.value !== undefined && object.value !== null
        ? Feature.fromJSON(object.value)
        : undefined;
    return message;
  },

  toJSON(message: Peer_FeaturesEntry): unknown {
    const object: any = {};
    message.key !== undefined && (object.key = Math.round(message.key));
    message.value !== undefined &&
      (object.value = message.value
        ? Feature.toJSON(message.value)
        : undefined);
    return object;
  },

  fromPartial(object: DeepPartial<Peer_FeaturesEntry>): Peer_FeaturesEntry {
    const message = createBasePeer_FeaturesEntry();
    message.key = object.key ?? 0;
    message.value =
      object.value !== undefined && object.value !== null
        ? Feature.fromPartial(object.value)
        : undefined;
    return message;
  },
};

function createBaseTimestampedError(): TimestampedError {
  return {timestamp: '0', error: ''};
}

export const TimestampedError = {
  encode(
    message: TimestampedError,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.timestamp !== '0') {
      writer.uint32(8).uint64(message.timestamp);
    }

    if (message.error !== '') {
      writer.uint32(18).string(message.error);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TimestampedError {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimestampedError();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timestamp = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.error = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): TimestampedError {
    const message = createBaseTimestampedError();
    message.timestamp =
      object.timestamp !== undefined && object.timestamp !== null
        ? String(object.timestamp)
        : '0';
    message.error =
      object.error !== undefined && object.error !== null
        ? String(object.error)
        : '';
    return message;
  },

  toJSON(message: TimestampedError): unknown {
    const object: any = {};
    message.timestamp !== undefined && (object.timestamp = message.timestamp);
    message.error !== undefined && (object.error = message.error);
    return object;
  },

  fromPartial(object: DeepPartial<TimestampedError>): TimestampedError {
    const message = createBaseTimestampedError();
    message.timestamp = object.timestamp ?? '0';
    message.error = object.error ?? '';
    return message;
  },
};

function createBaseListPeersRequest(): ListPeersRequest {
  return {latestError: false};
}

export const ListPeersRequest = {
  encode(
    message: ListPeersRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.latestError) {
      writer.uint32(8).bool(message.latestError);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListPeersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListPeersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.latestError = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ListPeersRequest {
    const message = createBaseListPeersRequest();
    message.latestError =
      object.latestError !== undefined && object.latestError !== null
        ? Boolean(object.latestError)
        : false;
    return message;
  },

  toJSON(message: ListPeersRequest): unknown {
    const object: any = {};
    message.latestError !== undefined &&
      (object.latestError = message.latestError);
    return object;
  },

  fromPartial(object: DeepPartial<ListPeersRequest>): ListPeersRequest {
    const message = createBaseListPeersRequest();
    message.latestError = object.latestError ?? false;
    return message;
  },
};

function createBaseListPeersResponse(): ListPeersResponse {
  return {peers: []};
}

export const ListPeersResponse = {
  encode(
    message: ListPeersResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.peers) {
      Peer.encode(v, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListPeersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListPeersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.peers.push(Peer.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ListPeersResponse {
    const message = createBaseListPeersResponse();
    message.peers = (object.peers ?? []).map((e: any) => Peer.fromJSON(e));
    return message;
  },

  toJSON(message: ListPeersResponse): unknown {
    const object: any = {};
    object.peers = message.peers
      ? message.peers.map((e) => (e ? Peer.toJSON(e) : undefined))
      : [];
    return object;
  },

  fromPartial(object: DeepPartial<ListPeersResponse>): ListPeersResponse {
    const message = createBaseListPeersResponse();
    message.peers = object.peers?.map((e) => Peer.fromPartial(e)) || [];
    return message;
  },
};

function createBasePeerEventSubscription(): PeerEventSubscription {
  return {};
}

export const PeerEventSubscription = {
  encode(
    _: PeerEventSubscription,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): PeerEventSubscription {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePeerEventSubscription();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): PeerEventSubscription {
    const message = createBasePeerEventSubscription();
    return message;
  },

  toJSON(_: PeerEventSubscription): unknown {
    const object: any = {};
    return object;
  },

  fromPartial(_: DeepPartial<PeerEventSubscription>): PeerEventSubscription {
    const message = createBasePeerEventSubscription();
    return message;
  },
};

function createBasePeerEvent(): PeerEvent {
  return {pubKey: '', type: 0};
}

export const PeerEvent = {
  encode(
    message: PeerEvent,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.pubKey !== '') {
      writer.uint32(10).string(message.pubKey);
    }

    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PeerEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePeerEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pubKey = reader.string();
          break;
        case 2:
          message.type = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): PeerEvent {
    const message = createBasePeerEvent();
    message.pubKey =
      object.pubKey !== undefined && object.pubKey !== null
        ? String(object.pubKey)
        : '';
    message.type =
      object.type !== undefined && object.type !== null
        ? peerEvent_EventTypeFromJSON(object.type)
        : 0;
    return message;
  },

  toJSON(message: PeerEvent): unknown {
    const object: any = {};
    message.pubKey !== undefined && (object.pubKey = message.pubKey);
    message.type !== undefined &&
      (object.type = peerEvent_EventTypeToJSON(message.type));
    return object;
  },

  fromPartial(object: DeepPartial<PeerEvent>): PeerEvent {
    const message = createBasePeerEvent();
    message.pubKey = object.pubKey ?? '';
    message.type = object.type ?? 0;
    return message;
  },
};

function createBaseGetInfoRequest(): GetInfoRequest {
  return {};
}

export const GetInfoRequest = {
  encode(
    _: GetInfoRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetInfoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): GetInfoRequest {
    const message = createBaseGetInfoRequest();
    return message;
  },

  toJSON(_: GetInfoRequest): unknown {
    const object: any = {};
    return object;
  },

  fromPartial(_: DeepPartial<GetInfoRequest>): GetInfoRequest {
    const message = createBaseGetInfoRequest();
    return message;
  },
};

function createBaseGetInfoResponse(): GetInfoResponse {
  return {
    version: '',
    commitHash: '',
    identityPubkey: '',
    alias: '',
    color: '',
    numPendingChannels: 0,
    numActiveChannels: 0,
    numInactiveChannels: 0,
    numPeers: 0,
    blockHeight: 0,
    blockHash: '',
    bestHeaderTimestamp: '0',
    syncedToChain: false,
    syncedToGraph: false,
    testnet: false,
    chains: [],
    uris: [],
    features: {},
  };
}

export const GetInfoResponse = {
  encode(
    message: GetInfoResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.version !== '') {
      writer.uint32(114).string(message.version);
    }

    if (message.commitHash !== '') {
      writer.uint32(162).string(message.commitHash);
    }

    if (message.identityPubkey !== '') {
      writer.uint32(10).string(message.identityPubkey);
    }

    if (message.alias !== '') {
      writer.uint32(18).string(message.alias);
    }

    if (message.color !== '') {
      writer.uint32(138).string(message.color);
    }

    if (message.numPendingChannels !== 0) {
      writer.uint32(24).uint32(message.numPendingChannels);
    }

    if (message.numActiveChannels !== 0) {
      writer.uint32(32).uint32(message.numActiveChannels);
    }

    if (message.numInactiveChannels !== 0) {
      writer.uint32(120).uint32(message.numInactiveChannels);
    }

    if (message.numPeers !== 0) {
      writer.uint32(40).uint32(message.numPeers);
    }

    if (message.blockHeight !== 0) {
      writer.uint32(48).uint32(message.blockHeight);
    }

    if (message.blockHash !== '') {
      writer.uint32(66).string(message.blockHash);
    }

    if (message.bestHeaderTimestamp !== '0') {
      writer.uint32(104).int64(message.bestHeaderTimestamp);
    }

    if (message.syncedToChain) {
      writer.uint32(72).bool(message.syncedToChain);
    }

    if (message.syncedToGraph) {
      writer.uint32(144).bool(message.syncedToGraph);
    }

    if (message.testnet) {
      writer.uint32(80).bool(message.testnet);
    }

    for (const v of message.chains) {
      Chain.encode(v, writer.uint32(130).fork()).ldelim();
    }

    for (const v of message.uris) {
      writer.uint32(98).string(v);
    }

    for (const [key, value] of Object.entries(message.features)) {
      GetInfoResponse_FeaturesEntry.encode(
        {key: key as any, value},
        writer.uint32(154).fork(),
      ).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 14:
          message.version = reader.string();
          break;
        case 20:
          message.commitHash = reader.string();
          break;
        case 1:
          message.identityPubkey = reader.string();
          break;
        case 2:
          message.alias = reader.string();
          break;
        case 17:
          message.color = reader.string();
          break;
        case 3:
          message.numPendingChannels = reader.uint32();
          break;
        case 4:
          message.numActiveChannels = reader.uint32();
          break;
        case 15:
          message.numInactiveChannels = reader.uint32();
          break;
        case 5:
          message.numPeers = reader.uint32();
          break;
        case 6:
          message.blockHeight = reader.uint32();
          break;
        case 8:
          message.blockHash = reader.string();
          break;
        case 13:
          message.bestHeaderTimestamp = longToString(reader.int64() as Long);
          break;
        case 9:
          message.syncedToChain = reader.bool();
          break;
        case 18:
          message.syncedToGraph = reader.bool();
          break;
        case 10:
          message.testnet = reader.bool();
          break;
        case 16:
          message.chains.push(Chain.decode(reader, reader.uint32()));
          break;
        case 12:
          message.uris.push(reader.string());
          break;
        case 19:
          const entry19 = GetInfoResponse_FeaturesEntry.decode(
            reader,
            reader.uint32(),
          );
          if (entry19.value !== undefined) {
            message.features[entry19.key] = entry19.value;
          }

          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): GetInfoResponse {
    const message = createBaseGetInfoResponse();
    message.version =
      object.version !== undefined && object.version !== null
        ? String(object.version)
        : '';
    message.commitHash =
      object.commitHash !== undefined && object.commitHash !== null
        ? String(object.commitHash)
        : '';
    message.identityPubkey =
      object.identityPubkey !== undefined && object.identityPubkey !== null
        ? String(object.identityPubkey)
        : '';
    message.alias =
      object.alias !== undefined && object.alias !== null
        ? String(object.alias)
        : '';
    message.color =
      object.color !== undefined && object.color !== null
        ? String(object.color)
        : '';
    message.numPendingChannels =
      object.numPendingChannels !== undefined &&
      object.numPendingChannels !== null
        ? Number(object.numPendingChannels)
        : 0;
    message.numActiveChannels =
      object.numActiveChannels !== undefined &&
      object.numActiveChannels !== null
        ? Number(object.numActiveChannels)
        : 0;
    message.numInactiveChannels =
      object.numInactiveChannels !== undefined &&
      object.numInactiveChannels !== null
        ? Number(object.numInactiveChannels)
        : 0;
    message.numPeers =
      object.numPeers !== undefined && object.numPeers !== null
        ? Number(object.numPeers)
        : 0;
    message.blockHeight =
      object.blockHeight !== undefined && object.blockHeight !== null
        ? Number(object.blockHeight)
        : 0;
    message.blockHash =
      object.blockHash !== undefined && object.blockHash !== null
        ? String(object.blockHash)
        : '';
    message.bestHeaderTimestamp =
      object.bestHeaderTimestamp !== undefined &&
      object.bestHeaderTimestamp !== null
        ? String(object.bestHeaderTimestamp)
        : '0';
    message.syncedToChain =
      object.syncedToChain !== undefined && object.syncedToChain !== null
        ? Boolean(object.syncedToChain)
        : false;
    message.syncedToGraph =
      object.syncedToGraph !== undefined && object.syncedToGraph !== null
        ? Boolean(object.syncedToGraph)
        : false;
    message.testnet =
      object.testnet !== undefined && object.testnet !== null
        ? Boolean(object.testnet)
        : false;
    message.chains = (object.chains ?? []).map((e: any) => Chain.fromJSON(e));
    message.uris = (object.uris ?? []).map((e: any) => String(e));
    message.features = Object.entries(object.features ?? {}).reduce<
      Record<number, Feature>
    >((acc, [key, value]) => {
      acc[Number(key)] = Feature.fromJSON(value);
      return acc;
    }, {});
    return message;
  },

  toJSON(message: GetInfoResponse): unknown {
    const object: any = {};
    message.version !== undefined && (object.version = message.version);
    message.commitHash !== undefined &&
      (object.commitHash = message.commitHash);
    message.identityPubkey !== undefined &&
      (object.identityPubkey = message.identityPubkey);
    message.alias !== undefined && (object.alias = message.alias);
    message.color !== undefined && (object.color = message.color);
    message.numPendingChannels !== undefined &&
      (object.numPendingChannels = Math.round(message.numPendingChannels));
    message.numActiveChannels !== undefined &&
      (object.numActiveChannels = Math.round(message.numActiveChannels));
    message.numInactiveChannels !== undefined &&
      (object.numInactiveChannels = Math.round(message.numInactiveChannels));
    message.numPeers !== undefined &&
      (object.numPeers = Math.round(message.numPeers));
    message.blockHeight !== undefined &&
      (object.blockHeight = Math.round(message.blockHeight));
    message.blockHash !== undefined && (object.blockHash = message.blockHash);
    message.bestHeaderTimestamp !== undefined &&
      (object.bestHeaderTimestamp = message.bestHeaderTimestamp);
    message.syncedToChain !== undefined &&
      (object.syncedToChain = message.syncedToChain);
    message.syncedToGraph !== undefined &&
      (object.syncedToGraph = message.syncedToGraph);
    message.testnet !== undefined && (object.testnet = message.testnet);
    object.chains = message.chains
      ? message.chains.map((e) => (e ? Chain.toJSON(e) : undefined))
      : [];
    object.uris = message.uris ? message.uris.map((e) => e) : [];
    object.features = {};
    if (message.features) {
      for (const [k, v] of Object.entries(message.features)) {
        object.features[k] = Feature.toJSON(v);
      }
    }

    return object;
  },

  fromPartial(object: DeepPartial<GetInfoResponse>): GetInfoResponse {
    const message = createBaseGetInfoResponse();
    message.version = object.version ?? '';
    message.commitHash = object.commitHash ?? '';
    message.identityPubkey = object.identityPubkey ?? '';
    message.alias = object.alias ?? '';
    message.color = object.color ?? '';
    message.numPendingChannels = object.numPendingChannels ?? 0;
    message.numActiveChannels = object.numActiveChannels ?? 0;
    message.numInactiveChannels = object.numInactiveChannels ?? 0;
    message.numPeers = object.numPeers ?? 0;
    message.blockHeight = object.blockHeight ?? 0;
    message.blockHash = object.blockHash ?? '';
    message.bestHeaderTimestamp = object.bestHeaderTimestamp ?? '0';
    message.syncedToChain = object.syncedToChain ?? false;
    message.syncedToGraph = object.syncedToGraph ?? false;
    message.testnet = object.testnet ?? false;
    message.chains = object.chains?.map((e) => Chain.fromPartial(e)) || [];
    message.uris = object.uris?.map((e) => e) || [];
    message.features = Object.entries(object.features ?? {}).reduce<
      Record<number, Feature>
    >((acc, [key, value]) => {
      if (value !== undefined) {
        acc[Number(key)] = Feature.fromPartial(value);
      }

      return acc;
    }, {});
    return message;
  },
};

function createBaseGetInfoResponse_FeaturesEntry(): GetInfoResponse_FeaturesEntry {
  return {key: 0, value: undefined};
}

export const GetInfoResponse_FeaturesEntry = {
  encode(
    message: GetInfoResponse_FeaturesEntry,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).uint32(message.key);
    }

    if (message.value !== undefined) {
      Feature.encode(message.value, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): GetInfoResponse_FeaturesEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetInfoResponse_FeaturesEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.uint32();
          break;
        case 2:
          message.value = Feature.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): GetInfoResponse_FeaturesEntry {
    const message = createBaseGetInfoResponse_FeaturesEntry();
    message.key =
      object.key !== undefined && object.key !== null ? Number(object.key) : 0;
    message.value =
      object.value !== undefined && object.value !== null
        ? Feature.fromJSON(object.value)
        : undefined;
    return message;
  },

  toJSON(message: GetInfoResponse_FeaturesEntry): unknown {
    const object: any = {};
    message.key !== undefined && (object.key = Math.round(message.key));
    message.value !== undefined &&
      (object.value = message.value
        ? Feature.toJSON(message.value)
        : undefined);
    return object;
  },

  fromPartial(
    object: DeepPartial<GetInfoResponse_FeaturesEntry>,
  ): GetInfoResponse_FeaturesEntry {
    const message = createBaseGetInfoResponse_FeaturesEntry();
    message.key = object.key ?? 0;
    message.value =
      object.value !== undefined && object.value !== null
        ? Feature.fromPartial(object.value)
        : undefined;
    return message;
  },
};

function createBaseGetRecoveryInfoRequest(): GetRecoveryInfoRequest {
  return {};
}

export const GetRecoveryInfoRequest = {
  encode(
    _: GetRecoveryInfoRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): GetRecoveryInfoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetRecoveryInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): GetRecoveryInfoRequest {
    const message = createBaseGetRecoveryInfoRequest();
    return message;
  },

  toJSON(_: GetRecoveryInfoRequest): unknown {
    const object: any = {};
    return object;
  },

  fromPartial(_: DeepPartial<GetRecoveryInfoRequest>): GetRecoveryInfoRequest {
    const message = createBaseGetRecoveryInfoRequest();
    return message;
  },
};

function createBaseGetRecoveryInfoResponse(): GetRecoveryInfoResponse {
  return {recoveryMode: false, recoveryFinished: false, progress: 0};
}

export const GetRecoveryInfoResponse = {
  encode(
    message: GetRecoveryInfoResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.recoveryMode) {
      writer.uint32(8).bool(message.recoveryMode);
    }

    if (message.recoveryFinished) {
      writer.uint32(16).bool(message.recoveryFinished);
    }

    if (message.progress !== 0) {
      writer.uint32(25).double(message.progress);
    }

    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): GetRecoveryInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetRecoveryInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.recoveryMode = reader.bool();
          break;
        case 2:
          message.recoveryFinished = reader.bool();
          break;
        case 3:
          message.progress = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): GetRecoveryInfoResponse {
    const message = createBaseGetRecoveryInfoResponse();
    message.recoveryMode =
      object.recoveryMode !== undefined && object.recoveryMode !== null
        ? Boolean(object.recoveryMode)
        : false;
    message.recoveryFinished =
      object.recoveryFinished !== undefined && object.recoveryFinished !== null
        ? Boolean(object.recoveryFinished)
        : false;
    message.progress =
      object.progress !== undefined && object.progress !== null
        ? Number(object.progress)
        : 0;
    return message;
  },

  toJSON(message: GetRecoveryInfoResponse): unknown {
    const object: any = {};
    message.recoveryMode !== undefined &&
      (object.recoveryMode = message.recoveryMode);
    message.recoveryFinished !== undefined &&
      (object.recoveryFinished = message.recoveryFinished);
    message.progress !== undefined && (object.progress = message.progress);
    return object;
  },

  fromPartial(
    object: DeepPartial<GetRecoveryInfoResponse>,
  ): GetRecoveryInfoResponse {
    const message = createBaseGetRecoveryInfoResponse();
    message.recoveryMode = object.recoveryMode ?? false;
    message.recoveryFinished = object.recoveryFinished ?? false;
    message.progress = object.progress ?? 0;
    return message;
  },
};

function createBaseChain(): Chain {
  return {chain: '', network: ''};
}

export const Chain = {
  encode(message: Chain, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chain !== '') {
      writer.uint32(10).string(message.chain);
    }

    if (message.network !== '') {
      writer.uint32(18).string(message.network);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Chain {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChain();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chain = reader.string();
          break;
        case 2:
          message.network = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Chain {
    const message = createBaseChain();
    message.chain =
      object.chain !== undefined && object.chain !== null
        ? String(object.chain)
        : '';
    message.network =
      object.network !== undefined && object.network !== null
        ? String(object.network)
        : '';
    return message;
  },

  toJSON(message: Chain): unknown {
    const object: any = {};
    message.chain !== undefined && (object.chain = message.chain);
    message.network !== undefined && (object.network = message.network);
    return object;
  },

  fromPartial(object: DeepPartial<Chain>): Chain {
    const message = createBaseChain();
    message.chain = object.chain ?? '';
    message.network = object.network ?? '';
    return message;
  },
};

function createBaseConfirmationUpdate(): ConfirmationUpdate {
  return {blockSha: new Uint8Array(), blockHeight: 0, numConfsLeft: 0};
}

export const ConfirmationUpdate = {
  encode(
    message: ConfirmationUpdate,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.blockSha.length > 0) {
      writer.uint32(10).bytes(message.blockSha);
    }

    if (message.blockHeight !== 0) {
      writer.uint32(16).int32(message.blockHeight);
    }

    if (message.numConfsLeft !== 0) {
      writer.uint32(24).uint32(message.numConfsLeft);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConfirmationUpdate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfirmationUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockSha = reader.bytes();
          break;
        case 2:
          message.blockHeight = reader.int32();
          break;
        case 3:
          message.numConfsLeft = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ConfirmationUpdate {
    const message = createBaseConfirmationUpdate();
    message.blockSha =
      object.blockSha !== undefined && object.blockSha !== null
        ? bytesFromBase64(object.blockSha)
        : new Uint8Array();
    message.blockHeight =
      object.blockHeight !== undefined && object.blockHeight !== null
        ? Number(object.blockHeight)
        : 0;
    message.numConfsLeft =
      object.numConfsLeft !== undefined && object.numConfsLeft !== null
        ? Number(object.numConfsLeft)
        : 0;
    return message;
  },

  toJSON(message: ConfirmationUpdate): unknown {
    const object: any = {};
    message.blockSha !== undefined &&
      (object.blockSha = base64FromBytes(
        message.blockSha !== undefined ? message.blockSha : new Uint8Array(),
      ));
    message.blockHeight !== undefined &&
      (object.blockHeight = Math.round(message.blockHeight));
    message.numConfsLeft !== undefined &&
      (object.numConfsLeft = Math.round(message.numConfsLeft));
    return object;
  },

  fromPartial(object: DeepPartial<ConfirmationUpdate>): ConfirmationUpdate {
    const message = createBaseConfirmationUpdate();
    message.blockSha = object.blockSha ?? new Uint8Array();
    message.blockHeight = object.blockHeight ?? 0;
    message.numConfsLeft = object.numConfsLeft ?? 0;
    return message;
  },
};

function createBaseChannelOpenUpdate(): ChannelOpenUpdate {
  return {channelPoint: undefined};
}

export const ChannelOpenUpdate = {
  encode(
    message: ChannelOpenUpdate,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.channelPoint !== undefined) {
      ChannelPoint.encode(
        message.channelPoint,
        writer.uint32(10).fork(),
      ).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChannelOpenUpdate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChannelOpenUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channelPoint = ChannelPoint.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ChannelOpenUpdate {
    const message = createBaseChannelOpenUpdate();
    message.channelPoint =
      object.channelPoint !== undefined && object.channelPoint !== null
        ? ChannelPoint.fromJSON(object.channelPoint)
        : undefined;
    return message;
  },

  toJSON(message: ChannelOpenUpdate): unknown {
    const object: any = {};
    message.channelPoint !== undefined &&
      (object.channelPoint = message.channelPoint
        ? ChannelPoint.toJSON(message.channelPoint)
        : undefined);
    return object;
  },

  fromPartial(object: DeepPartial<ChannelOpenUpdate>): ChannelOpenUpdate {
    const message = createBaseChannelOpenUpdate();
    message.channelPoint =
      object.channelPoint !== undefined && object.channelPoint !== null
        ? ChannelPoint.fromPartial(object.channelPoint)
        : undefined;
    return message;
  },
};

function createBaseChannelCloseUpdate(): ChannelCloseUpdate {
  return {closingTxid: new Uint8Array(), success: false};
}

export const ChannelCloseUpdate = {
  encode(
    message: ChannelCloseUpdate,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.closingTxid.length > 0) {
      writer.uint32(10).bytes(message.closingTxid);
    }

    if (message.success) {
      writer.uint32(16).bool(message.success);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChannelCloseUpdate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChannelCloseUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.closingTxid = reader.bytes();
          break;
        case 2:
          message.success = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ChannelCloseUpdate {
    const message = createBaseChannelCloseUpdate();
    message.closingTxid =
      object.closingTxid !== undefined && object.closingTxid !== null
        ? bytesFromBase64(object.closingTxid)
        : new Uint8Array();
    message.success =
      object.success !== undefined && object.success !== null
        ? Boolean(object.success)
        : false;
    return message;
  },

  toJSON(message: ChannelCloseUpdate): unknown {
    const object: any = {};
    message.closingTxid !== undefined &&
      (object.closingTxid = base64FromBytes(
        message.closingTxid !== undefined
          ? message.closingTxid
          : new Uint8Array(),
      ));
    message.success !== undefined && (object.success = message.success);
    return object;
  },

  fromPartial(object: DeepPartial<ChannelCloseUpdate>): ChannelCloseUpdate {
    const message = createBaseChannelCloseUpdate();
    message.closingTxid = object.closingTxid ?? new Uint8Array();
    message.success = object.success ?? false;
    return message;
  },
};

function createBaseCloseChannelRequest(): CloseChannelRequest {
  return {
    channelPoint: undefined,
    force: false,
    targetConf: 0,
    satPerByte: '0',
    deliveryAddress: '',
    satPerVbyte: '0',
  };
}

export const CloseChannelRequest = {
  encode(
    message: CloseChannelRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.channelPoint !== undefined) {
      ChannelPoint.encode(
        message.channelPoint,
        writer.uint32(10).fork(),
      ).ldelim();
    }

    if (message.force) {
      writer.uint32(16).bool(message.force);
    }

    if (message.targetConf !== 0) {
      writer.uint32(24).int32(message.targetConf);
    }

    if (message.satPerByte !== '0') {
      writer.uint32(32).int64(message.satPerByte);
    }

    if (message.deliveryAddress !== '') {
      writer.uint32(42).string(message.deliveryAddress);
    }

    if (message.satPerVbyte !== '0') {
      writer.uint32(48).uint64(message.satPerVbyte);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CloseChannelRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCloseChannelRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channelPoint = ChannelPoint.decode(reader, reader.uint32());
          break;
        case 2:
          message.force = reader.bool();
          break;
        case 3:
          message.targetConf = reader.int32();
          break;
        case 4:
          message.satPerByte = longToString(reader.int64() as Long);
          break;
        case 5:
          message.deliveryAddress = reader.string();
          break;
        case 6:
          message.satPerVbyte = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): CloseChannelRequest {
    const message = createBaseCloseChannelRequest();
    message.channelPoint =
      object.channelPoint !== undefined && object.channelPoint !== null
        ? ChannelPoint.fromJSON(object.channelPoint)
        : undefined;
    message.force =
      object.force !== undefined && object.force !== null
        ? Boolean(object.force)
        : false;
    message.targetConf =
      object.targetConf !== undefined && object.targetConf !== null
        ? Number(object.targetConf)
        : 0;
    message.satPerByte =
      object.satPerByte !== undefined && object.satPerByte !== null
        ? String(object.satPerByte)
        : '0';
    message.deliveryAddress =
      object.deliveryAddress !== undefined && object.deliveryAddress !== null
        ? String(object.deliveryAddress)
        : '';
    message.satPerVbyte =
      object.satPerVbyte !== undefined && object.satPerVbyte !== null
        ? String(object.satPerVbyte)
        : '0';
    return message;
  },

  toJSON(message: CloseChannelRequest): unknown {
    const object: any = {};
    message.channelPoint !== undefined &&
      (object.channelPoint = message.channelPoint
        ? ChannelPoint.toJSON(message.channelPoint)
        : undefined);
    message.force !== undefined && (object.force = message.force);
    message.targetConf !== undefined &&
      (object.targetConf = Math.round(message.targetConf));
    message.satPerByte !== undefined &&
      (object.satPerByte = message.satPerByte);
    message.deliveryAddress !== undefined &&
      (object.deliveryAddress = message.deliveryAddress);
    message.satPerVbyte !== undefined &&
      (object.satPerVbyte = message.satPerVbyte);
    return object;
  },

  fromPartial(object: DeepPartial<CloseChannelRequest>): CloseChannelRequest {
    const message = createBaseCloseChannelRequest();
    message.channelPoint =
      object.channelPoint !== undefined && object.channelPoint !== null
        ? ChannelPoint.fromPartial(object.channelPoint)
        : undefined;
    message.force = object.force ?? false;
    message.targetConf = object.targetConf ?? 0;
    message.satPerByte = object.satPerByte ?? '0';
    message.deliveryAddress = object.deliveryAddress ?? '';
    message.satPerVbyte = object.satPerVbyte ?? '0';
    return message;
  },
};

function createBaseCloseStatusUpdate(): CloseStatusUpdate {
  return {closePending: undefined, chanClose: undefined};
}

export const CloseStatusUpdate = {
  encode(
    message: CloseStatusUpdate,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.closePending !== undefined) {
      PendingUpdate.encode(
        message.closePending,
        writer.uint32(10).fork(),
      ).ldelim();
    }

    if (message.chanClose !== undefined) {
      ChannelCloseUpdate.encode(
        message.chanClose,
        writer.uint32(26).fork(),
      ).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CloseStatusUpdate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCloseStatusUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.closePending = PendingUpdate.decode(reader, reader.uint32());
          break;
        case 3:
          message.chanClose = ChannelCloseUpdate.decode(
            reader,
            reader.uint32(),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): CloseStatusUpdate {
    const message = createBaseCloseStatusUpdate();
    message.closePending =
      object.closePending !== undefined && object.closePending !== null
        ? PendingUpdate.fromJSON(object.closePending)
        : undefined;
    message.chanClose =
      object.chanClose !== undefined && object.chanClose !== null
        ? ChannelCloseUpdate.fromJSON(object.chanClose)
        : undefined;
    return message;
  },

  toJSON(message: CloseStatusUpdate): unknown {
    const object: any = {};
    message.closePending !== undefined &&
      (object.closePending = message.closePending
        ? PendingUpdate.toJSON(message.closePending)
        : undefined);
    message.chanClose !== undefined &&
      (object.chanClose = message.chanClose
        ? ChannelCloseUpdate.toJSON(message.chanClose)
        : undefined);
    return object;
  },

  fromPartial(object: DeepPartial<CloseStatusUpdate>): CloseStatusUpdate {
    const message = createBaseCloseStatusUpdate();
    message.closePending =
      object.closePending !== undefined && object.closePending !== null
        ? PendingUpdate.fromPartial(object.closePending)
        : undefined;
    message.chanClose =
      object.chanClose !== undefined && object.chanClose !== null
        ? ChannelCloseUpdate.fromPartial(object.chanClose)
        : undefined;
    return message;
  },
};

function createBasePendingUpdate(): PendingUpdate {
  return {txid: new Uint8Array(), outputIndex: 0};
}

export const PendingUpdate = {
  encode(
    message: PendingUpdate,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.txid.length > 0) {
      writer.uint32(10).bytes(message.txid);
    }

    if (message.outputIndex !== 0) {
      writer.uint32(16).uint32(message.outputIndex);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PendingUpdate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePendingUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txid = reader.bytes();
          break;
        case 2:
          message.outputIndex = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): PendingUpdate {
    const message = createBasePendingUpdate();
    message.txid =
      object.txid !== undefined && object.txid !== null
        ? bytesFromBase64(object.txid)
        : new Uint8Array();
    message.outputIndex =
      object.outputIndex !== undefined && object.outputIndex !== null
        ? Number(object.outputIndex)
        : 0;
    return message;
  },

  toJSON(message: PendingUpdate): unknown {
    const object: any = {};
    message.txid !== undefined &&
      (object.txid = base64FromBytes(
        message.txid !== undefined ? message.txid : new Uint8Array(),
      ));
    message.outputIndex !== undefined &&
      (object.outputIndex = Math.round(message.outputIndex));
    return object;
  },

  fromPartial(object: DeepPartial<PendingUpdate>): PendingUpdate {
    const message = createBasePendingUpdate();
    message.txid = object.txid ?? new Uint8Array();
    message.outputIndex = object.outputIndex ?? 0;
    return message;
  },
};

function createBaseReadyForPsbtFunding(): ReadyForPsbtFunding {
  return {fundingAddress: '', fundingAmount: '0', psbt: new Uint8Array()};
}

export const ReadyForPsbtFunding = {
  encode(
    message: ReadyForPsbtFunding,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.fundingAddress !== '') {
      writer.uint32(10).string(message.fundingAddress);
    }

    if (message.fundingAmount !== '0') {
      writer.uint32(16).int64(message.fundingAmount);
    }

    if (message.psbt.length > 0) {
      writer.uint32(26).bytes(message.psbt);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReadyForPsbtFunding {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReadyForPsbtFunding();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fundingAddress = reader.string();
          break;
        case 2:
          message.fundingAmount = longToString(reader.int64() as Long);
          break;
        case 3:
          message.psbt = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ReadyForPsbtFunding {
    const message = createBaseReadyForPsbtFunding();
    message.fundingAddress =
      object.fundingAddress !== undefined && object.fundingAddress !== null
        ? String(object.fundingAddress)
        : '';
    message.fundingAmount =
      object.fundingAmount !== undefined && object.fundingAmount !== null
        ? String(object.fundingAmount)
        : '0';
    message.psbt =
      object.psbt !== undefined && object.psbt !== null
        ? bytesFromBase64(object.psbt)
        : new Uint8Array();
    return message;
  },

  toJSON(message: ReadyForPsbtFunding): unknown {
    const object: any = {};
    message.fundingAddress !== undefined &&
      (object.fundingAddress = message.fundingAddress);
    message.fundingAmount !== undefined &&
      (object.fundingAmount = message.fundingAmount);
    message.psbt !== undefined &&
      (object.psbt = base64FromBytes(
        message.psbt !== undefined ? message.psbt : new Uint8Array(),
      ));
    return object;
  },

  fromPartial(object: DeepPartial<ReadyForPsbtFunding>): ReadyForPsbtFunding {
    const message = createBaseReadyForPsbtFunding();
    message.fundingAddress = object.fundingAddress ?? '';
    message.fundingAmount = object.fundingAmount ?? '0';
    message.psbt = object.psbt ?? new Uint8Array();
    return message;
  },
};

function createBaseBatchOpenChannelRequest(): BatchOpenChannelRequest {
  return {
    channels: [],
    targetConf: 0,
    satPerVbyte: '0',
    minConfs: 0,
    spendUnconfirmed: false,
    label: '',
  };
}

export const BatchOpenChannelRequest = {
  encode(
    message: BatchOpenChannelRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.channels) {
      BatchOpenChannel.encode(v, writer.uint32(10).fork()).ldelim();
    }

    if (message.targetConf !== 0) {
      writer.uint32(16).int32(message.targetConf);
    }

    if (message.satPerVbyte !== '0') {
      writer.uint32(24).int64(message.satPerVbyte);
    }

    if (message.minConfs !== 0) {
      writer.uint32(32).int32(message.minConfs);
    }

    if (message.spendUnconfirmed) {
      writer.uint32(40).bool(message.spendUnconfirmed);
    }

    if (message.label !== '') {
      writer.uint32(50).string(message.label);
    }

    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): BatchOpenChannelRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBatchOpenChannelRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channels.push(
            BatchOpenChannel.decode(reader, reader.uint32()),
          );
          break;
        case 2:
          message.targetConf = reader.int32();
          break;
        case 3:
          message.satPerVbyte = longToString(reader.int64() as Long);
          break;
        case 4:
          message.minConfs = reader.int32();
          break;
        case 5:
          message.spendUnconfirmed = reader.bool();
          break;
        case 6:
          message.label = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): BatchOpenChannelRequest {
    const message = createBaseBatchOpenChannelRequest();
    message.channels = (object.channels ?? []).map((e: any) =>
      BatchOpenChannel.fromJSON(e),
    );
    message.targetConf =
      object.targetConf !== undefined && object.targetConf !== null
        ? Number(object.targetConf)
        : 0;
    message.satPerVbyte =
      object.satPerVbyte !== undefined && object.satPerVbyte !== null
        ? String(object.satPerVbyte)
        : '0';
    message.minConfs =
      object.minConfs !== undefined && object.minConfs !== null
        ? Number(object.minConfs)
        : 0;
    message.spendUnconfirmed =
      object.spendUnconfirmed !== undefined && object.spendUnconfirmed !== null
        ? Boolean(object.spendUnconfirmed)
        : false;
    message.label =
      object.label !== undefined && object.label !== null
        ? String(object.label)
        : '';
    return message;
  },

  toJSON(message: BatchOpenChannelRequest): unknown {
    const object: any = {};
    if (message.channels) {
      object.channels = message.channels.map((e) =>
        e ? BatchOpenChannel.toJSON(e) : undefined,
      );
    } else {
      object.channels = [];
    }

    message.targetConf !== undefined &&
      (object.targetConf = Math.round(message.targetConf));
    message.satPerVbyte !== undefined &&
      (object.satPerVbyte = message.satPerVbyte);
    message.minConfs !== undefined &&
      (object.minConfs = Math.round(message.minConfs));
    message.spendUnconfirmed !== undefined &&
      (object.spendUnconfirmed = message.spendUnconfirmed);
    message.label !== undefined && (object.label = message.label);
    return object;
  },

  fromPartial(
    object: DeepPartial<BatchOpenChannelRequest>,
  ): BatchOpenChannelRequest {
    const message = createBaseBatchOpenChannelRequest();
    message.channels =
      object.channels?.map((e) => BatchOpenChannel.fromPartial(e)) || [];
    message.targetConf = object.targetConf ?? 0;
    message.satPerVbyte = object.satPerVbyte ?? '0';
    message.minConfs = object.minConfs ?? 0;
    message.spendUnconfirmed = object.spendUnconfirmed ?? false;
    message.label = object.label ?? '';
    return message;
  },
};

function createBaseBatchOpenChannel(): BatchOpenChannel {
  return {
    nodePubkey: new Uint8Array(),
    localFundingAmount: '0',
    pushSat: '0',
    private: false,
    minHtlcMsat: '0',
    remoteCsvDelay: 0,
    closeAddress: '',
    pendingChanId: new Uint8Array(),
    commitmentType: 0,
  };
}

export const BatchOpenChannel = {
  encode(
    message: BatchOpenChannel,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.nodePubkey.length > 0) {
      writer.uint32(10).bytes(message.nodePubkey);
    }

    if (message.localFundingAmount !== '0') {
      writer.uint32(16).int64(message.localFundingAmount);
    }

    if (message.pushSat !== '0') {
      writer.uint32(24).int64(message.pushSat);
    }

    if (message.private) {
      writer.uint32(32).bool(message.private);
    }

    if (message.minHtlcMsat !== '0') {
      writer.uint32(40).int64(message.minHtlcMsat);
    }

    if (message.remoteCsvDelay !== 0) {
      writer.uint32(48).uint32(message.remoteCsvDelay);
    }

    if (message.closeAddress !== '') {
      writer.uint32(58).string(message.closeAddress);
    }

    if (message.pendingChanId.length > 0) {
      writer.uint32(66).bytes(message.pendingChanId);
    }

    if (message.commitmentType !== 0) {
      writer.uint32(72).int32(message.commitmentType);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BatchOpenChannel {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBatchOpenChannel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nodePubkey = reader.bytes();
          break;
        case 2:
          message.localFundingAmount = longToString(reader.int64() as Long);
          break;
        case 3:
          message.pushSat = longToString(reader.int64() as Long);
          break;
        case 4:
          message.private = reader.bool();
          break;
        case 5:
          message.minHtlcMsat = longToString(reader.int64() as Long);
          break;
        case 6:
          message.remoteCsvDelay = reader.uint32();
          break;
        case 7:
          message.closeAddress = reader.string();
          break;
        case 8:
          message.pendingChanId = reader.bytes();
          break;
        case 9:
          message.commitmentType = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): BatchOpenChannel {
    const message = createBaseBatchOpenChannel();
    message.nodePubkey =
      object.nodePubkey !== undefined && object.nodePubkey !== null
        ? bytesFromBase64(object.nodePubkey)
        : new Uint8Array();
    message.localFundingAmount =
      object.localFundingAmount !== undefined &&
      object.localFundingAmount !== null
        ? String(object.localFundingAmount)
        : '0';
    message.pushSat =
      object.pushSat !== undefined && object.pushSat !== null
        ? String(object.pushSat)
        : '0';
    message.private =
      object.private !== undefined && object.private !== null
        ? Boolean(object.private)
        : false;
    message.minHtlcMsat =
      object.minHtlcMsat !== undefined && object.minHtlcMsat !== null
        ? String(object.minHtlcMsat)
        : '0';
    message.remoteCsvDelay =
      object.remoteCsvDelay !== undefined && object.remoteCsvDelay !== null
        ? Number(object.remoteCsvDelay)
        : 0;
    message.closeAddress =
      object.closeAddress !== undefined && object.closeAddress !== null
        ? String(object.closeAddress)
        : '';
    message.pendingChanId =
      object.pendingChanId !== undefined && object.pendingChanId !== null
        ? bytesFromBase64(object.pendingChanId)
        : new Uint8Array();
    message.commitmentType =
      object.commitmentType !== undefined && object.commitmentType !== null
        ? commitmentTypeFromJSON(object.commitmentType)
        : 0;
    return message;
  },

  toJSON(message: BatchOpenChannel): unknown {
    const object: any = {};
    message.nodePubkey !== undefined &&
      (object.nodePubkey = base64FromBytes(
        message.nodePubkey !== undefined
          ? message.nodePubkey
          : new Uint8Array(),
      ));
    message.localFundingAmount !== undefined &&
      (object.localFundingAmount = message.localFundingAmount);
    message.pushSat !== undefined && (object.pushSat = message.pushSat);
    message.private !== undefined && (object.private = message.private);
    message.minHtlcMsat !== undefined &&
      (object.minHtlcMsat = message.minHtlcMsat);
    message.remoteCsvDelay !== undefined &&
      (object.remoteCsvDelay = Math.round(message.remoteCsvDelay));
    message.closeAddress !== undefined &&
      (object.closeAddress = message.closeAddress);
    message.pendingChanId !== undefined &&
      (object.pendingChanId = base64FromBytes(
        message.pendingChanId !== undefined
          ? message.pendingChanId
          : new Uint8Array(),
      ));
    message.commitmentType !== undefined &&
      (object.commitmentType = commitmentTypeToJSON(message.commitmentType));
    return object;
  },

  fromPartial(object: DeepPartial<BatchOpenChannel>): BatchOpenChannel {
    const message = createBaseBatchOpenChannel();
    message.nodePubkey = object.nodePubkey ?? new Uint8Array();
    message.localFundingAmount = object.localFundingAmount ?? '0';
    message.pushSat = object.pushSat ?? '0';
    message.private = object.private ?? false;
    message.minHtlcMsat = object.minHtlcMsat ?? '0';
    message.remoteCsvDelay = object.remoteCsvDelay ?? 0;
    message.closeAddress = object.closeAddress ?? '';
    message.pendingChanId = object.pendingChanId ?? new Uint8Array();
    message.commitmentType = object.commitmentType ?? 0;
    return message;
  },
};

function createBaseBatchOpenChannelResponse(): BatchOpenChannelResponse {
  return {pendingChannels: []};
}

export const BatchOpenChannelResponse = {
  encode(
    message: BatchOpenChannelResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.pendingChannels) {
      PendingUpdate.encode(v, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): BatchOpenChannelResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBatchOpenChannelResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pendingChannels.push(
            PendingUpdate.decode(reader, reader.uint32()),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): BatchOpenChannelResponse {
    const message = createBaseBatchOpenChannelResponse();
    message.pendingChannels = (object.pendingChannels ?? []).map((e: any) =>
      PendingUpdate.fromJSON(e),
    );
    return message;
  },

  toJSON(message: BatchOpenChannelResponse): unknown {
    const object: any = {};
    if (message.pendingChannels) {
      object.pendingChannels = message.pendingChannels.map((e) =>
        e ? PendingUpdate.toJSON(e) : undefined,
      );
    } else {
      object.pendingChannels = [];
    }

    return object;
  },

  fromPartial(
    object: DeepPartial<BatchOpenChannelResponse>,
  ): BatchOpenChannelResponse {
    const message = createBaseBatchOpenChannelResponse();
    message.pendingChannels =
      object.pendingChannels?.map((e) => PendingUpdate.fromPartial(e)) || [];
    return message;
  },
};

function createBaseOpenChannelRequest(): OpenChannelRequest {
  return {
    satPerVbyte: '0',
    nodePubkey: new Uint8Array(),
    nodePubkeyString: '',
    localFundingAmount: '0',
    pushSat: '0',
    targetConf: 0,
    satPerByte: '0',
    private: false,
    minHtlcMsat: '0',
    remoteCsvDelay: 0,
    minConfs: 0,
    spendUnconfirmed: false,
    closeAddress: '',
    fundingShim: undefined,
    remoteMaxValueInFlightMsat: '0',
    remoteMaxHtlcs: 0,
    maxLocalCsv: 0,
    commitmentType: 0,
  };
}

export const OpenChannelRequest = {
  encode(
    message: OpenChannelRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.satPerVbyte !== '0') {
      writer.uint32(8).uint64(message.satPerVbyte);
    }

    if (message.nodePubkey.length > 0) {
      writer.uint32(18).bytes(message.nodePubkey);
    }

    if (message.nodePubkeyString !== '') {
      writer.uint32(26).string(message.nodePubkeyString);
    }

    if (message.localFundingAmount !== '0') {
      writer.uint32(32).int64(message.localFundingAmount);
    }

    if (message.pushSat !== '0') {
      writer.uint32(40).int64(message.pushSat);
    }

    if (message.targetConf !== 0) {
      writer.uint32(48).int32(message.targetConf);
    }

    if (message.satPerByte !== '0') {
      writer.uint32(56).int64(message.satPerByte);
    }

    if (message.private) {
      writer.uint32(64).bool(message.private);
    }

    if (message.minHtlcMsat !== '0') {
      writer.uint32(72).int64(message.minHtlcMsat);
    }

    if (message.remoteCsvDelay !== 0) {
      writer.uint32(80).uint32(message.remoteCsvDelay);
    }

    if (message.minConfs !== 0) {
      writer.uint32(88).int32(message.minConfs);
    }

    if (message.spendUnconfirmed) {
      writer.uint32(96).bool(message.spendUnconfirmed);
    }

    if (message.closeAddress !== '') {
      writer.uint32(106).string(message.closeAddress);
    }

    if (message.fundingShim !== undefined) {
      FundingShim.encode(
        message.fundingShim,
        writer.uint32(114).fork(),
      ).ldelim();
    }

    if (message.remoteMaxValueInFlightMsat !== '0') {
      writer.uint32(120).uint64(message.remoteMaxValueInFlightMsat);
    }

    if (message.remoteMaxHtlcs !== 0) {
      writer.uint32(128).uint32(message.remoteMaxHtlcs);
    }

    if (message.maxLocalCsv !== 0) {
      writer.uint32(136).uint32(message.maxLocalCsv);
    }

    if (message.commitmentType !== 0) {
      writer.uint32(144).int32(message.commitmentType);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OpenChannelRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOpenChannelRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.satPerVbyte = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.nodePubkey = reader.bytes();
          break;
        case 3:
          message.nodePubkeyString = reader.string();
          break;
        case 4:
          message.localFundingAmount = longToString(reader.int64() as Long);
          break;
        case 5:
          message.pushSat = longToString(reader.int64() as Long);
          break;
        case 6:
          message.targetConf = reader.int32();
          break;
        case 7:
          message.satPerByte = longToString(reader.int64() as Long);
          break;
        case 8:
          message.private = reader.bool();
          break;
        case 9:
          message.minHtlcMsat = longToString(reader.int64() as Long);
          break;
        case 10:
          message.remoteCsvDelay = reader.uint32();
          break;
        case 11:
          message.minConfs = reader.int32();
          break;
        case 12:
          message.spendUnconfirmed = reader.bool();
          break;
        case 13:
          message.closeAddress = reader.string();
          break;
        case 14:
          message.fundingShim = FundingShim.decode(reader, reader.uint32());
          break;
        case 15:
          message.remoteMaxValueInFlightMsat = longToString(
            reader.uint64() as Long,
          );
          break;
        case 16:
          message.remoteMaxHtlcs = reader.uint32();
          break;
        case 17:
          message.maxLocalCsv = reader.uint32();
          break;
        case 18:
          message.commitmentType = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): OpenChannelRequest {
    const message = createBaseOpenChannelRequest();
    message.satPerVbyte =
      object.satPerVbyte !== undefined && object.satPerVbyte !== null
        ? String(object.satPerVbyte)
        : '0';
    message.nodePubkey =
      object.nodePubkey !== undefined && object.nodePubkey !== null
        ? bytesFromBase64(object.nodePubkey)
        : new Uint8Array();
    message.nodePubkeyString =
      object.nodePubkeyString !== undefined && object.nodePubkeyString !== null
        ? String(object.nodePubkeyString)
        : '';
    message.localFundingAmount =
      object.localFundingAmount !== undefined &&
      object.localFundingAmount !== null
        ? String(object.localFundingAmount)
        : '0';
    message.pushSat =
      object.pushSat !== undefined && object.pushSat !== null
        ? String(object.pushSat)
        : '0';
    message.targetConf =
      object.targetConf !== undefined && object.targetConf !== null
        ? Number(object.targetConf)
        : 0;
    message.satPerByte =
      object.satPerByte !== undefined && object.satPerByte !== null
        ? String(object.satPerByte)
        : '0';
    message.private =
      object.private !== undefined && object.private !== null
        ? Boolean(object.private)
        : false;
    message.minHtlcMsat =
      object.minHtlcMsat !== undefined && object.minHtlcMsat !== null
        ? String(object.minHtlcMsat)
        : '0';
    message.remoteCsvDelay =
      object.remoteCsvDelay !== undefined && object.remoteCsvDelay !== null
        ? Number(object.remoteCsvDelay)
        : 0;
    message.minConfs =
      object.minConfs !== undefined && object.minConfs !== null
        ? Number(object.minConfs)
        : 0;
    message.spendUnconfirmed =
      object.spendUnconfirmed !== undefined && object.spendUnconfirmed !== null
        ? Boolean(object.spendUnconfirmed)
        : false;
    message.closeAddress =
      object.closeAddress !== undefined && object.closeAddress !== null
        ? String(object.closeAddress)
        : '';
    message.fundingShim =
      object.fundingShim !== undefined && object.fundingShim !== null
        ? FundingShim.fromJSON(object.fundingShim)
        : undefined;
    message.remoteMaxValueInFlightMsat =
      object.remoteMaxValueInFlightMsat !== undefined &&
      object.remoteMaxValueInFlightMsat !== null
        ? String(object.remoteMaxValueInFlightMsat)
        : '0';
    message.remoteMaxHtlcs =
      object.remoteMaxHtlcs !== undefined && object.remoteMaxHtlcs !== null
        ? Number(object.remoteMaxHtlcs)
        : 0;
    message.maxLocalCsv =
      object.maxLocalCsv !== undefined && object.maxLocalCsv !== null
        ? Number(object.maxLocalCsv)
        : 0;
    message.commitmentType =
      object.commitmentType !== undefined && object.commitmentType !== null
        ? commitmentTypeFromJSON(object.commitmentType)
        : 0;
    return message;
  },

  toJSON(message: OpenChannelRequest): unknown {
    const object: any = {};
    message.satPerVbyte !== undefined &&
      (object.satPerVbyte = message.satPerVbyte);
    message.nodePubkey !== undefined &&
      (object.nodePubkey = base64FromBytes(
        message.nodePubkey !== undefined
          ? message.nodePubkey
          : new Uint8Array(),
      ));
    message.nodePubkeyString !== undefined &&
      (object.nodePubkeyString = message.nodePubkeyString);
    message.localFundingAmount !== undefined &&
      (object.localFundingAmount = message.localFundingAmount);
    message.pushSat !== undefined && (object.pushSat = message.pushSat);
    message.targetConf !== undefined &&
      (object.targetConf = Math.round(message.targetConf));
    message.satPerByte !== undefined &&
      (object.satPerByte = message.satPerByte);
    message.private !== undefined && (object.private = message.private);
    message.minHtlcMsat !== undefined &&
      (object.minHtlcMsat = message.minHtlcMsat);
    message.remoteCsvDelay !== undefined &&
      (object.remoteCsvDelay = Math.round(message.remoteCsvDelay));
    message.minConfs !== undefined &&
      (object.minConfs = Math.round(message.minConfs));
    message.spendUnconfirmed !== undefined &&
      (object.spendUnconfirmed = message.spendUnconfirmed);
    message.closeAddress !== undefined &&
      (object.closeAddress = message.closeAddress);
    message.fundingShim !== undefined &&
      (object.fundingShim = message.fundingShim
        ? FundingShim.toJSON(message.fundingShim)
        : undefined);
    message.remoteMaxValueInFlightMsat !== undefined &&
      (object.remoteMaxValueInFlightMsat = message.remoteMaxValueInFlightMsat);
    message.remoteMaxHtlcs !== undefined &&
      (object.remoteMaxHtlcs = Math.round(message.remoteMaxHtlcs));
    message.maxLocalCsv !== undefined &&
      (object.maxLocalCsv = Math.round(message.maxLocalCsv));
    message.commitmentType !== undefined &&
      (object.commitmentType = commitmentTypeToJSON(message.commitmentType));
    return object;
  },

  fromPartial(object: DeepPartial<OpenChannelRequest>): OpenChannelRequest {
    const message = createBaseOpenChannelRequest();
    message.satPerVbyte = object.satPerVbyte ?? '0';
    message.nodePubkey = object.nodePubkey ?? new Uint8Array();
    message.nodePubkeyString = object.nodePubkeyString ?? '';
    message.localFundingAmount = object.localFundingAmount ?? '0';
    message.pushSat = object.pushSat ?? '0';
    message.targetConf = object.targetConf ?? 0;
    message.satPerByte = object.satPerByte ?? '0';
    message.private = object.private ?? false;
    message.minHtlcMsat = object.minHtlcMsat ?? '0';
    message.remoteCsvDelay = object.remoteCsvDelay ?? 0;
    message.minConfs = object.minConfs ?? 0;
    message.spendUnconfirmed = object.spendUnconfirmed ?? false;
    message.closeAddress = object.closeAddress ?? '';
    message.fundingShim =
      object.fundingShim !== undefined && object.fundingShim !== null
        ? FundingShim.fromPartial(object.fundingShim)
        : undefined;
    message.remoteMaxValueInFlightMsat =
      object.remoteMaxValueInFlightMsat ?? '0';
    message.remoteMaxHtlcs = object.remoteMaxHtlcs ?? 0;
    message.maxLocalCsv = object.maxLocalCsv ?? 0;
    message.commitmentType = object.commitmentType ?? 0;
    return message;
  },
};

function createBaseOpenStatusUpdate(): OpenStatusUpdate {
  return {
    chanPending: undefined,
    chanOpen: undefined,
    psbtFund: undefined,
    pendingChanId: new Uint8Array(),
  };
}

export const OpenStatusUpdate = {
  encode(
    message: OpenStatusUpdate,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.chanPending !== undefined) {
      PendingUpdate.encode(
        message.chanPending,
        writer.uint32(10).fork(),
      ).ldelim();
    }

    if (message.chanOpen !== undefined) {
      ChannelOpenUpdate.encode(
        message.chanOpen,
        writer.uint32(26).fork(),
      ).ldelim();
    }

    if (message.psbtFund !== undefined) {
      ReadyForPsbtFunding.encode(
        message.psbtFund,
        writer.uint32(42).fork(),
      ).ldelim();
    }

    if (message.pendingChanId.length > 0) {
      writer.uint32(34).bytes(message.pendingChanId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OpenStatusUpdate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOpenStatusUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chanPending = PendingUpdate.decode(reader, reader.uint32());
          break;
        case 3:
          message.chanOpen = ChannelOpenUpdate.decode(reader, reader.uint32());
          break;
        case 5:
          message.psbtFund = ReadyForPsbtFunding.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 4:
          message.pendingChanId = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): OpenStatusUpdate {
    const message = createBaseOpenStatusUpdate();
    message.chanPending =
      object.chanPending !== undefined && object.chanPending !== null
        ? PendingUpdate.fromJSON(object.chanPending)
        : undefined;
    message.chanOpen =
      object.chanOpen !== undefined && object.chanOpen !== null
        ? ChannelOpenUpdate.fromJSON(object.chanOpen)
        : undefined;
    message.psbtFund =
      object.psbtFund !== undefined && object.psbtFund !== null
        ? ReadyForPsbtFunding.fromJSON(object.psbtFund)
        : undefined;
    message.pendingChanId =
      object.pendingChanId !== undefined && object.pendingChanId !== null
        ? bytesFromBase64(object.pendingChanId)
        : new Uint8Array();
    return message;
  },

  toJSON(message: OpenStatusUpdate): unknown {
    const object: any = {};
    message.chanPending !== undefined &&
      (object.chanPending = message.chanPending
        ? PendingUpdate.toJSON(message.chanPending)
        : undefined);
    message.chanOpen !== undefined &&
      (object.chanOpen = message.chanOpen
        ? ChannelOpenUpdate.toJSON(message.chanOpen)
        : undefined);
    message.psbtFund !== undefined &&
      (object.psbtFund = message.psbtFund
        ? ReadyForPsbtFunding.toJSON(message.psbtFund)
        : undefined);
    message.pendingChanId !== undefined &&
      (object.pendingChanId = base64FromBytes(
        message.pendingChanId !== undefined
          ? message.pendingChanId
          : new Uint8Array(),
      ));
    return object;
  },

  fromPartial(object: DeepPartial<OpenStatusUpdate>): OpenStatusUpdate {
    const message = createBaseOpenStatusUpdate();
    message.chanPending =
      object.chanPending !== undefined && object.chanPending !== null
        ? PendingUpdate.fromPartial(object.chanPending)
        : undefined;
    message.chanOpen =
      object.chanOpen !== undefined && object.chanOpen !== null
        ? ChannelOpenUpdate.fromPartial(object.chanOpen)
        : undefined;
    message.psbtFund =
      object.psbtFund !== undefined && object.psbtFund !== null
        ? ReadyForPsbtFunding.fromPartial(object.psbtFund)
        : undefined;
    message.pendingChanId = object.pendingChanId ?? new Uint8Array();
    return message;
  },
};

function createBaseKeyLocator(): KeyLocator {
  return {keyFamily: 0, keyIndex: 0};
}

export const KeyLocator = {
  encode(
    message: KeyLocator,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.keyFamily !== 0) {
      writer.uint32(8).int32(message.keyFamily);
    }

    if (message.keyIndex !== 0) {
      writer.uint32(16).int32(message.keyIndex);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): KeyLocator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKeyLocator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.keyFamily = reader.int32();
          break;
        case 2:
          message.keyIndex = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): KeyLocator {
    const message = createBaseKeyLocator();
    message.keyFamily =
      object.keyFamily !== undefined && object.keyFamily !== null
        ? Number(object.keyFamily)
        : 0;
    message.keyIndex =
      object.keyIndex !== undefined && object.keyIndex !== null
        ? Number(object.keyIndex)
        : 0;
    return message;
  },

  toJSON(message: KeyLocator): unknown {
    const object: any = {};
    message.keyFamily !== undefined &&
      (object.keyFamily = Math.round(message.keyFamily));
    message.keyIndex !== undefined &&
      (object.keyIndex = Math.round(message.keyIndex));
    return object;
  },

  fromPartial(object: DeepPartial<KeyLocator>): KeyLocator {
    const message = createBaseKeyLocator();
    message.keyFamily = object.keyFamily ?? 0;
    message.keyIndex = object.keyIndex ?? 0;
    return message;
  },
};

function createBaseKeyDescriptor(): KeyDescriptor {
  return {rawKeyBytes: new Uint8Array(), keyLoc: undefined};
}

export const KeyDescriptor = {
  encode(
    message: KeyDescriptor,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.rawKeyBytes.length > 0) {
      writer.uint32(10).bytes(message.rawKeyBytes);
    }

    if (message.keyLoc !== undefined) {
      KeyLocator.encode(message.keyLoc, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): KeyDescriptor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKeyDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rawKeyBytes = reader.bytes();
          break;
        case 2:
          message.keyLoc = KeyLocator.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): KeyDescriptor {
    const message = createBaseKeyDescriptor();
    message.rawKeyBytes =
      object.rawKeyBytes !== undefined && object.rawKeyBytes !== null
        ? bytesFromBase64(object.rawKeyBytes)
        : new Uint8Array();
    message.keyLoc =
      object.keyLoc !== undefined && object.keyLoc !== null
        ? KeyLocator.fromJSON(object.keyLoc)
        : undefined;
    return message;
  },

  toJSON(message: KeyDescriptor): unknown {
    const object: any = {};
    message.rawKeyBytes !== undefined &&
      (object.rawKeyBytes = base64FromBytes(
        message.rawKeyBytes !== undefined
          ? message.rawKeyBytes
          : new Uint8Array(),
      ));
    message.keyLoc !== undefined &&
      (object.keyLoc = message.keyLoc
        ? KeyLocator.toJSON(message.keyLoc)
        : undefined);
    return object;
  },

  fromPartial(object: DeepPartial<KeyDescriptor>): KeyDescriptor {
    const message = createBaseKeyDescriptor();
    message.rawKeyBytes = object.rawKeyBytes ?? new Uint8Array();
    message.keyLoc =
      object.keyLoc !== undefined && object.keyLoc !== null
        ? KeyLocator.fromPartial(object.keyLoc)
        : undefined;
    return message;
  },
};

function createBaseChanPointShim(): ChanPointShim {
  return {
    amt: '0',
    chanPoint: undefined,
    localKey: undefined,
    remoteKey: new Uint8Array(),
    pendingChanId: new Uint8Array(),
    thawHeight: 0,
  };
}

export const ChanPointShim = {
  encode(
    message: ChanPointShim,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.amt !== '0') {
      writer.uint32(8).int64(message.amt);
    }

    if (message.chanPoint !== undefined) {
      ChannelPoint.encode(message.chanPoint, writer.uint32(18).fork()).ldelim();
    }

    if (message.localKey !== undefined) {
      KeyDescriptor.encode(message.localKey, writer.uint32(26).fork()).ldelim();
    }

    if (message.remoteKey.length > 0) {
      writer.uint32(34).bytes(message.remoteKey);
    }

    if (message.pendingChanId.length > 0) {
      writer.uint32(42).bytes(message.pendingChanId);
    }

    if (message.thawHeight !== 0) {
      writer.uint32(48).uint32(message.thawHeight);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChanPointShim {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChanPointShim();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amt = longToString(reader.int64() as Long);
          break;
        case 2:
          message.chanPoint = ChannelPoint.decode(reader, reader.uint32());
          break;
        case 3:
          message.localKey = KeyDescriptor.decode(reader, reader.uint32());
          break;
        case 4:
          message.remoteKey = reader.bytes();
          break;
        case 5:
          message.pendingChanId = reader.bytes();
          break;
        case 6:
          message.thawHeight = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ChanPointShim {
    const message = createBaseChanPointShim();
    message.amt =
      object.amt !== undefined && object.amt !== null
        ? String(object.amt)
        : '0';
    message.chanPoint =
      object.chanPoint !== undefined && object.chanPoint !== null
        ? ChannelPoint.fromJSON(object.chanPoint)
        : undefined;
    message.localKey =
      object.localKey !== undefined && object.localKey !== null
        ? KeyDescriptor.fromJSON(object.localKey)
        : undefined;
    message.remoteKey =
      object.remoteKey !== undefined && object.remoteKey !== null
        ? bytesFromBase64(object.remoteKey)
        : new Uint8Array();
    message.pendingChanId =
      object.pendingChanId !== undefined && object.pendingChanId !== null
        ? bytesFromBase64(object.pendingChanId)
        : new Uint8Array();
    message.thawHeight =
      object.thawHeight !== undefined && object.thawHeight !== null
        ? Number(object.thawHeight)
        : 0;
    return message;
  },

  toJSON(message: ChanPointShim): unknown {
    const object: any = {};
    message.amt !== undefined && (object.amt = message.amt);
    message.chanPoint !== undefined &&
      (object.chanPoint = message.chanPoint
        ? ChannelPoint.toJSON(message.chanPoint)
        : undefined);
    message.localKey !== undefined &&
      (object.localKey = message.localKey
        ? KeyDescriptor.toJSON(message.localKey)
        : undefined);
    message.remoteKey !== undefined &&
      (object.remoteKey = base64FromBytes(
        message.remoteKey !== undefined ? message.remoteKey : new Uint8Array(),
      ));
    message.pendingChanId !== undefined &&
      (object.pendingChanId = base64FromBytes(
        message.pendingChanId !== undefined
          ? message.pendingChanId
          : new Uint8Array(),
      ));
    message.thawHeight !== undefined &&
      (object.thawHeight = Math.round(message.thawHeight));
    return object;
  },

  fromPartial(object: DeepPartial<ChanPointShim>): ChanPointShim {
    const message = createBaseChanPointShim();
    message.amt = object.amt ?? '0';
    message.chanPoint =
      object.chanPoint !== undefined && object.chanPoint !== null
        ? ChannelPoint.fromPartial(object.chanPoint)
        : undefined;
    message.localKey =
      object.localKey !== undefined && object.localKey !== null
        ? KeyDescriptor.fromPartial(object.localKey)
        : undefined;
    message.remoteKey = object.remoteKey ?? new Uint8Array();
    message.pendingChanId = object.pendingChanId ?? new Uint8Array();
    message.thawHeight = object.thawHeight ?? 0;
    return message;
  },
};

function createBasePsbtShim(): PsbtShim {
  return {
    pendingChanId: new Uint8Array(),
    basePsbt: new Uint8Array(),
    noPublish: false,
  };
}

export const PsbtShim = {
  encode(
    message: PsbtShim,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.pendingChanId.length > 0) {
      writer.uint32(10).bytes(message.pendingChanId);
    }

    if (message.basePsbt.length > 0) {
      writer.uint32(18).bytes(message.basePsbt);
    }

    if (message.noPublish) {
      writer.uint32(24).bool(message.noPublish);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PsbtShim {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePsbtShim();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pendingChanId = reader.bytes();
          break;
        case 2:
          message.basePsbt = reader.bytes();
          break;
        case 3:
          message.noPublish = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): PsbtShim {
    const message = createBasePsbtShim();
    message.pendingChanId =
      object.pendingChanId !== undefined && object.pendingChanId !== null
        ? bytesFromBase64(object.pendingChanId)
        : new Uint8Array();
    message.basePsbt =
      object.basePsbt !== undefined && object.basePsbt !== null
        ? bytesFromBase64(object.basePsbt)
        : new Uint8Array();
    message.noPublish =
      object.noPublish !== undefined && object.noPublish !== null
        ? Boolean(object.noPublish)
        : false;
    return message;
  },

  toJSON(message: PsbtShim): unknown {
    const object: any = {};
    message.pendingChanId !== undefined &&
      (object.pendingChanId = base64FromBytes(
        message.pendingChanId !== undefined
          ? message.pendingChanId
          : new Uint8Array(),
      ));
    message.basePsbt !== undefined &&
      (object.basePsbt = base64FromBytes(
        message.basePsbt !== undefined ? message.basePsbt : new Uint8Array(),
      ));
    message.noPublish !== undefined && (object.noPublish = message.noPublish);
    return object;
  },

  fromPartial(object: DeepPartial<PsbtShim>): PsbtShim {
    const message = createBasePsbtShim();
    message.pendingChanId = object.pendingChanId ?? new Uint8Array();
    message.basePsbt = object.basePsbt ?? new Uint8Array();
    message.noPublish = object.noPublish ?? false;
    return message;
  },
};

function createBaseFundingShim(): FundingShim {
  return {chanPointShim: undefined, psbtShim: undefined};
}

export const FundingShim = {
  encode(
    message: FundingShim,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.chanPointShim !== undefined) {
      ChanPointShim.encode(
        message.chanPointShim,
        writer.uint32(10).fork(),
      ).ldelim();
    }

    if (message.psbtShim !== undefined) {
      PsbtShim.encode(message.psbtShim, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FundingShim {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFundingShim();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chanPointShim = ChanPointShim.decode(reader, reader.uint32());
          break;
        case 2:
          message.psbtShim = PsbtShim.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): FundingShim {
    const message = createBaseFundingShim();
    message.chanPointShim =
      object.chanPointShim !== undefined && object.chanPointShim !== null
        ? ChanPointShim.fromJSON(object.chanPointShim)
        : undefined;
    message.psbtShim =
      object.psbtShim !== undefined && object.psbtShim !== null
        ? PsbtShim.fromJSON(object.psbtShim)
        : undefined;
    return message;
  },

  toJSON(message: FundingShim): unknown {
    const object: any = {};
    message.chanPointShim !== undefined &&
      (object.chanPointShim = message.chanPointShim
        ? ChanPointShim.toJSON(message.chanPointShim)
        : undefined);
    message.psbtShim !== undefined &&
      (object.psbtShim = message.psbtShim
        ? PsbtShim.toJSON(message.psbtShim)
        : undefined);
    return object;
  },

  fromPartial(object: DeepPartial<FundingShim>): FundingShim {
    const message = createBaseFundingShim();
    message.chanPointShim =
      object.chanPointShim !== undefined && object.chanPointShim !== null
        ? ChanPointShim.fromPartial(object.chanPointShim)
        : undefined;
    message.psbtShim =
      object.psbtShim !== undefined && object.psbtShim !== null
        ? PsbtShim.fromPartial(object.psbtShim)
        : undefined;
    return message;
  },
};

function createBaseFundingShimCancel(): FundingShimCancel {
  return {pendingChanId: new Uint8Array()};
}

export const FundingShimCancel = {
  encode(
    message: FundingShimCancel,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.pendingChanId.length > 0) {
      writer.uint32(10).bytes(message.pendingChanId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FundingShimCancel {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFundingShimCancel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pendingChanId = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): FundingShimCancel {
    const message = createBaseFundingShimCancel();
    message.pendingChanId =
      object.pendingChanId !== undefined && object.pendingChanId !== null
        ? bytesFromBase64(object.pendingChanId)
        : new Uint8Array();
    return message;
  },

  toJSON(message: FundingShimCancel): unknown {
    const object: any = {};
    message.pendingChanId !== undefined &&
      (object.pendingChanId = base64FromBytes(
        message.pendingChanId !== undefined
          ? message.pendingChanId
          : new Uint8Array(),
      ));
    return object;
  },

  fromPartial(object: DeepPartial<FundingShimCancel>): FundingShimCancel {
    const message = createBaseFundingShimCancel();
    message.pendingChanId = object.pendingChanId ?? new Uint8Array();
    return message;
  },
};

function createBaseFundingPsbtVerify(): FundingPsbtVerify {
  return {
    fundedPsbt: new Uint8Array(),
    pendingChanId: new Uint8Array(),
    skipFinalize: false,
  };
}

export const FundingPsbtVerify = {
  encode(
    message: FundingPsbtVerify,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.fundedPsbt.length > 0) {
      writer.uint32(10).bytes(message.fundedPsbt);
    }

    if (message.pendingChanId.length > 0) {
      writer.uint32(18).bytes(message.pendingChanId);
    }

    if (message.skipFinalize) {
      writer.uint32(24).bool(message.skipFinalize);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FundingPsbtVerify {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFundingPsbtVerify();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fundedPsbt = reader.bytes();
          break;
        case 2:
          message.pendingChanId = reader.bytes();
          break;
        case 3:
          message.skipFinalize = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): FundingPsbtVerify {
    const message = createBaseFundingPsbtVerify();
    message.fundedPsbt =
      object.fundedPsbt !== undefined && object.fundedPsbt !== null
        ? bytesFromBase64(object.fundedPsbt)
        : new Uint8Array();
    message.pendingChanId =
      object.pendingChanId !== undefined && object.pendingChanId !== null
        ? bytesFromBase64(object.pendingChanId)
        : new Uint8Array();
    message.skipFinalize =
      object.skipFinalize !== undefined && object.skipFinalize !== null
        ? Boolean(object.skipFinalize)
        : false;
    return message;
  },

  toJSON(message: FundingPsbtVerify): unknown {
    const object: any = {};
    message.fundedPsbt !== undefined &&
      (object.fundedPsbt = base64FromBytes(
        message.fundedPsbt !== undefined
          ? message.fundedPsbt
          : new Uint8Array(),
      ));
    message.pendingChanId !== undefined &&
      (object.pendingChanId = base64FromBytes(
        message.pendingChanId !== undefined
          ? message.pendingChanId
          : new Uint8Array(),
      ));
    message.skipFinalize !== undefined &&
      (object.skipFinalize = message.skipFinalize);
    return object;
  },

  fromPartial(object: DeepPartial<FundingPsbtVerify>): FundingPsbtVerify {
    const message = createBaseFundingPsbtVerify();
    message.fundedPsbt = object.fundedPsbt ?? new Uint8Array();
    message.pendingChanId = object.pendingChanId ?? new Uint8Array();
    message.skipFinalize = object.skipFinalize ?? false;
    return message;
  },
};

function createBaseFundingPsbtFinalize(): FundingPsbtFinalize {
  return {
    signedPsbt: new Uint8Array(),
    pendingChanId: new Uint8Array(),
    finalRawTx: new Uint8Array(),
  };
}

export const FundingPsbtFinalize = {
  encode(
    message: FundingPsbtFinalize,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.signedPsbt.length > 0) {
      writer.uint32(10).bytes(message.signedPsbt);
    }

    if (message.pendingChanId.length > 0) {
      writer.uint32(18).bytes(message.pendingChanId);
    }

    if (message.finalRawTx.length > 0) {
      writer.uint32(26).bytes(message.finalRawTx);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FundingPsbtFinalize {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFundingPsbtFinalize();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signedPsbt = reader.bytes();
          break;
        case 2:
          message.pendingChanId = reader.bytes();
          break;
        case 3:
          message.finalRawTx = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): FundingPsbtFinalize {
    const message = createBaseFundingPsbtFinalize();
    message.signedPsbt =
      object.signedPsbt !== undefined && object.signedPsbt !== null
        ? bytesFromBase64(object.signedPsbt)
        : new Uint8Array();
    message.pendingChanId =
      object.pendingChanId !== undefined && object.pendingChanId !== null
        ? bytesFromBase64(object.pendingChanId)
        : new Uint8Array();
    message.finalRawTx =
      object.finalRawTx !== undefined && object.finalRawTx !== null
        ? bytesFromBase64(object.finalRawTx)
        : new Uint8Array();
    return message;
  },

  toJSON(message: FundingPsbtFinalize): unknown {
    const object: any = {};
    message.signedPsbt !== undefined &&
      (object.signedPsbt = base64FromBytes(
        message.signedPsbt !== undefined
          ? message.signedPsbt
          : new Uint8Array(),
      ));
    message.pendingChanId !== undefined &&
      (object.pendingChanId = base64FromBytes(
        message.pendingChanId !== undefined
          ? message.pendingChanId
          : new Uint8Array(),
      ));
    message.finalRawTx !== undefined &&
      (object.finalRawTx = base64FromBytes(
        message.finalRawTx !== undefined
          ? message.finalRawTx
          : new Uint8Array(),
      ));
    return object;
  },

  fromPartial(object: DeepPartial<FundingPsbtFinalize>): FundingPsbtFinalize {
    const message = createBaseFundingPsbtFinalize();
    message.signedPsbt = object.signedPsbt ?? new Uint8Array();
    message.pendingChanId = object.pendingChanId ?? new Uint8Array();
    message.finalRawTx = object.finalRawTx ?? new Uint8Array();
    return message;
  },
};

function createBaseFundingTransitionMessage(): FundingTransitionMsg {
  return {
    shimRegister: undefined,
    shimCancel: undefined,
    psbtVerify: undefined,
    psbtFinalize: undefined,
  };
}

export const FundingTransitionMsg = {
  encode(
    message: FundingTransitionMsg,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.shimRegister !== undefined) {
      FundingShim.encode(
        message.shimRegister,
        writer.uint32(10).fork(),
      ).ldelim();
    }

    if (message.shimCancel !== undefined) {
      FundingShimCancel.encode(
        message.shimCancel,
        writer.uint32(18).fork(),
      ).ldelim();
    }

    if (message.psbtVerify !== undefined) {
      FundingPsbtVerify.encode(
        message.psbtVerify,
        writer.uint32(26).fork(),
      ).ldelim();
    }

    if (message.psbtFinalize !== undefined) {
      FundingPsbtFinalize.encode(
        message.psbtFinalize,
        writer.uint32(34).fork(),
      ).ldelim();
    }

    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): FundingTransitionMsg {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFundingTransitionMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.shimRegister = FundingShim.decode(reader, reader.uint32());
          break;
        case 2:
          message.shimCancel = FundingShimCancel.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 3:
          message.psbtVerify = FundingPsbtVerify.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 4:
          message.psbtFinalize = FundingPsbtFinalize.decode(
            reader,
            reader.uint32(),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): FundingTransitionMsg {
    const message = createBaseFundingTransitionMessage();
    message.shimRegister =
      object.shimRegister !== undefined && object.shimRegister !== null
        ? FundingShim.fromJSON(object.shimRegister)
        : undefined;
    message.shimCancel =
      object.shimCancel !== undefined && object.shimCancel !== null
        ? FundingShimCancel.fromJSON(object.shimCancel)
        : undefined;
    message.psbtVerify =
      object.psbtVerify !== undefined && object.psbtVerify !== null
        ? FundingPsbtVerify.fromJSON(object.psbtVerify)
        : undefined;
    message.psbtFinalize =
      object.psbtFinalize !== undefined && object.psbtFinalize !== null
        ? FundingPsbtFinalize.fromJSON(object.psbtFinalize)
        : undefined;
    return message;
  },

  toJSON(message: FundingTransitionMsg): unknown {
    const object: any = {};
    message.shimRegister !== undefined &&
      (object.shimRegister = message.shimRegister
        ? FundingShim.toJSON(message.shimRegister)
        : undefined);
    message.shimCancel !== undefined &&
      (object.shimCancel = message.shimCancel
        ? FundingShimCancel.toJSON(message.shimCancel)
        : undefined);
    message.psbtVerify !== undefined &&
      (object.psbtVerify = message.psbtVerify
        ? FundingPsbtVerify.toJSON(message.psbtVerify)
        : undefined);
    message.psbtFinalize !== undefined &&
      (object.psbtFinalize = message.psbtFinalize
        ? FundingPsbtFinalize.toJSON(message.psbtFinalize)
        : undefined);
    return object;
  },

  fromPartial(object: DeepPartial<FundingTransitionMsg>): FundingTransitionMsg {
    const message = createBaseFundingTransitionMessage();
    message.shimRegister =
      object.shimRegister !== undefined && object.shimRegister !== null
        ? FundingShim.fromPartial(object.shimRegister)
        : undefined;
    message.shimCancel =
      object.shimCancel !== undefined && object.shimCancel !== null
        ? FundingShimCancel.fromPartial(object.shimCancel)
        : undefined;
    message.psbtVerify =
      object.psbtVerify !== undefined && object.psbtVerify !== null
        ? FundingPsbtVerify.fromPartial(object.psbtVerify)
        : undefined;
    message.psbtFinalize =
      object.psbtFinalize !== undefined && object.psbtFinalize !== null
        ? FundingPsbtFinalize.fromPartial(object.psbtFinalize)
        : undefined;
    return message;
  },
};

function createBaseFundingStateStepResp(): FundingStateStepResp {
  return {};
}

export const FundingStateStepResp = {
  encode(
    _: FundingStateStepResp,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): FundingStateStepResp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFundingStateStepResp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): FundingStateStepResp {
    const message = createBaseFundingStateStepResp();
    return message;
  },

  toJSON(_: FundingStateStepResp): unknown {
    const object: any = {};
    return object;
  },

  fromPartial(_: DeepPartial<FundingStateStepResp>): FundingStateStepResp {
    const message = createBaseFundingStateStepResp();
    return message;
  },
};

function createBasePendingHTLC(): PendingHTLC {
  return {
    incoming: false,
    amount: '0',
    outpoint: '',
    maturityHeight: 0,
    blocksTilMaturity: 0,
    stage: 0,
  };
}

export const PendingHTLC = {
  encode(
    message: PendingHTLC,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.incoming) {
      writer.uint32(8).bool(message.incoming);
    }

    if (message.amount !== '0') {
      writer.uint32(16).int64(message.amount);
    }

    if (message.outpoint !== '') {
      writer.uint32(26).string(message.outpoint);
    }

    if (message.maturityHeight !== 0) {
      writer.uint32(32).uint32(message.maturityHeight);
    }

    if (message.blocksTilMaturity !== 0) {
      writer.uint32(40).int32(message.blocksTilMaturity);
    }

    if (message.stage !== 0) {
      writer.uint32(48).uint32(message.stage);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PendingHTLC {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePendingHTLC();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.incoming = reader.bool();
          break;
        case 2:
          message.amount = longToString(reader.int64() as Long);
          break;
        case 3:
          message.outpoint = reader.string();
          break;
        case 4:
          message.maturityHeight = reader.uint32();
          break;
        case 5:
          message.blocksTilMaturity = reader.int32();
          break;
        case 6:
          message.stage = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): PendingHTLC {
    const message = createBasePendingHTLC();
    message.incoming =
      object.incoming !== undefined && object.incoming !== null
        ? Boolean(object.incoming)
        : false;
    message.amount =
      object.amount !== undefined && object.amount !== null
        ? String(object.amount)
        : '0';
    message.outpoint =
      object.outpoint !== undefined && object.outpoint !== null
        ? String(object.outpoint)
        : '';
    message.maturityHeight =
      object.maturityHeight !== undefined && object.maturityHeight !== null
        ? Number(object.maturityHeight)
        : 0;
    message.blocksTilMaturity =
      object.blocksTilMaturity !== undefined &&
      object.blocksTilMaturity !== null
        ? Number(object.blocksTilMaturity)
        : 0;
    message.stage =
      object.stage !== undefined && object.stage !== null
        ? Number(object.stage)
        : 0;
    return message;
  },

  toJSON(message: PendingHTLC): unknown {
    const object: any = {};
    message.incoming !== undefined && (object.incoming = message.incoming);
    message.amount !== undefined && (object.amount = message.amount);
    message.outpoint !== undefined && (object.outpoint = message.outpoint);
    message.maturityHeight !== undefined &&
      (object.maturityHeight = Math.round(message.maturityHeight));
    message.blocksTilMaturity !== undefined &&
      (object.blocksTilMaturity = Math.round(message.blocksTilMaturity));
    message.stage !== undefined && (object.stage = Math.round(message.stage));
    return object;
  },

  fromPartial(object: DeepPartial<PendingHTLC>): PendingHTLC {
    const message = createBasePendingHTLC();
    message.incoming = object.incoming ?? false;
    message.amount = object.amount ?? '0';
    message.outpoint = object.outpoint ?? '';
    message.maturityHeight = object.maturityHeight ?? 0;
    message.blocksTilMaturity = object.blocksTilMaturity ?? 0;
    message.stage = object.stage ?? 0;
    return message;
  },
};

function createBasePendingChannelsRequest(): PendingChannelsRequest {
  return {};
}

export const PendingChannelsRequest = {
  encode(
    _: PendingChannelsRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): PendingChannelsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePendingChannelsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): PendingChannelsRequest {
    const message = createBasePendingChannelsRequest();
    return message;
  },

  toJSON(_: PendingChannelsRequest): unknown {
    const object: any = {};
    return object;
  },

  fromPartial(_: DeepPartial<PendingChannelsRequest>): PendingChannelsRequest {
    const message = createBasePendingChannelsRequest();
    return message;
  },
};

function createBasePendingChannelsResponse(): PendingChannelsResponse {
  return {
    totalLimboBalance: '0',
    pendingOpenChannels: [],
    pendingClosingChannels: [],
    pendingForceClosingChannels: [],
    waitingCloseChannels: [],
  };
}

export const PendingChannelsResponse = {
  encode(
    message: PendingChannelsResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.totalLimboBalance !== '0') {
      writer.uint32(8).int64(message.totalLimboBalance);
    }

    for (const v of message.pendingOpenChannels) {
      PendingChannelsResponse_PendingOpenChannel.encode(
        v,
        writer.uint32(18).fork(),
      ).ldelim();
    }

    for (const v of message.pendingClosingChannels) {
      PendingChannelsResponse_ClosedChannel.encode(
        v,
        writer.uint32(26).fork(),
      ).ldelim();
    }

    for (const v of message.pendingForceClosingChannels) {
      PendingChannelsResponse_ForceClosedChannel.encode(
        v,
        writer.uint32(34).fork(),
      ).ldelim();
    }

    for (const v of message.waitingCloseChannels) {
      PendingChannelsResponse_WaitingCloseChannel.encode(
        v,
        writer.uint32(42).fork(),
      ).ldelim();
    }

    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): PendingChannelsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePendingChannelsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalLimboBalance = longToString(reader.int64() as Long);
          break;
        case 2:
          message.pendingOpenChannels.push(
            PendingChannelsResponse_PendingOpenChannel.decode(
              reader,
              reader.uint32(),
            ),
          );
          break;
        case 3:
          message.pendingClosingChannels.push(
            PendingChannelsResponse_ClosedChannel.decode(
              reader,
              reader.uint32(),
            ),
          );
          break;
        case 4:
          message.pendingForceClosingChannels.push(
            PendingChannelsResponse_ForceClosedChannel.decode(
              reader,
              reader.uint32(),
            ),
          );
          break;
        case 5:
          message.waitingCloseChannels.push(
            PendingChannelsResponse_WaitingCloseChannel.decode(
              reader,
              reader.uint32(),
            ),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): PendingChannelsResponse {
    const message = createBasePendingChannelsResponse();
    message.totalLimboBalance =
      object.totalLimboBalance !== undefined &&
      object.totalLimboBalance !== null
        ? String(object.totalLimboBalance)
        : '0';
    message.pendingOpenChannels = (object.pendingOpenChannels ?? []).map(
      (e: any) => PendingChannelsResponse_PendingOpenChannel.fromJSON(e),
    );
    message.pendingClosingChannels = (object.pendingClosingChannels ?? []).map(
      (e: any) => PendingChannelsResponse_ClosedChannel.fromJSON(e),
    );
    message.pendingForceClosingChannels = (
      object.pendingForceClosingChannels ?? []
    ).map((e: any) => PendingChannelsResponse_ForceClosedChannel.fromJSON(e));
    message.waitingCloseChannels = (object.waitingCloseChannels ?? []).map(
      (e: any) => PendingChannelsResponse_WaitingCloseChannel.fromJSON(e),
    );
    return message;
  },

  toJSON(message: PendingChannelsResponse): unknown {
    const object: any = {};
    message.totalLimboBalance !== undefined &&
      (object.totalLimboBalance = message.totalLimboBalance);
    if (message.pendingOpenChannels) {
      object.pendingOpenChannels = message.pendingOpenChannels.map((e) =>
        e ? PendingChannelsResponse_PendingOpenChannel.toJSON(e) : undefined,
      );
    } else {
      object.pendingOpenChannels = [];
    }

    if (message.pendingClosingChannels) {
      object.pendingClosingChannels = message.pendingClosingChannels.map((e) =>
        e ? PendingChannelsResponse_ClosedChannel.toJSON(e) : undefined,
      );
    } else {
      object.pendingClosingChannels = [];
    }

    if (message.pendingForceClosingChannels) {
      object.pendingForceClosingChannels =
        message.pendingForceClosingChannels.map((e) =>
          e ? PendingChannelsResponse_ForceClosedChannel.toJSON(e) : undefined,
        );
    } else {
      object.pendingForceClosingChannels = [];
    }

    if (message.waitingCloseChannels) {
      object.waitingCloseChannels = message.waitingCloseChannels.map((e) =>
        e ? PendingChannelsResponse_WaitingCloseChannel.toJSON(e) : undefined,
      );
    } else {
      object.waitingCloseChannels = [];
    }

    return object;
  },

  fromPartial(
    object: DeepPartial<PendingChannelsResponse>,
  ): PendingChannelsResponse {
    const message = createBasePendingChannelsResponse();
    message.totalLimboBalance = object.totalLimboBalance ?? '0';
    message.pendingOpenChannels =
      object.pendingOpenChannels?.map((e) =>
        PendingChannelsResponse_PendingOpenChannel.fromPartial(e),
      ) || [];
    message.pendingClosingChannels =
      object.pendingClosingChannels?.map((e) =>
        PendingChannelsResponse_ClosedChannel.fromPartial(e),
      ) || [];
    message.pendingForceClosingChannels =
      object.pendingForceClosingChannels?.map((e) =>
        PendingChannelsResponse_ForceClosedChannel.fromPartial(e),
      ) || [];
    message.waitingCloseChannels =
      object.waitingCloseChannels?.map((e) =>
        PendingChannelsResponse_WaitingCloseChannel.fromPartial(e),
      ) || [];
    return message;
  },
};

function createBasePendingChannelsResponse_PendingChannel(): PendingChannelsResponse_PendingChannel {
  return {
    remoteNodePub: '',
    channelPoint: '',
    capacity: '0',
    localBalance: '0',
    remoteBalance: '0',
    localChanReserveSat: '0',
    remoteChanReserveSat: '0',
    initiator: 0,
    commitmentType: 0,
    numForwardingPackages: '0',
  };
}

export const PendingChannelsResponse_PendingChannel = {
  encode(
    message: PendingChannelsResponse_PendingChannel,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.remoteNodePub !== '') {
      writer.uint32(10).string(message.remoteNodePub);
    }

    if (message.channelPoint !== '') {
      writer.uint32(18).string(message.channelPoint);
    }

    if (message.capacity !== '0') {
      writer.uint32(24).int64(message.capacity);
    }

    if (message.localBalance !== '0') {
      writer.uint32(32).int64(message.localBalance);
    }

    if (message.remoteBalance !== '0') {
      writer.uint32(40).int64(message.remoteBalance);
    }

    if (message.localChanReserveSat !== '0') {
      writer.uint32(48).int64(message.localChanReserveSat);
    }

    if (message.remoteChanReserveSat !== '0') {
      writer.uint32(56).int64(message.remoteChanReserveSat);
    }

    if (message.initiator !== 0) {
      writer.uint32(64).int32(message.initiator);
    }

    if (message.commitmentType !== 0) {
      writer.uint32(72).int32(message.commitmentType);
    }

    if (message.numForwardingPackages !== '0') {
      writer.uint32(80).int64(message.numForwardingPackages);
    }

    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): PendingChannelsResponse_PendingChannel {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePendingChannelsResponse_PendingChannel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.remoteNodePub = reader.string();
          break;
        case 2:
          message.channelPoint = reader.string();
          break;
        case 3:
          message.capacity = longToString(reader.int64() as Long);
          break;
        case 4:
          message.localBalance = longToString(reader.int64() as Long);
          break;
        case 5:
          message.remoteBalance = longToString(reader.int64() as Long);
          break;
        case 6:
          message.localChanReserveSat = longToString(reader.int64() as Long);
          break;
        case 7:
          message.remoteChanReserveSat = longToString(reader.int64() as Long);
          break;
        case 8:
          message.initiator = reader.int32() as any;
          break;
        case 9:
          message.commitmentType = reader.int32() as any;
          break;
        case 10:
          message.numForwardingPackages = longToString(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): PendingChannelsResponse_PendingChannel {
    const message = createBasePendingChannelsResponse_PendingChannel();
    message.remoteNodePub =
      object.remoteNodePub !== undefined && object.remoteNodePub !== null
        ? String(object.remoteNodePub)
        : '';
    message.channelPoint =
      object.channelPoint !== undefined && object.channelPoint !== null
        ? String(object.channelPoint)
        : '';
    message.capacity =
      object.capacity !== undefined && object.capacity !== null
        ? String(object.capacity)
        : '0';
    message.localBalance =
      object.localBalance !== undefined && object.localBalance !== null
        ? String(object.localBalance)
        : '0';
    message.remoteBalance =
      object.remoteBalance !== undefined && object.remoteBalance !== null
        ? String(object.remoteBalance)
        : '0';
    message.localChanReserveSat =
      object.localChanReserveSat !== undefined &&
      object.localChanReserveSat !== null
        ? String(object.localChanReserveSat)
        : '0';
    message.remoteChanReserveSat =
      object.remoteChanReserveSat !== undefined &&
      object.remoteChanReserveSat !== null
        ? String(object.remoteChanReserveSat)
        : '0';
    message.initiator =
      object.initiator !== undefined && object.initiator !== null
        ? initiatorFromJSON(object.initiator)
        : 0;
    message.commitmentType =
      object.commitmentType !== undefined && object.commitmentType !== null
        ? commitmentTypeFromJSON(object.commitmentType)
        : 0;
    message.numForwardingPackages =
      object.numForwardingPackages !== undefined &&
      object.numForwardingPackages !== null
        ? String(object.numForwardingPackages)
        : '0';
    return message;
  },

  toJSON(message: PendingChannelsResponse_PendingChannel): unknown {
    const object: any = {};
    message.remoteNodePub !== undefined &&
      (object.remoteNodePub = message.remoteNodePub);
    message.channelPoint !== undefined &&
      (object.channelPoint = message.channelPoint);
    message.capacity !== undefined && (object.capacity = message.capacity);
    message.localBalance !== undefined &&
      (object.localBalance = message.localBalance);
    message.remoteBalance !== undefined &&
      (object.remoteBalance = message.remoteBalance);
    message.localChanReserveSat !== undefined &&
      (object.localChanReserveSat = message.localChanReserveSat);
    message.remoteChanReserveSat !== undefined &&
      (object.remoteChanReserveSat = message.remoteChanReserveSat);
    message.initiator !== undefined &&
      (object.initiator = initiatorToJSON(message.initiator));
    message.commitmentType !== undefined &&
      (object.commitmentType = commitmentTypeToJSON(message.commitmentType));
    message.numForwardingPackages !== undefined &&
      (object.numForwardingPackages = message.numForwardingPackages);
    return object;
  },

  fromPartial(
    object: DeepPartial<PendingChannelsResponse_PendingChannel>,
  ): PendingChannelsResponse_PendingChannel {
    const message = createBasePendingChannelsResponse_PendingChannel();
    message.remoteNodePub = object.remoteNodePub ?? '';
    message.channelPoint = object.channelPoint ?? '';
    message.capacity = object.capacity ?? '0';
    message.localBalance = object.localBalance ?? '0';
    message.remoteBalance = object.remoteBalance ?? '0';
    message.localChanReserveSat = object.localChanReserveSat ?? '0';
    message.remoteChanReserveSat = object.remoteChanReserveSat ?? '0';
    message.initiator = object.initiator ?? 0;
    message.commitmentType = object.commitmentType ?? 0;
    message.numForwardingPackages = object.numForwardingPackages ?? '0';
    return message;
  },
};

function createBasePendingChannelsResponse_PendingOpenChannel(): PendingChannelsResponse_PendingOpenChannel {
  return {
    channel: undefined,
    confirmationHeight: 0,
    commitFee: '0',
    commitWeight: '0',
    feePerKw: '0',
  };
}

export const PendingChannelsResponse_PendingOpenChannel = {
  encode(
    message: PendingChannelsResponse_PendingOpenChannel,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.channel !== undefined) {
      PendingChannelsResponse_PendingChannel.encode(
        message.channel,
        writer.uint32(10).fork(),
      ).ldelim();
    }

    if (message.confirmationHeight !== 0) {
      writer.uint32(16).uint32(message.confirmationHeight);
    }

    if (message.commitFee !== '0') {
      writer.uint32(32).int64(message.commitFee);
    }

    if (message.commitWeight !== '0') {
      writer.uint32(40).int64(message.commitWeight);
    }

    if (message.feePerKw !== '0') {
      writer.uint32(48).int64(message.feePerKw);
    }

    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): PendingChannelsResponse_PendingOpenChannel {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePendingChannelsResponse_PendingOpenChannel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channel = PendingChannelsResponse_PendingChannel.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 2:
          message.confirmationHeight = reader.uint32();
          break;
        case 4:
          message.commitFee = longToString(reader.int64() as Long);
          break;
        case 5:
          message.commitWeight = longToString(reader.int64() as Long);
          break;
        case 6:
          message.feePerKw = longToString(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): PendingChannelsResponse_PendingOpenChannel {
    const message = createBasePendingChannelsResponse_PendingOpenChannel();
    message.channel =
      object.channel !== undefined && object.channel !== null
        ? PendingChannelsResponse_PendingChannel.fromJSON(object.channel)
        : undefined;
    message.confirmationHeight =
      object.confirmationHeight !== undefined &&
      object.confirmationHeight !== null
        ? Number(object.confirmationHeight)
        : 0;
    message.commitFee =
      object.commitFee !== undefined && object.commitFee !== null
        ? String(object.commitFee)
        : '0';
    message.commitWeight =
      object.commitWeight !== undefined && object.commitWeight !== null
        ? String(object.commitWeight)
        : '0';
    message.feePerKw =
      object.feePerKw !== undefined && object.feePerKw !== null
        ? String(object.feePerKw)
        : '0';
    return message;
  },

  toJSON(message: PendingChannelsResponse_PendingOpenChannel): unknown {
    const object: any = {};
    message.channel !== undefined &&
      (object.channel = message.channel
        ? PendingChannelsResponse_PendingChannel.toJSON(message.channel)
        : undefined);
    message.confirmationHeight !== undefined &&
      (object.confirmationHeight = Math.round(message.confirmationHeight));
    message.commitFee !== undefined && (object.commitFee = message.commitFee);
    message.commitWeight !== undefined &&
      (object.commitWeight = message.commitWeight);
    message.feePerKw !== undefined && (object.feePerKw = message.feePerKw);
    return object;
  },

  fromPartial(
    object: DeepPartial<PendingChannelsResponse_PendingOpenChannel>,
  ): PendingChannelsResponse_PendingOpenChannel {
    const message = createBasePendingChannelsResponse_PendingOpenChannel();
    message.channel =
      object.channel !== undefined && object.channel !== null
        ? PendingChannelsResponse_PendingChannel.fromPartial(object.channel)
        : undefined;
    message.confirmationHeight = object.confirmationHeight ?? 0;
    message.commitFee = object.commitFee ?? '0';
    message.commitWeight = object.commitWeight ?? '0';
    message.feePerKw = object.feePerKw ?? '0';
    return message;
  },
};

function createBasePendingChannelsResponse_WaitingCloseChannel(): PendingChannelsResponse_WaitingCloseChannel {
  return {channel: undefined, limboBalance: '0', commitments: undefined};
}

export const PendingChannelsResponse_WaitingCloseChannel = {
  encode(
    message: PendingChannelsResponse_WaitingCloseChannel,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.channel !== undefined) {
      PendingChannelsResponse_PendingChannel.encode(
        message.channel,
        writer.uint32(10).fork(),
      ).ldelim();
    }

    if (message.limboBalance !== '0') {
      writer.uint32(16).int64(message.limboBalance);
    }

    if (message.commitments !== undefined) {
      PendingChannelsResponse_Commitments.encode(
        message.commitments,
        writer.uint32(26).fork(),
      ).ldelim();
    }

    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): PendingChannelsResponse_WaitingCloseChannel {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePendingChannelsResponse_WaitingCloseChannel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channel = PendingChannelsResponse_PendingChannel.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 2:
          message.limboBalance = longToString(reader.int64() as Long);
          break;
        case 3:
          message.commitments = PendingChannelsResponse_Commitments.decode(
            reader,
            reader.uint32(),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): PendingChannelsResponse_WaitingCloseChannel {
    const message = createBasePendingChannelsResponse_WaitingCloseChannel();
    message.channel =
      object.channel !== undefined && object.channel !== null
        ? PendingChannelsResponse_PendingChannel.fromJSON(object.channel)
        : undefined;
    message.limboBalance =
      object.limboBalance !== undefined && object.limboBalance !== null
        ? String(object.limboBalance)
        : '0';
    message.commitments =
      object.commitments !== undefined && object.commitments !== null
        ? PendingChannelsResponse_Commitments.fromJSON(object.commitments)
        : undefined;
    return message;
  },

  toJSON(message: PendingChannelsResponse_WaitingCloseChannel): unknown {
    const object: any = {};
    message.channel !== undefined &&
      (object.channel = message.channel
        ? PendingChannelsResponse_PendingChannel.toJSON(message.channel)
        : undefined);
    message.limboBalance !== undefined &&
      (object.limboBalance = message.limboBalance);
    message.commitments !== undefined &&
      (object.commitments = message.commitments
        ? PendingChannelsResponse_Commitments.toJSON(message.commitments)
        : undefined);
    return object;
  },

  fromPartial(
    object: DeepPartial<PendingChannelsResponse_WaitingCloseChannel>,
  ): PendingChannelsResponse_WaitingCloseChannel {
    const message = createBasePendingChannelsResponse_WaitingCloseChannel();
    message.channel =
      object.channel !== undefined && object.channel !== null
        ? PendingChannelsResponse_PendingChannel.fromPartial(object.channel)
        : undefined;
    message.limboBalance = object.limboBalance ?? '0';
    message.commitments =
      object.commitments !== undefined && object.commitments !== null
        ? PendingChannelsResponse_Commitments.fromPartial(object.commitments)
        : undefined;
    return message;
  },
};

function createBasePendingChannelsResponse_Commitments(): PendingChannelsResponse_Commitments {
  return {
    localTxid: '',
    remoteTxid: '',
    remotePendingTxid: '',
    localCommitFeeSat: '0',
    remoteCommitFeeSat: '0',
    remotePendingCommitFeeSat: '0',
  };
}

export const PendingChannelsResponse_Commitments = {
  encode(
    message: PendingChannelsResponse_Commitments,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.localTxid !== '') {
      writer.uint32(10).string(message.localTxid);
    }

    if (message.remoteTxid !== '') {
      writer.uint32(18).string(message.remoteTxid);
    }

    if (message.remotePendingTxid !== '') {
      writer.uint32(26).string(message.remotePendingTxid);
    }

    if (message.localCommitFeeSat !== '0') {
      writer.uint32(32).uint64(message.localCommitFeeSat);
    }

    if (message.remoteCommitFeeSat !== '0') {
      writer.uint32(40).uint64(message.remoteCommitFeeSat);
    }

    if (message.remotePendingCommitFeeSat !== '0') {
      writer.uint32(48).uint64(message.remotePendingCommitFeeSat);
    }

    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): PendingChannelsResponse_Commitments {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePendingChannelsResponse_Commitments();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.localTxid = reader.string();
          break;
        case 2:
          message.remoteTxid = reader.string();
          break;
        case 3:
          message.remotePendingTxid = reader.string();
          break;
        case 4:
          message.localCommitFeeSat = longToString(reader.uint64() as Long);
          break;
        case 5:
          message.remoteCommitFeeSat = longToString(reader.uint64() as Long);
          break;
        case 6:
          message.remotePendingCommitFeeSat = longToString(
            reader.uint64() as Long,
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): PendingChannelsResponse_Commitments {
    const message = createBasePendingChannelsResponse_Commitments();
    message.localTxid =
      object.localTxid !== undefined && object.localTxid !== null
        ? String(object.localTxid)
        : '';
    message.remoteTxid =
      object.remoteTxid !== undefined && object.remoteTxid !== null
        ? String(object.remoteTxid)
        : '';
    message.remotePendingTxid =
      object.remotePendingTxid !== undefined &&
      object.remotePendingTxid !== null
        ? String(object.remotePendingTxid)
        : '';
    message.localCommitFeeSat =
      object.localCommitFeeSat !== undefined &&
      object.localCommitFeeSat !== null
        ? String(object.localCommitFeeSat)
        : '0';
    message.remoteCommitFeeSat =
      object.remoteCommitFeeSat !== undefined &&
      object.remoteCommitFeeSat !== null
        ? String(object.remoteCommitFeeSat)
        : '0';
    message.remotePendingCommitFeeSat =
      object.remotePendingCommitFeeSat !== undefined &&
      object.remotePendingCommitFeeSat !== null
        ? String(object.remotePendingCommitFeeSat)
        : '0';
    return message;
  },

  toJSON(message: PendingChannelsResponse_Commitments): unknown {
    const object: any = {};
    message.localTxid !== undefined && (object.localTxid = message.localTxid);
    message.remoteTxid !== undefined &&
      (object.remoteTxid = message.remoteTxid);
    message.remotePendingTxid !== undefined &&
      (object.remotePendingTxid = message.remotePendingTxid);
    message.localCommitFeeSat !== undefined &&
      (object.localCommitFeeSat = message.localCommitFeeSat);
    message.remoteCommitFeeSat !== undefined &&
      (object.remoteCommitFeeSat = message.remoteCommitFeeSat);
    message.remotePendingCommitFeeSat !== undefined &&
      (object.remotePendingCommitFeeSat = message.remotePendingCommitFeeSat);
    return object;
  },

  fromPartial(
    object: DeepPartial<PendingChannelsResponse_Commitments>,
  ): PendingChannelsResponse_Commitments {
    const message = createBasePendingChannelsResponse_Commitments();
    message.localTxid = object.localTxid ?? '';
    message.remoteTxid = object.remoteTxid ?? '';
    message.remotePendingTxid = object.remotePendingTxid ?? '';
    message.localCommitFeeSat = object.localCommitFeeSat ?? '0';
    message.remoteCommitFeeSat = object.remoteCommitFeeSat ?? '0';
    message.remotePendingCommitFeeSat = object.remotePendingCommitFeeSat ?? '0';
    return message;
  },
};

function createBasePendingChannelsResponse_ClosedChannel(): PendingChannelsResponse_ClosedChannel {
  return {channel: undefined, closingTxid: ''};
}

export const PendingChannelsResponse_ClosedChannel = {
  encode(
    message: PendingChannelsResponse_ClosedChannel,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.channel !== undefined) {
      PendingChannelsResponse_PendingChannel.encode(
        message.channel,
        writer.uint32(10).fork(),
      ).ldelim();
    }

    if (message.closingTxid !== '') {
      writer.uint32(18).string(message.closingTxid);
    }

    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): PendingChannelsResponse_ClosedChannel {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePendingChannelsResponse_ClosedChannel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channel = PendingChannelsResponse_PendingChannel.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 2:
          message.closingTxid = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): PendingChannelsResponse_ClosedChannel {
    const message = createBasePendingChannelsResponse_ClosedChannel();
    message.channel =
      object.channel !== undefined && object.channel !== null
        ? PendingChannelsResponse_PendingChannel.fromJSON(object.channel)
        : undefined;
    message.closingTxid =
      object.closingTxid !== undefined && object.closingTxid !== null
        ? String(object.closingTxid)
        : '';
    return message;
  },

  toJSON(message: PendingChannelsResponse_ClosedChannel): unknown {
    const object: any = {};
    message.channel !== undefined &&
      (object.channel = message.channel
        ? PendingChannelsResponse_PendingChannel.toJSON(message.channel)
        : undefined);
    message.closingTxid !== undefined &&
      (object.closingTxid = message.closingTxid);
    return object;
  },

  fromPartial(
    object: DeepPartial<PendingChannelsResponse_ClosedChannel>,
  ): PendingChannelsResponse_ClosedChannel {
    const message = createBasePendingChannelsResponse_ClosedChannel();
    message.channel =
      object.channel !== undefined && object.channel !== null
        ? PendingChannelsResponse_PendingChannel.fromPartial(object.channel)
        : undefined;
    message.closingTxid = object.closingTxid ?? '';
    return message;
  },
};

function createBasePendingChannelsResponse_ForceClosedChannel(): PendingChannelsResponse_ForceClosedChannel {
  return {
    channel: undefined,
    closingTxid: '',
    limboBalance: '0',
    maturityHeight: 0,
    blocksTilMaturity: 0,
    recoveredBalance: '0',
    pendingHtlcs: [],
    anchor: 0,
  };
}

export const PendingChannelsResponse_ForceClosedChannel = {
  encode(
    message: PendingChannelsResponse_ForceClosedChannel,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.channel !== undefined) {
      PendingChannelsResponse_PendingChannel.encode(
        message.channel,
        writer.uint32(10).fork(),
      ).ldelim();
    }

    if (message.closingTxid !== '') {
      writer.uint32(18).string(message.closingTxid);
    }

    if (message.limboBalance !== '0') {
      writer.uint32(24).int64(message.limboBalance);
    }

    if (message.maturityHeight !== 0) {
      writer.uint32(32).uint32(message.maturityHeight);
    }

    if (message.blocksTilMaturity !== 0) {
      writer.uint32(40).int32(message.blocksTilMaturity);
    }

    if (message.recoveredBalance !== '0') {
      writer.uint32(48).int64(message.recoveredBalance);
    }

    for (const v of message.pendingHtlcs) {
      PendingHTLC.encode(v, writer.uint32(66).fork()).ldelim();
    }

    if (message.anchor !== 0) {
      writer.uint32(72).int32(message.anchor);
    }

    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): PendingChannelsResponse_ForceClosedChannel {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePendingChannelsResponse_ForceClosedChannel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channel = PendingChannelsResponse_PendingChannel.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 2:
          message.closingTxid = reader.string();
          break;
        case 3:
          message.limboBalance = longToString(reader.int64() as Long);
          break;
        case 4:
          message.maturityHeight = reader.uint32();
          break;
        case 5:
          message.blocksTilMaturity = reader.int32();
          break;
        case 6:
          message.recoveredBalance = longToString(reader.int64() as Long);
          break;
        case 8:
          message.pendingHtlcs.push(
            PendingHTLC.decode(reader, reader.uint32()),
          );
          break;
        case 9:
          message.anchor = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): PendingChannelsResponse_ForceClosedChannel {
    const message = createBasePendingChannelsResponse_ForceClosedChannel();
    message.channel =
      object.channel !== undefined && object.channel !== null
        ? PendingChannelsResponse_PendingChannel.fromJSON(object.channel)
        : undefined;
    message.closingTxid =
      object.closingTxid !== undefined && object.closingTxid !== null
        ? String(object.closingTxid)
        : '';
    message.limboBalance =
      object.limboBalance !== undefined && object.limboBalance !== null
        ? String(object.limboBalance)
        : '0';
    message.maturityHeight =
      object.maturityHeight !== undefined && object.maturityHeight !== null
        ? Number(object.maturityHeight)
        : 0;
    message.blocksTilMaturity =
      object.blocksTilMaturity !== undefined &&
      object.blocksTilMaturity !== null
        ? Number(object.blocksTilMaturity)
        : 0;
    message.recoveredBalance =
      object.recoveredBalance !== undefined && object.recoveredBalance !== null
        ? String(object.recoveredBalance)
        : '0';
    message.pendingHtlcs = (object.pendingHtlcs ?? []).map((e: any) =>
      PendingHTLC.fromJSON(e),
    );
    message.anchor =
      object.anchor !== undefined && object.anchor !== null
        ? pendingChannelsResponse_ForceClosedChannel_AnchorStateFromJSON(
            object.anchor,
          )
        : 0;
    return message;
  },

  toJSON(message: PendingChannelsResponse_ForceClosedChannel): unknown {
    const object: any = {};
    message.channel !== undefined &&
      (object.channel = message.channel
        ? PendingChannelsResponse_PendingChannel.toJSON(message.channel)
        : undefined);
    message.closingTxid !== undefined &&
      (object.closingTxid = message.closingTxid);
    message.limboBalance !== undefined &&
      (object.limboBalance = message.limboBalance);
    message.maturityHeight !== undefined &&
      (object.maturityHeight = Math.round(message.maturityHeight));
    message.blocksTilMaturity !== undefined &&
      (object.blocksTilMaturity = Math.round(message.blocksTilMaturity));
    message.recoveredBalance !== undefined &&
      (object.recoveredBalance = message.recoveredBalance);
    if (message.pendingHtlcs) {
      object.pendingHtlcs = message.pendingHtlcs.map((e) =>
        e ? PendingHTLC.toJSON(e) : undefined,
      );
    } else {
      object.pendingHtlcs = [];
    }

    message.anchor !== undefined &&
      (object.anchor =
        pendingChannelsResponse_ForceClosedChannel_AnchorStateToJSON(
          message.anchor,
        ));
    return object;
  },

  fromPartial(
    object: DeepPartial<PendingChannelsResponse_ForceClosedChannel>,
  ): PendingChannelsResponse_ForceClosedChannel {
    const message = createBasePendingChannelsResponse_ForceClosedChannel();
    message.channel =
      object.channel !== undefined && object.channel !== null
        ? PendingChannelsResponse_PendingChannel.fromPartial(object.channel)
        : undefined;
    message.closingTxid = object.closingTxid ?? '';
    message.limboBalance = object.limboBalance ?? '0';
    message.maturityHeight = object.maturityHeight ?? 0;
    message.blocksTilMaturity = object.blocksTilMaturity ?? 0;
    message.recoveredBalance = object.recoveredBalance ?? '0';
    message.pendingHtlcs =
      object.pendingHtlcs?.map((e) => PendingHTLC.fromPartial(e)) || [];
    message.anchor = object.anchor ?? 0;
    return message;
  },
};

function createBaseChannelEventSubscription(): ChannelEventSubscription {
  return {};
}

export const ChannelEventSubscription = {
  encode(
    _: ChannelEventSubscription,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ChannelEventSubscription {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChannelEventSubscription();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): ChannelEventSubscription {
    const message = createBaseChannelEventSubscription();
    return message;
  },

  toJSON(_: ChannelEventSubscription): unknown {
    const object: any = {};
    return object;
  },

  fromPartial(
    _: DeepPartial<ChannelEventSubscription>,
  ): ChannelEventSubscription {
    const message = createBaseChannelEventSubscription();
    return message;
  },
};

function createBaseChannelEventUpdate(): ChannelEventUpdate {
  return {
    openChannel: undefined,
    closedChannel: undefined,
    activeChannel: undefined,
    inactiveChannel: undefined,
    pendingOpenChannel: undefined,
    fullyResolvedChannel: undefined,
    type: 0,
  };
}

export const ChannelEventUpdate = {
  encode(
    message: ChannelEventUpdate,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.openChannel !== undefined) {
      Channel.encode(message.openChannel, writer.uint32(10).fork()).ldelim();
    }

    if (message.closedChannel !== undefined) {
      ChannelCloseSummary.encode(
        message.closedChannel,
        writer.uint32(18).fork(),
      ).ldelim();
    }

    if (message.activeChannel !== undefined) {
      ChannelPoint.encode(
        message.activeChannel,
        writer.uint32(26).fork(),
      ).ldelim();
    }

    if (message.inactiveChannel !== undefined) {
      ChannelPoint.encode(
        message.inactiveChannel,
        writer.uint32(34).fork(),
      ).ldelim();
    }

    if (message.pendingOpenChannel !== undefined) {
      PendingUpdate.encode(
        message.pendingOpenChannel,
        writer.uint32(50).fork(),
      ).ldelim();
    }

    if (message.fullyResolvedChannel !== undefined) {
      ChannelPoint.encode(
        message.fullyResolvedChannel,
        writer.uint32(58).fork(),
      ).ldelim();
    }

    if (message.type !== 0) {
      writer.uint32(40).int32(message.type);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChannelEventUpdate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChannelEventUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.openChannel = Channel.decode(reader, reader.uint32());
          break;
        case 2:
          message.closedChannel = ChannelCloseSummary.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 3:
          message.activeChannel = ChannelPoint.decode(reader, reader.uint32());
          break;
        case 4:
          message.inactiveChannel = ChannelPoint.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 6:
          message.pendingOpenChannel = PendingUpdate.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 7:
          message.fullyResolvedChannel = ChannelPoint.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 5:
          message.type = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ChannelEventUpdate {
    const message = createBaseChannelEventUpdate();
    message.openChannel =
      object.openChannel !== undefined && object.openChannel !== null
        ? Channel.fromJSON(object.openChannel)
        : undefined;
    message.closedChannel =
      object.closedChannel !== undefined && object.closedChannel !== null
        ? ChannelCloseSummary.fromJSON(object.closedChannel)
        : undefined;
    message.activeChannel =
      object.activeChannel !== undefined && object.activeChannel !== null
        ? ChannelPoint.fromJSON(object.activeChannel)
        : undefined;
    message.inactiveChannel =
      object.inactiveChannel !== undefined && object.inactiveChannel !== null
        ? ChannelPoint.fromJSON(object.inactiveChannel)
        : undefined;
    message.pendingOpenChannel =
      object.pendingOpenChannel !== undefined &&
      object.pendingOpenChannel !== null
        ? PendingUpdate.fromJSON(object.pendingOpenChannel)
        : undefined;
    message.fullyResolvedChannel =
      object.fullyResolvedChannel !== undefined &&
      object.fullyResolvedChannel !== null
        ? ChannelPoint.fromJSON(object.fullyResolvedChannel)
        : undefined;
    message.type =
      object.type !== undefined && object.type !== null
        ? channelEventUpdate_UpdateTypeFromJSON(object.type)
        : 0;
    return message;
  },

  toJSON(message: ChannelEventUpdate): unknown {
    const object: any = {};
    message.openChannel !== undefined &&
      (object.openChannel = message.openChannel
        ? Channel.toJSON(message.openChannel)
        : undefined);
    message.closedChannel !== undefined &&
      (object.closedChannel = message.closedChannel
        ? ChannelCloseSummary.toJSON(message.closedChannel)
        : undefined);
    message.activeChannel !== undefined &&
      (object.activeChannel = message.activeChannel
        ? ChannelPoint.toJSON(message.activeChannel)
        : undefined);
    message.inactiveChannel !== undefined &&
      (object.inactiveChannel = message.inactiveChannel
        ? ChannelPoint.toJSON(message.inactiveChannel)
        : undefined);
    message.pendingOpenChannel !== undefined &&
      (object.pendingOpenChannel = message.pendingOpenChannel
        ? PendingUpdate.toJSON(message.pendingOpenChannel)
        : undefined);
    message.fullyResolvedChannel !== undefined &&
      (object.fullyResolvedChannel = message.fullyResolvedChannel
        ? ChannelPoint.toJSON(message.fullyResolvedChannel)
        : undefined);
    message.type !== undefined &&
      (object.type = channelEventUpdate_UpdateTypeToJSON(message.type));
    return object;
  },

  fromPartial(object: DeepPartial<ChannelEventUpdate>): ChannelEventUpdate {
    const message = createBaseChannelEventUpdate();
    message.openChannel =
      object.openChannel !== undefined && object.openChannel !== null
        ? Channel.fromPartial(object.openChannel)
        : undefined;
    message.closedChannel =
      object.closedChannel !== undefined && object.closedChannel !== null
        ? ChannelCloseSummary.fromPartial(object.closedChannel)
        : undefined;
    message.activeChannel =
      object.activeChannel !== undefined && object.activeChannel !== null
        ? ChannelPoint.fromPartial(object.activeChannel)
        : undefined;
    message.inactiveChannel =
      object.inactiveChannel !== undefined && object.inactiveChannel !== null
        ? ChannelPoint.fromPartial(object.inactiveChannel)
        : undefined;
    message.pendingOpenChannel =
      object.pendingOpenChannel !== undefined &&
      object.pendingOpenChannel !== null
        ? PendingUpdate.fromPartial(object.pendingOpenChannel)
        : undefined;
    message.fullyResolvedChannel =
      object.fullyResolvedChannel !== undefined &&
      object.fullyResolvedChannel !== null
        ? ChannelPoint.fromPartial(object.fullyResolvedChannel)
        : undefined;
    message.type = object.type ?? 0;
    return message;
  },
};

function createBaseWalletAccountBalance(): WalletAccountBalance {
  return {confirmedBalance: '0', unconfirmedBalance: '0'};
}

export const WalletAccountBalance = {
  encode(
    message: WalletAccountBalance,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.confirmedBalance !== '0') {
      writer.uint32(8).int64(message.confirmedBalance);
    }

    if (message.unconfirmedBalance !== '0') {
      writer.uint32(16).int64(message.unconfirmedBalance);
    }

    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): WalletAccountBalance {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWalletAccountBalance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.confirmedBalance = longToString(reader.int64() as Long);
          break;
        case 2:
          message.unconfirmedBalance = longToString(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): WalletAccountBalance {
    const message = createBaseWalletAccountBalance();
    message.confirmedBalance =
      object.confirmedBalance !== undefined && object.confirmedBalance !== null
        ? String(object.confirmedBalance)
        : '0';
    message.unconfirmedBalance =
      object.unconfirmedBalance !== undefined &&
      object.unconfirmedBalance !== null
        ? String(object.unconfirmedBalance)
        : '0';
    return message;
  },

  toJSON(message: WalletAccountBalance): unknown {
    const object: any = {};
    message.confirmedBalance !== undefined &&
      (object.confirmedBalance = message.confirmedBalance);
    message.unconfirmedBalance !== undefined &&
      (object.unconfirmedBalance = message.unconfirmedBalance);
    return object;
  },

  fromPartial(object: DeepPartial<WalletAccountBalance>): WalletAccountBalance {
    const message = createBaseWalletAccountBalance();
    message.confirmedBalance = object.confirmedBalance ?? '0';
    message.unconfirmedBalance = object.unconfirmedBalance ?? '0';
    return message;
  },
};

function createBaseWalletBalanceRequest(): WalletBalanceRequest {
  return {};
}

export const WalletBalanceRequest = {
  encode(
    _: WalletBalanceRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): WalletBalanceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWalletBalanceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): WalletBalanceRequest {
    const message = createBaseWalletBalanceRequest();
    return message;
  },

  toJSON(_: WalletBalanceRequest): unknown {
    const object: any = {};
    return object;
  },

  fromPartial(_: DeepPartial<WalletBalanceRequest>): WalletBalanceRequest {
    const message = createBaseWalletBalanceRequest();
    return message;
  },
};

function createBaseWalletBalanceResponse(): WalletBalanceResponse {
  return {
    totalBalance: '0',
    confirmedBalance: '0',
    unconfirmedBalance: '0',
    accountBalance: {},
  };
}

export const WalletBalanceResponse = {
  encode(
    message: WalletBalanceResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.totalBalance !== '0') {
      writer.uint32(8).int64(message.totalBalance);
    }

    if (message.confirmedBalance !== '0') {
      writer.uint32(16).int64(message.confirmedBalance);
    }

    if (message.unconfirmedBalance !== '0') {
      writer.uint32(24).int64(message.unconfirmedBalance);
    }

    for (const [key, value] of Object.entries(message.accountBalance)) {
      WalletBalanceResponse_AccountBalanceEntry.encode(
        {key: key as any, value},
        writer.uint32(34).fork(),
      ).ldelim();
    }

    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): WalletBalanceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWalletBalanceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalBalance = longToString(reader.int64() as Long);
          break;
        case 2:
          message.confirmedBalance = longToString(reader.int64() as Long);
          break;
        case 3:
          message.unconfirmedBalance = longToString(reader.int64() as Long);
          break;
        case 4:
          const entry4 = WalletBalanceResponse_AccountBalanceEntry.decode(
            reader,
            reader.uint32(),
          );
          if (entry4.value !== undefined) {
            message.accountBalance[entry4.key] = entry4.value;
          }

          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): WalletBalanceResponse {
    const message = createBaseWalletBalanceResponse();
    message.totalBalance =
      object.totalBalance !== undefined && object.totalBalance !== null
        ? String(object.totalBalance)
        : '0';
    message.confirmedBalance =
      object.confirmedBalance !== undefined && object.confirmedBalance !== null
        ? String(object.confirmedBalance)
        : '0';
    message.unconfirmedBalance =
      object.unconfirmedBalance !== undefined &&
      object.unconfirmedBalance !== null
        ? String(object.unconfirmedBalance)
        : '0';
    message.accountBalance = Object.entries(object.accountBalance ?? {}).reduce<
      Record<string, WalletAccountBalance>
    >((acc, [key, value]) => {
      acc[key] = WalletAccountBalance.fromJSON(value);
      return acc;
    }, {});
    return message;
  },

  toJSON(message: WalletBalanceResponse): unknown {
    const object: any = {};
    message.totalBalance !== undefined &&
      (object.totalBalance = message.totalBalance);
    message.confirmedBalance !== undefined &&
      (object.confirmedBalance = message.confirmedBalance);
    message.unconfirmedBalance !== undefined &&
      (object.unconfirmedBalance = message.unconfirmedBalance);
    object.accountBalance = {};
    if (message.accountBalance) {
      for (const [k, v] of Object.entries(message.accountBalance)) {
        object.accountBalance[k] = WalletAccountBalance.toJSON(v);
      }
    }

    return object;
  },

  fromPartial(
    object: DeepPartial<WalletBalanceResponse>,
  ): WalletBalanceResponse {
    const message = createBaseWalletBalanceResponse();
    message.totalBalance = object.totalBalance ?? '0';
    message.confirmedBalance = object.confirmedBalance ?? '0';
    message.unconfirmedBalance = object.unconfirmedBalance ?? '0';
    message.accountBalance = Object.entries(object.accountBalance ?? {}).reduce<
      Record<string, WalletAccountBalance>
    >((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = WalletAccountBalance.fromPartial(value);
      }

      return acc;
    }, {});
    return message;
  },
};

function createBaseWalletBalanceResponse_AccountBalanceEntry(): WalletBalanceResponse_AccountBalanceEntry {
  return {key: '', value: undefined};
}

export const WalletBalanceResponse_AccountBalanceEntry = {
  encode(
    message: WalletBalanceResponse_AccountBalanceEntry,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.key !== '') {
      writer.uint32(10).string(message.key);
    }

    if (message.value !== undefined) {
      WalletAccountBalance.encode(
        message.value,
        writer.uint32(18).fork(),
      ).ldelim();
    }

    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): WalletBalanceResponse_AccountBalanceEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWalletBalanceResponse_AccountBalanceEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = WalletAccountBalance.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): WalletBalanceResponse_AccountBalanceEntry {
    const message = createBaseWalletBalanceResponse_AccountBalanceEntry();
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : '';
    message.value =
      object.value !== undefined && object.value !== null
        ? WalletAccountBalance.fromJSON(object.value)
        : undefined;
    return message;
  },

  toJSON(message: WalletBalanceResponse_AccountBalanceEntry): unknown {
    const object: any = {};
    message.key !== undefined && (object.key = message.key);
    message.value !== undefined &&
      (object.value = message.value
        ? WalletAccountBalance.toJSON(message.value)
        : undefined);
    return object;
  },

  fromPartial(
    object: DeepPartial<WalletBalanceResponse_AccountBalanceEntry>,
  ): WalletBalanceResponse_AccountBalanceEntry {
    const message = createBaseWalletBalanceResponse_AccountBalanceEntry();
    message.key = object.key ?? '';
    message.value =
      object.value !== undefined && object.value !== null
        ? WalletAccountBalance.fromPartial(object.value)
        : undefined;
    return message;
  },
};

function createBaseAmount(): Amount {
  return {sat: '0', msat: '0'};
}

export const Amount = {
  encode(
    message: Amount,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.sat !== '0') {
      writer.uint32(8).uint64(message.sat);
    }

    if (message.msat !== '0') {
      writer.uint32(16).uint64(message.msat);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Amount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAmount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sat = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.msat = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Amount {
    const message = createBaseAmount();
    message.sat =
      object.sat !== undefined && object.sat !== null
        ? String(object.sat)
        : '0';
    message.msat =
      object.msat !== undefined && object.msat !== null
        ? String(object.msat)
        : '0';
    return message;
  },

  toJSON(message: Amount): unknown {
    const object: any = {};
    message.sat !== undefined && (object.sat = message.sat);
    message.msat !== undefined && (object.msat = message.msat);
    return object;
  },

  fromPartial(object: DeepPartial<Amount>): Amount {
    const message = createBaseAmount();
    message.sat = object.sat ?? '0';
    message.msat = object.msat ?? '0';
    return message;
  },
};

function createBaseChannelBalanceRequest(): ChannelBalanceRequest {
  return {};
}

export const ChannelBalanceRequest = {
  encode(
    _: ChannelBalanceRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ChannelBalanceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChannelBalanceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): ChannelBalanceRequest {
    const message = createBaseChannelBalanceRequest();
    return message;
  },

  toJSON(_: ChannelBalanceRequest): unknown {
    const object: any = {};
    return object;
  },

  fromPartial(_: DeepPartial<ChannelBalanceRequest>): ChannelBalanceRequest {
    const message = createBaseChannelBalanceRequest();
    return message;
  },
};

function createBaseChannelBalanceResponse(): ChannelBalanceResponse {
  return {
    balance: '0',
    pendingOpenBalance: '0',
    localBalance: undefined,
    remoteBalance: undefined,
    unsettledLocalBalance: undefined,
    unsettledRemoteBalance: undefined,
    pendingOpenLocalBalance: undefined,
    pendingOpenRemoteBalance: undefined,
  };
}

export const ChannelBalanceResponse = {
  encode(
    message: ChannelBalanceResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.balance !== '0') {
      writer.uint32(8).int64(message.balance);
    }

    if (message.pendingOpenBalance !== '0') {
      writer.uint32(16).int64(message.pendingOpenBalance);
    }

    if (message.localBalance !== undefined) {
      Amount.encode(message.localBalance, writer.uint32(26).fork()).ldelim();
    }

    if (message.remoteBalance !== undefined) {
      Amount.encode(message.remoteBalance, writer.uint32(34).fork()).ldelim();
    }

    if (message.unsettledLocalBalance !== undefined) {
      Amount.encode(
        message.unsettledLocalBalance,
        writer.uint32(42).fork(),
      ).ldelim();
    }

    if (message.unsettledRemoteBalance !== undefined) {
      Amount.encode(
        message.unsettledRemoteBalance,
        writer.uint32(50).fork(),
      ).ldelim();
    }

    if (message.pendingOpenLocalBalance !== undefined) {
      Amount.encode(
        message.pendingOpenLocalBalance,
        writer.uint32(58).fork(),
      ).ldelim();
    }

    if (message.pendingOpenRemoteBalance !== undefined) {
      Amount.encode(
        message.pendingOpenRemoteBalance,
        writer.uint32(66).fork(),
      ).ldelim();
    }

    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ChannelBalanceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChannelBalanceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.balance = longToString(reader.int64() as Long);
          break;
        case 2:
          message.pendingOpenBalance = longToString(reader.int64() as Long);
          break;
        case 3:
          message.localBalance = Amount.decode(reader, reader.uint32());
          break;
        case 4:
          message.remoteBalance = Amount.decode(reader, reader.uint32());
          break;
        case 5:
          message.unsettledLocalBalance = Amount.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 6:
          message.unsettledRemoteBalance = Amount.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 7:
          message.pendingOpenLocalBalance = Amount.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 8:
          message.pendingOpenRemoteBalance = Amount.decode(
            reader,
            reader.uint32(),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ChannelBalanceResponse {
    const message = createBaseChannelBalanceResponse();
    message.balance =
      object.balance !== undefined && object.balance !== null
        ? String(object.balance)
        : '0';
    message.pendingOpenBalance =
      object.pendingOpenBalance !== undefined &&
      object.pendingOpenBalance !== null
        ? String(object.pendingOpenBalance)
        : '0';
    message.localBalance =
      object.localBalance !== undefined && object.localBalance !== null
        ? Amount.fromJSON(object.localBalance)
        : undefined;
    message.remoteBalance =
      object.remoteBalance !== undefined && object.remoteBalance !== null
        ? Amount.fromJSON(object.remoteBalance)
        : undefined;
    message.unsettledLocalBalance =
      object.unsettledLocalBalance !== undefined &&
      object.unsettledLocalBalance !== null
        ? Amount.fromJSON(object.unsettledLocalBalance)
        : undefined;
    message.unsettledRemoteBalance =
      object.unsettledRemoteBalance !== undefined &&
      object.unsettledRemoteBalance !== null
        ? Amount.fromJSON(object.unsettledRemoteBalance)
        : undefined;
    message.pendingOpenLocalBalance =
      object.pendingOpenLocalBalance !== undefined &&
      object.pendingOpenLocalBalance !== null
        ? Amount.fromJSON(object.pendingOpenLocalBalance)
        : undefined;
    message.pendingOpenRemoteBalance =
      object.pendingOpenRemoteBalance !== undefined &&
      object.pendingOpenRemoteBalance !== null
        ? Amount.fromJSON(object.pendingOpenRemoteBalance)
        : undefined;
    return message;
  },

  toJSON(message: ChannelBalanceResponse): unknown {
    const object: any = {};
    message.balance !== undefined && (object.balance = message.balance);
    message.pendingOpenBalance !== undefined &&
      (object.pendingOpenBalance = message.pendingOpenBalance);
    message.localBalance !== undefined &&
      (object.localBalance = message.localBalance
        ? Amount.toJSON(message.localBalance)
        : undefined);
    message.remoteBalance !== undefined &&
      (object.remoteBalance = message.remoteBalance
        ? Amount.toJSON(message.remoteBalance)
        : undefined);
    message.unsettledLocalBalance !== undefined &&
      (object.unsettledLocalBalance = message.unsettledLocalBalance
        ? Amount.toJSON(message.unsettledLocalBalance)
        : undefined);
    message.unsettledRemoteBalance !== undefined &&
      (object.unsettledRemoteBalance = message.unsettledRemoteBalance
        ? Amount.toJSON(message.unsettledRemoteBalance)
        : undefined);
    message.pendingOpenLocalBalance !== undefined &&
      (object.pendingOpenLocalBalance = message.pendingOpenLocalBalance
        ? Amount.toJSON(message.pendingOpenLocalBalance)
        : undefined);
    message.pendingOpenRemoteBalance !== undefined &&
      (object.pendingOpenRemoteBalance = message.pendingOpenRemoteBalance
        ? Amount.toJSON(message.pendingOpenRemoteBalance)
        : undefined);
    return object;
  },

  fromPartial(
    object: DeepPartial<ChannelBalanceResponse>,
  ): ChannelBalanceResponse {
    const message = createBaseChannelBalanceResponse();
    message.balance = object.balance ?? '0';
    message.pendingOpenBalance = object.pendingOpenBalance ?? '0';
    message.localBalance =
      object.localBalance !== undefined && object.localBalance !== null
        ? Amount.fromPartial(object.localBalance)
        : undefined;
    message.remoteBalance =
      object.remoteBalance !== undefined && object.remoteBalance !== null
        ? Amount.fromPartial(object.remoteBalance)
        : undefined;
    message.unsettledLocalBalance =
      object.unsettledLocalBalance !== undefined &&
      object.unsettledLocalBalance !== null
        ? Amount.fromPartial(object.unsettledLocalBalance)
        : undefined;
    message.unsettledRemoteBalance =
      object.unsettledRemoteBalance !== undefined &&
      object.unsettledRemoteBalance !== null
        ? Amount.fromPartial(object.unsettledRemoteBalance)
        : undefined;
    message.pendingOpenLocalBalance =
      object.pendingOpenLocalBalance !== undefined &&
      object.pendingOpenLocalBalance !== null
        ? Amount.fromPartial(object.pendingOpenLocalBalance)
        : undefined;
    message.pendingOpenRemoteBalance =
      object.pendingOpenRemoteBalance !== undefined &&
      object.pendingOpenRemoteBalance !== null
        ? Amount.fromPartial(object.pendingOpenRemoteBalance)
        : undefined;
    return message;
  },
};

function createBaseQueryRoutesRequest(): QueryRoutesRequest {
  return {
    pubKey: '',
    amt: '0',
    amtMsat: '0',
    finalCltvDelta: 0,
    feeLimit: undefined,
    ignoredNodes: [],
    ignoredEdges: [],
    sourcePubKey: '',
    useMissionControl: false,
    ignoredPairs: [],
    cltvLimit: 0,
    destCustomRecords: {},
    outgoingChanId: '0',
    lastHopPubkey: new Uint8Array(),
    routeHints: [],
    destFeatures: [],
  };
}

export const QueryRoutesRequest = {
  encode(
    message: QueryRoutesRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.pubKey !== '') {
      writer.uint32(10).string(message.pubKey);
    }

    if (message.amt !== '0') {
      writer.uint32(16).int64(message.amt);
    }

    if (message.amtMsat !== '0') {
      writer.uint32(96).int64(message.amtMsat);
    }

    if (message.finalCltvDelta !== 0) {
      writer.uint32(32).int32(message.finalCltvDelta);
    }

    if (message.feeLimit !== undefined) {
      FeeLimit.encode(message.feeLimit, writer.uint32(42).fork()).ldelim();
    }

    for (const v of message.ignoredNodes) {
      writer.uint32(50).bytes(v);
    }

    for (const v of message.ignoredEdges) {
      EdgeLocator.encode(v, writer.uint32(58).fork()).ldelim();
    }

    if (message.sourcePubKey !== '') {
      writer.uint32(66).string(message.sourcePubKey);
    }

    if (message.useMissionControl) {
      writer.uint32(72).bool(message.useMissionControl);
    }

    for (const v of message.ignoredPairs) {
      NodePair.encode(v, writer.uint32(82).fork()).ldelim();
    }

    if (message.cltvLimit !== 0) {
      writer.uint32(88).uint32(message.cltvLimit);
    }

    for (const [key, value] of Object.entries(message.destCustomRecords)) {
      QueryRoutesRequest_DestCustomRecordsEntry.encode(
        {key: key as any, value},
        writer.uint32(106).fork(),
      ).ldelim();
    }

    if (message.outgoingChanId !== '0') {
      writer.uint32(112).uint64(message.outgoingChanId);
    }

    if (message.lastHopPubkey.length > 0) {
      writer.uint32(122).bytes(message.lastHopPubkey);
    }

    for (const v of message.routeHints) {
      RouteHint.encode(v, writer.uint32(130).fork()).ldelim();
    }

    writer.uint32(138).fork();
    for (const v of message.destFeatures) {
      writer.int32(v);
    }

    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRoutesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRoutesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pubKey = reader.string();
          break;
        case 2:
          message.amt = longToString(reader.int64() as Long);
          break;
        case 12:
          message.amtMsat = longToString(reader.int64() as Long);
          break;
        case 4:
          message.finalCltvDelta = reader.int32();
          break;
        case 5:
          message.feeLimit = FeeLimit.decode(reader, reader.uint32());
          break;
        case 6:
          message.ignoredNodes.push(reader.bytes());
          break;
        case 7:
          message.ignoredEdges.push(
            EdgeLocator.decode(reader, reader.uint32()),
          );
          break;
        case 8:
          message.sourcePubKey = reader.string();
          break;
        case 9:
          message.useMissionControl = reader.bool();
          break;
        case 10:
          message.ignoredPairs.push(NodePair.decode(reader, reader.uint32()));
          break;
        case 11:
          message.cltvLimit = reader.uint32();
          break;
        case 13:
          const entry13 = QueryRoutesRequest_DestCustomRecordsEntry.decode(
            reader,
            reader.uint32(),
          );
          if (entry13.value !== undefined) {
            message.destCustomRecords[entry13.key] = entry13.value;
          }

          break;
        case 14:
          message.outgoingChanId = longToString(reader.uint64() as Long);
          break;
        case 15:
          message.lastHopPubkey = reader.bytes();
          break;
        case 16:
          message.routeHints.push(RouteHint.decode(reader, reader.uint32()));
          break;
        case 17:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.destFeatures.push(reader.int32() as any);
            }
          } else {
            message.destFeatures.push(reader.int32() as any);
          }

          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryRoutesRequest {
    const message = createBaseQueryRoutesRequest();
    message.pubKey =
      object.pubKey !== undefined && object.pubKey !== null
        ? String(object.pubKey)
        : '';
    message.amt =
      object.amt !== undefined && object.amt !== null
        ? String(object.amt)
        : '0';
    message.amtMsat =
      object.amtMsat !== undefined && object.amtMsat !== null
        ? String(object.amtMsat)
        : '0';
    message.finalCltvDelta =
      object.finalCltvDelta !== undefined && object.finalCltvDelta !== null
        ? Number(object.finalCltvDelta)
        : 0;
    message.feeLimit =
      object.feeLimit !== undefined && object.feeLimit !== null
        ? FeeLimit.fromJSON(object.feeLimit)
        : undefined;
    message.ignoredNodes = (object.ignoredNodes ?? []).map((e: any) =>
      bytesFromBase64(e),
    );
    message.ignoredEdges = (object.ignoredEdges ?? []).map((e: any) =>
      EdgeLocator.fromJSON(e),
    );
    message.sourcePubKey =
      object.sourcePubKey !== undefined && object.sourcePubKey !== null
        ? String(object.sourcePubKey)
        : '';
    message.useMissionControl =
      object.useMissionControl !== undefined &&
      object.useMissionControl !== null
        ? Boolean(object.useMissionControl)
        : false;
    message.ignoredPairs = (object.ignoredPairs ?? []).map((e: any) =>
      NodePair.fromJSON(e),
    );
    message.cltvLimit =
      object.cltvLimit !== undefined && object.cltvLimit !== null
        ? Number(object.cltvLimit)
        : 0;
    message.destCustomRecords = Object.entries(
      object.destCustomRecords ?? {},
    ).reduce<Record<string, Uint8Array>>((acc, [key, value]) => {
      acc[key] = bytesFromBase64(value as string);
      return acc;
    }, {});
    message.outgoingChanId =
      object.outgoingChanId !== undefined && object.outgoingChanId !== null
        ? String(object.outgoingChanId)
        : '0';
    message.lastHopPubkey =
      object.lastHopPubkey !== undefined && object.lastHopPubkey !== null
        ? bytesFromBase64(object.lastHopPubkey)
        : new Uint8Array();
    message.routeHints = (object.routeHints ?? []).map((e: any) =>
      RouteHint.fromJSON(e),
    );
    message.destFeatures = (object.destFeatures ?? []).map((e: any) =>
      featureBitFromJSON(e),
    );
    return message;
  },

  toJSON(message: QueryRoutesRequest): unknown {
    const object: any = {};
    message.pubKey !== undefined && (object.pubKey = message.pubKey);
    message.amt !== undefined && (object.amt = message.amt);
    message.amtMsat !== undefined && (object.amtMsat = message.amtMsat);
    message.finalCltvDelta !== undefined &&
      (object.finalCltvDelta = Math.round(message.finalCltvDelta));
    message.feeLimit !== undefined &&
      (object.feeLimit = message.feeLimit
        ? FeeLimit.toJSON(message.feeLimit)
        : undefined);
    if (message.ignoredNodes) {
      object.ignoredNodes = message.ignoredNodes.map((e) =>
        base64FromBytes(e !== undefined ? e : new Uint8Array()),
      );
    } else {
      object.ignoredNodes = [];
    }

    if (message.ignoredEdges) {
      object.ignoredEdges = message.ignoredEdges.map((e) =>
        e ? EdgeLocator.toJSON(e) : undefined,
      );
    } else {
      object.ignoredEdges = [];
    }

    message.sourcePubKey !== undefined &&
      (object.sourcePubKey = message.sourcePubKey);
    message.useMissionControl !== undefined &&
      (object.useMissionControl = message.useMissionControl);
    if (message.ignoredPairs) {
      object.ignoredPairs = message.ignoredPairs.map((e) =>
        e ? NodePair.toJSON(e) : undefined,
      );
    } else {
      object.ignoredPairs = [];
    }

    message.cltvLimit !== undefined &&
      (object.cltvLimit = Math.round(message.cltvLimit));
    object.destCustomRecords = {};
    if (message.destCustomRecords) {
      for (const [k, v] of Object.entries(message.destCustomRecords)) {
        object.destCustomRecords[k] = base64FromBytes(v);
      }
    }

    message.outgoingChanId !== undefined &&
      (object.outgoingChanId = message.outgoingChanId);
    message.lastHopPubkey !== undefined &&
      (object.lastHopPubkey = base64FromBytes(
        message.lastHopPubkey !== undefined
          ? message.lastHopPubkey
          : new Uint8Array(),
      ));
    if (message.routeHints) {
      object.routeHints = message.routeHints.map((e) =>
        e ? RouteHint.toJSON(e) : undefined,
      );
    } else {
      object.routeHints = [];
    }

    object.destFeatures = message.destFeatures
      ? message.destFeatures.map((e) => featureBitToJSON(e))
      : [];
    return object;
  },

  fromPartial(object: DeepPartial<QueryRoutesRequest>): QueryRoutesRequest {
    const message = createBaseQueryRoutesRequest();
    message.pubKey = object.pubKey ?? '';
    message.amt = object.amt ?? '0';
    message.amtMsat = object.amtMsat ?? '0';
    message.finalCltvDelta = object.finalCltvDelta ?? 0;
    message.feeLimit =
      object.feeLimit !== undefined && object.feeLimit !== null
        ? FeeLimit.fromPartial(object.feeLimit)
        : undefined;
    message.ignoredNodes = object.ignoredNodes?.map((e) => e) || [];
    message.ignoredEdges =
      object.ignoredEdges?.map((e) => EdgeLocator.fromPartial(e)) || [];
    message.sourcePubKey = object.sourcePubKey ?? '';
    message.useMissionControl = object.useMissionControl ?? false;
    message.ignoredPairs =
      object.ignoredPairs?.map((e) => NodePair.fromPartial(e)) || [];
    message.cltvLimit = object.cltvLimit ?? 0;
    message.destCustomRecords = Object.entries(
      object.destCustomRecords ?? {},
    ).reduce<Record<string, Uint8Array>>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = value;
      }

      return acc;
    }, {});
    message.outgoingChanId = object.outgoingChanId ?? '0';
    message.lastHopPubkey = object.lastHopPubkey ?? new Uint8Array();
    message.routeHints =
      object.routeHints?.map((e) => RouteHint.fromPartial(e)) || [];
    message.destFeatures = object.destFeatures?.map((e) => e) || [];
    return message;
  },
};

function createBaseQueryRoutesRequest_DestCustomRecordsEntry(): QueryRoutesRequest_DestCustomRecordsEntry {
  return {key: '0', value: new Uint8Array()};
}

export const QueryRoutesRequest_DestCustomRecordsEntry = {
  encode(
    message: QueryRoutesRequest_DestCustomRecordsEntry,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.key !== '0') {
      writer.uint32(8).uint64(message.key);
    }

    if (message.value.length > 0) {
      writer.uint32(18).bytes(message.value);
    }

    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryRoutesRequest_DestCustomRecordsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRoutesRequest_DestCustomRecordsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.value = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryRoutesRequest_DestCustomRecordsEntry {
    const message = createBaseQueryRoutesRequest_DestCustomRecordsEntry();
    message.key =
      object.key !== undefined && object.key !== null
        ? String(object.key)
        : '0';
    message.value =
      object.value !== undefined && object.value !== null
        ? bytesFromBase64(object.value)
        : new Uint8Array();
    return message;
  },

  toJSON(message: QueryRoutesRequest_DestCustomRecordsEntry): unknown {
    const object: any = {};
    message.key !== undefined && (object.key = message.key);
    message.value !== undefined &&
      (object.value = base64FromBytes(
        message.value !== undefined ? message.value : new Uint8Array(),
      ));
    return object;
  },

  fromPartial(
    object: DeepPartial<QueryRoutesRequest_DestCustomRecordsEntry>,
  ): QueryRoutesRequest_DestCustomRecordsEntry {
    const message = createBaseQueryRoutesRequest_DestCustomRecordsEntry();
    message.key = object.key ?? '0';
    message.value = object.value ?? new Uint8Array();
    return message;
  },
};

function createBaseNodePair(): NodePair {
  return {from: new Uint8Array(), to: new Uint8Array()};
}

export const NodePair = {
  encode(
    message: NodePair,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.from.length > 0) {
      writer.uint32(10).bytes(message.from);
    }

    if (message.to.length > 0) {
      writer.uint32(18).bytes(message.to);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NodePair {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNodePair();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.from = reader.bytes();
          break;
        case 2:
          message.to = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): NodePair {
    const message = createBaseNodePair();
    message.from =
      object.from !== undefined && object.from !== null
        ? bytesFromBase64(object.from)
        : new Uint8Array();
    message.to =
      object.to !== undefined && object.to !== null
        ? bytesFromBase64(object.to)
        : new Uint8Array();
    return message;
  },

  toJSON(message: NodePair): unknown {
    const object: any = {};
    message.from !== undefined &&
      (object.from = base64FromBytes(
        message.from !== undefined ? message.from : new Uint8Array(),
      ));
    message.to !== undefined &&
      (object.to = base64FromBytes(
        message.to !== undefined ? message.to : new Uint8Array(),
      ));
    return object;
  },

  fromPartial(object: DeepPartial<NodePair>): NodePair {
    const message = createBaseNodePair();
    message.from = object.from ?? new Uint8Array();
    message.to = object.to ?? new Uint8Array();
    return message;
  },
};

function createBaseEdgeLocator(): EdgeLocator {
  return {channelId: '0', directionReverse: false};
}

export const EdgeLocator = {
  encode(
    message: EdgeLocator,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.channelId !== '0') {
      writer.uint32(8).uint64(message.channelId);
    }

    if (message.directionReverse) {
      writer.uint32(16).bool(message.directionReverse);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EdgeLocator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEdgeLocator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channelId = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.directionReverse = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EdgeLocator {
    const message = createBaseEdgeLocator();
    message.channelId =
      object.channelId !== undefined && object.channelId !== null
        ? String(object.channelId)
        : '0';
    message.directionReverse =
      object.directionReverse !== undefined && object.directionReverse !== null
        ? Boolean(object.directionReverse)
        : false;
    return message;
  },

  toJSON(message: EdgeLocator): unknown {
    const object: any = {};
    message.channelId !== undefined && (object.channelId = message.channelId);
    message.directionReverse !== undefined &&
      (object.directionReverse = message.directionReverse);
    return object;
  },

  fromPartial(object: DeepPartial<EdgeLocator>): EdgeLocator {
    const message = createBaseEdgeLocator();
    message.channelId = object.channelId ?? '0';
    message.directionReverse = object.directionReverse ?? false;
    return message;
  },
};

function createBaseQueryRoutesResponse(): QueryRoutesResponse {
  return {routes: [], successProb: 0};
}

export const QueryRoutesResponse = {
  encode(
    message: QueryRoutesResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.routes) {
      Route.encode(v, writer.uint32(10).fork()).ldelim();
    }

    if (message.successProb !== 0) {
      writer.uint32(17).double(message.successProb);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRoutesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRoutesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.routes.push(Route.decode(reader, reader.uint32()));
          break;
        case 2:
          message.successProb = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryRoutesResponse {
    const message = createBaseQueryRoutesResponse();
    message.routes = (object.routes ?? []).map((e: any) => Route.fromJSON(e));
    message.successProb =
      object.successProb !== undefined && object.successProb !== null
        ? Number(object.successProb)
        : 0;
    return message;
  },

  toJSON(message: QueryRoutesResponse): unknown {
    const object: any = {};
    object.routes = message.routes
      ? message.routes.map((e) => (e ? Route.toJSON(e) : undefined))
      : [];
    message.successProb !== undefined &&
      (object.successProb = message.successProb);
    return object;
  },

  fromPartial(object: DeepPartial<QueryRoutesResponse>): QueryRoutesResponse {
    const message = createBaseQueryRoutesResponse();
    message.routes = object.routes?.map((e) => Route.fromPartial(e)) || [];
    message.successProb = object.successProb ?? 0;
    return message;
  },
};

function createBaseHop(): Hop {
  return {
    chanId: '0',
    chanCapacity: '0',
    amtToForward: '0',
    fee: '0',
    expiry: 0,
    amtToForwardMsat: '0',
    feeMsat: '0',
    pubKey: '',
    tlvPayload: false,
    mppRecord: undefined,
    ampRecord: undefined,
    customRecords: {},
  };
}

export const Hop = {
  encode(message: Hop, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chanId !== '0') {
      writer.uint32(8).uint64(message.chanId);
    }

    if (message.chanCapacity !== '0') {
      writer.uint32(16).int64(message.chanCapacity);
    }

    if (message.amtToForward !== '0') {
      writer.uint32(24).int64(message.amtToForward);
    }

    if (message.fee !== '0') {
      writer.uint32(32).int64(message.fee);
    }

    if (message.expiry !== 0) {
      writer.uint32(40).uint32(message.expiry);
    }

    if (message.amtToForwardMsat !== '0') {
      writer.uint32(48).int64(message.amtToForwardMsat);
    }

    if (message.feeMsat !== '0') {
      writer.uint32(56).int64(message.feeMsat);
    }

    if (message.pubKey !== '') {
      writer.uint32(66).string(message.pubKey);
    }

    if (message.tlvPayload) {
      writer.uint32(72).bool(message.tlvPayload);
    }

    if (message.mppRecord !== undefined) {
      MPPRecord.encode(message.mppRecord, writer.uint32(82).fork()).ldelim();
    }

    if (message.ampRecord !== undefined) {
      AMPRecord.encode(message.ampRecord, writer.uint32(98).fork()).ldelim();
    }

    for (const [key, value] of Object.entries(message.customRecords)) {
      Hop_CustomRecordsEntry.encode(
        {key: key as any, value},
        writer.uint32(90).fork(),
      ).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Hop {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHop();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chanId = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.chanCapacity = longToString(reader.int64() as Long);
          break;
        case 3:
          message.amtToForward = longToString(reader.int64() as Long);
          break;
        case 4:
          message.fee = longToString(reader.int64() as Long);
          break;
        case 5:
          message.expiry = reader.uint32();
          break;
        case 6:
          message.amtToForwardMsat = longToString(reader.int64() as Long);
          break;
        case 7:
          message.feeMsat = longToString(reader.int64() as Long);
          break;
        case 8:
          message.pubKey = reader.string();
          break;
        case 9:
          message.tlvPayload = reader.bool();
          break;
        case 10:
          message.mppRecord = MPPRecord.decode(reader, reader.uint32());
          break;
        case 12:
          message.ampRecord = AMPRecord.decode(reader, reader.uint32());
          break;
        case 11:
          const entry11 = Hop_CustomRecordsEntry.decode(
            reader,
            reader.uint32(),
          );
          if (entry11.value !== undefined) {
            message.customRecords[entry11.key] = entry11.value;
          }

          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Hop {
    const message = createBaseHop();
    message.chanId =
      object.chanId !== undefined && object.chanId !== null
        ? String(object.chanId)
        : '0';
    message.chanCapacity =
      object.chanCapacity !== undefined && object.chanCapacity !== null
        ? String(object.chanCapacity)
        : '0';
    message.amtToForward =
      object.amtToForward !== undefined && object.amtToForward !== null
        ? String(object.amtToForward)
        : '0';
    message.fee =
      object.fee !== undefined && object.fee !== null
        ? String(object.fee)
        : '0';
    message.expiry =
      object.expiry !== undefined && object.expiry !== null
        ? Number(object.expiry)
        : 0;
    message.amtToForwardMsat =
      object.amtToForwardMsat !== undefined && object.amtToForwardMsat !== null
        ? String(object.amtToForwardMsat)
        : '0';
    message.feeMsat =
      object.feeMsat !== undefined && object.feeMsat !== null
        ? String(object.feeMsat)
        : '0';
    message.pubKey =
      object.pubKey !== undefined && object.pubKey !== null
        ? String(object.pubKey)
        : '';
    message.tlvPayload =
      object.tlvPayload !== undefined && object.tlvPayload !== null
        ? Boolean(object.tlvPayload)
        : false;
    message.mppRecord =
      object.mppRecord !== undefined && object.mppRecord !== null
        ? MPPRecord.fromJSON(object.mppRecord)
        : undefined;
    message.ampRecord =
      object.ampRecord !== undefined && object.ampRecord !== null
        ? AMPRecord.fromJSON(object.ampRecord)
        : undefined;
    message.customRecords = Object.entries(object.customRecords ?? {}).reduce<
      Record<string, Uint8Array>
    >((acc, [key, value]) => {
      acc[key] = bytesFromBase64(value as string);
      return acc;
    }, {});
    return message;
  },

  toJSON(message: Hop): unknown {
    const object: any = {};
    message.chanId !== undefined && (object.chanId = message.chanId);
    message.chanCapacity !== undefined &&
      (object.chanCapacity = message.chanCapacity);
    message.amtToForward !== undefined &&
      (object.amtToForward = message.amtToForward);
    message.fee !== undefined && (object.fee = message.fee);
    message.expiry !== undefined &&
      (object.expiry = Math.round(message.expiry));
    message.amtToForwardMsat !== undefined &&
      (object.amtToForwardMsat = message.amtToForwardMsat);
    message.feeMsat !== undefined && (object.feeMsat = message.feeMsat);
    message.pubKey !== undefined && (object.pubKey = message.pubKey);
    message.tlvPayload !== undefined &&
      (object.tlvPayload = message.tlvPayload);
    message.mppRecord !== undefined &&
      (object.mppRecord = message.mppRecord
        ? MPPRecord.toJSON(message.mppRecord)
        : undefined);
    message.ampRecord !== undefined &&
      (object.ampRecord = message.ampRecord
        ? AMPRecord.toJSON(message.ampRecord)
        : undefined);
    object.customRecords = {};
    if (message.customRecords) {
      for (const [k, v] of Object.entries(message.customRecords)) {
        object.customRecords[k] = base64FromBytes(v);
      }
    }

    return object;
  },

  fromPartial(object: DeepPartial<Hop>): Hop {
    const message = createBaseHop();
    message.chanId = object.chanId ?? '0';
    message.chanCapacity = object.chanCapacity ?? '0';
    message.amtToForward = object.amtToForward ?? '0';
    message.fee = object.fee ?? '0';
    message.expiry = object.expiry ?? 0;
    message.amtToForwardMsat = object.amtToForwardMsat ?? '0';
    message.feeMsat = object.feeMsat ?? '0';
    message.pubKey = object.pubKey ?? '';
    message.tlvPayload = object.tlvPayload ?? false;
    message.mppRecord =
      object.mppRecord !== undefined && object.mppRecord !== null
        ? MPPRecord.fromPartial(object.mppRecord)
        : undefined;
    message.ampRecord =
      object.ampRecord !== undefined && object.ampRecord !== null
        ? AMPRecord.fromPartial(object.ampRecord)
        : undefined;
    message.customRecords = Object.entries(object.customRecords ?? {}).reduce<
      Record<string, Uint8Array>
    >((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = value;
      }

      return acc;
    }, {});
    return message;
  },
};

function createBaseHop_CustomRecordsEntry(): Hop_CustomRecordsEntry {
  return {key: '0', value: new Uint8Array()};
}

export const Hop_CustomRecordsEntry = {
  encode(
    message: Hop_CustomRecordsEntry,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.key !== '0') {
      writer.uint32(8).uint64(message.key);
    }

    if (message.value.length > 0) {
      writer.uint32(18).bytes(message.value);
    }

    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Hop_CustomRecordsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHop_CustomRecordsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.value = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Hop_CustomRecordsEntry {
    const message = createBaseHop_CustomRecordsEntry();
    message.key =
      object.key !== undefined && object.key !== null
        ? String(object.key)
        : '0';
    message.value =
      object.value !== undefined && object.value !== null
        ? bytesFromBase64(object.value)
        : new Uint8Array();
    return message;
  },

  toJSON(message: Hop_CustomRecordsEntry): unknown {
    const object: any = {};
    message.key !== undefined && (object.key = message.key);
    message.value !== undefined &&
      (object.value = base64FromBytes(
        message.value !== undefined ? message.value : new Uint8Array(),
      ));
    return object;
  },

  fromPartial(
    object: DeepPartial<Hop_CustomRecordsEntry>,
  ): Hop_CustomRecordsEntry {
    const message = createBaseHop_CustomRecordsEntry();
    message.key = object.key ?? '0';
    message.value = object.value ?? new Uint8Array();
    return message;
  },
};

function createBaseMPPRecord(): MPPRecord {
  return {paymentAddr: new Uint8Array(), totalAmtMsat: '0'};
}

export const MPPRecord = {
  encode(
    message: MPPRecord,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.paymentAddr.length > 0) {
      writer.uint32(90).bytes(message.paymentAddr);
    }

    if (message.totalAmtMsat !== '0') {
      writer.uint32(80).int64(message.totalAmtMsat);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MPPRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMPPRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 11:
          message.paymentAddr = reader.bytes();
          break;
        case 10:
          message.totalAmtMsat = longToString(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MPPRecord {
    const message = createBaseMPPRecord();
    message.paymentAddr =
      object.paymentAddr !== undefined && object.paymentAddr !== null
        ? bytesFromBase64(object.paymentAddr)
        : new Uint8Array();
    message.totalAmtMsat =
      object.totalAmtMsat !== undefined && object.totalAmtMsat !== null
        ? String(object.totalAmtMsat)
        : '0';
    return message;
  },

  toJSON(message: MPPRecord): unknown {
    const object: any = {};
    message.paymentAddr !== undefined &&
      (object.paymentAddr = base64FromBytes(
        message.paymentAddr !== undefined
          ? message.paymentAddr
          : new Uint8Array(),
      ));
    message.totalAmtMsat !== undefined &&
      (object.totalAmtMsat = message.totalAmtMsat);
    return object;
  },

  fromPartial(object: DeepPartial<MPPRecord>): MPPRecord {
    const message = createBaseMPPRecord();
    message.paymentAddr = object.paymentAddr ?? new Uint8Array();
    message.totalAmtMsat = object.totalAmtMsat ?? '0';
    return message;
  },
};

function createBaseAMPRecord(): AMPRecord {
  return {
    rootShare: new Uint8Array(),
    setId: new Uint8Array(),
    childIndex: 0,
  };
}

export const AMPRecord = {
  encode(
    message: AMPRecord,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.rootShare.length > 0) {
      writer.uint32(10).bytes(message.rootShare);
    }

    if (message.setId.length > 0) {
      writer.uint32(18).bytes(message.setId);
    }

    if (message.childIndex !== 0) {
      writer.uint32(24).uint32(message.childIndex);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AMPRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAMPRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rootShare = reader.bytes();
          break;
        case 2:
          message.setId = reader.bytes();
          break;
        case 3:
          message.childIndex = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): AMPRecord {
    const message = createBaseAMPRecord();
    message.rootShare =
      object.rootShare !== undefined && object.rootShare !== null
        ? bytesFromBase64(object.rootShare)
        : new Uint8Array();
    message.setId =
      object.setId !== undefined && object.setId !== null
        ? bytesFromBase64(object.setId)
        : new Uint8Array();
    message.childIndex =
      object.childIndex !== undefined && object.childIndex !== null
        ? Number(object.childIndex)
        : 0;
    return message;
  },

  toJSON(message: AMPRecord): unknown {
    const object: any = {};
    message.rootShare !== undefined &&
      (object.rootShare = base64FromBytes(
        message.rootShare !== undefined ? message.rootShare : new Uint8Array(),
      ));
    message.setId !== undefined &&
      (object.setId = base64FromBytes(
        message.setId !== undefined ? message.setId : new Uint8Array(),
      ));
    message.childIndex !== undefined &&
      (object.childIndex = Math.round(message.childIndex));
    return object;
  },

  fromPartial(object: DeepPartial<AMPRecord>): AMPRecord {
    const message = createBaseAMPRecord();
    message.rootShare = object.rootShare ?? new Uint8Array();
    message.setId = object.setId ?? new Uint8Array();
    message.childIndex = object.childIndex ?? 0;
    return message;
  },
};

function createBaseRoute(): Route {
  return {
    totalTimeLock: 0,
    totalFees: '0',
    totalAmt: '0',
    hops: [],
    totalFeesMsat: '0',
    totalAmtMsat: '0',
  };
}

export const Route = {
  encode(message: Route, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.totalTimeLock !== 0) {
      writer.uint32(8).uint32(message.totalTimeLock);
    }

    if (message.totalFees !== '0') {
      writer.uint32(16).int64(message.totalFees);
    }

    if (message.totalAmt !== '0') {
      writer.uint32(24).int64(message.totalAmt);
    }

    for (const v of message.hops) {
      Hop.encode(v, writer.uint32(34).fork()).ldelim();
    }

    if (message.totalFeesMsat !== '0') {
      writer.uint32(40).int64(message.totalFeesMsat);
    }

    if (message.totalAmtMsat !== '0') {
      writer.uint32(48).int64(message.totalAmtMsat);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Route {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRoute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalTimeLock = reader.uint32();
          break;
        case 2:
          message.totalFees = longToString(reader.int64() as Long);
          break;
        case 3:
          message.totalAmt = longToString(reader.int64() as Long);
          break;
        case 4:
          message.hops.push(Hop.decode(reader, reader.uint32()));
          break;
        case 5:
          message.totalFeesMsat = longToString(reader.int64() as Long);
          break;
        case 6:
          message.totalAmtMsat = longToString(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Route {
    const message = createBaseRoute();
    message.totalTimeLock =
      object.totalTimeLock !== undefined && object.totalTimeLock !== null
        ? Number(object.totalTimeLock)
        : 0;
    message.totalFees =
      object.totalFees !== undefined && object.totalFees !== null
        ? String(object.totalFees)
        : '0';
    message.totalAmt =
      object.totalAmt !== undefined && object.totalAmt !== null
        ? String(object.totalAmt)
        : '0';
    message.hops = (object.hops ?? []).map((e: any) => Hop.fromJSON(e));
    message.totalFeesMsat =
      object.totalFeesMsat !== undefined && object.totalFeesMsat !== null
        ? String(object.totalFeesMsat)
        : '0';
    message.totalAmtMsat =
      object.totalAmtMsat !== undefined && object.totalAmtMsat !== null
        ? String(object.totalAmtMsat)
        : '0';
    return message;
  },

  toJSON(message: Route): unknown {
    const object: any = {};
    message.totalTimeLock !== undefined &&
      (object.totalTimeLock = Math.round(message.totalTimeLock));
    message.totalFees !== undefined && (object.totalFees = message.totalFees);
    message.totalAmt !== undefined && (object.totalAmt = message.totalAmt);
    object.hops = message.hops
      ? message.hops.map((e) => (e ? Hop.toJSON(e) : undefined))
      : [];
    message.totalFeesMsat !== undefined &&
      (object.totalFeesMsat = message.totalFeesMsat);
    message.totalAmtMsat !== undefined &&
      (object.totalAmtMsat = message.totalAmtMsat);
    return object;
  },

  fromPartial(object: DeepPartial<Route>): Route {
    const message = createBaseRoute();
    message.totalTimeLock = object.totalTimeLock ?? 0;
    message.totalFees = object.totalFees ?? '0';
    message.totalAmt = object.totalAmt ?? '0';
    message.hops = object.hops?.map((e) => Hop.fromPartial(e)) || [];
    message.totalFeesMsat = object.totalFeesMsat ?? '0';
    message.totalAmtMsat = object.totalAmtMsat ?? '0';
    return message;
  },
};

function createBaseNodeInfoRequest(): NodeInfoRequest {
  return {pubKey: '', includeChannels: false};
}

export const NodeInfoRequest = {
  encode(
    message: NodeInfoRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.pubKey !== '') {
      writer.uint32(10).string(message.pubKey);
    }

    if (message.includeChannels) {
      writer.uint32(16).bool(message.includeChannels);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NodeInfoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNodeInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pubKey = reader.string();
          break;
        case 2:
          message.includeChannels = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): NodeInfoRequest {
    const message = createBaseNodeInfoRequest();
    message.pubKey =
      object.pubKey !== undefined && object.pubKey !== null
        ? String(object.pubKey)
        : '';
    message.includeChannels =
      object.includeChannels !== undefined && object.includeChannels !== null
        ? Boolean(object.includeChannels)
        : false;
    return message;
  },

  toJSON(message: NodeInfoRequest): unknown {
    const object: any = {};
    message.pubKey !== undefined && (object.pubKey = message.pubKey);
    message.includeChannels !== undefined &&
      (object.includeChannels = message.includeChannels);
    return object;
  },

  fromPartial(object: DeepPartial<NodeInfoRequest>): NodeInfoRequest {
    const message = createBaseNodeInfoRequest();
    message.pubKey = object.pubKey ?? '';
    message.includeChannels = object.includeChannels ?? false;
    return message;
  },
};

function createBaseNodeInfo(): NodeInfo {
  return {node: undefined, numChannels: 0, totalCapacity: '0', channels: []};
}

export const NodeInfo = {
  encode(
    message: NodeInfo,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.node !== undefined) {
      LightningNode.encode(message.node, writer.uint32(10).fork()).ldelim();
    }

    if (message.numChannels !== 0) {
      writer.uint32(16).uint32(message.numChannels);
    }

    if (message.totalCapacity !== '0') {
      writer.uint32(24).int64(message.totalCapacity);
    }

    for (const v of message.channels) {
      ChannelEdge.encode(v, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NodeInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNodeInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.node = LightningNode.decode(reader, reader.uint32());
          break;
        case 2:
          message.numChannels = reader.uint32();
          break;
        case 3:
          message.totalCapacity = longToString(reader.int64() as Long);
          break;
        case 4:
          message.channels.push(ChannelEdge.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): NodeInfo {
    const message = createBaseNodeInfo();
    message.node =
      object.node !== undefined && object.node !== null
        ? LightningNode.fromJSON(object.node)
        : undefined;
    message.numChannels =
      object.numChannels !== undefined && object.numChannels !== null
        ? Number(object.numChannels)
        : 0;
    message.totalCapacity =
      object.totalCapacity !== undefined && object.totalCapacity !== null
        ? String(object.totalCapacity)
        : '0';
    message.channels = (object.channels ?? []).map((e: any) =>
      ChannelEdge.fromJSON(e),
    );
    return message;
  },

  toJSON(message: NodeInfo): unknown {
    const object: any = {};
    message.node !== undefined &&
      (object.node = message.node
        ? LightningNode.toJSON(message.node)
        : undefined);
    message.numChannels !== undefined &&
      (object.numChannels = Math.round(message.numChannels));
    message.totalCapacity !== undefined &&
      (object.totalCapacity = message.totalCapacity);
    if (message.channels) {
      object.channels = message.channels.map((e) =>
        e ? ChannelEdge.toJSON(e) : undefined,
      );
    } else {
      object.channels = [];
    }

    return object;
  },

  fromPartial(object: DeepPartial<NodeInfo>): NodeInfo {
    const message = createBaseNodeInfo();
    message.node =
      object.node !== undefined && object.node !== null
        ? LightningNode.fromPartial(object.node)
        : undefined;
    message.numChannels = object.numChannels ?? 0;
    message.totalCapacity = object.totalCapacity ?? '0';
    message.channels =
      object.channels?.map((e) => ChannelEdge.fromPartial(e)) || [];
    return message;
  },
};

function createBaseLightningNode(): LightningNode {
  return {
    lastUpdate: 0,
    pubKey: '',
    alias: '',
    addresses: [],
    color: '',
    features: {},
  };
}

export const LightningNode = {
  encode(
    message: LightningNode,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.lastUpdate !== 0) {
      writer.uint32(8).uint32(message.lastUpdate);
    }

    if (message.pubKey !== '') {
      writer.uint32(18).string(message.pubKey);
    }

    if (message.alias !== '') {
      writer.uint32(26).string(message.alias);
    }

    for (const v of message.addresses) {
      NodeAddress.encode(v, writer.uint32(34).fork()).ldelim();
    }

    if (message.color !== '') {
      writer.uint32(42).string(message.color);
    }

    for (const [key, value] of Object.entries(message.features)) {
      LightningNode_FeaturesEntry.encode(
        {key: key as any, value},
        writer.uint32(50).fork(),
      ).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LightningNode {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLightningNode();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lastUpdate = reader.uint32();
          break;
        case 2:
          message.pubKey = reader.string();
          break;
        case 3:
          message.alias = reader.string();
          break;
        case 4:
          message.addresses.push(NodeAddress.decode(reader, reader.uint32()));
          break;
        case 5:
          message.color = reader.string();
          break;
        case 6:
          const entry6 = LightningNode_FeaturesEntry.decode(
            reader,
            reader.uint32(),
          );
          if (entry6.value !== undefined) {
            message.features[entry6.key] = entry6.value;
          }

          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): LightningNode {
    const message = createBaseLightningNode();
    message.lastUpdate =
      object.lastUpdate !== undefined && object.lastUpdate !== null
        ? Number(object.lastUpdate)
        : 0;
    message.pubKey =
      object.pubKey !== undefined && object.pubKey !== null
        ? String(object.pubKey)
        : '';
    message.alias =
      object.alias !== undefined && object.alias !== null
        ? String(object.alias)
        : '';
    message.addresses = (object.addresses ?? []).map((e: any) =>
      NodeAddress.fromJSON(e),
    );
    message.color =
      object.color !== undefined && object.color !== null
        ? String(object.color)
        : '';
    message.features = Object.entries(object.features ?? {}).reduce<
      Record<number, Feature>
    >((acc, [key, value]) => {
      acc[Number(key)] = Feature.fromJSON(value);
      return acc;
    }, {});
    return message;
  },

  toJSON(message: LightningNode): unknown {
    const object: any = {};
    message.lastUpdate !== undefined &&
      (object.lastUpdate = Math.round(message.lastUpdate));
    message.pubKey !== undefined && (object.pubKey = message.pubKey);
    message.alias !== undefined && (object.alias = message.alias);
    if (message.addresses) {
      object.addresses = message.addresses.map((e) =>
        e ? NodeAddress.toJSON(e) : undefined,
      );
    } else {
      object.addresses = [];
    }

    message.color !== undefined && (object.color = message.color);
    object.features = {};
    if (message.features) {
      for (const [k, v] of Object.entries(message.features)) {
        object.features[k] = Feature.toJSON(v);
      }
    }

    return object;
  },

  fromPartial(object: DeepPartial<LightningNode>): LightningNode {
    const message = createBaseLightningNode();
    message.lastUpdate = object.lastUpdate ?? 0;
    message.pubKey = object.pubKey ?? '';
    message.alias = object.alias ?? '';
    message.addresses =
      object.addresses?.map((e) => NodeAddress.fromPartial(e)) || [];
    message.color = object.color ?? '';
    message.features = Object.entries(object.features ?? {}).reduce<
      Record<number, Feature>
    >((acc, [key, value]) => {
      if (value !== undefined) {
        acc[Number(key)] = Feature.fromPartial(value);
      }

      return acc;
    }, {});
    return message;
  },
};

function createBaseLightningNode_FeaturesEntry(): LightningNode_FeaturesEntry {
  return {key: 0, value: undefined};
}

export const LightningNode_FeaturesEntry = {
  encode(
    message: LightningNode_FeaturesEntry,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).uint32(message.key);
    }

    if (message.value !== undefined) {
      Feature.encode(message.value, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): LightningNode_FeaturesEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLightningNode_FeaturesEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.uint32();
          break;
        case 2:
          message.value = Feature.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): LightningNode_FeaturesEntry {
    const message = createBaseLightningNode_FeaturesEntry();
    message.key =
      object.key !== undefined && object.key !== null ? Number(object.key) : 0;
    message.value =
      object.value !== undefined && object.value !== null
        ? Feature.fromJSON(object.value)
        : undefined;
    return message;
  },

  toJSON(message: LightningNode_FeaturesEntry): unknown {
    const object: any = {};
    message.key !== undefined && (object.key = Math.round(message.key));
    message.value !== undefined &&
      (object.value = message.value
        ? Feature.toJSON(message.value)
        : undefined);
    return object;
  },

  fromPartial(
    object: DeepPartial<LightningNode_FeaturesEntry>,
  ): LightningNode_FeaturesEntry {
    const message = createBaseLightningNode_FeaturesEntry();
    message.key = object.key ?? 0;
    message.value =
      object.value !== undefined && object.value !== null
        ? Feature.fromPartial(object.value)
        : undefined;
    return message;
  },
};

function createBaseNodeAddress(): NodeAddress {
  return {network: '', addr: ''};
}

export const NodeAddress = {
  encode(
    message: NodeAddress,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.network !== '') {
      writer.uint32(10).string(message.network);
    }

    if (message.addr !== '') {
      writer.uint32(18).string(message.addr);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NodeAddress {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNodeAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.network = reader.string();
          break;
        case 2:
          message.addr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): NodeAddress {
    const message = createBaseNodeAddress();
    message.network =
      object.network !== undefined && object.network !== null
        ? String(object.network)
        : '';
    message.addr =
      object.addr !== undefined && object.addr !== null
        ? String(object.addr)
        : '';
    return message;
  },

  toJSON(message: NodeAddress): unknown {
    const object: any = {};
    message.network !== undefined && (object.network = message.network);
    message.addr !== undefined && (object.addr = message.addr);
    return object;
  },

  fromPartial(object: DeepPartial<NodeAddress>): NodeAddress {
    const message = createBaseNodeAddress();
    message.network = object.network ?? '';
    message.addr = object.addr ?? '';
    return message;
  },
};

function createBaseRoutingPolicy(): RoutingPolicy {
  return {
    timeLockDelta: 0,
    minHtlc: '0',
    feeBaseMsat: '0',
    feeRateMilliMsat: '0',
    disabled: false,
    maxHtlcMsat: '0',
    lastUpdate: 0,
  };
}

export const RoutingPolicy = {
  encode(
    message: RoutingPolicy,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.timeLockDelta !== 0) {
      writer.uint32(8).uint32(message.timeLockDelta);
    }

    if (message.minHtlc !== '0') {
      writer.uint32(16).int64(message.minHtlc);
    }

    if (message.feeBaseMsat !== '0') {
      writer.uint32(24).int64(message.feeBaseMsat);
    }

    if (message.feeRateMilliMsat !== '0') {
      writer.uint32(32).int64(message.feeRateMilliMsat);
    }

    if (message.disabled) {
      writer.uint32(40).bool(message.disabled);
    }

    if (message.maxHtlcMsat !== '0') {
      writer.uint32(48).uint64(message.maxHtlcMsat);
    }

    if (message.lastUpdate !== 0) {
      writer.uint32(56).uint32(message.lastUpdate);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RoutingPolicy {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRoutingPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timeLockDelta = reader.uint32();
          break;
        case 2:
          message.minHtlc = longToString(reader.int64() as Long);
          break;
        case 3:
          message.feeBaseMsat = longToString(reader.int64() as Long);
          break;
        case 4:
          message.feeRateMilliMsat = longToString(reader.int64() as Long);
          break;
        case 5:
          message.disabled = reader.bool();
          break;
        case 6:
          message.maxHtlcMsat = longToString(reader.uint64() as Long);
          break;
        case 7:
          message.lastUpdate = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): RoutingPolicy {
    const message = createBaseRoutingPolicy();
    message.timeLockDelta =
      object.timeLockDelta !== undefined && object.timeLockDelta !== null
        ? Number(object.timeLockDelta)
        : 0;
    message.minHtlc =
      object.minHtlc !== undefined && object.minHtlc !== null
        ? String(object.minHtlc)
        : '0';
    message.feeBaseMsat =
      object.feeBaseMsat !== undefined && object.feeBaseMsat !== null
        ? String(object.feeBaseMsat)
        : '0';
    message.feeRateMilliMsat =
      object.feeRateMilliMsat !== undefined && object.feeRateMilliMsat !== null
        ? String(object.feeRateMilliMsat)
        : '0';
    message.disabled =
      object.disabled !== undefined && object.disabled !== null
        ? Boolean(object.disabled)
        : false;
    message.maxHtlcMsat =
      object.maxHtlcMsat !== undefined && object.maxHtlcMsat !== null
        ? String(object.maxHtlcMsat)
        : '0';
    message.lastUpdate =
      object.lastUpdate !== undefined && object.lastUpdate !== null
        ? Number(object.lastUpdate)
        : 0;
    return message;
  },

  toJSON(message: RoutingPolicy): unknown {
    const object: any = {};
    message.timeLockDelta !== undefined &&
      (object.timeLockDelta = Math.round(message.timeLockDelta));
    message.minHtlc !== undefined && (object.minHtlc = message.minHtlc);
    message.feeBaseMsat !== undefined &&
      (object.feeBaseMsat = message.feeBaseMsat);
    message.feeRateMilliMsat !== undefined &&
      (object.feeRateMilliMsat = message.feeRateMilliMsat);
    message.disabled !== undefined && (object.disabled = message.disabled);
    message.maxHtlcMsat !== undefined &&
      (object.maxHtlcMsat = message.maxHtlcMsat);
    message.lastUpdate !== undefined &&
      (object.lastUpdate = Math.round(message.lastUpdate));
    return object;
  },

  fromPartial(object: DeepPartial<RoutingPolicy>): RoutingPolicy {
    const message = createBaseRoutingPolicy();
    message.timeLockDelta = object.timeLockDelta ?? 0;
    message.minHtlc = object.minHtlc ?? '0';
    message.feeBaseMsat = object.feeBaseMsat ?? '0';
    message.feeRateMilliMsat = object.feeRateMilliMsat ?? '0';
    message.disabled = object.disabled ?? false;
    message.maxHtlcMsat = object.maxHtlcMsat ?? '0';
    message.lastUpdate = object.lastUpdate ?? 0;
    return message;
  },
};

function createBaseChannelEdge(): ChannelEdge {
  return {
    channelId: '0',
    chanPoint: '',
    lastUpdate: 0,
    node1Pub: '',
    node2Pub: '',
    capacity: '0',
    node1Policy: undefined,
    node2Policy: undefined,
  };
}

export const ChannelEdge = {
  encode(
    message: ChannelEdge,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.channelId !== '0') {
      writer.uint32(8).uint64(message.channelId);
    }

    if (message.chanPoint !== '') {
      writer.uint32(18).string(message.chanPoint);
    }

    if (message.lastUpdate !== 0) {
      writer.uint32(24).uint32(message.lastUpdate);
    }

    if (message.node1Pub !== '') {
      writer.uint32(34).string(message.node1Pub);
    }

    if (message.node2Pub !== '') {
      writer.uint32(42).string(message.node2Pub);
    }

    if (message.capacity !== '0') {
      writer.uint32(48).int64(message.capacity);
    }

    if (message.node1Policy !== undefined) {
      RoutingPolicy.encode(
        message.node1Policy,
        writer.uint32(58).fork(),
      ).ldelim();
    }

    if (message.node2Policy !== undefined) {
      RoutingPolicy.encode(
        message.node2Policy,
        writer.uint32(66).fork(),
      ).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChannelEdge {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChannelEdge();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channelId = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.chanPoint = reader.string();
          break;
        case 3:
          message.lastUpdate = reader.uint32();
          break;
        case 4:
          message.node1Pub = reader.string();
          break;
        case 5:
          message.node2Pub = reader.string();
          break;
        case 6:
          message.capacity = longToString(reader.int64() as Long);
          break;
        case 7:
          message.node1Policy = RoutingPolicy.decode(reader, reader.uint32());
          break;
        case 8:
          message.node2Policy = RoutingPolicy.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ChannelEdge {
    const message = createBaseChannelEdge();
    message.channelId =
      object.channelId !== undefined && object.channelId !== null
        ? String(object.channelId)
        : '0';
    message.chanPoint =
      object.chanPoint !== undefined && object.chanPoint !== null
        ? String(object.chanPoint)
        : '';
    message.lastUpdate =
      object.lastUpdate !== undefined && object.lastUpdate !== null
        ? Number(object.lastUpdate)
        : 0;
    message.node1Pub =
      object.node1Pub !== undefined && object.node1Pub !== null
        ? String(object.node1Pub)
        : '';
    message.node2Pub =
      object.node2Pub !== undefined && object.node2Pub !== null
        ? String(object.node2Pub)
        : '';
    message.capacity =
      object.capacity !== undefined && object.capacity !== null
        ? String(object.capacity)
        : '0';
    message.node1Policy =
      object.node1Policy !== undefined && object.node1Policy !== null
        ? RoutingPolicy.fromJSON(object.node1Policy)
        : undefined;
    message.node2Policy =
      object.node2Policy !== undefined && object.node2Policy !== null
        ? RoutingPolicy.fromJSON(object.node2Policy)
        : undefined;
    return message;
  },

  toJSON(message: ChannelEdge): unknown {
    const object: any = {};
    message.channelId !== undefined && (object.channelId = message.channelId);
    message.chanPoint !== undefined && (object.chanPoint = message.chanPoint);
    message.lastUpdate !== undefined &&
      (object.lastUpdate = Math.round(message.lastUpdate));
    message.node1Pub !== undefined && (object.node1Pub = message.node1Pub);
    message.node2Pub !== undefined && (object.node2Pub = message.node2Pub);
    message.capacity !== undefined && (object.capacity = message.capacity);
    message.node1Policy !== undefined &&
      (object.node1Policy = message.node1Policy
        ? RoutingPolicy.toJSON(message.node1Policy)
        : undefined);
    message.node2Policy !== undefined &&
      (object.node2Policy = message.node2Policy
        ? RoutingPolicy.toJSON(message.node2Policy)
        : undefined);
    return object;
  },

  fromPartial(object: DeepPartial<ChannelEdge>): ChannelEdge {
    const message = createBaseChannelEdge();
    message.channelId = object.channelId ?? '0';
    message.chanPoint = object.chanPoint ?? '';
    message.lastUpdate = object.lastUpdate ?? 0;
    message.node1Pub = object.node1Pub ?? '';
    message.node2Pub = object.node2Pub ?? '';
    message.capacity = object.capacity ?? '0';
    message.node1Policy =
      object.node1Policy !== undefined && object.node1Policy !== null
        ? RoutingPolicy.fromPartial(object.node1Policy)
        : undefined;
    message.node2Policy =
      object.node2Policy !== undefined && object.node2Policy !== null
        ? RoutingPolicy.fromPartial(object.node2Policy)
        : undefined;
    return message;
  },
};

function createBaseChannelGraphRequest(): ChannelGraphRequest {
  return {includeUnannounced: false};
}

export const ChannelGraphRequest = {
  encode(
    message: ChannelGraphRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.includeUnannounced) {
      writer.uint32(8).bool(message.includeUnannounced);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChannelGraphRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChannelGraphRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.includeUnannounced = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ChannelGraphRequest {
    const message = createBaseChannelGraphRequest();
    message.includeUnannounced =
      object.includeUnannounced !== undefined &&
      object.includeUnannounced !== null
        ? Boolean(object.includeUnannounced)
        : false;
    return message;
  },

  toJSON(message: ChannelGraphRequest): unknown {
    const object: any = {};
    message.includeUnannounced !== undefined &&
      (object.includeUnannounced = message.includeUnannounced);
    return object;
  },

  fromPartial(object: DeepPartial<ChannelGraphRequest>): ChannelGraphRequest {
    const message = createBaseChannelGraphRequest();
    message.includeUnannounced = object.includeUnannounced ?? false;
    return message;
  },
};

function createBaseChannelGraph(): ChannelGraph {
  return {nodes: [], edges: []};
}

export const ChannelGraph = {
  encode(
    message: ChannelGraph,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.nodes) {
      LightningNode.encode(v, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.edges) {
      ChannelEdge.encode(v, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChannelGraph {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChannelGraph();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nodes.push(LightningNode.decode(reader, reader.uint32()));
          break;
        case 2:
          message.edges.push(ChannelEdge.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ChannelGraph {
    const message = createBaseChannelGraph();
    message.nodes = (object.nodes ?? []).map((e: any) =>
      LightningNode.fromJSON(e),
    );
    message.edges = (object.edges ?? []).map((e: any) =>
      ChannelEdge.fromJSON(e),
    );
    return message;
  },

  toJSON(message: ChannelGraph): unknown {
    const object: any = {};
    if (message.nodes) {
      object.nodes = message.nodes.map((e) =>
        e ? LightningNode.toJSON(e) : undefined,
      );
    } else {
      object.nodes = [];
    }

    if (message.edges) {
      object.edges = message.edges.map((e) =>
        e ? ChannelEdge.toJSON(e) : undefined,
      );
    } else {
      object.edges = [];
    }

    return object;
  },

  fromPartial(object: DeepPartial<ChannelGraph>): ChannelGraph {
    const message = createBaseChannelGraph();
    message.nodes =
      object.nodes?.map((e) => LightningNode.fromPartial(e)) || [];
    message.edges = object.edges?.map((e) => ChannelEdge.fromPartial(e)) || [];
    return message;
  },
};

function createBaseNodeMetricsRequest(): NodeMetricsRequest {
  return {types: []};
}

export const NodeMetricsRequest = {
  encode(
    message: NodeMetricsRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.types) {
      writer.int32(v);
    }

    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NodeMetricsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNodeMetricsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.types.push(reader.int32() as any);
            }
          } else {
            message.types.push(reader.int32() as any);
          }

          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): NodeMetricsRequest {
    const message = createBaseNodeMetricsRequest();
    message.types = (object.types ?? []).map((e: any) =>
      nodeMetricTypeFromJSON(e),
    );
    return message;
  },

  toJSON(message: NodeMetricsRequest): unknown {
    const object: any = {};
    object.types = message.types
      ? message.types.map((e) => nodeMetricTypeToJSON(e))
      : [];
    return object;
  },

  fromPartial(object: DeepPartial<NodeMetricsRequest>): NodeMetricsRequest {
    const message = createBaseNodeMetricsRequest();
    message.types = object.types?.map((e) => e) || [];
    return message;
  },
};

function createBaseNodeMetricsResponse(): NodeMetricsResponse {
  return {betweennessCentrality: {}};
}

export const NodeMetricsResponse = {
  encode(
    message: NodeMetricsResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const [key, value] of Object.entries(message.betweennessCentrality)) {
      NodeMetricsResponse_BetweennessCentralityEntry.encode(
        {key: key as any, value},
        writer.uint32(10).fork(),
      ).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NodeMetricsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNodeMetricsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = NodeMetricsResponse_BetweennessCentralityEntry.decode(
            reader,
            reader.uint32(),
          );
          if (entry1.value !== undefined) {
            message.betweennessCentrality[entry1.key] = entry1.value;
          }

          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): NodeMetricsResponse {
    const message = createBaseNodeMetricsResponse();
    message.betweennessCentrality = Object.entries(
      object.betweennessCentrality ?? {},
    ).reduce<Record<string, FloatMetric>>((acc, [key, value]) => {
      acc[key] = FloatMetric.fromJSON(value);
      return acc;
    }, {});
    return message;
  },

  toJSON(message: NodeMetricsResponse): unknown {
    const object: any = {};
    object.betweennessCentrality = {};
    if (message.betweennessCentrality) {
      for (const [k, v] of Object.entries(message.betweennessCentrality)) {
        object.betweennessCentrality[k] = FloatMetric.toJSON(v);
      }
    }

    return object;
  },

  fromPartial(object: DeepPartial<NodeMetricsResponse>): NodeMetricsResponse {
    const message = createBaseNodeMetricsResponse();
    message.betweennessCentrality = Object.entries(
      object.betweennessCentrality ?? {},
    ).reduce<Record<string, FloatMetric>>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = FloatMetric.fromPartial(value);
      }

      return acc;
    }, {});
    return message;
  },
};

function createBaseNodeMetricsResponse_BetweennessCentralityEntry(): NodeMetricsResponse_BetweennessCentralityEntry {
  return {key: '', value: undefined};
}

export const NodeMetricsResponse_BetweennessCentralityEntry = {
  encode(
    message: NodeMetricsResponse_BetweennessCentralityEntry,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.key !== '') {
      writer.uint32(10).string(message.key);
    }

    if (message.value !== undefined) {
      FloatMetric.encode(message.value, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): NodeMetricsResponse_BetweennessCentralityEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNodeMetricsResponse_BetweennessCentralityEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = FloatMetric.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): NodeMetricsResponse_BetweennessCentralityEntry {
    const message = createBaseNodeMetricsResponse_BetweennessCentralityEntry();
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : '';
    message.value =
      object.value !== undefined && object.value !== null
        ? FloatMetric.fromJSON(object.value)
        : undefined;
    return message;
  },

  toJSON(message: NodeMetricsResponse_BetweennessCentralityEntry): unknown {
    const object: any = {};
    message.key !== undefined && (object.key = message.key);
    message.value !== undefined &&
      (object.value = message.value
        ? FloatMetric.toJSON(message.value)
        : undefined);
    return object;
  },

  fromPartial(
    object: DeepPartial<NodeMetricsResponse_BetweennessCentralityEntry>,
  ): NodeMetricsResponse_BetweennessCentralityEntry {
    const message = createBaseNodeMetricsResponse_BetweennessCentralityEntry();
    message.key = object.key ?? '';
    message.value =
      object.value !== undefined && object.value !== null
        ? FloatMetric.fromPartial(object.value)
        : undefined;
    return message;
  },
};

function createBaseFloatMetric(): FloatMetric {
  return {value: 0, normalizedValue: 0};
}

export const FloatMetric = {
  encode(
    message: FloatMetric,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.value !== 0) {
      writer.uint32(9).double(message.value);
    }

    if (message.normalizedValue !== 0) {
      writer.uint32(17).double(message.normalizedValue);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FloatMetric {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFloatMetric();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = reader.double();
          break;
        case 2:
          message.normalizedValue = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): FloatMetric {
    const message = createBaseFloatMetric();
    message.value =
      object.value !== undefined && object.value !== null
        ? Number(object.value)
        : 0;
    message.normalizedValue =
      object.normalizedValue !== undefined && object.normalizedValue !== null
        ? Number(object.normalizedValue)
        : 0;
    return message;
  },

  toJSON(message: FloatMetric): unknown {
    const object: any = {};
    message.value !== undefined && (object.value = message.value);
    message.normalizedValue !== undefined &&
      (object.normalizedValue = message.normalizedValue);
    return object;
  },

  fromPartial(object: DeepPartial<FloatMetric>): FloatMetric {
    const message = createBaseFloatMetric();
    message.value = object.value ?? 0;
    message.normalizedValue = object.normalizedValue ?? 0;
    return message;
  },
};

function createBaseChanInfoRequest(): ChanInfoRequest {
  return {chanId: '0'};
}

export const ChanInfoRequest = {
  encode(
    message: ChanInfoRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.chanId !== '0') {
      writer.uint32(8).uint64(message.chanId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChanInfoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChanInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chanId = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ChanInfoRequest {
    const message = createBaseChanInfoRequest();
    message.chanId =
      object.chanId !== undefined && object.chanId !== null
        ? String(object.chanId)
        : '0';
    return message;
  },

  toJSON(message: ChanInfoRequest): unknown {
    const object: any = {};
    message.chanId !== undefined && (object.chanId = message.chanId);
    return object;
  },

  fromPartial(object: DeepPartial<ChanInfoRequest>): ChanInfoRequest {
    const message = createBaseChanInfoRequest();
    message.chanId = object.chanId ?? '0';
    return message;
  },
};

function createBaseNetworkInfoRequest(): NetworkInfoRequest {
  return {};
}

export const NetworkInfoRequest = {
  encode(
    _: NetworkInfoRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NetworkInfoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetworkInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): NetworkInfoRequest {
    const message = createBaseNetworkInfoRequest();
    return message;
  },

  toJSON(_: NetworkInfoRequest): unknown {
    const object: any = {};
    return object;
  },

  fromPartial(_: DeepPartial<NetworkInfoRequest>): NetworkInfoRequest {
    const message = createBaseNetworkInfoRequest();
    return message;
  },
};

function createBaseNetworkInfo(): NetworkInfo {
  return {
    graphDiameter: 0,
    avgOutDegree: 0,
    maxOutDegree: 0,
    numNodes: 0,
    numChannels: 0,
    totalNetworkCapacity: '0',
    avgChannelSize: 0,
    minChannelSize: '0',
    maxChannelSize: '0',
    medianChannelSizeSat: '0',
    numZombieChans: '0',
  };
}

export const NetworkInfo = {
  encode(
    message: NetworkInfo,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.graphDiameter !== 0) {
      writer.uint32(8).uint32(message.graphDiameter);
    }

    if (message.avgOutDegree !== 0) {
      writer.uint32(17).double(message.avgOutDegree);
    }

    if (message.maxOutDegree !== 0) {
      writer.uint32(24).uint32(message.maxOutDegree);
    }

    if (message.numNodes !== 0) {
      writer.uint32(32).uint32(message.numNodes);
    }

    if (message.numChannels !== 0) {
      writer.uint32(40).uint32(message.numChannels);
    }

    if (message.totalNetworkCapacity !== '0') {
      writer.uint32(48).int64(message.totalNetworkCapacity);
    }

    if (message.avgChannelSize !== 0) {
      writer.uint32(57).double(message.avgChannelSize);
    }

    if (message.minChannelSize !== '0') {
      writer.uint32(64).int64(message.minChannelSize);
    }

    if (message.maxChannelSize !== '0') {
      writer.uint32(72).int64(message.maxChannelSize);
    }

    if (message.medianChannelSizeSat !== '0') {
      writer.uint32(80).int64(message.medianChannelSizeSat);
    }

    if (message.numZombieChans !== '0') {
      writer.uint32(88).uint64(message.numZombieChans);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NetworkInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetworkInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.graphDiameter = reader.uint32();
          break;
        case 2:
          message.avgOutDegree = reader.double();
          break;
        case 3:
          message.maxOutDegree = reader.uint32();
          break;
        case 4:
          message.numNodes = reader.uint32();
          break;
        case 5:
          message.numChannels = reader.uint32();
          break;
        case 6:
          message.totalNetworkCapacity = longToString(reader.int64() as Long);
          break;
        case 7:
          message.avgChannelSize = reader.double();
          break;
        case 8:
          message.minChannelSize = longToString(reader.int64() as Long);
          break;
        case 9:
          message.maxChannelSize = longToString(reader.int64() as Long);
          break;
        case 10:
          message.medianChannelSizeSat = longToString(reader.int64() as Long);
          break;
        case 11:
          message.numZombieChans = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): NetworkInfo {
    const message = createBaseNetworkInfo();
    message.graphDiameter =
      object.graphDiameter !== undefined && object.graphDiameter !== null
        ? Number(object.graphDiameter)
        : 0;
    message.avgOutDegree =
      object.avgOutDegree !== undefined && object.avgOutDegree !== null
        ? Number(object.avgOutDegree)
        : 0;
    message.maxOutDegree =
      object.maxOutDegree !== undefined && object.maxOutDegree !== null
        ? Number(object.maxOutDegree)
        : 0;
    message.numNodes =
      object.numNodes !== undefined && object.numNodes !== null
        ? Number(object.numNodes)
        : 0;
    message.numChannels =
      object.numChannels !== undefined && object.numChannels !== null
        ? Number(object.numChannels)
        : 0;
    message.totalNetworkCapacity =
      object.totalNetworkCapacity !== undefined &&
      object.totalNetworkCapacity !== null
        ? String(object.totalNetworkCapacity)
        : '0';
    message.avgChannelSize =
      object.avgChannelSize !== undefined && object.avgChannelSize !== null
        ? Number(object.avgChannelSize)
        : 0;
    message.minChannelSize =
      object.minChannelSize !== undefined && object.minChannelSize !== null
        ? String(object.minChannelSize)
        : '0';
    message.maxChannelSize =
      object.maxChannelSize !== undefined && object.maxChannelSize !== null
        ? String(object.maxChannelSize)
        : '0';
    message.medianChannelSizeSat =
      object.medianChannelSizeSat !== undefined &&
      object.medianChannelSizeSat !== null
        ? String(object.medianChannelSizeSat)
        : '0';
    message.numZombieChans =
      object.numZombieChans !== undefined && object.numZombieChans !== null
        ? String(object.numZombieChans)
        : '0';
    return message;
  },

  toJSON(message: NetworkInfo): unknown {
    const object: any = {};
    message.graphDiameter !== undefined &&
      (object.graphDiameter = Math.round(message.graphDiameter));
    message.avgOutDegree !== undefined &&
      (object.avgOutDegree = message.avgOutDegree);
    message.maxOutDegree !== undefined &&
      (object.maxOutDegree = Math.round(message.maxOutDegree));
    message.numNodes !== undefined &&
      (object.numNodes = Math.round(message.numNodes));
    message.numChannels !== undefined &&
      (object.numChannels = Math.round(message.numChannels));
    message.totalNetworkCapacity !== undefined &&
      (object.totalNetworkCapacity = message.totalNetworkCapacity);
    message.avgChannelSize !== undefined &&
      (object.avgChannelSize = message.avgChannelSize);
    message.minChannelSize !== undefined &&
      (object.minChannelSize = message.minChannelSize);
    message.maxChannelSize !== undefined &&
      (object.maxChannelSize = message.maxChannelSize);
    message.medianChannelSizeSat !== undefined &&
      (object.medianChannelSizeSat = message.medianChannelSizeSat);
    message.numZombieChans !== undefined &&
      (object.numZombieChans = message.numZombieChans);
    return object;
  },

  fromPartial(object: DeepPartial<NetworkInfo>): NetworkInfo {
    const message = createBaseNetworkInfo();
    message.graphDiameter = object.graphDiameter ?? 0;
    message.avgOutDegree = object.avgOutDegree ?? 0;
    message.maxOutDegree = object.maxOutDegree ?? 0;
    message.numNodes = object.numNodes ?? 0;
    message.numChannels = object.numChannels ?? 0;
    message.totalNetworkCapacity = object.totalNetworkCapacity ?? '0';
    message.avgChannelSize = object.avgChannelSize ?? 0;
    message.minChannelSize = object.minChannelSize ?? '0';
    message.maxChannelSize = object.maxChannelSize ?? '0';
    message.medianChannelSizeSat = object.medianChannelSizeSat ?? '0';
    message.numZombieChans = object.numZombieChans ?? '0';
    return message;
  },
};

function createBaseStopRequest(): StopRequest {
  return {};
}

export const StopRequest = {
  encode(_: StopRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StopRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStopRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): StopRequest {
    const message = createBaseStopRequest();
    return message;
  },

  toJSON(_: StopRequest): unknown {
    const object: any = {};
    return object;
  },

  fromPartial(_: DeepPartial<StopRequest>): StopRequest {
    const message = createBaseStopRequest();
    return message;
  },
};

function createBaseStopResponse(): StopResponse {
  return {};
}

export const StopResponse = {
  encode(
    _: StopResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StopResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStopResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): StopResponse {
    const message = createBaseStopResponse();
    return message;
  },

  toJSON(_: StopResponse): unknown {
    const object: any = {};
    return object;
  },

  fromPartial(_: DeepPartial<StopResponse>): StopResponse {
    const message = createBaseStopResponse();
    return message;
  },
};

function createBaseGraphTopologySubscription(): GraphTopologySubscription {
  return {};
}

export const GraphTopologySubscription = {
  encode(
    _: GraphTopologySubscription,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): GraphTopologySubscription {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGraphTopologySubscription();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): GraphTopologySubscription {
    const message = createBaseGraphTopologySubscription();
    return message;
  },

  toJSON(_: GraphTopologySubscription): unknown {
    const object: any = {};
    return object;
  },

  fromPartial(
    _: DeepPartial<GraphTopologySubscription>,
  ): GraphTopologySubscription {
    const message = createBaseGraphTopologySubscription();
    return message;
  },
};

function createBaseGraphTopologyUpdate(): GraphTopologyUpdate {
  return {nodeUpdates: [], channelUpdates: [], closedChans: []};
}

export const GraphTopologyUpdate = {
  encode(
    message: GraphTopologyUpdate,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.nodeUpdates) {
      NodeUpdate.encode(v, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.channelUpdates) {
      ChannelEdgeUpdate.encode(v, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.closedChans) {
      ClosedChannelUpdate.encode(v, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GraphTopologyUpdate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGraphTopologyUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nodeUpdates.push(NodeUpdate.decode(reader, reader.uint32()));
          break;
        case 2:
          message.channelUpdates.push(
            ChannelEdgeUpdate.decode(reader, reader.uint32()),
          );
          break;
        case 3:
          message.closedChans.push(
            ClosedChannelUpdate.decode(reader, reader.uint32()),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): GraphTopologyUpdate {
    const message = createBaseGraphTopologyUpdate();
    message.nodeUpdates = (object.nodeUpdates ?? []).map((e: any) =>
      NodeUpdate.fromJSON(e),
    );
    message.channelUpdates = (object.channelUpdates ?? []).map((e: any) =>
      ChannelEdgeUpdate.fromJSON(e),
    );
    message.closedChans = (object.closedChans ?? []).map((e: any) =>
      ClosedChannelUpdate.fromJSON(e),
    );
    return message;
  },

  toJSON(message: GraphTopologyUpdate): unknown {
    const object: any = {};
    if (message.nodeUpdates) {
      object.nodeUpdates = message.nodeUpdates.map((e) =>
        e ? NodeUpdate.toJSON(e) : undefined,
      );
    } else {
      object.nodeUpdates = [];
    }

    if (message.channelUpdates) {
      object.channelUpdates = message.channelUpdates.map((e) =>
        e ? ChannelEdgeUpdate.toJSON(e) : undefined,
      );
    } else {
      object.channelUpdates = [];
    }

    if (message.closedChans) {
      object.closedChans = message.closedChans.map((e) =>
        e ? ClosedChannelUpdate.toJSON(e) : undefined,
      );
    } else {
      object.closedChans = [];
    }

    return object;
  },

  fromPartial(object: DeepPartial<GraphTopologyUpdate>): GraphTopologyUpdate {
    const message = createBaseGraphTopologyUpdate();
    message.nodeUpdates =
      object.nodeUpdates?.map((e) => NodeUpdate.fromPartial(e)) || [];
    message.channelUpdates =
      object.channelUpdates?.map((e) => ChannelEdgeUpdate.fromPartial(e)) || [];
    message.closedChans =
      object.closedChans?.map((e) => ClosedChannelUpdate.fromPartial(e)) || [];
    return message;
  },
};

function createBaseNodeUpdate(): NodeUpdate {
  return {
    addresses: [],
    identityKey: '',
    globalFeatures: new Uint8Array(),
    alias: '',
    color: '',
    nodeAddresses: [],
    features: {},
  };
}

export const NodeUpdate = {
  encode(
    message: NodeUpdate,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.addresses) {
      writer.uint32(10).string(v);
    }

    if (message.identityKey !== '') {
      writer.uint32(18).string(message.identityKey);
    }

    if (message.globalFeatures.length > 0) {
      writer.uint32(26).bytes(message.globalFeatures);
    }

    if (message.alias !== '') {
      writer.uint32(34).string(message.alias);
    }

    if (message.color !== '') {
      writer.uint32(42).string(message.color);
    }

    for (const v of message.nodeAddresses) {
      NodeAddress.encode(v, writer.uint32(58).fork()).ldelim();
    }

    for (const [key, value] of Object.entries(message.features)) {
      NodeUpdate_FeaturesEntry.encode(
        {key: key as any, value},
        writer.uint32(50).fork(),
      ).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NodeUpdate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNodeUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addresses.push(reader.string());
          break;
        case 2:
          message.identityKey = reader.string();
          break;
        case 3:
          message.globalFeatures = reader.bytes();
          break;
        case 4:
          message.alias = reader.string();
          break;
        case 5:
          message.color = reader.string();
          break;
        case 7:
          message.nodeAddresses.push(
            NodeAddress.decode(reader, reader.uint32()),
          );
          break;
        case 6:
          const entry6 = NodeUpdate_FeaturesEntry.decode(
            reader,
            reader.uint32(),
          );
          if (entry6.value !== undefined) {
            message.features[entry6.key] = entry6.value;
          }

          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): NodeUpdate {
    const message = createBaseNodeUpdate();
    message.addresses = (object.addresses ?? []).map((e: any) => String(e));
    message.identityKey =
      object.identityKey !== undefined && object.identityKey !== null
        ? String(object.identityKey)
        : '';
    message.globalFeatures =
      object.globalFeatures !== undefined && object.globalFeatures !== null
        ? bytesFromBase64(object.globalFeatures)
        : new Uint8Array();
    message.alias =
      object.alias !== undefined && object.alias !== null
        ? String(object.alias)
        : '';
    message.color =
      object.color !== undefined && object.color !== null
        ? String(object.color)
        : '';
    message.nodeAddresses = (object.nodeAddresses ?? []).map((e: any) =>
      NodeAddress.fromJSON(e),
    );
    message.features = Object.entries(object.features ?? {}).reduce<
      Record<number, Feature>
    >((acc, [key, value]) => {
      acc[Number(key)] = Feature.fromJSON(value);
      return acc;
    }, {});
    return message;
  },

  toJSON(message: NodeUpdate): unknown {
    const object: any = {};
    object.addresses = message.addresses ? message.addresses.map((e) => e) : [];
    message.identityKey !== undefined &&
      (object.identityKey = message.identityKey);
    message.globalFeatures !== undefined &&
      (object.globalFeatures = base64FromBytes(
        message.globalFeatures !== undefined
          ? message.globalFeatures
          : new Uint8Array(),
      ));
    message.alias !== undefined && (object.alias = message.alias);
    message.color !== undefined && (object.color = message.color);
    if (message.nodeAddresses) {
      object.nodeAddresses = message.nodeAddresses.map((e) =>
        e ? NodeAddress.toJSON(e) : undefined,
      );
    } else {
      object.nodeAddresses = [];
    }

    object.features = {};
    if (message.features) {
      for (const [k, v] of Object.entries(message.features)) {
        object.features[k] = Feature.toJSON(v);
      }
    }

    return object;
  },

  fromPartial(object: DeepPartial<NodeUpdate>): NodeUpdate {
    const message = createBaseNodeUpdate();
    message.addresses = object.addresses?.map((e) => e) || [];
    message.identityKey = object.identityKey ?? '';
    message.globalFeatures = object.globalFeatures ?? new Uint8Array();
    message.alias = object.alias ?? '';
    message.color = object.color ?? '';
    message.nodeAddresses =
      object.nodeAddresses?.map((e) => NodeAddress.fromPartial(e)) || [];
    message.features = Object.entries(object.features ?? {}).reduce<
      Record<number, Feature>
    >((acc, [key, value]) => {
      if (value !== undefined) {
        acc[Number(key)] = Feature.fromPartial(value);
      }

      return acc;
    }, {});
    return message;
  },
};

function createBaseNodeUpdate_FeaturesEntry(): NodeUpdate_FeaturesEntry {
  return {key: 0, value: undefined};
}

export const NodeUpdate_FeaturesEntry = {
  encode(
    message: NodeUpdate_FeaturesEntry,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).uint32(message.key);
    }

    if (message.value !== undefined) {
      Feature.encode(message.value, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): NodeUpdate_FeaturesEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNodeUpdate_FeaturesEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.uint32();
          break;
        case 2:
          message.value = Feature.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): NodeUpdate_FeaturesEntry {
    const message = createBaseNodeUpdate_FeaturesEntry();
    message.key =
      object.key !== undefined && object.key !== null ? Number(object.key) : 0;
    message.value =
      object.value !== undefined && object.value !== null
        ? Feature.fromJSON(object.value)
        : undefined;
    return message;
  },

  toJSON(message: NodeUpdate_FeaturesEntry): unknown {
    const object: any = {};
    message.key !== undefined && (object.key = Math.round(message.key));
    message.value !== undefined &&
      (object.value = message.value
        ? Feature.toJSON(message.value)
        : undefined);
    return object;
  },

  fromPartial(
    object: DeepPartial<NodeUpdate_FeaturesEntry>,
  ): NodeUpdate_FeaturesEntry {
    const message = createBaseNodeUpdate_FeaturesEntry();
    message.key = object.key ?? 0;
    message.value =
      object.value !== undefined && object.value !== null
        ? Feature.fromPartial(object.value)
        : undefined;
    return message;
  },
};

function createBaseChannelEdgeUpdate(): ChannelEdgeUpdate {
  return {
    chanId: '0',
    chanPoint: undefined,
    capacity: '0',
    routingPolicy: undefined,
    advertisingNode: '',
    connectingNode: '',
  };
}

export const ChannelEdgeUpdate = {
  encode(
    message: ChannelEdgeUpdate,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.chanId !== '0') {
      writer.uint32(8).uint64(message.chanId);
    }

    if (message.chanPoint !== undefined) {
      ChannelPoint.encode(message.chanPoint, writer.uint32(18).fork()).ldelim();
    }

    if (message.capacity !== '0') {
      writer.uint32(24).int64(message.capacity);
    }

    if (message.routingPolicy !== undefined) {
      RoutingPolicy.encode(
        message.routingPolicy,
        writer.uint32(34).fork(),
      ).ldelim();
    }

    if (message.advertisingNode !== '') {
      writer.uint32(42).string(message.advertisingNode);
    }

    if (message.connectingNode !== '') {
      writer.uint32(50).string(message.connectingNode);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChannelEdgeUpdate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChannelEdgeUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chanId = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.chanPoint = ChannelPoint.decode(reader, reader.uint32());
          break;
        case 3:
          message.capacity = longToString(reader.int64() as Long);
          break;
        case 4:
          message.routingPolicy = RoutingPolicy.decode(reader, reader.uint32());
          break;
        case 5:
          message.advertisingNode = reader.string();
          break;
        case 6:
          message.connectingNode = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ChannelEdgeUpdate {
    const message = createBaseChannelEdgeUpdate();
    message.chanId =
      object.chanId !== undefined && object.chanId !== null
        ? String(object.chanId)
        : '0';
    message.chanPoint =
      object.chanPoint !== undefined && object.chanPoint !== null
        ? ChannelPoint.fromJSON(object.chanPoint)
        : undefined;
    message.capacity =
      object.capacity !== undefined && object.capacity !== null
        ? String(object.capacity)
        : '0';
    message.routingPolicy =
      object.routingPolicy !== undefined && object.routingPolicy !== null
        ? RoutingPolicy.fromJSON(object.routingPolicy)
        : undefined;
    message.advertisingNode =
      object.advertisingNode !== undefined && object.advertisingNode !== null
        ? String(object.advertisingNode)
        : '';
    message.connectingNode =
      object.connectingNode !== undefined && object.connectingNode !== null
        ? String(object.connectingNode)
        : '';
    return message;
  },

  toJSON(message: ChannelEdgeUpdate): unknown {
    const object: any = {};
    message.chanId !== undefined && (object.chanId = message.chanId);
    message.chanPoint !== undefined &&
      (object.chanPoint = message.chanPoint
        ? ChannelPoint.toJSON(message.chanPoint)
        : undefined);
    message.capacity !== undefined && (object.capacity = message.capacity);
    message.routingPolicy !== undefined &&
      (object.routingPolicy = message.routingPolicy
        ? RoutingPolicy.toJSON(message.routingPolicy)
        : undefined);
    message.advertisingNode !== undefined &&
      (object.advertisingNode = message.advertisingNode);
    message.connectingNode !== undefined &&
      (object.connectingNode = message.connectingNode);
    return object;
  },

  fromPartial(object: DeepPartial<ChannelEdgeUpdate>): ChannelEdgeUpdate {
    const message = createBaseChannelEdgeUpdate();
    message.chanId = object.chanId ?? '0';
    message.chanPoint =
      object.chanPoint !== undefined && object.chanPoint !== null
        ? ChannelPoint.fromPartial(object.chanPoint)
        : undefined;
    message.capacity = object.capacity ?? '0';
    message.routingPolicy =
      object.routingPolicy !== undefined && object.routingPolicy !== null
        ? RoutingPolicy.fromPartial(object.routingPolicy)
        : undefined;
    message.advertisingNode = object.advertisingNode ?? '';
    message.connectingNode = object.connectingNode ?? '';
    return message;
  },
};

function createBaseClosedChannelUpdate(): ClosedChannelUpdate {
  return {chanId: '0', capacity: '0', closedHeight: 0, chanPoint: undefined};
}

export const ClosedChannelUpdate = {
  encode(
    message: ClosedChannelUpdate,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.chanId !== '0') {
      writer.uint32(8).uint64(message.chanId);
    }

    if (message.capacity !== '0') {
      writer.uint32(16).int64(message.capacity);
    }

    if (message.closedHeight !== 0) {
      writer.uint32(24).uint32(message.closedHeight);
    }

    if (message.chanPoint !== undefined) {
      ChannelPoint.encode(message.chanPoint, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClosedChannelUpdate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClosedChannelUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chanId = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.capacity = longToString(reader.int64() as Long);
          break;
        case 3:
          message.closedHeight = reader.uint32();
          break;
        case 4:
          message.chanPoint = ChannelPoint.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ClosedChannelUpdate {
    const message = createBaseClosedChannelUpdate();
    message.chanId =
      object.chanId !== undefined && object.chanId !== null
        ? String(object.chanId)
        : '0';
    message.capacity =
      object.capacity !== undefined && object.capacity !== null
        ? String(object.capacity)
        : '0';
    message.closedHeight =
      object.closedHeight !== undefined && object.closedHeight !== null
        ? Number(object.closedHeight)
        : 0;
    message.chanPoint =
      object.chanPoint !== undefined && object.chanPoint !== null
        ? ChannelPoint.fromJSON(object.chanPoint)
        : undefined;
    return message;
  },

  toJSON(message: ClosedChannelUpdate): unknown {
    const object: any = {};
    message.chanId !== undefined && (object.chanId = message.chanId);
    message.capacity !== undefined && (object.capacity = message.capacity);
    message.closedHeight !== undefined &&
      (object.closedHeight = Math.round(message.closedHeight));
    message.chanPoint !== undefined &&
      (object.chanPoint = message.chanPoint
        ? ChannelPoint.toJSON(message.chanPoint)
        : undefined);
    return object;
  },

  fromPartial(object: DeepPartial<ClosedChannelUpdate>): ClosedChannelUpdate {
    const message = createBaseClosedChannelUpdate();
    message.chanId = object.chanId ?? '0';
    message.capacity = object.capacity ?? '0';
    message.closedHeight = object.closedHeight ?? 0;
    message.chanPoint =
      object.chanPoint !== undefined && object.chanPoint !== null
        ? ChannelPoint.fromPartial(object.chanPoint)
        : undefined;
    return message;
  },
};

function createBaseHopHint(): HopHint {
  return {
    nodeId: '',
    chanId: '0',
    feeBaseMsat: 0,
    feeProportionalMillionths: 0,
    cltvExpiryDelta: 0,
  };
}

export const HopHint = {
  encode(
    message: HopHint,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.nodeId !== '') {
      writer.uint32(10).string(message.nodeId);
    }

    if (message.chanId !== '0') {
      writer.uint32(16).uint64(message.chanId);
    }

    if (message.feeBaseMsat !== 0) {
      writer.uint32(24).uint32(message.feeBaseMsat);
    }

    if (message.feeProportionalMillionths !== 0) {
      writer.uint32(32).uint32(message.feeProportionalMillionths);
    }

    if (message.cltvExpiryDelta !== 0) {
      writer.uint32(40).uint32(message.cltvExpiryDelta);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HopHint {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHopHint();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nodeId = reader.string();
          break;
        case 2:
          message.chanId = longToString(reader.uint64() as Long);
          break;
        case 3:
          message.feeBaseMsat = reader.uint32();
          break;
        case 4:
          message.feeProportionalMillionths = reader.uint32();
          break;
        case 5:
          message.cltvExpiryDelta = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): HopHint {
    const message = createBaseHopHint();
    message.nodeId =
      object.nodeId !== undefined && object.nodeId !== null
        ? String(object.nodeId)
        : '';
    message.chanId =
      object.chanId !== undefined && object.chanId !== null
        ? String(object.chanId)
        : '0';
    message.feeBaseMsat =
      object.feeBaseMsat !== undefined && object.feeBaseMsat !== null
        ? Number(object.feeBaseMsat)
        : 0;
    message.feeProportionalMillionths =
      object.feeProportionalMillionths !== undefined &&
      object.feeProportionalMillionths !== null
        ? Number(object.feeProportionalMillionths)
        : 0;
    message.cltvExpiryDelta =
      object.cltvExpiryDelta !== undefined && object.cltvExpiryDelta !== null
        ? Number(object.cltvExpiryDelta)
        : 0;
    return message;
  },

  toJSON(message: HopHint): unknown {
    const object: any = {};
    message.nodeId !== undefined && (object.nodeId = message.nodeId);
    message.chanId !== undefined && (object.chanId = message.chanId);
    message.feeBaseMsat !== undefined &&
      (object.feeBaseMsat = Math.round(message.feeBaseMsat));
    message.feeProportionalMillionths !== undefined &&
      (object.feeProportionalMillionths = Math.round(
        message.feeProportionalMillionths,
      ));
    message.cltvExpiryDelta !== undefined &&
      (object.cltvExpiryDelta = Math.round(message.cltvExpiryDelta));
    return object;
  },

  fromPartial(object: DeepPartial<HopHint>): HopHint {
    const message = createBaseHopHint();
    message.nodeId = object.nodeId ?? '';
    message.chanId = object.chanId ?? '0';
    message.feeBaseMsat = object.feeBaseMsat ?? 0;
    message.feeProportionalMillionths = object.feeProportionalMillionths ?? 0;
    message.cltvExpiryDelta = object.cltvExpiryDelta ?? 0;
    return message;
  },
};

function createBaseSetID(): SetID {
  return {setId: new Uint8Array()};
}

export const SetID = {
  encode(message: SetID, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.setId.length > 0) {
      writer.uint32(10).bytes(message.setId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetID {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetID();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.setId = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SetID {
    const message = createBaseSetID();
    message.setId =
      object.setId !== undefined && object.setId !== null
        ? bytesFromBase64(object.setId)
        : new Uint8Array();
    return message;
  },

  toJSON(message: SetID): unknown {
    const object: any = {};
    message.setId !== undefined &&
      (object.setId = base64FromBytes(
        message.setId !== undefined ? message.setId : new Uint8Array(),
      ));
    return object;
  },

  fromPartial(object: DeepPartial<SetID>): SetID {
    const message = createBaseSetID();
    message.setId = object.setId ?? new Uint8Array();
    return message;
  },
};

function createBaseRouteHint(): RouteHint {
  return {hopHints: []};
}

export const RouteHint = {
  encode(
    message: RouteHint,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.hopHints) {
      HopHint.encode(v, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RouteHint {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRouteHint();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hopHints.push(HopHint.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): RouteHint {
    const message = createBaseRouteHint();
    message.hopHints = (object.hopHints ?? []).map((e: any) =>
      HopHint.fromJSON(e),
    );
    return message;
  },

  toJSON(message: RouteHint): unknown {
    const object: any = {};
    if (message.hopHints) {
      object.hopHints = message.hopHints.map((e) =>
        e ? HopHint.toJSON(e) : undefined,
      );
    } else {
      object.hopHints = [];
    }

    return object;
  },

  fromPartial(object: DeepPartial<RouteHint>): RouteHint {
    const message = createBaseRouteHint();
    message.hopHints =
      object.hopHints?.map((e) => HopHint.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAMPInvoiceState(): AMPInvoiceState {
  return {state: 0, settleIndex: '0', settleTime: '0', amtPaidMsat: '0'};
}

export const AMPInvoiceState = {
  encode(
    message: AMPInvoiceState,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.state !== 0) {
      writer.uint32(8).int32(message.state);
    }

    if (message.settleIndex !== '0') {
      writer.uint32(16).uint64(message.settleIndex);
    }

    if (message.settleTime !== '0') {
      writer.uint32(24).int64(message.settleTime);
    }

    if (message.amtPaidMsat !== '0') {
      writer.uint32(40).int64(message.amtPaidMsat);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AMPInvoiceState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAMPInvoiceState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.state = reader.int32() as any;
          break;
        case 2:
          message.settleIndex = longToString(reader.uint64() as Long);
          break;
        case 3:
          message.settleTime = longToString(reader.int64() as Long);
          break;
        case 5:
          message.amtPaidMsat = longToString(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): AMPInvoiceState {
    const message = createBaseAMPInvoiceState();
    message.state =
      object.state !== undefined && object.state !== null
        ? invoiceHTLCStateFromJSON(object.state)
        : 0;
    message.settleIndex =
      object.settleIndex !== undefined && object.settleIndex !== null
        ? String(object.settleIndex)
        : '0';
    message.settleTime =
      object.settleTime !== undefined && object.settleTime !== null
        ? String(object.settleTime)
        : '0';
    message.amtPaidMsat =
      object.amtPaidMsat !== undefined && object.amtPaidMsat !== null
        ? String(object.amtPaidMsat)
        : '0';
    return message;
  },

  toJSON(message: AMPInvoiceState): unknown {
    const object: any = {};
    message.state !== undefined &&
      (object.state = invoiceHTLCStateToJSON(message.state));
    message.settleIndex !== undefined &&
      (object.settleIndex = message.settleIndex);
    message.settleTime !== undefined &&
      (object.settleTime = message.settleTime);
    message.amtPaidMsat !== undefined &&
      (object.amtPaidMsat = message.amtPaidMsat);
    return object;
  },

  fromPartial(object: DeepPartial<AMPInvoiceState>): AMPInvoiceState {
    const message = createBaseAMPInvoiceState();
    message.state = object.state ?? 0;
    message.settleIndex = object.settleIndex ?? '0';
    message.settleTime = object.settleTime ?? '0';
    message.amtPaidMsat = object.amtPaidMsat ?? '0';
    return message;
  },
};

function createBaseInvoice(): Invoice {
  return {
    memo: '',
    rPreimage: new Uint8Array(),
    rHash: new Uint8Array(),
    value: '0',
    valueMsat: '0',
    settled: false,
    creationDate: '0',
    settleDate: '0',
    paymentRequest: '',
    descriptionHash: new Uint8Array(),
    expiry: '0',
    fallbackAddr: '',
    cltvExpiry: '0',
    routeHints: [],
    private: false,
    addIndex: '0',
    settleIndex: '0',
    amtPaid: '0',
    amtPaidSat: '0',
    amtPaidMsat: '0',
    state: 0,
    htlcs: [],
    features: {},
    isKeysend: false,
    paymentAddr: new Uint8Array(),
    isAmp: false,
    ampInvoiceState: {},
  };
}

export const Invoice = {
  encode(
    message: Invoice,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.memo !== '') {
      writer.uint32(10).string(message.memo);
    }

    if (message.rPreimage.length > 0) {
      writer.uint32(26).bytes(message.rPreimage);
    }

    if (message.rHash.length > 0) {
      writer.uint32(34).bytes(message.rHash);
    }

    if (message.value !== '0') {
      writer.uint32(40).int64(message.value);
    }

    if (message.valueMsat !== '0') {
      writer.uint32(184).int64(message.valueMsat);
    }

    if (message.settled) {
      writer.uint32(48).bool(message.settled);
    }

    if (message.creationDate !== '0') {
      writer.uint32(56).int64(message.creationDate);
    }

    if (message.settleDate !== '0') {
      writer.uint32(64).int64(message.settleDate);
    }

    if (message.paymentRequest !== '') {
      writer.uint32(74).string(message.paymentRequest);
    }

    if (message.descriptionHash.length > 0) {
      writer.uint32(82).bytes(message.descriptionHash);
    }

    if (message.expiry !== '0') {
      writer.uint32(88).int64(message.expiry);
    }

    if (message.fallbackAddr !== '') {
      writer.uint32(98).string(message.fallbackAddr);
    }

    if (message.cltvExpiry !== '0') {
      writer.uint32(104).uint64(message.cltvExpiry);
    }

    for (const v of message.routeHints) {
      RouteHint.encode(v, writer.uint32(114).fork()).ldelim();
    }

    if (message.private) {
      writer.uint32(120).bool(message.private);
    }

    if (message.addIndex !== '0') {
      writer.uint32(128).uint64(message.addIndex);
    }

    if (message.settleIndex !== '0') {
      writer.uint32(136).uint64(message.settleIndex);
    }

    if (message.amtPaid !== '0') {
      writer.uint32(144).int64(message.amtPaid);
    }

    if (message.amtPaidSat !== '0') {
      writer.uint32(152).int64(message.amtPaidSat);
    }

    if (message.amtPaidMsat !== '0') {
      writer.uint32(160).int64(message.amtPaidMsat);
    }

    if (message.state !== 0) {
      writer.uint32(168).int32(message.state);
    }

    for (const v of message.htlcs) {
      InvoiceHTLC.encode(v, writer.uint32(178).fork()).ldelim();
    }

    for (const [key, value] of Object.entries(message.features)) {
      Invoice_FeaturesEntry.encode(
        {key: key as any, value},
        writer.uint32(194).fork(),
      ).ldelim();
    }

    if (message.isKeysend) {
      writer.uint32(200).bool(message.isKeysend);
    }

    if (message.paymentAddr.length > 0) {
      writer.uint32(210).bytes(message.paymentAddr);
    }

    if (message.isAmp) {
      writer.uint32(216).bool(message.isAmp);
    }

    for (const [key, value] of Object.entries(message.ampInvoiceState)) {
      Invoice_AmpInvoiceStateEntry.encode(
        {key: key as any, value},
        writer.uint32(226).fork(),
      ).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Invoice {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInvoice();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.memo = reader.string();
          break;
        case 3:
          message.rPreimage = reader.bytes();
          break;
        case 4:
          message.rHash = reader.bytes();
          break;
        case 5:
          message.value = longToString(reader.int64() as Long);
          break;
        case 23:
          message.valueMsat = longToString(reader.int64() as Long);
          break;
        case 6:
          message.settled = reader.bool();
          break;
        case 7:
          message.creationDate = longToString(reader.int64() as Long);
          break;
        case 8:
          message.settleDate = longToString(reader.int64() as Long);
          break;
        case 9:
          message.paymentRequest = reader.string();
          break;
        case 10:
          message.descriptionHash = reader.bytes();
          break;
        case 11:
          message.expiry = longToString(reader.int64() as Long);
          break;
        case 12:
          message.fallbackAddr = reader.string();
          break;
        case 13:
          message.cltvExpiry = longToString(reader.uint64() as Long);
          break;
        case 14:
          message.routeHints.push(RouteHint.decode(reader, reader.uint32()));
          break;
        case 15:
          message.private = reader.bool();
          break;
        case 16:
          message.addIndex = longToString(reader.uint64() as Long);
          break;
        case 17:
          message.settleIndex = longToString(reader.uint64() as Long);
          break;
        case 18:
          message.amtPaid = longToString(reader.int64() as Long);
          break;
        case 19:
          message.amtPaidSat = longToString(reader.int64() as Long);
          break;
        case 20:
          message.amtPaidMsat = longToString(reader.int64() as Long);
          break;
        case 21:
          message.state = reader.int32() as any;
          break;
        case 22:
          message.htlcs.push(InvoiceHTLC.decode(reader, reader.uint32()));
          break;
        case 24:
          const entry24 = Invoice_FeaturesEntry.decode(reader, reader.uint32());
          if (entry24.value !== undefined) {
            message.features[entry24.key] = entry24.value;
          }

          break;
        case 25:
          message.isKeysend = reader.bool();
          break;
        case 26:
          message.paymentAddr = reader.bytes();
          break;
        case 27:
          message.isAmp = reader.bool();
          break;
        case 28:
          const entry28 = Invoice_AmpInvoiceStateEntry.decode(
            reader,
            reader.uint32(),
          );
          if (entry28.value !== undefined) {
            message.ampInvoiceState[entry28.key] = entry28.value;
          }

          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Invoice {
    const message = createBaseInvoice();
    message.memo =
      object.memo !== undefined && object.memo !== null
        ? String(object.memo)
        : '';
    message.rPreimage =
      object.rPreimage !== undefined && object.rPreimage !== null
        ? bytesFromBase64(object.rPreimage)
        : new Uint8Array();
    message.rHash =
      object.rHash !== undefined && object.rHash !== null
        ? bytesFromBase64(object.rHash)
        : new Uint8Array();
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : '0';
    message.valueMsat =
      object.valueMsat !== undefined && object.valueMsat !== null
        ? String(object.valueMsat)
        : '0';
    message.settled =
      object.settled !== undefined && object.settled !== null
        ? Boolean(object.settled)
        : false;
    message.creationDate =
      object.creationDate !== undefined && object.creationDate !== null
        ? String(object.creationDate)
        : '0';
    message.settleDate =
      object.settleDate !== undefined && object.settleDate !== null
        ? String(object.settleDate)
        : '0';
    message.paymentRequest =
      object.paymentRequest !== undefined && object.paymentRequest !== null
        ? String(object.paymentRequest)
        : '';
    message.descriptionHash =
      object.descriptionHash !== undefined && object.descriptionHash !== null
        ? bytesFromBase64(object.descriptionHash)
        : new Uint8Array();
    message.expiry =
      object.expiry !== undefined && object.expiry !== null
        ? String(object.expiry)
        : '0';
    message.fallbackAddr =
      object.fallbackAddr !== undefined && object.fallbackAddr !== null
        ? String(object.fallbackAddr)
        : '';
    message.cltvExpiry =
      object.cltvExpiry !== undefined && object.cltvExpiry !== null
        ? String(object.cltvExpiry)
        : '0';
    message.routeHints = (object.routeHints ?? []).map((e: any) =>
      RouteHint.fromJSON(e),
    );
    message.private =
      object.private !== undefined && object.private !== null
        ? Boolean(object.private)
        : false;
    message.addIndex =
      object.addIndex !== undefined && object.addIndex !== null
        ? String(object.addIndex)
        : '0';
    message.settleIndex =
      object.settleIndex !== undefined && object.settleIndex !== null
        ? String(object.settleIndex)
        : '0';
    message.amtPaid =
      object.amtPaid !== undefined && object.amtPaid !== null
        ? String(object.amtPaid)
        : '0';
    message.amtPaidSat =
      object.amtPaidSat !== undefined && object.amtPaidSat !== null
        ? String(object.amtPaidSat)
        : '0';
    message.amtPaidMsat =
      object.amtPaidMsat !== undefined && object.amtPaidMsat !== null
        ? String(object.amtPaidMsat)
        : '0';
    message.state =
      object.state !== undefined && object.state !== null
        ? invoice_InvoiceStateFromJSON(object.state)
        : 0;
    message.htlcs = (object.htlcs ?? []).map((e: any) =>
      InvoiceHTLC.fromJSON(e),
    );
    message.features = Object.entries(object.features ?? {}).reduce<
      Record<number, Feature>
    >((acc, [key, value]) => {
      acc[Number(key)] = Feature.fromJSON(value);
      return acc;
    }, {});
    message.isKeysend =
      object.isKeysend !== undefined && object.isKeysend !== null
        ? Boolean(object.isKeysend)
        : false;
    message.paymentAddr =
      object.paymentAddr !== undefined && object.paymentAddr !== null
        ? bytesFromBase64(object.paymentAddr)
        : new Uint8Array();
    message.isAmp =
      object.isAmp !== undefined && object.isAmp !== null
        ? Boolean(object.isAmp)
        : false;
    message.ampInvoiceState = Object.entries(
      object.ampInvoiceState ?? {},
    ).reduce<Record<string, AMPInvoiceState>>((acc, [key, value]) => {
      acc[key] = AMPInvoiceState.fromJSON(value);
      return acc;
    }, {});
    return message;
  },

  toJSON(message: Invoice): unknown {
    const object: any = {};
    message.memo !== undefined && (object.memo = message.memo);
    message.rPreimage !== undefined &&
      (object.rPreimage = base64FromBytes(
        message.rPreimage !== undefined ? message.rPreimage : new Uint8Array(),
      ));
    message.rHash !== undefined &&
      (object.rHash = base64FromBytes(
        message.rHash !== undefined ? message.rHash : new Uint8Array(),
      ));
    message.value !== undefined && (object.value = message.value);
    message.valueMsat !== undefined && (object.valueMsat = message.valueMsat);
    message.settled !== undefined && (object.settled = message.settled);
    message.creationDate !== undefined &&
      (object.creationDate = message.creationDate);
    message.settleDate !== undefined &&
      (object.settleDate = message.settleDate);
    message.paymentRequest !== undefined &&
      (object.paymentRequest = message.paymentRequest);
    message.descriptionHash !== undefined &&
      (object.descriptionHash = base64FromBytes(
        message.descriptionHash !== undefined
          ? message.descriptionHash
          : new Uint8Array(),
      ));
    message.expiry !== undefined && (object.expiry = message.expiry);
    message.fallbackAddr !== undefined &&
      (object.fallbackAddr = message.fallbackAddr);
    message.cltvExpiry !== undefined &&
      (object.cltvExpiry = message.cltvExpiry);
    if (message.routeHints) {
      object.routeHints = message.routeHints.map((e) =>
        e ? RouteHint.toJSON(e) : undefined,
      );
    } else {
      object.routeHints = [];
    }

    message.private !== undefined && (object.private = message.private);
    message.addIndex !== undefined && (object.addIndex = message.addIndex);
    message.settleIndex !== undefined &&
      (object.settleIndex = message.settleIndex);
    message.amtPaid !== undefined && (object.amtPaid = message.amtPaid);
    message.amtPaidSat !== undefined &&
      (object.amtPaidSat = message.amtPaidSat);
    message.amtPaidMsat !== undefined &&
      (object.amtPaidMsat = message.amtPaidMsat);
    message.state !== undefined &&
      (object.state = invoice_InvoiceStateToJSON(message.state));
    if (message.htlcs) {
      object.htlcs = message.htlcs.map((e) =>
        e ? InvoiceHTLC.toJSON(e) : undefined,
      );
    } else {
      object.htlcs = [];
    }

    object.features = {};
    if (message.features) {
      for (const [k, v] of Object.entries(message.features)) {
        object.features[k] = Feature.toJSON(v);
      }
    }

    message.isKeysend !== undefined && (object.isKeysend = message.isKeysend);
    message.paymentAddr !== undefined &&
      (object.paymentAddr = base64FromBytes(
        message.paymentAddr !== undefined
          ? message.paymentAddr
          : new Uint8Array(),
      ));
    message.isAmp !== undefined && (object.isAmp = message.isAmp);
    object.ampInvoiceState = {};
    if (message.ampInvoiceState) {
      for (const [k, v] of Object.entries(message.ampInvoiceState)) {
        object.ampInvoiceState[k] = AMPInvoiceState.toJSON(v);
      }
    }

    return object;
  },

  fromPartial(object: DeepPartial<Invoice>): Invoice {
    const message = createBaseInvoice();
    message.memo = object.memo ?? '';
    message.rPreimage = object.rPreimage ?? new Uint8Array();
    message.rHash = object.rHash ?? new Uint8Array();
    message.value = object.value ?? '0';
    message.valueMsat = object.valueMsat ?? '0';
    message.settled = object.settled ?? false;
    message.creationDate = object.creationDate ?? '0';
    message.settleDate = object.settleDate ?? '0';
    message.paymentRequest = object.paymentRequest ?? '';
    message.descriptionHash = object.descriptionHash ?? new Uint8Array();
    message.expiry = object.expiry ?? '0';
    message.fallbackAddr = object.fallbackAddr ?? '';
    message.cltvExpiry = object.cltvExpiry ?? '0';
    message.routeHints =
      object.routeHints?.map((e) => RouteHint.fromPartial(e)) || [];
    message.private = object.private ?? false;
    message.addIndex = object.addIndex ?? '0';
    message.settleIndex = object.settleIndex ?? '0';
    message.amtPaid = object.amtPaid ?? '0';
    message.amtPaidSat = object.amtPaidSat ?? '0';
    message.amtPaidMsat = object.amtPaidMsat ?? '0';
    message.state = object.state ?? 0;
    message.htlcs = object.htlcs?.map((e) => InvoiceHTLC.fromPartial(e)) || [];
    message.features = Object.entries(object.features ?? {}).reduce<
      Record<number, Feature>
    >((acc, [key, value]) => {
      if (value !== undefined) {
        acc[Number(key)] = Feature.fromPartial(value);
      }

      return acc;
    }, {});
    message.isKeysend = object.isKeysend ?? false;
    message.paymentAddr = object.paymentAddr ?? new Uint8Array();
    message.isAmp = object.isAmp ?? false;
    message.ampInvoiceState = Object.entries(
      object.ampInvoiceState ?? {},
    ).reduce<Record<string, AMPInvoiceState>>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = AMPInvoiceState.fromPartial(value);
      }

      return acc;
    }, {});
    return message;
  },
};

function createBaseInvoice_FeaturesEntry(): Invoice_FeaturesEntry {
  return {key: 0, value: undefined};
}

export const Invoice_FeaturesEntry = {
  encode(
    message: Invoice_FeaturesEntry,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).uint32(message.key);
    }

    if (message.value !== undefined) {
      Feature.encode(message.value, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Invoice_FeaturesEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInvoice_FeaturesEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.uint32();
          break;
        case 2:
          message.value = Feature.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Invoice_FeaturesEntry {
    const message = createBaseInvoice_FeaturesEntry();
    message.key =
      object.key !== undefined && object.key !== null ? Number(object.key) : 0;
    message.value =
      object.value !== undefined && object.value !== null
        ? Feature.fromJSON(object.value)
        : undefined;
    return message;
  },

  toJSON(message: Invoice_FeaturesEntry): unknown {
    const object: any = {};
    message.key !== undefined && (object.key = Math.round(message.key));
    message.value !== undefined &&
      (object.value = message.value
        ? Feature.toJSON(message.value)
        : undefined);
    return object;
  },

  fromPartial(
    object: DeepPartial<Invoice_FeaturesEntry>,
  ): Invoice_FeaturesEntry {
    const message = createBaseInvoice_FeaturesEntry();
    message.key = object.key ?? 0;
    message.value =
      object.value !== undefined && object.value !== null
        ? Feature.fromPartial(object.value)
        : undefined;
    return message;
  },
};

function createBaseInvoice_AmpInvoiceStateEntry(): Invoice_AmpInvoiceStateEntry {
  return {key: '', value: undefined};
}

export const Invoice_AmpInvoiceStateEntry = {
  encode(
    message: Invoice_AmpInvoiceStateEntry,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.key !== '') {
      writer.uint32(10).string(message.key);
    }

    if (message.value !== undefined) {
      AMPInvoiceState.encode(message.value, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Invoice_AmpInvoiceStateEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInvoice_AmpInvoiceStateEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = AMPInvoiceState.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Invoice_AmpInvoiceStateEntry {
    const message = createBaseInvoice_AmpInvoiceStateEntry();
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : '';
    message.value =
      object.value !== undefined && object.value !== null
        ? AMPInvoiceState.fromJSON(object.value)
        : undefined;
    return message;
  },

  toJSON(message: Invoice_AmpInvoiceStateEntry): unknown {
    const object: any = {};
    message.key !== undefined && (object.key = message.key);
    message.value !== undefined &&
      (object.value = message.value
        ? AMPInvoiceState.toJSON(message.value)
        : undefined);
    return object;
  },

  fromPartial(
    object: DeepPartial<Invoice_AmpInvoiceStateEntry>,
  ): Invoice_AmpInvoiceStateEntry {
    const message = createBaseInvoice_AmpInvoiceStateEntry();
    message.key = object.key ?? '';
    message.value =
      object.value !== undefined && object.value !== null
        ? AMPInvoiceState.fromPartial(object.value)
        : undefined;
    return message;
  },
};

function createBaseInvoiceHTLC(): InvoiceHTLC {
  return {
    chanId: '0',
    htlcIndex: '0',
    amtMsat: '0',
    acceptHeight: 0,
    acceptTime: '0',
    resolveTime: '0',
    expiryHeight: 0,
    state: 0,
    customRecords: {},
    mppTotalAmtMsat: '0',
    amp: undefined,
  };
}

export const InvoiceHTLC = {
  encode(
    message: InvoiceHTLC,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.chanId !== '0') {
      writer.uint32(8).uint64(message.chanId);
    }

    if (message.htlcIndex !== '0') {
      writer.uint32(16).uint64(message.htlcIndex);
    }

    if (message.amtMsat !== '0') {
      writer.uint32(24).uint64(message.amtMsat);
    }

    if (message.acceptHeight !== 0) {
      writer.uint32(32).int32(message.acceptHeight);
    }

    if (message.acceptTime !== '0') {
      writer.uint32(40).int64(message.acceptTime);
    }

    if (message.resolveTime !== '0') {
      writer.uint32(48).int64(message.resolveTime);
    }

    if (message.expiryHeight !== 0) {
      writer.uint32(56).int32(message.expiryHeight);
    }

    if (message.state !== 0) {
      writer.uint32(64).int32(message.state);
    }

    for (const [key, value] of Object.entries(message.customRecords)) {
      InvoiceHTLC_CustomRecordsEntry.encode(
        {key: key as any, value},
        writer.uint32(74).fork(),
      ).ldelim();
    }

    if (message.mppTotalAmtMsat !== '0') {
      writer.uint32(80).uint64(message.mppTotalAmtMsat);
    }

    if (message.amp !== undefined) {
      AMP.encode(message.amp, writer.uint32(90).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InvoiceHTLC {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInvoiceHTLC();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chanId = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.htlcIndex = longToString(reader.uint64() as Long);
          break;
        case 3:
          message.amtMsat = longToString(reader.uint64() as Long);
          break;
        case 4:
          message.acceptHeight = reader.int32();
          break;
        case 5:
          message.acceptTime = longToString(reader.int64() as Long);
          break;
        case 6:
          message.resolveTime = longToString(reader.int64() as Long);
          break;
        case 7:
          message.expiryHeight = reader.int32();
          break;
        case 8:
          message.state = reader.int32() as any;
          break;
        case 9:
          const entry9 = InvoiceHTLC_CustomRecordsEntry.decode(
            reader,
            reader.uint32(),
          );
          if (entry9.value !== undefined) {
            message.customRecords[entry9.key] = entry9.value;
          }

          break;
        case 10:
          message.mppTotalAmtMsat = longToString(reader.uint64() as Long);
          break;
        case 11:
          message.amp = AMP.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): InvoiceHTLC {
    const message = createBaseInvoiceHTLC();
    message.chanId =
      object.chanId !== undefined && object.chanId !== null
        ? String(object.chanId)
        : '0';
    message.htlcIndex =
      object.htlcIndex !== undefined && object.htlcIndex !== null
        ? String(object.htlcIndex)
        : '0';
    message.amtMsat =
      object.amtMsat !== undefined && object.amtMsat !== null
        ? String(object.amtMsat)
        : '0';
    message.acceptHeight =
      object.acceptHeight !== undefined && object.acceptHeight !== null
        ? Number(object.acceptHeight)
        : 0;
    message.acceptTime =
      object.acceptTime !== undefined && object.acceptTime !== null
        ? String(object.acceptTime)
        : '0';
    message.resolveTime =
      object.resolveTime !== undefined && object.resolveTime !== null
        ? String(object.resolveTime)
        : '0';
    message.expiryHeight =
      object.expiryHeight !== undefined && object.expiryHeight !== null
        ? Number(object.expiryHeight)
        : 0;
    message.state =
      object.state !== undefined && object.state !== null
        ? invoiceHTLCStateFromJSON(object.state)
        : 0;
    message.customRecords = Object.entries(object.customRecords ?? {}).reduce<
      Record<string, Uint8Array>
    >((acc, [key, value]) => {
      acc[key] = bytesFromBase64(value as string);
      return acc;
    }, {});
    message.mppTotalAmtMsat =
      object.mppTotalAmtMsat !== undefined && object.mppTotalAmtMsat !== null
        ? String(object.mppTotalAmtMsat)
        : '0';
    message.amp =
      object.amp !== undefined && object.amp !== null
        ? AMP.fromJSON(object.amp)
        : undefined;
    return message;
  },

  toJSON(message: InvoiceHTLC): unknown {
    const object: any = {};
    message.chanId !== undefined && (object.chanId = message.chanId);
    message.htlcIndex !== undefined && (object.htlcIndex = message.htlcIndex);
    message.amtMsat !== undefined && (object.amtMsat = message.amtMsat);
    message.acceptHeight !== undefined &&
      (object.acceptHeight = Math.round(message.acceptHeight));
    message.acceptTime !== undefined &&
      (object.acceptTime = message.acceptTime);
    message.resolveTime !== undefined &&
      (object.resolveTime = message.resolveTime);
    message.expiryHeight !== undefined &&
      (object.expiryHeight = Math.round(message.expiryHeight));
    message.state !== undefined &&
      (object.state = invoiceHTLCStateToJSON(message.state));
    object.customRecords = {};
    if (message.customRecords) {
      for (const [k, v] of Object.entries(message.customRecords)) {
        object.customRecords[k] = base64FromBytes(v);
      }
    }

    message.mppTotalAmtMsat !== undefined &&
      (object.mppTotalAmtMsat = message.mppTotalAmtMsat);
    message.amp !== undefined &&
      (object.amp = message.amp ? AMP.toJSON(message.amp) : undefined);
    return object;
  },

  fromPartial(object: DeepPartial<InvoiceHTLC>): InvoiceHTLC {
    const message = createBaseInvoiceHTLC();
    message.chanId = object.chanId ?? '0';
    message.htlcIndex = object.htlcIndex ?? '0';
    message.amtMsat = object.amtMsat ?? '0';
    message.acceptHeight = object.acceptHeight ?? 0;
    message.acceptTime = object.acceptTime ?? '0';
    message.resolveTime = object.resolveTime ?? '0';
    message.expiryHeight = object.expiryHeight ?? 0;
    message.state = object.state ?? 0;
    message.customRecords = Object.entries(object.customRecords ?? {}).reduce<
      Record<string, Uint8Array>
    >((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = value;
      }

      return acc;
    }, {});
    message.mppTotalAmtMsat = object.mppTotalAmtMsat ?? '0';
    message.amp =
      object.amp !== undefined && object.amp !== null
        ? AMP.fromPartial(object.amp)
        : undefined;
    return message;
  },
};

function createBaseInvoiceHTLC_CustomRecordsEntry(): InvoiceHTLC_CustomRecordsEntry {
  return {key: '0', value: new Uint8Array()};
}

export const InvoiceHTLC_CustomRecordsEntry = {
  encode(
    message: InvoiceHTLC_CustomRecordsEntry,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.key !== '0') {
      writer.uint32(8).uint64(message.key);
    }

    if (message.value.length > 0) {
      writer.uint32(18).bytes(message.value);
    }

    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): InvoiceHTLC_CustomRecordsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInvoiceHTLC_CustomRecordsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.value = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): InvoiceHTLC_CustomRecordsEntry {
    const message = createBaseInvoiceHTLC_CustomRecordsEntry();
    message.key =
      object.key !== undefined && object.key !== null
        ? String(object.key)
        : '0';
    message.value =
      object.value !== undefined && object.value !== null
        ? bytesFromBase64(object.value)
        : new Uint8Array();
    return message;
  },

  toJSON(message: InvoiceHTLC_CustomRecordsEntry): unknown {
    const object: any = {};
    message.key !== undefined && (object.key = message.key);
    message.value !== undefined &&
      (object.value = base64FromBytes(
        message.value !== undefined ? message.value : new Uint8Array(),
      ));
    return object;
  },

  fromPartial(
    object: DeepPartial<InvoiceHTLC_CustomRecordsEntry>,
  ): InvoiceHTLC_CustomRecordsEntry {
    const message = createBaseInvoiceHTLC_CustomRecordsEntry();
    message.key = object.key ?? '0';
    message.value = object.value ?? new Uint8Array();
    return message;
  },
};

function createBaseAMP(): AMP {
  return {
    rootShare: new Uint8Array(),
    setId: new Uint8Array(),
    childIndex: 0,
    hash: new Uint8Array(),
    preimage: new Uint8Array(),
  };
}

export const AMP = {
  encode(message: AMP, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rootShare.length > 0) {
      writer.uint32(10).bytes(message.rootShare);
    }

    if (message.setId.length > 0) {
      writer.uint32(18).bytes(message.setId);
    }

    if (message.childIndex !== 0) {
      writer.uint32(24).uint32(message.childIndex);
    }

    if (message.hash.length > 0) {
      writer.uint32(34).bytes(message.hash);
    }

    if (message.preimage.length > 0) {
      writer.uint32(42).bytes(message.preimage);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AMP {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAMP();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rootShare = reader.bytes();
          break;
        case 2:
          message.setId = reader.bytes();
          break;
        case 3:
          message.childIndex = reader.uint32();
          break;
        case 4:
          message.hash = reader.bytes();
          break;
        case 5:
          message.preimage = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): AMP {
    const message = createBaseAMP();
    message.rootShare =
      object.rootShare !== undefined && object.rootShare !== null
        ? bytesFromBase64(object.rootShare)
        : new Uint8Array();
    message.setId =
      object.setId !== undefined && object.setId !== null
        ? bytesFromBase64(object.setId)
        : new Uint8Array();
    message.childIndex =
      object.childIndex !== undefined && object.childIndex !== null
        ? Number(object.childIndex)
        : 0;
    message.hash =
      object.hash !== undefined && object.hash !== null
        ? bytesFromBase64(object.hash)
        : new Uint8Array();
    message.preimage =
      object.preimage !== undefined && object.preimage !== null
        ? bytesFromBase64(object.preimage)
        : new Uint8Array();
    return message;
  },

  toJSON(message: AMP): unknown {
    const object: any = {};
    message.rootShare !== undefined &&
      (object.rootShare = base64FromBytes(
        message.rootShare !== undefined ? message.rootShare : new Uint8Array(),
      ));
    message.setId !== undefined &&
      (object.setId = base64FromBytes(
        message.setId !== undefined ? message.setId : new Uint8Array(),
      ));
    message.childIndex !== undefined &&
      (object.childIndex = Math.round(message.childIndex));
    message.hash !== undefined &&
      (object.hash = base64FromBytes(
        message.hash !== undefined ? message.hash : new Uint8Array(),
      ));
    message.preimage !== undefined &&
      (object.preimage = base64FromBytes(
        message.preimage !== undefined ? message.preimage : new Uint8Array(),
      ));
    return object;
  },

  fromPartial(object: DeepPartial<AMP>): AMP {
    const message = createBaseAMP();
    message.rootShare = object.rootShare ?? new Uint8Array();
    message.setId = object.setId ?? new Uint8Array();
    message.childIndex = object.childIndex ?? 0;
    message.hash = object.hash ?? new Uint8Array();
    message.preimage = object.preimage ?? new Uint8Array();
    return message;
  },
};

function createBaseAddInvoiceResponse(): AddInvoiceResponse {
  return {
    rHash: new Uint8Array(),
    paymentRequest: '',
    addIndex: '0',
    paymentAddr: new Uint8Array(),
  };
}

export const AddInvoiceResponse = {
  encode(
    message: AddInvoiceResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.rHash.length > 0) {
      writer.uint32(10).bytes(message.rHash);
    }

    if (message.paymentRequest !== '') {
      writer.uint32(18).string(message.paymentRequest);
    }

    if (message.addIndex !== '0') {
      writer.uint32(128).uint64(message.addIndex);
    }

    if (message.paymentAddr.length > 0) {
      writer.uint32(138).bytes(message.paymentAddr);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddInvoiceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddInvoiceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rHash = reader.bytes();
          break;
        case 2:
          message.paymentRequest = reader.string();
          break;
        case 16:
          message.addIndex = longToString(reader.uint64() as Long);
          break;
        case 17:
          message.paymentAddr = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): AddInvoiceResponse {
    const message = createBaseAddInvoiceResponse();
    message.rHash =
      object.rHash !== undefined && object.rHash !== null
        ? bytesFromBase64(object.rHash)
        : new Uint8Array();
    message.paymentRequest =
      object.paymentRequest !== undefined && object.paymentRequest !== null
        ? String(object.paymentRequest)
        : '';
    message.addIndex =
      object.addIndex !== undefined && object.addIndex !== null
        ? String(object.addIndex)
        : '0';
    message.paymentAddr =
      object.paymentAddr !== undefined && object.paymentAddr !== null
        ? bytesFromBase64(object.paymentAddr)
        : new Uint8Array();
    return message;
  },

  toJSON(message: AddInvoiceResponse): unknown {
    const object: any = {};
    message.rHash !== undefined &&
      (object.rHash = base64FromBytes(
        message.rHash !== undefined ? message.rHash : new Uint8Array(),
      ));
    message.paymentRequest !== undefined &&
      (object.paymentRequest = message.paymentRequest);
    message.addIndex !== undefined && (object.addIndex = message.addIndex);
    message.paymentAddr !== undefined &&
      (object.paymentAddr = base64FromBytes(
        message.paymentAddr !== undefined
          ? message.paymentAddr
          : new Uint8Array(),
      ));
    return object;
  },

  fromPartial(object: DeepPartial<AddInvoiceResponse>): AddInvoiceResponse {
    const message = createBaseAddInvoiceResponse();
    message.rHash = object.rHash ?? new Uint8Array();
    message.paymentRequest = object.paymentRequest ?? '';
    message.addIndex = object.addIndex ?? '0';
    message.paymentAddr = object.paymentAddr ?? new Uint8Array();
    return message;
  },
};

function createBasePaymentHash(): PaymentHash {
  return {rHashStr: '', rHash: new Uint8Array()};
}

export const PaymentHash = {
  encode(
    message: PaymentHash,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.rHashStr !== '') {
      writer.uint32(10).string(message.rHashStr);
    }

    if (message.rHash.length > 0) {
      writer.uint32(18).bytes(message.rHash);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PaymentHash {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePaymentHash();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rHashStr = reader.string();
          break;
        case 2:
          message.rHash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): PaymentHash {
    const message = createBasePaymentHash();
    message.rHashStr =
      object.rHashStr !== undefined && object.rHashStr !== null
        ? String(object.rHashStr)
        : '';
    message.rHash =
      object.rHash !== undefined && object.rHash !== null
        ? bytesFromBase64(object.rHash)
        : new Uint8Array();
    return message;
  },

  toJSON(message: PaymentHash): unknown {
    const object: any = {};
    message.rHashStr !== undefined && (object.rHashStr = message.rHashStr);
    message.rHash !== undefined &&
      (object.rHash = base64FromBytes(
        message.rHash !== undefined ? message.rHash : new Uint8Array(),
      ));
    return object;
  },

  fromPartial(object: DeepPartial<PaymentHash>): PaymentHash {
    const message = createBasePaymentHash();
    message.rHashStr = object.rHashStr ?? '';
    message.rHash = object.rHash ?? new Uint8Array();
    return message;
  },
};

function createBaseListInvoiceRequest(): ListInvoiceRequest {
  return {
    pendingOnly: false,
    indexOffset: '0',
    numMaxInvoices: '0',
    reversed: false,
  };
}

export const ListInvoiceRequest = {
  encode(
    message: ListInvoiceRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.pendingOnly) {
      writer.uint32(8).bool(message.pendingOnly);
    }

    if (message.indexOffset !== '0') {
      writer.uint32(32).uint64(message.indexOffset);
    }

    if (message.numMaxInvoices !== '0') {
      writer.uint32(40).uint64(message.numMaxInvoices);
    }

    if (message.reversed) {
      writer.uint32(48).bool(message.reversed);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListInvoiceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListInvoiceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pendingOnly = reader.bool();
          break;
        case 4:
          message.indexOffset = longToString(reader.uint64() as Long);
          break;
        case 5:
          message.numMaxInvoices = longToString(reader.uint64() as Long);
          break;
        case 6:
          message.reversed = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ListInvoiceRequest {
    const message = createBaseListInvoiceRequest();
    message.pendingOnly =
      object.pendingOnly !== undefined && object.pendingOnly !== null
        ? Boolean(object.pendingOnly)
        : false;
    message.indexOffset =
      object.indexOffset !== undefined && object.indexOffset !== null
        ? String(object.indexOffset)
        : '0';
    message.numMaxInvoices =
      object.numMaxInvoices !== undefined && object.numMaxInvoices !== null
        ? String(object.numMaxInvoices)
        : '0';
    message.reversed =
      object.reversed !== undefined && object.reversed !== null
        ? Boolean(object.reversed)
        : false;
    return message;
  },

  toJSON(message: ListInvoiceRequest): unknown {
    const object: any = {};
    message.pendingOnly !== undefined &&
      (object.pendingOnly = message.pendingOnly);
    message.indexOffset !== undefined &&
      (object.indexOffset = message.indexOffset);
    message.numMaxInvoices !== undefined &&
      (object.numMaxInvoices = message.numMaxInvoices);
    message.reversed !== undefined && (object.reversed = message.reversed);
    return object;
  },

  fromPartial(object: DeepPartial<ListInvoiceRequest>): ListInvoiceRequest {
    const message = createBaseListInvoiceRequest();
    message.pendingOnly = object.pendingOnly ?? false;
    message.indexOffset = object.indexOffset ?? '0';
    message.numMaxInvoices = object.numMaxInvoices ?? '0';
    message.reversed = object.reversed ?? false;
    return message;
  },
};

function createBaseListInvoiceResponse(): ListInvoiceResponse {
  return {invoices: [], lastIndexOffset: '0', firstIndexOffset: '0'};
}

export const ListInvoiceResponse = {
  encode(
    message: ListInvoiceResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.invoices) {
      Invoice.encode(v, writer.uint32(10).fork()).ldelim();
    }

    if (message.lastIndexOffset !== '0') {
      writer.uint32(16).uint64(message.lastIndexOffset);
    }

    if (message.firstIndexOffset !== '0') {
      writer.uint32(24).uint64(message.firstIndexOffset);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListInvoiceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListInvoiceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.invoices.push(Invoice.decode(reader, reader.uint32()));
          break;
        case 2:
          message.lastIndexOffset = longToString(reader.uint64() as Long);
          break;
        case 3:
          message.firstIndexOffset = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ListInvoiceResponse {
    const message = createBaseListInvoiceResponse();
    message.invoices = (object.invoices ?? []).map((e: any) =>
      Invoice.fromJSON(e),
    );
    message.lastIndexOffset =
      object.lastIndexOffset !== undefined && object.lastIndexOffset !== null
        ? String(object.lastIndexOffset)
        : '0';
    message.firstIndexOffset =
      object.firstIndexOffset !== undefined && object.firstIndexOffset !== null
        ? String(object.firstIndexOffset)
        : '0';
    return message;
  },

  toJSON(message: ListInvoiceResponse): unknown {
    const object: any = {};
    if (message.invoices) {
      object.invoices = message.invoices.map((e) =>
        e ? Invoice.toJSON(e) : undefined,
      );
    } else {
      object.invoices = [];
    }

    message.lastIndexOffset !== undefined &&
      (object.lastIndexOffset = message.lastIndexOffset);
    message.firstIndexOffset !== undefined &&
      (object.firstIndexOffset = message.firstIndexOffset);
    return object;
  },

  fromPartial(object: DeepPartial<ListInvoiceResponse>): ListInvoiceResponse {
    const message = createBaseListInvoiceResponse();
    message.invoices =
      object.invoices?.map((e) => Invoice.fromPartial(e)) || [];
    message.lastIndexOffset = object.lastIndexOffset ?? '0';
    message.firstIndexOffset = object.firstIndexOffset ?? '0';
    return message;
  },
};

function createBaseInvoiceSubscription(): InvoiceSubscription {
  return {addIndex: '0', settleIndex: '0'};
}

export const InvoiceSubscription = {
  encode(
    message: InvoiceSubscription,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.addIndex !== '0') {
      writer.uint32(8).uint64(message.addIndex);
    }

    if (message.settleIndex !== '0') {
      writer.uint32(16).uint64(message.settleIndex);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InvoiceSubscription {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInvoiceSubscription();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addIndex = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.settleIndex = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): InvoiceSubscription {
    const message = createBaseInvoiceSubscription();
    message.addIndex =
      object.addIndex !== undefined && object.addIndex !== null
        ? String(object.addIndex)
        : '0';
    message.settleIndex =
      object.settleIndex !== undefined && object.settleIndex !== null
        ? String(object.settleIndex)
        : '0';
    return message;
  },

  toJSON(message: InvoiceSubscription): unknown {
    const object: any = {};
    message.addIndex !== undefined && (object.addIndex = message.addIndex);
    message.settleIndex !== undefined &&
      (object.settleIndex = message.settleIndex);
    return object;
  },

  fromPartial(object: DeepPartial<InvoiceSubscription>): InvoiceSubscription {
    const message = createBaseInvoiceSubscription();
    message.addIndex = object.addIndex ?? '0';
    message.settleIndex = object.settleIndex ?? '0';
    return message;
  },
};

function createBasePayment(): Payment {
  return {
    paymentHash: '',
    value: '0',
    creationDate: '0',
    fee: '0',
    paymentPreimage: '',
    valueSat: '0',
    valueMsat: '0',
    paymentRequest: '',
    status: 0,
    feeSat: '0',
    feeMsat: '0',
    creationTimeNs: '0',
    htlcs: [],
    paymentIndex: '0',
    failureReason: 0,
  };
}

export const Payment = {
  encode(
    message: Payment,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.paymentHash !== '') {
      writer.uint32(10).string(message.paymentHash);
    }

    if (message.value !== '0') {
      writer.uint32(16).int64(message.value);
    }

    if (message.creationDate !== '0') {
      writer.uint32(24).int64(message.creationDate);
    }

    if (message.fee !== '0') {
      writer.uint32(40).int64(message.fee);
    }

    if (message.paymentPreimage !== '') {
      writer.uint32(50).string(message.paymentPreimage);
    }

    if (message.valueSat !== '0') {
      writer.uint32(56).int64(message.valueSat);
    }

    if (message.valueMsat !== '0') {
      writer.uint32(64).int64(message.valueMsat);
    }

    if (message.paymentRequest !== '') {
      writer.uint32(74).string(message.paymentRequest);
    }

    if (message.status !== 0) {
      writer.uint32(80).int32(message.status);
    }

    if (message.feeSat !== '0') {
      writer.uint32(88).int64(message.feeSat);
    }

    if (message.feeMsat !== '0') {
      writer.uint32(96).int64(message.feeMsat);
    }

    if (message.creationTimeNs !== '0') {
      writer.uint32(104).int64(message.creationTimeNs);
    }

    for (const v of message.htlcs) {
      HTLCAttempt.encode(v, writer.uint32(114).fork()).ldelim();
    }

    if (message.paymentIndex !== '0') {
      writer.uint32(120).uint64(message.paymentIndex);
    }

    if (message.failureReason !== 0) {
      writer.uint32(128).int32(message.failureReason);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Payment {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePayment();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.paymentHash = reader.string();
          break;
        case 2:
          message.value = longToString(reader.int64() as Long);
          break;
        case 3:
          message.creationDate = longToString(reader.int64() as Long);
          break;
        case 5:
          message.fee = longToString(reader.int64() as Long);
          break;
        case 6:
          message.paymentPreimage = reader.string();
          break;
        case 7:
          message.valueSat = longToString(reader.int64() as Long);
          break;
        case 8:
          message.valueMsat = longToString(reader.int64() as Long);
          break;
        case 9:
          message.paymentRequest = reader.string();
          break;
        case 10:
          message.status = reader.int32() as any;
          break;
        case 11:
          message.feeSat = longToString(reader.int64() as Long);
          break;
        case 12:
          message.feeMsat = longToString(reader.int64() as Long);
          break;
        case 13:
          message.creationTimeNs = longToString(reader.int64() as Long);
          break;
        case 14:
          message.htlcs.push(HTLCAttempt.decode(reader, reader.uint32()));
          break;
        case 15:
          message.paymentIndex = longToString(reader.uint64() as Long);
          break;
        case 16:
          message.failureReason = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Payment {
    const message = createBasePayment();
    message.paymentHash =
      object.paymentHash !== undefined && object.paymentHash !== null
        ? String(object.paymentHash)
        : '';
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : '0';
    message.creationDate =
      object.creationDate !== undefined && object.creationDate !== null
        ? String(object.creationDate)
        : '0';
    message.fee =
      object.fee !== undefined && object.fee !== null
        ? String(object.fee)
        : '0';
    message.paymentPreimage =
      object.paymentPreimage !== undefined && object.paymentPreimage !== null
        ? String(object.paymentPreimage)
        : '';
    message.valueSat =
      object.valueSat !== undefined && object.valueSat !== null
        ? String(object.valueSat)
        : '0';
    message.valueMsat =
      object.valueMsat !== undefined && object.valueMsat !== null
        ? String(object.valueMsat)
        : '0';
    message.paymentRequest =
      object.paymentRequest !== undefined && object.paymentRequest !== null
        ? String(object.paymentRequest)
        : '';
    message.status =
      object.status !== undefined && object.status !== null
        ? payment_PaymentStatusFromJSON(object.status)
        : 0;
    message.feeSat =
      object.feeSat !== undefined && object.feeSat !== null
        ? String(object.feeSat)
        : '0';
    message.feeMsat =
      object.feeMsat !== undefined && object.feeMsat !== null
        ? String(object.feeMsat)
        : '0';
    message.creationTimeNs =
      object.creationTimeNs !== undefined && object.creationTimeNs !== null
        ? String(object.creationTimeNs)
        : '0';
    message.htlcs = (object.htlcs ?? []).map((e: any) =>
      HTLCAttempt.fromJSON(e),
    );
    message.paymentIndex =
      object.paymentIndex !== undefined && object.paymentIndex !== null
        ? String(object.paymentIndex)
        : '0';
    message.failureReason =
      object.failureReason !== undefined && object.failureReason !== null
        ? paymentFailureReasonFromJSON(object.failureReason)
        : 0;
    return message;
  },

  toJSON(message: Payment): unknown {
    const object: any = {};
    message.paymentHash !== undefined &&
      (object.paymentHash = message.paymentHash);
    message.value !== undefined && (object.value = message.value);
    message.creationDate !== undefined &&
      (object.creationDate = message.creationDate);
    message.fee !== undefined && (object.fee = message.fee);
    message.paymentPreimage !== undefined &&
      (object.paymentPreimage = message.paymentPreimage);
    message.valueSat !== undefined && (object.valueSat = message.valueSat);
    message.valueMsat !== undefined && (object.valueMsat = message.valueMsat);
    message.paymentRequest !== undefined &&
      (object.paymentRequest = message.paymentRequest);
    message.status !== undefined &&
      (object.status = payment_PaymentStatusToJSON(message.status));
    message.feeSat !== undefined && (object.feeSat = message.feeSat);
    message.feeMsat !== undefined && (object.feeMsat = message.feeMsat);
    message.creationTimeNs !== undefined &&
      (object.creationTimeNs = message.creationTimeNs);
    if (message.htlcs) {
      object.htlcs = message.htlcs.map((e) =>
        e ? HTLCAttempt.toJSON(e) : undefined,
      );
    } else {
      object.htlcs = [];
    }

    message.paymentIndex !== undefined &&
      (object.paymentIndex = message.paymentIndex);
    message.failureReason !== undefined &&
      (object.failureReason = paymentFailureReasonToJSON(
        message.failureReason,
      ));
    return object;
  },

  fromPartial(object: DeepPartial<Payment>): Payment {
    const message = createBasePayment();
    message.paymentHash = object.paymentHash ?? '';
    message.value = object.value ?? '0';
    message.creationDate = object.creationDate ?? '0';
    message.fee = object.fee ?? '0';
    message.paymentPreimage = object.paymentPreimage ?? '';
    message.valueSat = object.valueSat ?? '0';
    message.valueMsat = object.valueMsat ?? '0';
    message.paymentRequest = object.paymentRequest ?? '';
    message.status = object.status ?? 0;
    message.feeSat = object.feeSat ?? '0';
    message.feeMsat = object.feeMsat ?? '0';
    message.creationTimeNs = object.creationTimeNs ?? '0';
    message.htlcs = object.htlcs?.map((e) => HTLCAttempt.fromPartial(e)) || [];
    message.paymentIndex = object.paymentIndex ?? '0';
    message.failureReason = object.failureReason ?? 0;
    return message;
  },
};

function createBaseHTLCAttempt(): HTLCAttempt {
  return {
    attemptId: '0',
    status: 0,
    route: undefined,
    attemptTimeNs: '0',
    resolveTimeNs: '0',
    failure: undefined,
    preimage: new Uint8Array(),
  };
}

export const HTLCAttempt = {
  encode(
    message: HTLCAttempt,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.attemptId !== '0') {
      writer.uint32(56).uint64(message.attemptId);
    }

    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }

    if (message.route !== undefined) {
      Route.encode(message.route, writer.uint32(18).fork()).ldelim();
    }

    if (message.attemptTimeNs !== '0') {
      writer.uint32(24).int64(message.attemptTimeNs);
    }

    if (message.resolveTimeNs !== '0') {
      writer.uint32(32).int64(message.resolveTimeNs);
    }

    if (message.failure !== undefined) {
      Failure.encode(message.failure, writer.uint32(42).fork()).ldelim();
    }

    if (message.preimage.length > 0) {
      writer.uint32(50).bytes(message.preimage);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HTLCAttempt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHTLCAttempt();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 7:
          message.attemptId = longToString(reader.uint64() as Long);
          break;
        case 1:
          message.status = reader.int32() as any;
          break;
        case 2:
          message.route = Route.decode(reader, reader.uint32());
          break;
        case 3:
          message.attemptTimeNs = longToString(reader.int64() as Long);
          break;
        case 4:
          message.resolveTimeNs = longToString(reader.int64() as Long);
          break;
        case 5:
          message.failure = Failure.decode(reader, reader.uint32());
          break;
        case 6:
          message.preimage = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): HTLCAttempt {
    const message = createBaseHTLCAttempt();
    message.attemptId =
      object.attemptId !== undefined && object.attemptId !== null
        ? String(object.attemptId)
        : '0';
    message.status =
      object.status !== undefined && object.status !== null
        ? hTLCAttempt_HTLCStatusFromJSON(object.status)
        : 0;
    message.route =
      object.route !== undefined && object.route !== null
        ? Route.fromJSON(object.route)
        : undefined;
    message.attemptTimeNs =
      object.attemptTimeNs !== undefined && object.attemptTimeNs !== null
        ? String(object.attemptTimeNs)
        : '0';
    message.resolveTimeNs =
      object.resolveTimeNs !== undefined && object.resolveTimeNs !== null
        ? String(object.resolveTimeNs)
        : '0';
    message.failure =
      object.failure !== undefined && object.failure !== null
        ? Failure.fromJSON(object.failure)
        : undefined;
    message.preimage =
      object.preimage !== undefined && object.preimage !== null
        ? bytesFromBase64(object.preimage)
        : new Uint8Array();
    return message;
  },

  toJSON(message: HTLCAttempt): unknown {
    const object: any = {};
    message.attemptId !== undefined && (object.attemptId = message.attemptId);
    message.status !== undefined &&
      (object.status = hTLCAttempt_HTLCStatusToJSON(message.status));
    message.route !== undefined &&
      (object.route = message.route ? Route.toJSON(message.route) : undefined);
    message.attemptTimeNs !== undefined &&
      (object.attemptTimeNs = message.attemptTimeNs);
    message.resolveTimeNs !== undefined &&
      (object.resolveTimeNs = message.resolveTimeNs);
    message.failure !== undefined &&
      (object.failure = message.failure
        ? Failure.toJSON(message.failure)
        : undefined);
    message.preimage !== undefined &&
      (object.preimage = base64FromBytes(
        message.preimage !== undefined ? message.preimage : new Uint8Array(),
      ));
    return object;
  },

  fromPartial(object: DeepPartial<HTLCAttempt>): HTLCAttempt {
    const message = createBaseHTLCAttempt();
    message.attemptId = object.attemptId ?? '0';
    message.status = object.status ?? 0;
    message.route =
      object.route !== undefined && object.route !== null
        ? Route.fromPartial(object.route)
        : undefined;
    message.attemptTimeNs = object.attemptTimeNs ?? '0';
    message.resolveTimeNs = object.resolveTimeNs ?? '0';
    message.failure =
      object.failure !== undefined && object.failure !== null
        ? Failure.fromPartial(object.failure)
        : undefined;
    message.preimage = object.preimage ?? new Uint8Array();
    return message;
  },
};

function createBaseListPaymentsRequest(): ListPaymentsRequest {
  return {
    includeIncomplete: false,
    indexOffset: '0',
    maxPayments: '0',
    reversed: false,
  };
}

export const ListPaymentsRequest = {
  encode(
    message: ListPaymentsRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.includeIncomplete) {
      writer.uint32(8).bool(message.includeIncomplete);
    }

    if (message.indexOffset !== '0') {
      writer.uint32(16).uint64(message.indexOffset);
    }

    if (message.maxPayments !== '0') {
      writer.uint32(24).uint64(message.maxPayments);
    }

    if (message.reversed) {
      writer.uint32(32).bool(message.reversed);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListPaymentsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListPaymentsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.includeIncomplete = reader.bool();
          break;
        case 2:
          message.indexOffset = longToString(reader.uint64() as Long);
          break;
        case 3:
          message.maxPayments = longToString(reader.uint64() as Long);
          break;
        case 4:
          message.reversed = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ListPaymentsRequest {
    const message = createBaseListPaymentsRequest();
    message.includeIncomplete =
      object.includeIncomplete !== undefined &&
      object.includeIncomplete !== null
        ? Boolean(object.includeIncomplete)
        : false;
    message.indexOffset =
      object.indexOffset !== undefined && object.indexOffset !== null
        ? String(object.indexOffset)
        : '0';
    message.maxPayments =
      object.maxPayments !== undefined && object.maxPayments !== null
        ? String(object.maxPayments)
        : '0';
    message.reversed =
      object.reversed !== undefined && object.reversed !== null
        ? Boolean(object.reversed)
        : false;
    return message;
  },

  toJSON(message: ListPaymentsRequest): unknown {
    const object: any = {};
    message.includeIncomplete !== undefined &&
      (object.includeIncomplete = message.includeIncomplete);
    message.indexOffset !== undefined &&
      (object.indexOffset = message.indexOffset);
    message.maxPayments !== undefined &&
      (object.maxPayments = message.maxPayments);
    message.reversed !== undefined && (object.reversed = message.reversed);
    return object;
  },

  fromPartial(object: DeepPartial<ListPaymentsRequest>): ListPaymentsRequest {
    const message = createBaseListPaymentsRequest();
    message.includeIncomplete = object.includeIncomplete ?? false;
    message.indexOffset = object.indexOffset ?? '0';
    message.maxPayments = object.maxPayments ?? '0';
    message.reversed = object.reversed ?? false;
    return message;
  },
};

function createBaseListPaymentsResponse(): ListPaymentsResponse {
  return {payments: [], firstIndexOffset: '0', lastIndexOffset: '0'};
}

export const ListPaymentsResponse = {
  encode(
    message: ListPaymentsResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.payments) {
      Payment.encode(v, writer.uint32(10).fork()).ldelim();
    }

    if (message.firstIndexOffset !== '0') {
      writer.uint32(16).uint64(message.firstIndexOffset);
    }

    if (message.lastIndexOffset !== '0') {
      writer.uint32(24).uint64(message.lastIndexOffset);
    }

    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ListPaymentsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListPaymentsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payments.push(Payment.decode(reader, reader.uint32()));
          break;
        case 2:
          message.firstIndexOffset = longToString(reader.uint64() as Long);
          break;
        case 3:
          message.lastIndexOffset = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ListPaymentsResponse {
    const message = createBaseListPaymentsResponse();
    message.payments = (object.payments ?? []).map((e: any) =>
      Payment.fromJSON(e),
    );
    message.firstIndexOffset =
      object.firstIndexOffset !== undefined && object.firstIndexOffset !== null
        ? String(object.firstIndexOffset)
        : '0';
    message.lastIndexOffset =
      object.lastIndexOffset !== undefined && object.lastIndexOffset !== null
        ? String(object.lastIndexOffset)
        : '0';
    return message;
  },

  toJSON(message: ListPaymentsResponse): unknown {
    const object: any = {};
    if (message.payments) {
      object.payments = message.payments.map((e) =>
        e ? Payment.toJSON(e) : undefined,
      );
    } else {
      object.payments = [];
    }

    message.firstIndexOffset !== undefined &&
      (object.firstIndexOffset = message.firstIndexOffset);
    message.lastIndexOffset !== undefined &&
      (object.lastIndexOffset = message.lastIndexOffset);
    return object;
  },

  fromPartial(object: DeepPartial<ListPaymentsResponse>): ListPaymentsResponse {
    const message = createBaseListPaymentsResponse();
    message.payments =
      object.payments?.map((e) => Payment.fromPartial(e)) || [];
    message.firstIndexOffset = object.firstIndexOffset ?? '0';
    message.lastIndexOffset = object.lastIndexOffset ?? '0';
    return message;
  },
};

function createBaseDeletePaymentRequest(): DeletePaymentRequest {
  return {paymentHash: new Uint8Array(), failedHtlcsOnly: false};
}

export const DeletePaymentRequest = {
  encode(
    message: DeletePaymentRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.paymentHash.length > 0) {
      writer.uint32(10).bytes(message.paymentHash);
    }

    if (message.failedHtlcsOnly) {
      writer.uint32(16).bool(message.failedHtlcsOnly);
    }

    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): DeletePaymentRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeletePaymentRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.paymentHash = reader.bytes();
          break;
        case 2:
          message.failedHtlcsOnly = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): DeletePaymentRequest {
    const message = createBaseDeletePaymentRequest();
    message.paymentHash =
      object.paymentHash !== undefined && object.paymentHash !== null
        ? bytesFromBase64(object.paymentHash)
        : new Uint8Array();
    message.failedHtlcsOnly =
      object.failedHtlcsOnly !== undefined && object.failedHtlcsOnly !== null
        ? Boolean(object.failedHtlcsOnly)
        : false;
    return message;
  },

  toJSON(message: DeletePaymentRequest): unknown {
    const object: any = {};
    message.paymentHash !== undefined &&
      (object.paymentHash = base64FromBytes(
        message.paymentHash !== undefined
          ? message.paymentHash
          : new Uint8Array(),
      ));
    message.failedHtlcsOnly !== undefined &&
      (object.failedHtlcsOnly = message.failedHtlcsOnly);
    return object;
  },

  fromPartial(object: DeepPartial<DeletePaymentRequest>): DeletePaymentRequest {
    const message = createBaseDeletePaymentRequest();
    message.paymentHash = object.paymentHash ?? new Uint8Array();
    message.failedHtlcsOnly = object.failedHtlcsOnly ?? false;
    return message;
  },
};

function createBaseDeleteAllPaymentsRequest(): DeleteAllPaymentsRequest {
  return {failedPaymentsOnly: false, failedHtlcsOnly: false};
}

export const DeleteAllPaymentsRequest = {
  encode(
    message: DeleteAllPaymentsRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.failedPaymentsOnly) {
      writer.uint32(8).bool(message.failedPaymentsOnly);
    }

    if (message.failedHtlcsOnly) {
      writer.uint32(16).bool(message.failedHtlcsOnly);
    }

    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): DeleteAllPaymentsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteAllPaymentsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.failedPaymentsOnly = reader.bool();
          break;
        case 2:
          message.failedHtlcsOnly = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): DeleteAllPaymentsRequest {
    const message = createBaseDeleteAllPaymentsRequest();
    message.failedPaymentsOnly =
      object.failedPaymentsOnly !== undefined &&
      object.failedPaymentsOnly !== null
        ? Boolean(object.failedPaymentsOnly)
        : false;
    message.failedHtlcsOnly =
      object.failedHtlcsOnly !== undefined && object.failedHtlcsOnly !== null
        ? Boolean(object.failedHtlcsOnly)
        : false;
    return message;
  },

  toJSON(message: DeleteAllPaymentsRequest): unknown {
    const object: any = {};
    message.failedPaymentsOnly !== undefined &&
      (object.failedPaymentsOnly = message.failedPaymentsOnly);
    message.failedHtlcsOnly !== undefined &&
      (object.failedHtlcsOnly = message.failedHtlcsOnly);
    return object;
  },

  fromPartial(
    object: DeepPartial<DeleteAllPaymentsRequest>,
  ): DeleteAllPaymentsRequest {
    const message = createBaseDeleteAllPaymentsRequest();
    message.failedPaymentsOnly = object.failedPaymentsOnly ?? false;
    message.failedHtlcsOnly = object.failedHtlcsOnly ?? false;
    return message;
  },
};

function createBaseDeletePaymentResponse(): DeletePaymentResponse {
  return {};
}

export const DeletePaymentResponse = {
  encode(
    _: DeletePaymentResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): DeletePaymentResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeletePaymentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): DeletePaymentResponse {
    const message = createBaseDeletePaymentResponse();
    return message;
  },

  toJSON(_: DeletePaymentResponse): unknown {
    const object: any = {};
    return object;
  },

  fromPartial(_: DeepPartial<DeletePaymentResponse>): DeletePaymentResponse {
    const message = createBaseDeletePaymentResponse();
    return message;
  },
};

function createBaseDeleteAllPaymentsResponse(): DeleteAllPaymentsResponse {
  return {};
}

export const DeleteAllPaymentsResponse = {
  encode(
    _: DeleteAllPaymentsResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): DeleteAllPaymentsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteAllPaymentsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): DeleteAllPaymentsResponse {
    const message = createBaseDeleteAllPaymentsResponse();
    return message;
  },

  toJSON(_: DeleteAllPaymentsResponse): unknown {
    const object: any = {};
    return object;
  },

  fromPartial(
    _: DeepPartial<DeleteAllPaymentsResponse>,
  ): DeleteAllPaymentsResponse {
    const message = createBaseDeleteAllPaymentsResponse();
    return message;
  },
};

function createBaseAbandonChannelRequest(): AbandonChannelRequest {
  return {
    channelPoint: undefined,
    pendingFundingShimOnly: false,
    iKnowWhatIAmDoing: false,
  };
}

export const AbandonChannelRequest = {
  encode(
    message: AbandonChannelRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.channelPoint !== undefined) {
      ChannelPoint.encode(
        message.channelPoint,
        writer.uint32(10).fork(),
      ).ldelim();
    }

    if (message.pendingFundingShimOnly) {
      writer.uint32(16).bool(message.pendingFundingShimOnly);
    }

    if (message.iKnowWhatIAmDoing) {
      writer.uint32(24).bool(message.iKnowWhatIAmDoing);
    }

    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): AbandonChannelRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAbandonChannelRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channelPoint = ChannelPoint.decode(reader, reader.uint32());
          break;
        case 2:
          message.pendingFundingShimOnly = reader.bool();
          break;
        case 3:
          message.iKnowWhatIAmDoing = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): AbandonChannelRequest {
    const message = createBaseAbandonChannelRequest();
    message.channelPoint =
      object.channelPoint !== undefined && object.channelPoint !== null
        ? ChannelPoint.fromJSON(object.channelPoint)
        : undefined;
    message.pendingFundingShimOnly =
      object.pendingFundingShimOnly !== undefined &&
      object.pendingFundingShimOnly !== null
        ? Boolean(object.pendingFundingShimOnly)
        : false;
    message.iKnowWhatIAmDoing =
      object.iKnowWhatIAmDoing !== undefined &&
      object.iKnowWhatIAmDoing !== null
        ? Boolean(object.iKnowWhatIAmDoing)
        : false;
    return message;
  },

  toJSON(message: AbandonChannelRequest): unknown {
    const object: any = {};
    message.channelPoint !== undefined &&
      (object.channelPoint = message.channelPoint
        ? ChannelPoint.toJSON(message.channelPoint)
        : undefined);
    message.pendingFundingShimOnly !== undefined &&
      (object.pendingFundingShimOnly = message.pendingFundingShimOnly);
    message.iKnowWhatIAmDoing !== undefined &&
      (object.iKnowWhatIAmDoing = message.iKnowWhatIAmDoing);
    return object;
  },

  fromPartial(
    object: DeepPartial<AbandonChannelRequest>,
  ): AbandonChannelRequest {
    const message = createBaseAbandonChannelRequest();
    message.channelPoint =
      object.channelPoint !== undefined && object.channelPoint !== null
        ? ChannelPoint.fromPartial(object.channelPoint)
        : undefined;
    message.pendingFundingShimOnly = object.pendingFundingShimOnly ?? false;
    message.iKnowWhatIAmDoing = object.iKnowWhatIAmDoing ?? false;
    return message;
  },
};

function createBaseAbandonChannelResponse(): AbandonChannelResponse {
  return {};
}

export const AbandonChannelResponse = {
  encode(
    _: AbandonChannelResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): AbandonChannelResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAbandonChannelResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): AbandonChannelResponse {
    const message = createBaseAbandonChannelResponse();
    return message;
  },

  toJSON(_: AbandonChannelResponse): unknown {
    const object: any = {};
    return object;
  },

  fromPartial(_: DeepPartial<AbandonChannelResponse>): AbandonChannelResponse {
    const message = createBaseAbandonChannelResponse();
    return message;
  },
};

function createBaseDebugLevelRequest(): DebugLevelRequest {
  return {show: false, levelSpec: ''};
}

export const DebugLevelRequest = {
  encode(
    message: DebugLevelRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.show) {
      writer.uint32(8).bool(message.show);
    }

    if (message.levelSpec !== '') {
      writer.uint32(18).string(message.levelSpec);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DebugLevelRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDebugLevelRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.show = reader.bool();
          break;
        case 2:
          message.levelSpec = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): DebugLevelRequest {
    const message = createBaseDebugLevelRequest();
    message.show =
      object.show !== undefined && object.show !== null
        ? Boolean(object.show)
        : false;
    message.levelSpec =
      object.levelSpec !== undefined && object.levelSpec !== null
        ? String(object.levelSpec)
        : '';
    return message;
  },

  toJSON(message: DebugLevelRequest): unknown {
    const object: any = {};
    message.show !== undefined && (object.show = message.show);
    message.levelSpec !== undefined && (object.levelSpec = message.levelSpec);
    return object;
  },

  fromPartial(object: DeepPartial<DebugLevelRequest>): DebugLevelRequest {
    const message = createBaseDebugLevelRequest();
    message.show = object.show ?? false;
    message.levelSpec = object.levelSpec ?? '';
    return message;
  },
};

function createBaseDebugLevelResponse(): DebugLevelResponse {
  return {subSystems: ''};
}

export const DebugLevelResponse = {
  encode(
    message: DebugLevelResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.subSystems !== '') {
      writer.uint32(10).string(message.subSystems);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DebugLevelResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDebugLevelResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subSystems = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): DebugLevelResponse {
    const message = createBaseDebugLevelResponse();
    message.subSystems =
      object.subSystems !== undefined && object.subSystems !== null
        ? String(object.subSystems)
        : '';
    return message;
  },

  toJSON(message: DebugLevelResponse): unknown {
    const object: any = {};
    message.subSystems !== undefined &&
      (object.subSystems = message.subSystems);
    return object;
  },

  fromPartial(object: DeepPartial<DebugLevelResponse>): DebugLevelResponse {
    const message = createBaseDebugLevelResponse();
    message.subSystems = object.subSystems ?? '';
    return message;
  },
};

function createBasePayRequestString(): PayReqString {
  return {payReq: ''};
}

export const PayReqString = {
  encode(
    message: PayReqString,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.payReq !== '') {
      writer.uint32(10).string(message.payReq);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PayReqString {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePayRequestString();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payReq = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): PayReqString {
    const message = createBasePayRequestString();
    message.payReq =
      object.payReq !== undefined && object.payReq !== null
        ? String(object.payReq)
        : '';
    return message;
  },

  toJSON(message: PayReqString): unknown {
    const object: any = {};
    message.payReq !== undefined && (object.payReq = message.payReq);
    return object;
  },

  fromPartial(object: DeepPartial<PayReqString>): PayReqString {
    const message = createBasePayRequestString();
    message.payReq = object.payReq ?? '';
    return message;
  },
};

function createBasePayRequest(): PayReq {
  return {
    destination: '',
    paymentHash: '',
    numSatoshis: '0',
    timestamp: '0',
    expiry: '0',
    description: '',
    descriptionHash: '',
    fallbackAddr: '',
    cltvExpiry: '0',
    routeHints: [],
    paymentAddr: new Uint8Array(),
    numMsat: '0',
    features: {},
  };
}

export const PayReq = {
  encode(
    message: PayReq,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.destination !== '') {
      writer.uint32(10).string(message.destination);
    }

    if (message.paymentHash !== '') {
      writer.uint32(18).string(message.paymentHash);
    }

    if (message.numSatoshis !== '0') {
      writer.uint32(24).int64(message.numSatoshis);
    }

    if (message.timestamp !== '0') {
      writer.uint32(32).int64(message.timestamp);
    }

    if (message.expiry !== '0') {
      writer.uint32(40).int64(message.expiry);
    }

    if (message.description !== '') {
      writer.uint32(50).string(message.description);
    }

    if (message.descriptionHash !== '') {
      writer.uint32(58).string(message.descriptionHash);
    }

    if (message.fallbackAddr !== '') {
      writer.uint32(66).string(message.fallbackAddr);
    }

    if (message.cltvExpiry !== '0') {
      writer.uint32(72).int64(message.cltvExpiry);
    }

    for (const v of message.routeHints) {
      RouteHint.encode(v, writer.uint32(82).fork()).ldelim();
    }

    if (message.paymentAddr.length > 0) {
      writer.uint32(90).bytes(message.paymentAddr);
    }

    if (message.numMsat !== '0') {
      writer.uint32(96).int64(message.numMsat);
    }

    for (const [key, value] of Object.entries(message.features)) {
      PayReq_FeaturesEntry.encode(
        {key: key as any, value},
        writer.uint32(106).fork(),
      ).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PayReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePayRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.destination = reader.string();
          break;
        case 2:
          message.paymentHash = reader.string();
          break;
        case 3:
          message.numSatoshis = longToString(reader.int64() as Long);
          break;
        case 4:
          message.timestamp = longToString(reader.int64() as Long);
          break;
        case 5:
          message.expiry = longToString(reader.int64() as Long);
          break;
        case 6:
          message.description = reader.string();
          break;
        case 7:
          message.descriptionHash = reader.string();
          break;
        case 8:
          message.fallbackAddr = reader.string();
          break;
        case 9:
          message.cltvExpiry = longToString(reader.int64() as Long);
          break;
        case 10:
          message.routeHints.push(RouteHint.decode(reader, reader.uint32()));
          break;
        case 11:
          message.paymentAddr = reader.bytes();
          break;
        case 12:
          message.numMsat = longToString(reader.int64() as Long);
          break;
        case 13:
          const entry13 = PayReq_FeaturesEntry.decode(reader, reader.uint32());
          if (entry13.value !== undefined) {
            message.features[entry13.key] = entry13.value;
          }

          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): PayReq {
    const message = createBasePayRequest();
    message.destination =
      object.destination !== undefined && object.destination !== null
        ? String(object.destination)
        : '';
    message.paymentHash =
      object.paymentHash !== undefined && object.paymentHash !== null
        ? String(object.paymentHash)
        : '';
    message.numSatoshis =
      object.numSatoshis !== undefined && object.numSatoshis !== null
        ? String(object.numSatoshis)
        : '0';
    message.timestamp =
      object.timestamp !== undefined && object.timestamp !== null
        ? String(object.timestamp)
        : '0';
    message.expiry =
      object.expiry !== undefined && object.expiry !== null
        ? String(object.expiry)
        : '0';
    message.description =
      object.description !== undefined && object.description !== null
        ? String(object.description)
        : '';
    message.descriptionHash =
      object.descriptionHash !== undefined && object.descriptionHash !== null
        ? String(object.descriptionHash)
        : '';
    message.fallbackAddr =
      object.fallbackAddr !== undefined && object.fallbackAddr !== null
        ? String(object.fallbackAddr)
        : '';
    message.cltvExpiry =
      object.cltvExpiry !== undefined && object.cltvExpiry !== null
        ? String(object.cltvExpiry)
        : '0';
    message.routeHints = (object.routeHints ?? []).map((e: any) =>
      RouteHint.fromJSON(e),
    );
    message.paymentAddr =
      object.paymentAddr !== undefined && object.paymentAddr !== null
        ? bytesFromBase64(object.paymentAddr)
        : new Uint8Array();
    message.numMsat =
      object.numMsat !== undefined && object.numMsat !== null
        ? String(object.numMsat)
        : '0';
    message.features = Object.entries(object.features ?? {}).reduce<
      Record<number, Feature>
    >((acc, [key, value]) => {
      acc[Number(key)] = Feature.fromJSON(value);
      return acc;
    }, {});
    return message;
  },

  toJSON(message: PayReq): unknown {
    const object: any = {};
    message.destination !== undefined &&
      (object.destination = message.destination);
    message.paymentHash !== undefined &&
      (object.paymentHash = message.paymentHash);
    message.numSatoshis !== undefined &&
      (object.numSatoshis = message.numSatoshis);
    message.timestamp !== undefined && (object.timestamp = message.timestamp);
    message.expiry !== undefined && (object.expiry = message.expiry);
    message.description !== undefined &&
      (object.description = message.description);
    message.descriptionHash !== undefined &&
      (object.descriptionHash = message.descriptionHash);
    message.fallbackAddr !== undefined &&
      (object.fallbackAddr = message.fallbackAddr);
    message.cltvExpiry !== undefined &&
      (object.cltvExpiry = message.cltvExpiry);
    if (message.routeHints) {
      object.routeHints = message.routeHints.map((e) =>
        e ? RouteHint.toJSON(e) : undefined,
      );
    } else {
      object.routeHints = [];
    }

    message.paymentAddr !== undefined &&
      (object.paymentAddr = base64FromBytes(
        message.paymentAddr !== undefined
          ? message.paymentAddr
          : new Uint8Array(),
      ));
    message.numMsat !== undefined && (object.numMsat = message.numMsat);
    object.features = {};
    if (message.features) {
      for (const [k, v] of Object.entries(message.features)) {
        object.features[k] = Feature.toJSON(v);
      }
    }

    return object;
  },

  fromPartial(object: DeepPartial<PayReq>): PayReq {
    const message = createBasePayRequest();
    message.destination = object.destination ?? '';
    message.paymentHash = object.paymentHash ?? '';
    message.numSatoshis = object.numSatoshis ?? '0';
    message.timestamp = object.timestamp ?? '0';
    message.expiry = object.expiry ?? '0';
    message.description = object.description ?? '';
    message.descriptionHash = object.descriptionHash ?? '';
    message.fallbackAddr = object.fallbackAddr ?? '';
    message.cltvExpiry = object.cltvExpiry ?? '0';
    message.routeHints =
      object.routeHints?.map((e) => RouteHint.fromPartial(e)) || [];
    message.paymentAddr = object.paymentAddr ?? new Uint8Array();
    message.numMsat = object.numMsat ?? '0';
    message.features = Object.entries(object.features ?? {}).reduce<
      Record<number, Feature>
    >((acc, [key, value]) => {
      if (value !== undefined) {
        acc[Number(key)] = Feature.fromPartial(value);
      }

      return acc;
    }, {});
    return message;
  },
};

function createBasePayRequest_FeaturesEntry(): PayReq_FeaturesEntry {
  return {key: 0, value: undefined};
}

export const PayReq_FeaturesEntry = {
  encode(
    message: PayReq_FeaturesEntry,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).uint32(message.key);
    }

    if (message.value !== undefined) {
      Feature.encode(message.value, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): PayReq_FeaturesEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePayRequest_FeaturesEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.uint32();
          break;
        case 2:
          message.value = Feature.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): PayReq_FeaturesEntry {
    const message = createBasePayRequest_FeaturesEntry();
    message.key =
      object.key !== undefined && object.key !== null ? Number(object.key) : 0;
    message.value =
      object.value !== undefined && object.value !== null
        ? Feature.fromJSON(object.value)
        : undefined;
    return message;
  },

  toJSON(message: PayReq_FeaturesEntry): unknown {
    const object: any = {};
    message.key !== undefined && (object.key = Math.round(message.key));
    message.value !== undefined &&
      (object.value = message.value
        ? Feature.toJSON(message.value)
        : undefined);
    return object;
  },

  fromPartial(object: DeepPartial<PayReq_FeaturesEntry>): PayReq_FeaturesEntry {
    const message = createBasePayRequest_FeaturesEntry();
    message.key = object.key ?? 0;
    message.value =
      object.value !== undefined && object.value !== null
        ? Feature.fromPartial(object.value)
        : undefined;
    return message;
  },
};

function createBaseFeature(): Feature {
  return {name: '', isRequired: false, isKnown: false};
}

export const Feature = {
  encode(
    message: Feature,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.name !== '') {
      writer.uint32(18).string(message.name);
    }

    if (message.isRequired) {
      writer.uint32(24).bool(message.isRequired);
    }

    if (message.isKnown) {
      writer.uint32(32).bool(message.isKnown);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Feature {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeature();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.isRequired = reader.bool();
          break;
        case 4:
          message.isKnown = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Feature {
    const message = createBaseFeature();
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : '';
    message.isRequired =
      object.isRequired !== undefined && object.isRequired !== null
        ? Boolean(object.isRequired)
        : false;
    message.isKnown =
      object.isKnown !== undefined && object.isKnown !== null
        ? Boolean(object.isKnown)
        : false;
    return message;
  },

  toJSON(message: Feature): unknown {
    const object: any = {};
    message.name !== undefined && (object.name = message.name);
    message.isRequired !== undefined &&
      (object.isRequired = message.isRequired);
    message.isKnown !== undefined && (object.isKnown = message.isKnown);
    return object;
  },

  fromPartial(object: DeepPartial<Feature>): Feature {
    const message = createBaseFeature();
    message.name = object.name ?? '';
    message.isRequired = object.isRequired ?? false;
    message.isKnown = object.isKnown ?? false;
    return message;
  },
};

function createBaseFeeReportRequest(): FeeReportRequest {
  return {};
}

export const FeeReportRequest = {
  encode(
    _: FeeReportRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FeeReportRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeeReportRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): FeeReportRequest {
    const message = createBaseFeeReportRequest();
    return message;
  },

  toJSON(_: FeeReportRequest): unknown {
    const object: any = {};
    return object;
  },

  fromPartial(_: DeepPartial<FeeReportRequest>): FeeReportRequest {
    const message = createBaseFeeReportRequest();
    return message;
  },
};

function createBaseChannelFeeReport(): ChannelFeeReport {
  return {
    chanId: '0',
    channelPoint: '',
    baseFeeMsat: '0',
    feePerMil: '0',
    feeRate: 0,
  };
}

export const ChannelFeeReport = {
  encode(
    message: ChannelFeeReport,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.chanId !== '0') {
      writer.uint32(40).uint64(message.chanId);
    }

    if (message.channelPoint !== '') {
      writer.uint32(10).string(message.channelPoint);
    }

    if (message.baseFeeMsat !== '0') {
      writer.uint32(16).int64(message.baseFeeMsat);
    }

    if (message.feePerMil !== '0') {
      writer.uint32(24).int64(message.feePerMil);
    }

    if (message.feeRate !== 0) {
      writer.uint32(33).double(message.feeRate);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChannelFeeReport {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChannelFeeReport();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 5:
          message.chanId = longToString(reader.uint64() as Long);
          break;
        case 1:
          message.channelPoint = reader.string();
          break;
        case 2:
          message.baseFeeMsat = longToString(reader.int64() as Long);
          break;
        case 3:
          message.feePerMil = longToString(reader.int64() as Long);
          break;
        case 4:
          message.feeRate = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ChannelFeeReport {
    const message = createBaseChannelFeeReport();
    message.chanId =
      object.chanId !== undefined && object.chanId !== null
        ? String(object.chanId)
        : '0';
    message.channelPoint =
      object.channelPoint !== undefined && object.channelPoint !== null
        ? String(object.channelPoint)
        : '';
    message.baseFeeMsat =
      object.baseFeeMsat !== undefined && object.baseFeeMsat !== null
        ? String(object.baseFeeMsat)
        : '0';
    message.feePerMil =
      object.feePerMil !== undefined && object.feePerMil !== null
        ? String(object.feePerMil)
        : '0';
    message.feeRate =
      object.feeRate !== undefined && object.feeRate !== null
        ? Number(object.feeRate)
        : 0;
    return message;
  },

  toJSON(message: ChannelFeeReport): unknown {
    const object: any = {};
    message.chanId !== undefined && (object.chanId = message.chanId);
    message.channelPoint !== undefined &&
      (object.channelPoint = message.channelPoint);
    message.baseFeeMsat !== undefined &&
      (object.baseFeeMsat = message.baseFeeMsat);
    message.feePerMil !== undefined && (object.feePerMil = message.feePerMil);
    message.feeRate !== undefined && (object.feeRate = message.feeRate);
    return object;
  },

  fromPartial(object: DeepPartial<ChannelFeeReport>): ChannelFeeReport {
    const message = createBaseChannelFeeReport();
    message.chanId = object.chanId ?? '0';
    message.channelPoint = object.channelPoint ?? '';
    message.baseFeeMsat = object.baseFeeMsat ?? '0';
    message.feePerMil = object.feePerMil ?? '0';
    message.feeRate = object.feeRate ?? 0;
    return message;
  },
};

function createBaseFeeReportResponse(): FeeReportResponse {
  return {channelFees: [], dayFeeSum: '0', weekFeeSum: '0', monthFeeSum: '0'};
}

export const FeeReportResponse = {
  encode(
    message: FeeReportResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.channelFees) {
      ChannelFeeReport.encode(v, writer.uint32(10).fork()).ldelim();
    }

    if (message.dayFeeSum !== '0') {
      writer.uint32(16).uint64(message.dayFeeSum);
    }

    if (message.weekFeeSum !== '0') {
      writer.uint32(24).uint64(message.weekFeeSum);
    }

    if (message.monthFeeSum !== '0') {
      writer.uint32(32).uint64(message.monthFeeSum);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FeeReportResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeeReportResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channelFees.push(
            ChannelFeeReport.decode(reader, reader.uint32()),
          );
          break;
        case 2:
          message.dayFeeSum = longToString(reader.uint64() as Long);
          break;
        case 3:
          message.weekFeeSum = longToString(reader.uint64() as Long);
          break;
        case 4:
          message.monthFeeSum = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): FeeReportResponse {
    const message = createBaseFeeReportResponse();
    message.channelFees = (object.channelFees ?? []).map((e: any) =>
      ChannelFeeReport.fromJSON(e),
    );
    message.dayFeeSum =
      object.dayFeeSum !== undefined && object.dayFeeSum !== null
        ? String(object.dayFeeSum)
        : '0';
    message.weekFeeSum =
      object.weekFeeSum !== undefined && object.weekFeeSum !== null
        ? String(object.weekFeeSum)
        : '0';
    message.monthFeeSum =
      object.monthFeeSum !== undefined && object.monthFeeSum !== null
        ? String(object.monthFeeSum)
        : '0';
    return message;
  },

  toJSON(message: FeeReportResponse): unknown {
    const object: any = {};
    if (message.channelFees) {
      object.channelFees = message.channelFees.map((e) =>
        e ? ChannelFeeReport.toJSON(e) : undefined,
      );
    } else {
      object.channelFees = [];
    }

    message.dayFeeSum !== undefined && (object.dayFeeSum = message.dayFeeSum);
    message.weekFeeSum !== undefined &&
      (object.weekFeeSum = message.weekFeeSum);
    message.monthFeeSum !== undefined &&
      (object.monthFeeSum = message.monthFeeSum);
    return object;
  },

  fromPartial(object: DeepPartial<FeeReportResponse>): FeeReportResponse {
    const message = createBaseFeeReportResponse();
    message.channelFees =
      object.channelFees?.map((e) => ChannelFeeReport.fromPartial(e)) || [];
    message.dayFeeSum = object.dayFeeSum ?? '0';
    message.weekFeeSum = object.weekFeeSum ?? '0';
    message.monthFeeSum = object.monthFeeSum ?? '0';
    return message;
  },
};

function createBasePolicyUpdateRequest(): PolicyUpdateRequest {
  return {
    global: undefined,
    chanPoint: undefined,
    baseFeeMsat: '0',
    feeRate: 0,
    timeLockDelta: 0,
    maxHtlcMsat: '0',
    minHtlcMsat: '0',
    minHtlcMsatSpecified: false,
  };
}

export const PolicyUpdateRequest = {
  encode(
    message: PolicyUpdateRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.global !== undefined) {
      writer.uint32(8).bool(message.global);
    }

    if (message.chanPoint !== undefined) {
      ChannelPoint.encode(message.chanPoint, writer.uint32(18).fork()).ldelim();
    }

    if (message.baseFeeMsat !== '0') {
      writer.uint32(24).int64(message.baseFeeMsat);
    }

    if (message.feeRate !== 0) {
      writer.uint32(33).double(message.feeRate);
    }

    if (message.timeLockDelta !== 0) {
      writer.uint32(40).uint32(message.timeLockDelta);
    }

    if (message.maxHtlcMsat !== '0') {
      writer.uint32(48).uint64(message.maxHtlcMsat);
    }

    if (message.minHtlcMsat !== '0') {
      writer.uint32(56).uint64(message.minHtlcMsat);
    }

    if (message.minHtlcMsatSpecified) {
      writer.uint32(64).bool(message.minHtlcMsatSpecified);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PolicyUpdateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePolicyUpdateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.global = reader.bool();
          break;
        case 2:
          message.chanPoint = ChannelPoint.decode(reader, reader.uint32());
          break;
        case 3:
          message.baseFeeMsat = longToString(reader.int64() as Long);
          break;
        case 4:
          message.feeRate = reader.double();
          break;
        case 5:
          message.timeLockDelta = reader.uint32();
          break;
        case 6:
          message.maxHtlcMsat = longToString(reader.uint64() as Long);
          break;
        case 7:
          message.minHtlcMsat = longToString(reader.uint64() as Long);
          break;
        case 8:
          message.minHtlcMsatSpecified = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): PolicyUpdateRequest {
    const message = createBasePolicyUpdateRequest();
    message.global =
      object.global !== undefined && object.global !== null
        ? Boolean(object.global)
        : undefined;
    message.chanPoint =
      object.chanPoint !== undefined && object.chanPoint !== null
        ? ChannelPoint.fromJSON(object.chanPoint)
        : undefined;
    message.baseFeeMsat =
      object.baseFeeMsat !== undefined && object.baseFeeMsat !== null
        ? String(object.baseFeeMsat)
        : '0';
    message.feeRate =
      object.feeRate !== undefined && object.feeRate !== null
        ? Number(object.feeRate)
        : 0;
    message.timeLockDelta =
      object.timeLockDelta !== undefined && object.timeLockDelta !== null
        ? Number(object.timeLockDelta)
        : 0;
    message.maxHtlcMsat =
      object.maxHtlcMsat !== undefined && object.maxHtlcMsat !== null
        ? String(object.maxHtlcMsat)
        : '0';
    message.minHtlcMsat =
      object.minHtlcMsat !== undefined && object.minHtlcMsat !== null
        ? String(object.minHtlcMsat)
        : '0';
    message.minHtlcMsatSpecified =
      object.minHtlcMsatSpecified !== undefined &&
      object.minHtlcMsatSpecified !== null
        ? Boolean(object.minHtlcMsatSpecified)
        : false;
    return message;
  },

  toJSON(message: PolicyUpdateRequest): unknown {
    const object: any = {};
    message.global !== undefined && (object.global = message.global);
    message.chanPoint !== undefined &&
      (object.chanPoint = message.chanPoint
        ? ChannelPoint.toJSON(message.chanPoint)
        : undefined);
    message.baseFeeMsat !== undefined &&
      (object.baseFeeMsat = message.baseFeeMsat);
    message.feeRate !== undefined && (object.feeRate = message.feeRate);
    message.timeLockDelta !== undefined &&
      (object.timeLockDelta = Math.round(message.timeLockDelta));
    message.maxHtlcMsat !== undefined &&
      (object.maxHtlcMsat = message.maxHtlcMsat);
    message.minHtlcMsat !== undefined &&
      (object.minHtlcMsat = message.minHtlcMsat);
    message.minHtlcMsatSpecified !== undefined &&
      (object.minHtlcMsatSpecified = message.minHtlcMsatSpecified);
    return object;
  },

  fromPartial(object: DeepPartial<PolicyUpdateRequest>): PolicyUpdateRequest {
    const message = createBasePolicyUpdateRequest();
    message.global = object.global ?? undefined;
    message.chanPoint =
      object.chanPoint !== undefined && object.chanPoint !== null
        ? ChannelPoint.fromPartial(object.chanPoint)
        : undefined;
    message.baseFeeMsat = object.baseFeeMsat ?? '0';
    message.feeRate = object.feeRate ?? 0;
    message.timeLockDelta = object.timeLockDelta ?? 0;
    message.maxHtlcMsat = object.maxHtlcMsat ?? '0';
    message.minHtlcMsat = object.minHtlcMsat ?? '0';
    message.minHtlcMsatSpecified = object.minHtlcMsatSpecified ?? false;
    return message;
  },
};

function createBaseFailedUpdate(): FailedUpdate {
  return {outpoint: undefined, reason: 0, updateError: ''};
}

export const FailedUpdate = {
  encode(
    message: FailedUpdate,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.outpoint !== undefined) {
      OutPoint.encode(message.outpoint, writer.uint32(10).fork()).ldelim();
    }

    if (message.reason !== 0) {
      writer.uint32(16).int32(message.reason);
    }

    if (message.updateError !== '') {
      writer.uint32(26).string(message.updateError);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FailedUpdate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFailedUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.outpoint = OutPoint.decode(reader, reader.uint32());
          break;
        case 2:
          message.reason = reader.int32() as any;
          break;
        case 3:
          message.updateError = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): FailedUpdate {
    const message = createBaseFailedUpdate();
    message.outpoint =
      object.outpoint !== undefined && object.outpoint !== null
        ? OutPoint.fromJSON(object.outpoint)
        : undefined;
    message.reason =
      object.reason !== undefined && object.reason !== null
        ? updateFailureFromJSON(object.reason)
        : 0;
    message.updateError =
      object.updateError !== undefined && object.updateError !== null
        ? String(object.updateError)
        : '';
    return message;
  },

  toJSON(message: FailedUpdate): unknown {
    const object: any = {};
    message.outpoint !== undefined &&
      (object.outpoint = message.outpoint
        ? OutPoint.toJSON(message.outpoint)
        : undefined);
    message.reason !== undefined &&
      (object.reason = updateFailureToJSON(message.reason));
    message.updateError !== undefined &&
      (object.updateError = message.updateError);
    return object;
  },

  fromPartial(object: DeepPartial<FailedUpdate>): FailedUpdate {
    const message = createBaseFailedUpdate();
    message.outpoint =
      object.outpoint !== undefined && object.outpoint !== null
        ? OutPoint.fromPartial(object.outpoint)
        : undefined;
    message.reason = object.reason ?? 0;
    message.updateError = object.updateError ?? '';
    return message;
  },
};

function createBasePolicyUpdateResponse(): PolicyUpdateResponse {
  return {failedUpdates: []};
}

export const PolicyUpdateResponse = {
  encode(
    message: PolicyUpdateResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.failedUpdates) {
      FailedUpdate.encode(v, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): PolicyUpdateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePolicyUpdateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.failedUpdates.push(
            FailedUpdate.decode(reader, reader.uint32()),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): PolicyUpdateResponse {
    const message = createBasePolicyUpdateResponse();
    message.failedUpdates = (object.failedUpdates ?? []).map((e: any) =>
      FailedUpdate.fromJSON(e),
    );
    return message;
  },

  toJSON(message: PolicyUpdateResponse): unknown {
    const object: any = {};
    if (message.failedUpdates) {
      object.failedUpdates = message.failedUpdates.map((e) =>
        e ? FailedUpdate.toJSON(e) : undefined,
      );
    } else {
      object.failedUpdates = [];
    }

    return object;
  },

  fromPartial(object: DeepPartial<PolicyUpdateResponse>): PolicyUpdateResponse {
    const message = createBasePolicyUpdateResponse();
    message.failedUpdates =
      object.failedUpdates?.map((e) => FailedUpdate.fromPartial(e)) || [];
    return message;
  },
};

function createBaseForwardingHistoryRequest(): ForwardingHistoryRequest {
  return {startTime: '0', endTime: '0', indexOffset: 0, numMaxEvents: 0};
}

export const ForwardingHistoryRequest = {
  encode(
    message: ForwardingHistoryRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.startTime !== '0') {
      writer.uint32(8).uint64(message.startTime);
    }

    if (message.endTime !== '0') {
      writer.uint32(16).uint64(message.endTime);
    }

    if (message.indexOffset !== 0) {
      writer.uint32(24).uint32(message.indexOffset);
    }

    if (message.numMaxEvents !== 0) {
      writer.uint32(32).uint32(message.numMaxEvents);
    }

    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ForwardingHistoryRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseForwardingHistoryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.startTime = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.endTime = longToString(reader.uint64() as Long);
          break;
        case 3:
          message.indexOffset = reader.uint32();
          break;
        case 4:
          message.numMaxEvents = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ForwardingHistoryRequest {
    const message = createBaseForwardingHistoryRequest();
    message.startTime =
      object.startTime !== undefined && object.startTime !== null
        ? String(object.startTime)
        : '0';
    message.endTime =
      object.endTime !== undefined && object.endTime !== null
        ? String(object.endTime)
        : '0';
    message.indexOffset =
      object.indexOffset !== undefined && object.indexOffset !== null
        ? Number(object.indexOffset)
        : 0;
    message.numMaxEvents =
      object.numMaxEvents !== undefined && object.numMaxEvents !== null
        ? Number(object.numMaxEvents)
        : 0;
    return message;
  },

  toJSON(message: ForwardingHistoryRequest): unknown {
    const object: any = {};
    message.startTime !== undefined && (object.startTime = message.startTime);
    message.endTime !== undefined && (object.endTime = message.endTime);
    message.indexOffset !== undefined &&
      (object.indexOffset = Math.round(message.indexOffset));
    message.numMaxEvents !== undefined &&
      (object.numMaxEvents = Math.round(message.numMaxEvents));
    return object;
  },

  fromPartial(
    object: DeepPartial<ForwardingHistoryRequest>,
  ): ForwardingHistoryRequest {
    const message = createBaseForwardingHistoryRequest();
    message.startTime = object.startTime ?? '0';
    message.endTime = object.endTime ?? '0';
    message.indexOffset = object.indexOffset ?? 0;
    message.numMaxEvents = object.numMaxEvents ?? 0;
    return message;
  },
};

function createBaseForwardingEvent(): ForwardingEvent {
  return {
    timestamp: '0',
    chanIdIn: '0',
    chanIdOut: '0',
    amtIn: '0',
    amtOut: '0',
    fee: '0',
    feeMsat: '0',
    amtInMsat: '0',
    amtOutMsat: '0',
    timestampNs: '0',
  };
}

export const ForwardingEvent = {
  encode(
    message: ForwardingEvent,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.timestamp !== '0') {
      writer.uint32(8).uint64(message.timestamp);
    }

    if (message.chanIdIn !== '0') {
      writer.uint32(16).uint64(message.chanIdIn);
    }

    if (message.chanIdOut !== '0') {
      writer.uint32(32).uint64(message.chanIdOut);
    }

    if (message.amtIn !== '0') {
      writer.uint32(40).uint64(message.amtIn);
    }

    if (message.amtOut !== '0') {
      writer.uint32(48).uint64(message.amtOut);
    }

    if (message.fee !== '0') {
      writer.uint32(56).uint64(message.fee);
    }

    if (message.feeMsat !== '0') {
      writer.uint32(64).uint64(message.feeMsat);
    }

    if (message.amtInMsat !== '0') {
      writer.uint32(72).uint64(message.amtInMsat);
    }

    if (message.amtOutMsat !== '0') {
      writer.uint32(80).uint64(message.amtOutMsat);
    }

    if (message.timestampNs !== '0') {
      writer.uint32(88).uint64(message.timestampNs);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ForwardingEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseForwardingEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timestamp = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.chanIdIn = longToString(reader.uint64() as Long);
          break;
        case 4:
          message.chanIdOut = longToString(reader.uint64() as Long);
          break;
        case 5:
          message.amtIn = longToString(reader.uint64() as Long);
          break;
        case 6:
          message.amtOut = longToString(reader.uint64() as Long);
          break;
        case 7:
          message.fee = longToString(reader.uint64() as Long);
          break;
        case 8:
          message.feeMsat = longToString(reader.uint64() as Long);
          break;
        case 9:
          message.amtInMsat = longToString(reader.uint64() as Long);
          break;
        case 10:
          message.amtOutMsat = longToString(reader.uint64() as Long);
          break;
        case 11:
          message.timestampNs = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ForwardingEvent {
    const message = createBaseForwardingEvent();
    message.timestamp =
      object.timestamp !== undefined && object.timestamp !== null
        ? String(object.timestamp)
        : '0';
    message.chanIdIn =
      object.chanIdIn !== undefined && object.chanIdIn !== null
        ? String(object.chanIdIn)
        : '0';
    message.chanIdOut =
      object.chanIdOut !== undefined && object.chanIdOut !== null
        ? String(object.chanIdOut)
        : '0';
    message.amtIn =
      object.amtIn !== undefined && object.amtIn !== null
        ? String(object.amtIn)
        : '0';
    message.amtOut =
      object.amtOut !== undefined && object.amtOut !== null
        ? String(object.amtOut)
        : '0';
    message.fee =
      object.fee !== undefined && object.fee !== null
        ? String(object.fee)
        : '0';
    message.feeMsat =
      object.feeMsat !== undefined && object.feeMsat !== null
        ? String(object.feeMsat)
        : '0';
    message.amtInMsat =
      object.amtInMsat !== undefined && object.amtInMsat !== null
        ? String(object.amtInMsat)
        : '0';
    message.amtOutMsat =
      object.amtOutMsat !== undefined && object.amtOutMsat !== null
        ? String(object.amtOutMsat)
        : '0';
    message.timestampNs =
      object.timestampNs !== undefined && object.timestampNs !== null
        ? String(object.timestampNs)
        : '0';
    return message;
  },

  toJSON(message: ForwardingEvent): unknown {
    const object: any = {};
    message.timestamp !== undefined && (object.timestamp = message.timestamp);
    message.chanIdIn !== undefined && (object.chanIdIn = message.chanIdIn);
    message.chanIdOut !== undefined && (object.chanIdOut = message.chanIdOut);
    message.amtIn !== undefined && (object.amtIn = message.amtIn);
    message.amtOut !== undefined && (object.amtOut = message.amtOut);
    message.fee !== undefined && (object.fee = message.fee);
    message.feeMsat !== undefined && (object.feeMsat = message.feeMsat);
    message.amtInMsat !== undefined && (object.amtInMsat = message.amtInMsat);
    message.amtOutMsat !== undefined &&
      (object.amtOutMsat = message.amtOutMsat);
    message.timestampNs !== undefined &&
      (object.timestampNs = message.timestampNs);
    return object;
  },

  fromPartial(object: DeepPartial<ForwardingEvent>): ForwardingEvent {
    const message = createBaseForwardingEvent();
    message.timestamp = object.timestamp ?? '0';
    message.chanIdIn = object.chanIdIn ?? '0';
    message.chanIdOut = object.chanIdOut ?? '0';
    message.amtIn = object.amtIn ?? '0';
    message.amtOut = object.amtOut ?? '0';
    message.fee = object.fee ?? '0';
    message.feeMsat = object.feeMsat ?? '0';
    message.amtInMsat = object.amtInMsat ?? '0';
    message.amtOutMsat = object.amtOutMsat ?? '0';
    message.timestampNs = object.timestampNs ?? '0';
    return message;
  },
};

function createBaseForwardingHistoryResponse(): ForwardingHistoryResponse {
  return {forwardingEvents: [], lastOffsetIndex: 0};
}

export const ForwardingHistoryResponse = {
  encode(
    message: ForwardingHistoryResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.forwardingEvents) {
      ForwardingEvent.encode(v, writer.uint32(10).fork()).ldelim();
    }

    if (message.lastOffsetIndex !== 0) {
      writer.uint32(16).uint32(message.lastOffsetIndex);
    }

    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ForwardingHistoryResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseForwardingHistoryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.forwardingEvents.push(
            ForwardingEvent.decode(reader, reader.uint32()),
          );
          break;
        case 2:
          message.lastOffsetIndex = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ForwardingHistoryResponse {
    const message = createBaseForwardingHistoryResponse();
    message.forwardingEvents = (object.forwardingEvents ?? []).map((e: any) =>
      ForwardingEvent.fromJSON(e),
    );
    message.lastOffsetIndex =
      object.lastOffsetIndex !== undefined && object.lastOffsetIndex !== null
        ? Number(object.lastOffsetIndex)
        : 0;
    return message;
  },

  toJSON(message: ForwardingHistoryResponse): unknown {
    const object: any = {};
    if (message.forwardingEvents) {
      object.forwardingEvents = message.forwardingEvents.map((e) =>
        e ? ForwardingEvent.toJSON(e) : undefined,
      );
    } else {
      object.forwardingEvents = [];
    }

    message.lastOffsetIndex !== undefined &&
      (object.lastOffsetIndex = Math.round(message.lastOffsetIndex));
    return object;
  },

  fromPartial(
    object: DeepPartial<ForwardingHistoryResponse>,
  ): ForwardingHistoryResponse {
    const message = createBaseForwardingHistoryResponse();
    message.forwardingEvents =
      object.forwardingEvents?.map((e) => ForwardingEvent.fromPartial(e)) || [];
    message.lastOffsetIndex = object.lastOffsetIndex ?? 0;
    return message;
  },
};

function createBaseExportChannelBackupRequest(): ExportChannelBackupRequest {
  return {chanPoint: undefined};
}

export const ExportChannelBackupRequest = {
  encode(
    message: ExportChannelBackupRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.chanPoint !== undefined) {
      ChannelPoint.encode(message.chanPoint, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ExportChannelBackupRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExportChannelBackupRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chanPoint = ChannelPoint.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ExportChannelBackupRequest {
    const message = createBaseExportChannelBackupRequest();
    message.chanPoint =
      object.chanPoint !== undefined && object.chanPoint !== null
        ? ChannelPoint.fromJSON(object.chanPoint)
        : undefined;
    return message;
  },

  toJSON(message: ExportChannelBackupRequest): unknown {
    const object: any = {};
    message.chanPoint !== undefined &&
      (object.chanPoint = message.chanPoint
        ? ChannelPoint.toJSON(message.chanPoint)
        : undefined);
    return object;
  },

  fromPartial(
    object: DeepPartial<ExportChannelBackupRequest>,
  ): ExportChannelBackupRequest {
    const message = createBaseExportChannelBackupRequest();
    message.chanPoint =
      object.chanPoint !== undefined && object.chanPoint !== null
        ? ChannelPoint.fromPartial(object.chanPoint)
        : undefined;
    return message;
  },
};

function createBaseChannelBackup(): ChannelBackup {
  return {chanPoint: undefined, chanBackup: new Uint8Array()};
}

export const ChannelBackup = {
  encode(
    message: ChannelBackup,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.chanPoint !== undefined) {
      ChannelPoint.encode(message.chanPoint, writer.uint32(10).fork()).ldelim();
    }

    if (message.chanBackup.length > 0) {
      writer.uint32(18).bytes(message.chanBackup);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChannelBackup {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChannelBackup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chanPoint = ChannelPoint.decode(reader, reader.uint32());
          break;
        case 2:
          message.chanBackup = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ChannelBackup {
    const message = createBaseChannelBackup();
    message.chanPoint =
      object.chanPoint !== undefined && object.chanPoint !== null
        ? ChannelPoint.fromJSON(object.chanPoint)
        : undefined;
    message.chanBackup =
      object.chanBackup !== undefined && object.chanBackup !== null
        ? bytesFromBase64(object.chanBackup)
        : new Uint8Array();
    return message;
  },

  toJSON(message: ChannelBackup): unknown {
    const object: any = {};
    message.chanPoint !== undefined &&
      (object.chanPoint = message.chanPoint
        ? ChannelPoint.toJSON(message.chanPoint)
        : undefined);
    message.chanBackup !== undefined &&
      (object.chanBackup = base64FromBytes(
        message.chanBackup !== undefined
          ? message.chanBackup
          : new Uint8Array(),
      ));
    return object;
  },

  fromPartial(object: DeepPartial<ChannelBackup>): ChannelBackup {
    const message = createBaseChannelBackup();
    message.chanPoint =
      object.chanPoint !== undefined && object.chanPoint !== null
        ? ChannelPoint.fromPartial(object.chanPoint)
        : undefined;
    message.chanBackup = object.chanBackup ?? new Uint8Array();
    return message;
  },
};

function createBaseMultiChanBackup(): MultiChanBackup {
  return {chanPoints: [], multiChanBackup: new Uint8Array()};
}

export const MultiChanBackup = {
  encode(
    message: MultiChanBackup,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.chanPoints) {
      ChannelPoint.encode(v, writer.uint32(10).fork()).ldelim();
    }

    if (message.multiChanBackup.length > 0) {
      writer.uint32(18).bytes(message.multiChanBackup);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MultiChanBackup {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMultiChanBackup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chanPoints.push(ChannelPoint.decode(reader, reader.uint32()));
          break;
        case 2:
          message.multiChanBackup = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MultiChanBackup {
    const message = createBaseMultiChanBackup();
    message.chanPoints = (object.chanPoints ?? []).map((e: any) =>
      ChannelPoint.fromJSON(e),
    );
    message.multiChanBackup =
      object.multiChanBackup !== undefined && object.multiChanBackup !== null
        ? bytesFromBase64(object.multiChanBackup)
        : new Uint8Array();
    return message;
  },

  toJSON(message: MultiChanBackup): unknown {
    const object: any = {};
    if (message.chanPoints) {
      object.chanPoints = message.chanPoints.map((e) =>
        e ? ChannelPoint.toJSON(e) : undefined,
      );
    } else {
      object.chanPoints = [];
    }

    message.multiChanBackup !== undefined &&
      (object.multiChanBackup = base64FromBytes(
        message.multiChanBackup !== undefined
          ? message.multiChanBackup
          : new Uint8Array(),
      ));
    return object;
  },

  fromPartial(object: DeepPartial<MultiChanBackup>): MultiChanBackup {
    const message = createBaseMultiChanBackup();
    message.chanPoints =
      object.chanPoints?.map((e) => ChannelPoint.fromPartial(e)) || [];
    message.multiChanBackup = object.multiChanBackup ?? new Uint8Array();
    return message;
  },
};

function createBaseChanBackupExportRequest(): ChanBackupExportRequest {
  return {};
}

export const ChanBackupExportRequest = {
  encode(
    _: ChanBackupExportRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ChanBackupExportRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChanBackupExportRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): ChanBackupExportRequest {
    const message = createBaseChanBackupExportRequest();
    return message;
  },

  toJSON(_: ChanBackupExportRequest): unknown {
    const object: any = {};
    return object;
  },

  fromPartial(
    _: DeepPartial<ChanBackupExportRequest>,
  ): ChanBackupExportRequest {
    const message = createBaseChanBackupExportRequest();
    return message;
  },
};

function createBaseChanBackupSnapshot(): ChanBackupSnapshot {
  return {singleChanBackups: undefined, multiChanBackup: undefined};
}

export const ChanBackupSnapshot = {
  encode(
    message: ChanBackupSnapshot,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.singleChanBackups !== undefined) {
      ChannelBackups.encode(
        message.singleChanBackups,
        writer.uint32(10).fork(),
      ).ldelim();
    }

    if (message.multiChanBackup !== undefined) {
      MultiChanBackup.encode(
        message.multiChanBackup,
        writer.uint32(18).fork(),
      ).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChanBackupSnapshot {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChanBackupSnapshot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.singleChanBackups = ChannelBackups.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 2:
          message.multiChanBackup = MultiChanBackup.decode(
            reader,
            reader.uint32(),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ChanBackupSnapshot {
    const message = createBaseChanBackupSnapshot();
    message.singleChanBackups =
      object.singleChanBackups !== undefined &&
      object.singleChanBackups !== null
        ? ChannelBackups.fromJSON(object.singleChanBackups)
        : undefined;
    message.multiChanBackup =
      object.multiChanBackup !== undefined && object.multiChanBackup !== null
        ? MultiChanBackup.fromJSON(object.multiChanBackup)
        : undefined;
    return message;
  },

  toJSON(message: ChanBackupSnapshot): unknown {
    const object: any = {};
    message.singleChanBackups !== undefined &&
      (object.singleChanBackups = message.singleChanBackups
        ? ChannelBackups.toJSON(message.singleChanBackups)
        : undefined);
    message.multiChanBackup !== undefined &&
      (object.multiChanBackup = message.multiChanBackup
        ? MultiChanBackup.toJSON(message.multiChanBackup)
        : undefined);
    return object;
  },

  fromPartial(object: DeepPartial<ChanBackupSnapshot>): ChanBackupSnapshot {
    const message = createBaseChanBackupSnapshot();
    message.singleChanBackups =
      object.singleChanBackups !== undefined &&
      object.singleChanBackups !== null
        ? ChannelBackups.fromPartial(object.singleChanBackups)
        : undefined;
    message.multiChanBackup =
      object.multiChanBackup !== undefined && object.multiChanBackup !== null
        ? MultiChanBackup.fromPartial(object.multiChanBackup)
        : undefined;
    return message;
  },
};

function createBaseChannelBackups(): ChannelBackups {
  return {chanBackups: []};
}

export const ChannelBackups = {
  encode(
    message: ChannelBackups,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.chanBackups) {
      ChannelBackup.encode(v, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChannelBackups {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChannelBackups();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chanBackups.push(
            ChannelBackup.decode(reader, reader.uint32()),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ChannelBackups {
    const message = createBaseChannelBackups();
    message.chanBackups = (object.chanBackups ?? []).map((e: any) =>
      ChannelBackup.fromJSON(e),
    );
    return message;
  },

  toJSON(message: ChannelBackups): unknown {
    const object: any = {};
    if (message.chanBackups) {
      object.chanBackups = message.chanBackups.map((e) =>
        e ? ChannelBackup.toJSON(e) : undefined,
      );
    } else {
      object.chanBackups = [];
    }

    return object;
  },

  fromPartial(object: DeepPartial<ChannelBackups>): ChannelBackups {
    const message = createBaseChannelBackups();
    message.chanBackups =
      object.chanBackups?.map((e) => ChannelBackup.fromPartial(e)) || [];
    return message;
  },
};

function createBaseRestoreChanBackupRequest(): RestoreChanBackupRequest {
  return {chanBackups: undefined, multiChanBackup: undefined};
}

export const RestoreChanBackupRequest = {
  encode(
    message: RestoreChanBackupRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.chanBackups !== undefined) {
      ChannelBackups.encode(
        message.chanBackups,
        writer.uint32(10).fork(),
      ).ldelim();
    }

    if (message.multiChanBackup !== undefined) {
      writer.uint32(18).bytes(message.multiChanBackup);
    }

    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): RestoreChanBackupRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRestoreChanBackupRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chanBackups = ChannelBackups.decode(reader, reader.uint32());
          break;
        case 2:
          message.multiChanBackup = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): RestoreChanBackupRequest {
    const message = createBaseRestoreChanBackupRequest();
    message.chanBackups =
      object.chanBackups !== undefined && object.chanBackups !== null
        ? ChannelBackups.fromJSON(object.chanBackups)
        : undefined;
    message.multiChanBackup =
      object.multiChanBackup !== undefined && object.multiChanBackup !== null
        ? bytesFromBase64(object.multiChanBackup)
        : undefined;
    return message;
  },

  toJSON(message: RestoreChanBackupRequest): unknown {
    const object: any = {};
    message.chanBackups !== undefined &&
      (object.chanBackups = message.chanBackups
        ? ChannelBackups.toJSON(message.chanBackups)
        : undefined);
    message.multiChanBackup !== undefined &&
      (object.multiChanBackup =
        message.multiChanBackup !== undefined
          ? base64FromBytes(message.multiChanBackup)
          : undefined);
    return object;
  },

  fromPartial(
    object: DeepPartial<RestoreChanBackupRequest>,
  ): RestoreChanBackupRequest {
    const message = createBaseRestoreChanBackupRequest();
    message.chanBackups =
      object.chanBackups !== undefined && object.chanBackups !== null
        ? ChannelBackups.fromPartial(object.chanBackups)
        : undefined;
    message.multiChanBackup = object.multiChanBackup ?? undefined;
    return message;
  },
};

function createBaseRestoreBackupResponse(): RestoreBackupResponse {
  return {};
}

export const RestoreBackupResponse = {
  encode(
    _: RestoreBackupResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): RestoreBackupResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRestoreBackupResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): RestoreBackupResponse {
    const message = createBaseRestoreBackupResponse();
    return message;
  },

  toJSON(_: RestoreBackupResponse): unknown {
    const object: any = {};
    return object;
  },

  fromPartial(_: DeepPartial<RestoreBackupResponse>): RestoreBackupResponse {
    const message = createBaseRestoreBackupResponse();
    return message;
  },
};

function createBaseChannelBackupSubscription(): ChannelBackupSubscription {
  return {};
}

export const ChannelBackupSubscription = {
  encode(
    _: ChannelBackupSubscription,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ChannelBackupSubscription {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChannelBackupSubscription();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): ChannelBackupSubscription {
    const message = createBaseChannelBackupSubscription();
    return message;
  },

  toJSON(_: ChannelBackupSubscription): unknown {
    const object: any = {};
    return object;
  },

  fromPartial(
    _: DeepPartial<ChannelBackupSubscription>,
  ): ChannelBackupSubscription {
    const message = createBaseChannelBackupSubscription();
    return message;
  },
};

function createBaseVerifyChanBackupResponse(): VerifyChanBackupResponse {
  return {};
}

export const VerifyChanBackupResponse = {
  encode(
    _: VerifyChanBackupResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): VerifyChanBackupResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVerifyChanBackupResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): VerifyChanBackupResponse {
    const message = createBaseVerifyChanBackupResponse();
    return message;
  },

  toJSON(_: VerifyChanBackupResponse): unknown {
    const object: any = {};
    return object;
  },

  fromPartial(
    _: DeepPartial<VerifyChanBackupResponse>,
  ): VerifyChanBackupResponse {
    const message = createBaseVerifyChanBackupResponse();
    return message;
  },
};

function createBaseMacaroonPermission(): MacaroonPermission {
  return {entity: '', action: ''};
}

export const MacaroonPermission = {
  encode(
    message: MacaroonPermission,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.entity !== '') {
      writer.uint32(10).string(message.entity);
    }

    if (message.action !== '') {
      writer.uint32(18).string(message.action);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MacaroonPermission {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMacaroonPermission();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.entity = reader.string();
          break;
        case 2:
          message.action = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MacaroonPermission {
    const message = createBaseMacaroonPermission();
    message.entity =
      object.entity !== undefined && object.entity !== null
        ? String(object.entity)
        : '';
    message.action =
      object.action !== undefined && object.action !== null
        ? String(object.action)
        : '';
    return message;
  },

  toJSON(message: MacaroonPermission): unknown {
    const object: any = {};
    message.entity !== undefined && (object.entity = message.entity);
    message.action !== undefined && (object.action = message.action);
    return object;
  },

  fromPartial(object: DeepPartial<MacaroonPermission>): MacaroonPermission {
    const message = createBaseMacaroonPermission();
    message.entity = object.entity ?? '';
    message.action = object.action ?? '';
    return message;
  },
};

function createBaseBakeMacaroonRequest(): BakeMacaroonRequest {
  return {permissions: [], rootKeyId: '0', allowExternalPermissions: false};
}

export const BakeMacaroonRequest = {
  encode(
    message: BakeMacaroonRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.permissions) {
      MacaroonPermission.encode(v, writer.uint32(10).fork()).ldelim();
    }

    if (message.rootKeyId !== '0') {
      writer.uint32(16).uint64(message.rootKeyId);
    }

    if (message.allowExternalPermissions) {
      writer.uint32(24).bool(message.allowExternalPermissions);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BakeMacaroonRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBakeMacaroonRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.permissions.push(
            MacaroonPermission.decode(reader, reader.uint32()),
          );
          break;
        case 2:
          message.rootKeyId = longToString(reader.uint64() as Long);
          break;
        case 3:
          message.allowExternalPermissions = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): BakeMacaroonRequest {
    const message = createBaseBakeMacaroonRequest();
    message.permissions = (object.permissions ?? []).map((e: any) =>
      MacaroonPermission.fromJSON(e),
    );
    message.rootKeyId =
      object.rootKeyId !== undefined && object.rootKeyId !== null
        ? String(object.rootKeyId)
        : '0';
    message.allowExternalPermissions =
      object.allowExternalPermissions !== undefined &&
      object.allowExternalPermissions !== null
        ? Boolean(object.allowExternalPermissions)
        : false;
    return message;
  },

  toJSON(message: BakeMacaroonRequest): unknown {
    const object: any = {};
    if (message.permissions) {
      object.permissions = message.permissions.map((e) =>
        e ? MacaroonPermission.toJSON(e) : undefined,
      );
    } else {
      object.permissions = [];
    }

    message.rootKeyId !== undefined && (object.rootKeyId = message.rootKeyId);
    message.allowExternalPermissions !== undefined &&
      (object.allowExternalPermissions = message.allowExternalPermissions);
    return object;
  },

  fromPartial(object: DeepPartial<BakeMacaroonRequest>): BakeMacaroonRequest {
    const message = createBaseBakeMacaroonRequest();
    message.permissions =
      object.permissions?.map((e) => MacaroonPermission.fromPartial(e)) || [];
    message.rootKeyId = object.rootKeyId ?? '0';
    message.allowExternalPermissions = object.allowExternalPermissions ?? false;
    return message;
  },
};

function createBaseBakeMacaroonResponse(): BakeMacaroonResponse {
  return {macaroon: ''};
}

export const BakeMacaroonResponse = {
  encode(
    message: BakeMacaroonResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.macaroon !== '') {
      writer.uint32(10).string(message.macaroon);
    }

    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): BakeMacaroonResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBakeMacaroonResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.macaroon = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): BakeMacaroonResponse {
    const message = createBaseBakeMacaroonResponse();
    message.macaroon =
      object.macaroon !== undefined && object.macaroon !== null
        ? String(object.macaroon)
        : '';
    return message;
  },

  toJSON(message: BakeMacaroonResponse): unknown {
    const object: any = {};
    message.macaroon !== undefined && (object.macaroon = message.macaroon);
    return object;
  },

  fromPartial(object: DeepPartial<BakeMacaroonResponse>): BakeMacaroonResponse {
    const message = createBaseBakeMacaroonResponse();
    message.macaroon = object.macaroon ?? '';
    return message;
  },
};

function createBaseListMacaroonIDsRequest(): ListMacaroonIDsRequest {
  return {};
}

export const ListMacaroonIDsRequest = {
  encode(
    _: ListMacaroonIDsRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ListMacaroonIDsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListMacaroonIDsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): ListMacaroonIDsRequest {
    const message = createBaseListMacaroonIDsRequest();
    return message;
  },

  toJSON(_: ListMacaroonIDsRequest): unknown {
    const object: any = {};
    return object;
  },

  fromPartial(_: DeepPartial<ListMacaroonIDsRequest>): ListMacaroonIDsRequest {
    const message = createBaseListMacaroonIDsRequest();
    return message;
  },
};

function createBaseListMacaroonIDsResponse(): ListMacaroonIDsResponse {
  return {rootKeyIds: []};
}

export const ListMacaroonIDsResponse = {
  encode(
    message: ListMacaroonIDsResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.rootKeyIds) {
      writer.uint64(v);
    }

    writer.ldelim();
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ListMacaroonIDsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListMacaroonIDsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.rootKeyIds.push(longToString(reader.uint64() as Long));
            }
          } else {
            message.rootKeyIds.push(longToString(reader.uint64() as Long));
          }

          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ListMacaroonIDsResponse {
    const message = createBaseListMacaroonIDsResponse();
    message.rootKeyIds = (object.rootKeyIds ?? []).map((e: any) => String(e));
    return message;
  },

  toJSON(message: ListMacaroonIDsResponse): unknown {
    const object: any = {};
    object.rootKeyIds = message.rootKeyIds
      ? message.rootKeyIds.map((e) => e)
      : [];
    return object;
  },

  fromPartial(
    object: DeepPartial<ListMacaroonIDsResponse>,
  ): ListMacaroonIDsResponse {
    const message = createBaseListMacaroonIDsResponse();
    message.rootKeyIds = object.rootKeyIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseDeleteMacaroonIDRequest(): DeleteMacaroonIDRequest {
  return {rootKeyId: '0'};
}

export const DeleteMacaroonIDRequest = {
  encode(
    message: DeleteMacaroonIDRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.rootKeyId !== '0') {
      writer.uint32(8).uint64(message.rootKeyId);
    }

    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): DeleteMacaroonIDRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteMacaroonIDRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rootKeyId = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): DeleteMacaroonIDRequest {
    const message = createBaseDeleteMacaroonIDRequest();
    message.rootKeyId =
      object.rootKeyId !== undefined && object.rootKeyId !== null
        ? String(object.rootKeyId)
        : '0';
    return message;
  },

  toJSON(message: DeleteMacaroonIDRequest): unknown {
    const object: any = {};
    message.rootKeyId !== undefined && (object.rootKeyId = message.rootKeyId);
    return object;
  },

  fromPartial(
    object: DeepPartial<DeleteMacaroonIDRequest>,
  ): DeleteMacaroonIDRequest {
    const message = createBaseDeleteMacaroonIDRequest();
    message.rootKeyId = object.rootKeyId ?? '0';
    return message;
  },
};

function createBaseDeleteMacaroonIDResponse(): DeleteMacaroonIDResponse {
  return {deleted: false};
}

export const DeleteMacaroonIDResponse = {
  encode(
    message: DeleteMacaroonIDResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.deleted) {
      writer.uint32(8).bool(message.deleted);
    }

    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): DeleteMacaroonIDResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteMacaroonIDResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deleted = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): DeleteMacaroonIDResponse {
    const message = createBaseDeleteMacaroonIDResponse();
    message.deleted =
      object.deleted !== undefined && object.deleted !== null
        ? Boolean(object.deleted)
        : false;
    return message;
  },

  toJSON(message: DeleteMacaroonIDResponse): unknown {
    const object: any = {};
    message.deleted !== undefined && (object.deleted = message.deleted);
    return object;
  },

  fromPartial(
    object: DeepPartial<DeleteMacaroonIDResponse>,
  ): DeleteMacaroonIDResponse {
    const message = createBaseDeleteMacaroonIDResponse();
    message.deleted = object.deleted ?? false;
    return message;
  },
};

function createBaseMacaroonPermissionList(): MacaroonPermissionList {
  return {permissions: []};
}

export const MacaroonPermissionList = {
  encode(
    message: MacaroonPermissionList,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.permissions) {
      MacaroonPermission.encode(v, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MacaroonPermissionList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMacaroonPermissionList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.permissions.push(
            MacaroonPermission.decode(reader, reader.uint32()),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MacaroonPermissionList {
    const message = createBaseMacaroonPermissionList();
    message.permissions = (object.permissions ?? []).map((e: any) =>
      MacaroonPermission.fromJSON(e),
    );
    return message;
  },

  toJSON(message: MacaroonPermissionList): unknown {
    const object: any = {};
    if (message.permissions) {
      object.permissions = message.permissions.map((e) =>
        e ? MacaroonPermission.toJSON(e) : undefined,
      );
    } else {
      object.permissions = [];
    }

    return object;
  },

  fromPartial(
    object: DeepPartial<MacaroonPermissionList>,
  ): MacaroonPermissionList {
    const message = createBaseMacaroonPermissionList();
    message.permissions =
      object.permissions?.map((e) => MacaroonPermission.fromPartial(e)) || [];
    return message;
  },
};

function createBaseListPermissionsRequest(): ListPermissionsRequest {
  return {};
}

export const ListPermissionsRequest = {
  encode(
    _: ListPermissionsRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ListPermissionsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListPermissionsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): ListPermissionsRequest {
    const message = createBaseListPermissionsRequest();
    return message;
  },

  toJSON(_: ListPermissionsRequest): unknown {
    const object: any = {};
    return object;
  },

  fromPartial(_: DeepPartial<ListPermissionsRequest>): ListPermissionsRequest {
    const message = createBaseListPermissionsRequest();
    return message;
  },
};

function createBaseListPermissionsResponse(): ListPermissionsResponse {
  return {methodPermissions: {}};
}

export const ListPermissionsResponse = {
  encode(
    message: ListPermissionsResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const [key, value] of Object.entries(message.methodPermissions)) {
      ListPermissionsResponse_MethodPermissionsEntry.encode(
        {key: key as any, value},
        writer.uint32(10).fork(),
      ).ldelim();
    }

    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ListPermissionsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListPermissionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = ListPermissionsResponse_MethodPermissionsEntry.decode(
            reader,
            reader.uint32(),
          );
          if (entry1.value !== undefined) {
            message.methodPermissions[entry1.key] = entry1.value;
          }

          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ListPermissionsResponse {
    const message = createBaseListPermissionsResponse();
    message.methodPermissions = Object.entries(
      object.methodPermissions ?? {},
    ).reduce<Record<string, MacaroonPermissionList>>((acc, [key, value]) => {
      acc[key] = MacaroonPermissionList.fromJSON(value);
      return acc;
    }, {});
    return message;
  },

  toJSON(message: ListPermissionsResponse): unknown {
    const object: any = {};
    object.methodPermissions = {};
    if (message.methodPermissions) {
      for (const [k, v] of Object.entries(message.methodPermissions)) {
        object.methodPermissions[k] = MacaroonPermissionList.toJSON(v);
      }
    }

    return object;
  },

  fromPartial(
    object: DeepPartial<ListPermissionsResponse>,
  ): ListPermissionsResponse {
    const message = createBaseListPermissionsResponse();
    message.methodPermissions = Object.entries(
      object.methodPermissions ?? {},
    ).reduce<Record<string, MacaroonPermissionList>>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = MacaroonPermissionList.fromPartial(value);
      }

      return acc;
    }, {});
    return message;
  },
};

function createBaseListPermissionsResponse_MethodPermissionsEntry(): ListPermissionsResponse_MethodPermissionsEntry {
  return {key: '', value: undefined};
}

export const ListPermissionsResponse_MethodPermissionsEntry = {
  encode(
    message: ListPermissionsResponse_MethodPermissionsEntry,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.key !== '') {
      writer.uint32(10).string(message.key);
    }

    if (message.value !== undefined) {
      MacaroonPermissionList.encode(
        message.value,
        writer.uint32(18).fork(),
      ).ldelim();
    }

    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ListPermissionsResponse_MethodPermissionsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListPermissionsResponse_MethodPermissionsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = MacaroonPermissionList.decode(
            reader,
            reader.uint32(),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ListPermissionsResponse_MethodPermissionsEntry {
    const message = createBaseListPermissionsResponse_MethodPermissionsEntry();
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : '';
    message.value =
      object.value !== undefined && object.value !== null
        ? MacaroonPermissionList.fromJSON(object.value)
        : undefined;
    return message;
  },

  toJSON(message: ListPermissionsResponse_MethodPermissionsEntry): unknown {
    const object: any = {};
    message.key !== undefined && (object.key = message.key);
    message.value !== undefined &&
      (object.value = message.value
        ? MacaroonPermissionList.toJSON(message.value)
        : undefined);
    return object;
  },

  fromPartial(
    object: DeepPartial<ListPermissionsResponse_MethodPermissionsEntry>,
  ): ListPermissionsResponse_MethodPermissionsEntry {
    const message = createBaseListPermissionsResponse_MethodPermissionsEntry();
    message.key = object.key ?? '';
    message.value =
      object.value !== undefined && object.value !== null
        ? MacaroonPermissionList.fromPartial(object.value)
        : undefined;
    return message;
  },
};

function createBaseFailure(): Failure {
  return {
    code: 0,
    channelUpdate: undefined,
    htlcMsat: '0',
    onionSha256: new Uint8Array(),
    cltvExpiry: 0,
    flags: 0,
    failureSourceIndex: 0,
    height: 0,
  };
}

export const Failure = {
  encode(
    message: Failure,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).int32(message.code);
    }

    if (message.channelUpdate !== undefined) {
      ChannelUpdate.encode(
        message.channelUpdate,
        writer.uint32(26).fork(),
      ).ldelim();
    }

    if (message.htlcMsat !== '0') {
      writer.uint32(32).uint64(message.htlcMsat);
    }

    if (message.onionSha256.length > 0) {
      writer.uint32(42).bytes(message.onionSha256);
    }

    if (message.cltvExpiry !== 0) {
      writer.uint32(48).uint32(message.cltvExpiry);
    }

    if (message.flags !== 0) {
      writer.uint32(56).uint32(message.flags);
    }

    if (message.failureSourceIndex !== 0) {
      writer.uint32(64).uint32(message.failureSourceIndex);
    }

    if (message.height !== 0) {
      writer.uint32(72).uint32(message.height);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Failure {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFailure();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.int32() as any;
          break;
        case 3:
          message.channelUpdate = ChannelUpdate.decode(reader, reader.uint32());
          break;
        case 4:
          message.htlcMsat = longToString(reader.uint64() as Long);
          break;
        case 5:
          message.onionSha256 = reader.bytes();
          break;
        case 6:
          message.cltvExpiry = reader.uint32();
          break;
        case 7:
          message.flags = reader.uint32();
          break;
        case 8:
          message.failureSourceIndex = reader.uint32();
          break;
        case 9:
          message.height = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Failure {
    const message = createBaseFailure();
    message.code =
      object.code !== undefined && object.code !== null
        ? failure_FailureCodeFromJSON(object.code)
        : 0;
    message.channelUpdate =
      object.channelUpdate !== undefined && object.channelUpdate !== null
        ? ChannelUpdate.fromJSON(object.channelUpdate)
        : undefined;
    message.htlcMsat =
      object.htlcMsat !== undefined && object.htlcMsat !== null
        ? String(object.htlcMsat)
        : '0';
    message.onionSha256 =
      object.onionSha256 !== undefined && object.onionSha256 !== null
        ? bytesFromBase64(object.onionSha256)
        : new Uint8Array();
    message.cltvExpiry =
      object.cltvExpiry !== undefined && object.cltvExpiry !== null
        ? Number(object.cltvExpiry)
        : 0;
    message.flags =
      object.flags !== undefined && object.flags !== null
        ? Number(object.flags)
        : 0;
    message.failureSourceIndex =
      object.failureSourceIndex !== undefined &&
      object.failureSourceIndex !== null
        ? Number(object.failureSourceIndex)
        : 0;
    message.height =
      object.height !== undefined && object.height !== null
        ? Number(object.height)
        : 0;
    return message;
  },

  toJSON(message: Failure): unknown {
    const object: any = {};
    message.code !== undefined &&
      (object.code = failure_FailureCodeToJSON(message.code));
    message.channelUpdate !== undefined &&
      (object.channelUpdate = message.channelUpdate
        ? ChannelUpdate.toJSON(message.channelUpdate)
        : undefined);
    message.htlcMsat !== undefined && (object.htlcMsat = message.htlcMsat);
    message.onionSha256 !== undefined &&
      (object.onionSha256 = base64FromBytes(
        message.onionSha256 !== undefined
          ? message.onionSha256
          : new Uint8Array(),
      ));
    message.cltvExpiry !== undefined &&
      (object.cltvExpiry = Math.round(message.cltvExpiry));
    message.flags !== undefined && (object.flags = Math.round(message.flags));
    message.failureSourceIndex !== undefined &&
      (object.failureSourceIndex = Math.round(message.failureSourceIndex));
    message.height !== undefined &&
      (object.height = Math.round(message.height));
    return object;
  },

  fromPartial(object: DeepPartial<Failure>): Failure {
    const message = createBaseFailure();
    message.code = object.code ?? 0;
    message.channelUpdate =
      object.channelUpdate !== undefined && object.channelUpdate !== null
        ? ChannelUpdate.fromPartial(object.channelUpdate)
        : undefined;
    message.htlcMsat = object.htlcMsat ?? '0';
    message.onionSha256 = object.onionSha256 ?? new Uint8Array();
    message.cltvExpiry = object.cltvExpiry ?? 0;
    message.flags = object.flags ?? 0;
    message.failureSourceIndex = object.failureSourceIndex ?? 0;
    message.height = object.height ?? 0;
    return message;
  },
};

function createBaseChannelUpdate(): ChannelUpdate {
  return {
    signature: new Uint8Array(),
    chainHash: new Uint8Array(),
    chanId: '0',
    timestamp: 0,
    messageFlags: 0,
    channelFlags: 0,
    timeLockDelta: 0,
    htlcMinimumMsat: '0',
    baseFee: 0,
    feeRate: 0,
    htlcMaximumMsat: '0',
    extraOpaqueData: new Uint8Array(),
  };
}

export const ChannelUpdate = {
  encode(
    message: ChannelUpdate,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.signature.length > 0) {
      writer.uint32(10).bytes(message.signature);
    }

    if (message.chainHash.length > 0) {
      writer.uint32(18).bytes(message.chainHash);
    }

    if (message.chanId !== '0') {
      writer.uint32(24).uint64(message.chanId);
    }

    if (message.timestamp !== 0) {
      writer.uint32(32).uint32(message.timestamp);
    }

    if (message.messageFlags !== 0) {
      writer.uint32(80).uint32(message.messageFlags);
    }

    if (message.channelFlags !== 0) {
      writer.uint32(40).uint32(message.channelFlags);
    }

    if (message.timeLockDelta !== 0) {
      writer.uint32(48).uint32(message.timeLockDelta);
    }

    if (message.htlcMinimumMsat !== '0') {
      writer.uint32(56).uint64(message.htlcMinimumMsat);
    }

    if (message.baseFee !== 0) {
      writer.uint32(64).uint32(message.baseFee);
    }

    if (message.feeRate !== 0) {
      writer.uint32(72).uint32(message.feeRate);
    }

    if (message.htlcMaximumMsat !== '0') {
      writer.uint32(88).uint64(message.htlcMaximumMsat);
    }

    if (message.extraOpaqueData.length > 0) {
      writer.uint32(98).bytes(message.extraOpaqueData);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChannelUpdate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChannelUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signature = reader.bytes();
          break;
        case 2:
          message.chainHash = reader.bytes();
          break;
        case 3:
          message.chanId = longToString(reader.uint64() as Long);
          break;
        case 4:
          message.timestamp = reader.uint32();
          break;
        case 10:
          message.messageFlags = reader.uint32();
          break;
        case 5:
          message.channelFlags = reader.uint32();
          break;
        case 6:
          message.timeLockDelta = reader.uint32();
          break;
        case 7:
          message.htlcMinimumMsat = longToString(reader.uint64() as Long);
          break;
        case 8:
          message.baseFee = reader.uint32();
          break;
        case 9:
          message.feeRate = reader.uint32();
          break;
        case 11:
          message.htlcMaximumMsat = longToString(reader.uint64() as Long);
          break;
        case 12:
          message.extraOpaqueData = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ChannelUpdate {
    const message = createBaseChannelUpdate();
    message.signature =
      object.signature !== undefined && object.signature !== null
        ? bytesFromBase64(object.signature)
        : new Uint8Array();
    message.chainHash =
      object.chainHash !== undefined && object.chainHash !== null
        ? bytesFromBase64(object.chainHash)
        : new Uint8Array();
    message.chanId =
      object.chanId !== undefined && object.chanId !== null
        ? String(object.chanId)
        : '0';
    message.timestamp =
      object.timestamp !== undefined && object.timestamp !== null
        ? Number(object.timestamp)
        : 0;
    message.messageFlags =
      object.messageFlags !== undefined && object.messageFlags !== null
        ? Number(object.messageFlags)
        : 0;
    message.channelFlags =
      object.channelFlags !== undefined && object.channelFlags !== null
        ? Number(object.channelFlags)
        : 0;
    message.timeLockDelta =
      object.timeLockDelta !== undefined && object.timeLockDelta !== null
        ? Number(object.timeLockDelta)
        : 0;
    message.htlcMinimumMsat =
      object.htlcMinimumMsat !== undefined && object.htlcMinimumMsat !== null
        ? String(object.htlcMinimumMsat)
        : '0';
    message.baseFee =
      object.baseFee !== undefined && object.baseFee !== null
        ? Number(object.baseFee)
        : 0;
    message.feeRate =
      object.feeRate !== undefined && object.feeRate !== null
        ? Number(object.feeRate)
        : 0;
    message.htlcMaximumMsat =
      object.htlcMaximumMsat !== undefined && object.htlcMaximumMsat !== null
        ? String(object.htlcMaximumMsat)
        : '0';
    message.extraOpaqueData =
      object.extraOpaqueData !== undefined && object.extraOpaqueData !== null
        ? bytesFromBase64(object.extraOpaqueData)
        : new Uint8Array();
    return message;
  },

  toJSON(message: ChannelUpdate): unknown {
    const object: any = {};
    message.signature !== undefined &&
      (object.signature = base64FromBytes(
        message.signature !== undefined ? message.signature : new Uint8Array(),
      ));
    message.chainHash !== undefined &&
      (object.chainHash = base64FromBytes(
        message.chainHash !== undefined ? message.chainHash : new Uint8Array(),
      ));
    message.chanId !== undefined && (object.chanId = message.chanId);
    message.timestamp !== undefined &&
      (object.timestamp = Math.round(message.timestamp));
    message.messageFlags !== undefined &&
      (object.messageFlags = Math.round(message.messageFlags));
    message.channelFlags !== undefined &&
      (object.channelFlags = Math.round(message.channelFlags));
    message.timeLockDelta !== undefined &&
      (object.timeLockDelta = Math.round(message.timeLockDelta));
    message.htlcMinimumMsat !== undefined &&
      (object.htlcMinimumMsat = message.htlcMinimumMsat);
    message.baseFee !== undefined &&
      (object.baseFee = Math.round(message.baseFee));
    message.feeRate !== undefined &&
      (object.feeRate = Math.round(message.feeRate));
    message.htlcMaximumMsat !== undefined &&
      (object.htlcMaximumMsat = message.htlcMaximumMsat);
    message.extraOpaqueData !== undefined &&
      (object.extraOpaqueData = base64FromBytes(
        message.extraOpaqueData !== undefined
          ? message.extraOpaqueData
          : new Uint8Array(),
      ));
    return object;
  },

  fromPartial(object: DeepPartial<ChannelUpdate>): ChannelUpdate {
    const message = createBaseChannelUpdate();
    message.signature = object.signature ?? new Uint8Array();
    message.chainHash = object.chainHash ?? new Uint8Array();
    message.chanId = object.chanId ?? '0';
    message.timestamp = object.timestamp ?? 0;
    message.messageFlags = object.messageFlags ?? 0;
    message.channelFlags = object.channelFlags ?? 0;
    message.timeLockDelta = object.timeLockDelta ?? 0;
    message.htlcMinimumMsat = object.htlcMinimumMsat ?? '0';
    message.baseFee = object.baseFee ?? 0;
    message.feeRate = object.feeRate ?? 0;
    message.htlcMaximumMsat = object.htlcMaximumMsat ?? '0';
    message.extraOpaqueData = object.extraOpaqueData ?? new Uint8Array();
    return message;
  },
};

function createBaseMacaroonId(): MacaroonId {
  return {nonce: new Uint8Array(), storageId: new Uint8Array(), ops: []};
}

export const MacaroonId = {
  encode(
    message: MacaroonId,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.nonce.length > 0) {
      writer.uint32(10).bytes(message.nonce);
    }

    if (message.storageId.length > 0) {
      writer.uint32(18).bytes(message.storageId);
    }

    for (const v of message.ops) {
      Op.encode(v, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MacaroonId {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMacaroonId();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nonce = reader.bytes();
          break;
        case 2:
          message.storageId = reader.bytes();
          break;
        case 3:
          message.ops.push(Op.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MacaroonId {
    const message = createBaseMacaroonId();
    message.nonce =
      object.nonce !== undefined && object.nonce !== null
        ? bytesFromBase64(object.nonce)
        : new Uint8Array();
    message.storageId =
      object.storageId !== undefined && object.storageId !== null
        ? bytesFromBase64(object.storageId)
        : new Uint8Array();
    message.ops = (object.ops ?? []).map((e: any) => Op.fromJSON(e));
    return message;
  },

  toJSON(message: MacaroonId): unknown {
    const object: any = {};
    message.nonce !== undefined &&
      (object.nonce = base64FromBytes(
        message.nonce !== undefined ? message.nonce : new Uint8Array(),
      ));
    message.storageId !== undefined &&
      (object.storageId = base64FromBytes(
        message.storageId !== undefined ? message.storageId : new Uint8Array(),
      ));
    object.ops = message.ops
      ? message.ops.map((e) => (e ? Op.toJSON(e) : undefined))
      : [];
    return object;
  },

  fromPartial(object: DeepPartial<MacaroonId>): MacaroonId {
    const message = createBaseMacaroonId();
    message.nonce = object.nonce ?? new Uint8Array();
    message.storageId = object.storageId ?? new Uint8Array();
    message.ops = object.ops?.map((e) => Op.fromPartial(e)) || [];
    return message;
  },
};

function createBaseOp(): Op {
  return {entity: '', actions: []};
}

export const Op = {
  encode(message: Op, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.entity !== '') {
      writer.uint32(10).string(message.entity);
    }

    for (const v of message.actions) {
      writer.uint32(18).string(v);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Op {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.entity = reader.string();
          break;
        case 2:
          message.actions.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Op {
    const message = createBaseOp();
    message.entity =
      object.entity !== undefined && object.entity !== null
        ? String(object.entity)
        : '';
    message.actions = (object.actions ?? []).map((e: any) => String(e));
    return message;
  },

  toJSON(message: Op): unknown {
    const object: any = {};
    message.entity !== undefined && (object.entity = message.entity);
    object.actions = message.actions ? message.actions.map((e) => e) : [];
    return object;
  },

  fromPartial(object: DeepPartial<Op>): Op {
    const message = createBaseOp();
    message.entity = object.entity ?? '';
    message.actions = object.actions?.map((e) => e) || [];
    return message;
  },
};

function createBaseCheckMacPermRequest(): CheckMacPermRequest {
  return {macaroon: new Uint8Array(), permissions: [], fullMethod: ''};
}

export const CheckMacPermRequest = {
  encode(
    message: CheckMacPermRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.macaroon.length > 0) {
      writer.uint32(10).bytes(message.macaroon);
    }

    for (const v of message.permissions) {
      MacaroonPermission.encode(v, writer.uint32(18).fork()).ldelim();
    }

    if (message.fullMethod !== '') {
      writer.uint32(26).string(message.fullMethod);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CheckMacPermRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckMacPermRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.macaroon = reader.bytes();
          break;
        case 2:
          message.permissions.push(
            MacaroonPermission.decode(reader, reader.uint32()),
          );
          break;
        case 3:
          message.fullMethod = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): CheckMacPermRequest {
    const message = createBaseCheckMacPermRequest();
    message.macaroon =
      object.macaroon !== undefined && object.macaroon !== null
        ? bytesFromBase64(object.macaroon)
        : new Uint8Array();
    message.permissions = (object.permissions ?? []).map((e: any) =>
      MacaroonPermission.fromJSON(e),
    );
    message.fullMethod =
      object.fullMethod !== undefined && object.fullMethod !== null
        ? String(object.fullMethod)
        : '';
    return message;
  },

  toJSON(message: CheckMacPermRequest): unknown {
    const object: any = {};
    message.macaroon !== undefined &&
      (object.macaroon = base64FromBytes(
        message.macaroon !== undefined ? message.macaroon : new Uint8Array(),
      ));
    if (message.permissions) {
      object.permissions = message.permissions.map((e) =>
        e ? MacaroonPermission.toJSON(e) : undefined,
      );
    } else {
      object.permissions = [];
    }

    message.fullMethod !== undefined &&
      (object.fullMethod = message.fullMethod);
    return object;
  },

  fromPartial(object: DeepPartial<CheckMacPermRequest>): CheckMacPermRequest {
    const message = createBaseCheckMacPermRequest();
    message.macaroon = object.macaroon ?? new Uint8Array();
    message.permissions =
      object.permissions?.map((e) => MacaroonPermission.fromPartial(e)) || [];
    message.fullMethod = object.fullMethod ?? '';
    return message;
  },
};

function createBaseCheckMacPermResponse(): CheckMacPermResponse {
  return {valid: false};
}

export const CheckMacPermResponse = {
  encode(
    message: CheckMacPermResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.valid) {
      writer.uint32(8).bool(message.valid);
    }

    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CheckMacPermResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckMacPermResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.valid = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): CheckMacPermResponse {
    const message = createBaseCheckMacPermResponse();
    message.valid =
      object.valid !== undefined && object.valid !== null
        ? Boolean(object.valid)
        : false;
    return message;
  },

  toJSON(message: CheckMacPermResponse): unknown {
    const object: any = {};
    message.valid !== undefined && (object.valid = message.valid);
    return object;
  },

  fromPartial(object: DeepPartial<CheckMacPermResponse>): CheckMacPermResponse {
    const message = createBaseCheckMacPermResponse();
    message.valid = object.valid ?? false;
    return message;
  },
};

function createBaseRPCMiddlewareRequest(): RPCMiddlewareRequest {
  return {
    requestId: '0',
    rawMacaroon: new Uint8Array(),
    customCaveatCondition: '',
    streamAuth: undefined,
    request: undefined,
    response: undefined,
    msgId: '0',
  };
}

export const RPCMiddlewareRequest = {
  encode(
    message: RPCMiddlewareRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.requestId !== '0') {
      writer.uint32(8).uint64(message.requestId);
    }

    if (message.rawMacaroon.length > 0) {
      writer.uint32(18).bytes(message.rawMacaroon);
    }

    if (message.customCaveatCondition !== '') {
      writer.uint32(26).string(message.customCaveatCondition);
    }

    if (message.streamAuth !== undefined) {
      StreamAuth.encode(message.streamAuth, writer.uint32(34).fork()).ldelim();
    }

    if (message.request !== undefined) {
      RPCMessage.encode(message.request, writer.uint32(42).fork()).ldelim();
    }

    if (message.response !== undefined) {
      RPCMessage.encode(message.response, writer.uint32(50).fork()).ldelim();
    }

    if (message.msgId !== '0') {
      writer.uint32(56).uint64(message.msgId);
    }

    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): RPCMiddlewareRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRPCMiddlewareRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requestId = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.rawMacaroon = reader.bytes();
          break;
        case 3:
          message.customCaveatCondition = reader.string();
          break;
        case 4:
          message.streamAuth = StreamAuth.decode(reader, reader.uint32());
          break;
        case 5:
          message.request = RPCMessage.decode(reader, reader.uint32());
          break;
        case 6:
          message.response = RPCMessage.decode(reader, reader.uint32());
          break;
        case 7:
          message.msgId = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): RPCMiddlewareRequest {
    const message = createBaseRPCMiddlewareRequest();
    message.requestId =
      object.requestId !== undefined && object.requestId !== null
        ? String(object.requestId)
        : '0';
    message.rawMacaroon =
      object.rawMacaroon !== undefined && object.rawMacaroon !== null
        ? bytesFromBase64(object.rawMacaroon)
        : new Uint8Array();
    message.customCaveatCondition =
      object.customCaveatCondition !== undefined &&
      object.customCaveatCondition !== null
        ? String(object.customCaveatCondition)
        : '';
    message.streamAuth =
      object.streamAuth !== undefined && object.streamAuth !== null
        ? StreamAuth.fromJSON(object.streamAuth)
        : undefined;
    message.request =
      object.request !== undefined && object.request !== null
        ? RPCMessage.fromJSON(object.request)
        : undefined;
    message.response =
      object.response !== undefined && object.response !== null
        ? RPCMessage.fromJSON(object.response)
        : undefined;
    message.msgId =
      object.msgId !== undefined && object.msgId !== null
        ? String(object.msgId)
        : '0';
    return message;
  },

  toJSON(message: RPCMiddlewareRequest): unknown {
    const object: any = {};
    message.requestId !== undefined && (object.requestId = message.requestId);
    message.rawMacaroon !== undefined &&
      (object.rawMacaroon = base64FromBytes(
        message.rawMacaroon !== undefined
          ? message.rawMacaroon
          : new Uint8Array(),
      ));
    message.customCaveatCondition !== undefined &&
      (object.customCaveatCondition = message.customCaveatCondition);
    message.streamAuth !== undefined &&
      (object.streamAuth = message.streamAuth
        ? StreamAuth.toJSON(message.streamAuth)
        : undefined);
    message.request !== undefined &&
      (object.request = message.request
        ? RPCMessage.toJSON(message.request)
        : undefined);
    message.response !== undefined &&
      (object.response = message.response
        ? RPCMessage.toJSON(message.response)
        : undefined);
    message.msgId !== undefined && (object.msgId = message.msgId);
    return object;
  },

  fromPartial(object: DeepPartial<RPCMiddlewareRequest>): RPCMiddlewareRequest {
    const message = createBaseRPCMiddlewareRequest();
    message.requestId = object.requestId ?? '0';
    message.rawMacaroon = object.rawMacaroon ?? new Uint8Array();
    message.customCaveatCondition = object.customCaveatCondition ?? '';
    message.streamAuth =
      object.streamAuth !== undefined && object.streamAuth !== null
        ? StreamAuth.fromPartial(object.streamAuth)
        : undefined;
    message.request =
      object.request !== undefined && object.request !== null
        ? RPCMessage.fromPartial(object.request)
        : undefined;
    message.response =
      object.response !== undefined && object.response !== null
        ? RPCMessage.fromPartial(object.response)
        : undefined;
    message.msgId = object.msgId ?? '0';
    return message;
  },
};

function createBaseStreamAuth(): StreamAuth {
  return {methodFullUri: ''};
}

export const StreamAuth = {
  encode(
    message: StreamAuth,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.methodFullUri !== '') {
      writer.uint32(10).string(message.methodFullUri);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StreamAuth {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStreamAuth();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.methodFullUri = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): StreamAuth {
    const message = createBaseStreamAuth();
    message.methodFullUri =
      object.methodFullUri !== undefined && object.methodFullUri !== null
        ? String(object.methodFullUri)
        : '';
    return message;
  },

  toJSON(message: StreamAuth): unknown {
    const object: any = {};
    message.methodFullUri !== undefined &&
      (object.methodFullUri = message.methodFullUri);
    return object;
  },

  fromPartial(object: DeepPartial<StreamAuth>): StreamAuth {
    const message = createBaseStreamAuth();
    message.methodFullUri = object.methodFullUri ?? '';
    return message;
  },
};

function createBaseRPCMessage(): RPCMessage {
  return {
    methodFullUri: '',
    streamRpc: false,
    typeName: '',
    serialized: new Uint8Array(),
  };
}

export const RPCMessage = {
  encode(
    message: RPCMessage,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.methodFullUri !== '') {
      writer.uint32(10).string(message.methodFullUri);
    }

    if (message.streamRpc) {
      writer.uint32(16).bool(message.streamRpc);
    }

    if (message.typeName !== '') {
      writer.uint32(26).string(message.typeName);
    }

    if (message.serialized.length > 0) {
      writer.uint32(34).bytes(message.serialized);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RPCMessage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRPCMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.methodFullUri = reader.string();
          break;
        case 2:
          message.streamRpc = reader.bool();
          break;
        case 3:
          message.typeName = reader.string();
          break;
        case 4:
          message.serialized = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): RPCMessage {
    const message = createBaseRPCMessage();
    message.methodFullUri =
      object.methodFullUri !== undefined && object.methodFullUri !== null
        ? String(object.methodFullUri)
        : '';
    message.streamRpc =
      object.streamRpc !== undefined && object.streamRpc !== null
        ? Boolean(object.streamRpc)
        : false;
    message.typeName =
      object.typeName !== undefined && object.typeName !== null
        ? String(object.typeName)
        : '';
    message.serialized =
      object.serialized !== undefined && object.serialized !== null
        ? bytesFromBase64(object.serialized)
        : new Uint8Array();
    return message;
  },

  toJSON(message: RPCMessage): unknown {
    const object: any = {};
    message.methodFullUri !== undefined &&
      (object.methodFullUri = message.methodFullUri);
    message.streamRpc !== undefined && (object.streamRpc = message.streamRpc);
    message.typeName !== undefined && (object.typeName = message.typeName);
    message.serialized !== undefined &&
      (object.serialized = base64FromBytes(
        message.serialized !== undefined
          ? message.serialized
          : new Uint8Array(),
      ));
    return object;
  },

  fromPartial(object: DeepPartial<RPCMessage>): RPCMessage {
    const message = createBaseRPCMessage();
    message.methodFullUri = object.methodFullUri ?? '';
    message.streamRpc = object.streamRpc ?? false;
    message.typeName = object.typeName ?? '';
    message.serialized = object.serialized ?? new Uint8Array();
    return message;
  },
};

function createBaseRPCMiddlewareResponse(): RPCMiddlewareResponse {
  return {refMsgId: '0', register: undefined, feedback: undefined};
}

export const RPCMiddlewareResponse = {
  encode(
    message: RPCMiddlewareResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.refMsgId !== '0') {
      writer.uint32(8).uint64(message.refMsgId);
    }

    if (message.register !== undefined) {
      MiddlewareRegistration.encode(
        message.register,
        writer.uint32(18).fork(),
      ).ldelim();
    }

    if (message.feedback !== undefined) {
      InterceptFeedback.encode(
        message.feedback,
        writer.uint32(26).fork(),
      ).ldelim();
    }

    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): RPCMiddlewareResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRPCMiddlewareResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.refMsgId = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.register = MiddlewareRegistration.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 3:
          message.feedback = InterceptFeedback.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): RPCMiddlewareResponse {
    const message = createBaseRPCMiddlewareResponse();
    message.refMsgId =
      object.refMsgId !== undefined && object.refMsgId !== null
        ? String(object.refMsgId)
        : '0';
    message.register =
      object.register !== undefined && object.register !== null
        ? MiddlewareRegistration.fromJSON(object.register)
        : undefined;
    message.feedback =
      object.feedback !== undefined && object.feedback !== null
        ? InterceptFeedback.fromJSON(object.feedback)
        : undefined;
    return message;
  },

  toJSON(message: RPCMiddlewareResponse): unknown {
    const object: any = {};
    message.refMsgId !== undefined && (object.refMsgId = message.refMsgId);
    message.register !== undefined &&
      (object.register = message.register
        ? MiddlewareRegistration.toJSON(message.register)
        : undefined);
    message.feedback !== undefined &&
      (object.feedback = message.feedback
        ? InterceptFeedback.toJSON(message.feedback)
        : undefined);
    return object;
  },

  fromPartial(
    object: DeepPartial<RPCMiddlewareResponse>,
  ): RPCMiddlewareResponse {
    const message = createBaseRPCMiddlewareResponse();
    message.refMsgId = object.refMsgId ?? '0';
    message.register =
      object.register !== undefined && object.register !== null
        ? MiddlewareRegistration.fromPartial(object.register)
        : undefined;
    message.feedback =
      object.feedback !== undefined && object.feedback !== null
        ? InterceptFeedback.fromPartial(object.feedback)
        : undefined;
    return message;
  },
};

function createBaseMiddlewareRegistration(): MiddlewareRegistration {
  return {
    middlewareName: '',
    customMacaroonCaveatName: '',
    readOnlyMode: false,
  };
}

export const MiddlewareRegistration = {
  encode(
    message: MiddlewareRegistration,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.middlewareName !== '') {
      writer.uint32(10).string(message.middlewareName);
    }

    if (message.customMacaroonCaveatName !== '') {
      writer.uint32(18).string(message.customMacaroonCaveatName);
    }

    if (message.readOnlyMode) {
      writer.uint32(24).bool(message.readOnlyMode);
    }

    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MiddlewareRegistration {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMiddlewareRegistration();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.middlewareName = reader.string();
          break;
        case 2:
          message.customMacaroonCaveatName = reader.string();
          break;
        case 3:
          message.readOnlyMode = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MiddlewareRegistration {
    const message = createBaseMiddlewareRegistration();
    message.middlewareName =
      object.middlewareName !== undefined && object.middlewareName !== null
        ? String(object.middlewareName)
        : '';
    message.customMacaroonCaveatName =
      object.customMacaroonCaveatName !== undefined &&
      object.customMacaroonCaveatName !== null
        ? String(object.customMacaroonCaveatName)
        : '';
    message.readOnlyMode =
      object.readOnlyMode !== undefined && object.readOnlyMode !== null
        ? Boolean(object.readOnlyMode)
        : false;
    return message;
  },

  toJSON(message: MiddlewareRegistration): unknown {
    const object: any = {};
    message.middlewareName !== undefined &&
      (object.middlewareName = message.middlewareName);
    message.customMacaroonCaveatName !== undefined &&
      (object.customMacaroonCaveatName = message.customMacaroonCaveatName);
    message.readOnlyMode !== undefined &&
      (object.readOnlyMode = message.readOnlyMode);
    return object;
  },

  fromPartial(
    object: DeepPartial<MiddlewareRegistration>,
  ): MiddlewareRegistration {
    const message = createBaseMiddlewareRegistration();
    message.middlewareName = object.middlewareName ?? '';
    message.customMacaroonCaveatName = object.customMacaroonCaveatName ?? '';
    message.readOnlyMode = object.readOnlyMode ?? false;
    return message;
  },
};

function createBaseInterceptFeedback(): InterceptFeedback {
  return {
    error: '',
    replaceResponse: false,
    replacementSerialized: new Uint8Array(),
  };
}

export const InterceptFeedback = {
  encode(
    message: InterceptFeedback,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.error !== '') {
      writer.uint32(10).string(message.error);
    }

    if (message.replaceResponse) {
      writer.uint32(16).bool(message.replaceResponse);
    }

    if (message.replacementSerialized.length > 0) {
      writer.uint32(26).bytes(message.replacementSerialized);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InterceptFeedback {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInterceptFeedback();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.error = reader.string();
          break;
        case 2:
          message.replaceResponse = reader.bool();
          break;
        case 3:
          message.replacementSerialized = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): InterceptFeedback {
    const message = createBaseInterceptFeedback();
    message.error =
      object.error !== undefined && object.error !== null
        ? String(object.error)
        : '';
    message.replaceResponse =
      object.replaceResponse !== undefined && object.replaceResponse !== null
        ? Boolean(object.replaceResponse)
        : false;
    message.replacementSerialized =
      object.replacementSerialized !== undefined &&
      object.replacementSerialized !== null
        ? bytesFromBase64(object.replacementSerialized)
        : new Uint8Array();
    return message;
  },

  toJSON(message: InterceptFeedback): unknown {
    const object: any = {};
    message.error !== undefined && (object.error = message.error);
    message.replaceResponse !== undefined &&
      (object.replaceResponse = message.replaceResponse);
    message.replacementSerialized !== undefined &&
      (object.replacementSerialized = base64FromBytes(
        message.replacementSerialized !== undefined
          ? message.replacementSerialized
          : new Uint8Array(),
      ));
    return object;
  },

  fromPartial(object: DeepPartial<InterceptFeedback>): InterceptFeedback {
    const message = createBaseInterceptFeedback();
    message.error = object.error ?? '';
    message.replaceResponse = object.replaceResponse ?? false;
    message.replacementSerialized =
      object.replacementSerialized ?? new Uint8Array();
    return message;
  },
};

/** Lightning is the main RPC server of the daemon. */
export const LightningDefinition = {
  name: 'Lightning',
  fullName: 'lnrpc.Lightning',
  methods: {
    /**
     * Lncli: `walletbalance`
     * WalletBalance returns total unspent outputs(confirmed and unconfirmed), all
     * confirmed unspent outputs and all unconfirmed unspent outputs under control
     * of the wallet.
     */
    walletBalance: {
      name: 'WalletBalance',
      requestType: WalletBalanceRequest,
      requestStream: false,
      responseType: WalletBalanceResponse,
      responseStream: false,
      options: {},
    },
    /**
     * Lncli: `channelbalance`
     * ChannelBalance returns a report on the total funds across all open channels,
     * categorized in local/remote, pending local/remote and unsettled local/remote
     * balances.
     */
    channelBalance: {
      name: 'ChannelBalance',
      requestType: ChannelBalanceRequest,
      requestStream: false,
      responseType: ChannelBalanceResponse,
      responseStream: false,
      options: {},
    },
    /**
     * Lncli: `listchaintxns`
     * GetTransactions returns a list describing all the known transactions
     * relevant to the wallet.
     */
    getTransactions: {
      name: 'GetTransactions',
      requestType: GetTransactionsRequest,
      requestStream: false,
      responseType: TransactionDetails,
      responseStream: false,
      options: {},
    },
    /**
     * Lncli: `estimatefee`
     * EstimateFee asks the chain backend to estimate the fee rate and total fees
     * for a transaction that pays to multiple specified outputs.
     *
     * When using REST, the `AddrToAmount` map type can be set by appending
     * `&AddrToAmount[<address>]=<amount_to_send>` to the URL. Unfortunately this
     * map type doesn't appear in the REST API documentation because of a bug in
     * the grpc-gateway library.
     */
    estimateFee: {
      name: 'EstimateFee',
      requestType: EstimateFeeRequest,
      requestStream: false,
      responseType: EstimateFeeResponse,
      responseStream: false,
      options: {},
    },
    /**
     * Lncli: `sendcoins`
     * SendCoins executes a request to send coins to a particular address. Unlike
     * SendMany, this RPC call only allows creating a single output at a time. If
     * neither target_conf, or sat_per_vbyte are set, then the internal wallet will
     * consult its fee model to determine a fee for the default confirmation
     * target.
     */
    sendCoins: {
      name: 'SendCoins',
      requestType: SendCoinsRequest,
      requestStream: false,
      responseType: SendCoinsResponse,
      responseStream: false,
      options: {},
    },
    /**
     * Lncli: `listunspent`
     * Deprecated, use walletrpc.ListUnspent instead.
     *
     * ListUnspent returns a list of all utxos spendable by the wallet with a
     * number of confirmations between the specified minimum and maximum.
     */
    listUnspent: {
      name: 'ListUnspent',
      requestType: ListUnspentRequest,
      requestStream: false,
      responseType: ListUnspentResponse,
      responseStream: false,
      options: {},
    },
    /**
     * SubscribeTransactions creates a uni-directional stream from the server to
     * the client in which any newly discovered transactions relevant to the
     * wallet are sent over.
     */
    subscribeTransactions: {
      name: 'SubscribeTransactions',
      requestType: GetTransactionsRequest,
      requestStream: false,
      responseType: Transaction,
      responseStream: true,
      options: {},
    },
    /**
     * Lncli: `sendmany`
     * SendMany handles a request for a transaction that creates multiple specified
     * outputs in parallel. If neither target_conf, or sat_per_vbyte are set, then
     * the internal wallet will consult its fee model to determine a fee for the
     * default confirmation target.
     */
    sendMany: {
      name: 'SendMany',
      requestType: SendManyRequest,
      requestStream: false,
      responseType: SendManyResponse,
      responseStream: false,
      options: {},
    },
    /**
     * Lncli: `newaddress`
     * NewAddress creates a new address under control of the local wallet.
     */
    newAddress: {
      name: 'NewAddress',
      requestType: NewAddressRequest,
      requestStream: false,
      responseType: NewAddressResponse,
      responseStream: false,
      options: {},
    },
    /**
     * Lncli: `signmessage`
     * SignMessage signs a message with this node's private key. The returned
     * signature string is `zbase32` encoded and pubkey recoverable, meaning that
     * only the message digest and signature are needed for verification.
     */
    signMessage: {
      name: 'SignMessage',
      requestType: SignMessageRequest,
      requestStream: false,
      responseType: SignMessageResponse,
      responseStream: false,
      options: {},
    },
    /**
     * Lncli: `verifymessage`
     * VerifyMessage verifies a signature over a msg. The signature must be
     * zbase32 encoded and signed by an active node in the resident node's
     * channel database. In addition to returning the validity of the signature,
     * VerifyMessage also returns the recovered pubkey from the signature.
     */
    verifyMessage: {
      name: 'VerifyMessage',
      requestType: VerifyMessageRequest,
      requestStream: false,
      responseType: VerifyMessageResponse,
      responseStream: false,
      options: {},
    },
    /**
     * Lncli: `connect`
     * ConnectPeer attempts to establish a connection to a remote peer. This is at
     * the networking level, and is used for communication between nodes. This is
     * distinct from establishing a channel with a peer.
     */
    connectPeer: {
      name: 'ConnectPeer',
      requestType: ConnectPeerRequest,
      requestStream: false,
      responseType: ConnectPeerResponse,
      responseStream: false,
      options: {},
    },
    /**
     * Lncli: `disconnect`
     * DisconnectPeer attempts to disconnect one peer from another identified by a
     * given pubKey. In the case that we currently have a pending or active channel
     * with the target peer, then this action will be not be allowed.
     */
    disconnectPeer: {
      name: 'DisconnectPeer',
      requestType: DisconnectPeerRequest,
      requestStream: false,
      responseType: DisconnectPeerResponse,
      responseStream: false,
      options: {},
    },
    /**
     * Lncli: `listpeers`
     * ListPeers returns a verbose listing of all currently active peers.
     */
    listPeers: {
      name: 'ListPeers',
      requestType: ListPeersRequest,
      requestStream: false,
      responseType: ListPeersResponse,
      responseStream: false,
      options: {},
    },
    /**
     * SubscribePeerEvents creates a uni-directional stream from the server to
     * the client in which any events relevant to the state of peers are sent
     * over. Events include peers going online and offline.
     */
    subscribePeerEvents: {
      name: 'SubscribePeerEvents',
      requestType: PeerEventSubscription,
      requestStream: false,
      responseType: PeerEvent,
      responseStream: true,
      options: {},
    },
    /**
     * Lncli: `getinfo`
     * GetInfo returns general information concerning the lightning node including
     * it's identity pubkey, alias, the chains it is connected to, and information
     * concerning the number of open+pending channels.
     */
    getInfo: {
      name: 'GetInfo',
      requestType: GetInfoRequest,
      requestStream: false,
      responseType: GetInfoResponse,
      responseStream: false,
      options: {},
    },
    /**
     * Lncli: `getrecoveryinfo`
     * GetRecoveryInfo returns information concerning the recovery mode including
     * whether it's in a recovery mode, whether the recovery is finished, and the
     * progress made so far.
     */
    getRecoveryInfo: {
      name: 'GetRecoveryInfo',
      requestType: GetRecoveryInfoRequest,
      requestStream: false,
      responseType: GetRecoveryInfoResponse,
      responseStream: false,
      options: {},
    },
    /**
     * Lncli: `pendingchannels`
     * PendingChannels returns a list of all the channels that are currently
     * considered "pending". A channel is pending if it has finished the funding
     * workflow and is waiting for confirmations for the funding txn, or is in the
     * process of closure, either initiated cooperatively or non-cooperatively.
     */
    pendingChannels: {
      name: 'PendingChannels',
      requestType: PendingChannelsRequest,
      requestStream: false,
      responseType: PendingChannelsResponse,
      responseStream: false,
      options: {},
    },
    /**
     * Lncli: `listchannels`
     * ListChannels returns a description of all the open channels that this node
     * is a participant in.
     */
    listChannels: {
      name: 'ListChannels',
      requestType: ListChannelsRequest,
      requestStream: false,
      responseType: ListChannelsResponse,
      responseStream: false,
      options: {},
    },
    /**
     * SubscribeChannelEvents creates a uni-directional stream from the server to
     * the client in which any updates relevant to the state of the channels are
     * sent over. Events include new active channels, inactive channels, and closed
     * channels.
     */
    subscribeChannelEvents: {
      name: 'SubscribeChannelEvents',
      requestType: ChannelEventSubscription,
      requestStream: false,
      responseType: ChannelEventUpdate,
      responseStream: true,
      options: {},
    },
    /**
     * Lncli: `closedchannels`
     * ClosedChannels returns a description of all the closed channels that
     * this node was a participant in.
     */
    closedChannels: {
      name: 'ClosedChannels',
      requestType: ClosedChannelsRequest,
      requestStream: false,
      responseType: ClosedChannelsResponse,
      responseStream: false,
      options: {},
    },
    /**
     * OpenChannelSync is a synchronous version of the OpenChannel RPC call. This
     * call is meant to be consumed by clients to the REST proxy. As with all
     * other sync calls, all byte slices are intended to be populated as hex
     * encoded strings.
     */
    openChannelSync: {
      name: 'OpenChannelSync',
      requestType: OpenChannelRequest,
      requestStream: false,
      responseType: ChannelPoint,
      responseStream: false,
      options: {},
    },
    /**
     * Lncli: `openchannel`
     * OpenChannel attempts to open a singly funded channel specified in the
     * request to a remote peer. Users are able to specify a target number of
     * blocks that the funding transaction should be confirmed in, or a manual fee
     * rate to us for the funding transaction. If neither are specified, then a
     * lax block confirmation target is used. Each OpenStatusUpdate will return
     * the pending channel ID of the in-progress channel. Depending on the
     * arguments specified in the OpenChannelRequest, this pending channel ID can
     * then be used to manually progress the channel funding flow.
     */
    openChannel: {
      name: 'OpenChannel',
      requestType: OpenChannelRequest,
      requestStream: false,
      responseType: OpenStatusUpdate,
      responseStream: true,
      options: {},
    },
    /**
     * Lncli: `batchopenchannel`
     * BatchOpenChannel attempts to open multiple single-funded channels in a
     * single transaction in an atomic way. This means either all channel open
     * requests succeed at once or all attempts are aborted if any of them fail.
     * This is the safer variant of using PSBTs to manually fund a batch of
     * channels through the OpenChannel RPC.
     */
    batchOpenChannel: {
      name: 'BatchOpenChannel',
      requestType: BatchOpenChannelRequest,
      requestStream: false,
      responseType: BatchOpenChannelResponse,
      responseStream: false,
      options: {},
    },
    /**
     * FundingStateStep is an advanced funding related call that allows the caller
     * to either execute some preparatory steps for a funding workflow, or
     * manually progress a funding workflow. The primary way a funding flow is
     * identified is via its pending channel ID. As an example, this method can be
     * used to specify that we're expecting a funding flow for a particular
     * pending channel ID, for which we need to use specific parameters.
     * Alternatively, this can be used to interactively drive PSBT signing for
     * funding for partially complete funding transactions.
     */
    fundingStateStep: {
      name: 'FundingStateStep',
      requestType: FundingTransitionMsg,
      requestStream: false,
      responseType: FundingStateStepResp,
      responseStream: false,
      options: {},
    },
    /**
     * ChannelAcceptor dispatches a bi-directional streaming RPC in which
     * OpenChannel requests are sent to the client and the client responds with
     * a boolean that tells LND whether or not to accept the channel. This allows
     * node operators to specify their own criteria for accepting inbound channels
     * through a single persistent connection.
     */
    channelAcceptor: {
      name: 'ChannelAcceptor',
      requestType: ChannelAcceptResponse,
      requestStream: true,
      responseType: ChannelAcceptRequest,
      responseStream: true,
      options: {},
    },
    /**
     * Lncli: `closechannel`
     * CloseChannel attempts to close an active channel identified by its channel
     * outpoint (ChannelPoint). The actions of this method can additionally be
     * augmented to attempt a force close after a timeout period in the case of an
     * inactive peer. If a non-force close (cooperative closure) is requested,
     * then the user can specify either a target number of blocks until the
     * closure transaction is confirmed, or a manual fee rate. If neither are
     * specified, then a default lax, block confirmation target is used.
     */
    closeChannel: {
      name: 'CloseChannel',
      requestType: CloseChannelRequest,
      requestStream: false,
      responseType: CloseStatusUpdate,
      responseStream: true,
      options: {},
    },
    /**
     * Lncli: `abandonchannel`
     * AbandonChannel removes all channel state from the database except for a
     * close summary. This method can be used to get rid of permanently unusable
     * channels due to bugs fixed in newer versions of lnd. This method can also be
     * used to remove externally funded channels where the funding transaction was
     * never broadcast. Only available for non-externally funded channels in dev
     * build.
     */
    abandonChannel: {
      name: 'AbandonChannel',
      requestType: AbandonChannelRequest,
      requestStream: false,
      responseType: AbandonChannelResponse,
      responseStream: false,
      options: {},
    },
    /**
     * Lncli: `sendpayment`
     * Deprecated, use routerrpc.SendPaymentV2. SendPayment dispatches a
     * bi-directional streaming RPC for sending payments through the Lightning
     * Network. A single RPC invocation creates a persistent bi-directional
     * stream allowing clients to rapidly send payments through the Lightning
     * Network with a single persistent connection.
     *
     * @deprecated
     */
    sendPayment: {
      name: 'SendPayment',
      requestType: SendRequest,
      requestStream: true,
      responseType: SendResponse,
      responseStream: true,
      options: {},
    },
    /**
     * SendPaymentSync is the synchronous non-streaming version of SendPayment.
     * This RPC is intended to be consumed by clients of the REST proxy.
     * Additionally, this RPC expects the destination's public key and the payment
     * hash (if any) to be encoded as hex strings.
     */
    sendPaymentSync: {
      name: 'SendPaymentSync',
      requestType: SendRequest,
      requestStream: false,
      responseType: SendResponse,
      responseStream: false,
      options: {},
    },
    /**
     * Lncli: `sendtoroute`
     * Deprecated, use routerrpc.SendToRouteV2. SendToRoute is a bi-directional
     * streaming RPC for sending payment through the Lightning Network. This
     * method differs from SendPayment in that it allows users to specify a full
     * route manually. This can be used for things like rebalancing, and atomic
     * swaps.
     *
     * @deprecated
     */
    sendToRoute: {
      name: 'SendToRoute',
      requestType: SendToRouteRequest,
      requestStream: true,
      responseType: SendResponse,
      responseStream: true,
      options: {},
    },
    /**
     * SendToRouteSync is a synchronous version of SendToRoute. It Will block
     * until the payment either fails or succeeds.
     */
    sendToRouteSync: {
      name: 'SendToRouteSync',
      requestType: SendToRouteRequest,
      requestStream: false,
      responseType: SendResponse,
      responseStream: false,
      options: {},
    },
    /**
     * Lncli: `addinvoice`
     * AddInvoice attempts to add a new invoice to the invoice database. Any
     * duplicated invoices are rejected, therefore all invoices *must* have a
     * unique payment preimage.
     */
    addInvoice: {
      name: 'AddInvoice',
      requestType: Invoice,
      requestStream: false,
      responseType: AddInvoiceResponse,
      responseStream: false,
      options: {},
    },
    /**
     * Lncli: `listinvoices`
     * ListInvoices returns a list of all the invoices currently stored within the
     * database. Any active debug invoices are ignored. It has full support for
     * paginated responses, allowing users to query for specific invoices through
     * their add_index. This can be done by using either the first_index_offset or
     * last_index_offset fields included in the response as the index_offset of the
     * next request. By default, the first 100 invoices created will be returned.
     * Backwards pagination is also supported through the Reversed flag.
     */
    listInvoices: {
      name: 'ListInvoices',
      requestType: ListInvoiceRequest,
      requestStream: false,
      responseType: ListInvoiceResponse,
      responseStream: false,
      options: {},
    },
    /**
     * Lncli: `lookupinvoice`
     * LookupInvoice attempts to look up an invoice according to its payment hash.
     * The passed payment hash *must* be exactly 32 bytes, if not, an error is
     * returned.
     */
    lookupInvoice: {
      name: 'LookupInvoice',
      requestType: PaymentHash,
      requestStream: false,
      responseType: Invoice,
      responseStream: false,
      options: {},
    },
    /**
     * SubscribeInvoices returns a uni-directional stream (server -> client) for
     * notifying the client of newly added/settled invoices. The caller can
     * optionally specify the add_index and/or the settle_index. If the add_index
     * is specified, then we'll first start by sending add invoice events for all
     * invoices with an add_index greater than the specified value. If the
     * settle_index is specified, the next, we'll send out all settle events for
     * invoices with a settle_index greater than the specified value. One or both
     * of these fields can be set. If no fields are set, then we'll only send out
     * the latest add/settle events.
     */
    subscribeInvoices: {
      name: 'SubscribeInvoices',
      requestType: InvoiceSubscription,
      requestStream: false,
      responseType: Invoice,
      responseStream: true,
      options: {},
    },
    /**
     * Lncli: `decodepayreq`
     * DecodePayReq takes an encoded payment request string and attempts to decode
     * it, returning a full description of the conditions encoded within the
     * payment request.
     */
    decodePayReq: {
      name: 'DecodePayReq',
      requestType: PayReqString,
      requestStream: false,
      responseType: PayReq,
      responseStream: false,
      options: {},
    },
    /**
     * Lncli: `listpayments`
     * ListPayments returns a list of all outgoing payments.
     */
    listPayments: {
      name: 'ListPayments',
      requestType: ListPaymentsRequest,
      requestStream: false,
      responseType: ListPaymentsResponse,
      responseStream: false,
      options: {},
    },
    /**
     * DeletePayment deletes an outgoing payment from DB. Note that it will not
     * attempt to delete an In-Flight payment, since that would be unsafe.
     */
    deletePayment: {
      name: 'DeletePayment',
      requestType: DeletePaymentRequest,
      requestStream: false,
      responseType: DeletePaymentResponse,
      responseStream: false,
      options: {},
    },
    /**
     * DeleteAllPayments deletes all outgoing payments from DB. Note that it will
     * not attempt to delete In-Flight payments, since that would be unsafe.
     */
    deleteAllPayments: {
      name: 'DeleteAllPayments',
      requestType: DeleteAllPaymentsRequest,
      requestStream: false,
      responseType: DeleteAllPaymentsResponse,
      responseStream: false,
      options: {},
    },
    /**
     * Lncli: `describegraph`
     * DescribeGraph returns a description of the latest graph state from the
     * point of view of the node. The graph information is partitioned into two
     * components: all the nodes/vertexes, and all the edges that connect the
     * vertexes themselves. As this is a directed graph, the edges also contain
     * the node directional specific routing policy which includes: the time lock
     * delta, fee information, etc.
     */
    describeGraph: {
      name: 'DescribeGraph',
      requestType: ChannelGraphRequest,
      requestStream: false,
      responseType: ChannelGraph,
      responseStream: false,
      options: {},
    },
    /**
     * Lncli: `getnodemetrics`
     * GetNodeMetrics returns node metrics calculated from the graph. Currently
     * the only supported metric is betweenness centrality of individual nodes.
     */
    getNodeMetrics: {
      name: 'GetNodeMetrics',
      requestType: NodeMetricsRequest,
      requestStream: false,
      responseType: NodeMetricsResponse,
      responseStream: false,
      options: {},
    },
    /**
     * Lncli: `getchaninfo`
     * GetChanInfo returns the latest authenticated network announcement for the
     * given channel identified by its channel ID: an 8-byte integer which
     * uniquely identifies the location of transaction's funding output within the
     * blockchain.
     */
    getChanInfo: {
      name: 'GetChanInfo',
      requestType: ChanInfoRequest,
      requestStream: false,
      responseType: ChannelEdge,
      responseStream: false,
      options: {},
    },
    /**
     * Lncli: `getnodeinfo`
     * GetNodeInfo returns the latest advertised, aggregated, and authenticated
     * channel information for the specified node identified by its public key.
     */
    getNodeInfo: {
      name: 'GetNodeInfo',
      requestType: NodeInfoRequest,
      requestStream: false,
      responseType: NodeInfo,
      responseStream: false,
      options: {},
    },
    /**
     * Lncli: `queryroutes`
     * QueryRoutes attempts to query the daemon's Channel Router for a possible
     * route to a target destination capable of carrying a specific amount of
     * satoshis. The returned route contains the full details required to craft and
     * send an HTLC, also including the necessary information that should be
     * present within the Sphinx packet encapsulated within the HTLC.
     *
     * When using REST, the `dest_custom_records` map type can be set by appending
     * `&dest_custom_records[<record_number>]=<record_data_base64_url_encoded>`
     * to the URL. Unfortunately this map type doesn't appear in the REST API
     * documentation because of a bug in the grpc-gateway library.
     */
    queryRoutes: {
      name: 'QueryRoutes',
      requestType: QueryRoutesRequest,
      requestStream: false,
      responseType: QueryRoutesResponse,
      responseStream: false,
      options: {},
    },
    /**
     * Lncli: `getnetworkinfo`
     * GetNetworkInfo returns some basic stats about the known channel graph from
     * the point of view of the node.
     */
    getNetworkInfo: {
      name: 'GetNetworkInfo',
      requestType: NetworkInfoRequest,
      requestStream: false,
      responseType: NetworkInfo,
      responseStream: false,
      options: {},
    },
    /**
     * Lncli: `stop`
     * StopDaemon will send a shutdown request to the interrupt handler, triggering
     * a graceful shutdown of the daemon.
     */
    stopDaemon: {
      name: 'StopDaemon',
      requestType: StopRequest,
      requestStream: false,
      responseType: StopResponse,
      responseStream: false,
      options: {},
    },
    /**
     * SubscribeChannelGraph launches a streaming RPC that allows the caller to
     * receive notifications upon any changes to the channel graph topology from
     * the point of view of the responding node. Events notified include: new
     * nodes coming online, nodes updating their authenticated attributes, new
     * channels being advertised, updates in the routing policy for a directional
     * channel edge, and when channels are closed on-chain.
     */
    subscribeChannelGraph: {
      name: 'SubscribeChannelGraph',
      requestType: GraphTopologySubscription,
      requestStream: false,
      responseType: GraphTopologyUpdate,
      responseStream: true,
      options: {},
    },
    /**
     * Lncli: `debuglevel`
     * DebugLevel allows a caller to programmatically set the logging verbosity of
     * lnd. The logging can be targeted according to a coarse daemon-wide logging
     * level, or in a granular fashion to specify the logging for a target
     * sub-system.
     */
    debugLevel: {
      name: 'DebugLevel',
      requestType: DebugLevelRequest,
      requestStream: false,
      responseType: DebugLevelResponse,
      responseStream: false,
      options: {},
    },
    /**
     * Lncli: `feereport`
     * FeeReport allows the caller to obtain a report detailing the current fee
     * schedule enforced by the node globally for each channel.
     */
    feeReport: {
      name: 'FeeReport',
      requestType: FeeReportRequest,
      requestStream: false,
      responseType: FeeReportResponse,
      responseStream: false,
      options: {},
    },
    /**
     * Lncli: `updatechanpolicy`
     * UpdateChannelPolicy allows the caller to update the fee schedule and
     * channel policies for all channels globally, or a particular channel.
     */
    updateChannelPolicy: {
      name: 'UpdateChannelPolicy',
      requestType: PolicyUpdateRequest,
      requestStream: false,
      responseType: PolicyUpdateResponse,
      responseStream: false,
      options: {},
    },
    /**
     * Lncli: `fwdinghistory`
     * ForwardingHistory allows the caller to query the htlcswitch for a record of
     * all HTLCs forwarded within the target time range, and integer offset
     * within that time range, for a maximum number of events. If no maximum number
     * of events is specified, up to 100 events will be returned. If no time-range
     * is specified, then events will be returned in the order that they occured.
     *
     * A list of forwarding events are returned. The size of each forwarding event
     * is 40 bytes, and the max message size able to be returned in gRPC is 4 MiB.
     * As a result each message can only contain 50k entries. Each response has
     * the index offset of the last entry. The index offset can be provided to the
     * request to allow the caller to skip a series of records.
     */
    forwardingHistory: {
      name: 'ForwardingHistory',
      requestType: ForwardingHistoryRequest,
      requestStream: false,
      responseType: ForwardingHistoryResponse,
      responseStream: false,
      options: {},
    },
    /**
     * Lncli: `exportchanbackup`
     * ExportChannelBackup attempts to return an encrypted static channel backup
     * for the target channel identified by it channel point. The backup is
     * encrypted with a key generated from the aezeed seed of the user. The
     * returned backup can either be restored using the RestoreChannelBackup
     * method once lnd is running, or via the InitWallet and UnlockWallet methods
     * from the WalletUnlocker service.
     */
    exportChannelBackup: {
      name: 'ExportChannelBackup',
      requestType: ExportChannelBackupRequest,
      requestStream: false,
      responseType: ChannelBackup,
      responseStream: false,
      options: {},
    },
    /**
     * ExportAllChannelBackups returns static channel backups for all existing
     * channels known to lnd. A set of regular singular static channel backups for
     * each channel are returned. Additionally, a multi-channel backup is returned
     * as well, which contains a single encrypted blob containing the backups of
     * each channel.
     */
    exportAllChannelBackups: {
      name: 'ExportAllChannelBackups',
      requestType: ChanBackupExportRequest,
      requestStream: false,
      responseType: ChanBackupSnapshot,
      responseStream: false,
      options: {},
    },
    /**
     * VerifyChanBackup allows a caller to verify the integrity of a channel backup
     * snapshot. This method will accept either a packed Single or a packed Multi.
     * Specifying both will result in an error.
     */
    verifyChanBackup: {
      name: 'VerifyChanBackup',
      requestType: ChanBackupSnapshot,
      requestStream: false,
      responseType: VerifyChanBackupResponse,
      responseStream: false,
      options: {},
    },
    /**
     * Lncli: `restorechanbackup`
     * RestoreChannelBackups accepts a set of singular channel backups, or a
     * single encrypted multi-chan backup and attempts to recover any funds
     * remaining within the channel. If we are able to unpack the backup, then the
     * new channel will be shown under listchannels, as well as pending channels.
     */
    restoreChannelBackups: {
      name: 'RestoreChannelBackups',
      requestType: RestoreChanBackupRequest,
      requestStream: false,
      responseType: RestoreBackupResponse,
      responseStream: false,
      options: {},
    },
    /**
     * SubscribeChannelBackups allows a client to sub-subscribe to the most up to
     * date information concerning the state of all channel backups. Each time a
     * new channel is added, we return the new set of channels, along with a
     * multi-chan backup containing the backup info for all channels. Each time a
     * channel is closed, we send a new update, which contains new new chan back
     * ups, but the updated set of encrypted multi-chan backups with the closed
     * channel(s) removed.
     */
    subscribeChannelBackups: {
      name: 'SubscribeChannelBackups',
      requestType: ChannelBackupSubscription,
      requestStream: false,
      responseType: ChanBackupSnapshot,
      responseStream: true,
      options: {},
    },
    /**
     * Lncli: `bakemacaroon`
     * BakeMacaroon allows the creation of a new macaroon with custom read and
     * write permissions. No first-party caveats are added since this can be done
     * offline.
     */
    bakeMacaroon: {
      name: 'BakeMacaroon',
      requestType: BakeMacaroonRequest,
      requestStream: false,
      responseType: BakeMacaroonResponse,
      responseStream: false,
      options: {},
    },
    /**
     * Lncli: `listmacaroonids`
     * ListMacaroonIDs returns all root key IDs that are in use.
     */
    listMacaroonIDs: {
      name: 'ListMacaroonIDs',
      requestType: ListMacaroonIDsRequest,
      requestStream: false,
      responseType: ListMacaroonIDsResponse,
      responseStream: false,
      options: {},
    },
    /**
     * Lncli: `deletemacaroonid`
     * DeleteMacaroonID deletes the specified macaroon ID and invalidates all
     * macaroons derived from that ID.
     */
    deleteMacaroonID: {
      name: 'DeleteMacaroonID',
      requestType: DeleteMacaroonIDRequest,
      requestStream: false,
      responseType: DeleteMacaroonIDResponse,
      responseStream: false,
      options: {},
    },
    /**
     * Lncli: `listpermissions`
     * ListPermissions lists all RPC method URIs and their required macaroon
     * permissions to access them.
     */
    listPermissions: {
      name: 'ListPermissions',
      requestType: ListPermissionsRequest,
      requestStream: false,
      responseType: ListPermissionsResponse,
      responseStream: false,
      options: {},
    },
    /**
     * CheckMacaroonPermissions checks whether a request follows the constraints
     * imposed on the macaroon and that the macaroon is authorized to follow the
     * provided permissions.
     */
    checkMacaroonPermissions: {
      name: 'CheckMacaroonPermissions',
      requestType: CheckMacPermRequest,
      requestStream: false,
      responseType: CheckMacPermResponse,
      responseStream: false,
      options: {},
    },
    /**
     * RegisterRPCMiddleware adds a new gRPC middleware to the interceptor chain. A
     * gRPC middleware is software component external to lnd that aims to add
     * additional business logic to lnd by observing/intercepting/validating
     * incoming gRPC client requests and (if needed) replacing/overwriting outgoing
     * messages before they're sent to the client. When registering the middleware
     * must identify itself and indicate what custom macaroon caveats it wants to
     * be responsible for. Only requests that contain a macaroon with that specific
     * custom caveat are then sent to the middleware for inspection. The other
     * option is to register for the read-only mode in which all requests/responses
     * are forwarded for interception to the middleware but the middleware is not
     * allowed to modify any responses. As a security measure, _no_ middleware can
     * modify responses for requests made with _unencumbered_ macaroons!
     */
    registerRPCMiddleware: {
      name: 'RegisterRPCMiddleware',
      requestType: RPCMiddlewareResponse,
      requestStream: true,
      responseType: RPCMiddlewareRequest,
      responseStream: true,
      options: {},
    },
    /**
     * Lncli: `sendcustom`
     * SendCustomMessage sends a custom peer message.
     */
    sendCustomMessage: {
      name: 'SendCustomMessage',
      requestType: SendCustomMessageRequest,
      requestStream: false,
      responseType: SendCustomMessageResponse,
      responseStream: false,
      options: {},
    },
    /**
     * Lncli: `subscribecustom`
     * SubscribeCustomMessages subscribes to a stream of incoming custom peer
     * messages.
     */
    subscribeCustomMessages: {
      name: 'SubscribeCustomMessages',
      requestType: SubscribeCustomMessagesRequest,
      requestStream: false,
      responseType: CustomMessage,
      responseStream: true,
      options: {},
    },
  },
} as const;

declare let self: any | undefined;
declare let window: any | undefined;
declare let global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== 'undefined') return globalThis;
  if (typeof self !== 'undefined') return self;
  if (typeof window !== 'undefined') return window;
  if (typeof global !== 'undefined') return global;
  throw 'Unable to locate global object';
})();

const atob: (b64: string) => string =
  globalThis.atob ||
  ((b64) => globalThis.Buffer.from(b64, 'base64').toString('binary'));
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const array = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
    array[i] = bin.charCodeAt(i);
  }

  return array;
}

const btoa: (bin: string) => string =
  globalThis.btoa ||
  ((bin) => globalThis.Buffer.from(bin, 'binary').toString('base64'));
function base64FromBytes(array: Uint8Array): string {
  const bin: string[] = [];
  for (const byte of array) {
    bin.push(String.fromCharCode(byte));
  }

  return btoa(bin.join(''));
}

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends Record<string, unknown>
  ? {[K in keyof T]?: DeepPartial<T[K]>}
  : Partial<T>;

function longToString(long: Long) {
  return long.toString();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
