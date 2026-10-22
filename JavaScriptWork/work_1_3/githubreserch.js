document.getElementById("serchBtn").addEventListener("click", () => {
    const username = document.getElementById("username").value.trim();
    const resultDiv = document.getElementById("result");
    if (!username) {
        resultDiv.innerHTML ="<p>ユーザー名を入力してください。</p>";
        return;
    }
    fetch(`https://api.github.com/users/${username}`)
         .then(res =>{
            if (!res.ok) throw new Error("ユーザーが見つかりませんでした");
            return res.json();
         })
         .then(date => {
            resultDiv.innerHTML = `
        <p><strong>ユーザー名:</strong> ${date.login}</p>
        <p><strong>名前:</strong> ${date.name || "未設定"}</p>
        <p><strong>フォロワー数:</strong> ${date.followers}</p>
        <p><strong>公開リポジトリ数:</strong> ${date.public_repos}</p>
        <img src="${date.avatar_url}" width="100" alt="アイコン画像"/>
        `;
        })
        .catch(err => {
            resultDiv.innerHTML = `<p style="color:red;">${err.message}</p>`;
        });
});