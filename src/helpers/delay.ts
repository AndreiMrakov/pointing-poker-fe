export async function delay(payload: any): Promise<any> {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return payload;
}
