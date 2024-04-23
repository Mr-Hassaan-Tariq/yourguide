-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: tour_cxjfdtcs
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `articledetails`
--

DROP TABLE IF EXISTS `articledetails`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `articledetails` (
  `id` int NOT NULL AUTO_INCREMENT,
  `blogId` int NOT NULL,
  `blogData` longtext NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `blogId` (`blogId`),
  CONSTRAINT `articledetails_ibfk_1` FOREIGN KEY (`blogId`) REFERENCES `articles` (`blogId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `articledetails`
--

LOCK TABLES `articledetails` WRITE;
/*!40000 ALTER TABLE `articledetails` DISABLE KEYS */;
INSERT INTO `articledetails` VALUES (1,1,'<p>&Agrave; l&rsquo;&eacute;poque de la Prohibition, des bars clandestins se sont mont&eacute;s dans les sous-sols, les cuisines, les r&eacute;serves ou encore les chambres froides de nombreux restaurants et bars am&eacute;ricains. Des lieux o&ugrave; il fallait parler tout bas (Speak Easy), pour ne pas se faire prendre.&nbsp;<br>Aujourd&rsquo;hui, les speakeasy se multiplient, &agrave; Paris. Petit tour d&rsquo;horizon.&nbsp;</p>\r\n<h3><strong>1. Le Lavomatic, Paris 10e</strong></h3>\r\n<div class=\"my-4 main-content-img-container\"><img class=\" main-content-landscape-img lazyloaded\" src=\"https://res.cloudinary.com/purnesh/image/upload/w_1000,f_auto,q_auto:eco,c_limit/11655116783963.jpg\" alt=\"article image\" data-src=\"https://res.cloudinary.com/purnesh/image/upload/w_1000,f_auto,q_auto:eco,c_limit/11655116783963.jpg\"></div>\r\n<p>Ce lieu a tout l&rsquo;air d&rsquo;une laverie, tout &agrave; fait normale, de prime abord. Situ&eacute;e au 30 rue Ren&eacute; Boulanger, dans le 10e, elle est ouverte du mardi au samedi, de 18h &agrave; 2h. Dr&ocirc;les d&rsquo;horaires pour un endroit o&ugrave; laver son linge, non?&nbsp;<br>En r&eacute;alit&eacute;, un bouton camoufl&eacute; dans la laverie vous donnera acc&egrave;s &agrave; un bar cach&eacute;, derri&egrave;re les machines &agrave; laver ! Une fois le passage secret d&eacute;couvert, &agrave; vous une atmosph&egrave;re atypique avec ses balan&ccedil;oires, ses cocktails originaux, mais aussi ses vins et sa cuisine vraiment qualitative et vari&eacute;e.</p>\r\n<p><strong>Adresse&nbsp;</strong>| 30 rue Ren&eacute; Boulanger, 75010 Paris<br><strong>Pour deux personnes</strong>&nbsp;| entre 18 et 30 euros<br><strong>Instagram&nbsp;</strong>|&nbsp;<a href=\"https://www.instagram.com/lavomatic_paris/\" target=\"_blank\" rel=\"noopener\">https://www.instagram.com/lavomatic_paris/</a>&nbsp;<br><strong>Facebook</strong>&nbsp;|&nbsp;<a href=\"https://www.facebook.com/Lavomatic-1583887058548400/?ref=bookmarks\" target=\"_blank\" rel=\"noopener\">https://www.facebook.com/Lavomatic-1583887058548400/?ref=bookmarks</a>&nbsp;<br><a href=\"https://www.lavomatic.paris/\" target=\"_blank\" rel=\"noopener\">https://www.lavomatic.paris/</a></p>\r\n<h3><strong>2. L&rsquo;&Eacute;picier, Paris 3e</strong></h3>\r\n<div class=\"my-4 main-content-img-container\"><img class=\" main-content-portrait-img lazyloaded\" src=\"https://res.cloudinary.com/purnesh/image/upload/w_1000,f_auto,q_auto:eco,c_limit/21655116783965.jpg\" alt=\"article image\" data-src=\"https://res.cloudinary.com/purnesh/image/upload/w_1000,f_auto,q_auto:eco,c_limit/21655116783965.jpg\"></div>\r\n<p>Poussez la porte d&rsquo;une &eacute;picerie situ&eacute;e au 24, rue Notre Dame de Nazareth, dans le 3e arrondissement de Paris. &Agrave; premi&egrave;re vue, rien de particulier dans ce petit magasin. Toutefois, osez parler &agrave; l&rsquo;&eacute;picier qui se tient derri&egrave;re la caisse et laissez-le vous guider. Avec un peu de chance, vous trouverez la bonne bo&icirc;te de couscous : celle qui, en tirant dessus, vous fera pivoter l\'&eacute;tag&egrave;re pour vous permettre de vous glisser derri&egrave;re !&nbsp;<br>Une fois de l\'autre c&ocirc;t&eacute;, &agrave; vous un bar &agrave; la d&eacute;coration orientale o&ugrave; vous pourrez accompagner vos cocktails de mezz&eacute;s &agrave; partager.&nbsp;</p>\r\n<p><strong>Adresse&nbsp;</strong>| 24 rue Notre Dame de Nazareth, 75003 Paris<br><strong>Pour deux personnes</strong>&nbsp;| entre 18 et 30 euros<br><strong>Instagram |&nbsp;</strong><a href=\"https://www.instagram.com/lepicier_paris/?hl=fr\" target=\"_blank\" rel=\"noopener\">https://www.instagram.com/lepicier_paris/?hl=fr</a>&nbsp;<br><strong>Facebook |</strong>&nbsp;<a href=\"https://www.instagram.com/lepicier_paris/?hl=fr\" target=\"_blank\" rel=\"noopener\">https://www.facebook.com/L%C3%89picier-641074742989491/</a>&nbsp;<br><a href=\"https://www.villaschweppes.com/\" target=\"_blank\" rel=\"noopener\">https://www.villaschweppes.com/</a></p>\r\n<h3><strong>3. La Candelaria, Paris 3e</strong></h3>\r\n<div class=\"my-4 main-content-img-container\"><img class=\" main-content-portrait-img lazyloaded\" src=\"https://res.cloudinary.com/purnesh/image/upload/w_1000,f_auto,q_auto:eco,c_limit/31655116784078.jpg\" alt=\"article image\" data-src=\"https://res.cloudinary.com/purnesh/image/upload/w_1000,f_auto,q_auto:eco,c_limit/31655116784078.jpg\"></div>\r\n<p>Au 52 de la rue Saintonge, dans le 3e arrondissement de la capitale, entrez dans un petit restaurant mexicain : La Candelaria. Une taqueria intimiste du haut-marais o&ugrave; vous pourrez vous r&eacute;galer. Mais, pour les plus curieux, dirigez-vous vers une petite porte dans le fond de la salle. Jetez un coup d\'&oelig;il, derri&egrave;re vous, au cas o&ugrave;, puis poussez-la.&nbsp;<br>Bienvenue dans le premier speakeasy de la capitale, toujours aussi pris&eacute; ! La Candelaria est une adresse secr&egrave;te incontournable, tout comme ses cocktails devenus des classiques. Notre conseil, testez l&rsquo;incroyable &laquo; Gu&ecirc;pe Verte &raquo; et son association tequila au piment, concombre, coriandre, miel d&rsquo;agave, citron vert. Une folie.&nbsp;</p>\r\n<p><strong>Adresse |</strong>&nbsp;52 rue Saintonge, 75003 Paris<br><strong>Pour deux personnes&nbsp;</strong>| environ 26 euros<br><strong>Instagram&nbsp;</strong>|&nbsp;<a href=\"https://www.instagram.com/candelariaparis/\" target=\"_blank\" rel=\"noopener\">https://www.instagram.com/candelariaparis/</a>&nbsp;<br><strong>Facebook&nbsp;</strong>|&nbsp;<a href=\"https://www.facebook.com/candelariaparis/\" target=\"_blank\" rel=\"noopener\">https://www.facebook.com/candelariaparis/</a>&nbsp;<br><a href=\"https://www.candelaria-paris.com/\" target=\"_blank\" rel=\"noopener\"><strong>https://www.candelaria-paris.com/</strong></a></p>\r\n<h3><strong>4. Le Moonshiner, Paris 11e</strong></h3>\r\n<div class=\"my-4 main-content-img-container\"><img class=\" main-content-landscape-img lazyloaded\" src=\"https://res.cloudinary.com/purnesh/image/upload/w_1000,f_auto,q_auto:eco,c_limit/41655116784049.jpg\" alt=\"article image\" data-src=\"https://res.cloudinary.com/purnesh/image/upload/w_1000,f_auto,q_auto:eco,c_limit/41655116784049.jpg\"></div>\r\n<p>La pizzeria Da Vito est une adresse bien connue du 11e arrondissement de Paris. Au 5, rue Sedaigne, vous pourrez y manger des pizzas incroyablement bonnes et g&eacute;n&eacute;reuses. Mais, ce n&rsquo;est pas ce temple de la pizza qui nous int&eacute;resse ici. C&rsquo;est plut&ocirc;t la grosse porte, au fond du restaurant, qui m&egrave;ne &agrave; la chambre froide.&nbsp;<br>Aventurez-vous derri&egrave;re l&rsquo;imposante ouverture et d&eacute;couvrez&hellip; Le Moonshiner ! Un bar cach&eacute;, dans une ambiance ann&eacute;es 30, qui vous ram&egrave;nera au temps de la Prohibition ! &nbsp;</p>\r\n<p><strong>Adresse&nbsp;</strong>: 5 rue Sedaigne, 75011 Paris<br><strong>T&eacute;l&eacute;phone&nbsp;</strong>: 09.50.73.12.99<br><strong>Pour deux personnes</strong>&nbsp;: entre 22 et 30 euros<br><strong>Instagram&nbsp;</strong>:&nbsp;<a href=\"https://www.instagram.com/moonshiner_cocktail_bar/\" target=\"_blank\" rel=\"noopener\">https://www.instagram.com/moonshiner_cocktail_bar/</a>&nbsp;<br><strong>Facebook&nbsp;</strong>:&nbsp;<a href=\"https://www.facebook.com/moonshinercocktailbar/\" target=\"_blank\" rel=\"noopener\">https://www.facebook.com/moonshinercocktailbar/</a>&nbsp;<br>https://moonshinerbar.fr/</p>','2023-05-21 06:54:07','2023-05-21 06:54:07'),(2,2,'<div class=\"single-article\" data-id=\"les-5-meilleurs-endroits-pour-admirer-paris-&agrave;-paris\">\r\n<div class=\"row article-container shadow-left\">\r\n<div class=\"col-12\">\r\n<div class=\"article-content\">\r\n<p>Admirez Paris vue du sol c&rsquo;est bien, mais nous vous invitons &agrave; prendre de la hauteur ! Pas de panique, nous vous proposons ici que des lieux o&ugrave; l&rsquo;acc&egrave;s est gratuit, seul un endroit demande un acc&egrave;s payant : mais qui vaut le co&ucirc;t !&nbsp;</p>\r\n<h3><strong>1. L&rsquo;esplanade Du Trocad&eacute;ro&nbsp;</strong></h3>\r\n<div class=\"my-4 main-content-img-container\"><img class=\" main-content-landscape-img lazyloaded\" src=\"https://res.cloudinary.com/purnesh/image/upload/w_1000,f_auto,q_auto:eco,c_limit/surgeicaltravels-1.jpg\" alt=\"article image\" data-src=\"https://res.cloudinary.com/purnesh/image/upload/w_1000,f_auto,q_auto:eco,c_limit/surgeicaltravels-1.jpg\"></div>\r\n<p>Picture Credits:&nbsp;<a href=\"https://www.instagram.com/surgeicaltravels/\" target=\"_blank\" rel=\"noopener\">surgeicaltravels</a></p>\r\n<p>Un passage obligatoire pour les visiteurs venant admirer la dame de fer : l&rsquo;esplanade du Trocad&eacute;ro. Ce sera la meilleure vue pour voir ce monument parisien d&rsquo;anthologie. Un site bien populaire o&ugrave; il est rare d&rsquo;&ecirc;tre seul &agrave; prendre sa photo !&nbsp;</p>\r\n<p><strong>O&ugrave; |&nbsp;</strong>Place du Trocad&eacute;ro et du 11 Novembre, 75016 PARIS</p>\r\n<h3><strong>2. Le Centre Pompidou&nbsp;</strong></h3>\r\n<div class=\"my-4 main-content-img-container\"><img class=\" main-content-portrait-img lazyloaded\" src=\"https://res.cloudinary.com/purnesh/image/upload/w_1000,f_auto,q_auto:eco,c_limit/centrepompidou-1.jpg\" alt=\"article image\" data-src=\"https://res.cloudinary.com/purnesh/image/upload/w_1000,f_auto,q_auto:eco,c_limit/centrepompidou-1.jpg\"></div>\r\n<p>Picture Credits:&nbsp;<a href=\"https://www.instagram.com/centrepompidou/\" target=\"_blank\" rel=\"noopener\">centrepompidou</a></p>\r\n<p>Ce centre culturel parisien offre une vue insolite de la capitale lorsque vous montez les escaliers. Nous vous conseillons d&rsquo;y aller lors du coucher de soleil pour une superbe vue assur&eacute;e !&nbsp;</p>\r\n<p><strong>O&ugrave; |&nbsp;</strong>Centre Pompidou, Rue Beaubourg, 75004 PARIS</p>\r\n<h3><strong>3. La Tour Montparnasse</strong></h3>\r\n<div class=\"my-4 main-content-img-container\"><img class=\" main-content-portrait-img lazyloaded\" src=\"https://res.cloudinary.com/purnesh/image/upload/w_1000,f_auto,q_auto:eco,c_limit/parismontparnasse%2Ctopofthecity-1.jpg\" alt=\"article image\" data-src=\"https://res.cloudinary.com/purnesh/image/upload/w_1000,f_auto,q_auto:eco,c_limit/parismontparnasse%2Ctopofthecity-1.jpg\"></div>\r\n<p>Picture Credits:&nbsp;<a href=\"https://www.instagram.com/parismontparnasse.topofthecity/\" target=\"_blank\" rel=\"noopener\">parismontparnasse.topofthecity</a></p>\r\n<p>Une des plus belles vues de Paris serait assur&eacute;ment depuis le toit de la tour Montparnasse. Issez vous tout en haut du plus grand gratte-ciel parisien avec l\'ascenseur le plus rapide d&rsquo;Europe pour un tour &agrave; 360&deg; de la capitale. Ce sont 17 euros bien d&eacute;pens&eacute;s (tarif adulte) !</p>\r\n<p><strong>O&ugrave; |&nbsp;</strong>Tour Montparnasse, 33 avenue du Maine, 75015 PARIS</p>\r\n<h3><strong>4. La Terrasse Des Grands Magasins Printemps Haussmann&nbsp;</strong></h3>\r\n<div class=\"my-4 main-content-img-container\"><img class=\" main-content-landscape-img lazyloaded\" src=\"https://res.cloudinary.com/purnesh/image/upload/w_1000,f_auto,q_auto:eco,c_limit/mademoiselle-ludi-1.jpg\" alt=\"article image\" data-src=\"https://res.cloudinary.com/purnesh/image/upload/w_1000,f_auto,q_auto:eco,c_limit/mademoiselle-ludi-1.jpg\"></div>\r\n<p>Picture Credits:&nbsp;<a href=\"https://www.instagram.com/mademoiselle_ludi/\" target=\"_blank\" rel=\"noopener\">mademoiselle_ludi</a></p>\r\n<p>Accourez au 5&egrave;me &eacute;tage des grands magasins Haussmann et admirez la vue surplombant Paris ! Amusez-vous &agrave; retrouvez les monuments phares : l&rsquo;Op&eacute;ra de Paris, la Tour Eiffel, Le Sacr&eacute; Coeur&hellip;&nbsp;</p>\r\n<p><strong>O&ugrave; |</strong>&nbsp;64 Boulevard Haussmann, 75009 PARIS</p>\r\n<h3><strong>5. La Colline Du Parc De Belleville&nbsp;</strong></h3>\r\n<div class=\"my-4 main-content-img-container\"><img class=\" main-content-landscape-img lazyloaded\" src=\"https://res.cloudinary.com/purnesh/image/upload/w_1000,f_auto,q_auto:eco,c_limit/pato-panam-2.jpg\" alt=\"article image\" data-src=\"https://res.cloudinary.com/purnesh/image/upload/w_1000,f_auto,q_auto:eco,c_limit/pato-panam-2.jpg\"></div>\r\n<p>Picture Credits:&nbsp;<a href=\"https://www.instagram.com/pato_panam/\" target=\"_blank\" rel=\"noopener\">pato_panam</a></p>\r\n<p>Un panorama insolite depuis le 20&egrave;me arrondissement, grimpez au Parc de Belleville pour d&eacute;couvrir Paris. Cela vous &eacute;vitera la foule de Montmartre et vous offre un cadre naturel pour des photos &agrave; couper le souffle !</p>\r\n<p><strong>O&ugrave; |</strong>&nbsp;47 rue des Couronnes, 75020 PARIS&nbsp;</p>\r\n<p>Alors attention au vertige, et surtout n&rsquo;oubliez pas de vous taguer sur vos meilleures photos avec le #SoParis !&nbsp;</p>\r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n<div class=\"d-flex justify-content-center text-center flex-column mb-3\" data-v-0769c5c7=\"\">&nbsp;</div>','2023-05-21 07:19:07','2023-05-21 07:19:07');
/*!40000 ALTER TABLE `articledetails` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `articles`
--

DROP TABLE IF EXISTS `articles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `articles` (
  `blogId` int NOT NULL AUTO_INCREMENT,
  `isActive` tinyint(1) DEFAULT '1',
  `allowed` int NOT NULL DEFAULT '1',
  `userId` int NOT NULL,
  `blogTitle` varchar(100) NOT NULL,
  `blogCity` varchar(255) NOT NULL,
  `imgUrl` varchar(255) NOT NULL,
  `catagory` varchar(15) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `id` int DEFAULT NULL,
  PRIMARY KEY (`blogId`),
  UNIQUE KEY `blogTitle` (`blogTitle`),
  KEY `userId` (`userId`),
  KEY `id` (`id`),
  CONSTRAINT `articles_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `articles_ibfk_2` FOREIGN KEY (`id`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `articles`
--

LOCK TABLES `articles` WRITE;
/*!40000 ALTER TABLE `articles` DISABLE KEYS */;
INSERT INTO `articles` VALUES (1,0,1,2,'Les 5 Bars Cachés Les Plus Insolites De Paris Où Boire Un Verre Pour Un Premier Date','Adilpur','1684652047477.jpg','Travel','2023-05-21 06:54:07','2023-05-21 07:18:14',NULL),(2,1,1,2,'Les 5 Meilleurs Endroits Pour Admirer Paris, à Paris!','Awārān District','1684653547191.jpg','Travel','2023-05-21 07:19:07','2023-05-21 07:19:07',NULL);
/*!40000 ALTER TABLE `articles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `experiencedays`
--

DROP TABLE IF EXISTS `experiencedays`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `experiencedays` (
  `id` int NOT NULL AUTO_INCREMENT,
  `day` int NOT NULL,
  `experienceId` int NOT NULL,
  `description` longtext NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `experienceId` (`experienceId`),
  CONSTRAINT `experiencedays_ibfk_1` FOREIGN KEY (`experienceId`) REFERENCES `experiences` (`experienceId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `experiencedays`
--

LOCK TABLES `experiencedays` WRITE;
/*!40000 ALTER TABLE `experiencedays` DISABLE KEYS */;
INSERT INTO `experiencedays` VALUES (1,0,1,'<h2 class=\"tour-title\" data-v-59bbb902=\"\">Departure for Istanbul</h2>\n<div class=\"icons-wrapper\" data-v-59bbb902=\"\">\n<div class=\"location\" data-v-59bbb902=\"\"><a class=\"location-link\" href=\"https://www.gozayaan.com/tour/details/?id=1044\" target=\"_blank\" rel=\"noopener\" data-v-59bbb902=\"\">&nbsp;Istanbul</a></div>\n</div>\n<div class=\"desc\" data-v-59bbb902=\"\">\n<p data-v-59bbb902=\"\">&nbsp;</p>\n<ul>\n<li>Arrival at Istanbul</li>\n<li>Flight for Cappadocia</li>\n<li>Shuttle airport transfer to hotel</li>\n</ul>\n<p>&nbsp;</p>\n</div>','2023-05-21 07:27:22','2023-05-21 07:27:22'),(2,1,1,'<h2 class=\"tour-title\" data-v-59bbb902=\"\">Explore Bursa and Uludag Mountain</h2>\n<div class=\"icons-wrapper\" data-v-59bbb902=\"\">\n<div class=\"location\" data-v-59bbb902=\"\"><a class=\"location-link\" href=\"https://www.gozayaan.com/tour/details/?id=1044\" target=\"_blank\" rel=\"noopener\" data-v-59bbb902=\"\">&nbsp;Bursa</a></div>\n</div>\n<div class=\"desc\" data-v-59bbb902=\"\">\n<p data-v-59bbb902=\"\">&nbsp;</p>\n<ul>\n<li>08:00 - 08:15 AM Bursa tour pick up&nbsp;</li>\n<li>Take the ferry from the Asian side of Istanbul (1 hour drive to the port)</li>\n<li>30 min ferry ride - 1 hour drive to reach Bursa</li>\n<li>Visit the famous delight shop and factory called \'Munira\'</li>\n<li>Drive up to Uludag Mountain&nbsp;</li>\n<li>Visit the historical Inkaya Tree (620 years old)</li>\n<li>Lunch on our way to the peak</li>\n<li>1 hour free time on the top of Uludag Mountain</li>\n<li>Take the teleferik from the top of mountain to Bursa city(30mins)</li>\n<li>Visit the historical Green Mosque and Green Tomb</li>\n<li>Drive back to Istanbul (return around 22:00 local time)</li>\n</ul>\n<p>&nbsp;</p>\n</div>','2023-05-21 07:27:22','2023-05-21 07:27:22');
/*!40000 ALTER TABLE `experiencedays` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `experiencedetails`
--

DROP TABLE IF EXISTS `experiencedetails`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `experiencedetails` (
  `id` int NOT NULL AUTO_INCREMENT,
  `experienceId` int NOT NULL,
  `description` longtext NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `experienceId` (`experienceId`),
  CONSTRAINT `experiencedetails_ibfk_1` FOREIGN KEY (`experienceId`) REFERENCES `experiences` (`experienceId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `experiencedetails`
--

LOCK TABLES `experiencedetails` WRITE;
/*!40000 ALTER TABLE `experiencedetails` DISABLE KEYS */;
INSERT INTO `experiencedetails` VALUES (1,1,'<p>Discover the best of Turkey, from bustling bazaars, ancient architecture, and diverse landscapes, and experience a unique blend of European and Asian cultures. Prepare to be awed by the breathtaking views at Antalya, witness the beautiful Hagia Sophia and stroll through the bustling bazaars of Istanbul, enjoy hot air ballooning in Cappadocia, and much more on this 7-day trip to Turkey.</p>\r\n<p>The package includes&nbsp;accommodation in comfortable hotels,&nbsp;&amp; unforgettable experiences. Witness historical landmarks, visit adventure parks and enjoy the vibrant nightlife in the three iconic Turkish cities.</p>\r\n<h4><strong>Get a FREE customized quotation by filling out the form on this page</strong></h4>','2023-05-21 07:27:22','2023-05-21 07:27:22');
/*!40000 ALTER TABLE `experiencedetails` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `experiences`
--

DROP TABLE IF EXISTS `experiences`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `experiences` (
  `experienceId` int NOT NULL AUTO_INCREMENT,
  `userId` int NOT NULL,
  `title` varchar(200) NOT NULL,
  `startFrom` varchar(25) NOT NULL,
  `amount` int NOT NULL,
  `endFrom` varchar(25) NOT NULL,
  `days` int NOT NULL,
  `language` varchar(25) NOT NULL,
  `travelFrom` varchar(200) NOT NULL,
  `travelTo` varchar(200) NOT NULL,
  `isActive` tinyint(1) DEFAULT '1',
  `allowed` int NOT NULL DEFAULT '1',
  `forApproval` int NOT NULL DEFAULT '1',
  `groupSize` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `id` int DEFAULT NULL,
  PRIMARY KEY (`experienceId`),
  KEY `userId` (`userId`),
  KEY `id` (`id`),
  CONSTRAINT `experiences_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `experiences_ibfk_2` FOREIGN KEY (`id`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `experiences`
--

LOCK TABLES `experiences` WRITE;
/*!40000 ALTER TABLE `experiences` DISABLE KEYS */;
INSERT INTO `experiences` VALUES (1,2,'7-Day Trip to Turkey (Istanbul, Bursa & Cappadocia)','2023-05-01',32000,'2023-05-02',2,'English','Bārkhān District','Alizai',1,1,1,32,'2023-05-21 07:27:22','2023-05-21 07:27:22',NULL);
/*!40000 ALTER TABLE `experiences` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hosts`
--

DROP TABLE IF EXISTS `hosts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hosts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userId` int NOT NULL,
  `certificate` varchar(255) NOT NULL,
  `dateOfBirth` varchar(100) NOT NULL,
  `cnic` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  CONSTRAINT `hosts_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hosts`
--

LOCK TABLES `hosts` WRITE;
/*!40000 ALTER TABLE `hosts` DISABLE KEYS */;
INSERT INTO `hosts` VALUES (1,2,'certificate/1685253943747.pdf','2023-05-08','2434343343343','Alizai','2023-05-28 06:05:43','2023-05-28 06:05:43');
/*!40000 ALTER TABLE `hosts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `images`
--

DROP TABLE IF EXISTS `images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `images` (
  `id` int NOT NULL AUTO_INCREMENT,
  `experienceId` int NOT NULL,
  `imgLink` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `experienceId` (`experienceId`),
  CONSTRAINT `images_ibfk_1` FOREIGN KEY (`experienceId`) REFERENCES `experiences` (`experienceId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES (1,1,'experience/IMG-20221020-WA0173-1684654042504.jpg','2023-05-21 07:27:22','2023-05-21 07:27:22'),(2,1,'experience/IMG-20230328-WA0018-1684654042504.jpg','2023-05-21 07:27:22','2023-05-21 07:27:22'),(3,1,'experience/IMG-20221020-WA0173-1684654042510.jpg','2023-05-21 07:27:22','2023-05-21 07:27:22'),(4,1,'experience/IMG-20230328-WA0018-1684654042514.jpg','2023-05-21 07:27:22','2023-05-21 07:27:22');
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `otps`
--

DROP TABLE IF EXISTS `otps`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `otps` (
  `id` int NOT NULL AUTO_INCREMENT,
  `otpNumber` int NOT NULL,
  `email` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `otps`
--

LOCK TABLES `otps` WRITE;
/*!40000 ALTER TABLE `otps` DISABLE KEYS */;
INSERT INTO `otps` VALUES (1,4643,'F2019266084@umt.edu.pk','2023-05-21 06:44:31','2023-05-21 06:44:31'),(2,2468,'harisbro88@gmail.com','2023-05-21 06:51:04','2023-05-21 06:51:04');
/*!40000 ALTER TABLE `otps` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payments`
--

DROP TABLE IF EXISTS `payments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payments` (
  `PaymentId` int NOT NULL AUTO_INCREMENT,
  `experienceId` int NOT NULL,
  `userId` int NOT NULL,
  `quantity` int NOT NULL,
  `amount` int NOT NULL,
  `isSuccessfull` tinyint NOT NULL DEFAULT '0',
  `isActive` tinyint(1) DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`PaymentId`),
  KEY `experienceId` (`experienceId`),
  KEY `userId` (`userId`),
  CONSTRAINT `payments_ibfk_1` FOREIGN KEY (`experienceId`) REFERENCES `experiences` (`experienceId`) ON UPDATE CASCADE,
  CONSTRAINT `payments_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payments`
--

LOCK TABLES `payments` WRITE;
/*!40000 ALTER TABLE `payments` DISABLE KEYS */;
INSERT INTO `payments` VALUES (1,1,2,2,32000,1,1,'2023-05-21 07:28:21','2023-05-21 07:28:54'),(2,1,2,1,32000,0,1,'2023-05-28 05:28:08','2023-05-28 05:28:08');
/*!40000 ALTER TABLE `payments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `services`
--

DROP TABLE IF EXISTS `services`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `services` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `isAllowed` tinyint NOT NULL DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `services`
--

LOCK TABLES `services` WRITE;
/*!40000 ALTER TABLE `services` DISABLE KEYS */;
INSERT INTO `services` VALUES (1,'flight',1,'2023-05-21 06:41:39','2023-05-21 06:41:39'),(2,'lunch',1,'2023-05-21 06:46:34','2023-05-21 06:46:34'),(3,'dinner',1,'2023-05-21 06:46:40','2023-05-21 06:46:40'),(4,'tickets',1,'2023-05-21 06:46:49','2023-05-21 06:46:49'),(5,'sdfsdf',1,'2023-05-28 09:53:39','2023-05-28 09:53:39'),(6,'flight34',1,'2023-05-28 09:55:02','2023-05-28 09:55:02'),(7,'flig',1,'2023-05-28 09:55:38','2023-05-28 09:55:38');
/*!40000 ALTER TABLE `services` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `servicesexcludes`
--

DROP TABLE IF EXISTS `servicesexcludes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `servicesexcludes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `experienceId` int NOT NULL,
  `serviceId` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `ExperienceExperienceId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `experienceId` (`experienceId`),
  KEY `serviceId` (`serviceId`),
  KEY `ExperienceExperienceId` (`ExperienceExperienceId`),
  CONSTRAINT `servicesexcludes_ibfk_1` FOREIGN KEY (`experienceId`) REFERENCES `experiences` (`experienceId`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `servicesexcludes_ibfk_2` FOREIGN KEY (`serviceId`) REFERENCES `services` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `servicesexcludes_ibfk_3` FOREIGN KEY (`ExperienceExperienceId`) REFERENCES `experiences` (`experienceId`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `servicesexcludes`
--

LOCK TABLES `servicesexcludes` WRITE;
/*!40000 ALTER TABLE `servicesexcludes` DISABLE KEYS */;
INSERT INTO `servicesexcludes` VALUES (1,1,3,'2023-05-21 07:27:22','2023-05-21 07:27:22',NULL),(2,1,2,'2023-05-21 07:27:22','2023-05-21 07:27:22',NULL),(3,1,1,'2023-05-21 07:27:22','2023-05-21 07:27:22',NULL);
/*!40000 ALTER TABLE `servicesexcludes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `servicesincludes`
--

DROP TABLE IF EXISTS `servicesincludes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `servicesincludes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `experienceId` int NOT NULL,
  `serviceId` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `ExperienceExperienceId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `experienceId` (`experienceId`),
  KEY `serviceId` (`serviceId`),
  KEY `ExperienceExperienceId` (`ExperienceExperienceId`),
  CONSTRAINT `servicesincludes_ibfk_1` FOREIGN KEY (`experienceId`) REFERENCES `experiences` (`experienceId`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `servicesincludes_ibfk_2` FOREIGN KEY (`serviceId`) REFERENCES `services` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `servicesincludes_ibfk_3` FOREIGN KEY (`ExperienceExperienceId`) REFERENCES `experiences` (`experienceId`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `servicesincludes`
--

LOCK TABLES `servicesincludes` WRITE;
/*!40000 ALTER TABLE `servicesincludes` DISABLE KEYS */;
INSERT INTO `servicesincludes` VALUES (1,1,3,'2023-05-21 07:27:22','2023-05-21 07:27:22',NULL),(2,1,2,'2023-05-21 07:27:22','2023-05-21 07:27:22',NULL),(3,1,1,'2023-05-21 07:27:22','2023-05-21 07:27:22',NULL);
/*!40000 ALTER TABLE `servicesincludes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `bio` varchar(255) DEFAULT '',
  `userImg` varchar(255) DEFAULT '',
  `phoneNo` varchar(100) NOT NULL,
  `role` tinyint DEFAULT '1',
  `isActive` tinyint(1) DEFAULT '1',
  `isVerfied` tinyint(1) DEFAULT '0',
  `forApproval` tinyint DEFAULT '0',
  `gender` tinyint(1) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'haris','haris','F2019266084@umt.edu.pk','','user/1685255638637.jpg','+923081350815',3,1,0,0,1,'$2b$10$mWEydAHEy5T7AsDyhHTJZeaoU7UaBhrT5JiNTpcSASMjDj4oIP3tq','2023-05-21 06:44:31','2023-05-28 06:33:58'),(2,'muhammad','haris','harisbro88@gmail.com','checking the about description.','user/1685265545184.jpeg','+923081355815',2,1,0,0,1,'$2b$10$NKXsMbo589YUAPdKjwA4CuwDoj0wytC4syP13dulgErIpbosGYl.S','2023-05-21 06:51:04','2023-05-28 09:20:19');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-28  2:58:58
