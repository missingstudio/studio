package openai

import (
	_ "embed"

	"github.com/missingstudio/studio/backend/internal/providers/base"
	"github.com/missingstudio/studio/backend/pkg/utils"
)

//go:embed schema.json
var schema []byte

var _ base.IProvider = &openAIProvider{}

type openAIProvider struct {
	name   string
	config base.ProviderConfig
	OpenAIHeaders
}

func NewOpenAIProvider(headers OpenAIHeaders) *openAIProvider {
	config := getOpenAIConfig("https://api.openai.com")

	return &openAIProvider{
		name:          "OpenAI",
		config:        config,
		OpenAIHeaders: headers,
	}
}

func (oai openAIProvider) Name() string {
	return oai.name
}

func (togetherAI openAIProvider) Schema() []byte {
	return schema
}

func (oai openAIProvider) Validate() error {
	return utils.ValidateHeaders(oai.OpenAIHeaders)
}

func getOpenAIConfig(baseURL string) base.ProviderConfig {
	return base.ProviderConfig{
		BaseURL:         baseURL,
		ChatCompletions: "/v1/chat/completions",
	}
}
