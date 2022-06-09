import { loadingImage } from './images.js'

let psalmsBulk = `
[Psalm 1]
{1:1} Blessed is the man who has not followed the counsel of the impious, and has not remained in the way of sinners, and has not sat in the chair of pestilence.
{1:2} But his will is with the law of the Lord, and he will meditate on his law, day and night.
{1:3} And he will be like a tree that has been planted beside running waters, which will provide its fruit in its time, and its leaf will not fall away, and all things whatsoever that he does will prosper.
{1:4} Not so the impious, not so. For they are like the dust that the wind casts along the face of the earth.
{1:5} Therefore, the impious will not prevail again in judgment, nor sinners in the council of the just.
{1:6} For the Lord knows the way of the just. And the path of the impious will pass away.

[Psalm 2]
{2:1} Why have the Gentiles been seething, and why have the people been pondering nonsense?
{2:2} The kings of the earth have stood up, and the leaders have joined together as one, against the Lord and against his Christ:
{2:3} “Let us shatter their chains and cast their yoke away from us.”
{2:4} He who dwells in heaven will ridicule them, and the Lord will mock them.
{2:5} Then will he speak to them in his anger and trouble them with his fury.
{2:6} Yet I have been appointed king by him over Zion, his holy mountain, preaching his precepts.
{2:7} The Lord has said to me: You are my son, this day have I begotten you.
{2:8} Ask of me and I will give to you: the Gentiles for your inheritance, and the ends of the earth for your possession.
{2:9} You will rule them with an iron rod, and you will shatter them like a potter’s vessel.
{2:10} And now, O kings, understand. Receive instruction, you who judge the earth.
{2:11} Serve the Lord in fear, and exult in him with trembling.
{2:12} Embrace discipline, lest at any time the Lord might become angry, and you would perish from the way of the just.
{2:13} Though his wrath can flare up in a short time, blessed are all those who trust in him.

[Psalm 3]
{3:1} A Psalm of David. When he fled from the face of his son, Absalom.
{3:2} Lord, why have those who trouble me been multiplied? Many rise up against me.
{3:3} Many say to my soul, “There is no salvation for him in his God.”
{3:4} But you, Lord, are my supporter, my glory, and the one who raises up my head.
{3:5} I have cried out to the Lord with my voice, and he has heard me from his holy mountain.
{3:6} I have slept, and I have been stupefied. But I awakened because the Lord has taken me up.
{3:7} I will not fear the thousands of people surrounding me. Rise up, Lord. Save me, my God.
{3:8} For you have struck all those who oppose me without cause. You have broken the teeth of sinners.
{3:9} Salvation is of the Lord, and your blessing is upon your people.

[Psalm 4]
{4:1} In parts according to verses. A Psalm of David.
{4:2} When I called upon him, the God of my justice heeded me. In tribulation, you have enlarged me. Have mercy on me, and heed my prayer.
{4:3} Sons of men, how long will you be dull in heart, so that whatever you love is in vain, and whatever you seek is false?
{4:4} And know this: the Lord has made wondrous his holy one. The Lord will heed me when I cry out to him.
{4:5} Be angry, and do not be willing to sin. The things that you say in your hearts: be sorry for them on your beds.
{4:6} Offer the sacrifice of justice, and hope in the Lord. Many say, “Who reveals to us what is good?”
{4:7} The light of your countenance, Lord, has been sealed upon us. You have given joy to my heart.
{4:8} By the fruit of their grain, wine, and oil, they have been multiplied.
{4:9} In peace itself, I will sleep and I will rest.
{4:10} For you, O Lord, have established me singularly in hope.

[Psalm 5]
{5:1} Unto the end. For her who pursues the inheritance. A Psalm of David.
{5:2} O Lord, listen closely to my words. Understand my outcry.
{5:3} Attend to the voice of my prayer, my King and my God.
{5:4} For to you, I will pray. In the morning, Lord, you will hear my voice.
{5:5} In the morning, I will stand before you, and I will see. For you are not a God who wills iniquity.
{5:6} And the malicious will not dwell close to you, nor will the unjust endure before your eyes.
{5:7} You hate all who work iniquity. You will destroy all who speak a lie. The bloody and deceitful man, the Lord will abominate.
{5:8} But I am in the multitude of your mercy. I will enter your house. I will show adoration toward your holy temple, in your fear.
{5:9} Lord, lead me in your justice. Because of my enemies, direct my way in your sight.
{5:10} For there is no truth in their mouth: their heart is vain.
{5:11} Their throat is an open sepulcher. They have acted deceitfully with their tongues. Judge them, O God. Let them fall by their own intentions: according to the multitude of their impiety, expel them. For they have provoked you, O Lord.
{5:12} But let all those who hope in you rejoice. They will exult in eternity, and you will dwell in them. And all those who love your name will glory in you.
{5:13} For you will bless the just. You have crowned us, O Lord, as if with a shield of your good will.

[Psalm 6]
{6:1} In parts according to verses. A Psalm of David. For the octave.
{6:2} O Lord, do not rebuke me in your fury, nor chastise me in your anger.
{6:3} Have mercy on me, Lord, for I am weak. Heal me, Lord, for my bones have become disturbed,
{6:4} and my soul has been very troubled. But as for you, Lord, when?
{6:5} Turn to me, Lord, and rescue my soul. Save me because of your mercy.
{6:6} For there is no one in death who would be mindful of you. And who will confess to you in Hell?
{6:7} I have labored in my groaning. Every night, with my tears, I will wash my bed and drench my blanket.
{6:8} My eye has been troubled by rage. I have grown old among all my enemies.
{6:9} Scatter before me, all you who work iniquity, for the Lord has heard the voice of my weeping.
{6:10} The Lord has heard my supplication. The Lord has accepted my prayer.
{6:11} Let all my enemies be ashamed and together be greatly troubled. May they be converted and become ashamed very quickly.

[Psalm 7]
{7:1} A Psalm of David, which he sang to the Lord because of the words of Cush, the son of Jemini.
{7:2} O Lord, my God, in you I have hoped. Save me from all those who persecute me, and free me:
{7:3} lest at any time, like a lion, he might seize my soul, while there is no one to redeem me, nor any who can save.
{7:4} O Lord, my God, if there is iniquity in my hands, if I have done this:
{7:5} if I have repaid those who rendered evils to me, may I deservedly fall away empty before my enemies:
{7:6} let the enemy pursue my soul, and take hold of it, and trample my life into the earth, and drag down my glory into the dust.
{7:7} Rise up, Lord, in your anger. And be exalted to the borders of my enemies. And rise up, O Lord my God, according to the precept that you commanded,
{7:8} and a congregation of people will surround you. And, because of this, return on high.
{7:9} The Lord judges the people. Judge me, O Lord, according to my justice and according to my innocence within me.
{7:10} The wickedness of sinners will be consumed, and you will direct the just: the examiner of hearts and temperaments is God.
{7:11} Just is my help from the Lord, who saves the upright of heart.
{7:12} God is a just judge, strong and patient. How could he be angry throughout every day?
{7:13} Unless you will be converted, he will brandish his sword. He has extended his bow and made it ready.
{7:14} And with it, he has prepared instruments of death. He has produced his arrows for those on fire.
{7:15} Behold him who has given birth to injustice: he has conceived sorrow and has begotten iniquity.
{7:16} He has opened a pit and enlarged it. And he has fallen into the hole that he made.
{7:17} His sorrow will be turned upon his own head, and his iniquity will descend upon his highest point.
{7:18} I will confess to the Lord according to his justice, and I will sing a psalm to the name of the Lord Most High.

[Psalm 8]
{8:1} Unto the end. For the oil and wine presses. A Psalm of David.
{8:2} O Lord, our Lord, how admirable is your name throughout all the earth! For your magnificence is elevated above the heavens.
{8:3} Out of the mouths of babes and infants, you have perfected praise, because of your enemies, so that you may destroy the enemy and the revenger.
{8:4} For I will behold your heavens, the works of your fingers: the moon and the stars, which you have founded.
{8:5} What is man, that you are mindful of him, or the son of man, that you visit him?
{8:6} You reduced him to a little less than the Angels; you have crowned him with glory and honor,
{8:7} and you have set him over the works of your hands.
{8:8} You have subjected all things under his feet, all sheep and oxen, and in addition: the beasts of the field,
{8:9} the birds of the air, and the fish of the sea, which pass through the paths of the sea.
{8:10} O Lord, our Lord, how admirable is your name throughout all the earth!

[Psalm 9] (9 - 10)
{9:1} Unto the end. For the secrets of the Son. A Psalm of David.
{9:2} I will confess to you, Lord, with my whole heart. I will recount all your wonders.
{9:3} I will rejoice and exult in you. I will sing a psalm to your name, O Most High.
{9:4} For my enemy will be turned back. They will be weakened and perish before your face.
{9:5} For you have accomplished my judgment and my cause. You have sat upon the throne that judges justice.
{9:6} You have rebuked the Gentiles, and the impious one has perished. You have deleted their name in eternity and for all generations.
{9:7} The spears of the enemy have failed in the end, and their cities, you have destroyed. Their memory has perished with a loud noise.
{9:8} But the Lord remains in eternity. He has prepared his throne in judgment.
{9:9} And he will judge the whole world in equity. He will judge the people in justice.
{9:10} And the Lord has become a refuge for the poor, a helper in opportunity, in tribulation.
{9:11} And may they hope in you, who know your name. For you have not abandoned those seeking you, Lord.
{9:12} Sing a psalm to the Lord, who dwells in Zion. Announce his study among the Gentiles.
{9:13} Because of those who yearned for their blood, he has remembered them. He has not forgotten the cry of the poor.
{9:14} Have mercy on me, Lord. See my humiliation from my enemies.
{9:15} You lift me up from the gates of death, so that I may announce all your praises at the gates of the daughter of Zion.
{9:16} I will exult in your salvation. The Gentiles have become trapped in the ruin that they made. Their foot has been caught in the same snare that they themselves had hidden.
{9:17} The Lord will be recognized when making judgments. The sinner has been caught in the works of his own hands.
{9:18} The sinners will be turned into Hell: all the Gentiles who have forgotten God.
{9:19} For the poor will not be forgotten in the end. The patience of the poor will not perish in the end.
{9:20} Rise up, Lord: do not let man be strengthened. Let the Gentiles be judged in your sight.
{9:21} O Lord, establish a lawgiver over them, so that the Gentiles may know that they are only men.

{9:22} So then, why, O Lord, have you withdrawn far away? Why have you overlooked us in opportunity, in tribulation?
{9:23} While the impious is arrogant, the poor is enflamed. They are held by the counsels that they devise.
{9:24} For the sinner is praised by the desires of his soul, and the iniquitous is blessed.
{9:25} The sinner has provoked the Lord; according to the multitude of his wrath, he will not seek him.
{9:26} God is not before his sight. His ways are stained at all times. Your judgments are removed from his face. He will be master of all his enemies.
{9:27} For he has said in his heart, “I will not be disturbed: from generation to generation without evil.”
{9:28} His mouth is full of curses, and bitterness, and deceit. Under his tongue are hardship and sorrow.
{9:29} He sits in ambush, with resources in hidden places, so that he may execute the innocent.
{9:30} His eyes catch sight of the poor. He lies in ambush, in hiding like a lion in his den. He lies in ambush, so that he may seize the poor, to seize the poor as he draws him in.
{9:31} With his snare, he will bring him down. He will crouch down and pounce, when he has power over the poor.
{9:32} For he has said in his heart, “God has forgotten, he has turned away his face, lest he see to the end.”
{9:33} O Lord God, rise up. Let your hand be exalted. Do not forget the poor.
{9:34} How has the impious one provoked God? For he has said in his heart, “He will not inquire.”
{9:35} You do see, for you examine hardship and sorrow, so that you may deliver them into your hands. The poor one has been abandoned to you. You will be a helper to the orphan.
{9:36} Break the arm of the sinner and the malicious. His sin will be sought, and it will not be found.
{9:37} The Lord shall reign in eternity, even forever and ever. You will perish the Gentiles from his land.
{9:38} The Lord has heeded the desire of the poor. Your ear has listened to the preparation of their heart,
{9:39} so as to judge for the orphan and the humble, so that man may no longer presume to magnify himself upon the earth.

[Psalm 10] (11)
{10:1} Unto the end. A Psalm of David.
{10:2} I trust in the Lord. How can you say to my soul, “Sojourn to the mountain, like a sparrow.”
{10:3} For behold, the sinners have bent their bow. They have prepared their arrows in the quiver, so as to shoot arrows in the dark at the upright of heart.
{10:4} For they have destroyed the things that you have completed. But what has the just one done?
{10:5} The Lord is in his holy temple. The Lord’s throne is in heaven. His eyes look upon the poor. His eyelids question the sons of men.
{10:6} The Lord questions the just and the impious. Yet he who loves iniquity, hates his own soul.
{10:7} He will rain down snares upon sinners. Fire and brimstone and windstorms will be the portion of their cup.
{10:8} For the Lord is just, and he has chosen justice. His countenance has beheld equity.

[Psalm 11] (12)
{11:1} Unto the end. For the octave. A Psalm of David.
{11:2} Save me, O Lord, because holiness has passed away, because truths have been diminished, before the sons of men.
{11:3} They have been speaking emptiness, each one to his neighbor; they have been speaking with deceitful lips and a duplicitous heart.
{11:4} May the Lord scatter all deceitful lips, along with the tongue that speaks malice.
{11:5} They have said: “We will magnify our tongue; our lips belong to us. Who is our Lord?”
{11:6} Because of the misery of the destitute and the groaning of the poor, now I will arise, says the Lord. I will place him in safety. I will act faithfully toward him.
{11:7} The eloquence of the Lord is pure eloquence, silver tested by fire, purged from the earth, refined seven times.
{11:8} You, O Lord, will preserve us, and you will guard us from this generation into eternity.
{11:9} The impious wander aimlessly. According to your loftiness, you have multiplied the sons of men.

[Psalm 12] (13)
{12:1} Unto the end. A Psalm of David. How long, O Lord? Will you forget me until the end? How long will you turn your face away from me?
{12:2} How long can I take counsel in my soul, sorrowing in my heart throughout the day?
{12:3} How long will my enemy be exalted over me?
{12:4} Look upon me and listen to me, O Lord my God. Enlighten my eyes, lest I fall asleep forever in death,
{12:5} lest at any time my enemy may say, “I have prevailed against him.” Those who trouble me will exult, if I have been disturbed.
{12:6} But I have hoped in your mercy. My heart will exult in your salvation. I will sing to the Lord, who assigns good things to me. And I will sing psalms to the name of the Lord Most High.

[Psalm 13] (14)
{13:1} Unto the end. A Psalm of David. The fool has said in his heart, “There is no God.” They were corrupted, and they have become abominable in their studies. There is no one who does good; there is not even one.
{13:2} The Lord has looked down from heaven upon the sons of men, to see if there were any who were considering or seeking God.
{13:3} They have all gone astray; together they have become useless. There is no one who does good; there is not even one.
{13:4} Their throat is an open sepulcher. With their tongues, they have been acting deceitfully; the venom of asps is under their lips. Their mouth is full of curses and bitterness.
{13:5} Their feet are swift to shed blood. Grief and unhappiness are in their ways; and the way of peace, they have not known.
{13:6} There is no fear of God before their eyes.
{13:7} Will they never learn: all those who work iniquity, who devour my people like a meal of bread?
{13:8} They have not called upon the Lord. There, they have trembled in fear, where there was no fear.
{13:9} For the Lord is with the just generation. You have confounded the counsel of the needy because the Lord is his hope.
{13:10} Who will grant the salvation of Israel from Zion? When the Lord turns away the captivity of his people, Jacob will exult, and Israel will rejoice.

[Psalm 14] (15)
{14:1} A Psalm of David. O Lord, who will dwell in your tabernacle? Or who will rest on your holy mountain?
{14:2} He who walks without blemish and who works justice.
{14:3} He who speaks the truth in his heart, who has not acted deceitfully with his tongue, and has not done evil to his neighbor, and has not taken up a reproach against his neighbors.
{14:4} In his sight, the malicious one has been reduced to nothing, but he glorifies those who fear the Lord. He who swears to his neighbor and does not deceive.
{14:5} He who has not given his money in usury, nor accepted bribes against the innocent. He who does these things will be undisturbed for eternity.

[Psalm 15] (16)
{15:1} The inscription of a title: of David himself. Preserve me, O Lord, because I have hoped in you.
{15:2} I have said to the Lord: “You are my God, so you have no need of my goodness.”
{15:3} As for the saints, who are in his land: he has made all my desires wonderful in them.
{15:4} Their infirmities have been multiplied; after this, they acted more quickly. I will not gather for their convocations of blood, nor will I remember their names with my lips.
{15:5} The Lord is the portion of my inheritance and my cup. It is you who will restore my inheritance to me.
{15:6} The lots have fallen upon me with clarity. And, indeed, my inheritance has been very clear to me.
{15:7} I will bless the Lord, who has bestowed understanding upon me. Moreover, my temperament has also corrected me, even through the night.
{15:8} I have made provision for the Lord always in my sight. For he is at my right hand, so that I may not be disturbed.
{15:9} Because of this, my heart has been joyful, and my tongue has exulted. Moreover, even my body will rest in hope.
{15:10} For you will not abandon my soul to Hell, nor will you allow your holy one to see corruption.
{15:11} You have made known to me the ways of life; you will fill me with joy by your countenance. At your right hand are delights, even to the end.

[Psalm 16] (17)
{16:1} A Prayer of David. Lord, listen to my justice, attend to my supplication. Pay attention to my prayer, which is not from deceitful lips.
{16:2} Let my judgment proceed from your presence. Let your eyes behold fairness.
{16:3} You have tested my heart and visited it by night. You have examined me by fire, and iniquity has not been found in me.
{16:4} Therefore, may my mouth not speak the works of men. I have kept to difficult ways because of the words of your lips.
{16:5} Perfect my steps in your paths, so that my footsteps may not be disturbed.
{16:6} I have cried out because you, O God, have listened to me. Incline your ear to me and heed my words.
{16:7} Make your mercies wonderful, for you save those who hope in you.
{16:8} From those who resist your right hand, preserve me like the pupil of your eye. Protect me under the shadow of your wings,
{16:9} from the face of the impious who have afflicted me. My enemies have surrounded my soul.
{16:10} They have concealed their fatness; their mouth has been speaking arrogantly.
{16:11} They have cast me out, and now they have surrounded me. They have cast their eyes down to the earth.
{16:12} They have taken me, like a lion ready for the prey, and like a young lion dwelling in hiding.
{16:13} Rise up, O Lord, arrive before him and displace him. Deliver my soul from the impious one: your spear from the enemies of your hand.
{16:14} Lord, divide them from the few of the earth in their life. Their gut has been filled from your hidden stores. They have been filled with sons, and they have bequeathed to their little ones the remainder.
{16:15} But as for me, I will appear before your sight in justice. I will be satisfied when your glory appears.

[Psalm 17] (18)
{17:1} Unto the end. For David, the servant of the Lord, who spoke the words of this canticle to the Lord, in the day that the Lord delivered him from the hand of all his enemies and from the hand of Saul. And he said:
{17:2} I will love you, O Lord my strength.
{17:3} The Lord is my firmament, my refuge, and my liberator. My God is my helper, and I hope in him: my protector, and the horn of my salvation, and my support.
{17:4} Praising, I will call upon the Lord. And I will be saved from my enemies.
{17:5} The sorrows of death surrounded me, and the torrents of iniquity dismayed me.
{17:6} The sorrows of Hell encompassed me, and the snares of death intercepted me.
{17:7} In my tribulation, I called upon the Lord, and I cried out to my God. And he listened to my voice from his holy temple. And my cry in his presence entered into his ears.
{17:8} The earth was shaken, and it trembled. The foundations of the mountains were disturbed, and they were shaken, because he was angry with them.
{17:9} A smoke ascended by his wrath, and a fire flared up from his face: coals were kindled by it.
{17:10} He bent the heavens, and they descended. And darkness was under his feet.
{17:11} And he ascended upon the cherubim, and he flew: he flew upon the feathers of the winds.
{17:12} And he set darkness as his hiding place, with his tabernacle all around him: dark waters in the clouds of the air.
{17:13} At the brightness that was before his sight, the clouds crossed by, with hail and coals of fire.
{17:14} And the Lord thundered from heaven, and the Most High uttered his voice: hail and coals of fire.
{17:15} And he sent forth his arrows and scattered them. He multiplied lightnings, and he set them in disarray.
{17:16} Then the fountains of waters appeared, and the foundations of the world were revealed, by your rebuke, O Lord, by the inspiration of the Spirit of your wrath.
{17:17} He sent from on high, and he accepted me. And he took me up, out of many waters.
{17:18} He rescued me from my strongest enemies, and from those who hated me. For they had been too strong for me.
{17:19} They intercepted me in the day of my affliction, and the Lord became my protector.
{17:20} And he led me out, into a wide place. He accomplished my salvation, because he willed me.
{17:21} And the Lord will reward me according to my justice, and he will repay me according to the purity of my hands.
{17:22} For I have preserved the ways of the Lord, and I have not behaved impiously before my God.
{17:23} For all his judgments are in my sight, and his justice, I have not pushed away from me.
{17:24} And I will be immaculate together with him, and I will keep myself from my iniquity.
{17:25} And the Lord will reward me according to my justice and according to the purity of my hands before his eyes.
{17:26} With the holy, you will be holy, and with the innocent, you will be innocent,
{17:27} and with the elect, you will be elect, and with the perverse, you will be perverse.
{17:28} For you will save the humble people, but you will bring down the eyes of the arrogant.
{17:29} For you illuminate my lamp, O Lord. My God, enlighten my darkness.
{17:30} For in you, I will be delivered from temptation; and with my God, I will climb over a wall.
{17:31} As for my God, his way is undefiled. The eloquence of the Lord has been examined by fire. He is the protector of all who hope in him.
{17:32} For who is God, except the Lord? And who is God, except our God?
{17:33} It is God who has wrapped me with virtue and made my way immaculate.
{17:34} It is he who has perfected my feet, like the feet of deer, and who stations me upon the heights.
{17:35} It is he who trains my hands for battle. And you have set my arms like a bow of brass.
{17:36} And you have given me the protection of your salvation. And your right hand sustains me. And your discipline has corrected me unto the end. And your discipline itself will teach me.
{17:37} You have expanded my footsteps under me, and my tracks have not been weakened.
{17:38} I will pursue my enemies and apprehend them. And I will not turn back until they have failed.
{17:39} I will break them, and they will not be able to stand. They will fall under my feet.
{17:40} And you have wrapped me with virtue for the battle. And those rising up against me, you have subdued under me.
{17:41} And you have given the back of my enemies to me, and you have destroyed those who hated me.
{17:42} They cried out, but there was none to save them, to the Lord, but he did not heed them.
{17:43} And I will crush them into dust before the face of the wind, so that I will obliterate them like the mud in the streets.
{17:44} You will rescue me from the contradictions of the people. You will set me at the head of the Gentiles.
{17:45} A people I did not know has served me. As soon as their ears heard, they were obedient to me.
{17:46} The sons of foreigners have been deceitful to me, the sons of foreigners have grown weak with time, and they have wavered from their paths.
{17:47} The Lord lives, and blessed is my God, and may the God of my salvation be exalted:
{17:48} O God, who vindicates me and who subdues the people under me, my liberator from my enraged enemies.
{17:49} And you will exalt me above those who rise up against me. From the iniquitous man, you will rescue me.
{17:50} Because of this, O Lord, I will confess to you among the nations, and I will compose a psalm to your name:
{17:51} magnifying the salvation of his king, and showing mercy to David, his Christ, and to his offspring, even for all time.

[Psalm 18] (19)
{18:1} Unto the end. A Psalm of David.
{18:2} The heavens describe the glory of God, and the firmament announces the work of his hands.
{18:3} Day proclaims the word to day, and night to night imparts knowledge.
{18:4} There are no speeches or conversations, where their voices are not being heard.
{18:5} Their sound has gone forth through all the earth, and their words to the ends of the world.
{18:6} He has placed his tabernacle in the sun, and he is like a bridegroom coming out of his bedroom. He has exulted like a giant running along the way;
{18:7} his departure is from the summit of heaven. And his course reaches all the way to its summit. Neither is there anyone who can hide himself from his heat.
{18:8} The law of the Lord is immaculate, converting souls. The testimony of the Lord is faithful, providing wisdom to little ones.
{18:9} The justice of the Lord is right, rejoicing hearts. The precepts of the Lord are brilliant, enlightening the eyes.
{18:10} The fear of the Lord is holy, enduring for all generations. The judgments of the Lord are true, justified in themselves:
{18:11} desirable beyond gold and many precious stones, and sweeter than honey and the honeycomb.
{18:12} For, indeed, your servant keeps them, and in keeping them, there are many rewards.
{18:13} Who can understand transgression? From my hidden faults, cleanse me, O Lord,
{18:14} and from those of others, spare your servant. If they will have no dominion over me, then I will be immaculate, and I will be cleansed from the greatest transgression.
{18:15} And the eloquence of my mouth will be so as to please, along with the meditation of my heart, in your sight, forever, O Lord, my helper and my redeemer.

[Psalm 19] (20)
{19:1} Unto the end. A Psalm of David.
{19:2} May the Lord hear you in the day of tribulation. May the name of the God of Jacob protect you.
{19:3} May he send you help from the sanctuary and watch over you from Zion.
{19:4} May he be mindful of all your sacrifices, and may your burnt-offerings be fat.
{19:5} May he grant to you according to your heart, and confirm all your counsels.
{19:6} We will rejoice in your salvation, and in the name of our God, we will be magnified.
{19:7} May the Lord fulfill all your petitions. Now I know that the Lord has saved his Christ. He will hear him from his holy heaven. The salvation of his right hand is in his power.
{19:8} Some trust in chariots, and some in horses, but we will call upon the name of the Lord our God.
{19:9} They have been bound, and they have fallen. But we have risen up, and we have been set upright.
{19:10} O Lord, save the king, and hear us on the day that we will call upon you.

[Psalm 20] (21)
{20:1} Unto the end. A Psalm of David.
{20:2} In your virtue, Lord, the king will rejoice, and over your salvation, he will exult exceedingly.
{20:3} You have granted him the desire of his heart, and you have not cheated him of the wish of his lips.
{20:4} For you have gone ahead of him with blessings of sweetness. You have placed a crown of precious stones on his head.
{20:5} He petitioned you for life, and you have granted him length of days, in the present time, and forever and ever.
{20:6} Great is his glory in your salvation. Glory and great adornment, you will lay upon him.
{20:7} For you will give him as a blessing forever and ever. You will make him rejoice with gladness in your presence.
{20:8} Because the king hopes in the Lord, and in the mercy of the Most High, he will not be disturbed.
{20:9} May your hand be found by all your enemies. May your right hand discover all those who hate you.
{20:10} You will make them like an oven of fire, in the time of your presence. The Lord will stir them up with his wrath, and fire will devour them.
{20:11} You will destroy their fruit from the earth and their offspring from the sons of men.
{20:12} For they have turned evils upon you; they have devised plans, which they have not been able to accomplish.
{20:13} For you will make them turn their back; with your remnants, you will prepare their countenance.
{20:14} Be exalted, Lord, by your own power. We will play music and sing psalms to your virtues.

[Psalm 21] (22)
{21:1} Unto the end. For the tasks of early morning. A Psalm of David.
{21:2} O God, my God, look upon me. Why have you forsaken me? Far from my salvation are the words of my offenses.
{21:3} My God, I will cry out by day, and you will not heed, and by night, and it will not be foolishness for me.
{21:4} But you dwell in holiness, O Praise of Israel.
{21:5} In you, our fathers have hoped. They hoped, and you freed them.
{21:6} They cried out to you, and they were saved. In you, they hoped and were not confounded.
{21:7} But I am a worm and not a man: a disgrace among men, and an outcast of the people.
{21:8} All those who saw me have derided me. They have spoken with the lips and shook the head.
{21:9} He has hoped in the Lord, let him rescue him. Let him save him because he chooses him.
{21:10} For you are the one who has drawn me out of the womb, my hope from the breasts of my mother.
{21:11} I have been thrown upon you from the womb; from the womb of my mother, you are my God.
{21:12} Do not depart from me. For tribulation is near, since there is no one who may help me.
{21:13} Many calves have surrounded me; fat bulls have besieged me.
{21:14} They have opened their mouths over me, just like a lion seizing and roaring.
{21:15} And so, I have been poured out like water, and all my bones have been scattered. My heart has become like wax, melting in the midst of my chest.
{21:16} My strength has dried up like clay, and my tongue has adhered to my jaws. And you have pulled me down, into the dust of death.
{21:17} For many dogs have surrounded me. The council of the malicious has besieged me. They have pierced my hands and feet.
{21:18} They have numbered all my bones. And they have examined me and stared at me.
{21:19} They divided my garments among them, and over my vestment, they cast lots.
{21:20} But you, O Lord, do not take your help far from me; be attentive to my defense.
{21:21} O God, rescue my soul from the spear, and my only one from the hand of the dog.
{21:22} Save me from the mouth of the lion, and my humility from the horns of the single-horned beast.
{21:23} I will declare your name to my brothers. In the midst of the Church, I will praise you.
{21:24} You who fear the Lord, praise him. All the offspring of Jacob, glorify him.
{21:25} May all the offspring of Israel fear him. For he has neither spurned nor despised the pleas of the poor. Neither has he turned his face away from me. And when I cried out to him, he heeded me.
{21:26} My praise is with you, within a great church. I will pay my vows in the sight of those who fear him.
{21:27} The poor will eat and be satisfied, and those who yearn for the Lord will praise him. Their hearts will live forever and ever.
{21:28} All the ends of the earth will remember, and they will be converted to the Lord. And all the families of the Gentiles will adore in his sight.
{21:29} For the kingdom belongs to the Lord, and he will have dominion over the Gentiles.
{21:30} All the fat of the earth have gnashed their teeth, and they have adored. In his sight, they will fall down, all those who descend to the ground.
{21:31} And my soul will live for him, and my offspring will serve him.
{21:32} There will be announced for the Lord a future generation, and the heavens will announce his justice to a people who will be born, whom the Lord has made.

[Psalm 22] (23)
{22:1} A Psalm of David. The Lord directs me, and nothing will be lacking to me.
{22:2} He has settled me here, in a place of pasture. He has led me out to the water of refreshment.
{22:3} He has converted my soul. He has led me away on the paths of justice, for the sake of his name.
{22:4} For, even if I should walk in the midst of the shadow of death, I will fear no evils. For you are with me. Your rod and your staff, they have given me consolation.
{22:5} You have prepared a table in my sight, opposite those who trouble me. You have anointed my head with oil, and my cup, which inebriates me, how brilliant it is!
{22:6} And your mercy will follow me all the days of my life, and so may I dwell in the house of the Lord for length of days.

[Psalm 23] (24)
{23:1} For the First Sabbath. A Psalm of David. The earth and all its fullness belong to the Lord: the whole world and all that dwells in it.
{23:2} For he has founded it upon the seas, and he has prepared it upon the rivers.
{23:3} Who will ascend to the mountain of the Lord? And who will stand in his holy place?
{23:4} The innocent of hands and the clean of heart, who has not received his soul in vain, nor sworn deceitfully to his neighbor.
{23:5} He will receive a blessing from the Lord, and mercy from God, his Savior.
{23:6} This is the generation that seeks him, that seeks the face of the God of Jacob.
{23:7} Lift up your gates, you princes, and be lifted up, eternal gates. And the King of Glory shall enter.
{23:8} Who is this King of Glory? The Lord who is strong and powerful; the Lord powerful in battle.
{23:9} Lift up your gates, you princes, and be lifted up, eternal gates. And the King of Glory shall enter.
{23:10} Who is this King of Glory? The Lord of virtue. He himself is the King of Glory.

[Psalm 24] (25)
{24:1} Unto the end. A Psalm of David. To you, Lord, I have lifted up my soul.
{24:2} In you, my God, I trust. Let me not be put to shame.
{24:3} And do not let my enemies laugh at me. For all who remain with you will not be confounded.
{24:4} May all those who act unjustly over nothing be confounded. O Lord, demonstrate your ways to me, and teach me your paths.
{24:5} Direct me in your truth, and teach me. For you are God, my Savior, and I remain with you all day long.
{24:6} O Lord, remember your compassion and your mercies, which are from ages past.
{24:7} Do not remember the offenses of my youth and my ignorances. Remember me according to your mercy, because of your goodness, O Lord.
{24:8} The Lord is sweet and righteous. Because of this, he will grant a law to those who fall short in the way.
{24:9} He will direct the mild in judgment. He will teach the meek his ways.
{24:10} All the ways of the Lord are mercy and truth, to those who yearn for his covenant and his testimonies.
{24:11} Because of your name, O Lord, you will pardon my sin, for it is great.
{24:12} Which is the man who fears the Lord? He has established a law for him, on the way that he has chosen.
{24:13} His soul will dwell upon good things, and his offspring will inherit the earth.
{24:14} The Lord is a firmament to those who fear him, and his covenant will be made manifest to them.
{24:15} My eyes are ever toward the Lord, for he will pull my feet from the snare.
{24:16} Look upon me and have mercy on me; for I am alone and poor.
{24:17} The troubles of my heart have been multiplied. Deliver me from my needfulness.
{24:18} See my lowliness and my hardship, and release all my offenses.
{24:19} Consider my enemies, for they have been multiplied, and they have hated me with an unjust hatred.
{24:20} Preserve my soul and rescue me. I will not be ashamed, for I have hoped in you.
{24:21} The innocent and the righteous have adhered to me, because I have remained with you.
{24:22} Free Israel, O God, from all his tribulations.

[Psalm 25] (26)
{25:1} Unto the end. A Psalm of David. Judge me, Lord, for I have been walking in my innocence, and by hoping in the Lord, I will not be weakened.
{25:2} Examine me, Lord, and test me: enkindle my temperament and my heart.
{25:3} For your mercy is before my eyes, and I am serene in your truth.
{25:4} I have not sat with the council of emptiness, and I will not enter with those who carry out injustice.
{25:5} I have hated the assembly of the malicious; and I will not sit with the impious.
{25:6} I will wash my hands among the innocent, and I will surround your altar, O Lord,
{25:7} so that I may hear the voice of your praise and describe all your wonders.
{25:8} O Lord, I have loved the beauty of your house and the dwelling place of your glory.
{25:9} O God, do not let my soul perish with the impious, nor my life with the men of blood,
{25:10} in whose hands are iniquities: their right hand has been filled by bribes.
{25:11} But as for me, I have been walking in my innocence. Redeem me, and have mercy on me.
{25:12} My foot has stood firm in the straight path. In the churches, I will bless you, O Lord.

[Psalm 26] (27)
{26:1} A Psalm of David, before he was sealed. The Lord is my light and my salvation, whom shall I fear? The Lord is the protector of my life, of whom shall I be afraid?
{26:2} Meanwhile, the guilty draw near to me, so as to eat my flesh. Those who trouble me, my enemies, have themselves been weakened and have fallen.
{26:3} If entrenched armies were to stand together against me, my heart would not fear. If a battle were to rise up against me, I would have hope in this.
{26:4} One thing I have asked of the Lord, this I will seek: that I may dwell in the house of the Lord all the days of my life, so that I may behold the delight of the Lord, and may visit his temple.
{26:5} For he has hidden me in his tabernacle. In the day of evils, he has protected me in the hidden place of his tabernacle.
{26:6} He has exalted me upon the rock, and now he has exalted my head above my enemies. I have circled around and offered a sacrifice of loud exclamation in his tabernacle. I will sing, and I will compose a psalm, to the Lord.
{26:7} Hear my voice, O Lord, with which I have cried out to you. Have mercy on me, and hear me.
{26:8} My heart has spoken to you; my face has sought you. I yearn for your face, O Lord.
{26:9} Do not turn your face away from me. In your wrath, do not turn aside from your servant. Be my helper. Do not abandon me, and do not despise me, O God, my Savior.
{26:10} For my father and my mother have left me behind, but the Lord has taken me up.
{26:11} O Lord, establish a law for me in your way, and direct me in the right path, because of my enemies.
{26:12} Do not surrender me to the souls of those who trouble me. For unjust witnesses have risen up against me, and iniquity has lied to itself.
{26:13} I believe that I shall see the good things of the Lord in the land of the living.
{26:14} Wait for the Lord, act manfully; and let your heart be strengthened, and remain with the Lord.

[Psalm 27] (28)
{27:1} A Psalm of David himself. To you, Lord, I will cry out. My God, do not be silent toward me. For if you remain silent toward me, I will become like those who descend into the pit.
{27:2} Hear, O Lord, the voice of my supplication, when I pray to you, when I lift up my hands toward your holy temple.
{27:3} Do not draw me away together with sinners; and let me not perish with those who work iniquity, who speak peacefully to their neighbor, yet evils are in their hearts.
{27:4} Give to them according to their works and according to the wickedness of their inventions. Assign to them according to the works of their hands. Repay them with their own retribution.
{27:5} Since they have not understood the works of the Lord and the works of his hands, you will destroy them, and you will not build them up.
{27:6} Blessed is the Lord, for he has heard the voice of my supplication.
{27:7} The Lord is my helper and my protector. In him, my heart has hoped and I have been helped. And my flesh has flourished again. And from my will, I shall confess to him.
{27:8} The Lord is the strength of his people and the protector of the salvation of his Christ.
{27:9} O Lord, save your people and bless your inheritance, and reign over them and exalt them, even unto eternity.

[Psalm 28] (29)
{28:1} A Psalm of David, at the completion of the tabernacle. Bring to the Lord, O sons of God, bring to the Lord the sons of rams.
{28:2} Bring to the Lord, glory and honor. Bring to the Lord, glory for his name. Adore the Lord in his holy court.
{28:3} The voice of the Lord is over the waters. The God of majesty has thundered. The Lord is over many waters.
{28:4} The voice of the Lord is in virtue. The voice of the Lord is in magnificence.
{28:5} The voice of the Lord shatters the cedars. And the Lord will shatter the cedars of Lebanon.
{28:6} And it will break them into pieces, like a calf of Lebanon, and in the same way as the beloved son of the single-horned beast.
{28:7} The voice of the Lord cuts through the flame of fire.
{28:8} The voice of the Lord shakes the desert. And the Lord will quake the desert of Kadesh.
{28:9} The voice of the Lord is preparing the stags, and he will reveal the dense woods. And in his temple, all will speak his glory.
{28:10} The Lord causes the great flood to dwell. And the Lord will sit as King in eternity.
{28:11} The Lord will give virtue to his people. The Lord will bless his people in peace.

[Psalm 29] (30)
{29:1} A Canticle Psalm. In dedication to the house of David.
{29:2} I will extol you, Lord, for you have sustained me, and you have not allowed my enemies to delight over me.
{29:3} O Lord my God, I have cried out to you, and you have healed me.
{29:4} Lord, you led my soul away from Hell. You have saved me from those who descend into the pit.
{29:5} Sing a psalm to the Lord, you his saints, and confess with remembrance of his holiness.
{29:6} For wrath is in his indignation, and life is in his will. Toward evening, weeping will linger, and toward morning, gladness.
{29:7} But I have said in my abundance: “I will never be disturbed.”
{29:8} O Lord, in your will, you made virtue preferable to beauty for me. You turned your face away from me, and I became disturbed.
{29:9} To you, Lord, I will cry out. And I will make supplication to my God.
{29:10} What use would there be in my blood, if I descend into corruption? Will dust confess to you or announce your truth?
{29:11} The Lord has heard, and he has been merciful to me. The Lord has become my helper.
{29:12} You have turned my mourning into gladness for me. You have cut off my sackcloth, and you have surrounded me with joy.
{29:13} So then, may my glory sing to you, and may I not regret it. O Lord, my God, I will confess to you for eternity.

[Psalm 30] (31)
{30:1} Unto the end. A Psalm of David according to an ecstasy.
{30:2} In you, Lord, I have hoped; let me never be confounded. In your justice, deliver me.
{30:3} Incline your ear to me. Hasten to rescue me. Be for me a protector God and a house of refuge, so as to accomplish my salvation.
{30:4} For you are my strength and my refuge; and for the sake of your name, you will lead me and nourish me.
{30:5} You will lead me out of this snare, which they have hidden for me. For you are my protector.
{30:6} Into your hands, I commend my spirit. You have redeemed me, O Lord, God of truth.
{30:7} You have hated those who practice emptiness to no purpose. But I have hoped in the Lord.
{30:8} I will exult and rejoice in your mercy. For you have looked upon my humility; you have saved my soul from needfulness.
{30:9} And you have not enclosed me in the hands of the enemy. You have set my feet in a spacious place.
{30:10} Have mercy on me, Lord, for I am troubled. My eye has been disturbed by wrath, along with my soul and my gut.
{30:11} For my life has fallen into sorrow, and my years into sighing. My virtue has been weakened in poverty, and my bones have been disturbed.
{30:12} I have become a disgrace among all my enemies, and even more so to my neighbors, and a dread to my acquaintances. Those who catch sight of me, flee away from me.
{30:13} I have become forgotten, like one dead to the heart. I have become like a damaged utensil.
{30:14} For I have heard the harsh criticism of many who linger in the area. While assembled together against me in that place, they deliberated on how to take away my life.
{30:15} But I have hoped in you, O Lord. I said, “You are my God.”
{30:16} My fate is in your hands. Rescue me from the hand of my enemies and from those who are persecuting me.
{30:17} Shine your face upon your servant. Save me in your mercy.
{30:18} Do not let me be confounded, Lord, for I have called upon you. Let the impious be ashamed and be drawn down into Hell.
{30:19} May deceitful lips be silenced: those that speak iniquity against the just, in arrogance and in abusiveness.
{30:20} How great is the multitude of your sweetness, O Lord, which you keep hidden for those who fear you, which you have perfected for those who hope in you, in the sight of the sons of men.
{30:21} You hide them in the concealment of your face, from the disturbance of men. You protect them in your tabernacle, from the contradiction of tongues.
{30:22} Blessed is the Lord. For he has shown his wonderful mercy to me, in a fortified city.
{30:23} But I said in the excess of my mind: “I have been cast away from the glance of your eyes.” And so, you heeded the voice of my prayer, while I was still crying out to you.
{30:24} Love the Lord, all you his saints. For the Lord will require truth, and he will abundantly repay those who act with arrogance.
{30:25} Act manfully, and let your heart be strengthened, all you who hope in the Lord.

[Psalm 31] (32)
{31:1} The understanding of David himself. Blessed are they whose iniquities have been forgiven and whose sins have been covered.
{31:2} Blessed is the man to whom the Lord has not imputed sin, and in whose spirit there is no deceit.
{31:3} Because I was silent, my bones grew old, while still I cried out all day long.
{31:4} For, day and night, your hand was heavy upon me. I have been converted in my anguish, while still the thorn is piercing.
{31:5} I have acknowledged my offense to you, and I have not concealed my injustice. I said, “I will confess against myself, my injustice to the Lord,” and you forgave the impiety of my sin.
{31:6} For this, everyone who is holy will pray to you in due time. Yet truly, in a flood of many waters, they will not draw near to him.
{31:7} You are my refuge from the tribulation that has surrounded me. You are my exultation: rescue me from those who are surrounding me.
{31:8} I will give you understanding, and I will instruct you in this way, in which you will walk. I will fix my eyes upon you.
{31:9} Do not become like the horse and the mule, which have no understanding. Their jaws are constrained with bit and bridle, so as not to draw near to you.
{31:10} Many are the scourges of the sinner, but mercy will surround him that hopes in the Lord.
{31:11} Rejoice in the Lord and exult, you just ones, and glory, all you upright of heart.

[Psalm 32] (33)
{32:1} A Psalm of David. Exult in the Lord, you just ones; together praise the upright.
{32:2} Confess to the Lord with stringed instruments; sing psalms to him with the psaltery, the instrument of ten strings.
{32:3} Sing to him a new song. Sing psalms to him skillfully, with loud exclamation.
{32:4} For the word of the Lord is upright, and all his works are in faith.
{32:5} He loves mercy and judgment. The earth is full of the mercy of the Lord.
{32:6} By the word of the Lord, the heavens were established, and all their power, by the Spirit of his mouth:
{32:7} gathering together the waters of the sea, as if in a container, placing the depths in storage.
{32:8} Let all the earth fear the Lord, and may all the inhabitants of the world quake before him.
{32:9} For he spoke, and they became. He commanded, and they were created.
{32:10} The Lord scatters the counsels of the nations. Moreover, he reproves the thoughts of the people, and he rejects the counsels of the leaders.
{32:11} But the counsel of the Lord remains for eternity, the thoughts of his heart from generation to generation.
{32:12} Blessed is the nation whose God is the Lord, the people whom he has chosen as his inheritance.
{32:13} The Lord has looked down from heaven. He has seen all the sons of men.
{32:14} From his well-prepared dwelling place, he has gazed upon all who dwell on the earth.
{32:15} He has formed the hearts of each one of them; he understands all their works.
{32:16} The king is not saved by great power, nor will the giant be saved by his many powers.
{32:17} The horse is false safety; for he will not be saved by the abundance of his powers.
{32:18} Behold, the eyes of the Lord are on those who fear him and on those who hope in his mercy,
{32:19} so as to rescue their souls from death and to feed them during famine.
{32:20} Our soul remains with the Lord. For he is our helper and protector.
{32:21} For in him, our heart will rejoice, and in his holy name, we have hoped.
{32:22} Let your mercy be upon us, O Lord, just as we have hoped in you.

[Psalm 33] (34)
{33:1} To David, when he changed his appearance in the sight of Abimelech, and so he dismissed him, and he went away.
{33:2} I will bless the Lord at all times. His praise will be ever in my mouth.
{33:3} In the Lord, my soul will be praised. May the meek listen and rejoice.
{33:4} Magnify the Lord with me, and let us extol his name in itself.
{33:5} I sought the Lord, and he heeded me, and he carried me away from all my tribulations.
{33:6} Approach him and be enlightened, and your faces will not be confounded.
{33:7} This poor one cried out, and the Lord heeded him, and he saved him from all his tribulations.
{33:8} The Angel of the Lord will encamp around those who fear him, and he will rescue them.
{33:9} Taste and see that the Lord is sweet. Blessed is the man who hopes in him.
{33:10} Fear the Lord, all you his saints. For there is no destitution for those who fear him.
{33:11} The rich have been needy and hungry, but those who seek the Lord will not be deprived of any good thing.
{33:12} Come forward, sons. Listen to me. I will teach you the fear of the Lord.
{33:13} Which is the man who wills life, who chooses to see good days?
{33:14} Prohibit your tongue from evil and your lips from speaking deceit.
{33:15} Turn away from evil, and do good. Inquire about peace, and pursue it.
{33:16} The eyes of the Lord are on the just, and his ears are with their prayers.
{33:17} But the countenance of the Lord is upon those who do evil, to perish the remembrance of them from the earth.
{33:18} The just cried out, and the Lord heard them, and he freed them from all their tribulations.
{33:19} The Lord is near to those who are troubled in heart, and he will save the humble in spirit.
{33:20} Many are the afflictions of the just, but from them all the Lord will free them.
{33:21} The Lord preserves all of their bones, not one of them shall be broken.
{33:22} The death of a sinner is very harmful, and those who hate the just will fare badly.
{33:23} The Lord will redeem the souls of his servants, and none of those who hope in him will fare badly.

[Psalm 34] (35)
{34:1} Of David himself. O Lord, judge those who harm me; assail those who attack me.
{34:2} Take hold of weapons and a shield, and rise up in assistance to me.
{34:3} Bring forth the spear, and close in on those who persecute me. Say to my soul, “I am your salvation.”
{34:4} Let them be confounded and in awe, who pursue my soul. Let them be turned back and be confounded, who think up evil against me.
{34:5} May they become like dust before the face of the wind, and let the Angel of the Lord hem them in.
{34:6} May their way become dark and slippery, and may the Angel of the Lord pursue them.
{34:7} For, without cause, they have concealed their snare for me unto destruction. Over nothing, they have rebuked my soul.
{34:8} Let the snare, of which he is ignorant, come upon him, and let the deception, which he has hidden, take hold of him: and may he fall into that very snare.
{34:9} But my soul will exult in the Lord and delight over his salvation.
{34:10} All my bones will say, “Lord, who is like you?” He rescues the needy from the hand of the stronger one, the indigent and the poor from those who plunder him.
{34:11} Unfair witnesses have risen up, interrogating me about things of which I am ignorant.
{34:12} They repaid me evil for good, to the deprivation of my soul.
{34:13} But as for me, when they were harassing me, I was clothed with haircloth. I humbled my soul with fasting, and my prayer will become my sinews.
{34:14} Like a neighbor, and like our brother, so did I please; like one mourning and contrite, so was I humbled.
{34:15} And they have been joyful against me, and they joined together. Scourges have been gathered over me, and I was ignorant of it.
{34:16} They have been scattered, yet they were unremorseful. They have tested me. They scoffed at me with scorn. They gnashed their teeth over me.
{34:17} Lord, when will you look down upon me? Restore my soul from before their malice, my only one from before the lions.
{34:18} I will confess to you in a great Church. I will praise you among a weighty people.
{34:19} May those who are my unjust adversaries not be glad over me: those who have hated me without cause, and who nod agreement with their eyes.
{34:20} For indeed, they spoke peacefully to me; and speaking with passion to the earth, they intended deceit.
{34:21} And they opened their mouth wide over me. They said, “Well, well, our eyes have seen.”
{34:22} You have seen, O Lord, do not be silent. Lord, do not depart from me.
{34:23} Rise up and be attentive to my judgment, to my cause, my God and my Lord.
{34:24} Judge me according to your justice, O Lord, my God, and do not let them be glad over me.
{34:25} Do not let them say in their hearts, “Well, well, to our soul.” Neither let them say, “We have devoured him.”
{34:26} Let them blush and be in awe together, those who congratulate at my misfortunes. Let them be clothed with confusion and awe, who speak great things against me.
{34:27} Let them exult and rejoice, who wish my justice, and let them ever say, “The Lord be magnified,” who will the peace of his servant.
{34:28} And so my tongue will express your justice: your praise all day long.

[Psalm 35] (36)
{35:1} Unto the end. To the servant of the Lord, David himself.
{35:2} The unjust one has said within himself that he would commit offenses. There is no fear of God before his eyes.
{35:3} For he has acted deceitfully in his sight, such that his iniquity will be found to be hatred.
{35:4} The words of his mouth are iniquity and deceit. He is unwilling to understand, so that he may act well.
{35:5} He has been considering iniquity on his bed. He has set himself on every way that is not good; moreover, he has not hated evil.
{35:6} Lord, your mercy is in heaven, and your truth is even to the clouds.
{35:7} Your justice is like the mountains of God. Your judgments are a great abyss. Men and beasts, you will save, O Lord.
{35:8} How you have multiplied your mercy, O God! And so the sons of men will hope under the cover of your wings.
{35:9} They will be inebriated with the fruitfulness of your house, and you will give them to drink from the torrent of your enjoyment.
{35:10} For with you is the fountain of life; and within your light, we will see the light.
{35:11} Extend your mercy before those who know you, and your justice to these, who are upright in heart.
{35:12} May arrogant feet not approach me, and may the hand of the sinner not disturb me.
{35:13} In that place, those who work iniquity have fallen. They have been expelled; they were not able to stand.

[Psalm 36] (37)
{36:1} A Psalm of David himself. Do not choose to imitate the malicious; neither should you envy those who work iniquity.
{36:2} For they will quickly wither away like dry grass, and in like manner to kitchen herbs, they will soon droop.
{36:3} Hope in the Lord and do good, and dwell in the land, and so you shall be pastured with its riches.
{36:4} Delight in the Lord, and he will grant to you the petitions of your heart.
{36:5} Reveal your way to the Lord, and hope in him, and he will accomplish it.
{36:6} And he will bring forth your justice like the light, and your judgment like the midday.
{36:7} Be subject to the Lord and pray to him. Do not choose to compete with him who prospers in his way, with the man who does injustice.
{36:8} Cease from wrath and leave behind rage. Do not choose to imitate the malicious.
{36:9} For those who are malicious will be exterminated. But those who remain with the Lord, these will inherit the land.
{36:10} Yet still a little while, and the sinner will not be. And you will search his place and find nothing.
{36:11} But the meek shall inherit the earth, and they will delight in the multitude of peace.
{36:12} The sinner will observe the just, and he will gnash his teeth over him.
{36:13} But the Lord will laugh at him: for he knows in advance that his day will come.
{36:14} The sinners have drawn the sword, they have bent their bow, so as to cast down the poor and the needy, so as to massacre the upright of heart.
{36:15} Let their sword enter into their own hearts, and let their bow be broken.
{36:16} A little is better to the just than the many riches of sinners.
{36:17} For the arms of sinners will be crushed, but the Lord confirms the just.
{36:18} The Lord knows the days of the immaculate, and their inheritance will be in eternity.
{36:19} They will not be confounded in an evil time; and in days of famine, they will be satisfied:
{36:20} for sinners will perish. Truly, the adversaries of the Lord, soon after they have been honored and exalted, will fade away, in the same way that smoke fades away.
{36:21} The sinner will lend and not release, but the just one shows compassion and donates.
{36:22} For those who bless him will inherit the earth, but those who curse him will perish.
{36:23} The steps of a man will be directed by the Lord, and he will choose his way.
{36:24} When he falls, he will not be harmed, because the Lord places his hand under him.
{36:25} I have been young, and now I am old; and I have not seen the just forsaken, nor his offspring seeking bread.
{36:26} He shows compassion and lends, all day long, and his offspring will be in blessing.
{36:27} Turn away from evil and do good, and dwell forever and ever.
{36:28} For the Lord loves judgment, and he will not abandon his saints. They will be kept safe in eternity. The unjust will be punished, and the offspring of the impious will perish.
{36:29} But the just will inherit the earth, and they will dwell upon it forever and ever.
{36:30} The mouth of the just one will express wisdom, and his tongue will speak judgment.
{36:31} The law of his God is in his heart, and his steps shall not be supplanted.
{36:32} The sinner considers the just one and seeks to put him to death.
{36:33} But the Lord will not abandon him into his hands, nor condemn him, when he will be judged.
{36:34} Wait for the Lord, and keep to his way. And he will exalt you, so as to inherit the land that you may seize. When the sinners will have passed away, then you shall see.
{36:35} I have seen the impious over-exalted, and lifted up like the cedars of Lebanon.
{36:36} And I passed by, and behold, he was not. And I sought him, and his place was not found.
{36:37} Keep to innocence, and gaze upon fairness: because there are allotments for the peaceful man.
{36:38} But the unjust will be destroyed together: the allotments of the impious will pass away.
{36:39} But the salvation of the just is from the Lord, and he is their protector in time of tribulation.
{36:40} And the Lord will help them and free them. And he will rescue them from sinners and save them, because they have hoped in him.

[Psalm 37] (38)
{37:1} A Psalm of David, in commemoration of the Sabbath.
{37:2} O Lord, do not rebuke me in your fury, nor chastise me in your wrath.
{37:3} For your arrows have been driven into me, and your hand has been confirmed over me.
{37:4} There is no health in my flesh before the face of your wrath. There is no peace for my bones before the face of my sins.
{37:5} For my iniquities have walked over my head, and they have been like a heavy burden weighing upon me.
{37:6} My sores have putrefied and been corrupted before the face of my foolishness.
{37:7} I have become miserable, and I have been bent down, even to the end. I have walked with contrition all day long.
{37:8} For my loins have been filled with illusions, and there is no health in my flesh.
{37:9} I have been afflicted and greatly humbled. I bellowed from the groaning of my heart.
{37:10} O Lord, all my desire is before you, and my groaning before you has not been hidden.
{37:11} My heart has been disturbed. My strength has abandoned me, and the light of my eyes has abandoned me, and it is not with me.
{37:12} My friends and my neighbors have drawn near and stood against me. And those who were next to me stood far apart. And those who sought my soul used violence.
{37:13} And those who sought evil accusations against me were speaking emptiness. And they practiced deceitfulness all day long.
{37:14} But, like someone deaf, I did not hear. And I was like someone mute, not opening his mouth.
{37:15} And I became like a man who does not hear, and who has no reproofs in his mouth.
{37:16} For in you, Lord, I have hoped. You will listen to me, O Lord my God.
{37:17} For I said, “Lest at any time, my enemies might rejoice over me,” and, “While my feet are being shaken, they have spoken great things against me.”
{37:18} For I have been prepared for scourges, and my sorrow is ever before me.
{37:19} For I will announce my iniquity, and I will think about my sin.
{37:20} But my enemies live, and they have been stronger than me. And those who have wrongfully hated me have been multiplied.
{37:21} Those who render evil for good have dragged me down, because I followed goodness.
{37:22} Do not forsake me, O Lord my God. Do not depart from me.
{37:23} Be attentive to my help, O Lord, the God of my salvation.

[Psalm 38] (39)
{38:1} Unto the end. For Jeduthun himself. A Canticle of David.
{38:2} I said, “I will keep to my ways, so that I will not offend with my tongue.” I posted a guard at my mouth, when a sinner took up a position against me.
{38:3} I was silenced and humbled, and I was quiet before good things, and my sorrow was renewed.
{38:4} My heart grew hot within me, and, during my meditation, a fire would flare up.
{38:5} I spoke with my tongue, “O Lord, make me know my end, and what the number of my days will be, so that I may know what is lacking to me.”
{38:6} Behold, you have made my days measurable, and, before you, my substance is as nothing. Yet truly, all things are vanity: every living man.
{38:7} So then, truly man passes by like an image; even so, he is disquieted in vain. He stores up, and he knows not for whom he will gather these things.
{38:8} And now, what is it that awaits me? Is it not the Lord? And my substance is with you.
{38:9} Rescue me from all my iniquities. You have handed me over as a reproach to the foolish.
{38:10} I was silenced, and I did not open my mouth, because it was you who acted.
{38:11} Remove your scourges from me.
{38:12} I fall short at corrections from the strength of your hand. For you have chastised man for iniquity. And you have made his soul shrink away like a spider. Nevertheless, it is in vain that any man be disquieted.
{38:13} O Lord, heed my prayer and my supplication. Pay attention to my tears. Do not be silent. For I am a newcomer with you, and a sojourner, just as all my fathers were.
{38:14} Forgive me, so that I may be refreshed, before I will go forth and be no more.

[Psalm 39] (40)
{39:1} Unto the end. A Psalm of David himself.
{39:2} I have waited expectantly for the Lord, and he was attentive to me.
{39:3} And he heard my prayers and he led me out of the pit of misery and the quagmire. And he stationed my feet upon a rock, and he directed my steps.
{39:4} And he sent a new canticle into my mouth, a song to our God. Many will see, and they will fear; and they will hope in the Lord.
{39:5} Blessed is the man whose hope is in the name of the Lord, and who has no respect for vanities and absurd falsehoods.
{39:6} You have accomplished your many wonders, O Lord my God, and there is no one similar to you in your thoughts. I have announced and I have spoken: they are multiplied beyond number.
{39:7} Sacrifice and oblation, you did not want. But you have perfected ears for me. Holocaust and sin offering, you did not require.
{39:8} Then I said, “Behold, I draw near.” At the head of the book, it has been written of me:
{39:9} that I should do your will. My God, I have willed it. And your law is in the midst of my heart.
{39:10} I have announced your justice in a great Church: behold, I will not restrain my lips. O Lord, you have known it.
{39:11} I have not concealed your justice within my heart. I have spoken your truth and your salvation. I have not concealed your mercy and your truth from a great assembly.
{39:12} O Lord, do not take your tender mercies far from me. Your mercy and your truth ever sustain me.
{39:13} For evils without number have surrounded me. My iniquities have taken hold of me, and I was not able to see. They have been multiplied beyond the hairs of my head. And my heart has forsaken me.
{39:14} Be pleased, O Lord, to rescue me. Look down, O Lord, to help me.
{39:15} Let them together be confounded and awed, who seek after my soul to steal it away. Let them be turned back and be in awe, who wish evils upon me.
{39:16} Let them bear their confusion all at once, who say to me, “Well, well.”
{39:17} Let all who seek you exult and rejoice over you. And let those who love your salvation always say, “May the Lord be magnified.”
{39:18} But I am a beggar and poor. The Lord has been concerned about me. You are my helper and my protector. My God, do not delay.

[Psalm 40] (41)
{40:1} Unto the end. A Psalm of David himself.
{40:2} Blessed is he who shows understanding toward the needy and the poor. The Lord will deliver him in the evil day.
{40:3} May the Lord preserve him and give him life, and make him blessed upon the earth. And may he not hand him over to the will of his adversaries.
{40:4} May the Lord bring him help on his bed of sorrow. In his infirmity, you have changed his entire covering.
{40:5} I said, “O Lord, be merciful to me. Heal my soul, because I have sinned against you.”
{40:6} My enemies have spoken evils against me. When will he die and his name perish?
{40:7} And when he came in to see me, he was speaking emptiness. His heart gathered iniquity to itself. He went outside, and he was speaking in the same way.
{40:8} All my enemies were whispering against me. They were thinking up evils against me.
{40:9} They established an unjust word against me. Will he that sleeps no longer rise again?
{40:10} For even the man of my peace, in whom I hoped, who ate my bread, has greatly supplanted me.
{40:11} But you, O Lord, have mercy on me, and raise me up again. And I will requite them.
{40:12} By this, I knew that you preferred me: because my adversary will not rejoice over me.
{40:13} But you have sustained me, because of my innocence, and you have confirmed me in your sight in eternity.
{40:14} Blessed is the Lord God of Israel, for all generations and even forever. Amen. Amen.

[Psalm 41] (42)
{41:1} Unto the end. The understanding of the sons of Korah.
{41:2} As the deer longs for fountains of water, so my soul longs for you, O God.
{41:3} My soul has thirsted for the strong living God. When will I draw close and appear before the face of God?
{41:4} My tears have been my bread, day and night. Meanwhile, it is said to me daily: “Where is your God?”
{41:5} These things I have remembered; and my soul within me, I have poured out. For I will cross into the place of the wonderful tabernacle, all the way to the house of God, with a voice of exultation and confession, the sound of feasting.
{41:6} Why are you sad, my soul? And why do you disquiet me? Hope in God, for I will still confess to him: the salvation of my countenance,
{41:7} and my God. My soul has been troubled within myself. Because of this, I will remember you from the land of the Jordan and from Hermon, from the little mountain.
{41:8} Abyss calls upon abyss, with the voice of your floodgate. All your heights and your waves have passed over me.
{41:9} In the daylight, the Lord has ordered his mercy; and in the night, a canticle to him. With me is a prayer to the God of my life.
{41:10} I will say to God, “You are my supporter. Why have you forgotten me? And why do I walk in mourning, while my adversary afflicts me?”
{41:11} While my bones are being broken, my enemies, who trouble me, have reproached me. Meanwhile, they say to me every single day, “Where is your God?”
{41:12} My soul, why are you saddened? And why do you disquiet me? Hope in God, for I will still confess to him: the salvation of my countenance and my God.

[Psalm 42] (43)
{42:1} A Psalm of David. Judge me, O God, and discern my cause from that of a nation not holy; rescue me from a man unjust and deceitful.
{42:2} For you are God, my strength. Why have you rejected me? And why do I walk in sadness, while the adversary afflicts me?
{42:3} Send forth your light and your truth. They have guided me and led me, to your holy mountain and into your tabernacles.
{42:4} And I will enter, up to the altar of God, to God who enlivens my youthfulness. To you, O God, my God, I will confess upon a stringed instrument.
{42:5} Why are you sad, my soul? And why do you disquiet me? Hope in God, for I will still give praise to him: the salvation of my countenance and my God.

[Psalm 43] (44)
{43:1} Unto the end. To the sons of Korah, toward understanding.
{43:2} We have heard, O God, with our own ears. Our fathers have announced to us the work that you wrought in their days and in the days of antiquity.
{43:3} Your hand dispersed the Gentiles, and you transplanted them. You afflicted a people, and you expelled them.
{43:4} For they did not take possession of the land by their sword, and their own arm did not save them. But your right hand and your arm, and the light of your countenance did so, because you were pleased with them.
{43:5} You yourself are my king and my God, who commands the salvation of Jacob.
{43:6} With you, we will brandish a horn before our enemies; and in your name, we will spurn those rising up against us.
{43:7} For I will not hope in my bow, and my sword will not save me.
{43:8} For you have saved us from those who afflict us, and you have bewildered those who hate us.
{43:9} In God, we will give praise all day long; and in your name, we will confess forever.
{43:10} But now, you have rejected and bewildered us, and you will not go forth with our armies, O God.
{43:11} You have turned our back to our enemies, and those who hated us have plundered for themselves.
{43:12} You have given us over like sheep for food. You have scattered us among the Gentiles.
{43:13} You have sold your people without a price, and no great number was exchanged for them.
{43:14} You have set us as a disgrace to our neighbors, a scoff and a derision to those who are around us.
{43:15} You have set us as a parable among the Gentiles, a shaking of the head among the peoples.
{43:16} All day long my shame is before me, and the confusion of my face has covered me,
{43:17} before the voice of the reproacher and the commentator, before the face of the adversary and the pursuer.
{43:18} All these things have come upon us, yet we have not forgotten you, and we have not acted unjustly in your covenant.
{43:19} And our heart has not turned back. And you have not diverted our steps from your way.
{43:20} For you humbled us in a place of affliction, and the shadow of death has covered us.
{43:21} If we have forgotten the name of our God, and if we have extended our hands to a foreign god,
{43:22} will not God find this out? For he knows the secrets of the heart. For, because of you, we are being killed all day long. We are considered as sheep for the slaughter.
{43:23} Rise up. Why do you fall asleep, O Lord? Rise up, and do not reject us in the end.
{43:24} Why do you turn your face away, and why do you forget our needfulness and our tribulation?
{43:25} For our soul has been humbled into the dust. Our belly has been bound to the earth.
{43:26} Rise up, O Lord. Help us and redeem us, because of your name.

[Psalm 44] (45)
{44:1} Unto the end. For those who will be changed. To the sons of Korah, toward understanding. A Canticle for the Beloved.
{44:2} My heart has uttered a good word. I speak of my works to the king. My tongue is like the pen of a scribe who writes quickly.
{44:3} You are a brilliant form before the sons of men. Grace has been poured freely into your lips. Because of this, God has blessed you in eternity.
{44:4} Fasten your sword to your thigh, O most powerful one.
{44:5} With your splendor and your excellence extended, proceed prosperously, and reign for the sake of truth and meekness and justice, and so will your right hand lead you wondrously.
{44:6} Your arrows are sharp; the people will fall under you, with the hearts of the enemies of the king.
{44:7} Your throne, O God, is forever and ever. The scepter of your kingdom is a scepter of true aim.
{44:8} You have loved justice and hated iniquity. Because of this, God, your God, has anointed you, before your co-heirs, with the oil of gladness.
{44:9} Myrrh and balsam and cinnamon perfume your garments, from the houses of ivory. From these, they have delighted you:
{44:10} the daughters of kings in your honor. The queen assisted at your right hand, in clothing of gold, encircled with diversity.
{44:11} Listen, daughter, and see, and incline your ear. And forget your people and your father’s house.
{44:12} And the king will desire your beauty. For he is the Lord your God, and they will adore him.
{44:13} And the daughters of Tyre will entreat your countenance with gifts: all the rich men of the people.
{44:14} All the glory of the daughter of its king is inside, in golden fringes,
{44:15} clothed all around with diversities. After her, virgins will be led to the king. Her neighbors will be brought to you.
{44:16} They will be brought with gladness and exultation. They will be led into the temple of the king.
{44:17} For your fathers, sons have been born to you. You will establish them as leaders over all the earth.
{44:18} They will remember your name always, for generation after generation. Because of this, people will confess to you in eternity, even forever and ever.

[Psalm 45] (46)
{45:1} Unto the end. To the sons of Korah, for confidants. A Psalm.
{45:2} Our God is our refuge and strength, a helper in the tribulations that have greatly overwhelmed us.
{45:3} Because of this, we will not be afraid when the earth will be turbulent and the mountains will be transferred into the heart of the sea.
{45:4} They thundered, and the waters were stirred up among them; the mountains have been disturbed by his strength.
{45:5} The frenzy of the river rejoices the city of God. The Most High has sanctified his tabernacle.
{45:6} God is in its midst; it will not be shaken. God will assist it in the early morning.
{45:7} The peoples have been disturbed, and the kingdoms have been bowed down. He uttered his voice: the earth has been moved.
{45:8} The Lord of hosts is with us. The God of Jacob is our supporter.
{45:9} Draw near and behold the works of the Lord: what portents he has set upon the earth,
{45:10} carrying away wars even to the end of the earth. He will crush the bow and break the weapons, and he will burn the shield with fire.
{45:11} Be empty, and see that I am God. I will be exalted among the peoples, and I will be exalted upon the earth.
{45:12} The Lord of hosts is with us. The God of Jacob is our supporter.

[Psalm 46] (47)
{46:1} Unto the end. A Psalm for the sons of Korah.
{46:2} All nations, clap your hands. Shout joyfully to God with a voice of exultation.
{46:3} For the Lord is exalted and terrible: a great King over all the earth.
{46:4} He has subjected the peoples to us and subdued the nations under our feet.
{46:5} He has chosen us for his inheritance: the splendor of Jacob, whom he has loved.
{46:6} God ascends with jubilation, and the Lord with the voice of the trumpet.
{46:7} Sing psalms to our God, sing psalms. Sing psalms to our King, sing psalms.
{46:8} For God is the King of all the earth. Sing psalms wisely.
{46:9} God will reign over the peoples. God sits upon his holy throne.
{46:10} The leaders of the peoples have been gathered together by the God of Abraham. For the strong gods of the earth have been exceedingly exalted.

[Psalm 47] (48)
{47:1} A Canticle Psalm. To the sons of Korah, on the second Sabbath.
{47:2} The Lord is great and exceedingly praiseworthy, in the city of our God, on his holy mountain.
{47:3} Mount Zion is being founded with the exultation of the whole earth, on the north side, the city of the great king.
{47:4} In her houses, God will be known, since he will support her.
{47:5} For behold, the kings of the earth have been gathered together; they have convened as one.
{47:6} Such did they see, and they were astonished: they were disturbed, they were moved.
{47:7} Trembling took hold of them. In that place, their pains were that of a woman in labor.
{47:8} With a vehement spirit, you will crush the ships of Tarshish.
{47:9} As we have heard, so we have seen, in the city of the Lord of hosts, in the city of our God. God has founded it in eternity.
{47:10} We have received your mercy, O God, in the midst of your temple.
{47:11} According to your name, O God, so does your praise reach to the ends of the earth. Your right hand is full of justice.
{47:12} Let mount Zion rejoice, and let the daughters of Judah exult, because of your judgments, O Lord.
{47:13} Encircle Zion and embrace her. Discourse in her towers.
{47:14} Set your hearts on her virtue. And distribute her houses, so that you may discourse of it in another generation.
{47:15} For this is God, our God, in eternity and forever and ever. He will rule us forever.

[Psalm 48] (49)
{48:1} Unto the end. A Psalm to the sons of Korah.
{48:2} Hear these things, all nations. Pay attention, all inhabitants of the world:
{48:3} whoever is earth-born, you sons of men, together as one, the rich and the poor.
{48:4} My mouth will speak wisdom, and the meditation of my heart will speak prudence.
{48:5} I will incline my ear to a parable. I will open my case with the psaltery.
{48:6} Why should I fear in the evil day? The iniquity at my heel will surround me.
{48:7} Those who trust in their own strength and who glory in the multitude of their riches,
{48:8} no brother redeems, nor will man buy back. He will not give to God his appeasement,
{48:9} nor the price for the redemption of his soul. And he will labor continuously,
{48:10} and he will still live, until the end.
{48:11} He will not see death, when he sees the wise dying: the foolish and the senseless will perish together. And they will leave their riches to strangers.
{48:12} And their sepulchers will be their houses forever, their tabernacles from generation to generation. They have called their names in their own lands.
{48:13} And man, when he was held in honor, did not understand. He has been compared to the senseless beasts, and he has become like them.
{48:14} This way of theirs is a scandal to them. And afterwards, they will delight in their mouth.
{48:15} They have been placed in Hell like sheep. Death will feed on them. And the just will have dominion over them in the morning. And their help will grow old in Hell for their glory.
{48:16} Even so, truly God will redeem my soul from the hand of Hell, when he will receive me.
{48:17} Do not be afraid, when a man will have been made rich, and when the glory of his house will have been multiplied.
{48:18} For when he dies, he will take nothing away, and his glory will not descend with him.
{48:19} For his soul will be blessed in his lifetime, and he will admit to you when you do good to him.
{48:20} He will even enter with the progeny of his fathers, but, even in eternity, he will not see the light.
{48:21} Man, when he was in honor, did not understand. He has been compared to the senseless beasts, and he has become like them.

[Psalm 49] (50)
{49:1} A Psalm of Asaph. The God of gods, the Lord has spoken, and he has called the earth, from the rising of the sun even to its setting,
{49:2} from Zion, the brilliance of his beauty.
{49:3} God will arrive manifestly. Our God also will not keep silence. A fire will flare up in his sight, and a mighty tempest will surround him.
{49:4} He will call to heaven from above, and to the earth, to discern his people.
{49:5} Gather his holy ones to him, you who order his covenant above sacrifices.
{49:6} And the heavens will announce his justice. For God is the judge.
{49:7} Listen, my people, and I will speak. Listen, Israel, and I will testify for you. I am God, your God.
{49:8} I will not reprove you for your sacrifices. Moreover, your holocausts are ever in my sight.
{49:9} I will not accept calves from your house, nor he-goats from your flocks.
{49:10} For all the wild beasts of the forest are mine: the cattle on the hills and the oxen.
{49:11} I know all the flying things of the air, and the beauty of the field is with me.
{49:12} If I should be hungry, I would not tell you: for the whole world is mine, and all its plentitude.
{49:13} Shall I gnaw on the flesh of bulls? Or would I drink the blood of goats?
{49:14} Offer to God the sacrifice of praise, and pay your vows to the Most High.
{49:15} And call upon me in the day of tribulation. I will rescue you, and you will honor me.
{49:16} But to the sinner, God has said: Why do you discourse on my justices, and take up my covenant through your mouth?
{49:17} Truly, you have hated discipline, and you have cast my sermons behind you.
{49:18} If you saw a thief, you ran with him, and you have placed your portion with adulterers.
{49:19} Your mouth has abounded with malice, and your tongue has concocted deceits.
{49:20} Sitting, you spoke against your brother, and you set up a scandal against your mother’s son.
{49:21} These things you have done, and I was silent. You thought, unjustly, that I ought to be like you. But I will reprove you, and I will set myself against your face.
{49:22} Understand these things, you who forget God; lest at any time, he might quickly take you away, and there would be no one to rescue you.
{49:23} The sacrifice of praise will honor me. And in that place is the journey by which I will reveal to him the salvation of God.

[Psalm 50] (51)
{50:1} Unto the end. A Psalm of David,
{50:2} when Nathan the prophet came to him, after he went to Bathsheba.
{50:3} Be merciful to me, O God, according to your great mercy. And, according to the plentitude of your compassion, wipe out my iniquity.
{50:4} Wash me once again from my iniquity, and cleanse me from my sin.
{50:5} For I know my iniquity, and my sin is ever before me.
{50:6} Against you only have I sinned, and I have done evil before your eyes. And so, you are justified in your words, and you will prevail when you give judgment.
{50:7} For behold, I was conceived in iniquities, and in sinfulness did my mother conceive me.
{50:8} For behold, you have loved truth. The obscure and hidden things of your wisdom, you have manifested to me.
{50:9} You will sprinkle me with hyssop, and I will be cleansed. You will wash me, and I will be made whiter than snow.
{50:10} In my hearing, you will grant gladness and rejoicing. And the bones that have been humbled will exult.
{50:11} Turn your face away from my sins, and erase all my iniquities.
{50:12} Create a clean heart in me, O God. And renew an upright spirit within my inmost being.
{50:13} Do not cast me away from your face; and do not take your Holy Spirit from me.
{50:14} Restore to me the joy of your salvation, and confirm me with an unsurpassed spirit.
{50:15} I will teach the unjust your ways, and the impious will be converted to you.
{50:16} Free me from blood, O God, the God of my salvation, and my tongue will extol your justice.
{50:17} O Lord, you will open my lips, and my mouth will announce your praise.
{50:18} For if you had desired sacrifice, I would certainly have given it, but with holocausts, you will not be delighted.
{50:19} A crushed spirit is a sacrifice to God. A contrite and humbled heart, O God, you will not spurn.
{50:20} Act kindly, Lord, in your good will toward Zion, so that the walls of Jerusalem may be built up.
{50:21} Then you will accept the sacrifice of justice, oblations, and holocausts. Then they will lay calves upon your altar.

[Psalm 51] (52)
{51:1} Unto the end. The understanding of David.
{51:2} When Doeg the Edomite came and reported to Saul, David went to the house of Ahimelech.
{51:3} Why do you glory in malice, you who are powerful in iniquity?
{51:4} All day long your tongue thinks up injustice. Like a sharp razor, you have wrought deceit.
{51:5} You have loved malice above goodness, and iniquity more than speaking righteousness.
{51:6} You have loved all precipitous words, you deceitful tongue.
{51:7} Because of this, God will destroy you in the end. He will pull you up, and he will remove you from your tabernacle and your root from the land of the living.
{51:8} The just will see and be afraid, and they will laugh over him, and say:
{51:9} “Behold the man who did not set God as his helper. But he hoped in the multitude of his riches, and so he prevailed in his emptiness.”
{51:10} But I, like a fruitful olive tree in the house of God, have hoped in the mercy of God unto eternity, and forever and ever.
{51:11} I will confess to you forever, because you have accomplished it. And I will wait on your name, for it is good in the sight of your saints.

[Psalm 52] (53)
{52:1} Unto the end. For Mahalath: the thoughts of David. The fool has said in his heart, “There is no God.”
{52:2} They were corrupted, and they became abominable with iniquities. There is no one who does good.
{52:3} God gazed down from heaven on the sons of men, to see if there were any who were considering or seeking God.
{52:4} All have gone astray; together they have become useless. There is no one who does good; there is not even one.
{52:5} Will they never learn: all those who work iniquity, who devour my people like a meal of bread?
{52:6} They have not called upon God. In that place, they have trembled in fear, where there was no fear. For God has scattered the bones of those who please men. They have been confounded, because God has spurned them.
{52:7} Who will grant from Zion the salvation of Israel? Jacob will exult, when God will convert the captivity of his people; and Israel will rejoice.

[Psalm 53] (54)
{53:1} Unto the end. In verses, the understanding of David,
{53:2} when the Ziphites had arrived and they said to Saul, “Has not David been hidden with us?”
{53:3} Save me, O God, by your name, and judge me in your virtue.
{53:4} O God, listen to my prayer. Pay attention to the words of my mouth.
{53:5} For strangers have risen up against me, and the strong have sought my soul. And they have not set God before their eyes.
{53:6} For behold, God is my helper, and the Lord is the protector of my soul.
{53:7} Turn back the evils upon my adversaries, and ruin them by your truth.
{53:8} I will freely sacrifice to you, and I will confess your name, O God, because it is good.
{53:9} For you have quickly rescued me from all tribulation, and my eye has looked down upon my enemies.

[Psalm 54] (55)
{54:1} Unto the end. In verses, the understanding of David.
{54:2} Listen to my prayer, O God, and despise not my supplication.
{54:3} Be attentive to me, and heed me. I have been grieved in my training, and I have been disturbed
{54:4} at the voice of the adversary and at the tribulation of the sinner. For they have diverted iniquities toward me, and they have been harassing me with rage.
{54:5} My heart has become disturbed within me, and the dread of death has fallen over me.
{54:6} Fear and trembling have overwhelmed me, and darkness has buried me.
{54:7} And I said, “Who will give me wings like the dove, so that I may fly away and take rest?”
{54:8} Behold, I have fled far away, and I linger in solitude.
{54:9} I waited for him who saved me from a weak-minded spirit and from a tempest.
{54:10} Cast them down, O Lord, and divide their tongues. For I have seen iniquity and contradiction in the city.
{54:11} Day and night, iniquity will surround it upon its walls, and hardship is in its midst,
{54:12} with injustice. And usury and deceit have not fallen away from its streets.
{54:13} For if my enemy had spoken evil about me, certainly, I would have sustained it. And if he who hated me had been speaking great things against me, I would perhaps have hidden myself from him.
{54:14} Truly, you are a man of one mind: my leader and my acquaintance,
{54:15} who took sweet food together with me. In the house of God, we walked side-by-side.
{54:16} Let death come upon them, and let them descend alive into Hellfire. For there is wickedness in their dwellings, in their midst.
{54:17} But I have cried out to God, and the Lord will save me.
{54:18} Evening and morning and midday, I will discourse and announce, and he will heed my voice.
{54:19} He will redeem my soul in peace from those who draw near to me. For, among the many, they were with me.
{54:20} God will hear, and He who is before time will humble them. For there is no change with them, and they have not feared God.
{54:21} He has stretched forth his hand in retribution. They have contaminated his covenant.
{54:22} They were divided by the wrath of his countenance, and his heart has drawn near. His words are smoother than oil, and they are arrows.
{54:23} Cast your cares upon the Lord, and he will nurture you. He will not allow the just to be tossed about forever.
{54:24} Truly, O God, you will lead them away into the well of death. Bloody and deceitful men will not divide their days in half. But I will hope in you, O Lord.

[Psalm 55] (56)
{55:1} Unto the end. For the people who have become far removed from the Sacred. Of David, with the inscription of a title, when the Philistines held him in Gath.
{55:2} Have mercy on me, O God, because man has trampled over me. All day long, he has afflicted me by fighting against me.
{55:3} My enemies have trampled over me all day long. For those who make war against me are many.
{55:4} From the height of the day, I will be afraid. But truly, I will hope in you.
{55:5} In God, I will praise my words. In God, I have put my trust. I will not fear what flesh can do to me.
{55:6} All day long, they curse my words. All their intentions are for evil against me.
{55:7} They will dwell and hide themselves. They will watch my heel, just as they waited for my soul;
{55:8} because of this, nothing will save them. In your anger, you will crush the people.
{55:9} O God, I have announced my life to you. You have placed my tears in your sight, and even in your promise.
{55:10} Then my enemies will be turned back. On whatever day that I call upon you, behold, I know that you are my God.
{55:11} In God, I will praise the word. In the Lord, I will praise his speech. In God, I have hoped. I will not fear what man can do to me.
{55:12} My vows to you, O God, are in me. I will repay them. Praises be to you.
{55:13} For you have rescued my soul from death and my feet from slipping, so that I may be pleasing in the sight of God, in the light of the living.

[Psalm 56] (57)
{56:1} Unto the end. May you not destroy. Of David, with the inscription of a title, when he fled from Saul into a cave.
{56:2} Be merciful to me, O God, be merciful to me. For my soul trusts in you. And I will hope in the shadow of your wings, until iniquity passes away.
{56:3} I will cry out to God Most High, to God who has been kind to me.
{56:4} He sent from heaven and freed me. He has surrendered into disgrace those who trampled me. God has sent his mercy and his truth.
{56:5} And he has rescued my soul from the midst of the young lions. I slept troubled. The sons of men: their teeth are weapons and arrows, and their tongue is a sharp sword.
{56:6} Be exalted above the heavens, O God, and your glory above all the earth.
{56:7} They prepared a snare for my feet, and they bowed down my soul. They dug a pit before my face, yet they have fallen into it.
{56:8} My heart is prepared, O God, my heart is prepared. I will sing, and I will compose a psalm.
{56:9} Rise up, my glory. Rise up, psaltery and harp. I will arise in early morning.
{56:10} I will confess to you, O Lord, among the peoples. I will compose a psalm to you among the nations.
{56:11} For your mercy has been magnified, even to the heavens, and your truth, even to the clouds.
{56:12} Be exalted above the heavens, O God, and your glory above all the earth.

[Psalm 57] (58)
{57:1} Unto the end. May you not destroy. Of David, with the inscription of a title.
{57:2} If, truly and certainly, you speak justice, then judge what is right, you sons of men.
{57:3} For, even in your heart, you work iniquity. Your hands construct injustice on the earth.
{57:4} Sinners have become foreigners from the womb; they have gone astray from conception. They have been speaking falsehoods.
{57:5} Their fury is similar to that of a serpent; it is like a deaf asp, who even blocks her ears,
{57:6} who will not listen to the voice of charmers, nor even to the enchanter who chants wisely.
{57:7} God will crush their teeth within their own mouth. The Lord will break the molars of the lions.
{57:8} They will come to nothing, like water flowing away. He has aimed his bow, while they are being weakened.
{57:9} Like wax that flows, they will be carried away. Fire has fallen upon them, and they will not see the sun.
{57:10} Before your thorns could know the brier, he consumes them alive, as if in rage.
{57:11} The just one will rejoice when he sees vindication. He will wash his hands in the blood of the sinner.
{57:12} And man will say, “If the just one is fruitful, then, truly, there is a God judging them on earth.”

[Psalm 58] (59)
{58:1} Unto the end. May you not destroy. Of David, with the inscription of a title, when Saul sent and watched his house, in order to execute him.
{58:2} Rescue me from my enemies, my God, and free me from those who rise up against me.
{58:3} Rescue me from those who work iniquity, and save me from men of blood.
{58:4} For behold, they have seized my soul. The strong have rushed upon me.
{58:5} And it is neither my iniquity, nor my sin, O Lord. I have run and gone directly, without iniquity.
{58:6} Rise up to meet me, and see: even you, O Lord, the God of hosts, the God of Israel. Reach out to visit all nations. Do not take pity on all those who work iniquity.
{58:7} They will return toward evening, and they will suffer hunger like dogs, and they will wander around the city.
{58:8} Behold, they will speak with their mouth, and a sword is in their lips: “For who has heard us?”
{58:9} And you, O Lord, will laugh at them. You will lead all the Gentiles to nothing.
{58:10} I will guard my strength toward you, for you are God, my supporter.
{58:11} My God, his mercy will precede me.
{58:12} God will oversee my enemies for me. Do not slay them, lest at times my people may forget them. Scatter them by your virtue. And depose them, O Lord, my protector,
{58:13} by the offense of their mouth and by the speech of their lips. And may they be caught in their arrogance. And, for their cursing and lying, they will be made known
{58:14} at the consummation, in the fury of the consummation, and so they will be no more. And they will know that God will rule over Jacob, even to the ends of the earth.
{58:15} They will return toward evening, and they will suffer hunger like dogs, and they will wander around the city.
{58:16} They will be dispersed in order to gnaw, and truly, when they will not have been satisfied, they will murmur.
{58:17} But I will sing your strength, and I will extol your mercy, in the morning. For you have been my supporter and my refuge in the day of my tribulation.
{58:18} To you, my helper, I will sing psalms. For you are God, my supporter. My God is my mercy.

[Psalm 59] (60)
{59:1} Unto the end. For those who will be changed, with the inscription of a title, of David himself, for instruction:
{59:2} when he set fire to Mesopotamia of Syria and Sobal, and Joab turned back and struck Idumea, in the valley of the salt pits, twelve thousand men.
{59:3} O God, you have rejected us, and you have ruined us. You became angry, and yet you have been merciful to us.
{59:4} You have moved the earth, and you have disturbed it. Heal its breaches, for it has been moved.
{59:5} You have revealed to your people difficulties. You have made us drink the wine of remorse.
{59:6} You have given a warning sign to those who fear you, so that they may flee from before the face of the bow, so that your beloved may be delivered.
{59:7} Save me with your right hand, and hear me.
{59:8} God has spoken in his holy place: I will rejoice, and I will divide Shechem, and I will measure the steep valley of the tabernacles.
{59:9} Gilead is mine, and Manasseh is mine. And Ephraim is the strength of my head. Judah is my king.
{59:10} Moab is the cooking pot of my hope. Into Idumea, I will extend my shoe. To me, the foreigners have been made subject.
{59:11} Who will lead me into the fortified city? Who will lead me all the way to Idumea?
{59:12} Will not you, O God, who has rejected us? And will not you, O God, go out with our armies?
{59:13} Grant us help from tribulation. For salvation from man is empty.
{59:14} In God, we will act virtuously. And those who trouble us, he will lead to nothing.

[Psalm 60] (61)
{60:1} Unto the end. With hymns, of David.
{60:2} O God, pay attention to my supplication. Be attentive to my prayer.
{60:3} I cried out to you from the ends of the earth. When my heart was in anguish, you exalted me on a rock. You have led me,
{60:4} for you have been my hope, a tower of strength before the face of the enemy.
{60:5} I will dwell in your tabernacle forever. I will be protected under the cover of your wings.
{60:6} For you, my God, have listened to my prayer. You have granted an inheritance to those who fear your name.
{60:7} You will add days to the days of the king, to his years, even to the time of generation after generation.
{60:8} He remains in eternity, in the sight of God. Who will long for his mercy and truth?
{60:9} So I will compose a psalm to your name, forever and ever, so that I may repay my vows from day to day.

[Psalm 61] (62)
{61:1} Unto the end. For Jeduthun. A Psalm of David.
{61:2} Will my soul not be subject to God? For from him is my salvation.
{61:3} Yes, he himself is my God and my salvation. He is my supporter; I will be moved no more.
{61:4} How is it that you rush against a man? Every one of you puts to death, as if you were pulling down a ruined wall, leaning over and falling apart.
{61:5} So, truly, they intended to reject my price. I ran in thirst. They blessed with their mouth and cursed with their heart.
{61:6} Yet, truly, my soul will be subject to God. For from him is my patience.
{61:7} For he is my God and my Savior. He is my helper; I will not be expelled.
{61:8} In God is my salvation and my glory. He is the God of my help, and my hope is in God.
{61:9} All peoples gathered together: trust in him. Pour out your hearts in his sight. God is our helper for eternity.
{61:10} So, truly, the sons of men are untrustworthy. The sons of men are liars in the scales, so that, by emptiness, they may deceive among themselves.
{61:11} Do not trust in iniquity, and do not desire plunder. If riches flow toward you, do not be willing to set your heart on them.
{61:12} God has spoken once. I have heard two things: that power belongs to God,
{61:13} and that mercy belongs to you, O Lord. For you will repay each one according to his works.

[Psalm 62] (63)
{62:1} A Psalm of David, when he was in the desert of Idumea.
{62:2} O God, my God: to you, I keep vigil until first light. For you, my soul has thirsted, to you my body, in so many ways.
{62:3} By a deserted land, both inaccessible and waterless, so I have appeared in the sanctuary before you, in order to behold your virtue and your glory.
{62:4} For your mercy is better than life itself. It is you my lips will praise.
{62:5} So will I bless you in my life, and I will lift up my hands in your name.
{62:6} Let my soul be filled, as if with marrow and fatness; and my mouth will give praise with exultant lips.
{62:7} When I have remembered you on my bed in the morning, I will meditate on you.
{62:8} For you have been my helper. And I will exult under the cover of your wings.
{62:9} My soul has clung close to you. Your right hand has supported me.
{62:10} Truly, these ones have sought my soul in vain. They will enter into the lower parts of the earth.
{62:11} They will be delivered into the hand of the sword. They will be the portions of foxes.
{62:12} Truly, the king will rejoice in God: all those who swear by him will be praised, because the mouth of those who speak iniquity has been blocked.

[Psalm 63] (64)
{63:1} Unto the end. A Psalm of David.
{63:2} Hear, O God, my prayer of supplication. Rescue my soul from the fear of the enemy.
{63:3} You have protected me from the assembly of the malignant, from a multitude of workers of iniquity.
{63:4} For they have sharpened their tongues like a sword; they have formed their bow into a bitter thing,
{63:5} so that they may shoot arrows from hiding at the immaculate.
{63:6} They will suddenly shoot arrows at him, and they will not be afraid. They are resolute in their wicked talk. They have discussed hidden snares. They have said, “Who will see them?”
{63:7} They have been searching carefully for iniquities. Their exhaustive search has failed. Man will approach with a deep heart,
{63:8} and God will be exalted. The arrows of the little ones have become their wounds,
{63:9} and their tongues have been weakened against them. All those who saw them have been troubled;
{63:10} and every man was afraid. And they announced the works of God, and they understood his acts.
{63:11} The just will rejoice in the Lord, and they will hope in him. And all the upright of heart will be praised.

[Psalm 64] (65)
{64:1} Unto the end. A Psalm of David. A Canticle of Jeremiah and Ezekiel to the people of the captivity, when they began to go into exile.
{64:2} O God, a hymn adorns you in Zion, and a vow will be repaid to you in Jerusalem.
{64:3} Hear my prayer: all flesh will come to you.
{64:4} Words of iniquity have prevailed over us. And you will pardon our impieties.
{64:5} Blessed is he whom you have chosen and taken up. He will dwell in your courts. We will be filled with the good things of your house. Holy is your temple:
{64:6} wonderful in equity. Hear us, O God our Savior, the hope of all the ends of the earth and of a sea far away.
{64:7} You prepare the mountains in your virtue, wrapped with power.
{64:8} You stir up the depths of the sea, the noise of its waves. The nations will be troubled,
{64:9} and those who dwell at the limits will be afraid, before your signs. You will make the passing of morning and evening enjoyable.
{64:10} You have visited the earth, and you have saturated it. You have enriched it in so many ways. The river of God has been filled with water. You have prepared their food. For thus is its preparation.
{64:11} Drench its streams, multiply its fruits; it will spring up and rejoice in its showers.
{64:12} You will bless the crown of the year with your kindness, and your fields will be filled with abundance.
{64:13} The beauty of the desert will fatten, and the hills will be wrapped with exultation.
{64:14} The rams of the sheep have been clothed, and the valleys will abound with grain. They will cry out; yes, they will even utter a hymn.

[Psalm 65] (66)
{65:1} Unto the end. A Canticle Psalm of the Resurrection. Shout joyfully to God, all the earth.
{65:2} Proclaim a psalm to his name. Give glory to his praise.
{65:3} Exclaim to God, “How terrible are your works, O Lord!” According to the fullness of your virtue, your enemies will speak lies about you.
{65:4} Let all the earth adore you and sing psalms to you. May it sing a psalm to your name.
{65:5} Draw near and see the works of God, who is terrible in his counsels over the sons of men.
{65:6} He converts the sea into dry land. They will cross the river on foot. There, we will rejoice in him.
{65:7} He rules by his virtue for eternity. His eyes gaze upon the nations. May those who exasperate him, not be exalted in themselves.
{65:8} Bless our God, you Gentiles, and make the voice of his praise be heard.
{65:9} He has set my soul toward life, and he has granted that my feet may not be shaken.
{65:10} For you, O God, have tested us. You have examined us by fire, just as silver is examined.
{65:11} You have led us into a snare. You have placed tribulations on our back.
{65:12} You have set men over our heads. We have crossed through fire and water. And you have led us out to refreshment.
{65:13} I will enter your house with holocausts. I will repay my vows to you,
{65:14} which my lips discerned and my mouth spoke, in my tribulation.
{65:15} I will offer to you holocausts full of marrow, with the burnt offerings of rams. I will offer to you bulls as well as goats.
{65:16} Draw near and listen, all you who fear God, and I will describe to you how much he has done for my soul.
{65:17} I cried out to him with my mouth, and I extolled him under my breath.
{65:18} If I have seen iniquity in my heart, the Lord would not heed me.
{65:19} And yet, God has heeded me and he has attended to the voice of my supplication.
{65:20} Blessed is God, who has not removed my prayer, nor his mercy, from me.

[Psalm 66] (67)
{66:1} Unto the end. With hymns, a Canticle Psalm of David.
{66:2} May God have mercy on us and bless us. May he shine his countenance upon us, and may he have mercy on us.
{66:3} So may we know your way upon the earth, your salvation among all nations.
{66:4} Let the peoples confess to you, O God. Let all the peoples confess to you.
{66:5} May the nations rejoice and exult. For you judge the peoples with equity, and you direct the nations on earth.
{66:6} Let the peoples confess to you, O God. Let all the peoples confess to you.
{66:7} The earth has provided her fruit. May God, our God, bless us.
{66:8} May God bless us, and may all the ends of the earth fear him.

[Psalm 67] (68)
{67:1} Unto the end. A Canticle Psalm of David himself.
{67:2} May God rise up, and may his enemies be scattered, and may those who hate him flee from before his face.
{67:3} Just as smoke vanishes, so may they vanish. Just as wax flows away before the face of fire, so may sinners pass away before the face of God.
{67:4} And so, let the just feast, and let them exult in the sight of God and be delighted in gladness.
{67:5} Sing to God, sing a psalm to his name. Make a path for him, who ascends over the west. The Lord is his name. Exult in his sight; they will be stirred up before his face,
{67:6} the father of orphans and the judge of widows. God is in his holy place.
{67:7} It is God who makes men dwell in a house under one custom. He leads out those who are strongly bound, and similarly, those who exasperate, who dwell in sepulchers.
{67:8} O God, when you departed in the sight of your people, when you passed through the desert,
{67:9} the earth was moved, for the heavens rained down before the face of the God of Sinai, before the face of the God of Israel.
{67:10} You will set aside for your inheritance, O God, a willing rain. And though it was weak, truly, you have made it perfect.
{67:11} Your animals will dwell in it. O God, in your sweetness, you have provided for the poor.
{67:12} The Lord will give the word to evangelizers, along with great virtue.
{67:13} The King of virtue is beloved among the beloved. And the beauty of the house will divide spoils.
{67:14} If you take your rest in the midst of the clergy, you will be like a dove whose wings are covered with fine silver and edged with pale gold.
{67:15} When heaven discerns kings to be over her, they will be whitened with the snows of Zalmon.
{67:16} The mountain of God is a fat mountain, a dense mountain, a thick mountain.
{67:17} So then, why are you distrustful of dense mountains? The mountain on which God is well pleased to dwell, even there, the Lord will dwell until the end.
{67:18} The chariot of God is ten thousand fold: thousands rejoice. The Lord is with them in Sinai, in the holy place.
{67:19} You have ascended on high; you have taken captivity captive. You have accepted gifts among men. For even those who do not believe dwell with the Lord God.
{67:20} Blessed is the Lord, day after day. The God of our salvation will make our journey prosper for us.
{67:21} Our God is the God who will bring about our salvation, and our Lord is the Lord who has brought an end to death.
{67:22} So then, truly, God will break the heads of his enemies, the hairy skull of those who wander around in their offenses.
{67:23} The Lord said: I will turn them away from Bashan, I will turn them into the depths of the sea,
{67:24} so that your feet may be soaked in the blood of your enemies, so that the tongue of your dogs may be soaked with the same.
{67:25} O God, they have seen your arrival, the arrival of my God, of my king who is in a holy place.
{67:26} The leaders went ahead, united with the singers of psalms, in the midst of girls playing on timbrels.
{67:27} In the churches, bless the Lord God from the fountains of Israel.
{67:28} In that place, Benjamin is a youth in ecstasy of mind. The leaders of Judah are their governors: the leaders of Zebulun, the leaders of Naphtali.
{67:29} Command by your virtue, O God. Confirm in this place, O God, what you have wrought in us.
{67:30} Before your temple in Jerusalem, kings will offer gifts to you.
{67:31} Rebuke the wild beasts of the reeds, a congregation of bulls with the cows of the people, for they seek to exclude those who have been tested like silver. Scatter the nations that are pleased by wars.
{67:32} Ambassadors will come out of Egypt. Ethiopia will offer in advance her hands to God.
{67:33} Sing to God, O kingdoms of the earth. Sing psalms to the Lord. Sing psalms to God.
{67:34} He ascends, up to the heaven of the heavens, toward the east. Behold, he will utter his voice, the voice of virtue.
{67:35} Give glory to God beyond Israel. His magnificence and his virtue is in the clouds.
{67:36} God is wonderful in his saints. The God of Israel himself will give virtue and strength to his people. Blessed is God.

[Psalm 68] (69)
{68:1} Unto the end. For those who will be changed: of David.
{68:2} Save me, O God, for the waters have entered, even to my soul.
{68:3} I have become stuck in a deep quagmire, and there is no firm footing. I have arrived at the height of the sea, and a tempest has overwhelmed me.
{68:4} I have endured hardships, while crying out. My jaws have become hoarse; my eyes have failed. Meanwhile, I hope in my God.
{68:5} Those who hate me without cause have been multiplied beyond the hairs of my head. My enemies, who persecuted me unjustly, have been strengthened. Then I was required to pay for what I did not take.
{68:6} O God, you know my foolishness, and my offenses have not been hidden from you.
{68:7} Let those who wait for you, O Lord, the Lord of hosts, not be shamed in me. Let those who seek you, O God of Israel, not be confounded over me.
{68:8} For because of you, I have endured reproach; confusion has covered my face.
{68:9} I have become a stranger to my brothers and a sojourner to the sons of my mother.
{68:10} For zeal for your house has consumed me, and the reproaches of those who reproached you have fallen upon me.
{68:11} And I covered my soul with fasting, and it has become a reproach to me.
{68:12} And I put on a haircloth as my garment, and I became a parable to them.
{68:13} Those who sat at the gate spoke against me, and those who drank wine made me their song.
{68:14} But as for me, truly, my prayer is to you, O Lord. This time has pleased you well, O God. In the multitude of your mercy, in the truth of your salvation, hear me.
{68:15} Rescue me from the quagmire, so that I may not become trapped. Free me from those who hate me and from deep waters.
{68:16} Do not allow the tempest of water to submerge me, nor the deep to absorb me. And do not allow the well to close in on me.
{68:17} Hear me, O Lord, for your mercy is kind. Look upon me, according to the fullness of your compassion.
{68:18} And do not turn your face away from your servant, for I am in trouble: heed me quickly.
{68:19} Attend to my soul, and free it. Rescue me, because of my enemies.
{68:20} You know my reproach, and my confusion, and my reverence.
{68:21} All those who trouble me are in your sight; my heart has anticipated reproach and misery. And I sought for one who might grieve together with me, but there was no one, and for one who might console me, and I found no one.
{68:22} And they gave me gall for my food. And in my thirst, they gave me vinegar to drink.
{68:23} Let their table be a snare before them, and a retribution, and a scandal.
{68:24} Let their eyes be darkened, so that they may not see, and may their back always be crooked.
{68:25} Pour out your indignation upon them, and may the fury of your anger take hold of them.
{68:26} May their dwelling place be deserted, and may there be no one who dwells in their tabernacles.
{68:27} For they persecuted whomever you struck. And they have added to the grief of my wounds.
{68:28} Assign an iniquity upon their iniquity, and may they not enter into your justice.
{68:29} Delete them from the Book of the Living, and let them not be written down with the just.
{68:30} I am poor and sorrowful, but your salvation, O God, has taken me up.
{68:31} I will praise the name of God with a canticle, and I will magnify him with praise.
{68:32} And it will please God more than a new calf producing horns and hoofs.
{68:33} Let the poor see and rejoice. Seek God, and your soul will live.
{68:34} For the Lord has heard the poor, and he has not despised his prisoners.
{68:35} Let the heavens and the earth praise him: the sea, and everything that crawls in it.
{68:36} For God will save Zion, and the cities of Judah will be built up. And they will dwell there, and they will acquire it by inheritance.
{68:37} And the offspring of his servants will possess it; and those who love his name will dwell in it.

[Psalm 69] (70)
{69:1} Unto the end. A Psalm of David, in remembrance that the Lord had saved him.
{69:2} O God, reach out to help me. O Lord, hasten to assist me.
{69:3} May those who seek my soul be confounded and awed.
{69:4} May those who wish evils upon me be turned back and blush with shame. May they be turned away immediately, blushing with shame, who say to me: “Well, well.”
{69:5} Let all who seek you exult and rejoice in you, and let those who love your salvation forever say: “The Lord be magnified.”
{69:6} I am truly destitute and poor. O God, assist me. You are my helper and my deliverer. O Lord, do not delay.

[Psalm 70] (71)
{70:1} A Psalm of David. Of the sons of Jonadab and the former captives. In you, O Lord, I have hoped; do not let me be brought to ruin forever.
{70:2} Free me by your justice, and rescue me. Incline your ear to me, and save me.
{70:3} Be a God of protection and a place of strength for me, so that you may accomplish my salvation. For you are my firmament and my refuge.
{70:4} Rescue me, O my God, from the hand of the sinner, and from the hand of the unjust and those who act against the law.
{70:5} For you, O Lord, are my patience: my hope from my youth, O Lord.
{70:6} In you, I have been confirmed from conception. From my mother’s womb, you are my protector. In you, I will sing forever.
{70:7} I have become to many as if I were a portent, but you are a strong helper.
{70:8} Let my mouth be filled with praise, so that I may sing your glory, your greatness all day long.
{70:9} Do not cast me off in the time of old age. Do not abandon me when my strength will fail.
{70:10} For my enemies have spoken against me. And those who watched for my soul have taken counsel as one,
{70:11} saying: “God has abandoned him. Pursue and overtake him. For there is no one to rescue him.”
{70:12} O God, do not be far from me. O my God, provide for my assistance.
{70:13} May they be confounded, and may they fail, who drag down my soul. Let them be covered with confusion and shame, who seek evils for me.
{70:14} But I will always have hope. And I will add more to all your praise.
{70:15} My mouth will announce your justice, your salvation all day long. For I have not known letters.
{70:16} I will enter into the powers of the Lord. I will be mindful of your justice alone, O Lord.
{70:17} You have taught me from my youth, O God. And so I will declare your wonders continuously,
{70:18} even in old age and with grey hairs. Do not abandon me, O God, while I announce your arm to every future generation: your power
{70:19} and your justice, O God, even to the highest great things that you have done. O God, who is like you?
{70:20} How great is the tribulation that you have revealed to me: very great and evil. And so, turning back, you have brought me to life, and you have led me back again from the abyss of the earth.
{70:21} You have multiplied your magnificence. And so, turning back to me, you have consoled me.
{70:22} Therefore, I will confess your truth to you, with the instruments of the Psalter. O God, I will sing psalms to you with stringed instruments, O Holy One of Israel.
{70:23} My lips will exult, when I sing to you, and also my soul, which you have redeemed.
{70:24} And even my tongue will meditate on your justice all day long, when those who seek evils for me have been confounded and set in awe.

[Psalm 71] (72)
{71:1} A Psalm according to Solomon.
{71:2} Give your judgment, O God, to the king, and your justice to the king’s son, to judge your people with justice and your poor with judgment.
{71:3} Let the mountains take up peace for the people, and the hills, justice.
{71:4} He will judge the poor of the people, and he will bring salvation to the sons of the poor. And he will humble the false accuser.
{71:5} And he will remain, with the sun and before the moon, from generation to generation.
{71:6} He will descend like rain upon fleece, and like showers showering upon the earth.
{71:7} In his days, justice will rise like the sun, with abundance of peace, until the moon is taken away.
{71:8} And he will rule from sea to sea and from the river to the limits of the whole world.
{71:9} In his sight, the Ethiopians will fall prostrate, and his enemies will lick the ground.
{71:10} The kings of Tarshish and the islands will offer gifts. The kings of Arabia and of Seba will bring gifts.
{71:11} And all the kings of the earth shall adore him. All nations will serve him.
{71:12} For he will free the poor from the powerful, and the poor one who has no helper.
{71:13} He will spare the poor and the indigent, and he will bring salvation to the souls of the poor.
{71:14} He will redeem their souls from usuries and from iniquity, and their names shall be honorable in his sight.
{71:15} And he will live, and to him will be given from the gold of Arabia, and by him they will always adore. They will bless him all day long.
{71:16} And there will be a firmament on earth, at the summits of mountains: its fruits will be extolled above Lebanon, and those of the city will flourish like the grass of the earth.
{71:17} May his name be blessed forever; may his name remain before the sun. And all the tribes of the earth will be blessed in him. All nations will magnify him.
{71:18} Blessed is the Lord, God of Israel, who alone does wondrous things.
{71:19} And blessed is the name of his majesty in eternity. And all the earth will be filled with his majesty. Amen. Amen.
{71:20} The praises of David, the son of Jesse, have reached an end.

[Psalm 72] (73)
{72:1} A Psalm of Asaph. How good is God to Israel, to those who are upright in heart.
{72:2} But my feet were nearly moved; my steps had nearly slipped.
{72:3} For I was zealous over the iniquitous, seeing the peacefulness of sinners.
{72:4} For they have no respect for their death, nor do they have support in their wounds.
{72:5} They are not with the hardships of men, nor will they be scourged with men.
{72:6} Therefore, arrogance has held on to them. They have been covered with their iniquity and impiety.
{72:7} Their iniquity has proceeded, as if from fat. They have parted from the affection of the heart.
{72:8} They have thought and spoken wickedness. They have spoken iniquity in high places.
{72:9} They have set their mouth against heaven, and their tongue has traversed the earth.
{72:10} Therefore, my people will be converted here, and fullness of days will be found in them.
{72:11} And they said, “How would God know?” and, “Isn’t there knowledge in high places?”
{72:12} Behold, these are sinners, and, abounding in this age, they have obtained riches.
{72:13} And I said: So then, it is without purpose that I have justified my heart and washed my hands among the innocent.
{72:14} And I have been scourged all day long, and I have received my chastisement in the mornings.
{72:15} If I were to say that I would explain this: Behold, I would condemn this nation of your sons.
{72:16} I considered, so that I might know this. It is a hardship before me,
{72:17} until I may enter into the Sanctuary of God, and understand it to its last part.
{72:18} So, because of deceitfulness, truly, you have placed it before them. While they were being lifted up, you were casting them down.
{72:19} How have they been brought to desolation? They have suddenly failed. They have perished because of their iniquity.
{72:20} As a dream is to those who awaken, O Lord, so will you reduce their image to nothing in your city.
{72:21} For my heart has been inflamed, and my temperament has been changed.
{72:22} And so, I have been reduced to nothing, and I did not know it.
{72:23} I have become like a beast of burden to you, and I am always with you.
{72:24} You have held my right hand. And in your will, you have conducted me, and with your glory, you have taken me up.
{72:25} For what is there for me in heaven? And what do I wish for on earth before you?
{72:26} My body has failed, and my heart: O God of my heart, and God my portion, into eternity.
{72:27} For behold, those who put themselves far from you will perish. You have perished all those who fornicate away from you.
{72:28} But it is good for me to adhere to God, to put my hope in the Lord God, so that I may announce all your prophecies, at the gates of the daughter of Zion.

[Psalm 73] (74)
{73:1} The understanding of Asaph. O God, why have you rejected us to the end. Why has your fury become enraged over the sheep of your pasture?
{73:2} Be mindful of your congregation, which you have possessed from the beginning. You redeemed the scepter of your inheritance, mount Zion, in which you have dwelt.
{73:3} Lift up your hands against their arrogance in the end. How great the malice of the enemy has been in the sanctuary!
{73:4} And those who hate you have been glorified, in the midst of your solemnity. They have set up their own signs as a proof,
{73:5} as if it had been issued from on high; yet they did not understand. As in a forest of chopped wood,
{73:6} they have cut down the entrances themselves. With axe and hatchet, they have brought it down.
{73:7} They have set fire to your Sanctuary. They have polluted the tabernacle of your name on earth.
{73:8} They have said in their heart, the whole group of them together: “Let us cause all the feast days of God to cease from the land.
{73:9} We have not seen our proof; there is now no prophet. And he will no longer know us.”
{73:10} How long, O God, will the enemy place blame? Is the adversary to provoke your name until the end?
{73:11} Why do you turn your hand away, even your right hand, from the midst of your sinews, until the end?
{73:12} But God is our king before all ages. He has wrought salvation in the midst of the earth.
{73:13} In your virtue, you confirmed the sea. You crushed the heads of the serpents in the waters.
{73:14} You have broken the heads of the serpent. You have given him as food for the people of the Ethiopians.
{73:15} You have disrupted the fountains and the torrents. You have dried up the rivers of Ethan.
{73:16} Yours is the day, and yours is the night. You have made the morning light and the sun.
{73:17} You have made all the limits of the earth. The summer and the spring were formed by you.
{73:18} Be mindful of this: the enemy placed blame against the Lord, and a foolish people has incited against your name.
{73:19} Do not hand over to beasts the souls that confess to you; and do not forget the souls of your poor until the end.
{73:20} Consider your covenant. For those who have been darkened upon the earth have been filled by the iniquity of the houses.
{73:21} Do not allow the humble to be turned away in confusion. The poor and the needy will praise your name.
{73:22} Rise up, O God, judge your own case. Call to mind the accusations against you, which are made by the foolish all day long.
{73:23} Do not forget the voices of your adversaries. The arrogance of those who hate you rises up continually.

[Psalm 74] (75)
{74:1} Unto the end. May you not be corrupted. A Canticle Psalm of Asaph.
{74:2} We will confess to you, O God. We will confess, and we will call upon your name. We will describe your wonders.
{74:3} While I have time, I will judge justices.
{74:4} The earth has been dissolved, with all who dwell in it. I have confirmed its pillars.
{74:5} I said to the iniquitous: “Do not act unjustly,” and to the offenders: “Do not exalt the horn.”
{74:6} Do not exalt your horn on high. Do not speak iniquity against God.
{74:7} For it is neither from the east, nor from the west, nor before the desert mountains.
{74:8} For God is judge. This one he humbles and that one he exalts.
{74:9} For, in the hand of the Lord, there is a cup of undiluted wine, full of consternation. And he has tipped it from here to there. So, truly, its dregs have not been emptied. All the sinners of the earth will drink.
{74:10} But I will announce it in every age. I will sing to the God of Jacob.
{74:11} And I will break all the horns of sinners. And the horns of the just will be exalted.

[Psalm 75] (76)
{75:1} Unto the end. With Praises. A Psalm of Asaph. A Canticle to the Assyrians.
{75:2} In Judea, God is known. In Israel, his name is great.
{75:3} And his place has been formed with peace. And his dwelling place is in Zion.
{75:4} In that place, he has broken the powers of the bows, the shield, the sword, and the battle.
{75:5} You illuminate wondrously from the mountains of eternity.
{75:6} All the foolish of heart have been disturbed. They have slept their sleep, and all the men of riches have found nothing in their hands.
{75:7} At your rebuke, O God of Jacob, those who were mounted on horseback have fallen asleep.
{75:8} You are terrible, and so, who can withstand you? From thence is your wrath.
{75:9} You have caused judgment to be heard from heaven. The earth trembled and was quieted,
{75:10} when God rose up in judgment in order to bring salvation to all the meek of the earth.
{75:11} For the thinking of man will confess to you, and the legacy of his thinking will keep a feast day to you.
{75:12} Make vows and pay them to the Lord, your God. All you who surround him bring gifts: to him who is terrible,
{75:13} even to him who takes away the spirit of leaders, to him who is terrible with the kings of the earth.

[Psalm 76] (77)
{76:1} Unto the end. For Jeduthun. A Psalm of Asaph.
{76:2} I cried out to the Lord with my voice, to God with my voice, and he attended to me.
{76:3} In the days of my tribulation, I sought God, with my hands opposite him in the night, and I was not deceived. My soul refused to be consoled.
{76:4} I was mindful of God, and I was delighted, and I was distressed, and my spirit fell away.
{76:5} My eyes anticipated the vigils. I was disturbed, and I did not speak.
{76:6} I considered the days of antiquity, and I held the years of eternity in my mind.
{76:7} And I meditated in the night with my heart, and I was distressed, and I examined my spirit.
{76:8} So then, will God reject for eternity? Will he not continue to allow himself to show favor?
{76:9} Or, will he cut off his mercy in the end, from generation to generation?
{76:10} And would God ever forget to be merciful? Or, would he, in his wrath, restrict his mercies?
{76:11} And I said, “Now I have begun. This change is from the right hand of the Most High.”
{76:12} I was mindful of the works of the Lord. For I will be mindful from the beginning of your wonders,
{76:13} and I will meditate on all your works. And I will take part in your intentions.
{76:14} Your way, O God, is in what is holy. Which God is great like our God?
{76:15} You are the God who performs miracles. You have made your virtue known among the peoples.
{76:16} With your arm, you have redeemed your people, the sons of Jacob and of Joseph.
{76:17} The waters saw you, O God, the waters saw you, and they were afraid, and the depths were stirred up.
{76:18} Great was the sound of the waters. The clouds uttered a voice. For your arrows also pass by.
{76:19} The voice of your thunder is like a wheel. Your flashes have illuminated the whole world. The earth has quaked and trembled.
{76:20} Your way is through the sea, and your paths are through many waters. And your traces will not be known.
{76:21} You have conducted your people like sheep, by the hand of Moses and Aaron.

[Psalm 77] (78)
{77:1} The understanding of Asaph. O my people, attend to my law. Incline your ears to the words of my mouth.
{77:2} I will open my mouth in parables. I will speak about concepts that are from the beginning.
{77:3} We have heard and known such great things, as our fathers have described to us.
{77:4} These things have not been hidden from their sons in any generation: declaring the praises of the Lord, and his virtues, and the wonders that he has done.
{77:5} And he has received testimony with Jacob, and he has set a law within Israel. Such great things, he has commanded our fathers, so as to make these things known to their sons,
{77:6} so that another generation might know them, and so that the sons, who will be born and who will grow up, shall describe them to their sons.
{77:7} So then, may they put their hope in God, and may they not forget the works of God, and may they seek his commandments.
{77:8} May they not become like their fathers, a perverse and exasperating generation: a generation that does not straighten their heart and whose spirit is not trustworthy with God.
{77:9} The sons of Ephraim, who bend and shoot the bow, have been turned back in the day of battle.
{77:10} They have not kept the covenant of God. And they were not willing to walk in his law.
{77:11} And they have been forgetful of his benefits, and of his miracle, which he revealed to them.
{77:12} He performed miracles in the sight of their fathers, in the land of Egypt, in the field of Tanis.
{77:13} He broke the sea and he led them through. And he stationed the waters, as if in a vessel.
{77:14} And he led them with a cloud by day, and with illumination by fire throughout the night.
{77:15} He broke through the rock in the wasteland, and he gave them to drink, as if from the great abyss.
{77:16} He brought forth water from the rock, and he conducted the waters, as if they were rivers.
{77:17} And yet, they continued to sin against him. In a waterless place, they provoked the Most High with resentment.
{77:18} And they tempted God in their hearts, by asking for food according to their desires.
{77:19} And they spoke badly about God. They said, “Would God be able to prepare a table in the desert?
{77:20} He struck the rock, and so waters flowed and the torrents flooded, but would even he be able to provide bread, or provide a table, for his people?”
{77:21} Therefore, the Lord heard, and he was dismayed, and a fire was kindled within Jacob, and an anger ascended into Israel.
{77:22} For they neither put their trust in God, nor did they hope in his salvation.
{77:23} And he commanded the clouds from above, and he opened the doors of heaven.
{77:24} And he rained down manna upon them to eat, and he gave them the bread of heaven.
{77:25} Man ate the bread of Angels. He sent them provisions in abundance.
{77:26} He transferred the south wind from heaven, and, in his virtue, he brought in the Southwest wind.
{77:27} And he rained down flesh upon them, as if it were dust, and feathered birds, as if they were the sand of the sea.
{77:28} And they fell down in the midst of their camp, encircling their tabernacles.
{77:29} And they ate until they were greatly satisfied, and he brought to them according to their desires.
{77:30} They were not cheated out of what they wanted. Their food was still in their mouth,
{77:31} and then the wrath of God came upon them. And he slew the fat ones among them, and he impeded the elect of Israel.
{77:32} In all these things, they continued to sin, and they were not trustworthy with his miracles.
{77:33} And their days faded away into vanity, and their years with haste.
{77:34} When he slew them, then they sought him. And they returned, and they drew near to him in the early morning.
{77:35} And they were mindful that God is their helper and that the Most High God is their redeemer.
{77:36} And they chose him with their mouth, and then they lied to him with their tongue.
{77:37} For their heart was not upright with him, nor have they been living faithfully in his covenant.
{77:38} Yet he is merciful, and he will pardon their sins. And he will not destroy them. And he has abundantly turned aside his own wrath. And he did not enflame his wrath entirely.
{77:39} And he remembered that they are flesh: with a spirit that goes forth and does not return.
{77:40} How often did they provoke him in the desert and stir him to wrath in a waterless place?
{77:41} And they turned back and tempted God, and they exasperated the Holy One of Israel.
{77:42} They did not remember his hand, in the day that he redeemed them from the hand of the one troubling them.
{77:43} Thus, he positioned his signs in Egypt and his wonders in the field of Tanis.
{77:44} And he turned their rivers into blood, along with their rain showers, so that they could not drink.
{77:45} He sent among them the common fly, and it devoured them, and the frog, and it scattered them.
{77:46} And he gave up their fruits to mold and their labors to the locust.
{77:47} And he slew their vineyards with hail and their mulberry trees with severe frost.
{77:48} And he delivered their cattle to the hail and their possessions to fire.
{77:49} And he sent the wrath of his indignation among them: indignation and wrath and tribulation, sent forth by evil angels.
{77:50} He made way for the path of his anger. He did not spare their souls from death. And he enclosed their beasts of burden in death.
{77:51} And he struck all the first-born in the land of Egypt: the first-fruits of all their labor in the tabernacles of Ham.
{77:52} And he took away his own people like sheep, and he led them through the wilderness like a flock.
{77:53} And he led them out in hope, and they did not fear. And the sea covered their enemies.
{77:54} And he led them to the mountain of his sanctification: the mountain that his right hand had acquired. And he cast out the Gentiles before their face. And he divided their land by lot to them, with a line of distribution.
{77:55} And he caused the tribes of Israel to dwell in their tabernacles.
{77:56} Yet they tempted and aggravated God Most High, and they did not keep his testaments.
{77:57} And they turned themselves aside, and they did not serve the covenant. In the same manner as their fathers, they were turned backwards, like a crooked bow.
{77:58} They impelled him to anger on their hills, and they provoked him to rivalry with their graven images.
{77:59} God listened, and he spurned them, and he reduced Israel greatly, almost to nothing.
{77:60} And he rejected the tabernacle of Shiloh, his tabernacle where he had dwelt among men.
{77:61} And he delivered their virtue into captivity, and their beauty into the hands of the enemy.
{77:62} And he enclosed his people with the sword, and he spurned his inheritance.
{77:63} Fire consumed their young men, and their virgins were not lamented.
{77:64} Their priests fell by the sword, and their widows did not weep.
{77:65} And the Lord was awakened, as if out of sleep, and like a powerful man impaired by wine.
{77:66} And he struck his enemies on the back. He gave them over to everlasting disgrace.
{77:67} And he rejected the tabernacle of Joseph, and he did not choose the tribe of Ephraim.
{77:68} But he chose the tribe of Judah: mount Zion, which he loved.
{77:69} And he built up his sanctuary, like a single-horned beast, in the land that he founded for all ages.
{77:70} And he chose his servant David, and he took him from the flocks of the sheep: he received him from following the ewes with their young,
{77:71} in order to pasture Jacob his servant and Israel his inheritance.
{77:72} And he fed them with the innocence of his heart. And he led them with the understanding of his hands.

[Psalm 78] (79)
{78:1} A Psalm of Asaph. O God, the Gentiles have entered into your inheritance; they have polluted your holy temple. They have set Jerusalem as a place to tend fruit trees.
{78:2} They have placed the dead bodies of your servants as food for the birds of the sky, the flesh of your saints for the beasts of the earth.
{78:3} They have poured out their blood like water all around Jerusalem, and there was no one who would bury them.
{78:4} We have become a disgrace to our neighbors, an object of ridicule and mockery to those who are around us.
{78:5} How long, O Lord? Will you be angry until the end? Will your zeal be kindled like a fire?
{78:6} Pour out your wrath among the Gentiles, who have not known you, and upon the kingdoms that have not invoked your name.
{78:7} For they have devoured Jacob, and they have desolated his place.
{78:8} Do not remember our iniquities of the past. May your mercies quickly intercept us, for we have become exceedingly poor.
{78:9} Help us, O God, our Savior. And free us, Lord, for the glory of your name. And forgive us our sins for the sake of your name.
{78:10} Let them not say among the Gentiles, “Where is their God?” And may your name become known among the nations before our eyes. For the retribution of your servants’ blood, which has been poured out:
{78:11} may the groans of the shackled enter before you. According to the greatness of your arm, take possession of the sons of those who have been killed.
{78:12} And repay our neighbors sevenfold within their sinews. It is the reproach of the same ones who brought reproach against you, O Lord.
{78:13} But we are your people and the sheep of your pasture: we will give thanks to you in all ages. From generation to generation, we will announce your praise.

[Psalm 79] (80)
{79:1} Unto the end. For those who will be changed. The testimony of Asaph. A Psalm.
{79:2} The One who reigns over Israel: Be attentive. For you lead Joseph like a sheep. The One who sits upon the cherubim: Shine forth
{79:3} in the presence of Ephraim, Benjamin, and Manasseh. Awaken your power and draw near, so as to accomplish our salvation.
{79:4} Convert us, O God. And reveal your face, and we will be saved.
{79:5} O Lord, God of hosts, how long will you be angry over the prayer of your servant?
{79:6} How long will you feed us the bread of tears, and give us to drink a full measure of tears?
{79:7} You have set us as a contradiction to our neighbors. And our enemies have ridiculed us.
{79:8} O God of hosts, convert us. And reveal your face, and we will be saved.
{79:9} You have transferred a vineyard from Egypt. You have cast out the Gentiles, and planted it.
{79:10} You were the leader of the journey in its sight. You planted its roots, and it filled the earth.
{79:11} Its shadow covered the hills, and its branches covered the cedars of God.
{79:12} It extended its new branches even to the sea, and its new seedlings even to the river.
{79:13} So then, why have you destroyed its walls, so that all those who pass by the way gather its grapes?
{79:14} The wild boar of the forest has trampled it, and a single wild beast has laid waste to it.
{79:15} Turn back, O God of hosts. Look down from heaven, and see, and visit this vineyard;
{79:16} and complete what your right hand has planted, and look upon the son of man, whom you have confirmed for yourself.
{79:17} Whatever has been set on fire and dug under will perish at the rebuke of your countenance.
{79:18} Let your hand be over the man on your right, and over the son of man, whom you have confirmed for yourself.
{79:19} For we do not depart from you, and you will revive us. And we will invoke your name.
{79:20} O Lord, God of hosts, convert us. And reveal your face, and we will be saved.

[Psalm 80] (81)
{80:1} Unto the end. For the wine and oil presses. A Psalm of Asaph himself.
{80:2} Exult before God our helper. Sing joyfully to the God of Jacob.
{80:3} Take up a psalm, and bring forth the timbrel: a pleasing Psalter with stringed instruments.
{80:4} Sound the trumpet at the new moon, on the noteworthy day of your solemnity,
{80:5} for it is a precept in Israel and a judgment for the God of Jacob.
{80:6} He set it as a testimony with Joseph, when he went out of the land of Egypt. He heard a tongue that he did not know.
{80:7} He turned the burdens away from his back. His hands had been a slave to baskets.
{80:8} You called upon me in tribulation, and I freed you. I heard you within the hidden tempest. I tested you with waters of contradiction.
{80:9} My people, listen and I will call you to testify. If, O Israel, you will pay heed to me,
{80:10} then there will be no new god among you, nor will you adore a foreign god.
{80:11} For I am the Lord your God, who led you out of the land of Egypt. Widen your mouth, and I will fill it.
{80:12} But my people did not hear my voice, and Israel was not attentive to me.
{80:13} And so, I sent them away, according to the desires of their heart. They will go forth according to their own inventions.
{80:14} If my people had heard me, if Israel had walked in my ways,
{80:15} I would have humbled their enemies, as if it were nothing, and I would have sent my hand upon those who troubled them.
{80:16} The enemies of the Lord have lied to him, and their time will come, in every age.
{80:17} And he fed them from the fat of the grain, and he saturated them with honey from the rock.

[Psalm 81] (82)
{81:1} A Psalm of Asaph. God has stood in the synagogue of gods, but, in their midst, he decides between gods.
{81:2} How long will you judge unjustly and favor the faces of sinners?
{81:3} Judge for the indigent and the orphan. Do justice to the humble and the poor.
{81:4} Rescue the poor, and free the needy from the hand of the sinner.
{81:5} They did not know and did not understand. They wander in darkness. All the foundations of the earth will be moved.
{81:6} I said: You are gods, and all of you are sons of the Most High.
{81:7} But you will die like men, and you will fall just like one of the princes.
{81:8} Rise up, O God. Judge the earth. For you will inherit it with all the nations.

[Psalm 82] (83)
{82:1} A Canticle Psalm of Asaph.
{82:2} O God, who will ever be like you? Do not be silent, and do not be unmoved, O God.
{82:3} For behold, your enemies have sounded off, and those who hate you have carried out a head.
{82:4} They have acted with malice in counsel over your people, and they have plotted against your holy ones.
{82:5} They have said, “Come, let us scatter them from the nations and not allow the name of Israel to be remembered any longer.”
{82:6} For they plotted unanimously. Joined together against you, they ordained a covenant:
{82:7} the tabernacle of Edomites and Ishmaelites, and Moab and the Hagarites,
{82:8} and Gebal, and Ammon, and Amalek, the foreigners among the inhabitants of Tyre.
{82:9} For even Assur comes with them. They have become the helpers of the sons of Lot.
{82:10} Do to them as you did to Midian and Sisera, just as to Jabin at the torrent of Kishon.
{82:11} They perished at Endor, and they became like the dung of the earth.
{82:12} Set their leaders to be like Oreb and Zeeb, and Zebah and Zalmunna: all their leaders
{82:13} who said, “Let us possess the Sanctuary of God for an inheritance.”
{82:14} My God, set them like a wheel, and like stubble before the face of the wind.
{82:15} Set them like a fire burning up the forest, and like a flame burning up the mountains.
{82:16} So will you pursue them in your tempest, and disturb them in your wrath.
{82:17} Fill their faces with shame, and they will seek your name, O Lord.
{82:18} Let them be ashamed and troubled, from age to age, and let them be confounded and perish.
{82:19} And let them know that the Lord is your name. You alone are the Most High in all the earth.

[Psalm 83] (84)
{83:1} Unto the end. For the wine and oil presses. A Psalm to the sons of Korah.
{83:2} How beloved are your tabernacles, O Lord of hosts!
{83:3} My soul longs and faints for the courts of the Lord. My heart and my flesh have exulted in the living God.
{83:4} For even the sparrow has found a home for himself, and the turtle-dove a nest for herself, where she may lay her young: your altars, O Lord of hosts, my king and my God.
{83:5} Blessed are those who dwell in your house, O Lord. They will praise you from age to age.
{83:6} Blessed is the man whose help is from you. In his heart, he is disposed to ascend
{83:7} from the valley of tears, from the place which he has determined.
{83:8} For even the lawgiver will provide a blessing; they will go from virtue to virtue. The God of gods will be seen in Zion.
{83:9} O Lord, God of hosts, hear my prayer. Pay attention, O God of Jacob.
{83:10} O God, gaze upon our protector, and look upon the face of your Christ.
{83:11} For one day in your courts is better than thousands elsewhere. I have chosen to be lowly in the house of my God, rather than to dwell in the tabernacles of sinners.
{83:12} For God loves mercy and truth. The Lord will give grace and glory.
{83:13} He will not withhold good things from those who walk in innocence. O Lord of hosts, blessed is the man who hopes in you.

[Psalm 84] (85)
{84:1} Unto the end. A Psalm to the sons of Korah.
{84:2} O Lord, you have blessed your land. You have turned aside the captivity of Jacob.
{84:3} You have released the iniquity of your people. You have covered all their sins.
{84:4} You have mitigated all your wrath. You have turned aside from the wrath of your indignation.
{84:5} Convert us, O God, our Savior, and turn your anger away from us.
{84:6} Will you be angry with us forever? And will you extend your wrath from generation to generation?
{84:7} O God, you will turn back and revive us. And your people will rejoice in you.
{84:8} O Lord, reveal to us your mercy, and grant to us your salvation.
{84:9} I will listen to what the Lord God may be saying to me. For he will speak peace to his people, and to his saints, and to those who are being converted to the heart.
{84:10} So then, truly his salvation is near to those who fear him, so that glory may inhabit our land.
{84:11} Mercy and truth have met each other. Justice and peace have kissed.
{84:12} Truth has risen from the earth, and justice has gazed down from heaven.
{84:13} For so will the Lord give goodness, and our earth will give her fruit.
{84:14} Justice will walk before him, and he will set his steps upon the way.

[Psalm 85] (86)
{85:1} A Prayer of David himself. Incline your ear, O Lord, and hear me. For I am needy and poor.
{85:2} Preserve my soul, for I am holy. My God, bring salvation to your servant who hopes in you.
{85:3} O Lord, be merciful to me, for I have cried out to you all day long.
{85:4} Give joy to the soul of your servant, for I have lifted up my soul to you, Lord.
{85:5} For you are sweet and mild, Lord, and plentiful in mercy to all who call upon you.
{85:6} Pay attention, Lord, to my prayer, and attend to the voice of my supplication.
{85:7} In the day of my tribulation, I cried out to you, because you heeded me.
{85:8} There is no one like you among the gods, O Lord, and there is no one like you in your works.
{85:9} All the nations, which you have made, will draw near and adore in your presence, O Lord. And they will glorify your name.
{85:10} For you are great, and you perform wonders. You alone are God.
{85:11} Lead me, O Lord, in your way, and I will walk in your truth. May my heart rejoice, so that it will fear your name.
{85:12} I will confess to you, O Lord my God, with my whole heart. And I will glorify your name in eternity.
{85:13} For your mercy toward me is great, and you have rescued my soul from the lower part of Hell.
{85:14} O God, the iniquitous have risen up against me, and the synagogue of the powerful have sought my soul, and they have not placed you in their sight.
{85:15} And you, Lord God, are compassionate and merciful, being patient and full of mercy and truthful.
{85:16} Look down upon me and have mercy on me. Grant your authority to your servant, and bring salvation to the son of your handmaid.
{85:17} Make me a sign of what is good, so that those who hate me, may look and be confounded. For you, O Lord, have helped me and consoled me.

[Psalm 86] (87)
{86:1} A Canticle Psalm to the sons of Korah. Its foundations are in the holy mountains:
{86:2} the Lord loves the gates of Zion above all the tabernacles of Jacob.
{86:3} Glorious things are being said of you, O City of God.
{86:4} I will be mindful of Rahab and of Babylon knowing me. Behold, the foreigners, and Tyre, and the people of the Ethiopians: these have been there.
{86:5} Will not Zion say that this man and that man were born in her? And the Most High himself has founded her.
{86:6} The Lord will explain, in the writings of peoples and of leaders, about those who have been in her.
{86:7} For so the dwelling place within you is with all rejoicing.

[Psalm 87] (88)
{87:1} A Canticle Psalm to the sons of Korah. Unto the end. For Mahalath, to answer the understanding of Heman the Ezrahite.
{87:2} O Lord, God of my salvation: I have cried out, day and night, in your presence.
{87:3} Let my prayer enter in your sight. Incline your ear to my petition.
{87:4} For my soul has been filled with evils, and my life has drawn near to Hell.
{87:5} I am considered to be among those who will descend into the pit. I have become like a man without assistance,
{87:6} idle among the dead. I am like the wounded sleeping in sepulchers, whom you no longer remember, and who have been repelled by your hand.
{87:7} They have lain me in the lower pit: in dark places and in the shadow of death.
{87:8} Your fury has been confirmed over me. And you have brought all your waves upon me.
{87:9} You have sent my acquaintances far from me. They have set me as an abomination to themselves. I was handed over, yet I did not depart.
{87:10} My eyes languished before destitution. All day long, I cried out to you, O Lord. I stretched out my hands to you.
{87:11} Will you perform wonders for the dead? Or will physicians raise to life, and so confess to you?
{87:12} Could anyone declare your mercy in the sepulcher, or your truth from within perdition?
{87:13} Will your wonders be known in the darkness, or your justice in the land of oblivion?
{87:14} And I have cried out to you, O Lord, and in early morning, my prayer will come before you.
{87:15} Lord, why do you reject my prayer? Why do you turn your face away from me?
{87:16} I am poor, and I have been amid hardships from my youth. And, though I have been exalted, I am humbled and disturbed.
{87:17} Your wrath has crossed into me, and your terrors have disturbed me.
{87:18} They have surrounded me like water, all day long. They have surrounded me, all at once.
{87:19} Friend and neighbor, and my acquaintances, you have sent far away from me, away from misery.

[Psalm 88] (89)
{88:1} The understanding of Ethan the Ezrahite.
{88:2} I will sing the mercies of the Lord in eternity. I will announce your truth with my mouth, from generation to generation.
{88:3} For you have said: Mercy will be built in the heavens, unto eternity. Your truth will be prepared there.
{88:4} I have set up a covenant with my elect. I have sworn to David my servant:
{88:5} I will prepare your offspring, even in eternity. And I will build up your throne, from generation to generation.
{88:6} The heavens will confess your miracles, Lord, and also your truth, in the Church of the saints.
{88:7} For who among the clouds is equal to the Lord? Who among the sons of God is like God?
{88:8} God is glorified by the counsel of the saints. He is great and terrible above all those who are around him.
{88:9} O Lord, God of hosts, who is like you? You are powerful, Lord, and your truth is all around you.
{88:10} You rule over the power of the sea, and you even mitigate the movement of its waves.
{88:11} You have humbled the arrogant one, like one who has been wounded. You have scattered your enemies with the arm of your strength.
{88:12} Yours are the heavens, and yours is the earth. You founded the whole world in all its fullness.
{88:13} You created the north and the sea. Tabor and Hermon will exult in your name.
{88:14} Your arm acts with power. Let your hand be strengthened, and let your right hand be exalted.
{88:15} Justice and judgment are the preparation of your throne. Mercy and truth will precede your face.
{88:16} Blessed is the people that knows jubilation. They will walk in the light of your countenance, O Lord,
{88:17} and they will exult in your name all day long, and they will be exalted in your justice.
{88:18} For you are the glory of their virtue, and in your goodness, our horn will be exalted.
{88:19} For our assumption is of the Lord, and it is of our king, the holy one of Israel.
{88:20} Then you spoke in a vision to your holy ones, and you said: I have stationed help with the powerful one, and I have exalted the elect one from my people.
{88:21} I have found my servant David. I have anointed him with my holy oil.
{88:22} For my hand will assist him, and my arm will fortify him.
{88:23} The enemy will have no advantage over him, nor will the son of iniquity be positioned to harm him.
{88:24} And I will cut down his enemies before his face. And those who hate him, I will turn to flight.
{88:25} And my truth and my mercy will be with him. And his horn will be exalted in my name.
{88:26} And I will place his hand on the sea and his right hand on the rivers.
{88:27} He will invoke me: “You are my father, my God, and the support of my salvation.”
{88:28} And I will make him the first-born, preeminent before the kings of the earth.
{88:29} I will preserve my mercy for him eternally, and my covenant for him faithfully.
{88:30} And I will set his offspring from generation to generation, and his throne like the days of heaven.
{88:31} But if his sons abandon my law, and if they do not walk in my judgments,
{88:32} if they profane my justices, and if they do not keep my commandments:
{88:33} I will visit their iniquities with a rod, and their sins with a beating.
{88:34} But I will not scatter my mercy from him, and I will not do harm to my truth.
{88:35} And I will not profane my covenant, and I will not make void that which proceeds from my lips.
{88:36} I have sworn by my holiness one time: I will not lie to David,
{88:37} his offspring will remain for eternity. And his throne will be like the sun in my sight,
{88:38} and, like the moon, it is perfected in eternity, and it is a faithful witness in heaven.
{88:39} Yet, truly, you have rejected and despised, you have pushed away, my Christ.
{88:40} You have overthrown the covenant of your servant. You have profaned his sanctuary on earth.
{88:41} You have destroyed all his fences. You have made his territory dreadful.
{88:42} All who pass by the way have plundered him. He has become a disgrace to his neighbors.
{88:43} You have exalted the right hand of those who oppress him. You have brought joy to all his enemies.
{88:44} You have diverted the help of his sword, and you have not assisted him in battle.
{88:45} You have torn him away from cleansing, and you have smashed his throne down to the ground.
{88:46} You have reduced the days of his time. You have flooded him with confusion.
{88:47} How long, O Lord? Will you turn away unto the end? Will your wrath flare up like a fire?
{88:48} Remember what my substance is. For could you really have appointed all the sons of men in vain?
{88:49} Who is the man that will live, and yet not see death? Who will rescue his own soul from the hand of the underworld?
{88:50} O Lord, where are your mercies of antiquity, just as you swore to David in your truth?
{88:51} Be mindful, O Lord, of the disgrace of your servants (which I have sustained in my sinews) among many nations.
{88:52} With these, your enemies have reproached you, O Lord; with these, they have reproached the commutation of your Christ.
{88:53} Blessed is the Lord for all eternity. Amen. Amen.

[Psalm 89] (90)
{89:1} A prayer of Moses, the man of God. O Lord, you have been our refuge from generation to generation.
{89:2} Before the mountains became, or the land was formed along with the world: from ages past, even to all ages, you are God.
{89:3} And, lest man be turned aside in humiliation, you have said: Be converted, O sons of men.
{89:4} For a thousand years before your eyes are like the days of yesterday, which have passed by, and they are like a watch of the night,
{89:5} which was held for nothing: so their years shall be.
{89:6} In the morning, he may pass away like grass; in the morning, he may flower and pass away. In the evening, he will fall, and harden, and become dry.
{89:7} For, at your wrath, we have withered away, and we have been disturbed by your fury.
{89:8} You have placed our iniquities in your sight, our age in the illumination of your countenance.
{89:9} For all our days have faded away, and at your wrath, we have fainted. Our years will be considered to be like a spider’s web.
{89:10} The days of our years in them are seventy years. But in the powerful, they are eighty years, and more of these are with hardship and sorrow. For mildness has overwhelmed us, and we shall be corrected.
{89:11} Who knows the power of your wrath? And, before fear, can your wrath
{89:12} be numbered? So make known your right hand, along with men learned in heart, in wisdom.
{89:13} Return, O Lord, how long? And may you be persuaded on behalf of your servants.
{89:14} We were filled in the morning with your mercy, and we exulted and delighted all our days.
{89:15} We have been rejoicing, because of the days in which you humbled us, because of the years in which we saw evils.
{89:16} Look down upon your servants and upon their works, and direct their sons.
{89:17} And may the splendor of the Lord our God be upon us. And so, direct the works of our hands over us; direct even the work of our hands.

[Psalm 90] (91)
{90:1} The Praise of a Canticle, of David. Whoever dwells with the assistance of the Most High will abide in the protection of the God of heaven.
{90:2} He will say to the Lord, “You are my supporter and my refuge.” My God, I will hope in him.
{90:3} For he has freed me from the snare of those who go hunting, and from the harsh word.
{90:4} He will overshadow you with his shoulders, and you will hope under his wings.
{90:5} His truth will surround you with a shield. You will not be afraid: before the terror of the night,
{90:6} before the arrow flying in the day, before the troubles that wander in the darkness, nor of invasion and the midday demon.
{90:7} A thousand will fall before your side and ten thousand before your right hand. Yet it will not draw near you.
{90:8} So then, truly, you will consider with your eyes, and you will see the retribution of sinners.
{90:9} For you, O Lord, are my hope. You have set the Most High as your refuge.
{90:10} Disaster will not draw near to you, and the scourge will not approach your tabernacle.
{90:11} For he has given his Angels charge over you, so as to preserve you in all your ways.
{90:12} With their hands, they will carry you, lest you hurt your foot against a stone.
{90:13} You will walk over the asp and the king serpent, and you will trample the lion and the dragon.
{90:14} Because he has hoped in me, I will free him. I will protect him because he has known my name.
{90:15} He will cry out to me, and I will heed him. I am with him in tribulation. I will rescue him, and I will glorify him.
{90:16} I will fill him with length of days. And I will reveal to him my salvation.

[Psalm 91] (92)
{91:1} A Canticle Psalm. On the day of the Sabbath.
{91:2} It is good to confess to the Lord and to sing psalms to your name, O Most High:
{91:3} to announce your mercy in the morning, and your truth throughout the night,
{91:4} upon the ten strings, upon the psaltery, with a canticle, upon stringed instruments.
{91:5} For you, O Lord, have delighted me with your doings, and I will exult in the works of your hands.
{91:6} How great are your works, O Lord! Your thoughts have been made exceedingly deep.
{91:7} A foolish man will not know these things, and a senseless one will not understand:
{91:8} when sinners will have risen up like grass, and when all those who work iniquity will have appeared, that they shall pass away, age after age.
{91:9} But you, O Lord, are the Most High for all eternity.
{91:10} For behold your enemies, O Lord, for behold your enemies will perish, and all those who work iniquity will be dispersed.
{91:11} And my horn will be exalted like that of the single-horned beast, and my old age will be exalted in fruitful mercy.
{91:12} And my eye has looked down upon my enemies, and my ear will hear of the malignant rising up against me.
{91:13} The just one will flourish like the palm tree. He will be multiplied like the cedar of Lebanon.
{91:14} Those planted in the house of the Lord will flourish in the courts of the house of our God.
{91:15} They will still be multiplied in a fruitful old age, and they will endure well,
{91:16} so that they may announce that the Lord our God is righteous and that there is no iniquity in him.

[Psalm 92] (93)
{92:1} The Praise of a Canticle, of David himself. In the time before the Sabbath, when the earth was founded.
{92:2} The Lord has reigned. He has been clothed with beauty.
{92:3} The Lord has been clothed with strength, and he has girded himself. Yet he has also confirmed the world, which will not be moved.
{92:4} My throne is prepared from of old. You are from everlasting.
{92:5} The floods have lifted up, O Lord, the floods have lifted up their voice. The floods have lifted up their waves,
{92:6} before the noise of many waters. Wondrous are the surges of the sea; wondrous is the Lord on high.
{92:7} Your testimonies have been made exceedingly trustworthy. Sanctity befits your house, O Lord, with length of days.

[Psalm 93] (94)
{93:1} A Psalm of David himself. The Fourth Sabbath. The Lord is the God of retribution. The God of retribution acts in order to deliver.
{93:2} Lift yourself up, for you judge the earth. Repay the arrogant with retribution.
{93:3} How long will sinners, O Lord, how long will sinners glory?
{93:4} How long will they utter and speak iniquity? How long will all who work injustice speak out?
{93:5} They have humiliated your people, O Lord, and they have harassed your inheritance.
{93:6} They have executed the widow and the new arrival, and they have slaughtered the orphan.
{93:7} And they have said, “The Lord will not see, nor will the God of Jacob understand.”
{93:8} Understand, you senseless ones among the people. And be wise at last, you foolish ones.
{93:9} He who formed the ear, will he not hear? And he who forged the eye, does he not look closely?
{93:10} He who chastises nations, he who teaches man knowledge, will he not rebuke?
{93:11} The Lord knows the thoughts of men: that these are in vain.
{93:12} Blessed is the man whom you will instruct, O Lord. And you will teach him from your law.
{93:13} So may you soothe him from the evil days, until a pit may be dug for sinners.
{93:14} For the Lord will not drive away his people, and he will not abandon his inheritance,
{93:15} even until the time when justice is being converted into judgment, and when those who are close to justice are all those who are upright of heart.
{93:16} Who will rise up with me against the malignant? Or who will stand with me against the workers of iniquity?
{93:17} Except that the Lord assisted me, my soul almost would have dwelt in Hell.
{93:18} If ever I said, “My foot is slipping,” then your mercy, O Lord, assisted me.
{93:19} According to the multitude of my sorrows in my heart, your consolations have given joy to my soul.
{93:20} Does the seat of iniquity adhere to you, you who contrive hardship within a commandment?
{93:21} They will hunt down the soul of the just, and they will condemn innocent blood.
{93:22} And the Lord has been made into a refuge for me, and my God into the assistance of my hope.
{93:23} And he will repay them their iniquity, and he will destroy them in their malice. The Lord our God will utterly destroy them.

[Psalm 94] (95)
{94:1} The Praise of a Canticle, of David himself. Come, let us exult in the Lord. Let us shout joyfully to God, our Savior.
{94:2} Let us anticipate his presence with confession, and let us sing joyfully to him with psalms.
{94:3} For the Lord is a great God and a great King over all gods.
{94:4} For in his hand are all the limits of the earth, and the heights of the mountains are his.
{94:5} For the sea is his, and he made it, and his hands formed the dry land.
{94:6} Come, let us adore and fall prostrate, and let us weep before the Lord who made us.
{94:7} For he is the Lord our God, and we are the people of his pasture and the sheep of his hand.
{94:8} If today you hear his voice, harden not your hearts:
{94:9} as in the provocation, according to the day of temptation in the wilderness, where your fathers tempted me; they tested me, though they had seen my works.
{94:10} For forty years, I was offended by that generation, and I said: These have always strayed in heart.
{94:11} And these have not known my ways. So I swore in my wrath: They shall not enter into my rest.

[Psalm 95] (96)
{95:1} A Canticle of David himself, when the house was built after the captivity. Sing to the Lord a new song. Sing to the Lord, all the earth.
{95:2} Sing to the Lord and bless his name. Announce his salvation from day to day.
{95:3} Announce his glory among the Gentiles, his miracles among all peoples.
{95:4} For the Lord is great and greatly to be praised. He is terrible, beyond all gods.
{95:5} For all the gods of the Gentiles are demons, but the Lord made the heavens.
{95:6} Confession and beauty are in his sight. Sanctity and magnificence are in his sanctuary.
{95:7} Bring to the Lord, you natives of the nations, bring to the Lord glory and honor.
{95:8} Bring to the Lord glory for his name. Lift up sacrifices, and enter into his courts.
{95:9} Adore the Lord in his holy court. Let the entire earth be shaken before his face.
{95:10} Say among the Gentiles: The Lord has reigned. For he has even corrected the whole world, which will not be shaken. He will judge the peoples with fairness.
{95:11} Let the heavens rejoice, and let the earth exult; let the sea and all its fullness be moved.
{95:12} The fields and all the things that are in them will be glad. Then all the trees of the forest will rejoice
{95:13} before the face of the Lord: for he arrives. For he arrives to judge the earth. He will judge the whole world with fairness and the peoples with his truth.

[Psalm 96] (97)
{96:1} This is to David, when his land was restored to him. The Lord has reigned, let the earth exult. Let the many islands rejoice.
{96:2} Clouds and mist are all around him. Justice and judgment are corrections from his throne.
{96:3} A fire will precede him, and it will enflame his enemies all around.
{96:4} His lightnings have enlightened the whole world. The earth saw, and it was shaken.
{96:5} The mountains flowed like wax before the face of the Lord, before the face of the Lord of all the earth.
{96:6} The heavens announced his justice, and all peoples saw his glory.
{96:7} May all those who adore graven images be confounded, along with those who glory in their false images. All you his Angels: Adore him.
{96:8} Zion heard, and was glad. And the daughters of Judah exulted because of your judgments, O Lord.
{96:9} For you are the Most High Lord over all the earth. You are greatly exalted above all gods.
{96:10} You who love the Lord: hate evil. The Lord watches over the souls of his holy ones. He will free them from the hand of the sinner.
{96:11} The light has risen for the just, and joy for the upright of heart.
{96:12} Rejoice in the Lord, you just ones, and confess to the memory of his sanctuary.

[Psalm 97] (98)
{97:1} A Psalm of David himself. Sing to the Lord a new song, for he has performed wonders. His right hand has accomplished salvation for him, with his holy arm.
{97:2} The Lord has made known his salvation. He has revealed his justice in the sight of the nations.
{97:3} He has remembered his mercy and his truth toward the house of Israel. All the ends of the earth have seen the salvation of our God.
{97:4} Sing joyfully to God, all the earth. Sing and exult, and sing psalms.
{97:5} Sing psalms to the Lord with stringed instruments, with strings and the voice of a psalmist,
{97:6} with subtle wind instruments and the voice of woodwinds. Make a joyful noise before the Lord our king.
{97:7} Let the sea be moved and all its fullness, the whole world and all who dwell in it.
{97:8} The rivers will clap their hands, the mountains will exult together,
{97:9} before the presence of the Lord. For he comes to judge the earth. He will judge the whole world with justice, and the peoples with fairness.

[Psalm 98] (99)
{98:1} A Psalm of David himself. The Lord has reigned: let the peoples be angry. He sits upon the cherubim: let the earth be moved.
{98:2} The Lord is great in Zion, and he is high above all peoples.
{98:3} May they confess to your great name, for it is terrible and holy.
{98:4} And the honor of the king loves judgment. You have prepared guidance. You have accomplished judgment and justice in Jacob.
{98:5} Exalt the Lord our God, and adore the footstool of his feet, for it is holy.
{98:6} Moses and Aaron are among his priests, and Samuel is among those who call upon his name. They called upon the Lord, and he heeded them.
{98:7} He spoke to them in the pillar of the cloud. They kept his testimonies and the precept that he gave them.
{98:8} You heeded them, O Lord our God. You were a forgiving God to them, though taking vengeance on all their inventions.
{98:9} Exalt the Lord our God, and adore on his holy mountain. For the Lord our God is holy.

[Psalm 99] (100)
{99:1} A Psalm of Confession.
{99:2} Shout joyfully to God, all the earth. Serve the Lord with rejoicing. Enter into his sight in exultation.
{99:3} Know that the Lord himself is God. He made us, and we ourselves did not. We are his people and the sheep of his pasture.
{99:4} Enter his gates with confession, his courts with hymns, and acknowledge him. Praise his name.
{99:5} For the Lord is sweet, his mercy is in eternity, and his truth is from generation to generation.

[Psalm 100] (101)
{100:1} A Psalm of David himself. I will sing mercy and judgment to you, O Lord. I will sing psalms.
{100:2} And I will have understanding within the immaculate way, when you will draw near to me. I wandered about in the innocence of my heart, in the midst of my house.
{100:3} I will not display any unjust thing before my eyes. I have hated those carrying out betrayals.
{100:4} The perverse heart did not adhere to me. And the malignant, who turned away before me, I would not recognize.
{100:5} The one who secretly detracted his neighbor, this one I pursued. The one with an arrogant eye and an insatiable heart, with that one I would not eat.
{100:6} My eyes looked toward the faithful of the earth, to sit with me. The one walking in the immaculate way, this one ministered to me.
{100:7} He who has acted arrogantly will not dwell in the midst of my house. He who has spoken iniquity was not guided with the sight of my eyes.
{100:8} In the morning, I executed all the sinners of the earth, so that I might scatter all the workers of iniquity from the city of the Lord.

[Psalm 101] (102)
{101:1} The prayer of the pauper, when he was anxious, and so he poured out his petition in the sight of the Lord.
{101:2} O Lord, hear my prayer, and let my outcry reach you.
{101:3} Do not turn your face away from me. In whatever day that I am in trouble, incline your ear to me. In whatever day that I will call upon you, heed me quickly.
{101:4} For my days have faded away like smoke, and my bones have dried out like firewood.
{101:5} I have been cut down like hay, and my heart has withered, for I had forgotten to eat my bread.
{101:6} Before the voice of my groaning, my bone has adhered to my flesh.
{101:7} I have become like a pelican in solitude. I have become like a night raven in a house.
{101:8} I have kept vigil, and I have become like a solitary sparrow on a roof.
{101:9} All day long my enemies reproached me, and those who praised me swore oaths against me.
{101:10} For I chewed on ashes like bread, and I mixed weeping into my drink.
{101:11} By the face of your anger and indignation, you lifted me up and threw me down.
{101:12} My days have declined like a shadow, and I have dried out like hay.
{101:13} But you, O Lord, endure for eternity, and your memorial is from generation to generation.
{101:14} You will rise up and take pity on Zion, for it is time for its mercy, for the time has come.
{101:15} For its stones have pleased your servants, and they will take pity on its land.
{101:16} And the Gentiles will fear your name, O Lord, and all the kings of the earth your glory.
{101:17} For the Lord has built up Zion, and he will be seen in his glory.
{101:18} He has noticed the prayer of the humble, and he has not despised their petition.
{101:19} Let these things be written in another generation, and the people who will be created will praise the Lord.
{101:20} For he has gazed from his high sanctuary. From heaven, the Lord has beheld the earth.
{101:21} So may he hear the groans of those in shackles, in order that he may release the sons of the slain.
{101:22} So may they announce the name of the Lord in Zion and his praise in Jerusalem:
{101:23} while the people convene, along with kings, in order that they may serve the Lord.
{101:24} He responded to him in the way of his virtue: Declare to me the brevity of my days.
{101:25} Do not call me back in the middle of my days: your years are from generation to generation.
{101:26} In the beginning, O Lord, you founded the earth. And the heavens are the work of your hands.
{101:27} They will perish, but you remain. And all will grow old like a garment. And, like a blanket, you will change them, and they will be changed.
{101:28} Yet you are ever yourself, and your years will not decline.
{101:29} The sons of your servants will live, and their offspring will be guided aright in every age.

[Psalm 102] (103)
{102:1} To David himself. Bless the Lord, O my soul, and bless his holy name, all that is within me.
{102:2} Bless the Lord, O my soul, and do not forget all his recompenses.
{102:3} He forgives all your iniquities. He heals all your infirmities.
{102:4} He redeems your life from destruction. He crowns you with mercy and compassion.
{102:5} He satisfies your desire with good things. Your youth will be renewed like that of the eagle.
{102:6} The Lord accomplishes mercies, and his judgment is for all who patiently endure injuries.
{102:7} He has made his ways known to Moses, his will to the sons of Israel.
{102:8} The Lord is compassionate and merciful, patient and full of mercy.
{102:9} He will not be angry forever, and he will not threaten for eternity.
{102:10} He has not dealt with us according to our sins, and he has not repaid us according to our iniquities.
{102:11} For according to the height of the heavens above the earth, so has he reinforced his mercy toward those who fear him.
{102:12} As far as the east is from the west, so far has he removed our iniquities from us.
{102:13} As a father is compassionate to his sons, so has the Lord been compassionate to those who fear him.
{102:14} For he knows our form. He has called to mind that we are dust.
{102:15} Man: his days are like hay. Like the flower of the field, so will he flourish.
{102:16} For the spirit in him will pass away, and it will not remain, and he will know his place no longer.
{102:17} But the mercy of the Lord is from eternity, and even unto eternity, upon those who fear him. And his justice is with the sons of the sons,
{102:18} with those who serve his covenant and have been mindful of his commandments by doing them.
{102:19} The Lord has prepared his throne in heaven, and his kingdom will rule over all.
{102:20} Bless the Lord, all you his Angels: powerful in virtue, doing his word, in order to heed the voice of his discourse.
{102:21} Bless the Lord, all his hosts: his ministers who do his will.
{102:22} Bless the Lord, all his works: in every place of his dominion. Bless the Lord, O my soul.

[Psalm 103] (104)
{103:1} To David himself. Bless the Lord, O my soul. O Lord my God, you are exceedingly great. You have clothed yourself with confession and beauty;
{103:2} you are dressed with light like a garment, while you stretch out heaven like a tent.
{103:3} You cover its heights with water. You set the clouds as your stairs. You walk upon the wings of the winds.
{103:4} You make your Angels a breath of life, and your ministers a burning fire.
{103:5} You founded the earth upon its stable base. It will not be bent from age to age.
{103:6} The abyss, like a garment, is its clothing. The waters will remain standing above the mountains.
{103:7} At your rebuke, they will flee. At the voice of your thunder, they will dread.
{103:8} The mountains ascend, and the plains descend, to the place which you have founded for them.
{103:9} You have set a limit that they will not cross. And they will not return to cover the earth.
{103:10} You spring forth fountains in steep valleys. The waters will cross through the midst of the mountains.
{103:11} All the wild beasts of the field will drink. The wild donkeys will anticipate in their thirst.
{103:12} Above them, the flying things of the air will dwell. From the midst of the rocks, they will utter voices.
{103:13} You irrigate the mountains from your heights. The earth will be satiated from the fruit of your works,
{103:14} producing grass for cattle and herbs for the service of men. So may you draw bread from the earth,
{103:15} and wine, in order to cheer the heart of man. Then he may gladden his face with oil, and bread will confirm the heart of man.
{103:16} The trees of the field will be saturated, along with the cedars of Lebanon, which he planted.
{103:17} There, the sparrows will make their nests. The leader of them is the house of the heron.
{103:18} The heights of the hills are for the deer; the rock is a refuge for the hedgehog.
{103:19} He has made the moon for seasons; the sun knows its setting.
{103:20} You appointed darkness, and it has become night; all the beasts of the forest will cross through it.
{103:21} The young lions will roar, while searching for and seizing their meal from God.
{103:22} The sun arose, and they were gathered together; and in their dens, they will lie down together.
{103:23} Man will go forth to his work and to his activities, until the evening.
{103:24} How great are your works, O Lord! You have made all things in wisdom. The earth has been filled with your possessions.
{103:25} This sea is great and its hands are spacious. There are creeping things without number: the small animals with the great.
{103:26} There, the ships will pass by this sea-serpent that you have formed to mock them.
{103:27} All these expect you to give them food in due time.
{103:28} What you give to them, they will gather. When you open your hand, they will all be filled with goodness.
{103:29} But if you turn your face away, they will be disturbed. You will take away their breath, and they will fail, and they will return to their dust.
{103:30} You will send forth your Spirit, and they will be created. And you will renew the face of the earth.
{103:31} May the glory of the Lord be for all ages. The Lord will rejoice in his works.
{103:32} He considers the earth, and he makes it tremble. He touches the mountains, and they smoke.
{103:33} I will sing to the Lord with my life. I will sing psalms to my God, as long as I am.
{103:34} May my speech be pleasing to him. Truly, I will take delight in the Lord.
{103:35} Let sinners fade away from the earth, along with the unjust, so that they may not be. Bless the Lord, O my soul.

[Psalm 104] (105)
{104:1} Alleluia. Confess to the Lord, and invoke his name. Announce his works among the nations.
{104:2} Sing to him, and sing psalms to him. Describe all his wonders.
{104:3} Be praised in his holy name. Let the heart of those who seek the Lord rejoice.
{104:4} Seek the Lord, and be confirmed. Seek his face always.
{104:5} Remember his miracles, which he has done, his portents and the judgments of his mouth:
{104:6} you offspring of Abraham his servant, you sons of Jacob his elect.
{104:7} He is the Lord our God. His judgments are throughout the entire earth.
{104:8} He has remembered his covenant for all ages: the word that he entrusted to a thousand generations,
{104:9} which he assigned to Abraham, and his oath to Isaac.
{104:10} And he stationed the same for Jacob with a precept, and for Israel with an eternal testament,
{104:11} saying: To you, I will give the land of Canaan, the allotment of your inheritance.
{104:12} Though they may have been but a small number, very few and foreigners there,
{104:13} and though they passed from nation to nation, and from one kingdom to another people,
{104:14} he allowed no man to harm them, and he reproved kings on their behalf.
{104:15} Do not be willing to touch my Christ, and do not be willing to malign my prophets.
{104:16} And he called a famine upon the land, and he crushed every foundation of the bread.
{104:17} He sent a man before them: Joseph, who had been sold as a slave.
{104:18} They humbled his feet in shackles; the iron pierced his soul,
{104:19} until his word arrived. The eloquence of the Lord inflamed him.
{104:20} The king sent and released him; he was the ruler of the people, and he dismissed him.
{104:21} He established him as master of his house and ruler of all his possessions,
{104:22} so that he might instruct his princes as himself, and teach his elders prudence.
{104:23} And Israel entered into Egypt, and Jacob became a sojourner in the land of Ham.
{104:24} And he helped his people greatly, and he strengthened them over their enemies.
{104:25} He turned their heart to hate his people, and to deal deceitfully with his servants.
{104:26} He sent Moses, his servant, and Aaron, the one whom he chose.
{104:27} He placed with them signs of his word, and portents in the land of Ham.
{104:28} He sent darkness and made it conceal, and he did not afflict them with his speech.
{104:29} He turned their waters into blood, and he slaughtered their fish.
{104:30} Their land brought forth frogs, even in the inner chambers of their kings.
{104:31} He spoke, and there came forth common flies and gnats, in every region.
{104:32} He gave them a shower of hail and a burning fire, in the same land.
{104:33} And he struck their vineyards and their fig trees, and he crushed the trees of their region.
{104:34} He spoke, and the locust came forth, and the caterpillar, of which there was no number.
{104:35} And it devoured all the grass in their land, and it consumed all the fruit of their land.
{104:36} And he struck all the first-born in their land, the first-fruits of all their labor.
{104:37} And he led them out with silver and gold, and there was not an infirm one among their tribes.
{104:38} Egypt was joyful at their departure, for the fear of them lay heavy upon them.
{104:39} He spread a cloud for their protection, and a fire, to give them light through the night.
{104:40} They petitioned, and the quail came; and he satisfied them with the bread of heaven.
{104:41} He ruptured the rock and the waters flowed: rivers gushed in the dry land.
{104:42} For he had called to mind his holy word, which he kept near to his servant Abraham.
{104:43} And he led forth his people in exultation, and his elect in rejoicing.
{104:44} And he gave them the regions of the Gentiles, and they possessed the labors of the peoples,
{104:45} so that they might observe his justifications, and inquire about his law.

[Psalm 105] (106)
{105:1} Alleluia. Confess to the Lord, for he is good, for his mercy is with every generation.
{105:2} Who will declare the powers of the Lord? Who make a hearing for all his praises?
{105:3} Blessed are those who keep judgment and who do justice at all times.
{105:4} Remember us, O Lord, with good will for your people. Visit us with your salvation,
{105:5} so that we may see the goodness of your elect, so that we may rejoice in the joy of your nation, so that you may be praised along with your inheritance.
{105:6} We have sinned, as have our fathers. We have acted unjustly; we have wrought iniquity.
{105:7} Our fathers did not understand your miracles in Egypt. They did not remember the multitude of your mercies. And they provoked you, while going up to the sea, even the Red Sea.
{105:8} And he saved them for the sake of his name, so that he might make known his power.
{105:9} And he rebuked the Red Sea, and it dried up. And he led them into the abyss, as if into a desert.
{105:10} And he saved them from the hand of those who hated them. And he redeemed them from the hand of the enemy.
{105:11} And the water covered those who troubled them. Not one of them remained.
{105:12} And they believed his words, and they sang his praises.
{105:13} As soon as they had finished, they forgot his works, and they would not endure his counsel.
{105:14} And they coveted their desire in the desert, and they tempted God in a waterless place.
{105:15} And he granted to them their request, and he sent abundance into their souls.
{105:16} And they provoked Moses in the camp, and Aaron, the holy one of the Lord.
{105:17} The earth opened and swallowed Dathan, and it covered the congregation of Abiram.
{105:18} And a fire broke out in their congregation. A flame burned up the sinners.
{105:19} And they fashioned a calf at Horeb, and they adored a graven image.
{105:20} And they exchanged their glory for the likeness of a calf that eats hay.
{105:21} They forgot God, who saved them, who did great things in Egypt:
{105:22} miracles in the land of Ham, terrible things at the Red Sea.
{105:23} And he said that he would destroy them, yet Moses, his elect, stood firm before him in the breach, in order to avert his wrath, lest he destroy them.
{105:24} And they held the desirable land to be nothing. They did not trust in his word.
{105:25} And they murmured in their tabernacles. They did not heed the voice of the Lord.
{105:26} And he lifted up his hand over them, in order to prostrate them in the desert,
{105:27} and in order to cast their offspring among the nations, and to scatter them among the regions.
{105:28} And they were initiated into Baal of Peor, and they ate the sacrifices of the dead.
{105:29} And they provoked him with their inventions, and ruination was multiplied in them.
{105:30} Then Phinehas stood up and placated him: and so the violent disturbance ceased.
{105:31} And it was reputed to him unto justice, from generation to generation, even forever.
{105:32} And they provoked him at the Waters of Contradiction, and Moses was afflicted because of them,
{105:33} for they exasperated his spirit. And so he divided them with his lips.
{105:34} They did not destroy the nations, about which the Lord had spoken to them.
{105:35} And they were mixed among the Gentiles. And they learned their works,
{105:36} and they served their graven images, and it became a scandal to them.
{105:37} And they sacrificed their sons and their daughters to demons.
{105:38} And they shed innocent blood: the blood of their sons and of their daughters, which they sacrificed to the graven images of Canaan. And the land was infected with bloodshed,
{105:39} and was contaminated with their works. And they fornicated according to their own inventions.
{105:40} And the Lord became furiously angry with his people, and he abhorred his inheritance.
{105:41} And he delivered them into the hands of the nations. And those who hated them became rulers over them.
{105:42} And their enemies afflicted them, and they were humbled under their hands.
{105:43} Many times, he delivered them. Yet they provoked him with their counsel, and they were brought low by their iniquities.
{105:44} And he saw that they were in tribulation, and he heard their prayer.
{105:45} And he was mindful of his covenant, and he repented according to the multitude of his mercies.
{105:46} And he provided for them with mercies, in the sight of all those who had seized them.
{105:47} Save us, O Lord our God, and gather us from the nations, so that we may confess your holy name and glory in your praise.
{105:48} Blessed is the Lord God of Israel, from ages past, even to all ages. And let all the people say: Amen. Amen.

[Psalm 106] (107)
{106:1} Alleluia. Confess to the Lord, for he is good, for his mercy is with every generation.
{106:2} Let those who have been redeemed by the Lord say so: those whom he redeemed from the hand of the enemy and gathered from the regions,
{106:3} from the rising of the sun and its setting, from the north and from the sea.
{106:4} They wandered into solitude in a waterless place. They did not find the way of the city to be their dwelling place.
{106:5} They were hungry, and they were thirsty. Their soul fainted within them.
{106:6} And they cried out to the Lord in tribulation, and he rescued them in their necessity.
{106:7} And he led them in the right way, so that they might go forth to a city of habitation.
{106:8} Let his mercies confess to the Lord, and let his miracles confess to the sons of men.
{106:9} For he has satisfied the empty soul, and he has satisfied the hungry soul with good things:
{106:10} those sitting in darkness and in the shadow of death, shackled by extreme poverty and by iron.
{106:11} For they exasperated the eloquence of God, and they irritated the deliberation of the Most High.
{106:12} And their heart was brought low with hardships. They were weakened, and there was no one to help them.
{106:13} And they cried out to the Lord in their tribulation, and he freed them from their distress.
{106:14} And he led them out of darkness and the shadow of death, and he broke apart their chains.
{106:15} Let his mercies confess to the Lord, and let his miracles confess to the sons of men.
{106:16} For he has crushed the gates of brass and broken the iron bars.
{106:17} He has taken them up, from the way of their iniquity. For they were brought low, because of their injustices.
{106:18} Their soul abhorred all food, and they drew near even to the gates of death.
{106:19} And they cried out to the Lord in their tribulation, and he delivered them in their necessity.
{106:20} He sent his word, and he healed them, and he rescued them from their utter destruction.
{106:21} Let his mercies confess to the Lord, and let his miracles confess to the sons of men.
{106:22} And let them offer sacrifice with the sacrifice of praise, and let them announce his works in exultation.
{106:23} Those who descend to the sea in ships, making their livelihood in the great waters:
{106:24} these have seen the works of the Lord and his wonders in the deep.
{106:25} He spoke: and a windstorm stood up, and its waves were exalted.
{106:26} They ascend even to the heavens, and they descend even to the abyss. Their soul will waste away in distress.
{106:27} They were troubled, and they moved like a drunkard, and all their wisdom was consumed.
{106:28} And they cried out to the Lord in their tribulation, and he led them out of their distress.
{106:29} And he replaced the storm with a breeze, and its waves were stilled.
{106:30} And they were joyful that it was stilled, and he led them into the haven that they desired.
{106:31} Let his mercies confess to the Lord, and let his miracles confess to the sons of men.
{106:32} And let them exalt him in the Church of the people, and praise him in the chair of the elders.
{106:33} He has placed rivers in the desert and sources of water in dry places,
{106:34} a fruit-bearing land in the midst of brine, before the malice of those who dwell in it.
{106:35} He has placed a desert in the midst of pools of waters, and a land without water in the midst of sources of water.
{106:36} And he has gathered the hungry together there, and they constructed a city of habitation.
{106:37} And they sowed fields and planted vineyards, and they produced the fruit of nativity.
{106:38} And he blessed them, and they were multiplied exceedingly. And he did not diminish their beasts of burden.
{106:39} And they became few, and they were afflicted by the tribulation of evils and of sorrow.
{106:40} Contempt was poured over their leaders, and he caused them to wander in an impassable place, and not on the way.
{106:41} And he helped the poor out of destitution, and he stationed families like sheep.
{106:42} The upright will see, and they will rejoice. And every iniquity will block its mouth.
{106:43} Who is wise and will keep these things? And who will understand the mercies of the Lord?

[Psalm 107] (108)
{107:1} A Canticle Psalm, of David himself.
{107:2} My heart is prepared, O God, my heart is prepared. I will sing songs, and I will sing psalms in my glory.
{107:3} Rise up, my glory. Rise up, Psalter and harp. I will arise in early morning.
{107:4} I will confess to you, O Lord, among the peoples. And I will sing psalms to you among the nations.
{107:5} For your mercy is great, beyond the heavens, and your truth, even to the clouds.
{107:6} Be exalted, O God, beyond the heavens, and your glory, beyond all the earth,
{107:7} so that your beloved may be freed. Save with your right hand, and heed me.
{107:8} God has spoken in his holiness. I will exult, and I will divide Shechem, and I will divide by measure the steep valley of tabernacles.
{107:9} Gilead is mine, and Manasseh is mine, and Ephraim is the supporter of my head. Judah is my king.
{107:10} Moab is the cooking pot of my hope. I will extend my shoe in Idumea; the foreigners have become my friends.
{107:11} Who will lead me into the fortified city? Who will lead me, even into Idumea?
{107:12} Will not you, O God, who had rejected us? And will not you, O God, go out with our armies?
{107:13} Grant us help from tribulation, for vain is the help of man.
{107:14} In God, we will act virtuously, and he will bring our enemies to nothing.

[Psalm 108] (109)
{108:1} Unto the end. A Psalm of David.
{108:2} O God, do not be silent toward my praise, for the mouth of the sinner and the mouth of the deceitful one have been opened against me.
{108:3} They have spoken against me with deceitful tongues, and they have surrounded me with hateful words, and they fought against me over nothing.
{108:4} Instead of choosing to act on my behalf, they detracted me. But I gave myself to prayer.
{108:5} And they set evil against me, instead of good, and hatred, in return for my love.
{108:6} Establish the sinner over him, and let the devil stand at his right hand.
{108:7} When he is judged, may he go forth in condemnation, and may his prayer be counted as sin.
{108:8} May his days be few, and let another take his episcopate.
{108:9} May his sons be orphans, and his wife a widow.
{108:10} May his sons be carried by those who walk unsteadily, and may they go begging. And may they be cast out of their dwelling places.
{108:11} May the money lenders scrutinize all his belongings, and let foreigners plunder his labors.
{108:12} May there be no one to assist him, nor anyone to be compassionate to his orphaned children.
{108:13} May his posterity be in utter ruin. In one generation, may his name be wiped away.
{108:14} May the iniquity of his fathers return in memory before the sight of the Lord, and do not let the sin of his mother be wiped away.
{108:15} May these be opposite the Lord always, but let their memory perish from the earth.
{108:16} For certain things are not remembered about them, in order to be merciful.
{108:17} And so the destitute man was pursued, with the beggar and the remorseful in heart, so as to be put to death.
{108:18} And he loved a curse, and it came to him. And he was unwilling to have a blessing, and it went far from him. And he clothed himself with curses like a garment, and it entered his inner self like water, and it entered his bones like oil.
{108:19} May it be to him like a garment that covers him, and like a belt that always cinches him.
{108:20} This is the work of those who detract me with the Lord and who speak evils against my soul.
{108:21} But as for you, Lord, O Lord: act on my behalf for your name’s sake. For your mercy is sweet.
{108:22} Free me, for I am destitute and poor, and my heart has been disquieted within me.
{108:23} I have been taken away like a shadow when it declines, and I have been shaken off like locusts.
{108:24} My knees have been weakened by fasting, and my flesh has been replaced by oil.
{108:25} And I have become a disgrace to them. They saw me, and they shook their heads.
{108:26} Help me, O Lord, my God. Save me according to your mercy.
{108:27} And let them know that this is your hand, and that you, O Lord, have done this.
{108:28} They will curse, and you will bless. May those who rise up against me be confounded. But your servant will rejoice.
{108:29} May those who detract me be clothed with shame, and may they be covered with their confusion, as if with a double cloak.
{108:30} I will confess exceedingly to the Lord with my mouth. And I will praise him in the midst of the multitude.
{108:31} For he stands at the right hand of the poor, in order to save my soul from persecutors.

[Psalm 109] (110)
{109:1} A Psalm of David. The Lord said to my Lord, “Sit at my right hand, until I make your enemies your footstool.”
{109:2} The Lord will send forth the scepter of your virtue from Zion. Rule in the midst of your enemies.
{109:3} It is with you from the beginning, in the day of your virtue, in the splendor of the saints. From conception, before the light-bearer, I begot you.
{109:4} The Lord has sworn, and he will not repent: “You are a priest forever, according to the order of Melchizedek.”
{109:5} The Lord is at your right hand. He has broken kings in the day of his wrath.
{109:6} He will judge between the nations; he will fill up ruination. He will shatter heads in the land of the many.
{109:7} He will drink from the torrent on the way. Because of this, he will exalt the head.

[Psalm 110] (111)
{110:1} Alleluia. I will confess to you, O Lord, with my whole heart, in the council of the just and in the congregation.
{110:2} Great are the works of the Lord, exquisite in all his intentions.
{110:3} Confession and magnificence are his work. And his justice remains from age to age.
{110:4} He has created a memorial to his wonders; he is a merciful and compassionate Lord.
{110:5} He has given food to those who fear him. He will be mindful of his covenant in every age.
{110:6} He will announce the virtue of his works to his people,
{110:7} so that he may give them the inheritance of the nations. The works of his hands are truth and judgment.
{110:8} All his commands are faithful: confirmed from age to age, created in truth and fairness.
{110:9} He has sent redemption upon his people. He has commanded his covenant for all eternity. Holy and terrible is his name.
{110:10} The fear of the Lord is the beginning of wisdom. A good understanding is for all who do it. His praise remains from age to age.

[Psalm 111] (112)
{111:1} Alleluia. Of the return of Haggai and Zachariah. Blessed is the man who fears the Lord. He will prefer his commandments exceedingly.
{111:2} His offspring will be powerful on the earth. The generation of the upright will be blessed.
{111:3} Glory and wealth will be in his house, and his justice shall remain from age to age.
{111:4} For the upright, a light has risen up in the darkness. He is merciful and compassionate and just.
{111:5} Pleasing is the man who shows mercy and lends. He will order his words with judgment.
{111:6} For he will not be disturbed in eternity.
{111:7} The just one will be an everlasting memorial. He will not fear a report of disasters. His heart is prepared to hope in the Lord.
{111:8} His heart has been confirmed. He will not be disturbed, until he looks down upon his enemies.
{111:9} He has distributed, he has given to the poor. His justice shall remain from age to age. His horn shall be exalted in glory.
{111:10} The sinner will see and become angry. He will gnash his teeth and waste away. The desire of sinners will perish.

[Psalm 112] (113)
{112:1} Alleluia. Praise the Lord, children. Praise the name of the Lord.
{112:2} Blessed is the name of the Lord, from this time forward and even forever.
{112:3} From the rising of the sun, even to its setting, praiseworthy is the name of the Lord.
{112:4} The Lord is high above all nations, and his glory is high above the heavens.
{112:5} Who is like the Lord, our God, who dwells on high,
{112:6} and who gazes upon the humble things in heaven and on earth?
{112:7} He lifts up the needy from the ground, and he urges the poor away from filth,
{112:8} so that he may place him with the leaders, with the leaders of his people.
{112:9} He causes a barren woman to live in a house, as the joyful mother of sons.

[Psalm 113] (114-115)
{113:1} Alleluia. At the departure of Israel from Egypt, the house of Jacob from a barbarous people:
{113:2} Judea was made his sanctuary; Israel was made his power.
{113:3} The sea looked, and it fled. The Jordan was turned back again.
{113:4} The mountains exulted like rams, and the hills like lambs among the sheep.
{113:5} What happened to you, O sea, so that you fled, and to you, O Jordan, so that you were turned back again?
{113:6} What happened to you, O mountains, so that you exulted like rams, and to you, O hills, so that you exulted like lambs among the sheep?
{113:7} Before the face of the Lord, the earth was moved, before the face of the God of Jacob.
{113:8} He converted the rock into pools of water, and the cliff into fountains of waters.

{113:9} Not to us, O Lord, not to us, but to your name give glory.
{113:10} Give glory to your mercy and your truth, lest the Gentiles should say, “Where is their God?”
{113:11} But our God is in heaven. All things whatsoever that he has willed, he has done.
{113:12} The idols of the nations are silver and gold, the works of the hands of men.
{113:13} They have mouths, and do not speak; they have eyes, and do not see.
{113:14} They have ears, and do not hear; they have noses, and do not smell.
{113:15} They have hands, and do not feel; they have feet, and do not walk. Neither will they cry out with their throat.
{113:16} Let those who make them become like them, along with all who trust in them.
{113:17} The house of Israel has hoped in the Lord. He is their helper and their protector.
{113:18} The house of Aaron has hoped in the Lord. He is their helper and their protector.
{113:19} Those who fear the Lord have hoped in the Lord. He is their helper and their protector.
{113:20} The Lord has been mindful of us, and he has blessed us. He has blessed the house of Israel. He has blessed the house of Aaron.
{113:21} He has blessed all who fear the Lord, the small with the great.
{113:22} May the Lord add blessings upon you: upon you, and upon your sons.
{113:23} Blessed are you by the Lord, who made heaven and earth.
{113:24} The heaven of heaven is for the Lord, but the earth he has given to the sons of men.
{113:25} The dead will not praise you, Lord, and neither will all those who descend into Hell.
{113:26} But we who live will bless the Lord, from this time forward, and even forever.

[Psalm 114] (116A)
{114:1} Alleluia. I have loved: therefore, the Lord will heed the voice of my prayer.
{114:2} For he has inclined his ear to me. And in my days, I will call upon him.
{114:3} The sorrows of death have surrounded me, and the perils of Hell have found me. I have found tribulation and sorrow.
{114:4} And so, I called upon the name of the Lord. O Lord, free my soul.
{114:5} Merciful is the Lord, and just. And our God is compassionate.
{114:6} The Lord is the keeper of little ones. I was humbled, and he freed me.
{114:7} Turn again, my soul, to your rest. For the Lord has done good to you.
{114:8} For he has rescued my soul from death, my eyes from tears, my feet from slipping.
{114:9} I will please the Lord in the land of the living.

[Psalm 115] (116B)
{115:1} Alleluia. I had confidence, because of what I was saying, but then I was greatly humbled.
{115:2} I said in my excess, “Every man is a liar.”
{115:3} What shall I repay to the Lord, for all the things that he has repaid to me?
{115:4} I will take up the cup of salvation, and I will call upon the name of the Lord.
{115:5} I will repay my vows to the Lord, in the sight of all his people.
{115:6} Precious in the sight of the Lord is the death of his holy ones.
{115:7} O Lord, because I am your servant, your servant and the son of your handmaid, you have broken my bonds.
{115:8} I will sacrifice to you the sacrifice of praise, and I will invoke the name of the Lord.
{115:9} I will repay my vows to the Lord in the sight of all his people,
{115:10} in the courts of the house of the Lord, in your midst, O Jerusalem.

[Psalm 116] (117)
{116:1} Alleluia. All nations, praise the Lord. All peoples, praise him.
{116:2} For his mercy has been confirmed over us. And the truth of the Lord remains for all eternity.

[Psalm 117] (118)
{117:1} Alleluia. Confess to the Lord, for he is good, for his mercy is forever.
{117:2} Let Israel now say: For he is good, for his mercy is forever.
{117:3} Let the house of Aaron now say: For his mercy is forever.
{117:4} Let those who fear the Lord now say: For his mercy is forever.
{117:5} In my tribulation, I called upon the Lord. And the Lord heeded me with generosity.
{117:6} The Lord is my helper. I will not fear what man can do to me.
{117:7} The Lord is my helper. And I will look down upon my enemies.
{117:8} It is good to trust in the Lord, rather than to trust in man.
{117:9} It is good to hope in the Lord, rather than to hope in leaders.
{117:10} All the nations have surrounded me. And, in the name of the Lord, I have been avenged over them.
{117:11} Surrounding me, they closed in on me. And, in the name of the Lord, I have been avenged over them.
{117:12} They surrounded me like a swarm, and they burned like fire among the thorns. And, in the name of the Lord, I have been avenged over them.
{117:13} Having been pushed, I was overturned so as to fall. But the Lord took me up.
{117:14} The Lord is my strength and my praise. And he has become my salvation.
{117:15} A voice of exultation and salvation is in the tabernacles of the just.
{117:16} The right hand of the Lord has wrought virtue. The right hand of the Lord has exalted me. The right hand of the Lord has wrought virtue.
{117:17} I will not die, but I will live. And I will declare the works of the Lord.
{117:18} When chastising, the Lord chastised me. But he has not delivered me over to death.
{117:19} Open the gates of justice to me. I will enter them, and I will confess to the Lord.
{117:20} This is the gate of the Lord. The just will enter by it.
{117:21} I will confess to you because you have heard me. And you have become my salvation.
{117:22} The stone which the builders have rejected, this has become the head of the corner.
{117:23} By the Lord has this been done, and it is a wonder before our eyes.
{117:24} This is the day that the Lord has made. Let us exult and rejoice in it.
{117:25} O Lord, grant salvation to me. O Lord, grant good prosperity.
{117:26} Blessed is he who arrives in the name of the Lord. We have blessed you from the house of the Lord.
{117:27} The Lord is God, and he has enlightened us. Establish a solemn day amid a dense crowd, even to the horn of the altar.
{117:28} You are my God, and I will confess to you. You are my God, and I will exalt you. I will confess to you, for you have heeded me. And you have become my salvation.
{117:29} Confess to the Lord, for he is good, for his mercy is forever.

[Psalm 118] (119)
{118:1} Alleluia. ALEPH. Blessed are the immaculate in the way, who walk in the law of the Lord.
{118:2} Blessed are those who examine his testimonies. They seek him with their whole heart.
{118:3} For those who work iniquity have not walked in his ways.
{118:4} You have ordered your commandments to be kept most diligently.
{118:5} I wish that my ways may be directed so as to keep your justifications.
{118:6} Then I will not be confounded, when I will look into all your commandments.
{118:7} I will confess to you with honesty of heart. In this way, I have learned the judgments of your justice.
{118:8} I will keep your justifications. Do not utterly abandon me.
{118:9} BETH. By what does an adolescent correct his way? By keeping to your words.
{118:10} With my whole heart, I have sought you. Do not let me be driven away from your commandments.
{118:11} I have hidden your eloquence in my heart, so that I may not sin against you.
{118:12} Blessed are you, O Lord. Teach me your justifications.
{118:13} With my lips, I have pronounced all the judgments of your mouth.
{118:14} I have been delighted in the way of your testimonies, as if in all riches.
{118:15} I will be trained in your commandments, and I will consider your ways.
{118:16} I will meditate on your justifications. I will not forget your words.
{118:17} GHIMEL. Repay your servant, revive me; and I will keep your words.
{118:18} Reveal to my eyes, and I will consider the wonders of your law.
{118:19} I am a sojourner on the earth. Do not hide your commandments from me.
{118:20} My soul has longed to desire your justifications at all times.
{118:21} You have rebuked the arrogant. Those who decline from your commandments are accursed.
{118:22} Take me away from disgrace and contempt, for I have sought your testimonies.
{118:23} For even the leaders sat and spoke against me. But your servant has been trained in your justifications.
{118:24} For your testimonies are also my meditation, and your justifications are my counsel.
{118:25} DALETH. My soul has adhered to the pavement. Revive me according to your word.
{118:26} I have declared my ways, and you have heeded me. Teach me your justifications.
{118:27} Instruct me in the way of your justifications, and I will be trained in your wonders.
{118:28} My soul has slumbered because of weariness. Confirm me in your words.
{118:29} Remove the way of iniquity from me, and have mercy on me by your law.
{118:30} I have chosen the way of truth. I have not forgotten your judgments.
{118:31} I have adhered to your testimonies, O Lord. Do not be willing to confound me.
{118:32} I have run by way of your commandments, when you enlarged my heart.
{118:33} HE. O Lord, place the law before me, the way of your justifications, and I will always inquire into it.
{118:34} Give me understanding, and I will examine your law. And I will keep it with my whole heart.
{118:35} Lead me according to the path of your commandments, for I have desired this.
{118:36} Bend my heart with your testimonies, and not with avarice.
{118:37} Turn my eyes away, lest they see what is vain. Revive me in your way.
{118:38} Station your eloquence with your servant, along with your fear.
{118:39} Cut off my disgrace, which I have taken up, for your judgments are delightful.
{118:40} Behold, I have longed for your commandments. Revive me in your fairness.
{118:41} VAU. And let your mercy overwhelm me, O Lord: your salvation according to your eloquence.
{118:42} And I will respond to those who reproach me by word, for I have hoped in your words.
{118:43} And do not utterly take away the word of truth from my mouth. For in your judgments, I have hoped beyond hope.
{118:44} And I will always keep your law, in this age and forever and ever.
{118:45} And I have wandered far and wide, because I was seeking your commandments.
{118:46} And I spoke of your testimonies in the sight of kings, and I was not confounded.
{118:47} And I meditated on your commandments, which I loved.
{118:48} And I lifted up my hands to your commandments, which I loved. And I was trained in your justifications.
{118:49} ZAIN. Be mindful of your word to your servant, by which you have given me hope.
{118:50} This has consoled me in my humiliation, for your word has revived me.
{118:51} The arrogant act altogether iniquitously, but I have not turned aside from your law.
{118:52} I called to mind your judgments of antiquity, O Lord, and I was consoled.
{118:53} Faintness has taken hold of me, because of the sinners, those who abandon your law.
{118:54} Your justifications were the subject of my worthy singing, in the place of my pilgrimage.
{118:55} During the night, I remembered your name, O Lord, and I kept your law.
{118:56} This has happened to me because I sought your justifications.
{118:57} HETH. O Lord, my portion, I have said that I would keep your law.
{118:58} I have beseeched your face with my whole heart. Be merciful to me according to your word.
{118:59} I have considered my ways, and I have turned my feet toward your testimonies.
{118:60} I have been prepared, and I have not been disturbed, so that I may keep your commandments.
{118:61} The ropes of the impious have encircled me, and I have not forgotten your law.
{118:62} I arose in the middle of the night to confess to you, over the judgments of your justification.
{118:63} I am a partaker with all those who fear you and who keep your commandments.
{118:64} The earth, O Lord, is full of your mercy. Teach me your justifications.
{118:65} TETH. You have done well with your servant, O Lord, according to your word.
{118:66} Teach me goodness and discipline and knowledge, for I have trusted your commandments.
{118:67} Before I was humbled, I committed offenses; because of this, I have kept to your word.
{118:68} You are good, so in your goodness teach me your justifications.
{118:69} The iniquity of the arrogant has been multiplied over me. Yet I will examine your commandments with all my heart.
{118:70} Their heart has been curdled like milk. Truly, I have meditated on your law.
{118:71} It is good for me that you humbled me, so that I may learn your justifications.
{118:72} The law of your mouth is good for me, beyond thousands of gold and silver pieces.
{118:73} IOD. Your hands have created me and formed me. Give me understanding, and I will learn your commandments.
{118:74} Those who fear you will see me, and they will rejoice. For I have greatly hoped in your words.
{118:75} I know, O Lord, that your judgments are fairness. And in your truth, you have humbled me.
{118:76} Let it be your mercy that consoles me, according to your eloquence to your servant.
{118:77} Let your compassion draw near to me, and I will live. For your law is my meditation.
{118:78} Let the arrogant be confounded, for unjustly they have done iniquity to me. But I will be trained in your commandments.
{118:79} Let those who fear you turn to me, along with those who know your testimonies.
{118:80} Let my heart be immaculate in your justifications, so that I may not be confounded.
{118:81} CAPH. My soul has faltered in your salvation, yet in your word, I have hoped beyond hope.
{118:82} My eyes have failed in your eloquence, saying, “When will you console me?”
{118:83} For I have become like a wineskin in the frost. I have not forgotten your justifications.
{118:84} How many are the days of your servant? When will you bring judgment against those who persecute me?
{118:85} The iniquitous have spoken fables to me. But these are unlike your law.
{118:86} All your commandments are truth. They have been persecuting me unjustly: assist me.
{118:87} They have nearly consumed me on earth. Yet I have not forsaken your commandments.
{118:88} Revive me according to your mercy. And I will keep the testimonies of your mouth.
{118:89} LAMED. O Lord, your word remains firm in heaven, for all eternity.
{118:90} Your truth is from generation to generation. You have founded the earth, and it remains firm.
{118:91} By your ordinance, the day perseveres. For all things are in service to you.
{118:92} If your law had not been my meditation, then perhaps I would have perished in my humiliation.
{118:93} I will not forget your justifications, for eternity. For by them, you have enlivened me.
{118:94} I am yours. Accomplish my salvation. For I have inquired into your justifications.
{118:95} The sinners have waited for me, in order to destroy me. I have understood your testimonies.
{118:96} I have seen the end of the consummation of all things. Your commandment is exceedingly broad.
{118:97} MEM. How have I loved your law, O Lord? It is my meditation all day long.
{118:98} By your commandment, you have made me able to see far, beyond my enemies. For it is with me for eternity.
{118:99} I have understood beyond all my teachers. For your testimonies are my meditation.
{118:100} I have understood beyond the elders. For I have searched your commandments.
{118:101} I have prohibited my feet from every evil way, so that I may keep your words.
{118:102} I have not declined from your judgments, because you have stationed a law for me.
{118:103} How sweet is your eloquence to my palate, more so than honey to my mouth!
{118:104} I obtained understanding by your commandments. Because of this, I have hated every way of iniquity.
{118:105} NUN. Your word is a lamp to my feet and a light to my paths.
{118:106} I have sworn it, and so I am determined to keep the judgments of your justice.
{118:107} I have been altogether humbled, Lord. Revive me according to your word.
{118:108} Make the willing offerings of my mouth well pleasing, Lord, and teach me your judgments.
{118:109} My soul is always in my hands, and I have not forgotten your law.
{118:110} Sinners have set a snare for me, yet I have not strayed from your commandments.
{118:111} I have acquired your testimonies as an inheritance unto eternity, because they are the exultation of my heart.
{118:112} I have inclined my heart to do your justifications for eternity, as a recompense.
{118:113} SAMECH. I have hated the iniquitous, and I have loved your law.
{118:114} You are my helper and my supporter. And in your word, I have greatly hoped.
{118:115} Turn away from me, you malignant ones. And I will examine the commandments of my God.
{118:116} Uphold me according to your eloquence, and I will live. And let me not be confounded in my expectation.
{118:117} Help me, and I will be saved. And I will meditate always on your justifications.
{118:118} You have despised all those who fell away from your judgments. For their intention is unjust.
{118:119} I have considered all the sinners of the earth to be transgressors. Therefore, I have loved your testimonies.
{118:120} Pierce my flesh with your fear, for I am afraid of your judgments.
{118:121} AIN. I have accomplished judgment and justice. Do not hand me over to those who slander me.
{118:122} Uphold your servant in what is good. And do not allow the arrogant to slander me.
{118:123} My eyes have failed in your salvation and in the eloquence of your justice.
{118:124} Deal with your servant according to your mercy, and teach me your justifications.
{118:125} I am your servant. Give me understanding, so that I may know your testimonies.
{118:126} It is time to act, O Lord. They have dissipated your law.
{118:127} Therefore, I have loved your commandments beyond gold and topaz.
{118:128} Because of this, I was directed toward all your commandments. I held hatred for every iniquitous way.
{118:129} PHE. Your testimonies are wonderful. Therefore, my soul has been examined by them.
{118:130} The declaration of your words illuminates, and it gives understanding to little ones.
{118:131} I opened my mouth and drew breath, for I desired your commandments.
{118:132} Gaze upon me and be merciful to me, according to the judgment of those who love your name.
{118:133} Direct my steps according to your eloquence, and let no injustice rule over me.
{118:134} Redeem me from the slanders of men, so that I may keep your commandments.
{118:135} Make your face shine upon your servant, and teach me your justifications.
{118:136} My eyes have gushed like springs of water, because they have not kept your law.
{118:137} SADE. You are just, O Lord, and your judgment is right.
{118:138} You have commanded justice: your testimonies and your truth even more so.
{118:139} My zeal has caused me to pine away, because my enemies have forgotten your words.
{118:140} Your eloquence has been greatly enflamed, and your servant has loved it.
{118:141} I am young and treated with contempt. But I have not forgotten your justifications.
{118:142} Your justice is justice for all eternity, and your law is truth.
{118:143} Tribulation and anguish have found me. Your commandments are my meditation.
{118:144} Your testimonies are fairness unto eternity. Give me understanding, and I will live.
{118:145} COPH. I cried out with my whole heart. Heed me, O Lord. I will ask for your justifications.
{118:146} I cried out to you. Save me, so that I may keep your commandments.
{118:147} I arrived first in maturity, and so I cried out. For in your words, I have hoped beyond hope.
{118:148} My eyes preceded the dawn for you, so that I might meditate on your eloquence.
{118:149} Hear my voice according to your mercy, O Lord. And revive me according to your judgment.
{118:150} Those who persecute me have drawn near to iniquity, but they have been brought far from your law.
{118:151} You are near, O Lord, and all your ways are truth.
{118:152} I have known from the beginning about your testimonies. For you founded them in eternity.
{118:153} RES. See my humiliation and rescue me, for I have not forgotten your law.
{118:154} Judge my judgment and redeem me. Revive me because of your eloquence.
{118:155} Salvation is far from sinners, because they have not inquired about your justifications.
{118:156} Many are your mercies, O Lord. Enliven me according to your judgment.
{118:157} Many are those who persecute me and who trouble me. I have not turned away from your testimonies.
{118:158} I saw the prevaricators, and I pine away. For they have not kept your word.
{118:159} O Lord, see how I have loved your commandments. Revive me in your mercy.
{118:160} The beginning of your words is truth. All the judgments of your justice are for eternity.
{118:161} SIN. The leaders have persecuted me without cause. And my heart has been awed by your words.
{118:162} I will rejoice over your eloquence, like one who has found many spoils.
{118:163} I have held hatred for iniquity, and I have abhorred it. Yet I have loved your law.
{118:164} Seven times a day, I uttered praise to you about the judgments of your justice.
{118:165} Those who love your law have great peace, and there is no scandal for them.
{118:166} I have waited for your salvation, O Lord. And I have loved your commandments.
{118:167} My soul has kept to your testimonies and has loved them exceedingly.
{118:168} I have served your commandments and your testimonies. For all my ways are before your sight.
{118:169} TAU. O Lord, let my supplication draw near in your sight. Grant understanding to me according to your eloquence.
{118:170} Let my petition enter before you. Rescue me according to your word.
{118:171} A hymn will burst forth from my lips, when you will teach me your justifications.
{118:172} My tongue will pronounce your eloquence. For all your commandments are fairness.
{118:173} Let it be your hand that saves me. For I have chosen your commandments.
{118:174} O Lord, I have longed for your salvation, and your law is my meditation.
{118:175} My soul will live and will praise you, and your judgments will assist me.
{118:176} I have gone astray like a sheep that is lost. Seek out your servant, for I have not forgotten your commandments.

[Psalm 119] (120)
{119:1} A Canticle in steps. When troubled, I cried out to the Lord, and he heard me.
{119:2} O Lord, free my soul from lips of iniquity and from the deceitful tongue.
{119:3} What will be given to you, or what will be added to you, for a deceitful tongue?:
{119:4} the sharp arrows of the powerful, along with the burning coals of desolation.
{119:5} Woe to me, for my sojourning has been prolonged. I have lived with the inhabitants of Kedar.
{119:6} My soul has long been a sojourner.
{119:7} With those who hated peace, I was peaceful. When I spoke to them, they fought against me without cause.

[Psalm 120] (121)
{120:1} A Canticle in steps. I have lifted up my eyes to the mountains; from thence help will come to me.
{120:2} My help is from the Lord, who made heaven and earth.
{120:3} May he not allow your foot to be moved, and may he not slumber, who guards you.
{120:4} Behold, he who guards Israel will neither sleep, nor slumber.
{120:5} The Lord is your keeper, the Lord is your protection, above your right hand.
{120:6} The sun will not burn you by day, nor the moon by night.
{120:7} The Lord guards you from all evil. May the Lord guard your soul.
{120:8} May the Lord guard your entrance and your exit, from this time forward and even forever.

[Psalm 121] (122)
{121:1} A Canticle in steps. I rejoiced in the things that were said to me: “We shall go into the house of the Lord.”
{121:2} Our feet were standing in your courts, O Jerusalem.
{121:3} Jerusalem has been built as a city, whose participation is unto itself.
{121:4} For to that place, the tribes ascended, the tribes of the Lord: the testimony of Israel, to confess to the name of the Lord.
{121:5} For in that place, seats have sat down in judgment, seats above the house of David.
{121:6} Petition for the things that are for the peace of Jerusalem, and for abundance for those who love you.
{121:7} Let peace be in your virtue, and abundance in your towers.
{121:8} For the sake of my brothers and my neighbors, I spoke peace about you.
{121:9} For the sake of the house of the Lord our God, I sought good things for you.

[Psalm 122] (123)
{122:1} A Canticle in steps. I have lifted up my eyes to you, who dwells in the heavens.
{122:2} Behold, as the eyes of the servants are on the hands of their masters, as the eyes of the handmaid are on the hands of her mistress, so our eyes are upon the Lord our God, until he may be merciful to us.
{122:3} Have mercy on us, O Lord, have mercy on us. For we have been filled with utter disdain.
{122:4} For our soul has been greatly filled. We are the disgrace of those who have abundance and the disdain of the arrogant.

[Psalm 123] (124)
{123:1} A Canticle in steps. If the Lord had not been with us, let Israel now say it:
{123:2} if the Lord had not been with us, when men rose up against us,
{123:3} perhaps they would have swallowed us alive. When their fury was enraged against us,
{123:4} perhaps the waters would have engulfed us.
{123:5} Our soul has passed through a torrent. Perhaps, our soul had even passed through intolerable water.
{123:6} Blessed is the Lord, who has not given us into the harm of their teeth.
{123:7} Our soul has been snatched away like a sparrow from the snare of the hunters. The snare has been broken, and we have been freed.
{123:8} Our help is in the name of the Lord, who made heaven and earth.

[Psalm 124] (125)
{124:1} A Canticle in steps. Those who trust in the Lord will be like the mountain of Zion. He will not be disturbed for eternity, who dwells
{124:2} in Jerusalem. Mountains surround it. And the Lord surrounds his people, from this time forward and even forever.
{124:3} For the Lord will not allow the rod of sinners to remain over the lot of the just, so that the just may not extend their hands toward iniquity.
{124:4} Do good, O Lord, to the good and to the upright of heart.
{124:5} But those who turn away into obligation, the Lord will lead away with the workers of iniquity. Peace be upon Israel.

[Psalm 125] (126)
{125:1} A Canticle in steps. When the Lord turned back the captivity of Zion, we became like those who are consoled.
{125:2} Then our mouth was filled with gladness and our tongue with exultation. Then they will say among the nations: “The Lord has done great things for them.”
{125:3} The Lord has done great things for us. We have become joyful.
{125:4} Convert our captivity, O Lord, like a torrent in the south.
{125:5} Those who sow in tears shall reap in exultation.
{125:6} When departing, they went forth and wept, sowing their seeds.
{125:7} But when returning, they will arrive with exultation, carrying their sheaves.

[Psalm 126] (127)
{126:1} A Canticle in steps: of Solomon. Unless the Lord has built the house, those who build it have labored in vain. Unless the Lord has guarded the city, he who guards it watches in vain.
{126:2} It is in vain that you rise before daylight, that you rise up after you have sat down, you who chew the bread of sorrow. Whereas, to his beloved, he will give sleep.
{126:3} Behold, the inheritance of the Lord is sons, the reward is the fruit of the womb.
{126:4} Like arrows in the hand of the powerful, so are the sons of those who have been cast out.
{126:5} Blessed is the man who has filled his desire from these things. He will not be confounded when he speaks to his enemies at the gate.

[Psalm 127] (128)
{127:1} A Canticle in steps. Blessed are all those who fear the Lord, who walk in his ways.
{127:2} For you will eat by the labors of your hands. Blessed are you, and it will be well with you.
{127:3} Your wife is like an abundant vine on the sides of your house. Your sons are like young olive trees surrounding your table.
{127:4} Behold, so will the man be blessed who fears the Lord.
{127:5} May the Lord bless you from Zion, and may you see the good things of Jerusalem, all the days of your life.
{127:6} And may you see the sons of your sons. Peace be upon Israel.

[Psalm 128] (129)
{128:1} A Canticle in steps. They have often fought against me from my youth, let Israel now say:
{128:2} they have often fought against me from my youth, yet they could not prevail over me.
{128:3} The sinners have made fabrications behind my back. They have prolonged their iniquity.
{128:4} The just Lord will cut the necks of sinners.
{128:5} Let all those who hate Zion be confounded and turned backwards.
{128:6} Let them be like grass on the rooftops, which withers before it can be pulled up:
{128:7} with it, he who reaps does not fill his hand and he who gathers sheaves does not fill his bosom.
{128:8} And those who were passing by have not said to them: “The blessing of the Lord be upon you. We have blessed you in the name of the Lord.”

[Psalm 129] (130)
{129:1} A Canticle in steps. From the depths, I have cried out to you, O Lord.
{129:2} O Lord, hear my voice. Let your ears be attentive to the voice of my supplication.
{129:3} If you, O Lord, were to heed iniquities, who, O Lord, could persevere?
{129:4} For with you, there is forgiveness, and because of your law, I persevered with you, Lord. My soul has persevered in his word.
{129:5} My soul has hoped in the Lord.
{129:6} From the morning watch, even until night, let Israel hope in the Lord.
{129:7} For with the Lord there is mercy, and with him there is bountiful redemption.
{129:8} And he will redeem Israel from all his iniquities.

[Psalm 130] (131)
{130:1} A Canticle in steps: of David. O Lord, my heart has not been exalted, and my eyes have not been raised up. Neither have I walked in greatness, nor in wonders beyond me.
{130:2} When I was not humble in thought, then I lifted up my soul. Like one who has been weaned from his mother, so was I recompensed in my soul.
{130:3} Let Israel hope in the Lord, from this time forward and even forever.

[Psalm 131] (132)
{131:1} A Canticle in steps. O Lord, remember David and all his meekness,
{131:2} how he swore to the Lord, how he made a vow to the God of Jacob:
{131:3} I shall not enter into the tabernacle of my house, nor climb into the bed where I lie down;
{131:4} I shall not give sleep to my eyes, nor slumber to my eyelids
{131:5} and rest to my temples, until I find a place for the Lord, a tabernacle for the God of Jacob.
{131:6} Behold, we heard of it in Ephrathah. We discovered it in the fields of the forest.
{131:7} We will enter into his tabernacle. We will adore in the place where his feet stood.
{131:8} Rise up, O Lord, into your resting place. You and the ark of your sanctification.
{131:9} Let your priests be clothed with justice, and let your saints exult.
{131:10} For the sake of your servant David, do not turn away the face of your Christ.
{131:11} The Lord has sworn the truth to David, and he will not disappoint: I will set upon your throne from the fruit of your lineage.
{131:12} If your sons will keep my covenant and these, my testimonies, which I will teach to them, then their sons will sit upon your throne even forever.
{131:13} For the Lord has chosen Zion. He has chosen it as his dwelling place.
{131:14} This is my resting place, forever and ever. Here I will dwell, for I have chosen it.
{131:15} When blessing, I will bless her widow. I will satisfy her poor with bread.
{131:16} I will clothe her priests with salvation, and her saints will rejoice with great joy.
{131:17} There, I will produce a horn to David. There, I have prepared a lamp for my Christ.
{131:18} I will clothe his enemies with confusion. But my sanctification will flourish over him.

[Psalm 132] (133)
{132:1} A Canticle in steps: of David. Behold, how good and how pleasing it is for brothers to dwell in unity.
{132:2} It is like the ointment on the head that descended to the beard, the beard of Aaron, which descended to the hem of his garment.
{132:3} It is like the dew of Hermon, which descended from mount Zion. For in that place, the Lord has commanded a blessing, and life, even unto eternity.

[Psalm 133] (134)
{133:1} A Canticle in steps. Behold, bless the Lord now, all you servants of the Lord, who stand in the house of the Lord, in the courts of the house of our God.
{133:2} In the nights, lift up your hands in sanctity, and bless the Lord.
{133:3} May the Lord, who made heaven and earth, bless you from Zion.

[Psalm 134] (135)
{134:1} Alleluia. Praise the name of the Lord. You servants, praise the Lord.
{134:2} You who stand in the house of the Lord, in the courts of the house of our God:
{134:3} praise the Lord, for the Lord is good. Sing psalms to his name, for it is sweet.
{134:4} For the Lord has chosen Jacob for himself, Israel for his own possession.
{134:5} For I have known that the Lord is great, and our God is before all gods.
{134:6} All things whatsoever that he willed, the Lord did: in heaven, on earth, in the sea, and in all the deep places.
{134:7} He leads clouds from the ends of the earth. He has created lightnings in the rain. He has produced winds from his storehouses.
{134:8} He struck the first-born of Egypt, from man even to cattle.
{134:9} He sent signs and wonders into your midst, O Egypt: upon Pharaoh and upon all his servants.
{134:10} He has struck many nations, and he has slaughtered strong kings:
{134:11} Sihon, king of the Amorites, and Og, king of Bashan, and all the kingdoms of Canaan.
{134:12} And he gave their land as an inheritance, as an inheritance for his people Israel.
{134:13} Your name, O Lord, is in eternity. Your memorial, O Lord, is from generation to generation.
{134:14} For the Lord will judge his people, and he will be petitioned by his servants.
{134:15} The idols of the Gentiles are silver and gold, the works of the hands of men.
{134:16} They have a mouth, and do not speak. They have eyes, and do not see.
{134:17} They have ears, and do not hear. For neither is there any breath in their mouths.
{134:18} Let those who make them become like them, along with all who trust in them.
{134:19} Bless the Lord, O house of Israel. Bless the Lord, O house of Aaron.
{134:20} Bless the Lord, O house of Levi. You who fear the Lord, bless the Lord.
{134:21} The Lord is blessed from Zion, by those who dwell in Jerusalem.

[Psalm 135] (136)
{135:1} Alleluia. Confess to the Lord, for he is good: for his mercy is eternal.
{135:2} Confess to the God of gods, for his mercy is eternal.
{135:3} Confess to the Lord of lords, for his mercy is eternal.
{135:4} He alone performs great miracles, for his mercy is eternal.
{135:5} He made the heavens with understanding, for his mercy is eternal.
{135:6} He established the earth above the waters, for his mercy is eternal.
{135:7} He made the great lights, for his mercy is eternal:
{135:8} the sun to rule the day, for his mercy is eternal:
{135:9} the moon and the stars to rule the night, for his mercy is eternal.
{135:10} He struck Egypt along with their first-born, for his mercy is eternal.
{135:11} He led Israel away from their midst, for his mercy is eternal:
{135:12} with a powerful hand and an outstretched arm, for his mercy is eternal.
{135:13} He divided the Red Sea into separate parts, for his mercy is eternal.
{135:14} And he led out Israel through the middle of it, for his mercy is eternal.
{135:15} And he shook off Pharaoh and his army in the Red Sea, for his mercy is eternal.
{135:16} He led his people through the desert, for his mercy is eternal.
{135:17} He has struck great kings, for his mercy is eternal.
{135:18} And he has slaughtered strong kings, for his mercy is eternal:
{135:19} Sihon, king of the Amorites, for his mercy is eternal:
{135:20} and Og, king of Bashan, for his mercy is eternal.
{135:21} And he granted their land as an inheritance, for his mercy is eternal:
{135:22} as an inheritance for his servant Israel, for his mercy is eternal.
{135:23} For he was mindful of us in our humiliation, for his mercy is eternal.
{135:24} And he redeemed us from our enemies, for his mercy is eternal.
{135:25} He gives food to all flesh, for his mercy is eternal.
{135:26} Confess to the God of heaven, for his mercy is eternal.
{135:27} Confess to the Lord of lords, for his mercy is eternal.

[Psalm 136] (137)
{136:1} A Psalm of David: to Jeremiah. Above the rivers of Babylon, there we sat and wept, while we remembered Zion.
{136:2} By the willow trees, in their midst, we hung up our instruments.
{136:3} For, in that place, those who led us into captivity questioned us about the words of the songs. And those who carried us away said: “Sing us a hymn from the songs of Zion.”
{136:4} How can we sing a song of the Lord in a foreign land?
{136:5} If I ever forget you, Jerusalem, let my right hand be forgotten.
{136:6} May my tongue adhere to my jaws, if I do not remember you, if I do not set Jerusalem first, as the beginning of my joy.
{136:7} O Lord, call to mind the sons of Edom, in the day of Jerusalem, who say: “Despoil it, despoil it, even to its foundation.”
{136:8} O daughter of Babylon, have pity. Blessed is he who will repay you with your payment, which you have paid to us.
{136:9} Blessed is he who will take hold of your little ones and dash them against the rock.

[Psalm 137] (138)
{137:1} Of David himself. O Lord, I will confess to you with my whole heart, for you have heard the words of my mouth. I will sing psalms to you in the sight of the Angels.
{137:2} I will adore before your holy temple, and I will confess your name: it is above your mercy and your truth. For you have magnified your holy name above all.
{137:3} On whatever day that I will call upon you: hear me. You will multiply virtue in my soul.
{137:4} May all the kings of the earth confess to you, O Lord. For they have heard all the words of your mouth.
{137:5} And let them sing in accordance with the ways of the Lord. For great is the glory of the Lord.
{137:6} For the Lord is exalted, and he looks with favor on the humble. But the lofty he knows from a distance.
{137:7} If I wander into the midst of tribulation, you will revive me. For you extended your hand against the wrath of my enemies. And your right hand has accomplished my salvation.
{137:8} The Lord will provide retribution on my behalf. O Lord, your mercy is forever. Do not disdain the works of your hands.

[Psalm 138] (139)
{138:1} Unto the end. A Psalm of David. O Lord, you have examined me, and you have known me.
{138:2} You have known my sitting down and my rising up again.
{138:3} You have understood my thoughts from afar. My path and my fate, you have investigated.
{138:4} And you have foreseen all my ways. For there is no word in my tongue.
{138:5} Behold, O Lord, you have known all things: the newest and the very old. You have formed me, and you have placed your hand over me.
{138:6} Your knowledge has become a wonder to me. It has been reinforced, and I am not able to prevail against it.
{138:7} Where will I go from your Spirit? And where will I flee from your face?
{138:8} If I ascend into heaven, you are there. If I descend into Hell, you are near.
{138:9} If I assume my feathers in early morning, and dwell in the utmost parts of the sea,
{138:10} even there, your hand will lead me forth, and your right hand will hold me.
{138:11} And I said: Perhaps darkness will overwhelm me, and the night will be my illumination, to my delight.
{138:12} But darkness will not be impenetrable to you, and night will illuminate like the day: for just as its darkness is, so also is its light.
{138:13} For you have possessed my temperament. You have supported me from the womb of my mother.
{138:14} I will confess to you, for you have been magnified terribly. Your works are miraculous, as my soul knows exceedingly well.
{138:15} My bone, which you have made in secret, has not been hidden from you, and my substance is in accord with the lower parts of the earth.
{138:16} Your eyes saw my imperfection, and all this shall be written in your book. Days will be formed, and no one shall be in them.
{138:17} But to me, O God, your friends have been greatly honored. Their first ruler has been exceedingly strengthened.
{138:18} I will number them, and they will be more numerous than the sand. I rose up, and I am still with you.
{138:19} O God, if only you would cut down sinners. You men of blood: depart from me.
{138:20} For you say in thought: They will accept your cities in vain.
{138:21} Have I not hated those who hated you, Lord, and wasted away because of your enemies?
{138:22} I have hated them with a perfect hatred, and they have become enemies to me.
{138:23} Examine me, O God, and know my heart. Question me, and know my paths.
{138:24} And see if there might be in me the way of iniquity, and lead me in the way of eternity.

[Psalm 139] (140)
{139:1} Unto the end. A Psalm of David.
{139:2} Rescue me, O Lord, from the evil man. Rescue me from the iniquitous leader.
{139:3} Those who have devised iniquities in their hearts: all day long they constructed conflicts.
{139:4} They have sharpened their tongues like a serpent. The venom of asps is under their lips.
{139:5} Preserve me, O Lord, from the hand of the sinner, and rescue me from men of iniquity. They have decided to supplant my steps.
{139:6} The arrogant have hidden a snare for me. And they have stretched out cords for a snare. They have placed a stumbling block for me near the road.
{139:7} I said to the Lord: You are my God. O Lord, heed the voice of my supplication.
{139:8} Lord, O Lord, the strength of my salvation: you have overshadowed my head in the day of war.
{139:9} O Lord, do not hand me over to the sinner by my desire. They have plotted against me. Do not abandon me, lest they should triumph.
{139:10} The head of those who encompass me, the labor of their lips, will overwhelm them.
{139:11} Burning coals will fall upon them. You will cast them down into the fire, into miseries that they will not be able to withstand.
{139:12} A talkative man will not be guided aright upon the earth. Evils will drag the unjust man unto utter ruin.
{139:13} I know that the Lord will accomplish justice for the needy and vindication for the poor.
{139:14} So then, truly, the just will confess your name, and the upright will dwell with your countenance.

[Psalm 140] (141)
{140:1} A Psalm of David. O Lord, I have cried out to you, hear me. Attend to my voice, when I cry out to you.
{140:2} Let my prayer be guided like incense in your sight: the lifting up of my hands, like the evening sacrifice.
{140:3} O Lord, station a guard over my mouth and a door enclosing my lips.
{140:4} Do not turn aside my heart to words of malice, to making excuses for sins, with men who work iniquity; and I will not communicate, even with the best of them.
{140:5} The just one will correct me with mercy, and he will rebuke me. But do not allow the oil of the sinner to fatten my head. For my prayer will still be toward their good will.
{140:6} Their judges have been engulfed, joined to the rocks. They will hear my words, which have prevailed,
{140:7} as when the lava of the earth has erupted above ground. Our bones have been scattered beside Hell.
{140:8} For Lord, O Lord, my eyes look to you. In you, I have hoped. Do not take away my soul.
{140:9} Protect me from the snare that they have set up for me and from the scandals of those who work iniquity.
{140:10} The sinners will fall into his net. I am alone, until I pass over.

[Psalm 141] (142)
{141:1} The understanding of David. A prayer, when he was in the cave.
{141:2} With my voice, I cried out to the Lord. With my voice, I made supplication to the Lord.
{141:3} In his sight, I pour out my prayer, and before him, I declare my tribulation.
{141:4} Though my spirit may become faint within me, even then, you have known my paths. Along this way, which I have been walking, they have hidden a snare for me.
{141:5} I considered toward the right, and I looked, but there was no one who would know me. Flight has perished before me, and there is no one who has concern for my soul.
{141:6} I cried out to you, O Lord. I said: You are my hope, my portion in the land of the living.
{141:7} Attend to my supplication. For I have been humbled exceedingly. Free me from my persecutors, for they have been fortified against me.
{141:8} Lead my soul out of confinement in order to confess your name. The just are waiting for me, until you repay me.

[Psalm 142] (143)
{142:1} A Psalm of David, when his son Absalom was pursuing him. O Lord, hear my prayer. Incline your ear to my supplication in your truth. Heed me according to your justice.
{142:2} And do not enter into judgment with your servant. For all the living will not be justified in your sight.
{142:3} For the enemy has pursued my soul. He has lowered my life to the earth. He has stationed me in darkness, like the dead of ages past.
{142:4} And my spirit has been in anguish over me. My heart within me has been disturbed.
{142:5} I have called to mind the days of antiquity. I have been meditating on all your works. I have meditated on the workings of your hands.
{142:6} I have extended my hands to you. My soul is like a land without water before you.
{142:7} O Lord, heed me quickly. My spirit has grown faint. Do not turn your face away from me, lest I become like those who descend into the pit.
{142:8} Make me hear your mercy in the morning. For I have hoped in you. Make known to me the way that I should walk. For I have lifted up my soul to you.
{142:9} O Lord, rescue me from my enemies. I have fled to you.
{142:10} Teach me to do your will. For you are my God. Your good Spirit will lead me into the righteous land.
{142:11} For the sake of your name, O Lord, you will revive me in your fairness. You will lead my soul out of tribulation.
{142:12} And you will scatter my enemies in your mercy. And you will destroy all those who afflict my soul. For I am your servant.

[Psalm 143] (144)
{143:1} A Psalm of David versus Goliath. Blessed is the Lord, my God, who trains my hands for the battle and my fingers for the war.
{143:2} My mercy and my refuge, my supporter and my deliverer, my protector and him in whom I have hoped: he subdues my people under me.
{143:3} O Lord, what is man that you have become known to him? Or the son of man that you consider him?
{143:4} Man has been made similar to vanity. His days pass by like a shadow.
{143:5} O Lord, incline your heavens and descend. Touch the mountains, and they will smoke.
{143:6} Send a flash of lightning, and you will scatter them. Shoot your arrows, and you will set them in disarray.
{143:7} Send forth your hand from on high: rescue me, and free me from many waters, from the hand of the sons of foreigners.
{143:8} Their mouth has been speaking vain things, and their right hand is the right hand of iniquity.
{143:9} To you, O God, I will sing a new song. On the psaltery, with an instrument of ten strings, I will sing psalms to you.
{143:10} He gives salvation to kings. He has redeemed your servant David from the malignant sword.
{143:11} Rescue me, and deliver me from the hand of the sons of foreigners. Their mouth has been speaking vain things, and their right hand is the right hand of iniquity.
{143:12} Their sons are like new plantings in their youth. Their daughters are dressed up: adorned all around like the idols of a temple.
{143:13} Their cupboards are full: overflowing from one thing into another. Their sheep bear young, brought forth in abundance.
{143:14} Their cattle are fat. There is no ruined wall or passage, nor anyone crying out in their streets.
{143:15} They have called the people that has these things: blessed. But blessed is the people whose God is the Lord.

[Psalm 144] (145)
{144:1} The Praise of David himself. I will extol you, O God, my king. And I will bless your name, in this time and forever and ever.
{144:2} Throughout every single day, I will bless you. And I will praise your name, in this time and forever and ever.
{144:3} The Lord is great and exceedingly praiseworthy. And there is no end to his greatness.
{144:4} Generation after generation will praise your works, and they will declare your power.
{144:5} They will tell of the magnificent glory of your sanctity. And they will discourse of your wonders.
{144:6} And they will talk about the virtue of your terrible acts. And they will describe your greatness.
{144:7} They will shout about the memory of your abundant sweetness. And they will exult in your justice.
{144:8} The Lord is compassionate and merciful, patient and full of mercy.
{144:9} The Lord is sweet to all things, and his compassion is upon all his works.
{144:10} O Lord, may all your works confess to you, and let your holy ones bless you.
{144:11} They will speak of the glory of your kingdom, and they will declare your power,
{144:12} so as to make known to the sons of men your power and the glory of your magnificent kingdom.
{144:13} Your kingdom is a kingdom for all ages, and your dominion is with all, from generation to generation. The Lord is faithful in all his words and holy in all his works.
{144:14} The Lord lifts up all who have fallen down, and he sets upright all who have been thrown down.
{144:15} O Lord, all eyes hope in you, and you provide their food in due time.
{144:16} You open your hand, and you fill every kind of animal with a blessing.
{144:17} The Lord is just in all his ways and holy in all his works.
{144:18} The Lord is near to all who call upon him, to all who call upon him in truth.
{144:19} He will do the will of those who fear him, and he will heed their supplication and accomplish their salvation.
{144:20} The Lord watches over all who love him. And he will destroy all sinners.
{144:21} My mouth will speak the praise of the Lord, and may all flesh bless his holy name, in this time and forever and ever.

[Psalm 145] (146)
{145:1} Alleluia. Of Haggai and Zachariah.
{145:2} Praise the Lord, O my soul. I will praise the Lord with my life. I will sing psalms to my God as long as I shall be. Do not trust in the leaders,
{145:3} in the sons of men, in whom there is no salvation.
{145:4} His spirit will depart, and he will return to his earth. In that day, all their thoughts will perish.
{145:5} Blessed is he whose help is the God of Jacob: his hope is in the Lord God himself,
{145:6} who made heaven and earth, the sea, and all the things that are in them.
{145:7} He preserves the truth forever. He executes judgment for those who suffer injury. He provides food for the hungry. The Lord releases those who are bound.
{145:8} The Lord enlightens the blind. The Lord sets upright those who have been thrown down. The Lord loves the just.
{145:9} The Lord watches over new arrivals. He will support the orphan and the widow. And he will destroy the ways of sinners.
{145:10} The Lord shall reign forever: your God, O Zion, from generation to generation.

[Psalm 146] (147A)
{146:1} Alleluia. Praise the Lord, because the psalm is good. Delightful and beautiful praise shall be for our God.
{146:2} The Lord builds up Jerusalem. He will gather together the dispersed of Israel.
{146:3} He heals the contrite of heart, and he binds up their sorrows.
{146:4} He numbers the multitude of the stars, and he calls them all by their names.
{146:5} Great is our Lord, and great is his virtue. And of his wisdom, there is no number.
{146:6} The Lord lifts up the meek, but he brings down the sinner, even to the ground.
{146:7} Sing before the Lord with confession. Play psalms to our God on a stringed instrument.
{146:8} He covers heaven with clouds, and he prepares rain for the earth. He produces grass on the mountains and herbs for the service of men.
{146:9} He gives their food to beasts of burden and to young ravens that call upon him.
{146:10} He will not have good will for the strength of the horse, nor will he be well pleased with the legs of a man.
{146:11} The Lord is well pleased with those who fear him and with those who hope in his mercy.

[Psalm 147] (147B)
{147:1} Alleluia. Praise the Lord, O Jerusalem. Praise your God, O Zion.
{147:2} For he has reinforced the bars of your gates. He has blessed your sons within you.
{147:3} He has stationed peace at your borders, and he has satisfied you with the fat of the grain.
{147:4} He sends forth his eloquence to the earth. His word runs swiftly.
{147:5} He provides snow like wool. He strews clouds like ashes.
{147:6} He sends his ice crystals like morsels. Who can stand firm before the face of his cold?
{147:7} He will send forth his word, and it will melt them. His Spirit will breathe out, and the waters will flow.
{147:8} He announces his word to Jacob, his justices and his judgments to Israel.
{147:9} He has not done so much for every nation, and he has not made his judgments manifest to them. Alleluia.

[Psalm 148]
{148:1} Alleluia. Praise the Lord from the heavens. Praise him on the heights.
{148:2} Praise him, all his Angels. Praise him, all his hosts.
{148:3} Praise him, sun and moon. Praise him, all stars and light.
{148:4} Praise him, heavens of the heavens. And let all the waters that are above the heavens
{148:5} praise the name of the Lord. For he spoke, and they became. He commanded, and they were created.
{148:6} He has stationed them in eternity, and for age after age. He has established a precept, and it will not pass away.
{148:7} Praise the Lord from the earth: you dragons and all deep places,
{148:8} fire, hail, snow, ice, windstorms, which do his word,
{148:9} mountains and all hills, fruitful trees and all cedars,
{148:10} wild beasts and all cattle, serpents and feathered flying things,
{148:11} kings of the earth and all peoples, leaders and all judges of the earth,
{148:12} young men and virgins. Let the older men with the younger men, praise the name of the Lord.
{148:13} For his name alone is exalted.
{148:14} Confession of him is beyond heaven and earth, and he has exalted the horn of his people. A hymn to all his holy ones, to the sons of Israel, to a people close to him. Alleluia.

[Psalm 149]
{149:1} Alleluia. Sing to the Lord a new song. His praise is in the Church of the saints.
{149:2} Let Israel rejoice in him who made them, and let the sons of Zion exult in their king.
{149:3} Let them praise his name in chorus. Let them sing psalms to him with the timbrel and the psaltery.
{149:4} For the Lord is well pleased with his people, and he will exalt the meek unto salvation.
{149:5} The saints will exult in glory. They will rejoice upon their couches.
{149:6} The exultations of God will be in their throat, and two-edged swords will be in their hands:
{149:7} to obtain vindication among the nations, chastisements among the peoples,
{149:8} to bind their kings with shackles and their nobles with manacles of iron,
{149:9} to obtain judgment over them, as it has been written. This is glory for all his saints. Alleluia.

[Psalm 150]
{150:1} Alleluia. Praise the Lord in his holy places. Praise him in the firmament of his power.
{150:2} Praise him for his virtues. Praise him according to the multitude of his greatness.
{150:3} Praise him with the sound of the trumpet. Praise him with psaltery and stringed instrument.
{150:4} Praise him with timbrel and choir. Praise him with strings and organ.
{150:5} Praise him with sweet-sounding cymbals. Praise him with cymbals of jubilation.
{150:6} Let every spirit praise the Lord. Alleluia.
`

const randomPsalm = text => {           //function formats and divides into individual Psalms one string with all Psalms
                                        // from http://www.sacredbible.org/. Then it generates one of the Psalms at random.
    let separator = [];                    
    for(let i=1; i<=150; i++) {
        separator.push(`[Psalm ${i}]`)
    }
    for(item of separator) {
        text = text.toString().split(item)
    }
    text = text.toString().split('\n');
    text = text.filter(el => el !== ',');
    let individualPsalms = [''];
    for(let i=1; i<=150; i++) {
        this["Psalm"+i] = '\n' + `Psalm ${i}`.toString() + '\n' + text.filter(el => el.startsWith(`\{${i}:`)).toString().replaceAll(',{', '\n').replaceAll('{', '').replaceAll('}','').replaceAll(`${i}:`, '');
        individualPsalms.push(this["Psalm"+i]);
    }
    for(el of individualPsalms) {
        el.toString()
    }
    
    return [individualPsalms[Math.ceil(Math.random() * 150)],individualPsalms]
}
let thePsalm = randomPsalm(psalmsBulk);

let lastIndex = () => {
    if(thePsalm[1].indexOf(thePsalm[0])<10) {
        return 2
    } else if(thePsalm[1].indexOf(thePsalm[0])<100) {
        return 3
    } else return 4
}

let strHeading = thePsalm[0].slice(0, thePsalm[0].indexOf(thePsalm[1].indexOf(thePsalm[0]))+lastIndex());
let strScripture = thePsalm[0].slice(thePsalm[0].indexOf(thePsalm[1].indexOf(thePsalm[0]))+lastIndex());

document.getElementById('heading').innerHTML = strHeading;
document.getElementById('psalm').innerHTML = strScripture;

// following section hasn't been committed to git, don't know how to execute images.js within function)
let newRandomPsalm = () => {
    loadingImage();
    thePsalm = randomPsalm(psalmsBulk);
    strHeading = thePsalm[0].slice(0, thePsalm[0].indexOf(thePsalm[1].indexOf(thePsalm[0]))+lastIndex());
    strScripture = thePsalm[0].slice(thePsalm[0].indexOf(thePsalm[1].indexOf(thePsalm[0]))+lastIndex());
    document.getElementsByTagName("h1")[0].innerHTML = strHeading;
    document.getElementsByTagName("p")[0].innerHTML = strScripture;
};

let wholePage = document.getElementsByTagName('body')[0];
wholePage.addEventListener('click', newRandomPsalm);



