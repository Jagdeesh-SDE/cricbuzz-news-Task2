import CribuzzNews from "./components/CricbuzzNews";

function App() {
  return (
    <div>
      <CribuzzNews
        imgLink="https://static.cricbuzz.com/a/img/v1/420x235/i1/c478666/porel-stubbs-and-ishant-star.jpg"
        title="Porel, Stubbs and Ishant star as DC prevail against LSG"
        content="DC finished their league stage this season with a 19-run win and now
        have to wait for other results to fall their way"
        newsLink="https://www.cricbuzz.com/cricket-news/130434/royals-through-lsg-on-the-ropes"
        linkText="Qualification / Royals through, LSG on the ropesStocks rise for Stubbs
        after another finishing actInterview / As the stars align, Porel shoots
        for the moonGallery"
      />
      <CribuzzNews
        imgLink="https://static.cricbuzz.com/a/img/v1/420x235/i1/c477142/t20-world-cup-no-reserve-day.jpg"
        title="T20 World Cup: No Reserve day for 2nd semifinal; match can be extended by 4 hrs"
        content="As reported by Cricbuzz, India will feature in the second semifinal in Guyana if they qualify for the last-four"
        newsLink="https://www.cricbuzz.com/cricket-news/130431/india-to-play-only-one-warm-up-game-before-t20-world-cup-2024"
        linkText="India to play only one warm-up game before T20 World Cup 2024"
      />
      <CribuzzNews
        imgLink="https://static.cricbuzz.com/a/img/v1/420x235/i1/c477400/rajasthan-royals-seek-hiccup-r.jpg"
        title="Rajasthan Royals seek hiccup recovery in Guwahati"
        content="Top for much of the season, Sanju Samson's side have lost three on the bounce although a playoffs berth is just around the corner"
        newsLink="https://www.cricbuzz.com/cricket-news/130336/why-the-trolls-dont-interest-shashank-singh"
        linkText="Feature / Why the trolls don't interest Shashank Singh"
      />
    </div>
  );
}

export default App;
