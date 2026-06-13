import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class AzureMediaservicesStreamingpoliciesandstreaminglocatorsApi implements ICredentialType {
        name = 'N8nDevAzureMediaservicesStreamingpoliciesandstreaminglocatorsApi';

        displayName = 'Azure Mediaservices Streamingpoliciesandstreaminglocators API';

        icon: Icon = { light: 'file:../nodes/AzureMediaservicesStreamingpoliciesandstreaminglocators/azure-mediaservices-streamingpoliciesandstreaminglocators.png', dark: 'file:../nodes/AzureMediaservicesStreamingpoliciesandstreaminglocators/azure-mediaservices-streamingpoliciesandstreaminglocators.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: '',
                        required: true,
                        placeholder: 'https://api.example.com',
                        description: 'The base URL of your Azure Mediaservices Streamingpoliciesandstreaminglocators API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
