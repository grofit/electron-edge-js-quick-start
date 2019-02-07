import {baseDll, externalTypeName, localTypeName} from "./environment";
import {func} from "electron-edge-js";

console.log("Using", baseDll, externalTypeName, localTypeName);

export const getAppDomainDirectory = func({
    assemblyFile: baseDll,
    typeName: localTypeName,
    methodName: 'GetAppDomainDirectory'
});

export const getCurrentTime = func({
    assemblyFile: baseDll,
    typeName: localTypeName,
    methodName: 'GetCurrentTime'
});

export const useDynamicInput = func({
    assemblyFile: baseDll,
    typeName: localTypeName,
    methodName: 'UseDynamicInput'
});

export const getPerson = func({
    assemblyFile: baseDll,
    typeName: externalTypeName,
    methodName: 'GetPersonInfo'
});
