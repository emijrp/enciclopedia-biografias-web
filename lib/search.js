$( function() {
    var index = [
        //index-start
       {
        value: "a/an/anna-ajmatova-80440.html",
        label: "Anna Ajmátova (1889-1966)",
        description: "poeta modernista rusa",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Kuzma_Petrov-Vodkin._Portrait_of_Anna_Akhmatova._1922.jpg/40px-Kuzma_Petrov-Vodkin._Portrait_of_Anna_Akhmatova._1922.jpg"
      },
       {
        value: "s/sc/schlomo-winninger-113323.html",
        label: "Schlomo Winninger (1877-1968)",
        description: "escritor austríaco",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Salomon_Wininger_portrait.jpg/40px-Salomon_Wininger_portrait.jpg"
      },
       {
        value: "j/jo/johannes-itten-123138.html",
        label: "Johannes Itten (1888-1967)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Itten004.jpg/40px-Itten004.jpg"
      },
       {
        value: "m/ma/matilde-serao-384594.html",
        label: "Matilde Serao (1856-1927)",
        description: "periodista y novelista italiana de origen griego",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Matilde_Serao.jpg/40px-Matilde_Serao.jpg"
      },
       {
        value: "g/gu/gustav-nachtigal-60549.html",
        label: "Gustav Nachtigal (1834-1885)",
        description: "botánico, médico y explorador alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/%28Gustave_Nachtigal%29_-_Erwin_Hanfstaengl_%28...%29Hanfstaengl_Erwin_btv1b8450662m_%28cropped%29.jpg/40px-%28Gustave_Nachtigal%29_-_Erwin_Hanfstaengl_%28...%29Hanfstaengl_Erwin_btv1b8450662m_%28cropped%29.jpg"
      },
       {
        value: "c/ca/carl-van-vechten-312851.html",
        label: "Carl van Vechten (1880-1964)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Carl_Van_Vechten_1934.jpg/40px-Carl_Van_Vechten_1934.jpg"
      },
       {
        value: "m/ma/manuel-de-arriaga-286764.html",
        label: "Manuel de Arriaga (1840-1917)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Manuel_de_Arriaga.jpg/40px-Manuel_de_Arriaga.jpg"
      },
       {
        value: "k/ko/kondrati-ryleyev-49509.html",
        label: "Kondrati Ryléyev (1795-1826)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Rylejew.jpg/40px-Rylejew.jpg"
      },
       {
        value: "m/ma/marcel-schwob-472697.html",
        label: "Marcel Schwob (1867-1905)",
        description: "escritor francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Marcel_Schwob.jpg/40px-Marcel_Schwob.jpg"
      },
       {
        value: "r/ra/rainer-maria-rilke-76483.html",
        label: "Rainer Maria Rilke (1875-1926)",
        description: "poeta austríaco",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Rainer_Maria_Rilke%2C_1900.jpg/40px-Rainer_Maria_Rilke%2C_1900.jpg"
      },
       {
        value: "a/an/angelo-anelli-320799.html",
        label: "Angelo Anelli (1761-1820)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Angelo_Anelli.jpg/40px-Angelo_Anelli.jpg"
      },
       {
        value: "a/ad/adolf-loos-44323.html",
        label: "Adolf Loos (1870-1933)",
        description: "arquitecto checo",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Adolfloos.2.jpg/40px-Adolfloos.2.jpg"
      },
       {
        value: "j/je/jean-henri-fabre-313348.html",
        label: "Jean Henri Fabre (1823-1915)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Jean-henri_fabre.jpg/40px-Jean-henri_fabre.jpg"
      },
       {
        value: "g/ge/gertrude-bell-231360.html",
        label: "Gertrude Bell (1868-1926)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/BellK_218_Gertrude_Bell_in_Iraq_in_1909_age_41.jpg/40px-BellK_218_Gertrude_Bell_in_Iraq_in_1909_age_41.jpg"
      },
       {
        value: "j/jo/joseph-gorres-215730.html",
        label: "Joseph Görres (1776-1848)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Portrait_of_J._J._Von_G%C3%B6rres.jpg/40px-Portrait_of_J._J._Von_G%C3%B6rres.jpg"
      },
       {
        value: "e/ed/edouard-drumont-274297.html",
        label: "Édouard Drumont (1844-1917)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/%C3%89douard_Drumont.jpg/40px-%C3%89douard_Drumont.jpg"
      },
       {
        value: "h/ha/hans-christian-andersen-5673.html",
        label: "Hans Christian Andersen (1805-1875)",
        description: "escritor danés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/HCA_by_Thora_Hallager_1869.jpg/40px-HCA_by_Thora_Hallager_1869.jpg"
      },
       {
        value: "a/ad/adolf-bernhard-christoph-hilgenfeld-66337.html",
        label: "Adolf Bernhard Christoph Hilgenfeld (1823-1907)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Adolf_Hilgenfeld_-_ZfwT_50.jpg/40px-Adolf_Hilgenfeld_-_ZfwT_50.jpg"
      },
       {
        value: "k/ka/kazimierz-bein-12749.html",
        label: "Kazimierz Bein (1872-1959)",
        description: "oftalmólogo y esperantista polaco",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Bein.jpg/40px-Bein.jpg"
      },
       {
        value: "j/jo/john-farey-355803.html",
        label: "John Farey (1766-1826)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/John_Farey_with_QR_code.jpg/40px-John_Farey_with_QR_code.jpg"
      },
       {
        value: "g/gu/guillaume-apollinaire-133855.html",
        label: "Guillaume Apollinaire (1880-1918)",
        description: "escritor francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Guillaume_Apollinaire_1914.jpg/40px-Guillaume_Apollinaire_1914.jpg"
      },
       {
        value: "e/eu/eugene-sue-315220.html",
        label: "Eugène Sue (1804-1857)",
        description: "escritor francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Eug%C3%A8ne_Sue.jpg/40px-Eug%C3%A8ne_Sue.jpg"
      },
       {
        value: "h/hu/hugo-riemann-213539.html",
        label: "Hugo Riemann (1849-1919)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Hugo_Riemann.jpg/40px-Hugo_Riemann.jpg"
      },
       {
        value: "h/ha/halide-edib-234289.html",
        label: "Halide Edib (1884-1964)",
        description: "escritora, defensora de los derechos de la mujer y líder nacionalista turca.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Halide_Edib_Ad%C4%B1var_b3.jpg/40px-Halide_Edib_Ad%C4%B1var_b3.jpg"
      },
       {
        value: "m/ma/marguerite-audoux-466650.html",
        label: "Marguerite Audoux (1863-1937)",
        description: "escritora francesa",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Marguerite_Audoux_-_Project_Gutenberg_etext_20572.jpg/40px-Marguerite_Audoux_-_Project_Gutenberg_etext_20572.jpg"
      },
       {
        value: "p/pa/paul-von-lettow-vorbeck-57203.html",
        label: "Paul von Lettow-Vorbeck (1870-1964)",
        description: "militar alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Bundesarchiv_Bild_183-R05765%2C_Paul_Emil_von_Lettow-Vorbeck.jpg/40px-Bundesarchiv_Bild_183-R05765%2C_Paul_Emil_von_Lettow-Vorbeck.jpg"
      },
       {
        value: "j/jo/jose-milla-y-vidaurre-345845.html",
        label: "José Milla y Vidaurre (1822-1882)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Jos%C3%A9_Milla_y_Vidaurre.jpg/40px-Jos%C3%A9_Milla_y_Vidaurre.jpg"
      },
       {
        value: "a/al/alexander-dovzhenko-55198.html",
        label: "Alexander Dovzhenko (1894-1956)",
        description: "guionista, productor y director de cine",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/%D0%94%D0%BE%D0%B2%D0%B6%D0%B5%D0%BD%D0%BA%D0%BE_%D0%9E%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80.jpg/40px-%D0%94%D0%BE%D0%B2%D0%B6%D0%B5%D0%BD%D0%BA%D0%BE_%D0%9E%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80.jpg"
      },
       {
        value: "t/ta/taha-hussein-328765.html",
        label: "Taha Hussein (1889-1973)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Taha_Hussein.jpg/40px-Taha_Hussein.jpg"
      },
       {
        value: "m/mi/mirza-ghulam-ahmad-312952.html",
        label: "Mirza Ghulam Ahmad (1835-1908)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Hadhrat_Mirza_Ghulam_Ahmad.jpg/40px-Hadhrat_Mirza_Ghulam_Ahmad.jpg"
      },
       {
        value: "f/fr/friedrich-karl-theodor-zarncke-70839.html",
        label: "Friedrich Karl Theodor Zarncke (1825-1891)",
        description: "Filólogo alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Friedrich_Zarncke_2.jpg/40px-Friedrich_Zarncke_2.jpg"
      },
       {
        value: "m/mu/musidora-453602.html",
        label: "Musidora (1889-1957)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Musidora.jpg/40px-Musidora.jpg"
      },
       {
        value: "v/vl/vladimir-mayakovski-132964.html",
        label: "Vladímir Mayakovski (1893-1930)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Mayakovsky_Vladimir.jpg/40px-Mayakovsky_Vladimir.jpg"
      },
       {
        value: "h/he/heinrich-leopold-wagner-62880.html",
        label: "Heinrich Leopold Wagner (1747-1779)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/HeinrichLeopoldWagner1747-1779.jpg/40px-HeinrichLeopoldWagner1747-1779.jpg"
      },
       {
        value: "r/ro/robert-christian-ave-lallemant-75932.html",
        label: "Robert Christian Avé-Lallemant (1812-1884)",
        description: "médico alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/WP_Robert_Christian_Ave-Lallemant.jpg/40px-WP_Robert_Christian_Ave-Lallemant.jpg"
      },
       {
        value: "r/rh/rhoda-broughton-449136.html",
        label: "Rhoda Broughton (1840-1920)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Rhoda-broughton-phot.jpg/40px-Rhoda-broughton-phot.jpg"
      },
       {
        value: "i/iv/ivar-aasen-106812.html",
        label: "Ivar Aasen (1813-1896)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Ivaraasen.jpg/40px-Ivaraasen.jpg"
      },
       {
        value: "v/vs/vsevolod-ivanov-435569.html",
        label: "Vsevolod Ivanov (1895-1963)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/USSR_stamp_V.V.Ivanov_1965_4k.jpg/40px-USSR_stamp_V.V.Ivanov_1965_4k.jpg"
      },
       {
        value: "l/li/lina-morgenstern-66502.html",
        label: "Lina Morgenstern (1830-1909)",
        description: "escritora, pedagoga, feminista y pacifista alemana.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Lina_Morgenstern.jpg/40px-Lina_Morgenstern.jpg"
      },
       {
        value: "a/au/august-stramm-61657.html",
        label: "August Stramm (1874-1915)",
        description: "poeta alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Stramm.jpg/40px-Stramm.jpg"
      },
       {
        value: "j/jo/joseph-bedier-380842.html",
        label: "Joseph Bédier (1864-1938)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Joseph_Bedier.jpg/40px-Joseph_Bedier.jpg"
      },
       {
        value: "s/so/sofia-parnok-177288.html",
        label: "Sofía Parnok (1885-1933)",
        description: "escritora rusa",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/%D0%A1%D0%BE%D1%84%D0%B8%D1%8F_%D0%9F%D0%B0%D1%80%D0%BD%D0%BE%D0%BA.jpg/40px-%D0%A1%D0%BE%D1%84%D0%B8%D1%8F_%D0%9F%D0%B0%D1%80%D0%BD%D0%BE%D0%BA.jpg"
      },
       {
        value: "c/ch/charles-taze-russell-313456.html",
        label: "Charles Taze Russell (1852-1916)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Charles_Taze_Russell_sharp.jpg/40px-Charles_Taze_Russell_sharp.jpg"
      },
       {
        value: "a/an/anton-denikin-108314.html",
        label: "Antón Denikin (1872-1947)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Anton_Denikin_1918-1919.jpg/40px-Anton_Denikin_1918-1919.jpg"
      },
       {
        value: "i/ig/ignacy-daszynski-14430.html",
        label: "Ignacy Daszyński (1866-1936)",
        description: "político polaco",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Ignacy_Daszynski2.jpg/40px-Ignacy_Daszynski2.jpg"
      },
       {
        value: "h/he/henriette-herz-63460.html",
        label: "Henriette Herz (1764-1847)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Henriette_Herz_by_Anton_Graff_1792.jpg/40px-Henriette_Herz_by_Anton_Graff_1792.jpg"
      },
       {
        value: "a/an/anna-atkins-264269.html",
        label: "Anna Atkins (1799-1871)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Anna_Atkins_1861.jpg/40px-Anna_Atkins_1861.jpg"
      },
       {
        value: "z/zo/zoltan-ambrus-373131.html",
        label: "Zoltán Ambrus (1861-1932)",
        description: "escritor húngaro",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Ambrus_zoltan.jpg/40px-Ambrus_zoltan.jpg"
      },
       {
        value: "r/ru/rudolf-steiner-78484.html",
        label: "Rudolf Steiner (1861-1925)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Steiner_um_1905.jpg/40px-Steiner_um_1905.jpg"
      },
       {
        value: "a/ad/adam-smith-9381.html",
        label: "Adam Smith (1723-1790)",
        description: "economista y filósofo escocés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/AdamSmith.jpg/40px-AdamSmith.jpg"
      },
       {
        value: "g/gh/ghazaros-aghayan-426811.html",
        label: "Ghazaros Aghayan (1840-1911)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Ghazaros_Aghayan.jpg/40px-Ghazaros_Aghayan.jpg"
      },
       {
        value: "m/mo/mohammad-mosaddeq-123037.html",
        label: "Mohammad Mosaddeq (1880-1967)",
        description: "político iraní",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Mossadeghmohammad.jpg/40px-Mossadeghmohammad.jpg"
      },
       {
        value: "i/id/ida-laura-pfeiffer-78873.html",
        label: "Ida Laura Pfeiffer (1797-1858)",
        description: "exploradora, escritora y entomóloga austriaca",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Ida_Pfeiffer.jpg/40px-Ida_Pfeiffer.jpg"
      },
       {
        value: "t/th/theodor-von-sickel-66729.html",
        label: "Theodor von Sickel (1826-1908)",
        description: "historiador austríaco",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Theodor_Sickel.jpg/40px-Theodor_Sickel.jpg"
      },
       {
        value: "g/ge/georgi-plejanov-182905.html",
        label: "Georgi Plejánov (1856-1918)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Georgi_Plekhanov.jpg/40px-Georgi_Plekhanov.jpg"
      },
       {
        value: "j/jo/jose-de-viera-y-clavijo-326385.html",
        label: "José de Viera y Clavijo (1731-1813)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Jose_Viera_y_Clavijo.jpg/40px-Jose_Viera_y_Clavijo.jpg"
      },
       {
        value: "k/ko/kosta-jetagurov-368956.html",
        label: "Kostá Jetagúrov (1859-1906)",
        description: "poeta osetio",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Kosta_XETAGUROV.jpg/40px-Kosta_XETAGUROV.jpg"
      },
       {
        value: "g/ge/georg-friedrich-daumer-64661.html",
        label: "Georg Friedrich Daumer (1800-1875)",
        description: "filósofo y poeta alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Georg_Friedrich_Daumer.jpg/40px-Georg_Friedrich_Daumer.jpg"
      },
       {
        value: "k/ka/karl-harrer-77369.html",
        label: "Karl Harrer (1890-1926)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Karl_Harrer%2C_1._Vorsitzender_der_DAP.jpg/40px-Karl_Harrer%2C_1._Vorsitzender_der_DAP.jpg"
      },
       {
        value: "o/os/oscar-wilde-30875.html",
        label: "Oscar Wilde (1854-1900)",
        description: "escritor irlandés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Oscar_Wilde_portrait.jpg/40px-Oscar_Wilde_portrait.jpg"
      },
       {
        value: "n/na/nahum-goldmann-216016.html",
        label: "Nahum Goldmann (1895-1982)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Nachum_Goldman.jpg/40px-Nachum_Goldman.jpg"
      },
       {
        value: "r/ro/robert-hugh-benson-246953.html",
        label: "Robert Hugh Benson (1871-1914)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/R._H._Benson_40.jpg/40px-R._H._Benson_40.jpg"
      },
       {
        value: "c/ch/charles-follen-214324.html",
        label: "Charles Follen (1796-1840)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Vita-follen.jpg/40px-Vita-follen.jpg"
      },
       {
        value: "p/pa/patrick-pearse-274143.html",
        label: "Patrick Pearse (1879-1916)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Patrick_Pearse_cph.3b15294.jpg/40px-Patrick_Pearse_cph.3b15294.jpg"
      },
       {
        value: "b/bo/bolesaw-prus-144439.html",
        label: "Bolesław Prus (1847-1912)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Boles%C5%82aw_Prus_%28ca._1905%29.jpg/40px-Boles%C5%82aw_Prus_%28ca._1905%29.jpg"
      },
       {
        value: "l/ly/lydia-koidula-237056.html",
        label: "Lydia Koidula (1843-1886)",
        description: "poetisa estonia",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lydia_Koidula_A-37-3152.jpg/40px-Lydia_Koidula_A-37-3152.jpg"
      },
       {
        value: "f/fr/franz-xavier-von-zwack-215326.html",
        label: "Franz Xavier von Zwack (1756-1843)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Franz_Xaver_von_Zwack.jpg/40px-Franz_Xaver_von_Zwack.jpg"
      },
       {
        value: "e/el/elsa-triolet-4137.html",
        label: "Elsa Triolet (1896-1970)",
        description: "escritora francesa de origen ruso",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Elsa-triolet-1925.jpg/40px-Elsa-triolet-1925.jpg"
      },
       {
        value: "u/up/upton-sinclair-216134.html",
        label: "Upton Sinclair (1878-1968)",
        description: "escritor estadounidense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Upton_Sinclair_cph.3c32336.jpg/40px-Upton_Sinclair_cph.3c32336.jpg"
      },
       {
        value: "j/je/jean-hersholt-359251.html",
        label: "Jean Hersholt (1886-1956)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/HersholtBrotherswife.jpg/40px-HersholtBrotherswife.jpg"
      },
       {
        value: "a/al/aleksander-fredro-380506.html",
        label: "Aleksander Fredro (1793-1876)",
        description: "escritor polaco",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/RaczynskiAleksander.PortretAleksandraFredro.jpg/40px-RaczynskiAleksander.PortretAleksandraFredro.jpg"
      },
       {
        value: "i/is/israel-zangwill-113681.html",
        label: "Israel Zangwill (1864-1926)",
        description: "escritor británico",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Israel_Zangwill.jpg/40px-Israel_Zangwill.jpg"
      },
       {
        value: "y/ye/yevgueni-shvarts-268111.html",
        label: "Yevgueni Shvarts (1896-1958)",
        description: "escritor ruso",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Scrittore_Evgeny_Shvarts.jpg/40px-Scrittore_Evgeny_Shvarts.jpg"
      },
       {
        value: "l/lu/ludovit-stur-315222.html",
        label: "Ľudovít Štúr (1815-1856)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Ludovit_Stur.jpg/40px-Ludovit_Stur.jpg"
      },
       {
        value: "m/ma/mary-hunter-austin-477999.html",
        label: "Mary Hunter Austin (1868-1934)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Mary_Austin_c.1900.jpg/40px-Mary_Austin_c.1900.jpg"
      },
       {
        value: "g/ge/georg-forster-58062.html",
        label: "Georg Forster (1754-1794)",
        description: "naturalista, etnólogo, escritor viajero, periodista y revolucionario alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Georg_Forster.jpg/40px-Georg_Forster.jpg"
      },
       {
        value: "c/ch/charles-nodier-336010.html",
        label: "Charles Nodier (1780-1844)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Charles_Nodier.jpg/40px-Charles_Nodier.jpg"
      },
       {
        value: "n/na/napoleon-hill-311644.html",
        label: "Napoleón Hill (1883-1970)",
        description: "escritor estadounidense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Napoleon_Hill_holding_book_1937.jpg/40px-Napoleon_Hill_holding_book_1937.jpg"
      },
       {
        value: "n/ni/nicolae-iorga-313581.html",
        label: "Nicolae Iorga (1871-1940)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Iorga_at_his_desk_Luceaferul_2%2C_1914.jpg/40px-Iorga_at_his_desk_Luceaferul_2%2C_1914.jpg"
      },
       {
        value: "s/sh/sholem-asch-380439.html",
        label: "Sholem Asch (1880-1957)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Sholem_Asch.jpg/40px-Sholem_Asch.jpg"
      },
       {
        value: "a/al/albert-de-broglie-434932.html",
        label: "Albert de Broglie (1821-1901)",
        description: "político francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Debrogli.jpg/40px-Debrogli.jpg"
      },
       {
        value: "e/er/erik-axel-karlfeldt-134641.html",
        label: "Erik Axel Karlfeldt (1864-1931)",
        description: "poeta sueco",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Anders_Zorn_-_Erik_Axel_Karlfeldt_i_Zorng%C3%A5rdens_matsal_%281906%29.jpg/40px-Anders_Zorn_-_Erik_Axel_Karlfeldt_i_Zorng%C3%A5rdens_matsal_%281906%29.jpg"
      },
       {
        value: "s/sa/sayat-nova-366289.html",
        label: "Sayat-Nova (1712-1795)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Sayat-Nova_1.jpg/40px-Sayat-Nova_1.jpg"
      },
       {
        value: "f/fl/florbela-espanca-467179.html",
        label: "Florbela Espanca (1894-1930)",
        description: "poetisa portuguesa",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Espanca_Florbela.jpg/40px-Espanca_Florbela.jpg"
      },
       {
        value: "a/an/andrew-barton-paterson-436699.html",
        label: "Andrew Barton Paterson (1864-1941)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Banjo_Patterson.jpg/40px-Banjo_Patterson.jpg"
      },
       {
        value: "a/al/aleksandr-bestuzhev-128832.html",
        label: "Aleksandr Bestúzhev (1797-1837)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Bestuzhev_Alexandr_Alexandrovich.jpg/40px-Bestuzhev_Alexandr_Alexandrovich.jpg"
      },
       {
        value: "c/cl/claire-clairmont-460066.html",
        label: "Claire Clairmont (1798-1879)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Claire_Clairmont%2C_by_Amelia_Curran.jpg/40px-Claire_Clairmont%2C_by_Amelia_Curran.jpg"
      },
       {
        value: "c/ch/christian-lange-206446.html",
        label: "Christian Lange (1869-1938)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Christian_Lous_Lange.jpg/40px-Christian_Lous_Lange.jpg"
      },
       {
        value: "h/he/herman-bang-439370.html",
        label: "Herman Bang (1857-1912)",
        description: "escritor danés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Herman_Bang_sitting.jpg/40px-Herman_Bang_sitting.jpg"
      },
       {
        value: "j/jo/johannes-le-francq-van-berkhey-117688.html",
        label: "Johannes le Francq van Berkhey (1729-1812)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Johannes_le_Francq_van_Berkhey%2C_attributed_to_Hendrik_Pothoven.jpg/40px-Johannes_le_Francq_van_Berkhey%2C_attributed_to_Hendrik_Pothoven.jpg"
      },
       {
        value: "i/iv/ivo-andric-47561.html",
        label: "Ivo Andrić (1892-1975)",
        description: "escritor serbio",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Andric_Ivo.jpg/40px-Andric_Ivo.jpg"
      },
       {
        value: "p/pa/paul-feval-padre-472568.html",
        label: "Paul Féval padre (1816-1887)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Paul_F%C3%A9val.jpg/40px-Paul_F%C3%A9val.jpg"
      },
       {
        value: "i/iv/ivan-krylov-191480.html",
        label: "Iván Krylov (1769-1844)",
        description: "escritor ruso",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Eggink-Portrait_of_Ivan_Krylov.jpg/40px-Eggink-Portrait_of_Ivan_Krylov.jpg"
      },
       {
        value: "i/im/immanuel-velikovsky-349749.html",
        label: "Immanuel Velikovsky (1895-1979)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Immanuel_Velikovsky.jpg/40px-Immanuel_Velikovsky.jpg"
      },
       {
        value: "k/ka/katherine-mansfield-270632.html",
        label: "Katherine Mansfield (1888-1923)",
        description: "escritora neozelandesa",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Mansfield_1917_cropped.jpg/40px-Mansfield_1917_cropped.jpg"
      },
       {
        value: "w/wi/william-morris-davis-315967.html",
        label: "William Morris Davis (1850-1934)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/William_Morris_Davis.jpg/40px-William_Morris_Davis.jpg"
      },
       {
        value: "l/le/leopoldo-lugones-188875.html",
        label: "Leopoldo Lugones (1874-1938)",
        description: "poeta, ensayista, periodista y político de Argentina",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Leopoldo_Lugones.jpg/40px-Leopoldo_Lugones.jpg"
      },
       {
        value: "j/je/jean-le-rond-dalembert-153232.html",
        label: "Jean le Rond d'Alembert (1717-1783)",
        description: "Filósofo francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Jean_Le_Rond_d%27Alembert%2C_by_French_school.jpg/40px-Jean_Le_Rond_d%27Alembert%2C_by_French_school.jpg"
      },
       {
        value: "m/mi/milutin-milankovic-89054.html",
        label: "Milutin Milanković (1879-1958)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Milutin_Milankovi%C4%87.jpg/40px-Milutin_Milankovi%C4%87.jpg"
      },
       {
        value: "m/ma/mamie-geneva-doud-eisenhower-233686.html",
        label: "Mamie Geneva Doud Eisenhower (1896-1979)",
        description: "Primera Dama de los Estados Unidos",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Mamie_Eisenhower_color_photo_portrait%2C_White_House%2C_May_1954.jpg/40px-Mamie_Eisenhower_color_photo_portrait%2C_White_House%2C_May_1954.jpg"
      },
       {
        value: "p/ph/philip-schaff-115922.html",
        label: "Philip Schaff (1819-1893)",
        description: "teólogo e historiador suizo (1819-1893)",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Philip_Schaff.jpg/40px-Philip_Schaff.jpg"
      },
       {
        value: "n/no/novalis-60684.html",
        label: "Novalis (1772-1801)",
        description: "poeta alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Novalis.jpg/40px-Novalis.jpg"
      },
       {
        value: "j/je/jean-jacques-ampere-380824.html",
        label: "Jean-Jacques Ampère (1800-1864)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Jean-Jacques_Amp%C3%A8re.jpg/40px-Jean-Jacques_Amp%C3%A8re.jpg"
      },
       {
        value: "f/fe/ferdinand-raimund-45025.html",
        label: "Ferdinand Raimund (1790-1836)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Ferdinand_Raimund.jpg/40px-Ferdinand_Raimund.jpg"
      },
       {
        value: "f/fr/friedrich-ruckert-60644.html",
        label: "Friedrich Rückert (1788-1866)",
        description: "poeta, escritor, traductor alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Friedrich_R%C3%BCckert.jpg/40px-Friedrich_R%C3%BCckert.jpg"
      },
       {
        value: "e/ed/edith-nesbit-231708.html",
        label: "Edith Nesbit (1858-1924)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Nesbit.jpg/40px-Nesbit.jpg"
      },
       {
        value: "j/jo/johannes-vilhelm-jensen-159552.html",
        label: "Johannes Vilhelm Jensen (1873-1950)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Johannes_Vilhelm_Jensen_1944.jpg/40px-Johannes_Vilhelm_Jensen_1944.jpg"
      },
       {
        value: "e/ed/edgar-rice-burroughs-148234.html",
        label: "Edgar Rice Burroughs (1875-1950)",
        description: "escritor estadounidense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/E-R-Burroughs.jpg/40px-E-R-Burroughs.jpg"
      },
       {
        value: "r/ri/richard-monckton-milnes-1st-baron-houghton-334614.html",
        label: "Richard Monckton Milnes, 1st Baron Houghton (1809-1885)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Milnes.jpg/40px-Milnes.jpg"
      },
       {
        value: "e/eu/eugene-fromentin-353746.html",
        label: "Eugène Fromentin (1820-1876)",
        description: "pintor francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Eugene_Fromentin.jpg/40px-Eugene_Fromentin.jpg"
      },
       {
        value: "l/le/leon-dhervey-de-saint-denys-4786.html",
        label: "Léon d'Hervey de Saint-Denys (1822-1892)",
        description: "escritor y sinólogo francés, precursor de la onirología",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/D_Hervey_de_Saint_Denys.jpg/40px-D_Hervey_de_Saint_Denys.jpg"
      },
       {
        value: "j/jo/jose-bonifacio-379631.html",
        label: "José Bonifácio (1763-1838)",
        description: "naturalista, estadista y poeta brasileño",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Calixt33.jpg/40px-Calixt33.jpg"
      },
       {
        value: "s/sa/sarah-orne-jewett-444995.html",
        label: "Sarah Orne Jewett (1849-1909)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Sarah_Orne_Jewett_7.jpg/40px-Sarah_Orne_Jewett_7.jpg"
      },
       {
        value: "v/vi/viktor-dyk-109067.html",
        label: "Viktor Dyk (1877-1931)",
        description: "poeta, escritor, político y abogado checo",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Viktor_Dyk.jpg/40px-Viktor_Dyk.jpg"
      },
       {
        value: "l/la/lady-randolph-churchill-243011.html",
        label: "Lady Randolph Churchill (1854-1921)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Jennie_Churchill.jpg/40px-Jennie_Churchill.jpg"
      },
       {
        value: "m/mi/minna-canth-298027.html",
        label: "Minna Canth (1844-1897)",
        description: "escritora finlandesa",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/MinnaCanth.jpg/40px-MinnaCanth.jpg"
      },
       {
        value: "u/ur/urmuz-279856.html",
        label: "Urmuz (1883-1923)",
        description: "escritor rumano",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Urmuz_Marcel_Iancu.jpg/40px-Urmuz_Marcel_Iancu.jpg"
      },
       {
        value: "v/vi/victor-serge-362009.html",
        label: "Víctor Serge (1890-1947)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Victor_serge.jpg/40px-Victor_serge.jpg"
      },
       {
        value: "i/in/inazo-nitobe-12696.html",
        label: "Inazō Nitobe (1862-1933)",
        description: "escritor japonés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Inazo_Nitobe.jpg/40px-Inazo_Nitobe.jpg"
      },
       {
        value: "k/ka/karl-gutzkow-76755.html",
        label: "Karl Gutzkow (1811-1878)",
        description: "escritor alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Carl_Gutzkow_19c.jpg/40px-Carl_Gutzkow_19c.jpg"
      },
       {
        value: "h/hu/hugo-ball-70989.html",
        label: "Hugo Ball (1886-1927)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Hugoball.jpg/40px-Hugoball.jpg"
      },
       {
        value: "s/sh/shmuel-yosef-agnon-133042.html",
        label: "Shmuel Yosef Agnón (1888-1970)",
        description: "escritor israelí",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Agnon.jpg/40px-Agnon.jpg"
      },
       {
        value: "a/au/aubrey-beardsley-272566.html",
        label: "Aubrey Beardsley (1872-1898)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/AubreyBeardsley-Hollyer1.jpg/40px-AubreyBeardsley-Hollyer1.jpg"
      },
       {
        value: "o/ot/otto-jespersen-23870.html",
        label: "Otto Jespersen (1860-1943)",
        description: "lingüista y filósofo danés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Otto_Jespersen.jpg/40px-Otto_Jespersen.jpg"
      },
       {
        value: "j/jo/johann-christian-daniel-von-schreber-162688.html",
        label: "Johann Christian Daniel von Schreber (1739-1810)",
        description: "entomólogo alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Schreber_Johann_Christian_Daniel_von_1739-1810.jpg/40px-Schreber_Johann_Christian_Daniel_von_1739-1810.jpg"
      },
       {
        value: "e/ed/edgar-wallace-271824.html",
        label: "Edgar Wallace (1875-1932)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Bundesarchiv_Bild_102-13109%2C_Edgar_Wallace.jpg/40px-Bundesarchiv_Bild_102-13109%2C_Edgar_Wallace.jpg"
      },
       {
        value: "j/je/jens-immanuel-baggesen-215945.html",
        label: "Jens Immanuel Baggesen (1764-1826)",
        description: "poeta danés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Jens_Baggesen_kobberstik.jpg/40px-Jens_Baggesen_kobberstik.jpg"
      },
       {
        value: "v/vl/vladimir-korolenko-335064.html",
        label: "Vladímir Korolenko (1853-1921)",
        description: "escritor ruso",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Vladimir_Korolenko_bw.jpg/40px-Vladimir_Korolenko_bw.jpg"
      },
       {
        value: "p/ph/philippe-soupault-336467.html",
        label: "Philippe Soupault (1897-1990)",
        description: "escritor francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Robert_Delaunay_-_Le_Po%C3%A8te_Philippe_Soupault.jpg/40px-Robert_Delaunay_-_Le_Po%C3%A8te_Philippe_Soupault.jpg"
      },
       {
        value: "z/zh/zhou-zuoren-198051.html",
        label: "Zhou Zuoren (1885-1967)",
        description: "escritor chino",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Zhou_Zuoren.jpg/40px-Zhou_Zuoren.jpg"
      },
       {
        value: "j/ju/julio-verne-33977.html",
        label: "Julio Verne (1828-1905)",
        description: "escritor",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/F%C3%A9lix_Nadar_1820-1910_portraits_Jules_Verne.jpg/40px-F%C3%A9lix_Nadar_1820-1910_portraits_Jules_Verne.jpg"
      },
       {
        value: "f/fr/frans-gunnar-bengtsson-444002.html",
        label: "Frans Gunnar Bengtsson (1894-1954)",
        description: "escritor sueco",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Frans_G._Bengtsson.jpg/40px-Frans_G._Bengtsson.jpg"
      },
       {
        value: "w/wi/william-blackstone-332449.html",
        label: "William Blackstone (1723-1780)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/William_Blackstone_by_Thomas_Hamilton_Crawford_after_Joshua_Reynolds.jpg/40px-William_Blackstone_by_Thomas_Hamilton_Crawford_after_Joshua_Reynolds.jpg"
      },
       {
        value: "r/ra/ramon-de-campoamor-64578.html",
        label: "Ramón de Campoamor (1817-1901)",
        description: "poeta español",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Ram%C3%B3n_de_Campoamor.jpg/40px-Ram%C3%B3n_de_Campoamor.jpg"
      },
       {
        value: "s/st/stanisaw-ignacy-witkiewicz-381238.html",
        label: "Stanisław Ignacy Witkiewicz (1885-1939)",
        description: "artista polaco",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Stanis%C5%82aw_Ignacy_Witkiewicz.jpg/40px-Stanis%C5%82aw_Ignacy_Witkiewicz.jpg"
      },
       {
        value: "c/ca/carl-bernhard-von-cotta-70211.html",
        label: "Carl Bernhard von Cotta (1808-1879)",
        description: "polímata, geólogo y botánico alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bernhard_von_Cotta.jpg/40px-Bernhard_von_Cotta.jpg"
      },
       {
        value: "a/ar/arrigo-boito-219491.html",
        label: "Arrigo Boito (1842-1918)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Arrigo_Boito.jpg/40px-Arrigo_Boito.jpg"
      },
       {
        value: "t/tr/trygve-gulbranssen-366315.html",
        label: "Trygve Gulbranssen (1894-1962)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Trygve_Gulbranssen.jpg/40px-Trygve_Gulbranssen.jpg"
      },
       {
        value: "g/ga/gavrila-derzhavin-270275.html",
        label: "Gavrila Derzhavin (1743-1816)",
        description: "poeta ruso",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Derzhavin_by_Borovikovsky_%281811%2C_Pushkin_museum%29.jpg/40px-Derzhavin_by_Borovikovsky_%281811%2C_Pushkin_museum%29.jpg"
      },
       {
        value: "f/fr/francis-jammes-353873.html",
        label: "Francis Jammes (1868-1938)",
        description: "poeta francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Francis_Jammes_by_Jean_Veber.jpg/40px-Francis_Jammes_by_Jean_Veber.jpg"
      },
       {
        value: "p/pa/pavel-bazhov-182156.html",
        label: "Pável Bazhov (1879-1950)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/%D0%9F%D0%B0%D0%B2%D0%B5%D0%BB_%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D0%B2%D0%B8%D1%87_%D0%B2_1911_%D0%B3%D0%BE%D0%B4%D1%83.jpg/40px-%D0%9F%D0%B0%D0%B2%D0%B5%D0%BB_%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D0%B2%D0%B8%D1%87_%D0%B2_1911_%D0%B3%D0%BE%D0%B4%D1%83.jpg"
      },
       {
        value: "g/ga/gabriela-mistral-80871.html",
        label: "Gabriela Mistral (1889-1957)",
        description: "poeta, diplomática y feminista chilena y alemana",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Gabriela_Mistral-01.jpg/40px-Gabriela_Mistral-01.jpg"
      },
       {
        value: "g/gu/gustaf-froding-366801.html",
        label: "Gustaf Fröding (1860-1911)",
        description: "escritor sueco",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Gustav_Fr%C3%B6ding.jpg/40px-Gustav_Fr%C3%B6ding.jpg"
      },
       {
        value: "c/ca/carl-michael-bellman-312498.html",
        label: "Carl Michael Bellman (1740-1795)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Carl_Michael_Bellman%2C_portrayed_by_Per_Krafft_1779.jpg/40px-Carl_Michael_Bellman%2C_portrayed_by_Per_Krafft_1779.jpg"
      },
       {
        value: "c/cl/clorinda-matto-de-turner-463299.html",
        label: "Clorinda Matto de Turner (1852-1909)",
        description: "escritora peruana",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Clorinda_Matto_de_Turner.jpg/40px-Clorinda_Matto_de_Turner.jpg"
      },
       {
        value: "i/il/ilia-erenburg-348497.html",
        label: "Iliá Erenburg (1891-1967)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Ilja_Grigorjewitsch_Ehrenburg_1943.jpg/40px-Ilja_Grigorjewitsch_Ehrenburg_1943.jpg"
      },
       {
        value: "t/th/thorstein-veblen-73646.html",
        label: "Thorstein Veblen (1857-1929)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Veblen3a.jpg/40px-Veblen3a.jpg"
      },
       {
        value: "j/jo/joshua-slocum-505923.html",
        label: "Joshua Slocum (1844-1909)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Joshua_Slocum_cph.3b46344.jpg/40px-Joshua_Slocum_cph.3b46344.jpg"
      },
       {
        value: "h/he/herman-melville-4985.html",
        label: "Herman Melville (1819-1891)",
        description: "novelista, cuentista, ensayista i poeta estadounidense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Herman_Melville.jpg/40px-Herman_Melville.jpg"
      },
       {
        value: "g/gi/gibran-jalil-gibran-47737.html",
        label: "Gibran Jalil Gibran (1883-1931)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Khalil_Gibran.jpg/40px-Khalil_Gibran.jpg"
      },
       {
        value: "m/ma/mary-eleanor-wilkins-freeman-276421.html",
        label: "Mary Eleanor Wilkins Freeman (1852-1930)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Mary_E._Wilkins_cph.3b16502.jpg/40px-Mary_E._Wilkins_cph.3b16502.jpg"
      },
       {
        value: "a/ad/adelardo-lopez-de-ayala-354137.html",
        label: "Adelardo López de Ayala (1828-1879)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/A.C.L%C3%B3pez_de_Ayala.jpg/40px-A.C.L%C3%B3pez_de_Ayala.jpg"
      },
       {
        value: "c/ca/carl-sternheim-61662.html",
        label: "Carl Sternheim (1878-1942)",
        description: "escritor alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Ernst_Ludwig_Kirchner_Bildnis_Carl_Sternheim_1916.jpg/40px-Ernst_Ludwig_Kirchner_Bildnis_Carl_Sternheim_1916.jpg"
      },
       {
        value: "a/al/aleksandr-beliayev-497925.html",
        label: "Aleksandr Beliáyev (1884-1942)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Alexander_Belayev.jpg/40px-Alexander_Belayev.jpg"
      },
       {
        value: "n/ne/nellie-bly-230299.html",
        label: "Nellie Bly (1864-1922)",
        description: "periodista estadounidense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Nellie_Bly_2.jpg/40px-Nellie_Bly_2.jpg"
      },
       {
        value: "a/ad/adolf-erik-nordenskjold-156749.html",
        label: "Adolf Erik Nordenskjöld (1832-1901)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Adolf_Erik_Nordenski%C3%B6ld_by_Axel_Jungstedt_1902.jpg/40px-Adolf_Erik_Nordenski%C3%B6ld_by_Axel_Jungstedt_1902.jpg"
      },
       {
        value: "m/mu/multatuli-154211.html",
        label: "Multatuli (1820-1887)",
        description: "escritor neerlandés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Portret_van_de_schrijver_Multatuli_%28cropped%29.jpg/40px-Portret_van_de_schrijver_Multatuli_%28cropped%29.jpg"
      },
       {
        value: "a/al/aleksei-lvov-241252.html",
        label: "Alekséi Lvov (1798-1870)",
        description: "compositor ruso",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Alexei_Fyodorovich_Lvov.jpg/40px-Alexei_Fyodorovich_Lvov.jpg"
      },
       {
        value: "h/he/heinrich-kuhl-61469.html",
        label: "Heinrich Kuhl (1797-1821)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Heinrich_Kuhl_%281797-1821%29.jpg/40px-Heinrich_Kuhl_%281797-1821%29.jpg"
      },
       {
        value: "t/ta/tarhan-abdulhak-hamid-318014.html",
        label: "Tarhan Abdulhak Hamid (1852-1937)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Abdulhak_Hamid_Bey.jpg/40px-Abdulhak_Hamid_Bey.jpg"
      },
       {
        value: "c/ca/carolina-michaelis-de-vasconcellos-76158.html",
        label: "Carolina Michaëlis de Vasconcellos (1851-1925)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Carolina_Micha%C3%ABlis.jpg/40px-Carolina_Micha%C3%ABlis.jpg"
      },
       {
        value: "p/pe/pedro-antonio-de-alarcon-313553.html",
        label: "Pedro Antonio de Alarcón (1833-1891)",
        description: "novelista español",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/PedroAntonioAlarcon.jpg/40px-PedroAntonioAlarcon.jpg"
      },
       {
        value: "h/h-/h-rider-haggard-237196.html",
        label: "H. Rider Haggard (1856-1925)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Henry_Rider_Haggard_03.jpg/40px-Henry_Rider_Haggard_03.jpg"
      },
       {
        value: "m/ma/maria-deraismes-449513.html",
        label: "Maria Deraismes (1828-1894)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Barrias_Maria_Deraismes_Epinettes_Paris_17e.jpg/40px-Barrias_Maria_Deraismes_Epinettes_Paris_17e.jpg"
      },
       {
        value: "h/ha/hans-bluher-70113.html",
        label: "Hans Blüher (1888-1955)",
        description: "periodista de Alemania",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Hans_Bl%C3%BCher_1888-1955.jpg/40px-Hans_Bl%C3%BCher_1888-1955.jpg"
      },
       {
        value: "f/fe/felipe-poey-500649.html",
        label: "Felipe Poey (1799-1891)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/PSM_V25_D446_Felipe_Poey.jpg/40px-PSM_V25_D446_Felipe_Poey.jpg"
      },
       {
        value: "p/pa/paul-otlet-1868.html",
        label: "Paul Otlet (1868-1944)",
        description: "fundador de la ciencia de la Bibliografía y de la ciencia de la Documentación",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Paul_Otlet_%C3%A0_son_bureau_%28cropped%29.jpg/40px-Paul_Otlet_%C3%A0_son_bureau_%28cropped%29.jpg"
      },
       {
        value: "j/jo/jose-bergamin-332850.html",
        label: "José Bergamín (1895-1983)",
        description: "escritor español",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/JOSE_BERGAMIN_1895_ESPA%C3%91OL%2C_ENSAYISTA_Y_DRAMATURGO_%2813451169105%29.jpg/40px-JOSE_BERGAMIN_1895_ESPA%C3%91OL%2C_ENSAYISTA_Y_DRAMATURGO_%2813451169105%29.jpg"
      },
       {
        value: "a/ar/arnold-bennett-314158.html",
        label: "Arnold Bennett (1867-1931)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Arnold_Bennett_-_Project_Gutenberg_etext_13635.jpg/40px-Arnold_Bennett_-_Project_Gutenberg_etext_13635.jpg"
      },
       {
        value: "c/ch/charles-bonnet-123565.html",
        label: "Charles Bonnet (1720-1793)",
        description: "botánico suizo",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/CharlesBonnet.jpg/40px-CharlesBonnet.jpg"
      },
       {
        value: "l/la/lady-gregory-239540.html",
        label: "Lady Gregory (1852-1932)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Lady_gregory.jpg/40px-Lady_gregory.jpg"
      },
       {
        value: "c/ca/carl-hauptmann-77485.html",
        label: "Carl Hauptmann (1858-1921)",
        description: "escritor alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Carl_Hauptmann.jpg/40px-Carl_Hauptmann.jpg"
      },
       {
        value: "m/ma/maria-antonia-walpurgis-de-baviera-61649.html",
        label: "María Antonia Walpurgis de Baviera (1724-1780)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Maria_Antonia_Walpurgis_von_Bayern%2C_Mengs%2C_1752.jpg/40px-Maria_Antonia_Walpurgis_von_Bayern%2C_Mengs%2C_1752.jpg"
      },
       {
        value: "p/pa/paramahansa-yogananda-312549.html",
        label: "Paramahansa Yogananda (1893-1952)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Paramahansa_Yogananda.jpg/40px-Paramahansa_Yogananda.jpg"
      },
       {
        value: "a/am/amalie-skram-291676.html",
        label: "Amalie Skram (1846-1905)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Amalie_Skram2.jpg/40px-Amalie_Skram2.jpg"
      },
       {
        value: "p/pi/piotr-krasnov-35448.html",
        label: "Piotr Krasnov (1869-1947)",
        description: "atamán cosaco",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/General_Krasnow_%28cropped%29.jpg/40px-General_Krasnow_%28cropped%29.jpg"
      },
       {
        value: "j/ji/jiddu-krishnamurti-179266.html",
        label: "Jiddu Krishnamurti (1895-1986)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Jiddu_Krishnamurti_01.jpg/40px-Jiddu_Krishnamurti_01.jpg"
      },
       {
        value: "f/fr/frederic-mistral-42596.html",
        label: "Frédéric Mistral (1830-1914)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Frederic_Mistral_portrait_photo.jpg/40px-Frederic_Mistral_portrait_photo.jpg"
      },
       {
        value: "c/cy/cyprian-kamil-norwid-340122.html",
        label: "Cyprian Kamil Norwid (1821-1883)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/PL_Dzie%C5%82a_Cyprjana_Norwida_%28Pini%29_page_040_-_Cyprian_Norwid_na_fotografii.jpg/40px-PL_Dzie%C5%82a_Cyprjana_Norwida_%28Pini%29_page_040_-_Cyprian_Norwid_na_fotografii.jpg"
      },
       {
        value: "a/ab/abraham-gotthelf-kastner-61813.html",
        label: "Abraham Gotthelf Kastner (1719-1800)",
        description: "matemático alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Abraham_Gotthelf_K%C3%A4stner.jpg/40px-Abraham_Gotthelf_K%C3%A4stner.jpg"
      },
       {
        value: "a/al/alexander-kielland-318358.html",
        label: "Alexander Kielland (1849-1906)",
        description: "escritor noruego",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Alexander_Kielland_by_Emil_Hohlenberg.jpg/40px-Alexander_Kielland_by_Emil_Hohlenberg.jpg"
      },
       {
        value: "p/p-/p-g-wodehouse-207515.html",
        label: "P. G. Wodehouse (1881-1975)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/PGWodehouse.jpg/40px-PGWodehouse.jpg"
      },
       {
        value: "w/wi/william-whewell-333922.html",
        label: "William Whewell (1794-1866)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/William_Whewell_-_Project_Gutenberg_eText_13103.jpg/40px-William_Whewell_-_Project_Gutenberg_eText_13103.jpg"
      },
       {
        value: "a/al/alexandre-dumas-38337.html",
        label: "Alexandre Dumas (1802-1870)",
        description: "novelista y dramaturgo francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Nadar_-_Alexander_Dumas_p%C3%A8re_%281802-1870%29_-_Google_Art_Project_2.jpg/40px-Nadar_-_Alexander_Dumas_p%C3%A8re_%281802-1870%29_-_Google_Art_Project_2.jpg"
      },
       {
        value: "r/ra/raphael-georg-kiesewetter-327684.html",
        label: "Raphael Georg Kiesewetter (1773-1850)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Raphael_Georg_Kiesewetter_1847_Haehnisch.jpg/40px-Raphael_Georg_Kiesewetter_1847_Haehnisch.jpg"
      },
       {
        value: "g/gu/gustav-regler-67781.html",
        label: "Gustav Regler (1898-1963)",
        description: "escritor alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Portraet_Gustav_Regler%2C_ca_1944%2C_Mexiko.jpg/40px-Portraet_Gustav_Regler%2C_ca_1944%2C_Mexiko.jpg"
      },
       {
        value: "a/ad/adolf-wilbrandt-67953.html",
        label: "Adolf Wilbrandt (1837-1911)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Wilbrandt_1882.jpg/40px-Wilbrandt_1882.jpg"
      },
       {
        value: "l/lu/ludwig-uhland-61058.html",
        label: "Ludwig Uhland (1787-1862)",
        description: "poeta alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Uhland.jpg/40px-Uhland.jpg"
      },
       {
        value: "f/fe/felicite-robert-de-lamennais-334973.html",
        label: "Félicité Robert de Lamennais (1782-1854)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Lamennais.jpg/40px-Lamennais.jpg"
      },
       {
        value: "h/hu/hugh-clapperton-453644.html",
        label: "Hugh Clapperton (1788-1827)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Hugh_Clapperton_portrait.jpg/40px-Hugh_Clapperton_portrait.jpg"
      },
       {
        value: "c/ca/carlo-emilio-gadda-378645.html",
        label: "Carlo Emilio Gadda (1893-1973)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Gadda_1921.jpg/40px-Gadda_1921.jpg"
      },
       {
        value: "r/ra/ralph-waldo-emerson-48226.html",
        label: "Ralph Waldo Emerson (1803-1882)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/RWEmerson.jpg/40px-RWEmerson.jpg"
      },
       {
        value: "d/do/douglas-fairbanks-104127.html",
        label: "Douglas Fairbanks (1883-1939)",
        description: "actor estadounidense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Douglas_Fairbanks_Sr._-_Private_Life_of_Don_Juan.jpg/40px-Douglas_Fairbanks_Sr._-_Private_Life_of_Don_Juan.jpg"
      },
       {
        value: "n/ni/nikolai-gogol-43718.html",
        label: "Nikolái Gógol (1809-1852)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Nikolai_Gogol.jpg/40px-Nikolai_Gogol.jpg"
      },
       {
        value: "t/th/thomas-carlyle-151403.html",
        label: "Thomas Carlyle (1795-1881)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Thomas_Carlyle.jpg/40px-Thomas_Carlyle.jpg"
      },
       {
        value: "f/fr/francisco-de-orleans-454337.html",
        label: "Francisco de Orleans (1818-1900)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/PrinceDeJoinville.jpg/40px-PrinceDeJoinville.jpg"
      },
       {
        value: "t/th/thomas-paine-126462.html",
        label: "Thomas Paine (1737-1809)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Thomas_Paine.jpg/40px-Thomas_Paine.jpg"
      },
       {
        value: "l/li/lily-braun-71372.html",
        label: "Lily Braun (1865-1916)",
        description: "escritora alemana",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Lily_Braun.jpg/40px-Lily_Braun.jpg"
      },
       {
        value: "s/so/sofia-kovalevskaya-184535.html",
        label: "Sofia Kovalévskaya (1850-1891)",
        description: "matemática rusa",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Sofja_Wassiljewna_Kowalewskaja_1.jpg/40px-Sofja_Wassiljewna_Kowalewskaja_1.jpg"
      },
       {
        value: "c/ch/charles-peguy-334965.html",
        label: "Charles Péguy (1873-1914)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Charles_peguy.jpg/40px-Charles_peguy.jpg"
      },
       {
        value: "l/lu/ludovic-vitet-442299.html",
        label: "Ludovic Vitet (1802-1873)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Vitet%2C_Ludovic_%282%29.jpg/40px-Vitet%2C_Ludovic_%282%29.jpg"
      },
       {
        value: "c/ch/charles-koechlin-72543.html",
        label: "Charles Koechlin (1867-1950)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Charles_Koechlin_1.jpg/40px-Charles_Koechlin_1.jpg"
      },
       {
        value: "h/he/henri-de-saint-simon-82934.html",
        label: "Henri de Saint-Simon (1760-1825)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Henri_de_Saint-simon_portrait.jpg/40px-Henri_de_Saint-simon_portrait.jpg"
      },
       {
        value: "f/fr/frederick-douglass-215562.html",
        label: "Frederick Douglass (1818-1895)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Frederick_Douglass_portrait.jpg/40px-Frederick_Douglass_portrait.jpg"
      },
       {
        value: "w/wi/william-carlos-williams-178106.html",
        label: "William Carlos Williams (1883-1963)",
        description: "poeta estadounidense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/William_Carlos_Williams_passport_photograph_1921.jpg/40px-William_Carlos_Williams_passport_photograph_1921.jpg"
      },
       {
        value: "w/wi/william-shenstone-329141.html",
        label: "William Shenstone (1714-1763)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/William_Shenstone_by_Edward_Alcock.jpg/40px-William_Shenstone_by_Edward_Alcock.jpg"
      },
       {
        value: "r/ri/richard-buckminster-fuller-102289.html",
        label: "Richard Buckminster Fuller (1895-1983)",
        description: "diseñador, ingeniero, visionario e inventor estadounidense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/BuckminsterFuller1.jpg/40px-BuckminsterFuller1.jpg"
      },
       {
        value: "r/ra/ramon-gomez-de-la-serna-444893.html",
        label: "Ramón Gómez de la Serna (1888-1963)",
        description: "escritor español",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Ram%C3%B3n_G%C3%B3mez_de_la_Serna_b_Meurisse_1928.jpg/40px-Ram%C3%B3n_G%C3%B3mez_de_la_Serna_b_Meurisse_1928.jpg"
      },
       {
        value: "f/fr/fritz-grunbaum-87857.html",
        label: "Fritz Grünbaum (1880-1941)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Fritz_Gr%C3%BCnbaum.jpg/40px-Fritz_Gr%C3%BCnbaum.jpg"
      },
       {
        value: "a/an/anton-delvig-327015.html",
        label: "Antón Délvig (1798-1831)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Anton_Delvig_2.jpg/40px-Anton_Delvig_2.jpg"
      },
       {
        value: "a/an/antonin-artaud-187166.html",
        label: "Antonin Artaud (1896-1948)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Artaud_BNF.jpg/40px-Artaud_BNF.jpg"
      },
       {
        value: "j/ja/jakob-venedey-215375.html",
        label: "Jakob Venedey (1805-1871)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Jakob_Venedey_76-023.jpg/40px-Jakob_Venedey_76-023.jpg"
      },
       {
        value: "e/em/emily-murphy-439355.html",
        label: "Emily Murphy (1868-1933)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/EmilyMurphy.jpg/40px-EmilyMurphy.jpg"
      },
       {
        value: "j/jo/johann-gottlieb-gleditsch-64257.html",
        label: "Johann Gottlieb Gleditsch (1714-1786)",
        description: "botánico alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Johann_Gottlieb_Gleditsch.jpg/40px-Johann_Gottlieb_Gleditsch.jpg"
      },
       {
        value: "h/ha/hannah-more-25880.html",
        label: "Hannah More (1745-1833)",
        description: "escritora y filántropa inglesa",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/HannahMore.jpg/40px-HannahMore.jpg"
      },
       {
        value: "a/al/alfred-russel-wallace-160627.html",
        label: "Alfred Russel Wallace (1823-1913)",
        description: "naturalista, explorador, geógrafo, antropólogo y biólogo británico",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Alfred-Russel-Wallace-c1895.jpg/40px-Alfred-Russel-Wallace-c1895.jpg"
      },
       {
        value: "g/ge/george-santayana-237833.html",
        label: "George Santayana (1863-1952)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/George_Santayana.jpg/40px-George_Santayana.jpg"
      },
       {
        value: "w/wi/william-cowper-315537.html",
        label: "William Cowper (1731-1800)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/William_Cowper_by_Lemuel_Francis_Abbott.jpg/40px-William_Cowper_by_Lemuel_Francis_Abbott.jpg"
      },
       {
        value: "e/ei/eiji-yoshikawa-221957.html",
        label: "Eiji Yoshikawa (1892-1962)",
        description: "novelista japonés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Eiji_Yoshikawa.jpg/40px-Eiji_Yoshikawa.jpg"
      },
       {
        value: "h/ho/horace-walpole-309903.html",
        label: "Horace Walpole (1717-1797)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Horace_Walpole.jpg/40px-Horace_Walpole.jpg"
      },
       {
        value: "a/am/amy-levy-275367.html",
        label: "Amy Levy (1861-1889)",
        description: "escritora británica",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Amy_Levy_1.jpg/40px-Amy_Levy_1.jpg"
      },
       {
        value: "e/em/emanuel-schikaneder-213547.html",
        label: "Emanuel Schikaneder (1751-1812)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Emanuel_Schikaneder.jpg/40px-Emanuel_Schikaneder.jpg"
      },
       {
        value: "h/he/henrik-gabriel-porthan-333651.html",
        label: "Henrik Gabriel Porthan (1739-1804)",
        description: "historiador finlandés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Henrik_Gabriel_Porthan.jpg/40px-Henrik_Gabriel_Porthan.jpg"
      },
       {
        value: "f/fi/fitz-james-obrien-212510.html",
        label: "Fitz James O'Brien (1828-1862)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Fitz_James_O%27Brien_001.jpg/40px-Fitz_James_O%27Brien_001.jpg"
      },
       {
        value: "v/vi/vicente-antonio-garcia-de-la-huerta-251560.html",
        label: "Vicente Antonio García de la Huerta (1734-1787)",
        description: "poeta y dramaturgo español",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Vicente_Garc%C3%ADa_de_la_Huerta.jpg/40px-Vicente_Garc%C3%ADa_de_la_Huerta.jpg"
      },
       {
        value: "h/he/herbert-spencer-144535.html",
        label: "Herbert Spencer (1820-1903)",
        description: "herbert spenser",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Herbert_Spencer_3.jpg/40px-Herbert_Spencer_3.jpg"
      },
       {
        value: "m/ma/magdalena-dobromila-rettigova-448799.html",
        label: "Magdalena Dobromila Rettigová (1785-1845)",
        description: "escritora checa",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Jan_Vil%C3%ADmek_-_Magdalena_Dobromila_Rettigov%C3%A1.jpg/40px-Jan_Vil%C3%ADmek_-_Magdalena_Dobromila_Rettigov%C3%A1.jpg"
      },
       {
        value: "c/ca/caroline-schelling-63928.html",
        label: "Caroline Schelling (1763-1809)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Tischbein_-_Caroline_Schelling.jpg/40px-Tischbein_-_Caroline_Schelling.jpg"
      },
       {
        value: "a/a-/a-a-milne-207036.html",
        label: "A. A. Milne (1882-1956)",
        description: "escritor británico, conocido por ser el creador del personaje Winnie the Pooh",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/A_a_milne.jpg/40px-A_a_milne.jpg"
      },
       {
        value: "f/fr/friedrich-kellner-76775.html",
        label: "Friedrich Kellner (1885-1970)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Friedrich_Kellner_1934-b.jpg/40px-Friedrich_Kellner_1934-b.jpg"
      },
       {
        value: "v/vi/vicente-huidobro-117018.html",
        label: "Vicente Huidobro (1893-1948)",
        description: "poeta chileno",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Vicente_huidobro.jpg/40px-Vicente_huidobro.jpg"
      },
       {
        value: "i/io/iosif-stalin-855.html",
        label: "Iósif Stalin (1878-1953)",
        description: "Secretario General del Partido Comunista de la Unión Soviética",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Stalin_office.jpg/40px-Stalin_office.jpg"
      },
       {
        value: "a/ar/arthur-moeller-van-den-bruck-77466.html",
        label: "Arthur Moeller van den Bruck (1876-1925)",
        description: "historiador alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/ArthurMoellervandenBruck.jpg/40px-ArthurMoellervandenBruck.jpg"
      },
       {
        value: "e/et/ethel-smyth-236599.html",
        label: "Ethel Smyth (1858-1944)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Ethel_Smyth.jpg/40px-Ethel_Smyth.jpg"
      },
       {
        value: "a/ad/adolf-stoecker-63479.html",
        label: "Adolf Stoecker (1835-1909)",
        description: "político alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Adolf_Stoecker.jpg/40px-Adolf_Stoecker.jpg"
      },
       {
        value: "t/th/theodore-aubanel-257956.html",
        label: "Théodore Aubanel (1829-1886)",
        description: "escritor francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Teodor_Aubanel.jpg/40px-Teodor_Aubanel.jpg"
      },
       {
        value: "i/is/isadora-duncan-483512.html",
        label: "Isadora Duncan (1877-1927)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Isadora_Duncan_portrait_cropped.jpg/40px-Isadora_Duncan_portrait_cropped.jpg"
      },
       {
        value: "r/ra/rafael-sabatini-345104.html",
        label: "Rafael Sabatini (1875-1950)",
        description: "escritor italiano",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Portrait_of_Rafael_Sabatini.jpg/40px-Portrait_of_Rafael_Sabatini.jpg"
      },
       {
        value: "f/fr/friedrich-nietzsche-9358.html",
        label: "Friedrich Nietzsche (1844-1900)",
        description: "filósofo alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Nietzsche187a.jpg/40px-Nietzsche187a.jpg"
      },
       {
        value: "m/mi/mihaly-vorosmarty-332484.html",
        label: "Mihály Vörösmarty (1800-1855)",
        description: "escritor húngaro",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Barabas-vorosmarty.jpg/40px-Barabas-vorosmarty.jpg"
      },
       {
        value: "o/ol/olga-rozanova-270460.html",
        label: "Olga Rozanova (1886-1918)",
        description: "artista rusa",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Rozanova.jpg/40px-Rozanova.jpg"
      },
       {
        value: "j/jo/joseph-arthur-de-gobineau-264918.html",
        label: "Joseph Arthur de Gobineau (1816-1882)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Arthur_de_Gobineau.jpg/40px-Arthur_de_Gobineau.jpg"
      },
       {
        value: "j/je/jean-schlumberger-322520.html",
        label: "Jean Schlumberger (1877-1968)",
        description: "escritor francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Jean_Schlumberger%2C_by_Theo_van_Rysselberghe.jpg/40px-Jean_Schlumberger%2C_by_Theo_van_Rysselberghe.jpg"
      },
       {
        value: "a/ad/adolf-wolfli-364638.html",
        label: "Adolf Wölfli (1864-1930)",
        description: "pintor suizo",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Adolf_Woelfli.jpg/40px-Adolf_Woelfli.jpg"
      },
       {
        value: "a/ad/adolf-bernhard-marx-360945.html",
        label: "Adolf Bernhard Marx (1795-1866)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Adolf_Bernhard_Marx.jpg/40px-Adolf_Bernhard_Marx.jpg"
      },
       {
        value: "w/wi/wilhelm-heinrich-wackenroder-60576.html",
        label: "Wilhelm Heinrich Wackenroder (1773-1798)",
        description: "escritor, autor, jurista alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Wackenroder_1844.jpg/40px-Wackenroder_1844.jpg"
      },
       {
        value: "t/th/thomasine-christine-gyllembourg-ehrensvard-447836.html",
        label: "Thomasine Christine Gyllembourg-Ehrensvärd (1773-1856)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Thomasine_Christine_Gyllembourg.jpg/40px-Thomasine_Christine_Gyllembourg.jpg"
      },
       {
        value: "d/do/dora-marsden-460349.html",
        label: "Dora Marsden (1882-1960)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Dora_Marsden.jpg/40px-Dora_Marsden.jpg"
      },
       {
        value: "c/co/cosima-wagner-75789.html",
        label: "Cósima Wagner (1837-1930)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Cosimawagner1877london.jpg/40px-Cosimawagner1877london.jpg"
      },
       {
        value: "v/ve/vera-zasulich-234980.html",
        label: "Vera Zasulich (1849-1919)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Zasulich-vera.jpg/40px-Zasulich-vera.jpg"
      },
       {
        value: "t/to/tomas-de-iriarte-135326.html",
        label: "Tomás de Iriarte (1750-1791)",
        description: "escritor español",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Tomas_de_Iriarte_Joaquin_Inza.jpg/40px-Tomas_de_Iriarte_Joaquin_Inza.jpg"
      },
       {
        value: "e/ed/eduardo-laboulaye-274429.html",
        label: "Eduardo Laboulaye (1811-1883)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/%C3%89douard_Laboulaye_%28photo%29.jpg/40px-%C3%89douard_Laboulaye_%28photo%29.jpg"
      },
       {
        value: "i/is/isabelle-de-charriere-123386.html",
        label: "Isabelle de Charrière (1740-1805)",
        description: "compositora neerlandesa",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Isabelle_de_Charri%C3%A8re_-_Quentin_de_La_Tour.jpg/40px-Isabelle_de_Charri%C3%A8re_-_Quentin_de_La_Tour.jpg"
      },
       {
        value: "s/si/simon-vestdijk-437782.html",
        label: "Simon Vestdijk (1898-1971)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Vestdijk1940.jpg/40px-Vestdijk1940.jpg"
      },
       {
        value: "h/he/heinrich-christian-boie-215931.html",
        label: "Heinrich Christian Boie (1744-1806)",
        description: "escritor alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Heinrich_Christian_Boie.jpg/40px-Heinrich_Christian_Boie.jpg"
      },
       {
        value: "m/ma/marie-von-ebner-eschenbach-93525.html",
        label: "Marie von Ebner-Eschenbach (1830-1916)",
        description: "escritora austríaca",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Ebner-Eschenbach.jpg/40px-Ebner-Eschenbach.jpg"
      },
       {
        value: "k/kh/khachatur-abovian-313461.html",
        label: "Khachatur Abovian (1809-1848)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Abovianportrait.jpg/40px-Abovianportrait.jpg"
      },
       {
        value: "m/ma/maximilian-zu-wied-neuwied-61282.html",
        label: "Maximilian zu Wied-Neuwied (1782-1867)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Maximilian_zu_Wied-Neuwied.jpg/40px-Maximilian_zu_Wied-Neuwied.jpg"
      },
       {
        value: "f/fr/francis-marrash-4899.html",
        label: "Francis Marrash (1836-1873)",
        description: "escritor y poeta sirio del renacimiento árabe",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Francis_Marrash.jpg/40px-Francis_Marrash.jpg"
      },
       {
        value: "a/al/albert-ehrenstein-214947.html",
        label: "Albert Ehrenstein (1886-1950)",
        description: "escritor alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Albert_Ehrenstein.jpg/40px-Albert_Ehrenstein.jpg"
      },
       {
        value: "y/ye/yevgeni-baratynski-364252.html",
        label: "Yevgeni Baratynski (1800-1844)",
        description: "poeta ruso",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/E_Baranynsky.jpg/40px-E_Baranynsky.jpg"
      },
       {
        value: "r/ro/robert-schumann-7351.html",
        label: "Robert Schumann (1810-1856)",
        description: "compositor alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Robert_Schumann_1839.jpg/40px-Robert_Schumann_1839.jpg"
      },
       {
        value: "p/pa/paul-ree-62596.html",
        label: "Paul Rée (1849-1901)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Nietzsche_paul-ree_lou-von-salome188.jpg/40px-Nietzsche_paul-ree_lou-von-salome188.jpg"
      },
       {
        value: "f/fr/francisco-i-madero-216766.html",
        label: "Francisco I. Madero (1873-1913)",
        description: "empresario y político mexicano",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Francisco_I_Madero.jpg/40px-Francisco_I_Madero.jpg"
      },
       {
        value: "f/fr/friedrich-maximilian-klinger-213549.html",
        label: "Friedrich Maximilian Klinger (1752-1831)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Friedrich_Maximilian_von_Klinger.jpg/40px-Friedrich_Maximilian_von_Klinger.jpg"
      },
       {
        value: "g/ge/georges-louis-leclerc-229264.html",
        label: "Georges Louis Leclerc (1707-1788)",
        description: "Cabro",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Buffon_1707-1788.jpg/40px-Buffon_1707-1788.jpg"
      },
       {
        value: "l/lo/louis-xavier-de-ricard-132082.html",
        label: "Louis-Xavier de Ricard (1843-1911)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Louis_Xavier_de_Ricard-_027616-D_006605.jpg/40px-Louis_Xavier_de_Ricard-_027616-D_006605.jpg"
      },
       {
        value: "k/kl/klas-pontus-arnoldson-192618.html",
        label: "Klas Pontus Arnoldson (1844-1916)",
        description: "político sueco",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/KParnoldson.jpg/40px-KParnoldson.jpg"
      },
       {
        value: "l/lo/louisa-may-alcott-185696.html",
        label: "Louisa May Alcott (1832-1888)",
        description: "escritora estadounidense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Louisa_May_Alcott_headshot.jpg/40px-Louisa_May_Alcott_headshot.jpg"
      },
       {
        value: "p/pi/pierre-loti-311854.html",
        label: "Pierre Loti (1850-1923)",
        description: "escritor francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Pierre_Loti_en_acad%C3%A9micien.jpg/40px-Pierre_Loti_en_acad%C3%A9micien.jpg"
      },
       {
        value: "c/co/constance-lloyd-445095.html",
        label: "Constance Lloyd (1859-1898)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Constancelloyd.jpg/40px-Constancelloyd.jpg"
      },
       {
        value: "j/jo/josephine-butler-225863.html",
        label: "Josephine Butler (1828-1906)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Josephine_Butler_-_portrait.jpg/40px-Josephine_Butler_-_portrait.jpg"
      },
       {
        value: "t/th/theodore-roosevelt-33866.html",
        label: "Theodore Roosevelt (1858-1919)",
        description: "político estadounidense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Theodore_Roosevelt_1901-08.jpg/40px-Theodore_Roosevelt_1901-08.jpg"
      },
       {
        value: "a/ad/adela-zamudio-353784.html",
        label: "Adela Zamudio (1854-1928)",
        description: "Escritora y feminista boliviana",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Adela_Zamudio.jpg/40px-Adela_Zamudio.jpg"
      },
       {
        value: "g/ge/geza-csath-469956.html",
        label: "Géza Csáth (1887-1919)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Bust_of_geza_csath_in_subotica.jpg/40px-Bust_of_geza_csath_in_subotica.jpg"
      },
       {
        value: "v/vi/vita-sackville-west-235505.html",
        label: "Vita Sackville-West (1892-1962)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Hon_Mrs_Nicholson_cropped.jpg/40px-Hon_Mrs_Nicholson_cropped.jpg"
      },
       {
        value: "m/mi/milan-hodza-349893.html",
        label: "Milan Hodža (1878-1944)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Hodza.jpg/40px-Hodza.jpg"
      },
       {
        value: "k/ka/karl-adolph-gjellerup-131487.html",
        label: "Karl Adolph Gjellerup (1857-1919)",
        description: "escritor danés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Karl_Gjellerup.jpg/40px-Karl_Gjellerup.jpg"
      },
       {
        value: "e/et/etienne-de-jouy-204889.html",
        label: "Étienne de Jouy (1764-1846)",
        description: "escritor francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Etienne_de_Jouy.jpg/40px-Etienne_de_Jouy.jpg"
      },
       {
        value: "z/zo/zora-neale-hurston-220480.html",
        label: "Zora Neale Hurston (1891-1960)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Hurston-Zora-Neale-LOC.jpg/40px-Hurston-Zora-Neale-LOC.jpg"
      },
       {
        value: "j/jo/john-philip-sousa-295935.html",
        label: "John Philip Sousa (1854-1932)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/JohnPhilipSousa-Chickering.LOC.jpg/40px-JohnPhilipSousa-Chickering.LOC.jpg"
      },
       {
        value: "j/ja/jan-kollar-220550.html",
        label: "Ján Kollár (1793-1852)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Jan_Vil%C3%ADmek_-_Jan_Koll%C3%A1r.jpg/40px-Jan_Vil%C3%ADmek_-_Jan_Koll%C3%A1r.jpg"
      },
       {
        value: "i/io/ion-creanga-204810.html",
        label: "Ion Creangă (1837-1889)",
        description: "escritor rumano",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Ion_Creanga-Foto03.jpg/40px-Ion_Creanga-Foto03.jpg"
      },
       {
        value: "h/ha/hanns-heinz-ewers-67169.html",
        label: "Hanns Heinz Ewers (1871-1943)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Hanns_Heinz_Ewers_by_D%C3%BChrkoop.jpg/40px-Hanns_Heinz_Ewers_by_D%C3%BChrkoop.jpg"
      },
       {
        value: "j/jo/john-stevens-cabot-abbott-28910.html",
        label: "John Stevens Cabot Abbott (1805-1877)",
        description: "escritor e historiador estadounidense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/John_Stevens_Cabot_Abbott.jpg/40px-John_Stevens_Cabot_Abbott.jpg"
      },
       {
        value: "f/fi/filippo-tommaso-marinetti-216582.html",
        label: "Filippo Tommaso Marinetti (1876-1944)",
        description: "poeta y editor",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/FilippoTommasoMarinetti.jpg/40px-FilippoTommasoMarinetti.jpg"
      },
       {
        value: "t/th/theodor-herzl-44003.html",
        label: "Theodor Herzl (1860-1904)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Theodor_Herzl_retouched.jpg/40px-Theodor_Herzl_retouched.jpg"
      },
       {
        value: "v/vi/visarion-belinski-192885.html",
        label: "Visarión Belinski (1811-1848)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Vissarion_Belinsky_by_K_Gorbunov_1843.jpg/40px-Vissarion_Belinsky_by_K_Gorbunov_1843.jpg"
      },
       {
        value: "a/an/anna-jameson-274627.html",
        label: "Anna Jameson (1794-1860)",
        description: "escritora irlandesa",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Anna_Brownell_Jameson.jpg/40px-Anna_Brownell_Jameson.jpg"
      },
       {
        value: "a/am/ambrosius-stub-459770.html",
        label: "Ambrosius Stub (1705-1758)",
        description: "poeta danés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Ambrosius-egen.jpg/40px-Ambrosius-egen.jpg"
      },
       {
        value: "o/ot/otto-kuusinen-313618.html",
        label: "Otto Kuusinen (1881-1964)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Ottokuusinen.jpg/40px-Ottokuusinen.jpg"
      },
       {
        value: "m/mo/mori-ogai-356960.html",
        label: "Mori Ōgai (1862-1922)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Ogai_Mori.jpg/40px-Ogai_Mori.jpg"
      },
       {
        value: "s/sa/santiago-rusinol-366930.html",
        label: "Santiago Rusiñol (1861-1931)",
        description: "pintor, poeta y dramaturgo español",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Ramon_Casas_Portrait_of_Santiago_Rusinol.jpg/40px-Ramon_Casas_Portrait_of_Santiago_Rusinol.jpg"
      },
       {
        value: "c/ca/catharine-beecher-462169.html",
        label: "Catharine Beecher (1800-1878)",
        description: "educadora estadounidense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Beecherc.jpg/40px-Beecherc.jpg"
      },
       {
        value: "a/an/anne-robert-jacques-turgot-baron-de-laune-221303.html",
        label: "Anne Robert Jacques Turgot, barón de Laune (1727-1781)",
        description: "economista francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Anne_Robert_Jacques_Turgot.jpg/40px-Anne_Robert_Jacques_Turgot.jpg"
      },
       {
        value: "e/ez/ezra-pound-163366.html",
        label: "Ezra Pound (1885-1972)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Ezra_Pound.jpg/40px-Ezra_Pound.jpg"
      },
       {
        value: "s/sa/salavat-yulayev-81445.html",
        label: "Salavat Yuláyev (1754-1800)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/%D0%9F%D0%B0%D0%BC%D1%8F%D1%82%D0%BD%D0%B8%D0%BA_%D0%A1%D0%B0%D0%BB%D0%B0%D0%B2%D0%B0%D1%82%D1%83_%D0%AE%D0%BB%D0%B0%D0%B5%D0%B2%D1%83%2C_%D0%B2%D0%B8%D0%B4_%D1%81%D0%BD%D0%B8%D0%B7%D1%83_%D1%81%D0%BF%D1%80%D0%B0%D0%B2%D0%B0.jpg/40px-%D0%9F%D0%B0%D0%BC%D1%8F%D1%82%D0%BD%D0%B8%D0%BA_%D0%A1%D0%B0%D0%BB%D0%B0%D0%B2%D0%B0%D1%82%D1%83_%D0%AE%D0%BB%D0%B0%D0%B5%D0%B2%D1%83%2C_%D0%B2%D0%B8%D0%B4_%D1%81%D0%BD%D0%B8%D0%B7%D1%83_%D1%81%D0%BF%D1%80%D0%B0%D0%B2%D0%B0.jpg"
      },
       {
        value: "m/ma/mae-west-202878.html",
        label: "Mae West (1893-1980)",
        description: "actriz estadounidense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Mae_West_LAT.jpg/40px-Mae_West_LAT.jpg"
      },
       {
        value: "j/jo/johann-peter-hebel-62512.html",
        label: "Johann Peter Hebel (1760-1826)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/J._P._Hebel.jpg/40px-J._P._Hebel.jpg"
      },
       {
        value: "s/sw/swami-vivekananda-47478.html",
        label: "Swami Vivekananda (1863-1902)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Swami_Vivekananda-1893-09-signed.jpg/40px-Swami_Vivekananda-1893-09-signed.jpg"
      },
       {
        value: "a/al/alfred-schuler-92333.html",
        label: "Alfred Schuler (1865-1923)",
        description: "poeta alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Alfred_Schuler.jpg/40px-Alfred_Schuler.jpg"
      },
       {
        value: "r/ro/rodion-malinovski-204338.html",
        label: "Rodión Malinovski (1898-1967)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/1973_CPA_4285.jpg/40px-1973_CPA_4285.jpg"
      },
       {
        value: "j/ja/james-hopwood-jeans-315545.html",
        label: "James Hopwood Jeans (1877-1946)",
        description: "Astrofísico y matemático británico",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/James_Hopwood_Jeans.jpg/40px-James_Hopwood_Jeans.jpg"
      },
       {
        value: "j/jo/joseph-roth-78509.html",
        label: "Joseph Roth (1894-1939)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Joseph_Roth_%281926%29.jpg/40px-Joseph_Roth_%281926%29.jpg"
      },
       {
        value: "m/ma/mao-dun-358494.html",
        label: "Mao Dun (1896-1981)",
        description: "escritor chino",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Mao_Dun.jpg/40px-Mao_Dun.jpg"
      },
       {
        value: "h/h-/h-l-mencken-439204.html",
        label: "H. L. Mencken (1880-1956)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/H_l_mencken.jpg/40px-H_l_mencken.jpg"
      },
       {
        value: "l/la/lajos-zilahy-267769.html",
        label: "Lajos Zilahy (1891-1974)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Lajos_Zilahy_-_Hungarian_Writer_-_The_ten-year-old_Hungarian_Radio_Album_1935.jpg/40px-Lajos_Zilahy_-_Hungarian_Writer_-_The_ten-year-old_Hungarian_Radio_Album_1935.jpg"
      },
       {
        value: "n/ni/nikolai-alexandrovich-morozov-211551.html",
        label: "Nikolái Alexándrovich Morózov (1854-1946)",
        description: "Revolucionario y científico ruso",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Morozov1910.jpg/40px-Morozov1910.jpg"
      },
       {
        value: "m/ma/marcel-jacques-boulenger-33758.html",
        label: "Marcel Jacques Boulenger (1873-1932)",
        description: "esgrimista francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Marcel_Boulenger_by_Vallotton.jpg/40px-Marcel_Boulenger_by_Vallotton.jpg"
      },
       {
        value: "m/mo/mohammad-ali-foroughi-181451.html",
        label: "Mohammad Ali Foroughi (1877-1942)",
        description: "político iraní",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Mohammad_Ali_Foroughi.jpg/40px-Mohammad_Ali_Foroughi.jpg"
      },
       {
        value: "g/gi/giosue-carducci-43440.html",
        label: "Giosuè Carducci (1835-1907)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Giosu%C3%A8_Carducci3.jpg/40px-Giosu%C3%A8_Carducci3.jpg"
      },
       {
        value: "j/jo/joaquim-machado-de-assis-311145.html",
        label: "Joaquim Machado de Assis (1839-1908)",
        description: "escritor brasileño",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/MarcFerrez_MachadodeAssis.jpg/40px-MarcFerrez_MachadodeAssis.jpg"
      },
       {
        value: "j/ja/jaroslav-durych-164957.html",
        label: "Jaroslav Durych (1886-1962)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Jaroslav_Durych_1930.jpg/40px-Jaroslav_Durych_1930.jpg"
      },
       {
        value: "f/fe/felix-maria-samaniego-379642.html",
        label: "Félix María Samaniego (1745-1801)",
        description: "poeta español",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Samaniego.jpg/40px-Samaniego.jpg"
      },
       {
        value: "k/kn/knut-hamsun-40826.html",
        label: "Knut Hamsun (1859-1952)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Knut_hamsun_1890.jpg/40px-Knut_hamsun_1890.jpg"
      },
       {
        value: "h/he/heinrich-xlv-hereditary-prince-reuss-younger-line-70814.html",
        label: "Heinrich XLV, Hereditary Prince Reuss Younger Line (1895-1953)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Heinrich_XLV_RjL.jpg/40px-Heinrich_XLV_RjL.jpg"
      },
       {
        value: "a/al/ali-akbar-dehjoda-470931.html",
        label: "Alí Akbar Dehjodá (1879-1959)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Ali-Akbar-Dehkhoda.jpg/40px-Ali-Akbar-Dehkhoda.jpg"
      },
       {
        value: "g/ge/gertrudis-gomez-de-avellaneda-283353.html",
        label: "Gertrudis Gómez de Avellaneda (1814-1873)",
        description: "escritora cubana",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Gertrudis_G%C3%B3mez_de_Avellaneda.jpg/40px-Gertrudis_G%C3%B3mez_de_Avellaneda.jpg"
      },
       {
        value: "a/ab/abdurresid-ibrahim-117114.html",
        label: "Abdurresid Ibrahim (1857-1944)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Abd%C3%BCrre%C5%9Fit-%C4%B0brahim-Efendi-1857-1944-ve-%C3%87ocuklar%C4%B1_%28cropped%29.jpg/40px-Abd%C3%BCrre%C5%9Fit-%C4%B0brahim-Efendi-1857-1944-ve-%C3%87ocuklar%C4%B1_%28cropped%29.jpg"
      },
       {
        value: "j/je/jean-baptiste-alphonse-karr-186221.html",
        label: "Jean-Baptiste Alphonse Karr (1808-1890)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Alphonse_Karr.jpg/40px-Alphonse_Karr.jpg"
      },
       {
        value: "a/al/alexandre-benois-319861.html",
        label: "Alexandre Benois (1870-1960)",
        description: "artista ruso",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Benua_Bakst.jpg/40px-Benua_Bakst.jpg"
      },
       {
        value: "b/be/bertolt-brecht-38757.html",
        label: "Bertolt Brecht (1898-1956)",
        description: "biografía, dramaturgo y poeta alemán, creador del llamado teatro épico",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Bundesarchiv_Bild_183-W0409-300%2C_Bertolt_Brecht.jpg/40px-Bundesarchiv_Bild_183-W0409-300%2C_Bertolt_Brecht.jpg"
      },
       {
        value: "w/wi/william-wordsworth-45546.html",
        label: "William Wordsworth (1770-1850)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Benjamin_Robert_Haydon_002.jpg/40px-Benjamin_Robert_Haydon_002.jpg"
      },
       {
        value: "m/ma/malwida-von-meysenbug-68795.html",
        label: "Malwida von Meysenbug (1816-1903)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Malwida_von_Meysenbug%2C_portrait_par_Franz_von_Lenbach.jpg/40px-Malwida_von_Meysenbug%2C_portrait_par_Franz_von_Lenbach.jpg"
      },
       {
        value: "m/ma/marthe-bibesco-297770.html",
        label: "Marthe Bibesco (1886-1973)",
        description: "escritora rumana",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Marthe_Bibesco_Boldini.jpg/40px-Marthe_Bibesco_Boldini.jpg"
      },
       {
        value: "a/ag/agnes-miegel-67013.html",
        label: "Agnes Miegel (1879-1964)",
        description: "periodista de Alemania",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/DBP_1979_1001_Agnes_Miegel.jpg/40px-DBP_1979_1001_Agnes_Miegel.jpg"
      },
       {
        value: "f/fr/francisco-gregorio-billini-436216.html",
        label: "Francisco Gregorio Billini (1844-1898)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Francisco_Billini.jpg/40px-Francisco_Billini.jpg"
      },
       {
        value: "s/sw/swami-sivananda-458855.html",
        label: "Swami Sivananda (1887-1963)",
        description: "filósofo indio",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Krishnananda_and_Sivananda_1945.jpg/40px-Krishnananda_and_Sivananda_1945.jpg"
      },
       {
        value: "j/je/jean-gaston-darboux-164784.html",
        label: "Jean Gaston Darboux (1842-1917)",
        description: "matemático francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Darboux.jpg/40px-Darboux.jpg"
      },
       {
        value: "s/sa/samuel-johnson-183266.html",
        label: "Samuel Johnson (1709-1784)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Samuel_Johnson_by_Joshua_Reynolds.jpg/40px-Samuel_Johnson_by_Joshua_Reynolds.jpg"
      },
       {
        value: "g/ge/george-gissing-369790.html",
        label: "George Gissing (1857-1903)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/George_Gissing.jpg/40px-George_Gissing.jpg"
      },
       {
        value: "j/jo/joseph-christian-freiherr-von-zedlitz-429184.html",
        label: "Joseph Christian Freiherr von Zedlitz (1790-1862)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Joseph_Christian_Zedlitz.jpg/40px-Joseph_Christian_Zedlitz.jpg"
      },
       {
        value: "j/jo/jose-marti-103285.html",
        label: "José Martí (1853-1895)",
        description: "escritor, político, poeta, ensayista e ideólogo cubano (1853-1895)",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/MartiJohnManuel_K_TRestauration.jpg/40px-MartiJohnManuel_K_TRestauration.jpg"
      },
       {
        value: "j/je/jean-giraudoux-309974.html",
        label: "Jean Giraudoux (1882-1944)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Jean_Giraudoux_1927.jpg/40px-Jean_Giraudoux_1927.jpg"
      },
       {
        value: "f/fr/francisco-martinez-de-la-rosa-27357.html",
        label: "Francisco Martínez de la Rosa (1787-1862)",
        description: "poeta, dramaturgo, político y diplomático español",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/MartinezRosa-1-.jpg/40px-MartinezRosa-1-.jpg"
      },
       {
        value: "s/so/sofia-behrs-271934.html",
        label: "Sofía Behrs (1844-1919)",
        description: "escritora rusa",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/S_A_Tolstaya.jpg/40px-S_A_Tolstaya.jpg"
      },
       {
        value: "j/jo/johan-vilhelm-snellman-127688.html",
        label: "Johan Vilhelm Snellman (1806-1881)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/RAUHALA%281921%29_p029_J.W._Snellman.jpg/40px-RAUHALA%281921%29_p029_J.W._Snellman.jpg"
      },
       {
        value: "j/jo/johann-hermann-241422.html",
        label: "Johann Hermann (1738-1800)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Jean_Hermann_1738-1800.jpg/40px-Jean_Hermann_1738-1800.jpg"
      },
       {
        value: "p/pi/pierre-augustin-de-beaumarchais-70326.html",
        label: "Pierre-Augustin de Beaumarchais (1732-1799)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/D%27apr%C3%A8s_Jean-Marc_Nattier%2C_Portrait_de_Pierre-Augustin_Caron_de_Beaumarchais_%28Biblioth%C3%A8que-mus%C3%A9e_de_la_Com%C3%A9die-Fran%C3%A7aise%29_-001.jpg/40px-D%27apr%C3%A8s_Jean-Marc_Nattier%2C_Portrait_de_Pierre-Augustin_Caron_de_Beaumarchais_%28Biblioth%C3%A8que-mus%C3%A9e_de_la_Com%C3%A9die-Fran%C3%A7aise%29_-001.jpg"
      },
       {
        value: "g/gu/gustave-charpentier-311663.html",
        label: "Gustave Charpentier (1860-1956)",
        description: "compositor francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Gustave_Charpentier_LOC.jpg/40px-Gustave_Charpentier_LOC.jpg"
      },
       {
        value: "a/ak/akiko-yosano-464104.html",
        label: "Akiko Yosano (1878-1942)",
        description: "escritora japonesa",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Akiko_Yosano_posing.jpg/40px-Akiko_Yosano_posing.jpg"
      },
       {
        value: "h/ha/hans-aanrud-366296.html",
        label: "Hans Aanrud (1863-1953)",
        description: "escritor noruego",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Portrett_av_Hans_Aanrud_crop.jpg/40px-Portrett_av_Hans_Aanrud_crop.jpg"
      },
       {
        value: "p/pe/peretz-hirshbein-444009.html",
        label: "Peretz Hirshbein (1880-1948)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Peretz_Hirschbein.jpg/40px-Peretz_Hirschbein.jpg"
      },
       {
        value: "e/eu/eugen-rosenstock-huessy-66732.html",
        label: "Eugen Rosenstock-Huessy (1888-1973)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Eugen_Rosenstock-Huessy.jpg/40px-Eugen_Rosenstock-Huessy.jpg"
      },
       {
        value: "d/da/dan-andersson-438109.html",
        label: "Dan Andersson (1888-1920)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Danandersson.jpg/40px-Danandersson.jpg"
      },
       {
        value: "y/yu/yuri-tinianov-368455.html",
        label: "Yuri Tiniánov (1894-1943)",
        description: "escritor ruso",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Tiynyanov_yuriyi.jpg/40px-Tiynyanov_yuriyi.jpg"
      },
       {
        value: "e/el/elise-reimarus-107981.html",
        label: "Elise Reimarus (1735-1805)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Elise_Reimarus.jpg/40px-Elise_Reimarus.jpg"
      },
       {
        value: "a/au/august-bebel-76520.html",
        label: "August Bebel (1840-1913)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/August_Bebel_2.jpg/40px-August_Bebel_2.jpg"
      },
       {
        value: "h/he/henri-murger-31258.html",
        label: "Henri Murger (1822-1861)",
        description: "escritor francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Henry_Murger_in_1854.jpg/40px-Henry_Murger_in_1854.jpg"
      },
       {
        value: "l/lu/ludwig-anzengruber-93718.html",
        label: "Ludwig Anzengruber (1839-1889)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Ludwig_Anzengruber.jpg/40px-Ludwig_Anzengruber.jpg"
      },
       {
        value: "d/de/dezso-kosztolanyi-27610.html",
        label: "Dezső Kosztolányi (1885-1936)",
        description: "periodista, escritor, poeta y traductor noble húngaro",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Kosztol%C3%A1nyi_Dezs%C5%91_szines.jpg/40px-Kosztol%C3%A1nyi_Dezs%C5%91_szines.jpg"
      },
       {
        value: "j/jo/joseph-pulitzer-173417.html",
        label: "Joseph Pulitzer (1847-1911)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/JosephPulitzerPinceNeznpsgov.jpg/40px-JosephPulitzerPinceNeznpsgov.jpg"
      },
       {
        value: "j/jo/johann-heinrich-merck-70318.html",
        label: "Johann Heinrich Merck (1741-1791)",
        description: "escritor alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Johann_Heinrich_Merck2.jpg/40px-Johann_Heinrich_Merck2.jpg"
      },
       {
        value: "j/jo/josef-vachal-368293.html",
        label: "Josef Váchal (1884-1969)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Mistr_v_uniforme.jpg/40px-Mistr_v_uniforme.jpg"
      },
       {
        value: "o/ol/oliver-goldsmith-236236.html",
        label: "Oliver Goldsmith (1728-1774)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Oliver_Goldsmith_sephia.jpg/40px-Oliver_Goldsmith_sephia.jpg"
      },
       {
        value: "m/mo/mor-jokai-379621.html",
        label: "Mór Jókai (1825-1904)",
        description: "escritor húngaro",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/M%C3%B3r_J%C3%B3kai_-_Project_Gutenberg_etext_17597.jpg/40px-M%C3%B3r_J%C3%B3kai_-_Project_Gutenberg_etext_17597.jpg"
      },
       {
        value: "i/in/inayat-khan-120411.html",
        label: "Inayat Khan (1882-1927)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Hazrat_Inayat_Khan_002.jpg/40px-Hazrat_Inayat_Khan_002.jpg"
      },
       {
        value: "f/fr/franz-schreker-78528.html",
        label: "Franz Schreker (1878-1934)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Schreker_1912.jpg/40px-Schreker_1912.jpg"
      },
       {
        value: "n/ne/nesta-webster-449869.html",
        label: "Nesta Webster (1876-1960)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Nesta_Webster.jpg/40px-Nesta_Webster.jpg"
      },
       {
        value: "e/el/elizabeth-barrett-browning-228494.html",
        label: "Elizabeth Barrett Browning (1806-1861)",
        description: "poetisa inglesa (1806-1861)",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/ElizabethBarrettBrowning.jpg/40px-ElizabethBarrettBrowning.jpg"
      },
       {
        value: "t/to/tobias-smollett-356283.html",
        label: "Tobias Smollett (1721-1771)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Tobias_Smollett_c_1770.jpg/40px-Tobias_Smollett_c_1770.jpg"
      },
       {
        value: "w/wi/william-watson-462269.html",
        label: "William Watson (1715-1787)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/William_Watson.jpg/40px-William_Watson.jpg"
      },
       {
        value: "y/ya/yakub-kolas-483709.html",
        label: "Yakub Kolas (1882-1956)",
        description: "escritor bielorruso",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Yakub_Kolas.jpg/40px-Yakub_Kolas.jpg"
      },
       {
        value: "f/fr/franc-miklosic-93401.html",
        label: "Franc Miklošič (1813-1891)",
        description: "filólogo esloveno",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Rosa_Jenik_-_Franc_Miklo%C5%A1i%C4%8D_%28cropped%29.jpg/40px-Rosa_Jenik_-_Franc_Miklo%C5%A1i%C4%8D_%28cropped%29.jpg"
      },
       {
        value: "k/ki/kim-myeong-sun-494507.html",
        label: "Kim Myeong-sun (1896-1951)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Kim_Myung-sun.jpg/40px-Kim_Myung-sun.jpg"
      },
       {
        value: "m/my/myjailo-hrushevsky-371322.html",
        label: "Myjailo Hrushevsky (1866-1934)",
        description: "Político e historiador ucraniano",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Hrushevskyi_Mykhailo_XX.jpg/40px-Hrushevskyi_Mykhailo_XX.jpg"
      },
       {
        value: "w/wi/william-thomas-stead-288301.html",
        label: "William Thomas Stead (1849-1912)",
        description: "periodista británico",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/William_Thomas_Stead.jpg/40px-William_Thomas_Stead.jpg"
      },
       {
        value: "e/et/etienne-bonnot-de-condillac-272119.html",
        label: "Étienne Bonnot de Condillac (1714-1780)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Etienne_Bonnot_de_Condillac.jpg/40px-Etienne_Bonnot_de_Condillac.jpg"
      },
       {
        value: "m/ma/max-stirner-76725.html",
        label: "Max Stirner (1806-1856)",
        description: "filósofo alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Max_Stirner-k.jpg/40px-Max_Stirner-k.jpg"
      },
       {
        value: "i/iv/ivan-bunin-46602.html",
        label: "Iván Bunin (1870-1953)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Ivan_Bunin_%28sepia%29.jpg/40px-Ivan_Bunin_%28sepia%29.jpg"
      },
       {
        value: "j/ju/juan-antonio-perez-bonalde-163285.html",
        label: "Juan Antonio Pérez Bonalde (1846-1892)",
        description: "escritor venezolano",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Perez_Bonalde%2C_Juan_Antonio.jpg/40px-Perez_Bonalde%2C_Juan_Antonio.jpg"
      },
       {
        value: "t/to/toto-2291.html",
        label: "Totò (1898-1967)",
        description: "actor, letrista y poeta italiano",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Toto%27025.jpg/40px-Toto%27025.jpg"
      },
       {
        value: "g/ge/georg-ebers-62765.html",
        label: "Georg Ebers (1837-1898)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Georg_Ebers.jpg/40px-Georg_Ebers.jpg"
      },
       {
        value: "a/ab/abdullah-bin-abdul-kadir-317767.html",
        label: "Abdullah bin Abdul Kadir (1796-1854)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/AbdullahbinAbdulKadir-HikayatAbdullah-1849.jpg/40px-AbdullahbinAbdulKadir-HikayatAbdullah-1849.jpg"
      },
       {
        value: "y/ye/ye-shengtao-282412.html",
        label: "Ye Shengtao (1894-1988)",
        description: "escritor chino",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Ye_Shengtao_Portrait.jpg/40px-Ye_Shengtao_Portrait.jpg"
      },
       {
        value: "a/al/aleksis-kivi-216904.html",
        label: "Aleksis Kivi (1834-1872)",
        description: "escritor finlandés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Aleksis_Kivi.jpg/40px-Aleksis_Kivi.jpg"
      },
       {
        value: "l/lu/ludwig-tieck-57239.html",
        label: "Ludwig Tieck (1773-1853)",
        description: "escritor e hispanista",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Ludwig_Tieck.jpg/40px-Ludwig_Tieck.jpg"
      },
       {
        value: "j/je/jeppe-aakjr-211039.html",
        label: "Jeppe Aakjær (1866-1930)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Jeppe_Aakjaer.jpg/40px-Jeppe_Aakjaer.jpg"
      },
       {
        value: "a/ad/adolf-bastian-58793.html",
        label: "Adolf Bastian (1826-1905)",
        description: "etnógrafo y antropólogo alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Adolf_Bastian2.jpg/40px-Adolf_Bastian2.jpg"
      },
       {
        value: "l/lo/lorenz-diefenbach-68421.html",
        label: "Lorenz Diefenbach (1806-1883)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Lorenz_Diefenbach_01.jpg/40px-Lorenz_Diefenbach_01.jpg"
      },
       {
        value: "s/sy/sydney-lady-morgan-459275.html",
        label: "Sydney, Lady Morgan (1776-1859)",
        description: "novelista irlandesa",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/LadyMorgan.jpg/40px-LadyMorgan.jpg"
      },
       {
        value: "f/fi/fiodor-sologub-380728.html",
        label: "Fiódor Sologub (1863-1927)",
        description: "escritor ruso",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Feodor_Sologub.jpg/40px-Feodor_Sologub.jpg"
      },
       {
        value: "f/fr/francois-joachim-de-pierre-de-bernis-374572.html",
        label: "François-Joachim de Pierre de Bernis (1715-1794)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Fran%C3%A7ois-Joachim_de_Pierre_de_Bernis.jpg/40px-Fran%C3%A7ois-Joachim_de_Pierre_de_Bernis.jpg"
      },
       {
        value: "s/si/sigurd-hoel-138650.html",
        label: "Sigurd Hoel (1890-1960)",
        description: "escritor noruego",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Portrett_av_Sigurd_Hoel%2C_1950.jpg/40px-Portrett_av_Sigurd_Hoel%2C_1950.jpg"
      },
       {
        value: "r/ri/ricardo-jaimes-freyre-352570.html",
        label: "Ricardo Jaimes Freyre (1868-1933)",
        description: "poeta boliviano",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Ricardo_Jaimes_Freyre_1923.jpg/40px-Ricardo_Jaimes_Freyre_1923.jpg"
      },
       {
        value: "l/la/lady-diana-cooper-128576.html",
        label: "Lady Diana Cooper (1892-1986)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Lady_Diane_Manners_1900_Bain.jpg/40px-Lady_Diane_Manners_1900_Bain.jpg"
      },
       {
        value: "g/gu/gunnar-gunnarsson-381086.html",
        label: "Gunnar Gunnarsson (1889-1975)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Gunnar_Gunnarsson.jpg/40px-Gunnar_Gunnarsson.jpg"
      },
       {
        value: "e/eu/eugene-labiche-379929.html",
        label: "Eugène Labiche (1815-1888)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Eugene_Labiche_par_Desboutin.jpg/40px-Eugene_Labiche_par_Desboutin.jpg"
      },
       {
        value: "e/en/endre-ady-211392.html",
        label: "Endre Ady (1877-1919)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Endre_Ady.jpg/40px-Endre_Ady.jpg"
      },
       {
        value: "m/ma/mary-baker-eddy-235069.html",
        label: "Mary Baker Eddy (1821-1910)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Mary_Baker_Eddy.jpg/40px-Mary_Baker_Eddy.jpg"
      },
       {
        value: "f/fr/franco-alfano-312638.html",
        label: "Franco Alfano (1875-1954)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Franco_Alfano_circa_1919_Emporium.jpg/40px-Franco_Alfano_circa_1919_Emporium.jpg"
      },
       {
        value: "a/ad/adam-von-bartsch-78785.html",
        label: "Adam von Bartsch (1757-1821)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Adam_von_Bartsch_by_Adam_von_Bartsch.jpg/40px-Adam_von_Bartsch_by_Adam_von_Bartsch.jpg"
      },
       {
        value: "p/pa/paul-reuter-71014.html",
        label: "Paul Reuter (1816-1899)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Paul_Reuter_Vanity_Fair_14_December_1872.jpg/40px-Paul_Reuter_Vanity_Fair_14_December_1872.jpg"
      },
       {
        value: "v/vi/victor-cousin-434346.html",
        label: "Victor Cousin (1792-1867)",
        description: "filósofo francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Victor_Cousin_by_Gustave_Le_Gray%2C_late_1850s-crop.jpg/40px-Victor_Cousin_by_Gustave_Le_Gray%2C_late_1850s-crop.jpg"
      },
       {
        value: "f/fi/fitz-hugh-ludlow-320460.html",
        label: "Fitz Hugh Ludlow (1836-1870)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Fitz_Hugh_Ludlow.jpg/40px-Fitz_Hugh_Ludlow.jpg"
      },
       {
        value: "a/an/andrew-dickson-white-504489.html",
        label: "Andrew Dickson White (1832-1918)",
        description: "político estadounidense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Andrew_Dickson_White_1885.jpg/40px-Andrew_Dickson_White_1885.jpg"
      },
       {
        value: "g/gi/giovanni-pascoli-375998.html",
        label: "Giovanni Pascoli (1855-1912)",
        description: "poeta italiano",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Giovanni_Pascoli.jpg/40px-Giovanni_Pascoli.jpg"
      },
       {
        value: "s/sv/sven-hedin-154759.html",
        label: "Sven Hedin (1865-1952)",
        description: "Geógrafo y explorador sueco",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Sven_Hedin_01.jpg/40px-Sven_Hedin_01.jpg"
      },
       {
        value: "j/ju/justinus-kerner-77280.html",
        label: "Justinus Kerner (1786-1862)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Justinus_Kerner_Altersbild.jpg/40px-Justinus_Kerner_Altersbild.jpg"
      },
       {
        value: "a/as/aslaug-vaa-447455.html",
        label: "Aslaug Vaa (1889-1965)",
        description: "escritora noruega",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Portrett_av_Aslaug_Vaa_%28utsnitt_av_st%C3%B8rre_ark%29_%2815252253971%29_%28cropped%29.jpg/40px-Portrett_av_Aslaug_Vaa_%28utsnitt_av_st%C3%B8rre_ark%29_%2815252253971%29_%28cropped%29.jpg"
      },
       {
        value: "k/ka/kate-chopin-230476.html",
        label: "Kate Chopin (1850-1904)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/KateChopin.jpg/40px-KateChopin.jpg"
      },
       {
        value: "f/fr/friedrich-bouterwek-69547.html",
        label: "Friedrich Bouterwek (1766-1828)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/OnB3735312.jpg/40px-OnB3735312.jpg"
      },
       {
        value: "w/wo/wolfgang-franz-von-kobell-76459.html",
        label: "Wolfgang Franz von Kobell (1803-1882)",
        description: "mineralogista y escritor alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Franz_von_Kobell.jpg/40px-Franz_von_Kobell.jpg"
      },
       {
        value: "m/ma/marques-de-sade-123867.html",
        label: "Marqués de Sade (1740-1814)",
        description: "novelista y filósofo francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Marquis_de_Sade_by_Loo.jpg/40px-Marquis_de_Sade_by_Loo.jpg"
      },
       {
        value: "n/ne/nestor-majno-47900.html",
        label: "Néstor Majnó (1888-1934)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/1921._%D0%9D%D0%B5%D1%81%D1%82%D0%BE%D1%80_%D0%9C%D0%B0%D1%85%D0%BD%D0%BE_%D0%B2_%D0%BB%D0%B0%D0%B3%D0%B5%D1%80%D0%B5_%D0%B4%D0%BB%D1%8F_%D0%BF%D0%B5%D1%80%D0%B5%D0%BC%D0%B5%D1%89%D0%B5%D0%BD%D0%BD%D1%8B%D1%85_%D0%BB%D0%B8%D1%86_%D0%B2_%D0%A0%D1%83%D0%BC%D1%8B%D0%BD%D0%B8%D0%B8.jpg/40px-1921._%D0%9D%D0%B5%D1%81%D1%82%D0%BE%D1%80_%D0%9C%D0%B0%D1%85%D0%BD%D0%BE_%D0%B2_%D0%BB%D0%B0%D0%B3%D0%B5%D1%80%D0%B5_%D0%B4%D0%BB%D1%8F_%D0%BF%D0%B5%D1%80%D0%B5%D0%BC%D0%B5%D1%89%D0%B5%D0%BD%D0%BD%D1%8B%D1%85_%D0%BB%D0%B8%D1%86_%D0%B2_%D0%A0%D1%83%D0%BC%D1%8B%D0%BD%D0%B8%D0%B8.jpg"
      },
       {
        value: "d/do/dora-distria-463521.html",
        label: "Dora d'Istria (1828-1888)",
        description: "escritora rumana",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Dora_d%27Istria.jpg/40px-Dora_d%27Istria.jpg"
      },
       {
        value: "g/gi/giuseppe-tomasi-di-lampedusa-213482.html",
        label: "Giuseppe Tomasi di Lampedusa (1896-1957)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Tomasi_di_Lampedusa.jpg/40px-Tomasi_di_Lampedusa.jpg"
      },
       {
        value: "v/vi/vicente-aleixandre-134644.html",
        label: "Vicente Aleixandre (1898-1984)",
        description: "poeta español",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Vicentealeixandre.jpg/40px-Vicentealeixandre.jpg"
      },
       {
        value: "e/el/eleanor-roosevelt-83396.html",
        label: "Eleanor Roosevelt (1884-1962)",
        description: "diplomática y activista estadounidense por los derechos humanos",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Eleanor_Roosevelt_at_United_Nations_in_Paris_-_NARA_-_195965.jpg/40px-Eleanor_Roosevelt_at_United_Nations_in_Paris_-_NARA_-_195965.jpg"
      },
       {
        value: "i/iv/ivor-novello-436693.html",
        label: "Ivor Novello (1893-1951)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Ivor_Novello.jpg/40px-Ivor_Novello.jpg"
      },
       {
        value: "a/al/aleksandr-blok-164765.html",
        label: "Aleksandr Blok (1880-1921)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Blok.jpg/40px-Blok.jpg"
      },
       {
        value: "s/si/siegfried-sassoon-363729.html",
        label: "Siegfried Sassoon (1886-1967)",
        description: "escritor y poeta británico",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Siegfried_Sassoon_by_George_Charles_Beresford_%281915%29.jpg/40px-Siegfried_Sassoon_by_George_Charles_Beresford_%281915%29.jpg"
      },
       {
        value: "g/ga/gaspar-melchor-de-jovellanos-282498.html",
        label: "Gaspar Melchor de Jovellanos (1744-1811)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Francisco_de_Goya_y_Lucientes_-_Gaspar_Melchor_de_Jovellanos.jpg/40px-Francisco_de_Goya_y_Lucientes_-_Gaspar_Melchor_de_Jovellanos.jpg"
      },
       {
        value: "c/cl/clara-reeve-449489.html",
        label: "Clara Reeve (1729-1807)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/ClaraReeve.jpg/40px-ClaraReeve.jpg"
      },
       {
        value: "a/an/anna-de-noailles-6050.html",
        label: "Anna de Noailles (1876-1933)",
        description: "poetisa francesa",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Laszlo_-_Anna_de_Noailles.jpg/40px-Laszlo_-_Anna_de_Noailles.jpg"
      },
       {
        value: "j/ja/jacques-cazotte-425373.html",
        label: "Jacques Cazotte (1719-1792)",
        description: "escritor francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Portrait_of_Jacques_Cazotte.jpg/40px-Portrait_of_Jacques_Cazotte.jpg"
      },
       {
        value: "a/al/alexandros-papadiamantis-320984.html",
        label: "Aléxandros Papadiamantis (1851-1911)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Papadiamantis_Aleksandros_by_Nirvanas.jpg/40px-Papadiamantis_Aleksandros_by_Nirvanas.jpg"
      },
       {
        value: "y/ye/yelena-guro-442658.html",
        label: "Yelena Guró (1877-1913)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Guro_selfport.jpg/40px-Guro_selfport.jpg"
      },
       {
        value: "b/be/benito-perez-galdos-189869.html",
        label: "Benito Pérez Galdós (1843-1920)",
        description: "novelista, dramaturgo, cronista y político español",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Benito_perez_galdos_y_perro_las_palmas_1890.jpg/40px-Benito_perez_galdos_y_perro_las_palmas_1890.jpg"
      },
       {
        value: "a/a-/a-e-w-mason-382786.html",
        label: "A. E. W. Mason (1865-1948)",
        description: "escritor británico",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Alfred_Edward_Woodley_Mason.jpg/40px-Alfred_Edward_Woodley_Mason.jpg"
      },
       {
        value: "e/et/etteilla-372537.html",
        label: "Etteilla (1738-1791)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/ALLIETTE.jpg/40px-ALLIETTE.jpg"
      },
       {
        value: "m/ma/martin-buber-84423.html",
        label: "Martin Buber (1878-1965)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Martin_Buber_1963.jpg/40px-Martin_Buber_1963.jpg"
      },
       {
        value: "j/ja/james-boswell-335060.html",
        label: "James Boswell (1740-1795)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/James_Boswell_by_Sir_Joshua_Reynolds.jpg/40px-James_Boswell_by_Sir_Joshua_Reynolds.jpg"
      },
       {
        value: "j/ja/jakob-lorber-78592.html",
        label: "Jakob Lorber (1800-1864)",
        description: "músico austríaco",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Lorber1.jpg/40px-Lorber1.jpg"
      },
       {
        value: "j/jo/john-boynton-priestley-443528.html",
        label: "John Boynton Priestley (1894-1984)",
        description: "escritor, locutor y activista británico",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/J_B_Priestley_at_work_in_his_study%2C_1940._%287893553148%29.jpg/40px-J_B_Priestley_at_work_in_his_study%2C_1940._%287893553148%29.jpg"
      },
       {
        value: "b/ba/bal-gangadhar-tilak-312555.html",
        label: "Bal Gangadhar Tilak (1856-1920)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Bal_G._Tilak.jpg/40px-Bal_G._Tilak.jpg"
      },
       {
        value: "j/ja/jaim-najman-bialik-359705.html",
        label: "Jaim Najman Biálik (1873-1934)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Hayyim_Nahman_Bialik_1923.jpg/40px-Hayyim_Nahman_Bialik_1923.jpg"
      },
       {
        value: "c/cl/claire-elisabeth-gravier-de-vergennes-condesa-de-remusat-274062.html",
        label: "Claire Elisabeth Gravier de Vergennes, condesa de Rémusat (1780-1824)",
        description: "escritora francesa",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Comtesse_de_R%C3%A9musat_-.jpg/40px-Comtesse_de_R%C3%A9musat_-.jpg"
      },
       {
        value: "c/ch/charles-lamb-372984.html",
        label: "Charles Lamb (1775-1834)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Charles_Lamb_by_Henry_Hoppner_Meyer.jpg/40px-Charles_Lamb_by_Henry_Hoppner_Meyer.jpg"
      },
       {
        value: "a/ad/adam-muller-guttenbrunn-79061.html",
        label: "Adam Müller-Guttenbrunn (1852-1923)",
        description: "político austríaco",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Adam_M%C3%BCller-Guttenbrunn.jpg/40px-Adam_M%C3%BCller-Guttenbrunn.jpg"
      },
       {
        value: "m/ma/maria-valtorta-434595.html",
        label: "Maria Valtorta (1897-1961)",
        description: "escritora italiana",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Maria_Valtorta2.jpg/40px-Maria_Valtorta2.jpg"
      },
       {
        value: "h/he/hendrik-conscience-378133.html",
        label: "Hendrik Conscience (1812-1883)",
        description: "político belga",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Hendrik_Conscience.jpg/40px-Hendrik_Conscience.jpg"
      },
       {
        value: "j/ju/jules-breton-282043.html",
        label: "Jules Breton (1827-1906)",
        description: "pintor francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Jules_Breton.jpg/40px-Jules_Breton.jpg"
      },
       {
        value: "b/be/beatrix-potter-214565.html",
        label: "Beatrix Potter (1866-1943)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Beatrix_Potter_by_King_cropped.jpg/40px-Beatrix_Potter_by_King_cropped.jpg"
      },
       {
        value: "f/fe/ferenc-molnar-296809.html",
        label: "Ferenc Molnár (1878-1952)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Ferenc_Moln%C3%A1r_1941.jpg/40px-Ferenc_Moln%C3%A1r_1941.jpg"
      },
       {
        value: "j/jo/john-wesley-213393.html",
        label: "John Wesley (1703-1791)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/John_Wesley_by_William_Hamilton.jpg/40px-John_Wesley_by_William_Hamilton.jpg"
      },
       {
        value: "a/am/amy-carmichael-481824.html",
        label: "Amy Carmichael (1867-1951)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Amy_Carmichael_with_children2.jpg/40px-Amy_Carmichael_with_children2.jpg"
      },
       {
        value: "j/jo/johann-voldemar-jannsen-362138.html",
        label: "Johann Voldemar Jannsen (1819-1890)",
        description: "escritor estonio",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Johann_Voldemar_Jannsen.jpg/40px-Johann_Voldemar_Jannsen.jpg"
      },
       {
        value: "f/fr/frida-uhl-79179.html",
        label: "Frida Uhl (1872-1943)",
        description: "escritora austríaca",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Frida_Uhl.jpg/40px-Frida_Uhl.jpg"
      },
       {
        value: "l/li/liberty-hyde-bailey-152366.html",
        label: "Liberty Hyde Bailey (1858-1954)",
        description: "botánico estadounidense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Liberty_Hyde_Bailey_1858-1954.jpg/40px-Liberty_Hyde_Bailey_1858-1954.jpg"
      },
       {
        value: "v/ve/venceslaus-ulricus-hammershaimb-212216.html",
        label: "Venceslaus Ulricus Hammershaimb (1819-1909)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/V.U._Hammershaimb.jpg/40px-V.U._Hammershaimb.jpg"
      },
       {
        value: "s/se/sebastian-brunner-94692.html",
        label: "Sebastian Brunner (1814-1893)",
        description: "periodista austríaco",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Sebastian_Brunner_JS.jpg/40px-Sebastian_Brunner_JS.jpg"
      },
       {
        value: "h/he/henry-kingsley-322900.html",
        label: "Henry Kingsley (1830-1876)",
        description: "escritor británico",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Henry_Kingsley.jpg/40px-Henry_Kingsley.jpg"
      },
       {
        value: "a/an/anton-hansen-tammsaare-353637.html",
        label: "Anton Hansen Tammsaare (1878-1940)",
        description: "escritor estonio",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Anton_Hansen_Tammsaare%2C_000290.jpg/40px-Anton_Hansen_Tammsaare%2C_000290.jpg"
      },
       {
        value: "g/gu/gustaf-kossinna-63224.html",
        label: "Gustaf Kossinna (1858-1931)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Gustaf_Kossinna_by_Bruno-Dietrich_Sassnick.jpg/40px-Gustaf_Kossinna_by_Bruno-Dietrich_Sassnick.jpg"
      },
       {
        value: "j/je/jean-anthelme-brillat-savarin-313027.html",
        label: "Jean Anthelme Brillat-Savarin (1755-1826)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Le_Vachez_Collection_-_Jean_Anthelme_Brillat-Savarin_%281755-1826%29.jpg/40px-Le_Vachez_Collection_-_Jean_Anthelme_Brillat-Savarin_%281755-1826%29.jpg"
      },
       {
        value: "a/au/august-heinrich-hoffmann-von-fallersleben-76938.html",
        label: "August Heinrich Hoffmann von Fallersleben (1798-1874)",
        description: "poeta alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Hoffmann_von_Fallersleben.jpg/40px-Hoffmann_von_Fallersleben.jpg"
      },
       {
        value: "m/ma/maria-edgeworth-237575.html",
        label: "Maria Edgeworth (1767-1849)",
        description: "escritora irlandesa",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Maria_Edgeworth_by_John_Downman_1807.jpg/40px-Maria_Edgeworth_by_John_Downman_1807.jpg"
      },
       {
        value: "r/re/rebecca-west-236669.html",
        label: "Rebecca West (1892-1983)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Rebecca_West.jpg/40px-Rebecca_West.jpg"
      },
       {
        value: "c/ch/christian-morgenstern-44652.html",
        label: "Christian Morgenstern (1871-1914)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Morgenstern-h420.jpg/40px-Morgenstern-h420.jpg"
      },
       {
        value: "b/be/bedrich-hrozny-311931.html",
        label: "Bedřich Hrozný (1879-1952)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Bed%C5%99ich_Hrozn%C3%BD_v_20._letech.jpg/40px-Bed%C5%99ich_Hrozn%C3%BD_v_20._letech.jpg"
      },
       {
        value: "i/ig/ignacio-ramirez-205389.html",
        label: "Ignacio Ramírez (1818-1879)",
        description: "escritor, poeta, periodista, abogado, y político liberal mexicano",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Ignacio_Ram%C3%ADrez.jpg/40px-Ignacio_Ram%C3%ADrez.jpg"
      },
       {
        value: "f/fa/fan-s-noli-366307.html",
        label: "Fan S. Noli (1882-1965)",
        description: "político albanés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/FAN_NOLI.jpg/40px-FAN_NOLI.jpg"
      },
       {
        value: "u/um/umberto-saba-451312.html",
        label: "Umberto Saba (1883-1957)",
        description: "poeta italiano",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Umberto_Saba.jpg/40px-Umberto_Saba.jpg"
      },
       {
        value: "h/he/helene-christaller-75829.html",
        label: "Helene Christaller (1872-1953)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Helene_Christaller.jpg/40px-Helene_Christaller.jpg"
      },
       {
        value: "t/th/theodor-hahn-121549.html",
        label: "Theodor Hahn (1824-1883)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Theodor_Hahn.jpg/40px-Theodor_Hahn.jpg"
      },
       {
        value: "f/fr/frederic-melchior-grimm-61852.html",
        label: "Frédéric-Melchior Grimm (1723-1807)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Friedrich_Melchior_von_Grimm.jpg/40px-Friedrich_Melchior_von_Grimm.jpg"
      },
       {
        value: "m/ma/marie-dagoult-253453.html",
        label: "Marie d'Agoult (1805-1876)",
        description: "escritora francesa siglo XIX",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Marie_d%E2%80%99Agoult_by_Henri_Lehmann_%2802%29.jpg/40px-Marie_d%E2%80%99Agoult_by_Henri_Lehmann_%2802%29.jpg"
      },
       {
        value: "l/li/lillian-gish-104183.html",
        label: "Lillian Gish (1893-1993)",
        description: "actriz estadounidense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Lillian_Gish-edit1.jpg/40px-Lillian_Gish-edit1.jpg"
      },
       {
        value: "n/ni/nima-yushich-425731.html",
        label: "Nima Yushich (1895-1960)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Nima_Yushij_-_Original.jpg/40px-Nima_Yushij_-_Original.jpg"
      },
       {
        value: "l/li/liang-qichao-379836.html",
        label: "Liang Qichao (1873-1929)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Liang-Qichao.jpg/40px-Liang-Qichao.jpg"
      },
       {
        value: "g/gu/guy-de-maupassant-9327.html",
        label: "Guy de Maupassant (1850-1893)",
        description: "escritor francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Maupassant_2.jpg/40px-Maupassant_2.jpg"
      },
       {
        value: "j/jo/johann-georg-jacobi-68209.html",
        label: "Johann Georg Jacobi (1740-1814)",
        description: "poeta alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Jacobi_%28Tischbein%29.jpg/40px-Jacobi_%28Tischbein%29.jpg"
      },
       {
        value: "j/je/jean-jaures-12688.html",
        label: "Jean Jaurès (1859-1914)",
        description: "político francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Jean-Jaur%C3%A8s01.jpg/40px-Jean-Jaur%C3%A8s01.jpg"
      },
       {
        value: "r/ro/roald-amundsen-926.html",
        label: "Roald Amundsen (1872-1928)",
        description: "Explorador de Noruega",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Nlc_amundsen.jpg/40px-Nlc_amundsen.jpg"
      },
       {
        value: "m/mi/miroslav-krleza-325428.html",
        label: "Miroslav Krleža (1893-1981)",
        description: "escritor croata",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Miroslav_Krle%C5%BEa_1953.jpg/40px-Miroslav_Krle%C5%BEa_1953.jpg"
      },
       {
        value: "f/fr/fran-levstik-15800.html",
        label: "Fran Levstik (1831-1887)",
        description: "escritor esloveno",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Fran_levstik.jpg/40px-Fran_levstik.jpg"
      },
       {
        value: "a/al/aleksander-stavre-drenova-380794.html",
        label: "Aleksander Stavre Drenova (1872-1947)",
        description: "poeta albanés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Asdrenismall.jpg/40px-Asdrenismall.jpg"
      },
       {
        value: "b/be/berta-zuckerkandl-szeps-86553.html",
        label: "Berta Zuckerkandl-Szeps (1864-1945)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Bertha_Zuckerkandl%2C_von_Vilma_Elisabeth_von_Parlaghy_Brochfeld.jpg/40px-Bertha_Zuckerkandl%2C_von_Vilma_Elisabeth_von_Parlaghy_Brochfeld.jpg"
      },
       {
        value: "j/je/jean-jacques-rousseau-6527.html",
        label: "Jean-Jacques Rousseau (1712-1778)",
        description: "escritor, filósofo y músico franco-helvético definido como un ilustrado",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Jean-Jacques_Rousseau_%28painted_portrait%29.jpg/40px-Jean-Jacques_Rousseau_%28painted_portrait%29.jpg"
      },
       {
        value: "b/be/bernhard-kellermann-77226.html",
        label: "Bernhard Kellermann (1879-1951)",
        description: "escritor alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Bundesarchiv_Bild_183-19204-2120%2C_Bernhard_Kellermann%2C_Otto_Nagel.jpg/40px-Bundesarchiv_Bild_183-19204-2120%2C_Bernhard_Kellermann%2C_Otto_Nagel.jpg"
      },
       {
        value: "m/ma/maurice-denis-440369.html",
        label: "Maurice Denis (1870-1943)",
        description: "pintor francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Maurice_Denis_par_Odlilon_Redon.jpg/40px-Maurice_Denis_par_Odlilon_Redon.jpg"
      },
       {
        value: "g/ge/george-dewey-467093.html",
        label: "George Dewey (1837-1917)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/George_Dewey%2C_Admiral_of_the_Navy.jpg/40px-George_Dewey%2C_Admiral_of_the_Navy.jpg"
      },
       {
        value: "w/wi/william-james-sidis-313603.html",
        label: "William James Sidis (1898-1944)",
        description: "niño prodigio estadounidense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/William_James_Sidis_1914.jpg/40px-William_James_Sidis_1914.jpg"
      },
       {
        value: "d/do/dorothy-l-sayers-106740.html",
        label: "Dorothy L. Sayers (1893-1957)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Dorothy_L._Sayers.jpg/40px-Dorothy_L._Sayers.jpg"
      },
       {
        value: "r/ri/rigas-velestinlis-319684.html",
        label: "Rigas Velestinlís (1757-1798)",
        description: "filósofo griego",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Rigas2.jpg/40px-Rigas2.jpg"
      },
       {
        value: "z/ze/zenta-maurina-48589.html",
        label: "Zenta Mauriņa (1897-1978)",
        description: "escritora letona",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/19960510_36sant_Latvia_Postage_Stamp.jpg/40px-19960510_36sant_Latvia_Postage_Stamp.jpg"
      },
       {
        value: "j/jo/john-masefield-471413.html",
        label: "John Masefield (1878-1967)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/JohnMasefield1912.jpg/40px-JohnMasefield1912.jpg"
      },
       {
        value: "j/je/jeremy-bentham-60887.html",
        label: "Jeremy Bentham (1748-1832)",
        description: "escritor y filósofo inglés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Jeremy_Bentham_by_Henry_William_Pickersgill_detail.jpg/40px-Jeremy_Bentham_by_Henry_William_Pickersgill_detail.jpg"
      },
       {
        value: "z/zo/zofia-nakowska-218319.html",
        label: "Zofia Nałkowska (1884-1954)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Zofia_Nalkowska.jpg/40px-Zofia_Nalkowska.jpg"
      },
       {
        value: "n/ni/nikolai-gumiliov-311033.html",
        label: "Nikolái Gumiliov (1886-1921)",
        description: "escritor ruso",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Ngumil.jpg/40px-Ngumil.jpg"
      },
       {
        value: "a/an/anne-catherine-de-ligniville-madame-helvetius-461961.html",
        label: "Anne-Catherine de Ligniville, Madame Helvétius (1722-1800)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/AnneCatherineHelvetius2.jpg/40px-AnneCatherineHelvetius2.jpg"
      },
       {
        value: "a/al/alfred-de-vigny-309702.html",
        label: "Alfred de Vigny (1797-1863)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/F%C3%A9lix_Nadar_1820-1910_Alfred_de_Vigny.jpg/40px-F%C3%A9lix_Nadar_1820-1910_Alfred_de_Vigny.jpg"
      },
       {
        value: "j/j-/j-m-barrie-81796.html",
        label: "J. M. Barrie (1860-1937)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/James_Matthew_Barrie00.jpg/40px-James_Matthew_Barrie00.jpg"
      },
       {
        value: "j/jo/joseph-von-eichendorff-77204.html",
        label: "Joseph von Eichendorff (1788-1857)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Eichendorff.jpg/40px-Eichendorff.jpg"
      },
       {
        value: "a/al/algernon-charles-swinburne-315511.html",
        label: "Algernon Charles Swinburne (1837-1909)",
        description: "poeta inglés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Algernon_Charles_Swinburne_by_William_Bell_Scott.jpg/40px-Algernon_Charles_Swinburne_by_William_Bell_Scott.jpg"
      },
       {
        value: "b/bh/bhaktivedanta-swami-234898.html",
        label: "Bhaktivedānta Swami (1896-1977)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Prabhupada_on_a_morning_walk_in_Germany_1974.jpg/40px-Prabhupada_on_a_morning_walk_in_Germany_1974.jpg"
      },
       {
        value: "m/mo/motoori-norinaga-384647.html",
        label: "Motoori Norinaga (1730-1801)",
        description: "filósofo japonés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Motoori_Norinaga_self_portrait.jpg/40px-Motoori_Norinaga_self_portrait.jpg"
      },
       {
        value: "c/ca/carlo-tresca-133877.html",
        label: "Carlo Tresca (1879-1943)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Carlo-tresca-1910_%28cropped%29.jpg/40px-Carlo-tresca-1910_%28cropped%29.jpg"
      },
       {
        value: "c/co/corrado-alvaro-371925.html",
        label: "Corrado Alvaro (1895-1956)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Corrado_alvaro.jpg/40px-Corrado_alvaro.jpg"
      },
       {
        value: "j/jo/john-dos-passos-312407.html",
        label: "John Dos Passos (1896-1970)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/John_dos_Passos.jpg/40px-John_dos_Passos.jpg"
      },
       {
        value: "w/wa/wadysaw-tarnowski-93817.html",
        label: "Władysław Tarnowski (1836-1878)",
        description: "compositor polaco",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/W%C5%82adys%C5%82aw_Tarnowski_by_Maurycy_Gottlieb.jpg/40px-W%C5%82adys%C5%82aw_Tarnowski_by_Maurycy_Gottlieb.jpg"
      },
       {
        value: "l/lu/luise-gottsched-65863.html",
        label: "Luise Gottsched (1713-1762)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Gottschedin.jpg/40px-Gottschedin.jpg"
      },
       {
        value: "l/lo/logan-pearsall-smith-328494.html",
        label: "Logan Pearsall Smith (1865-1946)",
        description: "escritor estadounidense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Lady_Henry_Somerset_with_Hannah_Whitall_Smith%2C_Mary_Brenson%2C_Logan_Pearsall_Smith%2C_Karin_Stephen_and_Ray_Strachey.jpg/40px-Lady_Henry_Somerset_with_Hannah_Whitall_Smith%2C_Mary_Brenson%2C_Logan_Pearsall_Smith%2C_Karin_Stephen_and_Ray_Strachey.jpg"
      },
       {
        value: "e/e-/e-d-e-n-southworth-447019.html",
        label: "E. D. E. N. Southworth (1819-1899)",
        description: "escritora estadounidense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/EDEN_Southworth_c1860-crop.jpg/40px-EDEN_Southworth_c1860-crop.jpg"
      },
       {
        value: "b/bo/boris-pasternak-41223.html",
        label: "Borís Pasternak (1890-1960)",
        description: "poeta y novelista ruso",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Boris_Pasternak_in_youth.jpg/40px-Boris_Pasternak_in_youth.jpg"
      },
       {
        value: "a/an/anne-charlotte-leffler-243068.html",
        label: "Anne Charlotte Leffler (1849-1892)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Anne_Charlotte_Leffler_2.jpg/40px-Anne_Charlotte_Leffler_2.jpg"
      },
       {
        value: "b/be/bernard-law-montgomery-152025.html",
        label: "Bernard Law Montgomery (1887-1976)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Bernard_Law_Montgomery.jpg/40px-Bernard_Law_Montgomery.jpg"
      },
       {
        value: "h/hu/hugo-koataj-127345.html",
        label: "Hugo Kołłątaj (1750-1812)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Huga_Ka%C5%82antaj._%D0%93%D1%83%D0%B3%D0%B0_%D0%9A%D0%B0%D0%BB%D0%B0%D0%BD%D1%82%D0%B0%D0%B9_%28XIX%29.jpg/40px-Huga_Ka%C5%82antaj._%D0%93%D1%83%D0%B3%D0%B0_%D0%9A%D0%B0%D0%BB%D0%B0%D0%BD%D1%82%D0%B0%D0%B9_%28XIX%29.jpg"
      },
       {
        value: "a/ar/aron-nimzowitsch-295114.html",
        label: "Aron Nimzowitsch (1886-1935)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Aron_Nimzowitsch.jpg/40px-Aron_Nimzowitsch.jpg"
      },
       {
        value: "a/al/alexandre-dumas-hijo-169150.html",
        label: "Alexandre Dumas, hijo (1824-1895)",
        description: "Escritor y novelista francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Alexandre_Dumas01.jpg/40px-Alexandre_Dumas01.jpg"
      },
       {
        value: "n/na/naomi-mitchison-461571.html",
        label: "Naomi Mitchison (1897-1999)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Naomimitchison.jpg/40px-Naomimitchison.jpg"
      },
       {
        value: "m/ma/marcel-janco-366217.html",
        label: "Marcel Janco (1895-1984)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Marcel_Janco.jpg/40px-Marcel_Janco.jpg"
      },
       {
        value: "a/an/antoni-grabowski-11847.html",
        label: "Antoni Grabowski (1857-1921)",
        description: "ingieniero químico polaco promotor del esperanto",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Antoni_Grabowski.jpg/40px-Antoni_Grabowski.jpg"
      },
       {
        value: "e/em/emilie-du-chatelet-7286.html",
        label: "Émilie du Châtelet (1706-1749)",
        description: "matemática y física francesa",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Inconnu%2C_portrait_de_madame_Du_Ch%C3%A2telet_%C3%A0_sa_table_de_travail%2C_d%C3%A9tail_%28ch%C3%A2teau_de_Breteuil%29_-001.jpg/40px-Inconnu%2C_portrait_de_madame_Du_Ch%C3%A2telet_%C3%A0_sa_table_de_travail%2C_d%C3%A9tail_%28ch%C3%A2teau_de_Breteuil%29_-001.jpg"
      },
       {
        value: "k/ka/karl-heinrich-ulrichs-60318.html",
        label: "Karl Heinrich Ulrichs (1825-1895)",
        description: "activista alemán de los derechos de los homosexuales",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Karl_Heinrich_Ulrichs_%28from_Kennedy%29.jpg/40px-Karl_Heinrich_Ulrichs_%28from_Kennedy%29.jpg"
      },
       {
        value: "f/fe/fernando-pessoa-173481.html",
        label: "Fernando Pessoa (1888-1935)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/216_2310-Fernando-Pessoa.jpg/40px-216_2310-Fernando-Pessoa.jpg"
      },
       {
        value: "w/wi/william-somerset-maugham-134942.html",
        label: "William Somerset Maugham (1874-1965)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Somerset_Maugham_%281934%29.jpg/40px-Somerset_Maugham_%281934%29.jpg"
      },
       {
        value: "s/sa/sarvepalli-radhakrishnan-156349.html",
        label: "Sarvepalli Radhakrishnan (1888-1975)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Radhakrishnan.jpg/40px-Radhakrishnan.jpg"
      },
       {
        value: "m/ma/matvei-zajarov-48102.html",
        label: "Matvéi Zajárov (1898-1972)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/MV_Zaharov.jpg/40px-MV_Zaharov.jpg"
      },
       {
        value: "e/el/elinor-wylie-460055.html",
        label: "Elinor Wylie (1885-1928)",
        description: "poetisa estadounidense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Elinor_Wylie.jpg/40px-Elinor_Wylie.jpg"
      },
       {
        value: "e/el/elin-pelin-357980.html",
        label: "Elin Pelin (1877-1949)",
        description: "escritor búlgaro",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Elin_Pelin.jpg/40px-Elin_Pelin.jpg"
      },
       {
        value: "l/le/leo-von-klenze-60163.html",
        label: "Leo von Klenze (1784-1864)",
        description: "arquitecto alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Leo_von_Klenze_2.jpg/40px-Leo_von_Klenze_2.jpg"
      },
       {
        value: "n/ne/nellie-mcclung-460191.html",
        label: "Nellie McClung (1873-1951)",
        description: "política canadiense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Nellie_McClung.jpg/40px-Nellie_McClung.jpg"
      },
       {
        value: "m/ma/max-schneckenburger-71399.html",
        label: "Max Schneckenburger (1819-1849)",
        description: "poeta alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Max_Schneckenburger.jpg/40px-Max_Schneckenburger.jpg"
      },
       {
        value: "f/fr/france-preseren-1031.html",
        label: "France Prešeren (1800-1849)",
        description: "poeta esloveno",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/France_Pre%C5%A1eren_-_lithograph_%281866%2C_Pre%C5%A1irnove_poezije%29_01.jpg/40px-France_Pre%C5%A1eren_-_lithograph_%281866%2C_Pre%C5%A1irnove_poezije%29_01.jpg"
      },
       {
        value: "m/ma/mary-elizabeth-braddon-437184.html",
        label: "Mary Elizabeth Braddon (1835-1915)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Mary_Elizabeth_Maxwell_%28n%C3%A9e_Braddon%29_by_William_Powell_Frith.jpg/40px-Mary_Elizabeth_Maxwell_%28n%C3%A9e_Braddon%29_by_William_Powell_Frith.jpg"
      },
       {
        value: "s/so/sophie-la-roche-62404.html",
        label: "Sophie La Roche (1730-1807)",
        description: "novelista alemana",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Sophie_von_La_Roche_-_Georg_Oswald_May_1778.jpg/40px-Sophie_von_La_Roche_-_Georg_Oswald_May_1778.jpg"
      },
       {
        value: "m/ma/maria-rasputina-439787.html",
        label: "Maria Rasputina (1898-1977)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Rasputindaughtercropped.jpg/40px-Rasputindaughtercropped.jpg"
      },
       {
        value: "f/fr/friedrich-gottlieb-klopstock-154367.html",
        label: "Friedrich Gottlieb Klopstock (1724-1803)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Friedrich_Gottlieb_Klopstock-01.jpg/40px-Friedrich_Gottlieb_Klopstock-01.jpg"
      },
       {
        value: "s/sa/sarah-winnemuca-438194.html",
        label: "Sarah Winnemuca (1844-1891)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Sarah-winnemucca.jpg/40px-Sarah-winnemucca.jpg"
      },
       {
        value: "b/br/bret-harte-301983.html",
        label: "Bret Harte (1836-1902)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/BretHarte-PaintedIn1884ByJohnPettie%281839-1893%29.jpg/40px-BretHarte-PaintedIn1884ByJohnPettie%281839-1893%29.jpg"
      },
       {
        value: "a/an/anton-reicha-311387.html",
        label: "Anton Reicha (1770-1836)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Reicha.jpg/40px-Reicha.jpg"
      },
       {
        value: "n/ni/nikolai-nekrasov-208003.html",
        label: "Nikolái Nekrásov (1821-1878)",
        description: "poeta ruso",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/%D0%9D%D0%B8%D0%BA%D0%BE%D0%BB%D0%B0%D0%B9_%D0%9D%D0%B5%D0%BA%D1%80%D0%B0%D1%81%D0%BE%D0%B2.jpg/40px-%D0%9D%D0%B8%D0%BA%D0%BE%D0%BB%D0%B0%D0%B9_%D0%9D%D0%B5%D0%BA%D1%80%D0%B0%D1%81%D0%BE%D0%B2.jpg"
      },
       {
        value: "j/jo/jose-gutierrez-solana-428928.html",
        label: "José Gutiérrez Solana (1886-1945)",
        description: "Pintor y grabador español",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Jos%C3%A9_Guti%C3%A9rrez_Solana.jpg/40px-Jos%C3%A9_Guti%C3%A9rrez_Solana.jpg"
      },
       {
        value: "h/he/henry-george-355245.html",
        label: "Henry George (1839-1897)",
        description: "economista estadounidense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Henry_George.jpg/40px-Henry_George.jpg"
      },
       {
        value: "w/wi/wilhelm-filchner-58830.html",
        label: "Wilhelm Filchner (1877-1957)",
        description: "explorador alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Wilhelm_Filchner.jpg/40px-Wilhelm_Filchner.jpg"
      },
       {
        value: "e/em/emile-armand-274891.html",
        label: "Émile Armand (1872-1962)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Emilearmand01.jpg/40px-Emilearmand01.jpg"
      },
       {
        value: "d/d-/d-s-mirsky-354394.html",
        label: "D. S. Mirsky (1890-1939)",
        description: "escritor ruso",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Dmitrij_SvyatopolkMirskij.jpg/40px-Dmitrij_SvyatopolkMirskij.jpg"
      },
       {
        value: "m/ma/matthew-arnold-271032.html",
        label: "Matthew Arnold (1822-1888)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Matthew_Arnold_-_Project_Gutenberg_eText_16745.jpg/40px-Matthew_Arnold_-_Project_Gutenberg_eText_16745.jpg"
      },
       {
        value: "a/an/angelos-sikelianos-359839.html",
        label: "Ángelos Sikelianós (1884-1951)",
        description: "escritor griego",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Sikelianos.jpg/40px-Sikelianos.jpg"
      },
       {
        value: "h/he/henry-timrod-332770.html",
        label: "Henry Timrod (1828-1867)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Timrod_h.jpg/40px-Timrod_h.jpg"
      },
       {
        value: "s/st/stendhal-502.html",
        label: "Stendhal (1783-1842)",
        description: "escritor francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Stendhal.jpg/40px-Stendhal.jpg"
      },
       {
        value: "a/ac/achim-von-arnim-70988.html",
        label: "Achim von Arnim (1781-1831)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Ludwig_Achim_von_Arnim.jpg/40px-Ludwig_Achim_von_Arnim.jpg"
      },
       {
        value: "a/an/antanas-smetona-296950.html",
        label: "Antanas Smetona (1874-1944)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Antanas_Smetona_2.jpg/40px-Antanas_Smetona_2.jpg"
      },
       {
        value: "b/be/benjamin-franklin-34969.html",
        label: "Benjamin Franklin (1706-1790)",
        description: "político, científico e inventor estadounidense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/BenFranklinDuplessis.jpg/40px-BenFranklinDuplessis.jpg"
      },
       {
        value: "w/wo/wolfgang-menzel-64640.html",
        label: "Wolfgang Menzel (1798-1873)",
        description: "poeta alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Wolfgang_Menzel_01.jpg/40px-Wolfgang_Menzel_01.jpg"
      },
       {
        value: "j/jo/john-william-draper-472490.html",
        label: "John William Draper (1811-1882)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/John_William_Draper.jpg/40px-John_William_Draper.jpg"
      },
       {
        value: "f/fr/frederick-marryat-467770.html",
        label: "Frederick Marryat (1792-1848)",
        description: "escritor de literatura infantil británico",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Frederick_Marryat_by_John_Simpson.jpg/40px-Frederick_Marryat_by_John_Simpson.jpg"
      },
       {
        value: "m/ma/margit-kaffka-287762.html",
        label: "Margit Kaffka (1880-1918)",
        description: "escritora húngara",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Kaffka_Margit.jpg/40px-Kaffka_Margit.jpg"
      },
       {
        value: "f/fi/fiodor-litke-435766.html",
        label: "Fiódor Litke (1797-1882)",
        description: "Marino, geógrafo y explorador ruso",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Litke.jpg/40px-Litke.jpg"
      },
       {
        value: "b/bj/bjrnstjerne-bjrnson-46405.html",
        label: "Bjørnstjerne Bjørnson (1832-1910)",
        description: "escritor noruego",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Bj%C3%B8rnstjerne_Bj%C3%B8rnson_%28Stories_By_Foreign_Authors%29.jpg/40px-Bj%C3%B8rnstjerne_Bj%C3%B8rnson_%28Stories_By_Foreign_Authors%29.jpg"
      },
       {
        value: "a/al/alfred-tennyson-173869.html",
        label: "Alfred Tennyson (1809-1892)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Alfred_Tennyson_2.jpg/40px-Alfred_Tennyson_2.jpg"
      },
       {
        value: "w/wi/wilhelm-uhde-69574.html",
        label: "Wilhelm Uhde (1874-1947)",
        description: "historiador del arte alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Helmut_Kolle-Wilhelm_Uhde-portrait.jpg/40px-Helmut_Kolle-Wilhelm_Uhde-portrait.jpg"
      },
       {
        value: "l/la/laura-beatrice-mancini-275374.html",
        label: "Laura Beatrice Mancini (1821-1869)",
        description: "poetisa italiana",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Laura_Beatrice_Mancini_Oliva.jpg/40px-Laura_Beatrice_Mancini_Oliva.jpg"
      },
       {
        value: "v/vi/victor-adler-366845.html",
        label: "Víctor Adler (1852-1918)",
        description: "político austríaco",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Victor_Adler.jpg/40px-Victor_Adler.jpg"
      },
       {
        value: "m/ma/maximo-gorki-12706.html",
        label: "Máximo Gorki (1868-1936)",
        description: "escritor y político ruso identificado con el movimiento revolucionario soviético",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Maxim_Gorky_authographed_portrait_1.jpg/40px-Maxim_Gorky_authographed_portrait_1.jpg"
      },
       {
        value: "e/es/esteban-echeverria-188859.html",
        label: "Esteban Echeverría (1805-1851)",
        description: "escritor y poeta Argentino",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/EstebanEcheverria.jpg/40px-EstebanEcheverria.jpg"
      },
       {
        value: "m/ma/magnus-hirschfeld-57592.html",
        label: "Magnus Hirschfeld (1868-1935)",
        description: "médico y sexólogo",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Magnus_Hirschfeld.jpg/40px-Magnus_Hirschfeld.jpg"
      },
       {
        value: "e/ed/edward-morgan-forster-189119.html",
        label: "Edward Morgan Forster (1879-1970)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/E._M._Forster_von_Dora_Carrington%2C_1924-25.jpg/40px-E._M._Forster_von_Dora_Carrington%2C_1924-25.jpg"
      },
       {
        value: "r/ra/rainis-348001.html",
        label: "Rainis (1865-1929)",
        description: "poeta, dramaturgo y político letón",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Rainis.jpg/40px-Rainis.jpg"
      },
       {
        value: "f/fe/ferenc-kolcsey-440057.html",
        label: "Ferenc Kölcsey (1790-1838)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Kolcsey_ferenc.jpg/40px-Kolcsey_ferenc.jpg"
      },
       {
        value: "g/gi/giuseppe-garibaldi-539.html",
        label: "Giuseppe Garibaldi (1807-1882)",
        description: "militar y político de Italia",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Giuseppe_Garibaldi_%281866%29.jpg/40px-Giuseppe_Garibaldi_%281866%29.jpg"
      },
       {
        value: "m/ma/marianne-weber-66916.html",
        label: "Marianne Weber (1870-1954)",
        description: "político aleman",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/MarianneWeberInLemgo.jpg/40px-MarianneWeberInLemgo.jpg"
      },
       {
        value: "e/ed/eduard-zeller-61862.html",
        label: "Eduard Zeller (1814-1908)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Eduard_Zeller_-_Imagines_philologorum.jpg/40px-Eduard_Zeller_-_Imagines_philologorum.jpg"
      },
       {
        value: "i/id/ida--hahn-hahn-92101.html",
        label: "Ida  Hahn-Hahn (1805-1880)",
        description: "Escritora alemana",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Ida_Gr%C3%A4fin_Hahn-Hahn.jpg/40px-Ida_Gr%C3%A4fin_Hahn-Hahn.jpg"
      },
       {
        value: "t/th/thomas-hardy-132805.html",
        label: "Thomas Hardy (1840-1928)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Thomashardy_restored.jpg/40px-Thomashardy_restored.jpg"
      },
       {
        value: "n/ni/nishida-kitaro-45125.html",
        label: "Nishida Kitarô (1870-1945)",
        description: "filósofo japonés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Kitaro_Nishidain_in_Feb._1943.jpg/40px-Kitaro_Nishidain_in_Feb._1943.jpg"
      },
       {
        value: "k/ko/korney-chukovsky-347685.html",
        label: "Korney Chukovsky (1882-1969)",
        description: "escritor",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Chukovsky_by_Repin.jpg/40px-Chukovsky_by_Repin.jpg"
      },
       {
        value: "s/si/simon-dubnow-213693.html",
        label: "Simón Dubnow (1860-1941)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/SimonDubnow.jpg/40px-SimonDubnow.jpg"
      },
       {
        value: "a/ad/adam-mickiewicz-79822.html",
        label: "Adam Mickiewicz (1798-1855)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Adam_Mickiewicz_wed%C5%82ug_dagerotypu_paryskiego_z_1842_roku.jpg/40px-Adam_Mickiewicz_wed%C5%82ug_dagerotypu_paryskiego_z_1842_roku.jpg"
      },
       {
        value: "e/ed/edward-wilmot-blyden-384338.html",
        label: "Edward Wilmot Blyden (1832-1912)",
        description: "político liberiano",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Blyden_E_W_3c35638r.jpg/40px-Blyden_E_W_3c35638r.jpg"
      },
       {
        value: "g/ga/gabdulla-tukai-315279.html",
        label: "Gabdulla Tukai (1886-1913)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Tuqay_portrait.jpg/40px-Tuqay_portrait.jpg"
      },
       {
        value: "l/le/leopold-auenbrugger-78803.html",
        label: "Leopold Auenbrugger (1722-1809)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Leopold-von-auenbrugger.jpg/40px-Leopold-von-auenbrugger.jpg"
      },
       {
        value: "a/al/alphonse-de-lamartine-188697.html",
        label: "Alphonse de Lamartine (1790-1869)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Alphonse_de_Lamartine_1.jpg/40px-Alphonse_de_Lamartine_1.jpg"
      },
       {
        value: "d/da/david-garrick-222390.html",
        label: "David Garrick (1717-1779)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Kauffman-Garrick.jpg/40px-Kauffman-Garrick.jpg"
      },
       {
        value: "d/da/daniel-solander-39789.html",
        label: "Daniel Solander (1733-1782)",
        description: "botánico sueco",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Daniel_Solander.jpg/40px-Daniel_Solander.jpg"
      },
       {
        value: "g/gu/gustave-aimard-472068.html",
        label: "Gustave Aimard (1818-1883)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Aimard.jpg/40px-Aimard.jpg"
      },
       {
        value: "g/ga/gaston-leroux-298827.html",
        label: "Gastón Leroux (1868-1927)",
        description: "escritor francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/G._LEROUX.jpg/40px-G._LEROUX.jpg"
      },
       {
        value: "h/he/hector-hugh-munro-311526.html",
        label: "Hector Hugh Munro (1870-1916)",
        description: "escritor británico",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Hector_Hugh_Munro.jpg/40px-Hector_Hugh_Munro.jpg"
      },
       {
        value: "j/ja/jane-marcet-433093.html",
        label: "Jane Marcet (1769-1858)",
        description: "escritora inglesa",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Marcet_Jane.jpg/40px-Marcet_Jane.jpg"
      },
       {
        value: "a/ar/arthur-schnitzler-44331.html",
        label: "Arthur Schnitzler (1862-1931)",
        description: "escritor austríaco",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Arthur_Schnitzler_1912.jpg/40px-Arthur_Schnitzler_1912.jpg"
      },
       {
        value: "j/je/jean-paulhan-470557.html",
        label: "Jean Paulhan (1884-1968)",
        description: "escritor francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Portrait_de_Jean_Paulhan_en_1938.jpg/40px-Portrait_de_Jean_Paulhan_en_1938.jpg"
      },
       {
        value: "r/ro/robert-burns-81960.html",
        label: "Robert Burns (1759-1796)",
        description: "poeta escocés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Robert_Burns_1.jpg/40px-Robert_Burns_1.jpg"
      },
       {
        value: "i/is/ishikawa-takuboku-467747.html",
        label: "Ishikawa Takuboku (1886-1912)",
        description: "escritor japonés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Ishikawa_Takuboku.jpg/40px-Ishikawa_Takuboku.jpg"
      },
       {
        value: "f/fr/friedrich-clemens-gerke-64536.html",
        label: "Friedrich Clemens Gerke (1801-1888)",
        description: "periodista de Alemania",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Gerke.jpg/40px-Gerke.jpg"
      },
       {
        value: "j/ja/jacques-necker-123062.html",
        label: "Jacques Necker (1732-1804)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Necker%2C_Jacques_-_Duplessis.jpg/40px-Necker%2C_Jacques_-_Duplessis.jpg"
      },
       {
        value: "j/ju/junichiro-tanizaki-316213.html",
        label: "Jun'ichirō Tanizaki (1886-1965)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Junichiro_Tanizaki_1913.jpg/40px-Junichiro_Tanizaki_1913.jpg"
      },
       {
        value: "h/he/hester-thrale-291322.html",
        label: "Hester Thrale (1741-1821)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Hester_thrale_by_joshua_reynolds_1781_small.jpg/40px-Hester_thrale_by_joshua_reynolds_1781_small.jpg"
      },
       {
        value: "d/da/daisetsu-teitaro-suzuki-44847.html",
        label: "Daisetsu Teitaro Suzuki (1870-1966)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Daisetsu_Teitar%C5%8D_Suzuki_photographed_by_Shigeru_Tamura.jpg/40px-Daisetsu_Teitar%C5%8D_Suzuki_photographed_by_Shigeru_Tamura.jpg"
      },
       {
        value: "g/gu/gustavo-adolfo-becquer-203715.html",
        label: "Gustavo Adolfo Bécquer (1836-1870)",
        description: "poeta y narrador español",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Portrait_of_Gustavo_Adolfo_B%C3%A9cquer%2C_by_his_brother_Valeriano_%281862%29.jpg/40px-Portrait_of_Gustavo_Adolfo_B%C3%A9cquer%2C_by_his_brother_Valeriano_%281862%29.jpg"
      },
       {
        value: "e/ed/edouard-estaunie-206391.html",
        label: "Édouard Estaunié (1862-1942)",
        description: "ingeniero francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/%C3%89douard_Estauni%C3%A9_1923.jpg/40px-%C3%89douard_Estauni%C3%A9_1923.jpg"
      },
       {
        value: "e/er/ernst-moritz-arndt-57351.html",
        label: "Ernst Moritz Arndt (1769-1860)",
        description: "poeta",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Ernst_Moritz_Arndt.jpg/40px-Ernst_Moritz_Arndt.jpg"
      },
       {
        value: "l/li/liane-de-pougy-242905.html",
        label: "Liane de Pougy (1869-1950)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Nadar_-_Liane_de_Pougy_1.jpg/40px-Nadar_-_Liane_de_Pougy_1.jpg"
      },
       {
        value: "d/da/david-friedrich-strauss-57219.html",
        label: "David Friedrich Strauss (1808-1874)",
        description: "teólogo y filósofo",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/David_Friedrich_Strauss_1.jpg/40px-David_Friedrich_Strauss_1.jpg"
      },
       {
        value: "l/lu/luigi-pirandello-1403.html",
        label: "Luigi Pirandello (1867-1936)",
        description: "dramaturgo, novelista y escritor de relatos cortos italiano",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Luigi_Pirandello_1932.jpg/40px-Luigi_Pirandello_1932.jpg"
      },
       {
        value: "i/is/isabella-beeton-287665.html",
        label: "Isabella Beeton (1836-1865)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Isabella_Beeton%2C_by_Maull_%26_Polyblank.jpg/40px-Isabella_Beeton%2C_by_Maull_%26_Polyblank.jpg"
      },
       {
        value: "g/ge/geza-gardonyi-221903.html",
        label: "Géza Gárdonyi (1863-1922)",
        description: "escritor húngaro",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Geza_gardonyi.jpg/40px-Geza_gardonyi.jpg"
      },
       {
        value: "m/ma/mary-shelley-47152.html",
        label: "Mary Shelley (1797-1851)",
        description: "escritora inglesa",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/MaryShelley.jpg/40px-MaryShelley.jpg"
      },
       {
        value: "i/is/isabel-burton-243110.html",
        label: "Isabel Burton (1831-1896)",
        description: "traductora británica",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Isabel_Burton-1961.jpg/40px-Isabel_Burton-1961.jpg"
      },
       {
        value: "a/ar/arthur-rimbaud-493.html",
        label: "Arthur Rimbaud (1854-1891)",
        description: "poeta francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Carjat_Arthur_Rimbaud_1872_n2.jpg/40px-Carjat_Arthur_Rimbaud_1872_n2.jpg"
      },
       {
        value: "d/de/delmira-agustini-239458.html",
        label: "Delmira Agustini (1886-1914)",
        description: "escritora uruguaya",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Delmira_Agustini.jpg/40px-Delmira_Agustini.jpg"
      },
       {
        value: "l/lo/louis-antoine-de-bougainville-153911.html",
        label: "Louis Antoine de Bougainville (1729-1811)",
        description: "militar, explorador, y navegante francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Louis_Antoine_de_Bougainville_-_Portrait_par_Jean-Pierre_Franquel.jpg/40px-Louis_Antoine_de_Bougainville_-_Portrait_par_Jean-Pierre_Franquel.jpg"
      },
       {
        value: "w/wi/william-makepeace-thackeray-167768.html",
        label: "William Makepeace Thackeray (1811-1863)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/William_Makepeace_Thackeray_by_Jesse_Harrison_Whitehurst-crop.jpg/40px-William_Makepeace_Thackeray_by_Jesse_Harrison_Whitehurst-crop.jpg"
      },
       {
        value: "j/jo/johannes-schlaf-70842.html",
        label: "Johannes Schlaf (1862-1941)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Johannes_Schlaf%2C_portrait.jpg/40px-Johannes_Schlaf%2C_portrait.jpg"
      },
       {
        value: "w/wi/william-butler-yeats-40213.html",
        label: "William Butler Yeats (1865-1939)",
        description: "poeta y dramaturgo irlandés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/William_Butler_Yeats_by_George_Charles_Beresford.jpg/40px-William_Butler_Yeats_by_George_Charles_Beresford.jpg"
      },
       {
        value: "i/iv/ivan-kotlyarevsky-455246.html",
        label: "Ivan Kotlyarevsky (1769-1838)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/%D0%86%D0%B2%D0%B0%D0%BD_%D0%9A%D0%BE%D1%82%D0%BB%D1%8F%D1%80%D0%B5%D0%B2%D1%81%D1%8C%D0%BA%D0%B8%D0%B9_cropped.jpg/40px-%D0%86%D0%B2%D0%B0%D0%BD_%D0%9A%D0%BE%D1%82%D0%BB%D1%8F%D1%80%D0%B5%D0%B2%D1%81%D1%8C%D0%BA%D0%B8%D0%B9_cropped.jpg"
      },
       {
        value: "m/ma/manuel-ugarte-507453.html",
        label: "Manuel Ugarte (1875-1951)",
        description: "escritor argentino",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Manuel_Ugarte.jpg/40px-Manuel_Ugarte.jpg"
      },
       {
        value: "r/ro/roger-martin-du-gard-129155.html",
        label: "Roger Martin du Gard (1881-1958)",
        description: "escritor francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Roger_Martin_du_Gard_1937.jpg/40px-Roger_Martin_du_Gard_1937.jpg"
      },
       {
        value: "l/lo/louis-antoine-de-saint-just-27764.html",
        label: "Louis Antoine de Saint-Just (1767-1794)",
        description: "político revolucionario francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Saint_Just.jpg/40px-Saint_Just.jpg"
      },
       {
        value: "a/ah/ahmad-sawqi-401491.html",
        label: "Ahmad Sawqi (1868-1932)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Ahmad_shawqy.jpg/40px-Ahmad_shawqy.jpg"
      },
       {
        value: "a/an/antoine-leonard-thomas-301210.html",
        label: "Antoine Léonard Thomas (1732-1785)",
        description: "poeta francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Antoine-L%C3%A9onard_Thomas.jpg/40px-Antoine-L%C3%A9onard_Thomas.jpg"
      },
       {
        value: "n/ni/nikolai-karamzin-191598.html",
        label: "Nikolái Karamzín (1766-1826)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Karamzin_by_Tropinin_%281818%2C_Tretyakov_gallery%29.jpg/40px-Karamzin_by_Tropinin_%281818%2C_Tretyakov_gallery%29.jpg"
      },
       {
        value: "t/tu/tudor-arghezi-435755.html",
        label: "Tudor Arghezi (1880-1967)",
        description: "escritor rumano",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Tudor_Arghezi.jpg/40px-Tudor_Arghezi.jpg"
      },
       {
        value: "a/an/anatoli-lunacharski-18809.html",
        label: "Anatoli Lunacharski (1875-1933)",
        description: "dramaturgo, crítico literario y político comunista ruso",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Lunacharsky.jpg/40px-Lunacharsky.jpg"
      },
       {
        value: "e/ed/eduard-von-keyserling-77494.html",
        label: "Eduard Von Keyserling (1855-1918)",
        description: "escritor alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Lovis_Corinth_-_Eduard_von_Keyserling.jpg/40px-Lovis_Corinth_-_Eduard_von_Keyserling.jpg"
      },
       {
        value: "s/sh/sholem-aleijem-238090.html",
        label: "Sholem Aleijem (1859-1916)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/SholemAleichem.jpg/40px-SholemAleichem.jpg"
      },
       {
        value: "p/pe/peter-cornelius-57257.html",
        label: "Peter Cornelius (1824-1874)",
        description: "compositor y poeta",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Peter_cornelius.jpg/40px-Peter_cornelius.jpg"
      },
       {
        value: "j/jo/johann-fischer-von-waldheim-57802.html",
        label: "Johann Fischer von Waldheim (1771-1853)",
        description: "anatomista, entomólogo y paleontólogo alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Fischer_von_Waldheim_1771-1853.jpg/40px-Fischer_von_Waldheim_1771-1853.jpg"
      },
       {
        value: "p/pa/paul-eluard-152176.html",
        label: "Paul Éluard (1895-1952)",
        description: "biografía, poeta francés que cultivó de manera significativa el dadaísmo y el surrealismo",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Paul_Eluard_vers_1911.jpg/40px-Paul_Eluard_vers_1911.jpg"
      },
       {
        value: "m/ma/marcel-pagnol-236630.html",
        label: "Marcel Pagnol (1895-1974)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Marcel_Pagnol_1931.jpg/40px-Marcel_Pagnol_1931.jpg"
      },
       {
        value: "a/ad/adam-weishaupt-159481.html",
        label: "Adam Weishaupt (1748-1830)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Johann_Adam_Weishaupt.jpg/40px-Johann_Adam_Weishaupt.jpg"
      },
       {
        value: "e/er/erich-muhsam-61722.html",
        label: "Erich Mühsam (1878-1934)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Bundesarchiv_Bild_146-1981-003-08%2C_Erich_M%C3%BChsam.jpg/40px-Bundesarchiv_Bild_146-1981-003-08%2C_Erich_M%C3%BChsam.jpg"
      },
       {
        value: "t/ta/tarjei-vesaas-381443.html",
        label: "Tarjei Vesaas (1897-1970)",
        description: "poeta noruego",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Tarjei_Vesaas.jpg/40px-Tarjei_Vesaas.jpg"
      },
       {
        value: "g/gu/gustav-freytag-58811.html",
        label: "Gustav Freytag (1816-1895)",
        description: "dramaturgo y novelista alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Gustav_Freytag_by_Karl_Stauffer-Bern_1886-1887.jpg/40px-Gustav_Freytag_by_Karl_Stauffer-Bern_1886-1887.jpg"
      },
       {
        value: "j/jo/johan-ludvig-runeberg-215339.html",
        label: "Johan Ludvig Runeberg (1804-1877)",
        description: "poeta finlandés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/J._L._Runeberg_1849.jpg/40px-J._L._Runeberg_1849.jpg"
      },
       {
        value: "p/pe/percy-fawcett-370705.html",
        label: "Percy Fawcett (1867-1925)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/PercyFawcett.jpg/40px-PercyFawcett.jpg"
      },
       {
        value: "k/ka/karl-kraus-44328.html",
        label: "Karl Kraus (1874-1936)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Karl_Kraus.jpg/40px-Karl_Kraus.jpg"
      },
       {
        value: "h/ha/harriet-beecher-stowe-102513.html",
        label: "Harriet Beecher Stowe (1811-1896)",
        description: "escritora abolicionista estadounidense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Beecher-Stowe.jpg/40px-Beecher-Stowe.jpg"
      },
       {
        value: "c/ca/carl-joseph-schroter-87046.html",
        label: "Carl Joseph Schröter (1855-1939)",
        description: "botánico suizo",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/ETH-BIB-Schr%C3%B6ter%2C_Carl_%281855-1939%29-Portrait-Portr_06453.tif_%28cropped%29.jpg/40px-ETH-BIB-Schr%C3%B6ter%2C_Carl_%281855-1939%29-Portrait-Portr_06453.tif_%28cropped%29.jpg"
      },
       {
        value: "s/sa/sabina-spielrein-232336.html",
        label: "Sabina Spielrein (1885-1942)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Sabina_Spielrein.jpg/40px-Sabina_Spielrein.jpg"
      },
       {
        value: "j/je/jeanne-marie-leprince-de-beaumont-466788.html",
        label: "Jeanne-Marie Leprince de Beaumont (1711-1780)",
        description: "Jeanne-Marie Leprince de Beaumont",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Jeanne-Marie_Leprince_de_Beaumont.jpg/40px-Jeanne-Marie_Leprince_de_Beaumont.jpg"
      },
       {
        value: "a/an/antonio-carlo-napoleone-gallenga-204932.html",
        label: "Antonio Carlo Napoleone Gallenga (1810-1895)",
        description: "autor italiano",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Antonio_Gallenga.jpg/40px-Antonio_Gallenga.jpg"
      },
       {
        value: "j/ju/juhani-aho-348623.html",
        label: "Juhani Aho (1861-1921)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Juhani_Aho.jpg/40px-Juhani_Aho.jpg"
      },
       {
        value: "r/re/resat-nuri-guntekin-379595.html",
        label: "Resat Nuri Güntekin (1889-1956)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Re%C5%9Fat_Nuri_G%C3%BCntekin.jpg/40px-Re%C5%9Fat_Nuri_G%C3%BCntekin.jpg"
      },
       {
        value: "o/ot/ottilie-assing-98643.html",
        label: "Ottilie Assing (1819-1884)",
        description: "política alemana",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/2009-05-28-assing_ottilie.jpg/40px-2009-05-28-assing_ottilie.jpg"
      },
       {
        value: "n/ni/nikolai-leskov-209004.html",
        label: "Nikolái Leskov (1831-1895)",
        description: "escritor y periodista ruso",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Serov_Leskov.jpg/40px-Serov_Leskov.jpg"
      },
       {
        value: "d/di/dionisos-solomos-166172.html",
        label: "Dionisos Solomós (1798-1857)",
        description: "poeta griego",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Solomos_portrait_4.jpg/40px-Solomos_portrait_4.jpg"
      },
       {
        value: "j/jo/johannes-von-muller-116032.html",
        label: "Johannes von Müller (1752-1809)",
        description: "historiador suizo",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/MuellerJ.jpg/40px-MuellerJ.jpg"
      },
       {
        value: "g/gi/giacomo-casanova-83321.html",
        label: "Giacomo Casanova (1725-1798)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Casanova_ritratto.jpg/40px-Casanova_ritratto.jpg"
      },
       {
        value: "e/ed/edmond-about-361004.html",
        label: "Edmond About (1828-1885)",
        description: "escritor francés, novelista y autor cómico",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Edmond_About_BNF_Gallica.jpg/40px-Edmond_About_BNF_Gallica.jpg"
      },
       {
        value: "j/ja/james-weldon-johnson-478450.html",
        label: "James Weldon Johnson (1871-1938)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Jamesweldonjohnson.jpg/40px-Jamesweldonjohnson.jpg"
      },
       {
        value: "s/se/serguei-aleksandrovich-buturlin-72677.html",
        label: "Serguéi Aleksándrovich Buturlín (1872-1938)",
        description: "ornitólogo ruso",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/SA_Buturlin.jpg/40px-SA_Buturlin.jpg"
      },
       {
        value: "l/le/leandro-fernandez-de-moratin-351132.html",
        label: "Leandro Fernández de Moratín (1760-1828)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Leandro_Fern%C3%A1ndez_de_Morat%C3%ADn.jpg/40px-Leandro_Fern%C3%A1ndez_de_Morat%C3%ADn.jpg"
      },
       {
        value: "f/fe/felicia-hemans-272537.html",
        label: "Felicia Hemans (1793-1835)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Felicia_Hemans_2.jpg/40px-Felicia_Hemans_2.jpg"
      },
       {
        value: "m/ma/mathilde-wesendonck-63265.html",
        label: "Mathilde Wesendonck (1828-1902)",
        description: "poetisa alemana",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Mathilde_Wesendonck_by_Karl_Ferdinand_Sohn%2C_1850.jpg/40px-Mathilde_Wesendonck_by_Karl_Ferdinand_Sohn%2C_1850.jpg"
      },
       {
        value: "s/st/stephane-mallarme-767.html",
        label: "Stéphane Mallarmé (1842-1898)",
        description: "poeta francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Mallarme.jpg/40px-Mallarme.jpg"
      },
       {
        value: "m/mo/moritz-august-von-thummel-70443.html",
        label: "Moritz August von Thümmel (1738-1817)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Moritz_august_von_thuemmel.jpg/40px-Moritz_august_von_thuemmel.jpg"
      },
       {
        value: "f/fr/frances-hodgson-burnett-276028.html",
        label: "Frances Hodgson Burnett (1849-1924)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Frances_Burnett.jpg/40px-Frances_Burnett.jpg"
      },
       {
        value: "g/gu/gustav-noske-57353.html",
        label: "Gustav Noske (1868-1946)",
        description: "político alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Bundesarchiv_Bild_102-14240%2C_Gustav_Noske.jpg/40px-Bundesarchiv_Bild_102-14240%2C_Gustav_Noske.jpg"
      },
       {
        value: "e/em/emil-hacha-156502.html",
        label: "Emil Hácha (1872-1945)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Emil_H%C3%A1cha.jpg/40px-Emil_H%C3%A1cha.jpg"
      },
       {
        value: "a/al/aloisia-kirschner-446713.html",
        label: "Aloisia Kirschner (1854-1934)",
        description: "escritora austríaca",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Schubin_ossip.jpg/40px-Schubin_ossip.jpg"
      },
       {
        value: "a/an/angel-cruchaga-santa-maria-116409.html",
        label: "Ángel Cruchaga Santa María (1893-1964)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/%C3%81ngel_Cruchaga_Santa_Mar%C3%ADa.jpg/40px-%C3%81ngel_Cruchaga_Santa_Mar%C3%ADa.jpg"
      },
       {
        value: "c/ce/cesare-lombroso-202420.html",
        label: "Cesare Lombroso (1835-1909)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/C_Lombroso.jpg/40px-C_Lombroso.jpg"
      },
       {
        value: "s/sh/sherwood-anderson-233898.html",
        label: "Sherwood Anderson (1876-1941)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Sherwood_Anderson_%281933%29.jpg/40px-Sherwood_Anderson_%281933%29.jpg"
      },
       {
        value: "a/ar/arnold-schonberg-154770.html",
        label: "Arnold Schönberg (1874-1951)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Arnold_Schoenberg_la_1948.jpg/40px-Arnold_Schoenberg_la_1948.jpg"
      },
       {
        value: "e/eu/eulalia-de-borbon-240311.html",
        label: "Eulalia de Borbón (1864-1958)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Infanta_Eulalia_of_Spain.jpg/40px-Infanta_Eulalia_of_Spain.jpg"
      },
       {
        value: "i/ir/iris-tree-276440.html",
        label: "Iris Tree (1897-1968)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Modigliani_-_Female_nude_%28Iris_Tree%29.jpg/40px-Modigliani_-_Female_nude_%28Iris_Tree%29.jpg"
      },
       {
        value: "r/ru/rudolf-christoph-eucken-47695.html",
        label: "Rudolf Christoph Eucken (1846-1926)",
        description: "filósofo alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Rudolf_Christoph_Eucken.jpg/40px-Rudolf_Christoph_Eucken.jpg"
      },
       {
        value: "a/ab/abel-bonnard-318391.html",
        label: "Abel Bonnard (1883-1968)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Abel_Bonnard_1933.jpg/40px-Abel_Bonnard_1933.jpg"
      },
       {
        value: "j/jo/johan-ludvig-heiberg-402274.html",
        label: "Johan Ludvig Heiberg (1791-1860)",
        description: "poeta y dramaturgo danés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/J_L_Heiberg.jpg/40px-J_L_Heiberg.jpg"
      },
       {
        value: "h/ho/horatio-alger-453251.html",
        label: "Horatio Alger (1832-1899)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Horatio_Alger_Jr.jpg/40px-Horatio_Alger_Jr.jpg"
      },
       {
        value: "b/be/bertha-fernandez-reguero-18456.html",
        label: "Bertha Fernandez Reguero (1843-1914)",
        description: "pacifista y escritora austríaca",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Bertha-von-Suttner-1906.jpg/40px-Bertha-von-Suttner-1906.jpg"
      },
       {
        value: "a/al/aleksandr-kuprin-271457.html",
        label: "Aleksandr Kuprin (1870-1938)",
        description: "escritor ruso",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Alexander_Ivanovich_Kuprin_7.jpg/40px-Alexander_Ivanovich_Kuprin_7.jpg"
      },
       {
        value: "b/ba/baronesa-barbara-von-krudener-63784.html",
        label: "Baronesa Barbara von Krüdener (1764-1824)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/KauffmannKruedener.jpg/40px-KauffmannKruedener.jpg"
      },
       {
        value: "a/al/alexander-kaufmann-77270.html",
        label: "Alexander Kaufmann (1817-1893)",
        description: "escritor alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Alexander_Kaufmann.jpg/40px-Alexander_Kaufmann.jpg"
      },
       {
        value: "z/zi/ziya-pasha-207009.html",
        label: "Ziya Pasha (1825-1880)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Abdul_Hamid_Zia_Pasha.jpg/40px-Abdul_Hamid_Zia_Pasha.jpg"
      },
       {
        value: "r/ro/robert-blum-214977.html",
        label: "Robert Blum (1807-1848)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Portrait_of_Robert_Blum_by_August_Hunger.jpg/40px-Portrait_of_Robert_Blum_by_August_Hunger.jpg"
      },
       {
        value: "n/no/norbert-jacques-75835.html",
        label: "Norbert Jacques (1880-1954)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Norbert_Jacques_by_Waldemar_Flaig_1927.jpg/40px-Norbert_Jacques_by_Waldemar_Flaig_1927.jpg"
      },
       {
        value: "a/al/alexander-of-wurttemberg-76263.html",
        label: "Alexander of Württemberg (1801-1844)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Alexander_von_W%C3%BCrttemberg_mit_Hund.jpg/40px-Alexander_von_W%C3%BCrttemberg_mit_Hund.jpg"
      },
       {
        value: "g/ge/george-macdonald-368519.html",
        label: "George MacDonald (1824-1905)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/George_Macdonald.jpg/40px-George_Macdonald.jpg"
      },
       {
        value: "s/sh/sheridan-le-fanu-326467.html",
        label: "Sheridan Le Fanu (1814-1873)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/LeFanu.jpg/40px-LeFanu.jpg"
      },
       {
        value: "e/el/elinor-glyn-447240.html",
        label: "Elinor Glyn (1864-1943)",
        description: "Novelista y guionista británica",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Elinor_Glyn_02.jpg/40px-Elinor_Glyn_02.jpg"
      },
       {
        value: "j/jo/jose-zorrilla-331863.html",
        label: "José Zorrilla (1817-1893)",
        description: "poeta y dramaturgo español",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Jose_zorrilla.jpg/40px-Jose_zorrilla.jpg"
      },
       {
        value: "j/jo/johann-heinrich-voss-62188.html",
        label: "Johann Heinrich Voss (1751-1826)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Johann_Heinrich_Voss_%28Sch%C3%B6ner%29.jpg/40px-Johann_Heinrich_Voss_%28Sch%C3%B6ner%29.jpg"
      },
       {
        value: "j/jo/johann-baptist-von-schweitzer-69022.html",
        label: "Johann Baptist von Schweitzer (1833-1875)",
        description: "político y sindicalista alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Johann_Baptist_von_Schweitzer.jpg/40px-Johann_Baptist_von_Schweitzer.jpg"
      },
       {
        value: "j/jo/jozsef-katona-149415.html",
        label: "József Katona (1791-1830)",
        description: "escritor húngaro",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Katona_J%C3%B3zsef_Barab%C3%A1s.jpg/40px-Katona_J%C3%B3zsef_Barab%C3%A1s.jpg"
      },
       {
        value: "e/ed/eduard-baltzer-71586.html",
        label: "Eduard Baltzer (1814-1887)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Eduard_Baltzer.jpg/40px-Eduard_Baltzer.jpg"
      },
       {
        value: "s/sa/salvatore-cammarano-343560.html",
        label: "Salvatore Cammarano (1801-1852)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Salvadore_Cammarano.jpg/40px-Salvadore_Cammarano.jpg"
      },
       {
        value: "m/ma/magnus-jacob-crusenstolpe-204801.html",
        label: "Magnus Jacob Crusenstolpe (1795-1865)",
        description: "historiador sueco",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Magnus_Jakob_Crusenstolpe_1824.jpg/40px-Magnus_Jakob_Crusenstolpe_1824.jpg"
      },
       {
        value: "c/ce/cesare-cantu-138832.html",
        label: "Cesare Cantù (1804-1895)",
        description: "historiador italiano",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Ritratto_di_Cesare_Cant%C3%B9_%281804-1895%29.jpg/40px-Ritratto_di_Cesare_Cant%C3%B9_%281804-1895%29.jpg"
      },
       {
        value: "j/ju/jules-laforgue-380275.html",
        label: "Jules Laforgue (1860-1887)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Jules_Laforgue_by_Vallotton.jpg/40px-Jules_Laforgue_by_Vallotton.jpg"
      },
       {
        value: "v/vl/vladimir-obruchev-359568.html",
        label: "Vladímir Óbruchev (1863-1956)",
        description: "Geólogo ruso de la etapa soviética",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/1930s-ObruchevVA.jpg/40px-1930s-ObruchevVA.jpg"
      },
       {
        value: "m/ma/margherita-sarfatti-261041.html",
        label: "Margherita Sarfatti (1880-1961)",
        description: "escritora, periodista y crítica de arte italiana",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Margherita_Sarfatti.jpg/40px-Margherita_Sarfatti.jpg"
      },
       {
        value: "c/ca/carl-spitteler-226525.html",
        label: "Carl Spitteler (1845-1924)",
        description: "escritor suizo",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Carl_spitteler_1905.jpg/40px-Carl_spitteler_1905.jpg"
      },
       {
        value: "n/ni/nikolai-aseev-460329.html",
        label: "Nikolai Aseev (1889-1963)",
        description: "escritor ruso",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Nikolay_Aseev.jpg/40px-Nikolay_Aseev.jpg"
      },
       {
        value: "l/la/laura-elizabeth-ingalls-wilder-237514.html",
        label: "Laura Elizabeth Ingalls Wilder (1867-1957)",
        description: "novelista estadounidense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Laura_Ingalls_Wilder.jpg/40px-Laura_Ingalls_Wilder.jpg"
      },
       {
        value: "g/gi/giacomo-leopardi-172599.html",
        label: "Giacomo Leopardi (1798-1837)",
        description: "poeta, filósofo y escritor italiano",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Leopardi%2C_Giacomo_%281798-1837%29_-_ritr._A_Ferrazzi%2C_Recanati%2C_casa_Leopardi.jpg/40px-Leopardi%2C_Giacomo_%281798-1837%29_-_ritr._A_Ferrazzi%2C_Recanati%2C_casa_Leopardi.jpg"
      },
       {
        value: "m/ma/margaret-fuller-257953.html",
        label: "Margaret Fuller (1810-1850)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/FullerDaguerreotype.jpg/40px-FullerDaguerreotype.jpg"
      },
       {
        value: "o/oc/octave-mirbeau-23441.html",
        label: "Octave Mirbeau (1848-1917)",
        description: "escritor francés, periodista, crítico de arte, autor de novelas, de obras teatrales y de cuentos",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Octave_Mirbeau.jpg/40px-Octave_Mirbeau.jpg"
      },
       {
        value: "m/mi/mijail-petrovich-artsibashev-448143.html",
        label: "Mijaíl Petróvich Artsibáshev (1878-1927)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Mikhail_Petrovich_Artsybashev.jpg/40px-Mikhail_Petrovich_Artsybashev.jpg"
      },
       {
        value: "g/ge/george-bacovia-301391.html",
        label: "George Bacovia (1881-1957)",
        description: "escritor rumano",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/George_Bacovia.jpg/40px-George_Bacovia.jpg"
      },
       {
        value: "z/za/zalman-shazar-299100.html",
        label: "Zalman Shazar (1889-1974)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Zalman_Shazar.jpg/40px-Zalman_Shazar.jpg"
      },
       {
        value: "e/eu/eugene-viollet-le-duc-272912.html",
        label: "Eugène Viollet-le-Duc (1814-1879)",
        description: "arquitecto francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Eugene_viollet_le_duc.jpg/40px-Eugene_viollet_le_duc.jpg"
      },
       {
        value: "w/wi/william-waldorf-astor-vizconde-astor-326229.html",
        label: "William Waldorf Astor, Vizconde Astor (1848-1919)",
        description: "político estadounidense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/William_Waldorf_Astor.jpg/40px-William_Waldorf_Astor.jpg"
      },
       {
        value: "h/he/henry-fielding-34190.html",
        label: "Henry Fielding (1707-1754)",
        description: "novelista y dramaturgo inglés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Fielding.jpg/40px-Fielding.jpg"
      },
       {
        value: "k/ka/kazimierz-nowak-310139.html",
        label: "Kazimierz Nowak (1897-1937)",
        description: "fotógrafo polaco",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Kazimierz_Nowak.jpg/40px-Kazimierz_Nowak.jpg"
      },
       {
        value: "r/ra/ramon-maria-del-valle-inclan-311001.html",
        label: "Ramón María del Valle-Inclán (1866-1936)",
        description: "escritor español",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Ram%C3%B3n_Mar%C3%ADa_del_Valle_Incl%C3%A1n%2C_de_Audouard.jpg/40px-Ram%C3%B3n_Mar%C3%ADa_del_Valle_Incl%C3%A1n%2C_de_Audouard.jpg"
      },
       {
        value: "c/co/count-franz-pocci-454099.html",
        label: "Count Franz Pocci (1807-1876)",
        description: "artista alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Franz_von_Pocci.jpg/40px-Franz_von_Pocci.jpg"
      },
       {
        value: "j/j-/j-r-r-tolkien-892.html",
        label: "J. R. R. Tolkien (1892-1973)",
        description: "escritor, poeta, filólogo y profesor universitario británico",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Tolkien_1916.jpg/40px-Tolkien_1916.jpg"
      },
       {
        value: "m/mi/mijail-saltykov-shchedrin-211785.html",
        label: "Mijaíl Saltykov-Shchedrín (1826-1889)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Kramskoj_-_saltykov-schedrin.jpg/40px-Kramskoj_-_saltykov-schedrin.jpg"
      },
       {
        value: "h/he/henry-miller-187765.html",
        label: "Henry Miller (1891-1980)",
        description: "novelista estadounidense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Henry_Miller_1940.jpg/40px-Henry_Miller_1940.jpg"
      },
       {
        value: "a/an/anthony-hope-457287.html",
        label: "Anthony Hope (1863-1933)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Anthony_Hope_Hawkins_by_Alfred_Ellis_%26_Walery.jpg/40px-Anthony_Hope_Hawkins_by_Alfred_Ellis_%26_Walery.jpg"
      },
       {
        value: "m/mi/milos-crnjanski-31215.html",
        label: "Miloš Crnjanski (1893-1977)",
        description: "poeta expresionista del modernismo serbio, autor y diplomático",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Milo%C5%A1_Crnjanski_1914.jpg/40px-Milo%C5%A1_Crnjanski_1914.jpg"
      },
       {
        value: "t/th/theodore-gill-468128.html",
        label: "Theodore Gill (1837-1914)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Theodore_Nicholas_Gill.jpg/40px-Theodore_Nicholas_Gill.jpg"
      },
       {
        value: "d/do/douglas-hyde-237951.html",
        label: "Douglas Hyde (1860-1949)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Douglas_Hyde_-_Project_Gutenberg_eText_19028.jpg/40px-Douglas_Hyde_-_Project_Gutenberg_eText_19028.jpg"
      },
       {
        value: "f/fe/felix-dahn-61456.html",
        label: "Felix Dahn (1834-1912)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Felix_Dahn.jpg/40px-Felix_Dahn.jpg"
      },
       {
        value: "a/an/annette-von-droste-hulshoff-57307.html",
        label: "Annette von Droste-Hülshoff (1797-1848)",
        description: "escritora alemana",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Droste-H%C3%BClshoff_2.jpg/40px-Droste-H%C3%BClshoff_2.jpg"
      },
       {
        value: "a/ad/adolphe-thiers-5738.html",
        label: "Adolphe Thiers (1797-1877)",
        description: "político e historiador francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Louis_Adolphe_Thiers_2.jpg/40px-Louis_Adolphe_Thiers_2.jpg"
      },
       {
        value: "f/fr/frances-trollope-271961.html",
        label: "Frances Trollope (1780-1863)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Frances_Trollope_by_Auguste_Hervieu.jpg/40px-Frances_Trollope_by_Auguste_Hervieu.jpg"
      },
       {
        value: "m/ma/margaret-kennedy-369526.html",
        label: "Margaret Kennedy (1896-1967)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Margaret_Moore_Kennedy_%281896-1967%29.jpg/40px-Margaret_Moore_Kennedy_%281896-1967%29.jpg"
      },
       {
        value: "j/ju/juana-de-ibarbourou-237914.html",
        label: "Juana de Ibarbourou (1892-1979)",
        description: "escritora uruguayua",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Juana_de_Ibarborurou.jpg/40px-Juana_de_Ibarborurou.jpg"
      },
       {
        value: "l/lo/louise-otto-peters-71507.html",
        label: "Louise Otto-Peters (1819-1895)",
        description: "escritora y activista",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Louise_Otto-Peters.jpg/40px-Louise_Otto-Peters.jpg"
      },
       {
        value: "g/g-/g-k-chesterton-183167.html",
        label: "G. K. Chesterton (1874-1936)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Gilbert_Chesterton.jpg/40px-Gilbert_Chesterton.jpg"
      },
       {
        value: "f/fr/friedrich-holderlin-75889.html",
        label: "Friedrich Hölderlin (1770-1843)",
        description: "poeta alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Friedrich_hoelderlin.jpg/40px-Friedrich_hoelderlin.jpg"
      },
       {
        value: "a/ad/adolfo-caminha-199644.html",
        label: "Adolfo Caminha (1867-1897)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Adolfo_Caminha_II.jpg/40px-Adolfo_Caminha_II.jpg"
      },
       {
        value: "g/gi/giuseppe-mazzini-187336.html",
        label: "Giuseppe Mazzini (1805-1872)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Giuseppe_Mazzini.jpg/40px-Giuseppe_Mazzini.jpg"
      },
       {
        value: "s/se/serguei-aksakov-315188.html",
        label: "Serguéi Aksákov (1791-1859)",
        description: "escritor ruso",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Perov_Axakov.jpg/40px-Perov_Axakov.jpg"
      },
       {
        value: "c/ch/charles-wesley-349070.html",
        label: "Charles Wesley (1707-1788)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Charles_Wesley.jpg/40px-Charles_Wesley.jpg"
      },
       {
        value: "f/fr/francisco-acuna-de-figueroa-496493.html",
        label: "Francisco Acuña de Figueroa (1791-1864)",
        description: "Escritor uruguayo",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Francisco_Acu%C3%B1a_de_Figueroa_01.jpg/40px-Francisco_Acu%C3%B1a_de_Figueroa_01.jpg"
      },
       {
        value: "r/ri/richard-wagner-1511.html",
        label: "Richard Wagner (1813-1883)",
        description: "músico compositor alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/RichardWagner.jpg/40px-RichardWagner.jpg"
      },
       {
        value: "j/je/jean-lambert-tallien-464513.html",
        label: "Jean-Lambert Tallien (1767-1820)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Jean-Lambert_Tallien.jpg/40px-Jean-Lambert_Tallien.jpg"
      },
       {
        value: "j/je/jean-lorrain-127984.html",
        label: "Jean Lorrain (1855-1906)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Lorrain%2C_Jean.jpg/40px-Lorrain%2C_Jean.jpg"
      },
       {
        value: "o/os/oscar-hammerstein-ii-319693.html",
        label: "Oscar Hammerstein II (1895-1960)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Hammerstein.jpg/40px-Hammerstein.jpg"
      },
       {
        value: "l/l-/l-l-zamenhoff-11758.html",
        label: "L. L. Zamenhoff (1859-1917)",
        description: "creador del idioma esperanto",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/1908-kl-t-zamenhof.jpg/40px-1908-kl-t-zamenhof.jpg"
      },
       {
        value: "o/ol/oliver-onions-450446.html",
        label: "Oliver Onions (1873-1961)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Oliver_Onions_portrait.jpg/40px-Oliver_Onions_portrait.jpg"
      },
       {
        value: "g/ge/geo-milev-114450.html",
        label: "Geo Milev (1895-1925)",
        description: "escritor búlgaro",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Geo_Milev.jpg/40px-Geo_Milev.jpg"
      },
       {
        value: "k/ka/karl-von-eckartshausen-67274.html",
        label: "Karl von Eckartshausen (1752-1803)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Karl_von_Eckartshausen.jpg/40px-Karl_von_Eckartshausen.jpg"
      },
       {
        value: "r/re/rebecca-latimer-felton-271243.html",
        label: "Rebecca Latimer Felton (1835-1930)",
        description: "político estadounidense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Rebecca_L._Felton.jpg/40px-Rebecca_L._Felton.jpg"
      },
       {
        value: "a/ax/axel-munthe-41580.html",
        label: "Axel Munthe (1857-1949)",
        description: "médico sueco",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Axel_Munthe.jpg/40px-Axel_Munthe.jpg"
      },
       {
        value: "d/do/dorothy-richardson-447268.html",
        label: "Dorothy Richardson (1873-1957)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Bedford_gardens.jpg/40px-Bedford_gardens.jpg"
      },
       {
        value: "f/fr/friedrich-gerhard-rohlfs-63209.html",
        label: "Friedrich Gerhard Rohlfs (1831-1896)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Friedrich_Gerhard_Rohlfs.jpg/40px-Friedrich_Gerhard_Rohlfs.jpg"
      },
       {
        value: "m/mo/moa-martinson-275893.html",
        label: "Moa Martinson (1890-1964)",
        description: "escritora sueca",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Statyn_av_Moa_Martinsson_Norrk%C3%B6ping_april_2006b.jpg/40px-Statyn_av_Moa_Martinsson_Norrk%C3%B6ping_april_2006b.jpg"
      },
       {
        value: "j/jo/johann-wilhelm-von-archenholz-170029.html",
        label: "Johann Wilhelm von Archenholz (1741-1812)",
        description: "historiador y militar prusiano",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Johann_Wilhelm_von_Archenholz.jpg/40px-Johann_Wilhelm_von_Archenholz.jpg"
      },
       {
        value: "a/am/amelia-edwards-437356.html",
        label: "Amelia Edwards (1831-1892)",
        description: "novelista, periodista, viajera y egiptóloga británica",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Amelia_B_Edwards_1890_in_Amerika.jpg/40px-Amelia_B_Edwards_1890_in_Amerika.jpg"
      },
       {
        value: "h/he/herman-heijermans-36771.html",
        label: "Herman Heijermans (1864-1924)",
        description: "escritor neerlandés de origen judío",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Herman_Heijermans_Anefo.jpg/40px-Herman_Heijermans_Anefo.jpg"
      },
       {
        value: "t/to/tome-de-barros-queiros-331429.html",
        label: "Tomé de Barros Queirós (1872-1925)",
        description: "político portugués",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Tom%C3%A9_Jos%C3%A9_de_Barros_Queir%C3%B3s.jpg/40px-Tom%C3%A9_Jos%C3%A9_de_Barros_Queir%C3%B3s.jpg"
      },
       {
        value: "m/ma/maximiliano-de-baviera-434826.html",
        label: "Maximiliano de Baviera (1808-1888)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Max_de_Baviera.jpg/40px-Max_de_Baviera.jpg"
      },
       {
        value: "e/eu/eugene-scribe-319261.html",
        label: "Eugène Scribe (1791-1861)",
        description: "Dramaturgo i libretista francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Scribe_Eug%C3%A8ne_2.jpg/40px-Scribe_Eug%C3%A8ne_2.jpg"
      },
       {
        value: "e/el/elizabeth-von-arnim-76189.html",
        label: "Elizabeth von Arnim (1866-1941)",
        description: "escritora australiana",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Elizabeth_von_arnim_pencil_sketch.jpg/40px-Elizabeth_von_arnim_pencil_sketch.jpg"
      },
       {
        value: "e/em/emile-boutmy-274965.html",
        label: "Émile Boutmy (1835-1906)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/%C3%89mile_Boutmy.jpg/40px-%C3%89mile_Boutmy.jpg"
      },
       {
        value: "a/au/august-senoa-347672.html",
        label: "August Šenoa (1838-1881)",
        description: "novelista croata",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/August_%C5%A0enoa.jpg/40px-August_%C5%A0enoa.jpg"
      },
       {
        value: "m/ma/mary-kingsley-235525.html",
        label: "Mary Kingsley (1862-1900)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Mary_Kingsley01.jpg/40px-Mary_Kingsley01.jpg"
      },
       {
        value: "j/jo/jose-hernandez-377623.html",
        label: "José Hernández (1837-1886)",
        description: "militar, periodista, poeta ,político",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Jos%C3%A9_Hern%C3%A1ndez.jpg/40px-Jos%C3%A9_Hern%C3%A1ndez.jpg"
      },
       {
        value: "e/eu/eugen-sutermeister-116802.html",
        label: "Eugen Sutermeister (1862-1931)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Eugen_Sutermeister.jpg/40px-Eugen_Sutermeister.jpg"
      },
       {
        value: "n/ni/nicolas-i-de-montenegro-283255.html",
        label: "Nicolás I de Montenegro (1841-1921)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Kingnicholas.jpg/40px-Kingnicholas.jpg"
      },
       {
        value: "r/ra/radclyffe-hall-237639.html",
        label: "Radclyffe Hall (1880-1943)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Charles_Buchel_-_Radclyffe_Hall.jpg/40px-Charles_Buchel_-_Radclyffe_Hall.jpg"
      },
       {
        value: "a/a-/a-j-cronin-179059.html",
        label: "A. J. Cronin (1896-1981)",
        description: "novelista y médico escocés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/A._J._Cronin_1931b.jpg/40px-A._J._Cronin_1931b.jpg"
      },
       {
        value: "m/ma/madame-de-genlis-297778.html",
        label: "Madame de Genlis (1746-1830)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Fath-Madame_Stephanie_de_Genlis.jpg/40px-Fath-Madame_Stephanie_de_Genlis.jpg"
      },
       {
        value: "j/jo/jose-echegaray-127349.html",
        label: "José Echegaray (1832-1916)",
        description: "matemático, ingeniero, escritor y político español",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Jos%C3%A9_Echegaray_y_Eizaguirre.jpg/40px-Jos%C3%A9_Echegaray_y_Eizaguirre.jpg"
      },
       {
        value: "a/am/amos-bronson-alcott-474235.html",
        label: "Amos Bronson Alcott (1799-1888)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Bronson_Alcott_from_NYPL_gallery.jpg/40px-Bronson_Alcott_from_NYPL_gallery.jpg"
      },
       {
        value: "i/in/innokienti-annienski-25997.html",
        label: "Innokienti Ánnienski (1855-1909)",
        description: "poeta, crítico y traductor ruso",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Innokenty_Annensky.jpg/40px-Innokenty_Annensky.jpg"
      },
       {
        value: "h/ho/ho-chi-minh-36014.html",
        label: "Hồ Chí Minh (1890-1969)",
        description: "poeta, político comunista vietnamita, y presidente (1954 - 1969) de la República Democrática de Vietnam",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Ho_Chi_Minh_1946.jpg/40px-Ho_Chi_Minh_1946.jpg"
      },
       {
        value: "r/ri/richard-horne-346599.html",
        label: "Richard Horne (1802-1884)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Richard_Henry_%28or_Hengist%29_Horne_by_Margaret_Gillies.jpg/40px-Richard_Henry_%28or_Hengist%29_Horne_by_Margaret_Gillies.jpg"
      },
       {
        value: "e/eu/eugenia-marlitt-62950.html",
        label: "Eugenia Marlitt (1825-1887)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Die_Gartenlaube_%281887%29_b_473.jpg/40px-Die_Gartenlaube_%281887%29_b_473.jpg"
      },
       {
        value: "v/va/valery-larbaud-135640.html",
        label: "Valery Larbaud (1881-1957)",
        description: "escritor francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Valery_Larbaud.jpg/40px-Valery_Larbaud.jpg"
      },
       {
        value: "j/jo/jonas-lie-469681.html",
        label: "Jonas Lie (1833-1908)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Jonas_Lie_%28engraving_by_H_P_Hansen%29.jpg/40px-Jonas_Lie_%28engraving_by_H_P_Hansen%29.jpg"
      },
       {
        value: "s/si/simun-av-skari-468058.html",
        label: "Símun av Skarði (1872-1942)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Faroe_stamp_364_rasmussen_and_skardi.jpg/40px-Faroe_stamp_364_rasmussen_and_skardi.jpg"
      },
       {
        value: "e/ed/edith-sitwell-259921.html",
        label: "Edith Sitwell (1887-1964)",
        description: "poetisa británica",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Edithsitwell.jpg/40px-Edithsitwell.jpg"
      },
       {
        value: "j/ja/jack-london-45765.html",
        label: "Jack London (1876-1916)",
        description: "escritor estadounidense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Jack_London_young.jpg/40px-Jack_London_young.jpg"
      },
       {
        value: "o/ol/olympe-de-gouges-206972.html",
        label: "Olympe de Gouges (1749-1793)",
        description: "dramaturga  y activista política francesa",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Marie-Olympe-de-Gouges.jpg/40px-Marie-Olympe-de-Gouges.jpg"
      },
       {
        value: "p/pa/paul-robeson-273233.html",
        label: "Paul Robeson (1898-1976)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Paul_Robeson_1942.jpg/40px-Paul_Robeson_1942.jpg"
      },
       {
        value: "b/bu/buffalo-bill-202285.html",
        label: "Buffalo Bill (1846-1917)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Cody-Buffalo-Bill-LOC.jpg/40px-Cody-Buffalo-Bill-LOC.jpg"
      },
       {
        value: "j/ja/james-brooke-441276.html",
        label: "James Brooke (1803-1868)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Sir_James_Brooke_%281847%29_by_Francis_Grant.jpg/40px-Sir_James_Brooke_%281847%29_by_Francis_Grant.jpg"
      },
       {
        value: "h/he/henrik-pontoppidan-225554.html",
        label: "Henrik Pontoppidan (1857-1943)",
        description: "novelista y cuentista danés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Henrik_Pontoppidan_1917.jpg/40px-Henrik_Pontoppidan_1917.jpg"
      },
       {
        value: "w/wi/wilhelm-walloth-91858.html",
        label: "Wilhelm Walloth (1854-1932)",
        description: "escritor alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Wilhelm_Walloth.jpg/40px-Wilhelm_Walloth.jpg"
      },
       {
        value: "f/fr/friedrich-muller-481491.html",
        label: "Friedrich Müller (1749-1825)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/FriedrichMueller.jpg/40px-FriedrichMueller.jpg"
      },
       {
        value: "a/al/aleksei-konstantinovich-tolstoi-212575.html",
        label: "Alekséi Konstantínovich Tolstói (1817-1875)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Brullov_AKTolstoy.jpg/40px-Brullov_AKTolstoy.jpg"
      },
       {
        value: "s/sh/sharat-chandra-chattopadhyay-404622.html",
        label: "Sharat Chandra Chattopadhyay (1876-1938)",
        description: "escritor indio",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Sharat_Chandra_Chatterji.jpg/40px-Sharat_Chandra_Chatterji.jpg"
      },
       {
        value: "l/lo/louis-couperus-437798.html",
        label: "Louis Couperus (1863-1923)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Couperus.jpg/40px-Couperus.jpg"
      },
       {
        value: "t/tr/tristan-tzara-16409.html",
        label: "Tristan Tzara (1896-1963)",
        description: "poeta y ensayista francorrumano",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Tristan_Tzara.jpg/40px-Tristan_Tzara.jpg"
      },
       {
        value: "p/pi/pierre-louys-334958.html",
        label: "Pierre Louÿs (1870-1925)",
        description: "escritor francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Pierre_Lou%C3%BFs%2C_portrait.jpg/40px-Pierre_Lou%C3%BFs%2C_portrait.jpg"
      },
       {
        value: "e/eu/eugene-oneill-93157.html",
        label: "Eugene O'Neill (1888-1953)",
        description: "dramaturgo estadounidense (1888-1953)",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Eugene_O%27Neill_1936.jpg/40px-Eugene_O%27Neill_1936.jpg"
      },
       {
        value: "j/ja/jay-hambidge-251841.html",
        label: "Jay Hambidge (1867-1924)",
        description: "artista estadounidense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/At_the_Tomb_of_Omar_Khayyam_-_by_Jay_Hambidge.jpg/40px-At_the_Tomb_of_Omar_Khayyam_-_by_Jay_Hambidge.jpg"
      },
       {
        value: "j/ja/james-naismith-188962.html",
        label: "James Naismith (1861-1939)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/James_Naismith_with_a_basketball.jpg/40px-James_Naismith_with_a_basketball.jpg"
      },
       {
        value: "a/al/alfred-douglas-460660.html",
        label: "Alfred Douglas (1870-1945)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Lord_Alfred_Douglas_by_George_Charles_Beresford_%281903%29.jpg/40px-Lord_Alfred_Douglas_by_George_Charles_Beresford_%281903%29.jpg"
      },
       {
        value: "l/lu/luigi-capuana-468662.html",
        label: "Luigi Capuana (1839-1915)",
        description: "periodista italiano",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Luigi_Capuana.jpg/40px-Luigi_Capuana.jpg"
      },
       {
        value: "s/si/silvio-pellico-435151.html",
        label: "Silvio Pellico (1789-1854)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Silvio_Pellico.jpg/40px-Silvio_Pellico.jpg"
      },
       {
        value: "v/va/valeri-briusov-316374.html",
        label: "Valeri Briúsov (1873-1924)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Vrubel_Bryusov.jpg/40px-Vrubel_Bryusov.jpg"
      },
       {
        value: "j/jo/jose-maria-eca-de-queiros-316327.html",
        label: "José Maria Eça de Queirós (1845-1900)",
        description: "escritor portugués",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/E%C3%A7a_de_Queir%C3%B3s_c._1882.jpg/40px-E%C3%A7a_de_Queir%C3%B3s_c._1882.jpg"
      },
       {
        value: "r/ri/richard-brinsley-sheridan-352725.html",
        label: "Richard Brinsley Sheridan (1751-1816)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Richard_Sheridan.jpg/40px-Richard_Sheridan.jpg"
      },
       {
        value: "k/ka/karl-von-holtei-66388.html",
        label: "Karl von Holtei (1798-1880)",
        description: "actor alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Holtei.jpg/40px-Holtei.jpg"
      },
       {
        value: "e/ed/edmond-privat-12571.html",
        label: "Edmond Privat (1889-1962)",
        description: "esperantista de origen suizo",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Privat.jpg/40px-Privat.jpg"
      },
       {
        value: "a/ad/adam-kazimierz-czartoryski-349948.html",
        label: "Adam Kazimierz Czartoryski (1734-1823)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Adam_Kazimierz_Czartoryski_2.jpg/40px-Adam_Kazimierz_Czartoryski_2.jpg"
      },
       {
        value: "g/ga/gaetano-mosca-351527.html",
        label: "Gaetano Mosca (1858-1941)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/GaetanoMosca.jpg/40px-GaetanoMosca.jpg"
      },
       {
        value: "s/se/semion-budionni-242474.html",
        label: "Semión Budionni (1883-1973)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Semyon_Budyonny.jpg/40px-Semyon_Budyonny.jpg"
      },
       {
        value: "m/mo/moriz-seeler-404744.html",
        label: "Moriz Seeler (1896-1942)",
        description: "Escritor alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/M._Seeler.jpg/40px-M._Seeler.jpg"
      },
       {
        value: "s/sh/shumei-okawa-385236.html",
        label: "Shūmei Ōkawa (1886-1957)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Okawa_Shumei_c.jpg/40px-Okawa_Shumei_c.jpg"
      },
       {
        value: "s/si/simon-schwendener-115641.html",
        label: "Simon Schwendener (1829-1919)",
        description: "botánico suizo",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/PSM_V50_D329_Simon_Schwendemer_professor_of_botany_berlin.jpg/40px-PSM_V50_D329_Simon_Schwendemer_professor_of_botany_berlin.jpg"
      },
       {
        value: "h/he/heinrich-eduard-jacob-66812.html",
        label: "Heinrich Eduard Jacob (1889-1967)",
        description: "periodista de Alemania",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Heinrich_Eduard_Jacob_%281889%E2%80%931967%29.jpg/40px-Heinrich_Eduard_Jacob_%281889%E2%80%931967%29.jpg"
      },
       {
        value: "g/ge/georg-gottfried-gervinus-61648.html",
        label: "Georg Gottfried Gervinus (1805-1871)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Georg_Gottfried_Gervinus%2C_gross.jpg/40px-Georg_Gottfried_Gervinus%2C_gross.jpg"
      },
       {
        value: "m/mi/mijail-lermontov-46599.html",
        label: "Mijaíl Lérmontov (1814-1841)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Mikhail_lermontov.jpg/40px-Mikhail_lermontov.jpg"
      },
       {
        value: "e/er/ernst-hanfstaengl-58051.html",
        label: "Ernst Hanfstaengl (1887-1975)",
        description: "persona próxima al entorno de Adolf Hitler",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Bundesarchiv_Bild_183-R41953%2C_Ernst_Hanfstaengl.jpg/40px-Bundesarchiv_Bild_183-R41953%2C_Ernst_Hanfstaengl.jpg"
      },
       {
        value: "l/lu/ludwig-bechstein-66379.html",
        label: "Ludwig Bechstein (1801-1860)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Ludwig-Bechstein.jpg/40px-Ludwig-Bechstein.jpg"
      },
       {
        value: "r/ro/rosalia-de-castro-464264.html",
        label: "Rosalía de Castro (1837-1885)",
        description: "poetisa y novelista española",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Rosal%C3%ADa_Castro_de_Murgu%C3%ADa_por_Luis_Sellier.jpg/40px-Rosal%C3%ADa_Castro_de_Murgu%C3%ADa_por_Luis_Sellier.jpg"
      },
       {
        value: "m/ma/marceline-desbordes-valmore-466987.html",
        label: "Marceline Desbordes-Valmore (1786-1859)",
        description: "poetisa francesa",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Marceline_Desbordes-Valmore.jpg/40px-Marceline_Desbordes-Valmore.jpg"
      },
       {
        value: "a/an/andre-chenier-295548.html",
        label: "André Chénier (1762-1794)",
        description: "poeta francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Andr%C3%A9_Ch%C3%A9nier_%28by_Joseph-Beno%C3%AEt_Suv%C3%A9e%29.jpg/40px-Andr%C3%A9_Ch%C3%A9nier_%28by_Joseph-Beno%C3%AEt_Suv%C3%A9e%29.jpg"
      },
       {
        value: "t/th/thomas-edward-lawrence-170596.html",
        label: "Thomas Edward Lawrence (1888-1935)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Te_lawrence.jpg/40px-Te_lawrence.jpg"
      },
       {
        value: "h/ho/hovhannes-tumanyan-380797.html",
        label: "Hovhannes Tumanyan (1869-1923)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Tumanyan_%282%29.jpg/40px-Tumanyan_%282%29.jpg"
      },
       {
        value: "m/ma/matthias-claudius-77338.html",
        label: "Matthias Claudius (1740-1815)",
        description: "periodista de Alemania",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Portrait_claudius.jpg/40px-Portrait_claudius.jpg"
      },
       {
        value: "l/lo/lord-acton-311778.html",
        label: "Lord Acton (1834-1902)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Lord_Emerich_Edward_Dalberg_Acton.jpg/40px-Lord_Emerich_Edward_Dalberg_Acton.jpg"
      },
       {
        value: "o/ot/otto-weininger-78513.html",
        label: "Otto Weininger (1880-1903)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/OttoWeiningerspring1903.jpg/40px-OttoWeiningerspring1903.jpg"
      },
       {
        value: "p/pa/paul-fechter-89970.html",
        label: "Paul Fechter (1880-1958)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Paul_Fechter.jpg/40px-Paul_Fechter.jpg"
      },
       {
        value: "a/am/amedee-achard-482162.html",
        label: "Amédée Achard (1814-1875)",
        description: "novelista francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Louis_Am%C3%A9d%C3%A9e_Achard_by_Nadar.jpg/40px-Louis_Am%C3%A9d%C3%A9e_Achard_by_Nadar.jpg"
      },
       {
        value: "g/ge/gershom-scholem-138850.html",
        label: "Gershom Scholem (1897-1982)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Gershom_Scholem_1935.jpg/40px-Gershom_Scholem_1935.jpg"
      },
       {
        value: "t/th/thomas-jefferson-11812.html",
        label: "Thomas Jefferson (1743-1826)",
        description: "tercer presidente de los Estados Unidos de América",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Thomas_Jefferson_by_Rembrandt_Peale_1805_cropped.jpg/40px-Thomas_Jefferson_by_Rembrandt_Peale_1805_cropped.jpg"
      },
       {
        value: "a/al/aleksei-pisemski-470371.html",
        label: "Alekséi Písemski (1821-1881)",
        description: "novelista ruso",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Pisemsky_by_Repin.jpg/40px-Pisemsky_by_Repin.jpg"
      },
       {
        value: "j/jo/johanna-elberskirchen-121500.html",
        label: "Johanna Elberskirchen (1864-1943)",
        description: "escritora alemana",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Johanna_Elberskirchen_um_1905.jpg/40px-Johanna_Elberskirchen_um_1905.jpg"
      },
       {
        value: "e/ez/ezequiel-martinez-estrada-464737.html",
        label: "Ezequiel Martínez Estrada (1895-1964)",
        description: "escritor argentino",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/EzequielMart%C3%ADnezEstrada.jpg/40px-EzequielMart%C3%ADnezEstrada.jpg"
      },
       {
        value: "c/co/colmar-von-der-goltz-57760.html",
        label: "Colmar von der Goltz (1843-1916)",
        description: "general y teórico militar alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Colmar_Freiherr_von_der_Goltz.jpg/40px-Colmar_Freiherr_von_der_Goltz.jpg"
      },
       {
        value: "f/fr/friedrich-wolf-77447.html",
        label: "Friedrich Wolf (1888-1953)",
        description: "escritor alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Bundesarchiv_Bild_183-14811-0013%2C_Berlin%2C_3._Deutscher_Schriftsteller-Kongress_cropped.jpg/40px-Bundesarchiv_Bild_183-14811-0013%2C_Berlin%2C_3._Deutscher_Schriftsteller-Kongress_cropped.jpg"
      },
       {
        value: "g/ge/georges-courteline-51107.html",
        label: "Georges Courteline (1858-1929)",
        description: "escritor y dramaturgo",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Georges_Courteline_1921.jpg/40px-Georges_Courteline_1921.jpg"
      },
       {
        value: "e/ed/edna-st-vincent-millay-62134.html",
        label: "Edna St. Vincent Millay (1892-1950)",
        description: "poetisa estadounidense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Edna_St._Vincent_Millay.jpg/40px-Edna_St._Vincent_Millay.jpg"
      },
       {
        value: "r/ri/ricarda-huch-60785.html",
        label: "Ricarda Huch (1864-1947)",
        description: "poeta alemana, filósofa e historiadora",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Ricarda_Huch.jpg/40px-Ricarda_Huch.jpg"
      },
       {
        value: "j/jo/joseph-dhaussonville-345822.html",
        label: "Joseph d'Haussonville (1809-1884)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Joseph_d%27Haussonville.jpg/40px-Joseph_d%27Haussonville.jpg"
      },
       {
        value: "j/jo/joseph-alexander-altsheler-201858.html",
        label: "Joseph Alexander Altsheler (1862-1919)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Altsheler.jpg/40px-Altsheler.jpg"
      },
       {
        value: "j/ja/james-guillaume-116617.html",
        label: "James Guillaume (1844-1916)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Guillaume_james.jpg/40px-Guillaume_james.jpg"
      },
       {
        value: "a/aa/aasmund-olavsson-vinje-303687.html",
        label: "Aasmund Olavsson Vinje (1818-1870)",
        description: "escritor, poeta y periodista noruego",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Vinje.jpg/40px-Vinje.jpg"
      },
       {
        value: "g/ge/georg-herwegh-57945.html",
        label: "Georg Herwegh (1817-1875)",
        description: "poeta alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Herwegh%2C_Georg.jpg/40px-Herwegh%2C_Georg.jpg"
      },
       {
        value: "t/th/thomas-abbt-60582.html",
        label: "Thomas Abbt (1738-1766)",
        description: "escritor, filósofo, matemático, teólogo y profesor alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Thomas_Abbt.jpg/40px-Thomas_Abbt.jpg"
      },
       {
        value: "l/lu/ludwig-buchner-62831.html",
        label: "Ludwig Büchner (1824-1899)",
        description: "filósofo alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Ludwig_B%C3%BCchner.jpg/40px-Ludwig_B%C3%BCchner.jpg"
      },
       {
        value: "e/em/emil-aarestrup-350408.html",
        label: "Emil Aarestrup (1800-1856)",
        description: "poeta danés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Emil_Aarestrup.jpg/40px-Emil_Aarestrup.jpg"
      },
       {
        value: "a/al/alfred-doblin-57389.html",
        label: "Alfred Döblin (1878-1957)",
        description: "escritor",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Alfred_Doeblin_1930a.jpg/40px-Alfred_Doeblin_1930a.jpg"
      },
       {
        value: "a/ah/ahmad-kasravi-400678.html",
        label: "Ahmad Kasraví (1890-1946)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Kasravi.jpg/40px-Kasravi.jpg"
      },
       {
        value: "v/va/vasili-zhukovski-157623.html",
        label: "Vasili Zhukovski (1783-1852)",
        description: "poeta ruso",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Zhukovsky_1815.jpg/40px-Zhukovsky_1815.jpg"
      },
       {
        value: "e/el/ella-wheeler-wilcox-448376.html",
        label: "Ella Wheeler Wilcox (1850-1919)",
        description: "poeta y periodista estadounidense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/E-W-Wilcox.jpg/40px-E-W-Wilcox.jpg"
      },
       {
        value: "j/ja/jacinto-verdaguer-379290.html",
        label: "Jacinto Verdaguer (1845-1902)",
        description: "poeta catalán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Jacint_Verdaguer_140x190.jpg/40px-Jacint_Verdaguer_140x190.jpg"
      },
       {
        value: "a/al/alphonse-allais-371905.html",
        label: "Alphonse Allais (1854-1905)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Alphonse_Allais_Late_19th_Century_Posters.jpg/40px-Alphonse_Allais_Late_19th_Century_Posters.jpg"
      },
       {
        value: "o/ot/otto-von-munchhausen-63880.html",
        label: "Otto von Münchhausen (1716-1774)",
        description: "botánico alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Otto_von_M%C3%BCnchhausen.jpg/40px-Otto_von_M%C3%BCnchhausen.jpg"
      },
       {
        value: "e/em/emma-lazarus-240959.html",
        label: "Emma Lazarus (1849-1887)",
        description: "poetisa estadounidense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Emma_Lazarus.jpg/40px-Emma_Lazarus.jpg"
      },
       {
        value: "r/ro/robert-louis-stevenson-1512.html",
        label: "Robert Louis Stevenson (1850-1894)",
        description: "novelista, poeta y ensayista escocés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Robert_Louis_Stevenson_Knox_Series.jpg/40px-Robert_Louis_Stevenson_Knox_Series.jpg"
      },
       {
        value: "l/la/lama-anagarika-govinda-67297.html",
        label: "Lama Anagarika Govinda (1898-1985)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Lama_Govinda_in_an_internment_camp_during_World_War_II.jpg/40px-Lama_Govinda_in_an_internment_camp_during_World_War_II.jpg"
      },
       {
        value: "j/ja/james-oliver-curwood-468156.html",
        label: "James Oliver Curwood (1878-1927)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/James_Oliver_Curwood_by_James_Montgomery_Flagg.jpg/40px-James_Oliver_Curwood_by_James_Montgomery_Flagg.jpg"
      },
       {
        value: "g/ge/georg-heym-61601.html",
        label: "Georg Heym (1887-1912)",
        description: "escritor alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Georg_Heym.jpg/40px-Georg_Heym.jpg"
      },
       {
        value: "f/fr/franz-xaver-haberl-66955.html",
        label: "Franz Xaver Haberl (1840-1910)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/FXHaberl.jpg/40px-FXHaberl.jpg"
      },
       {
        value: "a/al/alexander-duncker-72963.html",
        label: "Alexander Duncker (1813-1897)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Duncker%2C_Alexander_%281813-1897%29.jpg/40px-Duncker%2C_Alexander_%281813-1897%29.jpg"
      },
       {
        value: "v/vl/vladimir-odoyevski-468067.html",
        label: "Vladímir Odóyevski (1804-1869)",
        description: "filósofo ruso",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Vladimir_Odoyevsky_1.jpg/40px-Vladimir_Odoyevsky_1.jpg"
      },
       {
        value: "j/ju/juan-arany-316556.html",
        label: "Juan Arany (1817-1882)",
        description: "escritor húngaro",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Barabas-arany.jpg/40px-Barabas-arany.jpg"
      },
       {
        value: "a/al/alain-275003.html",
        label: "Alain (1868-1951)",
        description: "filósofo francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/%C3%89mile_Chartier_portrait.jpg/40px-%C3%89mile_Chartier_portrait.jpg"
      },
       {
        value: "t/th/theodor-kittelsen-380085.html",
        label: "Theodor Kittelsen (1857-1914)",
        description: "artista noruego",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Kittelsen_av_krohg_1892.jpg/40px-Kittelsen_av_krohg_1892.jpg"
      },
       {
        value: "a/ad/adolf-heyduk-362154.html",
        label: "Adolf Heyduk (1835-1923)",
        description: "poeta y escritor checo",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Jan_Vil%C3%ADmek_-_Adolf_Heyduk.jpg/40px-Jan_Vil%C3%ADmek_-_Adolf_Heyduk.jpg"
      },
       {
        value: "n/ni/nikos-kazantzakis-214622.html",
        label: "Nikos Kazantzakis (1883-1957)",
        description: "escritor griego",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Nikos_Kazantzakis.jpg/40px-Nikos_Kazantzakis.jpg"
      },
       {
        value: "f/fe/federico-von-der-trenck-84363.html",
        label: "Federico von der Trenck (1726-1794)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Friedrich-Freiherr-von-der-Trenck.jpg/40px-Friedrich-Freiherr-von-der-Trenck.jpg"
      },
       {
        value: "i/io/ion-luca-caragiale-315132.html",
        label: "Ion Luca Caragiale (1852-1912)",
        description: "dramaturgo, periodista y escritor de cuentos cortos rumano",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Ion_Luca_Caragiale_-_Foto03.jpg/40px-Ion_Luca_Caragiale_-_Foto03.jpg"
      },
       {
        value: "b/ba/baron-eligius-franz-joseph-von-munch-bellinghausen-78939.html",
        label: "Baron Eligius Franz Joseph von Münch-Bellinghausen (1806-1871)",
        description: "escritor austríaco",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Die_Gartenlaube_%281856%29_b_249.jpg/40px-Die_Gartenlaube_%281856%29_b_249.jpg"
      },
       {
        value: "n/na/nancy-cunard-275793.html",
        label: "Nancy Cunard (1896-1965)",
        description: "Escritora y activista política",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Nancy_Cunard_%28um_1928%29.jpg/40px-Nancy_Cunard_%28um_1928%29.jpg"
      },
       {
        value: "d/do/dorothy-wordsworth-448992.html",
        label: "Dorothy Wordsworth (1771-1855)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Dorothy-wordsworth.jpg/40px-Dorothy-wordsworth.jpg"
      },
       {
        value: "z/zi/ziya-gokalp-83275.html",
        label: "Ziya Gökalp (1876-1924)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Ziya_Bey_G%C3%B6kalp.jpg/40px-Ziya_Bey_G%C3%B6kalp.jpg"
      },
       {
        value: "h/hr/hristo-botev-347118.html",
        label: "Hristo Botev (1848-1876)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Hristo-Botev-circa-1875.jpg/40px-Hristo-Botev-circa-1875.jpg"
      },
       {
        value: "l/la/laura-permon-272690.html",
        label: "Laura Permon (1784-1838)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Laure_Junot.jpg/40px-Laure_Junot.jpg"
      },
       {
        value: "w/wi/wilhelm-weitling-215808.html",
        label: "Wilhelm Weitling (1808-1871)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/WilhelmWeitling.jpg/40px-WilhelmWeitling.jpg"
      },
       {
        value: "l/le/leonor-de-almeida-portugal-275748.html",
        label: "Leonor de Almeida Portugal (1750-1839)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Leonor-de-Almeida-Portugal_Marquesa-de-Alorna.jpg/40px-Leonor-de-Almeida-Portugal_Marquesa-de-Alorna.jpg"
      },
       {
        value: "w/wi/william-balfour-baikie-183567.html",
        label: "William Balfour Baikie (1824-1864)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Baikie_explorer.jpg/40px-Baikie_explorer.jpg"
      },
       {
        value: "c/ch/charles-reade-247473.html",
        label: "Charles Reade (1814-1884)",
        description: "escritor británico",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Portrait_of_Charles_Reade.jpg/40px-Portrait_of_Charles_Reade.jpg"
      },
       {
        value: "e/el/eleonora-marx-61412.html",
        label: "Eleonora Marx (1855-1898)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Eleanor_Marx.jpg/40px-Eleanor_Marx.jpg"
      },
       {
        value: "m/ma/maria-carolina-de-battenberg-67441.html",
        label: "María Carolina de Battenberg (1852-1923)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/MarieBattErbSch.jpg/40px-MarieBattErbSch.jpg"
      },
       {
        value: "m/ma/mary-gilmore-455761.html",
        label: "Mary Gilmore (1865-1962)",
        description: "poetisa australiana",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/StateLibQld_1_100448.jpg/40px-StateLibQld_1_100448.jpg"
      },
       {
        value: "l/li/lima-barreto-383442.html",
        label: "Lima Barreto (1881-1922)",
        description: "escritor brasileño",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/LimaBarreto.jpg/40px-LimaBarreto.jpg"
      },
       {
        value: "r/ro/roberto-payro-438924.html",
        label: "Roberto Payró (1867-1928)",
        description: "escritor argentino",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/RobertoPayro.jpg/40px-RobertoPayro.jpg"
      },
       {
        value: "j/jo/jovan-jovanovic-zmaj-362089.html",
        label: "Jovan Jovanovic Zmaj (1833-1904)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Jova_Jovanovic_Zmaj.jpg/40px-Jova_Jovanovic_Zmaj.jpg"
      },
       {
        value: "d/d-/d-h-lawrence-34970.html",
        label: "D. H. Lawrence (1885-1930)",
        description: "escritor inglés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/DH_Lawrence_1906.jpg/40px-DH_Lawrence_1906.jpg"
      },
       {
        value: "m/ma/marianne-moore-278495.html",
        label: "Marianne Moore (1887-1972)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Marianne_Moore_1948_hires.jpg/40px-Marianne_Moore_1948_hires.jpg"
      },
       {
        value: "h/he/henri-barbusse-18404.html",
        label: "Henri Barbusse (1873-1935)",
        description: "escritor, periodista y militante comunista francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/%D0%90%D0%BD%D1%80%D0%B8_%D0%91%D0%B0%D1%80%D0%B1%D1%8E%D1%81_%281928%29.jpg/40px-%D0%90%D0%BD%D1%80%D0%B8_%D0%91%D0%B0%D1%80%D0%B1%D1%8E%D1%81_%281928%29.jpg"
      },
       {
        value: "o/ot/otto-ludwig-77321.html",
        label: "Otto Ludwig (1813-1865)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Fotothek_df_rp-c_0200071_Triebischtal-Semmelsberg._Otto_Ludwig%2C_Portr%C3%A4t%2C_Zeichnung_%28Stadtarchiv_Mei%C3%9Fen%2C_Graphiksammlung%29.jpg/40px-Fotothek_df_rp-c_0200071_Triebischtal-Semmelsberg._Otto_Ludwig%2C_Portr%C3%A4t%2C_Zeichnung_%28Stadtarchiv_Mei%C3%9Fen%2C_Graphiksammlung%29.jpg"
      },
       {
        value: "m/ma/max-heindel-183192.html",
        label: "Max Heindel (1865-1919)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Max_Heindel.jpg/40px-Max_Heindel.jpg"
      },
       {
        value: "a/au/august-schleicher-76686.html",
        label: "August Schleicher (1821-1868)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/August_Schleicher.jpg/40px-August_Schleicher.jpg"
      },
       {
        value: "v/vi/victorien-sardou-354828.html",
        label: "Victorien Sardou (1831-1908)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Victorien_Sardou_%281831-1908%29.jpg/40px-Victorien_Sardou_%281831-1908%29.jpg"
      },
       {
        value: "m/ma/max-jacob-156214.html",
        label: "Max Jacob (1876-1944)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Jacob%2C_Max_%281876-1944%29_-_1934_-_Foto_Carl_van_Vechten%2C_Library_of_Congress.jpg/40px-Jacob%2C_Max_%281876-1944%29_-_1934_-_Foto_Carl_van_Vechten%2C_Library_of_Congress.jpg"
      },
       {
        value: "l/ly/lydia-becker-276466.html",
        label: "Lydia Becker (1827-1890)",
        description: "astrónoma, bióloga, escritora y activista británica",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Lydia_becker.jpg/40px-Lydia_becker.jpg"
      },
       {
        value: "b/bu/buster-keaton-103949.html",
        label: "Buster Keaton (1895-1966)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Busterkeaton_edit.jpg/40px-Busterkeaton_edit.jpg"
      },
       {
        value: "a/an/antioj-kantemir-372115.html",
        label: "Antioj Kantemir (1708-1744)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Poet_Prince_Antiokh_Kantemir.jpg/40px-Poet_Prince_Antiokh_Kantemir.jpg"
      },
       {
        value: "j/jo/joao-simoes-lopes-neto-363887.html",
        label: "João Simões Lopes Neto (1865-1916)",
        description: "escritor brasileño",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Jo%C3%A3o_Sim%C3%B5es_Lopes_Neto.jpg/40px-Jo%C3%A3o_Sim%C3%B5es_Lopes_Neto.jpg"
      },
       {
        value: "n/ni/nikolai-frederik-severin-grundtvig-331893.html",
        label: "Nikolai Frederik Severin Grundtvig (1783-1872)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/N-f-s-grundtvig-portr%C3%A6t.jpg/40px-N-f-s-grundtvig-portr%C3%A6t.jpg"
      },
       {
        value: "m/ma/marc-bloch-156585.html",
        label: "Marc Bloch (1886-1944)",
        description: "historiador francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Marc_Bloch.jpg/40px-Marc_Bloch.jpg"
      },
       {
        value: "a/al/alessandro-manzoni-1064.html",
        label: "Alessandro Manzoni (1785-1873)",
        description: "poeta y escritor italiano",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Francesco_Hayez_040.jpg/40px-Francesco_Hayez_040.jpg"
      },
       {
        value: "l/lu/luciano-bonaparte-151098.html",
        label: "Luciano Bonaparte (1775-1840)",
        description: "hermano de Napoleón Bonaparte",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Fabre_-_Lucien_Bonaparte.jpg/40px-Fabre_-_Lucien_Bonaparte.jpg"
      },
       {
        value: "e/ed/edward-rydz-smigy-295688.html",
        label: "Edward Rydz-Śmigły (1886-1941)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Edward_Rydz-Smigly.jpg/40px-Edward_Rydz-Smigly.jpg"
      },
       {
        value: "h/ho/horacio-quiroga-16864.html",
        label: "Horacio Quiroga (1878-1937)",
        description: "cuentista, poeta y dramaturgo uruguayo",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Quiroga1900a.jpg/40px-Quiroga1900a.jpg"
      },
       {
        value: "t/th/thomas-robert-bugeaud-349167.html",
        label: "Thomas Robert Bugeaud (1784-1849)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Bugeaud%2C_Thomas_-_2.jpg/40px-Bugeaud%2C_Thomas_-_2.jpg"
      },
       {
        value: "c/ca/carl-zuckmayer-76820.html",
        label: "Carl Zuckmayer (1896-1977)",
        description: "guionista de cine de Alemania",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Bundesarchiv_Bild_146-2005-0008%2C_Carl_Zuckmayer.jpg/40px-Bundesarchiv_Bild_146-2005-0008%2C_Carl_Zuckmayer.jpg"
      },
       {
        value: "a/an/antonio-sardinha-461148.html",
        label: "António Sardinha (1888-1925)",
        description: "historiador portugués",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Antonio_Sardinha.jpg/40px-Antonio_Sardinha.jpg"
      },
       {
        value: "j/je/jean-pons-guillaume-viennet-205591.html",
        label: "Jean-Pons-Guillaume Viennet (1777-1868)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Viennet.jpg/40px-Viennet.jpg"
      },
       {
        value: "k/ke/kenneth-grahame-314897.html",
        label: "Kenneth Grahame (1859-1932)",
        description: "novelista británico",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/KennethGrahame.jpg/40px-KennethGrahame.jpg"
      },
       {
        value: "j/ja/james-thurber-124527.html",
        label: "James Thurber (1894-1961)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/James_Thurber_NYWTS.jpg/40px-James_Thurber_NYWTS.jpg"
      },
       {
        value: "r/ru/rudyard-kipling-34743.html",
        label: "Rudyard Kipling (1865-1936)",
        description: "escritor británico",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Kipling_nd.jpg/40px-Kipling_nd.jpg"
      },
       {
        value: "f/fe/felix-salten-163747.html",
        label: "Felix Salten (1869-1945)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Felix_Salten_1910.jpg/40px-Felix_Salten_1910.jpg"
      },
       {
        value: "v/vi/vicente-lopez-y-planes-441072.html",
        label: "Vicente López y Planes (1785-1856)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Vicente_Lopez_1860.jpg/40px-Vicente_Lopez_1860.jpg"
      },
       {
        value: "e/eu/euclides-da-cunha-470334.html",
        label: "Euclides da Cunha (1866-1909)",
        description: "escritor",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Euclides_da_Cunha.jpg/40px-Euclides_da_Cunha.jpg"
      },
       {
        value: "b/ba/basilius-von-ramdohr-215600.html",
        label: "Basilius von Ramdohr (1757-1822)",
        description: "periodista de Alemania",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/BasiliusvonRamdohr.jpg/40px-BasiliusvonRamdohr.jpg"
      },
       {
        value: "o/oc/octavian-goga-223414.html",
        label: "Octavian Goga (1881-1938)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/OctavianGoga.jpg/40px-OctavianGoga.jpg"
      },
       {
        value: "k/ka/kang-youwei-360135.html",
        label: "Kang Youwei (1858-1927)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Kangnanhai.jpg/40px-Kangnanhai.jpg"
      },
       {
        value: "l/lo/louis-aragon-4128.html",
        label: "Louis Aragon (1897-1982)",
        description: "poeta y novelista francés (1897-1982)",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Portrait_Aragon.jpg/40px-Portrait_Aragon.jpg"
      },
       {
        value: "a/al/alla-nazimova-234795.html",
        label: "Alla Nazimova (1879-1945)",
        description: "actriz estadounidense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/NazimovaDoll%27sHouse.jpg/40px-NazimovaDoll%27sHouse.jpg"
      },
       {
        value: "j/ja/jacques-pierre-brissot-314984.html",
        label: "Jacques Pierre Brissot (1754-1793)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Jacques_Pierre_Brissot_de_Warville.jpg/40px-Jacques_Pierre_Brissot_de_Warville.jpg"
      },
       {
        value: "f/fr/franz-grillparzer-154438.html",
        label: "Franz Grillparzer (1791-1872)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Grillparzer.jpg/40px-Grillparzer.jpg"
      },
       {
        value: "f/fe/felix-steiner-57580.html",
        label: "Felix Steiner (1896-1966)",
        description: "general de las SS",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Bundesarchiv_Bild_146-1973-138-14A%2C_Felix_Steiner.jpg/40px-Bundesarchiv_Bild_146-1973-138-14A%2C_Felix_Steiner.jpg"
      },
       {
        value: "h/ha/hara-takashi-315553.html",
        label: "Hara Takashi (1856-1921)",
        description: "político japonés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Takashi_Hara_posing.jpg/40px-Takashi_Hara_posing.jpg"
      },
       {
        value: "l/lo/lord-dunsany-458658.html",
        label: "Lord Dunsany (1878-1957)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Edward_Plunkett%2C_18th_Baron_Dunsany.jpg/40px-Edward_Plunkett%2C_18th_Baron_Dunsany.jpg"
      },
       {
        value: "j/je/jean-rhys-230598.html",
        label: "Jean Rhys (1890-1979)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Jean_Rhys_%28left%2C_in_hat%29_with_Mollie_Stoner%2C_Velthams%2C_1970s_B.jpg/40px-Jean_Rhys_%28left%2C_in_hat%29_with_Mollie_Stoner%2C_Velthams%2C_1970s_B.jpg"
      },
       {
        value: "g/gi/giovanni-verga-271814.html",
        label: "Giovanni Verga (1840-1922)",
        description: "escritor italiano",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Giovanni-Verga.jpg/40px-Giovanni-Verga.jpg"
      },
       {
        value: "a/an/anita-loos-272088.html",
        label: "Anita Loos (1889-1981)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Anita_Loos_-_Apr_May_1920_MP.jpg/40px-Anita_Loos_-_Apr_May_1920_MP.jpg"
      },
       {
        value: "h/he/herwarth-walden-62661.html",
        label: "Herwarth Walden (1878-1941)",
        description: "artista alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Emil_Orlik_Portrait_of_Herwarth_Walden.jpg/40px-Emil_Orlik_Portrait_of_Herwarth_Walden.jpg"
      },
       {
        value: "m/mi/mijail-bajtin-185375.html",
        label: "Mijaíl Bajtín (1895-1975)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Mikhail_bakhtin.jpg/40px-Mikhail_bakhtin.jpg"
      },
       {
        value: "a/au/august-wilhelm-ambros-265995.html",
        label: "August Wilhelm Ambros (1816-1876)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Ambros_August_Wilhelm_1862.jpg/40px-Ambros_August_Wilhelm_1862.jpg"
      },
       {
        value: "j/jo/johann-bernhard-basedow-60247.html",
        label: "Johann Bernhard Basedow (1723-1790)",
        description: "pedagogo alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/00.1.J.B.Basedow.jpg/40px-00.1.J.B.Basedow.jpg"
      },
       {
        value: "e/em/emile-male-286253.html",
        label: "Émile Mâle (1862-1954)",
        description: "historiador del arte francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/%C3%89mile_M%C3%A2le_1928.jpg/40px-%C3%89mile_M%C3%A2le_1928.jpg"
      },
       {
        value: "a/au/august-von-platen-hallermunde-62432.html",
        label: "August von Platen-Hallermünde (1796-1835)",
        description: "poeta alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/August_von_Platen_by_Moritz_Rugendas.jpg/40px-August_von_Platen_by_Moritz_Rugendas.jpg"
      },
       {
        value: "v/vi/victor-de-broglie-338386.html",
        label: "Victor de Broglie (1785-1870)",
        description: "político francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Victor%2C_3rd_duc_de_Broglie.jpg/40px-Victor%2C_3rd_duc_de_Broglie.jpg"
      },
       {
        value: "f/fu/fustel-de-coulanges-462597.html",
        label: "Fustel de Coulanges (1830-1889)",
        description: "historiador francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Fustel_de_Coulanges.jpg/40px-Fustel_de_Coulanges.jpg"
      },
       {
        value: "k/ko/konrad-fiedler-65764.html",
        label: "Konrad Fiedler (1841-1895)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Adolf_von_Hildebrand%2C_Konrad_Fiedler.jpg/40px-Adolf_von_Hildebrand%2C_Konrad_Fiedler.jpg"
      },
       {
        value: "c/ch/charles-bell-451727.html",
        label: "Charles Bell (1774-1842)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/CharlesBell001.jpg/40px-CharlesBell001.jpg"
      },
       {
        value: "t/th/theodor-busse-60472.html",
        label: "Theodor Busse (1897-1986)",
        description: "soldado, escritor alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Bundesarchiv_Bild_146-1971-033-33%2C_Lagebesprechung_im_Hauptquartier_der_Heeresgruppe_Weichsel.jpg/40px-Bundesarchiv_Bild_146-1971-033-33%2C_Lagebesprechung_im_Hauptquartier_der_Heeresgruppe_Weichsel.jpg"
      },
       {
        value: "a/al/albert-lortzing-154203.html",
        label: "Albert Lortzing (1801-1851)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Albert_Lortzing-Stahlstich.jpg/40px-Albert_Lortzing-Stahlstich.jpg"
      },
       {
        value: "l/le/leonhard-euler-7604.html",
        label: "Leonhard Euler (1707-1783)",
        description: "matemático nacido en Suiza",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Leonhard_Euler_2.jpg/40px-Leonhard_Euler_2.jpg"
      },
       {
        value: "a/ab/abilio-manuel-guerra-junqueiro-336918.html",
        label: "Abílio Manuel Guerra Junqueiro (1850-1923)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Guerra_junqueiro_%281%29_cropped.jpg/40px-Guerra_junqueiro_%281%29_cropped.jpg"
      },
       {
        value: "n/na/nathaniel-hawthorne-69339.html",
        label: "Nathaniel Hawthorne (1804-1864)",
        description: "novelista y cuentista estadounidense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Nathaniel_Hawthorne.jpg/40px-Nathaniel_Hawthorne.jpg"
      },
       {
        value: "s/st/stjepan-radic-347471.html",
        label: "Stjepan Radić (1871-1928)",
        description: "político croata",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Bundesarchiv_Bild_183-2010-0420-502%2C_Stefan_Radic%2C_cropped.jpg/40px-Bundesarchiv_Bild_183-2010-0420-502%2C_Stefan_Radic%2C_cropped.jpg"
      },
       {
        value: "m/ma/massimo-dazeglio-469134.html",
        label: "Massimo D'Azeglio (1798-1866)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Massimo_d%27Azeglio.jpg/40px-Massimo_d%27Azeglio.jpg"
      },
       {
        value: "s/si/sinaida-hippius-61940.html",
        label: "Sinaida Hippius (1869-1945)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Gippius_1910s.jpg/40px-Gippius_1910s.jpg"
      },
       {
        value: "v/vi/victor-klemperer-57442.html",
        label: "Victor Klemperer (1881-1960)",
        description: "intelectual alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Bundesarchiv_Bild_183-S90733%2C_Victor_Klemperer.jpg/40px-Bundesarchiv_Bild_183-S90733%2C_Victor_Klemperer.jpg"
      },
       {
        value: "a/al/alfredo-ottaviani-368201.html",
        label: "Alfredo Ottaviani (1890-1979)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/AlfredoOttaviani.jpg/40px-AlfredoOttaviani.jpg"
      },
       {
        value: "g/gi/giuseppe-giacosa-372032.html",
        label: "Giuseppe Giacosa (1847-1906)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Giacosa_Giuseppe.jpg/40px-Giacosa_Giuseppe.jpg"
      },
       {
        value: "m/ma/mary-wollstonecraft-101638.html",
        label: "Mary Wollstonecraft (1759-1797)",
        description: "Escritora, traductora, filósofa e historiadora de Gran Bretaña",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Mary_Wollstonecraft_by_John_Opie_%28c._1797%29.jpg/40px-Mary_Wollstonecraft_by_John_Opie_%28c._1797%29.jpg"
      },
       {
        value: "j/je/jeanne-julie-eleonore-de-lespinasse-450354.html",
        label: "Jeanne Julie Eleonore de Lespinasse (1732-1776)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Julie_de_Lespinasse.jpg/40px-Julie_de_Lespinasse.jpg"
      },
       {
        value: "c/ch/charlotte-von-ahlefeld-71561.html",
        label: "Charlotte von Ahlefeld (1781-1849)",
        description: "novelista alemana",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Charlotte_von_Ahlefeld.jpg/40px-Charlotte_von_Ahlefeld.jpg"
      },
       {
        value: "j/jo/john-stuart-mill-50020.html",
        label: "John Stuart Mill (1806-1873)",
        description: "filósofo, político y economista inglés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Stuart_Mill_G_F_Watts.jpg/40px-Stuart_Mill_G_F_Watts.jpg"
      },
       {
        value: "c/cl/claire-de-duras-462578.html",
        label: "Claire de Duras (1777-1828)",
        description: "escritora francesa",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Claire_de_Duras.jpg/40px-Claire_de_Duras.jpg"
      },
       {
        value: "v/vi/victoria-ocampo-72790.html",
        label: "Victoria Ocampo (1890-1979)",
        description: "escritora argentina",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Victoria_Ocampo_y_Sur.jpg/40px-Victoria_Ocampo_y_Sur.jpg"
      },
       {
        value: "c/co/colette-218679.html",
        label: "Colette (1873-1954)",
        description: "escritora francesa",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/SidonieGabrielleColette.jpg/40px-SidonieGabrielleColette.jpg"
      },
       {
        value: "g/ge/georg-trakl-78476.html",
        label: "Georg Trakl (1887-1914)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Georg_Trakl.jpg/40px-Georg_Trakl.jpg"
      },
       {
        value: "i/is/isabella-bird-288210.html",
        label: "Isabella Bird (1831-1904)",
        description: "exploradora británica",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Isabella_Bird.jpg/40px-Isabella_Bird.jpg"
      },
       {
        value: "j/je/jean-paul-marat-122290.html",
        label: "Jean-Paul Marat (1743-1793)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Jean-Paul_Marat_portre.jpg/40px-Jean-Paul_Marat_portre.jpg"
      },
       {
        value: "l/lo/lorenzo-da-ponte-268166.html",
        label: "Lorenzo da Ponte (1749-1838)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Lorenzo_da_Ponte.jpg/40px-Lorenzo_da_Ponte.jpg"
      },
       {
        value: "f/fr/fredrika-bremer-262145.html",
        label: "Fredrika Bremer (1801-1865)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_replica_or_study_of_Johan_Gustaf_Sandberg%27s_portrait_of_Fredrika_Bremer.jpg/40px-A_replica_or_study_of_Johan_Gustaf_Sandberg%27s_portrait_of_Fredrika_Bremer.jpg"
      },
       {
        value: "v/ve/vera-brittain-450802.html",
        label: "Vera Brittain (1893-1970)",
        description: "escritora y pacifista inglesa",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Vera_Brittain.jpg/40px-Vera_Brittain.jpg"
      },
       {
        value: "m/mu/muhammad-iqbal-484141.html",
        label: "Muhammad Iqbal (1877-1938)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Iqbal.jpg/40px-Iqbal.jpg"
      },
       {
        value: "t/th/thomas-mann-37030.html",
        label: "Thomas Mann (1875-1955)",
        description: "escritor alemán, premio Nobel de Literatura",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Thomas_Mann_1937.jpg/40px-Thomas_Mann_1937.jpg"
      },
       {
        value: "d/di/dietrich-eckart-60259.html",
        label: "Dietrich Eckart (1868-1923)",
        description: "político e ideólogo alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Dietrich_Eckart_01.jpg/40px-Dietrich_Eckart_01.jpg"
      },
       {
        value: "a/ad/adolf-brand-70900.html",
        label: "Adolf Brand (1874-1945)",
        description: "periodista de Alemania",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Adolf_Brand_ca._1930.jpg/40px-Adolf_Brand_ca._1930.jpg"
      },
       {
        value: "a/al/alvares-de-azevedo-250754.html",
        label: "Álvares de Azevedo (1831-1852)",
        description: "poeta, ensayista, cuentista y dramaturgo brasileño",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/%C3%81lvares_de_Azevedo.jpg/40px-%C3%81lvares_de_Azevedo.jpg"
      },
       {
        value: "c/ca/camilo-castelo-branco-365423.html",
        label: "Camilo Castelo Branco (1825-1890)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Camilo_Castelo_Branco.jpg/40px-Camilo_Castelo_Branco.jpg"
      },
       {
        value: "c/ca/carlo-collodi-199588.html",
        label: "Carlo Collodi (1826-1890)",
        description: "escritor italiano y cantante",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Carlo_Collodi.jpg/40px-Carlo_Collodi.jpg"
      },
       {
        value: "h/he/hermann-graf-keyserling-60690.html",
        label: "Hermann Graf Keyserling (1880-1946)",
        description: "filósofo, escritor alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Ikeysel001p1.jpg/40px-Ikeysel001p1.jpg"
      },
       {
        value: "f/fe/felice-romani-350103.html",
        label: "Felice Romani (1788-1865)",
        description: "escritor italiano",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Felice_Romani.jpg/40px-Felice_Romani.jpg"
      },
       {
        value: "f/fi/fiodor-tiutchev-37217.html",
        label: "Fiódor Tiútchev (1803-1873)",
        description: "poeta",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Tiutchev.jpg/40px-Tiutchev.jpg"
      },
       {
        value: "c/ch/christoph-martin-wieland-154010.html",
        label: "Christoph Martin Wieland (1733-1813)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Christoph_Martin_Wieland_by_Ferdinand_Jagemann_1805_Cut.jpg/40px-Christoph_Martin_Wieland_by_Ferdinand_Jagemann_1805_Cut.jpg"
      },
       {
        value: "n/ne/nelly-sachs-57074.html",
        label: "Nelly Sachs (1891-1970)",
        description: "escritora y poetisa alemana",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Nelly_Sachs_1910.jpg/40px-Nelly_Sachs_1910.jpg"
      },
       {
        value: "t/to/tomas-masaryk-78492.html",
        label: "Tomáš Masaryk (1850-1937)",
        description: "primer presidente de Checoeslovaquia",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/MasarykFotoPrvniPoselstviTGM.jpg/40px-MasarykFotoPrvniPoselstviTGM.jpg"
      },
       {
        value: "j/ju/julius-theodor-christian-ratzeburg-64655.html",
        label: "Julius Theodor Christian Ratzeburg (1801-1871)",
        description: "entomólogo alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Julius_Theodor_Christian_Ratzeburg.jpg/40px-Julius_Theodor_Christian_Ratzeburg.jpg"
      },
       {
        value: "a/ar/arthur-van-schendel-202355.html",
        label: "Arthur van Schendel (1874-1946)",
        description: "escritor neerlandés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Arthur_van_Schendel%2C_dubbelportret.jpg/40px-Arthur_van_Schendel%2C_dubbelportret.jpg"
      },
       {
        value: "b/br/bruno-frank-62133.html",
        label: "Bruno Frank (1887-1945)",
        description: "autor, poeta, dramaturgo y humanista alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Silberburgstra%C3%9Fe%2C_035.jpg/40px-Silberburgstra%C3%9Fe%2C_035.jpg"
      },
       {
        value: "s/sa/sarah-flower-adams-269879.html",
        label: "Sarah Flower Adams (1805-1848)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/SarahFlowerAdams.jpg/40px-SarahFlowerAdams.jpg"
      },
       {
        value: "k/ko/konstantino-kavafis-216980.html",
        label: "Konstantino Kavafis (1863-1933)",
        description: "poeta griego",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Cavafy1900.jpg/40px-Cavafy1900.jpg"
      },
       {
        value: "w/wi/william-blake-41513.html",
        label: "William Blake (1757-1827)",
        description: "poeta y pintor inglés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/William_Blake_by_Thomas_Phillips.jpg/40px-William_Blake_by_Thomas_Phillips.jpg"
      },
       {
        value: "j/jo/john-jacob-astor-iv-430672.html",
        label: "John Jacob Astor IV (1864-1912)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/John_Jacob_Astor_IVb.jpg/40px-John_Jacob_Astor_IVb.jpg"
      },
       {
        value: "s/st/stephen-born-96798.html",
        label: "Stephen Born (1824-1898)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/StephanBorn.jpg/40px-StephanBorn.jpg"
      },
       {
        value: "f/fr/friedrich-reinhold-kreutzwald-333900.html",
        label: "Friedrich Reinhold Kreutzwald (1803-1882)",
        description: "escritor estonio",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Kreutzwald-k%C3%B6ler.jpg/40px-Kreutzwald-k%C3%B6ler.jpg"
      },
       {
        value: "d/du/du-nguyen-313322.html",
        label: "Du Nguyễn (1765-1820)",
        description: "poeta vietnamita",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/T%C6%B0%E1%BB%A3ng_%C4%91%C3%A0i_c%E1%BB%A5_Nguy%E1%BB%85n_Du.jpg/40px-T%C6%B0%E1%BB%A3ng_%C4%91%C3%A0i_c%E1%BB%A5_Nguy%E1%BB%85n_Du.jpg"
      },
       {
        value: "w/wi/wilhelm-jensen-77444.html",
        label: "Wilhelm Jensen (1837-1911)",
        description: "escritor alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Wilhelm_Jensen_01.jpg/40px-Wilhelm_Jensen_01.jpg"
      },
       {
        value: "w/wi/william-maxwell-aitken-332454.html",
        label: "William Maxwell Aitken (1879-1964)",
        description: "político y escritor anglo-canadiense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Maxwell_Aitken_%28lord_Beaverbrook%29_during_the_Second_World_War_HU88386.jpg/40px-Maxwell_Aitken_%28lord_Beaverbrook%29_during_the_Second_World_War_HU88386.jpg"
      },
       {
        value: "a/al/albert-schweitzer-49325.html",
        label: "Albert Schweitzer (1875-1965)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Bundesarchiv_Bild_183-D0116-0041-019%2C_Albert_Schweitzer.jpg/40px-Bundesarchiv_Bild_183-D0116-0041-019%2C_Albert_Schweitzer.jpg"
      },
       {
        value: "c/ca/carl-jonas-love-almqvist-316381.html",
        label: "Carl Jonas Love Almqvist (1793-1866)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Carl_Jonas_Love_Almqvist_%28ca_1835%29_av_Carl_Peter_Mazer.jpg/40px-Carl_Jonas_Love_Almqvist_%28ca_1835%29_av_Carl_Peter_Mazer.jpg"
      },
       {
        value: "s/sa/sarah-josepha-hale-430639.html",
        label: "Sarah Josepha Hale (1788-1879)",
        description: "Escritora americana y  editora",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Sarah_Hale_portrait.jpg/40px-Sarah_Hale_portrait.jpg"
      },
       {
        value: "s/si/silvije-strahimir-kranjcevic-470704.html",
        label: "Silvije Strahimir Kranjčević (1835-1908)",
        description: "poeta croata",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Silvije_Strahimir_Kranjcevic.jpg/40px-Silvije_Strahimir_Kranjcevic.jpg"
      },
       {
        value: "a/ad/adalbert-stifter-168542.html",
        label: "Adalbert Stifter (1805-1868)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/A_Stifter.jpg/40px-A_Stifter.jpg"
      },
       {
        value: "f/fr/friedrich-hobach-62731.html",
        label: "Friedrich Hoßbach (1894-1980)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Bundesarchiv_Bild_183-1988-0107-503%2C_Major_Friedrich_Ho%C3%9Fbach_%28Mitte%29.jpg/40px-Bundesarchiv_Bild_183-1988-0107-503%2C_Major_Friedrich_Ho%C3%9Fbach_%28Mitte%29.jpg"
      },
       {
        value: "l/la/lafcadio-hearn-313638.html",
        label: "Lafcadio Hearn (1850-1904)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Lafcadio_hearn.jpg/40px-Lafcadio_hearn.jpg"
      },
       {
        value: "e/ed/eduard-vilde-464207.html",
        label: "Eduard Vilde (1865-1933)",
        description: "escritor estonio",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Eduard_Vilde_1911.jpg/40px-Eduard_Vilde_1911.jpg"
      },
       {
        value: "j/ja/james-g-birney-446438.html",
        label: "James G. Birney (1792-1857)",
        description: "Político estadounidense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/James_Birney_by_Asa_Park.jpg/40px-James_Birney_by_Asa_Park.jpg"
      },
       {
        value: "e/ed/edith-wharton-276032.html",
        label: "Edith Wharton (1862-1937)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Edith_Newbold_Jones_Wharton.jpg/40px-Edith_Newbold_Jones_Wharton.jpg"
      },
       {
        value: "j/jo/jose-rizal-1500.html",
        label: "José Rizal (1861-1896)",
        description: "escritor, médico y héroe nacional filipino",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Jose_rizal_01.jpg/40px-Jose_rizal_01.jpg"
      },
       {
        value: "s/sa/sandor-korosi-csoma-355291.html",
        label: "Sándor Kőrösi Csoma (1784-1842)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/K%C5%91r%C3%B6si_Csoma_S%C3%A1ndor.jpg/40px-K%C5%91r%C3%B6si_Csoma_S%C3%A1ndor.jpg"
      },
       {
        value: "j/je/jens-peter-jacobsen-370246.html",
        label: "Jens Peter Jacobsen (1847-1885)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/JP_Jacobsen.jpg/40px-JP_Jacobsen.jpg"
      },
       {
        value: "m/ma/martin-andersen-nex-168569.html",
        label: "Martin Andersen Nexø (1869-1954)",
        description: "escritor danés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Martin_Andersen_Nex%C3%B82.jpg/40px-Martin_Andersen_Nex%C3%B82.jpg"
      },
       {
        value: "s/su/susanna-helena-patursson-493070.html",
        label: "Súsanna Helena Patursson (1864-1916)",
        description: "escritora y actriz feroesa",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Susanna_helena_patursson.jpg/40px-Susanna_helena_patursson.jpg"
      },
       {
        value: "e/el/eliska-krasnohorska-274171.html",
        label: "Eliška Krásnohorská (1847-1926)",
        description: "traductora, poeta, libretista de ópera y autora feminista checa",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Jan_Vil%C3%ADmek_-_Eli%C5%A1ka_Kr%C3%A1snohorsk%C3%A1.jpg/40px-Jan_Vil%C3%ADmek_-_Eli%C5%A1ka_Kr%C3%A1snohorsk%C3%A1.jpg"
      },
       {
        value: "w/wi/william-godwin-188569.html",
        label: "William Godwin (1756-1836)",
        description: "político y escritor británico",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/WilliamGodwin.jpg/40px-WilliamGodwin.jpg"
      },
       {
        value: "e/el/ellen-g-white-292290.html",
        label: "Ellen G. White (1827-1915)",
        description: "Prolífica autora norteamericana y líder fundadora de la Iglesia Adventista del Séptimo Día.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Egw1899.jpg/40px-Egw1899.jpg"
      },
       {
        value: "j/jo/johann-gottfried-gruber-75929.html",
        label: "Johann Gottfried Gruber (1774-1851)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Johann-Gottfried-Gruber.jpg/40px-Johann-Gottfried-Gruber.jpg"
      },
       {
        value: "c/ch/charles-kingsley-353238.html",
        label: "Charles Kingsley (1819-1875)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Charles_Kingsley_-_project_Gutenberg_eText_13103.jpg/40px-Charles_Kingsley_-_project_Gutenberg_eText_13103.jpg"
      },
       {
        value: "h/he/henri-dunant-12091.html",
        label: "Henri Dunant (1828-1910)",
        description: "hombre de negocios y filántropo suizo",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Jean_Henri_Dunant.jpg/40px-Jean_Henri_Dunant.jpg"
      },
       {
        value: "j/jo/joseph-de-maistre-309854.html",
        label: "Joseph de Maistre (1753-1821)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Jmaistre.jpg/40px-Jmaistre.jpg"
      },
       {
        value: "w/wi/wilhelm-grimm-6714.html",
        label: "Wilhelm Grimm (1786-1859)",
        description: "lingüista, literato y mitólogo alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Die_Gartenlaube_%281858%29_b_561.jpg/40px-Die_Gartenlaube_%281858%29_b_561.jpg"
      },
       {
        value: "j/jo/johann-heinrich-pestalozzi-105428.html",
        label: "Johann Heinrich Pestalozzi (1746-1827)",
        description: "pedagogo suizo",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Johann_Heinrich_Pestalozzi.jpg/40px-Johann_Heinrich_Pestalozzi.jpg"
      },
       {
        value: "e/en/engelbert-zaschka-62498.html",
        label: "Engelbert Zaschka (1895-1955)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/ENGELBERT_ZASCHKA_1934.jpg/40px-ENGELBERT_ZASCHKA_1934.jpg"
      },
       {
        value: "a/au/august-kubizek-78877.html",
        label: "August Kubizek (1888-1956)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/August_Kubizek_1907.jpg/40px-August_Kubizek_1907.jpg"
      },
       {
        value: "a/ab/abraham-emanuel-frohlich-115992.html",
        label: "Abraham Emanuel Fröhlich (1796-1865)",
        description: "poeta suizo",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Abraham_Emanuel_Fr%C3%B6hlich.jpg/40px-Abraham_Emanuel_Fr%C3%B6hlich.jpg"
      },
       {
        value: "h/he/hector-berlioz-1151.html",
        label: "Hector Berlioz (1803-1869)",
        description: "compositor de Francia",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Berlioz_Petit_BNF_Gallica-crop.jpg/40px-Berlioz_Petit_BNF_Gallica-crop.jpg"
      },
       {
        value: "p/pi/pierre-de-coubertin-82984.html",
        label: "Pierre de Coubertin (1863-1937)",
        description: "pedagogo e historiador francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Baron_Pierre_de_Coubertin.jpg/40px-Baron_Pierre_de_Coubertin.jpg"
      },
       {
        value: "g/ga/gaspard-felix-tournachon-40116.html",
        label: "Gaspard-Félix Tournachon (1820-1910)",
        description: "fotógrafo, periodista, ilustrador, caricaturista y aeronauta francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Nadar_selfportrait.jpg/40px-Nadar_selfportrait.jpg"
      },
       {
        value: "v/ve/velimir-jlebnikov-35733.html",
        label: "Velimir Jlébnikov (1885-1922)",
        description: "escritor y poeta",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Chlebnikow.jpg/40px-Chlebnikow.jpg"
      },
       {
        value: "l/le/leon-gautier-286485.html",
        label: "León Gautier (1832-1897)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/L%C3%A9on_Gautier.jpg/40px-L%C3%A9on_Gautier.jpg"
      },
       {
        value: "b/be/bertha-pappenheim-61178.html",
        label: "Bertha Pappenheim (1859-1936)",
        description: "feminista judía de nacionalidad austríaca",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Pappenheim_1882.jpg/40px-Pappenheim_1882.jpg"
      },
       {
        value: "j/jo/john-ruskin-179126.html",
        label: "John Ruskin (1819-1900)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/John_Ruskin.jpg/40px-John_Ruskin.jpg"
      },
       {
        value: "p/ph/phillis-wheatley-257911.html",
        label: "Phillis Wheatley (1753-1784)",
        description: "poetisa estadounidense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Phillis_Wheatley_frontispiece.jpg/40px-Phillis_Wheatley_frontispiece.jpg"
      },
       {
        value: "f/fl/florence-nightingale-37103.html",
        label: "Florence Nightingale (1820-1910)",
        description: "enfermera y activista social",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Florence_Nightingale.jpg/40px-Florence_Nightingale.jpg"
      },
       {
        value: "f/fr/francois-coppee-380277.html",
        label: "François Coppée (1842-1908)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Fran%C3%A7ois_Copp%C3%A9e.jpg/40px-Fran%C3%A7ois_Copp%C3%A9e.jpg"
      },
       {
        value: "c/ch/charles-maurras-3048.html",
        label: "Charles Maurras (1868-1952)",
        description: "político de extrema derecha, poeta y escritor francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Charles_Maurras_-_avant_1922.jpg/40px-Charles_Maurras_-_avant_1922.jpg"
      },
       {
        value: "a/al/alexander-mackenzie-128708.html",
        label: "Alexander Mackenzie (1822-1892)",
        description: "segundo primer ministro de Canda",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Alexander_MacKenzie_-_portrait.jpg/40px-Alexander_MacKenzie_-_portrait.jpg"
      },
       {
        value: "a/am/amy-lowell-265841.html",
        label: "Amy Lowell (1874-1925)",
        description: "escritora estadounidense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Amy_Lowell_Time_magazine_cover_1925.jpg/40px-Amy_Lowell_Time_magazine_cover_1925.jpg"
      },
       {
        value: "e/em/emilie-kittlova-271731.html",
        label: "Emilie Kittlová (1878-1930)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Emmy_Destinn.jpg/40px-Emmy_Destinn.jpg"
      },
       {
        value: "p/pe/peter-altenberg-44972.html",
        label: "Peter Altenberg (1859-1919)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Scolik_-_Peter_Altenberg.jpg/40px-Scolik_-_Peter_Altenberg.jpg"
      },
       {
        value: "c/ch/charles-cros-356575.html",
        label: "Charles Cros (1842-1888)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Charles_Cros.jpg/40px-Charles_Cros.jpg"
      },
       {
        value: "j/ja/james-b-connolly-294321.html",
        label: "James B. Connolly (1868-1957)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/BASA-3K-7-422-18-1896_Summer_Olympics.jpg/40px-BASA-3K-7-422-18-1896_Summer_Olympics.jpg"
      },
       {
        value: "f/fr/friedrich-hebbel-57182.html",
        label: "Friedrich Hebbel (1813-1863)",
        description: "dramaturgo y poeta alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Fritz-Hebbel.jpg/40px-Fritz-Hebbel.jpg"
      },
       {
        value: "m/mi/miklos-banffy-25854.html",
        label: "Miklós Bánffy (1873-1950)",
        description: "noble, político y novelista húngaro",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/B%C3%A1nffy_Mikl%C3%B3s.jpg/40px-B%C3%A1nffy_Mikl%C3%B3s.jpg"
      },
       {
        value: "r/ry/ryunosuke-akutagawa-186326.html",
        label: "Ryūnosuke Akutagawa (1892-1927)",
        description: "escritor japonés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Akutagawa_Ryunosuke_photo.jpg/40px-Akutagawa_Ryunosuke_photo.jpg"
      },
       {
        value: "i/is/isabel-de-wied-57629.html",
        label: "Isabel de Wied (1843-1916)",
        description: "reina consorte de Rumanía",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Queen_Elizabeth_of_Romania.jpg/40px-Queen_Elizabeth_of_Romania.jpg"
      },
       {
        value: "m/ma/marcel-proust-7199.html",
        label: "Marcel Proust (1871-1922)",
        description: "escritor francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Marcel_Proust_1900-2.jpg/40px-Marcel_Proust_1900-2.jpg"
      },
       {
        value: "e/el/elizabeth-gaskell-229226.html",
        label: "Elizabeth Gaskell (1810-1865)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Elizabeth_Gaskell.jpg/40px-Elizabeth_Gaskell.jpg"
      },
       {
        value: "p/p-/p-g-t-beauregard-313976.html",
        label: "P. G. T. Beauregard (1818-1893)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Pgt_beauregard.jpg/40px-Pgt_beauregard.jpg"
      },
       {
        value: "m/ma/maksim-bahdanovic-471207.html",
        label: "Maksim Bahdanovič (1891-1917)",
        description: "escritor bielorruso",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Bagdanovich_M_2.jpg/40px-Bagdanovich_M_2.jpg"
      },
       {
        value: "l/ly/lyman-frank-baum-207544.html",
        label: "Lyman Frank Baum (1856-1919)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/L._Frank_Baum_%281911%29.jpg/40px-L._Frank_Baum_%281911%29.jpg"
      },
       {
        value: "f/fe/ferruccio-busoni-219551.html",
        label: "Ferruccio Busoni (1866-1924)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/FerruccioBusoni1913.jpg/40px-FerruccioBusoni1913.jpg"
      },
       {
        value: "n/ni/nikolaus-lenau-84280.html",
        label: "Nikolaus Lenau (1802-1850)",
        description: "poeta austríaco",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Lenau.jpg/40px-Lenau.jpg"
      },
       {
        value: "p/pa/pavel-bermondt-avalov-459424.html",
        label: "Pavel Bermondt-Avalov (1877-1974)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Bermont-Avalov.jpg/40px-Bermont-Avalov.jpg"
      },
       {
        value: "e/ed/edith-sodergran-466595.html",
        label: "Edith Södergran (1892-1923)",
        description: "poetisa finlandesa",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Edith_Sodergran.jpg/40px-Edith_Sodergran.jpg"
      },
       {
        value: "m/mi/milena-jesenska-234893.html",
        label: "Milena Jesenská (1896-1944)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Milena_Jesensk%C3%A1.jpg/40px-Milena_Jesensk%C3%A1.jpg"
      },
       {
        value: "a/au/auguste-marmont-312676.html",
        label: "Auguste Marmont (1774-1852)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Marmont.jpg/40px-Marmont.jpg"
      },
       {
        value: "e/em/emma-orczy-234530.html",
        label: "Emma Orczy (1865-1947)",
        description: "escritora, dramaturga, y artista británica de origen húngaro",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Baroness_Emma_Orczy_%28Bassano%29.jpg/40px-Baroness_Emma_Orczy_%28Bassano%29.jpg"
      },
       {
        value: "f/fr/friedrich-schlegel-157271.html",
        label: "Friedrich Schlegel (1772-1829)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Schlegelvers1829.jpg/40px-Schlegelvers1829.jpg"
      },
       {
        value: "p/pa/panait-istrati-344179.html",
        label: "Panait Istrati (1884-1935)",
        description: "escritor rumano",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Panait_Istrati_2.jpg/40px-Panait_Istrati_2.jpg"
      },
       {
        value: "l/le/leopold-von-ranke-77184.html",
        label: "Leopold von Ranke (1795-1886)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Jebens%2C_Adolf_-_Leopold_von_Ranke_%28detail%29_-_1875.jpg/40px-Jebens%2C_Adolf_-_Leopold_von_Ranke_%28detail%29_-_1875.jpg"
      },
       {
        value: "e/el/elizabeth-montagu-443320.html",
        label: "Elizabeth Montagu (1718-1800)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/E-Montagu.jpg/40px-E-Montagu.jpg"
      },
       {
        value: "a/al/alice-regnault-451441.html",
        label: "Alice Regnault (1849-1931)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/AliceRegnault.jpg/40px-AliceRegnault.jpg"
      },
       {
        value: "p/pr/prosper-merimee-160333.html",
        label: "Prosper Mérimée (1803-1870)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/%D0%9F%D1%80%D0%BE%D1%81%D0%BF%D0%B5%D1%80_%D0%9C%D0%B5%D1%80%D0%B8%D0%BC%D0%B5.jpg/40px-%D0%9F%D1%80%D0%BE%D1%81%D0%BF%D0%B5%D1%80_%D0%9C%D0%B5%D1%80%D0%B8%D0%BC%D0%B5.jpg"
      },
       {
        value: "f/fr/francisco-pi-y-margall-450271.html",
        label: "Francisco Pi y Margall (1824-1901)",
        description: "político y escritor español",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Francisco_Pi_y_Margall.jpg/40px-Francisco_Pi_y_Margall.jpg"
      },
       {
        value: "e/el/else-ury-316818.html",
        label: "Else Ury (1877-1943)",
        description: "escritora alemana",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Urykarpacz1.jpg/40px-Urykarpacz1.jpg"
      },
       {
        value: "e/ed/edouard-dujardin-274305.html",
        label: "Edouard Dujardin (1861-1949)",
        description: "escritor francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/%C3%89douard_Dujardin_by_Vallotton.jpg/40px-%C3%89douard_Dujardin_by_Vallotton.jpg"
      },
       {
        value: "b/be/beatrice-wood-459378.html",
        label: "Beatrice Wood (1893-1998)",
        description: "artista estadounidense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Beatrice_Wood_and_Marcel_Duchamp.jpg/40px-Beatrice_Wood_and_Marcel_Duchamp.jpg"
      },
       {
        value: "s/si/sidney-lee-179854.html",
        label: "Sidney Lee (1859-1926)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Sidney_Lee_002.jpg/40px-Sidney_Lee_002.jpg"
      },
       {
        value: "d/de/demyan-bedny-439566.html",
        label: "Demyan Bedny (1883-1945)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/BednyD.jpg/40px-BednyD.jpg"
      },
       {
        value: "p/pa/paul-valery-200639.html",
        label: "Paul Valéry (1871-1945)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Paul_Val%C3%A9ry_by_the_Studio_Harcourt.jpg/40px-Paul_Val%C3%A9ry_by_the_Studio_Harcourt.jpg"
      },
       {
        value: "e/ed/eduard-bernstein-75786.html",
        label: "Eduard Bernstein (1850-1932)",
        description: "político alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Bernst1.jpg/40px-Bernst1.jpg"
      },
       {
        value: "w/wi/william-faulkner-38392.html",
        label: "William Faulkner (1897-1962)",
        description: "narrador y poeta estadounidense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Carl_Van_Vechten_-_William_Faulkner.jpg/40px-Carl_Van_Vechten_-_William_Faulkner.jpg"
      },
       {
        value: "b/be/bernard-berenson-359047.html",
        label: "Bernard Berenson (1865-1959)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Bernard_Berenson.jpg/40px-Bernard_Berenson.jpg"
      },
       {
        value: "i/iv/ivana-brlic-mazuranic-254383.html",
        label: "Ivana Brlić-Mažuranić (1874-1938)",
        description: "escritora croata",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Ivana_brlic_mazuranic_II.jpg/40px-Ivana_brlic_mazuranic_II.jpg"
      },
       {
        value: "j/jo/jorg-lanz-von-liebenfels-78764.html",
        label: "Jörg Lanz von Liebenfels (1874-1954)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/J%C3%B6rg_Lanz_von_Liebenfels.jpg/40px-J%C3%B6rg_Lanz_von_Liebenfels.jpg"
      },
       {
        value: "g/gr/grace-aguilar-298152.html",
        label: "Grace Aguilar (1816-1847)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Grace_Aguilar_engraved_portrait.jpg/40px-Grace_Aguilar_engraved_portrait.jpg"
      },
       {
        value: "a/al/alain-fournier-298394.html",
        label: "Alain-Fournier (1886-1914)",
        description: "escritor francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Alain-Fournier_in_1905.jpg/40px-Alain-Fournier_in_1905.jpg"
      },
       {
        value: "h/ha/harriet-quimby-254352.html",
        label: "Harriet Quimby (1875-1912)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Harriet_quimby.jpg/40px-Harriet_quimby.jpg"
      },
       {
        value: "e/er/ernst-lubitsch-51562.html",
        label: "Ernst Lubitsch (1892-1947)",
        description: "cineasta estadounidense nacido en Berlín, Alemania",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Ernst_Lubitsch_01.jpg/40px-Ernst_Lubitsch_01.jpg"
      },
       {
        value: "e/el/else-lasker-schuler-58033.html",
        label: "Else Lasker-Schüler (1869-1945)",
        description: "escritora y poetisa",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Else_Lasker-Sch%C3%BCler_1875.jpg/40px-Else_Lasker-Sch%C3%BCler_1875.jpg"
      },
       {
        value: "k/ka/karl-ludwig-von-haller-125462.html",
        label: "Karl Ludwig von Haller (1768-1854)",
        description: "jurista suizo",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/KarlLudwigHaller.jpg/40px-KarlLudwigHaller.jpg"
      },
       {
        value: "a/ak/akaki-tsereteli-379612.html",
        label: "Akaki Tsereteli (1840-1915)",
        description: "escritor georgiano",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Georgian_poet_Akaki_Tsereteli%2C_c._early_1900s_in_Tbilisi%2C_full_image.jpg/40px-Georgian_poet_Akaki_Tsereteli%2C_c._early_1900s_in_Tbilisi%2C_full_image.jpg"
      },
       {
        value: "b/be/benedetto-croce-192348.html",
        label: "Benedetto Croce (1866-1952)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/B.Croce.jpg/40px-B.Croce.jpg"
      },
       {
        value: "e/ez/ezsaias-budai-291631.html",
        label: "Ézsaiás Budai (1760-1841)",
        description: "escritor húngaro",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Budai_%C3%89zsai%C3%A1s_VU.jpg/40px-Budai_%C3%89zsai%C3%A1s_VU.jpg"
      },
       {
        value: "f/fr/frans-eemil-sillanpaa-132723.html",
        label: "Frans Eemil Sillanpää (1888-1964)",
        description: "escritor finlandés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/FransEemilSillanp%C3%A4%C3%A4.jpg/40px-FransEemilSillanp%C3%A4%C3%A4.jpg"
      },
       {
        value: "v/vi/vincent-dindy-313584.html",
        label: "Vincent d'Indy (1851-1931)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/D%27Indi_Vincent_Postcard-1910.jpg/40px-D%27Indi_Vincent_Postcard-1910.jpg"
      },
       {
        value: "p/pi/pierre-athanase-larousse-313709.html",
        label: "Pierre Athanase Larousse (1817-1875)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Pierre_Larousse.jpg/40px-Pierre_Larousse.jpg"
      },
       {
        value: "m/me/mehmet-akif-ersoy-316443.html",
        label: "Mehmet Akif Ersoy (1873-1936)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Mehmet_Akif.jpg/40px-Mehmet_Akif.jpg"
      },
       {
        value: "b/be/benedict-roezl-79112.html",
        label: "Benedict Roezl (1823-1885)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Benedict_Roezl.jpg/40px-Benedict_Roezl.jpg"
      },
       {
        value: "j/jo/joris-karl-huysmans-210798.html",
        label: "Joris-Karl Huysmans (1848-1907)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Joris-Karl_Huysmans_photographed_by_Dornac.jpg/40px-Joris-Karl_Huysmans_photographed_by_Dornac.jpg"
      },
       {
        value: "f/fr/francis-scott-key-320633.html",
        label: "Francis Scott Key (1779-1843)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Key-Francis-Scott-LOC.jpg/40px-Key-Francis-Scott-LOC.jpg"
      },
       {
        value: "e/el/elizabeth-inchbald-469974.html",
        label: "Elizabeth Inchbald (1753-1821)",
        description: "escritora británica",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Elizabeth_Inchbald.jpg/40px-Elizabeth_Inchbald.jpg"
      },
       {
        value: "l/le/leopold-staff-223230.html",
        label: "Leopold Staff (1878-1957)",
        description: "poeta polaco",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/LeopoldStaff.jpg/40px-LeopoldStaff.jpg"
      },
       {
        value: "n/no/norman-angell-272224.html",
        label: "Norman Angell (1872-1967)",
        description: "político británico",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Norman_Angell_01.jpg/40px-Norman_Angell_01.jpg"
      },
       {
        value: "r/ra/rabindranath-tagore-7241.html",
        label: "Rabindranath Tagore (1861-1941)",
        description: "poeta bengalí",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Rabindranath_Tagore_in_1909.jpg/40px-Rabindranath_Tagore_in_1909.jpg"
      },
       {
        value: "w/wi/wilhelm-busch-109540.html",
        label: "Wilhelm Busch (1832-1908)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Wilhelm_Busch_1878.jpg/40px-Wilhelm_Busch_1878.jpg"
      },
       {
        value: "d/du/duchess-agnes-of-wurttemberg-65680.html",
        label: "Duchess Agnes of Württemberg (1835-1886)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Agnes_von_W%C3%BCrttemberg.jpg/40px-Agnes_von_W%C3%BCrttemberg.jpg"
      },
       {
        value: "j/ja/jacques-copeau-369758.html",
        label: "Jacques Copeau (1879-1949)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Jacques_Copeau_001.jpg/40px-Jacques_Copeau_001.jpg"
      },
       {
        value: "g/go/gottlieb-konrad-pfeffel-77742.html",
        label: "Gottlieb Konrad Pfeffel (1736-1809)",
        description: "escritor alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/PfeffelGC.jpg/40px-PfeffelGC.jpg"
      },
       {
        value: "d/do/dorothea-veit-77271.html",
        label: "Dorothea Veit (1764-1839)",
        description: "escritora alemana",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Dorothea_Schlegel.jpg/40px-Dorothea_Schlegel.jpg"
      },
       {
        value: "s/sy/sylvia-beach-265562.html",
        label: "Sylvia Beach (1887-1962)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Sylvia_Beach_at_Shakespeare_%26_Co_Paris_1920.jpg/40px-Sylvia_Beach_at_Shakespeare_%26_Co_Paris_1920.jpg"
      },
       {
        value: "w/wi/wilhelm-heinse-64489.html",
        label: "Wilhelm Heinse (1746-1803)",
        description: "escritor alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Heinse.jpg/40px-Heinse.jpg"
      },
       {
        value: "e/er/ernest-thompson-seton-505017.html",
        label: "Ernest Thompson Seton (1860-1946)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Ernest_Thompson_Seton.jpg/40px-Ernest_Thompson_Seton.jpg"
      },
       {
        value: "r/ro/robert-leiber-95469.html",
        label: "Robert Leiber (1887-1967)",
        description: "sacerdote católico de Alemania",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Nuntius_Pacelli_und_Pater_Leiber_1929.jpg/40px-Nuntius_Pacelli_und_Pater_Leiber_1929.jpg"
      },
       {
        value: "s/sa/sandor-petofi-81219.html",
        label: "Sándor Petőfi (1823-1849)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Orlai-petofi1.jpg/40px-Orlai-petofi1.jpg"
      },
       {
        value: "d/da/daniel-burnham-316639.html",
        label: "Daniel Burnham (1846-1912)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Daniel_Burnham.jpg/40px-Daniel_Burnham.jpg"
      },
       {
        value: "b/be/bernard-altum-69834.html",
        label: "Bernard Altum (1824-1900)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Bernard_Altum.jpg/40px-Bernard_Altum.jpg"
      },
       {
        value: "e/e-/e-t-a-hoffmann-150471.html",
        label: "E. T. A. Hoffmann (1776-1822)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/E.T.A._Hoffmann_Selbstportrait.jpg/40px-E.T.A._Hoffmann_Selbstportrait.jpg"
      },
       {
        value: "g/ge/georg-heinrich-von-langsdorff-62656.html",
        label: "Georg Heinrich von Langsdorff (1774-1852)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Grigori-langsdorff.jpg/40px-Grigori-langsdorff.jpg"
      },
       {
        value: "f/fr/francisco-ferrer-guardia-354202.html",
        label: "Francisco Ferrer Guardia (1859-1909)",
        description: "pedagogo y anarquista español",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Francisco_Ferrer_Guardia.jpg/40px-Francisco_Ferrer_Guardia.jpg"
      },
       {
        value: "f/fr/francesco-algarotti-439081.html",
        label: "Francesco Algarotti (1712-1764)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Jean-%C3%89tienne_Liotard_-_Portret_van_Graaf_Francesco_Algarotti.jpg/40px-Jean-%C3%89tienne_Liotard_-_Portret_van_Graaf_Francesco_Algarotti.jpg"
      },
       {
        value: "d/de/delphine-de-girardin-437094.html",
        label: "Delphine de Girardin (1804-1855)",
        description: "escritora francesa",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Louis_Hersent_-_Delphine_de_Girardin.jpg/40px-Louis_Hersent_-_Delphine_de_Girardin.jpg"
      },
       {
        value: "j/ju/jules-lemaitre-197935.html",
        label: "Jules Lemaître (1853-1914)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Jules_Lema%C3%AEtre_-_Project_Gutenberg_eText_17662.jpg/40px-Jules_Lema%C3%AEtre_-_Project_Gutenberg_eText_17662.jpg"
      },
       {
        value: "h/he/heinrich-hossli-116152.html",
        label: "Heinrich Hössli (1784-1864)",
        description: "escritor suizo",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Hossli_Heinrich_%281784-1864%29.jpg/40px-Hossli_Heinrich_%281784-1864%29.jpg"
      },
       {
        value: "m/mi/mijail-lomonosov-58720.html",
        label: "Mijaíl Lomonósov (1711-1765)",
        description: "científico y escritor ruso",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/M.V._Lomonosov_by_L.Miropolskiy_after_G.C.Prenner_%281787%2C_RAN%29.jpg/40px-M.V._Lomonosov_by_L.Miropolskiy_after_G.C.Prenner_%281787%2C_RAN%29.jpg"
      },
       {
        value: "e/em/emile-henry-285998.html",
        label: "Émile Henry (1872-1894)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Emile_Henry_1872-1894.jpg/40px-Emile_Henry_1872-1894.jpg"
      },
       {
        value: "j/jo/joseph-weydemeyer-216162.html",
        label: "Joseph Weydemeyer (1818-1866)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Weydemeyer.jpg/40px-Weydemeyer.jpg"
      },
       {
        value: "v/va/vazha-pshavela-317040.html",
        label: "Vazha-Pshavela (1861-1915)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Vazha-Pshavela.jpg/40px-Vazha-Pshavela.jpg"
      },
       {
        value: "f/fr/franz-joseph-von-bulow-92363.html",
        label: "Franz Joseph von Bülow (1861-1915)",
        description: "escritor alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Franz_Joseph_von_B%C3%BClow.jpg/40px-Franz_Joseph_von_B%C3%BClow.jpg"
      },
       {
        value: "c/ch/christian-friedrich-ludwig-98258.html",
        label: "Christian Friedrich Ludwig (1751-1823)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Christian-Friedrich-Ludwig.jpg/40px-Christian-Friedrich-Ludwig.jpg"
      },
       {
        value: "e/eu/euloge-schneider-214023.html",
        label: "Euloge Schneider (1756-1794)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Eulog.jpg/40px-Eulog.jpg"
      },
       {
        value: "s/se/sergei-taneyev-335006.html",
        label: "Sergéi Tanéyev (1856-1915)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Taneev.jpg/40px-Taneev.jpg"
      },
       {
        value: "e/er/ernestine-l-rose-455845.html",
        label: "Ernestine L. Rose (1810-1892)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/ErnestineRose.jpg/40px-ErnestineRose.jpg"
      },
       {
        value: "s/si/siegfried-kracauer-76435.html",
        label: "Siegfried Kracauer (1889-1966)",
        description: "sociólogo alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Siegfriedkracauer.jpg/40px-Siegfriedkracauer.jpg"
      },
       {
        value: "a/al/alexander-von-zemlinsky-78524.html",
        label: "Alexander von Zemlinsky (1871-1942)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Zemlinsky.jpg/40px-Zemlinsky.jpg"
      },
       {
        value: "a/al/aleksandr-sumarokov-429915.html",
        label: "Aleksandr Sumarókov (1717-1777)",
        description: "poeta ruso",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Sumarokov_Aleksandr_Petrovich.jpg/40px-Sumarokov_Aleksandr_Petrovich.jpg"
      },
       {
        value: "m/mi/michael-arlen-115683.html",
        label: "Michael Arlen (1895-1956)",
        description: "ensayista, escritor, dramaturgo del Pueblo Armenio",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Time-magazine-cover-michael-arlen.jpg/40px-Time-magazine-cover-michael-arlen.jpg"
      },
       {
        value: "j/ja/james-tytler-504979.html",
        label: "James Tytler (1745-1804)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/James_Tytler.jpg/40px-James_Tytler.jpg"
      },
       {
        value: "z/ze/zemaite-287069.html",
        label: "Žemaitė (1845-1921)",
        description: "escritora lituana",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Zemaite_-_1_litas.jpg/40px-Zemaite_-_1_litas.jpg"
      },
       {
        value: "f/fr/friedrich-theodor-vischer-651.html",
        label: "Friedrich Theodor Vischer (1807-1887)",
        description: "filósofo y poeta alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Vischer.jpg/40px-Vischer.jpg"
      },
       {
        value: "m/mo/moric-benyovszky-93419.html",
        label: "Móric Benyovszky (1746-1786)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/M%C3%B3ric-Benovsk%C3%BD.jpg/40px-M%C3%B3ric-Benovsk%C3%BD.jpg"
      },
       {
        value: "s/sa/sami-frasheri-331896.html",
        label: "Sami Frashëri (1850-1904)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Sami_Frasheri_with_his_wife_Emine.jpg/40px-Sami_Frasheri_with_his_wife_Emine.jpg"
      },
       {
        value: "a/al/alfred-stieglitz-313055.html",
        label: "Alfred Stieglitz (1864-1946)",
        description: "fotógrafo estadounidense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Portrait_of_Alfred_Stieglitz_1935_Apr_17.jpg/40px-Portrait_of_Alfred_Stieglitz_1935_Apr_17.jpg"
      },
       {
        value: "p/po/pola-negri-230633.html",
        label: "Pola Negri (1897-1987)",
        description: "actriz estadounidense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Pola_Negri_1923.jpg/40px-Pola_Negri_1923.jpg"
      },
       {
        value: "l/la/lars-levi-laestadius-434939.html",
        label: "Lars Levi Laestadius (1800-1861)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Larslevilaestadius.jpg/40px-Larslevilaestadius.jpg"
      },
       {
        value: "a/al/almeida-garrett-316806.html",
        label: "Almeida Garrett (1799-1854)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Almeida_Garrett_por_Guglielmi.jpg/40px-Almeida_Garrett_por_Guglielmi.jpg"
      },
       {
        value: "a/az/azorin-443403.html",
        label: "Azorín (1873-1967)",
        description: "escritor español",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Ramon_Casas_-_MNAC-_Azor%C3%ADn-_027587-D_006575.jpg/40px-Ramon_Casas_-_MNAC-_Azor%C3%ADn-_027587-D_006575.jpg"
      },
       {
        value: "n/na/natalie-clifford-barney-34782.html",
        label: "Natalie Clifford Barney (1876-1972)",
        description: "escritora, poeta y novelista estadounidense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Natalie_Barney_in_Fur_Cape.jpg/40px-Natalie_Barney_in_Fur_Cape.jpg"
      },
       {
        value: "f/fr/francesc-pujols-367098.html",
        label: "Francesc Pujols (1882-1962)",
        description: "filósofo español",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Francescpujols.jpg/40px-Francescpujols.jpg"
      },
       {
        value: "d/da/david-hume-37160.html",
        label: "David Hume (1711-1777)",
        description: "filósofo, economista, sociólogo e historiador escocés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Allan_Ramsay_-_David_Hume%2C_1711_-_1776._Historian_and_philosopher_-_Google_Art_Project.jpg/40px-Allan_Ramsay_-_David_Hume%2C_1711_-_1776._Historian_and_philosopher_-_Google_Art_Project.jpg"
      },
       {
        value: "p/pa/paul-bourget-198644.html",
        label: "Paul Bourget (1852-1935)",
        description: "novelista y crítico francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Paul_bourget.jpg/40px-Paul_bourget.jpg"
      },
       {
        value: "w/wi/william-stern-57347.html",
        label: "William Stern (1871-1938)",
        description: "psicólogo y filósofo",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/WLStern.jpg/40px-WLStern.jpg"
      },
       {
        value: "d/do/dositej-obradovic-347659.html",
        label: "Dositej Obradović (1742-1811)",
        description: "escritor serbio",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/DositejObradovi%C4%87.jpg/40px-DositejObradovi%C4%87.jpg"
      },
       {
        value: "j/ja/jan-neruda-156321.html",
        label: "Jan Neruda (1834-1891)",
        description: "poeta, cuentista, dramaturgo y novelista checo",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Jan_Neruda_02.jpg/40px-Jan_Neruda_02.jpg"
      },
       {
        value: "a/ab/abraham-valdelomar-330670.html",
        label: "Abraham Valdelomar (1888-1919)",
        description: "escritor peruano",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Valdelomar1.jpg/40px-Valdelomar1.jpg"
      },
       {
        value: "j/ja/jakub-bart-cisinski-77194.html",
        label: "Jakub Bart-Ćišinski (1856-1909)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Jakub_Bart-%C4%86i%C5%A1inski.jpg/40px-Jakub_Bart-%C4%86i%C5%A1inski.jpg"
      },
       {
        value: "s/se/sebastian-kneipp-45075.html",
        label: "Sebastian Kneipp (1821-1897)",
        description: "sacerdote católico de Alemania",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Sebastian_Kneipp.jpg/40px-Sebastian_Kneipp.jpg"
      },
       {
        value: "f/fl/flora-tristan-254068.html",
        label: "Flora Tristán (1803-1844)",
        description: "escritora franco-peruana",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Flora_Tristan.jpg/40px-Flora_Tristan.jpg"
      },
       {
        value: "p/pr/princess-agnes-of-anhalt-dessau-394683.html",
        label: "Princess Agnes of Anhalt-Dessau (1824-1897)",
        description: "escritora alemana",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Agnes_of_Anhalt-Dessau.jpg/40px-Agnes_of_Anhalt-Dessau.jpg"
      },
       {
        value: "j/jo/john-herschel-14278.html",
        label: "John Herschel (1792-1871)",
        description: "científico inglés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Herschel_sitzend.jpg/40px-Herschel_sitzend.jpg"
      },
       {
        value: "a/an/andre-breton-161955.html",
        label: "André Breton (1896-1966)",
        description: "escritor, poeta y ensayista francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/AndreBreton.jpg/40px-AndreBreton.jpg"
      },
       {
        value: "a/ag/agustin-duran-399155.html",
        label: "Agustín Durán (1789-1862)",
        description: "escritor y erudito español",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Agust%C3%ADn_Duran.jpg/40px-Agust%C3%ADn_Duran.jpg"
      },
       {
        value: "c/ca/carlo-carra-168496.html",
        label: "Carlo Carrà (1881-1966)",
        description: "pintor italiano",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Carr%C3%A0_in_front_of_Le_Figaro%2C_Paris%2C_9_February_1912_%28cropped%29.jpg/40px-Carr%C3%A0_in_front_of_Le_Figaro%2C_Paris%2C_9_February_1912_%28cropped%29.jpg"
      },
       {
        value: "k/ke/kenji-miyazawa-55993.html",
        label: "Kenji Miyazawa (1896-1933)",
        description: "autor literario",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Miyazawa_Kenji.jpg/40px-Miyazawa_Kenji.jpg"
      },
       {
        value: "g/gi/giani-stuparich-325308.html",
        label: "Giani Stuparich (1891-1961)",
        description: "escritor italiano",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/00-Giani-Chiappelli.jpg/40px-00-Giani-Chiappelli.jpg"
      },
       {
        value: "f/fa/fanny-zu-reventlow-71429.html",
        label: "Fanny zu Reventlow (1871-1918)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Fanny_Gr%C3%A4fin_zu_Reventlow.jpg/40px-Fanny_Gr%C3%A4fin_zu_Reventlow.jpg"
      },
       {
        value: "w/wi/wilfred-owen-212719.html",
        label: "Wilfred Owen (1893-1918)",
        description: "Poeta y soldado británico",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Wilfred_Owen_plate_from_Poems_%281920%29.jpg/40px-Wilfred_Owen_plate_from_Poems_%281920%29.jpg"
      },
       {
        value: "j/ju/juan-valera-y-alcala-galiano-463630.html",
        label: "Juan Valera y Alcalá Galiano (1824-1905)",
        description: "escritor, diplomático y político español",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Juan_Valera.jpg/40px-Juan_Valera.jpg"
      },
       {
        value: "a/ad/ada-christen-85002.html",
        label: "Ada Christen (1839-1901)",
        description: "escritora austríaca",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Ada_Christen_1.jpg/40px-Ada_Christen_1.jpg"
      },
       {
        value: "j/je/jean-francois-marmontel-379923.html",
        label: "Jean-François Marmontel (1723-1799)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Jean-Fran%C3%A7ois_Marmontel.jpg/40px-Jean-Fran%C3%A7ois_Marmontel.jpg"
      },
       {
        value: "c/ca/carlo-goldoni-165534.html",
        label: "Carlo Goldoni (1707-1793)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Carlo_Goldoni.jpg/40px-Carlo_Goldoni.jpg"
      },
       {
        value: "c/ch/charles-gates-dawes-184565.html",
        label: "Charles Gates Dawes (1865-1951)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Chas_G_Dawes-H%26E.jpg/40px-Chas_G_Dawes-H%26E.jpg"
      },
       {
        value: "a/an/angel-guimera-175485.html",
        label: "Àngel Guimerà (1845-1924)",
        description: "escritor, poeta y dramaturgo español",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/%C3%81ngel_Guimer%C3%A1%2C_de_Audouard.jpg/40px-%C3%81ngel_Guimer%C3%A1%2C_de_Audouard.jpg"
      },
       {
        value: "s/sr/sri-pandit-jawaharlal-nehru-1047.html",
        label: "Sri Pandit Jawaharlal Nehru (1889-1964)",
        description: "político hindú",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Bundesarchiv_Bild_183-61849-0001%2C_Indien%2C_Otto_Grotewohl_bei_Ministerpr%C3%A4sident_Nehru_cropped.jpg/40px-Bundesarchiv_Bild_183-61849-0001%2C_Indien%2C_Otto_Grotewohl_bei_Ministerpr%C3%A4sident_Nehru_cropped.jpg"
      },
       {
        value: "a/ab/abel-botelho-318390.html",
        label: "Abel Botelho (1854-1917)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Ant%C3%B3nio_Ramalho_-_Retrato_de_Abel_Ac%C3%A1cio_Botelho.jpg/40px-Ant%C3%B3nio_Ramalho_-_Retrato_de_Abel_Ac%C3%A1cio_Botelho.jpg"
      },
       {
        value: "l/lu/lucien-febvre-156999.html",
        label: "Lucien Febvre (1878-1956)",
        description: "historiador francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Lucien_Febvre-Strasbourg.jpg/40px-Lucien_Febvre-Strasbourg.jpg"
      },
       {
        value: "e/em/emile-gaboriau-463513.html",
        label: "Émile Gaboriau (1832-1873)",
        description: "escritor francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Emile_Gaboriau_BNF_Gallica.jpg/40px-Emile_Gaboriau_BNF_Gallica.jpg"
      },
       {
        value: "g/ge/george-grosz-107194.html",
        label: "George Grosz (1893-1959)",
        description: "artista alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/George_Grosz_1930.jpg/40px-George_Grosz_1930.jpg"
      },
       {
        value: "h/he/henry-edwards-73507.html",
        label: "Henry Edwards (1827-1891)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Henry_Edwards_-1871.jpg/40px-Henry_Edwards_-1871.jpg"
      },
       {
        value: "g/go/gottfried-benn-57277.html",
        label: "Gottfried Benn (1886-1956)",
        description: "literato alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Bundesarchiv-Bild-183-1984-1116-500%2C-Gottfried-Benn-Arzt-und-Schriftsteller_cropped.jpg/40px-Bundesarchiv-Bild-183-1984-1116-500%2C-Gottfried-Benn-Arzt-und-Schriftsteller_cropped.jpg"
      },
       {
        value: "c/co/cora-sandel-287727.html",
        label: "Cora Sandel (1880-1974)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Cora_sandel.jpg/40px-Cora_sandel.jpg"
      },
       {
        value: "m/ma/marcel-prevost-326138.html",
        label: "Marcel Prévost (1862-1941)",
        description: "escritor francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Marcel_Pr%C3%A9vost_1910.jpg/40px-Marcel_Pr%C3%A9vost_1910.jpg"
      },
       {
        value: "c/co/conny-mendez-428057.html",
        label: "Conny Méndez (1898-1979)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Conny-katiusk.jpg/40px-Conny-katiusk.jpg"
      },
       {
        value: "f/fr/friedrich-gottlieb-dietrich-86320.html",
        label: "Friedrich Gottlieb Dietrich (1765-1850)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Friedrich_Gottlieb_Dietrich.jpg/40px-Friedrich_Gottlieb_Dietrich.jpg"
      },
       {
        value: "f/f-/f-scott-fitzgerald-93354.html",
        label: "F. Scott Fitzgerald (1896-1940)",
        description: "escritor estadounidense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Francis_Scott_Fitzgerald_1937_June_4_%282%29_%28photo_by_Carl_van_Vechten%29.jpg/40px-Francis_Scott_Fitzgerald_1937_June_4_%282%29_%28photo_by_Carl_van_Vechten%29.jpg"
      },
       {
        value: "m/ma/manuel-jose-quintana-380792.html",
        label: "Manuel José Quintana (1772-1857)",
        description: "poeta español",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Manuel_Jos%C3%A9_Quintana.jpg/40px-Manuel_Jos%C3%A9_Quintana.jpg"
      },
       {
        value: "c/ca/carl-von-clausewitz-76430.html",
        label: "Carl von Clausewitz (1780-1831)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Clausewitz.jpg/40px-Clausewitz.jpg"
      },
       {
        value: "v/ve/ventura-de-la-vega-353263.html",
        label: "Ventura de la Vega (1807-1865)",
        description: "escritor y dramaturgo español",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Ventura_de_la_Vega_por_Federico_Madrazo.jpg/40px-Ventura_de_la_Vega_por_Federico_Madrazo.jpg"
      },
       {
        value: "j/jo/jose-manyanet-y-vives-348452.html",
        label: "José Manyanet y Vives (1833-1901)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/PadreManyanetPortrait.jpg/40px-PadreManyanetPortrait.jpg"
      },
       {
        value: "a/an/ann-radcliffe-231944.html",
        label: "Ann Radcliffe (1764-1823)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Ann_Radcliffe.jpg/40px-Ann_Radcliffe.jpg"
      },
       {
        value: "n/na/natacha-rambova-458874.html",
        label: "Natacha Rambova (1897-1966)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Natacha_Rambova.jpg/40px-Natacha_Rambova.jpg"
      },
       {
        value: "a/al/alexis-de-tocqueville-140694.html",
        label: "Alexis de Tocqueville (1805-1859)",
        description: "pensador, jurista, político, e historiador francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Alexis_de_tocqueville.jpg/40px-Alexis_de_tocqueville.jpg"
      },
       {
        value: "w/wa/waldemar-bonsels-63055.html",
        label: "Waldemar Bonsels (1880-1952)",
        description: "escritor alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Waldemar_Bonsels.jpg/40px-Waldemar_Bonsels.jpg"
      },
       {
        value: "i/iv/ivan-cankar-15809.html",
        label: "Ivan Cankar (1876-1918)",
        description: "escritor esloveno",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Ivan_Cankar_1915.jpg/40px-Ivan_Cankar_1915.jpg"
      },
       {
        value: "n/na/na-hye-sok-466477.html",
        label: "Na Hye-Sok (1896-1948)",
        description: "pintor y escritora coreana",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Na_Hye-sok_in_1926.jpg/40px-Na_Hye-sok_in_1926.jpg"
      },
       {
        value: "j/jo/john-mccrae-470812.html",
        label: "John McCrae (1872-1918)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/John_McCrae_in_uniform_circa_1914.jpg/40px-John_McCrae_in_uniform_circa_1914.jpg"
      },
       {
        value: "l/la/laurence-sterne-218960.html",
        label: "Laurence Sterne (1713-1768)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Laurence_Sterne_by_Sir_Joshua_Reynolds.jpg/40px-Laurence_Sterne_by_Sir_Joshua_Reynolds.jpg"
      },
       {
        value: "g/ga/gaspar-nunez-de-arce-64652.html",
        label: "Gaspar Núñez de Arce (1834-1903)",
        description: "poeta y político español",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/N%C3%BA%C3%B1ez_de_Arce.jpg/40px-N%C3%BA%C3%B1ez_de_Arce.jpg"
      },
       {
        value: "r/ra/raquel-la-poetisa-241180.html",
        label: "Raquel la poetisa (1890-1931)",
        description: "poetisa israelí",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/RachelBluwstein.jpg/40px-RachelBluwstein.jpg"
      },
       {
        value: "e/em/emile-pouget-286358.html",
        label: "Émile Pouget (1860-1931)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/%C3%89mile_Pouget.jpg/40px-%C3%89mile_Pouget.jpg"
      },
       {
        value: "n/ni/ninette-de-valois-234436.html",
        label: "Ninette de Valois (1898-2001)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Ninette_de_Valois%2C_1914.jpg/40px-Ninette_de_Valois%2C_1914.jpg"
      },
       {
        value: "l/lo/louise-depinay-264254.html",
        label: "Louise d'Épinay (1726-1783)",
        description: "escritora francesa",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Louise_d%27Epinay_Liotard.jpg/40px-Louise_d%27Epinay_Liotard.jpg"
      },
       {
        value: "e/er/erich-maria-remarque-47293.html",
        label: "Erich Maria Remarque (1898-1970)",
        description: "novelista alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Erich_Maria_Remarque1.jpg/40px-Erich_Maria_Remarque1.jpg"
      },
       {
        value: "j/je/jenny-lind-231345.html",
        label: "Jenny Lind (1820-1887)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Jenny_Lind_retouched.jpg/40px-Jenny_Lind_retouched.jpg"
      },
       {
        value: "j/jo/jose-carlos-mariategui-335544.html",
        label: "José Carlos Mariátegui (1890-1930)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Jos%C3%A9_Carlos_Mari%C3%A1tegui.jpg/40px-Jos%C3%A9_Carlos_Mari%C3%A1tegui.jpg"
      },
       {
        value: "e/en/enrique-gonzalez-martinez-43258.html",
        label: "Enrique González Martínez (1871-1952)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/ENRIQUE_GONZALEZ_MARTINEZ_1871_-_1952_POETA_MEXICANO_%2813451188195%29.jpg/40px-ENRIQUE_GONZALEZ_MARTINEZ_1871_-_1952_POETA_MEXICANO_%2813451188195%29.jpg"
      },
       {
        value: "c/ch/charles-de-coster-315176.html",
        label: "Charles de Coster (1827-1879)",
        description: "novelista belga",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Charles_de_Coster.jpg/40px-Charles_de_Coster.jpg"
      },
       {
        value: "r/re/rex-stout-337351.html",
        label: "Rex Stout (1886-1975)",
        description: "escritor estadounidense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Rex_Stout_1975.jpg/40px-Rex_Stout_1975.jpg"
      },
       {
        value: "d/da/damaso-alonso-312945.html",
        label: "Dámaso Alonso (1898-1990)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/D%C3%A1maso_Alonso.jpg/40px-D%C3%A1maso_Alonso.jpg"
      },
       {
        value: "a/au/august-wilhelm-iffland-215115.html",
        label: "August Wilhelm Iffland (1759-1814)",
        description: "actor alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/August_Wilhelm_Iffland_Johann_Stephan_Decker.jpg/40px-August_Wilhelm_Iffland_Johann_Stephan_Decker.jpg"
      },
       {
        value: "h/he/helen-keller-38203.html",
        label: "Helen Keller (1880-1968)",
        description: "excritora, oradora y activista política sordociega estadounidense y teosofia",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Helen_KellerA.jpg/40px-Helen_KellerA.jpg"
      },
       {
        value: "w/w-/w-e-b-du-bois-158060.html",
        label: "W. E. B. Du Bois (1868-1963)",
        description: "historiador, sociólogo, activista y escritor estadunidense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/WEB_DuBois_1918.jpg/40px-WEB_DuBois_1918.jpg"
      },
       {
        value: "j/jr/jrgen-moe-470002.html",
        label: "Jørgen Moe (1813-1882)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/J%C3%B8rgen_Moe_%28Frederik_Klem%29.jpg/40px-J%C3%B8rgen_Moe_%28Frederik_Klem%29.jpg"
      },
       {
        value: "j/ju/julian-tuwim-376278.html",
        label: "Julian Tuwim (1894-1953)",
        description: "poeta polaco",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Julian_Tuwim.jpg/40px-Julian_Tuwim.jpg"
      },
       {
        value: "c/co/conrad-aiken-380645.html",
        label: "Conrad Aiken (1889-1973)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Conrad_Aiken_poet.jpg/40px-Conrad_Aiken_poet.jpg"
      },
       {
        value: "j/ja/jacques-arago-117913.html",
        label: "Jacques Arago (1790-1855)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Arago%2C_Jacques.jpg/40px-Arago%2C_Jacques.jpg"
      },
       {
        value: "m/ma/marc-connelly-430076.html",
        label: "Marc Connelly (1890-1980)",
        description: "dramaturgo estadounidense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Marcconnelly.jpg/40px-Marcconnelly.jpg"
      },
       {
        value: "p/pi/pierre-victor-de-besenval-de-brunstatt-115906.html",
        label: "Pierre Victor de Besenval de Brünstatt (1721-1791)",
        description: "soldado y escritor francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Besenval%2C_baron_de2.jpg/40px-Besenval%2C_baron_de2.jpg"
      },
       {
        value: "j/je/jessie-fauset-465624.html",
        label: "Jessie Fauset (1882-1961)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Thereisconfusioncropped.jpg/40px-Thereisconfusioncropped.jpg"
      },
       {
        value: "g/ge/gerard-de-nerval-191305.html",
        label: "Gérard de Nerval (1808-1855)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/G%C3%A9rard_de_Nerval.jpg/40px-G%C3%A9rard_de_Nerval.jpg"
      },
       {
        value: "g/ge/gerardo-diego-382815.html",
        label: "Gerardo Diego (1896-1987)",
        description: "poeta y escritor español",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Monumento_a_Gerardo_Diego.jpg/40px-Monumento_a_Gerardo_Diego.jpg"
      },
       {
        value: "l/lu/lucy-maud-montgomery-273034.html",
        label: "Lucy Maud Montgomery (1874-1942)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/LMM_signed_photo.jpg/40px-LMM_signed_photo.jpg"
      },
       {
        value: "f/fr/franz-halder-57174.html",
        label: "Franz Halder (1884-1972)",
        description: "militar alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Bundesarchiv_Bild_146-1970-052-08%2C_Franz_Halder.jpg/40px-Bundesarchiv_Bild_146-1970-052-08%2C_Franz_Halder.jpg"
      },
       {
        value: "v/vl/vladimir-arseniev-318470.html",
        label: "Vladímir Arséniev (1872-1930)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/VK_Arsenyev.jpg/40px-VK_Arsenyev.jpg"
      },
       {
        value: "m/ma/max-brod-28480.html",
        label: "Max Brod (1884-1968)",
        description: "escritor, periodista checoslovaco",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Max_Brod_v_roce_1914.jpg/40px-Max_Brod_v_roce_1914.jpg"
      },
       {
        value: "r/ro/robert-broom-359576.html",
        label: "Robert Broom (1866-1951)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Robert_Broom00.jpg/40px-Robert_Broom00.jpg"
      },
       {
        value: "d/de/denis-fonvizin-315885.html",
        label: "Denís Fonvizin (1745-1792)",
        description: "escritor ruso",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Engraving_Fonvizin.jpg/40px-Engraving_Fonvizin.jpg"
      },
       {
        value: "c/ch/christina-rossetti-236596.html",
        label: "Christina Rossetti (1830-1894)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Christina_Rossetti_3.jpg/40px-Christina_Rossetti_3.jpg"
      },
       {
        value: "i/is/isabelle-eberhardt-271903.html",
        label: "Isabelle Eberhardt (1877-1904)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Isabelle_Eberhardt.jpg/40px-Isabelle_Eberhardt.jpg"
      },
       {
        value: "w/wa/walter-pater-352528.html",
        label: "Walter Pater (1839-1894)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Walter-pater-1.jpg/40px-Walter-pater-1.jpg"
      },
       {
        value: "c/ch/christian-august-vulpius-65376.html",
        label: "Christian August Vulpius (1762-1827)",
        description: "escritor alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Christian_Vulpius.jpg/40px-Christian_Vulpius.jpg"
      },
       {
        value: "v/vl/vladimir-nemirovich-danchenko-203860.html",
        label: "Vladimir Nemirovich-Danchenko (1858-1943)",
        description: "director teatral ruso",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Vladimir_Nemirovich_Danchenko.jpg/40px-Vladimir_Nemirovich_Danchenko.jpg"
      },
       {
        value: "s/se/serguei-soloviov-505031.html",
        label: "Serguéi Soloviov (1820-1879)",
        description: "historiador ruso",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Solovjev_S._M..jpg/40px-Solovjev_S._M..jpg"
      },
       {
        value: "a/aj/ajad-haam-380425.html",
        label: "Ajad Ha'am (1856-1927)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Ahad_Haam.jpg/40px-Ahad_Haam.jpg"
      },
       {
        value: "k/kr/krisjanis-barons-284106.html",
        label: "Krišjānis Barons (1835-1923)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Kri%C5%A1j%C4%81nis_Barons_1910.gads.jpg/40px-Kri%C5%A1j%C4%81nis_Barons_1910.gads.jpg"
      },
       {
        value: "a/al/allan-kardec-240643.html",
        label: "Allan Kardec (1804-1869)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Alan_Kardec_1.jpg/40px-Alan_Kardec_1.jpg"
      },
       {
        value: "j/ju/jules-bastide-352398.html",
        label: "Jules Bastide (1800-1879)",
        description: "político francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Jules_Bastide.jpg/40px-Jules_Bastide.jpg"
      },
       {
        value: "j/jo/jose-de-alencar-455703.html",
        label: "José de Alencar (1829-1877)",
        description: "novelista, dramaturgo, ensayista, periodista, político y crítico literario brasileño",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Jos%C3%A9_de_Alencar.jpg/40px-Jos%C3%A9_de_Alencar.jpg"
      },
       {
        value: "w/we/werner-sutermeister-124600.html",
        label: "Werner Sutermeister (1868-1939)",
        description: "escritor suizo",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Werner_Sutermeister.jpg/40px-Werner_Sutermeister.jpg"
      },
       {
        value: "g/ge/georges-bernanos-315072.html",
        label: "Georges Bernanos (1888-1948)",
        description: "escritor francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Georges-Bernanos.jpg/40px-Georges-Bernanos.jpg"
      },
       {
        value: "c/ca/camilo-pessanha-286722.html",
        label: "Camilo Pessanha (1867-1926)",
        description: "escritor portugués",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Camilopessanha.jpg/40px-Camilopessanha.jpg"
      },
       {
        value: "l/lo/louise-bertin-445123.html",
        label: "Louise Bertin (1805-1877)",
        description: "compositora francesa",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Louise_Bertin.jpg/40px-Louise_Bertin.jpg"
      },
       {
        value: "m/mi/mijail-kuzmin-460352.html",
        label: "Mijaíl Kuzmin (1872-1936)",
        description: "escritor ruso",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Kuzmin.jpg/40px-Kuzmin.jpg"
      },
       {
        value: "e/ed/edith-stein-76749.html",
        label: "Edith Stein (1891-1942)",
        description: "filósofa, mística, religiosa carmelita, mártir y santa alemana de origen judío",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Edith_Stein_%28ca._1938-1939%29.jpg/40px-Edith_Stein_%28ca._1938-1939%29.jpg"
      },
       {
        value: "d/da/david-brewster-168468.html",
        label: "David Brewster (1781-1868)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/David-Brewster.jpg/40px-David-Brewster.jpg"
      },
       {
        value: "j/ju/juan-tutau-y-verges-384582.html",
        label: "Juan Tutau y Verges (1829-1893)",
        description: "político español",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Juan_Tutau_y_Verges.jpg/40px-Juan_Tutau_y_Verges.jpg"
      },
       {
        value: "c/ch/christoph-friedrich-nicolai-215853.html",
        label: "Christoph Friedrich Nicolai (1733-1811)",
        description: "escritor alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Friedrich_Nicolai_nach_Chodowiecki.jpg/40px-Friedrich_Nicolai_nach_Chodowiecki.jpg"
      },
       {
        value: "s/si/siegfried-wagner-143867.html",
        label: "Siegfried Wagner (1869-1930)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Siegfried_Wagner_%28composer%29.jpg/40px-Siegfried_Wagner_%28composer%29.jpg"
      },
       {
        value: "l/lo/louis-b-mayer-319682.html",
        label: "Louis B. Mayer (1884-1957)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Louis_B_Mayer_cropped.jpg/40px-Louis_B_Mayer_cropped.jpg"
      },
       {
        value: "j/ja/james-george-frazer-151936.html",
        label: "James George Frazer (1854-1941)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/JamesGeorgeFrazer.jpg/40px-JamesGeorgeFrazer.jpg"
      },
       {
        value: "a/an/andre-gide-47484.html",
        label: "André Gide (1869-1951)",
        description: "escritor francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Gide_1920_cropped.jpg/40px-Gide_1920_cropped.jpg"
      },
       {
        value: "j/jo/john-muir-379580.html",
        label: "John Muir (1838-1914)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/John_Muir_1912.jpg/40px-John_Muir_1912.jpg"
      },
       {
        value: "e/eg/egron-lundgren-426033.html",
        label: "Egron Lundgren (1815-1875)",
        description: "artista sueco",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Egron_Lundgren.jpg/40px-Egron_Lundgren.jpg"
      },
       {
        value: "o/ot/otto-strasser-76640.html",
        label: "Otto Strasser (1897-1974)",
        description: "político alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Otto_Strasser.jpg/40px-Otto_Strasser.jpg"
      },
       {
        value: "a/ad/adolf-glabrenner-72840.html",
        label: "Adolf Glaßbrenner (1810-1876)",
        description: "escritor alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Adolf_Glassbrenner.jpg/40px-Adolf_Glassbrenner.jpg"
      },
       {
        value: "a/ar/arne-garborg-467497.html",
        label: "Arne Garborg (1851-1924)",
        description: "escritor noruego",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Garborg_portrett.jpg/40px-Garborg_portrett.jpg"
      },
       {
        value: "a/ad/adolphe-stoeber-365837.html",
        label: "Adolphe Stoeber (1810-1892)",
        description: "escritor francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Adolf_Stoeber.jpg/40px-Adolf_Stoeber.jpg"
      },
       {
        value: "y/yo/yosa-buson-31523.html",
        label: "Yosa Buson (1716-1783)",
        description: "pintor de Japon",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Yosa_Buson.jpg/40px-Yosa_Buson.jpg"
      },
       {
        value: "a/ag/agnes-von-krusenstjerna-239386.html",
        label: "Agnes von Krusenstjerna (1894-1940)",
        description: "escritora sueca",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Agnes_von_Krusenstjerna_i_sitt_hem.jpg/40px-Agnes_von_Krusenstjerna_i_sitt_hem.jpg"
      },
       {
        value: "s/si/siegbert-tarrasch-76558.html",
        label: "Siegbert Tarrasch (1862-1934)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Dr._Siegbert_Tarrasch.jpg/40px-Dr._Siegbert_Tarrasch.jpg"
      },
       {
        value: "h/he/helena-blavatsky-189454.html",
        label: "Helena Blavatsky (1831-1891)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Helena_Petrovna_Blavatsky.jpg/40px-Helena_Petrovna_Blavatsky.jpg"
      },
       {
        value: "m/mu/mungo-park-219086.html",
        label: "Mungo Park (1771-1806)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Mungo_Park_portrait.jpg/40px-Mungo_Park_portrait.jpg"
      },
       {
        value: "f/fr/francois-mauriac-81685.html",
        label: "François Mauriac (1885-1970)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Fran%C3%A7ois_Mauriac_%281932%29.jpg/40px-Fran%C3%A7ois_Mauriac_%281932%29.jpg"
      },
       {
        value: "c/ca/carl-lindenberg-92337.html",
        label: "Carl Lindenberg (1850-1928)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Carl_Lindenberg_%28Calvet_M._Hahn_2000_Intertwining_Part_2_Image_5%29.jpg/40px-Carl_Lindenberg_%28Calvet_M._Hahn_2000_Intertwining_Part_2_Image_5%29.jpg"
      },
       {
        value: "c/ca/carl-schurz-127437.html",
        label: "Carl Schurz (1829-1906)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Carl_Schurz_1879.jpg/40px-Carl_Schurz_1879.jpg"
      },
       {
        value: "j/ju/julian-huxley-243419.html",
        label: "Julian Huxley (1887-1975)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Hux-Oxon-72.jpg/40px-Hux-Oxon-72.jpg"
      },
       {
        value: "a/an/anthony-trollope-318399.html",
        label: "Anthony Trollope (1815-1882)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Sarony%2C_Napoleon_%281821-1896%29_-_Trollope%2C_Anthony_%281815-1882%29.jpg/40px-Sarony%2C_Napoleon_%281821-1896%29_-_Trollope%2C_Anthony_%281815-1882%29.jpg"
      },
       {
        value: "h/he/henry-ernest-of-stolberg-wernigerode-96483.html",
        label: "Henry Ernest of Stolberg-Wernigerode (1716-1778)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/StolbergHE.jpg/40px-StolbergHE.jpg"
      },
       {
        value: "c/ce/cesar-vallejo-222744.html",
        label: "César Vallejo (1892-1938)",
        description: "poeta peruano",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Cesar_vallejo_1929.jpg/40px-Cesar_vallejo_1929.jpg"
      },
       {
        value: "g/ge/georges-duhamel-20733.html",
        label: "Georges Duhamel (1884-1966)",
        description: "autor francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Georges_Duhamel_1930.jpg/40px-Georges_Duhamel_1930.jpg"
      },
       {
        value: "h/h-/h-g-wells-42511.html",
        label: "H. G. Wells (1866-1946)",
        description: "escritor británico",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/H.G._Wells_by_Beresford.jpg/40px-H.G._Wells_by_Beresford.jpg"
      },
       {
        value: "t/th/thomas-chatterton-380509.html",
        label: "Thomas Chatterton (1752-1770)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Thomas_Chatterton_wb.jpg/40px-Thomas_Chatterton_wb.jpg"
      },
       {
        value: "j/ja/james-russell-lowell-449670.html",
        label: "James Russell Lowell (1819-1891)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/James_Russell_Lowell_-_1855.jpg/40px-James_Russell_Lowell_-_1855.jpg"
      },
       {
        value: "r/re/reinhard-sorge-69201.html",
        label: "Reinhard Sorge (1892-1916)",
        description: "poeta alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/RJSorge1.jpg/40px-RJSorge1.jpg"
      },
       {
        value: "a/al/aleksandr-herzen-201221.html",
        label: "Aleksandr Herzen (1812-1870)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Herzen_ge.jpg/40px-Herzen_ge.jpg"
      },
       {
        value: "e/er/ernst-barlach-156890.html",
        label: "Ernst Barlach (1870-1938)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Barlach_Selbstbildnis_I_%281928%29.jpg/40px-Barlach_Selbstbildnis_I_%281928%29.jpg"
      },
       {
        value: "j/ji/jim-corbett-468312.html",
        label: "Jim Corbett (1875-1955)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Jim_Corbett.jpg/40px-Jim_Corbett.jpg"
      },
       {
        value: "h/he/hermann-kasack-77708.html",
        label: "Hermann Kasack (1896-1966)",
        description: "escritor alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Bundesarchiv_Bild_183-R76032%2C_Hamburg%2C_Tagung_PEN-Zentrum.jpg/40px-Bundesarchiv_Bild_183-R76032%2C_Hamburg%2C_Tagung_PEN-Zentrum.jpg"
      },
       {
        value: "g/go/gottfried-kinkel-68325.html",
        label: "Gottfried Kinkel (1815-1882)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/ETH-BIB-Kinkel%2C_Gottfried_%281815-1882%29-Portrait-Portr_00159.tif_%28cropped%29.jpg/40px-ETH-BIB-Kinkel%2C_Gottfried_%281815-1882%29-Portrait-Portr_00159.tif_%28cropped%29.jpg"
      },
       {
        value: "y/ye/yevgeni-zamiatin-204868.html",
        label: "Yevgeni Zamiatin (1884-1937)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Kustodiev_Zamyatin.jpg/40px-Kustodiev_Zamyatin.jpg"
      },
       {
        value: "g/gi/giuseppe-ungaretti-311802.html",
        label: "Giuseppe Ungaretti (1888-1970)",
        description: "poeta italiano",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Ungaretti_Giovane.jpg/40px-Ungaretti_Giovane.jpg"
      },
       {
        value: "c/ca/carlo-gozzi-263270.html",
        label: "Carlo Gozzi (1720-1806)",
        description: "dramaturgo italiano",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Carlo_Gozzi.jpg/40px-Carlo_Gozzi.jpg"
      },
       {
        value: "j/jo/john-lloyd-stephens-56635.html",
        label: "John Lloyd Stephens (1805-1852)",
        description: "explorador, escritor y diplomático estadounidense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/JohnLloydStephens.jpg/40px-JohnLloydStephens.jpg"
      },
       {
        value: "w/wi/wilhelm-marr-60312.html",
        label: "Wilhelm Marr (1819-1904)",
        description: "político y racista alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Wilhelm_Marr.jpg/40px-Wilhelm_Marr.jpg"
      },
       {
        value: "a/an/andres-bello-439195.html",
        label: "Andrés Bello (1781-1865)",
        description: "poeta, filólogo, educador y jurista venezolano",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/AndresBello.jpg/40px-AndresBello.jpg"
      },
       {
        value: "a/al/aleksei-nikolayevich-tolstoi-192279.html",
        label: "Alekséi Nikoláyevich Tolstói (1883-1945)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/ANTolstoy.jpg/40px-ANTolstoy.jpg"
      },
       {
        value: "a/ab/abay-kunanbayuli-304890.html",
        label: "Abay Kunanbayuli (1845-1904)",
        description: "poeta, filósofo y compositor kazakh",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Abai_Kunanbaev.jpg/40px-Abai_Kunanbaev.jpg"
      },
       {
        value: "g/ge/georges-cuvier-171969.html",
        label: "Georges Cuvier (1769-1832)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Georges_Cuvier_3.jpg/40px-Georges_Cuvier_3.jpg"
      },
       {
        value: "e/er/ernst-wiechert-64850.html",
        label: "Ernst Wiechert (1887-1950)",
        description: "escritor alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/ErnstWiechert.jpg/40px-ErnstWiechert.jpg"
      },
       {
        value: "p/po/pompeyo-fabra-379785.html",
        label: "Pompeyo Fabra (1868-1948)",
        description: "Lingüista catalan",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Pompeu_fabra.jpg/40px-Pompeu_fabra.jpg"
      },
       {
        value: "c/ch/charles-dickens-5686.html",
        label: "Charles Dickens (1812-1870)",
        description: "escritor británico",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Charles_Dickens_-_Project_Gutenberg_eText_13103.jpg/40px-Charles_Dickens_-_Project_Gutenberg_eText_13103.jpg"
      },
       {
        value: "m/ma/marina-tsvetayeva-188526.html",
        label: "Marina Tsvetáyeva (1892-1941)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Tsvetaeva.jpg/40px-Tsvetaeva.jpg"
      },
       {
        value: "g/ge/george-gordon-byron-5679.html",
        label: "George Gordon Byron (1788-1824)",
        description: "escritor británico",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/George_Gordon_Byron%2C_6th_Baron_Byron_by_Richard_Westall.jpg/40px-George_Gordon_Byron%2C_6th_Baron_Byron_by_Richard_Westall.jpg"
      },
       {
        value: "o/ot/otto-erich-hartleben-76279.html",
        label: "Otto Erich Hartleben (1864-1905)",
        description: "escritor alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Otto_Erich_Hartleben_Portraet.jpg/40px-Otto_Erich_Hartleben_Portraet.jpg"
      },
       {
        value: "v/va/valtesse-de-la-bigne-274074.html",
        label: "Valtesse de La Bigne (1848-1910)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Henri_Gervex_Portrait_Mlle_Valtesse_de_la_Bigne.jpg/40px-Henri_Gervex_Portrait_Mlle_Valtesse_de_la_Bigne.jpg"
      },
       {
        value: "b/bo/boris-savinkov-381859.html",
        label: "Borís Sávinkov (1879-1925)",
        description: "escritor ruso",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Boris_Viktorovich_Savinkov.jpg/40px-Boris_Viktorovich_Savinkov.jpg"
      },
       {
        value: "c/co/condesa-de-segur-465681.html",
        label: "Condesa de Ségur (1799-1874)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Sophie_de_S%C3%A9gur.jpg/40px-Sophie_de_S%C3%A9gur.jpg"
      },
       {
        value: "p/pi/pierre-reverdy-379931.html",
        label: "Pierre Reverdy (1889-1960)",
        description: "poeta francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Amedeo_Modigliani%2C_Pierre_Riverdy%2C_1915.jpg/40px-Amedeo_Modigliani%2C_Pierre_Riverdy%2C_1915.jpg"
      },
       {
        value: "c/ce/cesar-cui-208546.html",
        label: "César Cui (1835-1918)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Cui_1880s_CuiIP_109_600.jpg/40px-Cui_1880s_CuiIP_109_600.jpg"
      },
       {
        value: "c/ca/carles-bosch-de-la-trinxeria-435285.html",
        label: "Carles Bosch de la Trinxeria (1831-1897)",
        description: "escritor español",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Carles_Bosch_de_la_Trinxeria.jpg/40px-Carles_Bosch_de_la_Trinxeria.jpg"
      },
       {
        value: "a/ad/adolph-von-knigge-213681.html",
        label: "Adolph von Knigge (1752-1796)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Knigge_Freiherr.jpg/40px-Knigge_Freiherr.jpg"
      },
       {
        value: "o/ot/otto-brahm-71903.html",
        label: "Otto Brahm (1856-1912)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Otto_brahm_critic_1905.jpg/40px-Otto_brahm_critic_1905.jpg"
      },
       {
        value: "b/bo/bozena-nemcova-157970.html",
        label: "Božena Němcová (1820-1862)",
        description: "escritora checa",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Bozena_Nemcova.jpg/40px-Bozena_Nemcova.jpg"
      },
       {
        value: "c/ch/charles-baudelaire-501.html",
        label: "Charles Baudelaire (1821-1867)",
        description: "poeta y crítico de arte francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Baudelaire_crop.jpg/40px-Baudelaire_crop.jpg"
      },
       {
        value: "j/jo/john-keats-82083.html",
        label: "John Keats (1795-1821)",
        description: "poeta inglés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/John_Keats_by_William_Hilton.jpg/40px-John_Keats_by_William_Hilton.jpg"
      },
       {
        value: "h/he/henry-gray-40319.html",
        label: "Henry Gray (1825-1861)",
        description: "anatomista y cirujano británico",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Henry_Gray_bw_photo_portrait.jpg/40px-Henry_Gray_bw_photo_portrait.jpg"
      },
       {
        value: "j/jo/john-burgoyne-436775.html",
        label: "John Burgoyne (1722-1792)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/BurgoyneByReynolds.jpg/40px-BurgoyneByReynolds.jpg"
      },
       {
        value: "r/ro/roman-ingarden-355355.html",
        label: "Roman Ingarden (1893-1970)",
        description: "filósofo polaco",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Witkacy_Roman_Ingarden_1937.jpg/40px-Witkacy_Roman_Ingarden_1937.jpg"
      },
       {
        value: "p/pi/pierre-jean-de-beranger-324998.html",
        label: "Pierre-Jean de Béranger (1780-1857)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Pierre_Jean_de_Beranger.jpg/40px-Pierre_Jean_de_Beranger.jpg"
      },
       {
        value: "d/do/domingo-faustino-sarmiento-254041.html",
        label: "Domingo Faustino Sarmiento (1811-1888)",
        description: "político, escritor, docente, periodista, maestro y militar argentino",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Sarmiento.jpg/40px-Sarmiento.jpg"
      },
       {
        value: "v/vl/vladimir-bogoraz-113480.html",
        label: "Vladimir Bogoraz (1865-1936)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Bogoraz_young.jpg/40px-Bogoraz_young.jpg"
      },
       {
        value: "r/re/rene-guenon-496850.html",
        label: "René Guénon (1886-1951)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Rene-guenon-1925.jpg/40px-Rene-guenon-1925.jpg"
      },
       {
        value: "i/im/immanuel-kant-9312.html",
        label: "Immanuel Kant (1724-1804)",
        description: "filósofo prusiano",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Immanuel_Kant_%28painted_portrait%29.jpg/40px-Immanuel_Kant_%28painted_portrait%29.jpg"
      },
       {
        value: "j/jo/john-greenleaf-whittier-458372.html",
        label: "John Greenleaf Whittier (1807-1892)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/John_Greenleaf_Whittier_November_25_1885.jpg/40px-John_Greenleaf_Whittier_November_25_1885.jpg"
      },
       {
        value: "r/ru/ruben-dario-173767.html",
        label: "Rubén Darío (1867-1916)",
        description: "poeta, periodista y diplomático nicaragüense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Rub%C3%A9n_Dar%C3%ADo.jpg/40px-Rub%C3%A9n_Dar%C3%ADo.jpg"
      },
       {
        value: "e/ed/edmond-rostand-202749.html",
        label: "Edmond Rostand (1868-1918)",
        description: "escritor francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Edmond_Rostand.jpg/40px-Edmond_Rostand.jpg"
      },
       {
        value: "a/al/albert-marquet-267858.html",
        label: "Albert Marquet (1875-1947)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Albert_Marquet_%281875-1947%29%2C_c._1920s.jpg/40px-Albert_Marquet_%281875-1947%29%2C_c._1920s.jpg"
      },
       {
        value: "a/al/alexander-woollcott-361859.html",
        label: "Alexander Woollcott (1887-1943)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Alexander_Woollcott_%281939%29.jpg/40px-Alexander_Woollcott_%281939%29.jpg"
      },
       {
        value: "a/al/alexander-william-kinglake-334080.html",
        label: "Alexander William Kinglake (1809-1891)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Alexander_William_Kinglake_by_Harriet_M._Haviland.jpg/40px-Alexander_William_Kinglake_by_Harriet_M._Haviland.jpg"
      },
       {
        value: "f/fr/frederick-russell-burnham-458036.html",
        label: "Frederick Russell Burnham (1861-1947)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Major_Frederick_Russell_Burnham_DSO_1901.jpg/40px-Major_Frederick_Russell_Burnham_DSO_1901.jpg"
      },
       {
        value: "j/jo/johann-caspar-lavater-123918.html",
        label: "Johann Caspar Lavater (1741-1801)",
        description: "poeta suizo",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Johann_Kaspar_Lavater.jpg/40px-Johann_Kaspar_Lavater.jpg"
      },
       {
        value: "t/th/thomas-de-quincey-317160.html",
        label: "Thomas de Quincey (1785-1859)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Thomas_de_Quincey_-_Project_Gutenberg_eText_16026.jpg/40px-Thomas_de_Quincey_-_Project_Gutenberg_eText_16026.jpg"
      },
       {
        value: "m/mi/miles-franklin-984.html",
        label: "Miles Franklin (1879-1954)",
        description: "escritora australiana",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Miles_franklin.jpg/40px-Miles_franklin.jpg"
      },
       {
        value: "h/he/henry-de-montherlant-379956.html",
        label: "Henry de Montherlant (1895-1972)",
        description: "escritor francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Montherlant_par_J-Emile_Blanche_1922.jpg/40px-Montherlant_par_J-Emile_Blanche_1922.jpg"
      },
       {
        value: "a/an/antoine-de-rivarol-203952.html",
        label: "Antoine de Rivarol (1753-1801)",
        description: "escritor francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Rivarol_Antoine1.jpg/40px-Rivarol_Antoine1.jpg"
      },
       {
        value: "h/he/hermann-bahr-94034.html",
        label: "Hermann Bahr (1863-1934)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Hermann_Bahr_1891.jpg/40px-Hermann_Bahr_1891.jpg"
      },
       {
        value: "p/pr/premchand-174152.html",
        label: "Premchand (1880-1936)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Prem_chand.jpg/40px-Prem_chand.jpg"
      },
       {
        value: "b/br/branislav-nusic-315136.html",
        label: "Branislav Nušić (1864-1938)",
        description: "escritor serbio",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Branislav_Nu%C5%A1i%C4%87_1904.jpg/40px-Branislav_Nu%C5%A1i%C4%87_1904.jpg"
      },
       {
        value: "e/el/elin-wagner-270468.html",
        label: "Elin Wägner (1882-1949)",
        description: "escritora sueca",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/ElinWagner.jpg/40px-ElinWagner.jpg"
      },
       {
        value: "r/ro/rosa-chacel-468852.html",
        label: "Rosa Chacel (1898-1994)",
        description: "escritora española de la Generación del 27",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Rosa_Chacel.jpg/40px-Rosa_Chacel.jpg"
      },
       {
        value: "a/ad/adolf-muhry-124317.html",
        label: "Adolf Mühry (1810-1888)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Adolf_M%C3%BChry.jpg/40px-Adolf_M%C3%BChry.jpg"
      },
       {
        value: "s/si/simon-newcomb-164401.html",
        label: "Simon Newcomb (1835-1909)",
        description: "astrónomo estadounidense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Simon_Newcomb_01.jpg/40px-Simon_Newcomb_01.jpg"
      },
       {
        value: "t/th/thomas-reid-316347.html",
        label: "Thomas Reid (1710-1796)",
        description: "filósofo escocés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/ThomasReid.jpg/40px-ThomasReid.jpg"
      },
       {
        value: "w/wi/william-h-prescott-505844.html",
        label: "William H. Prescott (1796-1859)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/William_Hickling_Prescott_by_Southworth_%26_Hawes%2C_c1850-9-crop.jpg/40px-William_Hickling_Prescott_by_Southworth_%26_Hawes%2C_c1850-9-crop.jpg"
      },
       {
        value: "f/fr/franz-paula-von-schrank-62046.html",
        label: "Franz Paula von Schrank (1747-1835)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Franz_von_Paula_Schrank_-_Jesuit_und_Botaniker.jpg/40px-Franz_von_Paula_Schrank_-_Jesuit_und_Botaniker.jpg"
      },
       {
        value: "s/se/senna-hoy-92343.html",
        label: "Senna Hoy (1882-1914)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Johannes_Holzmann_aka_Senna_Hoy.jpg/40px-Johannes_Holzmann_aka_Senna_Hoy.jpg"
      },
       {
        value: "j/jo/johann-nepomuk-huber-75037.html",
        label: "Johann Nepomuk Huber (1830-1879)",
        description: "filósofo alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Johann_Huber_Eybl.jpg/40px-Johann_Huber_Eybl.jpg"
      },
       {
        value: "j/jo/jose-ortega-y-gasset-153020.html",
        label: "José Ortega y Gasset (1883-1955)",
        description: "filósofo y ensayista español",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Jose_Ortega_y_Gasset.jpg/40px-Jose_Ortega_y_Gasset.jpg"
      },
       {
        value: "l/li/liliuokalani-de-hawai-107288.html",
        label: "Liliuokalani de Hawái (1838-1917)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Crown_Princess_Liliuokalani_%28Hocken_Collections%29.jpg/40px-Crown_Princess_Liliuokalani_%28Hocken_Collections%29.jpg"
      },
       {
        value: "j/jo/johannes-diermissen-89464.html",
        label: "Johannes Diermissen (1823-1893)",
        description: "autor, escritor y folklorista alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Johannes_Diermissen.jpg/40px-Johannes_Diermissen.jpg"
      },
       {
        value: "f/fr/francois-babeuf-189714.html",
        label: "François Babeuf (1760-1797)",
        description: "François-Noël Babeuf, (Saint Quentin, 23 de noviembre de 1760 - París, 27 de mayo de 1797), político, teórico y revolucionario francés , también conocido como Gracchus o Gracus",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Fran%C3%A7ois-No%C3%ABl_Babeuf.jpg/40px-Fran%C3%A7ois-No%C3%ABl_Babeuf.jpg"
      },
       {
        value: "v/vi/vincas-kudirka-342580.html",
        label: "Vincas Kudirka (1858-1899)",
        description: "escritor lituano",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Kudirka3.jpg/40px-Kudirka3.jpg"
      },
       {
        value: "r/re/rene-schickele-69322.html",
        label: "René Schickele (1883-1940)",
        description: "escritor alemán-francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Ren%C3%A9_Schickele_%281883-1940%29.jpg/40px-Ren%C3%A9_Schickele_%281883-1940%29.jpg"
      },
       {
        value: "o/ot/otto-schmeil-213929.html",
        label: "Otto Schmeil (1860-1943)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Bundesarchiv_Bild_102-09017%2C_Otto_Schmeil.jpg/40px-Bundesarchiv_Bild_102-09017%2C_Otto_Schmeil.jpg"
      },
       {
        value: "e/ew/ewald-christian-von-kleist-213747.html",
        label: "Ewald Christian von Kleist (1715-1759)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Ewald_Christian_von_Kleist_%28Hempel%29.jpg/40px-Ewald_Christian_von_Kleist_%28Hempel%29.jpg"
      },
       {
        value: "f/fa/fanny-crosby-257456.html",
        label: "Fanny Crosby (1820-1915)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Fanny_Crosby.jpg/40px-Fanny_Crosby.jpg"
      },
       {
        value: "m/ma/marie-stopes-442231.html",
        label: "Marie Stopes (1880-1958)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Marie_Stopes.jpg/40px-Marie_Stopes.jpg"
      },
       {
        value: "f/fu/fukuzawa-yukichi-355447.html",
        label: "Fukuzawa Yukichi (1835-1901)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/FukuzawaYukichi.jpg/40px-FukuzawaYukichi.jpg"
      },
       {
        value: "g/ge/georgiana-cavendish-235644.html",
        label: "Georgiana Cavendish (1757-1806)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Joshua_Reynolds_-_Georgiana%2C_Duchess_of_Devonshire.jpg/40px-Joshua_Reynolds_-_Georgiana%2C_Duchess_of_Devonshire.jpg"
      },
       {
        value: "a/an/antoine-henri-jomini-115652.html",
        label: "Antoine-Henri Jomini (1779-1869)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Jomini_Antoine-Henri.jpg/40px-Jomini_Antoine-Henri.jpg"
      },
       {
        value: "j/jo/john-hanning-speke-125084.html",
        label: "John Hanning Speke (1827-1864)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/ST-Speke.jpg/40px-ST-Speke.jpg"
      },
       {
        value: "h/he/heinrich-barth-60141.html",
        label: "Heinrich Barth (1821-1865)",
        description: "escritor, geografo alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Barth_Unterschrift.jpg/40px-Barth_Unterschrift.jpg"
      },
       {
        value: "a/an/andrei-muresanu-502292.html",
        label: "Andrei Mureșanu (1816-1863)",
        description: "escritor rumano",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Misu_Popp_-_Portretul_lui_Andrei_Muresanu.jpg/40px-Misu_Popp_-_Portretul_lui_Andrei_Muresanu.jpg"
      },
       {
        value: "f/fr/friedrich-august-wolf-65337.html",
        label: "Friedrich August Wolf (1759-1824)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Friedrich_August_Wolf.jpg/40px-Friedrich_August_Wolf.jpg"
      },
       {
        value: "o/o-/o-henry-perez-172788.html",
        label: "O. Henry Perez (1862-1910)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/William_Sydney_Porter_by_doubleday.jpg/40px-William_Sydney_Porter_by_doubleday.jpg"
      },
       {
        value: "r/ra/rafael-altamira-425592.html",
        label: "Rafael Altamira (1866-1951)",
        description: "historiador, jurista, crítico literario y escritor español",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Rafael_Altamira_1.jpg/40px-Rafael_Altamira_1.jpg"
      },
       {
        value: "w/wi/willa-cather-229480.html",
        label: "Willa Cather (1873-1947)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Willa_Cather_ca._1912_wearing_necklace_from_Sarah_Orne_Jewett.jpg/40px-Willa_Cather_ca._1912_wearing_necklace_from_Sarah_Orne_Jewett.jpg"
      },
       {
        value: "p/pe/peter-forsskal-27684.html",
        label: "Peter Forsskål (1732-1763)",
        description: "naturalista, explorador, y orientalista, botánico sueco",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Peter_Forsskaal_year1760.jpg/40px-Peter_Forsskaal_year1760.jpg"
      },
       {
        value: "t/th/theodor-mommsen-25351.html",
        label: "Theodor Mommsen (1817-1903)",
        description: "jurista, filólogo e historiador alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Theodor_Mommsen_2.jpg/40px-Theodor_Mommsen_2.jpg"
      },
       {
        value: "l/lu/ludwig-renn-61585.html",
        label: "Ludwig Renn (1889-1979)",
        description: "escritor alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Ludwig_Renn.jpg/40px-Ludwig_Renn.jpg"
      },
       {
        value: "r/ru/ruggero-leoncavallo-189015.html",
        label: "Ruggero Leoncavallo (1857-1919)",
        description: "compositor italiano",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Leonkavallo_Postcard-1910.jpg/40px-Leonkavallo_Postcard-1910.jpg"
      },
       {
        value: "h/he/hedwig-lachmann-72070.html",
        label: "Hedwig Lachmann (1865-1918)",
        description: "escritora alemana",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Hedwig_Lachmann_-_1865-1918.jpg/40px-Hedwig_Lachmann_-_1865-1918.jpg"
      },
       {
        value: "v/vu/vuk-stefanovic-karadzic-202815.html",
        label: "Vuk Stefanović Karadžić (1787-1864)",
        description: "escritor y lingüista serbio",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/VukKaradzic.jpg/40px-VukKaradzic.jpg"
      },
       {
        value: "g/ge/georg-kerschensteiner-61195.html",
        label: "Georg Kerschensteiner (1854-1932)",
        description: "matemático de Alemania",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/WP_Georg_Kerschensteiner.jpg/40px-WP_Georg_Kerschensteiner.jpg"
      },
       {
        value: "l/lu/ludwig-wittgenstein-9391.html",
        label: "Ludwig Wittgenstein (1889-1951)",
        description: "filósofo nacido en Viena",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Ludwig_Wittgenstein.jpg/40px-Ludwig_Wittgenstein.jpg"
      },
       {
        value: "t/th/thea-von-harbou-58866.html",
        label: "Thea von Harbou (1888-1954)",
        description: "guionista cinematográfica, actriz y escritora alemana",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/WP_Thea_von_Harbou.jpg/40px-WP_Thea_von_Harbou.jpg"
      },
       {
        value: "a/al/aleksandr-ostrovski-171976.html",
        label: "Aleksandr Ostrovski (1823-1886)",
        description: "dramaturgo ruso",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Alexander_Ostrovsky_by_Vasily_Perov.jpg/40px-Alexander_Ostrovsky_by_Vasily_Perov.jpg"
      },
       {
        value: "s/sa/saray-156898.html",
        label: "SAray (1879-1964)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Alma_Mahler_1899.jpg/40px-Alma_Mahler_1899.jpg"
      },
       {
        value: "j/ju/jules-guesde-379699.html",
        label: "Jules Guesde (1845-1922)",
        description: "personalidad política francesa",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Jules_Guesde.jpg/40px-Jules_Guesde.jpg"
      },
       {
        value: "t/th/theo-van-doesburg-160422.html",
        label: "Theo van Doesburg (1883-1931)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Theo_van_Doesburg_in_Aubette.jpg/40px-Theo_van_Doesburg_in_Aubette.jpg"
      },
       {
        value: "p/pa/paul-hindemith-57244.html",
        label: "Paul Hindemith (1895-1963)",
        description: "compositor y musicólogo",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Paul_Hindemith_1923.jpg/40px-Paul_Hindemith_1923.jpg"
      },
       {
        value: "m/ma/maria-bashkirtseff-255253.html",
        label: "Maria Bashkirtseff (1858-1884)",
        description: "Pintora francesa  nacida en el Imperio ruso",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/%D0%91%D0%B0%D1%88%D0%BA%D0%B8%D1%80%D1%86%D0%B5%D0%B2%D0%B0.jpg/40px-%D0%91%D0%B0%D1%88%D0%BA%D0%B8%D1%80%D1%86%D0%B5%D0%B2%D0%B0.jpg"
      },
       {
        value: "s/sa/sabino-arana-332663.html",
        label: "Sabino Arana (1865-1903)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Sabin_Arana_Goiria_%281865-1903%29.jpg/40px-Sabin_Arana_Goiria_%281865-1903%29.jpg"
      },
       {
        value: "b/br/bruno-schulz-148886.html",
        label: "Bruno Schulz (1892-1942)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Drohobycz_bruno_schulz_08_2008_adpt.jpg/40px-Drohobycz_bruno_schulz_08_2008_adpt.jpg"
      },
       {
        value: "l/le/lewis-wallace-357102.html",
        label: "Lewis Wallace (1827-1905)",
        description: "abogado, general de la Unión en la Guerra Civil estadounidense,gobernador de Nuevo Mexico, estadista de América, y autor, más conocido por su novela Ben-Hur: A tale of the Christ",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Lew_Wallace_-_Brady-Handy.jpg/40px-Lew_Wallace_-_Brady-Handy.jpg"
      },
       {
        value: "v/vi/vicki-baum-93444.html",
        label: "Vicki Baum (1888-1960)",
        description: "escritora austríaca",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Vicki_Baum.jpg/40px-Vicki_Baum.jpg"
      },
       {
        value: "k/ko/konstantin-tsiolkovski-41239.html",
        label: "Konstantín Tsiolkovski (1857-1935)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Tsiolkovsky.jpg/40px-Tsiolkovsky.jpg"
      },
       {
        value: "n/no/norbert-elias-75812.html",
        label: "Norbert Elias (1897-1990)",
        description: "sociólogo alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Norbert_Elias_%281987%29.jpg/40px-Norbert_Elias_%281987%29.jpg"
      },
       {
        value: "h/he/henry-james-170509.html",
        label: "Henry James (1843-1916)",
        description: "escritor estadounidense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Henry_James_by_John_Singer_Sargent_cleaned.jpg/40px-Henry_James_by_John_Singer_Sargent_cleaned.jpg"
      },
       {
        value: "d/do/dorothy-day-150281.html",
        label: "Dorothy Day (1897-1980)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Dorothy_Day_1916.jpg/40px-Dorothy_Day_1916.jpg"
      },
       {
        value: "j/jo/jose-maria-de-heredia-334970.html",
        label: "José María de Heredia (1842-1905)",
        description: "escritor francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Jos%C3%A9-Maria_de_Heredia_1896.jpg/40px-Jos%C3%A9-Maria_de_Heredia_1896.jpg"
      },
       {
        value: "m/ma/matilde-hidalgo-de-procel-187187.html",
        label: "Matilde Hidalgo de Procel (1889-1974)",
        description: "medica y activista feminista de Ecuador",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Matilde_Hidalgo.jpg/40px-Matilde_Hidalgo.jpg"
      },
       {
        value: "a/al/albrecht-von-haller-123225.html",
        label: "Albrecht von Haller (1708-1777)",
        description: "suizo doctor y escritor",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Albrecht_von_Haller_1736.jpg/40px-Albrecht_von_Haller_1736.jpg"
      },
       {
        value: "m/ma/maksimilian-voloshin-358885.html",
        label: "Maksimilián Voloshin (1877-1932)",
        description: "poeta ruso",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Maximilan_Voloshin.jpg/40px-Maximilan_Voloshin.jpg"
      },
       {
        value: "a/al/alphonse-de-chateaubriant-373251.html",
        label: "Alphonse de Châteaubriant (1877-1951)",
        description: "escritor francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Chateaubriant%2C_Alphonse.jpg/40px-Chateaubriant%2C_Alphonse.jpg"
      },
       {
        value: "i/iv/ivan-turguenev-42831.html",
        label: "Iván Turguénev (1818-1883)",
        description: "escritor ruso",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Turgenev_by_Repin.jpg/40px-Turgenev_by_Repin.jpg"
      },
       {
        value: "m/ma/maria-vayreda-54215.html",
        label: "Marià Vayreda (1853-1903)",
        description: "escritor español",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/CasaRamon-Vayreda-1332sh.jpg/40px-CasaRamon-Vayreda-1332sh.jpg"
      },
       {
        value: "j/jo/jozsef-eotvos-469996.html",
        label: "József Eötvös (1813-1871)",
        description: "político húngaro",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Barabas-eotvos.jpg/40px-Barabas-eotvos.jpg"
      },
       {
        value: "j/jo/johann-uz-69951.html",
        label: "Johann Uz (1720-1796)",
        description: "poeta alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Johann_Uz.jpg/40px-Johann_Uz.jpg"
      },
       {
        value: "k/ku/kuzma-petrov-vodkin-364226.html",
        label: "Kuzmá Petrov-Vodkin (1878-1939)",
        description: "artista ruso",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/PetrovVodkin_Avtoportret_1918.jpg/40px-PetrovVodkin_Avtoportret_1918.jpg"
      },
       {
        value: "w/wa/walt-whitman-81438.html",
        label: "Walt Whitman (1819-1892)",
        description: "poeta, enfermero voluntario, ensayista, periodista y humanista estadounidense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Walt_Whitman_-_George_Collins_Cox.jpg/40px-Walt_Whitman_-_George_Collins_Cox.jpg"
      },
       {
        value: "j/ja/james-fenimore-cooper-167856.html",
        label: "James Fenimore Cooper (1789-1851)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/James_Fenimore_Cooper_by_Jarvis.jpg/40px-James_Fenimore_Cooper_by_Jarvis.jpg"
      },
       {
        value: "v/vi/victor-hugo-535.html",
        label: "Victor Hugo (1802-1885)",
        description: "poeta, novelista y dramaturgo francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Victor_Hugo.jpg/40px-Victor_Hugo.jpg"
      },
       {
        value: "e/ed/edouard-vaillant-274464.html",
        label: "Édouard Vaillant (1840-1915)",
        description: "personalidad política francesa",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/%C3%89douard_Vaillant_at_P%C3%A8re_Lachaise.jpg/40px-%C3%89douard_Vaillant_at_P%C3%A8re_Lachaise.jpg"
      },
       {
        value: "g/ge/georges-feydeau-49465.html",
        label: "Georges Feydeau (1862-1921)",
        description: "escritor francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/G_Feydeau_Carolus-Duran_Lille_2918.jpg/40px-G_Feydeau_Carolus-Duran_Lille_2918.jpg"
      },
       {
        value: "g/gh/ghalib-107000.html",
        label: "Ghalib (1796-1869)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Mirza_Ghalib_photograph.jpg/40px-Mirza_Ghalib_photograph.jpg"
      },
       {
        value: "e/el/eleanor-h-porter-235368.html",
        label: "Eleanor H. Porter (1868-1920)",
        description: "novelista estadounidense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/EleanorH.Porter.jpg/40px-EleanorH.Porter.jpg"
      },
       {
        value: "k/ka/karen-blixen-182804.html",
        label: "Karen Blixen (1885-1962)",
        description: "escritora danesa",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Karen_Blixen_cropped_from_larger_original.jpg/40px-Karen_Blixen_cropped_from_larger_original.jpg"
      },
       {
        value: "c/ca/camilla-collett-243045.html",
        label: "Camilla Collett (1813-1895)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Camilla_Collett_1839.jpg/40px-Camilla_Collett_1839.jpg"
      },
       {
        value: "a/ar/arnold-ruge-61558.html",
        label: "Arnold Ruge (1802-1880)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Arnold_Ruge_Schriftsteller.jpg/40px-Arnold_Ruge_Schriftsteller.jpg"
      },
       {
        value: "k/ka/karl-freiherr-von-muffling-69411.html",
        label: "Karl Freiherr von Müffling (1775-1851)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/WP_Karl_von_Muffling.jpg/40px-WP_Karl_von_Muffling.jpg"
      },
       {
        value: "e/er/ernst-toller-57266.html",
        label: "Ernst Toller (1893-1939)",
        description: "escritor y político alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Ernst_Toller_-_Schwadron.jpg/40px-Ernst_Toller_-_Schwadron.jpg"
      },
       {
        value: "l/lu/lu-xun-23114.html",
        label: "Lu Xun (1881-1936)",
        description: "escritor chino",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Lu_Xun_1936.jpg/40px-Lu_Xun_1936.jpg"
      },
       {
        value: "v/vi/vittorio-alfieri-296244.html",
        label: "Vittorio Alfieri (1749-1803)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/VAlfieriFabre.jpg/40px-VAlfieriFabre.jpg"
      },
       {
        value: "e/ed/edmond-duranty-328909.html",
        label: "Edmond Duranty (1833-1880)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Edgar_Degas_Portrait_of_Duranty.jpg/40px-Edgar_Degas_Portrait_of_Duranty.jpg"
      },
       {
        value: "f/fr/frank-heller-439249.html",
        label: "Frank Heller (1886-1947)",
        description: "escritor sueco",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Portrait_relief_of_swedish_author_Frank_Heller_lund_sweden.jpg/40px-Portrait_relief_of_swedish_author_Frank_Heller_lund_sweden.jpg"
      },
       {
        value: "g/gi/giambattista-casti-251926.html",
        label: "Giambattista Casti (1724-1803)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Gli_Animali_Parlanti_di_Giovanni_Battista_Casti_1890.jpg/40px-Gli_Animali_Parlanti_di_Giovanni_Battista_Casti_1890.jpg"
      },
       {
        value: "e/em/emily-dickinson-4441.html",
        label: "Emily Dickinson (1830-1886)",
        description: "poetisa estadounidense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Emily_Dickinson_daguerreotype_%28Restored%29.jpg/40px-Emily_Dickinson_daguerreotype_%28Restored%29.jpg"
      },
       {
        value: "w/w-/w-s-gilbert-348513.html",
        label: "W. S. Gilbert (1836-1911)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/William_S._Gilbert_%281878%29.jpg/40px-William_S._Gilbert_%281878%29.jpg"
      },
       {
        value: "a/ar/arthur-james-balfour-19008.html",
        label: "Arthur James Balfour (1848-1930)",
        description: "político y estadista británico",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Arthur_James_Balfour00.jpg/40px-Arthur_James_Balfour00.jpg"
      },
       {
        value: "c/cr/cristobal-moehrlen-69299.html",
        label: "Cristóbal Moehrlen (1800-1871)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Christophe_Moehrlen.jpg/40px-Christophe_Moehrlen.jpg"
      },
       {
        value: "z/ze/zeev-jabotinsky-319896.html",
        label: "Zeev Jabotinsky (1880-1940)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Zeev_Jabotinsky.jpg/40px-Zeev_Jabotinsky.jpg"
      },
       {
        value: "j/jo/johann-karl-august-musaus-213974.html",
        label: "Johann Karl August Musäus (1735-1787)",
        description: "escritor alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Musaeus.jpg/40px-Musaeus.jpg"
      },
       {
        value: "a/al/alma-maximiliana-karlin-79131.html",
        label: "Alma Maximiliana Karlin (1889-1950)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Alma_Karlin_1920s.jpg/40px-Alma_Karlin_1920s.jpg"
      },
       {
        value: "n/ni/nikolai-ogariov-374362.html",
        label: "Nikolái Ogariov (1813-1877)",
        description: "escritor ruso",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Nikolay_Ogarev.jpg/40px-Nikolay_Ogarev.jpg"
      },
       {
        value: "f/fr/francis-thompson-367745.html",
        label: "Francis Thompson (1859-1907)",
        description: "poeta inglés de vida bastante desdichada",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Francis_Thompson_at_19.jpg/40px-Francis_Thompson_at_19.jpg"
      },
       {
        value: "s/se/sean-ocasey-315170.html",
        label: "Sean O'Casey (1880-1964)",
        description: "escritor irlandés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Sean_ocasey_1924.jpg/40px-Sean_ocasey_1924.jpg"
      },
       {
        value: "r/ro/robert-frost-168728.html",
        label: "Robert Frost (1874-1963)",
        description: "poeta estadounidense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Jb_modern_frost_2_e.jpg/40px-Jb_modern_frost_2_e.jpg"
      },
       {
        value: "a/an/anne-bronte-44520.html",
        label: "Anne Brontë (1820-1849)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Anne_Bronte.jpg/40px-Anne_Bronte.jpg"
      },
       {
        value: "j/jo/johann-georg-hamann-76499.html",
        label: "Johann Georg Hamann (1730-1788)",
        description: "filósofo alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Johann_Georg_Hamann_%281730%E2%80%931788%29.jpg/40px-Johann_Georg_Hamann_%281730%E2%80%931788%29.jpg"
      },
       {
        value: "o/os/osip-mandelshtam-189950.html",
        label: "Ósip Mandelshtam (1891-1938)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Osip_Mandelstam_Russian_writer.jpg/40px-Osip_Mandelstam_Russian_writer.jpg"
      },
       {
        value: "c/ch/charles-fort-443325.html",
        label: "Charles Fort (1874-1932)",
        description: "escritor estadounidense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Fort_charles_1920.jpg/40px-Fort_charles_1920.jpg"
      },
       {
        value: "g/ge/georg-kaiser-60477.html",
        label: "Georg Kaiser (1878-1945)",
        description: "literato y dramaturgo alemán, caracterizado por su vanguardismo y su crítica social",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Georg_Kaiser.jpg/40px-Georg_Kaiser.jpg"
      },
       {
        value: "v/vs/vsevolod-garshin-333222.html",
        label: "Vsévolod Garshin (1855-1888)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/%D0%98%D0%BB%D1%8C%D1%8F_%D0%A0%D0%B5%D0%BF%D0%B8%D0%BD_-_%D0%9F%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82_%D0%92%D1%81%D0%B5%D0%B2%D0%BE%D0%BB%D0%BE%D0%B4_%D0%9C%D0%B8%D1%85%D0%B0%D0%B9%D0%BB%D0%BE%D0%B2%D0%B8%D1%87_%D0%93%D0%B0%D1%80%D1%88%D0%B8%D0%BD.jpg/40px-%D0%98%D0%BB%D1%8C%D1%8F_%D0%A0%D0%B5%D0%BF%D0%B8%D0%BD_-_%D0%9F%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82_%D0%92%D1%81%D0%B5%D0%B2%D0%BE%D0%BB%D0%BE%D0%B4_%D0%9C%D0%B8%D1%85%D0%B0%D0%B9%D0%BB%D0%BE%D0%B2%D0%B8%D1%87_%D0%93%D0%B0%D1%80%D1%88%D0%B8%D0%BD.jpg"
      },
       {
        value: "j/ja/jane-addams-180989.html",
        label: "Jane Addams (1860-1935)",
        description: "socióloga feminista, pacifista y reformadora estadounidense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Jane_Addams_profile.jpg/40px-Jane_Addams_profile.jpg"
      },
       {
        value: "r/re/rene-bazin-127539.html",
        label: "René Bazin (1853-1932)",
        description: "novelista francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Rene_Bazin.jpg/40px-Rene_Bazin.jpg"
      },
       {
        value: "d/di/dimitrios-vikelas-297024.html",
        label: "Dimitrios Vikelas (1835-1908)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Demetrius_Vikelas.jpg/40px-Demetrius_Vikelas.jpg"
      },
       {
        value: "h/ha/harriet-taylor-mill-240782.html",
        label: "Harriet Taylor Mill (1807-1858)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Harriet_Mill_from_NPG.jpg/40px-Harriet_Mill_from_NPG.jpg"
      },
       {
        value: "u/ul/ulrich-von-wilamowitz-moellendorff-61863.html",
        label: "Ulrich von Wilamowitz-Moellendorff (1848-1931)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Wilamowitz.jpg/40px-Wilamowitz.jpg"
      },
       {
        value: "a/af/afanasi-fet-314212.html",
        label: "Afanasi Fet (1820-1892)",
        description: "poeta ruso",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Fet_by_Repin.jpg/40px-Fet_by_Repin.jpg"
      },
       {
        value: "l/lo/louis-blanc-355112.html",
        label: "Louis Blanc (1811-1882)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Louis_Blanc.jpg/40px-Louis_Blanc.jpg"
      },
       {
        value: "v/vi/viktor-schauberger-89544.html",
        label: "Viktor Schauberger (1885-1958)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Viktor_Schauberger.jpg/40px-Viktor_Schauberger.jpg"
      },
       {
        value: "g/ge/gertrude-stein-188385.html",
        label: "Gertrude Stein (1874-1946)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Gertrude_Stein_1935-01-04.jpg/40px-Gertrude_Stein_1935-01-04.jpg"
      },
       {
        value: "a/an/antonio-alcala-galiano-332110.html",
        label: "Antonio Alcalá Galiano (1789-1865)",
        description: "político y escritor español",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Antonio_Alcal%C3%A1_Galiano.jpg/40px-Antonio_Alcal%C3%A1_Galiano.jpg"
      },
       {
        value: "c/ca/carl-sandburg-193608.html",
        label: "Carl Sandburg (1878-1967)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Carl_Sandburg_NYWTS.jpg/40px-Carl_Sandburg_NYWTS.jpg"
      },
       {
        value: "e/el/elisaveta-bagriana-270584.html",
        label: "Elisaveta Bagriana (1893-1991)",
        description: "poetisa búlgara",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/BASA-65K-2-1498-1-Elisaveta_Bagryana.jpg/40px-BASA-65K-2-1498-1-Elisaveta_Bagryana.jpg"
      },
       {
        value: "w/wi/william-beckford-361026.html",
        label: "William Beckford (1760-1844)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Beckford%2C_William_%281760-1844%29_1.jpg/40px-Beckford%2C_William_%281760-1844%29_1.jpg"
      },
       {
        value: "f/fe/ferenc-kazinczy-381865.html",
        label: "Ferenc Kazinczy (1759-1831)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Don%C3%A1t_Kazinczy_1812_A.jpg/40px-Don%C3%A1t_Kazinczy_1812_A.jpg"
      },
       {
        value: "j/ju/juan-bosco-146183.html",
        label: "Juan Bosco (1815-1888)",
        description: "itali roma educador",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Dombosco.jpg/40px-Dombosco.jpg"
      },
       {
        value: "e/em/emil-adolf-rossmassler-76238.html",
        label: "Emil Adolf Rossmässler (1806-1867)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Emil_Adolf_Rossmaessler.jpg/40px-Emil_Adolf_Rossmaessler.jpg"
      },
       {
        value: "f/fr/francois-guizot-157324.html",
        label: "François Guizot (1787-1874)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Fran%C3%A7ois_Pierre_Guillaume_Guizot.jpg/40px-Fran%C3%A7ois_Pierre_Guillaume_Guizot.jpg"
      },
       {
        value: "a/an/andreas-ascharin-495847.html",
        label: "Andreas Ascharin (1843-1896)",
        description: "ajedrecista alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Andreas_Asharin.jpg/40px-Andreas_Asharin.jpg"
      },
       {
        value: "h/hi/hippolyte-taine-297726.html",
        label: "Hippolyte Taine (1828-1893)",
        description: "filósofo, crítico e historiador francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Hippolyte_taine.jpg/40px-Hippolyte_taine.jpg"
      },
       {
        value: "j/jo/john-adolphus-etzler-133590.html",
        label: "John Adolphus Etzler (1791-1846)",
        description: "escritor estadounidense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/JAEtzler.jpg/40px-JAEtzler.jpg"
      },
       {
        value: "p/pa/paul-destournelles-238731.html",
        label: "Paul d'Estournelles (1852-1924)",
        description: "político francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Paul_Balluet_nobel.jpg/40px-Paul_Balluet_nobel.jpg"
      },
       {
        value: "c/ch/christian-friedrich-daniel-schubart-61251.html",
        label: "Christian Friedrich Daniel Schubart (1739-1791)",
        description: "escritor, músico y compositor alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Ernest_Morace_after_Agust_Friedrich_Oelenheinz_-_Schubart.jpg/40px-Ernest_Morace_after_Agust_Friedrich_Oelenheinz_-_Schubart.jpg"
      },
       {
        value: "f/fe/felix-von-weingartner-316920.html",
        label: "Felix von Weingartner (1863-1942)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Nicola_Perscheid_-_Felix_von_Weingartner_um_1914.jpg/40px-Nicola_Perscheid_-_Felix_von_Weingartner_um_1914.jpg"
      },
       {
        value: "d/de/detlev-von-liliencron-21119.html",
        label: "Detlev von Liliencron (1844-1909)",
        description: "poeta y novelista alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/D_v_Lilienkron_1905.jpg/40px-D_v_Lilienkron_1905.jpg"
      },
       {
        value: "j/je/jean-webster-238140.html",
        label: "Jean Webster (1876-1916)",
        description: "novelista estadounidense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Jean_Webster.jpg/40px-Jean_Webster.jpg"
      },
       {
        value: "l/lo/louise-michel-216092.html",
        label: "Louise Michel (1830-1905)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Louise_Michel%2C_grayscale.jpg/40px-Louise_Michel%2C_grayscale.jpg"
      },
       {
        value: "a/an/antonio-fogazzaro-470067.html",
        label: "Antonio Fogazzaro (1842-1911)",
        description: "escritor italiano",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Antonio_Fogazzaro2.jpg/40px-Antonio_Fogazzaro2.jpg"
      },
       {
        value: "r/ro/robert-browning-233265.html",
        label: "Robert Browning (1812-1889)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Robert_Browning_-_Project_Gutenberg_eText_13103.jpg/40px-Robert_Browning_-_Project_Gutenberg_eText_13103.jpg"
      },
       {
        value: "j/jo/jose-guell-y-rente-164762.html",
        label: "José Güell y Renté (1818-1884)",
        description: "periodista, político y escritor cubanoespañol",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Jos%C3%A9_G%C3%BCell_y_Rent%C3%A9.jpg/40px-Jos%C3%A9_G%C3%BCell_y_Rent%C3%A9.jpg"
      },
       {
        value: "h/ha/harriet-tubman-102870.html",
        label: "Harriet Tubman (1820-1913)",
        description: "abolicionista afroamericana",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Harriet_Tubman_by_Squyer%2C_NPG%2C_c1885.jpg/40px-Harriet_Tubman_by_Squyer%2C_NPG%2C_c1885.jpg"
      },
       {
        value: "m/mi/mirra-alfassa-464879.html",
        label: "Mirra Alfassa (1878-1973)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Mirra_Alfassa_in_June_1916.jpg/40px-Mirra_Alfassa_in_June_1916.jpg"
      },
       {
        value: "n/no/noe-ito-260984.html",
        label: "Noe Itō (1895-1923)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Ito_Noe_2.jpg/40px-Ito_Noe_2.jpg"
      },
       {
        value: "v/vl/vladimir-propp-313455.html",
        label: "Vladímir Propp (1895-1970)",
        description: "Erudito y folclorista ruso",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Vladimir_Propp_%281928_year%29_%28cropped%29.jpg/40px-Vladimir_Propp_%281928_year%29_%28cropped%29.jpg"
      },
       {
        value: "t/th/theodor-plievier-77328.html",
        label: "Theodor Plievier (1892-1955)",
        description: "escritor alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Fotothek_df_pk_0000220_004_Portr%C3%A4ts%2C_Prof._%28Max_%5E%29_Pechstein%2C_%28Johannes%5E%29_Stroux%2C_Kraus%2C_Benedik%2C_Lederer%2C.jpg/40px-Fotothek_df_pk_0000220_004_Portr%C3%A4ts%2C_Prof._%28Max_%5E%29_Pechstein%2C_%28Johannes%5E%29_Stroux%2C_Kraus%2C_Benedik%2C_Lederer%2C.jpg"
      },
       {
        value: "m/ma/mao-zedong-5816.html",
        label: "Mao Zedong (1893-1976)",
        description: "Presidente del Partido Comunista de China",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Mao_Zedong_portrait.jpg/40px-Mao_Zedong_portrait.jpg"
      },
       {
        value: "j/ju/jules-renard-314987.html",
        label: "Jules Renard (1864-1910)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Jules_Renard.jpg/40px-Jules_Renard.jpg"
      },
       {
        value: "t/th/theodor-lessing-61446.html",
        label: "Theodor Lessing (1872-1933)",
        description: "filósofo alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Lessing_Portrait.jpg/40px-Lessing_Portrait.jpg"
      },
       {
        value: "w/wi/william-robertson-smith-461733.html",
        label: "William Robertson Smith (1846-1894)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/WilliamRobertsonSmith.jpg/40px-WilliamRobertsonSmith.jpg"
      },
       {
        value: "h/he/hermann-goedesche-66858.html",
        label: "Hermann Goedesche (1815-1878)",
        description: "escritor alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Sir_John_Retcliffe.jpg/40px-Sir_John_Retcliffe.jpg"
      },
       {
        value: "a/ar/aristide-briand-179888.html",
        label: "Aristide Briand (1862-1932)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Aristide_Briand_2.jpg/40px-Aristide_Briand_2.jpg"
      },
       {
        value: "a/an/anne-louise-germaine-necker-123041.html",
        label: "Anne-Louise Germaine Necker (1766-1817)",
        description: "escritora en lengua francesa",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Friedrich_Tieck_-_Madame_de_Sta%C3%ABl_-_disegno.jpg/40px-Friedrich_Tieck_-_Madame_de_Sta%C3%ABl_-_disegno.jpg"
      },
       {
        value: "l/lu/luigi-illica-441843.html",
        label: "Luigi Illica (1857-1919)",
        description: "libretista italiano",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Illica.jpg/40px-Illica.jpg"
      },
       {
        value: "a/al/aleksey-khomyakov-358497.html",
        label: "Aleksey Khomyakov (1804-1860)",
        description: "filósofo ruso",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/KhomyakovA_AvtoportretABR.jpg/40px-KhomyakovA_AvtoportretABR.jpg"
      },
       {
        value: "l/lo/louis-leroy-50659.html",
        label: "Louis Leroy (1812-1885)",
        description: "pintor y grabador francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/This_is_the_critic_Louis_Leroy-_2013-07-10_13-24.jpg/40px-This_is_the_critic_Louis_Leroy-_2013-07-10_13-24.jpg"
      },
       {
        value: "h/ha/harriet-martineau-234570.html",
        label: "Harriet Martineau (1802-1876)",
        description: "escritora y activista",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Harriet_Martineau_by_Richard_Evans.jpg/40px-Harriet_Martineau_by_Richard_Evans.jpg"
      },
       {
        value: "m/ma/mariano-latorre-359880.html",
        label: "Mariano Latorre (1886-1955)",
        description: "escritor chileno",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Mariano_Latorre.jpg/40px-Mariano_Latorre.jpg"
      },
       {
        value: "o/os/oswald-spengler-57112.html",
        label: "Oswald Spengler (1880-1936)",
        description: "filósofo e historiador alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Bundesarchiv_Bild_183-R06610%2C_Oswald_Spengler.jpg/40px-Bundesarchiv_Bild_183-R06610%2C_Oswald_Spengler.jpg"
      },
       {
        value: "j/ja/jacob-riis-379211.html",
        label: "Jacob Riis (1849-1914)",
        description: "biografía, fotoperiodista y reformador social danés-estadounidense, conocido porque utilizó su talento como fotógrafo y periodista para ayudar a los menos afortunados en la ciudad de Nueva York",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Jacob_Riis_2.jpg/40px-Jacob_Riis_2.jpg"
      },
       {
        value: "m/ma/maximilian-harden-63411.html",
        label: "Maximilian Harden (1861-1927)",
        description: "periodista alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Maximilian_Harden_1914.jpg/40px-Maximilian_Harden_1914.jpg"
      },
       {
        value: "h/he/henry-olcott-442617.html",
        label: "Henry Olcott (1832-1907)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/H.S._Olcott-portrait-300.jpg/40px-H.S._Olcott-portrait-300.jpg"
      },
       {
        value: "r/ro/romain-rolland-47162.html",
        label: "Romain Rolland (1866-1944)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Romain_Rolland.jpg/40px-Romain_Rolland.jpg"
      },
       {
        value: "p/pe/petar-ii-petrovic-njegos-362081.html",
        label: "Petar II Petrović-Njegoš (1813-1851)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Petar_II_Petrovic-Njegos.jpg/40px-Petar_II_Petrovic-Njegos.jpg"
      },
       {
        value: "e/et/ethel-lilian-voynich-466068.html",
        label: "Ethel Lilian Voynich (1864-1960)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Voynich_Ethel_Lilian.jpg/40px-Voynich_Ethel_Lilian.jpg"
      },
       {
        value: "m/ma/marie-hamsun-470191.html",
        label: "Marie Hamsun (1881-1969)",
        description: "escritora y actriz noruega",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Knut_hamsun_1909.jpg/40px-Knut_hamsun_1909.jpg"
      },
       {
        value: "i/it/italo-svevo-216478.html",
        label: "Italo Svevo (1861-1928)",
        description: "escritor italiano",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Svevo.jpg/40px-Svevo.jpg"
      },
       {
        value: "k/ky/kyokutei-bakin-463142.html",
        label: "Kyokutei Bakin (1767-1848)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Kyokutei_Bakin.jpg/40px-Kyokutei_Bakin.jpg"
      },
       {
        value: "j/jo/john-millington-synge-213447.html",
        label: "John Millington Synge (1871-1909)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/John_Millington_Synge.jpg/40px-John_Millington_Synge.jpg"
      },
       {
        value: "f/fr/friedrich-de-la-motte-fouque-77371.html",
        label: "Friedrich de la Motte Fouqué (1777-1843)",
        description: "escritor alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Friedrich_de_la_Motte-Fouqu%C3%A9_in_Husarenuniform.jpg/40px-Friedrich_de_la_Motte-Fouqu%C3%A9_in_Husarenuniform.jpg"
      },
       {
        value: "d/do/donald-crisp-367073.html",
        label: "Donald Crisp (1882-1974)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Donald_Crisp_in_Shining_Victory_trailer.jpg/40px-Donald_Crisp_in_Shining_Victory_trailer.jpg"
      },
       {
        value: "b/bo/booker-t-washington-319871.html",
        label: "Booker T. Washington (1856-1915)",
        description: "educador, orador, cohesor y líder de la comunidad negra estadounidense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Booker_T_Washington_retouched_flattened-crop.jpg/40px-Booker_T_Washington_retouched_flattened-crop.jpg"
      },
       {
        value: "d/da/daniel-paul-schreber-62468.html",
        label: "Daniel Paul Schreber (1842-1911)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Paul_Schreber.jpg/40px-Paul_Schreber.jpg"
      },
       {
        value: "l/le/leon-bloy-462666.html",
        label: "Léon Bloy (1846-1917)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/L%C3%A9on_Bloy_1887.jpg/40px-L%C3%A9on_Bloy_1887.jpg"
      },
       {
        value: "k/ka/kalman-mikszath-350552.html",
        label: "Kálmán Mikszáth (1847-1910)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Bencz%C3%BAr_Gyula_Miksz%C3%A1th_K%C3%A1lm%C3%A1n.jpg/40px-Bencz%C3%BAr_Gyula_Miksz%C3%A1th_K%C3%A1lm%C3%A1n.jpg"
      },
       {
        value: "h/he/henri-bergson-42156.html",
        label: "Henri Bergson (1859-1941)",
        description: "escritor y filósofo irracionalista francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Henri_Bergson_02.jpg/40px-Henri_Bergson_02.jpg"
      },
       {
        value: "o/os/oskar-panizza-62871.html",
        label: "Oskar Panizza (1853-1921)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Panizza1.jpg/40px-Panizza1.jpg"
      },
       {
        value: "k/ka/kate-greenaway-204936.html",
        label: "Kate Greenaway (1846-1901)",
        description: "artista británica",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Kate_Greenaway00.jpg/40px-Kate_Greenaway00.jpg"
      },
       {
        value: "b/be/benjamin-nicolas-marie-appert-194709.html",
        label: "Benjamin Nicolas Marie Appert (1797-1847)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Benjamin_Nicolas_Marie_Appert.jpg/40px-Benjamin_Nicolas_Marie_Appert.jpg"
      },
       {
        value: "f/fe/federico-ii-el-grande-33550.html",
        label: "Federico II el Grande (1712-1786)",
        description: "tercer rey de Prusia y uno de los máximos representantes del Despotismo ilustrado del siglo XVIII",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Friedrich_Zweite_Alt.jpg/40px-Friedrich_Zweite_Alt.jpg"
      },
       {
        value: "f/fr/friedrich-glauser-117520.html",
        label: "Friedrich Glauser (1896-1938)",
        description: "escritor suizo",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/ZI_Fieberkurve1.jpg/40px-ZI_Fieberkurve1.jpg"
      },
       {
        value: "a/ar/artur-dinter-69833.html",
        label: "Artur Dinter (1876-1948)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Arthur_Dinter%2C_Bundesarchiv_Bild_119-1416jpg.jpg/40px-Arthur_Dinter%2C_Bundesarchiv_Bild_119-1416jpg.jpg"
      },
       {
        value: "p/pe/pedro-salinas-379789.html",
        label: "Pedro Salinas (1891-1951)",
        description: "escritor español",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/PedroSalinas.jpg/40px-PedroSalinas.jpg"
      },
       {
        value: "h/he/heinrich-mann-76480.html",
        label: "Heinrich Mann (1871-1950)",
        description: "poeta alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Bundesarchiv_Bild_183-R98911%2C_Heinrich_Mann.jpg/40px-Bundesarchiv_Bild_183-R98911%2C_Heinrich_Mann.jpg"
      },
       {
        value: "w/wa/washington-irving-181667.html",
        label: "Washington Irving (1783-1859)",
        description: "escritor estadounidense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Irving-Washington-LOC.jpg/40px-Irving-Washington-LOC.jpg"
      },
       {
        value: "j/ja/jacinto-benavente-83184.html",
        label: "Jacinto Benavente (1866-1954)",
        description: "literato español",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Jacinto_Benavente_y_Martinez.jpg/40px-Jacinto_Benavente_y_Martinez.jpg"
      },
       {
        value: "j/jo/johanna-spyri-123053.html",
        label: "Johanna Spyri (1827-1901)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Johanna-spyri.jpg/40px-Johanna-spyri.jpg"
      },
       {
        value: "j/jo/johann-martin-schleyer-12712.html",
        label: "Johann Martin Schleyer (1831-1912)",
        description: "sacerdote católico alemán que creó la lengua auxiliar volapük",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/JM_Schleyer.jpg/40px-JM_Schleyer.jpg"
      },
       {
        value: "a/al/alexander-alekhine-131374.html",
        label: "Alexander Alekhine (1892-1946)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Alexandre_Alekhine_Color.jpg/40px-Alexandre_Alekhine_Color.jpg"
      },
       {
        value: "w/wi/wilhelm-muller-57879.html",
        label: "Wilhelm Müller (1794-1827)",
        description: "poeta",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Wilhelm_M%C3%BCller_by_Schr%C3%B6ter.jpg/40px-Wilhelm_M%C3%BCller_by_Schr%C3%B6ter.jpg"
      },
       {
        value: "c/ch/charlotte-perkins-gilman-287752.html",
        label: "Charlotte Perkins Gilman (1860-1935)",
        description: "Intelectual norteamericana, escritora, conferenciante, feminista y reformadora social.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Charlotte_Perkins_Gilman_3.jpg/40px-Charlotte_Perkins_Gilman_3.jpg"
      },
       {
        value: "a/aa/aaron-bernstein-67583.html",
        label: "Aaron Bernstein (1812-1884)",
        description: "escritor alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Die_Gartenlaube_%281861%29_b_453.jpg/40px-Die_Gartenlaube_%281861%29_b_453.jpg"
      },
       {
        value: "p/pe/peter-christen-asbjrnsen-355485.html",
        label: "Peter Christen Asbjørnsen (1812-1885)",
        description: "escritor noruego",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Die_Gartenlaube_%281881%29_b_161.jpg/40px-Die_Gartenlaube_%281881%29_b_161.jpg"
      },
       {
        value: "p/pa/paul-lafargue-317152.html",
        label: "Paul Lafargue (1842-1911)",
        description: "personalidad política francesa",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Lagargue_1871.jpg/40px-Lagargue_1871.jpg"
      },
       {
        value: "a/al/aleksandr-tarasov-rodionov-466217.html",
        label: "Aleksandr Tarásov-Rodiónov (1885-1938)",
        description: "escrito ruso soviético",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Tarasov-Rodionov_A.I..jpg/40px-Tarasov-Rodionov_A.I..jpg"
      },
       {
        value: "s/sa/salama-moussa-368209.html",
        label: "Salama Moussa (1880-1958)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Salama_mousa.jpg/40px-Salama_mousa.jpg"
      },
       {
        value: "m/mi/miroslav-vilhar-464943.html",
        label: "Miroslav Vilhar (1818-1871)",
        description: "poeta, dramaturgo, político y compositor esloveno",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Miroslav_Vilhar.jpg/40px-Miroslav_Vilhar.jpg"
      },
       {
        value: "r/ri/richard-dehmel-76590.html",
        label: "Richard Dehmel (1863-1920)",
        description: "poeta alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/R-dehmel_1905.jpg/40px-R-dehmel_1905.jpg"
      },
       {
        value: "h/he/henri-frederic-amiel-123916.html",
        label: "Henri-Frédéric Amiel (1821-1881)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Henri-Frederic_Amiel_1852.jpg/40px-Henri-Frederic_Amiel_1852.jpg"
      },
       {
        value: "e/ed/edmundo-de-amicis-240576.html",
        label: "Edmundo de Amicis (1846-1908)",
        description: "escritor y novelista italiano",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Edmondo_De_Amicis.jpg/40px-Edmondo_De_Amicis.jpg"
      },
       {
        value: "k/ka/karel-capek-155855.html",
        label: "Karel Čapek (1890-1938)",
        description: "escritor checo",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Karel-capek.jpg/40px-Karel-capek.jpg"
      },
       {
        value: "c/ch/chakravarti-rajagopalachari-378404.html",
        label: "Chakravarti Rajagopalachari (1878-1972)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/C_Rajagopalachari_1944.jpg/40px-C_Rajagopalachari_1944.jpg"
      },
       {
        value: "j/jo/jonathan-edwards-313073.html",
        label: "Jonathan Edwards (1703-1758)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Jonathan_Edwards.jpg/40px-Jonathan_Edwards.jpg"
      },
       {
        value: "e/em/emily-bronte-80137.html",
        label: "Emily Brontë (1818-1848)",
        description: "poetisa y novelista inglesa",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Emily_Bront%C3%AB_cropped.jpg/40px-Emily_Bront%C3%AB_cropped.jpg"
      },
       {
        value: "k/ka/karl-friedrich-bahrdt-213778.html",
        label: "Karl Friedrich Bahrdt (1740-1792)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Bahrdt_old.jpg/40px-Bahrdt_old.jpg"
      },
       {
        value: "d/de/deems-taylor-284386.html",
        label: "Deems Taylor (1885-1966)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Deems_Taylor_portrait_by_Carl_Van_Vechten.jpg/40px-Deems_Taylor_portrait_by_Carl_Van_Vechten.jpg"
      },
       {
        value: "r/ra/raymond-roussel-462662.html",
        label: "Raymond Roussel (1877-1933)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Raymond_roussel.jpg/40px-Raymond_roussel.jpg"
      },
       {
        value: "w/wi/wilhelm-hauff-57966.html",
        label: "Wilhelm Hauff (1802-1827)",
        description: "escritor alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Hauff.jpg/40px-Hauff.jpg"
      },
       {
        value: "a/al/aleksandr-grin-213997.html",
        label: "Aleksandr Grin (1880-1932)",
        description: "escritor ruso",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80_%D0%93%D1%80%D0%B8%D0%BD.jpg/40px-%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80_%D0%93%D1%80%D0%B8%D0%BD.jpg"
      },
       {
        value: "o/ol/oliver-wendell-holmes-319829.html",
        label: "Oliver Wendell Holmes (1809-1894)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Holmes_photo_1910.jpg/40px-Holmes_photo_1910.jpg"
      },
       {
        value: "l/lo/louis-bromfield-500042.html",
        label: "Louis Bromfield (1896-1956)",
        description: "escritor y reformador agrario estadounidense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Bromfield.louis.jpg/40px-Bromfield.louis.jpg"
      },
       {
        value: "e/ed/edmund-dene-morel-332459.html",
        label: "Edmund Dene Morel (1873-1924)",
        description: "político británico",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/E.D._Morel.jpg/40px-E.D._Morel.jpg"
      },
       {
        value: "g/ge/george-meredith-90238.html",
        label: "George Meredith (1828-1909)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/George_Meredith_by_George_Frederic_Watts.jpg/40px-George_Meredith_by_George_Frederic_Watts.jpg"
      },
       {
        value: "r/ro/robert-southey-216838.html",
        label: "Robert Southey (1774-1843)",
        description: "poeta británico",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Robert_Southey_-_Project_Gutenberg_eText_13103.jpg/40px-Robert_Southey_-_Project_Gutenberg_eText_13103.jpg"
      },
       {
        value: "w/wi/wilhelmine-von-sagan-272289.html",
        label: "Wilhelmine von Sagan (1781-1839)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Wilhelmine_von_Sagan.jpg/40px-Wilhelmine_von_Sagan.jpg"
      },
       {
        value: "a/al/alexandre-vinet-124065.html",
        label: "Alexandre Vinet (1797-1847)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/AlexandreVinet.jpg/40px-AlexandreVinet.jpg"
      },
       {
        value: "n/na/namık-kemal-337500.html",
        label: "Namık Kemal (1840-1888)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Kemalbey.jpg/40px-Kemalbey.jpg"
      },
       {
        value: "k/ka/karolina-svetla-258960.html",
        label: "Karolina Světlá (1830-1899)",
        description: "escritora checa",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Karolina_Svetla_02.jpg/40px-Karolina_Svetla_02.jpg"
      },
       {
        value: "l/lo/louis-claude-de-saint-martin-47208.html",
        label: "Louis Claude de Saint-Martin (1743-1803)",
        description: "filósofo francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Louis-Claude_de_Saint-Martin.jpg/40px-Louis-Claude_de_Saint-Martin.jpg"
      },
       {
        value: "j/ja/james-macpherson-312562.html",
        label: "James Macpherson (1736-1796)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/James_Macpherson_by_George_Romney.jpg/40px-James_Macpherson_by_George_Romney.jpg"
      },
       {
        value: "e/ei/eino-leino-360079.html",
        label: "Eino Leino (1878-1926)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Eino_Leino.jpg/40px-Eino_Leino.jpg"
      },
       {
        value: "n/ne/neel-doff-464167.html",
        label: "Neel Doff (1858-1942)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Neel_Doff.jpg/40px-Neel_Doff.jpg"
      },
       {
        value: "o/ou/ouida-258001.html",
        label: "Ouida (1839-1908)",
        description: "novelista británica",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Ouida_from_Cabinet_Card.jpg/40px-Ouida_from_Cabinet_Card.jpg"
      },
       {
        value: "a/al/alfred-mahan-142988.html",
        label: "Alfred Mahan (1840-1914)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Alfred_thayer_mahan.jpg/40px-Alfred_thayer_mahan.jpg"
      },
       {
        value: "h/he/henry-morton-stanley-171421.html",
        label: "Henry Morton Stanley (1841-1904)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Henry_M_Stanley_1872.jpg/40px-Henry_M_Stanley_1872.jpg"
      },
       {
        value: "j/ja/jakob-michael-reinhold-lenz-76417.html",
        label: "Jakob Michael Reinhold Lenz (1751-1792)",
        description: "escritor alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/JMRLenz.jpg/40px-JMRLenz.jpg"
      },
       {
        value: "a/an/antero-de-quental-467494.html",
        label: "Antero de Quental (1842-1891)",
        description: "poeta portugués",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Antero_de_Quental_%28ca._1887%29.jpg/40px-Antero_de_Quental_%28ca._1887%29.jpg"
      },
       {
        value: "d/dw/dwight-d-eisenhower-9916.html",
        label: "Dwight D. Eisenhower (1890-1969)",
        description: "militar y político estadounidense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Dwight_D._Eisenhower%2C_official_Presidential_portrait.jpg/40px-Dwight_D._Eisenhower%2C_official_Presidential_portrait.jpg"
      },
       {
        value: "c/ca/carlos-maria-ramirez-136059.html",
        label: "Carlos María Ramírez (1847-1898)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Carlos_Mar%C3%ADa_Ram%C3%ADrez_por_Sch%C3%BCtz.jpg/40px-Carlos_Mar%C3%ADa_Ram%C3%ADrez_por_Sch%C3%BCtz.jpg"
      },
       {
        value: "a/an/anton-alexander-auersperg-79069.html",
        label: "Anton Alexander Auersperg (1806-1876)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Anton_Alexander_von_Auersperg_2.jpg/40px-Anton_Alexander_von_Auersperg_2.jpg"
      },
       {
        value: "e/e-/e-e-smith-144090.html",
        label: "E. E. Smith (1890-1965)",
        description: "escritor estadounidense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Amazbuck.jpg/40px-Amazbuck.jpg"
      },
       {
        value: "k/ko/konstantin-balmont-314498.html",
        label: "Konstantín Balmont (1867-1942)",
        description: "poeta ruso",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Konstantin_Balmont_by_Valentin_Serov_1905.jpg/40px-Konstantin_Balmont_by_Valentin_Serov_1905.jpg"
      },
       {
        value: "j/je/jean-hippolyte-michon-220230.html",
        label: "Jean-Hippolyte Michon (1806-1881)",
        description: "escritor francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Jean-Hippolyte_Michon.jpg/40px-Jean-Hippolyte_Michon.jpg"
      },
       {
        value: "d/da/daniel-coit-gilman-129598.html",
        label: "Daniel Coit Gilman (1831-1908)",
        description: "periodista estadounidense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Daniel_Coit_Gilman1.jpg/40px-Daniel_Coit_Gilman1.jpg"
      },
       {
        value: "h/he/helene-stocker-72913.html",
        label: "Helene Stöcker (1869-1943)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Helene_Stoecker_on_street.jpg/40px-Helene_Stoecker_on_street.jpg"
      },
       {
        value: "v/vi/viktor-rydberg-432129.html",
        label: "Viktor Rydberg (1828-1895)",
        description: "escritor sueco",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Viktor_Rydberg_1876.jpg/40px-Viktor_Rydberg_1876.jpg"
      },
       {
        value: "e/er/ernst-stadler-77359.html",
        label: "Ernst Stadler (1883-1914)",
        description: "poeta alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Ernst_Maria_Richard_Stadler.jpg/40px-Ernst_Maria_Richard_Stadler.jpg"
      },
       {
        value: "m/me/mercedes-de-acosta-270643.html",
        label: "Mercedes de Acosta (1893-1968)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Mercedes_de_Acosta.jpg/40px-Mercedes_de_Acosta.jpg"
      },
       {
        value: "s/se/serguei-yesenin-31628.html",
        label: "Serguéi Yesenin (1895-1925)",
        description: "destacado poeta ruso",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Esenin_Moscow_1922.jpg/40px-Esenin_Moscow_1922.jpg"
      },
       {
        value: "k/ka/kalman-kalocsay-12628.html",
        label: "Kálmán Kalocsay (1891-1976)",
        description: "esperantista húngaro",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Kalman_Kalocsay_1.jpg/40px-Kalman_Kalocsay_1.jpg"
      },
       {
        value: "a/an/anna-louise-strong-242128.html",
        label: "Anna Louise Strong (1885-1970)",
        description: "periodista estadounidense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Anna_Louise_Strong_1918.jpg/40px-Anna_Louise_Strong_1918.jpg"
      },
       {
        value: "l/le/lesya-ukrainka-298033.html",
        label: "Lesya Ukrainka (1871-1913)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Lesya_Ukrainka_portrait.jpg/40px-Lesya_Ukrainka_portrait.jpg"
      },
       {
        value: "a/al/alfred-de-musset-179680.html",
        label: "Alfred de Musset (1810-1857)",
        description: "escritor y dramaturgo francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Alfred_de_Musset.jpg/40px-Alfred_de_Musset.jpg"
      },
       {
        value: "e/ed/eduard-fischer-115780.html",
        label: "Eduard Fischer (1861-1939)",
        description: "botánico suizo",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Eduard_Fischer_1861-1939.jpg/40px-Eduard_Fischer_1861-1939.jpg"
      },
       {
        value: "m/ma/maria-konopnicka-257852.html",
        label: "Maria Konopnicka (1842-1910)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Maria_Konopnicka001.jpg/40px-Maria_Konopnicka001.jpg"
      },
       {
        value: "e/ed/eduard-hanslick-84246.html",
        label: "Eduard Hanslick (1825-1904)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Hanslick.jpg/40px-Hanslick.jpg"
      },
       {
        value: "y/ya/yaeko-nogami-468335.html",
        label: "Yaeko Nogami (1885-1985)",
        description: "escritora japonesa",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Nogami_Taeko.jpg/40px-Nogami_Taeko.jpg"
      },
       {
        value: "p/pi/pierre-jean-jouve-379943.html",
        label: "Pierre Jean Jouve (1887-1976)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Portrait_de_Pierre_Jean_Jouve.jpg/40px-Portrait_de_Pierre_Jean_Jouve.jpg"
      },
       {
        value: "r/ro/robert-walser-123075.html",
        label: "Robert Walser (1878-1956)",
        description: "escritor suizo",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Robert_walser_1890er.jpg/40px-Robert_walser_1890er.jpg"
      },
       {
        value: "t/tr/tristan-corbiere-316536.html",
        label: "Tristan Corbière (1845-1875)",
        description: "poeta francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Tristan_Corbiere_portrait.jpg/40px-Tristan_Corbiere_portrait.jpg"
      },
       {
        value: "c/ca/carl-peter-thunberg-39658.html",
        label: "Carl Peter Thunberg (1743-1828)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Carl_Peter_Thunberg.jpg/40px-Carl_Peter_Thunberg.jpg"
      },
       {
        value: "b/be/bess-meredyth-458801.html",
        label: "Bess Meredyth (1890-1969)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Bessmeredyth2.jpg/40px-Bessmeredyth2.jpg"
      },
       {
        value: "d/du/duke-eugen-of-wurttemberg-213720.html",
        label: "Duke Eugen of Württemberg (1758-1822)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Eugenwuerttemberg1822.jpg/40px-Eugenwuerttemberg1822.jpg"
      },
       {
        value: "m/ma/mary-parker-237173.html",
        label: "Mary Parker (1868-1933)",
        description: "polítóloga y académica estadounidense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Mary_Parker_Follett_%281868-1933%29.jpg/40px-Mary_Parker_Follett_%281868-1933%29.jpg"
      },
       {
        value: "a/ab/abel-hugo-318448.html",
        label: "Abel Hugo (1798-1855)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Duvidal_de_Montferrier_-_Abel_Hugo_%281798-1865%29.jpg/40px-Duvidal_de_Montferrier_-_Abel_Hugo_%281798-1865%29.jpg"
      },
       {
        value: "s/sa/satrijos-ragana-391323.html",
        label: "Šatrijos Ragana (1877-1930)",
        description: "escritora lituana",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Pe%C4%8Dkauskait%C4%97Marija.jpg/40px-Pe%C4%8Dkauskait%C4%97Marija.jpg"
      },
       {
        value: "c/ch/christiaan-cornelissen-249042.html",
        label: "Christiaan Cornelissen (1864-1942)",
        description: "economista neerlandés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Christian-cornelissen.jpg/40px-Christian-cornelissen.jpg"
      },
       {
        value: "e/ed/edouard-schure-274447.html",
        label: "Édouard Schuré (1841-1929)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Edouard_Schur%C3%A9_01.jpg/40px-Edouard_Schur%C3%A9_01.jpg"
      },
       {
        value: "f/fe/federico-gamboa-4487.html",
        label: "Federico Gamboa (1864-1939)",
        description: "escritor mexicano",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Fgamboa.jpg/40px-Fgamboa.jpg"
      },
       {
        value: "f/fe/felix-de-azara-471014.html",
        label: "Félix de Azara (1742-1821)",
        description: "militar español",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Portrait_of_F%C3%A9lix_de_Azara_by_Goya.jpg/40px-Portrait_of_F%C3%A9lix_de_Azara_by_Goya.jpg"
      },
       {
        value: "e/ed/edmund-burke-165792.html",
        label: "Edmund Burke (1729-1797)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Burke.jpg/40px-Burke.jpg"
      },
       {
        value: "s/st/stefan-george-57187.html",
        label: "Stefan George (1868-1933)",
        description: "poeta alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Stefan_George_1910_Foto_Jakob_Hilsdorf.jpg/40px-Stefan_George_1910_Foto_Jakob_Hilsdorf.jpg"
      },
       {
        value: "a/al/aleksandr-radishchev-217470.html",
        label: "Aleksandr Radíshchev (1749-1802)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Radishchev_color.jpg/40px-Radishchev_color.jpg"
      },
       {
        value: "f/fr/fritz-lang-19504.html",
        label: "Fritz Lang (1890-1976)",
        description: "director de cine de origen austríaco",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Fritz_Lang_et_Curt_Courant.jpg/40px-Fritz_Lang_et_Curt_Courant.jpg"
      },
       {
        value: "i/il/ilia-chavchavadze-333411.html",
        label: "Ilia Chavchavadze (1837-1907)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Ilia_Tchavtchavadze.jpg/40px-Ilia_Tchavtchavadze.jpg"
      },
       {
        value: "c/ce/cecilia-bohl-de-faber-y-larrea-291397.html",
        label: "Cecilia Böhl de Faber y Larrea (1796-1877)",
        description: "novelista española",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Fern%C3%A1n_Caballero.jpg/40px-Fern%C3%A1n_Caballero.jpg"
      },
       {
        value: "w/wi/wilhelm-sievers-67462.html",
        label: "Wilhelm Sievers (1860-1921)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/1886_Wilhelm_Sievers_i_Colombia.jpg/40px-1886_Wilhelm_Sievers_i_Colombia.jpg"
      },
       {
        value: "e/ev/evaristo-carriego-188798.html",
        label: "Evaristo Carriego (1883-1912)",
        description: "escritor argentino",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Evaristocarriego.jpg/40px-Evaristocarriego.jpg"
      },
       {
        value: "t/th/thomas-gray-315516.html",
        label: "Thomas Gray (1716-1771)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Gray0004.jpg/40px-Gray0004.jpg"
      },
       {
        value: "s/sa/samuel-butler-312829.html",
        label: "Samuel Butler (1835-1902)",
        description: "escritor inglés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/SamuelErewhonButler.jpg/40px-SamuelErewhonButler.jpg"
      },
       {
        value: "m/mo/moritz-wagner-68757.html",
        label: "Moritz Wagner (1813-1887)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Moritz_Wagner_-_Geograph_und_Naturforscher.jpg/40px-Moritz_Wagner_-_Geograph_und_Naturforscher.jpg"
      },
       {
        value: "h/he/henry-wadsworth-longfellow-152513.html",
        label: "Henry Wadsworth Longfellow (1807-1882)",
        description: "poeta estadounidense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Henry_Wadsworth_Longfellow_-_Project_Gutenberg_eText_16786.jpg/40px-Henry_Wadsworth_Longfellow_-_Project_Gutenberg_eText_16786.jpg"
      },
       {
        value: "g/ge/georgi-dimitrov-155074.html",
        label: "Georgi Dimitrov (1882-1949)",
        description: "político búlgaro",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Georgi_Dimitrov.jpg/40px-Georgi_Dimitrov.jpg"
      },
       {
        value: "d/do/dorothy-parker-270707.html",
        label: "Dorothy Parker (1893-1967)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Young_Dorothy_Parker.jpg/40px-Young_Dorothy_Parker.jpg"
      },
       {
        value: "s/so/sojourner-truth-105180.html",
        label: "Sojourner Truth (1797-1883)",
        description: "activista afroamericana",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Sojourner_truth_c1870.jpg/40px-Sojourner_truth_c1870.jpg"
      },
       {
        value: "m/mi/milan-vidmar-357798.html",
        label: "Milan Vidmar (1885-1962)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Milan_Vidmar_1930s.jpg/40px-Milan_Vidmar_1930s.jpg"
      },
       {
        value: "j/jo/johann-peter-eckermann-58018.html",
        label: "Johann Peter Eckermann (1792-1854)",
        description: "poeta y escritor alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Johann_Peter_Eckermann.jpg/40px-Johann_Peter_Eckermann.jpg"
      },
       {
        value: "b/be/benjamin-graham-290560.html",
        label: "Benjamin Graham (1894-1976)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/8-brilliant-lessons-from-the-investor-that-taught-warren-buffett-everything-he-knows.jpg/40px-8-brilliant-lessons-from-the-investor-that-taught-warren-buffett-everything-he-knows.jpg"
      },
       {
        value: "a/ab/abraham-merritt-330376.html",
        label: "Abraham Merritt (1884-1943)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Abraham_Merritt_001.jpg/40px-Abraham_Merritt_001.jpg"
      },
       {
        value: "j/ju/juan-laurentino-ortiz-470658.html",
        label: "Juan Laurentino Ortiz (1896-1978)",
        description: "escritor argentino",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/JuanLaurentinoOrtiz.jpg/40px-JuanLaurentinoOrtiz.jpg"
      },
       {
        value: "j/jo/john-lindley-378629.html",
        label: "John Lindley (1799-1865)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/JLindley.jpg/40px-JLindley.jpg"
      },
       {
        value: "s/sr/sri-aurobindo-192207.html",
        label: "Sri Aurobindo (1872-1950)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Sri_aurobindo.jpg/40px-Sri_aurobindo.jpg"
      },
       {
        value: "j/ja/jane-austen-36322.html",
        label: "Jane Austen (1775-1817)",
        description: "novelista británica",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Jane_Austen_coloured_version.jpg/40px-Jane_Austen_coloured_version.jpg"
      },
       {
        value: "e/ed/edna-ferber-283496.html",
        label: "Edna Ferber (1885-1968)",
        description: "escritora estadounidense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Edna_Ferber.jpg/40px-Edna_Ferber.jpg"
      },
       {
        value: "c/cu/curzio-malaparte-312637.html",
        label: "Curzio Malaparte (1898-1957)",
        description: "escritor italiano",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Curzio_Malaparte.jpg/40px-Curzio_Malaparte.jpg"
      },
       {
        value: "e/el/ellen-key-238443.html",
        label: "Ellen Key (1849-1926)",
        description: "escritora sueca",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Ellen_Key%2C_Carl_Milles.jpg/40px-Ellen_Key%2C_Carl_Milles.jpg"
      },
       {
        value: "n/ni/nikolai-chernishevski-192331.html",
        label: "Nikolái Chernishevski (1828-1889)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Nikolay_Chernyshevsky.jpg/40px-Nikolay_Chernyshevsky.jpg"
      },
       {
        value: "n/ni/nini-roll-anker-446663.html",
        label: "Nini Roll Anker (1873-1942)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Nini_Roll_Anker_OB.F21265.jpg/40px-Nini_Roll_Anker_OB.F21265.jpg"
      },
       {
        value: "a/ab/abraham-mapu-330301.html",
        label: "Abraham Mapu (1807-1867)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Abraham_Mapu.jpg/40px-Abraham_Mapu.jpg"
      },
       {
        value: "v/vi/vilfredo-pareto-11031.html",
        label: "Vilfredo Pareto (1848-1923)",
        description: "sociólogo, economista y filósofo parisino",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Vilfredo_Pareto.jpg/40px-Vilfredo_Pareto.jpg"
      },
       {
        value: "m/ma/martin-p-nilsson-321959.html",
        label: "Martin P. Nilsson (1874-1967)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Nilsson%2C_Martin_Pson_%28ur_Kristianstads_nation_1911-1930%29.jpg/40px-Nilsson%2C_Martin_Pson_%28ur_Kristianstads_nation_1911-1930%29.jpg"
      },
       {
        value: "f/fr/frank-wedekind-57619.html",
        label: "Frank Wedekind (1864-1918)",
        description: "dramaturgo alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Frank_Wedekind.jpg/40px-Frank_Wedekind.jpg"
      },
       {
        value: "s/se/sebastian-sailer-69534.html",
        label: "Sebastian Sailer (1714-1777)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Sebastian_Sailer.jpg/40px-Sebastian_Sailer.jpg"
      },
       {
        value: "g/ga/gabriele-dannunzio-193236.html",
        label: "Gabriele D'Annunzio (1863-1938)",
        description: "escritor, poeta, periodista y dramaturgo italiano",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Gabriele_D%27Annunzio_02.jpg/40px-Gabriele_D%27Annunzio_02.jpg"
      },
       {
        value: "s/st/stanko-vraz-472123.html",
        label: "Stanko Vraz (1810-1851)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Mihael_Stroj_-_Stanko_Vraz.jpg/40px-Mihael_Stroj_-_Stanko_Vraz.jpg"
      },
       {
        value: "d/dm/dmitri-pisarev-378753.html",
        label: "Dmitri Písarev (1840-1868)",
        description: "periodista ruso",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Dimitri_Pisarev.jpg/40px-Dimitri_Pisarev.jpg"
      },
       {
        value: "m/ma/marie-anne-lenormand-262106.html",
        label: "Marie Anne Lenormand (1772-1843)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Portrait_of_Mlle_Lenormand_from_The_Court_of_Napoleon.jpg/40px-Portrait_of_Mlle_Lenormand_from_The_Court_of_Napoleon.jpg"
      },
       {
        value: "e/eu/eugenio-montale-83174.html",
        label: "Eugenio Montale (1896-1981)",
        description: "escritor italiano",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Eugenio_Montale.jpg/40px-Eugenio_Montale.jpg"
      },
       {
        value: "p/pa/paul-claudel-295830.html",
        label: "Paul Claudel (1868-1955)",
        description: "diplomático francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Paul_Claudel_01.jpg/40px-Paul_Claudel_01.jpg"
      },
       {
        value: "m/ma/max-dvorak-112173.html",
        label: "Max Dvořák (1874-1921)",
        description: "historiador del arte checo",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Max_Dvorak.jpg/40px-Max_Dvorak.jpg"
      },
       {
        value: "e/el/elias-lonnrot-153159.html",
        label: "Elias Lönnrot (1802-1884)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Elias_L%C3%B6nrot_Cabinet_Portrait-2_crop.jpg/40px-Elias_L%C3%B6nrot_Cabinet_Portrait-2_crop.jpg"
      },
       {
        value: "f/fr/franz-kafka-905.html",
        label: "Franz Kafka (1883-1924)",
        description: "escritor praguense de lengua alemana",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Kafka_portrait.jpg/40px-Kafka_portrait.jpg"
      },
       {
        value: "j/ja/jacob-grimm-6701.html",
        label: "Jacob Grimm (1785-1863)",
        description: "lingüista y folclorista alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Jacob_Grimm.jpg/40px-Jacob_Grimm.jpg"
      },
       {
        value: "h/he/henrich-steffens-64406.html",
        label: "Henrich Steffens (1773-1845)",
        description: "filósofo alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Henrich_Steffens2.jpg/40px-Henrich_Steffens2.jpg"
      },
       {
        value: "f/fr/friedrich-schiller-22670.html",
        label: "Friedrich Schiller (1759-1805)",
        description: "poeta, dramaturgo, filósofo e historiador alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Friedrich_Schiller_by_Ludovike_Simanowiz.jpg/40px-Friedrich_Schiller_by_Ludovike_Simanowiz.jpg"
      },
       {
        value: "j/ja/james-madison-11813.html",
        label: "James Madison (1751-1836)",
        description: "político estadounidense.  4° Presidente de los Estados Unidos.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/James_Madison.jpg/40px-James_Madison.jpg"
      },
       {
        value: "o/ot/oton-zupancic-301171.html",
        label: "Oton Župančič (1878-1949)",
        description: "poeta esloveno",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/OtonZupancic_%282%29.jpg/40px-OtonZupancic_%282%29.jpg"
      },
       {
        value: "s/sl/slobodan-jovanovic-89188.html",
        label: "Slobodan Jovanović (1869-1958)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Slobodan_Jovanovi%C4%87%2C_by_Uro%C5%A1_Predi%C4%87_%281931%29.jpg/40px-Slobodan_Jovanovi%C4%87%2C_by_Uro%C5%A1_Predi%C4%87_%281931%29.jpg"
      },
       {
        value: "e/ed/edward-bulwer-lytton-318462.html",
        label: "Edward Bulwer-Lytton (1803-1873)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Edward_George_Earle_Lytton_Bulwer_Lytton%2C_1st_Baron_Lytton_by_Henry_William_Pickersgill.jpg/40px-Edward_George_Earle_Lytton_Bulwer_Lytton%2C_1st_Baron_Lytton_by_Henry_William_Pickersgill.jpg"
      },
       {
        value: "h/he/herbert-eulenberg-65019.html",
        label: "Herbert Eulenberg (1876-1949)",
        description: "escritor alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Portraet_Herbert_Eulenberg.jpg/40px-Portraet_Herbert_Eulenberg.jpg"
      },
       {
        value: "a/au/august-von-kotzebue-57242.html",
        label: "August von Kotzebue (1761-1819)",
        description: "dramaturgo alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/AugustvonKotzebue1818.jpg/40px-AugustvonKotzebue1818.jpg"
      },
       {
        value: "c/co/constance-fenimore-woolson-436581.html",
        label: "Constance Fenimore Woolson (1840-1894)",
        description: "escritora estadounidense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Constance_Fenimore_Woolson-older.jpg/40px-Constance_Fenimore_Woolson-older.jpg"
      },
       {
        value: "e/el/eleonora-fonseca-pimentel-446504.html",
        label: "Eleonora Fonseca Pimentel (1752-1799)",
        description: "poetisa italiana",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Eleonora_Fonseca_Pimentel.jpg/40px-Eleonora_Fonseca_Pimentel.jpg"
      },
       {
        value: "n/na/naim-frasheri-47007.html",
        label: "Naim Frashëri (1846-1900)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Naim_Frasheri.jpg/40px-Naim_Frasheri.jpg"
      },
       {
        value: "v/vi/victoria-benedictsson-273950.html",
        label: "Victoria Benedictsson (1850-1888)",
        description: "escritora sueca",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Victoria_Benedictsson_b%26w.jpg/40px-Victoria_Benedictsson_b%26w.jpg"
      },
       {
        value: "e/ed/edith-durham-287994.html",
        label: "Edith Durham (1863-1944)",
        description: "artista británica",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Edith_Durham.jpg/40px-Edith_Durham.jpg"
      },
       {
        value: "n/ni/nikolai-valentinov-504024.html",
        label: "Nikolai Valentinov (1879-1964)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Valentinov.jpg/40px-Valentinov.jpg"
      },
       {
        value: "m/mi/miguel-de-unamuno-185085.html",
        label: "Miguel de Unamuno (1864-1936)",
        description: "escritor y filósofo español",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Miguel_de_Unamuno_Meurisse_1925.jpg/40px-Miguel_de_Unamuno_Meurisse_1925.jpg"
      },
       {
        value: "h/hy/hyakken-uchida-437811.html",
        label: "Hyakken Uchida (1889-1971)",
        description: "escritor japonés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Uchida_Hyakken_19521015.jpg/40px-Uchida_Hyakken_19521015.jpg"
      },
       {
        value: "u/ur/ura-jaksic-342124.html",
        label: "Đura Jakšić (1832-1878)",
        description: "escritor, poeta y pintor serbio",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Djura_Jaksic_autoportret.jpg/40px-Djura_Jaksic_autoportret.jpg"
      },
       {
        value: "t/ti/tin-ujevic-347643.html",
        label: "Tin Ujević (1891-1955)",
        description: "poeta croata",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Tin_Ujevi%C4%87_2.jpg/40px-Tin_Ujevi%C4%87_2.jpg"
      },
       {
        value: "z/za/zacharias-werner-139557.html",
        label: "Zacharias Werner (1768-1823)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Zacharias_werner.jpg/40px-Zacharias_werner.jpg"
      },
       {
        value: "a/al/alfred-hermann-fried-78488.html",
        label: "Alfred Hermann Fried (1864-1921)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Alfred_Hermann_Fried_nobel.jpg/40px-Alfred_Hermann_Fried_nobel.jpg"
      },
       {
        value: "k/ku/kurt-tucholsky-57386.html",
        label: "Kurt Tucholsky (1890-1935)",
        description: "periodista de Alemania",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/TucholskyParis1928.jpg/40px-TucholskyParis1928.jpg"
      },
       {
        value: "e/em/emilio-frugoni-166298.html",
        label: "Emilio Frugoni (1880-1969)",
        description: "político uruguayo",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Pasaje_Frugoni.jpg/40px-Pasaje_Frugoni.jpg"
      },
       {
        value: "a/al/alfonso-reyes-ochoa-462721.html",
        label: "Alfonso Reyes Ochoa (1889-1959)",
        description: "poeta, ensayista, narrador, diplomático y pensador mexicano",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Alfonso_Reyes.jpg/40px-Alfonso_Reyes.jpg"
      },
       {
        value: "w/wa/walter-cannon-503192.html",
        label: "Walter Cannon (1871-1945)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Walter_Bradford_Cannon.jpg/40px-Walter_Bradford_Cannon.jpg"
      },
       {
        value: "p/pe/pearl-s-buck-80900.html",
        label: "Pearl S. Buck (1892-1973)",
        description: "escritora estadounidense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Pearl_Buck.jpg/40px-Pearl_Buck.jpg"
      },
       {
        value: "b/br/bram-stoker-36184.html",
        label: "Bram Stoker (1847-1912)",
        description: "escritor irlandés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Bram_Stoker_1906.jpg/40px-Bram_Stoker_1906.jpg"
      },
       {
        value: "j/jo/jose-antonio-ramos-sucre-366883.html",
        label: "José Antonio Ramos Sucre (1890-1930)",
        description: "escritor venezolano",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Ramos_Sucre.jpg/40px-Ramos_Sucre.jpg"
      },
       {
        value: "j/jo/john-milton-hay-117101.html",
        label: "John Milton Hay (1838-1905)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/John_Hay%2C_bw_photo_portrait%2C_1897.jpg/40px-John_Hay%2C_bw_photo_portrait%2C_1897.jpg"
      },
       {
        value: "c/ch/charlotte-turner-smith-442902.html",
        label: "Charlotte Turner Smith (1749-1806)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Charlotte_Smith.jpg/40px-Charlotte_Smith.jpg"
      },
       {
        value: "c/cu/curt-goetz-69320.html",
        label: "Curt Goetz (1888-1960)",
        description: "actor alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Grab_Kurt_Goetz_03.jpg/40px-Grab_Kurt_Goetz_03.jpg"
      },
       {
        value: "l/le/lenin-1394.html",
        label: "Lenin (1870-1924)",
        description: "político ruso, teórico comunista, líder de la facción bolchevique del Partido Obrero Socialdemócrata de Rusia",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Lenin_in_Switzerland.jpg/40px-Lenin_in_Switzerland.jpg"
      },
       {
        value: "h/he/heinrich-julius-adolph-robert-hartig-76004.html",
        label: "Heinrich Julius Adolph Robert Hartig (1839-1901)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Robert_Hartig.jpg/40px-Robert_Hartig.jpg"
      },
       {
        value: "e/er/ernst-junger-76727.html",
        label: "Ernst Jünger (1895-1998)",
        description: "escritor alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Ernst_Junger_drawing.jpg/40px-Ernst_Junger_drawing.jpg"
      },
       {
        value: "a/ad/adam-muller-63176.html",
        label: "Adam Müller (1779-1829)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/AdamMuller.jpg/40px-AdamMuller.jpg"
      },
       {
        value: "e/em/emilio-korner-85228.html",
        label: "Emilio Körner (1846-1920)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Emil_K%C3%B6rner_Ej%C3%A9rcito_Chile.jpg/40px-Emil_K%C3%B6rner_Ej%C3%A9rcito_Chile.jpg"
      },
       {
        value: "a/am/amalie-schoppe-71563.html",
        label: "Amalie Schoppe (1791-1858)",
        description: "escritora alemana",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Amalie_Schoppe.jpg/40px-Amalie_Schoppe.jpg"
      },
       {
        value: "h/hu/hugo-von-hofmannsthal-51513.html",
        label: "Hugo von Hofmannsthal (1874-1929)",
        description: "poeta, dramaturgo, narrador y ensayista austríaco",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Hofmannsthal_1893.jpg/40px-Hofmannsthal_1893.jpg"
      },
       {
        value: "m/ma/masaoka-shiki-315152.html",
        label: "Masaoka Shiki (1867-1902)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Masaoka_Shiki.jpg/40px-Masaoka_Shiki.jpg"
      },
       {
        value: "l/le/leopoldo-alas-clarin-312747.html",
        label: "Leopoldo Alas «Clarín» (1852-1901)",
        description: "periodista y escritor español",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/LeopoldoAlasClarin.jpg/40px-LeopoldoAlasClarin.jpg"
      },
       {
        value: "p/pa/paul-scheerbart-62435.html",
        label: "Paul Scheerbart (1863-1915)",
        description: "poeta alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Paul_Scheerbarth.jpg/40px-Paul_Scheerbarth.jpg"
      },
       {
        value: "c/ca/carlos-anaya-125743.html",
        label: "Carlos Anaya (1777-1862)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Carlos_Anaya.jpg/40px-Carlos_Anaya.jpg"
      },
       {
        value: "j/je/jedrzej-moraczewski-470928.html",
        label: "Jędrzej Moraczewski (1870-1944)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/J%C4%99drzej_Moraczewski.jpg/40px-J%C4%99drzej_Moraczewski.jpg"
      },
       {
        value: "r/ro/roquia-sakhawat-hussain-467083.html",
        label: "Roquia Sakhawat Hussain (1880-1932)",
        description: "activista feminista y escritora sobre temas sociales",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Begum_Rokeya.jpg/40px-Begum_Rokeya.jpg"
      },
       {
        value: "a/ar/ariel-durant-469474.html",
        label: "Ariel Durant (1898-1981)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/William_and_Ariel_Durant.jpg/40px-William_and_Ariel_Durant.jpg"
      },
       {
        value: "w/wi/william-jones-273969.html",
        label: "William Jones (1746-1794)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Sir_William_Jones.jpg/40px-Sir_William_Jones.jpg"
      },
       {
        value: "v/vi/victoire-de-donnissan-de-la-rochejacquelein-462516.html",
        label: "Victoire de Donnissan de La Rochejacquelein (1772-1857)",
        description: "escritora francesa",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Victorine_Donnissan-La_Rochejaquelein.jpg/40px-Victorine_Donnissan-La_Rochejaquelein.jpg"
      },
       {
        value: "g/gi/gideon-brecher-90032.html",
        label: "Gideon Brecher (1797-1873)",
        description: "médico austríaco",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Gideon_Brecher.jpg/40px-Gideon_Brecher.jpg"
      },
       {
        value: "a/an/anna-laetitia-barbauld-268305.html",
        label: "Anna Laetitia Barbauld (1743-1825)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/ChapmanBarbauld.jpg/40px-ChapmanBarbauld.jpg"
      },
       {
        value: "e/em/emile-augier-256991.html",
        label: "Émile Augier (1820-1889)",
        description: "escritor francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Augier.jpg/40px-Augier.jpg"
      },
       {
        value: "w/wi/wilhelm-von-rahden-126470.html",
        label: "Wilhelm von Rahden (1793-1860)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Rahden.jpg/40px-Rahden.jpg"
      },
       {
        value: "e/er/erik-gustaf-geijer-380937.html",
        label: "Erik Gustaf Geijer (1783-1847)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Erik_Gustaf_Geijer.jpg/40px-Erik_Gustaf_Geijer.jpg"
      },
       {
        value: "j/jo/johanna-schopenhauer-61440.html",
        label: "Johanna Schopenhauer (1766-1838)",
        description: "novelista alemana",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Caroline_Bardua_-_Johanna_%26_Adele_Schopenhauer_%281806%29.jpg/40px-Caroline_Bardua_-_Johanna_%26_Adele_Schopenhauer_%281806%29.jpg"
      },
       {
        value: "j/ja/jakob-wassermann-60369.html",
        label: "Jakob Wassermann (1873-1934)",
        description: "novelista judío austriaco",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Jakob_Wassermann_1934.jpg/40px-Jakob_Wassermann_1934.jpg"
      },
       {
        value: "v/vi/viktor-shklovski-312467.html",
        label: "Víktor Shklovski (1893-1984)",
        description: "escritor ruso",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Sklovsky.jpg/40px-Sklovsky.jpg"
      },
       {
        value: "r/ru/rudolf-rocker-213562.html",
        label: "Rudolf Rocker (1873-1958)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Rudolf_Rocker.jpg/40px-Rudolf_Rocker.jpg"
      },
       {
        value: "e/el/ellen-anderson-gholson-glasgow-433325.html",
        label: "Ellen Anderson Gholson Glasgow (1873-1945)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Portrait_of_Ellen_Glasgow.jpg/40px-Portrait_of_Ellen_Glasgow.jpg"
      },
       {
        value: "n/ni/nikolai-dobroliubov-311459.html",
        label: "Nikolái Dobroliubov (1836-1861)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Dobrolyubov.jpg/40px-Dobrolyubov.jpg"
      },
       {
        value: "r/ru/rudolf-hilferding-57848.html",
        label: "Rudolf Hilferding (1877-1941)",
        description: "economista marxista vienés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Bundesarchiv_Bild_102-00144%2C_Rudolf_Hilferding.jpg/40px-Bundesarchiv_Bild_102-00144%2C_Rudolf_Hilferding.jpg"
      },
       {
        value: "g/ga/gaston-bachelard-270800.html",
        label: "Gaston Bachelard (1884-1962)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Gaston_Bachelard_1965.jpg/40px-Gaston_Bachelard_1965.jpg"
      },
       {
        value: "v/ve/verner-von-heidenstam-129173.html",
        label: "Verner von Heidenstam (1859-1940)",
        description: "escritor sueco",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Johan_Krouth%C3%A9n_-_Portr%C3%A4tt_av_Verner_von_Heidenstam.jpg/40px-Johan_Krouth%C3%A9n_-_Portr%C3%A4tt_av_Verner_von_Heidenstam.jpg"
      },
       {
        value: "g/ge/georges-rodenbach-378240.html",
        label: "Georges Rodenbach (1855-1898)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Georges_Rodenbach%2C_portrait.jpg/40px-Georges_Rodenbach%2C_portrait.jpg"
      },
       {
        value: "u/ur/uri-zvi-greenberg-162793.html",
        label: "Uri Zvi Greenberg (1896-1981)",
        description: "político israelí",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Uri_Zvi_Grinberg_1956.jpg/40px-Uri_Zvi_Grinberg_1956.jpg"
      },
       {
        value: "e/ed/edward-bellamy-455776.html",
        label: "Edward Bellamy (1850-1898)",
        description: "autor estadounidense y socialista",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Edward_Bellamy_-_photograph_c.1889.jpg/40px-Edward_Bellamy_-_photograph_c.1889.jpg"
      },
       {
        value: "e/em/emmanuil-roidis-211350.html",
        label: "Emmanuil Roídis (1836-1904)",
        description: "escritor griego",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Royidis.jpg/40px-Royidis.jpg"
      },
       {
        value: "w/wi/willem-arondeus-323985.html",
        label: "Willem Arondeus (1894-1943)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Willem_Arondeus.jpg/40px-Willem_Arondeus.jpg"
      },
       {
        value: "w/wi/william-c-demille-454464.html",
        label: "William C. deMille (1878-1955)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Young_William_C._de_Mille.jpg/40px-Young_William_C._de_Mille.jpg"
      },
       {
        value: "k/ku/kurt-eisner-76440.html",
        label: "Kurt Eisner (1867-1919)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/KurtEisner1919.jpg/40px-KurtEisner1919.jpg"
      },
       {
        value: "o/ol/olive-schreiner-151180.html",
        label: "Olive Schreiner (1855-1920)",
        description: "escritora",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Olive_Schreiner00.jpg/40px-Olive_Schreiner00.jpg"
      },
       {
        value: "j/jo/johann-most-213632.html",
        label: "Johann Most (1846-1906)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Johann_Most_2.jpg/40px-Johann_Most_2.jpg"
      },
       {
        value: "f/fr/fredrik-bajer-191016.html",
        label: "Fredrik Bajer (1837-1922)",
        description: "político danés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Frederik_Bajer_by_E._M%C3%B8ller.jpg/40px-Frederik_Bajer_by_E._M%C3%B8ller.jpg"
      },
       {
        value: "s/sa/sarah-trimmer-461189.html",
        label: "Sarah Trimmer (1741-1810)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Sarah_Trimmer_by_Henry_Howard.jpg/40px-Sarah_Trimmer_by_Henry_Howard.jpg"
      },
       {
        value: "i/iv/ivan-goncharov-189665.html",
        label: "Iván Goncharov (1812-1891)",
        description: "escritor ruso",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Ivan_Goncharov.jpg/40px-Ivan_Goncharov.jpg"
      },
       {
        value: "k/ka/karoline-pichler-78814.html",
        label: "Karoline Pichler (1769-1843)",
        description: "escritora austríaca",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Caroline_Pichler.jpg/40px-Caroline_Pichler.jpg"
      },
       {
        value: "a/al/alphonse-daudet-228546.html",
        label: "Alphonse Daudet (1840-1897)",
        description: "novelista francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Alphonse_Daudet_2.jpg/40px-Alphonse_Daudet_2.jpg"
      },
       {
        value: "j/ju/jules-michelet-310791.html",
        label: "Jules Michelet (1798-1874)",
        description: "historiador francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Jules_Michelet.jpg/40px-Jules_Michelet.jpg"
      },
       {
        value: "w/wa/wadysaw-reymont-121180.html",
        label: "Władysław Reymont (1867-1925)",
        description: "novelista polaco",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Wladyslaw_Reymont.jpg/40px-Wladyslaw_Reymont.jpg"
      },
       {
        value: "g/ge/george-s-kaufman-163662.html",
        label: "George S. Kaufman (1889-1961)",
        description: "escritor estadounidense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/George_S._Kaufman_ca._1915.jpg/40px-George_S._Kaufman_ca._1915.jpg"
      },
       {
        value: "w/wi/william-cullen-462762.html",
        label: "William Cullen (1710-1790)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/William_Cullen.jpg/40px-William_Cullen.jpg"
      },
       {
        value: "s/sa/saint-john-perse-132684.html",
        label: "Saint-John Perse (1887-1975)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Saint-John_Perse_1960.jpg/40px-Saint-John_Perse_1960.jpg"
      },
       {
        value: "g/ge/georg-lukacs-151523.html",
        label: "Georg Lukács (1885-1971)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Luk%C3%A1cs_Gy%C3%B6rgy.jpg/40px-Luk%C3%A1cs_Gy%C3%B6rgy.jpg"
      },
       {
        value: "j/jo/joseph-kessel-356537.html",
        label: "Joseph Kessel (1898-1979)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Joseph_Kessel.jpg/40px-Joseph_Kessel.jpg"
      },
       {
        value: "i/id/ida-tarbell-271712.html",
        label: "Ida Tarbell (1857-1944)",
        description: "periodista estadounidense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Ida_M_Tarbell_crop.jpg/40px-Ida_M_Tarbell_crop.jpg"
      },
       {
        value: "h/he/helmuth-von-moltke-44205.html",
        label: "Helmuth von Moltke (1800-1891)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Moltke-small.jpg/40px-Moltke-small.jpg"
      },
       {
        value: "e/ed/edouard-rod-122356.html",
        label: "Édouard Rod (1857-1910)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Edouard_Rod.jpg/40px-Edouard_Rod.jpg"
      },
       {
        value: "h/he/henry-david-thoreau-131149.html",
        label: "Henry David Thoreau (1817-1862)",
        description: "escritor, poeta y filósofo estadounidense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Benjamin_D._Maxham_-_Henry_David_Thoreau_-_Restored.jpg/40px-Benjamin_D._Maxham_-_Henry_David_Thoreau_-_Restored.jpg"
      },
       {
        value: "h/he/henry-brooks-adams-458390.html",
        label: "Henry Brooks Adams (1838-1918)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Henry_Adams.jpg/40px-Henry_Adams.jpg"
      },
       {
        value: "n/ni/nicolas-chamfort-347891.html",
        label: "Nicolas Chamfort (1741-1794)",
        description: "escritor francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Nicolas_Chamfort.jpg/40px-Nicolas_Chamfort.jpg"
      },
       {
        value: "e/er/ernest-renan-157155.html",
        label: "Ernest Renan (1823-1892)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Ernest_Renan_1876-84.jpg/40px-Ernest_Renan_1876-84.jpg"
      },
       {
        value: "r/ri/richard-strauss-13894.html",
        label: "Richard Strauss (1864-1949)",
        description: "Compositor y director de orquesta alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/1904_Richard_Strauss.jpg/40px-1904_Richard_Strauss.jpg"
      },
       {
        value: "e/em/emile-littre-286107.html",
        label: "Émile Littré (1801-1881)",
        description: "lexicógrafo y filósofo francés, famoso por su Diccionario de la lengua francesa",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/%C3%89mile_Littr%C3%A9.jpg/40px-%C3%89mile_Littr%C3%A9.jpg"
      },
       {
        value: "l/li/lin-yutang-334086.html",
        label: "Lin Yutang (1895-1976)",
        description: "escritor chino",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Linyutang.jpg/40px-Linyutang.jpg"
      },
       {
        value: "w/wi/wilhelmine-schroder-devrient-63238.html",
        label: "Wilhelmine Schröder-Devrient (1804-1860)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Wilhelmine_schroeder-devrient.jpg/40px-Wilhelmine_schroeder-devrient.jpg"
      },
       {
        value: "m/mi/mihai-eminescu-184935.html",
        label: "Mihai Eminescu (1850-1889)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Eminescu.jpg/40px-Eminescu.jpg"
      },
       {
        value: "s/st/stefan-zweig-78491.html",
        label: "Stefan Zweig (1881-1942)",
        description: "escritor austríaco",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Stefan_Zweig_1900_cropped.jpg/40px-Stefan_Zweig_1900_cropped.jpg"
      },
       {
        value: "l/lu/ludwig-borne-213595.html",
        label: "Ludwig Börne (1786-1837)",
        description: "escritor alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/B%C3%B6rne%2C_Ludwig.jpg/40px-B%C3%B6rne%2C_Ludwig.jpg"
      },
       {
        value: "h/ho/howard-phillips-lovecraft-169566.html",
        label: "Howard Phillips Lovecraft (1890-1937)",
        description: "escritor estadounidense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Howard_Phillips_Lovecraft_in_1915.jpg/40px-Howard_Phillips_Lovecraft_in_1915.jpg"
      },
       {
        value: "g/ge/george-eliot-131333.html",
        label: "George Eliot (1819-1880)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/George_Eliot_at_30_by_Fran%C3%A7ois_D%27Albert_Durade.jpg/40px-George_Eliot_at_30_by_Fran%C3%A7ois_D%27Albert_Durade.jpg"
      },
       {
        value: "k/ka/karl-maria-kertbeny-94382.html",
        label: "Karl-Maria Kertbeny (1824-1882)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Kertbeny_Karl_Maria_%281824-1882%29.jpg/40px-Kertbeny_Karl_Maria_%281824-1882%29.jpg"
      },
       {
        value: "f/fr/fritz-mauthner-15953.html",
        label: "Fritz Mauthner (1849-1923)",
        description: "literato austro-húngaro",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Fritz_Mauthner_%281849-1923%29.jpg/40px-Fritz_Mauthner_%281849-1923%29.jpg"
      },
       {
        value: "f/fr/francis-galton-191026.html",
        label: "Francis Galton (1822-1911)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Francis_Galton.jpg/40px-Francis_Galton.jpg"
      },
       {
        value: "m/ma/manuel-de-jesus-troncoso-436078.html",
        label: "Manuel de Jesús Troncoso (1878-1955)",
        description: "abogado y político dominicano",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Manuel_de_Jes%C3%BAs_Troncoso_de_la_Concha.jpg/40px-Manuel_de_Jes%C3%BAs_Troncoso_de_la_Concha.jpg"
      },
       {
        value: "g/ge/george-sand-3816.html",
        label: "George Sand (1804-1876)",
        description: "escritora francesa",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/George_Sand_by_Nadar%2C_1864.jpg/40px-George_Sand_by_Nadar%2C_1864.jpg"
      },
       {
        value: "h/hi/hilaire-belloc-333106.html",
        label: "Hilaire Belloc (1870-1953)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Belloc_side.jpg/40px-Belloc_side.jpg"
      },
       {
        value: "k/ko/kobayashi-issa-312709.html",
        label: "Kobayashi Issa (1763-1828)",
        description: "escritor japonés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Kobayashi_Issa-Portrait.jpg/40px-Kobayashi_Issa-Portrait.jpg"
      },
       {
        value: "z/za/zacarias-topelius-139549.html",
        label: "Zacarías Topelius (1818-1898)",
        description: "historiador finlandés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Zachris_%28Sakari%29_Topelius.jpg/40px-Zachris_%28Sakari%29_Topelius.jpg"
      },
       {
        value: "f/fr/fritz-von-unruh-64791.html",
        label: "Fritz von Unruh (1885-1970)",
        description: "escritor alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Bundesarchiv_Bild_102-12981%2C_Fritz_von_Unruh.jpg/40px-Bundesarchiv_Bild_102-12981%2C_Fritz_von_Unruh.jpg"
      },
       {
        value: "k/ku/kurt-hiller-66458.html",
        label: "Kurt Hiller (1885-1972)",
        description: "periodista de Alemania",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Kurt_Hiller.jpg/40px-Kurt_Hiller.jpg"
      },
       {
        value: "f/fr/frances-wright-441537.html",
        label: "Frances Wright (1795-1852)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Franceswright.jpg/40px-Franceswright.jpg"
      },
       {
        value: "a/ad/ada-maria-elflein-346216.html",
        label: "Ada María Elflein (1880-1919)",
        description: "poetisas, traductora, feminista, periodista y profesora argentina",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Ada_Elflein.jpg/40px-Ada_Elflein.jpg"
      },
       {
        value: "e/em/emmy-hennings-76815.html",
        label: "Emmy Hennings (1885-1948)",
        description: "poetisa alemana",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Hanns_Bolz_Emmy_Hennings_1911.jpg/40px-Hanns_Bolz_Emmy_Hennings_1911.jpg"
      },
       {
        value: "a/al/alberto-gerchunoff-458186.html",
        label: "Alberto Gerchunoff (1883-1950)",
        description: "escritor argentino",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Alberto_Gerchunoff.jpg/40px-Alberto_Gerchunoff.jpg"
      },
       {
        value: "g/ga/gabriel-bonnot-de-mably-202555.html",
        label: "Gabriel Bonnot de Mably (1709-1785)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Gabriel_Bonnot_de_Mably.jpg/40px-Gabriel_Bonnot_de_Mably.jpg"
      },
       {
        value: "j/jo/johann-christian-rosenmuller-214097.html",
        label: "Johann Christian Rosenmüller (1771-1820)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/WP_Johann_Christian_Rosenm%C3%BCller_2.jpg/40px-WP_Johann_Christian_Rosenm%C3%BCller_2.jpg"
      },
       {
        value: "a/ad/adolph-hausrath-74062.html",
        label: "Adolph Hausrath (1837-1909)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Adolf_Hausrath.jpg/40px-Adolf_Hausrath.jpg"
      },
       {
        value: "g/gu/gustav-struve-213794.html",
        label: "Gustav Struve (1805-1870)",
        description: "periodista de Alemania",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Gustav_struve.jpg/40px-Gustav_struve.jpg"
      },
       {
        value: "a/au/august-spies-224224.html",
        label: "August Spies (1855-1887)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/August-Spies-1886.jpg/40px-August-Spies-1886.jpg"
      },
       {
        value: "e/em/emile-bernard-264193.html",
        label: "Émile Bernard (1868-1941)",
        description: "pintor francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Lautrecx07.jpg/40px-Lautrecx07.jpg"
      },
       {
        value: "j/jo/johann-christoph-gottsched-76442.html",
        label: "Johann Christoph Gottsched (1700-1766)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Johann_Christoph_Gottsched.jpg/40px-Johann_Christoph_Gottsched.jpg"
      },
       {
        value: "j/jo/joseph-meyer-76183.html",
        label: "Joseph Meyer (1796-1856)",
        description: "editor alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Josephmeyer.jpg/40px-Josephmeyer.jpg"
      },
       {
        value: "r/ri/richard-volkmann-64707.html",
        label: "Richard Volkmann (1830-1889)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Richard_von_Volkmann2.jpg/40px-Richard_von_Volkmann2.jpg"
      },
       {
        value: "g/ge/gertrud-von-le-fort-62798.html",
        label: "Gertrud von le Fort (1876-1971)",
        description: "escritora alemana",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Gertrud_v_Le_Fort_c1935.jpg/40px-Gertrud_v_Le_Fort_c1935.jpg"
      },
       {
        value: "a/ar/arnold-bax-143198.html",
        label: "Arnold Bax (1883-1953)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Arnold-Bax-iln-2Dec22p.jpg/40px-Arnold-Bax-iln-2Dec22p.jpg"
      },
       {
        value: "s/si/silvestre-de-sacy-507774.html",
        label: "Silvestre de Sacy (1758-1838)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Silvestre_de_Sacy.jpg/40px-Silvestre_de_Sacy.jpg"
      },
       {
        value: "e/er/ernst-von-houwald-73607.html",
        label: "Ernst von Houwald (1778-1845)",
        description: "escritor alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Houwald%2C_Ernst_von_%281778-1845%29.jpg/40px-Houwald%2C_Ernst_von_%281778-1845%29.jpg"
      },
       {
        value: "f/fe/ferdinand-freiligrath-213719.html",
        label: "Ferdinand Freiligrath (1810-1876)",
        description: "poeta alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Ferdinand_Freiligrath_Hasenclever.jpg/40px-Ferdinand_Freiligrath_Hasenclever.jpg"
      },
       {
        value: "e/eu/eugene-pottier-312915.html",
        label: "Eugène Pottier (1816-1887)",
        description: "político francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eug%C3%A8ne_Pottier.jpg/40px-Eug%C3%A8ne_Pottier.jpg"
      },
       {
        value: "l/lu/ludwig-beck-57170.html",
        label: "Ludwig Beck (1880-1944)",
        description: "militar alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Bundesarchiv_Bild_183-C13564%2C_Ludwig_Beck.jpg/40px-Bundesarchiv_Bild_183-C13564%2C_Ludwig_Beck.jpg"
      },
       {
        value: "m/ma/maciej-rataj-246296.html",
        label: "Maciej Rataj (1884-1940)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Rataj.jpg/40px-Rataj.jpg"
      },
       {
        value: "e/es/esteban-szechenyi-279397.html",
        label: "Esteban Széchenyi (1791-1860)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Istv%C3%A1n_Sz%C3%A9chenyi.jpg/40px-Istv%C3%A1n_Sz%C3%A9chenyi.jpg"
      },
       {
        value: "l/lo/lorenz-leopold-haschka-320496.html",
        label: "Lorenz Leopold Haschka (1749-1827)",
        description: "escritor austríaco",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Haydn_Kaiserlied_Reinschrift.jpg/40px-Haydn_Kaiserlied_Reinschrift.jpg"
      },
       {
        value: "a/au/auguste-villiers-de-lisle-adam-366285.html",
        label: "Auguste Villiers de L'Isle-Adam (1838-1889)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Auguste_de_Villers_de_L%27Isle-Adam.jpg/40px-Auguste_de_Villers_de_L%27Isle-Adam.jpg"
      },
       {
        value: "e/e-/e-e-cummings-298703.html",
        label: "E. e. cummings (1894-1962)",
        description: "poeta estadounidense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/E._E._Cummings_NYWTS.jpg/40px-E._E._Cummings_NYWTS.jpg"
      },
       {
        value: "a/ad/adolf-friedrich-von-schack-63876.html",
        label: "Adolf Friedrich von Schack (1815-1894)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Adolf_F_G_v_Schack.jpg/40px-Adolf_F_G_v_Schack.jpg"
      },
       {
        value: "r/ro/robert-musil-78487.html",
        label: "Robert Musil (1880-1942)",
        description: "escritor austríaco",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Robert_Musil_1900.jpg/40px-Robert_Musil_1900.jpg"
      },
       {
        value: "w/wa/walburga-von-hohenthal-84368.html",
        label: "Walburga von Hohenthal (1839-1929)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Gr%C3%A4fin_Hohenthal.jpg/40px-Gr%C3%A4fin_Hohenthal.jpg"
      },
       {
        value: "d/da/daniel-henry-kahnweiler-67762.html",
        label: "Daniel-Henry Kahnweiler (1884-1979)",
        description: "historiador del arte alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Juan_Gris_Daniel-Henry_Kahnweiler_1921.jpg/40px-Juan_Gris_Daniel-Henry_Kahnweiler_1921.jpg"
      },
       {
        value: "l/le/leopold-von-sacher-masoch-78474.html",
        label: "Leopold von Sacher-Masoch (1836-1895)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Leopold_von_Sacher-Masoch%2C_portrait_2.jpg/40px-Leopold_von_Sacher-Masoch%2C_portrait_2.jpg"
      },
       {
        value: "c/ch/charles-brockden-brown-468280.html",
        label: "Charles Brockden Brown (1771-1810)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Charles_Brockden_Brown.jpg/40px-Charles_Brockden_Brown.jpg"
      },
       {
        value: "e/er/ernst-bloch-57240.html",
        label: "Ernst Bloch (1885-1977)",
        description: "filósofo alemán del siglo XX",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Bundesarchiv_Bild_183-27348-0008%2C_Berlin%2C_Ernst_Bloch_auf_Begegnung_der_Geistesschaffenden.jpg/40px-Bundesarchiv_Bild_183-27348-0008%2C_Berlin%2C_Ernst_Bloch_auf_Begegnung_der_Geistesschaffenden.jpg"
      },
       {
        value: "e/el/elena-vacarescu-292539.html",
        label: "Elena Văcărescu (1868-1947)",
        description: "escritora rumana",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elena_Vacarescu.jpg/40px-Elena_Vacarescu.jpg"
      },
       {
        value: "l/le/lewis-carroll-38082.html",
        label: "Lewis Carroll (1832-1898)",
        description: "diácono anglicano, lógico, matemático, fotógrafo  y escritor británico",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/LewisCarrollSelfPhoto.jpg/40px-LewisCarrollSelfPhoto.jpg"
      },
       {
        value: "m/ma/matthias-jochumsson-380925.html",
        label: "Matthías Jochumsson (1835-1920)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Matthias_jochumsson.jpg/40px-Matthias_jochumsson.jpg"
      },
       {
        value: "b/be/bella-rosenfeld-467352.html",
        label: "Bella Rosenfeld (1895-1944)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Bella_chagall.jpg/40px-Bella_chagall.jpg"
      },
       {
        value: "z/za/zane-grey-146763.html",
        label: "Zane Grey (1872-1939)",
        description: "novelista estadounidense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Zane_Grey_1895.jpg/40px-Zane_Grey_1895.jpg"
      },
       {
        value: "c/cl/clemens-brentano-57235.html",
        label: "Clemens Brentano (1778-1842)",
        description: "escritor alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Clemens_Brentano.jpg/40px-Clemens_Brentano.jpg"
      },
       {
        value: "r/ra/ranpo-edogawa-347412.html",
        label: "Ranpo Edogawa (1894-1965)",
        description: "escritor japonés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Rampo_Edogawa_02.jpg/40px-Rampo_Edogawa_02.jpg"
      },
       {
        value: "a/ad/adam-oehlenschlager-168356.html",
        label: "Adam Oehlenschläger (1779-1850)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/A_Oelenschlager.jpg/40px-A_Oelenschlager.jpg"
      },
       {
        value: "m/ma/maria-gaetana-agnesi-200392.html",
        label: "Maria Gaetana Agnesi (1718-1799)",
        description: "filósofa y matemática italiana",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Maria_Gaetana_Agnesi.jpg/40px-Maria_Gaetana_Agnesi.jpg"
      },
       {
        value: "m/ma/maurice-barres-314957.html",
        label: "Maurice Barrès (1862-1923)",
        description: "novelista francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Maurice_Barr%C3%A8s.jpg/40px-Maurice_Barr%C3%A8s.jpg"
      },
       {
        value: "e/ed/eduard-morike-63699.html",
        label: "Eduard Mörike (1804-1875)",
        description: "poeta alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Eduard_M%C3%B6rike.jpg/40px-Eduard_M%C3%B6rike.jpg"
      },
       {
        value: "h/he/hermann-usener-63078.html",
        label: "Hermann Usener (1834-1905)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Hermann_Usener_-_Imagines_philologorum.jpg/40px-Hermann_Usener_-_Imagines_philologorum.jpg"
      },
       {
        value: "b/be/bettina-von-arnim-57236.html",
        label: "Bettina von Arnim (1785-1859)",
        description: "escritora alemana",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Bettina-von-arnim-grimm.jpg/40px-Bettina-von-arnim-grimm.jpg"
      },
       {
        value: "v/vl/vladimir-dal-326499.html",
        label: "Vladímir Dal (1801-1872)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/1872._%D0%9F%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82_%D0%BF%D0%B8%D1%81%D0%B0%D1%82%D0%B5%D0%BB%D1%8F_%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BC%D0%B8%D1%80%D0%B0_%D0%98%D0%B2%D0%B0%D0%BD%D0%BE%D0%B2%D0%B8%D1%87%D0%B0_%D0%94%D0%B0%D0%BB%D1%8F.jpg/40px-1872._%D0%9F%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82_%D0%BF%D0%B8%D1%81%D0%B0%D1%82%D0%B5%D0%BB%D1%8F_%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BC%D0%B8%D1%80%D0%B0_%D0%98%D0%B2%D0%B0%D0%BD%D0%BE%D0%B2%D0%B8%D1%87%D0%B0_%D0%94%D0%B0%D0%BB%D1%8F.jpg"
      },
       {
        value: "f/fr/francesco-de-sanctis-471523.html",
        label: "Francesco De Sanctis (1817-1883)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Francesco_De_Sanctis_ritratto.jpg/40px-Francesco_De_Sanctis_ritratto.jpg"
      },
       {
        value: "f/fe/ferdinando-petruccelli-della-gattina-93862.html",
        label: "Ferdinando Petruccelli della Gattina (1815-1890)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Ferdinando_Petruccelli_della_Gattina.jpg/40px-Ferdinando_Petruccelli_della_Gattina.jpg"
      },
       {
        value: "g/ge/gerhart-hauptmann-43523.html",
        label: "Gerhart Hauptmann (1862-1946)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Gerhart_Hauptmann_nobel.jpg/40px-Gerhart_Hauptmann_nobel.jpg"
      },
       {
        value: "n/ne/nella-larsen-453665.html",
        label: "Nella Larsen (1891-1964)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/NellaLarsen1928.jpg/40px-NellaLarsen1928.jpg"
      },
       {
        value: "v/vi/virginia-woolf-40909.html",
        label: "Virginia Woolf (1882-1941)",
        description: "escritora inglesa",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/George_Charles_Beresford_-_Virginia_Woolf_in_1902_-_Restoration.jpg/40px-George_Charles_Beresford_-_Virginia_Woolf_in_1902_-_Restoration.jpg"
      },
       {
        value: "f/fr/friedrich-christian-diez-64356.html",
        label: "Friedrich Christian Diez (1794-1876)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Friedrich_Christian_Diez.jpg/40px-Friedrich_Christian_Diez.jpg"
      },
       {
        value: "h/ha/hans-fallada-76539.html",
        label: "Hans Fallada (1893-1947)",
        description: "escritor alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/DBP_1993_1683_Hans_Fallada.jpg/40px-DBP_1993_1683_Hans_Fallada.jpg"
      },
       {
        value: "p/pi/pierre-choderlos-de-laclos-212476.html",
        label: "Pierre Choderlos de Laclos (1741-1803)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laclos.jpg/40px-Laclos.jpg"
      },
       {
        value: "g/gu/guido-gezelle-336977.html",
        label: "Guido Gezelle (1830-1899)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Guido_Gezelle.jpg/40px-Guido_Gezelle.jpg"
      },
       {
        value: "c/ch/charles-joseph-de-ligne-462657.html",
        label: "Charles-Joseph de Ligne (1735-1814)",
        description: "político belga",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Charles_Joseph_F%C3%BCrst_von_Ligne.jpg/40px-Charles_Joseph_F%C3%BCrst_von_Ligne.jpg"
      },
       {
        value: "v/ve/vera-inber-256354.html",
        label: "Vera Inber (1890-1972)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Vera_Inber_1.jpg/40px-Vera_Inber_1.jpg"
      },
       {
        value: "g/go/gonzague-de-reynold-116750.html",
        label: "Gonzague de Reynold (1880-1970)",
        description: "autor e historiador suizo",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Gonzague_de_Reynold.jpg/40px-Gonzague_de_Reynold.jpg"
      },
       {
        value: "d/dm/dmitri-sergueievich-merezhkovski-326459.html",
        label: "Dmitri Serguéievich Merezhkovski (1865-1941)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Merezhkovskiy_in_NNovgorod.jpg/40px-Merezhkovskiy_in_NNovgorod.jpg"
      },
       {
        value: "f/fe/fernando-i-de-bulgaria-151667.html",
        label: "Fernando I de Bulgaria (1861-1948)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Ferdinand_of_Bulgaria_2.jpg/40px-Ferdinand_of_Bulgaria_2.jpg"
      },
       {
        value: "a/al/aleister-crowley-172684.html",
        label: "Aleister Crowley (1875-1947)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Aleister_Crowley_1902_K2.jpg/40px-Aleister_Crowley_1902_K2.jpg"
      },
       {
        value: "y/yu/yu-dafu-420247.html",
        label: "Yu Dafu (1896-1945)",
        description: "escritor chino",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/%E9%83%81%E8%BE%BE%E5%A4%AB%E7%85%A7%E7%89%87.jpg/40px-%E9%83%81%E8%BE%BE%E5%A4%AB%E7%85%A7%E7%89%87.jpg"
      },
       {
        value: "j/jo/john-bowring-332508.html",
        label: "John Bowring (1792-1872)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Sir_John_Bowring_by_John_King.jpg/40px-Sir_John_Bowring_by_John_King.jpg"
      },
       {
        value: "m/mi/mijail-bulgakov-835.html",
        label: "Mijaíl Bulgákov (1891-1940)",
        description: "escritor de la Unión Soviética",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Bulgakov_MA_1926.jpg/40px-Bulgakov_MA_1926.jpg"
      },
       {
        value: "m/ma/marcelo-h-del-pilar-312542.html",
        label: "Marcelo H. del Pilar (1850-1896)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Marcelo_del_pilar_PG.jpg/40px-Marcelo_del_pilar_PG.jpg"
      },
       {
        value: "s/si/simon-jenko-15803.html",
        label: "Simon Jenko (1835-1869)",
        description: "escritor y poeta esloveno",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Simon_Jenko.jpg/40px-Simon_Jenko.jpg"
      },
       {
        value: "s/st/steen-steensen-blicher-347953.html",
        label: "Steen Steensen Blicher (1782-1848)",
        description: "escritor danés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/S_Blicher.jpg/40px-S_Blicher.jpg"
      },
       {
        value: "y/ya/yanka-kupala-377.html",
        label: "Yanka Kupala (1882-1942)",
        description: "poeta y escritor bielorruso del siglo XX",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Yanka_Kupala.jpg/40px-Yanka_Kupala.jpg"
      },
       {
        value: "e/em/emily-ruete-438662.html",
        label: "Emily Ruete (1844-1924)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Emily_Ruete_%28Sayyida_Salme%29%2C_Princess_of_Zanzibar.jpg/40px-Emily_Ruete_%28Sayyida_Salme%29%2C_Princess_of_Zanzibar.jpg"
      },
       {
        value: "p/pi/pierre-drieu-la-rochelle-325974.html",
        label: "Pierre Drieu La Rochelle (1893-1945)",
        description: "escritor francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Pierre_Drieu_la_Rochelle_portrait.jpg/40px-Pierre_Drieu_la_Rochelle_portrait.jpg"
      },
       {
        value: "e/em/emile-bergerat-274915.html",
        label: "Émile Bergerat (1845-1923)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/%C3%89mile_Bergerat.jpg/40px-%C3%89mile_Bergerat.jpg"
      },
       {
        value: "n/na/narcyza-zmichowska-445845.html",
        label: "Narcyza Żmichowska (1819-1876)",
        description: "escritora y activista",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Narcyza_Zmichowska_Polish_writer.jpg/40px-Narcyza_Zmichowska_Polish_writer.jpg"
      },
       {
        value: "t/th/therese-von-bacheracht-78355.html",
        label: "Therese von Bacheracht (1804-1852)",
        description: "escritora alemana",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Therese_von_Bacheracht.jpg/40px-Therese_von_Bacheracht.jpg"
      },
       {
        value: "e/el/elsa-von-freytag-loringhoven-442841.html",
        label: "Elsa von Freytag-Loringhoven (1874-1927)",
        description: "poetisa alemana",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Elsa_von_Freytag-Loringhoven.jpg/40px-Elsa_von_Freytag-Loringhoven.jpg"
      },
       {
        value: "s/si/sigrid-undset-80889.html",
        label: "Sigrid Undset (1882-1949)",
        description: "escritora noruega",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Sigrid_Undset_1928.jpg/40px-Sigrid_Undset_1928.jpg"
      },
       {
        value: "m/ma/marguerite-power-condesa-de-blessington-459501.html",
        label: "Marguerite Power, condesa de Blessington (1789-1849)",
        description: "escritora irlandesa",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Maguerite%2C_Countess_of_Blessington.jpg/40px-Maguerite%2C_Countess_of_Blessington.jpg"
      },
       {
        value: "p/pi/piotr-ilich-chaikovski-7315.html",
        label: "Piotr Ilich Chaikovski (1840-1893)",
        description: "compositor ruso",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Portr%C3%A4t_des_Komponisten_Pjotr_I._Tschaikowski_%281840-1893%29.jpg/40px-Portr%C3%A4t_des_Komponisten_Pjotr_I._Tschaikowski_%281840-1893%29.jpg"
      },
       {
        value: "s/st/stanisaw-wyspianski-312627.html",
        label: "Stanisław Wyspiański (1869-1907)",
        description: "artista polaco",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Stanis%C5%82aw_Wyspia%C5%84ski%2C_Autoportret.jpg/40px-Stanis%C5%82aw_Wyspia%C5%84ski%2C_Autoportret.jpg"
      },
       {
        value: "f/fa/fanny-lewald-77318.html",
        label: "Fanny Lewald (1811-1889)",
        description: "Escritora alemana",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Fanny_Lewald.jpg/40px-Fanny_Lewald.jpg"
      },
       {
        value: "k/kl/klaus-groth-76494.html",
        label: "Klaus Groth (1819-1899)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Klaus_Groth_%28Allers%2C_Kunsthalle_Kiel%29.jpg/40px-Klaus_Groth_%28Allers%2C_Kunsthalle_Kiel%29.jpg"
      },
       {
        value: "l/lo/louise-colet-442928.html",
        label: "Louise Colet (1810-1876)",
        description: "poetisa francesa",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Louise_Colet.jpg/40px-Louise_Colet.jpg"
      },
       {
        value: "g/ge/georges-brandes-316045.html",
        label: "Georges Brandes (1842-1927)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/P_S_Kr%C3%B8yer_1900_-_Georg_Brandes_-_Skitse_til_maleri.jpg/40px-P_S_Kr%C3%B8yer_1900_-_Georg_Brandes_-_Skitse_til_maleri.jpg"
      },
       {
        value: "h/he/herbert-hoover-35236.html",
        label: "Herbert Hoover (1874-1964)",
        description: "político estadounidense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Herbert_Hoover_-_NARA_-_532049.jpg/40px-Herbert_Hoover_-_NARA_-_532049.jpg"
      },
       {
        value: "s/so/sophie-mereau-66313.html",
        label: "Sophie Mereau (1770-1806)",
        description: "escritora alemana",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Sophie_Mereau_-_Paper_cut.jpg/40px-Sophie_Mereau_-_Paper_cut.jpg"
      },
       {
        value: "e/el/elie-faure-274646.html",
        label: "Élie Faure (1873-1937)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/%C3%89lie_Faure_-_1878_-_Atelier_Nadar.jpg/40px-%C3%89lie_Faure_-_1878_-_Atelier_Nadar.jpg"
      },
       {
        value: "g/ge/george-arliss-182229.html",
        label: "George Arliss (1868-1946)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/George_Arliss_cph.3b31151.jpg/40px-George_Arliss_cph.3b31151.jpg"
      },
       {
        value: "c/co/corrie-ten-boom-241097.html",
        label: "Corrie ten Boom (1892-1983)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/CorrieTenBoom.jpg/40px-CorrieTenBoom.jpg"
      },
       {
        value: "m/ma/marcel-lherbier-127109.html",
        label: "Marcel L'Herbier (1888-1979)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/L%27herbier-marcel_1923.jpg/40px-L%27herbier-marcel_1923.jpg"
      },
       {
        value: "m/mi/milly-witkop-324915.html",
        label: "Milly Witkop (1877-1955)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/RudolfMilly.jpg/40px-RudolfMilly.jpg"
      },
       {
        value: "t/th/thomas-moore-315346.html",
        label: "Thomas Moore (1779-1852)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Thomas_Moore_2.jpg/40px-Thomas_Moore_2.jpg"
      },
       {
        value: "r/ro/romulo-gallegos-311401.html",
        label: "Rómulo Gallegos (1884-1969)",
        description: "Presidente y escritor venezolano y poeta",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Romulo_Gallegos.jpg/40px-Romulo_Gallegos.jpg"
      },
       {
        value: "c/co/conde-de-lautreamont-294181.html",
        label: "Conde de Lautréamont (1846-1870)",
        description: "poeta francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Lautreamont1.jpg/40px-Lautreamont1.jpg"
      },
       {
        value: "w/wi/william-morris-182589.html",
        label: "William Morris (1834-1896)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/William_Morris_age_53.jpg/40px-William_Morris_age_53.jpg"
      },
       {
        value: "r/ro/roger-casement-311966.html",
        label: "Roger Casement (1864-1916)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Roger_Casement.jpg/40px-Roger_Casement.jpg"
      },
       {
        value: "e/el/elizabeth-cady-stanton-j-465335.html",
        label: "Elizabeth Cady Stanton J. (1815-1902)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Elizabeth_Stanton.jpg/40px-Elizabeth_Stanton.jpg"
      },
       {
        value: "m/ma/marie-corelli-263254.html",
        label: "Marie Corelli (1855-1924)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/MarieCorelli.jpg/40px-MarieCorelli.jpg"
      },
       {
        value: "e/ed/eduard-von-bauernfeld-78865.html",
        label: "Eduard von Bauernfeld (1802-1890)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Bauernfeld.jpg/40px-Bauernfeld.jpg"
      },
       {
        value: "f/fe/ferdinand-von-saar-78977.html",
        label: "Ferdinand von Saar (1833-1906)",
        description: "escritor austríaco",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Ferdinand_von_saar.jpg/40px-Ferdinand_von_saar.jpg"
      },
       {
        value: "c/ch/christian-dietrich-grabbe-61091.html",
        label: "Christian Dietrich Grabbe (1801-1836)",
        description: "autor teatral alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Christian_Dietrich_Grabbe_by_Joseph_Wilhelm_Pero.jpg/40px-Christian_Dietrich_Grabbe_by_Joseph_Wilhelm_Pero.jpg"
      },
       {
        value: "t/th/theophile-gautier-183713.html",
        label: "Théophile Gautier (1811-1872)",
        description: "escritor francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Th%C3%A9o_Gautier.jpg/40px-Th%C3%A9o_Gautier.jpg"
      },
       {
        value: "n/ni/nikolai-roerich-208993.html",
        label: "Nikolái Roerich (1874-1947)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/N_Roerich.jpg/40px-N_Roerich.jpg"
      },
       {
        value: "a/ad/adamantios-korais-319635.html",
        label: "Adamantios Koraís (1748-1833)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Adamantios_Korais.jpg/40px-Adamantios_Korais.jpg"
      },
       {
        value: "j/jo/jose-de-espronceda-209077.html",
        label: "José de Espronceda (1808-1842)",
        description: "poeta español",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Jose_de_espronceda.jpg/40px-Jose_de_espronceda.jpg"
      },
       {
        value: "j/je/jean-baptiste-say-13513.html",
        label: "Jean-Baptiste Say (1767-1832)",
        description: "economista francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Jean-baptiste_Say.jpg/40px-Jean-baptiste_Say.jpg"
      },
       {
        value: "f/fr/francois-rene-de-chateaubriand-49767.html",
        label: "François-René de Chateaubriand (1768-1848)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Fran%C3%A7ois-Ren%C3%A9_de_Chateaubriand_by_Anne-Louis_Girodet_de_Roucy_Trioson.jpg/40px-Fran%C3%A7ois-Ren%C3%A9_de_Chateaubriand_by_Anne-Louis_Girodet_de_Roucy_Trioson.jpg"
      },
       {
        value: "p/pe/penelope-delta-272605.html",
        label: "Penélope Delta (1874-1941)",
        description: "escritora de literatura infantil griega",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Penelope_Delta.jpg/40px-Penelope_Delta.jpg"
      },
       {
        value: "a/al/alice-b-toklas-179122.html",
        label: "Alice B. Toklas (1877-1967)",
        description: "escritora estadounidense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Alice_B._Toklas%2C_by_Carl_Van_Vechten_-_1949.jpg/40px-Alice_B._Toklas%2C_by_Carl_Van_Vechten_-_1949.jpg"
      },
       {
        value: "k/ka/karel-hynek-macha-361265.html",
        label: "Karel Hynek Mácha (1810-1836)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Jan_Vil%C3%ADmek_-_Karel_Hynek_M%C3%A1cha.jpg/40px-Jan_Vil%C3%ADmek_-_Karel_Hynek_M%C3%A1cha.jpg"
      },
       {
        value: "c/ch/charles-coughlin-181249.html",
        label: "Charles Coughlin (1891-1979)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/CharlesCouglinCraineDetroitPortrait.jpg/40px-CharlesCouglinCraineDetroitPortrait.jpg"
      },
       {
        value: "w/wi/wilhelm-raabe-60647.html",
        label: "Wilhelm Raabe (1831-1910)",
        description: "escritor, autor, novelista alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Wilhelm_Raabe.jpg/40px-Wilhelm_Raabe.jpg"
      },
       {
        value: "p/pe/per-daniel-amadeus-atterbom-444538.html",
        label: "Per Daniel Amadeus Atterbom (1790-1855)",
        description: "poeta sueco",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Per_Daniel_Amadeus_Atterbom_-_lithograph.jpg/40px-Per_Daniel_Amadeus_Atterbom_-_lithograph.jpg"
      },
       {
        value: "a/ad/adam-ferguson-183094.html",
        label: "Adam Ferguson (1723-1816)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/ProfAdamFerguson.jpg/40px-ProfAdamFerguson.jpg"
      },
       {
        value: "f/fe/ferdinand-gregorovius-61425.html",
        label: "Ferdinand Gregorovius (1821-1891)",
        description: "historiador alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Gregorovius_ferdinand.jpg/40px-Gregorovius_ferdinand.jpg"
      },
       {
        value: "h/he/henrik-arnold-wergeland-351705.html",
        label: "Henrik Arnold Wergeland (1808-1845)",
        description: "escritor noruego",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Wergeland.jpg/40px-Wergeland.jpg"
      },
       {
        value: "h/he/hermann-broch-84150.html",
        label: "Hermann Broch (1886-1951)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Hermann_Broch_portrait_photograph%2C_1909.jpg/40px-Hermann_Broch_portrait_photograph%2C_1909.jpg"
      },
       {
        value: "e/er/ernesto-teodoro-moneta-12086.html",
        label: "Ernesto Teodoro Moneta (1833-1918)",
        description: "periodista y pacifista italiano",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Ernesto_Teodoro_Moneta.jpg/40px-Ernesto_Teodoro_Moneta.jpg"
      },
       {
        value: "e/er/eric-rucker-eddison-260982.html",
        label: "Eric Rücker Eddison (1882-1945)",
        description: "escritor británico",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Er-eddison-2.jpg/40px-Er-eddison-2.jpg"
      },
       {
        value: "f/fe/ferdinand-lassalle-75784.html",
        label: "Ferdinand Lassalle (1825-1864)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Ferdinandlasalle.jpg/40px-Ferdinandlasalle.jpg"
      },
       {
        value: "p/pa/paul-adam-381800.html",
        label: "Paul Adam (1862-1920)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Portrait_of_Paul_Adam.jpg/40px-Portrait_of_Paul_Adam.jpg"
      },
       {
        value: "j/ju/jules-romains-334983.html",
        label: "Jules Romains (1885-1972)",
        description: "escritor francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Jules_Romains.jpg/40px-Jules_Romains.jpg"
      },
       {
        value: "k/ka/karl-jaspers-76509.html",
        label: "Karl Jaspers (1883-1969)",
        description: "psiquiatra y filósofo alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Karl_Jaspers_1946.jpg/40px-Karl_Jaspers_1946.jpg"
      },
       {
        value: "i/im/imre-madach-366331.html",
        label: "Imre Madách (1823-1864)",
        description: "escritor húngaro",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Mad%C3%A1ch_Morelli.jpg/40px-Mad%C3%A1ch_Morelli.jpg"
      },
       {
        value: "c/ch/charlotte-lennox-441757.html",
        label: "Charlotte Lennox (1730-1804)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Charlotte_Lennox_02.jpg/40px-Charlotte_Lennox_02.jpg"
      },
       {
        value: "c/ca/carl-orff-44086.html",
        label: "Carl Orff (1895-1982)",
        description: "compositor alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Carl_Orff_profile_view.jpg/40px-Carl_Orff_profile_view.jpg"
      },
       {
        value: "k/ku/kunikida-doppo-374817.html",
        label: "Kunikida Doppo (1871-1908)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Kunikida_Doppo.jpg/40px-Kunikida_Doppo.jpg"
      },
       {
        value: "b/be/benjamin-constant-de-rebecque-123089.html",
        label: "Benjamin Constant de Rebecque (1767-1830)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Benjamin_Constant.jpg/40px-Benjamin_Constant.jpg"
      },
       {
        value: "p/pr/princess-amalie-of-saxony-69929.html",
        label: "Princess Amalie of Saxony (1794-1870)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Mar%C3%ADa_Amalia_of_Saxony_by_L%C3%B3pez_Porta%C3%B1a.jpg/40px-Mar%C3%ADa_Amalia_of_Saxony_by_L%C3%B3pez_Porta%C3%B1a.jpg"
      },
       {
        value: "n/ng/ngaio-marsh-234392.html",
        label: "Ngaio Marsh (1895-1982)",
        description: "escritora neozelandesa",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Ngaio_Marsh_by_Henry_Herbert_Clifford_ca_1935%2C_crop.jpg/40px-Ngaio_Marsh_by_Henry_Herbert_Clifford_ca_1935%2C_crop.jpg"
      },
       {
        value: "w/wi/will-durant-333911.html",
        label: "Will Durant (1885-1981)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/William_and_Ariel_Durant.jpg/40px-William_and_Ariel_Durant.jpg"
      },
       {
        value: "j/ja/janet-flanner-453384.html",
        label: "Janet Flanner (1892-1978)",
        description: "periodista estadounidense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Janet_Flanner.jpg/40px-Janet_Flanner.jpg"
      },
       {
        value: "y/yi/yitzjak-ben-zvi-128894.html",
        label: "Yitzjak Ben-Zvi (1884-1963)",
        description: "político israelí",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Yitzhak_Ben-Zvi.jpg/40px-Yitzhak_Ben-Zvi.jpg"
      },
       {
        value: "j/ja/james-edward-smith-458004.html",
        label: "James Edward Smith (1759-1828)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/James_Edward_Smith.jpg/40px-James_Edward_Smith.jpg"
      },
       {
        value: "a/ar/arsen-kotsoyev-332699.html",
        label: "Arsén Kotsóyev (1872-1944)",
        description: "escritor ruso",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Arsen_KOCOJEV.jpg/40px-Arsen_KOCOJEV.jpg"
      },
       {
        value: "a/au/august-silberstein-113791.html",
        label: "August Silberstein (1827-1900)",
        description: "escritor austríaco",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/August_Silberstein.jpg/40px-August_Silberstein.jpg"
      },
       {
        value: "v/va/vasily-vereshchagin-127017.html",
        label: "Vasily Vereshchagin (1842-1904)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Vasili_Vereshchagin.jpg/40px-Vasili_Vereshchagin.jpg"
      },
       {
        value: "m/ma/manuel-fernandez-juncos-344554.html",
        label: "Manuel Fernández Juncos (1846-1928)",
        description: "escritor español",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Manuel_Fernandez_Juncos_1917.jpg/40px-Manuel_Fernandez_Juncos_1917.jpg"
      },
       {
        value: "e/ei/eileen-power-274254.html",
        label: "Eileen Power (1889-1940)",
        description: "historiadora medieval, escritora y profesora británica.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Eileen_Power.jpg/40px-Eileen_Power.jpg"
      },
       {
        value: "h/ho/houston-stewart-chamberlain-57737.html",
        label: "Houston Stewart Chamberlain (1855-1927)",
        description: "pensador británico, nacionalizado alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Bundesarchiv_Bild_119-1600-06%2C_Houston_Stewart_Chamberlain.jpg/40px-Bundesarchiv_Bild_119-1600-06%2C_Houston_Stewart_Chamberlain.jpg"
      },
       {
        value: "t/th/thomas-hughes-332580.html",
        label: "Thomas Hughes (1822-1896)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Thomas_Hughes_statue.jpg/40px-Thomas_Hughes_statue.jpg"
      },
       {
        value: "s/sr/sren-kierkegaard-6512.html",
        label: "Søren Kierkegaard (1813-1855)",
        description: "prolífico filósofo y teólogo danés del siglo XIX",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Kierkegaard.jpg/40px-Kierkegaard.jpg"
      },
       {
        value: "j/jo/john-buchan-333004.html",
        label: "John Buchan (1875-1940)",
        description: "político británico",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Btweedsmuir2.jpg/40px-Btweedsmuir2.jpg"
      },
       {
        value: "s/so/sophie-ristaud-cottin-464409.html",
        label: "Sophie Ristaud Cottin (1770-1807)",
        description: "escritora francesa",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Sophie_Cottin.jpg/40px-Sophie_Cottin.jpg"
      },
       {
        value: "r/re/rene-clair-55388.html",
        label: "René Clair (1898-1981)",
        description: "cineasta",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Clair_%26_Satie%2C_Relache1924.jpg/40px-Clair_%26_Satie%2C_Relache1924.jpg"
      },
       {
        value: "r/re/remy-de-gourmont-353876.html",
        label: "Remy de Gourmont (1858-1915)",
        description: "escritor francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/R%C3%A9my_de_Gourmont.jpg/40px-R%C3%A9my_de_Gourmont.jpg"
      },
       {
        value: "e/em/emile-coue-275040.html",
        label: "Émile Coué (1857-1926)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/%C3%89mile_Cou%C3%A9_3.jpg/40px-%C3%89mile_Cou%C3%A9_3.jpg"
      },
       {
        value: "r/ra/rafael-barrett-353806.html",
        label: "Rafael Barrett (1876-1910)",
        description: "escritor y periodista español",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Barrett.jpg/40px-Barrett.jpg"
      },
       {
        value: "h/ha/hamza-hakimzade-niyazi-45124.html",
        label: "Hamza Hakimzade Niyazi (1889-1929)",
        description: "escritor uzbeko",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Hamza_Niyazi.jpg/40px-Hamza_Niyazi.jpg"
      },
       {
        value: "j/ja/jane-wilde-272303.html",
        label: "Jane Wilde (1821-1896)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Ladywilde.jpg/40px-Ladywilde.jpg"
      },
       {
        value: "f/fe/felix-hausdorff-75856.html",
        label: "Felix Hausdorff (1868-1942)",
        description: "matemático alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Hausdorff_1913-1921.jpg/40px-Hausdorff_1913-1921.jpg"
      },
       {
        value: "h/he/hermann-sudermann-65448.html",
        label: "Hermann Sudermann (1857-1928)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Nicola_Perscheid_-_Hermann_Sudermann_nach_1925.jpg/40px-Nicola_Perscheid_-_Hermann_Sudermann_nach_1925.jpg"
      },
       {
        value: "g/gr/grazia-deledda-7728.html",
        label: "Grazia Deledda (1871-1936)",
        description: "escritora italiana",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Grazia_Deledda_1926.jpg/40px-Grazia_Deledda_1926.jpg"
      },
       {
        value: "s/st/sterling-clark-328297.html",
        label: "Sterling Clark (1877-1956)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/William_Orpen_Robert_Sterling_Clark.jpg/40px-William_Orpen_Robert_Sterling_Clark.jpg"
      },
       {
        value: "a/am/ambrose-bierce-191050.html",
        label: "Ambrose Bierce (1842-1914)",
        description: "escritor, periodista y editorialista estadounidense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Ambrose_Bierce-1.jpg/40px-Ambrose_Bierce-1.jpg"
      },
       {
        value: "j/jo/jose-do-patrocinio-359451.html",
        label: "José do Patrocínio (1853-1905)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Jos%C3%A9_do_Patroc%C3%ADnio.jpg/40px-Jos%C3%A9_do_Patroc%C3%ADnio.jpg"
      },
       {
        value: "w/wa/walter-benjamin-61078.html",
        label: "Walter Benjamin (1892-1940)",
        description: "filósofo, crítico literario, crítico social, traductor, locutor de radio y ensayista alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Walter_Benjamin_vers_1928.jpg/40px-Walter_Benjamin_vers_1928.jpg"
      },
       {
        value: "v/vi/vicente-blasco-ibanez-219646.html",
        label: "Vicente Blasco Ibáñez (1867-1928)",
        description: "periodista, escritor y político español",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Blasco_Iba%C3%B1ez.jpg/40px-Blasco_Iba%C3%B1ez.jpg"
      },
       {
        value: "a/al/alfred-jarry-7841.html",
        label: "Alfred Jarry (1873-1907)",
        description: "dramaturgo y poeta francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Alfred_Jarry.jpg/40px-Alfred_Jarry.jpg"
      },
       {
        value: "l/le/leopold-andrian-113759.html",
        label: "Leopold Andrian (1875-1951)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Leopold_Andrian_%281875%E2%80%931951%29_1918.jpg/40px-Leopold_Andrian_%281875%E2%80%931951%29_1918.jpg"
      },
       {
        value: "a/an/andrei-bely-212632.html",
        label: "Andréi Bely (1880-1934)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Andrei_Bely_%281914%29.jpg/40px-Andrei_Bely_%281914%29.jpg"
      },
       {
        value: "h/hj/hjalmar-soderberg-331845.html",
        label: "Hjalmar Söderberg (1869-1941)",
        description: "escritor sueco",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Hjalmar_S%C3%B6derberg.jpg/40px-Hjalmar_S%C3%B6derberg.jpg"
      },
       {
        value: "m/ma/maurice-maeterlinck-49747.html",
        label: "Maurice Maeterlinck (1862-1949)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Maurice_Maeterlinck_2.jpg/40px-Maurice_Maeterlinck_2.jpg"
      },
       {
        value: "j/jo/josef-dobrovsky-283121.html",
        label: "Josef Dobrovský (1753-1829)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Jan_Vil%C3%ADmek_-_Josef_Dobrovsk%C3%BD.jpg/40px-Jan_Vil%C3%ADmek_-_Josef_Dobrovsk%C3%BD.jpg"
      },
       {
        value: "p/pa/paul-henri-thiry-dholbach-7104.html",
        label: "Paul Henri Thiry d'Holbach (1723-1789)",
        description: "filósofo materialista francés de origen alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Paul_Heinrich_Dietrich_Baron_d%27Holbach_Roslin.jpg/40px-Paul_Heinrich_Dietrich_Baron_d%27Holbach_Roslin.jpg"
      },
       {
        value: "e/ed/edward-lear-309759.html",
        label: "Edward Lear (1812-1888)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Edwardlear.jpg/40px-Edwardlear.jpg"
      },
       {
        value: "j/jo/johannes-r-becher-58057.html",
        label: "Johannes R. Becher (1891-1958)",
        description: "escritor alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Bundesarchiv_Bild_183-M0213-0307%2C_Berlin%2C_III._Weltfestspiele%2C_Pionierrepublik%2C_Johannes_R._Becher.jpg/40px-Bundesarchiv_Bild_183-M0213-0307%2C_Berlin%2C_III._Weltfestspiele%2C_Pionierrepublik%2C_Johannes_R._Becher.jpg"
      },
       {
        value: "j/jo/josef-stefan-16581.html",
        label: "Josef Stefan (1835-1893)",
        description: "físico, matemático y poeta, esloveno-austríaco",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Jozef_Stefan.jpg/40px-Jozef_Stefan.jpg"
      },
       {
        value: "l/lo/lola-rodriguez-de-tio-274202.html",
        label: "Lola Rodríguez de Tió (1843-1924)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Lola_Rodriguez_de_Tio.jpg/40px-Lola_Rodriguez_de_Tio.jpg"
      },
       {
        value: "g/ge/gerard-manley-hopkins-313693.html",
        label: "Gerard Manley Hopkins (1844-1889)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/GerardManleyHopkins.jpg/40px-GerardManleyHopkins.jpg"
      },
       {
        value: "n/ni/nikolai-przewalski-192442.html",
        label: "Nikolái Przewalski (1839-1888)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Nikolay_Przhevalsky_photoportrait_and_signature.jpg/40px-Nikolay_Przhevalsky_photoportrait_and_signature.jpg"
      },
       {
        value: "a/an/andre-morellet-178653.html",
        label: "André Morellet (1727-1819)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Andr%C3%A9_Morellet.jpg/40px-Andr%C3%A9_Morellet.jpg"
      },
       {
        value: "h/he/hermann-von-puckler-muskau-61797.html",
        label: "Hermann von Pückler-Muskau (1785-1871)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Hermann_von_P%C3%BCckler-Muskau%2C_by_Friedrich_Jentzen_after_Franz_Kr%C3%BCger.jpg/40px-Hermann_von_P%C3%BCckler-Muskau%2C_by_Friedrich_Jentzen_after_Franz_Kr%C3%BCger.jpg"
      },
       {
        value: "k/ka/karoline-von-gunderrode-62053.html",
        label: "Karoline von Günderrode (1780-1806)",
        description: "poetisa alemana",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Karoline_von_guenderode.jpg/40px-Karoline_von_guenderode.jpg"
      },
       {
        value: "j/je/jeremias-gotthelf-122358.html",
        label: "Jeremias Gotthelf (1797-1854)",
        description: "novelista suizo",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/JeremiasGotthelf.jpg/40px-JeremiasGotthelf.jpg"
      },
       {
        value: "b/be/bernhard-eunom-philippi-216432.html",
        label: "Bernhard Eunom Philippi (1811-1852)",
        description: "político chileno",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Bernhard_Eunom_Philippi_%281811%E2%80%931852%29.jpg/40px-Bernhard_Eunom_Philippi_%281811%E2%80%931852%29.jpg"
      },
       {
        value: "a/an/anna-leonowens-234244.html",
        label: "Anna Leonowens (1831-1915)",
        description: "educadora británica",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Leonowens_Portrait.jpg/40px-Leonowens_Portrait.jpg"
      },
       {
        value: "m/ma/matthew-lewis-121060.html",
        label: "Matthew Lewis (1775-1818)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Matthew_Gregory_Lewis_by_Henry_William_Pickersgill.jpg/40px-Matthew_Gregory_Lewis_by_Henry_William_Pickersgill.jpg"
      },
       {
        value: "t/te/temistocle-solera-211329.html",
        label: "Temistocle Solera (1815-1878)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Temistocle_Solera.jpg/40px-Temistocle_Solera.jpg"
      },
       {
        value: "a/ab/abeozen-249164.html",
        label: "Abeozen (1896-1963)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Abeozen-yaouank.jpg/40px-Abeozen-yaouank.jpg"
      },
       {
        value: "e/eu/eugene-francois-vidocq-122818.html",
        label: "Eugène-François Vidocq (1775-1857)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Vidocq.jpg/40px-Vidocq.jpg"
      },
       {
        value: "a/ar/arnold-zweig-75868.html",
        label: "Arnold Zweig (1887-1968)",
        description: "escritor alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Bundesarchiv_Bild_183-28224-0009%2C_Berlin%2C_Ausstellung_sowjetischer_Grafik.jpg/40px-Bundesarchiv_Bild_183-28224-0009%2C_Berlin%2C_Ausstellung_sowjetischer_Grafik.jpg"
      },
       {
        value: "e/et/etienne-pivert-de-senancour-290070.html",
        label: "Étienne Pivert de Senancour (1770-1846)",
        description: "escritor francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Senancour.jpg/40px-Senancour.jpg"
      },
       {
        value: "j/ju/juliette-adam-270617.html",
        label: "Juliette Adam (1836-1936)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Julietteadam.jpg/40px-Julietteadam.jpg"
      },
       {
        value: "g/gi/giorgio-de-chirico-156622.html",
        label: "Giorgio de Chirico (1888-1978)",
        description: "pintor italiano",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Giorgio_de_Chirico_%28portrait%29.jpg/40px-Giorgio_de_Chirico_%28portrait%29.jpg"
      },
       {
        value: "h/hu/hugo-bettauer-85728.html",
        label: "Hugo Bettauer (1872-1925)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Hugo_Bettauer-1.jpg/40px-Hugo_Bettauer-1.jpg"
      },
       {
        value: "f/fu/futabatei-shimei-22665.html",
        label: "Futabatei Shimei (1864-1909)",
        description: "escritor, traductor y crítico literario japonés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Shimei_Futabatei.jpg/40px-Shimei_Futabatei.jpg"
      },
       {
        value: "g/go/gotthold-ephraim-lessing-34628.html",
        label: "Gotthold Ephraim Lessing (1729-1781)",
        description: "escritor alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Gotthold_Ephraim_Lessing_Kunstsammlung_Uni_Leipzig.jpg/40px-Gotthold_Ephraim_Lessing_Kunstsammlung_Uni_Leipzig.jpg"
      },
       {
        value: "a/an/andrew-lang-505827.html",
        label: "Andrew Lang (1844-1912)",
        description: "versátil escritor británico (Escocia)",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Andrew_Lang.jpg/40px-Andrew_Lang.jpg"
      },
       {
        value: "h/he/hermann-gorter-325191.html",
        label: "Hermann Gorter (1864-1927)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Gorter.jpg/40px-Gorter.jpg"
      },
       {
        value: "l/lu/ludwig-geyer-214063.html",
        label: "Ludwig Geyer (1779-1821)",
        description: "artista alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Portrait_of_Ludwig_Geyer.jpg/40px-Portrait_of_Ludwig_Geyer.jpg"
      },
       {
        value: "c/ca/camille-flammarion-295524.html",
        label: "Camille Flammarion (1842-1925)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Camille_Flammarion.003.jpg/40px-Camille_Flammarion.003.jpg"
      },
       {
        value: "j/jo/jorge-guillen-59837.html",
        label: "Jorge Guillén (1893-1984)",
        description: "poeta y crítico literario español",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Jorge_Guill%C3%A9n_y_la_infancia.jpg/40px-Jorge_Guill%C3%A9n_y_la_infancia.jpg"
      },
       {
        value: "a/ar/arnost-muka-8948.html",
        label: "Arnošt Muka (1854-1932)",
        description: "folclorista sorabo",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Arnost_Muka.jpg/40px-Arnost_Muka.jpg"
      },
       {
        value: "a/al/alfred-kerr-70396.html",
        label: "Alfred Kerr (1867-1948)",
        description: "escritor alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Alfred_Kerr%2C_by_Lovis_Corinth%2C_1907.jpg/40px-Alfred_Kerr%2C_by_Lovis_Corinth%2C_1907.jpg"
      },
       {
        value: "f/fr/franz-wickhoff-85595.html",
        label: "Franz Wickhoff (1853-1909)",
        description: "historiador del arte austríaco",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Wickhoff.jpg/40px-Wickhoff.jpg"
      },
       {
        value: "b/be/ben-hecht-267441.html",
        label: "Ben Hecht (1894-1964)",
        description: "guionista estadounidense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Ben_Hecht.jpg/40px-Ben_Hecht.jpg"
      },
       {
        value: "g/ga/gabriel-marcel-154145.html",
        label: "Gabriel Marcel (1889-1973)",
        description: "dramaturgo y filósofo francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Gabriel_Marcel_%281969%29.jpg/40px-Gabriel_Marcel_%281969%29.jpg"
      },
       {
        value: "j/jo/joseph-goebbels-41749.html",
        label: "Joseph Goebbels (1897-1945)",
        description: "político nazi",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Bundesarchiv_Bild_146-1968-101-20A%2C_Joseph_Goebbels.jpg/40px-Bundesarchiv_Bild_146-1968-101-20A%2C_Joseph_Goebbels.jpg"
      },
       {
        value: "j/jo/josef-popper-lynkeus-78903.html",
        label: "Josef Popper-Lynkeus (1838-1921)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Josef_Popper-Lynkeus_1917.jpg/40px-Josef_Popper-Lynkeus_1917.jpg"
      },
       {
        value: "t/ti/tibor-dery-72938.html",
        label: "Tibor Déry (1894-1977)",
        description: "escritor húngaro",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/D%C3%A9ry_Tibor_1930_k%C3%B6r%C3%BCl.jpg/40px-D%C3%A9ry_Tibor_1930_k%C3%B6r%C3%BCl.jpg"
      },
       {
        value: "a/ad/ada-negri-346250.html",
        label: "Ada Negri (1870-1945)",
        description: "poetisa italiana",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/%D0%9D%D0%B5%D0%B3%D1%80%D0%B8_%D0%90%D0%B4%D0%B0.jpg/40px-%D0%9D%D0%B5%D0%B3%D1%80%D0%B8_%D0%90%D0%B4%D0%B0.jpg"
      },
       {
        value: "s/sa/sakae-osugi-282172.html",
        label: "Sakae Osugi (1885-1923)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Sakae.jpg/40px-Sakae.jpg"
      },
       {
        value: "g/gu/gustave-kahn-462364.html",
        label: "Gustave Kahn (1859-1936)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Gustave_Kahn%2C_portrait.jpg/40px-Gustave_Kahn%2C_portrait.jpg"
      },
       {
        value: "a/am/amado-nervo-452130.html",
        label: "Amado Nervo (1870-1919)",
        description: "poeta y prosista mexicano",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Amado_Nervo.jpg/40px-Amado_Nervo.jpg"
      },
       {
        value: "l/le/leon-tolstoi-7243.html",
        label: "León Tolstói (1828-1910)",
        description: "escritor ruso",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/L.N.Tolstoy_Prokudin-Gorsky.jpg/40px-L.N.Tolstoy_Prokudin-Gorsky.jpg"
      },
       {
        value: "f/fr/franklin-pierce-adams-357603.html",
        label: "Franklin Pierce Adams (1881-1960)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Franklin_P._Adams.jpg/40px-Franklin_P._Adams.jpg"
      },
       {
        value: "a/al/alfred-rosenberg-75849.html",
        label: "Alfred Rosenberg (1893-1946)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Bundesarchiv_Bild_183-1985-0723-500%2C_Alfred_Rosenberg.jpg/40px-Bundesarchiv_Bild_183-1985-0723-500%2C_Alfred_Rosenberg.jpg"
      },
       {
        value: "s/sa/sarojini-naidu-250165.html",
        label: "Sarojini Naidu (1879-1949)",
        description: "política india",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Sarojini_Naidu_in_Bombay_1946.jpg/40px-Sarojini_Naidu_in_Bombay_1946.jpg"
      },
       {
        value: "c/ca/carl-bolle-63426.html",
        label: "Carl Bolle (1821-1909)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Bolle%2C_Carl_%281821-1909%29.jpg/40px-Bolle%2C_Carl_%281821-1909%29.jpg"
      },
       {
        value: "j/ja/jacques-henri-bernardin-de-saint-pierre-361976.html",
        label: "Jacques-Henri Bernardin de Saint-Pierre (1737-1814)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Jacques_henri_bernardin.jpg/40px-Jacques_henri_bernardin.jpg"
      },
       {
        value: "c/c-/c-s-lewis-9204.html",
        label: "C. S. Lewis (1898-1963)",
        description: "medievalista, apologista cristiano, crítico literario, académico, locutor de radio y ensayista británico",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Statue_of_C.S._Lewis%2C_Belfast.jpg/40px-Statue_of_C.S._Lewis%2C_Belfast.jpg"
      },
       {
        value: "t/te/teofilo-braga-345926.html",
        label: "Teófilo Braga (1843-1924)",
        description: "político portugués",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Teofilo_Braga.jpg/40px-Teofilo_Braga.jpg"
      },
       {
        value: "c/cl/clemens-krauss-78918.html",
        label: "Clemens Krauss (1893-1954)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Clemens_Krauss.jpg/40px-Clemens_Krauss.jpg"
      },
       {
        value: "e/em/emilio-salgari-309786.html",
        label: "Emilio Salgari (1862-1911)",
        description: "escritor, marino y periodista italiano",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Emilio_Salgari_ritratto.jpg/40px-Emilio_Salgari_ritratto.jpg"
      },
       {
        value: "f/fr/friedrich-karl-august-prince-of-waldeck-and-pyrmont-214068.html",
        label: "Friedrich Karl August, Prince of Waldeck and Pyrmont (1743-1812)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Friedrich_Karl_August_von_Waldeck.jpg/40px-Friedrich_Karl_August_von_Waldeck.jpg"
      },
       {
        value: "g/ge/georges-sorel-313666.html",
        label: "Georges Sorel (1847-1922)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Georges_Sorel.jpg/40px-Georges_Sorel.jpg"
      },
       {
        value: "a/al/alvaro-figueroa-y-torres-250975.html",
        label: "Álvaro Figueroa y Torres (1863-1950)",
        description: "Conde de Romanones",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/%C3%81lvaro_Figueroa_y_de_Torres_Mendieta_y_Romo%2C_de_Kaulak.jpg/40px-%C3%81lvaro_Figueroa_y_de_Torres_Mendieta_y_Romo%2C_de_Kaulak.jpg"
      },
       {
        value: "h/he/henry-ford-8768.html",
        label: "Henry Ford (1863-1947)",
        description: "empresario industrial estadounidense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Henry_ford_1919.jpg/40px-Henry_ford_1919.jpg"
      },
       {
        value: "p/pa/paul-sutermeister-123421.html",
        label: "Paul Sutermeister (1864-1905)",
        description: "pastor y escritor suizo",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Paul_Sutermeister.jpg/40px-Paul_Sutermeister.jpg"
      },
       {
        value: "k/ka/katharine-susannah-prichard-454686.html",
        label: "Katharine Susannah Prichard (1883-1969)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Katharine_Susannah_Prichard.jpg/40px-Katharine_Susannah_Prichard.jpg"
      },
       {
        value: "f/fe/fermin-caballero-332191.html",
        label: "Fermín Caballero (1800-1876)",
        description: "geógrafo, periodista, escritor y político español",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Ferm%C3%ADn_Caballero.jpg/40px-Ferm%C3%ADn_Caballero.jpg"
      },
       {
        value: "m/ma/marie-bonaparte-115472.html",
        label: "Marie Bonaparte (1882-1962)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/MARIE_BONAPARTE_PRINCESS_GIORGIOS_OF_GREECE_%2814901259040%29.jpg/40px-MARIE_BONAPARTE_PRINCESS_GIORGIOS_OF_GREECE_%2814901259040%29.jpg"
      },
       {
        value: "j/jo/jomo-kenyatta-173563.html",
        label: "Jomo Kenyatta (1893-1978)",
        description: "político keniano. Primer presidente de Kenia",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Jomo_Kenyatta.jpg/40px-Jomo_Kenyatta.jpg"
      },
       {
        value: "j/je/jerome-k-jerome-218698.html",
        label: "Jerome K. Jerome (1859-1927)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Jerome_K._Jerome_02.jpg/40px-Jerome_K._Jerome_02.jpg"
      },
       {
        value: "f/fr/francisco-eduardo-tresguerras-351898.html",
        label: "Francisco Eduardo Tresguerras (1759-1833)",
        description: "artista mexicano",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Francisco_eduardo_tresguerras.jpg/40px-Francisco_eduardo_tresguerras.jpg"
      },
       {
        value: "h/ha/hans-pfitzner-57358.html",
        label: "Hans Pfitzner (1869-1949)",
        description: "compositor y director de orquesta",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Hans_Pfitzner_by_Wanda_von_Debschitz-Kunowski%2C_ca_1910.jpg/40px-Hans_Pfitzner_by_Wanda_von_Debschitz-Kunowski%2C_ca_1910.jpg"
      },
       {
        value: "l/lu/lucas-alaman-507298.html",
        label: "Lucas Alamán (1792-1853)",
        description: "historiador y político mexicano del siglo XIX",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Lucas_Alam%C3%A1n.jpg/40px-Lucas_Alam%C3%A1n.jpg"
      },
       {
        value: "a/ad/adam-asnyk-348690.html",
        label: "Adam Asnyk (1838-1897)",
        description: "escritor polaco",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Adam_Asnyk-cropped.jpg/40px-Adam_Asnyk-cropped.jpg"
      },
       {
        value: "s/su/sully-prudhomme-42247.html",
        label: "Sully Prudhomme (1839-1907)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Sully_Prudhomme%2C_Ren%C3%A9-Fran%C3%A7ois-Armand%2C_BNF_Gallica.jpg/40px-Sully_Prudhomme%2C_Ren%C3%A9-Fran%C3%A7ois-Armand%2C_BNF_Gallica.jpg"
      },
       {
        value: "v/va/vasile-alecsandri-352004.html",
        label: "Vasile Alecsandri (1821-1890)",
        description: "poeta, dramaturgo, político y diplomático rumano",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Vasile_Alecsandri_-_Foto02.jpg/40px-Vasile_Alecsandri_-_Foto02.jpg"
      },
       {
        value: "j/jo/john-reed-310800.html",
        label: "John Reed (1887-1920)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Johnreed1.jpg/40px-Johnreed1.jpg"
      },
       {
        value: "f/fr/friedrich-von-hagedorn-63985.html",
        label: "Friedrich von Hagedorn (1708-1754)",
        description: "poeta alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Friedrich_von_Hagedorn.jpg/40px-Friedrich_von_Hagedorn.jpg"
      },
       {
        value: "b/bl/blaise-cendrars-123080.html",
        label: "Blaise Cendrars (1887-1961)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Cendrars_%C5%A0tyrsk%C3%BD.jpg/40px-Cendrars_%C5%A0tyrsk%C3%BD.jpg"
      },
       {
        value: "t/th/therese-huber-86167.html",
        label: "Therese Huber (1764-1829)",
        description: "escritora alemana",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Therese_Huber_miniatur_detail.jpg/40px-Therese_Huber_miniatur_detail.jpg"
      },
       {
        value: "s/sa/samuel-white-baker-376087.html",
        label: "Samuel White Baker (1821-1893)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Samuel_Baker_02.jpg/40px-Samuel_Baker_02.jpg"
      },
       {
        value: "c/ca/carl-einstein-66282.html",
        label: "Carl Einstein (1885-1940)",
        description: "historiador del arte alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Karl_Einstein.jpg/40px-Karl_Einstein.jpg"
      },
       {
        value: "w/wa/walter-bagehot-369022.html",
        label: "Walter Bagehot (1826-1877)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Walter_Bagehot_NPG_cropped.jpg/40px-Walter_Bagehot_NPG_cropped.jpg"
      },
       {
        value: "a/an/angel-de-saavedra-duque-de-rivas-155463.html",
        label: "Ángel de Saavedra, duque de Rivas (1791-1865)",
        description: "político español",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/DuquedeRivas.jpg/40px-DuquedeRivas.jpg"
      },
       {
        value: "f/fr/franz-werfel-78514.html",
        label: "Franz Werfel (1890-1945)",
        description: "escritor checo",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Werfel.jpg/40px-Werfel.jpg"
      },
       {
        value: "e/er/ernst-forstemann-71501.html",
        label: "Ernst Förstemann (1822-1906)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Ernst_F%C3%B6rstemann.jpg/40px-Ernst_F%C3%B6rstemann.jpg"
      },
       {
        value: "h/he/heinz-guderian-70560.html",
        label: "Heinz Guderian (1888-1954)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Bundesarchiv_Bild_101I-139-1112-17%2C_Heinz_Guderian.jpg/40px-Bundesarchiv_Bild_101I-139-1112-17%2C_Heinz_Guderian.jpg"
      },
       {
        value: "g/gu/guido-von-list-94040.html",
        label: "Guido von List (1848-1919)",
        description: "escritor austríaco",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Bundesarchiv_Bild_183-2007-0705-500%2C_Guido_von_List.jpg/40px-Bundesarchiv_Bild_183-2007-0705-500%2C_Guido_von_List.jpg"
      },
       {
        value: "f/fr/frantisek-palacky-159642.html",
        label: "Frantisek Palacký (1798-1876)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Jan_Vil%C3%ADmek_-_Franti%C5%A1ek_Palack%C3%BD.jpg/40px-Jan_Vil%C3%ADmek_-_Franti%C5%A1ek_Palack%C3%BD.jpg"
      },
       {
        value: "p/pi/pierre-teilhard-de-chardin-189564.html",
        label: "Pierre Teilhard de Chardin (1881-1955)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/TeilhardP_1947.jpg/40px-TeilhardP_1947.jpg"
      },
       {
        value: "s/st/stephanos-dragumis-44132.html",
        label: "Stephanos Dragumis (1842-1923)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Stephanos_Dragoumis.jpg/40px-Stephanos_Dragoumis.jpg"
      },
       {
        value: "a/al/alfred-edward-housman-351410.html",
        label: "Alfred Edward Housman (1859-1936)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/A.E.Housman_-_local_poet._-_geograph.org.uk_-_1053147.jpg/40px-A.E.Housman_-_local_poet._-_geograph.org.uk_-_1053147.jpg"
      },
       {
        value: "w/wi/wilhelm-lehmann-92066.html",
        label: "Wilhelm Lehmann (1882-1968)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Wilhelm-Lehmann-Bueste_Eckernf%C3%B6rde_rechts.jpg/40px-Wilhelm-Lehmann-Bueste_Eckernf%C3%B6rde_rechts.jpg"
      },
       {
        value: "j/ja/james-mill-271666.html",
        label: "James Mill (1773-1836)",
        description: "economista,historiador,teorico, político escoses",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/James_Mill.jpg/40px-James_Mill.jpg"
      },
       {
        value: "j/jo/johann-gottfried-herder-155547.html",
        label: "Johann Gottfried Herder (1744-1803)",
        description: "filósofo, teólogo y crítico literario alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Johann_Gottfried_Herder.jpg/40px-Johann_Gottfried_Herder.jpg"
      },
       {
        value: "j/je/jean-paul-77079.html",
        label: "Jean Paul (1763-1825)",
        description: "novelista alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Jeanpaul.jpg/40px-Jeanpaul.jpg"
      },
       {
        value: "c/ca/casimir-delavigne-126961.html",
        label: "Casimir Delavigne (1793-1843)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/CasimirDelavigne.jpg/40px-CasimirDelavigne.jpg"
      },
       {
        value: "l/lo/lou-andreas-salome-38873.html",
        label: "Lou Andreas-Salomé (1861-1937)",
        description: "escritora rusa",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Salome1914.jpg/40px-Salome1914.jpg"
      },
       {
        value: "f/fr/friedrich-ludwig-georg-von-raumer-70855.html",
        label: "Friedrich Ludwig Georg von Raumer (1781-1873)",
        description: "historiador alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Raumer_Friedrich_Ludwig_Georg.jpg/40px-Raumer_Friedrich_Ludwig_Georg.jpg"
      },
       {
        value: "s/sa/samuil-marshak-435584.html",
        label: "Samuil Marshak (1887-1964)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/1987_CPA_5886.jpg/40px-1987_CPA_5886.jpg"
      },
       {
        value: "j/ju/jules-barbey-daurevilly-314963.html",
        label: "Jules Barbey d'Aurevilly (1808-1889)",
        description: "escritor francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Barbey_d%27Aurevilly.jpg/40px-Barbey_d%27Aurevilly.jpg"
      },
       {
        value: "c/ch/charlotte-yonge-433098.html",
        label: "Charlotte Yonge (1823-1901)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Charlotte_Mary_Yonge.jpg/40px-Charlotte_Mary_Yonge.jpg"
      },
       {
        value: "e/er/erasmus-darwin-234050.html",
        label: "Erasmus Darwin (1731-1802)",
        description: "estudioso del lenguaje humano, médico, naturalista, fisiólogo, filósofo británico",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Portrait_of_Erasmus_Darwin_by_Joseph_Wright_of_Derby_%281792%29.jpg/40px-Portrait_of_Erasmus_Darwin_by_Joseph_Wright_of_Derby_%281792%29.jpg"
      },
       {
        value: "e/el/eleanor-farjeon-258669.html",
        label: "Eleanor Farjeon (1881-1965)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Eleanor_Farjeon_%28%D0%AD%D0%BB%D0%B5%D0%B0%D0%BD%D0%BE%D1%80_%D0%A4%D0%B0%D1%80%D0%B4%D0%B6%D0%BE%D0%BD%29.jpg/40px-Eleanor_Farjeon_%28%D0%AD%D0%BB%D0%B5%D0%B0%D0%BD%D0%BE%D1%80_%D0%A4%D0%B0%D1%80%D0%B4%D0%B6%D0%BE%D0%BD%29.jpg"
      },
       {
        value: "w/wa/walther-rathenau-135645.html",
        label: "Walther Rathenau (1867-1922)",
        description: "escritor alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Walther_Rathenau.jpg/40px-Walther_Rathenau.jpg"
      },
       {
        value: "h/hj/hjalmar-bergman-506829.html",
        label: "Hjalmar Bergman (1883-1931)",
        description: "escritor sueco",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Hjalmar_Bergman.jpg/40px-Hjalmar_Bergman.jpg"
      },
       {
        value: "m/ma/mary-pickford-104109.html",
        label: "Mary Pickford (1892-1979)",
        description: "actriz estadounidense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Mary_Pickford_cph.3c17995u.jpg/40px-Mary_Pickford_cph.3c17995u.jpg"
      },
       {
        value: "v/vi/vilhelm-moberg-365406.html",
        label: "Vilhelm Moberg (1898-1973)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Vilhelm_Moberg_1967.jpg/40px-Vilhelm_Moberg_1967.jpg"
      },
       {
        value: "k/ko/kostis-palamas-317967.html",
        label: "Kostís Palamás (1859-1943)",
        description: "poeta griego",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Roilos-georgios-poets-parnassos-literary-club.jpg/40px-Roilos-georgios-poets-parnassos-literary-club.jpg"
      },
       {
        value: "l/lu/ludwig-fulda-72283.html",
        label: "Ludwig Fulda (1862-1939)",
        description: "escritor alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Ludwig_Fulda.jpg/40px-Ludwig_Fulda.jpg"
      },
       {
        value: "e/el/eleftherios-venizelos-205545.html",
        label: "Eleftherios Venizelos (1864-1936)",
        description: "político griego",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/%CE%95%CE%BB%CE%B5%CF%85%CE%B8%CE%AD%CF%81%CE%B9%CE%BF%CF%82_%CE%92%CE%B5%CE%BD%CE%B9%CE%B6%CE%AD%CE%BB%CE%BF%CF%82.jpg/40px-%CE%95%CE%BB%CE%B5%CF%85%CE%B8%CE%AD%CF%81%CE%B9%CE%BF%CF%82_%CE%92%CE%B5%CE%BD%CE%B9%CE%B6%CE%AD%CE%BB%CE%BF%CF%82.jpg"
      },
       {
        value: "a/ar/arthur-conan-doyle-35610.html",
        label: "Arthur Conan Doyle (1859-1930)",
        description: "escritor escocés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Conan_doyle.jpg/40px-Conan_doyle.jpg"
      },
       {
        value: "c/ca/carlos-alejandro-de-sajonia-weimar-eisenach-60743.html",
        label: "Carlos Alejandro de Sajonia-Weimar-Eisenach (1818-1901)",
        description: "gran duque de Sajonia-Weimar-Eisenach",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Karl-Alexander-Sachsen-Weimar-Eisenach.jpg/40px-Karl-Alexander-Sachsen-Weimar-Eisenach.jpg"
      },
       {
        value: "a/an/andre-kertesz-241754.html",
        label: "André Kertész (1894-1985)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Kertesz.jpg/40px-Kertesz.jpg"
      },
       {
        value: "j/jo/john-william-polidori-364264.html",
        label: "John William Polidori (1795-1821)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/John_William_Polidori_by_F.G._Gainsford.jpg/40px-John_William_Polidori_by_F.G._Gainsford.jpg"
      },
       {
        value: "a/an/anton-felix-schindler-64862.html",
        label: "Anton Felix Schindler (1795-1864)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/AntonSchindler.jpg/40px-AntonSchindler.jpg"
      },
       {
        value: "z/zo/zofia-kossak-szczucka-218309.html",
        label: "Zofia Kossak-Szczucka (1889-1968)",
        description: "escritora polaca",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/ZOFIA_KOSSAK.jpg/40px-ZOFIA_KOSSAK.jpg"
      },
       {
        value: "a/au/august-wilhelm-von-schlegel-57281.html",
        label: "August Wilhelm von Schlegel (1767-1845)",
        description: "filólogo y crítico",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/August_Wilhelm_von_Schlegel.jpg/40px-August_Wilhelm_von_Schlegel.jpg"
      },
       {
        value: "p/pe/petar-preradovic-373915.html",
        label: "Petar Preradović (1818-1872)",
        description: "poeta croata",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Preradovic_Petar.jpg/40px-Preradovic_Petar.jpg"
      },
       {
        value: "g/ge/george-william-russell-366070.html",
        label: "George William Russell (1867-1935)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/George_William_Russell_-_Project_Gutenberg_eText_19028.jpg/40px-George_William_Russell_-_Project_Gutenberg_eText_19028.jpg"
      },
       {
        value: "b/ba/bankim-chandra-chattopadhyay-377881.html",
        label: "Bankim Chandra Chattopadhyay (1838-1894)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Bankimchandra_Chattapadhay.jpg/40px-Bankimchandra_Chattapadhay.jpg"
      },
       {
        value: "e/em/emile-verhaeren-193680.html",
        label: "Émile Verhaeren (1855-1916)",
        description: "poeta belga",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Emile_Verhaeren01.jpg/40px-Emile_Verhaeren01.jpg"
      },
       {
        value: "h/he/heinrich-joseph-von-collin-84824.html",
        label: "Heinrich Joseph von Collin (1772-1811)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Edler_von_Collin.jpg/40px-Edler_von_Collin.jpg"
      },
       {
        value: "v/vs/vsevolod-soloviov-16996.html",
        label: "Vsévolod Soloviov (1849-1903)",
        description: "novelista histórico ruso",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Vsevolod_Solovyov_7.jpg/40px-Vsevolod_Solovyov_7.jpg"
      },
       {
        value: "v/vi/victor-segalen-462604.html",
        label: "Victor Segalen (1878-1919)",
        description: "poeta francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Victor_Segalen_Noum%C3%A9a_1904.jpg/40px-Victor_Segalen_Noum%C3%A9a_1904.jpg"
      },
       {
        value: "f/fr/francesco-maria-piave-334205.html",
        label: "Francesco Maria Piave (1810-1876)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Francesco_Maria_Piave.jpg/40px-Francesco_Maria_Piave.jpg"
      },
       {
        value: "t/ta/tadamichi-kuribayashi-297013.html",
        label: "Tadamichi Kuribayashi (1891-1945)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Tadamichi_Kuribayashi.jpg/40px-Tadamichi_Kuribayashi.jpg"
      },
       {
        value: "s/sa/salomon-gessner-123765.html",
        label: "Salomon Gessner (1730-1788)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Anton_Graff_Salomon_Gessner.jpg/40px-Anton_Graff_Salomon_Gessner.jpg"
      },
       {
        value: "f/fr/friedrich-heinrich-jacobi-168004.html",
        label: "Friedrich Heinrich Jacobi (1743-1819)",
        description: "filósofo alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/FH_Jacobi.jpg/40px-FH_Jacobi.jpg"
      },
       {
        value: "k/ka/karoline-von-briest-77933.html",
        label: "Karoline von Briest (1773-1831)",
        description: "escritora alemana",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Caroline_de_la_Motte_Fouqu%C3%A9.jpg/40px-Caroline_de_la_Motte_Fouqu%C3%A9.jpg"
      },
       {
        value: "j/jo/johann-wilhelm-ludwig-gleim-64364.html",
        label: "Johann Wilhelm Ludwig Gleim (1719-1803)",
        description: "poeta alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/GleimJWL.jpg/40px-GleimJWL.jpg"
      },
       {
        value: "l/le/lev-kamenev-165854.html",
        label: "Lev Kámenev (1883-1936)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/1918_Lev_Kamenev.jpg/40px-1918_Lev_Kamenev.jpg"
      },
       {
        value: "j/jo/josef-capek-454568.html",
        label: "Josef Čapek (1887-1945)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Josef_Capek_1937.jpg/40px-Josef_Capek_1937.jpg"
      },
       {
        value: "d/dj/djuna-barnes-234721.html",
        label: "Djuna Barnes (1892-1982)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Djunabarnes.jpg/40px-Djunabarnes.jpg"
      },
       {
        value: "m/mi/mihaly-babits-332482.html",
        label: "Mihály Babits (1883-1941)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Rippl-babits.jpg/40px-Rippl-babits.jpg"
      },
       {
        value: "l/le/leo-perutz-93450.html",
        label: "Leo Perutz (1882-1957)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Leo_Perutz_%281882-1957%29.jpg/40px-Leo_Perutz_%281882-1957%29.jpg"
      },
       {
        value: "f/fr/francis-picabia-157321.html",
        label: "Francis Picabia (1879-1953)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Francis_Picabia%2C_photograph_published_in_Les_Peintres_Cubistes%2C_1913.jpg/40px-Francis_Picabia%2C_photograph_published_in_Les_Peintres_Cubistes%2C_1913.jpg"
      },
       {
        value: "b/be/betty-paoli-88749.html",
        label: "Betty Paoli (1814-1894)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Betty_Paoli_Litho.jpg/40px-Betty_Paoli_Litho.jpg"
      },
       {
        value: "f/fr/fritz-heider-112202.html",
        label: "Fritz Heider (1896-1988)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/1-Fritz-Heider.jpg/40px-1-Fritz-Heider.jpg"
      },
       {
        value: "h/he/heinrich-von-kleist-28494.html",
        label: "Heinrich von Kleist (1777-1811)",
        description: "poeta, novelista y dramaturgo",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Kleist%2C_Heinrich_von.jpg/40px-Kleist%2C_Heinrich_von.jpg"
      },
       {
        value: "w/wo/wolfgang-von-kempelen-252041.html",
        label: "Wolfgang von Kempelen (1734-1804)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Kempelen-charcoal.jpg/40px-Kempelen-charcoal.jpg"
      },
       {
        value: "v/vi/victor-cherbuliez-116258.html",
        label: "Victor Cherbuliez (1829-1899)",
        description: "novelista y dramaturgo francés nacido en Ginebra",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Victor_Cherbuliez_par_Eug%C3%A8ne_Pirou.jpg/40px-Victor_Cherbuliez_par_Eug%C3%A8ne_Pirou.jpg"
      },
       {
        value: "j/jo/johann-nestroy-44862.html",
        label: "Johann Nestroy (1801-1862)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Nestroy.jpg/40px-Nestroy.jpg"
      },
       {
        value: "m/ma/matilda-betham-edwards-450610.html",
        label: "Matilda Betham-Edwards (1836-1919)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Matilda_Betham-Edwards_0001.jpg/40px-Matilda_Betham-Edwards_0001.jpg"
      },
       {
        value: "g/ge/georg-christoph-lichtenberg-57554.html",
        label: "Georg Christoph Lichtenberg (1742-1799)",
        description: "científico y escritor alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Georg_Christoph_Lichtenberg.jpg/40px-Georg_Christoph_Lichtenberg.jpg"
      },
       {
        value: "j/jo/john-wilkes-booth-180914.html",
        label: "John Wilkes Booth (1838-1865)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/John_Wilkes_Booth-portrait.jpg/40px-John_Wilkes_Booth-portrait.jpg"
      },
       {
        value: "m/ma/mario-de-sa-carneiro-466945.html",
        label: "Mário de Sá-Carneiro (1890-1916)",
        description: "poeta portugués",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/M%C3%A1rio_de_S%C3%A1-Carneiro.jpg/40px-M%C3%A1rio_de_S%C3%A1-Carneiro.jpg"
      },
       {
        value: "r/ru/ruer-josip-boskovic-310757.html",
        label: "Ruđer Josip Bošković (1711-1787)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Rudjer_Boskovic.jpg/40px-Rudjer_Boskovic.jpg"
      },
       {
        value: "h/he/henry-handel-richardson-443398.html",
        label: "Henry Handel Richardson (1870-1946)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/HHRichardson.jpg/40px-HHRichardson.jpg"
      },
       {
        value: "j/jo/john-galsworthy-82248.html",
        label: "John Galsworthy (1867-1933)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/John_Galsworthy_2.jpg/40px-John_Galsworthy_2.jpg"
      },
       {
        value: "w/wi/william-hazlitt-126596.html",
        label: "William Hazlitt (1778-1830)",
        description: "escritor inglés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/John_Hazlitt_Portrait_of_William_Hazlitt.jpg/40px-John_Hazlitt_Portrait_of_William_Hazlitt.jpg"
      },
       {
        value: "j/ja/jacinto-octavio-picon-432511.html",
        label: "Jacinto Octavio Picón (1852-1923)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Jacinto_Octavio_Pic%C3%B3n_%28Museo_del_Prado%29.jpg/40px-Jacinto_Octavio_Pic%C3%B3n_%28Museo_del_Prado%29.jpg"
      },
       {
        value: "c/ch/christian-krohg-334200.html",
        label: "Christian Krohg (1852-1925)",
        description: "pintor noruego",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Portrett_av_Christian_Krohg%2C_ca_1903.jpg/40px-Portrett_av_Christian_Krohg%2C_ca_1903.jpg"
      },
       {
        value: "j/jo/johann-heinrich-cotta-66785.html",
        label: "Johann Heinrich Cotta (1763-1844)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Heinrich_Cotta_1833.jpg/40px-Heinrich_Cotta_1833.jpg"
      },
       {
        value: "w/wa/walter-lippmann-316568.html",
        label: "Walter Lippmann (1889-1974)",
        description: "periodista estadounidense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Walter_Lippmann_1914.jpg/40px-Walter_Lippmann_1914.jpg"
      },
       {
        value: "m/ma/maurice-leblanc-314993.html",
        label: "Maurice Leblanc (1864-1941)",
        description: "escritor francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Maurice-leblanc.jpg/40px-Maurice-leblanc.jpg"
      },
       {
        value: "b/be/benjamin-disraeli-82006.html",
        label: "Benjamin Disraeli (1804-1881)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Disraeli.jpg/40px-Disraeli.jpg"
      },
       {
        value: "c/co/conrad-von-bolanden-91180.html",
        label: "Conrad von Bolanden (1828-1920)",
        description: "escritor alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Conrad_von_Bolanden_JS_1.jpg/40px-Conrad_von_Bolanden_JS_1.jpg"
      },
       {
        value: "h/he/heinrich-ludwig-hermann-muller-68738.html",
        label: "Heinrich Ludwig Hermann Müller (1829-1883)",
        description: "botánico alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Hermann_M%C3%BCller_01.jpg/40px-Hermann_M%C3%BCller_01.jpg"
      },
       {
        value: "u/ug/ugo-foscolo-166234.html",
        label: "Ugo Foscolo (1778-1827)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Ugo_Foscolo.jpg/40px-Ugo_Foscolo.jpg"
      },
       {
        value: "g/gu/guillermo-de-suecia-435739.html",
        label: "Guillermo de Suecia (1884-1965)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Prins_Vilhelm.jpg/40px-Prins_Vilhelm.jpg"
      },
       {
        value: "n/na/natsume-soseki-180903.html",
        label: "Natsume Sōseki (1867-1916)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Natsume_Soseki_photo.jpg/40px-Natsume_Soseki_photo.jpg"
      },
       {
        value: "r/ru/rudolf-erich-raspe-213543.html",
        label: "Rudolf Erich Raspe (1736-1794)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Rudolf_Erich_Raspe.jpg/40px-Rudolf_Erich_Raspe.jpg"
      },
       {
        value: "h/he/heinrich-hoffmann-215724.html",
        label: "Heinrich Hoffmann (1809-1894)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/HoffmannHeinrichPortrait.jpg/40px-HoffmannHeinrichPortrait.jpg"
      },
       {
        value: "m/ma/max-nordau-472270.html",
        label: "Max Nordau (1849-1923)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Portrait_of_Max_Nordau.jpg/40px-Portrait_of_Max_Nordau.jpg"
      },
       {
        value: "j/ja/jane-dieulafoy-460196.html",
        label: "Jane Dieulafoy (1851-1916)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Jane_Dieulafoy_photo.jpg/40px-Jane_Dieulafoy_photo.jpg"
      },
       {
        value: "j/ju/juana-manuela-gorriti-14077.html",
        label: "Juana Manuela Gorriti (1816-1892)",
        description: "Escritora argentina",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Juana_Manuela_Gorriti.jpg/40px-Juana_Manuela_Gorriti.jpg"
      },
       {
        value: "d/do/don-marquis-321378.html",
        label: "Don Marquis (1878-1937)",
        description: "escritor estadounidense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Don_Marquis.jpg/40px-Don_Marquis.jpg"
      },
       {
        value: "s/su/suzanne-curchod-115738.html",
        label: "Suzanne Curchod (1737-1794)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Duplessis_-_Suzanne_Curchod%2C_Madame_Necker.jpg/40px-Duplessis_-_Suzanne_Curchod%2C_Madame_Necker.jpg"
      },
       {
        value: "c/ch/christian-rakovski-350857.html",
        label: "Christian Rakovski (1873-1941)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Rakovsky01.jpg/40px-Rakovsky01.jpg"
      },
       {
        value: "h/ha/handrij-zejler-77192.html",
        label: "Handrij Zejler (1804-1872)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Zejlersig01.jpg/40px-Zejlersig01.jpg"
      },
       {
        value: "f/fr/frances-burney-259530.html",
        label: "Frances Burney (1752-1840)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Frances_d%27Arblay_%28%27Fanny_Burney%27%29_by_Edward_Francisco_Burney.jpg/40px-Frances_d%27Arblay_%28%27Fanny_Burney%27%29_by_Edward_Francisco_Burney.jpg"
      },
       {
        value: "d/dw/dwight-l-moody-453218.html",
        label: "Dwight L. Moody (1837-1899)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Dwight_Lyman_Moody_c.1900.jpg/40px-Dwight_Lyman_Moody_c.1900.jpg"
      },
       {
        value: "w/wi/wilhelm-waiblinger-66015.html",
        label: "Wilhelm Waiblinger (1804-1830)",
        description: "poeta alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Wilhelm_Waiblinger.jpg/40px-Wilhelm_Waiblinger.jpg"
      },
       {
        value: "n/ni/nina-de-callias-454246.html",
        label: "Nina de Callias (1843-1884)",
        description: "poetisa francesa",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/NinaCallias.jpg/40px-NinaCallias.jpg"
      },
       {
        value: "s/sv/svetozar-markovic-376036.html",
        label: "Svetozar Marković (1846-1875)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Svetozar_Markovic.jpg/40px-Svetozar_Markovic.jpg"
      },
       {
        value: "c/ch/charles-ferdinand-ramuz-123635.html",
        label: "Charles Ferdinand Ramuz (1878-1947)",
        description: "escritor suizo",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/CHF200_8_front.jpg/40px-CHF200_8_front.jpg"
      },
       {
        value: "k/ka/karoly-kerenyi-506973.html",
        label: "Károly Kerényi (1897-1973)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Ker%C3%A9nyi_K%C3%A1roly.jpg/40px-Ker%C3%A9nyi_K%C3%A1roly.jpg"
      },
       {
        value: "b/b-/b-traven-342268.html",
        label: "B. Traven (1882-1969)",
        description: "novelista alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/B._Traven_aka_Red_Marut_arrest_photo_in_London_1923.jpg/40px-B._Traven_aka_Red_Marut_arrest_photo_in_London_1923.jpg"
      },
       {
        value: "j/ja/james-m-cain-81071.html",
        label: "James M. Cain (1892-1977)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/James_M._Cain.jpg/40px-James_M._Cain.jpg"
      },
       {
        value: "j/jo/jonas-basanavicius-363949.html",
        label: "Jonas Basanavičius (1851-1927)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Jonas_Basanavicius_%281851-1927%29.jpg/40px-Jonas_Basanavicius_%281851-1927%29.jpg"
      },
       {
        value: "a/al/aleksandr-griboyedov-15001.html",
        label: "Aleksandr Griboyédov (1795-1829)",
        description: "dramaturgo, músico, diplomático y poeta ruso",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Griboyedov.jpg/40px-Griboyedov.jpg"
      },
       {
        value: "r/ro/robert-g-ingersoll-469882.html",
        label: "Robert G. Ingersoll (1833-1899)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/RobertGIngersoll.jpg/40px-RobertGIngersoll.jpg"
      }
        //index-end
    ];
    var accentMap = {
      "á": "a",
      "é": "e",
      "í": "i",
      "ó": "o",
      "ú": "u",
      "à": "a",
      "è": "e",
      "ì": "i",
      "ò": "o",
      "ù": "u",
      "ä": "a",
      "ë": "e",
      "ï": "i",
      "ö": "o",
      "ü": "u",
      "â": "a",
      "ê": "e",
      "î": "i",
      "ô": "o",
      "û": "u",
      "ñ": "n",
      "ç": "c",
    };
    var normalize = function( term ) {
      var ret = "";
      for ( var i = 0; i < term.length; i++ ) {
        ret += accentMap[ term.charAt(i) ] || term.charAt(i);
      }
      return ret;
    };
    
    $( "#search" ).autocomplete({
      minLength: 2,
      source: function( request, response ) {
        var matcher = new RegExp( $.ui.autocomplete.escapeRegex( request.term ), "i" );
        response( $.grep( index, function( value ) {
          value = value.label || value.value || value;
          return matcher.test( value ) || matcher.test( normalize( value ) );
        }) );
      },
      focus: function( event, ui ) {
        $( "#search" ).val( ui.item.label );
        return false;
      },
      select: function( event, ui ) {
        $( "#search" ).val( ui.item.label );
        $( "#search-id" ).val( ui.item.value );
        $( "#search-description" ).html( ui.item.description );
        $( "#search-image" ).attr( "src", ui.item.image );
        return false;
      }
    })
    .autocomplete( "instance" )._renderItem = function( ul, item ) {
      return $( "<li style='list-style-type: none;'>" )
        .append( "<div class='search-result'><img class='search-result-image' style='float: right;' src='" + item.image + "' />" + "<a href='http://biografias.enciclopedia.com.es/" + item.value + "'>" + item.label + "</a><br/>" + item.description + "</div>" )
        .appendTo( ul );
    };
  } );
