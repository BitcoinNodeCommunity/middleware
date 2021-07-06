// Original file: resources/rpc.proto

import type { Long } from '@grpc/proto-loader';

export interface HopHint {
  'nodeId'?: (string);
  'chanId'?: (number | string | Long);
  'feeBaseMsat'?: (number);
  'feeProportionalMillionths'?: (number);
  'cltvExpiryDelta'?: (number);
}

export interface HopHint__Output {
  'nodeId'?: (string);
  'chanId'?: (Long);
  'feeBaseMsat'?: (number);
  'feeProportionalMillionths'?: (number);
  'cltvExpiryDelta'?: (number);
}
