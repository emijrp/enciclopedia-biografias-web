$( function() {
    var index = [
        //index-start
       {
        value: "b/be/bertha-fernandez-reguero-18456.html",
        label: "Bertha Fernandez Reguero (1843-1914)",
        description: "pacifista y escritora austríaca",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Bertha-von-Suttner-1906.jpg/40px-Bertha-von-Suttner-1906.jpg"
      },
       {
        value: "j/ja/jakub-bart-cisinski-77194.html",
        label: "Jakub Bart-Ćišinski (1856-1909)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Jakub_Bart-%C4%86i%C5%A1inski.jpg/40px-Jakub_Bart-%C4%86i%C5%A1inski.jpg"
      },
       {
        value: "t/th/theophile-gautier-183713.html",
        label: "Théophile Gautier (1811-1872)",
        description: "escritor francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Th%C3%A9o_Gautier.jpg/40px-Th%C3%A9o_Gautier.jpg"
      },
       {
        value: "g/gu/gustavo-adolfo-becquer-203715.html",
        label: "Gustavo Adolfo Bécquer (1836-1870)",
        description: "poeta y narrador español",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Portrait_of_Gustavo_Adolfo_B%C3%A9cquer%2C_by_his_brother_Valeriano_%281862%29.jpg/40px-Portrait_of_Gustavo_Adolfo_B%C3%A9cquer%2C_by_his_brother_Valeriano_%281862%29.jpg"
      },
       {
        value: "s/st/stefan-george-57187.html",
        label: "Stefan George (1868-1933)",
        description: "poeta alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Stefan_George_1910_Foto_Jakob_Hilsdorf.jpg/40px-Stefan_George_1910_Foto_Jakob_Hilsdorf.jpg"
      },
       {
        value: "r/ru/rudolf-steiner-78484.html",
        label: "Rudolf Steiner (1861-1925)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Steiner_um_1905.jpg/40px-Steiner_um_1905.jpg"
      },
       {
        value: "f/fr/franz-wickhoff-85595.html",
        label: "Franz Wickhoff (1853-1909)",
        description: "historiador del arte austríaco",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Wickhoff.jpg/40px-Wickhoff.jpg"
      },
       {
        value: "n/ni/nikolaus-lenau-84280.html",
        label: "Nikolaus Lenau (1802-1850)",
        description: "poeta austríaco",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Lenau.jpg/40px-Lenau.jpg"
      },
       {
        value: "s/si/simon-jenko-15803.html",
        label: "Simon Jenko (1835-1869)",
        description: "escritor y poeta esloveno",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Simon_Jenko.jpg/40px-Simon_Jenko.jpg"
      },
       {
        value: "f/fe/felix-salten-163747.html",
        label: "Felix Salten (1869-1945)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Felix_Salten_1910.jpg/40px-Felix_Salten_1910.jpg"
      },
       {
        value: "l/lu/ludwig-buchner-62831.html",
        label: "Ludwig Büchner (1824-1899)",
        description: "filósofo alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Ludwig_B%C3%BCchner.jpg/40px-Ludwig_B%C3%BCchner.jpg"
      },
       {
        value: "r/ro/robert-louis-stevenson-1512.html",
        label: "Robert Louis Stevenson (1850-1894)",
        description: "novelista, poeta y ensayista escocés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Robert_Louis_Stevenson_Knox_Series.jpg/40px-Robert_Louis_Stevenson_Knox_Series.jpg"
      },
       {
        value: "b/be/betty-paoli-88749.html",
        label: "Betty Paoli (1814-1894)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Betty_Paoli_Litho.jpg/40px-Betty_Paoli_Litho.jpg"
      },
       {
        value: "e/er/ernest-renan-157155.html",
        label: "Ernest Renan (1823-1892)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Ernest_Renan_1876-84.jpg/40px-Ernest_Renan_1876-84.jpg"
      },
       {
        value: "b/be/benito-perez-galdos-189869.html",
        label: "Benito Pérez Galdós (1843-1920)",
        description: "novelista, dramaturgo, cronista y político español",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Benito_perez_galdos_y_perro_las_palmas_1890.jpg/40px-Benito_perez_galdos_y_perro_las_palmas_1890.jpg"
      },
       {
        value: "f/fr/frida-uhl-79179.html",
        label: "Frida Uhl (1872-1943)",
        description: "escritora austríaca",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Frida_Uhl.jpg/40px-Frida_Uhl.jpg"
      },
       {
        value: "j/je/jean-gaston-darboux-164784.html",
        label: "Jean Gaston Darboux (1842-1917)",
        description: "matemático francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Darboux.jpg/40px-Darboux.jpg"
      },
       {
        value: "l/le/leon-dhervey-de-saint-denys-4786.html",
        label: "Léon d'Hervey de Saint-Denys (1822-1892)",
        description: "escritor y sinólogo francés, precursor de la onirología",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/D_Hervey_de_Saint_Denys.jpg/40px-D_Hervey_de_Saint_Denys.jpg"
      },
       {
        value: "r/ro/robert-walser-123075.html",
        label: "Robert Walser (1878-1956)",
        description: "escritor suizo",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Robert_walser_1890er.jpg/40px-Robert_walser_1890er.jpg"
      },
       {
        value: "r/ra/ramon-de-campoamor-64578.html",
        label: "Ramón de Campoamor (1817-1901)",
        description: "poeta español",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Ram%C3%B3n_de_Campoamor.jpg/40px-Ram%C3%B3n_de_Campoamor.jpg"
      },
       {
        value: "e/ed/eduard-morike-63699.html",
        label: "Eduard Mörike (1804-1875)",
        description: "poeta alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Eduard_M%C3%B6rike.jpg/40px-Eduard_M%C3%B6rike.jpg"
      },
       {
        value: "c/ch/charles-koechlin-72543.html",
        label: "Charles Koechlin (1867-1950)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Charles_Koechlin_1.jpg/40px-Charles_Koechlin_1.jpg"
      },
       {
        value: "g/gr/grazia-deledda-7728.html",
        label: "Grazia Deledda (1871-1936)",
        description: "escritora italiana",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Grazia_Deledda_1926.jpg/40px-Grazia_Deledda_1926.jpg"
      },
       {
        value: "m/ma/marianne-weber-66916.html",
        label: "Marianne Weber (1870-1954)",
        description: "político aleman",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/MarianneWeberInLemgo.jpg/40px-MarianneWeberInLemgo.jpg"
      },
       {
        value: "r/ro/roald-amundsen-926.html",
        label: "Roald Amundsen (1872-1928)",
        description: "Explorador de Noruega",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Nlc_amundsen.jpg/40px-Nlc_amundsen.jpg"
      },
       {
        value: "a/ad/adolfo-caminha-199644.html",
        label: "Adolfo Caminha (1867-1897)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Adolfo_Caminha_II.jpg/40px-Adolfo_Caminha_II.jpg"
      },
       {
        value: "c/ca/carl-schurz-127437.html",
        label: "Carl Schurz (1829-1906)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Carl_Schurz_1879.jpg/40px-Carl_Schurz_1879.jpg"
      },
       {
        value: "f/fr/fredrika-bremer-262145.html",
        label: "Fredrika Bremer (1801-1865)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_replica_or_study_of_Johan_Gustaf_Sandberg%27s_portrait_of_Fredrika_Bremer.jpg/40px-A_replica_or_study_of_Johan_Gustaf_Sandberg%27s_portrait_of_Fredrika_Bremer.jpg"
      },
       {
        value: "e/ed/eduard-von-bauernfeld-78865.html",
        label: "Eduard von Bauernfeld (1802-1890)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Bauernfeld.jpg/40px-Bauernfeld.jpg"
      },
       {
        value: "e/el/else-lasker-schuler-58033.html",
        label: "Else Lasker-Schüler (1869-1945)",
        description: "escritora y poetisa",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Else_Lasker-Sch%C3%BCler_1875.jpg/40px-Else_Lasker-Sch%C3%BCler_1875.jpg"
      },
       {
        value: "j/jo/john-stevens-cabot-abbott-28910.html",
        label: "John Stevens Cabot Abbott (1805-1877)",
        description: "escritor e historiador estadounidense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/John_Stevens_Cabot_Abbott.jpg/40px-John_Stevens_Cabot_Abbott.jpg"
      },
       {
        value: "e/er/ernesto-teodoro-moneta-12086.html",
        label: "Ernesto Teodoro Moneta (1833-1918)",
        description: "periodista y pacifista italiano",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Ernesto_Teodoro_Moneta.jpg/40px-Ernesto_Teodoro_Moneta.jpg"
      },
       {
        value: "g/g-/g-k-chesterton-183167.html",
        label: "G. K. Chesterton (1874-1936)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Gilbert_Chesterton.jpg/40px-Gilbert_Chesterton.jpg"
      },
       {
        value: "p/ph/philip-schaff-115922.html",
        label: "Philip Schaff (1819-1893)",
        description: "teólogo e historiador suizo (1819-1893)",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Philip_Schaff.jpg/40px-Philip_Schaff.jpg"
      },
       {
        value: "b/ba/baron-eligius-franz-joseph-von-munch-bellinghausen-78939.html",
        label: "Baron Eligius Franz Joseph von Münch-Bellinghausen (1806-1871)",
        description: "escritor austríaco",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Die_Gartenlaube_%281856%29_b_249.jpg/40px-Die_Gartenlaube_%281856%29_b_249.jpg"
      },
       {
        value: "e/el/elias-lonnrot-153159.html",
        label: "Elias Lönnrot (1802-1884)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Elias_L%C3%B6nrot_Cabinet_Portrait-2_crop.jpg/40px-Elias_L%C3%B6nrot_Cabinet_Portrait-2_crop.jpg"
      },
       {
        value: "j/jo/josef-popper-lynkeus-78903.html",
        label: "Josef Popper-Lynkeus (1838-1921)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Josef_Popper-Lynkeus_1917.jpg/40px-Josef_Popper-Lynkeus_1917.jpg"
      },
       {
        value: "o/os/oscar-wilde-30875.html",
        label: "Oscar Wilde (1854-1900)",
        description: "escritor irlandés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Oscar_Wilde_portrait.jpg/40px-Oscar_Wilde_portrait.jpg"
      },
       {
        value: "n/ni/nikolai-leskov-209004.html",
        label: "Nikolái Leskov (1831-1895)",
        description: "escritor y periodista ruso",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Serov_Leskov.jpg/40px-Serov_Leskov.jpg"
      },
       {
        value: "c/ch/christian-dietrich-grabbe-61091.html",
        label: "Christian Dietrich Grabbe (1801-1836)",
        description: "autor teatral alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Christian_Dietrich_Grabbe_by_Joseph_Wilhelm_Pero.jpg/40px-Christian_Dietrich_Grabbe_by_Joseph_Wilhelm_Pero.jpg"
      },
       {
        value: "j/jo/johann-baptist-von-schweitzer-69022.html",
        label: "Johann Baptist von Schweitzer (1833-1875)",
        description: "político y sindicalista alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Johann_Baptist_von_Schweitzer.jpg/40px-Johann_Baptist_von_Schweitzer.jpg"
      },
       {
        value: "f/fr/friedrich-gerhard-rohlfs-63209.html",
        label: "Friedrich Gerhard Rohlfs (1831-1896)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Friedrich_Gerhard_Rohlfs.jpg/40px-Friedrich_Gerhard_Rohlfs.jpg"
      },
       {
        value: "f/fr/friedrich-hebbel-57182.html",
        label: "Friedrich Hebbel (1813-1863)",
        description: "dramaturgo y poeta alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Fritz-Hebbel.jpg/40px-Fritz-Hebbel.jpg"
      },
       {
        value: "w/wi/wilhelm-raabe-60647.html",
        label: "Wilhelm Raabe (1831-1910)",
        description: "escritor, autor, novelista alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Wilhelm_Raabe.jpg/40px-Wilhelm_Raabe.jpg"
      },
       {
        value: "a/au/august-spies-224224.html",
        label: "August Spies (1855-1887)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/August-Spies-1886.jpg/40px-August-Spies-1886.jpg"
      },
       {
        value: "r/ro/robert-hugh-benson-246953.html",
        label: "Robert Hugh Benson (1871-1914)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/R._H._Benson_40.jpg/40px-R._H._Benson_40.jpg"
      },
       {
        value: "h/he/henri-bergson-42156.html",
        label: "Henri Bergson (1859-1941)",
        description: "escritor y filósofo irracionalista francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Henri_Bergson_02.jpg/40px-Henri_Bergson_02.jpg"
      },
       {
        value: "n/ni/nikolai-przewalski-192442.html",
        label: "Nikolái Przewalski (1839-1888)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Nikolay_Przhevalsky_photoportrait_and_signature.jpg/40px-Nikolay_Przhevalsky_photoportrait_and_signature.jpg"
      },
       {
        value: "f/fr/frank-wedekind-57619.html",
        label: "Frank Wedekind (1864-1918)",
        description: "dramaturgo alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Frank_Wedekind.jpg/40px-Frank_Wedekind.jpg"
      },
       {
        value: "p/pe/peter-cornelius-57257.html",
        label: "Peter Cornelius (1824-1874)",
        description: "compositor y poeta",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Peter_cornelius.jpg/40px-Peter_cornelius.jpg"
      },
       {
        value: "e/em/emma-lazarus-240959.html",
        label: "Emma Lazarus (1849-1887)",
        description: "poetisa estadounidense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Emma_Lazarus.jpg/40px-Emma_Lazarus.jpg"
      },
       {
        value: "e/em/emily-dickinson-4441.html",
        label: "Emily Dickinson (1830-1886)",
        description: "poetisa estadounidense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Emily_Dickinson_daguerreotype_%28Restored%29.jpg/40px-Emily_Dickinson_daguerreotype_%28Restored%29.jpg"
      },
       {
        value: "f/fr/franz-xaver-haberl-66955.html",
        label: "Franz Xaver Haberl (1840-1910)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/FXHaberl.jpg/40px-FXHaberl.jpg"
      },
       {
        value: "s/si/simon-newcomb-164401.html",
        label: "Simon Newcomb (1835-1909)",
        description: "astrónomo estadounidense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Simon_Newcomb_01.jpg/40px-Simon_Newcomb_01.jpg"
      },
       {
        value: "e/ed/edouard-rod-122356.html",
        label: "Édouard Rod (1857-1910)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Edouard_Rod.jpg/40px-Edouard_Rod.jpg"
      },
       {
        value: "n/na/natsume-soseki-180903.html",
        label: "Natsume Sōseki (1867-1916)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Natsume_Soseki_photo.jpg/40px-Natsume_Soseki_photo.jpg"
      },
       {
        value: "h/he/henri-barbusse-18404.html",
        label: "Henri Barbusse (1873-1935)",
        description: "escritor, periodista y militante comunista francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/%D0%90%D0%BD%D1%80%D0%B8_%D0%91%D0%B0%D1%80%D0%B1%D1%8E%D1%81_%281928%29.jpg/40px-%D0%90%D0%BD%D1%80%D0%B8_%D0%91%D0%B0%D1%80%D0%B1%D1%8E%D1%81_%281928%29.jpg"
      },
       {
        value: "j/jo/john-galsworthy-82248.html",
        label: "John Galsworthy (1867-1933)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/John_Galsworthy_2.jpg/40px-John_Galsworthy_2.jpg"
      },
       {
        value: "w/wi/wilhelm-sievers-67462.html",
        label: "Wilhelm Sievers (1860-1921)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/1886_Wilhelm_Sievers_i_Colombia.jpg/40px-1886_Wilhelm_Sievers_i_Colombia.jpg"
      },
       {
        value: "j/ja/jane-addams-180989.html",
        label: "Jane Addams (1860-1935)",
        description: "socióloga feminista, pacifista y reformadora estadounidense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Jane_Addams_profile.jpg/40px-Jane_Addams_profile.jpg"
      },
       {
        value: "f/fa/fanny-crosby-257456.html",
        label: "Fanny Crosby (1820-1915)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Fanny_Crosby.jpg/40px-Fanny_Crosby.jpg"
      },
       {
        value: "j/ju/juan-bosco-146183.html",
        label: "Juan Bosco (1815-1888)",
        description: "itali roma educador",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Dombosco.jpg/40px-Dombosco.jpg"
      },
       {
        value: "g/ge/georg-kaiser-60477.html",
        label: "Georg Kaiser (1878-1945)",
        description: "literato y dramaturgo alemán, caracterizado por su vanguardismo y su crítica social",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Georg_Kaiser.jpg/40px-Georg_Kaiser.jpg"
      },
       {
        value: "v/vi/victor-cherbuliez-116258.html",
        label: "Victor Cherbuliez (1829-1899)",
        description: "novelista y dramaturgo francés nacido en Ginebra",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Victor_Cherbuliez_par_Eug%C3%A8ne_Pirou.jpg/40px-Victor_Cherbuliez_par_Eug%C3%A8ne_Pirou.jpg"
      },
       {
        value: "s/si/sinaida-hippius-61940.html",
        label: "Sinaida Hippius (1869-1945)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Gippius_1910s.jpg/40px-Gippius_1910s.jpg"
      },
       {
        value: "h/he/heinrich-julius-adolph-robert-hartig-76004.html",
        label: "Heinrich Julius Adolph Robert Hartig (1839-1901)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Robert_Hartig.jpg/40px-Robert_Hartig.jpg"
      },
       {
        value: "g/ge/george-arliss-182229.html",
        label: "George Arliss (1868-1946)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/George_Arliss_cph.3b31151.jpg/40px-George_Arliss_cph.3b31151.jpg"
      },
       {
        value: "k/ka/kate-greenaway-204936.html",
        label: "Kate Greenaway (1846-1901)",
        description: "artista británica",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Kate_Greenaway00.jpg/40px-Kate_Greenaway00.jpg"
      },
       {
        value: "m/ma/marie-corelli-263254.html",
        label: "Marie Corelli (1855-1924)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/MarieCorelli.jpg/40px-MarieCorelli.jpg"
      },
       {
        value: "a/al/alexander-von-zemlinsky-78524.html",
        label: "Alexander von Zemlinsky (1871-1942)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Zemlinsky.jpg/40px-Zemlinsky.jpg"
      },
       {
        value: "e/em/emile-verhaeren-193680.html",
        label: "Émile Verhaeren (1855-1916)",
        description: "poeta belga",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Emile_Verhaeren01.jpg/40px-Emile_Verhaeren01.jpg"
      },
       {
        value: "g/ga/gabriele-dannunzio-193236.html",
        label: "Gabriele D'Annunzio (1863-1938)",
        description: "escritor, poeta, periodista y dramaturgo italiano",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Gabriele_D%27Annunzio_02.jpg/40px-Gabriele_D%27Annunzio_02.jpg"
      },
       {
        value: "a/al/alfred-kerr-70396.html",
        label: "Alfred Kerr (1867-1948)",
        description: "escritor alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Alfred_Kerr%2C_by_Lovis_Corinth%2C_1907.jpg/40px-Alfred_Kerr%2C_by_Lovis_Corinth%2C_1907.jpg"
      },
       {
        value: "h/he/herbert-hoover-35236.html",
        label: "Herbert Hoover (1874-1964)",
        description: "político estadounidense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Herbert_Hoover_-_NARA_-_532049.jpg/40px-Herbert_Hoover_-_NARA_-_532049.jpg"
      },
       {
        value: "s/sr/sri-aurobindo-192207.html",
        label: "Sri Aurobindo (1872-1950)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Sri_aurobindo.jpg/40px-Sri_aurobindo.jpg"
      },
       {
        value: "d/da/david-friedrich-strauss-57219.html",
        label: "David Friedrich Strauss (1808-1874)",
        description: "teólogo y filósofo",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/David_Friedrich_Strauss_1.jpg/40px-David_Friedrich_Strauss_1.jpg"
      },
       {
        value: "f/fl/flora-tristan-254068.html",
        label: "Flora Tristán (1803-1844)",
        description: "escritora franco-peruana",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Flora_Tristan.jpg/40px-Flora_Tristan.jpg"
      },
       {
        value: "i/iv/ivan-bunin-46602.html",
        label: "Iván Bunin (1870-1953)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Ivan_Bunin_%28sepia%29.jpg/40px-Ivan_Bunin_%28sepia%29.jpg"
      },
       {
        value: "g/ge/georg-kerschensteiner-61195.html",
        label: "Georg Kerschensteiner (1854-1932)",
        description: "matemático de Alemania",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/WP_Georg_Kerschensteiner.jpg/40px-WP_Georg_Kerschensteiner.jpg"
      },
       {
        value: "a/al/alvares-de-azevedo-250754.html",
        label: "Álvares de Azevedo (1831-1852)",
        description: "poeta, ensayista, cuentista y dramaturgo brasileño",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/%C3%81lvares_de_Azevedo.jpg/40px-%C3%81lvares_de_Azevedo.jpg"
      },
       {
        value: "m/ma/malwida-von-meysenbug-68795.html",
        label: "Malwida von Meysenbug (1816-1903)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Malwida_von_Meysenbug%2C_portrait_par_Franz_von_Lenbach.jpg/40px-Malwida_von_Meysenbug%2C_portrait_par_Franz_von_Lenbach.jpg"
      },
       {
        value: "p/pa/paul-valery-200639.html",
        label: "Paul Valéry (1871-1945)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Paul_Val%C3%A9ry_by_the_Studio_Harcourt.jpg/40px-Paul_Val%C3%A9ry_by_the_Studio_Harcourt.jpg"
      },
       {
        value: "h/he/helena-blavatsky-189454.html",
        label: "Helena Blavatsky (1831-1891)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Helena_Petrovna_Blavatsky.jpg/40px-Helena_Petrovna_Blavatsky.jpg"
      },
       {
        value: "j/jo/jose-marti-103285.html",
        label: "José Martí (1853-1895)",
        description: "escritor, político, poeta, ensayista e ideólogo cubano (1853-1895)",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/MartiJohnManuel_K_TRestauration.jpg/40px-MartiJohnManuel_K_TRestauration.jpg"
      },
       {
        value: "v/vi/visarion-belinski-192885.html",
        label: "Visarión Belinski (1811-1848)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Vissarion_Belinsky_by_K_Gorbunov_1843.jpg/40px-Vissarion_Belinsky_by_K_Gorbunov_1843.jpg"
      },
       {
        value: "d/de/detlev-von-liliencron-21119.html",
        label: "Detlev von Liliencron (1844-1909)",
        description: "poeta y novelista alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/D_v_Lilienkron_1905.jpg/40px-D_v_Lilienkron_1905.jpg"
      },
       {
        value: "i/iv/ivan-turguenev-42831.html",
        label: "Iván Turguénev (1818-1883)",
        description: "escritor ruso",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Turgenev_by_Repin.jpg/40px-Turgenev_by_Repin.jpg"
      },
       {
        value: "h/he/hermann-goedesche-66858.html",
        label: "Hermann Goedesche (1815-1878)",
        description: "escritor alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Sir_John_Retcliffe.jpg/40px-Sir_John_Retcliffe.jpg"
      },
       {
        value: "w/wa/walt-whitman-81438.html",
        label: "Walt Whitman (1819-1892)",
        description: "poeta, enfermero voluntario, ensayista, periodista y humanista estadounidense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Walt_Whitman_-_George_Collins_Cox.jpg/40px-Walt_Whitman_-_George_Collins_Cox.jpg"
      },
       {
        value: "c/ch/christina-rossetti-236596.html",
        label: "Christina Rossetti (1830-1894)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Christina_Rossetti_3.jpg/40px-Christina_Rossetti_3.jpg"
      },
       {
        value: "j/ja/james-naismith-188962.html",
        label: "James Naismith (1861-1939)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/James_Naismith_with_a_basketball.jpg/40px-James_Naismith_with_a_basketball.jpg"
      },
       {
        value: "w/wi/willa-cather-229480.html",
        label: "Willa Cather (1873-1947)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Willa_Cather_ca._1912_wearing_necklace_from_Sarah_Orne_Jewett.jpg/40px-Willa_Cather_ca._1912_wearing_necklace_from_Sarah_Orne_Jewett.jpg"
      },
       {
        value: "w/wi/william-somerset-maugham-134942.html",
        label: "William Somerset Maugham (1874-1965)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Somerset_Maugham_%281934%29.jpg/40px-Somerset_Maugham_%281934%29.jpg"
      },
       {
        value: "c/co/colmar-von-der-goltz-57760.html",
        label: "Colmar von der Goltz (1843-1916)",
        description: "general y teórico militar alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Colmar_Freiherr_von_der_Goltz.jpg/40px-Colmar_Freiherr_von_der_Goltz.jpg"
      },
       {
        value: "t/th/thorstein-veblen-73646.html",
        label: "Thorstein Veblen (1857-1929)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Veblen3a.jpg/40px-Veblen3a.jpg"
      },
       {
        value: "j/ju/juliette-adam-270617.html",
        label: "Juliette Adam (1836-1936)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Julietteadam.jpg/40px-Julietteadam.jpg"
      },
       {
        value: "h/he/henry-david-thoreau-131149.html",
        label: "Henry David Thoreau (1817-1862)",
        description: "escritor, poeta y filósofo estadounidense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Benjamin_D._Maxham_-_Henry_David_Thoreau_-_Restored.jpg/40px-Benjamin_D._Maxham_-_Henry_David_Thoreau_-_Restored.jpg"
      },
       {
        value: "j/jo/john-ruskin-179126.html",
        label: "John Ruskin (1819-1900)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/John_Ruskin.jpg/40px-John_Ruskin.jpg"
      },
       {
        value: "f/fe/federico-gamboa-4487.html",
        label: "Federico Gamboa (1864-1939)",
        description: "escritor mexicano",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Fgamboa.jpg/40px-Fgamboa.jpg"
      },
       {
        value: "j/ja/james-guillaume-116617.html",
        label: "James Guillaume (1844-1916)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Guillaume_james.jpg/40px-Guillaume_james.jpg"
      },
       {
        value: "g/gu/gustav-noske-57353.html",
        label: "Gustav Noske (1868-1946)",
        description: "político alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Bundesarchiv_Bild_102-14240%2C_Gustav_Noske.jpg/40px-Bundesarchiv_Bild_102-14240%2C_Gustav_Noske.jpg"
      },
       {
        value: "l/lu/lucien-febvre-156999.html",
        label: "Lucien Febvre (1878-1956)",
        description: "historiador francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Lucien_Febvre-Strasbourg.jpg/40px-Lucien_Febvre-Strasbourg.jpg"
      },
       {
        value: "v/ve/venceslaus-ulricus-hammershaimb-212216.html",
        label: "Venceslaus Ulricus Hammershaimb (1819-1909)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/V.U._Hammershaimb.jpg/40px-V.U._Hammershaimb.jpg"
      },
       {
        value: "w/we/werner-sutermeister-124600.html",
        label: "Werner Sutermeister (1868-1939)",
        description: "escritor suizo",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Werner_Sutermeister.jpg/40px-Werner_Sutermeister.jpg"
      },
       {
        value: "a/ar/arnost-muka-8948.html",
        label: "Arnošt Muka (1854-1932)",
        description: "folclorista sorabo",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Arnost_Muka.jpg/40px-Arnost_Muka.jpg"
      },
       {
        value: "a/ad/adolf-friedrich-von-schack-63876.html",
        label: "Adolf Friedrich von Schack (1815-1894)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Adolf_F_G_v_Schack.jpg/40px-Adolf_F_G_v_Schack.jpg"
      },
       {
        value: "a/al/aleksandr-herzen-201221.html",
        label: "Aleksandr Herzen (1812-1870)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Herzen_ge.jpg/40px-Herzen_ge.jpg"
      },
       {
        value: "n/na/natalie-clifford-barney-34782.html",
        label: "Natalie Clifford Barney (1876-1972)",
        description: "escritora, poeta y novelista estadounidense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Natalie_Barney_in_Fur_Cape.jpg/40px-Natalie_Barney_in_Fur_Cape.jpg"
      },
       {
        value: "v/vi/victor-hugo-535.html",
        label: "Victor Hugo (1802-1885)",
        description: "poeta, novelista y dramaturgo francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Victor_Hugo.jpg/40px-Victor_Hugo.jpg"
      },
       {
        value: "s/si/simon-schwendener-115641.html",
        label: "Simon Schwendener (1829-1919)",
        description: "botánico suizo",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/PSM_V50_D329_Simon_Schwendemer_professor_of_botany_berlin.jpg/40px-PSM_V50_D329_Simon_Schwendemer_professor_of_botany_berlin.jpg"
      },
       {
        value: "h/he/henry-james-170509.html",
        label: "Henry James (1843-1916)",
        description: "escritor estadounidense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Henry_James_by_John_Singer_Sargent_cleaned.jpg/40px-Henry_James_by_John_Singer_Sargent_cleaned.jpg"
      },
       {
        value: "a/au/august-stramm-61657.html",
        label: "August Stramm (1874-1915)",
        description: "poeta alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Stramm.jpg/40px-Stramm.jpg"
      },
       {
        value: "m/ma/mary-parker-237173.html",
        label: "Mary Parker (1868-1933)",
        description: "polítóloga y académica estadounidense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Mary_Parker_Follett_%281868-1933%29.jpg/40px-Mary_Parker_Follett_%281868-1933%29.jpg"
      },
       {
        value: "w/wi/william-butler-yeats-40213.html",
        label: "William Butler Yeats (1865-1939)",
        description: "poeta y dramaturgo irlandés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/William_Butler_Yeats_by_George_Charles_Beresford.jpg/40px-William_Butler_Yeats_by_George_Charles_Beresford.jpg"
      },
       {
        value: "c/ca/carolina-michaelis-de-vasconcellos-76158.html",
        label: "Carolina Michaëlis de Vasconcellos (1851-1925)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Carolina_Micha%C3%ABlis.jpg/40px-Carolina_Micha%C3%ABlis.jpg"
      },
       {
        value: "t/th/thomas-hardy-132805.html",
        label: "Thomas Hardy (1840-1928)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Thomashardy_restored.jpg/40px-Thomashardy_restored.jpg"
      },
       {
        value: "w/wa/wadysaw-reymont-121180.html",
        label: "Władysław Reymont (1867-1925)",
        description: "novelista polaco",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Wladyslaw_Reymont.jpg/40px-Wladyslaw_Reymont.jpg"
      },
       {
        value: "e/ed/eduard-fischer-115780.html",
        label: "Eduard Fischer (1861-1939)",
        description: "botánico suizo",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Eduard_Fischer_1861-1939.jpg/40px-Eduard_Fischer_1861-1939.jpg"
      },
       {
        value: "s/si/sidney-lee-179854.html",
        label: "Sidney Lee (1859-1926)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Sidney_Lee_002.jpg/40px-Sidney_Lee_002.jpg"
      },
       {
        value: "r/ru/rudolf-hilferding-57848.html",
        label: "Rudolf Hilferding (1877-1941)",
        description: "economista marxista vienés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Bundesarchiv_Bild_102-00144%2C_Rudolf_Hilferding.jpg/40px-Bundesarchiv_Bild_102-00144%2C_Rudolf_Hilferding.jpg"
      },
       {
        value: "a/al/alfred-tennyson-173869.html",
        label: "Alfred Tennyson (1809-1892)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Alfred_Tennyson_2.jpg/40px-Alfred_Tennyson_2.jpg"
      },
       {
        value: "b/br/bram-stoker-36184.html",
        label: "Bram Stoker (1847-1912)",
        description: "escritor irlandés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Bram_Stoker_1906.jpg/40px-Bram_Stoker_1906.jpg"
      },
       {
        value: "a/an/anne-charlotte-leffler-243068.html",
        label: "Anne Charlotte Leffler (1849-1892)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Anne_Charlotte_Leffler_2.jpg/40px-Anne_Charlotte_Leffler_2.jpg"
      },
       {
        value: "h/he/herbert-eulenberg-65019.html",
        label: "Herbert Eulenberg (1876-1949)",
        description: "escritor alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Portraet_Herbert_Eulenberg.jpg/40px-Portraet_Herbert_Eulenberg.jpg"
      },
       {
        value: "n/ni/nikolai-alexandrovich-morozov-211551.html",
        label: "Nikolái Alexándrovich Morózov (1854-1946)",
        description: "Revolucionario y científico ruso",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Morozov1910.jpg/40px-Morozov1910.jpg"
      },
       {
        value: "m/mi/milutin-milankovic-89054.html",
        label: "Milutin Milanković (1879-1958)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Milutin_Milankovi%C4%87.jpg/40px-Milutin_Milankovi%C4%87.jpg"
      },
       {
        value: "r/ri/richard-wagner-1511.html",
        label: "Richard Wagner (1813-1883)",
        description: "músico compositor alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/RichardWagner.jpg/40px-RichardWagner.jpg"
      },
       {
        value: "h/he/heinrich-hoffmann-215724.html",
        label: "Heinrich Hoffmann (1809-1894)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/HoffmannHeinrichPortrait.jpg/40px-HoffmannHeinrichPortrait.jpg"
      },
       {
        value: "g/ge/gerhart-hauptmann-43523.html",
        label: "Gerhart Hauptmann (1862-1946)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Gerhart_Hauptmann_nobel.jpg/40px-Gerhart_Hauptmann_nobel.jpg"
      },
       {
        value: "a/an/antoni-grabowski-11847.html",
        label: "Antoni Grabowski (1857-1921)",
        description: "ingieniero químico polaco promotor del esperanto",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Antoni_Grabowski.jpg/40px-Antoni_Grabowski.jpg"
      },
       {
        value: "h/he/heinrich-barth-60141.html",
        label: "Heinrich Barth (1821-1865)",
        description: "escritor, geografo alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Barth_Unterschrift.jpg/40px-Barth_Unterschrift.jpg"
      },
       {
        value: "m/ma/max-jacob-156214.html",
        label: "Max Jacob (1876-1944)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Jacob%2C_Max_%281876-1944%29_-_1934_-_Foto_Carl_van_Vechten%2C_Library_of_Congress.jpg/40px-Jacob%2C_Max_%281876-1944%29_-_1934_-_Foto_Carl_van_Vechten%2C_Library_of_Congress.jpg"
      },
       {
        value: "a/al/alexander-of-wurttemberg-76263.html",
        label: "Alexander of Württemberg (1801-1844)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Alexander_von_W%C3%BCrttemberg_mit_Hund.jpg/40px-Alexander_von_W%C3%BCrttemberg_mit_Hund.jpg"
      },
       {
        value: "k/kl/klaus-groth-76494.html",
        label: "Klaus Groth (1819-1899)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Klaus_Groth_%28Allers%2C_Kunsthalle_Kiel%29.jpg/40px-Klaus_Groth_%28Allers%2C_Kunsthalle_Kiel%29.jpg"
      },
       {
        value: "l/lu/lucy-maud-montgomery-273034.html",
        label: "Lucy Maud Montgomery (1874-1942)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/LMM_signed_photo.jpg/40px-LMM_signed_photo.jpg"
      },
       {
        value: "s/sh/sholem-aleijem-238090.html",
        label: "Sholem Aleijem (1859-1916)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/SholemAleichem.jpg/40px-SholemAleichem.jpg"
      },
       {
        value: "a/ar/arnold-ruge-61558.html",
        label: "Arnold Ruge (1802-1880)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Arnold_Ruge_Schriftsteller.jpg/40px-Arnold_Ruge_Schriftsteller.jpg"
      },
       {
        value: "j/jo/joris-karl-huysmans-210798.html",
        label: "Joris-Karl Huysmans (1848-1907)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Joris-Karl_Huysmans_photographed_by_Dornac.jpg/40px-Joris-Karl_Huysmans_photographed_by_Dornac.jpg"
      },
       {
        value: "j/jo/johann-nestroy-44862.html",
        label: "Johann Nestroy (1801-1862)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Nestroy.jpg/40px-Nestroy.jpg"
      },
       {
        value: "g/gu/gustav-struve-213794.html",
        label: "Gustav Struve (1805-1870)",
        description: "periodista de Alemania",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Gustav_struve.jpg/40px-Gustav_struve.jpg"
      },
       {
        value: "h/hu/hugo-riemann-213539.html",
        label: "Hugo Riemann (1849-1919)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Hugo_Riemann.jpg/40px-Hugo_Riemann.jpg"
      },
       {
        value: "a/an/anton-denikin-108314.html",
        label: "Antón Denikin (1872-1947)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Anton_Denikin_1918-1919.jpg/40px-Anton_Denikin_1918-1919.jpg"
      },
       {
        value: "a/al/alexander-kaufmann-77270.html",
        label: "Alexander Kaufmann (1817-1893)",
        description: "escritor alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Alexander_Kaufmann.jpg/40px-Alexander_Kaufmann.jpg"
      },
       {
        value: "s/sl/slobodan-jovanovic-89188.html",
        label: "Slobodan Jovanović (1869-1958)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Slobodan_Jovanovi%C4%87%2C_by_Uro%C5%A1_Predi%C4%87_%281931%29.jpg/40px-Slobodan_Jovanovi%C4%87%2C_by_Uro%C5%A1_Predi%C4%87_%281931%29.jpg"
      },
       {
        value: "w/wa/wadysaw-tarnowski-93817.html",
        label: "Władysław Tarnowski (1836-1878)",
        description: "compositor polaco",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/W%C5%82adys%C5%82aw_Tarnowski_by_Maurycy_Gottlieb.jpg/40px-W%C5%82adys%C5%82aw_Tarnowski_by_Maurycy_Gottlieb.jpg"
      },
       {
        value: "f/fr/france-preseren-1031.html",
        label: "France Prešeren (1800-1849)",
        description: "poeta esloveno",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/France_Pre%C5%A1eren_-_lithograph_%281866%2C_Pre%C5%A1irnove_poezije%29_01.jpg/40px-France_Pre%C5%A1eren_-_lithograph_%281866%2C_Pre%C5%A1irnove_poezije%29_01.jpg"
      },
       {
        value: "j/jo/johan-ludvig-runeberg-215339.html",
        label: "Johan Ludvig Runeberg (1804-1877)",
        description: "poeta finlandés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/J._L._Runeberg_1849.jpg/40px-J._L._Runeberg_1849.jpg"
      },
       {
        value: "e/em/emma-orczy-234530.html",
        label: "Emma Orczy (1865-1947)",
        description: "escritora, dramaturga, y artista británica de origen húngaro",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Baroness_Emma_Orczy_%28Bassano%29.jpg/40px-Baroness_Emma_Orczy_%28Bassano%29.jpg"
      },
       {
        value: "j/jo/johannes-vilhelm-jensen-159552.html",
        label: "Johannes Vilhelm Jensen (1873-1950)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Johannes_Vilhelm_Jensen_1944.jpg/40px-Johannes_Vilhelm_Jensen_1944.jpg"
      },
       {
        value: "f/fr/friedrich-nietzsche-9358.html",
        label: "Friedrich Nietzsche (1844-1900)",
        description: "filósofo alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Nietzsche187a.jpg/40px-Nietzsche187a.jpg"
      },
       {
        value: "a/an/andre-gide-47484.html",
        label: "André Gide (1869-1951)",
        description: "escritor francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Gide_1920_cropped.jpg/40px-Gide_1920_cropped.jpg"
      },
       {
        value: "m/ma/maria-carolina-de-battenberg-67441.html",
        label: "María Carolina de Battenberg (1852-1923)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/MarieBattErbSch.jpg/40px-MarieBattErbSch.jpg"
      },
       {
        value: "w/wi/wilhelm-weitling-215808.html",
        label: "Wilhelm Weitling (1808-1871)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/WilhelmWeitling.jpg/40px-WilhelmWeitling.jpg"
      },
       {
        value: "f/fr/friedrich-theodor-vischer-651.html",
        label: "Friedrich Theodor Vischer (1807-1887)",
        description: "filósofo y poeta alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Vischer.jpg/40px-Vischer.jpg"
      },
       {
        value: "m/mi/miles-franklin-984.html",
        label: "Miles Franklin (1879-1954)",
        description: "escritora australiana",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Miles_franklin.jpg/40px-Miles_franklin.jpg"
      },
       {
        value: "p/pa/paul-otlet-1868.html",
        label: "Paul Otlet (1868-1944)",
        description: "fundador de la ciencia de la Bibliografía y de la ciencia de la Documentación",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Paul_Otlet_%C3%A0_son_bureau_%28cropped%29.jpg/40px-Paul_Otlet_%C3%A0_son_bureau_%28cropped%29.jpg"
      },
       {
        value: "n/na/naim-frasheri-47007.html",
        label: "Naim Frashëri (1846-1900)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Naim_Frasheri.jpg/40px-Naim_Frasheri.jpg"
      },
       {
        value: "l/lo/louis-xavier-de-ricard-132082.html",
        label: "Louis-Xavier de Ricard (1843-1911)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Louis_Xavier_de_Ricard-_027616-D_006605.jpg/40px-Louis_Xavier_de_Ricard-_027616-D_006605.jpg"
      },
       {
        value: "d/do/domingo-faustino-sarmiento-254041.html",
        label: "Domingo Faustino Sarmiento (1811-1888)",
        description: "político, escritor, docente, periodista, maestro y militar argentino",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Sarmiento.jpg/40px-Sarmiento.jpg"
      },
       {
        value: "h/he/henri-murger-31258.html",
        label: "Henri Murger (1822-1861)",
        description: "escritor francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Henry_Murger_in_1854.jpg/40px-Henry_Murger_in_1854.jpg"
      },
       {
        value: "e/el/eleanor-h-porter-235368.html",
        label: "Eleanor H. Porter (1868-1920)",
        description: "novelista estadounidense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/EleanorH.Porter.jpg/40px-EleanorH.Porter.jpg"
      },
       {
        value: "m/ma/martin-andersen-nex-168569.html",
        label: "Martin Andersen Nexø (1869-1954)",
        description: "escritor danés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Martin_Andersen_Nex%C3%B82.jpg/40px-Martin_Andersen_Nex%C3%B82.jpg"
      },
       {
        value: "c/cr/cristobal-moehrlen-69299.html",
        label: "Cristóbal Moehrlen (1800-1871)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Christophe_Moehrlen.jpg/40px-Christophe_Moehrlen.jpg"
      },
       {
        value: "p/pa/paul-scheerbart-62435.html",
        label: "Paul Scheerbart (1863-1915)",
        description: "poeta alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Paul_Scheerbarth.jpg/40px-Paul_Scheerbarth.jpg"
      },
       {
        value: "l/lo/louis-leroy-50659.html",
        label: "Louis Leroy (1812-1885)",
        description: "pintor y grabador francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/This_is_the_critic_Louis_Leroy-_2013-07-10_13-24.jpg/40px-This_is_the_critic_Louis_Leroy-_2013-07-10_13-24.jpg"
      },
       {
        value: "z/za/zacarias-topelius-139549.html",
        label: "Zacarías Topelius (1818-1898)",
        description: "historiador finlandés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Zachris_%28Sakari%29_Topelius.jpg/40px-Zachris_%28Sakari%29_Topelius.jpg"
      },
       {
        value: "m/ma/max-heindel-183192.html",
        label: "Max Heindel (1865-1919)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Max_Heindel.jpg/40px-Max_Heindel.jpg"
      },
       {
        value: "i/is/isabel-de-wied-57629.html",
        label: "Isabel de Wied (1843-1916)",
        description: "reina consorte de Rumanía",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Queen_Elizabeth_of_Romania.jpg/40px-Queen_Elizabeth_of_Romania.jpg"
      },
       {
        value: "p/pa/paul-sutermeister-123421.html",
        label: "Paul Sutermeister (1864-1905)",
        description: "pastor y escritor suizo",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Paul_Sutermeister.jpg/40px-Paul_Sutermeister.jpg"
      },
       {
        value: "e/el/elizabeth-gaskell-229226.html",
        label: "Elizabeth Gaskell (1810-1865)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Elizabeth_Gaskell.jpg/40px-Elizabeth_Gaskell.jpg"
      },
       {
        value: "i/id/ida--hahn-hahn-92101.html",
        label: "Ida  Hahn-Hahn (1805-1880)",
        description: "Escritora alemana",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Ida_Gr%C3%A4fin_Hahn-Hahn.jpg/40px-Ida_Gr%C3%A4fin_Hahn-Hahn.jpg"
      },
       {
        value: "m/ma/mathilde-wesendonck-63265.html",
        label: "Mathilde Wesendonck (1828-1902)",
        description: "poetisa alemana",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Mathilde_Wesendonck_by_Karl_Ferdinand_Sohn%2C_1850.jpg/40px-Mathilde_Wesendonck_by_Karl_Ferdinand_Sohn%2C_1850.jpg"
      },
       {
        value: "j/jo/josephine-butler-225863.html",
        label: "Josephine Butler (1828-1906)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Josephine_Butler_-_portrait.jpg/40px-Josephine_Butler_-_portrait.jpg"
      },
       {
        value: "c/ca/camilla-collett-243045.html",
        label: "Camilla Collett (1813-1895)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Camilla_Collett_1839.jpg/40px-Camilla_Collett_1839.jpg"
      },
       {
        value: "h/he/hedwig-lachmann-72070.html",
        label: "Hedwig Lachmann (1865-1918)",
        description: "escritora alemana",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Hedwig_Lachmann_-_1865-1918.jpg/40px-Hedwig_Lachmann_-_1865-1918.jpg"
      },
       {
        value: "a/ar/arthur-moeller-van-den-bruck-77466.html",
        label: "Arthur Moeller van den Bruck (1876-1925)",
        description: "historiador alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/ArthurMoellervandenBruck.jpg/40px-ArthurMoellervandenBruck.jpg"
      },
       {
        value: "p/pa/paul-ree-62596.html",
        label: "Paul Rée (1849-1901)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Nietzsche_paul-ree_lou-von-salome188.jpg/40px-Nietzsche_paul-ree_lou-von-salome188.jpg"
      },
       {
        value: "w/wa/walther-rathenau-135645.html",
        label: "Walther Rathenau (1867-1922)",
        description: "escritor alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Walther_Rathenau.jpg/40px-Walther_Rathenau.jpg"
      },
       {
        value: "o/ot/otto-schmeil-213929.html",
        label: "Otto Schmeil (1860-1943)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Bundesarchiv_Bild_102-09017%2C_Otto_Schmeil.jpg/40px-Bundesarchiv_Bild_102-09017%2C_Otto_Schmeil.jpg"
      },
       {
        value: "e/er/erik-axel-karlfeldt-134641.html",
        label: "Erik Axel Karlfeldt (1864-1931)",
        description: "poeta sueco",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Anders_Zorn_-_Erik_Axel_Karlfeldt_i_Zorng%C3%A5rdens_matsal_%281906%29.jpg/40px-Anders_Zorn_-_Erik_Axel_Karlfeldt_i_Zorng%C3%A5rdens_matsal_%281906%29.jpg"
      },
       {
        value: "m/ma/mary-baker-eddy-235069.html",
        label: "Mary Baker Eddy (1821-1910)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Mary_Baker_Eddy.jpg/40px-Mary_Baker_Eddy.jpg"
      },
       {
        value: "r/ro/robert-blum-214977.html",
        label: "Robert Blum (1807-1848)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Portrait_of_Robert_Blum_by_August_Hunger.jpg/40px-Portrait_of_Robert_Blum_by_August_Hunger.jpg"
      },
       {
        value: "a/am/ambrose-bierce-191050.html",
        label: "Ambrose Bierce (1842-1914)",
        description: "escritor, periodista y editorialista estadounidense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Ambrose_Bierce-1.jpg/40px-Ambrose_Bierce-1.jpg"
      },
       {
        value: "t/th/theodor-hahn-121549.html",
        label: "Theodor Hahn (1824-1883)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Theodor_Hahn.jpg/40px-Theodor_Hahn.jpg"
      },
       {
        value: "m/ma/max-dvorak-112173.html",
        label: "Max Dvořák (1874-1921)",
        description: "historiador del arte checo",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Max_Dvorak.jpg/40px-Max_Dvorak.jpg"
      },
       {
        value: "h/he/herbert-spencer-144535.html",
        label: "Herbert Spencer (1820-1903)",
        description: "herbert spenser",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Herbert_Spencer_3.jpg/40px-Herbert_Spencer_3.jpg"
      },
       {
        value: "o/ot/otto-erich-hartleben-76279.html",
        label: "Otto Erich Hartleben (1864-1905)",
        description: "escritor alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Otto_Erich_Hartleben_Portraet.jpg/40px-Otto_Erich_Hartleben_Portraet.jpg"
      },
       {
        value: "h/he/henri-dunant-12091.html",
        label: "Henri Dunant (1828-1910)",
        description: "hombre de negocios y filántropo suizo",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Jean_Henri_Dunant.jpg/40px-Jean_Henri_Dunant.jpg"
      },
       {
        value: "e/eu/eugenia-marlitt-62950.html",
        label: "Eugenia Marlitt (1825-1887)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Die_Gartenlaube_%281887%29_b_473.jpg/40px-Die_Gartenlaube_%281887%29_b_473.jpg"
      },
       {
        value: "h/ha/hanns-heinz-ewers-67169.html",
        label: "Hanns Heinz Ewers (1871-1943)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Hanns_Heinz_Ewers_by_D%C3%BChrkoop.jpg/40px-Hanns_Heinz_Ewers_by_D%C3%BChrkoop.jpg"
      },
       {
        value: "t/th/theodor-lessing-61446.html",
        label: "Theodor Lessing (1872-1933)",
        description: "filósofo alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Lessing_Portrait.jpg/40px-Lessing_Portrait.jpg"
      },
       {
        value: "b/be/benjamin-disraeli-82006.html",
        label: "Benjamin Disraeli (1804-1881)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Disraeli.jpg/40px-Disraeli.jpg"
      },
       {
        value: "h/h-/h-g-wells-42511.html",
        label: "H. G. Wells (1866-1946)",
        description: "escritor británico",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/H.G._Wells_by_Beresford.jpg/40px-H.G._Wells_by_Beresford.jpg"
      },
       {
        value: "a/ar/arno-holz-64404.html",
        label: "Arno Holz (1863-1929)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Arno_holz.jpg/40px-Arno_holz.jpg"
      },
       {
        value: "h/he/henry-ford-8768.html",
        label: "Henry Ford (1863-1947)",
        description: "empresario industrial estadounidense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Henry_ford_1919.jpg/40px-Henry_ford_1919.jpg"
      },
       {
        value: "s/sa/sarojini-naidu-250165.html",
        label: "Sarojini Naidu (1879-1949)",
        description: "política india",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Sarojini_Naidu_in_Bombay_1946.jpg/40px-Sarojini_Naidu_in_Bombay_1946.jpg"
      },
       {
        value: "a/al/alvaro-figueroa-y-torres-250975.html",
        label: "Álvaro Figueroa y Torres (1863-1950)",
        description: "Conde de Romanones",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/%C3%81lvaro_Figueroa_y_de_Torres_Mendieta_y_Romo%2C_de_Kaulak.jpg/40px-%C3%81lvaro_Figueroa_y_de_Torres_Mendieta_y_Romo%2C_de_Kaulak.jpg"
      },
       {
        value: "j/ja/jakob-venedey-215375.html",
        label: "Jakob Venedey (1805-1871)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Jakob_Venedey_76-023.jpg/40px-Jakob_Venedey_76-023.jpg"
      },
       {
        value: "j/jo/johann-most-213632.html",
        label: "Johann Most (1846-1906)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Johann_Most_2.jpg/40px-Johann_Most_2.jpg"
      },
       {
        value: "a/al/allan-kardec-240643.html",
        label: "Allan Kardec (1804-1869)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Alan_Kardec_1.jpg/40px-Alan_Kardec_1.jpg"
      },
       {
        value: "v/vi/vilfredo-pareto-11031.html",
        label: "Vilfredo Pareto (1848-1923)",
        description: "sociólogo, economista y filósofo parisino",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Vilfredo_Pareto.jpg/40px-Vilfredo_Pareto.jpg"
      },
       {
        value: "d/do/douglas-hyde-237951.html",
        label: "Douglas Hyde (1860-1949)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Douglas_Hyde_-_Project_Gutenberg_eText_19028.jpg/40px-Douglas_Hyde_-_Project_Gutenberg_eText_19028.jpg"
      },
       {
        value: "s/st/stephen-born-96798.html",
        label: "Stephen Born (1824-1898)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/StephanBorn.jpg/40px-StephanBorn.jpg"
      },
       {
        value: "g/gu/gustaf-kossinna-63224.html",
        label: "Gustaf Kossinna (1858-1931)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Gustaf_Kossinna_by_Bruno-Dietrich_Sassnick.jpg/40px-Gustaf_Kossinna_by_Bruno-Dietrich_Sassnick.jpg"
      },
       {
        value: "k/ko/konstantin-tsiolkovski-41239.html",
        label: "Konstantín Tsiolkovski (1857-1935)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Tsiolkovsky.jpg/40px-Tsiolkovsky.jpg"
      },
       {
        value: "k/ka/kazimierz-bein-12749.html",
        label: "Kazimierz Bein (1872-1959)",
        description: "oftalmólogo y esperantista polaco",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Bein.jpg/40px-Bein.jpg"
      },
       {
        value: "j/je/jerome-k-jerome-218698.html",
        label: "Jerome K. Jerome (1859-1927)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Jerome_K._Jerome_02.jpg/40px-Jerome_K._Jerome_02.jpg"
      },
       {
        value: "n/ni/nikolai-nekrasov-208003.html",
        label: "Nikolái Nekrásov (1821-1878)",
        description: "poeta ruso",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/%D0%9D%D0%B8%D0%BA%D0%BE%D0%BB%D0%B0%D0%B9_%D0%9D%D0%B5%D0%BA%D1%80%D0%B0%D1%81%D0%BE%D0%B2.jpg/40px-%D0%9D%D0%B8%D0%BA%D0%BE%D0%BB%D0%B0%D0%B9_%D0%9D%D0%B5%D0%BA%D1%80%D0%B0%D1%81%D0%BE%D0%B2.jpg"
      },
       {
        value: "s/sa/saray-156898.html",
        label: "SAray (1879-1964)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Alma_Mahler_1899.jpg/40px-Alma_Mahler_1899.jpg"
      },
       {
        value: "m/ma/maria-vayreda-54215.html",
        label: "Marià Vayreda (1853-1903)",
        description: "escritor español",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/CasaRamon-Vayreda-1332sh.jpg/40px-CasaRamon-Vayreda-1332sh.jpg"
      },
       {
        value: "h/ha/handrij-zejler-77192.html",
        label: "Handrij Zejler (1804-1872)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Zejlersig01.jpg/40px-Zejlersig01.jpg"
      },
       {
        value: "f/fe/ferdinand-von-saar-78977.html",
        label: "Ferdinand von Saar (1833-1906)",
        description: "escritor austríaco",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Ferdinand_von_saar.jpg/40px-Ferdinand_von_saar.jpg"
      },
       {
        value: "w/wi/william-morris-182589.html",
        label: "William Morris (1834-1896)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/William_Morris_age_53.jpg/40px-William_Morris_age_53.jpg"
      },
       {
        value: "r/ru/ruggero-leoncavallo-189015.html",
        label: "Ruggero Leoncavallo (1857-1919)",
        description: "compositor italiano",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Leonkavallo_Postcard-1910.jpg/40px-Leonkavallo_Postcard-1910.jpg"
      },
       {
        value: "b/bu/buffalo-bill-202285.html",
        label: "Buffalo Bill (1846-1917)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Cody-Buffalo-Bill-LOC.jpg/40px-Cody-Buffalo-Bill-LOC.jpg"
      },
       {
        value: "a/al/alexandre-dumas-hijo-169150.html",
        label: "Alexandre Dumas, hijo (1824-1895)",
        description: "Escritor y novelista francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Alexandre_Dumas01.jpg/40px-Alexandre_Dumas01.jpg"
      },
       {
        value: "m/mi/miklos-banffy-25854.html",
        label: "Miklós Bánffy (1873-1950)",
        description: "noble, político y novelista húngaro",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/B%C3%A1nffy_Mikl%C3%B3s.jpg/40px-B%C3%A1nffy_Mikl%C3%B3s.jpg"
      },
       {
        value: "h/he/henrik-pontoppidan-225554.html",
        label: "Henrik Pontoppidan (1857-1943)",
        description: "novelista y cuentista danés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Henrik_Pontoppidan_1917.jpg/40px-Henrik_Pontoppidan_1917.jpg"
      },
       {
        value: "j/jo/josef-stefan-16581.html",
        label: "Josef Stefan (1835-1893)",
        description: "físico, matemático y poeta, esloveno-austríaco",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Jozef_Stefan.jpg/40px-Jozef_Stefan.jpg"
      },
       {
        value: "e/er/ernst-barlach-156890.html",
        label: "Ernst Barlach (1870-1938)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Barlach_Selbstbildnis_I_%281928%29.jpg/40px-Barlach_Selbstbildnis_I_%281928%29.jpg"
      },
       {
        value: "v/vs/vsevolod-soloviov-16996.html",
        label: "Vsévolod Soloviov (1849-1903)",
        description: "novelista histórico ruso",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Vsevolod_Solovyov_7.jpg/40px-Vsevolod_Solovyov_7.jpg"
      },
       {
        value: "e/es/esteban-echeverria-188859.html",
        label: "Esteban Echeverría (1805-1851)",
        description: "escritor y poeta Argentino",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/EstebanEcheverria.jpg/40px-EstebanEcheverria.jpg"
      },
       {
        value: "f/fr/frederic-mistral-42596.html",
        label: "Frédéric Mistral (1830-1914)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Frederic_Mistral_portrait_photo.jpg/40px-Frederic_Mistral_portrait_photo.jpg"
      },
       {
        value: "i/ig/ignacy-daszynski-14430.html",
        label: "Ignacy Daszyński (1866-1936)",
        description: "político polaco",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Ignacy_Daszynski2.jpg/40px-Ignacy_Daszynski2.jpg"
      },
       {
        value: "a/al/alla-nazimova-234795.html",
        label: "Alla Nazimova (1879-1945)",
        description: "actriz estadounidense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/NazimovaDoll%27sHouse.jpg/40px-NazimovaDoll%27sHouse.jpg"
      },
       {
        value: "a/al/alfred-de-musset-179680.html",
        label: "Alfred de Musset (1810-1857)",
        description: "escritor y dramaturgo francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Alfred_de_Musset.jpg/40px-Alfred_de_Musset.jpg"
      },
       {
        value: "e/ed/eduard-zeller-61862.html",
        label: "Eduard Zeller (1814-1908)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Eduard_Zeller_-_Imagines_philologorum.jpg/40px-Eduard_Zeller_-_Imagines_philologorum.jpg"
      },
       {
        value: "j/ja/jay-hambidge-251841.html",
        label: "Jay Hambidge (1867-1924)",
        description: "artista estadounidense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/At_the_Tomb_of_Omar_Khayyam_-_by_Jay_Hambidge.jpg/40px-At_the_Tomb_of_Omar_Khayyam_-_by_Jay_Hambidge.jpg"
      },
       {
        value: "j/jo/john-milton-hay-117101.html",
        label: "John Milton Hay (1838-1905)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/John_Hay%2C_bw_photo_portrait%2C_1897.jpg/40px-John_Hay%2C_bw_photo_portrait%2C_1897.jpg"
      },
       {
        value: "h/he/henri-frederic-amiel-123916.html",
        label: "Henri-Frédéric Amiel (1821-1881)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Henri-Frederic_Amiel_1852.jpg/40px-Henri-Frederic_Amiel_1852.jpg"
      },
       {
        value: "w/wo/wolfgang-franz-von-kobell-76459.html",
        label: "Wolfgang Franz von Kobell (1803-1882)",
        description: "mineralogista y escritor alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Franz_von_Kobell.jpg/40px-Franz_von_Kobell.jpg"
      },
       {
        value: "r/ru/rudolf-christoph-eucken-47695.html",
        label: "Rudolf Christoph Eucken (1846-1926)",
        description: "filósofo alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Rudolf_Christoph_Eucken.jpg/40px-Rudolf_Christoph_Eucken.jpg"
      },
       {
        value: "r/ru/rudyard-kipling-34743.html",
        label: "Rudyard Kipling (1865-1936)",
        description: "escritor británico",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Kipling_nd.jpg/40px-Kipling_nd.jpg"
      },
       {
        value: "r/ri/richard-dehmel-76590.html",
        label: "Richard Dehmel (1863-1920)",
        description: "poeta alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/R-dehmel_1905.jpg/40px-R-dehmel_1905.jpg"
      },
       {
        value: "r/re/rebecca-latimer-felton-271243.html",
        label: "Rebecca Latimer Felton (1835-1930)",
        description: "político estadounidense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Rebecca_L._Felton.jpg/40px-Rebecca_L._Felton.jpg"
      },
       {
        value: "d/da/daniel-paul-schreber-62468.html",
        label: "Daniel Paul Schreber (1842-1911)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Paul_Schreber.jpg/40px-Paul_Schreber.jpg"
      },
       {
        value: "f/fe/ferdinand-lassalle-75784.html",
        label: "Ferdinand Lassalle (1825-1864)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Ferdinandlasalle.jpg/40px-Ferdinandlasalle.jpg"
      },
       {
        value: "h/ha/harriet-quimby-254352.html",
        label: "Harriet Quimby (1875-1912)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Harriet_quimby.jpg/40px-Harriet_quimby.jpg"
      },
       {
        value: "j/ja/jakob-lorber-78592.html",
        label: "Jakob Lorber (1800-1864)",
        description: "músico austríaco",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Lorber1.jpg/40px-Lorber1.jpg"
      },
       {
        value: "v/va/vasily-vereshchagin-127017.html",
        label: "Vasily Vereshchagin (1842-1904)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Vasili_Vereshchagin.jpg/40px-Vasili_Vereshchagin.jpg"
      },
       {
        value: "g/ge/georges-courteline-51107.html",
        label: "Georges Courteline (1858-1929)",
        description: "escritor y dramaturgo",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Georges_Courteline_1921.jpg/40px-Georges_Courteline_1921.jpg"
      },
       {
        value: "g/ge/gerard-de-nerval-191305.html",
        label: "Gérard de Nerval (1808-1855)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/G%C3%A9rard_de_Nerval.jpg/40px-G%C3%A9rard_de_Nerval.jpg"
      },
       {
        value: "b/be/benedetto-croce-192348.html",
        label: "Benedetto Croce (1866-1952)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/B.Croce.jpg/40px-B.Croce.jpg"
      },
       {
        value: "e/ed/eduard-von-keyserling-77494.html",
        label: "Eduard Von Keyserling (1855-1918)",
        description: "escritor alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Lovis_Corinth_-_Eduard_von_Keyserling.jpg/40px-Lovis_Corinth_-_Eduard_von_Keyserling.jpg"
      },
       {
        value: "f/fr/francis-marrash-4899.html",
        label: "Francis Marrash (1836-1873)",
        description: "escritor y poeta sirio del renacimiento árabe",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Francis_Marrash.jpg/40px-Francis_Marrash.jpg"
      },
       {
        value: "r/ri/richard-volkmann-64707.html",
        label: "Richard Volkmann (1830-1889)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Richard_von_Volkmann2.jpg/40px-Richard_von_Volkmann2.jpg"
      },
       {
        value: "k/ku/kurt-eisner-76440.html",
        label: "Kurt Eisner (1867-1919)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/KurtEisner1919.jpg/40px-KurtEisner1919.jpg"
      },
       {
        value: "l/lo/louisa-may-alcott-185696.html",
        label: "Louisa May Alcott (1832-1888)",
        description: "escritora estadounidense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Louisa_May_Alcott_headshot.jpg/40px-Louisa_May_Alcott_headshot.jpg"
      },
       {
        value: "a/an/angel-guimera-175485.html",
        label: "Àngel Guimerà (1845-1924)",
        description: "escritor, poeta y dramaturgo español",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/%C3%81ngel_Guimer%C3%A1%2C_de_Audouard.jpg/40px-%C3%81ngel_Guimer%C3%A1%2C_de_Audouard.jpg"
      },
       {
        value: "p/pi/piotr-krasnov-35448.html",
        label: "Piotr Krasnov (1869-1947)",
        description: "atamán cosaco",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/General_Krasnow_%28cropped%29.jpg/40px-General_Krasnow_%28cropped%29.jpg"
      },
       {
        value: "k/ko/konstantino-kavafis-216980.html",
        label: "Konstantino Kavafis (1863-1933)",
        description: "poeta griego",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Cavafy1900.jpg/40px-Cavafy1900.jpg"
      },
       {
        value: "b/be/bernhard-eunom-philippi-216432.html",
        label: "Bernhard Eunom Philippi (1811-1852)",
        description: "político chileno",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Bernhard_Eunom_Philippi_%281811%E2%80%931852%29.jpg/40px-Bernhard_Eunom_Philippi_%281811%E2%80%931852%29.jpg"
      },
       {
        value: "a/ad/adolf-wilbrandt-67953.html",
        label: "Adolf Wilbrandt (1837-1911)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Wilbrandt_1882.jpg/40px-Wilbrandt_1882.jpg"
      },
       {
        value: "a/ad/adolf-loos-44323.html",
        label: "Adolf Loos (1870-1933)",
        description: "arquitecto checo",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Adolfloos.2.jpg/40px-Adolfloos.2.jpg"
      },
       {
        value: "l/li/liliuokalani-de-hawai-107288.html",
        label: "Liliuokalani de Hawái (1838-1917)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Crown_Princess_Liliuokalani_%28Hocken_Collections%29.jpg/40px-Crown_Princess_Liliuokalani_%28Hocken_Collections%29.jpg"
      },
       {
        value: "m/mo/moritz-wagner-68757.html",
        label: "Moritz Wagner (1813-1887)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Moritz_Wagner_-_Geograph_und_Naturforscher.jpg/40px-Moritz_Wagner_-_Geograph_und_Naturforscher.jpg"
      },
       {
        value: "o/ol/olive-schreiner-151180.html",
        label: "Olive Schreiner (1855-1920)",
        description: "escritora",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Olive_Schreiner00.jpg/40px-Olive_Schreiner00.jpg"
      },
       {
        value: "e/em/emile-bernard-264193.html",
        label: "Émile Bernard (1868-1941)",
        description: "pintor francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Lautrecx07.jpg/40px-Lautrecx07.jpg"
      },
       {
        value: "l/le/leopold-andrian-113759.html",
        label: "Leopold Andrian (1875-1951)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Leopold_Andrian_%281875%E2%80%931951%29_1918.jpg/40px-Leopold_Andrian_%281875%E2%80%931951%29_1918.jpg"
      },
       {
        value: "a/al/alice-b-toklas-179122.html",
        label: "Alice B. Toklas (1877-1967)",
        description: "escritora estadounidense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Alice_B._Toklas%2C_by_Carl_Van_Vechten_-_1949.jpg/40px-Alice_B._Toklas%2C_by_Carl_Van_Vechten_-_1949.jpg"
      },
       {
        value: "i/io/ion-creanga-204810.html",
        label: "Ion Creangă (1837-1889)",
        description: "escritor rumano",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Ion_Creanga-Foto03.jpg/40px-Ion_Creanga-Foto03.jpg"
      },
       {
        value: "b/be/bernard-altum-69834.html",
        label: "Bernard Altum (1824-1900)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Bernard_Altum.jpg/40px-Bernard_Altum.jpg"
      },
       {
        value: "b/bj/bjrnstjerne-bjrnson-46405.html",
        label: "Bjørnstjerne Bjørnson (1832-1910)",
        description: "escritor noruego",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Bj%C3%B8rnstjerne_Bj%C3%B8rnson_%28Stories_By_Foreign_Authors%29.jpg/40px-Bj%C3%B8rnstjerne_Bj%C3%B8rnson_%28Stories_By_Foreign_Authors%29.jpg"
      },
       {
        value: "i/is/isabelle-eberhardt-271903.html",
        label: "Isabelle Eberhardt (1877-1904)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Isabelle_Eberhardt.jpg/40px-Isabelle_Eberhardt.jpg"
      },
       {
        value: "j/jo/joseph-alexander-altsheler-201858.html",
        label: "Joseph Alexander Altsheler (1862-1919)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Altsheler.jpg/40px-Altsheler.jpg"
      },
       {
        value: "e/ed/edith-nesbit-231708.html",
        label: "Edith Nesbit (1858-1924)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Nesbit.jpg/40px-Nesbit.jpg"
      },
       {
        value: "j/jo/johanna-spyri-123053.html",
        label: "Johanna Spyri (1827-1901)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Johanna-spyri.jpg/40px-Johanna-spyri.jpg"
      },
       {
        value: "w/wi/wilhelm-uhde-69574.html",
        label: "Wilhelm Uhde (1874-1947)",
        description: "historiador del arte alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Helmut_Kolle-Wilhelm_Uhde-portrait.jpg/40px-Helmut_Kolle-Wilhelm_Uhde-portrait.jpg"
      },
       {
        value: "c/ce/cesare-lombroso-202420.html",
        label: "Cesare Lombroso (1835-1909)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/C_Lombroso.jpg/40px-C_Lombroso.jpg"
      },
       {
        value: "g/gi/giuseppe-mazzini-187336.html",
        label: "Giuseppe Mazzini (1805-1872)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Giuseppe_Mazzini.jpg/40px-Giuseppe_Mazzini.jpg"
      },
       {
        value: "g/ge/gertrude-bell-231360.html",
        label: "Gertrude Bell (1868-1926)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/BellK_218_Gertrude_Bell_in_Iraq_in_1909_age_41.jpg/40px-BellK_218_Gertrude_Bell_in_Iraq_in_1909_age_41.jpg"
      },
       {
        value: "i/in/innokienti-annienski-25997.html",
        label: "Innokienti Ánnienski (1855-1909)",
        description: "poeta, crítico y traductor ruso",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Innokenty_Annensky.jpg/40px-Innokenty_Annensky.jpg"
      },
       {
        value: "z/zi/ziya-pasha-207009.html",
        label: "Ziya Pasha (1825-1880)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Abdul_Hamid_Zia_Pasha.jpg/40px-Abdul_Hamid_Zia_Pasha.jpg"
      },
       {
        value: "o/ot/otto-brahm-71903.html",
        label: "Otto Brahm (1856-1912)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Otto_brahm_critic_1905.jpg/40px-Otto_brahm_critic_1905.jpg"
      },
       {
        value: "l/la/laura-elizabeth-ingalls-wilder-237514.html",
        label: "Laura Elizabeth Ingalls Wilder (1867-1957)",
        description: "novelista estadounidense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Laura_Ingalls_Wilder.jpg/40px-Laura_Ingalls_Wilder.jpg"
      },
       {
        value: "h/he/helene-christaller-75829.html",
        label: "Helene Christaller (1872-1953)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Helene_Christaller.jpg/40px-Helene_Christaller.jpg"
      },
       {
        value: "v/vl/vladimir-nemirovich-danchenko-203860.html",
        label: "Vladimir Nemirovich-Danchenko (1858-1943)",
        description: "director teatral ruso",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Vladimir_Nemirovich_Danchenko.jpg/40px-Vladimir_Nemirovich_Danchenko.jpg"
      },
       {
        value: "v/ve/verner-von-heidenstam-129173.html",
        label: "Verner von Heidenstam (1859-1940)",
        description: "escritor sueco",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Johan_Krouth%C3%A9n_-_Portr%C3%A4tt_av_Verner_von_Heidenstam.jpg/40px-Johan_Krouth%C3%A9n_-_Portr%C3%A4tt_av_Verner_von_Heidenstam.jpg"
      },
       {
        value: "j/jo/johannes-diermissen-89464.html",
        label: "Johannes Diermissen (1823-1893)",
        description: "autor, escritor y folklorista alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Johannes_Diermissen.jpg/40px-Johannes_Diermissen.jpg"
      },
       {
        value: "j/je/jean-lorrain-127984.html",
        label: "Jean Lorrain (1855-1906)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Lorrain%2C_Jean.jpg/40px-Lorrain%2C_Jean.jpg"
      },
       {
        value: "m/ma/martin-buber-84423.html",
        label: "Martin Buber (1878-1965)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Martin_Buber_1963.jpg/40px-Martin_Buber_1963.jpg"
      },
       {
        value: "j/jo/john-stuart-mill-50020.html",
        label: "John Stuart Mill (1806-1873)",
        description: "filósofo, político y economista inglés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Stuart_Mill_G_F_Watts.jpg/40px-Stuart_Mill_G_F_Watts.jpg"
      },
       {
        value: "p/pe/peter-altenberg-44972.html",
        label: "Peter Altenberg (1859-1919)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Scolik_-_Peter_Altenberg.jpg/40px-Scolik_-_Peter_Altenberg.jpg"
      },
       {
        value: "c/ca/carl-sandburg-193608.html",
        label: "Carl Sandburg (1878-1967)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Carl_Sandburg_NYWTS.jpg/40px-Carl_Sandburg_NYWTS.jpg"
      },
       {
        value: "a/ad/adolf-stoecker-63479.html",
        label: "Adolf Stoecker (1835-1909)",
        description: "político alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Adolf_Stoecker.jpg/40px-Adolf_Stoecker.jpg"
      },
       {
        value: "i/is/israel-zangwill-113681.html",
        label: "Israel Zangwill (1864-1926)",
        description: "escritor británico",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Israel_Zangwill.jpg/40px-Israel_Zangwill.jpg"
      },
       {
        value: "l/lo/lou-andreas-salome-38873.html",
        label: "Lou Andreas-Salomé (1861-1937)",
        description: "escritora rusa",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Salome1914.jpg/40px-Salome1914.jpg"
      },
       {
        value: "j/ja/jan-neruda-156321.html",
        label: "Jan Neruda (1834-1891)",
        description: "poeta, cuentista, dramaturgo y novelista checo",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Jan_Neruda_02.jpg/40px-Jan_Neruda_02.jpg"
      },
       {
        value: "c/ca/carl-sternheim-61662.html",
        label: "Carl Sternheim (1878-1942)",
        description: "escritor alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Ernst_Ludwig_Kirchner_Bildnis_Carl_Sternheim_1916.jpg/40px-Ernst_Ludwig_Kirchner_Bildnis_Carl_Sternheim_1916.jpg"
      },
       {
        value: "a/ag/agnes-miegel-67013.html",
        label: "Agnes Miegel (1879-1964)",
        description: "periodista de Alemania",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/DBP_1979_1001_Agnes_Miegel.jpg/40px-DBP_1979_1001_Agnes_Miegel.jpg"
      },
       {
        value: "a/ar/arthur-van-schendel-202355.html",
        label: "Arthur van Schendel (1874-1946)",
        description: "escritor neerlandés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Arthur_van_Schendel%2C_dubbelportret.jpg/40px-Arthur_van_Schendel%2C_dubbelportret.jpg"
      },
       {
        value: "f/fi/fiodor-tiutchev-37217.html",
        label: "Fiódor Tiútchev (1803-1873)",
        description: "poeta",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Tiutchev.jpg/40px-Tiutchev.jpg"
      },
       {
        value: "g/gu/guy-de-maupassant-9327.html",
        label: "Guy de Maupassant (1850-1893)",
        description: "escritor francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Maupassant_2.jpg/40px-Maupassant_2.jpg"
      },
       {
        value: "j/je/jeppe-aakjr-211039.html",
        label: "Jeppe Aakjær (1866-1930)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Jeppe_Aakjaer.jpg/40px-Jeppe_Aakjaer.jpg"
      },
       {
        value: "a/al/alfred-schuler-92333.html",
        label: "Alfred Schuler (1865-1923)",
        description: "poeta alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Alfred_Schuler.jpg/40px-Alfred_Schuler.jpg"
      },
       {
        value: "a/ad/adolf-bernhard-christoph-hilgenfeld-66337.html",
        label: "Adolf Bernhard Christoph Hilgenfeld (1823-1907)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Adolf_Hilgenfeld_-_ZfwT_50.jpg/40px-Adolf_Hilgenfeld_-_ZfwT_50.jpg"
      },
       {
        value: "v/vi/vicente-blasco-ibanez-219646.html",
        label: "Vicente Blasco Ibáñez (1867-1928)",
        description: "periodista, escritor y político español",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Blasco_Iba%C3%B1ez.jpg/40px-Blasco_Iba%C3%B1ez.jpg"
      },
       {
        value: "g/ge/georg-ebers-62765.html",
        label: "Georg Ebers (1837-1898)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Georg_Ebers.jpg/40px-Georg_Ebers.jpg"
      },
       {
        value: "h/he/hermann-sudermann-65448.html",
        label: "Hermann Sudermann (1857-1928)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Nicola_Perscheid_-_Hermann_Sudermann_nach_1925.jpg/40px-Nicola_Perscheid_-_Hermann_Sudermann_nach_1925.jpg"
      },
       {
        value: "k/kn/knut-hamsun-40826.html",
        label: "Knut Hamsun (1859-1952)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Knut_hamsun_1890.jpg/40px-Knut_hamsun_1890.jpg"
      },
       {
        value: "c/ch/charles-baudelaire-501.html",
        label: "Charles Baudelaire (1821-1867)",
        description: "poeta y crítico de arte francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Baudelaire_crop.jpg/40px-Baudelaire_crop.jpg"
      },
       {
        value: "a/au/aubrey-beardsley-272566.html",
        label: "Aubrey Beardsley (1872-1898)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/AubreyBeardsley-Hollyer1.jpg/40px-AubreyBeardsley-Hollyer1.jpg"
      },
       {
        value: "a/al/aleister-crowley-172684.html",
        label: "Aleister Crowley (1875-1947)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Aleister_Crowley_1902_K2.jpg/40px-Aleister_Crowley_1902_K2.jpg"
      },
       {
        value: "e/eu/eulalia-de-borbon-240311.html",
        label: "Eulalia de Borbón (1864-1958)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Infanta_Eulalia_of_Spain.jpg/40px-Infanta_Eulalia_of_Spain.jpg"
      },
       {
        value: "t/th/therese-von-bacheracht-78355.html",
        label: "Therese von Bacheracht (1804-1852)",
        description: "escritora alemana",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Therese_von_Bacheracht.jpg/40px-Therese_von_Bacheracht.jpg"
      },
       {
        value: "v/vl/vladimir-bogoraz-113480.html",
        label: "Vladimir Bogoraz (1865-1936)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Bogoraz_young.jpg/40px-Bogoraz_young.jpg"
      },
       {
        value: "h/ha/hans-christian-andersen-5673.html",
        label: "Hans Christian Andersen (1805-1875)",
        description: "escritor danés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/HCA_by_Thora_Hallager_1869.jpg/40px-HCA_by_Thora_Hallager_1869.jpg"
      },
       {
        value: "e/el/elizabeth-von-arnim-76189.html",
        label: "Elizabeth von Arnim (1866-1941)",
        description: "escritora australiana",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Elizabeth_von_arnim_pencil_sketch.jpg/40px-Elizabeth_von_arnim_pencil_sketch.jpg"
      },
       {
        value: "s/sc/schlomo-winninger-113323.html",
        label: "Schlomo Winninger (1877-1968)",
        description: "escritor austríaco",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Salomon_Wininger_portrait.jpg/40px-Salomon_Wininger_portrait.jpg"
      },
       {
        value: "g/ge/george-sand-3816.html",
        label: "George Sand (1804-1876)",
        description: "escritora francesa",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/George_Sand_by_Nadar%2C_1864.jpg/40px-George_Sand_by_Nadar%2C_1864.jpg"
      },
       {
        value: "m/ma/matthew-arnold-271032.html",
        label: "Matthew Arnold (1822-1888)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Matthew_Arnold_-_Project_Gutenberg_eText_16745.jpg/40px-Matthew_Arnold_-_Project_Gutenberg_eText_16745.jpg"
      },
       {
        value: "l/li/liane-de-pougy-242905.html",
        label: "Liane de Pougy (1869-1950)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Nadar_-_Liane_de_Pougy_1.jpg/40px-Nadar_-_Liane_de_Pougy_1.jpg"
      },
       {
        value: "j/ju/juana-manuela-gorriti-14077.html",
        label: "Juana Manuela Gorriti (1816-1892)",
        description: "Escritora argentina",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Juana_Manuela_Gorriti.jpg/40px-Juana_Manuela_Gorriti.jpg"
      },
       {
        value: "j/je/jean-webster-238140.html",
        label: "Jean Webster (1876-1916)",
        description: "novelista estadounidense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Jean_Webster.jpg/40px-Jean_Webster.jpg"
      },
       {
        value: "a/al/aleksis-kivi-216904.html",
        label: "Aleksis Kivi (1834-1872)",
        description: "escritor finlandés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Aleksis_Kivi.jpg/40px-Aleksis_Kivi.jpg"
      },
       {
        value: "m/ma/marcel-jacques-boulenger-33758.html",
        label: "Marcel Jacques Boulenger (1873-1932)",
        description: "esgrimista francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Marcel_Boulenger_by_Vallotton.jpg/40px-Marcel_Boulenger_by_Vallotton.jpg"
      },
       {
        value: "r/ru/ruben-dario-173767.html",
        label: "Rubén Darío (1867-1916)",
        description: "poeta, periodista y diplomático nicaragüense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Rub%C3%A9n_Dar%C3%ADo.jpg/40px-Rub%C3%A9n_Dar%C3%ADo.jpg"
      },
       {
        value: "g/ge/george-eliot-131333.html",
        label: "George Eliot (1819-1880)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/George_Eliot_at_30_by_Fran%C3%A7ois_D%27Albert_Durade.jpg/40px-George_Eliot_at_30_by_Fran%C3%A7ois_D%27Albert_Durade.jpg"
      },
       {
        value: "l/le/leopold-staff-223230.html",
        label: "Leopold Staff (1878-1957)",
        description: "poeta polaco",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/LeopoldStaff.jpg/40px-LeopoldStaff.jpg"
      },
       {
        value: "l/le/leon-tolstoi-7243.html",
        label: "León Tolstói (1828-1910)",
        description: "escritor ruso",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/L.N.Tolstoy_Prokudin-Gorsky.jpg/40px-L.N.Tolstoy_Prokudin-Gorsky.jpg"
      },
       {
        value: "h/ha/harriet-beecher-stowe-102513.html",
        label: "Harriet Beecher Stowe (1811-1896)",
        description: "escritora abolicionista estadounidense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Beecher-Stowe.jpg/40px-Beecher-Stowe.jpg"
      },
       {
        value: "h/he/hector-berlioz-1151.html",
        label: "Hector Berlioz (1803-1869)",
        description: "compositor de Francia",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Berlioz_Petit_BNF_Gallica-crop.jpg/40px-Berlioz_Petit_BNF_Gallica-crop.jpg"
      },
       {
        value: "n/no/norman-angell-272224.html",
        label: "Norman Angell (1872-1967)",
        description: "político británico",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Norman_Angell_01.jpg/40px-Norman_Angell_01.jpg"
      },
       {
        value: "b/be/berta-zuckerkandl-szeps-86553.html",
        label: "Berta Zuckerkandl-Szeps (1864-1945)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Bertha_Zuckerkandl%2C_von_Vilma_Elisabeth_von_Parlaghy_Brochfeld.jpg/40px-Bertha_Zuckerkandl%2C_von_Vilma_Elisabeth_von_Parlaghy_Brochfeld.jpg"
      },
       {
        value: "w/wi/william-balfour-baikie-183567.html",
        label: "William Balfour Baikie (1824-1864)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Baikie_explorer.jpg/40px-Baikie_explorer.jpg"
      },
       {
        value: "h/he/hermann-usener-63078.html",
        label: "Hermann Usener (1834-1905)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Hermann_Usener_-_Imagines_philologorum.jpg/40px-Hermann_Usener_-_Imagines_philologorum.jpg"
      },
       {
        value: "c/ca/carl-joseph-schroter-87046.html",
        label: "Carl Joseph Schröter (1855-1939)",
        description: "botánico suizo",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/ETH-BIB-Schr%C3%B6ter%2C_Carl_%281855-1939%29-Portrait-Portr_06453.tif_%28cropped%29.jpg/40px-ETH-BIB-Schr%C3%B6ter%2C_Carl_%281855-1939%29-Portrait-Portr_06453.tif_%28cropped%29.jpg"
      },
       {
        value: "j/jo/joseph-arthur-de-gobineau-264918.html",
        label: "Joseph Arthur de Gobineau (1816-1882)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Arthur_de_Gobineau.jpg/40px-Arthur_de_Gobineau.jpg"
      },
       {
        value: "p/pa/paul-destournelles-238731.html",
        label: "Paul d'Estournelles (1852-1924)",
        description: "político francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Paul_Balluet_nobel.jpg/40px-Paul_Balluet_nobel.jpg"
      },
       {
        value: "l/lo/louise-michel-216092.html",
        label: "Louise Michel (1830-1905)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Louise_Michel%2C_grayscale.jpg/40px-Louise_Michel%2C_grayscale.jpg"
      },
       {
        value: "e/en/endre-ady-211392.html",
        label: "Endre Ady (1877-1919)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Endre_Ady.jpg/40px-Endre_Ady.jpg"
      },
       {
        value: "e/en/enrique-gonzalez-martinez-43258.html",
        label: "Enrique González Martínez (1871-1952)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/ENRIQUE_GONZALEZ_MARTINEZ_1871_-_1952_POETA_MEXICANO_%2813451188195%29.jpg/40px-ENRIQUE_GONZALEZ_MARTINEZ_1871_-_1952_POETA_MEXICANO_%2813451188195%29.jpg"
      },
       {
        value: "e/ed/edmond-rostand-202749.html",
        label: "Edmond Rostand (1868-1918)",
        description: "escritor francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Edmond_Rostand.jpg/40px-Edmond_Rostand.jpg"
      },
       {
        value: "i/in/inazo-nitobe-12696.html",
        label: "Inazō Nitobe (1862-1933)",
        description: "escritor japonés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Inazo_Nitobe.jpg/40px-Inazo_Nitobe.jpg"
      },
       {
        value: "s/st/stephanos-dragumis-44132.html",
        label: "Stephanos Dragumis (1842-1923)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Stephanos_Dragoumis.jpg/40px-Stephanos_Dragoumis.jpg"
      },
       {
        value: "f/fa/fanny-lewald-77318.html",
        label: "Fanny Lewald (1811-1889)",
        description: "Escritora alemana",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Fanny_Lewald.jpg/40px-Fanny_Lewald.jpg"
      },
       {
        value: "e/ed/edward-morgan-forster-189119.html",
        label: "Edward Morgan Forster (1879-1970)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/E._M._Forster_von_Dora_Carrington%2C_1924-25.jpg/40px-E._M._Forster_von_Dora_Carrington%2C_1924-25.jpg"
      },
       {
        value: "m/ma/max-schneckenburger-71399.html",
        label: "Max Schneckenburger (1819-1849)",
        description: "poeta alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Max_Schneckenburger.jpg/40px-Max_Schneckenburger.jpg"
      },
       {
        value: "l/li/lina-morgenstern-66502.html",
        label: "Lina Morgenstern (1830-1909)",
        description: "escritora, pedagoga, feminista y pacifista alemana.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Lina_Morgenstern.jpg/40px-Lina_Morgenstern.jpg"
      },
       {
        value: "a/an/anatoli-lunacharski-18809.html",
        label: "Anatoli Lunacharski (1875-1933)",
        description: "dramaturgo, crítico literario y político comunista ruso",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Lunacharsky.jpg/40px-Lunacharsky.jpg"
      },
       {
        value: "c/ca/carl-lindenberg-92337.html",
        label: "Carl Lindenberg (1850-1928)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Carl_Lindenberg_%28Calvet_M._Hahn_2000_Intertwining_Part_2_Image_5%29.jpg/40px-Carl_Lindenberg_%28Calvet_M._Hahn_2000_Intertwining_Part_2_Image_5%29.jpg"
      },
       {
        value: "j/jo/jose-de-espronceda-209077.html",
        label: "José de Espronceda (1808-1842)",
        description: "poeta español",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Jose_de_espronceda.jpg/40px-Jose_de_espronceda.jpg"
      },
       {
        value: "i/is/isabel-burton-243110.html",
        label: "Isabel Burton (1831-1896)",
        description: "traductora británica",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Isabel_Burton-1961.jpg/40px-Isabel_Burton-1961.jpg"
      },
       {
        value: "h/hu/hugo-von-hofmannsthal-51513.html",
        label: "Hugo von Hofmannsthal (1874-1929)",
        description: "poeta, dramaturgo, narrador y ensayista austríaco",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Hofmannsthal_1893.jpg/40px-Hofmannsthal_1893.jpg"
      },
       {
        value: "g/ge/george-meredith-90238.html",
        label: "George Meredith (1828-1909)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/George_Meredith_by_George_Frederic_Watts.jpg/40px-George_Meredith_by_George_Frederic_Watts.jpg"
      },
       {
        value: "o/ot/otto-ludwig-77321.html",
        label: "Otto Ludwig (1813-1865)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Fotothek_df_rp-c_0200071_Triebischtal-Semmelsberg._Otto_Ludwig%2C_Portr%C3%A4t%2C_Zeichnung_%28Stadtarchiv_Mei%C3%9Fen%2C_Graphiksammlung%29.jpg/40px-Fotothek_df_rp-c_0200071_Triebischtal-Semmelsberg._Otto_Ludwig%2C_Portr%C3%A4t%2C_Zeichnung_%28Stadtarchiv_Mei%C3%9Fen%2C_Graphiksammlung%29.jpg"
      },
       {
        value: "a/am/amy-lowell-265841.html",
        label: "Amy Lowell (1874-1925)",
        description: "escritora estadounidense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Amy_Lowell_Time_magazine_cover_1925.jpg/40px-Amy_Lowell_Time_magazine_cover_1925.jpg"
      },
       {
        value: "o/ot/ottilie-assing-98643.html",
        label: "Ottilie Assing (1819-1884)",
        description: "política alemana",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/2009-05-28-assing_ottilie.jpg/40px-2009-05-28-assing_ottilie.jpg"
      },
       {
        value: "j/je/jean-hippolyte-michon-220230.html",
        label: "Jean-Hippolyte Michon (1806-1881)",
        description: "escritor francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Jean-Hippolyte_Michon.jpg/40px-Jean-Hippolyte_Michon.jpg"
      },
       {
        value: "a/ad/adam-muller-guttenbrunn-79061.html",
        label: "Adam Müller-Guttenbrunn (1852-1923)",
        description: "político austríaco",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Adam_M%C3%BCller-Guttenbrunn.jpg/40px-Adam_M%C3%BCller-Guttenbrunn.jpg"
      },
       {
        value: "p/pi/pierre-de-coubertin-82984.html",
        label: "Pierre de Coubertin (1863-1937)",
        description: "pedagogo e historiador francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Baron_Pierre_de_Coubertin.jpg/40px-Baron_Pierre_de_Coubertin.jpg"
      },
       {
        value: "p/pa/paul-bourget-198644.html",
        label: "Paul Bourget (1852-1935)",
        description: "novelista y crítico francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Paul_bourget.jpg/40px-Paul_bourget.jpg"
      },
       {
        value: "a/ab/abdurresid-ibrahim-117114.html",
        label: "Abdurresid Ibrahim (1857-1944)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Abd%C3%BCrre%C5%9Fit-%C4%B0brahim-Efendi-1857-1944-ve-%C3%87ocuklar%C4%B1_%28cropped%29.jpg/40px-Abd%C3%BCrre%C5%9Fit-%C4%B0brahim-Efendi-1857-1944-ve-%C3%87ocuklar%C4%B1_%28cropped%29.jpg"
      },
       {
        value: "s/sv/sven-hedin-154759.html",
        label: "Sven Hedin (1865-1952)",
        description: "Geógrafo y explorador sueco",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Sven_Hedin_01.jpg/40px-Sven_Hedin_01.jpg"
      },
       {
        value: "j/je/jenny-lind-231345.html",
        label: "Jenny Lind (1820-1887)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Jenny_Lind_retouched.jpg/40px-Jenny_Lind_retouched.jpg"
      },
       {
        value: "l/la/lady-randolph-churchill-243011.html",
        label: "Lady Randolph Churchill (1854-1921)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Jennie_Churchill.jpg/40px-Jennie_Churchill.jpg"
      },
       {
        value: "w/wi/wilhelm-walloth-91858.html",
        label: "Wilhelm Walloth (1854-1932)",
        description: "escritor alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Wilhelm_Walloth.jpg/40px-Wilhelm_Walloth.jpg"
      },
       {
        value: "a/al/alexis-de-tocqueville-140694.html",
        label: "Alexis de Tocqueville (1805-1859)",
        description: "pensador, jurista, político, e historiador francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Alexis_de_tocqueville.jpg/40px-Alexis_de_tocqueville.jpg"
      },
       {
        value: "f/fi/filippo-tommaso-marinetti-216582.html",
        label: "Filippo Tommaso Marinetti (1876-1944)",
        description: "poeta y editor",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/FilippoTommasoMarinetti.jpg/40px-FilippoTommasoMarinetti.jpg"
      },
       {
        value: "p/pa/paul-reuter-71014.html",
        label: "Paul Reuter (1816-1899)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Paul_Reuter_Vanity_Fair_14_December_1872.jpg/40px-Paul_Reuter_Vanity_Fair_14_December_1872.jpg"
      },
       {
        value: "a/ad/adolf-muhry-124317.html",
        label: "Adolf Mühry (1810-1888)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Adolf_M%C3%BChry.jpg/40px-Adolf_M%C3%BChry.jpg"
      },
       {
        value: "f/fr/francis-picabia-157321.html",
        label: "Francis Picabia (1879-1953)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Francis_Picabia%2C_photograph_published_in_Les_Peintres_Cubistes%2C_1913.jpg/40px-Francis_Picabia%2C_photograph_published_in_Les_Peintres_Cubistes%2C_1913.jpg"
      },
       {
        value: "l/li/liberty-hyde-bailey-152366.html",
        label: "Liberty Hyde Bailey (1858-1954)",
        description: "botánico estadounidense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Liberty_Hyde_Bailey_1858-1954.jpg/40px-Liberty_Hyde_Bailey_1858-1954.jpg"
      },
       {
        value: "d/di/dietrich-eckart-60259.html",
        label: "Dietrich Eckart (1868-1923)",
        description: "político e ideólogo alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Dietrich_Eckart_01.jpg/40px-Dietrich_Eckart_01.jpg"
      },
       {
        value: "c/ce/cesar-cui-208546.html",
        label: "César Cui (1835-1918)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Cui_1880s_CuiIP_109_600.jpg/40px-Cui_1880s_CuiIP_109_600.jpg"
      },
       {
        value: "g/ga/gaspar-nunez-de-arce-64652.html",
        label: "Gaspar Núñez de Arce (1834-1903)",
        description: "poeta y político español",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/N%C3%BA%C3%B1ez_de_Arce.jpg/40px-N%C3%BA%C3%B1ez_de_Arce.jpg"
      },
       {
        value: "h/he/heinrich-mann-76480.html",
        label: "Heinrich Mann (1871-1950)",
        description: "poeta alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Bundesarchiv_Bild_183-R98911%2C_Heinrich_Mann.jpg/40px-Bundesarchiv_Bild_183-R98911%2C_Heinrich_Mann.jpg"
      },
       {
        value: "h/hu/hugo-bettauer-85728.html",
        label: "Hugo Bettauer (1872-1925)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Hugo_Bettauer-1.jpg/40px-Hugo_Bettauer-1.jpg"
      },
       {
        value: "s/si/siegfried-wagner-143867.html",
        label: "Siegfried Wagner (1869-1930)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Siegfried_Wagner_%28composer%29.jpg/40px-Siegfried_Wagner_%28composer%29.jpg"
      },
       {
        value: "s/so/sofia-behrs-271934.html",
        label: "Sofía Behrs (1844-1919)",
        description: "escritora rusa",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/S_A_Tolstaya.jpg/40px-S_A_Tolstaya.jpg"
      },
       {
        value: "w/wi/wilhelm-waiblinger-66015.html",
        label: "Wilhelm Waiblinger (1804-1830)",
        description: "poeta alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Wilhelm_Waiblinger.jpg/40px-Wilhelm_Waiblinger.jpg"
      },
       {
        value: "a/au/august-wilhelm-ambros-265995.html",
        label: "August Wilhelm Ambros (1816-1876)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Ambros_August_Wilhelm_1862.jpg/40px-Ambros_August_Wilhelm_1862.jpg"
      },
       {
        value: "m/ma/mary-kingsley-235525.html",
        label: "Mary Kingsley (1862-1900)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Mary_Kingsley01.jpg/40px-Mary_Kingsley01.jpg"
      },
       {
        value: "k/ka/karl-kraus-44328.html",
        label: "Karl Kraus (1874-1936)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Karl_Kraus.jpg/40px-Karl_Kraus.jpg"
      },
       {
        value: "j/ja/jack-london-45765.html",
        label: "Jack London (1876-1916)",
        description: "escritor estadounidense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Jack_London_young.jpg/40px-Jack_London_young.jpg"
      },
       {
        value: "f/fr/friedrich-karl-theodor-zarncke-70839.html",
        label: "Friedrich Karl Theodor Zarncke (1825-1891)",
        description: "Filólogo alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Friedrich_Zarncke_2.jpg/40px-Friedrich_Zarncke_2.jpg"
      },
       {
        value: "a/au/august-silberstein-113791.html",
        label: "August Silberstein (1827-1900)",
        description: "escritor austríaco",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/August_Silberstein.jpg/40px-August_Silberstein.jpg"
      },
       {
        value: "h/ho/houston-stewart-chamberlain-57737.html",
        label: "Houston Stewart Chamberlain (1855-1927)",
        description: "pensador británico, nacionalizado alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Bundesarchiv_Bild_119-1600-06%2C_Houston_Stewart_Chamberlain.jpg/40px-Bundesarchiv_Bild_119-1600-06%2C_Houston_Stewart_Chamberlain.jpg"
      },
       {
        value: "a/an/anne-bronte-44520.html",
        label: "Anne Brontë (1820-1849)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Anne_Bronte.jpg/40px-Anne_Bronte.jpg"
      },
       {
        value: "s/sa/sandor-petofi-81219.html",
        label: "Sándor Petőfi (1823-1849)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Orlai-petofi1.jpg/40px-Orlai-petofi1.jpg"
      },
       {
        value: "i/iv/ivan-goncharov-189665.html",
        label: "Iván Goncharov (1812-1891)",
        description: "escritor ruso",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Ivan_Goncharov.jpg/40px-Ivan_Goncharov.jpg"
      },
       {
        value: "s/su/sully-prudhomme-42247.html",
        label: "Sully Prudhomme (1839-1907)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Sully_Prudhomme%2C_Ren%C3%A9-Fran%C3%A7ois-Armand%2C_BNF_Gallica.jpg/40px-Sully_Prudhomme%2C_Ren%C3%A9-Fran%C3%A7ois-Armand%2C_BNF_Gallica.jpg"
      },
       {
        value: "h/he/henry-edwards-73507.html",
        label: "Henry Edwards (1827-1891)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Henry_Edwards_-1871.jpg/40px-Henry_Edwards_-1871.jpg"
      },
       {
        value: "r/ro/robert-schumann-7351.html",
        label: "Robert Schumann (1810-1856)",
        description: "compositor alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Robert_Schumann_1839.jpg/40px-Robert_Schumann_1839.jpg"
      },
       {
        value: "c/co/colette-218679.html",
        label: "Colette (1873-1954)",
        description: "escritora francesa",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/SidonieGabrielleColette.jpg/40px-SidonieGabrielleColette.jpg"
      },
       {
        value: "m/ma/marcel-proust-7199.html",
        label: "Marcel Proust (1871-1922)",
        description: "escritor francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Marcel_Proust_1900-2.jpg/40px-Marcel_Proust_1900-2.jpg"
      },
       {
        value: "g/gu/gustav-freytag-58811.html",
        label: "Gustav Freytag (1816-1895)",
        description: "dramaturgo y novelista alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Gustav_Freytag_by_Karl_Stauffer-Bern_1886-1887.jpg/40px-Gustav_Freytag_by_Karl_Stauffer-Bern_1886-1887.jpg"
      },
       {
        value: "w/wi/wilhelm-jensen-77444.html",
        label: "Wilhelm Jensen (1837-1911)",
        description: "escritor alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Wilhelm_Jensen_01.jpg/40px-Wilhelm_Jensen_01.jpg"
      },
       {
        value: "r/ri/ricarda-huch-60785.html",
        label: "Ricarda Huch (1864-1947)",
        description: "poeta alemana, filósofa e historiadora",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Ricarda_Huch.jpg/40px-Ricarda_Huch.jpg"
      },
       {
        value: "n/ni/nikolai-chernishevski-192331.html",
        label: "Nikolái Chernishevski (1828-1889)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Nikolay_Chernyshevsky.jpg/40px-Nikolay_Chernyshevsky.jpg"
      },
       {
        value: "n/ni/nikolai-roerich-208993.html",
        label: "Nikolái Roerich (1874-1947)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/N_Roerich.jpg/40px-N_Roerich.jpg"
      },
       {
        value: "h/he/henry-gray-40319.html",
        label: "Henry Gray (1825-1861)",
        description: "anatomista y cirujano británico",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Henry_Gray_bw_photo_portrait.jpg/40px-Henry_Gray_bw_photo_portrait.jpg"
      },
       {
        value: "s/se/sebastian-kneipp-45075.html",
        label: "Sebastian Kneipp (1821-1897)",
        description: "sacerdote católico de Alemania",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Sebastian_Kneipp.jpg/40px-Sebastian_Kneipp.jpg"
      },
       {
        value: "j/ju/juan-antonio-perez-bonalde-163285.html",
        label: "Juan Antonio Pérez Bonalde (1846-1892)",
        description: "escritor venezolano",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Perez_Bonalde%2C_Juan_Antonio.jpg/40px-Perez_Bonalde%2C_Juan_Antonio.jpg"
      },
       {
        value: "e/em/emilio-korner-85228.html",
        label: "Emilio Körner (1846-1920)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Emil_K%C3%B6rner_Ej%C3%A9rcito_Chile.jpg/40px-Emil_K%C3%B6rner_Ej%C3%A9rcito_Chile.jpg"
      },
       {
        value: "a/aa/aaron-bernstein-67583.html",
        label: "Aaron Bernstein (1812-1884)",
        description: "escritor alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Die_Gartenlaube_%281861%29_b_453.jpg/40px-Die_Gartenlaube_%281861%29_b_453.jpg"
      },
       {
        value: "m/ma/maximo-gorki-12706.html",
        label: "Máximo Gorki (1868-1936)",
        description: "escritor y político ruso identificado con el movimiento revolucionario soviético",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Maxim_Gorky_authographed_portrait_1.jpg/40px-Maxim_Gorky_authographed_portrait_1.jpg"
      },
       {
        value: "f/fu/futabatei-shimei-22665.html",
        label: "Futabatei Shimei (1864-1909)",
        description: "escritor, traductor y crítico literario japonés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Shimei_Futabatei.jpg/40px-Shimei_Futabatei.jpg"
      },
       {
        value: "w/w-/w-e-b-du-bois-158060.html",
        label: "W. E. B. Du Bois (1868-1963)",
        description: "historiador, sociólogo, activista y escritor estadunidense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/WEB_DuBois_1918.jpg/40px-WEB_DuBois_1918.jpg"
      },
       {
        value: "e/el/eleonora-marx-61412.html",
        label: "Eleonora Marx (1855-1898)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Eleanor_Marx.jpg/40px-Eleanor_Marx.jpg"
      },
       {
        value: "m/mi/mihai-eminescu-184935.html",
        label: "Mihai Eminescu (1850-1889)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Eminescu.jpg/40px-Eminescu.jpg"
      },
       {
        value: "r/ro/robert-frost-168728.html",
        label: "Robert Frost (1874-1963)",
        description: "poeta estadounidense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Jb_modern_frost_2_e.jpg/40px-Jb_modern_frost_2_e.jpg"
      },
       {
        value: "b/be/bernhard-kellermann-77226.html",
        label: "Bernhard Kellermann (1879-1951)",
        description: "escritor alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Bundesarchiv_Bild_183-19204-2120%2C_Bernhard_Kellermann%2C_Otto_Nagel.jpg/40px-Bundesarchiv_Bild_183-19204-2120%2C_Bernhard_Kellermann%2C_Otto_Nagel.jpg"
      },
       {
        value: "a/au/august-bebel-76520.html",
        label: "August Bebel (1840-1913)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/August_Bebel_2.jpg/40px-August_Bebel_2.jpg"
      },
       {
        value: "m/ma/magnus-hirschfeld-57592.html",
        label: "Magnus Hirschfeld (1868-1935)",
        description: "médico y sexólogo",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Magnus_Hirschfeld.jpg/40px-Magnus_Hirschfeld.jpg"
      },
       {
        value: "t/th/theodor-mommsen-25351.html",
        label: "Theodor Mommsen (1817-1903)",
        description: "jurista, filólogo e historiador alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Theodor_Mommsen_2.jpg/40px-Theodor_Mommsen_2.jpg"
      },
       {
        value: "g/ge/georgi-plejanov-182905.html",
        label: "Georgi Plejánov (1856-1918)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Georgi_Plekhanov.jpg/40px-Georgi_Plekhanov.jpg"
      },
       {
        value: "f/fa/fanny-zu-reventlow-71429.html",
        label: "Fanny zu Reventlow (1871-1918)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Fanny_Gr%C3%A4fin_zu_Reventlow.jpg/40px-Fanny_Gr%C3%A4fin_zu_Reventlow.jpg"
      },
       {
        value: "e/et/ethel-smyth-236599.html",
        label: "Ethel Smyth (1858-1944)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Ethel_Smyth.jpg/40px-Ethel_Smyth.jpg"
      },
       {
        value: "w/wi/william-makepeace-thackeray-167768.html",
        label: "William Makepeace Thackeray (1811-1863)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/William_Makepeace_Thackeray_by_Jesse_Harrison_Whitehurst-crop.jpg/40px-William_Makepeace_Thackeray_by_Jesse_Harrison_Whitehurst-crop.jpg"
      },
       {
        value: "m/ma/marie-von-ebner-eschenbach-93525.html",
        label: "Marie von Ebner-Eschenbach (1830-1916)",
        description: "escritora austríaca",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Ebner-Eschenbach.jpg/40px-Ebner-Eschenbach.jpg"
      },
       {
        value: "p/pa/pavel-bazhov-182156.html",
        label: "Pável Bazhov (1879-1950)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/%D0%9F%D0%B0%D0%B2%D0%B5%D0%BB_%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D0%B2%D0%B8%D1%87_%D0%B2_1911_%D0%B3%D0%BE%D0%B4%D1%83.jpg/40px-%D0%9F%D0%B0%D0%B2%D0%B5%D0%BB_%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D0%B2%D0%B8%D1%87_%D0%B2_1911_%D0%B3%D0%BE%D0%B4%D1%83.jpg"
      },
       {
        value: "t/te/temistocle-solera-211329.html",
        label: "Temistocle Solera (1815-1878)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Temistocle_Solera.jpg/40px-Temistocle_Solera.jpg"
      },
       {
        value: "e/er/erich-muhsam-61722.html",
        label: "Erich Mühsam (1878-1934)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Bundesarchiv_Bild_146-1981-003-08%2C_Erich_M%C3%BChsam.jpg/40px-Bundesarchiv_Bild_146-1981-003-08%2C_Erich_M%C3%BChsam.jpg"
      },
       {
        value: "e/eu/eugen-sutermeister-116802.html",
        label: "Eugen Sutermeister (1862-1931)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Eugen_Sutermeister.jpg/40px-Eugen_Sutermeister.jpg"
      },
       {
        value: "l/lu/ludwig-anzengruber-93718.html",
        label: "Ludwig Anzengruber (1839-1889)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Ludwig_Anzengruber.jpg/40px-Ludwig_Anzengruber.jpg"
      },
       {
        value: "e/ed/edmundo-de-amicis-240576.html",
        label: "Edmundo de Amicis (1846-1908)",
        description: "escritor y novelista italiano",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Edmondo_De_Amicis.jpg/40px-Edmondo_De_Amicis.jpg"
      },
       {
        value: "g/gi/giosue-carducci-43440.html",
        label: "Giosuè Carducci (1835-1907)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Giosu%C3%A8_Carducci3.jpg/40px-Giosu%C3%A8_Carducci3.jpg"
      },
       {
        value: "j/jo/jorg-lanz-von-liebenfels-78764.html",
        label: "Jörg Lanz von Liebenfels (1874-1954)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/J%C3%B6rg_Lanz_von_Liebenfels.jpg/40px-J%C3%B6rg_Lanz_von_Liebenfels.jpg"
      },
       {
        value: "c/ch/christian-lange-206446.html",
        label: "Christian Lange (1869-1938)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Christian_Lous_Lange.jpg/40px-Christian_Lous_Lange.jpg"
      },
       {
        value: "j/j-/j-m-barrie-81796.html",
        label: "J. M. Barrie (1860-1937)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/James_Matthew_Barrie00.jpg/40px-James_Matthew_Barrie00.jpg"
      },
       {
        value: "c/ce/cesare-cantu-138832.html",
        label: "Cesare Cantù (1804-1895)",
        description: "historiador italiano",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Ritratto_di_Cesare_Cant%C3%B9_%281804-1895%29.jpg/40px-Ritratto_di_Cesare_Cant%C3%B9_%281804-1895%29.jpg"
      },
       {
        value: "b/bo/bolesaw-prus-144439.html",
        label: "Bolesław Prus (1847-1912)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Boles%C5%82aw_Prus_%28ca._1905%29.jpg/40px-Boles%C5%82aw_Prus_%28ca._1905%29.jpg"
      },
       {
        value: "a/ad/adolf-glabrenner-72840.html",
        label: "Adolf Glaßbrenner (1810-1876)",
        description: "escritor alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Adolf_Glassbrenner.jpg/40px-Adolf_Glassbrenner.jpg"
      },
       {
        value: "w/wi/wilhelmine-schroder-devrient-63238.html",
        label: "Wilhelmine Schröder-Devrient (1804-1860)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Wilhelmine_schroeder-devrient.jpg/40px-Wilhelmine_schroeder-devrient.jpg"
      },
       {
        value: "d/da/daniel-coit-gilman-129598.html",
        label: "Daniel Coit Gilman (1831-1908)",
        description: "periodista estadounidense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Daniel_Coit_Gilman1.jpg/40px-Daniel_Coit_Gilman1.jpg"
      },
       {
        value: "s/se/serguei-aleksandrovich-buturlin-72677.html",
        label: "Serguéi Aleksándrovich Buturlín (1872-1938)",
        description: "ornitólogo ruso",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/SA_Buturlin.jpg/40px-SA_Buturlin.jpg"
      },
       {
        value: "v/ve/vera-zasulich-234980.html",
        label: "Vera Zasulich (1849-1919)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Zasulich-vera.jpg/40px-Zasulich-vera.jpg"
      },
       {
        value: "h/h-/h-rider-haggard-237196.html",
        label: "H. Rider Haggard (1856-1925)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Henry_Rider_Haggard_03.jpg/40px-Henry_Rider_Haggard_03.jpg"
      },
       {
        value: "r/ra/rabindranath-tagore-7241.html",
        label: "Rabindranath Tagore (1861-1941)",
        description: "poeta bengalí",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Rabindranath_Tagore_in_1909.jpg/40px-Rabindranath_Tagore_in_1909.jpg"
      },
       {
        value: "h/he/helene-stocker-72913.html",
        label: "Helene Stöcker (1869-1943)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Helene_Stoecker_on_street.jpg/40px-Helene_Stoecker_on_street.jpg"
      },
       {
        value: "f/fr/francis-galton-191026.html",
        label: "Francis Galton (1822-1911)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Francis_Galton.jpg/40px-Francis_Galton.jpg"
      },
       {
        value: "a/al/aleksei-konstantinovich-tolstoi-212575.html",
        label: "Alekséi Konstantínovich Tolstói (1817-1875)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Brullov_AKTolstoy.jpg/40px-Brullov_AKTolstoy.jpg"
      },
       {
        value: "n/na/nathaniel-hawthorne-69339.html",
        label: "Nathaniel Hawthorne (1804-1864)",
        description: "novelista y cuentista estadounidense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Nathaniel_Hawthorne.jpg/40px-Nathaniel_Hawthorne.jpg"
      },
       {
        value: "j/jo/johan-vilhelm-snellman-127688.html",
        label: "Johan Vilhelm Snellman (1806-1881)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/RAUHALA%281921%29_p029_J.W._Snellman.jpg/40px-RAUHALA%281921%29_p029_J.W._Snellman.jpg"
      },
       {
        value: "b/be/bertha-pappenheim-61178.html",
        label: "Bertha Pappenheim (1859-1936)",
        description: "feminista judía de nacionalidad austríaca",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Pappenheim_1882.jpg/40px-Pappenheim_1882.jpg"
      },
       {
        value: "l/l-/l-l-zamenhof-11758.html",
        label: "L. L. Zamenhof (1859-1917)",
        description: "creador del idioma esperanto",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/1908-kl-t-zamenhof.jpg/40px-1908-kl-t-zamenhof.jpg"
      },
       {
        value: "c/co/conrad-von-bolanden-91180.html",
        label: "Conrad von Bolanden (1828-1920)",
        description: "escritor alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Conrad_von_Bolanden_JS_1.jpg/40px-Conrad_von_Bolanden_JS_1.jpg"
      },
       {
        value: "k/ka/karl-maria-kertbeny-94382.html",
        label: "Karl-Maria Kertbeny (1824-1882)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Kertbeny_Karl_Maria_%281824-1882%29.jpg/40px-Kertbeny_Karl_Maria_%281824-1882%29.jpg"
      },
       {
        value: "c/ch/charles-gates-dawes-184565.html",
        label: "Charles Gates Dawes (1865-1951)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Chas_G_Dawes-H%26E.jpg/40px-Chas_G_Dawes-H%26E.jpg"
      },
       {
        value: "e/ed/edgar-wallace-271824.html",
        label: "Edgar Wallace (1875-1932)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Bundesarchiv_Bild_102-13109%2C_Edgar_Wallace.jpg/40px-Bundesarchiv_Bild_102-13109%2C_Edgar_Wallace.jpg"
      },
       {
        value: "e/el/ellen-key-238443.html",
        label: "Ellen Key (1849-1926)",
        description: "escritora sueca",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Ellen_Key%2C_Carl_Milles.jpg/40px-Ellen_Key%2C_Carl_Milles.jpg"
      },
       {
        value: "g/ge/gertrude-stein-188385.html",
        label: "Gertrude Stein (1874-1946)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Gertrude_Stein_1935-01-04.jpg/40px-Gertrude_Stein_1935-01-04.jpg"
      },
       {
        value: "a/ad/adolf-bastian-58793.html",
        label: "Adolf Bastian (1826-1905)",
        description: "etnógrafo y antropólogo alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Adolf_Bastian2.jpg/40px-Adolf_Bastian2.jpg"
      },
       {
        value: "a/ar/arthur-rimbaud-493.html",
        label: "Arthur Rimbaud (1854-1891)",
        description: "poeta francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Carjat_Arthur_Rimbaud_1872_n2.jpg/40px-Carjat_Arthur_Rimbaud_1872_n2.jpg"
      },
       {
        value: "c/ch/charles-dickens-5686.html",
        label: "Charles Dickens (1812-1870)",
        description: "escritor británico",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Charles_Dickens_-_Project_Gutenberg_eText_13103.jpg/40px-Charles_Dickens_-_Project_Gutenberg_eText_13103.jpg"
      },
       {
        value: "l/le/leopold-von-sacher-masoch-78474.html",
        label: "Leopold von Sacher-Masoch (1836-1895)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Leopold_von_Sacher-Masoch%2C_portrait_2.jpg/40px-Leopold_von_Sacher-Masoch%2C_portrait_2.jpg"
      },
       {
        value: "d/du/duchess-agnes-of-wurttemberg-65680.html",
        label: "Duchess Agnes of Württemberg (1835-1886)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Agnes_von_W%C3%BCrttemberg.jpg/40px-Agnes_von_W%C3%BCrttemberg.jpg"
      },
       {
        value: "w/wa/walburga-von-hohenthal-84368.html",
        label: "Walburga von Hohenthal (1839-1929)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Gr%C3%A4fin_Hohenthal.jpg/40px-Gr%C3%A4fin_Hohenthal.jpg"
      },
       {
        value: "o/o-/o-henry-perez-172788.html",
        label: "O. Henry Perez (1862-1910)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/William_Sydney_Porter_by_doubleday.jpg/40px-William_Sydney_Porter_by_doubleday.jpg"
      },
       {
        value: "j/ja/james-george-frazer-151936.html",
        label: "James George Frazer (1854-1941)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/JamesGeorgeFrazer.jpg/40px-JamesGeorgeFrazer.jpg"
      },
       {
        value: "w/wi/wilhelm-marr-60312.html",
        label: "Wilhelm Marr (1819-1904)",
        description: "político y racista alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Wilhelm_Marr.jpg/40px-Wilhelm_Marr.jpg"
      },
       {
        value: "g/gu/gustav-nachtigal-60549.html",
        label: "Gustav Nachtigal (1834-1885)",
        description: "botánico, médico y explorador alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/%28Gustave_Nachtigal%29_-_Erwin_Hanfstaengl_%28...%29Hanfstaengl_Erwin_btv1b8450662m_%28cropped%29.jpg/40px-%28Gustave_Nachtigal%29_-_Erwin_Hanfstaengl_%28...%29Hanfstaengl_Erwin_btv1b8450662m_%28cropped%29.jpg"
      },
       {
        value: "i/iv/ivana-brlic-mazuranic-254383.html",
        label: "Ivana Brlić-Mažuranić (1874-1938)",
        description: "escritora croata",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Ivana_brlic_mazuranic_II.jpg/40px-Ivana_brlic_mazuranic_II.jpg"
      },
       {
        value: "t/th/theodor-von-sickel-66729.html",
        label: "Theodor von Sickel (1826-1908)",
        description: "historiador austríaco",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Theodor_Sickel.jpg/40px-Theodor_Sickel.jpg"
      },
       {
        value: "s/sh/sherwood-anderson-233898.html",
        label: "Sherwood Anderson (1876-1941)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Sherwood_Anderson_%281933%29.jpg/40px-Sherwood_Anderson_%281933%29.jpg"
      },
       {
        value: "a/al/alexandre-dumas-38337.html",
        label: "Alexandre Dumas (1802-1870)",
        description: "novelista y dramaturgo francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Nadar_-_Alexander_Dumas_p%C3%A8re_%281802-1870%29_-_Google_Art_Project_2.jpg/40px-Nadar_-_Alexander_Dumas_p%C3%A8re_%281802-1870%29_-_Google_Art_Project_2.jpg"
      },
       {
        value: "k/ka/karl-heinrich-ulrichs-60318.html",
        label: "Karl Heinrich Ulrichs (1825-1895)",
        description: "activista alemán de los derechos de los homosexuales",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Karl_Heinrich_Ulrichs_%28from_Kennedy%29.jpg/40px-Karl_Heinrich_Ulrichs_%28from_Kennedy%29.jpg"
      },
       {
        value: "j/jo/john-lloyd-stephens-56635.html",
        label: "John Lloyd Stephens (1805-1852)",
        description: "explorador, escritor y diplomático estadounidense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/JohnLloydStephens.jpg/40px-JohnLloydStephens.jpg"
      },
       {
        value: "j/jo/jose-guell-y-rente-164762.html",
        label: "José Güell y Renté (1818-1884)",
        description: "periodista, político y escritor cubanoespañol",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Jos%C3%A9_G%C3%BCell_y_Rent%C3%A9.jpg/40px-Jos%C3%A9_G%C3%BCell_y_Rent%C3%A9.jpg"
      },
       {
        value: "a/al/albert-schweitzer-49325.html",
        label: "Albert Schweitzer (1875-1965)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Bundesarchiv_Bild_183-D0116-0041-019%2C_Albert_Schweitzer.jpg/40px-Bundesarchiv_Bild_183-D0116-0041-019%2C_Albert_Schweitzer.jpg"
      },
       {
        value: "k/ka/kate-chopin-230476.html",
        label: "Kate Chopin (1850-1904)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/KateChopin.jpg/40px-KateChopin.jpg"
      },
       {
        value: "j/je/jean-baptiste-alphonse-karr-186221.html",
        label: "Jean-Baptiste Alphonse Karr (1808-1890)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Alphonse_Karr.jpg/40px-Alphonse_Karr.jpg"
      },
       {
        value: "e/el/elizabeth-barrett-browning-228494.html",
        label: "Elizabeth Barrett Browning (1806-1861)",
        description: "poetisa inglesa (1806-1861)",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/ElizabethBarrettBrowning.jpg/40px-ElizabethBarrettBrowning.jpg"
      },
       {
        value: "g/ge/georges-feydeau-49465.html",
        label: "Georges Feydeau (1862-1921)",
        description: "escritor francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/G_Feydeau_Carolus-Duran_Lille_2918.jpg/40px-G_Feydeau_Carolus-Duran_Lille_2918.jpg"
      },
       {
        value: "l/la/lady-gregory-239540.html",
        label: "Lady Gregory (1852-1932)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Lady_gregory.jpg/40px-Lady_gregory.jpg"
      },
       {
        value: "t/to/tomas-masaryk-78492.html",
        label: "Tomáš Masaryk (1850-1937)",
        description: "primer presidente de Checoeslovaquia",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/MasarykFotoPrvniPoselstviTGM.jpg/40px-MasarykFotoPrvniPoselstviTGM.jpg"
      },
       {
        value: "r/ro/robert-christian-ave-lallemant-75932.html",
        label: "Robert Christian Avé-Lallemant (1812-1884)",
        description: "médico alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/WP_Robert_Christian_Ave-Lallemant.jpg/40px-WP_Robert_Christian_Ave-Lallemant.jpg"
      },
       {
        value: "m/ma/max-stirner-76725.html",
        label: "Max Stirner (1806-1856)",
        description: "filósofo alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Max_Stirner-k.jpg/40px-Max_Stirner-k.jpg"
      },
       {
        value: "s/st/stephane-mallarme-767.html",
        label: "Stéphane Mallarmé (1842-1898)",
        description: "poeta francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Mallarme.jpg/40px-Mallarme.jpg"
      },
       {
        value: "j/ju/julius-theodor-christian-ratzeburg-64655.html",
        label: "Julius Theodor Christian Ratzeburg (1801-1871)",
        description: "entomólogo alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Julius_Theodor_Christian_Ratzeburg.jpg/40px-Julius_Theodor_Christian_Ratzeburg.jpg"
      },
       {
        value: "l/ly/lydia-koidula-237056.html",
        label: "Lydia Koidula (1843-1886)",
        description: "poetisa estonia",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lydia_Koidula_A-37-3152.jpg/40px-Lydia_Koidula_A-37-3152.jpg"
      },
       {
        value: "j/jo/johann-martin-schleyer-12712.html",
        label: "Johann Martin Schleyer (1831-1912)",
        description: "sacerdote católico alemán que creó la lengua auxiliar volapük",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/JM_Schleyer.jpg/40px-JM_Schleyer.jpg"
      },
       {
        value: "f/fr/fran-levstik-15800.html",
        label: "Fran Levstik (1831-1887)",
        description: "escritor esloveno",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Fran_levstik.jpg/40px-Fran_levstik.jpg"
      },
       {
        value: "m/mi/mijail-saltykov-shchedrin-211785.html",
        label: "Mijaíl Saltykov-Shchedrín (1826-1889)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Kramskoj_-_saltykov-schedrin.jpg/40px-Kramskoj_-_saltykov-schedrin.jpg"
      },
       {
        value: "f/fe/ferdinando-petruccelli-della-gattina-93862.html",
        label: "Ferdinando Petruccelli della Gattina (1815-1890)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Ferdinando_Petruccelli_della_Gattina.jpg/40px-Ferdinando_Petruccelli_della_Gattina.jpg"
      },
       {
        value: "t/th/thomas-mann-37030.html",
        label: "Thomas Mann (1875-1955)",
        description: "escritor alemán, premio Nobel de Literatura",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Thomas_Mann_1937.jpg/40px-Thomas_Mann_1937.jpg"
      },
       {
        value: "i/iv/ivar-aasen-106812.html",
        label: "Ivar Aasen (1813-1896)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Ivaraasen.jpg/40px-Ivaraasen.jpg"
      },
       {
        value: "j/ja/jacinto-benavente-83184.html",
        label: "Jacinto Benavente (1866-1954)",
        description: "literato español",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Jacinto_Benavente_y_Martinez.jpg/40px-Jacinto_Benavente_y_Martinez.jpg"
      },
       {
        value: "k/kl/klas-pontus-arnoldson-192618.html",
        label: "Klas Pontus Arnoldson (1844-1916)",
        description: "político sueco",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/KParnoldson.jpg/40px-KParnoldson.jpg"
      },
       {
        value: "j/jo/johann-nepomuk-huber-75037.html",
        label: "Johann Nepomuk Huber (1830-1879)",
        description: "filósofo alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Johann_Huber_Eybl.jpg/40px-Johann_Huber_Eybl.jpg"
      },
       {
        value: "j/jo/johannes-schlaf-70842.html",
        label: "Johannes Schlaf (1862-1941)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Johannes_Schlaf%2C_portrait.jpg/40px-Johannes_Schlaf%2C_portrait.jpg"
      },
       {
        value: "b/bo/bozena-nemcova-157970.html",
        label: "Božena Němcová (1820-1862)",
        description: "escritora checa",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Bozena_Nemcova.jpg/40px-Bozena_Nemcova.jpg"
      },
       {
        value: "m/ma/maria-konopnicka-257852.html",
        label: "Maria Konopnicka (1842-1910)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Maria_Konopnicka001.jpg/40px-Maria_Konopnicka001.jpg"
      },
       {
        value: "a/al/albert-lortzing-154203.html",
        label: "Albert Lortzing (1801-1851)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Albert_Lortzing-Stahlstich.jpg/40px-Albert_Lortzing-Stahlstich.jpg"
      },
       {
        value: "n/ni/nikolai-gogol-43718.html",
        label: "Nikolái Gógol (1809-1852)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Nikolai_Gogol.jpg/40px-Nikolai_Gogol.jpg"
      },
       {
        value: "g/ge/georg-friedrich-daumer-64661.html",
        label: "Georg Friedrich Daumer (1800-1875)",
        description: "filósofo y poeta alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Georg_Friedrich_Daumer.jpg/40px-Georg_Friedrich_Daumer.jpg"
      },
       {
        value: "e/ed/edgar-rice-burroughs-148234.html",
        label: "Edgar Rice Burroughs (1875-1950)",
        description: "escritor estadounidense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/E-R-Burroughs.jpg/40px-E-R-Burroughs.jpg"
      },
       {
        value: "a/al/aleksandr-ostrovski-171976.html",
        label: "Aleksandr Ostrovski (1823-1886)",
        description: "dramaturgo ruso",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Alexander_Ostrovsky_by_Vasily_Perov.jpg/40px-Alexander_Ostrovsky_by_Vasily_Perov.jpg"
      },
       {
        value: "c/ca/carlos-alejandro-de-sajonia-weimar-eisenach-60743.html",
        label: "Carlos Alejandro de Sajonia-Weimar-Eisenach (1818-1901)",
        description: "gran duque de Sajonia-Weimar-Eisenach",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Karl-Alexander-Sachsen-Weimar-Eisenach.jpg/40px-Karl-Alexander-Sachsen-Weimar-Eisenach.jpg"
      },
       {
        value: "t/th/theodore-roosevelt-33866.html",
        label: "Theodore Roosevelt (1858-1919)",
        description: "político estadounidense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Theodore_Roosevelt_1901-08.jpg/40px-Theodore_Roosevelt_1901-08.jpg"
      },
       {
        value: "e/ed/edouard-estaunie-206391.html",
        label: "Édouard Estaunié (1862-1942)",
        description: "ingeniero francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/%C3%89douard_Estauni%C3%A9_1923.jpg/40px-%C3%89douard_Estauni%C3%A9_1923.jpg"
      },
       {
        value: "k/ka/karl-gutzkow-76755.html",
        label: "Karl Gutzkow (1811-1878)",
        description: "escritor alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Carl_Gutzkow_19c.jpg/40px-Carl_Gutzkow_19c.jpg"
      },
       {
        value: "a/ad/adolf-erik-nordenskjold-156749.html",
        label: "Adolf Erik Nordenskjöld (1832-1901)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Adolf_Erik_Nordenski%C3%B6ld_by_Axel_Jungstedt_1902.jpg/40px-Adolf_Erik_Nordenski%C3%B6ld_by_Axel_Jungstedt_1902.jpg"
      },
       {
        value: "h/he/henry-morton-stanley-171421.html",
        label: "Henry Morton Stanley (1841-1904)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Henry_M_Stanley_1872.jpg/40px-Henry_M_Stanley_1872.jpg"
      },
       {
        value: "c/ch/christian-morgenstern-44652.html",
        label: "Christian Morgenstern (1871-1914)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Morgenstern-h420.jpg/40px-Morgenstern-h420.jpg"
      },
       {
        value: "f/fr/franz-joseph-von-bulow-92363.html",
        label: "Franz Joseph von Bülow (1861-1915)",
        description: "escritor alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Franz_Joseph_von_B%C3%BClow.jpg/40px-Franz_Joseph_von_B%C3%BClow.jpg"
      },
       {
        value: "c/ca/carl-bolle-63426.html",
        label: "Carl Bolle (1821-1909)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Bolle%2C_Carl_%281821-1909%29.jpg/40px-Bolle%2C_Carl_%281821-1909%29.jpg"
      },
       {
        value: "f/fr/franc-miklosic-93401.html",
        label: "Franc Miklošič (1813-1891)",
        description: "filólogo esloveno",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Rosa_Jenik_-_Franc_Miklo%C5%A1i%C4%8D_%28cropped%29.jpg/40px-Rosa_Jenik_-_Franc_Miklo%C5%A1i%C4%8D_%28cropped%29.jpg"
      },
       {
        value: "j/jo/joseph-pulitzer-173417.html",
        label: "Joseph Pulitzer (1847-1911)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/JosephPulitzerPinceNeznpsgov.jpg/40px-JosephPulitzerPinceNeznpsgov.jpg"
      },
       {
        value: "r/ro/romain-rolland-47162.html",
        label: "Romain Rolland (1866-1944)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Romain_Rolland.jpg/40px-Romain_Rolland.jpg"
      },
       {
        value: "g/go/gottfried-kinkel-68325.html",
        label: "Gottfried Kinkel (1815-1882)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/ETH-BIB-Kinkel%2C_Gottfried_%281815-1882%29-Portrait-Portr_00159.tif_%28cropped%29.jpg/40px-ETH-BIB-Kinkel%2C_Gottfried_%281815-1882%29-Portrait-Portr_00159.tif_%28cropped%29.jpg"
      },
       {
        value: "j/jo/john-wilkes-booth-180914.html",
        label: "John Wilkes Booth (1838-1865)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/John_Wilkes_Booth-portrait.jpg/40px-John_Wilkes_Booth-portrait.jpg"
      },
       {
        value: "m/ma/maximilian-harden-63411.html",
        label: "Maximilian Harden (1861-1927)",
        description: "periodista alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Maximilian_Harden_1914.jpg/40px-Maximilian_Harden_1914.jpg"
      },
       {
        value: "j/ja/jane-wilde-272303.html",
        label: "Jane Wilde (1821-1896)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Ladywilde.jpg/40px-Ladywilde.jpg"
      },
       {
        value: "c/ch/charles-maurras-3048.html",
        label: "Charles Maurras (1868-1952)",
        description: "político de extrema derecha, poeta y escritor francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Charles_Maurras_-_avant_1922.jpg/40px-Charles_Maurras_-_avant_1922.jpg"
      },
       {
        value: "a/ad/adolph-hausrath-74062.html",
        label: "Adolph Hausrath (1837-1909)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Adolf_Hausrath.jpg/40px-Adolf_Hausrath.jpg"
      },
       {
        value: "j/jo/jose-rizal-1500.html",
        label: "José Rizal (1861-1896)",
        description: "escritor, médico y héroe nacional filipino",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Jose_rizal_01.jpg/40px-Jose_rizal_01.jpg"
      },
       {
        value: "a/an/anna-leonowens-234244.html",
        label: "Anna Leonowens (1831-1915)",
        description: "educadora británica",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Leonowens_Portrait.jpg/40px-Leonowens_Portrait.jpg"
      },
       {
        value: "n/ne/nellie-bly-230299.html",
        label: "Nellie Bly (1864-1922)",
        description: "periodista estadounidense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Nellie_Bly_2.jpg/40px-Nellie_Bly_2.jpg"
      },
       {
        value: "p/pi/piotr-kropotkin-5752.html",
        label: "Piotr Kropotkin (1842-1921)",
        description: "geógrafo, naturalista y pensador político ruso",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Kropotkin1.jpg/40px-Kropotkin1.jpg"
      },
       {
        value: "l/lu/luigi-pirandello-1403.html",
        label: "Luigi Pirandello (1867-1936)",
        description: "dramaturgo, novelista y escritor de relatos cortos italiano",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Luigi_Pirandello_1932.jpg/40px-Luigi_Pirandello_1932.jpg"
      },
       {
        value: "a/au/august-schleicher-76686.html",
        label: "August Schleicher (1821-1868)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/August_Schleicher.jpg/40px-August_Schleicher.jpg"
      },
       {
        value: "h/he/henry-wadsworth-longfellow-152513.html",
        label: "Henry Wadsworth Longfellow (1807-1882)",
        description: "poeta estadounidense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Henry_Wadsworth_Longfellow_-_Project_Gutenberg_eText_16786.jpg/40px-Henry_Wadsworth_Longfellow_-_Project_Gutenberg_eText_16786.jpg"
      },
       {
        value: "h/ha/harriet-taylor-mill-240782.html",
        label: "Harriet Taylor Mill (1807-1858)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Harriet_Mill_from_NPG.jpg/40px-Harriet_Mill_from_NPG.jpg"
      },
       {
        value: "c/ca/carl-hauptmann-77485.html",
        label: "Carl Hauptmann (1858-1921)",
        description: "escritor alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Carl_Hauptmann.jpg/40px-Carl_Hauptmann.jpg"
      },
       {
        value: "h/he/heinrich-ludwig-hermann-muller-68738.html",
        label: "Heinrich Ludwig Hermann Müller (1829-1883)",
        description: "botánico alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Hermann_M%C3%BCller_01.jpg/40px-Hermann_M%C3%BCller_01.jpg"
      },
       {
        value: "e/er/ernst-forstemann-71501.html",
        label: "Ernst Förstemann (1822-1906)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Ernst_F%C3%B6rstemann.jpg/40px-Ernst_F%C3%B6rstemann.jpg"
      },
       {
        value: "j/je/jean-jaures-12688.html",
        label: "Jean Jaurès (1859-1914)",
        description: "político francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Jean-Jaur%C3%A8s01.jpg/40px-Jean-Jaur%C3%A8s01.jpg"
      },
       {
        value: "p/pi/piotr-ilich-chaikovski-7315.html",
        label: "Piotr Ilich Chaikovski (1840-1893)",
        description: "compositor ruso",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Portr%C3%A4t_des_Komponisten_Pjotr_I._Tschaikowski_%281840-1893%29.jpg/40px-Portr%C3%A4t_des_Komponisten_Pjotr_I._Tschaikowski_%281840-1893%29.jpg"
      },
       {
        value: "g/ge/geza-gardonyi-221903.html",
        label: "Géza Gárdonyi (1863-1922)",
        description: "escritor húngaro",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Geza_gardonyi.jpg/40px-Geza_gardonyi.jpg"
      },
       {
        value: "w/wi/wilhelm-hauff-57966.html",
        label: "Wilhelm Hauff (1802-1827)",
        description: "escritor alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Hauff.jpg/40px-Hauff.jpg"
      },
       {
        value: "e/ed/eduard-bernstein-75786.html",
        label: "Eduard Bernstein (1850-1932)",
        description: "político alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Bernstein_Eduard_1895.jpg/40px-Bernstein_Eduard_1895.jpg"
      },
       {
        value: "a/ad/adalbert-stifter-168542.html",
        label: "Adalbert Stifter (1805-1868)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/A_Stifter.jpg/40px-A_Stifter.jpg"
      },
       {
        value: "j/ju/jules-lemaitre-197935.html",
        label: "Jules Lemaître (1853-1914)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Jules_Lema%C3%AEtre_-_Project_Gutenberg_eText_17662.jpg/40px-Jules_Lema%C3%AEtre_-_Project_Gutenberg_eText_17662.jpg"
      },
       {
        value: "m/ma/marie-dagoult-253453.html",
        label: "Marie d'Agoult (1805-1876)",
        description: "escritora francesa siglo XIX",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Marie_d%E2%80%99Agoult_by_Henri_Lehmann_%2802%29.jpg/40px-Marie_d%E2%80%99Agoult_by_Henri_Lehmann_%2802%29.jpg"
      },
       {
        value: "a/al/albert-marquet-267858.html",
        label: "Albert Marquet (1875-1947)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Albert_Marquet_%281875-1947%29%2C_c._1920s.jpg/40px-Albert_Marquet_%281875-1947%29%2C_c._1920s.jpg"
      },
       {
        value: "k/ka/karl-adolph-gjellerup-131487.html",
        label: "Karl Adolph Gjellerup (1857-1919)",
        description: "escritor danés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Karl_Gjellerup.jpg/40px-Karl_Gjellerup.jpg"
      },
       {
        value: "s/so/sofia-kovalevskaya-184535.html",
        label: "Sofia Kovalévskaya (1850-1891)",
        description: "matemática rusa",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Sofja_Wassiljewna_Kowalewskaja_1.jpg/40px-Sofja_Wassiljewna_Kowalewskaja_1.jpg"
      },
       {
        value: "s/si/siegbert-tarrasch-76558.html",
        label: "Siegbert Tarrasch (1862-1934)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Dr._Siegbert_Tarrasch.jpg/40px-Dr._Siegbert_Tarrasch.jpg"
      },
       {
        value: "a/ar/arnold-schonberg-154770.html",
        label: "Arnold Schönberg (1874-1951)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Arnold_Schoenberg_la_1948.jpg/40px-Arnold_Schoenberg_la_1948.jpg"
      },
       {
        value: "a/ar/arthur-james-balfour-19008.html",
        label: "Arthur James Balfour (1848-1930)",
        description: "político y estadista británico",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Arthur_James_Balfour00.jpg/40px-Arthur_James_Balfour00.jpg"
      },
       {
        value: "h/ha/harriet-tubman-102870.html",
        label: "Harriet Tubman (1820-1913)",
        description: "abolicionista afroamericana",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Harriet_Tubman_by_Squyer%2C_NPG%2C_c1885.jpg/40px-Harriet_Tubman_by_Squyer%2C_NPG%2C_c1885.jpg"
      },
       {
        value: "u/up/upton-sinclair-216134.html",
        label: "Upton Sinclair (1878-1968)",
        description: "escritor estadounidense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Upton_Sinclair_cph.3c32336.jpg/40px-Upton_Sinclair_cph.3c32336.jpg"
      },
       {
        value: "h/ha/harriet-martineau-234570.html",
        label: "Harriet Martineau (1802-1876)",
        description: "escritora y activista",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Harriet_Martineau_by_Richard_Evans.jpg/40px-Harriet_Martineau_by_Richard_Evans.jpg"
      },
       {
        value: "z/zi/ziya-gokalp-83275.html",
        label: "Ziya Gökalp (1876-1924)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Ziya_Bey_G%C3%B6kalp.jpg/40px-Ziya_Bey_G%C3%B6kalp.jpg"
      },
       {
        value: "f/fe/fernando-i-de-bulgaria-151667.html",
        label: "Fernando I de Bulgaria (1861-1948)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Ferdinand_of_Bulgaria_2.jpg/40px-Ferdinand_of_Bulgaria_2.jpg"
      },
       {
        value: "f/fe/ferruccio-busoni-219551.html",
        label: "Ferruccio Busoni (1866-1924)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/FerruccioBusoni1913.jpg/40px-FerruccioBusoni1913.jpg"
      },
       {
        value: "e/ed/eduard-baltzer-71586.html",
        label: "Eduard Baltzer (1814-1887)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Eduard_Baltzer.jpg/40px-Eduard_Baltzer.jpg"
      },
       {
        value: "a/ar/arthur-schnitzler-44331.html",
        label: "Arthur Schnitzler (1862-1931)",
        description: "escritor austríaco",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Arthur_Schnitzler_1912.jpg/40px-Arthur_Schnitzler_1912.jpg"
      },
       {
        value: "a/al/alfred-jarry-7841.html",
        label: "Alfred Jarry (1873-1907)",
        description: "dramaturgo y poeta francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Alfred_Jarry.jpg/40px-Alfred_Jarry.jpg"
      },
       {
        value: "o/os/oskar-panizza-62871.html",
        label: "Oskar Panizza (1853-1921)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Panizza1.jpg/40px-Panizza1.jpg"
      },
       {
        value: "f/fr/fredrik-bajer-191016.html",
        label: "Fredrik Bajer (1837-1922)",
        description: "político danés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Frederik_Bajer_by_E._M%C3%B8ller.jpg/40px-Frederik_Bajer_by_E._M%C3%B8ller.jpg"
      },
       {
        value: "h/he/helmuth-von-moltke-44205.html",
        label: "Helmuth von Moltke (1800-1891)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Moltke-small.jpg/40px-Moltke-small.jpg"
      },
       {
        value: "a/al/alfred-hermann-fried-78488.html",
        label: "Alfred Hermann Fried (1864-1921)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Alfred_Hermann_Fried_nobel.jpg/40px-Alfred_Hermann_Fried_nobel.jpg"
      },
       {
        value: "k/ko/konrad-fiedler-65764.html",
        label: "Konrad Fiedler (1841-1895)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Adolf_von_Hildebrand%2C_Konrad_Fiedler.jpg/40px-Adolf_von_Hildebrand%2C_Konrad_Fiedler.jpg"
      },
       {
        value: "m/mu/multatuli-154211.html",
        label: "Multatuli (1820-1887)",
        description: "escritor neerlandés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Portret_van_de_schrijver_Multatuli_%28cropped%29.jpg/40px-Portret_van_de_schrijver_Multatuli_%28cropped%29.jpg"
      },
       {
        value: "o/oc/octave-mirbeau-23441.html",
        label: "Octave Mirbeau (1848-1917)",
        description: "escritor francés, periodista, crítico de arte, autor de novelas, de obras teatrales y de cuentos",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Octave_Mirbeau.jpg/40px-Octave_Mirbeau.jpg"
      },
       {
        value: "e/ed/eduard-hanslick-84246.html",
        label: "Eduard Hanslick (1825-1904)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Hanslick.jpg/40px-Hanslick.jpg"
      },
       {
        value: "v/vi/viktor-dyk-109067.html",
        label: "Viktor Dyk (1877-1931)",
        description: "poeta, escritor, político y abogado checo",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Viktor_Dyk.jpg/40px-Viktor_Dyk.jpg"
      },
       {
        value: "a/al/alfred-russel-wallace-160627.html",
        label: "Alfred Russel Wallace (1823-1913)",
        description: "naturalista, explorador, geógrafo, antropólogo y biólogo británico",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Alfred-Russel-Wallace-c1895.jpg/40px-Alfred-Russel-Wallace-c1895.jpg"
      },
       {
        value: "r/ro/robert-browning-233265.html",
        label: "Robert Browning (1812-1889)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Robert_Browning_-_Project_Gutenberg_eText_13103.jpg/40px-Robert_Browning_-_Project_Gutenberg_eText_13103.jpg"
      },
       {
        value: "l/lu/ludwig-bechstein-66379.html",
        label: "Ludwig Bechstein (1801-1860)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Ludwig-Bechstein.jpg/40px-Ludwig-Bechstein.jpg"
      },
       {
        value: "a/ar/arthur-conan-doyle-35610.html",
        label: "Arthur Conan Doyle (1859-1930)",
        description: "escritor escocés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Conan_doyle.jpg/40px-Conan_doyle.jpg"
      },
       {
        value: "r/ra/rainer-maria-rilke-76483.html",
        label: "Rainer Maria Rilke (1875-1926)",
        description: "poeta austríaco",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Rainer_Maria_Rilke%2C_1900.jpg/40px-Rainer_Maria_Rilke%2C_1900.jpg"
      },
       {
        value: "c/ca/carlos-maria-ramirez-136059.html",
        label: "Carlos María Ramírez (1847-1898)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Carlos_Mar%C3%ADa_Ram%C3%ADrez_por_Sch%C3%BCtz.jpg/40px-Carlos_Mar%C3%ADa_Ram%C3%ADrez_por_Sch%C3%BCtz.jpg"
      },
       {
        value: "c/ch/christiaan-cornelissen-249042.html",
        label: "Christiaan Cornelissen (1864-1942)",
        description: "economista neerlandés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Christian-cornelissen.jpg/40px-Christian-cornelissen.jpg"
      },
       {
        value: "u/ul/ulrich-von-wilamowitz-moellendorff-61863.html",
        label: "Ulrich von Wilamowitz-Moellendorff (1848-1931)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Wilamowitz.jpg/40px-Wilamowitz.jpg"
      },
       {
        value: "a/ad/ada-christen-85002.html",
        label: "Ada Christen (1839-1901)",
        description: "escritora austríaca",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Ada_Christen_1.jpg/40px-Ada_Christen_1.jpg"
      },
       {
        value: "l/lo/lorenz-diefenbach-68421.html",
        label: "Lorenz Diefenbach (1806-1883)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Lorenz_Diefenbach_01.jpg/40px-Lorenz_Diefenbach_01.jpg"
      },
       {
        value: "s/sw/swami-vivekananda-47478.html",
        label: "Swami Vivekananda (1863-1902)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Swami_Vivekananda-1893-09-signed.jpg/40px-Swami_Vivekananda-1893-09-signed.jpg"
      },
       {
        value: "f/fr/francisco-i-madero-216766.html",
        label: "Francisco I. Madero (1873-1913)",
        description: "empresario y político mexicano",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Francisco_I_Madero.jpg/40px-Francisco_I_Madero.jpg"
      },
       {
        value: "l/le/lewis-carroll-38082.html",
        label: "Lewis Carroll (1832-1898)",
        description: "diácono anglicano, lógico, matemático, fotógrafo  y escritor británico",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/LewisCarrollSelfPhoto.jpg/40px-LewisCarrollSelfPhoto.jpg"
      },
       {
        value: "a/an/anna-de-noailles-6050.html",
        label: "Anna de Noailles (1876-1933)",
        description: "poetisa francesa",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Laszlo_-_Anna_de_Noailles.jpg/40px-Laszlo_-_Anna_de_Noailles.jpg"
      },
       {
        value: "m/mo/mohammad-ali-foroughi-181451.html",
        label: "Mohammad Ali Foroughi (1877-1942)",
        description: "político iraní",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Mohammad_Ali_Foroughi.jpg/40px-Mohammad_Ali_Foroughi.jpg"
      },
       {
        value: "v/vi/victoria-benedictsson-273950.html",
        label: "Victoria Benedictsson (1850-1888)",
        description: "escritora sueca",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Victoria_Benedictsson_b%26w.jpg/40px-Victoria_Benedictsson_b%26w.jpg"
      },
       {
        value: "j/jo/john-hanning-speke-125084.html",
        label: "John Hanning Speke (1827-1864)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/ST-Speke.jpg/40px-ST-Speke.jpg"
      },
       {
        value: "m/mi/mijail-lermontov-46599.html",
        label: "Mijaíl Lérmontov (1814-1841)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Mikhail_lermontov.jpg/40px-Mikhail_lermontov.jpg"
      },
       {
        value: "g/ge/gertrud-von-le-fort-62798.html",
        label: "Gertrud von le Fort (1876-1971)",
        description: "escritora alemana",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Gertrud_v_Le_Fort_c1935.jpg/40px-Gertrud_v_Le_Fort_c1935.jpg"
      },
       {
        value: "h/ho/horacio-quiroga-16864.html",
        label: "Horacio Quiroga (1878-1937)",
        description: "cuentista, poeta y dramaturgo uruguayo",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Quiroga1900a.jpg/40px-Quiroga1900a.jpg"
      },
       {
        value: "g/ge/georg-gottfried-gervinus-61648.html",
        label: "Georg Gottfried Gervinus (1805-1871)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Georg_Gottfried_Gervinus%2C_gross.jpg/40px-Georg_Gottfried_Gervinus%2C_gross.jpg"
      },
       {
        value: "m/mi/miguel-de-unamuno-185085.html",
        label: "Miguel de Unamuno (1864-1936)",
        description: "escritor y filósofo español",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Miguel_de_Unamuno_Meurisse_1925.jpg/40px-Miguel_de_Unamuno_Meurisse_1925.jpg"
      },
       {
        value: "s/si/simon-dubnow-213693.html",
        label: "Simón Dubnow (1860-1941)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/SimonDubnow.jpg/40px-SimonDubnow.jpg"
      },
       {
        value: "c/ca/carl-bernhard-von-cotta-70211.html",
        label: "Carl Bernhard von Cotta (1808-1879)",
        description: "polímata, geólogo y botánico alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bernhard_von_Cotta.jpg/40px-Bernhard_von_Cotta.jpg"
      },
       {
        value: "g/ge/georg-herwegh-57945.html",
        label: "Georg Herwegh (1817-1875)",
        description: "poeta alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Herwegh%2C_Georg.jpg/40px-Herwegh%2C_Georg.jpg"
      },
       {
        value: "t/th/theodor-herzl-44003.html",
        label: "Theodor Herzl (1860-1904)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Theodor_Herzl_retouched.jpg/40px-Theodor_Herzl_retouched.jpg"
      },
       {
        value: "c/ca/carlo-collodi-199588.html",
        label: "Carlo Collodi (1826-1890)",
        description: "escritor italiano y cantante",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Carlo_Collodi.jpg/40px-Carlo_Collodi.jpg"
      },
       {
        value: "a/al/alfred-doblin-57389.html",
        label: "Alfred Döblin (1878-1957)",
        description: "escritor",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Alfred_Doeblin_1930a.jpg/40px-Alfred_Doeblin_1930a.jpg"
      },
       {
        value: "a/ax/axel-munthe-41580.html",
        label: "Axel Munthe (1857-1949)",
        description: "médico sueco",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Axel_Munthe.jpg/40px-Axel_Munthe.jpg"
      },
       {
        value: "o/ot/otto-jespersen-23870.html",
        label: "Otto Jespersen (1860-1943)",
        description: "lingüista y filósofo danés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Otto_Jespersen.jpg/40px-Otto_Jespersen.jpg"
      },
       {
        value: "s/sr/sren-kierkegaard-6512.html",
        label: "Søren Kierkegaard (1813-1855)",
        description: "prolífico filósofo y teólogo danés del siglo XIX",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Kierkegaard.jpg/40px-Kierkegaard.jpg"
      },
       {
        value: "h/he/herman-heijermans-36771.html",
        label: "Herman Heijermans (1864-1924)",
        description: "escritor neerlandés de origen judío",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Herman_Heijermans_Anefo.jpg/40px-Herman_Heijermans_Anefo.jpg"
      },
       {
        value: "e/el/eleftherios-venizelos-205545.html",
        label: "Eleftherios Venizelos (1864-1936)",
        description: "político griego",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/%CE%95%CE%BB%CE%B5%CF%85%CE%B8%CE%AD%CF%81%CE%B9%CE%BF%CF%82_%CE%92%CE%B5%CE%BD%CE%B9%CE%B6%CE%AD%CE%BB%CE%BF%CF%82.jpg/40px-%CE%95%CE%BB%CE%B5%CF%85%CE%B8%CE%AD%CF%81%CE%B9%CE%BF%CF%82_%CE%92%CE%B5%CE%BD%CE%B9%CE%B6%CE%AD%CE%BB%CE%BF%CF%82.jpg"
      },
       {
        value: "w/wi/wilhelm-filchner-58830.html",
        label: "Wilhelm Filchner (1877-1957)",
        description: "explorador alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Wilhelm_Filchner.jpg/40px-Wilhelm_Filchner.jpg"
      },
       {
        value: "c/co/cosima-wagner-75789.html",
        label: "Cósima Wagner (1837-1930)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Cosimawagner1877london.jpg/40px-Cosimawagner1877london.jpg"
      },
       {
        value: "f/fe/felix-dahn-61456.html",
        label: "Felix Dahn (1834-1912)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Felix_Dahn.jpg/40px-Felix_Dahn.jpg"
      },
       {
        value: "l/ly/lyman-frank-baum-207544.html",
        label: "Lyman Frank Baum (1856-1919)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/L._Frank_Baum_%281911%29.jpg/40px-L._Frank_Baum_%281911%29.jpg"
      },
       {
        value: "i/it/italo-svevo-216478.html",
        label: "Italo Svevo (1861-1928)",
        description: "escritor italiano",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Svevo.jpg/40px-Svevo.jpg"
      },
       {
        value: "p/pr/prosper-merimee-160333.html",
        label: "Prosper Mérimée (1803-1870)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/%D0%9F%D1%80%D0%BE%D1%81%D0%BF%D0%B5%D1%80_%D0%9C%D0%B5%D1%80%D0%B8%D0%BC%D0%B5.jpg/40px-%D0%9F%D1%80%D0%BE%D1%81%D0%BF%D0%B5%D1%80_%D0%9C%D0%B5%D1%80%D0%B8%D0%BC%D0%B5.jpg"
      },
       {
        value: "p/pa/paul-von-lettow-vorbeck-57203.html",
        label: "Paul von Lettow-Vorbeck (1870-1964)",
        description: "militar alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Bundesarchiv_Bild_183-R05765%2C_Paul_Emil_von_Lettow-Vorbeck.jpg/40px-Bundesarchiv_Bild_183-R05765%2C_Paul_Emil_von_Lettow-Vorbeck.jpg"
      },
       {
        value: "g/ge/george-santayana-237833.html",
        label: "George Santayana (1863-1952)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/George_Santayana.jpg/40px-George_Santayana.jpg"
      },
       {
        value: "r/re/rene-bazin-127539.html",
        label: "René Bazin (1853-1932)",
        description: "novelista francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Rene_Bazin.jpg/40px-Rene_Bazin.jpg"
      },
       {
        value: "a/al/alphonse-daudet-228546.html",
        label: "Alphonse Daudet (1840-1897)",
        description: "novelista francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Alphonse_Daudet_2.jpg/40px-Alphonse_Daudet_2.jpg"
      },
       {
        value: "a/an/antonio-carlo-napoleone-gallenga-204932.html",
        label: "Antonio Carlo Napoleone Gallenga (1810-1895)",
        description: "autor italiano",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Antonio_Gallenga.jpg/40px-Antonio_Gallenga.jpg"
      },
       {
        value: "a/an/anton-alexander-auersperg-79069.html",
        label: "Anton Alexander Auersperg (1806-1876)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Anton_Alexander_von_Auersperg_2.jpg/40px-Anton_Alexander_von_Auersperg_2.jpg"
      },
       {
        value: "r/ri/richard-strauss-13894.html",
        label: "Richard Strauss (1864-1949)",
        description: "Compositor y director de orquesta alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/1904_Richard_Strauss.jpg/40px-1904_Richard_Strauss.jpg"
      },
       {
        value: "z/za/zane-grey-146763.html",
        label: "Zane Grey (1872-1939)",
        description: "novelista estadounidense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Zane_Grey_1895.jpg/40px-Zane_Grey_1895.jpg"
      },
       {
        value: "j/jo/jose-echegaray-127349.html",
        label: "José Echegaray (1832-1916)",
        description: "matemático, ingeniero, escritor y político español",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Jos%C3%A9_Echegaray_y_Eizaguirre.jpg/40px-Jos%C3%A9_Echegaray_y_Eizaguirre.jpg"
      },
       {
        value: "l/le/leopoldo-lugones-188875.html",
        label: "Leopoldo Lugones (1874-1938)",
        description: "poeta, ensayista, periodista y político de Argentina",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Leopoldo_Lugones.jpg/40px-Leopoldo_Lugones.jpg"
      },
       {
        value: "l/lo/louise-otto-peters-71507.html",
        label: "Louise Otto-Peters (1819-1895)",
        description: "escritora y activista",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Louise_Otto-Peters.jpg/40px-Louise_Otto-Peters.jpg"
      },
       {
        value: "j/jo/joseph-weydemeyer-216162.html",
        label: "Joseph Weydemeyer (1818-1866)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Weydemeyer.jpg/40px-Weydemeyer.jpg"
      },
       {
        value: "e/em/emily-bronte-80137.html",
        label: "Emily Brontë (1818-1848)",
        description: "poetisa y novelista inglesa",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Emily_Bront%C3%AB_cropped.jpg/40px-Emily_Bront%C3%AB_cropped.jpg"
      },
       {
        value: "s/se/sebastian-brunner-94692.html",
        label: "Sebastian Brunner (1814-1893)",
        description: "periodista austríaco",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Sebastian_Brunner_JS.jpg/40px-Sebastian_Brunner_JS.jpg"
      },
       {
        value: "a/al/alexander-duncker-72963.html",
        label: "Alexander Duncker (1813-1897)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Duncker%2C_Alexander_%281813-1897%29.jpg/40px-Duncker%2C_Alexander_%281813-1897%29.jpg"
      },
       {
        value: "a/ar/aristide-briand-179888.html",
        label: "Aristide Briand (1862-1932)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Aristide_Briand_2.jpg/40px-Aristide_Briand_2.jpg"
      },
       {
        value: "c/ch/charles-ferdinand-ramuz-123635.html",
        label: "Charles Ferdinand Ramuz (1878-1947)",
        description: "escritor suizo",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/CHF200_8_front.jpg/40px-CHF200_8_front.jpg"
      },
       {
        value: "j/jo/john-millington-synge-213447.html",
        label: "John Millington Synge (1871-1909)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/John_Millington_Synge.jpg/40px-John_Millington_Synge.jpg"
      },
       {
        value: "i/iv/ivan-cankar-15809.html",
        label: "Ivan Cankar (1876-1918)",
        description: "escritor esloveno",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Ivan_Cankar_1915.jpg/40px-Ivan_Cankar_1915.jpg"
      },
       {
        value: "i/ig/ignacio-ramirez-205389.html",
        label: "Ignacio Ramírez (1818-1879)",
        description: "escritor, poeta, periodista, abogado, y político liberal mexicano",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Ignacio_Ram%C3%ADrez.jpg/40px-Ignacio_Ram%C3%ADrez.jpg"
      },
       {
        value: "c/ca/carl-spitteler-226525.html",
        label: "Carl Spitteler (1845-1924)",
        description: "escritor suizo",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Carl_spitteler_1905.jpg/40px-Carl_spitteler_1905.jpg"
      },
       {
        value: "g/gu/guido-von-list-94040.html",
        label: "Guido von List (1848-1919)",
        description: "escritor austríaco",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Bundesarchiv_Bild_183-2007-0705-500%2C_Guido_von_List.jpg/40px-Bundesarchiv_Bild_183-2007-0705-500%2C_Guido_von_List.jpg"
      },
       {
        value: "e/em/emil-hacha-156502.html",
        label: "Emil Hácha (1872-1945)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Emil_H%C3%A1cha.jpg/40px-Emil_H%C3%A1cha.jpg"
      },
       {
        value: "j/ju/julio-verne-33977.html",
        label: "Julio Verne (1828-1905)",
        description: "escritor",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/F%C3%A9lix_Nadar_1820-1910_portraits_Jules_Verne.jpg/40px-F%C3%A9lix_Nadar_1820-1910_portraits_Jules_Verne.jpg"
      },
       {
        value: "h/ha/hans-pfitzner-57358.html",
        label: "Hans Pfitzner (1869-1949)",
        description: "compositor y director de orquesta",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Hans_Pfitzner_by_Wanda_von_Debschitz-Kunowski%2C_ca_1910.jpg/40px-Hans_Pfitzner_by_Wanda_von_Debschitz-Kunowski%2C_ca_1910.jpg"
      },
       {
        value: "w/wi/william-stern-57347.html",
        label: "William Stern (1871-1938)",
        description: "psicólogo y filósofo",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/WLStern.jpg/40px-WLStern.jpg"
      },
       {
        value: "a/ar/arrigo-boito-219491.html",
        label: "Arrigo Boito (1842-1918)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Arrigo_Boito.jpg/40px-Arrigo_Boito.jpg"
      },
       {
        value: "e/em/emmanuil-roidis-211350.html",
        label: "Emmanuil Roídis (1836-1904)",
        description: "escritor griego",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Royidis.jpg/40px-Royidis.jpg"
      },
       {
        value: "a/ar/artur-dinter-69833.html",
        label: "Artur Dinter (1876-1948)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Arthur_Dinter%2C_Bundesarchiv_Bild_119-1416jpg.jpg/40px-Arthur_Dinter%2C_Bundesarchiv_Bild_119-1416jpg.jpg"
      },
       {
        value: "c/ch/charles-reade-247473.html",
        label: "Charles Reade (1814-1884)",
        description: "escritor británico",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Portrait_of_Charles_Reade.jpg/40px-Portrait_of_Charles_Reade.jpg"
      },
       {
        value: "f/fe/felix-hausdorff-75856.html",
        label: "Felix Hausdorff (1868-1942)",
        description: "matemático alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Hausdorff_1913-1921.jpg/40px-Hausdorff_1913-1921.jpg"
      },
       {
        value: "a/al/alexander-mackenzie-128708.html",
        label: "Alexander Mackenzie (1822-1892)",
        description: "segundo primer ministro de Canda",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Alexander_MacKenzie_-_portrait.jpg/40px-Alexander_MacKenzie_-_portrait.jpg"
      },
       {
        value: "a/al/alfred-mahan-142988.html",
        label: "Alfred Mahan (1840-1914)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Alfred_thayer_mahan.jpg/40px-Alfred_thayer_mahan.jpg"
      },
       {
        value: "h/he/herwarth-walden-62661.html",
        label: "Herwarth Walden (1878-1941)",
        description: "artista alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Emil_Orlik_Portrait_of_Herwarth_Walden.jpg/40px-Emil_Orlik_Portrait_of_Herwarth_Walden.jpg"
      },
       {
        value: "f/fi/fitz-james-obrien-212510.html",
        label: "Fitz James O'Brien (1828-1862)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Fitz_James_O%27Brien_001.jpg/40px-Fitz_James_O%27Brien_001.jpg"
      },
       {
        value: "l/li/lily-braun-71372.html",
        label: "Lily Braun (1865-1916)",
        description: "escritora alemana",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Lily_Braun.jpg/40px-Lily_Braun.jpg"
      },
       {
        value: "m/ma/maria-bashkirtseff-255253.html",
        label: "Maria Bashkirtseff (1858-1884)",
        description: "Pintora francesa  nacida en el Imperio ruso",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/%D0%91%D0%B0%D1%88%D0%BA%D0%B8%D1%80%D1%86%D0%B5%D0%B2%D0%B0.jpg/40px-%D0%91%D0%B0%D1%88%D0%BA%D0%B8%D1%80%D1%86%D0%B5%D0%B2%D0%B0.jpg"
      },
       {
        value: "m/ma/maurice-maeterlinck-49747.html",
        label: "Maurice Maeterlinck (1862-1949)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Maurice_Maeterlinck_2.jpg/40px-Maurice_Maeterlinck_2.jpg"
      },
       {
        value: "n/ni/nishida-kitaro-45125.html",
        label: "Nishida Kitarô (1870-1945)",
        description: "filósofo japonés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Kitaro_Nishidain_in_Feb._1943.jpg/40px-Kitaro_Nishidain_in_Feb._1943.jpg"
      },
       {
        value: "r/ra/ralph-waldo-emerson-48226.html",
        label: "Ralph Waldo Emerson (1803-1882)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/RWEmerson.jpg/40px-RWEmerson.jpg"
      },
       {
        value: "f/fe/ferdinand-gregorovius-61425.html",
        label: "Ferdinand Gregorovius (1821-1891)",
        description: "historiador alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Gregorovius_ferdinand.jpg/40px-Gregorovius_ferdinand.jpg"
      },
       {
        value: "a/ad/adolf-brand-70900.html",
        label: "Adolf Brand (1874-1945)",
        description: "periodista de Alemania",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Adolf_Brand_ca._1930.jpg/40px-Adolf_Brand_ca._1930.jpg"
      },
       {
        value: "f/fr/frederick-douglass-215562.html",
        label: "Frederick Douglass (1818-1895)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Frederick_Douglass_portrait.jpg/40px-Frederick_Douglass_portrait.jpg"
      },
       {
        value: "d/da/daisetsu-teitaro-suzuki-44847.html",
        label: "Daisetsu Teitaro Suzuki (1870-1966)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Daisetsu_Teitar%C5%8D_Suzuki_photographed_by_Shigeru_Tamura.jpg/40px-Daisetsu_Teitar%C5%8D_Suzuki_photographed_by_Shigeru_Tamura.jpg"
      },
       {
        value: "l/le/lenin-1394.html",
        label: "Lenin (1870-1924)",
        description: "político ruso, teórico comunista, líder de la facción bolchevique del Partido Obrero Socialdemócrata de Rusia",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Lenin_in_Switzerland.jpg/40px-Lenin_in_Switzerland.jpg"
      },
       {
        value: "c/ca/carlo-tresca-133877.html",
        label: "Carlo Tresca (1879-1943)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Carlo-tresca-1910_%28cropped%29.jpg/40px-Carlo-tresca-1910_%28cropped%29.jpg"
      },
       {
        value: "f/fr/friedrich-clemens-gerke-64536.html",
        label: "Friedrich Clemens Gerke (1801-1888)",
        description: "periodista de Alemania",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Gerke.jpg/40px-Gerke.jpg"
      },
       {
        value: "r/ru/rudolf-rocker-213562.html",
        label: "Rudolf Rocker (1873-1958)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Rudolf_Rocker.jpg/40px-Rudolf_Rocker.jpg"
      },
       {
        value: "f/fl/florence-nightingale-37103.html",
        label: "Florence Nightingale (1820-1910)",
        description: "enfermera y activista social",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Florence_Nightingale.jpg/40px-Florence_Nightingale.jpg"
      },
       {
        value: "f/fr/franz-schreker-78528.html",
        label: "Franz Schreker (1878-1934)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Schreker_1912.jpg/40px-Schreker_1912.jpg"
      },
       {
        value: "g/ga/gaspard-felix-tournachon-40116.html",
        label: "Gaspard-Félix Tournachon (1820-1910)",
        description: "fotógrafo, periodista, ilustrador, caricaturista y aeronauta francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Nadar_selfportrait.jpg/40px-Nadar_selfportrait.jpg"
      },
       {
        value: "h/he/herman-melville-4985.html",
        label: "Herman Melville (1819-1891)",
        description: "novelista, cuentista, ensayista i poeta estadounidense",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Herman_Melville.jpg/40px-Herman_Melville.jpg"
      },
       {
        value: "f/fe/ferdinand-freiligrath-213719.html",
        label: "Ferdinand Freiligrath (1810-1876)",
        description: "poeta alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Ferdinand_Freiligrath_Hasenclever.jpg/40px-Ferdinand_Freiligrath_Hasenclever.jpg"
      },
       {
        value: "h/he/hermann-bahr-94034.html",
        label: "Hermann Bahr (1863-1934)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Hermann_Bahr_1891.jpg/40px-Hermann_Bahr_1891.jpg"
      },
       {
        value: "e/em/emile-augier-256991.html",
        label: "Émile Augier (1820-1889)",
        description: "escritor francés",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Augier.jpg/40px-Augier.jpg"
      },
       {
        value: "b/be/beatrix-potter-214565.html",
        label: "Beatrix Potter (1866-1943)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Beatrix_Potter_by_King_cropped.jpg/40px-Beatrix_Potter_by_King_cropped.jpg"
      },
       {
        value: "f/fr/fritz-mauthner-15953.html",
        label: "Fritz Mauthner (1849-1923)",
        description: "literato austro-húngaro",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Fritz_Mauthner_%281849-1923%29.jpg/40px-Fritz_Mauthner_%281849-1923%29.jpg"
      },
       {
        value: "w/wi/wilhelm-busch-109540.html",
        label: "Wilhelm Busch (1832-1908)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Wilhelm_Busch_1878.jpg/40px-Wilhelm_Busch_1878.jpg"
      },
       {
        value: "b/be/benedict-roezl-79112.html",
        label: "Benedict Roezl (1823-1885)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Benedict_Roezl.jpg/40px-Benedict_Roezl.jpg"
      },
       {
        value: "g/gi/giuseppe-garibaldi-539.html",
        label: "Giuseppe Garibaldi (1807-1882)",
        description: "militar y político de Italia",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Giuseppe_Garibaldi_%281866%29.jpg/40px-Giuseppe_Garibaldi_%281866%29.jpg"
      },
       {
        value: "e/em/emil-adolf-rossmassler-76238.html",
        label: "Emil Adolf Rossmässler (1806-1867)",
        description: "Sin descripción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Emil_Adolf_Rossmaessler.jpg/40px-Emil_Adolf_Rossmaessler.jpg"
      },
       {
        value: "i/io/iosif-stalin-855.html",
        label: "Iósif Stalin (1878-1953)",
        description: "Secretario General del Partido Comunista de la Unión Soviética",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Stalin_office.jpg/40px-Stalin_office.jpg"
      },
       {
        value: "j/jo/johanna-elberskirchen-121500.html",
        label: "Johanna Elberskirchen (1864-1943)",
        description: "escritora alemana",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Johanna_Elberskirchen_um_1905.jpg/40px-Johanna_Elberskirchen_um_1905.jpg"
      },
       {
        value: "j/ja/jakob-wassermann-60369.html",
        label: "Jakob Wassermann (1873-1934)",
        description: "novelista judío austriaco",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Jakob_Wassermann_1934.jpg/40px-Jakob_Wassermann_1934.jpg"
      },
       {
        value: "l/lu/ludwig-fulda-72283.html",
        label: "Ludwig Fulda (1862-1939)",
        description: "escritor alemán",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Ludwig_Fulda.jpg/40px-Ludwig_Fulda.jpg"
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
