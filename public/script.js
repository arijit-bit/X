const generate = document.querySelector(".generator")
generate.addEventListener("click", async () => {
  const container = document.getElementsByClassName("ai-tweet-container")[0];
  if (!container) {
    console.error("Container not found!");
    return;
  }

  for (let index = 0; index <2; index++) {
    try {
      const response = await fetch("/api/tweet");
      const tweet = await response.text();

      const newDiv = document.createElement("div");
      newDiv.innerHTML = `
        <div class="ai-tweets border-b border-white px-4 pb-2 pt-3">
          <div class="flex items-start gap-3">
            <img src="../assets/profile-ar07.jpg" alt="" class="w-9 rounded-full">
            <div>
              <div class="flex items-center w-full justify-between">
                <div class="ai-content-post flex items-center gap-1">
                  <h2 class="text-[14px] text-white font-bold">Aijit patra.</h2>
                  <h4 class="text-white text-[12px] font-light">@patra_arij68778</h4>
                  <h4 class="text-white text-[12px] font-light"> . 0m</h4>
                </div>
                <div class="trripledot-grok flex gap-1 items-center">
                  <span class="material-symbols-outlined text-white" style="font-size: 15px;">hide_source</span>
                  <span class="material-symbols-outlined text-white" style="font-size: 15px;">more_horiz</span>
                </div>
              </div>
              <div class="tweet-content text-white font-[10px] text-[13.5px] pb-2">
                <p>${tweet}</p>
              </div>
              <div class="like-comment-share flex justify-between items-center">
                <div class="icon-value flex items-center gap-1 cursor-pointer">
                  <span class="material-symbols-outlined text-white" style="font-size: small;">comment</span>
                  <div class="value  text-white text-[11px] mb-1">300K</div>
                </div>
                <div class="icon-value flex items-center gap-1 cursor-pointer">
                  <span class="material-symbols-outlined text-white" style="font-size: small;">repeat</span>
                  <div class="value  text-white text-[11px] mb-1">300K</div>
                </div>
                <div class="icon-value flex items-center gap-1 cursor-pointer">
                  <span class="material-symbols-outlined text-white" style="font-size: small;">favorite</span>
                  <div class="value  text-white text-[11px] mb-1">300K</div>
                </div>
                <div class="icon-value flex items-center gap-1 cursor-pointer">
                  <span class="material-symbols-outlined text-white" style="font-size: small;">Equalizer</span>
                  <div class="value  text-white text-[11px] mb-1">300K</div>
                </div>
                <div class="icon-value flex items-center gap-1 cursor-pointer">
                  <span class="material-symbols-outlined text-white" style="font-size: large;">bookmark</span>
                  <span class="material-symbols-outlined text-white" style="font-size: large;">upload</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
      container.appendChild(newDiv);
    } catch (err) {
      console.error("Failed to fetch tweet:", err);
    }
  }
});


