const tweetForm = document.querySelector("#tweetForm");
const tweetsContainer = document.querySelector("#tweets");

tweetForm.addEventListener("submit", function (e) {
  e.preventDefault();
  //console.log(this.elements);
  const userNameInput = this.elements.username;
  const tweetInput = this.elements.tweet;

  if (userNameInput.value.length > 6 || userNameInput.value.length < 2) {
    alert("username length needs to be more than 2 or less than 6");
    return;
  }

  const email = document.querySelector("#email");
  const atPosition = email.value.indexOf("@");
  const dotPosition = email.value.lastIndexOf(".");

  if (
    atPosition < 1 ||
    dotPosition < atPosition + 2 ||
    dotPosition + 2 >= email.length
  ) {
    alert(
      "Please enter a valid e-mail address \n atpostion:" +
        atPosition +
        "\n dotposition:" +
        dotPosition
    );
    return false;
  }

  //add this tweet to the UL
  addTweets(userNameInput.value, tweetInput.value);
  userNameInput.value = "";
  tweetInput.value = "";
  // console.log(userNameInput.value);
});

const addTweets = (userName, tweet) => {
  const newTweet = document.createElement("li");
  const bTag = document.createElement("b");
  bTag.append(userName);
  newTweet.append(bTag);
  newTweet.append(`- ${tweet}`);

  tweetsContainer.append(newTweet);
};
