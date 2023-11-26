export function getExeName(fullPath:string) {
    // Split the path into components
    const pathComponents = fullPath.split('\\');
  
    // Get the last component (the exe name)
    const exeName = pathComponents[pathComponents.length - 1];
  
    return exeName;
  }
  