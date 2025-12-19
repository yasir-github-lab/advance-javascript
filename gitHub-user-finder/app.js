let getUser = async ()=> {
      const username = document.getElementById("username").value;
      const result = document.getElementById("result");
      const error = document.getElementById("error");
      let error_message = "User not found";

      if (!username){
        error.innerText = error_message;
        result.classList.add("hidden");     
        error.classList.remove("hidden"); 
        return;
      } 

      try {
        const res = await fetch(`https://api.github.com/users/${username}`);
        if (res.status == "404"){
             error.innerText = error_message; 
             result.classList.add("hidden");     
            error.classList.remove("hidden"); 
            throw new Error("User not found");
        } 

        const data = await res.json();
        error.classList.add("hidden");
        result.classList.remove("hidden");
        let gitUser =`<img
        id="avatar"
        src="${data.avatar_url}"
        class="w-28 h-28 rounded-full mx-auto mb-4 border-4 border-blue-500"
      />

      <h2 id="name" class="text-xl font-bold">${data.name || "No Name"}</h2>
      <p id="login" class="text-gray-400 mb-3">@${data.login}</p>

      <a
        id="profile"
        target="_blank"
        href="${data.html_url}"
        class="inline-block bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg mb-4"
      >
        View Profile
      </a>

      <div class="flex justify-around text-sm mt-4">
        <div>
          <p class="font-bold" id="repos">${data.public_repos}</p>
          <p class="text-gray-400">Repos</p>
        </div>
        <div>
          <p class="font-bold" id="followers">${data.followers}</p>
          <p class="text-gray-400">Followers</p>
        </div>
        <div>
          <p class="font-bold" id="following">${data.following}</p>
          <p class="text-gray-400">Following</p>
        </div>
      </div>`;
      result.innerHTML = gitUser;

      } catch (err) {
        result.classList.add("hidden");
        error.innerText = error_message;
        error.classList.remove("hidden");
      }
    }

    document.getElementById("username").addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            getUser();
        }
    });