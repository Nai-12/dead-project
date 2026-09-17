// plugins/ping.js
export const command = "ping";

export async function run(sock, chatId, msg) {
  await sock.sendMessage(chatId, { text: "Pong!" }, msg);
}
