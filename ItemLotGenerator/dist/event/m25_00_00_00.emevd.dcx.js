// ==EMEVD==
// @docs    bb-common.emedf.json
// @compress    DCX_DFLT_10000_44_9
// @game    Bloodborne
// @string    "クリア時間_通し\u0000クリア時間_1プレイ\u0000ボス_撃破\u0000PC情報_ボス撃破_王の死神\u0000ボス_戦闘開始\u0000ボス戦_撃破時間\u0000古城_ボス戦_大魔法持続時間\u0000古城_アイテム取得順_アイテムA\u0000古城_アイテム取得順_アイテムB\u0000古城_アイテム取得順_アイテムC\u0000古城_アイテム取得順_アイテムD\u0000PC情報_古城到達時\u0000N:\\SPRJ\\data\\Param\\event\\common.emevd\u0000\u0000\u0000"
// @linked    [304]
// @version    3.6.2
// ==/EMEVD==

// コンストラクタ
$Event(0, Default, function() {
    $InitializeEvent(25, 7000, 2500950, 2501950, 999, 12507800);
    $InitializeEvent(26, 7000, 2500951, 2501951, 999, 12507820);
    $InitializeEvent(27, 7000, 2500952, 2501952, 12501800, 12507840);
    $InitializeEvent(25, 7100, 72500200, 2501950);
    $InitializeEvent(26, 7100, 72500201, 2501951);
    $InitializeEvent(27, 7100, 72500202, 2501952);
    $InitializeEvent(25, 7200, 72500100, 2501950, 2102952);
    $InitializeEvent(26, 7200, 72500101, 2501951, 2102952);
    $InitializeEvent(27, 7200, 72500102, 2501952, 2102952);
    $InitializeEvent(25, 7300, 72102500, 2501950);
    $InitializeEvent(26, 7300, 72102501, 2501951);
    $InitializeEvent(27, 7300, 72102502, 2501952);
    $InitializeEvent(5, 9200, 2503900);
    $InitializeEvent(5, 9220, 2500710, 12504220, 12504221, 2500, 25, 0);
    $InitializeEvent(5, 9240, 2500710, 12504220, 12504221, 12504222, 25, 0);
    $InitializeEvent(5, 9260, 2500710, 12504220, 12504221, 12504222, 25, 0);
    $InitializeEvent(5, 9280, 2500710, 12504220, 12504221, 2500, 12504223, 25, 0);
    StartTimeMeasurement(2500000, 0, Disabled);
    StartTimeMeasurement(2500001, 18, Enabled);
    $InitializeEvent(0, 12500090);
    $InitializeEvent(0, 101);
    $InitializeEvent(0, 12500001);
    $InitializeEvent(0, 12500011);
    $InitializeEvent(0, 12500012);
    $InitializeEvent(0, 12500013);
    $InitializeEvent(0, 12500014);
    $InitializeEvent(0, 12500015);
    $InitializeEvent(0, 12500016);
    $InitializeEvent(0, 12500018);
    $InitializeEvent(0, 12500019);
    $InitializeEvent(0, 12500020);
    $InitializeEvent(0, 12500021);
    $InitializeEvent(0, 12500052, 2500790, 72500358);
    $InitializeEvent(0, 12500051);
    $InitializeEvent(0, 12500053, 2500790, 1349, 72500358);
    $InitializeEvent(0, 12500054, 2500790, 1350);
    $InitializeEvent(0, 12500072, 2501011, OFF);
    $InitializeEvent(1, 12500072, 2501012, ON);
    $InitializeEvent(0, 12500075);
    $InitializeEvent(0, 12500076);
    $InitializeEvent(0, 12500077);
    RegisterLadder(12500992, 12500993, 2501502);
    $InitializeEvent(0, 12500620, 2500115, 7000, 7003, 12500898);
    $InitializeEvent(1, 12500620, 2500116, 7000, 7003, 12500898);
    $InitializeEvent(2, 12500620, 2500118, 7000, 7003, 12500898);
    $InitializeEvent(3, 12500620, 2500119, 7010, 7013, 12500898);
    $InitializeEvent(4, 12500620, 2500126, 7000, 7003, 12500898);
    $InitializeEvent(0, 12500740, 2500115);
    $InitializeEvent(1, 12500740, 2500116);
    $InitializeEvent(2, 12500740, 2500118);
    $InitializeEvent(3, 12500740, 2500119);
    $InitializeEvent(4, 12500740, 2500126);
    $InitializeEvent(0, 12500630, 2500127, 7000, 7001);
    $InitializeEvent(1, 12500630, 2500128, 7010, 7011);
    $InitializeEvent(2, 12500630, 2500129, 7000, 7001);
    $InitializeEvent(3, 12500630, 2500132, 7010, 7011);
    $InitializeEvent(4, 12500630, 2500137, 7010, 7011);
    $InitializeEvent(5, 12500630, 2500138, 7000, 7001);
    $InitializeEvent(0, 12500454, 2500172, 7023, 7013, 2502020, -1, 122008, 122009, 150);
    $InitializeEvent(1, 12500454, 2500173, 7010, 7017, 2502021, -1, 122008, 122009, 150);
    $InitializeEvent(2, 12500454, 2500182, 7028, 7018, 2502024, -1, 122008, 122009, 150);
    $InitializeEvent(3, 12500454, 2500183, 7029, 7019, 2502024, -1, 122008, 122009, 150);
    $InitializeEvent(0, 12500458, 2500160, 7015, 2502022, 100, 2502023, 7025);
    $InitializeEvent(1, 12500458, 2500161, 7016, 2502023, 100, 2502022, 7026);
    $InitializeEvent(0, 12500640, 2500200);
    $InitializeEvent(1, 12500640, 2500201);
    $InitializeEvent(2, 12500640, 2500202);
    $InitializeEvent(3, 12500640, 2500203);
    $InitializeEvent(4, 12500640, 2500204);
    $InitializeEvent(5, 12500640, 2500205);
    $InitializeEvent(6, 12500640, 2500207);
    $InitializeEvent(7, 12500640, 2500208);
    $InitializeEvent(8, 12500640, 2500209);
    $InitializeEvent(9, 12500640, 2500210);
    $InitializeEvent(10, 12500640, 2500211);
    $InitializeEvent(11, 12500640, 2500212);
    $InitializeEvent(12, 12500640, 2500213);
    $InitializeEvent(13, 12500640, 2500217);
    $InitializeEvent(14, 12500640, 2500218);
    $InitializeEvent(15, 12500640, 2500219);
    $InitializeEvent(16, 12500640, 2500220);
    $InitializeEvent(17, 12500640, 2500222);
    $InitializeEvent(18, 12500640, 2500223);
    $InitializeEvent(19, 12500640, 2500224);
    $InitializeEvent(20, 12500640, 2500230);
    $InitializeEvent(21, 12500640, 2500231);
    $InitializeEvent(22, 12500640, 2500232);
    $InitializeEvent(23, 12500640, 2500233);
    $InitializeEvent(24, 12500640, 2500234);
    $InitializeEvent(25, 12500640, 2500236);
    $InitializeEvent(26, 12500640, 2500237);
    $InitializeEvent(27, 12500640, 2500238);
    $InitializeEvent(28, 12500640, 2500240);
    $InitializeEvent(29, 12500640, 2500241);
    $InitializeEvent(30, 12500640, 2500243);
    $InitializeEvent(31, 12500640, 2500245);
    $InitializeEvent(32, 12500640, 2500246);
    $InitializeEvent(33, 12500640, 2500248);
    $InitializeEvent(34, 12500640, 2500249);
    $InitializeEvent(35, 12500640, 2500250);
    $InitializeEvent(36, 12500640, 2500251);
    $InitializeEvent(37, 12500640, 2500252);
    $InitializeEvent(38, 12500640, 2500254);
    $InitializeEvent(39, 12500640, 2500255);
    $InitializeEvent(40, 12500640, 2500256);
    $InitializeEvent(41, 12500640, 2500272);
    $InitializeEvent(42, 12500640, 2500273);
    $InitializeEvent(43, 12500640, 2500274);
    $InitializeEvent(44, 12500640, 2500275);
    $InitializeEvent(45, 12500640, 2500276);
    $InitializeEvent(0, 12500078);
    $InitializeEvent(0, 12500896, 2502102);
    $InitializeEvent(0, 12500898, 52500200, 52500210, 52500220, 52500230);
    $InitializeEvent(0, 12500900, 2500200, 12500898, 12505200);
    $InitializeEvent(1, 12500900, 2500201, 12500898, 12505201);
    $InitializeEvent(2, 12500900, 2500202, 12500898, 12505202);
    $InitializeEvent(3, 12500900, 2500203, 12500898, 12505203);
    $InitializeEvent(4, 12500900, 2500204, 12500898, 12505204);
    $InitializeEvent(5, 12500900, 2500205, 12500898, 12505205);
    $InitializeEvent(6, 12500900, 2500207, 12500898, 12505207);
    $InitializeEvent(7, 12500900, 2500208, 12500898, 12505208);
    $InitializeEvent(8, 12500900, 2500209, 12500898, 12505209);
    $InitializeEvent(9, 12500900, 2500210, 12500898, 12505210);
    $InitializeEvent(10, 12500900, 2500211, 12500898, 12505211);
    $InitializeEvent(11, 12500900, 2500212, 12500898, 12505212);
    $InitializeEvent(12, 12500900, 2500213, 12500898, 12505213);
    $InitializeEvent(13, 12500900, 2500217, 12500896, 12505217);
    $InitializeEvent(14, 12500900, 2500218, 12500896, 12505218);
    $InitializeEvent(15, 12500900, 2500219, 12500896, 12505219);
    $InitializeEvent(16, 12500900, 2500220, 12500896, 12505220);
    $InitializeEvent(17, 12500900, 2500222, 12500896, 12505222);
    $InitializeEvent(18, 12500900, 2500223, 12500896, 12505223);
    $InitializeEvent(19, 12500900, 2500224, 12500896, 12505224);
    $InitializeEvent(20, 12500900, 2500230, 12500078, 12505230);
    $InitializeEvent(21, 12500900, 2500231, 12500078, 12505231);
    $InitializeEvent(22, 12500900, 2500232, 12500078, 12505232);
    $InitializeEvent(23, 12500900, 2500233, 12500078, 12505233);
    $InitializeEvent(24, 12500900, 2500234, 12500078, 12505234);
    $InitializeEvent(25, 12500900, 2500236, 12500078, 12505236);
    $InitializeEvent(26, 12500900, 2500237, 12500078, 12505237);
    $InitializeEvent(27, 12500900, 2500238, 12500078, 12505238);
    $InitializeEvent(28, 12500900, 2500240, 12500078, 12505240);
    $InitializeEvent(29, 12500900, 2500241, 12500078, 12505241);
    $InitializeEvent(30, 12500900, 2500243, 12500078, 12505243);
    $InitializeEvent(31, 12500900, 2500245, 12500078, 12505245);
    $InitializeEvent(32, 12500900, 2500246, 12500078, 12505246);
    $InitializeEvent(33, 12500900, 2500248, 12500078, 12505248);
    $InitializeEvent(34, 12500900, 2500249, 12500078, 12505249);
    $InitializeEvent(35, 12500900, 2500250, 12500078, 12505250);
    $InitializeEvent(36, 12500900, 2500251, 12500078, 12505251);
    $InitializeEvent(37, 12500900, 2500252, 12500898, 12505252);
    $InitializeEvent(38, 12500900, 2500254, 12500898, 12505254);
    $InitializeEvent(39, 12500900, 2500255, 12500898, 12505255);
    $InitializeEvent(40, 12500900, 2500256, 12500898, 12505256);
    $InitializeEvent(41, 12500900, 2500272, 12500078, 12505272);
    $InitializeEvent(42, 12500900, 2500273, 12500078, 12505273);
    $InitializeEvent(43, 12500900, 2500274, 12500078, 12505274);
    $InitializeEvent(44, 12500900, 2500275, 12500078, 12505275);
    $InitializeEvent(45, 12500900, 2500276, 12500078, 12505276);
    $InitializeEvent(0, 12505000, 2500200, 12505200);
    $InitializeEvent(1, 12505000, 2500201, 12505201);
    $InitializeEvent(2, 12505000, 2500202, 12505202);
    $InitializeEvent(3, 12505000, 2500203, 12505203);
    $InitializeEvent(4, 12505000, 2500204, 12505204);
    $InitializeEvent(5, 12505000, 2500205, 12505205);
    $InitializeEvent(6, 12505000, 2500207, 12505207);
    $InitializeEvent(7, 12505000, 2500208, 12505208);
    $InitializeEvent(8, 12505000, 2500209, 12505209);
    $InitializeEvent(9, 12505000, 2500210, 12505210);
    $InitializeEvent(10, 12505000, 2500211, 12505211);
    $InitializeEvent(11, 12505000, 2500212, 12505212);
    $InitializeEvent(12, 12505000, 2500213, 12505213);
    $InitializeEvent(13, 12505000, 2500217, 12505217);
    $InitializeEvent(14, 12505000, 2500218, 12505218);
    $InitializeEvent(15, 12505000, 2500219, 12505219);
    $InitializeEvent(16, 12505000, 2500220, 12505220);
    $InitializeEvent(17, 12505000, 2500222, 12505222);
    $InitializeEvent(18, 12505000, 2500223, 12505223);
    $InitializeEvent(19, 12505000, 2500224, 12505224);
    $InitializeEvent(20, 12505000, 2500230, 12505230);
    $InitializeEvent(21, 12505000, 2500231, 12505231);
    $InitializeEvent(22, 12505000, 2500232, 12505232);
    $InitializeEvent(23, 12505000, 2500233, 12505233);
    $InitializeEvent(24, 12505000, 2500234, 12505234);
    $InitializeEvent(25, 12505000, 2500236, 12505236);
    $InitializeEvent(26, 12505000, 2500237, 12505237);
    $InitializeEvent(27, 12505000, 2500238, 12505238);
    $InitializeEvent(28, 12505000, 2500240, 12505240);
    $InitializeEvent(29, 12505000, 2500241, 12505241);
    $InitializeEvent(30, 12505000, 2500243, 12505243);
    $InitializeEvent(31, 12505000, 2500245, 12505245);
    $InitializeEvent(32, 12505000, 2500246, 12505246);
    $InitializeEvent(33, 12505000, 2500248, 12505248);
    $InitializeEvent(34, 12505000, 2500249, 12505249);
    $InitializeEvent(35, 12505000, 2500250, 12505250);
    $InitializeEvent(36, 12505000, 2500251, 12505251);
    $InitializeEvent(37, 12505000, 2500252, 12505252);
    $InitializeEvent(38, 12505000, 2500254, 12505254);
    $InitializeEvent(39, 12505000, 2500255, 12505255);
    $InitializeEvent(40, 12505000, 2500256, 12505256);
    $InitializeEvent(41, 12505000, 2500272, 12505272);
    $InitializeEvent(42, 12505000, 2500273, 12505273);
    $InitializeEvent(43, 12505000, 2500274, 12505274);
    $InitializeEvent(44, 12505000, 2500275, 12505275);
    $InitializeEvent(45, 12505000, 2500276, 12505276);
    $InitializeEvent(0, 12505300, 12505200);
    $InitializeEvent(1, 12505300, 12505201);
    $InitializeEvent(2, 12505300, 12505202);
    $InitializeEvent(3, 12505300, 12505203);
    $InitializeEvent(4, 12505300, 12505204);
    $InitializeEvent(5, 12505300, 12505205);
    $InitializeEvent(6, 12505300, 12505207);
    $InitializeEvent(7, 12505300, 12505208);
    $InitializeEvent(8, 12505300, 12505209);
    $InitializeEvent(9, 12505300, 12505210);
    $InitializeEvent(10, 12505300, 12505211);
    $InitializeEvent(11, 12505300, 12505212);
    $InitializeEvent(12, 12505300, 12505213);
    $InitializeEvent(13, 12505300, 12505217);
    $InitializeEvent(14, 12505300, 12505218);
    $InitializeEvent(15, 12505300, 12505219);
    $InitializeEvent(16, 12505300, 12505220);
    $InitializeEvent(17, 12505300, 12505222);
    $InitializeEvent(18, 12505300, 12505223);
    $InitializeEvent(19, 12505300, 12505224);
    $InitializeEvent(20, 12505300, 12505230);
    $InitializeEvent(21, 12505300, 12505231);
    $InitializeEvent(22, 12505300, 12505232);
    $InitializeEvent(23, 12505300, 12505233);
    $InitializeEvent(24, 12505300, 12505234);
    $InitializeEvent(25, 12505300, 12505236);
    $InitializeEvent(26, 12505300, 12505237);
    $InitializeEvent(27, 12505300, 12505238);
    $InitializeEvent(28, 12505300, 12505240);
    $InitializeEvent(29, 12505300, 12505241);
    $InitializeEvent(30, 12505300, 12505243);
    $InitializeEvent(31, 12505300, 12505245);
    $InitializeEvent(32, 12505300, 12505246);
    $InitializeEvent(33, 12505300, 12505248);
    $InitializeEvent(34, 12505300, 12505249);
    $InitializeEvent(35, 12505300, 12505250);
    $InitializeEvent(36, 12505300, 12505251);
    $InitializeEvent(37, 12505300, 12505252);
    $InitializeEvent(38, 12505300, 12505254);
    $InitializeEvent(39, 12505300, 12505255);
    $InitializeEvent(40, 12505300, 12505256);
    $InitializeEvent(41, 12505300, 12505272);
    $InitializeEvent(42, 12505300, 12505273);
    $InitializeEvent(43, 12505300, 12505274);
    $InitializeEvent(44, 12505300, 12505275);
    $InitializeEvent(45, 12505300, 12505276);
    $InitializeEvent(0, 12501000, 2500200);
    $InitializeEvent(1, 12501000, 2500201);
    $InitializeEvent(2, 12501000, 2500202);
    $InitializeEvent(3, 12501000, 2500203);
    $InitializeEvent(4, 12501000, 2500204);
    $InitializeEvent(5, 12501000, 2500205);
    $InitializeEvent(6, 12501000, 2500207);
    $InitializeEvent(7, 12501000, 2500208);
    $InitializeEvent(8, 12501000, 2500209);
    $InitializeEvent(9, 12501000, 2500210);
    $InitializeEvent(10, 12501000, 2500211);
    $InitializeEvent(11, 12501000, 2500212);
    $InitializeEvent(12, 12501000, 2500213);
    $InitializeEvent(13, 12501000, 2500217);
    $InitializeEvent(14, 12501000, 2500218);
    $InitializeEvent(15, 12501000, 2500219);
    $InitializeEvent(16, 12501000, 2500220);
    $InitializeEvent(17, 12501000, 2500222);
    $InitializeEvent(18, 12501000, 2500223);
    $InitializeEvent(19, 12501000, 2500224);
    $InitializeEvent(20, 12501000, 2500230);
    $InitializeEvent(21, 12501000, 2500231);
    $InitializeEvent(22, 12501000, 2500232);
    $InitializeEvent(23, 12501000, 2500233);
    $InitializeEvent(24, 12501000, 2500234);
    $InitializeEvent(25, 12501000, 2500236);
    $InitializeEvent(26, 12501000, 2500237);
    $InitializeEvent(27, 12501000, 2500238);
    $InitializeEvent(28, 12501000, 2500240);
    $InitializeEvent(29, 12501000, 2500243);
    $InitializeEvent(32, 12501000, 2500248);
    $InitializeEvent(33, 12501000, 2500249);
    $InitializeEvent(34, 12501000, 2500250);
    $InitializeEvent(35, 12501000, 2500251);
    $InitializeEvent(36, 12501000, 2500252);
    $InitializeEvent(37, 12501000, 2500254);
    $InitializeEvent(38, 12501000, 2500255);
    $InitializeEvent(39, 12501000, 2500256);
    $InitializeEvent(40, 12501000, 2500272);
    $InitializeEvent(41, 12501000, 2500273);
    $InitializeEvent(42, 12501000, 2500274);
    $InitializeEvent(43, 12501000, 2500275);
    $InitializeEvent(0, 12500030);
    $InitializeEvent(0, 12500031, 12501200, 2501200);
    $InitializeEvent(1, 12500031, 12501204, 2501204);
    $InitializeEvent(2, 12500031, 12501205, 2501205);
    $InitializeEvent(3, 12500031, 12501208, 2501208);
    $InitializeEvent(4, 12500031, 12501209, 2501209);
    $InitializeEvent(5, 12500031, 12501210, 2501210);
    $InitializeEvent(6, 12500031, 12501211, 2501211);
    $InitializeEvent(0, 12500200, 12500250, 12500259);
    $InitializeEvent(1, 12500200, 12500270, 12500279);
    $InitializeEvent(0, 12500206, 2500114, 12500250, 12500270);
    $InitializeEvent(0, 12500220, 2500114, 12500270);
    $InitializeEvent(1, 12500206, 2500115, 12500251, 12500271);
    $InitializeEvent(1, 12500220, 2500115, 12500271);
    $InitializeEvent(2, 12500206, 2500116, 12500252, 12500272);
    $InitializeEvent(2, 12500220, 2500116, 12500272);
    $InitializeEvent(4, 12500206, 2500118, 12500254, 12500274);
    $InitializeEvent(4, 12500220, 2500118, 12500274);
    $InitializeEvent(5, 12500206, 2500122, 12500255, 12500275);
    $InitializeEvent(5, 12500220, 2500122, 12500275);
    $InitializeEvent(6, 12500206, 2500123, 12500256, 12500276);
    $InitializeEvent(6, 12500220, 2500123, 12500276);
    $InitializeEvent(7, 12500206, 2500124, 12500257, 12500277);
    $InitializeEvent(7, 12500220, 2500124, 12500277);
    $InitializeEvent(8, 12500206, 2500132, 12500259, 12500279);
    $InitializeEvent(8, 12500220, 2500132, 12500279);
    $InitializeEvent(0, 12500520, 2500211, 7000, 7001, 3, 3);
    $InitializeEvent(1, 12500520, 2500208, 7000, 7001, 3, 3);
    $InitializeEvent(2, 12500520, 2500204, 7002, 0, 5, 15);
    $InitializeEvent(3, 12500520, 2500200, 7002, 0, 5, 15);
    $InitializeEvent(4, 12500520, 2500255, 7002, 0, 5, 15);
    $InitializeEvent(5, 12500520, 2500207, 7000, 7001, 3, 3);
    $InitializeEvent(6, 12500520, 2500217, 7002, 0, 5, 15);
    $InitializeEvent(7, 12500520, 2500220, 7002, 0, 5, 15);
    $InitializeEvent(8, 12500520, 2500224, 7000, 7001, 3, 3);
    $InitializeEvent(9, 12500520, 2500230, 7002, 0, 5, 15);
    $InitializeEvent(10, 12500520, 2500231, 7002, 0, 5, 15);
    $InitializeEvent(11, 12500520, 2500238, 7002, 0, 5, 15);
    $InitializeEvent(12, 12500520, 2500236, 7002, 0, 5, 15);
    $InitializeEvent(13, 12500520, 2500272, 7002, 0, 5, 15);
    $InitializeEvent(14, 12500520, 2500275, 7000, 7001, 3, 3);
    $InitializeEvent(15, 12500520, 2500274, 7002, 0, 5, 15);
    $InitializeEvent(16, 12500520, 2500250, 7002, 0, 5, 15);
    $InitializeEvent(17, 12500520, 2500249, 7002, 0, 5, 15);
    $InitializeEvent(18, 12500520, 2500243, 7000, 7001, 3, 3);
    $InitializeEvent(19, 12500520, 2500251, 7000, 7001, 3, 3);
    $InitializeEvent(20, 12500520, 2500245, 7002, 0, 5, 15);
    $InitializeEvent(21, 12500520, 2500104, 7001, 7007, 10, 10);
    $InitializeEvent(22, 12500520, 2500105, 7001, 7007, 10, 10);
    $InitializeEvent(23, 12500520, 2500106, 7002, 0, 5, 5);
    $InitializeEvent(0, 12500100, 2500280, 8);
    $InitializeEvent(1, 12500100, 2500281, 16);
    $InitializeEvent(2, 12500100, 2500282, 9);
    $InitializeEvent(3, 12500100, 2500284, 8);
    $InitializeEvent(4, 12500100, 2500285, 7);
    $InitializeEvent(5, 12500100, 2500292, 8);
    $InitializeEvent(6, 12500100, 2500293, 7);
    $InitializeEvent(7, 12500100, 2500294, 9);
    $InitializeEvent(0, 12500070, 2501020, 2502030);
    $InitializeEvent(1, 12500070, 2501207, 2502031);
    $InitializeEvent(0, 12505100, 2500101, 7020, 2502050, 2502030);
    $InitializeEvent(1, 12505100, 2500102, 7021, 2502051, 2502031);
    $InitializeEvent(2, 12505100, 2500103, 7022, 2502052, 2502032);
    $InitializeEvent(0, 12500285, 2500352, 18, 2500308);
    $InitializeEvent(1, 12500285, 2500308, 50, 0);
    $InitializeEvent(2, 12500285, 2500353, 22, 2500352);
    $InitializeEvent(3, 12500285, 2500354, 18, 2500353);
    $InitializeEvent(0, 12500235, 2500210, 12500898);
    $InitializeEvent(0, 12500390, 2500180);
    $InitializeEvent(0, 12500435, 2500133, 2502150);
    $InitializeEvent(0, 12500440, 2500134, 2500135);
    $InitializeEvent(0, 12500501);
    $InitializeEvent(0, 12500502, 2500136, 52500190, 2502409);
    $InitializeEvent(0, 12500400, 2500400, 52500990);
    $InitializeEvent(1, 12500400, 2500401, 52500980);
    $InitializeEvent(2, 12500400, 2500402, 52500970);
    $InitializeEvent(3, 12500400, 2500403, 52500960);
    $InitializeEvent(4, 12500400, 2500404, 52500950);
    $InitializeEvent(0, 12504812);
    $InitializeEvent(0, 12504813);
    $InitializeEvent(0, 12501800);
    $InitializeEvent(0, 12501801);
    $InitializeEvent(0, 12501802);
    $InitializeEvent(0, 12504810);
    $InitializeEvent(0, 12504811);
    $InitializeEvent(0, 12504802);
    $InitializeEvent(0, 12504803);
    $InitializeEvent(0, 12504804);
    $InitializeEvent(0, 12504805);
    $InitializeEvent(0, 12504806);
    $InitializeEvent(0, 12504806);
    $InitializeEvent(0, 12504807);
    $InitializeEvent(0, 12504808);
    $InitializeEvent(0, 12501804);
    $InitializeEvent(0, 12500810);
    $InitializeEvent(0, 12501803);
    $InitializeEvent(0, 12500600);
});

// プリコンストラクタ
$Event(50, Default, function() {
    $InitializeEvent(0, 12500010);
    $InitializeEvent(0, 12500050);
    SetMapSoundState(2503900, Disabled);
    $InitializeEvent(0, 12500000);
});

// 古城_初回到達ポリ劇
$Event(12500000, Default, function() {
    EndIf(ThisEvent());
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    SetEventFlag(9180, ON);
    WaitFixedTimeFrames(1);
    SetEventFlag(12200134, ON);
    PlayCutsceneToPlayer(25000000, CutscenePlayMode.SkippableWithFadeOut, 10000);
    WaitFixedTimeFrames(1);
    AwardAchievement(10);
    SetEventFlag(9180, OFF);
});

// 女王の間に入ってSAN値
$Event(12500001, Default, function() {
    EndIf(ThisEvent());
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    WaitFor(InArea(10000, 2502500));
    $InitializeEvent(0, 9350, 2);
});

// 穢れた血族の女王_初期化
$Event(12500010, Default, function() {
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        if (EventFlag(1041)) {
            BatchSetEventFlags(1040, 1059, OFF);
            SetEventFlag(1042, ON);
        }
L1:
        if (EventFlag(1042) && EventFlag(72500328)) {
            SetEventFlag(72500328, OFF);
            BatchSetEventFlags(1040, 1059, OFF);
            SetEventFlag(1040, ON);
        }
L2:
        if (EventFlag(1040) && (EventFlag(1347) || EventFlag(1348) || EventFlag(1349))) {
            BatchSetEventFlags(1040, 1059, OFF);
            SetEventFlag(1042, ON);
        }
L3:
        SetEventFlag(72500320, OFF);
        SetEventFlag(72500312, OFF);
        SetEventFlag(72500312, OFF);
    }
L0:
    SetCharacterMaphits(2500600, true);
    SetCharacterImmortality(2500600, Enabled);
    SetCharacterHPBarDisplay(2500600, Disabled);
    SetDistanceLimitForConversationStateProcessing(2500600, 60);
    GotoIf(L0, EventFlag(1040));
    GotoIf(L0, EventFlag(1041));
    GotoIf(L1, EventFlag(1042));
L0:
    SetCharacterBackreadState(2500600, false);
    DeactivateObject(2501015, Enabled);
    DeactivateObject(2501016, Disabled);
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    ForceAnimationPlayback(2500600, 103010, true, false, true);
    EndEvent();
L1:
    SetCharacterBackreadState(2500600, true);
    DeactivateObject(2501015, Disabled);
    DeactivateObject(2501016, Enabled);
    EndEvent();
});

// 穢れた血族の女王_跪きエリア判定
$Event(12500011, Default, function() {
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    SetEventFlag(72500330, OFF);
    WaitFor(InArea(10000, 2502501));
    SetEventFlag(72500330, ON);
    WaitFor(!InArea(10000, 2502501));
    SetEventFlag(72500330, OFF);
    RestartEvent();
});

// 穢れた血族の女王_PCが跪く
$Event(12500012, Default, function() {
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    SetEventFlag(72500329, OFF);
    WaitFor(EventFlag(72500329));
    RotateCharacter(10000, 2500600, 101260, false);
    WaitFor(!EventFlag(72500329));
    ForceAnimationPlayback(10000, 101262, false, false, false);
    RestartEvent();
});

// 穢れた血族の女王_血を捧げるアニメ
$Event(12500013, Default, function() {
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    SetEventFlag(72500339, OFF);
    WaitFor(EventFlag(72500339));
    ForceAnimationPlayback(2500600, 103013, false, false, false);
    ForceAnimationPlayback(10000, 101263, false, false, false);
    WaitFixedTimeFrames(180);
    SetEventFlag(72500339, OFF);
    RestartEvent();
});

// 穢れた血族の女王_血を与えるアニメ
$Event(12500014, Default, function() {
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    SetEventFlag(72500337, OFF);
    WaitFor(EventFlag(72500337));
    ForceAnimationPlayback(2500600, 103013, false, false, false);
    ForceAnimationPlayback(10000, 101263, false, false, false);
    WaitFixedTimeFrames(180);
    SetEventFlag(72500337, OFF);
    RestartEvent();
});

// 穢れた血族の女王_被ダメージ
$Event(12500015, Default, function() {
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    WaitFor(HasDamageType(2500600, 10000, DamageType.Unspecified));
    IncrementEventValue(72500304, 6, 50);
    if (EventValue(72500304, 6) < 50) {
        ForceAnimationPlayback(2500600, 103014, false, false, false);
        RestartEvent();
    }
L0:
    ForceAnimationPlayback(2500600, 103011, false, false, false);
    BatchSetEventFlags(1040, 1059, OFF);
    SetEventFlag(1041, ON);
    SaveRequest(0);
    RestartEvent();
});

// 穢れた血族の女王_被ダメージから待機に戻す
$Event(12500016, Default, function() {
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    WaitFor(CharacterHasSpEffect(2500600, 151) && EventValue(72500304, 6) < 50);
    ForceAnimationPlayback(2500600, 103010, false, false, false);
    WaitFixedTimeFrames(5);
    RestartEvent();
});

// 穢れた血族の女王_肉塊を見たらSAN値上昇
$Event(12500018, Default, function() {
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    EndIf(ThisEvent());
    areaFlag = InArea(10000, 2502500) && EventFlag(1042);
    $InitializeEvent(0, 9350, 3);
});

// 穢れた血族の女王_跪いたカウント
$Event(12500019, Default, function() {
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    SetEventFlag(72500333, OFF);
    WaitFor(EventFlag(72500333));
    SetEventFlag(72500333, OFF);
    EndIf(!EventFlag(72500332));
    IncrementEventValue(72500317, 3, 5);
    if (EventValue(72500317, 3) >= 5) {
        SetEventFlag(72500335, ON);
    }
});

// 穢れた血族の女王_肉塊取得
$Event(12500020, Default, function() {
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    WaitFor(EventFlag(1042));
    WaitFor(ActionButtonInArea(2500020, 2501016));
    if (PlayerHasItem(ItemType.Goods, 4305)) {
        DisplayGenericDialog(10010150, PromptType.OKCANCEL, NumberofOptions.OneButton, -1, 3);
        RestartEvent();
    }
L0:
    ForceAnimationPlayback(10000, 101140, false, false, false);
    SetEventFlag(9043, ON);
    RestartEvent();
});

// 穢れた血族の女王_呼びかけ会話領域判定
$Event(12500021, Default, function() {
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    SetEventFlag(72500331, OFF);
    WaitFor(InArea(10000, 2502500));
    SetEventFlag(72500331, ON);
    WaitFor(!InArea(10000, 2502500));
    SetEventFlag(72500331, OFF);
    RestartEvent();
});

// PC_白い息
$Event(12500030, Default, function() {
    WaitFor(PlayerInMap(25, 0));
    SetSpEffect(10000, 4650, false);
});

// 宝箱_開放
$Event(12500031, Restart, function(objactEventFlag, objEntityId) {
    if (ThisEventSlot()) {
        ReproduceObjectAnimation(objEntityId, 0);
        SetObjactState(objEntityId, -1, Disabled);
        SetObjectTreasureState(objEntityId, Enabled);
        EndEvent();
    }
L0:
    WaitFor(ObjActEventFlag(objactEventFlag));
    WaitFixedTimeFrames(10);
    SetObjectTreasureState(objEntityId, Enabled);
});

// 血族狩り_初期化
$Event(12500050, Default, function() {
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        if (EventFlag(1347)) {
            BatchSetEventFlags(1340, 1359, OFF);
            SetEventFlag(1348, ON);
        }
L1:
        if (EventFlag(1351) && EventFlag(72500359)) {
            BatchSetEventFlags(1340, 1359, OFF);
            SetEventFlag(1343, ON);
        }
L2:
        NoOp();
    }
L0:
    GotoIf(L0, EventFlag(1348));
    GotoIf(L2, EventFlag(1349));
    GotoIf(L3, EventFlag(1350));
    if (!EventFlag(1351)) {
        SetCharacterBackreadState(2500790, true);
        EndEvent();
L0:
        SetCharacterBackreadState(2500790, false);
        EndIf(HasMultiplayerState(MultiplayerState.Client));
        ForceAnimationPlayback(2500790, 103021, false, false, false);
        SetDistanceLimitForConversationStateProcessing(2500790, 60);
        EndEvent();
    }
L1:
    SetCharacterBackreadState(2500790, false);
    EndEvent();
L2:
    SetCharacterBackreadState(2500790, false);
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    SetCharacterTeamType(2500790, TeamType.HostileNPC);
    EndEvent();
L3:
    SetCharacterBackreadState(2500790, true);
    ChangeCharacterEnableState(2500790, Disabled);
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    ForceCharacterTreasure(2500790);
    EndEvent();
});

// 血族狩り_話しかけ済み状態へ
$Event(12500051, Default, function() {
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    WaitFixedTimeFrames(10);
    WaitFor(EventFlag(72500357) && EventFlag(1348));
    SetEventFlag(72500357, OFF);
    SetDistanceLimitForConversationStateProcessing(2500790, 17);
    ForceAnimationPlayback(2500790, 103022, false, false, false);
    BatchSetEventFlags(1340, 1359, OFF);
    SetEventFlag(1351, ON);
    SaveRequest(0);
});

// 血族狩り_攻撃回数カウントイベント
$Event(12500052, Default, function(entityId, eventFlagId) {
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    SetEventFlag(eventFlagId, OFF);
    WaitFor(HasDamageType(entityId, 10000, DamageType.Unspecified));
    WaitFixedTimeFrames(1);
    WaitFor(HasDamageType(entityId, 10000, DamageType.Unspecified));
    WaitFixedTimeFrames(1);
    WaitFor(HasDamageType(entityId, 10000, DamageType.Unspecified));
    WaitFixedTimeFrames(1);
    SetEventFlag(eventFlagId, ON);
});

// 血族狩り_敵対
$Event(12500053, Default, function(chrEntityId, eventFlagId, eventFlagId2) {
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    WaitFor((EventFlag(eventFlagId2) || HPRatio(2500790) <= 0.9) && HPRatio(2500790) != 0);
    SetEventFlag(eventFlagId2, OFF);
    SetCharacterTeamType(chrEntityId, TeamType.HostileNPC);
    BatchSetEventFlags(1340, 1359, OFF);
    SetEventFlag(eventFlagId, ON);
    SaveRequest(0);
});

// 血族狩り_死亡
$Event(12500054, Default, function(chrEntityId, eventFlagId) {
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    EndIf(ThisEventSlot());
    WaitFor(CharacterDead(chrEntityId));
    BatchSetEventFlags(1340, 1359, OFF);
    SetEventFlag(eventFlagId, ON);
    SaveRequest(0);
});

// 城門_開放
$Event(12500070, Default, function(objEntityId, areaEntityId) {
    if (ThisEventSlot()) {
        ReproduceObjectAnimation(objEntityId, 0);
        NotifySoundDampeningOfDoorEvent(objEntityId, DoorState.DoorOpening);
        EndEvent();
    }
L0:
    WaitFor(InArea(10000, areaEntityId));
    ForceAnimationPlayback(objEntityId, 0, false, true, false);
    NotifySoundDampeningOfDoorEvent(objEntityId, DoorState.DoorOpening);
});

// 古城_SCエレベータレバー_操作不可msg_XX
$Event(12500072, Default, function(areaEntityId, desiredFlagState) {
    SetNetworkSyncState(Disabled);
    WaitFor(
        (!AnyBatchEventFlags(12500076, 12500077) && ActionButtonInArea(2500010, areaEntityId))
            || (EventFlag(12505074) && ActionButtonInArea(2500010, areaEntityId))
            || (EventFlagState(desiredFlagState, TargetEventFlagType.EventFlag, 12500074)
                && ActionButtonInArea(2500010, areaEntityId)));
    DisplayGenericDialog(10010172, PromptType.OKCANCEL, NumberofOptions.OneButton, -1, 3);
    RestartEvent();
});

// 古城_SCエレベータ_初期化
$Event(12500075, Default, function() {
    if (EventFlag(12500074)) {
        ReproduceObjectAnimation(2501010, 1);
        WaitFixedTimeSeconds(1);
        SetObjactState(2501011, 2500010, Enabled);
        SetObjactState(2501012, 2500010, Disabled);
        EndEvent();
    }
L0:
    ReproduceObjectAnimation(2501010, 11);
    WaitFixedTimeSeconds(1);
    SetObjactState(2501011, 2500010, Disabled);
    SetObjactState(2501012, 2500010, Enabled);
    EndIf(AnyBatchEventFlags(12500076, 12500077));
    SetObjactState(2501012, 2500010, Disabled);
});

// 古城_SCエレベータ_上昇
$Event(12500076, Default, function() {
    WaitFor(
        (!EventFlag(12505074) && EventFlag(12500074) && InArea(10000, 2502000))
            || (!EventFlag(12505074) && EventFlag(12500074) && ObjActEventFlag(12500501)));
    SetEventFlag(12505074, ON);
    SetObjactState(2501011, 2500010, Disabled);
    ForceAnimationPlayback(2501010, 10, false, true, false);
    WaitFor(!InArea(10000, 2502001));
    ForceAnimationPlayback(2501010, 11, false, true, false);
    SetEventFlag(12505074, OFF);
    SetEventFlag(12500074, OFF);
    SetObjactState(2501012, 2500010, Enabled);
    RestartEvent();
});

// 古城_SCエレベータ_下降
$Event(12500077, Default, function() {
    WaitFor(
        (!EventFlag(12505074) && !EventFlag(12500074) && InArea(10000, 2502001))
            || (!EventFlag(12505074) && !EventFlag(12500074) && ObjActEventFlag(12500501)));
    SetEventFlag(12505074, ON);
    SetObjactState(2501012, 2500010, Disabled);
    ForceAnimationPlayback(2501010, 0, false, true, false);
    WaitFor(!InArea(10000, 2502000));
    ForceAnimationPlayback(2501010, 1, false, true, false);
    SetEventFlag(12505074, OFF);
    SetEventFlag(12500074, ON);
    SetObjactState(2501011, 2500010, Enabled);
    RestartEvent();
});

// 古城の悪霊_初期出現フラグ
$Event(12500078, Default, function() {
    WaitFixedTimeFrames(0);
});

// 血舐めが出現する_XX
$Event(12505100, Restart, function(chrEntityId, animationId, areaEntityId, patrolInformationEntityId) {
    if (ThisEventSlot()) {
        SetCharacterHome(chrEntityId, areaEntityId);
        ChangeCharacterPatrolBehavior(chrEntityId, patrolInformationEntityId);
        EndEvent();
    }
L0:
    SetCharacterAIState(chrEntityId, Disabled);
    SetCharacterGravity(chrEntityId, Disabled);
    SetCharacterMaphits(chrEntityId, true);
    WaitFor(InArea(10000, 2502207) || HasDamageType(chrEntityId, 10000, DamageType.Unspecified));
    SetNetworkUpdateRate(chrEntityId, true, CharacterUpdateFrequency.AlwaysUpdate);
    WaitRandomTimeFrames(30, 45);
    ForceAnimationPlayback(chrEntityId, animationId, false, true, false);
    SetCharacterGravity(chrEntityId, Enabled);
    SetCharacterMaphits(chrEntityId, false);
    SetCharacterAIState(chrEntityId, Enabled);
    WaitFixedTimeFrames(1);
    SetCharacterHome(chrEntityId, areaEntityId);
    ChangeCharacterPatrolBehavior(chrEntityId, patrolInformationEntityId);
    SetNetworkUpdateRate(chrEntityId, false, CharacterUpdateFrequency.AlwaysUpdate);
});

// 寄生虫_出現_XX
$Event(12500100, Default, function(chrEntityId, targetDistance) {
    SetCharacterGravity(chrEntityId, Disabled);
    SetCharacterMaphits(chrEntityId, true);
    WaitFor(EntityInRadiusOfEntity(chrEntityId, 10000, targetDistance));
    ForceAnimationPlayback(chrEntityId, 7000, false, false, false);
    SetCharacterGravity(chrEntityId, Enabled);
    WaitFixedTimeFrames(14);
    SetCharacterMaphits(chrEntityId, false);
});

// 教会の印初期化
$Event(12500200, Restart, function(eventFlagId, eventFlagId2) {
    BatchSetEventFlags(eventFlagId, eventFlagId2, OFF);
});

// 教会の印付与
$Event(12500206, Default, function(chrEntityId, eventFlagId, eventFlagId2) {
    WaitFor(HasDamageType(10000, chrEntityId, DamageType.Unspecified));
    SetEventFlag(eventFlagId, ON);
    SetEventFlag(eventFlagId2, ON);
    WaitFor(CharacterDead(chrEntityId) || !EventFlag(eventFlagId2));
    SetEventFlag(eventFlagId, OFF);
    RestartEvent();
});

// 教会の印効果時間
$Event(12500220, Default, function(chrEntityId, eventFlagId) {
    if (!EventFlag(eventFlagId)) {
        WaitFor(HasDamageType(10000, chrEntityId, DamageType.Unspecified));
        SetEventFlag(eventFlagId, ON);
        WaitFixedTimeSeconds(1);
    }
    dmg = HasDamageType(10000, chrEntityId, DamageType.Unspecified);
    WaitFor(dmg || ElapsedSeconds(300) || CharacterDead(chrEntityId));
    if (!dmg.Passed) {
        SetEventFlag(eventFlagId, OFF);
    }
    RestartEvent();
});

// 古城の悪霊との初対面
$Event(12500235, Default, function(chrEntityId, eventFlagId) {
    SetCharacterGravity(chrEntityId, Disabled);
    SetCharacterMaphits(chrEntityId, true);
    WaitFor(EventFlag(eventFlagId));
    ForceAnimationPlayback(chrEntityId, 6200, false, true, false);
    SetCharacterGravity(chrEntityId, Enabled);
    SetCharacterMaphits(chrEntityId, false);
});

// エントランス_寡婦_起動
$Event(12500285, Default, function(chrEntityId, targetDistance, chrEntityId2) {
    SetCharacterAIState(chrEntityId, Disabled);
    WaitFor(
        EntityInRadiusOfEntity(chrEntityId, 10000, targetDistance)
            || CharacterDamagedBy(chrEntityId, 10000)
            || CharacterAIState(chrEntityId2, AIStateType.Combat));
    SetCharacterAIState(chrEntityId, Enabled);
});

// 城壁_幼生オオコウモリ_擬態
$Event(12500390, Restart, function(chrEntityId) {
    ForceAnimationPlayback(chrEntityId, 7010, true, false, false);
    WaitFor(
        CharacterAIState(chrEntityId, AIStateType.Combat)
            || CharacterAIState(chrEntityId, AIStateType.Alert));
    ForceAnimationPlayback(chrEntityId, 7012, false, false, false);
});

// さまよう狂気_古城_XX
$Event(12500400, Restart, function(chrEntityId, eventFlagId) {
    if (ThisEventSlot()) {
        ChangeCharacterEnableState(chrEntityId, Disabled);
        EndEvent();
    }
L0:
    chrFlag &= CharacterType(10000, TargetType.Alive);
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        chrFlag &= EventFlag(eventFlagId);
    }
    WaitFor(chrFlag);
    WaitFixedTimeSeconds(0);
});

// 城壁_幼生オオコウモリ_擬態_連動解除
$Event(12500430, Restart, function(chrEntityId, entityId) {
    ForceAnimationPlayback(entityId, 7010, true, false, false);
    WaitFor(
        CharacterAIState(chrEntityId, AIStateType.Combat)
            || HasDamageType(entityId, 10000, DamageType.Unspecified));
    ForceAnimationPlayback(entityId, 7012, false, false, false);
});

// 城壁_幼生オオコウモリ_擬態_領域解除
$Event(12500435, Restart, function(entityId, areaEntityId) {
    ForceAnimationPlayback(entityId, 7010, true, false, true);
    area = InArea(10000, areaEntityId);
    dmg = HasDamageType(entityId, 10000, DamageType.Unspecified);
    WaitFor(area || dmg);
    EndIf(dmg.Passed);
    ForceAnimationPlayback(entityId, 7012, false, false, false);
});

// 城壁_幼生オオコウモリ_擬態_被ダメ解除
$Event(12500440, Restart, function(chrEntityId, chrEntityId2) {
    ForceAnimationPlayback(chrEntityId, 7010, true, false, false);
    ForceAnimationPlayback(chrEntityId2, 7010, true, false, false);
    WaitFor(
        HasDamageType(chrEntityId, 10000, DamageType.Unspecified)
            || HasDamageType(chrEntityId2, 10000, DamageType.Unspecified)
            || (CharacterAIState(chrEntityId, AIStateType.Combat)
                && EntityInRadiusOfEntity(chrEntityId, 10000, 8))
            || (CharacterAIState(chrEntityId2, AIStateType.Combat)
                && EntityInRadiusOfEntity(chrEntityId2, 10000, 8)));
    ForceAnimationPlayback(chrEntityId, 7011, false, false, false);
    WaitFixedTimeSeconds(1);
    ForceAnimationPlayback(chrEntityId2, 7011, false, false, false);
});

// 幼生オオコウモリが飛んでくる
$Event(12500454, Restart, function(chrEntityId, animationId, animationId2, areaEntityId, animationId3, aiId, aiId2, timeFrames) {
    ForceAnimationPlayback(chrEntityId, animationId, false, false, false);
    SetCharacterAIId(chrEntityId, aiId);
    area = InArea(10000, areaEntityId);
    dmg = HasDamageType(chrEntityId, 10000, DamageType.Unspecified);
    WaitFor(area || dmg);
    GotoIf(S0, dmg.Passed);
    ForceAnimationPlayback(chrEntityId, animationId2, false, false, false);
    if (areaEntityId == 2502021) {
        SetCharacterHome(chrEntityId, areaEntityId);
        WaitFixedTimeFrames(timeFrames);
    }
    SetCharacterAIId(chrEntityId, aiId2);
    EndEvent();
    ForceAnimationPlayback(chrEntityId, animationId3, false, false, false);
S0:
    SetCharacterAIId(chrEntityId, aiId2);
});

// 幼生オオコウモリが飛んでくる_書庫バルコニー専用
$Event(12500458, Restart, function(chrEntityId, animationId, areaEntityId, timeFrames, areaEntityId2, animationId2) {
    ForceAnimationPlayback(chrEntityId, animationId2, false, false, false);
    SetCharacterMaphits(chrEntityId, true);
    area = InArea(10000, areaEntityId);
    WaitFor(area || InArea(10000, areaEntityId2));
    if (!area.Passed) {
        WaitFor(InArea(10000, areaEntityId) || ElapsedSeconds(10));
    }
    ForceAnimationPlayback(chrEntityId, animationId, false, false, false);
    SetCharacterHome(chrEntityId, areaEntityId);
    WaitFixedTimeFrames(timeFrames);
    SetCharacterMaphits(chrEntityId, false);
});

// 書庫_仕掛け起動
$Event(12500501, Default, function() {
    if (ThisEventSlot()) {
        ReproduceObjectAnimation(2501500, 0);
        RegisterLadder(12500996, 12500997, 2501510);
        SetObjactState(2501501, 2500000, Disabled);
        ReproduceObjectAnimation(2501501, 0);
        EndEvent();
    }
    WaitFor(ObjActEventFlag(12500500));
    ForceAnimationPlayback(2501500, 0, false, true, false);
    RegisterLadder(12500996, 12500997, 2501510);
});

// 書庫バルコニー_幼生オオコウモリ不意打ち
$Event(12500502, Default, function(chrEntityId, eventFlagId, areaEntityId) {
    SetCharacterGravity(chrEntityId, Disabled);
    ForceAnimationPlayback(chrEntityId, 7010, true, false, false);
    if (ThisEventSlot()) {
        WaitFor(InArea(10000, areaEntityId));
        ForceAnimationPlayback(chrEntityId, 7011, false, false, false);
        WaitFixedTimeFrames(35);
        SetCharacterGravity(chrEntityId, Enabled);
        EndEvent();
    }
    WaitFor(EventFlag(eventFlagId) || HasDamageType(chrEntityId, 10000, DamageType.Unspecified));
    ForceAnimationPlayback(chrEntityId, 7011, false, false, true);
    WaitFixedTimeFrames(35);
    SetCharacterGravity(chrEntityId, Enabled);
});

// 書庫_王の召使い_奥へ逃げる
$Event(12500503, Default, function() {
    WaitFor(
        CharacterAIState(2500124, AIStateType.Combat)
            || CharacterAIState(2500241, AIStateType.Combat)
            || CharacterAIState(2500276, AIStateType.Combat));
    SetCharacterAIId(2500124, 233022);
    SetCharacterHome(2500124, 2502411);
    RequestCharacterAICommand(2500124, 10, 0);
    WaitFor(InArea(2500124, 2502411) || ElapsedSeconds(8));
    RequestCharacterAIReplan(2500124);
    RequestCharacterAICommand(2500124, -1, 0);
});

// 汎用_イベントアニメ待機_XX
$Event(12500520, Default, function(chrEntityId, animationId, animationId2, targetDistance, targetDistance2) {
    WaitRandomTimeFrames(0, 100);
    ForceAnimationPlayback(chrEntityId, animationId, false, false, false);
    WaitFor(
        (!CharacterHasSpEffect(10000, 4652)
            && EntityInRadiusOfEntity(chrEntityId, 10000, targetDistance))
            || (CharacterHasSpEffect(10000, 4652)
                && EntityInRadiusOfEntity(chrEntityId, 10000, targetDistance2))
            || CharacterAIState(chrEntityId, AIStateType.Combat));
    ForceAnimationPlayback(chrEntityId, animationId2, false, false, false);
});

// 特殊待被ダメ解除
$Event(12500620, Restart, function(entityId, animationId, animationId2, eventFlagId) {
    ForceAnimationPlayback(entityId, animationId, true, false, true);
    EndIf(EventFlag(eventFlagId));
    dmg = HasDamageType(entityId, -1, DamageType.Unspecified);
    WaitFor(dmg || EventFlag(eventFlagId));
    if (!dmg.Passed) {
        ForceAnimationPlayback(entityId, animationId2, false, true, true);
        EndEvent();
    }
    EndIf(EventFlag(eventFlagId));
    WaitFor(EventFlag(eventFlagId));
    ForceAnimationPlayback(entityId, 7021, false, true, true);
});

// 王の召使い_特殊待機敵対時解除
$Event(12500630, Restart, function(chrEntityId, animationId, animationId2) {
    ForceAnimationPlayback(chrEntityId, animationId, true, false, true);
    WaitFor(
        HasDamageType(chrEntityId, 10000, DamageType.Unspecified)
            || CharacterAIState(chrEntityId, AIStateType.Combat));
    RequestCharacterAnimationReset(chrEntityId, Interpolation.Interpolated);
    ForceAnimationPlayback(chrEntityId, animationId2, false, false, false);
});

// 寡婦_ジェネレート制御
$Event(12500640, Default, function(chrEntityId) {
    WaitFor(!CharacterDead(chrEntityId));
    WaitFor(CharacterDead(chrEntityId));
    ClearCharactersAITarget(chrEntityId);
    RestartEvent();
});

// 王の召使い_杖殴り専用化
$Event(12500740, Default, function(chrEntityId) {
    WaitFor(CharacterBackreadStatus(chrEntityId));
    RequestCharacterAICommand(chrEntityId, 100, 0);
});

// SAN値で狂気の悪霊出現_古城_XX
$Event(12504000, Restart, function(chrEntityId, targetInsightAmount, targetDistance) {
    EndIf(ThisEventSlot());
    ChangeCharacterEnableState(chrEntityId, Disabled);
    WaitFor(
        PlayerInsightAmount() >= targetInsightAmount
            && CharacterType(10000, TargetType.Alive)
            && EntityInRadiusOfEntity(10000, chrEntityId, targetDistance));
    ChangeCharacterEnableState(chrEntityId, Enabled);
    ForceAnimationPlayback(chrEntityId, 6200, false, true, false);
});

// SAN値で狂気の悪霊消滅_古城_XX
$Event(12504005, Restart, function(chrEntityId, targetInsightAmount, eventFlagId) {
    if (!ThisEventSlot()) {
        WaitFor(EventFlag(eventFlagId) && PlayerInsightAmount() <= targetInsightAmount);
    }
L0:
    ForceCharacterDeath(chrEntityId, false);
});

// debug 常駐エフェクト切り替え
$Event(101, Default, function() {
    WaitFor(EventFlag(100));
    ActivateMapPart(2506001, Enabled);
    WaitFor(!EventFlag(100));
    ActivateMapPart(2506001, Disabled);
    RestartEvent();
});

// ボス部屋後_城表示制御
$Event(12500810, Default, function() {
    if (ThisEvent()) {
        DeactivateObject(2501810, Disabled);
        EndEvent();
    }
L0:
    ActivateMapPart(2506000, Disabled);
    ActivateMapPart(2506001, Disabled);
    ActivateMapPart(2506002, Disabled);
    ActivateMapPart(2506003, Disabled);
    ActivateMapPart(2506004, Disabled);
    ActivateMapPart(2506005, Disabled);
    ActivateMapPart(2506006, Disabled);
    ActivateMapPart(2506007, Disabled);
    ActivateMapPart(2506008, Disabled);
    ActivateMapPart(2506009, Disabled);
    ActivateMapPart(2506010, Disabled);
    ActivateMapPart(2506011, Disabled);
    ActivateMapPart(2506012, Disabled);
    ActivateMapPart(2506013, Disabled);
    ActivateMapPart(2506014, Disabled);
    ActivateMapPart(2506015, Disabled);
    ActivateMapPart(2506016, Disabled);
    ActivateMapPart(2506017, Disabled);
    ActivateMapPart(2506070, Disabled);
    ActivateMapPart(2506071, Disabled);
    ActivateMapPart(2506072, Disabled);
    ActivateMapPart(2506073, Disabled);
    DeactivateObject(2506018, Disabled);
    DeactivateObject(2506019, Disabled);
    DeactivateObject(2506020, Disabled);
    DeactivateObject(2506021, Disabled);
    DeactivateObject(2506022, Disabled);
    DeactivateObject(2506023, Disabled);
    DeactivateObject(2506024, Disabled);
    DeactivateObject(2506025, Disabled);
    DeactivateObject(2506026, Disabled);
    DeactivateObject(2506027, Disabled);
    DeactivateObject(2506028, Disabled);
    DeactivateObject(2506029, Disabled);
    DeactivateObject(2506030, Disabled);
    DeactivateObject(2506031, Disabled);
    DeactivateObject(2506032, Disabled);
    DeactivateObject(2506033, Disabled);
    DeactivateObject(2506034, Disabled);
    DeactivateObject(2506035, Disabled);
    DeactivateObject(2506036, Disabled);
    DeactivateObject(2506039, Disabled);
    DeactivateObject(2506040, Disabled);
    DeactivateObject(2506041, Disabled);
    DeactivateObject(2506042, Disabled);
    DeactivateObject(2506043, Disabled);
    DeactivateObject(2506044, Disabled);
    DeactivateObject(2506045, Disabled);
    DeactivateObject(2506046, Disabled);
    DeactivateObject(2506047, Disabled);
    DeactivateObject(2506048, Disabled);
    DeactivateObject(2506049, Disabled);
    DeactivateObject(2506050, Disabled);
    DeactivateObject(2506051, Disabled);
    DeactivateObject(2506052, Disabled);
    DeactivateObject(2506053, Disabled);
    DeactivateObject(2506054, Disabled);
    DeactivateObject(2506055, Disabled);
    DeactivateObject(2506056, Disabled);
    DeactivateObject(2506057, Disabled);
    DeactivateObject(2506058, Disabled);
    DeactivateObject(2506059, Disabled);
    DeactivateObject(2506060, Disabled);
    DeactivateObject(2506061, Disabled);
    DeactivateObject(2506062, Disabled);
    DeactivateObject(2506063, Disabled);
    DeactivateObject(2506064, Disabled);
    DeactivateObject(2506065, Disabled);
    DeactivateObject(2506066, Disabled);
    DeactivateObject(2506067, Disabled);
    ActivateHit(2506037, Disabled);
    ActivateHit(2506038, Disabled);
    ChangeCharacterEnableState(2500600, Disabled);
    DeleteMapSFX(2503300, false);
    DeleteMapSFX(2503301, false);
    DeleteMapSFX(2503302, false);
    DeleteMapSFX(2503303, false);
    DeleteMapSFX(2503304, false);
    DeleteMapSFX(2503305, false);
    DeleteMapSFX(2503306, false);
    DeleteMapSFX(2503307, false);
    WaitFor(
        CharacterType(10000, TargetType.Alive)
            && EventFlag(12501800)
            && InArea(10000, 2502806)
            && PlayerArmorType(ArmorType.Head, 250000, 250000));
    EndIf(!CharacterType(10000, TargetType.Alive));
    SetEventFlag(9180, ON);
    WaitFixedTimeFrames(1);
    PlayCutsceneToPlayer(25000010, CutscenePlayMode.Skippable, 10000);
    WaitFixedTimeFrames(1);
    SetEventFlag(9180, OFF);
    ActivateMapPart(2506000, Enabled);
    ActivateMapPart(2506001, Enabled);
    ActivateMapPart(2506002, Enabled);
    ActivateMapPart(2506003, Enabled);
    ActivateMapPart(2506004, Enabled);
    ActivateMapPart(2506005, Enabled);
    ActivateMapPart(2506006, Enabled);
    ActivateMapPart(2506007, Enabled);
    ActivateMapPart(2506008, Enabled);
    ActivateMapPart(2506009, Enabled);
    ActivateMapPart(2506010, Enabled);
    ActivateMapPart(2506011, Enabled);
    ActivateMapPart(2506012, Enabled);
    ActivateMapPart(2506013, Enabled);
    ActivateMapPart(2506014, Enabled);
    ActivateMapPart(2506015, Enabled);
    ActivateMapPart(2506016, Enabled);
    ActivateMapPart(2506017, Enabled);
    ActivateMapPart(2506070, Enabled);
    ActivateMapPart(2506071, Enabled);
    ActivateMapPart(2506072, Enabled);
    ActivateMapPart(2506073, Enabled);
    DeactivateObject(2506018, Enabled);
    DeactivateObject(2506019, Enabled);
    DeactivateObject(2506020, Enabled);
    DeactivateObject(2506021, Enabled);
    DeactivateObject(2506022, Enabled);
    DeactivateObject(2506023, Enabled);
    DeactivateObject(2506024, Enabled);
    DeactivateObject(2506025, Enabled);
    DeactivateObject(2506026, Enabled);
    DeactivateObject(2506027, Enabled);
    DeactivateObject(2506028, Enabled);
    DeactivateObject(2506029, Enabled);
    DeactivateObject(2506030, Enabled);
    DeactivateObject(2506031, Enabled);
    DeactivateObject(2506032, Enabled);
    DeactivateObject(2506033, Enabled);
    DeactivateObject(2506034, Enabled);
    DeactivateObject(2506035, Enabled);
    DeactivateObject(2506036, Enabled);
    DeactivateObject(2506039, Enabled);
    DeactivateObject(2506040, Enabled);
    DeactivateObject(2506041, Enabled);
    DeactivateObject(2506042, Enabled);
    DeactivateObject(2506043, Enabled);
    DeactivateObject(2506044, Enabled);
    DeactivateObject(2506045, Enabled);
    DeactivateObject(2506046, Enabled);
    DeactivateObject(2506047, Enabled);
    DeactivateObject(2506048, Enabled);
    DeactivateObject(2506049, Enabled);
    DeactivateObject(2506050, Enabled);
    DeactivateObject(2506051, Enabled);
    DeactivateObject(2506052, Enabled);
    DeactivateObject(2506053, Enabled);
    DeactivateObject(2506054, Enabled);
    DeactivateObject(2506055, Enabled);
    DeactivateObject(2506056, Enabled);
    DeactivateObject(2506057, Enabled);
    DeactivateObject(2506058, Enabled);
    DeactivateObject(2506059, Enabled);
    DeactivateObject(2506060, Enabled);
    DeactivateObject(2506061, Enabled);
    DeactivateObject(2506062, Enabled);
    DeactivateObject(2506063, Enabled);
    DeactivateObject(2506064, Enabled);
    DeactivateObject(2506065, Enabled);
    DeactivateObject(2506066, Enabled);
    DeactivateObject(2506067, Enabled);
    ActivateHit(2506037, Enabled);
    ActivateHit(2506038, Enabled);
    ChangeCharacterEnableState(2500600, Enabled);
    DeactivateObject(2501810, Disabled);
    SpawnMapSFX(2503300);
    SpawnMapSFX(2503301);
    SpawnMapSFX(2503302);
    SpawnMapSFX(2503303);
    SpawnMapSFX(2503304);
    SpawnMapSFX(2503305);
    SpawnMapSFX(2503306);
    SpawnMapSFX(2503307);
});

// ボス撃破_王の死神
$Event(12501800, Default, function() {
    if (ThisEvent()) {
        SetMapSoundState(2503802, Disabled);
        SetMapSoundState(2503803, Disabled);
        ChangeCharacterEnableState(2500800, Disabled);
        ChangeCharacterEnableState(2500801, Disabled);
        ChangeCharacterEnableState(2500802, Disabled);
        ForceCharacterDeath(2500800, false);
        ForceCharacterDeath(2500801, false);
        ForceCharacterDeath(2500802, false);
        DeactivateObject(2501800, Disabled);
        DeleteMapSFX(2503800, true);
        EndEvent();
    }
L0:
    WaitFor(CharacterDead(2500800));
    DisplayBanner(TextBannerType.DemonKilled);
    DeactivateObject(2501800, Disabled);
    DeleteMapSFX(2503800, true);
    SetLockcamSlotNumber(25, 0, 0);
    WaitFixedTimeSeconds(3);
    HandleBossDefeat(2500800);
    SetNetworkSyncState(Disabled);
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        WaitFor(CharacterType(10000, TargetType.Alive));
        $InitializeEvent(0, 9350, 3);
        AwardAchievement(26);
        SetEventFlag(2500, ON);
        SetEventFlag(9460, ON);
        EndTimeMeasurement(2500000);
        EndTimeMeasurement(2500001);
        EndTimeMeasurement(2500010);
        CreatePlaylog(40);
        ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 52, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 52, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Weapon, 52, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Armor, 52, PlayLogMultiplayerType.HostOnly);
        EndEvent();
    }
L1:
    WaitFor(CharacterType(10000, TargetType.WhitePhantom));
    WaitFixedTimeSeconds(0);
});

// ボス撃破SE再生_王の死神
$Event(12501801, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12501800));
    flag = EventFlag(12501800);
    WaitFor(flag || (!CharacterBackreadStatus(2500800) && HPRatio(2500800) <= 0));
    EndIf(flag.Passed);
    PlaySE(2502800, SoundType.cCharacterMotion, 0);
});

// ホストがボス部屋入場_初戦_王の死神
$Event(12501802, Default, function() {
    EndIf(EventFlag(12501800));
    if (!ThisEventSlot()) {
        ForceAnimationPlayback(2500800, 7000, false, false, false);
    }
    WaitFor(
        !EventFlag(12501800)
            && !ThisEventSlot()
            && CharacterType(10000, TargetType.Alive)
            && InArea(10000, 2502805));
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        IssueBossRoomEntryNotification(0);
    }
    SetEventFlag(12504223, ON);
    EndIf(CharacterType(10000, TargetType.BlackPhantom));
    SetEventFlag(9180, ON);
    WaitFixedTimeFrames(1);
    if (!HasMultiplayerState(MultiplayerState.Multiplayer)) {
        PlayCutsceneToPlayer(25000020, CutscenePlayMode.Skippable, 10000);
    } else {
        PlayCutsceneToPlayer(25000020, CutscenePlayMode.Unskippable, 10000);
    }
    WaitFixedTimeFrames(1);
    SetEventFlag(9180, OFF);
    SetEventFlag(12504800, ON);
    EndIf(EventFlag(9341));
    $InitializeEvent(0, 9350, 1);
    SetEventFlag(9341, ON);
});

// ボス撃破で古城ボス_頭が出現
$Event(12501803, Default, function() {
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    EndIf(ThisEvent());
    WaitFor(EventFlag(12501800));
    CreateObjectfollowingSFX(2500850, 200, 900201);
    WaitFor(ActionButtonInArea(2500030, 2500850));
    ForceAnimationPlayback(10000, 101140, false, false, false);
    AwardItemLot(2502000);
    DeleteObjectfollowingSFX(2500850, true);
});

// 王の死神_時間差入場ゲスト用対処処理
$Event(12501804, Default, function() {
    WaitFor(CharacterType(10000, TargetType.Alive) && EventFlag(12504800));
    EndIf(HasMultiplayerState(MultiplayerState.Host));
    SetEventFlag(12504800, ON);
    SetEventFlag(12501802, ON);
});

// 女王の間_無記名の招待状
$Event(12500600, Default, function() {
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    EndIf(ThisEvent());
    WaitFor(EventFlag(12500810));
    CreateObjectfollowingSFX(2500851, 200, 900201);
    WaitFor(ActionButtonInArea(2500040, 2500851));
    ForceAnimationPlayback(10000, 101140, false, false, false);
    AwardItemLot(2500910);
    DeleteObjectfollowingSFX(2500851, true);
});

// ホストがボス部屋入場_再戦_王の死神
$Event(12504810, Default, function() {
    EndIf(EventFlag(12501800));
    if (!EventFlag(12501802)) {
        if (!HasMultiplayerState(MultiplayerState.Client)) {
            DeactivateObject(2501800, Disabled);
            DeleteMapSFX(2503800, false);
        }
        WaitFor(!EventFlag(12501800) && EventFlag(12501802));
        DeactivateObject(2501800, Enabled);
        SpawnMapSFX(2503800);
    }
L0:
    IssueShortWarpRequest(2500800, TargetEntityType.Area, 2502807, -1);
    ForceAnimationPlayback(2500800, 0, false, false, false);
    flag = !EventFlag(12501800);
    chrAct = CharacterType(10000, TargetType.Alive) && ActionButtonInArea(2500800, 2501800);
    flag2 = EventFlag(12501800);
    WaitFor(chrAct || flag2);
    EndIf(flag2.Passed);
    RotateCharacter(10000, 2502800, 101130, true);
    chrArea = CharacterType(10000, TargetType.Alive) && InArea(10000, 2502801);
    chrTime = CharacterType(10000, TargetType.Alive) && ElapsedSeconds(2);
    WaitFor(chrArea || chrTime);
    if (!chrTime.Passed) {
        SetEventFlag(12504800, ON);
    }
    RestartEvent();
});

// ゲストがボス部屋入場_王の死神
$Event(12504811, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12501800));
    WaitFor(
        !EventFlag(12501800)
            && EventFlag(12501802)
            && EventFlag(12504800)
            && CharacterType(10000, TargetType.WhitePhantom)
            && ActionButtonInArea(2500800, 2501800));
    RotateCharacter(10000, 2502500, 101130, true);
    chrArea = CharacterType(10000, TargetType.WhitePhantom) && InArea(10000, 2502801);
    chrTime = CharacterType(10000, TargetType.WhitePhantom) && ElapsedSeconds(2);
    WaitFor(chrArea || chrTime);
    if (!chrTime.Passed) {
        SetEventFlag(12504801, ON);
    }
    RestartEvent();
});

// 他人の世界で霧壁あたり無効_王の死神
$Event(12504812, Default, function() {
    WaitFor(CharacterType(10000, TargetType.Alive) && EntityInRadiusOfEntity(10000, 2501800, 2));
    SetCharacterGravityMaphitStateExcludingOwnWorld(10000, Disabled);
    WaitFixedTimeFrames(6);
    RestartEvent();
});

// 他人の世界で霧壁あたり無効2_王の死神
$Event(12504813, Default, function() {
    WaitFor(CharacterType(10000, TargetType.Alive) && !EntityInRadiusOfEntity(10000, 2501800, 2));
    SetCharacterGravityMaphitStateExcludingOwnWorld(10000, Enabled);
    WaitFixedTimeFrames(6);
    RestartEvent();
});

// ボスが動き出す_王の死神
$Event(12504802, Default, function() {
    EndIf(EventFlag(12501800));
    SetCharacterAIState(2500800, Disabled);
    SetCharacterAIState(2500801, Disabled);
    SetCharacterHPBarDisplay(2500800, Disabled);
    SetCharacterHPBarDisplay(2500801, Disabled);
    SetCharacterImmortality(2500801, Enabled);
    ChangeCharacterEnableState(2500801, Disabled);
    CreateBulletOwner(2500802);
    ChangeCharacterEnableState(2500802, Disabled);
    if (!ThisEvent()) {
        WaitFor(EventFlag(12504800));
        if (!HasMultiplayerState(MultiplayerState.Client)) {
            if (!EventFlag(12504223)) {
                IssueBossRoomEntryNotification(0);
            }
            SetNetworkUpdateAuthority(2500800, AuthorityLevel.Forced);
            SetNetworkUpdateAuthority(2500801, AuthorityLevel.Forced);
        }
    }
L0:
    SetEventFlag(12504223, ON);
    SetEventFlag(12504800, ON);
    GotoIf(L1, NumberOfCoopClients() == 0);
    GotoIf(L2, NumberOfCoopClients() == 1);
    GotoIf(L3, NumberOfCoopClients() == 2);
L1:
    Goto(L4);
L2:
    SetSpEffect(2500800, 7500, true);
    SetSpEffect(2500801, 7500, true);
    SetSpEffect(2500802, 7500, true);
    WaitFixedTimeFrames(1);
    AdaptHpchangingSpEffectToNPCPartOfTarget(2500800);
    AdaptHpchangingSpEffectToNPCPartOfTarget(2500801);
    AdaptHpchangingSpEffectToNPCPartOfTarget(2500802);
    Goto(L4);
L3:
    SetSpEffect(2500800, 7501, true);
    SetSpEffect(2500801, 7501, true);
    SetSpEffect(2500802, 7501, true);
    WaitFixedTimeFrames(1);
    AdaptHpchangingSpEffectToNPCPartOfTarget(2500800);
    AdaptHpchangingSpEffectToNPCPartOfTarget(2500801);
    AdaptHpchangingSpEffectToNPCPartOfTarget(2500802);
    Goto(L4);
L4:
    SetCharacterAIState(2500800, Enabled);
    DisplayBossHealthBar(Enabled, 2500800, 0, 232000);
    CreatePlaylog(82);
    StartTimeMeasurement(2500010, 98, Enabled);
});

// ボスBGM ON_王の死神
$Event(12504803, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12501800));
    if (!ThisEvent()) {
        SetMapSoundState(2503802, Disabled);
        SetMapSoundState(2503803, Disabled);
        flagArea &= !EventFlag(12501800) && EventFlag(12504802);
        if (!HasMultiplayerState(MultiplayerState.Host)) {
            flagArea &= EventFlag(12504801);
        }
        flagArea &= InArea(10000, 2502802);
        WaitFor(flagArea);
        EnableBossMapSound(2503802, Enabled);
        spFlagArea &= CharacterHasSpEffect(2500800, 5633);
    }
L0:
    spFlagArea &= !EventFlag(12501800) && EventFlag(12504802);
    if (!HasMultiplayerState(MultiplayerState.Host)) {
        spFlagArea &= EventFlag(12504801);
    }
    spFlagArea &= InArea(10000, 2502802);
    WaitFor(spFlagArea);
    EnableBossMapSound(2503802, Disabled);
    WaitFixedTimeFrames(0);
    EnableBossMapSound(2503803, Enabled);
});

// ボスカメラ_王の死神
$Event(12504804, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12501800));
    WaitFor(CharacterHasEventMessage(2500800, 100));
    SetLockcamSlotNumber(25, 0, 1);
    WaitFor(CharacterHasSpEffect(2500801, 5610));
    SetLockcamSlotNumber(25, 0, 0);
    RestartEvent();
});

// ボスBGM OFF_王の死神
$Event(12504805, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12501800));
    WaitFor(EventFlag(12501800));
    EnableBossMapSound(2503802, Disabled);
    EnableBossMapSound(2503803, Disabled);
    EnableBossMapSound(-1, Disabled);
});

// 大魔法
$Event(12504806, Default, function() {
    EndIf(EventFlag(12501800));
    WaitFor(CharacterHasEventMessage(2500800, 100));
    RequestCharacterAICommand(2500800, 1, 0);
    RequestCharacterAIReplan(2500800);
    StartTimeMeasurement(2501000, 116, Enabled);
    WarpCharacterAndCopyFloor(2500801, TargetEntityType.Character, 2500800, 100, 2500800);
    ChangeCharacterEnableState(2500801, Enabled);
    WaitFixedTimeSeconds(1);
    SetCharacterAIState(2500801, Enabled);
    WaitFor(
        HasDamageType(2500801, -1, DamageType.Unspecified)
            || ElapsedSeconds(60)
            || CharacterDead(2500800));
    RequestCharacterAICommand(2500800, -1, 0);
    RequestCharacterAIReplan(2500800);
    EndTimeMeasurement(2501000);
    SpawnOneshotSFX(TargetEntityType.Character, 2500801, 100, 623206);
    SetSpEffect(2500801, 5610, false);
    ChangeCharacterEnableState(2500801, Disabled);
    SetCharacterAIState(2500801, Disabled);
    RestartEvent();
});

// 激昂時フォース発動
$Event(12504807, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12501800));
    WaitFor(CharacterHasSpEffect(2500800, 5633));
    ShootBullet(2500802, 2500800, 6, 223200590, 0, 0, 0);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

// SAブレイク
$Event(12504808, Default, function() {
    EndIf(EventFlag(12501800));
    WaitFor(CharacterHasSpEffect(2500800, 5633) && CharacterHasEventMessage(2500800, 10));
    ClearSpEffect(2500800, 5633);
    ClearSpEffect(2500800, 5599);
    WaitFixedTimeFrames(1);
    ForceAnimationPlayback(2500800, 2100, false, true, false);
    RestartEvent();
});

// 客室にいる古城の悪霊の出現フラグ
$Event(12500896, Default, function(areaEntityId) {
    if (ThisEvent()) {
        DeleteMapSFX(2503200, false);
        DeleteMapSFX(2503201, false);
        EndEvent();
    }
L0:
    WaitFor(InArea(10000, areaEntityId));
    DeleteMapSFX(2503200, true);
    DeleteMapSFX(2503201, true);
    WaitFixedTimeFrames(10);
});

// エントランスにいる古城の悪霊の出現フラグ
$Event(12500898, Default, function(eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4) {
    WaitFor(
        EventFlag(eventFlagId)
            || EventFlag(eventFlagId2)
            || EventFlag(eventFlagId3)
            || EventFlag(eventFlagId4));
    WaitFixedTimeFrames(10);
    SetEventFlag(12500898, ON);
    if (EventFlag(eventFlagId)) {
        CreatePlaylog(146);
    }
    if (EventFlag(eventFlagId2)) {
        CreatePlaylog(180);
    }
    if (EventFlag(eventFlagId3)) {
        CreatePlaylog(214);
    }
    if (EventFlag(eventFlagId4)) {
        CreatePlaylog(248);
    }
});

// 古城の悪霊_実体化制御
$Event(12500900, Default, function(chrEntityId, eventFlagId, eventFlagId2) {
    if (!EventFlag(eventFlagId)) {
        SetCharacterAIState(chrEntityId, Disabled);
        SetCharacterAnimationState(chrEntityId, Disabled);
        SetSpEffectAndUnknown200455(chrEntityId, 5686, false);
        ClearSpEffect(chrEntityId, 5684);
        WaitFor(EventFlag(eventFlagId));
        WaitRandomTimeFrames(10, 70);
        SetCharacterAIState(chrEntityId, Enabled);
        ClearSpEffect(chrEntityId, 5686);
        SetSpEffect(chrEntityId, 5684, false);
    }
L0:
    SetSpEffectAndUnknown200455(chrEntityId, 5685, false);
    SetCharacterAnimationState(chrEntityId, Disabled);
    WaitFor(EventFlag(eventFlagId2));
    ClearSpEffect(chrEntityId, 5685);
    SetCharacterAnimationState(chrEntityId, Enabled);
    WaitFor(!EventFlag(eventFlagId2));
    RestartEvent();
});

// 教会の印_古城の悪霊バーサクパラメータ差し替え
$Event(12501000, Default, function(chrEntityId) {
    WaitFor(CharacterHasSpEffect(10000, 4652));
    SetCharacterAIId(chrEntityId, 215001);
    WaitFor(!CharacterHasSpEffect(10000, 4652));
    SetCharacterAIId(chrEntityId, 215001);
    RestartEvent();
});

// 古城の悪霊_実体化制御フラグ操作_XX
$Event(12505000, Restart, function(chrEntityId, eventFlagId) {
    SetNetworkSyncState(Disabled);
    WaitFor(
        CharacterAIState(chrEntityId, AIStateType.Recognition)
            || CharacterAIState(chrEntityId, AIStateType.Alert)
            || CharacterAIState(chrEntityId, AIStateType.Combat));
    SetEventFlag(eventFlagId, ON);
    WaitFixedTimeFrames(3);
    WaitFor(CharacterAIState(chrEntityId, AIStateType.Normal));
    SetEventFlag(eventFlagId, OFF);
    RestartEvent();
});

// 古城の悪霊_実体化制御フラグ同期_XX
$Event(12505300, Restart, function(eventFlagId) {
    WaitFor(EventFlag(eventFlagId));
    SetEventFlag(eventFlagId, ON);
    WaitFor(!EventFlag(eventFlagId));
    SetEventFlag(eventFlagId, OFF);
    RestartEvent();
});

// マップ初回入場_プレイログ
$Event(12500090, Default, function() {
    EndIf(ThisEvent());
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    WaitFor(PlayerStandingOnHit(2503500));
    ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 282, PlayLogMultiplayerType.HostOnly);
    ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 282, PlayLogMultiplayerType.HostOnly);
    ParameterOutput(PlayerPlayLogParameter.Weapon, 282, PlayLogMultiplayerType.HostOnly);
    ParameterOutput(PlayerPlayLogParameter.Armor, 282, PlayLogMultiplayerType.HostOnly);
    $InitializeEvent(0, 9350, 2);
});

// ワープ椅子_ワープアニメ再生_XX
$Event(12507010, Default, function(eventFlagId, entityId) {
    WaitFor(EventFlag(eventFlagId));
    IssueShortWarpRequest(10000, TargetEntityType.Object, entityId, 200);
    ForceAnimationPlayback(10000, 101160, false, false, true);
    WaitFixedTimeSeconds(4);
    SetEventFlag(eventFlagId, OFF);
});

// ワープ椅子_ワープ_XX
$Event(12507020, Default, function(eventFlagId, entityId, eventFlagId2) {
    WaitFor(EventFlag(eventFlagId));
    SetEventFlag(eventFlagId, OFF);
    WarpPlayerToRespawnPoint(entityId);
    SetEventFlag(eventFlagId2, ON);
});

// ワープ椅子_ワープ後処理
$Event(12507040, Default, function() {
    if (!AnyBatchEventFlags(9001, 9010)) {
        EndEvent();
    }
    SetEventFlag(9210, ON);
    WaitFor(!EventFlag(9210));
    if (EventFlag(9001)) {
        SetEventFlag(12507811, ON);
        SetEventFlag(12507810, ON);
        SetPlayerRespawnPoint(2502950);
    }
    if (EventFlag(9002)) {
        SetEventFlag(12507831, ON);
        SetEventFlag(12507830, ON);
        SetPlayerRespawnPoint(2502951);
    }
    if (EventFlag(9003)) {
        SetEventFlag(12507851, ON);
        SetEventFlag(12507850, ON);
        SetPlayerRespawnPoint(2502952);
    }
    if (EventFlag(9004)) {
        SetEventFlag(12507871, ON);
        SetEventFlag(12507870, ON);
        SetPlayerRespawnPoint(2502953);
    }
    if (EventFlag(9005)) {
        SetEventFlag(12507891, ON);
        SetEventFlag(12507890, ON);
        SetPlayerRespawnPoint(2502954);
    }
    if (EventFlag(9006)) {
        SetEventFlag(12507911, ON);
        SetEventFlag(12507910, ON);
        SetPlayerRespawnPoint(2502955);
    }
    if (EventFlag(9007)) {
        SetEventFlag(12507931, ON);
        SetEventFlag(12507930, ON);
        SetPlayerRespawnPoint(2502956);
    }
    if (EventFlag(9008)) {
        SetEventFlag(12507951, ON);
        SetEventFlag(12507950, ON);
        SetPlayerRespawnPoint(2502957);
    }
    if (EventFlag(9009)) {
        SetEventFlag(12507971, ON);
        SetEventFlag(12507970, ON);
        SetPlayerRespawnPoint(2502958);
    }
    if (EventFlag(9010)) {
        SetEventFlag(12507991, ON);
        SetEventFlag(12507990, ON);
        SetPlayerRespawnPoint(2502959);
    }
    BatchSetEventFlags(9000, 9010, OFF);
});

// ワープ椅子_初回起動演出_XX
$Event(12507050, Default, function(eventFlagId, chrEntityId, entityId) {
    EndIf(EventFlag(eventFlagId));
    SetCharacterGravity(chrEntityId, Disabled);
    WaitFor(CharacterBackreadStatus(chrEntityId));
    IssueShortWarpRequest(chrEntityId, TargetEntityType.Object, entityId, 250);
    ForceAnimationPlayback(chrEntityId, 101165, true, false, false);
    WaitFixedTimeSeconds(1);
    IssueShortWarpRequest(chrEntityId, TargetEntityType.Object, entityId, 250);
    WaitFor(EventFlag(eventFlagId));
    ForceAnimationPlayback(chrEntityId, 101166, false, true, false);
    ChangeCharacterEnableState(chrEntityId, Disabled);
});


