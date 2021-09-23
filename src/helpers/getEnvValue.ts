export function getEnvValue(type: string): string | undefined {
  return process.env[type];
}
