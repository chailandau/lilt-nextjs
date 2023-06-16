import { CodegenConfig } from '@graphql-codegen/cli';
import dotenv from 'dotenv';

dotenv.config();

const config: CodegenConfig = {
    schema: process.env.NEXT_PUBLIC_PAYLOAD_SCHEMA,
    overwrite: true,
    documents: ['./src/**/*.{ts,tsx}'],
    ignoreNoDocuments: true,
    generates: {
        './src/graphqlTypes.ts': {
            plugins: ['typescript', 'typescript-operations'],
            config: {
                enumsAsTypes: true,
                futureProofEnums: true
            }
        },
    },
    hooks: {
        afterAllFileWrite: 'eslint --fix',
    },
};

export default config;
