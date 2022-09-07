namespace TestUtilities {
  function pickRandom(): any {
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    return possible[Math.floor(Math.random() * possible.length)];
  }

  export function randomString(length: number = 10): string {
    return Array.from({ length }, pickRandom).join('');
  }

  export function randomEmail(): string {
    return `${randomString(10)}@${randomString(5)}.${randomString(3)}`;
  }

  export function randomNumber(limit: number = 100_000): number {
    return Math.random() * limit;
  }

  export function randomInt(limit: number): number {
    return Math.floor(Math.random() * limit);
  }

  export function randomUUID(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c: string) => {
      // tslint:disable-next-line:no-bitwise
      const r = (Math.random() * 16) | 0;
      // tslint:disable-next-line:no-bitwise
      const v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }
}
