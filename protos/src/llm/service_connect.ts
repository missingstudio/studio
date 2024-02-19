// @generated by protoc-gen-connect-es v1.2.0 with parameter "target=ts,import_extension="
// @generated from file llm/service.proto (package llm.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { ChatCompletionRequest, ChatCompletionResponse, GetProviderConfigRequest, GetProviderConfigResponse, GetProviderRequest, GetProviderResponse, LogResponse, ModelRequest, ModelResponse, ProvidersResponse } from "./service_pb";
import { Empty, MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service llm.v1.LLMService
 */
export const LLMService = {
  typeName: "llm.v1.LLMService",
  methods: {
    /**
     * @generated from rpc llm.v1.LLMService.GetChatCompletions
     */
    getChatCompletions: {
      name: "GetChatCompletions",
      I: ChatCompletionRequest,
      O: ChatCompletionResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc llm.v1.LLMService.GetStreamChatCompletions
     */
    getStreamChatCompletions: {
      name: "GetStreamChatCompletions",
      I: ChatCompletionRequest,
      O: ChatCompletionResponse,
      kind: MethodKind.ServerStreaming,
    },
    /**
     * @generated from rpc llm.v1.LLMService.ListModels
     */
    listModels: {
      name: "ListModels",
      I: ModelRequest,
      O: ModelResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc llm.v1.LLMService.ListProviders
     */
    listProviders: {
      name: "ListProviders",
      I: Empty,
      O: ProvidersResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc llm.v1.LLMService.GetProviderById
     */
    getProviderById: {
      name: "GetProviderById",
      I: GetProviderRequest,
      O: GetProviderResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc llm.v1.LLMService.GetProviderConfig
     */
    getProviderConfig: {
      name: "GetProviderConfig",
      I: GetProviderConfigRequest,
      O: GetProviderConfigResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc llm.v1.LLMService.ListTrackingLogs
     */
    listTrackingLogs: {
      name: "ListTrackingLogs",
      I: Empty,
      O: LogResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

