const tabsContainer = document.getElementById("tabs");
const postsContainer = document.getElementById("posts");

const getUsers = async () => {
  try {
    const request = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await request.json();
    let htmlContent = "";
    console.log("this is the users : ", users);
    users.forEach((user) => {
      htmlContent += `
  <li class="nav-item" role="presentation">
    <button 
        class="nav-link" 
        id="home-tab" 
        data-bs-toggle="tab" 
        data-bs-target="#home-tab-pane" 
        type="button" 
        role="tab" 
        aria-controls="home-tab-pane" 
        aria-selected="true"
        onclick="getUsersPosts(${user.id})"
        >${user.name}</button>
  </li>

        `;
    });
    tabsContainer.innerHTML = ` <ul class="nav nav-tabs d-flex justify-content-between" id="myTab" role="tablist">${htmlContent}</ul>`;
  } catch (e) {
    console.log("this is the error : ", e);
  }
};

getUsers();

const getUsersPosts = async (id) => {
  try {
    const request = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${id}`
    );
    const posts = await request.json();
    let htmlContent = "";
    posts.forEach((post, index) => {
      htmlContent += `
  <div class="accordion-item">
    <h2 class="accordion-header" id="heading${index}">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="false" aria-controls="collapse${index}">
        ${post.title}
      </button>
    </h2>
    <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}" data-bs-parent="#posts">
      <div class="accordion-body">
      <strong> ${post.body}</strong>
      </div>
    </div>
  </div>`;
    });
    postsContainer.innerHTML = `<ul class="list-group">${htmlContent}</ul`;
  } catch (e) {
    console.log("this is the error : ", e);
  }
};

(() => {
  getUsers();
  getUsersPosts(1);
})();
