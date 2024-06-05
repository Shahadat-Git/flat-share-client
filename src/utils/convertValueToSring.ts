export function convertValuesToString(obj: any) {
  const newObj: any = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = String(obj[key]);
    }
  }
  return newObj;
}
