import React from "react";

function FifaFilter() {
  return (
    <>
      <h3 className="title">Filter Mechanism Redesign</h3>
      <p className="description">
        As part of a side project, I undertook a complete redesign of the filtering
        mechanism of the marketplace for collect.fifa.com to enhance user experience. My
        focus was on creating a more intuitive, responsive interface while ensuring that
        users can easily navigate and refine their results based on multiple criteria.
      </p>
      <p className="title">Issues I have faced</p>
      <ul>
        <li className="pb-1">
          <strong>Rarity filter:</strong> It is impossible for first time users to know
          what is consider <em>rare</em>, because of the amount of rarity tags.
        </li>
        <li className="pb-1">
          <strong>Drop filter:</strong> Drops will continue to grow with time, making it
          cumbersome to search and find a specific moment.
        </li>
        <li className="pb-1">
          <strong>Drops are hard to filter by:</strong> Users won't remember what items
          belong to what drops.
        </li>
        <li className="pb-1">
          <strong>Scope:</strong> New users cannot tell what the website is about:
          moments, RightToBuys, posters, physical claims?
        </li>
      </ul>

      <div className="innerGrid" style={{ width: "100%" }}>
        <p className="title">Starting Point</p>
        <video
          src="img/year/2024/fifafilter_0.mp4"
          controls
          className="video-player-full mb-5"
        ></video>

        <p className="title">1) Define users needs</p>
        <p className="description">
          I have define this user nedds based on my experience, deep knowledge of futbol
          federations, clubs, and FIFA to make some inform guesses about the user pain
          points. In addition, I have been a user of this platform for two years, spent a
          good amount of money, hold a VIP membership and even onboarded some friends. You
          can say this user needs came from a power user.
        </p>
        <ul>
          <li className="pb-1 pt-3">
            ❌ <strong>Clarity on what the marketplace sells:</strong>
            On a quick glance I should be able to know what the marketplace is about.
          </li>
          <li className="pb-1">
            ❌ <strong>Discover specific items:</strong> Find a specific item directly
            from the filter menu, without guessing if it exists.
          </li>
          <li className="pb-1">
            ❌ <strong>Find categories faster:</strong> Drop names are unknown to new
            users, they are also hard to recall in the future.
          </li>
          <li className="pb-1">
            ❌ <strong>Help to complete challenges:</strong> Challenges drive a lot of
            traffic to the marketplace, yet specific filters are non-existing.
          </li>
        </ul>

        <p className="title">2) Workflow & wireframing</p>
        <div className="labels">2.1) clarity of marketplace offerings</div>
        <p className="description">
          FIFA and Futbol is a global topic that attracts the most diverse users from
          different knowledge bases, not just collectible aficionados or crypto
          enthusiasts, we need inclusive language as well as clear messaging of what this
          website has to offer.
          <br />
          <br />
          This can be improve with some rewording, we can start by renaming the Drops to
          Moments - which is the priority of the marketplace IMO - any other collectible
          that doesn't belong in the Moments section should be under Other Collectibles.
          Users will start to understand that this is a marketplace for collectibles and
          the main priority are the video moments.
          <br />
          <br />
          Another improvement is to move away from the wording of Drops in the filter
          mechanism, instead use the word Teams or Tournaments which allows users to
          quickly think of which teams/tournaments they want to look a moment for. Any
          other moment that doesn't not fall into a team (physical claims, rewards, etc)
          should be outside of moments and into its corresponding category under Other
          Collectibles.
          <br />
          <br />
          Lastly, lets relocate the Only Right To Buy toggle to the bottom under other
          collectibles category, does the same thing, but is now in context of importance
          within the marketplace.
        </p>
        <img className="halfwidth" src="img/year/2024/fifafilter_1.png" alt="" />
        <p className="description">
          Now new and old users can tell quickly what the marketplace is about and all the
          different type of collectibles they can find.
        </p>
        <ul>
          <li className="pb-1 pt-3">
            ✅ <strong>Clarity on what the marketplace sells:</strong>
            On a quick glance I should be able to know what the marketplace is about.
          </li>
          <li className="pb-1">
            ❌ <strong>Discover specific items:</strong> Find a specific item directly
            from the filter menu, without guessing if it exists.
          </li>
          <li className="pb-1">
            ❌ <strong>Find categories faster:</strong> Drop names are unknown to new
            users, they are also hard to recall in the future.
          </li>
          <li className="pb-1">
            ❌ <strong>Help to complete challenges:</strong> Challenges drive a lot of
            traffic to the marketplace, yet specific filters are non-existing.
          </li>
        </ul>

        <div className="labels pt-4">2.2) Discover specific items</div>
        <p className="description">
          The challenge here is that FIFA governs all type of teams under the organize
          futbol umbrella, which means that you can get club teams, country teams, U-17,
          U-19, U-20, futsbal teams, 7vs7 teams, Women teams, co-ed teams, teams with
          people with disabilites, etc. To make things more complicated, teams can play in
          multiple tournaments sometime overlaping geographic regions. To improve this we
          need to create a smart nesting categories based on high-to-low order.
          <br />
          <br />
          Tournaments can be a high-order category, nested inside Tournaments are
          types-of-tournaments, and nested inside type-of-tournaments we find
          Year-specific Tournaments. Similar with Teams, inside Teams we find
          type-of-teams (club or country), and inside there would be the single teams.thus
          allowing users to quickly select if they want to seach by tournament or teams.
        </p>
        <img className="fullwidth" src="img/year/2024/fifafilter_2.png" alt="" />
        <p className="description">
          With this change, all tournaments and teams become accessible,{" "}
          <strong>
            allowing new users to quickly catchup on what is available in the market.
          </strong>
        </p>
        <ul>
          <li className="pb-1 pt-3">
            ✅ <strong>Clarity on what the marketplace sells:</strong>
            On a quick glance I should be able to know what the marketplace is about.
          </li>
          <li className="pb-1">
            ✅ <strong>Discover specific items:</strong> Find a specific item directly
            from the filter menu, without guessing if it exists.
          </li>
          <li className="pb-1">
            ❌ <strong>Find categories faster:</strong> Drop names are unknown to new
            users, they are also hard to recall in the future.
          </li>
          <li className="pb-1">
            ❌ <strong>Help to complete challenges:</strong> Challenges drive a lot of
            traffic to the marketplace, yet specific filters are non-existing.
          </li>
        </ul>

        <div className="labels pt-4">2.3) Find categories faster</div>
        <p className="description">
          The goal here is to hide all filters that are not consider high-traffic, the
          less options the user will see at a glance the faster it can find what is
          looking for, and in turn improve the experience. First lets look at the Rarity
          filter category, the grant majority of items are
          <em> Common, Uncommon, Rare, Epic, Iconic</em> so it makes sense to display only
          those and hide anything else.
          <br />
          <br />
          Now lets look at the Other Collectibles category, icons make it more intuitive
          and faster to understand what these subcategories are, so lets add some icons
          under this category.
          <br />
          <br />
          The main categories can grow and be very long - longer than the screen size - so
          lets make all the main categories collapsable, this will improve the mobile
          experience to avoid unnecessary scrolling.
        </p>
        <img className="halfwidth" src="img/year/2024/fifafilter_3.png" alt="" />
        <p className="description">
          Now that we have collapsable categories we can have a default state that is more
          cleaner and simple for first time users - hiding Price Range and Other
          Collectibles - only showcasing the Rarity and Moments filters. We can also keep
          track of user preferences so the app would remember which fitlers they had
          collapsable and which were open. Yeay for great user experience!
        </p>
        <img className="halfwidth" src="img/year/2024/fifafilter_4.png" alt="" />
        <p className="description">
          When the user arrives all the way to our lower-level filter (single teams,
          single tournaments, unique categories), we can use the logos or emblems to help
          users search faster, since they can visually scan the page for their prefer
          logo.
        </p>
        <img className="fullwidth" src="img/year/2024/fifafilter_5.png" alt="" />
        <ul>
          <li className="pb-1 pt-3">
            ✅ <strong>Clarity on what the marketplace sells:</strong>
            On a quick glance I should be able to know what the marketplace is about.
          </li>
          <li className="pb-1">
            ✅ <strong>Discover specific items:</strong> Find a specific item directly
            from the filter menu, without guessing if it exists.
          </li>
          <li className="pb-1">
            ✅ <strong>Find categories faster:</strong> Drop names are unknown to new
            users, they are also hard to recall in the future.
          </li>
          <li className="pb-1">
            ❌ <strong>Help to complete challenges:</strong> Challenges drive a lot of
            traffic to the marketplace, yet specific filters are non-existing.
          </li>
        </ul>
        <div className="labels pt-4">2.3) Help to complete challenges</div>
        <p className="description">
          FIFA collect has a gamify concept called Challenges, which sometimes come with
          rewards like Right-To-Buy tickets and other limited edition items, to complete
          Challenges the majority of users rely on the marketplace to buy their missing
          pieces. To help users complete the challenges we can create custom filters for
          each challenge, and access the user progress for each challenge to know which
          challenge the user is close to completing, and which has been completed.
        </p>
        <img className="halfwidth" src="img/year/2024/fifafilter_6.png" alt="" />
        <p className="description">
          It might seem odd to add this filter mechanism here, but challenges can be very
          competitive during a short period of time, and currently is very cumbersome and
          time consuming to look for moments. This new filter mechanism would generate
          faster transactions -from a UX point of view-, which in turn will generate more
          revenue on secondary sales for FIFA Collect.
        </p>
        <ul>
          <li className="pb-1 pt-3">
            ✅ <strong>Clarity on what the marketplace sells:</strong>
            On a quick glance I should be able to know what the marketplace is about.
          </li>
          <li className="pb-1">
            ✅ <strong>Discover specific items:</strong> Find a specific item directly
            from the filter menu, without guessing if it exists.
          </li>
          <li className="pb-1">
            ✅ <strong>Find categories faster:</strong> Drop names are unknown to new
            users, they are also hard to recall in the future.
          </li>
          <li className="pb-1">
            ✅ <strong>Help to complete challenges:</strong> Challenges drive a lot of
            traffic to the marketplace, yet specific filters are non-existing.
          </li>
        </ul>
        <p className="title">3) UI Prototype Design</p>
        <p className="description">
          I use the same style, colors and typography treatment that is currently existing
          in the website, since this project was focus on the UX rather than the UI
          redesign.
        </p>

        <img className="qtwidth" src="img/year/2024/fifafilter_7.png" alt="" />
        <p className="caption mb-5">Final filter menu (collapsed)</p>

        <img className="fullwidth mt-5" src="img/year/2024/fifafilter_8.png" alt="" />
        <p className="caption">Filter moments by tournaments</p>

        <img className="fullwidth mt-5" src="img/year/2024/fifafilter_9.png" alt="" />
        <p className="caption">Filter moments by teams</p>

        <img className="halfwidth mt-5" src="img/year/2024/fifafilter_10.png" alt="" />
        <p className="caption">Filter moments by challenge requirements</p>

        <img className="halfwidth mt-5" src="img/year/2024/fifafilter_11.png" alt="" />
        <p className="caption">Filter by other items</p>

        <p className="title mt-5">Key Improvements</p>
        <p className="description">
          This project focused on a comprehensive UX redesign tailored specifically for
          collectors, enhancing both usability and functionality. The key improvements
          revolved around a collector-centric focus, ensuring the interface meets the
          unique needs of enthusiasts in this space. By introducing higher customization,
          users now have greater control over how they view and seek their collections,
          creating a more personalized experience by filtering by user-known categories.{" "}
          <br /> <br />
          The redesign also improved category recognition using icons and logos,
          simplifying the way users identify and navigate through their collections, which
          boosts accessibility and overall engagement. Additionally, the entire experience
          has been streamlined with a cleaner, more intuitive interface that reduces
          complexity, making it easier for both newcomers and experienced users to
          interact with the platform. With these improvements, the platform is positioned
          for massive growth, offering a scalable architecture that can accommodate an
          expanding user base without sacrificing performance or user satisfaction. This
          redesign ensures the platform will evolve along with the growing demands of the
          collector community and business goals.
        </p>

        <div className="endofmodal"></div>
      </div>
    </>
  );
}

export default FifaFilter;
