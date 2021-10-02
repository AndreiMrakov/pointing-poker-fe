export async function delay(payload: any, ms: number): Promise<any> {
  await new Promise((resolve) => setTimeout(resolve, ms));
  return payload;
}
