import UrlForm from "./component/UrlForm";
import UrlShortenedResult from "./component/UrlShortenedResult";
import { useState } from "react";
import shortenerUrl from "./service/shortenerUrl.js";
import WarningMessage from "./component/WarningMessage";

function App() {

  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [check, setCheck] = useState(true);

  const regex = /^(ftp|http|https):\/\/[^ "]+$/;

  const checkUrl = (e) => {
    e.preventDefault();
    if (regex.test(url)) {
      setCheck(true);
      shortenUrl(url);
    } else {
      setCheck(false);
    }
  }

  const shortenUrl = (url) => {
    shortenerUrl(url)
    .then(function (response) {
      setShortUrl(response);
      setUrl("");
    });
  }

  return (
    <div>
      <UrlForm checkUrl={checkUrl} url={url} setUrl={setUrl}/>
      {check ? <UrlShortenedResult shortUrl={shortUrl} />
      : <WarningMessage msg={"Invalid URL"} />}
    </div>
  );
}

export default App;
