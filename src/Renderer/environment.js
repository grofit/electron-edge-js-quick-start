import {join} from "path";
let version = location.search.split('version=')[1];
const namespace = `QuickStart.${version.charAt(0).toUpperCase()}${version.substr(1)}`;
if(version === 'core') version = 'coreapp';

const baseNetAppPath = join(__dirname, `/src/${namespace}/bin/Debug/net${version}2.0`);

process.env.EDGE_USE_CORECLR = 1;
if(version !== 'standard')
{ process.env.EDGE_APP_ROOT = baseNetAppPath; }

export const baseDll = join(baseNetAppPath, `${namespace}.dll`);
export const localTypeName = `${namespace}.LocalMethods`;
export const externalTypeName = `${namespace}.ExternalMethods`;