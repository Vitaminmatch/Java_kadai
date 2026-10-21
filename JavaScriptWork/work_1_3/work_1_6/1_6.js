   function makeCoffee() {
    console.log("☕ スタッフ：先にコーヒーを準備します...");
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("✅ コーヒーができました！");
        resolve();
      }, 2000);
    });
}
function makeSandwich() {
    console.log("🥪 スタッフ：次にサンドイッチを準備します...");
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("✅ サンドイッチができました！");
        resolve();
      }, 3000);
    });
}
async function serveCustomer() {
    await Promise.all([makeCoffee(), makeSandwich()]);
    console.log("🍽️ スタッフ：すべてできたので配膳します！");
}
console.log("🥪 お客さんがコーヒーとサンドイッチを注文しました");
serveCustomer();