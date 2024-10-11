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
      <p className="title">Issues</p>
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
          <strong>Filter by Drop is not Inclusive:</strong> You only only which items to
          search for the drops your participated in.
        </li>
        <li className="pb-1">
          <strong>Scope:</strong> New users cannot tell what the website is about:
          moments, RightToBuys, posters, physical claims?.
        </li>
        {/* <li className="pb-1">
          <strong>Is this working?:</strong> Mobile users cannot tell if their filter
          selection is working while they are selecting filters.
        </li> */}
      </ul>

      <div className="innerGrid" style={{ width: "100%" }}>
        <p className="title">Starting Point</p>
        <video
          src="img/year/2024/filter_2.mov"
          controls
          className="video-player-full mb-5"
        ></video>
        {/* <video src="img/year/2024/filter_1.mov" controls className="video-player"></video> */}

        <p className="title">1) Define users needs</p>
        <p className="description">
          I have been the user of this platform for two years, spend a good amount of
          money and even onboarded my friends to. In addition, I have quite a deep
          knowledge of futbol federations, clubs, and FIFA to make inform decisions an
          autoprescribing the user needs for this tasks.
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
            traffic to the marketplace, yet specific filters are none existing.
          </li>
        </ul>

        <p className="title">2) Workflow & wireframing</p>
        <div className="labels">2.1) clarity of marketplace offerings</div>
        <p className="description">
          FIFA and Futbol is a global topic that attracts the most diverse users from
          different knowledge bases, not just collectible aficionados or crypto
          enthusiasts, we need inclusive language as well as clear messaging of what this
          website has to offer. This can be improve with some rewording, we can start by
          renaming the Drops to Moments - which is the priority of the marketplace- any
          other collectible that doesn't belong in the moments section should be under
          Other Collectibles. Users will start to understand that this is a collectible
          marketplace and the main priority are the video moments.
          <br />
          <br />
          Another improvement is to move away from the wording of Drops in the filter
          mechanism, instead use the word Teams which allows users to quickly think of
          which teams they want to look a moment for. Any other moment that doesn't not
          fall into a team (physical claims, rewards, etc) should be outside of moments
          and into its corresponding category under Other Collectibles.
          <br />
          <br />
          Lastly, lets relocate the Only Right To Buy toggle to the bottom under other
          collectibles category, does the same thing, but is now in context of importance
          within the marketplace.
        </p>
        <img className="halfwidth" src="img/year/2024/filter_3.png" alt="" />
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
            traffic to the marketplace, yet specific filters are none existing.
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
          Year-specific Tournament would be the lowest order category, nested inside
          tournament types, which are nested under the "tournament" grantparent category.
          Similar with teams, single teams should be the lowest order of categories, folow
          by type of type(club or country) and geographic area of teams, which would be
          nested under the grandparent category "Teams", thus allowing users to quickly
          select if they want to seach by tournament or teams.
        </p>
        <img className="fullwidth" src="img/year/2024/filter_4.png" alt="" />
        <p className="description">
          With this change, all tournaments and teams become accessible, allowing new
          users to quickly catchup on what is available in the market.
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
            traffic to the marketplace, yet specific filters are none existing.
          </li>
        </ul>

        <div className="labels pt-4">2.3) Find categories faster</div>
        <p className="description">
          The goal here is to hide all filters that are not consider high-traffic, the
          less options the user will see at a glance the faster it can find what is
          looking for and in turn improve the experience. First lets look at the Rarity
          filter category, the grant majority of items are
          <em> Common, Uncommon, Rare, Epic, Iconic</em> so it makes sense to display only
          those and hide anything else.
          <br />
          <br />
          Now lets look at the Other Collectibles category, icons make it more intuitve
          and faster to understand what these subcategories are, so lets add some icons
          under this category.
          <br />
          <br />
          The main categories can grow and be very long - longer than the viewport - so
          lets make all the main categories collapsable, this will improve the mobile
          experience to avoid unnecessary scrolling.
        </p>
        <img className="halfwidth" src="img/year/2024/filter_5.png" alt="" />
        <p className="description">
          Now that we have collapsable categories we can have a default state that is more
          inclusive for first time users - hiding price range and other collectibles -
          only showcasing the rarity and moments filters category. We can also keep track
          of user preferences so next time they come back to the app it would remember
          which fitlers they had collapsable and which were open. Yeay for great user
          experience!
        </p>
        <img className="halfwidth" src="img/year/2024/filter_6.png" alt="" />
        <p className="description">
          When we filter all the way to our lower filter, we can use the logos and emblems
          of tournaments, national teams and clubs teams to help users search faster and
          with joy.
        </p>
        <img className="fullwidth" src="img/year/2024/filter_7.png" alt="" />
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
            traffic to the marketplace, yet specific filters are none existing.
          </li>
        </ul>
        <div className="labels pt-4">2.3) Help to complete challenges</div>
        <p className="description">
          FIFA collect has challenges, which sometimes come with rewards like Right To Buy
          tickets and other limited edition prices, one feature of the challenges is that
          most likely to complete them you have to go into the marketplace to buy the
          missing pieces so you can fullfill the challenge. To help users complete the
          challenges we can create custom filters for each challenge but also read the
          users profile to know which challenge the user has completed and which it has
          not.
        </p>
        <img className="halfwidth" src="img/year/2024/filter_8.png" alt="" />
        <p className="description">
          It might seem odd to add this filter mechanism here, but challenges can be very
          competitive during a short period of time, and currently is very cumbersome and
          time consuming to look for moments. This new feature in the filter mechanism
          would generate faster transactions -from a UX point of view-, which in turn will
          generate more revenue on secondary sales for FIFA Collect.
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
            traffic to the marketplace, yet specific filters are none existing.
          </li>
        </ul>
        <p className="title">3) UI Prototype Design</p>
        <p className="description">
          This project is based on the filter mechanism and usability, rather than
          branding and UI modules exploration, therefore we will use the same style,
          colors and typography treatment that is currently existing in the website.
        </p>

        <img className="qtwidth" src="img/year/2024/filter_9.png" alt="" />
        <p className="caption mb-5">Final filter menu (collapsed)</p>

        <img className="fullwidth mt-5" src="img/year/2024/filter_10.png" alt="" />
        <p className="caption">Filter moments by tournaments</p>
      </div>
    </>
  );
}

export default FifaFilter;
