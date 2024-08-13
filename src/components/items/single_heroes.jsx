const sand = '#F0C877';
const sky = '#A8C8DE';
const mint = '#ABD79D';
const blush = '#EFD3E0';

const SingleHeroes = [
    {
      continent: "America",
      period: "90s",
      name: "Batistuta",
      name_color: 'gray',
      country: 'ARG',
      country_color: sky,
      description: "Known for his legendary shooting abilities and wonderful long-range goals. He is a hero for Fiorentina, staying with them for almost 10 seasons, even during relegation, which he helped them bounce back to top flight on the first try.",
      image: "img/gallery/heroesfutbol/batistuta.png",
    },
    {
      continent: "America",
      period: "70s",
      name: "Pele",
      name_color: 'gray',
      country: 'BRZ',
      country_color: sky,
      description: "Winner of 3 World Cups, and all-time leading scorer for Santos and Brazil's national team. Pelé started his career at age 15 and the national team at 16. His total of 1279 goals in 1363 games, including friendlies, is a world record.",
      image: "img/gallery/heroesfutbol/pele.png",
    },
    {
      continent: "Europe",
      period: "70s",
      name: "Franz Beckenbauer",
      name_color: 'gray',
      country: 'GER',
      country_color: mint,
      description: "Known as 'Der Kaiser' ('The Emperor') because of his dominance, and leadership on the field. Credited with inventing the role of the modern sweeper. One of only three men to have won the World Cup as a player and manager.",
      image: "img/gallery/heroesfutbol/beckanbauer.png",
    },
    {
      continent: "Europe",
      period: "2000s",
      name: "David Beckham",
      name_color: 'gray',
      country: 'ENG',
      country_color: sky,
      description: "Famous for his free kicks and long shots. Over his 20-year career, Beckham won over 19 top-flight trophies. He became a legendary icon for LA Galaxy and won league titles in four different countries.",
      image: "img/gallery/heroesfutbol/beckham.png",
    },
    {
      continent: "Europe",
      period: "60s",
      name: "George Best",
      name_color: 'gray',
      country: 'NIR',
      country_color: blush,
      description: "A highly skillful dribbler, Best is regarded as one of the best wingers of all time. The Irish Football Association describes him as 'the greatest player to ever pull on the green shirt of Northern Ireland.' The 'Belfast Boy' is one of the most beloved Manchester United legends.",
      image: "img/gallery/heroesfutbol/best.png",
    },
    {
      continent: "Oceania",
      period: "2000s",
      name: "Tim Cahill",
      name_color: 'gray',
      country: 'AUS',
      country_color: mint,
      description: "Australia's all-time leading goalscorer, known for his aggressive and powerful approach in the penalty area. Famous for his goal celebration of shadowboxing around the corner flag.",
      image: "img/gallery/heroesfutbol/cahill.png",
    },
    {
      continent: "America",
      period: "90s",
      name: "Carlos Valderrama",
      name_color: 'gray',
      country: 'COL',
      country_color: sand,
      description: "'El Pibe' is regarded as one of the best Colombian footballers of all time. His precise passing and technical skills made him one of South America's most recognizable footballers in the late 1980s and early 1990s.",
      image: "img/gallery/heroesfutbol/carlos.png",
    },
    {
      continent: "Europe",
      period: "70s",
      name: "Johan Cruyff",
      name_color: 'gray',
      country: 'NED',
      country_color: sand,
      description: "A Dutch playmaker widely regarded as one of the greatest of all time, Cruyff won the Ballon d'Or three times. A proponent of the 'Total Football' philosophy, he laid the foundations for modern success in youth training at Ajax and Barcelona.",
      image: "img/gallery/heroesfutbol/cruyff.png",
    },
    {
      continent: "Africa",
      period: "2000s",
      name: "Didier Drogba",
      name_color: 'gray',
      country: 'CIV',
      country_color: blush,
      description: "Known for his raw power and outstanding intelligence, Drogba was an accomplished striker on four continents. He led Ivory Coast in three World Cups and scored their nation's first goal on the big stage.",
      image: "img/gallery/heroesfutbol/drogba.png",
    },
    {
      continent: "Africa",
      period: "2000s",
      name: "Samuel Eto'o",
      name_color: 'gray',
      country: 'CMR',
      country_color: mint,
      description: "One of the greatest African players of all time, Eto'o won the African Player of the Year award four times. He is the all-time leading goalscorer for Cameroon and a gold medalist at the Olympics.",
      image: "img/gallery/heroesfutbol/etoo.png",
    },
    {
      continent: "Europe",
      period: "90s",
      name: "Luis Figo",
      name_color: 'gray',
      country: 'POR',
      country_color: blush,
      description: "Regarded as one of the best players of his generation, Figo was highly creative as a winger and midfielder. He won the Ballon d'Or in 2000 and FIFA World Player of the Year in 2001.",
      image: "img/gallery/heroesfutbol/figo.png",
    },
    {
      continent: "Europe",
      period: "90s",
      name: "Gheorghe Hagi",
      name_color: 'gray',
      country: 'ROM',
      country_color: sand,
      description: "One of the greatest number 10s of his generation during the 80s and 90s. Hagi was known as 'The Commander' at Galatasaray and 'The King' to Romanians, renowned for his dribbling technique and creative play.",
      image: "img/gallery/heroesfutbol/hagi.png",
    },
    {
      continent: "Europe",
      period: "2000s",
      name: "Andres Iniesta",
      name_color: 'gray',
      country: 'ESP',
      country_color: blush,
      description: "Widely considered one of the best players of his generation and one of the greatest midfielders of all time. Iniesta won a World Cup and two UEFA European Championships with Spain.",
      image: "img/gallery/heroesfutbol/iniesta.png",
    },
    {
      continent: "Europe",
      period: "50s",
      name: "Lily Parr",
      name_color: 'gray',
      country: 'ENG',
      country_color: sky,
      description: "Over her 30-year career from 1919 to 1959, Parr scored over 900 goals. During a period when women were banned from competitive football, she and her team played exhibition games against men. Her strength and speed were legendary.",
      image: "img/gallery/heroesfutbol/lilyparr.png",
    },
    {
      continent: "America",
      period: "80s",
      name: "Maradona",
      name_color: 'gray',
      country: 'ARG',
      country_color: sky,
      description: "One of the greatest footballers of all time, 'El Pibe de Oro' led Argentina to victory in the 1986 World Cup. Maradona's 'Hand of God' and 'Goal of the Century' are unforgettable moments in football history.",
      image: "img/gallery/heroesfutbol/maradona.png",
    },
    {
      continent: "America",
      period: "2000s",
      name: "Marta Da Silva",
      name_color: 'gray',
      country: 'BRA',
      country_color: mint,
      description: "Brazilian superstar and the first person to score in 5 World Cups. Marta has been named World Player of the Year six times and holds the record for most goals scored in FIFA World Cup tournaments.",
      image: "img/gallery/heroesfutbol/marta.png",
    },
    {
      continent: "Asia",
      period: "2000s",
      name: "Nakamura",
      name_color: 'gray',
      country: 'JPN',
      country_color: mint,
      description: "A Japanese attacker known for his bending shots, vision, and free-kick abilities. Nakamura is a Celtic legend for his big-game goals, especially a 30-yard free-kick against Manchester United.",
      image: "img/gallery/heroesfutbol/nakamura.png",
    },
    {
      continent: "Europe",
      period: "80s",
      name: "Michel Platini",
      name_color: 'gray',
      country: 'FRA',
      country_color: sky,
      description: "A prolific goalscorer despite being a midfielder, Platini was known for his technique, vision, and accuracy. He led France to their first major international title at Euro 1984, where he was named top scorer and best player.",
      image: "img/gallery/heroesfutbol/platini.png",
    },
    {
      continent: "Europe",
      period: "50s",
      name: "Ferenc Puskas",
      name_color: 'gray',
      country: 'HUN',
      country_color: blush,
      description: "A star of the 1950s, Puskás was renowned for his powerful left-footed shots and scoring ability. He led Hungary's 'Golden Team' to the World Cup final in 1954 and won three European Cups with Real Madrid.",
      image: "img/gallery/heroesfutbol/puskas.png",
    },
    {
          continent: "Europe",
          period: "2000s",
          name: "Zlatan Ibrahimovic",
          name_color: "gray",
          country: "SWE",
          country_color: sand,
          description: "Lethal striker with precise technical skill to execute his creative acrobatics. All-time leading goalscorer for Sweden and named Swedish player of the year 11 times. He even won an award for a bicycle kick goal against England.",
          image: "img/gallery/heroesfutbol/zlatan.png",
        },
        {
          continent: "Asia",
          period: "90s",
          name: "Sun Wen",
          name_color: "gray",
          country: "CHN",
          country_color: blush,
          description: "Strong striker, great skills and passing abilities. She participated in 4 World Cups, won 4 Asian Games (1991, 1993, 1995, 1997), silver in the Olympics (1996), and golden ball and golden boot in the 1999 World Cup.",
          image: "img/gallery/heroesfutbol/sunwen.png",
        },
        {
          continent: "America",
          period: "2000s",
          name: "Ronaldinho",
          name_color: "gray",
          country: "BRA",
          country_color: mint,
          description: "Completely magical, born with supernatural ability to do things that nobody else could. He barely attended practice according to teammates, his talent was enough. Why bother with boring stuff when football is meant to be fun?",
          image: "img/gallery/heroesfutbol/ronaldinho.png",
        },
        {
          continent: "Asia",
          period: "2010s",
          name: "Homare Sawa",
          name_color: "gray",
          country: "JPN",
          country_color: sky,
          description: "'The Strategist' captain of the Japanese team. Known for her tactical ingenuity, she often revealed the opponent's weaknesses during gameplay, every game was a chess game for Homare. Japan won the World Cup in 2011.",
          image: "img/gallery/heroesfutbol/sawa.png",
        },
        {
          continent: "America",
          period: "2010s",
          name: "Christine Sinclair",
          name_color: "gray",
          country: "CAN",
          country_color: blush,
          description: "Football legend and Canada's greatest soccer player of all time. Playmaker, tactician, striker, free-kick specialist. Player with world-class skills and world-class presence. Her will was strong enough to change the course of any game.",
          image: "img/gallery/heroesfutbol/sinclair.png",
        },
        {
          continent: "America",
          period: "70s",
          name: "Hugo Sotil",
          name_color: "gray",
          country: "PER",
          country_color: blush,
          description: "Nicknamed 'El Cholo', he played as a striker or midfielder, known for his dribbling and goal-scoring instinct, was a centerpiece during the golden period of Peruvian football in the 70s.",
          image: "img/gallery/heroesfutbol/sotil.png",
        },
        {
          continent: "Asia",
          period: "2000s",
          name: "Younis Mahmoud",
          name_color: "gray",
          country: "IRQ",
          country_color: blush,
          description: "Icon of Asian football, one of Iraq's greatest ever players. Only player in history to score in 4 different (and consecutive) AFC Asian cups. In 2007, he became the only Iraqi player ever to be nominated for the Ballon d'Or.",
          image: "img/gallery/heroesfutbol/younis.png",
        },
        {
          continent: "Europe",
          period: "90s",
          name: "Zinedine Zidane",
          name_color: "gray",
          country: "FRA",
          country_color: sky,
          description: "'Zizou' an elite playmaker renowned for his elegance, vision, passing, ball control, and technique. In 1998, he became a national hero after winning the World Cup, even receiving the Légion d'honneur, the highest French order of merit.",
          image: "img/gallery/heroesfutbol/zidane.png",
        },
        {
          continent: "America",
          period: "90s",
          name: "Michelle Akers",
          name_color: "gray",
          country: "USA",
          country_color: sky,
          description: "Midfielder and striker, regarded as one of the best players of the past century. Gold medal winner in the Olympics, 2-time winner of the World Cup, with 105 goals in 153 games for the USA. A deadly striker and brains on the field.",
          image: "img/gallery/heroesfutbol/akers.png",
        },
        {
          continent: "Europe",
          period: "2000s",
          name: "Francesco Totti",
          name_color: "gray",
          country: "ITA",
          country_color: blush,
          description: "l'Ottavo Re di Roma (The Eighth King of Rome), attacking midfielder. AC Roma's greatest player. Key player for Italy 2006 World Cup win, playing all games with metal plates and screws in his ankle following his  miraculous injury recovery.",
          image: "img/gallery/heroesfutbol/totti.png",
        },
        {
            continent: "Europe",
            period: "2000s",
            name: "Birgit Prinz",
            name_color: "gray",
            country: "GER",
            country_color: mint,
            description: "German wonder player and deadly finisher in the late 90s, fast and strong shots made her a prolific goalscorer and a big game player. Two-time FIFA World Cup champion and three-time World Player of the Year.",
            image: "img/gallery/heroesfutbol/prinz.png",
          },
    //   {
    //     continent: "Europe",
    //     period: "70s",
    //     name: "George Best",
    //     name_color: "gray",
    //     country: "NIR",
    //     country_color: mint,
    //     description: "Highly skillful dribbler, known as one of the best wingers of all time. The Irish Football Association describes him as 'the greatest player to ever pull on the green shirt of Northern Ireland'. The 'Belfast Boy' is one of the most beloved Manchester United legends.",
    //     image: "img/gallery/heroesfutbol/best.png",
    //   }     
    // {
    //   continent: "Europe",
    //   period: "2000s",
    //   name: "Cristiano Ronaldo",
    //   name_color: 'gray',
    //   country: 'POR',
    //   country_color: sky,
    //   description: "One of the greatest footballers in history, Ronaldo has won five Ballon d'Or awards. Known for his incredible athleticism, goal-scoring prowess, and ability to perform under pressure. He holds the record for most goals scored in the UEFA Champions League.",
    //   image: "img/gallery/heroesfutbol/ronaldo.png",
    // },
    // {
    //   continent: "America",
    //   period: "90s",
    //   name: "Romario",
    //   name_color: 'gray',
    //   country: 'BRA',
    //   country_color: blush,
    //   description: "A clinical and opportunistic striker, Romário was renowned for his finishing ability. He led Brazil to victory in the 1994 World Cup, scoring five goals and winning the FIFA World Player of the Year award in 1994.",
    //   image: "img/gallery/heroesfutbol/romario.png",
    // },
    // {
    //   continent: "Europe",
    //   period: "80s",
    //   name: "Rummenigge",
    //   name_color: 'gray',
    //   country: 'GER',
    //   country_color: sand,
    //   description: "A two-time Ballon d'Or winner, Rummenigge was known for his explosive pace, strength, and goal-scoring ability. He led Bayern Munich to multiple Bundesliga titles and won two UEFA European Championships with Germany.",
    //   image: "img/gallery/heroesfutbol/rummenigge.png",
    // },
    // {
    //   continent: "Asia",
    //   period: "2000s",
    //   name: "Al-Dosari",
    //   name_color: 'gray',
    //   country: 'KSA',
    //   country_color: mint,
    //   description: "A talismanic player for the Saudi national team, Al-Dosari scored the famous winning goal against Argentina in the 2022 FIFA World Cup. He is known for his dribbling, playmaking skills, and leadership on the field.",
    //   image: "img/gallery/heroesfutbol/aldosari.png",
    // },
    // {
    //   continent: "Europe",
    //   period: "60s",
    //   name: "Lev Yashin",
    //   name_color: 'gray',
    //   country: 'RUS',
    //   country_color: sky,
    //   description: "Nicknamed 'The Black Spider,' Yashin is widely regarded as the greatest goalkeeper of all time. He is the only goalkeeper to have won the Ballon d'Or, in 1963, and is known for his reflexes, shot-stopping, and commanding presence.",
    //   image: "img/gallery/heroesfutbol/yashin.png",
    // }
  ];
  

export default SingleHeroes;