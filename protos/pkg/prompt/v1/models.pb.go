// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.32.0
// 	protoc        (unknown)
// source: prompt/v1/models.proto

package promptv1

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	structpb "google.golang.org/protobuf/types/known/structpb"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type Prompt struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id          string           `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	Name        string           `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
	Description string           `protobuf:"bytes,3,opt,name=description,proto3" json:"description,omitempty"`
	Template    string           `protobuf:"bytes,4,opt,name=template,proto3" json:"template,omitempty"`
	Metadata    *structpb.Struct `protobuf:"bytes,5,opt,name=metadata,proto3" json:"metadata,omitempty"`
}

func (x *Prompt) Reset() {
	*x = Prompt{}
	if protoimpl.UnsafeEnabled {
		mi := &file_prompt_v1_models_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Prompt) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Prompt) ProtoMessage() {}

func (x *Prompt) ProtoReflect() protoreflect.Message {
	mi := &file_prompt_v1_models_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Prompt.ProtoReflect.Descriptor instead.
func (*Prompt) Descriptor() ([]byte, []int) {
	return file_prompt_v1_models_proto_rawDescGZIP(), []int{0}
}

func (x *Prompt) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *Prompt) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *Prompt) GetDescription() string {
	if x != nil {
		return x.Description
	}
	return ""
}

func (x *Prompt) GetTemplate() string {
	if x != nil {
		return x.Template
	}
	return ""
}

func (x *Prompt) GetMetadata() *structpb.Struct {
	if x != nil {
		return x.Metadata
	}
	return nil
}

var File_prompt_v1_models_proto protoreflect.FileDescriptor

var file_prompt_v1_models_proto_rawDesc = []byte{
	0x0a, 0x16, 0x70, 0x72, 0x6f, 0x6d, 0x70, 0x74, 0x2f, 0x76, 0x31, 0x2f, 0x6d, 0x6f, 0x64, 0x65,
	0x6c, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x09, 0x70, 0x72, 0x6f, 0x6d, 0x70, 0x74,
	0x2e, 0x76, 0x31, 0x1a, 0x1c, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x62, 0x75, 0x66, 0x2f, 0x73, 0x74, 0x72, 0x75, 0x63, 0x74, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x22, 0x9f, 0x01, 0x0a, 0x06, 0x50, 0x72, 0x6f, 0x6d, 0x70, 0x74, 0x12, 0x0e, 0x0a, 0x02,
	0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x69, 0x64, 0x12, 0x12, 0x0a, 0x04,
	0x6e, 0x61, 0x6d, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65,
	0x12, 0x20, 0x0a, 0x0b, 0x64, 0x65, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x18,
	0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0b, 0x64, 0x65, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x69,
	0x6f, 0x6e, 0x12, 0x1a, 0x0a, 0x08, 0x74, 0x65, 0x6d, 0x70, 0x6c, 0x61, 0x74, 0x65, 0x18, 0x04,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x74, 0x65, 0x6d, 0x70, 0x6c, 0x61, 0x74, 0x65, 0x12, 0x33,
	0x0a, 0x08, 0x6d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x18, 0x05, 0x20, 0x01, 0x28, 0x0b,
	0x32, 0x17, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62,
	0x75, 0x66, 0x2e, 0x53, 0x74, 0x72, 0x75, 0x63, 0x74, 0x52, 0x08, 0x6d, 0x65, 0x74, 0x61, 0x64,
	0x61, 0x74, 0x61, 0x42, 0x9c, 0x01, 0x0a, 0x0d, 0x63, 0x6f, 0x6d, 0x2e, 0x70, 0x72, 0x6f, 0x6d,
	0x70, 0x74, 0x2e, 0x76, 0x31, 0x42, 0x0b, 0x4d, 0x6f, 0x64, 0x65, 0x6c, 0x73, 0x50, 0x72, 0x6f,
	0x74, 0x6f, 0x50, 0x01, 0x5a, 0x39, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d,
	0x2f, 0x6d, 0x69, 0x73, 0x73, 0x69, 0x6e, 0x67, 0x73, 0x74, 0x75, 0x64, 0x69, 0x6f, 0x2f, 0x61,
	0x69, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73, 0x2f, 0x70, 0x6b, 0x67, 0x2f, 0x70, 0x72, 0x6f,
	0x6d, 0x70, 0x74, 0x2f, 0x76, 0x31, 0x3b, 0x70, 0x72, 0x6f, 0x6d, 0x70, 0x74, 0x76, 0x31, 0xa2,
	0x02, 0x03, 0x50, 0x58, 0x58, 0xaa, 0x02, 0x09, 0x50, 0x72, 0x6f, 0x6d, 0x70, 0x74, 0x2e, 0x56,
	0x31, 0xca, 0x02, 0x09, 0x50, 0x72, 0x6f, 0x6d, 0x70, 0x74, 0x5c, 0x56, 0x31, 0xe2, 0x02, 0x15,
	0x50, 0x72, 0x6f, 0x6d, 0x70, 0x74, 0x5c, 0x56, 0x31, 0x5c, 0x47, 0x50, 0x42, 0x4d, 0x65, 0x74,
	0x61, 0x64, 0x61, 0x74, 0x61, 0xea, 0x02, 0x0a, 0x50, 0x72, 0x6f, 0x6d, 0x70, 0x74, 0x3a, 0x3a,
	0x56, 0x31, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_prompt_v1_models_proto_rawDescOnce sync.Once
	file_prompt_v1_models_proto_rawDescData = file_prompt_v1_models_proto_rawDesc
)

func file_prompt_v1_models_proto_rawDescGZIP() []byte {
	file_prompt_v1_models_proto_rawDescOnce.Do(func() {
		file_prompt_v1_models_proto_rawDescData = protoimpl.X.CompressGZIP(file_prompt_v1_models_proto_rawDescData)
	})
	return file_prompt_v1_models_proto_rawDescData
}

var file_prompt_v1_models_proto_msgTypes = make([]protoimpl.MessageInfo, 1)
var file_prompt_v1_models_proto_goTypes = []interface{}{
	(*Prompt)(nil),          // 0: prompt.v1.Prompt
	(*structpb.Struct)(nil), // 1: google.protobuf.Struct
}
var file_prompt_v1_models_proto_depIdxs = []int32{
	1, // 0: prompt.v1.Prompt.metadata:type_name -> google.protobuf.Struct
	1, // [1:1] is the sub-list for method output_type
	1, // [1:1] is the sub-list for method input_type
	1, // [1:1] is the sub-list for extension type_name
	1, // [1:1] is the sub-list for extension extendee
	0, // [0:1] is the sub-list for field type_name
}

func init() { file_prompt_v1_models_proto_init() }
func file_prompt_v1_models_proto_init() {
	if File_prompt_v1_models_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_prompt_v1_models_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Prompt); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_prompt_v1_models_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   1,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_prompt_v1_models_proto_goTypes,
		DependencyIndexes: file_prompt_v1_models_proto_depIdxs,
		MessageInfos:      file_prompt_v1_models_proto_msgTypes,
	}.Build()
	File_prompt_v1_models_proto = out.File
	file_prompt_v1_models_proto_rawDesc = nil
	file_prompt_v1_models_proto_goTypes = nil
	file_prompt_v1_models_proto_depIdxs = nil
}
