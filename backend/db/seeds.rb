# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

spring = {

        "ace" => {
          :name => "Ace of Spring",
          :suite => "hearts",
          :image => "images/1ofspring.png"
        },
      
        "two" => {
          :name => "2 of Spring",
          :suite => "hearts",
          :image => "images/2ofspring.png"
        },

        "three" => {
          :name => "3 of Spring",
          :suite => "hearts",
          :image => "images/3ofspring.png"
        },

        "four" => {
          :name => "4 of Spring",
          :suite => "hearts",
          :image => "images/4ofspring.png"
        },

        "five" => {
          :name => "5 of Spring",
          :suite => "hearts",
          :image => "images/5ofspring.png"
        },

        "six" => {
          :name => "6 of Spring",
          :suite => "hearts",
          :image => "images/6ofspring.png"
        },

        "seven" => {
          :name => "7 of Spring",
          :suite => "hearts",
          :image => "images/7ofspring.png"
        },

        "eight" => {
          :name => "8 of Spring",
          :suite => "hearts",
          :image => "images/8ofspring.png"
        },

        "nine" => {
          :name => "9 of Spring",
          :suite => "hearts",
          :image => "images/9ofspring.png"
        },

        "ten" => {
          :name => "10 of Spring",
          :suite => "hearts",
          :image => "images/10ofspring.png"
        },

        "jack" => {
          :name => "Jack of Spring",
          :suite => "hearts",
          :image => "images/11ofspring.png"
        },

        "queen" => {
          :name => "Queen of Spring",
          :suite => "hearts",
          :image => "images/12ofspring.png"
        },

        "king" => {
          :name => "King of Spring",
          :suite => "hearts",
          :image => "images/13ofspring.png"
        }
      }
      
      spring.each do |name, card_hash|
        c = Card.new
        c.name = name
       card_hash.each do |attribute, value|
          c[attribute] = value
        end
        c.save
      end

      summer = {

        "ace" => {
          :name => "Ace of Summer",
          :suite => "diamonds",
          :image => "images/1ofsummer.jpg"
        },
      
        "two" => {
          :name => "2 of Summer",
          :suite => "diamonds",
          :image => "images/2ofsummer.jpg"
        },

        "three" => {
          :name => "3 of Summer",
          :suite => "diamonds",
          :image => "images/3ofsummer.jpg"
        },

        "four" => {
          :name => "4 of Summer",
          :suite => "diamonds",
          :image => "images/4ofsummer.jpg"
        },

        "five" => {
          :name => "5 of Summer",
          :suite => "diamonds",
          :image => "images/5ofsummer.jpg"
        },

        "six" => {
          :name => "6 of Summer",
          :suite => "diamonds",
          :image => "images/6ofsummer.jpg"
        },

        "seven" => {
          :name => "7 of Summer",
          :suite => "diamonds",
          :image => "images/7ofsummer.jpg"
        },

        "eight" => {
          :name => "8 of Summer",
          :suite => "diamonds",
          :image => "images/8ofsummer.jpg"
        },

        "nine" => {
          :name => "9 of Summer",
          :suite => "diamonds",
          :image => "images/9ofsummer.jpg"
        },

        "ten" => {
          :name => "10 of Summer",
          :suite => "diamonds",
          :image => "images/10ofsummer.jpg"
        },

        "jack" => {
          :name => "Jack of Summer",
          :suite => "diamonds",
          :image => "images/11ofsummer.jpg"
        },

        "queen" => {
          :name => "Queen of Summer",
          :suite => "diamonds",
          :image => "images/12ofsummer.jpg"
        },

        "king" => {
          :name => "King of Summer",
          :suite => "diamonds",
          :image => "images/13ofsummer.jpg"
        }
      }
      
      summer.each do |name, card_hash|
        c = Card.new
        c.name = name
       card_hash.each do |attribute, value|
          c[attribute] = value
        end
        c.save
      end

      chapter_one = {

        "one" => {
          :chapter => 1,
          :name => "Chapter Note",
          :text => "<i>As the facilitator, read this entire book and complete the tasks outlined in this chapter prior to inviting others to join you at the table.</i>",
        },
      
        "two" => {
          :chapter => 1,
          :name => "What This Is",
          :text => "This is a map-drawing game. You collectively explore the struggles of a community, trying to rebuild after the collapse of civilization. It's a game about community, difficult choices, and landscapes. When you play, you make decisions about the community, decisions that get recorded on a map that is constantly evolving. Parts of the map are literal cartography, while other parts are symbolic. Players work together to create and steer this community, but they also play devil's advocate and introduce problems and tensions into the game."
        },

        "three" => {
          :chapter => 1,
          :name => "Supplies",
          :text => "The Quiet Year requires 2-4 players and 2-4 hours.<br><br>
          In addition, it requires:<br><br>
          
          <li>A blank piece of letter-sized paper</li>
          <li>Pencils, erasers, and an index card</li>
          <li>Six dice (smaller is better)</li>
          <li>20 Contempt Tokens (possibly stones or glass beads)</li>
          <li>A deck of The Quiet Year cards</li>
          <li>At least one copy of the summary card</li>
          If you don't have a deck of The Quiet Year cards, instead use a deck of regular cards with The Oracle, available at buriedwithoutceremony.com/thequietyear"       
        },

        "four" => {
          :chapter => 1,
          :name => "Preparing Your Space",
          :text => "Some preparation is required before you are ready to teach The Quiet Year to others. Begin by clearing your table or play space of any unnecessary objects. Aim for a minimal environment.<br><br>

          Separate the deck into the four suits (representing four seasons). Place each in a separate stack. Place the blank piece of paper in the centre of the table - it will become the map of your area. Around it, array the remaining supplies: the pencils, dice, Contempt tokens, summary cards, and index card.<br><br>
          
          Write the following column headings on the long edge of the index card, leaving plenty of space for each: Abundances, Scarcities, and Names."        
        },

        "five" => {
          :chapter => 1,
          :name => "A Fleeting Year",
          :text => "A full-length game of The Quiet Year tends to run 3-4 hours including teaching time. If you'd prefer to play a shorter game, you can do so with this adjustment: before play, remove 4 cards from each of the suits (which represent seasons). Make sure to remove the King of Diamonds (Summer), and make sure to keep the King of Spades (Winter) in the cards you play with."        
        }
      }
      
      chapter_one.each do |name, section_hash|
        r = RulebookPage.new
        r.name = name
       section_hash.each do |attribute, value|
          r[attribute] = value
        end
        r.save
      end

      chapter_two = {

        "one" => {
          :chapter => 2,
          :name => "Chapter Note",
          :text => "<i>As the facilitator, you will read the regular text of this chapter aloud to the group, following the instructions written in italics.</i>"
        },
      
        "two" => {
          :chapter => 2,
          :name => "The Opening Story",
          :text => "<i>Read aloud.</i><br><br>
          For a long time, we were at war with The Jackals. Now, finally, we've driven them off, and we're left with this: a year of relative peace. One quiet year, with which to build our community up and learn again how to work together. Come Winter, the Frost Shepherds will arrive and we might not survive the encounter. This is when the game will end. But we don't know about that yet. What we know is that right now, in this moment, there is an opportunity to build something." 
        },

        "three" => {
          :chapter => 2,
          :name => "Chapter Note",
          :text => "<i>Let's start by familiarizing ourselves with our tools.</i><br><br>

          Point to the blank page. This is our map. Before playing, we'll establish some of the landscape. As we play, we'll update the map to reflect new discoveries, conflicts, and opportunities. Parts of the map will be literal cartography and other parts will be symbolic. We'll try to avoid writing words on it, though common symbols are fine.<br><br>
          
          Throughout the game, we'll all be responsible for drawing on this map. it's fine to draw poorly or crudely, but all of us are going to draw.<br><br>
          
          Point to the dice. These are project dice. When our community starts a project, we'll place one on the map to note how many weeks it will take to finish. Each week, they tick down by one. When a die reaches zero, the project is complete.<br><br>
          
          Point to the Contempt Tokens. These are Contempt Tokens. They represent any tension and frustration that might arise in the community.<br><br>
          
          Point to the summary card. This is a summary card. It'll remind us what to do each week of The Quiet Year, and in what order."
        },

        "four" => {
        :chapter => 2,
        :name => "The Opening Story",
        :text => "♥ Spring<br>
        ♦ Summer<br>
        ♣ Autumn<br>
        ♠ Winter<br>
        <i>Point to the four suits in turn, and explain that they correspond to the four seasons. Taking the stack of spades, show everyone the King of Spades.</i><br><br>
        
        When this card is drawn, the game will be over. It could come at any time during Winter.<br><br>
        
        <i>Shuffle the spades, and place them face-down on the table. Shuffle the clubs, and place them on top. Repeat with diamonds, and finally with hearts. As you shuffle each suit, remind the group of its season.</i>"
        },

        "five" => {
          :chapter => 2,
          :name => "Who We Are",
          :text => "We all have two roles to play in this game. The first is to represent the community at a bird's eye level, and to care about its fate. The second is to dispassionately introduce dilemmas, as scientists conducting an experiment. The Quiet Year asks us to move in and out of these two roles.<br><br>

          We don't embody specific characters nor act out scenes. Instead, we represent currents of thought within the community. When we speak or take action, we might be representing a single person or a great many. If we allow ourselves to care about the fate of these people, The Quiet Year becomes a richer experience and serves as a lens for understanding communities in conflict.<br><br>
          
          We'll also be presented with opportunities to introduce new issues for the community to deal with. This will often happen when we draw cards or use the Discover Something New action. By dispassionately introducing dilemmas, and then returning to our other role as representatives of the community, we create tension and make the community's successes feel real. If there's an issue you struggle with in real life (like whether violence is ever justified), introduce situations that call it into question."
        },

        "six" => {
          :chapter => 2,
          :name => "Sketching Terrain",
          :text => "Before the game begins, we must establish some facts about the community and what its surroundings are like. We begin with a brief discussion (taking two minutes at most) of the general terrain and habitat of the area. This can be as simple as someone saying, 'how about a community in a rocky desert?' and everyone else nodding in agreement. At this point, each of us should introduce one detail about the local terrain. When we introduce our detail, we then sketch our contribution onto the map. These sketches should be rough and simple, leaving lots of blank space for additions during play. The community itself should be fairly large on the map, perhaps occupying a third of the sheet. Unless otherwise stated, assume that our community has 60-80 members.<br><br>

          As an example, a group might decide to set their game in a forest. The first player introduces the detail: 'Alright, the forest is full of young, spindly trees.' The next player adds, 'And it's nestled within a steep mountain range.' The third player adds, we've taken up residence in an old mining camp. The final player says, 'And the trees in this area have all been clearcut.' As details are added, the players draw them on the map.<br><br>
          
          Everyone should introduce a detail and draw it on the map before proceeding."
        },

        "seven" => {
          :chapter => 2,
          :name => "Starting Resources",
          :text => "Next, we each declare an important resource for the community, something which we might have in either abundance or scarcity.<br><br>

          Some examples are:<br><br>
          
          <li>clean drinking water</li>
          <li>a source of energy</li>
          <li>protection from predators</li>
          <li>adequate shelter</li>
          <li>food</li>
          Choosing a resource makes it important, if it wasn't already. If you pick 'gasoline,' it becomes something that your community wants and needs.<br><br>
          
          As a group, we now choose one of those resources to be in Abundance. It gets listed on the index card under Abundances, and whoever called it now draws an abundance of this resource on the map. The other resources get listed as Scarcities, and the players who called them draw their absence or scarcity on the map somehow. Remember that symbols and symbolic representations are fine, but words should be avoided.<br><br>
          
          Have everyone declare a resource and decide which one is in Abundance. Update the map to reflect before proceeding."
        }
      }
      
      chapter_two.each do |name, section_hash|
        r = RulebookPage.new
        r.name = name
       section_hash.each do |attribute, value|
          r[attribute] = value
        end
        r.save
      end