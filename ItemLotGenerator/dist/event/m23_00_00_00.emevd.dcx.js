// ==EMEVD==
// @docs    bb-common.emedf.json
// @compress    DCX_DFLT_10000_44_9
// @game    Bloodborne
// @string    "クリア時間_通し\u0000クリア時間_1プレイ\u0000ボス_撃破\u0000PC情報_ボス撃破_血に渇いた獣\u0000ボス_戦闘開始\u0000ボス戦_撃破時間\u0000PC情報_ボス撃破_嵐の獣（骨）\u0000PC情報_廃墟到達時\u0000廃墟_スナイパー領域侵入\u0000廃墟_ご神体破壊\u0000N:\\SPRJ\\data\\Param\\event\\common.emevd\u0000\u0000\u0000\u0000\u0000"
// @linked    [220]
// @version    3.6.2
// ==/EMEVD==

// コンストラクタ
$Event(0, Default, function() {
    $InitializeEvent(5, 7000, 2300950, 2301950, 999, 12307800);
    $InitializeEvent(6, 7000, 2300951, 2301951, 12301800, 12307820);
    $InitializeEvent(7, 7000, 2300952, 2301952, 12301700, 12307840);
    $InitializeEvent(5, 7100, 72300200, 2301950);
    $InitializeEvent(6, 7100, 72300201, 2301951);
    $InitializeEvent(7, 7100, 72300202, 2301952);
    $InitializeEvent(5, 7200, 72300100, 2301950, 2102950);
    $InitializeEvent(6, 7200, 72300101, 2301951, 2102950);
    $InitializeEvent(7, 7200, 72300102, 2301952, 2102950);
    $InitializeEvent(5, 7300, 72102300, 2301950);
    $InitializeEvent(6, 7300, 72102301, 2301951);
    $InitializeEvent(7, 7300, 72102302, 2301952);
    $InitializeEvent(10, 7600, 2301999, 2303999);
    $InitializeEvent(1, 9200, 2303900);
    $InitializeEvent(1, 9220, 2300750, 12304220, 12304221, 2300, 23, 0);
    $InitializeEvent(1, 9240, 2300750, 12304220, 12304221, 12304222, 23, 0);
    $InitializeEvent(1, 9260, 2300750, 12304220, 12304221, 12304222, 23, 0);
    $InitializeEvent(1, 9280, 2300750, 12304220, 12304221, 2300, 12304800, 23, 0);
    DeleteMapSFX(2303400, false);
    DeleteMapSFX(2303910, false);
    DeleteMapSFX(2303911, false);
    $InitializeEvent(0, 12304400, 12304440, 2303400, 12304420, 12304430, 12301800, 6001);
    $InitializeEvent(0, 12304401, 12304441, 2303910, 12304421, 12304431, 12301700, 12304422);
    $InitializeEvent(0, 12304402, 12304442, 2303911, 12304422, 12304432, 12301700, 12304421);
    $InitializeEvent(0, 12304410, SingleplayerSummonSignType.NormalCoop, 2300740, 2302720, 12304420, 12304430, 12304440, 12301800, 10576);
    $InitializeEvent(1, 12304410, SingleplayerSummonSignType.NormalCoop, 2300930, 2302910, 12304421, 12304431, 12304441, 12301700, 10568);
    $InitializeEvent(2, 12304410, 5, 2300931, 2302913, 12304422, 12304432, 12304442, 12301700, 10564);
    $InitializeEvent(0, 12304450, 2300740, 2302722, 12304420, 12304430, 12304800);
    $InitializeEvent(1, 12304450, 2300930, 2302911, 12304421, 12304431, 12304700);
    $InitializeEvent(2, 12304450, 2300931, 2302914, 12304422, 12304432, 12304700);
    $InitializeEvent(0, 12304460, 2300740, 2302722, 2302800, 2302801, 101130, 12304450, 2302801);
    $InitializeEvent(1, 12304460, 2300930, 2302911, 2302810, 2302811, 101130, 12304451, 2302811);
    $InitializeEvent(2, 12304460, 2300931, 2302914, 2302810, 2302811, 101130, 12304452, 2302811);
    StartTimeMeasurement(2300000, 0, Disabled);
    StartTimeMeasurement(2300001, 18, Enabled);
    RegisterLadder(12301000, 12301001, 2301100);
    RegisterLadder(12301002, 12301003, 2301101);
    RegisterLadder(12301004, 12301005, 2301102);
    RegisterLadder(12301006, 12301007, 2301103);
    RegisterLadder(12301008, 12301009, 2301104);
    RegisterLadder(12301010, 12301011, 2301105);
    CreateObjectfollowingSFX(2301200, 1, 923230);
    CreateObjectfollowingSFX(2301201, 1, 923230);
    CreateObjectfollowingSFX(2301202, 1, 923230);
    CreateObjectfollowingSFX(2301203, 1, 923230);
    CreateObjectfollowingSFX(2301204, 1, 923230);
    CreateObjectfollowingSFX(2301205, 1, 923230);
    CreateObjectfollowingSFX(2301206, 1, 923230);
    CreateObjectfollowingSFX(2301207, 1, 923230);
    CreateObjectfollowingSFX(2301208, 1, 923230);
    CreateObjectfollowingSFX(2301209, 1, 923230);
    CreateObjectfollowingSFX(2301210, 1, 923230);
    CreateObjectfollowingSFX(2301211, 1, 923230);
    CreateObjectfollowingSFX(2301212, 1, 923230);
    CreateObjectfollowingSFX(2301213, 1, 923230);
    CreateObjectfollowingSFX(2301214, 1, 923230);
    CreateObjectfollowingSFX(2301215, 1, 923230);
    CreateObjectfollowingSFX(2301216, 1, 923230);
    CreateObjectfollowingSFX(2301217, 1, 923230);
    CreateObjectfollowingSFX(2301218, 1, 923230);
    CreateObjectfollowingSFX(2301219, 1, 923230);
    CreateObjectfollowingSFX(2301230, 1, 923230);
    CreateObjectfollowingSFX(2301221, 1, 923230);
    CreateObjectfollowingSFX(2301222, 1, 923230);
    CreateObjectfollowingSFX(2301223, 1, 923230);
    CreateBulletOwner(2300270);
    CreateBulletOwner(2300271);
    CreateBulletOwner(2300272);
    CreateDamagingObject(12300300, 2301400, 100, 6110, DamageTargetType.Character, 0.6, 0, 1);
    CreateDamagingObject(12300301, 2301401, 100, 6110, DamageTargetType.Character, 0.6, 0, 1);
    CreateDamagingObject(12300302, 2301402, 100, 6110, DamageTargetType.Character, 0.6, 0, 1);
    CreateDamagingObject(12300303, 2301403, 100, 6110, DamageTargetType.Character, 0.6, 0, 1);
    CreateDamagingObject(12300304, 2301404, 100, 6110, DamageTargetType.Character, 0.6, 0, 1);
    CreateDamagingObject(12300305, 2301405, 100, 6110, DamageTargetType.Character, 0.6, 0, 1);
    CreateDamagingObject(12300306, 2301406, 100, 6110, DamageTargetType.Character, 0.6, 0, 1);
    CreateDamagingObject(12300307, 2301407, 100, 6110, DamageTargetType.Character, 0.6, 0, 1);
    CreateDamagingObject(12300308, 2301408, 100, 6110, DamageTargetType.Character, 0.6, 0, 1);
    CreateDamagingObject(12300309, 2301409, 100, 6110, DamageTargetType.Character, 0.6, 0, 1);
    CreateDamagingObject(12300310, 2301410, 100, 6110, DamageTargetType.Character, 0.6, 0, 1);
    CreateDamagingObject(12300311, 2301411, 100, 6110, DamageTargetType.Character, 0.6, 0, 1);
    CreateDamagingObject(12300312, 2301412, 100, 6110, DamageTargetType.Character, 0.6, 0, 1);
    CreateDamagingObject(12300313, 2301413, 100, 6110, DamageTargetType.Character, 0.6, 0, 1);
    CreateDamagingObject(12300314, 2301414, 100, 6110, DamageTargetType.Character, 0.6, 0, 1);
    CreateDamagingObject(12300315, 2301415, 100, 6110, DamageTargetType.Character, 0.6, 0, 1);
    CreateDamagingObject(12300316, 2301416, 100, 6110, DamageTargetType.Character, 0.6, 0, 1);
    CreateDamagingObject(12300317, 2301417, 100, 6110, DamageTargetType.Character, 0.6, 0, 1);
    CreateDamagingObject(12300318, 2301418, 100, 6110, DamageTargetType.Character, 0.6, 0, 1);
    CreateDamagingObject(12300319, 2301419, 100, 6110, DamageTargetType.Character, 0.6, 0, 1);
    CreateDamagingObject(12300320, 2301420, 100, 6110, DamageTargetType.Character, 0.6, 0, 1);
    CreateDamagingObject(12300321, 2301421, 100, 6110, DamageTargetType.Character, 0.6, 0, 1);
    CreateDamagingObject(12300322, 2301422, 100, 6110, DamageTargetType.Character, 0.6, 0, 1);
    $InitializeEvent(0, 12304812);
    $InitializeEvent(0, 12304813);
    $InitializeEvent(0, 12301800);
    $InitializeEvent(0, 12301801);
    $InitializeEvent(0, 12301802);
    $InitializeEvent(0, 12304810);
    $InitializeEvent(0, 12304811);
    $InitializeEvent(0, 12304802);
    $InitializeEvent(0, 12304803);
    $InitializeEvent(0, 12304804);
    $InitializeEvent(0, 12304805);
    $InitializeEvent(0, 12304807);
    $InitializeEvent(0, 12304808);
    $InitializeEvent(0, 12301803);
    $InitializeEvent(0, 12304732);
    $InitializeEvent(0, 12304733);
    $InitializeEvent(0, 12301700);
    $InitializeEvent(0, 12301701);
    $InitializeEvent(0, 12301702);
    $InitializeEvent(0, 12304730);
    $InitializeEvent(0, 12304731);
    $InitializeEvent(0, 12304702);
    $InitializeEvent(0, 12304703);
    $InitializeEvent(0, 12304704);
    $InitializeEvent(0, 12304705);
    $InitializeEvent(0, 12304707);
    $InitializeEvent(0, 12301703);
    $InitializeEvent(0, 12304715, 2300, 2300, NPCPartType.Part1, 480, 490, 8000, 130);
    $InitializeEvent(1, 12304715, 2301, 2301, NPCPartType.Part2, 481, 491, 8010, 150);
    $InitializeEvent(2, 12304715, 2302, 2302, NPCPartType.Part3, 482, 492, 8030, 150);
    $InitializeEvent(3, 12304715, 2303, 2303, NPCPartType.Part4, 483, 493, 8020, 200);
    $InitializeEvent(4, 12304715, 2304, 2304, NPCPartType.Part5, 484, 494, 8040, 200);
    $InitializeEvent(0, 12300100);
    $InitializeEvent(0, 12300110, 7031, 2301701, 12300120);
    $InitializeEvent(1, 12300110, 7000, 2301700, 12300121);
    $InitializeEvent(2, 12300110, 2300031, 2301010, 12300122);
    $InitializeEvent(3, 12300110, 2300030, 2301020, 12300180);
    $InitializeEvent(0, 12300120, 2301701, 12300212, 1, 2300000);
    $InitializeEvent(1, 12300120, 2301700, 12300211, 1, 2300001);
    $InitializeEvent(2, 12300120, 2301010, 12300213, 1, 2300010);
    $InitializeEvent(0, 12300130);
    $InitializeEvent(0, 12300140);
    $InitializeEvent(0, 12300160);
    $InitializeEvent(0, 12300180);
    $InitializeEvent(0, 12300190);
    $InitializeEvent(0, 12300201);
    $InitializeEvent(0, 12300210);
    $InitializeEvent(0, 12300220, 2300250, 52300990);
    $InitializeEvent(1, 12300220, 2300251, 52300980);
    $InitializeEvent(2, 12300220, 2300252, 52300970);
    $InitializeEvent(0, 12300230);
    $InitializeEvent(0, 12300235);
    $InitializeEvent(0, 12300240);
    $InitializeEvent(0, 12300250);
    $InitializeEvent(0, 12300300);
    $InitializeEvent(0, 12300310, 2301050, 12300900, 9942);
    $InitializeEvent(0, 12305000);
    $InitializeEvent(0, 12305001);
    $InitializeEvent(0, 12305010, 2300304, 7008, 1, 109000);
    $InitializeEvent(1, 12305010, 2300402, 7002, 2, 109010);
    $InitializeEvent(0, 12305020);
    $InitializeEvent(0, 12305021);
    $InitializeEvent(0, 12305022);
    $InitializeEvent(0, 12305023);
    $InitializeEvent(0, 12305030, 2302032, 2301269, 2300910);
    $InitializeEvent(1, 12305030, 2302033, 2301266, 2300911);
    $InitializeEvent(2, 12305030, 2302034, 2301265, 2300913);
    $InitializeEvent(3, 12305030, 2302035, 2301261, 2300913);
    $InitializeEvent(0, 12305040, 2301256, 2300900);
    $InitializeEvent(1, 12305040, 2301257, 2300900);
    $InitializeEvent(2, 12305040, 2301258, 2300900);
    $InitializeEvent(3, 12305040, 2301259, 2300900);
    $InitializeEvent(4, 12305040, 2301260, 2300900);
    $InitializeEvent(5, 12305040, 2301261, 2300900);
    $InitializeEvent(6, 12305040, 2301262, 2300900);
    $InitializeEvent(7, 12305040, 2301263, 2300900);
    $InitializeEvent(8, 12305040, 2301264, 2300900);
    $InitializeEvent(9, 12305040, 2301265, 2300900);
    $InitializeEvent(10, 12305040, 2301266, 2300900);
    $InitializeEvent(11, 12305040, 2301267, 2300900);
    $InitializeEvent(12, 12305040, 2301268, 2300900);
    $InitializeEvent(13, 12305040, 2301269, 2300900);
    $InitializeEvent(0, 12305070);
    $InitializeEvent(0, 12305075, 2300309, 7008, 3, 109000);
    $InitializeEvent(1, 12305075, 2300310, 7002, 4, 109000);
    $InitializeEvent(0, 12305080);
    $InitializeEvent(0, 12305081);
    $InitializeEvent(0, 12305082);
    $InitializeEvent(0, 12305090, 0, 2300920);
    $InitializeEvent(1, 12305090, 20, 2300921);
    $InitializeEvent(0, 12305100, 2300408, 2302211, 30);
    $InitializeEvent(1, 12305100, 2300409, 2302213, 40);
    $InitializeEvent(2, 12305100, 2300410, 2302215, 60);
    $InitializeEvent(0, 12305110, 2300320, 0);
    $InitializeEvent(1, 12305110, 2300321, 15);
    $InitializeEvent(2, 12305110, 2300322, 35);
    $InitializeEvent(3, 12305110, 2300323, 5);
    $InitializeEvent(4, 12305110, 2300324, 55);
    $InitializeEvent(0, 12305120);
    $InitializeEvent(0, 12305121, 2300325, 7005, 12, 109000);
    $InitializeEvent(1, 12305121, 2300326, 7005, 13, 109000);
    $InitializeEvent(2, 12305121, 2300327, 7002, 14, 109000);
    $InitializeEvent(0, 12305125);
    $InitializeEvent(0, 12305130);
    $InitializeEvent(0, 12305135, 2300413, 7002, 15, 109010);
    $InitializeEvent(1, 12305135, 2300414, 7008, 16, 109010);
    $InitializeEvent(0, 12305140, 2300303, 7000, 7001, 109900, 109912);
    $InitializeEvent(1, 12305140, 2300304, 7000, 7001, 109900, 109913);
    $InitializeEvent(2, 12305140, 2300402, 7000, 7001, 109900, 109913);
    $InitializeEvent(3, 12305140, 2300309, 7006, 7007, 109900, 109912);
    $InitializeEvent(4, 12305140, 2300310, 7000, 7001, 109900, 109912);
    $InitializeEvent(5, 12305140, 2300312, 7000, 7001, 109900, 109912);
    $InitializeEvent(6, 12305140, 2300315, 7003, 7004, 109900, 109912);
    $InitializeEvent(7, 12305140, 2300316, 7006, 7007, 109900, 109912);
    $InitializeEvent(8, 12305140, 2300317, 7000, 7001, 109900, 109912);
    $InitializeEvent(9, 12305140, 2300403, 7006, 7007, 109900, 109912);
    $InitializeEvent(10, 12305140, 2300404, 7003, 7004, 109900, 109912);
    $InitializeEvent(11, 12305140, 2300405, 7006, 7007, 109900, 109912);
    $InitializeEvent(12, 12305140, 2300325, 7003, 7004, 109900, 109912);
    $InitializeEvent(13, 12305140, 2300326, 7003, 7004, 109900, 109912);
    $InitializeEvent(14, 12305140, 2300327, 7000, 7001, 109900, 109912);
    $InitializeEvent(15, 12305140, 2300413, 7000, 7001, 109900, 109912);
    $InitializeEvent(16, 12305140, 2300414, 7006, 7007, 109900, 109912);
    $InitializeEvent(17, 12305140, 2300500, 7000, 7001, 109015, 109015);
    $InitializeEvent(18, 12305140, 2300501, 7000, 7001, 109015, 109015);
    $InitializeEvent(19, 12305140, 2300502, 7000, 7001, 109015, 109015);
    $InitializeEvent(0, 12305160, 2300303, 7002, 0, 109000);
    $InitializeEvent(1, 12305160, 2300304, 7002, 1, 109000);
    $InitializeEvent(2, 12305160, 2300402, 7002, 2, 109010);
    $InitializeEvent(3, 12305160, 2300309, 7008, 3, 109000);
    $InitializeEvent(4, 12305160, 2300310, 7002, 4, 109000);
    $InitializeEvent(5, 12305160, 2300312, 7002, 5, 109000);
    $InitializeEvent(6, 12305160, 2300315, 7005, 6, 109000);
    $InitializeEvent(7, 12305160, 2300316, 7008, 7, 109000);
    $InitializeEvent(8, 12305160, 2300317, 7002, 8, 109000);
    $InitializeEvent(9, 12305160, 2300403, 7008, 9, 109010);
    $InitializeEvent(10, 12305160, 2300404, 7005, 10, 109010);
    $InitializeEvent(11, 12305160, 2300405, 7008, 11, 109010);
    $InitializeEvent(12, 12305160, 2300325, 7005, 12, 109000);
    $InitializeEvent(13, 12305160, 2300326, 7005, 13, 109000);
    $InitializeEvent(14, 12305160, 2300327, 7002, 14, 109000);
    $InitializeEvent(15, 12305160, 2300413, 7002, 15, 109010);
    $InitializeEvent(16, 12305160, 2300414, 7008, 16, 109010);
    $InitializeEvent(17, 12305160, 2300500, 7002, 17, 109010);
    $InitializeEvent(18, 12305160, 2300501, 7002, 18, 109010);
    $InitializeEvent(19, 12305160, 2300502, 7002, 19, 109010);
    $InitializeEvent(0, 12305180, 2300300, 2302140, 15, 0);
    $InitializeEvent(1, 12305180, 2300301, 2302141, 5, 0);
    $InitializeEvent(2, 12305180, 2300302, 2302141, 5, 2.5);
    $InitializeEvent(3, 12305180, 2300401, 2302147, 5, 0);
    $InitializeEvent(4, 12305180, 2300201, 2302146, 10, 0);
    $InitializeEvent(5, 12305180, 2300202, 2302146, 10, 0);
    $InitializeEvent(6, 12305180, 2300205, 2302130, 10, 0);
    $InitializeEvent(7, 12305180, 2300330, 2302148, 10, 0);
    $InitializeEvent(8, 12305180, 2300331, 2302148, 10, 0);
    $InitializeEvent(9, 12305180, 2300332, 2302148, 10, 0);
    $InitializeEvent(10, 12305180, 2300333, 2302148, 10, 0);
    $InitializeEvent(11, 12305180, 2300334, 2302148, 10, 0);
    $InitializeEvent(13, 12305180, 2300607, 2302148, 10, 0);
    $InitializeEvent(14, 12305180, 2300608, 2302148, 10, 0);
    $InitializeEvent(15, 12305180, 2300600, 2302149, 3, 0);
    $InitializeEvent(0, 12305190, 2300200);
    $InitializeEvent(1, 12305190, 2300201);
    $InitializeEvent(2, 12305190, 2300202);
    $InitializeEvent(3, 12305190, 2300203);
    $InitializeEvent(4, 12305190, 2300204);
    $InitializeEvent(5, 12305190, 2300205);
    $InitializeEvent(6, 12305190, 2300206);
    $InitializeEvent(7, 12305190, 2300207);
    $InitializeEvent(8, 12305190, 2300208);
    $InitializeEvent(9, 12305190, 2300209);
    $InitializeEvent(10, 12305190, 2300210);
    $InitializeEvent(11, 12305190, 2300211);
    $InitializeEvent(12, 12305190, 2300212);
    $InitializeEvent(13, 12305190, 2300213);
    $InitializeEvent(14, 12305190, 2300214);
    $InitializeEvent(15, 12305190, 2300215);
    $InitializeEvent(16, 12305190, 2300216);
    $InitializeEvent(17, 12305190, 2300217);
    $InitializeEvent(18, 12305190, 2300218);
    $InitializeEvent(19, 12305190, 2300219);
    $InitializeEvent(20, 12305190, 2300220);
    $InitializeEvent(21, 12305190, 2300221);
    $InitializeEvent(22, 12305190, 2300222);
    $InitializeEvent(23, 12305190, 2300223);
    $InitializeEvent(24, 12305190, 2300224);
    $InitializeEvent(25, 12305190, 2300225);
    $InitializeEvent(26, 12305190, 2300226);
    $InitializeEvent(27, 12305190, 2300227);
    $InitializeEvent(28, 12305190, 2300228);
    $InitializeEvent(29, 12305190, 2300229);
    $InitializeEvent(30, 12305190, 2300230);
    $InitializeEvent(31, 12305190, 2300231);
    $InitializeEvent(32, 12305190, 2300232);
    $InitializeEvent(33, 12305190, 2300233);
    $InitializeEvent(34, 12305190, 2300234);
    $InitializeEvent(0, 12305250);
    $InitializeEvent(0, 12305300, 2300602, 2300309, 20);
    $InitializeEvent(1, 12305300, 2300602, 2300310, 20);
    $InitializeEvent(2, 12305300, 2300602, 2300311, 20);
    $InitializeEvent(3, 12305300, 2300602, 2300312, 20);
    $InitializeEvent(4, 12305300, 2300602, 2300313, 20);
    $InitializeEvent(5, 12305300, 2300602, 2300314, 20);
    $InitializeEvent(6, 12305300, 2300602, 2300315, 20);
    $InitializeEvent(7, 12305300, 2300602, 2300316, 20);
    $InitializeEvent(8, 12305300, 2300602, 2300317, 20);
    $InitializeEvent(9, 12305300, 2300602, 2300318, 20);
    $InitializeEvent(10, 12305300, 2300602, 2300319, 20);
    $InitializeEvent(11, 12305300, 2300602, 2300320, 20);
    $InitializeEvent(12, 12305300, 2300602, 2300321, 20);
    $InitializeEvent(13, 12305300, 2300602, 2300322, 20);
    $InitializeEvent(14, 12305300, 2300602, 2300323, 20);
    $InitializeEvent(15, 12305300, 2300602, 2300324, 20);
    $InitializeEvent(16, 12305300, 2300602, 2300403, 20);
    $InitializeEvent(17, 12305300, 2300602, 2300404, 20);
    $InitializeEvent(18, 12305300, 2300602, 2300405, 20);
    $InitializeEvent(19, 12305300, 2300602, 2300406, 20);
    $InitializeEvent(20, 12305300, 2300602, 2300407, 20);
    $InitializeEvent(21, 12305300, 2300602, 2300408, 20);
    $InitializeEvent(22, 12305300, 2300602, 2300409, 20);
    $InitializeEvent(23, 12305300, 2300602, 2300410, 20);
    $InitializeEvent(24, 12305300, 2300603, 2300309, 35);
    $InitializeEvent(25, 12305300, 2300603, 2300310, 35);
    $InitializeEvent(26, 12305300, 2300603, 2300311, 35);
    $InitializeEvent(27, 12305300, 2300603, 2300312, 35);
    $InitializeEvent(28, 12305300, 2300603, 2300313, 35);
    $InitializeEvent(29, 12305300, 2300603, 2300314, 35);
    $InitializeEvent(30, 12305300, 2300603, 2300315, 35);
    $InitializeEvent(31, 12305300, 2300603, 2300316, 35);
    $InitializeEvent(32, 12305300, 2300603, 2300317, 35);
    $InitializeEvent(33, 12305300, 2300603, 2300318, 35);
    $InitializeEvent(34, 12305300, 2300603, 2300319, 35);
    $InitializeEvent(35, 12305300, 2300603, 2300320, 35);
    $InitializeEvent(36, 12305300, 2300603, 2300321, 35);
    $InitializeEvent(37, 12305300, 2300603, 2300322, 35);
    $InitializeEvent(38, 12305300, 2300603, 2300323, 35);
    $InitializeEvent(39, 12305300, 2300603, 2300324, 35);
    $InitializeEvent(40, 12305300, 2300603, 2300403, 35);
    $InitializeEvent(41, 12305300, 2300603, 2300404, 35);
    $InitializeEvent(42, 12305300, 2300603, 2300405, 35);
    $InitializeEvent(43, 12305300, 2300603, 2300406, 35);
    $InitializeEvent(44, 12305300, 2300603, 2300407, 35);
    $InitializeEvent(45, 12305300, 2300603, 2300408, 35);
    $InitializeEvent(46, 12305300, 2300603, 2300409, 35);
    $InitializeEvent(47, 12305300, 2300603, 2300410, 35);
    $InitializeEvent(48, 12305300, 2300604, 2300318, 35);
    $InitializeEvent(49, 12305300, 2300604, 2300319, 35);
    $InitializeEvent(50, 12305300, 2300604, 2300320, 35);
    $InitializeEvent(51, 12305300, 2300604, 2300321, 35);
    $InitializeEvent(52, 12305300, 2300604, 2300322, 35);
    $InitializeEvent(53, 12305300, 2300604, 2300323, 35);
    $InitializeEvent(54, 12305300, 2300604, 2300324, 35);
    $InitializeEvent(55, 12305300, 2300604, 2300406, 35);
    $InitializeEvent(56, 12305300, 2300604, 2300407, 35);
    $InitializeEvent(57, 12305300, 2300604, 2300408, 35);
    $InitializeEvent(58, 12305300, 2300604, 2300409, 35);
    $InitializeEvent(59, 12305300, 2300604, 2300410, 35);
    $InitializeEvent(60, 12305300, 2300605, 2300318, 35);
    $InitializeEvent(61, 12305300, 2300605, 2300319, 35);
    $InitializeEvent(62, 12305300, 2300605, 2300320, 35);
    $InitializeEvent(63, 12305300, 2300605, 2300321, 35);
    $InitializeEvent(64, 12305300, 2300605, 2300322, 35);
    $InitializeEvent(65, 12305300, 2300605, 2300323, 35);
    $InitializeEvent(66, 12305300, 2300605, 2300324, 35);
    $InitializeEvent(67, 12305300, 2300605, 2300406, 35);
    $InitializeEvent(68, 12305300, 2300605, 2300407, 35);
    $InitializeEvent(69, 12305300, 2300605, 2300408, 35);
    $InitializeEvent(70, 12305300, 2300605, 2300409, 35);
    $InitializeEvent(71, 12305300, 2300605, 2300410, 35);
    $InitializeEvent(72, 12305300, 2300606, 2300325, 25);
    $InitializeEvent(73, 12305300, 2300606, 2300326, 25);
    $InitializeEvent(74, 12305300, 2300606, 2300327, 25);
    $InitializeEvent(75, 12305300, 2300606, 2300201, 25);
    $InitializeEvent(76, 12305300, 2300606, 2300202, 25);
    $InitializeEvent(77, 12305300, 2300606, 2300203, 25);
    $InitializeEvent(78, 12305300, 2300606, 2300204, 25);
    $InitializeEvent(79, 12305300, 2300606, 2300205, 25);
    $InitializeEvent(0, 12305440, 2300309, 5522);
    $InitializeEvent(1, 12305440, 2300310, 5522);
    $InitializeEvent(2, 12305440, 2300311, 5522);
    $InitializeEvent(3, 12305440, 2300312, 5522);
    $InitializeEvent(4, 12305440, 2300313, 5522);
    $InitializeEvent(5, 12305440, 2300314, 5522);
    $InitializeEvent(6, 12305440, 2300315, 5522);
    $InitializeEvent(7, 12305440, 2300316, 5522);
    $InitializeEvent(8, 12305440, 2300317, 5522);
    $InitializeEvent(9, 12305440, 2300318, 5522);
    $InitializeEvent(10, 12305440, 2300319, 5522);
    $InitializeEvent(11, 12305440, 2300320, 5522);
    $InitializeEvent(12, 12305440, 2300321, 5522);
    $InitializeEvent(13, 12305440, 2300322, 5522);
    $InitializeEvent(14, 12305440, 2300323, 5522);
    $InitializeEvent(15, 12305440, 2300324, 5522);
    $InitializeEvent(16, 12305440, 2300325, 5522);
    $InitializeEvent(17, 12305440, 2300326, 5522);
    $InitializeEvent(18, 12305440, 2300327, 5522);
    $InitializeEvent(19, 12305440, 2300403, 5524);
    $InitializeEvent(20, 12305440, 2300404, 5524);
    $InitializeEvent(21, 12305440, 2300405, 5524);
    $InitializeEvent(22, 12305440, 2300406, 5524);
    $InitializeEvent(23, 12305440, 2300407, 5524);
    $InitializeEvent(24, 12305440, 2300408, 5524);
    $InitializeEvent(25, 12305440, 2300409, 5524);
    $InitializeEvent(26, 12305440, 2300410, 5524);
    $InitializeEvent(27, 12305440, 2300201, 5523);
    $InitializeEvent(28, 12305440, 2300202, 5523);
    $InitializeEvent(29, 12305440, 2300203, 5523);
    $InitializeEvent(30, 12305440, 2300204, 5523);
    $InitializeEvent(31, 12305440, 2300205, 5523);
    $InitializeEvent(0, 12305480);
    $InitializeEvent(0, 12305481);
    $InitializeEvent(0, 12305482);
    $InitializeEvent(0, 12305490, 2300320, 7010);
    $InitializeEvent(1, 12305490, 2300321, 7010);
    $InitializeEvent(2, 12305490, 2300322, 7010);
    $InitializeEvent(3, 12305490, 2300323, 7010);
    $InitializeEvent(4, 12305490, 2300324, 7010);
    $InitializeEvent(5, 12305490, 2300408, 7010);
    $InitializeEvent(6, 12305490, 2300409, 7010);
    $InitializeEvent(7, 12305490, 2300410, 7010);
    $InitializeEvent(0, 12305501);
    $InitializeEvent(0, 12305502, 2302200, 1);
    $InitializeEvent(1, 12305502, 2302060, 0);
    $InitializeEvent(0, 12305510, 2300320, 2302220, 2302210, 109008, 109006);
    $InitializeEvent(1, 12305510, 2300321, 2302222, 2302212, 109008, 109006);
    $InitializeEvent(2, 12305510, 2300322, 2302224, 2302214, 109008, 109006);
    $InitializeEvent(3, 12305510, 2300323, 2302227, 2302217, 109008, 109006);
    $InitializeEvent(4, 12305510, 2300324, 2302226, 2302216, 109008, 109006);
    $InitializeEvent(5, 12305510, 2300408, 2302223, 2302213, 109014, 109011);
    $InitializeEvent(6, 12305510, 2300409, 2302221, 2302211, 109014, 109011);
    $InitializeEvent(7, 12305510, 2300410, 2302225, 2302215, 109014, 109011);
    $InitializeEvent(0, 12304020);
    $InitializeEvent(0, 12304021);
    $InitializeEvent(0, 12304022);
    $InitializeEvent(0, 12300700);
    $InitializeEvent(0, 12300701);
    $InitializeEvent(0, 12300702);
    $InitializeEvent(0, 12300703);
    $InitializeEvent(0, 12300704);
    $InitializeEvent(0, 12300705);
    $InitializeEvent(0, 12305701);
    $InitializeEvent(0, 12300707);
    $InitializeEvent(0, 12300708);
    $InitializeEvent(0, 12300710, 2300300);
    $InitializeEvent(1, 12300710, 2300301);
    $InitializeEvent(2, 12300710, 2300302);
    $InitializeEvent(3, 12300710, 2300303);
    $InitializeEvent(4, 12300710, 2300304);
    $InitializeEvent(5, 12300710, 2300305);
    $InitializeEvent(6, 12300710, 2300306);
    $InitializeEvent(7, 12300710, 2300307);
    $InitializeEvent(8, 12300710, 2300308);
    $InitializeEvent(9, 12300710, 2300309);
    $InitializeEvent(10, 12300710, 2300310);
    $InitializeEvent(11, 12300710, 2300311);
    $InitializeEvent(12, 12300710, 2300312);
    $InitializeEvent(13, 12300710, 2300313);
    $InitializeEvent(14, 12300710, 2300314);
    $InitializeEvent(15, 12300710, 2300315);
    $InitializeEvent(16, 12300710, 2300316);
    $InitializeEvent(17, 12300710, 2300317);
    $InitializeEvent(18, 12300710, 2300318);
    $InitializeEvent(19, 12300710, 2300319);
    $InitializeEvent(20, 12300710, 2300320);
    $InitializeEvent(21, 12300710, 2300321);
    $InitializeEvent(22, 12300710, 2300322);
    $InitializeEvent(23, 12300710, 2300323);
    $InitializeEvent(24, 12300710, 2300324);
    $InitializeEvent(25, 12300710, 2300400);
    $InitializeEvent(26, 12300710, 2300401);
    $InitializeEvent(27, 12300710, 2300402);
    $InitializeEvent(28, 12300710, 2300403);
    $InitializeEvent(29, 12300710, 2300404);
    $InitializeEvent(30, 12300710, 2300405);
    $InitializeEvent(31, 12300710, 2300600);
    $InitializeEvent(32, 12300710, 2300601);
    $InitializeEvent(33, 12300710, 2300720);
    $InitializeEvent(0, 12300750);
    $InitializeEvent(0, 12300752);
    $InitializeEvent(0, 12300753);
    $InitializeEvent(0, 12300990);
});

// プリコンストラクタ
$Event(50, Default, function() {
    SetCharacterAnimationState(2303950, Disabled);
    SetCharacterGravity(2303950, Disabled);
    SetCharacterMaphits(2303950, true);
    SetCharacterAnimationState(2303951, Disabled);
    SetCharacterGravity(2303951, Disabled);
    SetCharacterMaphits(2303951, true);
});

// ボス撃破_血に渇いた獣
$Event(12301800, Default, function() {
    if (ThisEvent()) {
        SetMapSoundState(2303802, Disabled);
        SetMapSoundState(2303803, Disabled);
        ChangeCharacterEnableState(2300800, Disabled);
        ForceCharacterDeath(2300800, false);
        DeactivateObject(2301800, Disabled);
        DeleteMapSFX(2303800, false);
        EndEvent();
    }
L0:
    WaitFor(CharacterDead(2300800));
    DisplayBanner(TextBannerType.DemonKilled);
    DeactivateObject(2301800, Disabled);
    DeleteMapSFX(2303800, true);
    SetLockcamSlotNumber(23, 0, 0);
    WaitFixedTimeSeconds(3);
    HandleBossDefeat(2300800);
    SetNetworkSyncState(Disabled);
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        WaitFor(CharacterType(10000, TargetType.Alive));
        $InitializeEvent(0, 9350, 2);
        SetEventFlag(72400512, ON);
        AwardAchievement(22);
        AwardItemLot(80000000);
        SetEventFlag(2300, ON);
        SetEventFlag(9453, ON);
        EndTimeMeasurement(2300000);
        EndTimeMeasurement(2300001);
        EndTimeMeasurement(2300010);
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

// ボス撃SE再生_血に渇いた獣
$Event(12301801, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12301800));
    flag = EventFlag(12301800);
    WaitFor(flag || (!CharacterBackreadStatus(2300800) && HPRatio(2300800) <= 0));
    EndIf(flag.Passed);
    PlaySE(2302800, SoundType.cCharacterMotion, 0);
});

// ホストがボス部屋入場_初回_血に渇いた獣
$Event(12301802, Default, function() {
    EndIf(EventFlag(12301800));
    EndIf(ThisEvent());
    WaitFor(
        !EventFlag(12301800)
            && !ThisEvent()
            && CharacterType(10000, TargetType.Alive)
            && InArea(10000, 2302805)
            && HasMultiplayerState(MultiplayerState.Host));
    ForceAnimationPlayback(2300800, 7001, false, false, false);
    SetEventFlag(12304800, ON);
    EndIf(EventFlag(9339));
    $InitializeEvent(0, 9350, 1);
    SetEventFlag(9339, ON);
});

// 血に渇いた獣_時間差入場ゲスト用対処処理
$Event(12301803, Default, function() {
    WaitFor(CharacterType(10000, TargetType.Alive) && EventFlag(12304800));
    EndIf(HasMultiplayerState(MultiplayerState.Host));
    SetEventFlag(12304800, ON);
    SetEventFlag(12301802, ON);
});

// ホストがボス部屋入場_再戦_血に渇いた獣
$Event(12304810, Default, function() {
    EndIf(EventFlag(12301800));
    if (!EventFlag(12301802)) {
        if (!HasMultiplayerState(MultiplayerState.Client)) {
            DeactivateObject(2301800, Disabled);
            DeleteMapSFX(2303800, false);
        }
        WaitFor(!EventFlag(12301800) && EventFlag(12301802));
        DeactivateObject(2301800, Enabled);
        SpawnMapSFX(2303800);
    }
L0:
    chrActFlag = CharacterType(10000, TargetType.Alive)
        && ActionButtonInArea(2300800, 2301800)
        && !EventFlag(12301800);
    flag = EventFlag(12301800);
    WaitFor(chrActFlag || flag);
    EndIf(flag.Passed);
    RotateCharacter(10000, 2302800, 101130, false);
    chrArea = CharacterType(10000, TargetType.Alive) && InArea(10000, 2302801);
    chrTime = CharacterType(10000, TargetType.Alive) && ElapsedSeconds(2);
    WaitFor(chrArea || chrTime);
    if (!chrTime.Passed) {
        SetEventFlag(12304800, ON);
    }
    RestartEvent();
});

// ゲストがボス部屋入場_血に渇いた獣
$Event(12304811, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12301800));
    WaitFor(
        !EventFlag(12301800)
            && EventFlag(12301802)
            && EventFlag(12304800)
            && CharacterType(10000, TargetType.WhitePhantom)
            && ActionButtonInArea(2300800, 2301800));
    RotateCharacter(10000, 2302800, 101130, false);
    chrArea = CharacterType(10000, TargetType.WhitePhantom) && InArea(10000, 2302801);
    chrTime = CharacterType(10000, TargetType.WhitePhantom) && ElapsedSeconds(2);
    WaitFor(chrArea || chrTime);
    if (!chrTime.Passed) {
        SetEventFlag(12304801, ON);
    }
    RestartEvent();
});

// 他人の世界で霧壁あたり無効_血に渇いた獣
$Event(12304812, Default, function() {
    WaitFor(CharacterType(10000, TargetType.Alive) && EntityInRadiusOfEntity(10000, 2301800, 4));
    SetCharacterGravityMaphitStateExcludingOwnWorld(10000, Disabled);
    WaitFixedTimeFrames(6);
    RestartEvent();
});

// 他人の世界で霧壁あたり無効2_血に渇いた獣
$Event(12304813, Default, function() {
    WaitFor(
        CharacterType(10000, TargetType.Alive)
            && !EntityInRadiusOfEntity(10000, 2301800, 4)
            && EntityInRadiusOfEntity(10000, 2301800, 8));
    SetCharacterGravityMaphitStateExcludingOwnWorld(10000, Enabled);
    WaitFixedTimeFrames(6);
    RestartEvent();
});

// ボスが動き出す_血に渇いた獣
$Event(12304802, Default, function() {
    EndIf(EventFlag(12301800));
    SetCharacterAIState(2300800, Disabled);
    SetCharacterHPBarDisplay(2300800, Disabled);
    if (!ThisEvent()) {
        WaitFor(EventFlag(12304800));
        if (!HasMultiplayerState(MultiplayerState.Client)) {
            IssueBossRoomEntryNotification(0);
            SetNetworkUpdateAuthority(2300800, AuthorityLevel.Forced);
        }
    }
L0:
    SetEventFlag(12304800, ON);
    GotoIf(L1, NumberOfCoopClients() == 0);
    GotoIf(L2, NumberOfCoopClients() == 1);
    GotoIf(L3, NumberOfCoopClients() == 2);
L1:
    Goto(L4);
L2:
    SetSpEffect(2300800, 7500, true);
    WaitFixedTimeFrames(1);
    AdaptHpchangingSpEffectToNPCPartOfTarget(2300800);
    Goto(L4);
L3:
    SetSpEffect(2300800, 7501, true);
    WaitFixedTimeFrames(1);
    AdaptHpchangingSpEffectToNPCPartOfTarget(2300800);
    Goto(L4);
L4:
    SetCharacterAIState(2300800, Enabled);
    DisplayBossHealthBar(Enabled, 2300800, 0, 209000);
    CreatePlaylog(86);
    StartTimeMeasurement(2300010, 102, Enabled);
});

// ボスBGM ON_血に渇いた獣
$Event(12304803, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12301800));
    if (!ThisEvent()) {
        SetMapSoundState(2303802, Disabled);
        SetMapSoundState(2303803, Disabled);
        flagArea &= !EventFlag(12301800) && EventFlag(12304802);
        if (!HasMultiplayerState(MultiplayerState.Host)) {
            flagArea &= EventFlag(12304801);
        }
        flagArea &= InArea(10000, 2302801);
        WaitFor(flagArea);
        EnableBossMapSound(2303802, Enabled);
        flagArea2 &= EventFlag(12304808);
    }
L0:
    flagArea2 &= !EventFlag(12301800) && EventFlag(12304802);
    if (!HasMultiplayerState(MultiplayerState.Host)) {
        flagArea2 &= EventFlag(12304801);
    }
    flagArea2 &= InArea(10000, 2302801);
    WaitFor(flagArea2);
    EnableBossMapSound(2303802, Disabled);
    WaitFixedTimeFrames(0);
    EnableBossMapSound(2303803, Enabled);
});

// ボスカメラ_血に渇いた獣
$Event(12304804, Default, function() {
    SetNetworkSyncState(Disabled);
    WaitFor(
        (CharacterType(10000, TargetType.Alive) && EventFlag(12304800))
            || (CharacterType(10000, TargetType.WhitePhantom) && EventFlag(12304801)));
    SetLockcamSlotNumber(23, 0, 1);
});

// ボスBGM OFF_血に渇いた獣
$Event(12304805, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12301800));
    WaitFor(EventFlag(12301800));
    EnableBossMapSound(2303802, Disabled);
    EnableBossMapSound(2303803, Disabled);
    EnableBossMapSound(-1, Disabled);
});

// ボスヒートアップ_1回目_血に渇いた獣
$Event(12304807, Default, function() {
    EndIf(EventFlag(12301800));
    EndIf(ThisEvent());
    WaitFor(HPRatio(2300800) < 0.67);
    WaitFixedTimeSeconds(0.1);
    RequestCharacterAnimationReset(2300800, Interpolation.Uninterpolated);
    ForceAnimationPlayback(2300800, 7010, false, false, false);
    RequestCharacterAICommand(2300800, 100, 0);
    RequestCharacterAIReplan(2300800);
    WaitFor(CharacterHasEventMessage(2300800, 10));
    RequestCharacterAICommand(2300800, -1, 0);
    RequestCharacterAIReplan(2300800);
});

// ボスヒートアップ_2回目_血に渇いた獣
$Event(12304808, Default, function() {
    EndIf(EventFlag(12301800));
    EndIf(ThisEvent());
    WaitFor(HPRatio(2300800) < 0.33 && EventFlag(12304807));
    WaitFixedTimeSeconds(0.1);
    RequestCharacterAnimationReset(2300800, Interpolation.Uninterpolated);
    ForceAnimationPlayback(2300800, 7011, false, false, false);
    RequestCharacterAICommand(2300800, 101, 0);
    RequestCharacterAIReplan(2300800);
    WaitFor(CharacterHasEventMessage(2300800, 20));
    RequestCharacterAICommand(2300800, -1, 0);
    RequestCharacterAIReplan(2300800);
});

// ボス撃破_嵐の獣骨
$Event(12301700, Default, function() {
    if (ThisEvent()) {
        SetMapSoundState(2303812, Disabled);
        SetMapSoundState(2303813, Disabled);
        ChangeCharacterEnableState(2300810, Disabled);
        ForceCharacterDeath(2300810, false);
        DeactivateObject(2301810, Disabled);
        DeactivateObject(2301811, Disabled);
        DeleteMapSFX(2303810, false);
        DeleteMapSFX(2303811, false);
        EndEvent();
    }
L0:
    WaitFor(CharacterDead(2300810));
    DisplayBanner(TextBannerType.DemonKilled);
    DeactivateObject(2301810, Disabled);
    DeactivateObject(2301811, Disabled);
    DeleteMapSFX(2303810, true);
    DeleteMapSFX(2303811, true);
    SetLockcamSlotNumber(23, 0, 0);
    WaitFixedTimeSeconds(3);
    HandleBossDefeat(2300810);
    SetNetworkSyncState(Disabled);
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        WaitFor(CharacterType(10000, TargetType.Alive));
        $InitializeEvent(0, 9350, 3);
        AwardAchievement(24);
        if (!EventFlag(6644)) {
            AwardItemLot(50800000);
        } else {
            AwardItemLot(50800005);
        }
        SetEventFlag(2301, ON);
        SetEventFlag(9454, ON);
        EndTimeMeasurement(2300000);
        EndTimeMeasurement(2300001);
        EndTimeMeasurement(2300010);
        CreatePlaylog(40);
        ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 120, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 120, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Weapon, 120, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Armor, 120, PlayLogMultiplayerType.HostOnly);
        EndEvent();
    }
L1:
    WaitFor(CharacterType(10000, TargetType.WhitePhantom));
    WaitFixedTimeSeconds(0);
});

// ボス撃破SE再生_嵐の獣骨
$Event(12301701, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12301700));
    flag = EventFlag(12301700);
    WaitFor(flag || (!CharacterBackreadStatus(2300810) && HPRatio(2300810) <= 0));
    EndIf(flag.Passed);
    PlaySE(2302810, SoundType.cCharacterMotion, 0);
});

// ホストがボス部屋入場_初戦_嵐の獣骨
$Event(12301702, Default, function() {
    EndIf(ThisEvent());
    EndIf(ThisEvent());
    SetCharacterInvincibility(2300810, Enabled);
    ForceAnimationPlayback(2300810, 7000, true, false, false);
    WaitFor(
        !EventFlag(12301700)
            && !ThisEvent()
            && CharacterType(10000, TargetType.Alive)
            && EntityInRadiusOfEntity(2300810, 10000, 16));
    ForceAnimationPlayback(2300810, 7001, false, false, false);
    WaitFixedTimeFrames(70);
    SetCharacterInvincibility(2300810, Disabled);
    SetEventFlag(12304700, ON);
    EndIf(EventFlag(9340));
    $InitializeEvent(0, 9350, 1);
    SetEventFlag(9340, ON);
});

// 嵐の獣骨_時間差入場ゲスト用対処処理
$Event(12301703, Default, function() {
    WaitFor(CharacterType(10000, TargetType.Alive) && EventFlag(12304700));
    EndIf(HasMultiplayerState(MultiplayerState.Host));
    SetCharacterInvincibility(2300810, Disabled);
    SetEventFlag(12304700, ON);
    SetEventFlag(12301702, ON);
});

// ホストがボス部屋入場_再戦_嵐の獣骨
$Event(12304730, Default, function() {
    EndIf(EventFlag(12301700));
    if (!EventFlag(12301702)) {
        if (!HasMultiplayerState(MultiplayerState.Client)) {
            DeactivateObject(2301810, Disabled);
            DeleteMapSFX(2303810, false);
        }
        DeactivateObject(2301811, Disabled);
        DeleteMapSFX(2303811, false);
        WaitFor(!EventFlag(12301700) && EventFlag(12301702));
        DeactivateObject(2301810, Enabled);
        DeactivateObject(2301811, Enabled);
        SpawnMapSFX(2303810);
        SpawnMapSFX(2303811);
    }
L0:
    chrActFlag = CharacterType(10000, TargetType.Alive)
        && ActionButtonInArea(2300800, 2301810)
        && !EventFlag(12301700);
    flag = EventFlag(12301700);
    WaitFor(chrActFlag || flag);
    EndIf(flag.Passed);
    RotateCharacter(10000, 2302810, 101130, true);
    if (!ThisEvent()) {
        RotateCharacter(2300810, 10000, 3008, false);
    }
    chrArea = CharacterType(10000, TargetType.Alive) && InArea(10000, 2302811);
    chrTime = CharacterType(10000, TargetType.Alive) && ElapsedSeconds(2);
    WaitFor(chrArea || chrTime);
    if (!chrTime.Passed) {
        SetEventFlag(12304700, ON);
    }
    RestartEvent();
});

// ゲストがボス部屋入場_嵐の獣骨
$Event(12304731, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12301700));
    WaitFor(
        !EventFlag(12301700)
            && EventFlag(12301702)
            && EventFlag(12304700)
            && CharacterType(10000, TargetType.WhitePhantom)
            && ActionButtonInArea(2300800, 2301810));
    RotateCharacter(10000, 2302810, 101130, false);
    chrArea = CharacterType(10000, TargetType.WhitePhantom) && InArea(10000, 2302811);
    chrTime = CharacterType(10000, TargetType.WhitePhantom) && ElapsedSeconds(2);
    WaitFor(chrArea || chrTime);
    if (!chrTime.Passed) {
        SetEventFlag(12304701, ON);
    }
    RestartEvent();
});

// 他人の世界で霧壁あたり無効_嵐の獣骨
$Event(12304732, Default, function() {
    WaitFor(CharacterType(10000, TargetType.Alive) && EntityInRadiusOfEntity(10000, 2301810, 4));
    SetCharacterGravityMaphitStateExcludingOwnWorld(10000, Disabled);
    WaitFixedTimeFrames(6);
    RestartEvent();
});

// 他人の世界で霧壁あたり無効2_嵐の獣骨
$Event(12304733, Default, function() {
    WaitFor(
        CharacterType(10000, TargetType.Alive)
            && !EntityInRadiusOfEntity(10000, 2301810, 4)
            && EntityInRadiusOfEntity(10000, 2301810, 8));
    SetCharacterGravityMaphitStateExcludingOwnWorld(10000, Enabled);
    WaitFixedTimeFrames(6);
    RestartEvent();
});

// ボスが動き出す_嵐の獣骨
$Event(12304702, Default, function() {
    EndIf(EventFlag(12301700));
    SetCharacterAIState(2300810, Disabled);
    SetCharacterHPBarDisplay(2300810, Disabled);
    if (!ThisEvent()) {
        WaitFor(EventFlag(12304700));
        if (!HasMultiplayerState(MultiplayerState.Client)) {
            IssueBossRoomEntryNotification(0);
            SetNetworkUpdateAuthority(2300810, AuthorityLevel.Forced);
        }
    }
L0:
    SetEventFlag(12304700, ON);
    GotoIf(L1, NumberOfCoopClients() == 0);
    GotoIf(L2, NumberOfCoopClients() == 1);
    GotoIf(L3, NumberOfCoopClients() == 2);
L1:
    Goto(L4);
L2:
    SetSpEffect(2300810, 7500, true);
    WaitFixedTimeFrames(1);
    AdaptHpchangingSpEffectToNPCPartOfTarget(2300810);
    Goto(L4);
L3:
    SetSpEffect(2300810, 7501, true);
    WaitFixedTimeFrames(1);
    AdaptHpchangingSpEffectToNPCPartOfTarget(2300810);
    Goto(L4);
L4:
    SetCharacterAIState(2300810, Enabled);
    DisplayBossHealthBar(Enabled, 2300810, 0, 508000);
    CreatePlaylog(86);
    StartTimeMeasurement(2300010, 102, Enabled);
});

// ボスBGM　ON_嵐の獣骨
$Event(12304703, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12301700));
    if (!ThisEvent()) {
        SetMapSoundState(2303812, Disabled);
        SetMapSoundState(2303813, Disabled);
        flagArea &= !EventFlag(12301700) && EventFlag(12304702);
        if (!HasMultiplayerState(MultiplayerState.Host)) {
            flagArea &= EventFlag(12304701);
        }
        flagArea &= InArea(10000, 2302812);
        WaitFor(flagArea);
        EnableBossMapSound(2303812, Enabled);
        chrFlagArea &= CharacterHasEventMessage(2300810, 20);
    }
L0:
    chrFlagArea &= !EventFlag(12301700) && EventFlag(12304702);
    if (!HasMultiplayerState(MultiplayerState.Host)) {
        chrFlagArea &= EventFlag(12304701);
    }
    chrFlagArea &= InArea(10000, 2302812);
    WaitFor(chrFlagArea);
    EnableBossMapSound(2303812, Disabled);
    WaitFixedTimeFrames(0);
    EnableBossMapSound(2303813, Enabled);
});

// ボスカメラ_嵐の獣骨
$Event(12304704, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12301700));
    WaitFor(HPRatio(2300810) > 0 && EntityInRadiusOfEntity(10000, 2300810, 10));
    SetLockcamSlotNumber(23, 0, 1);
    WaitFor(HPRatio(2300810) > 0 && !EntityInRadiusOfEntity(10000, 2300810, 12));
    SetLockcamSlotNumber(23, 0, 0);
    RestartEvent();
});

// ボスBGM　OFF_嵐の獣骨
$Event(12304705, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12301700));
    WaitFor(EventFlag(12301700));
    EnableBossMapSound(2303812, Disabled);
    EnableBossMapSound(2303813, Disabled);
    EnableBossMapSound(-1, Disabled);
});

// ボスヒートアップ_嵐の獣骨
$Event(12304707, Restart, function() {
    EndIf(EventFlag(12301700));
    RequestCharacterAICommand(2300810, 2, 1);
    WaitFor(HPRatio(2300810) < 0.67 && CharacterHasSpEffect(2300810, 5402));
    WaitFixedTimeSeconds(0.1);
    RequestCharacterAICommand(2300810, 100, 2);
    RequestCharacterAIReplan(2300810);
    WaitFor(CharacterHasEventMessage(2300810, 20));
    RequestCharacterAICommand(2300810, -1, 2);
    RequestCharacterAIReplan(2300810);
    WaitFixedTimeSeconds(0.1);
    RequestCharacterAICommand(2300810, 3, 1);
});

// ボス_部位損傷_嵐の獣骨_XX
$Event(12304715, Restart, function(npcPartId, npcPartId2, npcPartGroupIdx, spEffectId, spEffectId2, animationId, npcPartHP) {
    EndIf(EventFlag(12301700));
    CreateNPCPart(2300810, npcPartId, npcPartGroupIdx, npcPartHP, 1, 1, false, false);
    SetNPCPartSEAndSFX(2300810, npcPartId2, 77, 77);
    hp = NPCPartHP(2300810, npcPartId2) <= 0;
    hp2 = HPRatio(2300810) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    ChangeCharactersCloth(2300810, 10, 2);
    CreateNPCPart(2300810, npcPartId, npcPartGroupIdx, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(2300810, npcPartId2, 77, 77);
    WaitFixedTimeFrames(1);
    RequestCharacterAnimationReset(2300810, Interpolation.Interpolated);
    ForceAnimationPlayback(2300810, animationId, false, false, false);
    SetSpEffect(2300810, spEffectId, true);
    ClearSpEffect(2300810, spEffectId2);
    RequestCharacterAIReplan(2300810);
    WaitFixedTimeSeconds(10);
    RequestCharacterAICommand(2300810, 110, 0);
    RequestCharacterAIReplan(2300810);
    WaitFor(CharacterHasEventMessage(2300810, 300));
    SetNPCPartHP(2300810, npcPartId2, -1, true);
    SetSpEffect(2300810, spEffectId2, true);
    ClearSpEffect(2300810, spEffectId);
    RequestCharacterAICommand(2300810, -1, 0);
    RequestCharacterAIReplan(2300810);
    ChangeCharactersCloth(2300810, 10, 1);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// ★廃墟_新NPC召喚_ボス部屋を目指す_XX
$Event(12304450, Restart, function(chrEntityId, entityId, eventFlagId, eventFlagId2, eventFlagId3) {
    EndIf(ThisEventSlot());
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    SetEventPoint(chrEntityId, entityId, 1);
    WaitFor(EventFlag(eventFlagId) && !EventFlag(eventFlagId2) && EventFlag(eventFlagId3));
    RequestCharacterAICommand(chrEntityId, 990, 0);
    RequestCharacterAIReplan(chrEntityId);
});

// ★廃墟_新NPC召喚_召喚可否判定_アルフレート
$Event(12304400, Restart, function(eventFlagId, entityId, eventFlagId2, eventFlagId3, eventFlagId4, eventFlagId5) {
    if (!EventFlag(eventFlagId)) {
        SetEventFlag(eventFlagId, OFF);
        DeleteMapSFX(entityId, true);
        WaitFor(
            PlayerHasItem(ItemType.Goods, 4312)
                && !EventFlag(eventFlagId2)
                && !EventFlag(eventFlagId3)
                && !EventFlag(eventFlagId4)
                && NumberOfClientsOfType(ClientType.Coop) < 2
                && EventFlag(72400461)
                && AnyBatchEventFlags(1340, 1341)
                && !EventFlag(eventFlagId5)
                && HasMultiplayerState(MultiplayerState.Host));
    }
L0:
    SetEventFlag(eventFlagId, ON);
    SpawnMapSFX(entityId);
    WaitFor(
        HasMultiplayerState(MultiplayerState.Host)
            && !(PlayerHasItem(ItemType.Goods, 4312)
                && !EventFlag(eventFlagId2)
                && !EventFlag(eventFlagId3)
                && !EventFlag(eventFlagId4)
                && NumberOfClientsOfType(ClientType.Coop) < 2
                && EventFlag(72400461)
                && AnyBatchEventFlags(1340, 1341)
                && !EventFlag(eventFlagId5)));
    SetEventFlag(eventFlagId, OFF);
    DeleteMapSFX(entityId, true);
    RestartEvent();
});

// ★廃墟_新NPC召喚_召喚可否判定_ヤハグル装備
$Event(12304401, Restart, function(eventFlagId, entityId, eventFlagId2, eventFlagId3, eventFlagId4, eventFlagId5) {
    if (!EventFlag(eventFlagId)) {
        SetEventFlag(eventFlagId, OFF);
        DeleteMapSFX(entityId, true);
        WaitFor(
            PlayerHasItem(ItemType.Goods, 4312)
                && !EventFlag(eventFlagId2)
                && !EventFlag(eventFlagId3)
                && !EventFlag(eventFlagId4)
                && NumberOfClientsOfType(ClientType.Coop) < 2
                && !EventFlag(eventFlagId5)
                && HasMultiplayerState(MultiplayerState.Host));
    }
L0:
    SetEventFlag(eventFlagId, ON);
    SpawnMapSFX(entityId);
    WaitFor(
        HasMultiplayerState(MultiplayerState.Host)
            && !(PlayerHasItem(ItemType.Goods, 4312)
                && !EventFlag(eventFlagId2)
                && !EventFlag(eventFlagId3)
                && !EventFlag(eventFlagId4)
                && NumberOfClientsOfType(ClientType.Coop) < 2
                && !EventFlag(eventFlagId5)));
    SetEventFlag(eventFlagId, OFF);
    DeleteMapSFX(entityId, true);
    RestartEvent();
});

// ★廃墟_新NPC召喚_召喚可否判定_連盟：ヤマムラ
$Event(12304402, Restart, function(eventFlagId, entityId, eventFlagId2, eventFlagId3, eventFlagId4, eventFlagId5) {
    if (!EventFlag(eventFlagId)) {
        SetEventFlag(eventFlagId, OFF);
        DeleteMapSFX(entityId, true);
        WaitFor(
            PlayerHasItem(ItemType.Goods, 4312)
                && !EventFlag(eventFlagId2)
                && !EventFlag(eventFlagId3)
                && !EventFlag(eventFlagId4)
                && NumberOfClientsOfType(ClientType.Coop) < 2
                && CharacterHasSpEffect(10000, 6142)
                && EventFlag(13501900)
                && !EventFlag(eventFlagId5)
                && HasMultiplayerState(MultiplayerState.Host));
    }
L0:
    SetEventFlag(eventFlagId, ON);
    SpawnMapSFX(entityId);
    WaitFor(
        HasMultiplayerState(MultiplayerState.Host)
            && !(PlayerHasItem(ItemType.Goods, 4312)
                && !EventFlag(eventFlagId2)
                && !EventFlag(eventFlagId3)
                && !EventFlag(eventFlagId4)
                && NumberOfClientsOfType(ClientType.Coop) < 2
                && CharacterHasSpEffect(10000, 6142)
                && EventFlag(13501900)
                && !EventFlag(eventFlagId5)));
    SetEventFlag(eventFlagId, OFF);
    DeleteMapSFX(entityId, true);
    RestartEvent();
});

// ★廃墟_新NPC召喚_参加_XX
$Event(12304410, Restart, function(signType, areaEntityId, entityId, eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4, actionButtonParameterId) {
    if (!EventFlag(eventFlagId)) {
        ChangeCharacterEnableState(areaEntityId, Disabled);
    }
    GotoIf(S0, EventFlag(eventFlagId2));
    GotoIf(S1, HasMultiplayerState(MultiplayerState.Client) && EventFlag(eventFlagId));
S0:
    ChangeCharacterEnableState(areaEntityId, Disabled);
S1:
    EndIf(EventFlag(eventFlagId4));
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        SetNetworkUpdateAuthority(areaEntityId, AuthorityLevel.Forced);
    }
    WaitFor(
        PlayerHasItem(ItemType.Goods, 4312)
            && !EventFlag(eventFlagId)
            && !EventFlag(eventFlagId2)
            && EventFlag(eventFlagId3)
            && !EventFlag(eventFlagId4)
            && ActionButtonInArea(actionButtonParameterId, areaEntityId));
    ForceAnimationPlayback(10000, 100111, false, false, false);
    SetSpEffect(10000, 4682, false);
    SummonNPC(signType, areaEntityId, entityId, eventFlagId, eventFlagId2);
    ClearSpEffect(10000, 9005);
    ClearSpEffect(10000, 9025);
    WaitFixedTimeSeconds(5);
    DisplayMessage(100051, 0);
});

// ★廃墟_新NPC召喚_ボス部屋に入る_XX
$Event(12304460, Restart, function(chrEntityId, areaEntityId, entityId, areaEntityId2, playAnimationId, eventFlagId, areaEntityId3) {
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    WaitFor(EventFlag(eventFlagId) && InArea(chrEntityId, areaEntityId));
    RequestCharacterAnimationReset(chrEntityId, Interpolation.Interpolated);
    RotateCharacter(chrEntityId, entityId, playAnimationId, true);
    RestartIf(!InArea(chrEntityId, areaEntityId2));
    SetEventPoint(chrEntityId, entityId, 1);
    RequestCharacterAICommand(chrEntityId, 990, 0);
    RequestCharacterAIReplan(chrEntityId);
    SetCharacterGravity(chrEntityId, Disabled);
    SetCharacterMaphits(chrEntityId, true);
    WaitFor(InArea(chrEntityId, areaEntityId3));
    SetCharacterGravity(chrEntityId, Enabled);
    SetCharacterMaphits(chrEntityId, false);
    RequestCharacterAICommand(chrEntityId, -1, 0);
    RequestCharacterAIReplan(chrEntityId);
});

// いんちきNPC召喚_協力_参加
$Event(12304500, Restart, function() {
    if (ThisEvent()) {
        SetCharacterDefaultBackreadState(2300740, Enabled);
        SetSpEffect(2300740, 9006, false);
        ChangeCharacterEnableState(2300740, Enabled);
        EndEvent();
    }
L0:
    ChangeCharacterEnableState(2300740, Disabled);
    SetCharacterAIState(2300740, Disabled);
    if (CharacterType(10000, TargetType.Alive)) {
        SetNetworkUpdateAuthority(2300740, AuthorityLevel.Forced);
    }
    WaitFor(
        CharacterType(10000, TargetType.Alive)
            && EventFlag(12304508)
            && InArea(10000, 2302721)
            && !EventFlag(12301800)
            && EventFlag(72400461)
            && AnyBatchEventFlags(1340, 1341));
    WaitFixedTimeSeconds(5);
    SetEventFlag(12304509, ON);
    PlaySE(10000, SoundType.fMenuSE, 100000009);
    WaitFixedTimeSeconds(5);
    PlaySE(10000, SoundType.fMenuSE, 100000020);
    SetCharacterDefaultBackreadState(2300740, Enabled);
    SetSpEffect(2300740, 9006, false);
    ChangeCharacterEnableState(2300740, Enabled);
    ForceAnimationPlayback(2300740, 101201, false, true, false);
    SetCharacterAIState(2300740, Enabled);
});

// いんちきNPC召喚_協力_帰還
$Event(12304501, Restart, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    EndIf(EventFlag(12301800));
    EndIf(ThisEvent());
    WaitFor(EventFlag(12304502));
L0:
    ChangeCharacterEnableState(2300740, Disabled);
    SetCharacterDefaultBackreadState(2300740, Disabled);
});

// いんちきNPC召喚_協力_帰還_成功
$Event(12304502, Restart, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    EndIf(EventFlag(12301800));
    EndIf(EventFlag(12304501));
    EndIf(ThisEvent());
    WaitFor(EventFlag(12304500) && !EventFlag(12304501) && EventFlag(12301800));
L0:
    RequestCharacterAICommand(2300740, 991, 0);
    RequestCharacterAIReplan(2300740);
    WaitFixedTimeSeconds(1);
    SetSpEffect(2300740, 5560, false);
    SpawnOneshotSFX(TargetEntityType.Character, 2300740, 236, 121);
    WaitFixedTimeSeconds(2);
    ChangeCharacterEnableState(2300740, Disabled);
});

// いんちきNPC召喚_協力_ボス部屋を目指す
$Event(12304504, Restart, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    EndIf(EventFlag(12301800));
    EndIf(EventFlag(12304501));
    EndIf(EventFlag(12304505));
    EndIf(ThisEvent());
    WaitFor(
        !EventFlag(12301800)
            && EventFlag(12304500)
            && !EventFlag(12304501)
            && EventFlag(12301802)
            && EventFlag(12304800)
            && !InArea(2300740, 2302801));
L0:
    SetEventPoint(2300740, 2302722, 1);
    RequestCharacterAICommand(2300740, 990, 0);
    RequestCharacterAIReplan(2300740);
});

// いんちきNPC召喚_協力_ボス部屋に入る
$Event(12304505, Restart, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    EndIf(EventFlag(12301800));
    EndIf(EventFlag(12304501));
    EndIf(ThisEvent());
    WaitFor(EventFlag(12304504) && InArea(2300740, 2302722));
    RequestCharacterAnimationReset(2300740, Interpolation.Interpolated);
    RotateCharacter(2300740, 2302800, 101130, true);
    RequestCharacterAICommand(2300740, -1, 0);
    RequestCharacterAIReplan(2300740);
});

// 共闘血族狩り_メッセンジャー
$Event(12304506, Restart, function() {
    SetVisibilityOfMessage(2303300, Disabled);
    DeleteMapSFX(2303400, false);
    EndIf(ThisEvent());
    WaitFor(
        PlayerHasItem(ItemType.Goods, 200)
            && CharacterType(10000, TargetType.Alive)
            && !EventFlag(12301800)
            && EventFlag(72400461)
            && AnyBatchEventFlags(1340, 1341));
    SetVisibilityOfMessage(2303300, Enabled);
    SpawnMapSFX(2303400);
    WaitFor(EventFlag(12304509) || EventFlag(12301800));
    SetVisibilityOfMessage(2303300, Disabled);
    DeleteMapSFX(2303400, true);
});

// いんちきNPC召喚_鐘を鳴らした瞬間判定_廃墟
$Event(12304507, Restart, function() {
    WaitFor(CharacterType(10000, TargetType.Alive) && CharacterHasSpEffect(10000, 9000));
    SetEventFlag(12304508, ON);
    WaitFixedTimeFrames(1);
    SetEventFlag(12304508, OFF);
    WaitFor(CharacterType(10000, TargetType.Alive) && !CharacterHasSpEffect(10000, 9000));
    RestartEvent();
});

// 猟犬が飛び出す
$Event(12300100, Restart, function() {
    if (ThisEventSlot()) {
        WarpCharacterAndSetFloor(2300204, TargetEntityType.Area, 2302300, -1, 2306000);
        ReproduceObjectDestruction(2301000, 1);
        EndEvent();
    }
L0:
    SetCharacterGravity(2300204, Disabled);
    SetCharacterAIState(2300204, Disabled);
    WaitFor(
        ((CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
            && (InArea(10000, 2302000) || EntityInRadiusOfEntity(10000, 2300204, 7)))
            || HasDamageType(2300204, -1, DamageType.Unspecified));
    ForceAnimationPlayback(2300204, 7015, false, false, false);
    SetCharacterGravity(2300204, Enabled);
    SetCharacterAIState(2300204, Enabled);
    SetCharacterHome(2300204, 2302300);
    RequestCharacterAIReplan(2300204);
});

// 一方通行扉を調べた時のMｓｇ_XX
$Event(12300110, Default, function(actionButtonParameterId, areaEntityId, eventFlagId) {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(eventFlagId));
    act = ActionButtonInArea(actionButtonParameterId, areaEntityId);
    flag = EventFlag(eventFlagId);
    WaitFor(act || flag);
    if (!flag.Passed) {
        DisplayGenericDialog(10010161, PromptType.OKCANCEL, NumberofOptions.OneButton, areaEntityId, 3);
        WaitFixedTimeSeconds(0);
        RestartEvent();
    }
L0:
    WaitFixedTimeSeconds(0);
    RestartEvent();
});

// 扉開放処理_XX
$Event(12300120, Default, function(objEntityId, objactEventFlag, animationId, objParameterId) {
    if (ThisEventSlot()) {
        ReproduceObjectAnimation(objEntityId, animationId);
        SetObjactState(objEntityId, objParameterId, Disabled);
        NotifySoundDampeningOfDoorEvent(objEntityId, DoorState.DoorOpening);
        EndEvent();
    }
L0:
    WaitFor(ObjActEventFlag(objactEventFlag));
    WaitFixedTimeSeconds(0);
});

// 祭壇を調べる
$Event(12300130, Default, function() {
    EndIf(ThisEvent());
    EndIf(!CharacterType(10000, TargetType.Alive));
    CreateObjectfollowingSFX(2301500, 200, 900201);
    WaitFor(ActionButtonInArea(2300000, 2301500));
    AwardItemLot(2300170);
    DeleteObjectfollowingSFX(2301500, true);
});

// 演出用風再生
$Event(12300140, Restart, function() {
    DeleteMapSFX(2303002, true);
    EndIf(ThisEventSlot());
    WaitFor(InArea(10000, 2303000));
    DeleteMapSFX(2303010, true);
    SpawnMapSFX(2303002);
    WaitFixedTimeSeconds(4);
    SpawnMapSFX(2303010);
});

// 儀式音無効化
$Event(12300160, Restart, function() {
    if (!EventFlag(12300240)) {
        WaitFor(
            CharacterAIState(2300605, AIStateType.Combat)
                || EventFlag(12300240)
                || EventFlag(12305392)
                || EventFlag(12305393));
    }
L0:
    SetMapSoundState(2304020, Disabled);
});

// 警告の扉_開放処理
$Event(12300180, Default, function() {
    if (ThisEvent()) {
        ReproduceObjectAnimation(2301020, 1);
        SetObjactState(2301020, 2300011, Disabled);
        NotifySoundDampeningOfDoorEvent(2301020, DoorState.DoorOpening);
        EndEvent();
    }
L0:
    SetObjactState(2301020, 2300011, Disabled);
    WaitFor(EventFlag(12300190));
    SetObjactState(2301020, 2300011, Enabled);
    WaitFor(ObjActEventFlag(12300214));
    WaitFixedTimeSeconds(0);
});

// 警告の扉を調べた時のMsg
$Event(12300190, Default, function() {
    EndIf(ThisEvent());
    WaitFor(CharacterType(10000, TargetType.Alive) && ActionButtonInArea(2300020, 2301020));
    EndIf(!CharacterType(10000, TargetType.Alive));
    DisplayGenericDialog(10010165, PromptType.OKCANCEL, NumberofOptions.OneButton, 2301020, 3);
});

// 最下層到達
$Event(12300201, Restart, function() {
    EndIf(ThisEvent());
    WaitFor(EventFlag(12301800));
    SetEventFlag(12300200, ON);
});

// NPC死亡
$Event(12300210, Restart, function() {
    if (ThisEventSlot()) {
        ForceCharacterTreasure(2300720);
        SetCharacterBackreadState(2300720, true);
        ChangeCharacterEnableState(2300720, Disabled);
        EndEvent();
    }
L0:
    WaitFor(CharacterDead(2300720));
    SetCharacterBackreadState(2300720, true);
});

// さまよう狂気_XX
$Event(12300220, Restart, function(chrEntityId, eventFlagId) {
    if (ThisEventSlot()) {
        SetCharacterBackreadState(chrEntityId, true);
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

// 廃墟ハンター煙利用攻撃
$Event(12300230, Restart, function() {
    WaitFor(InArea(2300720, 2302180) || InArea(2300720, 2302181) || InArea(2300720, 2302182));
    RequestCharacterAICommand(2300720, 100, 0);
    WaitFor(!InArea(2300720, 2302180) && !InArea(2300720, 2302181) && !InArea(2300720, 2302182));
    RequestCharacterAICommand(2300720, -1, 0);
    RestartEvent();
});

// 廃墟ハンター防衛領域に戻る
$Event(12300235, Restart, function() {
    WaitFor(!InArea(2300720, 2302190));
    RequestCharacterAICommand(2300720, 110, 0);
    WaitFor(InArea(2300720, 2302190));
    RequestCharacterAICommand(2300720, -1, 0);
    RestartEvent();
});

// ご神体炎上
$Event(12300240, Restart, function() {
    if (ThisEvent()) {
        ModifyNavimeshConnectionBitflag(2303070, NavimeshType.Solid, BitopType.Add);
        ReproduceObjectAnimation(2301322, 1);
        CreateObjectfollowingSFX(2301323, 750, 923240);
        EndEvent();
    }
L0:
    WaitFor(ObjectDestroyed(2301320));
    ModifyNavimeshConnectionBitflag(2303070, NavimeshType.Solid, BitopType.Add);
    ForceAnimationPlayback(2301322, 1, false, true, false);
    DeactivateObject(2301322, Disabled);
    CreateObjectfollowingSFX(2301323, 750, 923240);
});

// ご神体炎にダメージ判定
$Event(12300250, Restart, function() {
    WaitFor(EventFlag(12300240));
    CreateDamagingObject(12300251, 2301450, 200, 6110, DamageTargetType.Character, 4.5, 0, 1);
    CreateDamagingObject(12300252, 2301451, 200, 6110, DamageTargetType.Character, 0.6, 0, 1);
    CreateDamagingObject(12300253, 2301452, 200, 6110, DamageTargetType.Character, 1.5, 0, 1);
    CreateDamagingObject(12300254, 2301453, 200, 6110, DamageTargetType.Character, 0.7, 0, 1);
    CreateDamagingObject(12300255, 2301454, 200, 6110, DamageTargetType.Character, 1.2, 0, 1);
    CreateDamagingObject(12300256, 2301455, 200, 6110, DamageTargetType.Character, 0.5, 0, 1);
    CreateDamagingObject(12300257, 2301456, 200, 6110, DamageTargetType.Character, 0.8, 0, 1);
    CreateDamagingObject(12300258, 2301457, 200, 6110, DamageTargetType.Character, 1.5, 0, 1);
    CreateDamagingObject(12300259, 2301458, 200, 6110, DamageTargetType.Character, 1, 0, 1);
});

// 時間帯変化_廃墟
$Event(12300300, Default, function() {
    if (!EventFlag(9802)) {
        GotoIf(L0, EventFlag(9801));
        ActivateMapPart(2306010, Enabled);
        ActivateMapPart(2306011, Disabled);
        ActivateMapPart(2304000, Disabled);
    } else {
L0:
        ActivateMapPart(2306010, Disabled);
        ActivateMapPart(2306011, Enabled);
        ActivateMapPart(2304000, Enabled);
        DeleteMapSFX(2303600, false);
        DeleteMapSFX(2303601, false);
        DeleteMapSFX(2303602, false);
        DeleteMapSFX(2303603, false);
        DeleteMapSFX(2303604, false);
        DeleteMapSFX(2303605, false);
        DeleteMapSFX(2303606, false);
        DeleteMapSFX(2303607, false);
        DeleteMapSFX(2303608, false);
        DeleteMapSFX(2303609, false);
        DeleteMapSFX(2303610, false);
        DeleteMapSFX(2303611, false);
        DeleteMapSFX(2303612, false);
        DeleteMapSFX(2303613, false);
        DeleteMapSFX(2303614, false);
        Goto(L1);
    }
L1:
    WaitFor(
        EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 9800)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 9801)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 9802));
    RestartEvent();
});

// 宝箱_XX
$Event(12300310, Default, function(objEntityId, objactEventFlag, objParameterId) {
    if (ThisEventSlot()) {
        ReproduceObjectAnimation(objEntityId, 0);
        SetObjactState(objEntityId, objParameterId, Disabled);
        SetObjectTreasureState(objEntityId, Enabled);
        EndEvent();
    }
L0:
    WaitFor(ObjActEventFlag(objactEventFlag));
    WaitFixedTimeFrames(10);
    SetObjectTreasureState(objEntityId, Enabled);
});

// さまよう狂気が導く
$Event(12305000, Restart, function() {
    EndIf(EventFlag(12305001));
    if (!ThisEvent()) {
        SetCharacterAIState(2300250, Disabled);
        WaitFor(
            ((CharacterType(10000, TargetType.Alive)
                || CharacterType(10000, TargetType.WhitePhantom))
                && EntityInRadiusOfEntity(2300250, 10000, 10))
                || HasDamageType(2300250, -1, DamageType.Unspecified));
    }
L0:
    SetCharacterAIState(2300250, Enabled);
    WaitFixedTimeFrames(1);
    SetCharacterHome(2300250, 2302310);
    RequestCharacterAICommand(2300250, 10, 0);
    RequestCharacterAIReplan(2300250);
});

// さまよう狂気が導く_消える
$Event(12305001, Restart, function() {
    EndIf(ThisEvent());
    WaitFor(InArea(2300250, 2302310));
    ForceAnimationPlayback(2300250, 3000, false, false, false);
    RequestCharacterAICommand(2300250, -1, 0);
    RequestCharacterAIReplan(2300250);
});

// 寝ているヤツが強襲_XX
$Event(12305010, Restart, function(chrEntityId, animationId, eventSlotId, aiId) {
    if (ThisEventSlot()) {
        SetCharacterAIId(chrEntityId, aiId);
        SetEventState(12305140, eventSlotId, EventEndType.End);
        SetEventState(12305160, eventSlotId, EventEndType.End);
        EndEvent();
    }
L0:
    chr = (CharacterAIState(2300305, AIStateType.Combat) && !CharacterDead(2300305))
        || (CharacterAIState(2300305, AIStateType.Combat) && !CharacterDead(2300305))
        || (CharacterAIState(2300401, AIStateType.Combat) && !CharacterDead(2300401));
    chr2 = CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom);
    WaitFor(
        (chr2 && InArea(10000, 2302147) && chr)
            || CharacterAIState(chrEntityId, AIStateType.Recognition)
            || CharacterAIState(chrEntityId, AIStateType.Combat)
            || CharacterHasSpEffect(chrEntityId, 4670));
    WaitFixedTimeSeconds(3);
    SetCharacterAIId(chrEntityId, aiId);
    ShootBullet(2300900, chrEntityId, 90, 6031, 0, 0, 0);
    ForceAnimationPlayback(chrEntityId, animationId, false, false, false);
    SetEventState(12305140, eventSlotId, EventEndType.End);
    SetEventState(12305160, eventSlotId, EventEndType.End);
});

// ガトリングがロジックON
$Event(12305020, Restart, function() {
    SetCharacterAIState(2300730, Disabled);
    WaitFor(
        (CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
            && (InArea(10000, 2302020) || InArea(10000, 2302021))
            && !EventFlag(1325)
            && !CharacterDead(2300710));
    SetCharacterAIState(2300730, Enabled);
});

// ガトリング完全停止
$Event(12305021, Restart, function() {
    if (!EventFlag(1324)) {
        WaitFor(CharacterDead(2300710) || EventFlag(1324));
    }
L0:
    ForceAnimationPlayback(2300730, 7000, true, false, false);
});

// ガトリング位置合わせ
$Event(12305022, Restart, function() {
    SetCharacterGravity(2300730, Disabled);
    SetCharacterMaphits(2300730, true);
});

// ガトリング一時停止
$Event(12305023, Restart, function() {
    chr = CharacterAIState(2300710, AIStateType.Combat);
    chr2 = CharacterDead(2300710);
    WaitFor(chr || chr2);
    EndIf(chr2.Passed);
    ForceAnimationPlayback(2300730, 7000, true, false, false);
    chr3 = CharacterAIState(2300710, AIStateType.Normal);
    chr4 = CharacterDead(2300710);
    WaitFor(chr3 || chr4);
    EndIf(chr4.Passed);
    ForceAnimationPlayback(2300730, 7001, false, true, false);
    RestartEvent();
});

// スナイパーが誘爆狙い
$Event(12305030, Restart, function(areaEntityId, objEntityId, chrEntityId) {
    WaitFor(
        (CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
            && InArea(10000, areaEntityId)
            && !ObjectDestroyed(objEntityId));
    SetCharacterEventTarget(2300730, chrEntityId);
    RequestCharacterAICommand(2300730, 100, 0);
    RequestCharacterAIReplan(2300730);
    WaitFor(CharacterHasEventMessage(2300730, 100));
    RequestCharacterAICommand(2300730, -1, 0);
    RequestCharacterAIReplan(2300730);
    RestartEvent();
});

// 爆発壺_XX
$Event(12305040, Default, function(objEntityId, chrEntityId) {
    EndIf(ThisEventSlot());
    dmg = HasDamageType(objEntityId, -1, DamageType.Fire)
        || HasDamageType(objEntityId, -1, DamageType.None);
    WaitFor(
        dmg
            || ((HasDamageType(objEntityId, -1, DamageType.Magic)
                || HasDamageType(objEntityId, -1, DamageType.Lightning)
                || HasDamageType(objEntityId, -1, DamageType.Blunt)
                || HasDamageType(objEntityId, -1, DamageType.Slash)
                || HasDamageType(objEntityId, -1, DamageType.Thrust))
                && ObjectHP(objEntityId) <= 999));
    if (!dmg.Passed) {
        ShootBullet(chrEntityId, objEntityId, -1, 6051, 270, 0, 0);
        RequestObjectDestruction(objEntityId, 1);
        PlaySE(objEntityId, SoundType.oObject, 299961000);
        EndEvent();
    }
L0:
    ShootBullet(chrEntityId, objEntityId, -1, 6055, 270, 0, 0);
    ShootBullet(chrEntityId, objEntityId, -1, 6071, 0, 90, 0);
    RequestObjectDestruction(objEntityId, 1);
    PlaySE(objEntityId, SoundType.oObject, 299961000);
});

// 異形ビースト大が飛び出す
$Event(12305070, Restart, function() {
    if (ThisEvent()) {
        ReproduceObjectDestruction(2301310, 1);
        EndEvent();
    }
L0:
    SetCharacterAIState(2300601, Disabled);
    SetCharacterGravity(2300601, Disabled);
    SetCharacterMaphits(2300601, true);
    SetCharacterAnimationState(2300601, Disabled);
    WaitFor(
        ((CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
            && (InArea(10000, 2302040) || EntityInRadiusOfEntity(10000, 2300601, 3)))
            || HasDamageType(2300520, -1, DamageType.Unspecified));
    ForceAnimationPlayback(2300601, 7014, false, false, false);
    SetCharacterAIState(2300601, Enabled);
    SetCharacterAnimationState(2300601, Enabled);
    WaitFixedTimeFrames(30);
    SetCharacterGravity(2300601, Enabled);
    SetCharacterMaphits(2300601, false);
});

// 寝ている異形ビーストが強襲Ⅱ_XX
$Event(12305075, Restart, function(chrEntityId, animationId, eventSlotId, aiId) {
    if (ThisEventSlot()) {
        SetCharacterAIId(chrEntityId, aiId);
        SetEventState(12305140, eventSlotId, EventEndType.End);
        SetEventState(12305160, eventSlotId, EventEndType.End);
        EndEvent();
    }
L0:
    WaitFor(
        EventFlag(12305070)
            || CharacterAIState(chrEntityId, AIStateType.Recognition)
            || CharacterAIState(chrEntityId, AIStateType.Combat)
            || CharacterHasSpEffect(chrEntityId, 4670));
    SetCharacterAIId(chrEntityId, aiId);
    ShootBullet(2300900, chrEntityId, 90, 6031, 0, 0, 0);
    ForceAnimationPlayback(chrEntityId, animationId, false, false, false);
    SetEventState(12305140, eventSlotId, EventEndType.End);
    SetEventState(12305160, eventSlotId, EventEndType.End);
});

// 煙に隠れる
$Event(12305080, Restart, function() {
    EndIf(AnyBatchEventFlags(12305081, 12305082));
    if (!ThisEvent()) {
        chrArea = (CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
            && (InArea(10000, 2302010) || EntityInRadiusOfEntity(10000, 2300314, 10));
        flag = AnyBatchEventFlags(12305081, 12305082);
        WaitFor(chrArea || flag || HasDamageType(2300314, -1, DamageType.Unspecified));
        EndIf(flag.Passed);
    }
L0:
    SetCharacterHome(2300314, 2302350);
    RequestCharacterAICommand(2300314, 10, 0);
    RequestCharacterAIReplan(2300314);
});

// 煙の中で待機
$Event(12305081, Restart, function() {
    EndIf(EventFlag(12305082));
    if (!ThisEvent()) {
        WaitFor(InArea(2300314, 2302050));
    }
L0:
    RequestCharacterAICommand(2300314, 30, 0);
    RequestCharacterAIReplan(2300314);
});

// 待機を解除
$Event(12305082, Restart, function() {
    EndIf(ThisEvent());
    WaitFor(
        (CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
            && (InArea(10000, 2302011) || EntityInRadiusOfEntity(10000, 2300314, 3)));
    RequestCharacterAICommand(2300314, -1, 0);
    RequestCharacterAIReplan(2300314);
});

// 大爆発_XX
$Event(12305090, Default, function(timeFrames, entityId) {
    EndIf(EventFlag(12300240));
    WaitFor(EventFlag(12300240));
    WaitFixedTimeFrames(timeFrames);
    ShootBullet(2300900, entityId, 101, 6070, 0, 0, 0);
});

// 怯える異形ビースト_XX
$Event(12305100, Restart, function(chrEntityId, areaEntityId, timeFrames) {
    if (!EventFlag(12300240)) {
        WaitFor(
            EventFlag(12300240)
                && InArea(chrEntityId, areaEntityId)
                && CharacterAIState(chrEntityId, AIStateType.Normal));
        WaitFixedTimeFrames(timeFrames);
    }
L0:
    ForceAnimationPlayback(chrEntityId, 7012, true, false, false);
});

// 異形ビースト死亡_XX
$Event(12305110, Restart, function(chrEntityId, timeFrames) {
    EndIf(EventFlag(12300240));
    WaitFor(EventFlag(12300240) && CharacterAIState(chrEntityId, AIStateType.Normal));
    WaitFixedTimeFrames(timeFrames);
    ForceCharacterDeath(chrEntityId, true);
});

// 狼狽える異形ビースト
$Event(12305120, Restart, function() {
    WaitFor(EventFlag(12300240) && CharacterAIState(2300605, AIStateType.Normal));
    SetCharacterEventTarget(2300605, 2300921);
    RequestCharacterAICommand(2300605, 60, 0);
    WaitFor(CharacterAIState(2300605, AIStateType.Combat));
    RequestCharacterAICommand(2300605, -1, 0);
    RestartEvent();
});

// 寝ている異形ビーストが強襲Ⅲ_XX
$Event(12305121, Restart, function(chrEntityId, animationId, eventSlotId, aiId) {
    if (ThisEventSlot()) {
        SetCharacterAIId(chrEntityId, aiId);
        SetEventState(12305140, eventSlotId, EventEndType.End);
        SetEventState(12305160, eventSlotId, EventEndType.End);
        EndEvent();
    }
L0:
    cond = cond2;
    WaitFor(
        CharacterAIState(2300201, AIStateType.Combat)
            || CharacterAIState(2300202, AIStateType.Combat)
            || CharacterAIState(chrEntityId, AIStateType.Recognition)
            || CharacterAIState(chrEntityId, AIStateType.Combat)
            || CharacterHasSpEffect(chrEntityId, 4670));
    SetCharacterAIId(chrEntityId, aiId);
    ShootBullet(2300900, chrEntityId, 90, 6031, 0, 0, 0);
    ForceAnimationPlayback(chrEntityId, animationId, false, false, false);
    SetEventState(12305140, eventSlotId, EventEndType.End);
    SetEventState(12305160, eventSlotId, EventEndType.End);
});

// 猟犬初回咆哮
$Event(12305125, Restart, function() {
    EndIf(ThisEventSlot());
    WaitFor(CharacterAIState(2300201, AIStateType.Combat));
    RotateCharacter(2300201, 10000, 3008, false);
});

// 張り付き猟犬
$Event(12305130, Restart, function() {
    EndIf(ThisEvent());
    SetCharacterGravity(2300203, Disabled);
    SetCharacterMaphits(2300203, true);
    SetCharacterAIState(2300203, Disabled);
    ForceAnimationPlayback(2300203, 7016, true, false, false);
    WaitFor(
        ((CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
            && (InArea(10000, 2302090) || EntityInRadiusOfEntity(10000, 2300203, 5)))
            || HasDamageType(2300203, -1, DamageType.Unspecified));
    ForceAnimationPlayback(2300203, 7017, false, false, false);
    SetCharacterGravity(2300203, Enabled);
    SetCharacterMaphits(2300203, false);
    SetCharacterAIState(2300203, Enabled);
    RequestCharacterAIReplan(2300203);
});

// 寝ている異形ビーストが強襲Ⅳ_XX
$Event(12305135, Restart, function(chrEntityId, animationId, eventSlotId, aiId) {
    if (ThisEventSlot()) {
        SetCharacterAIId(chrEntityId, aiId);
        SetEventState(12305140, eventSlotId, EventEndType.End);
        SetEventState(12305160, eventSlotId, EventEndType.End);
        EndEvent();
    }
L0:
    WaitFor(
        ((CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
            && InArea(10000, 2302148))
            || CharacterAIState(chrEntityId, AIStateType.Recognition)
            || CharacterAIState(chrEntityId, AIStateType.Combat)
            || CharacterHasSpEffect(chrEntityId, 4670));
    SetCharacterAIId(chrEntityId, aiId);
    ShootBullet(2300900, chrEntityId, 90, 6031, 0, 0, 0);
    ForceAnimationPlayback(chrEntityId, animationId, false, false, false);
    SetEventState(12305140, eventSlotId, EventEndType.End);
    SetEventState(12305160, eventSlotId, EventEndType.End);
});

// 寝ているやつが起きそうになる
$Event(12305140, Restart, function(chrEntityId, animationId, animationId2, aiId, aiId2) {
    ForceAnimationPlayback(chrEntityId, animationId, true, false, false);
    SetCharacterAIId(chrEntityId, aiId);
    WaitFor(
        EntityInRadiusOfEntity(10000, chrEntityId, 2)
            || CharacterAIState(chrEntityId, AIStateType.Alert));
    SetCharacterAIId(chrEntityId, aiId2);
    ForceAnimationPlayback(chrEntityId, animationId2, true, false, false);
    WaitFor(CharacterAIState(chrEntityId, AIStateType.Normal));
    RestartEvent();
});

// 起きそうなやつが起きる
$Event(12305160, Restart, function(chrEntityId, animationId, eventSlotId, aiId) {
    if (ThisEventSlot()) {
        SetCharacterAIId(chrEntityId, aiId);
        EndEvent();
    }
L0:
    WaitFor(
        CharacterAIState(chrEntityId, AIStateType.Recognition)
            || CharacterAIState(chrEntityId, AIStateType.Combat)
            || CharacterHasSpEffect(chrEntityId, 4670));
    SetEventState(12305140, eventSlotId, EventEndType.End);
    WaitFixedTimeFrames(1);
    SetCharacterAIId(chrEntityId, aiId);
    ShootBullet(2300900, chrEntityId, 90, 6031, 0, 0, 0);
    ForceAnimationPlayback(chrEntityId, animationId, false, false, false);
});

// 敵ロジックON_XX
$Event(12305180, Restart, function(chrEntityId, areaEntityId, targetDistance, timeSeconds) {
    EndIf(ThisEventSlot());
    SetCharacterAIState(chrEntityId, Disabled);
    WaitFor(
        ((CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
            && (InArea(10000, areaEntityId)
                || EntityInRadiusOfEntity(10000, chrEntityId, targetDistance)))
            || CharacterDamagedBy(chrEntityId, 10000));
    WaitFixedTimeSeconds(timeSeconds);
    SetCharacterAIState(chrEntityId, Enabled);
});

// 異形ビーストが松明を恐れる_XX
$Event(12305190, Restart, function(chrEntityId) {
    SetNetworkSyncState(Disabled);
    WaitFor(CharacterHasSpEffect(10000, 404) && EntityInRadiusOfEntity(10000, chrEntityId, 4));
    RequestCharacterAIReplan(chrEntityId);
    WaitFor(!CharacterHasSpEffect(10000, 404));
    RequestCharacterAIReplan(chrEntityId);
    RestartEvent();
});

// 猟犬が巣に戻る
$Event(12305250, Restart, function() {
    WaitFor(InArea(10000, 2302070));
    RequestCharacterAICommand(2300200, 100, 1);
    WaitFor(!InArea(10000, 2302070));
    RequestCharacterAICommand(2300200, -1, 1);
    RestartEvent();
});

// 周囲強化_XX
$Event(12305300, Restart, function(chrEntityId, chrEntityId2, targetDistance) {
    WaitFor(
        CharacterHasEventMessage(chrEntityId, 10)
            && EntityInRadiusOfEntity(chrEntityId, chrEntityId2, targetDistance)
            && !CharacterDead(chrEntityId2)
            && CharacterBackreadStatus(chrEntityId2));
    RequestCharacterAICommand(chrEntityId2, 200, 1);
    WaitFor(CharacterHasEventMessage(chrEntityId2, 20));
    SetSpEffect(chrEntityId2, 5645, false);
    RequestCharacterAICommand(chrEntityId2, -1, 1);
    RestartEvent();
});

// 周囲強化_猟犬毒化_XX
$Event(12305440, Restart, function(chrEntityId, spEffectId) {
    WaitFor(CharacterHasSpEffect(chrEntityId, 5645));
    SetSpEffect(chrEntityId, spEffectId, false);
    WaitFor(!CharacterHasSpEffect(chrEntityId, 5645));
    ClearSpEffect(chrEntityId, spEffectId);
    RestartEvent();
});

// 周囲強化_渡し通路から飛び降りる
$Event(12305480, Restart, function() {
    EndIf(EventFlag(12305481));
    if (!ThisEventSlot()) {
        chr = CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom);
        chrArea = chr && InArea(10000, 2302101);
        chrArea2 = chr && EntityInRadiusOfEntity(2300406, 10000, 3);
        WaitFor(chrArea || chrArea2 || HasDamageType(2300406, -1, DamageType.Unspecified));
        EndIf(chrArea2.Passed);
    }
L0:
    SetCharacterHome(2300406, 2302410);
    RequestCharacterAICommand(2300406, 10, 0);
    RequestCharacterAIReplan(2300406);
});

// 周囲強化_渡し通路から飛び降りる完了
$Event(12305481, Restart, function() {
    if (!ThisEventSlot()) {
        WaitFor(
            ((CharacterType(10000, TargetType.Alive)
                || CharacterType(10000, TargetType.WhitePhantom))
                && EntityInRadiusOfEntity(2300406, 10000, 3))
                || InArea(2300406, 2302410)
                || HasDamageType(2300406, -1, DamageType.Unspecified));
    }
L0:
    RequestCharacterAICommand(2300406, -1, 0);
    RequestCharacterAIReplan(2300406);
});

// 周囲強化_視界操作
$Event(12305482, Restart, function() {
    if (!ThisEvent()) {
        SetCharacterAIId(2300407, 109013);
        WaitFor(EventFlag(12305480) || CharacterHasEventMessage(2300407, 20));
    }
L0:
    SetCharacterAIId(2300407, 109010);
    RequestCharacterAIReplan(2300407);
});

// 周囲強化_特殊待機_XX
$Event(12305490, Restart, function(entityId, animationId) {
    if (!ThisEventSlot()) {
        ForceAnimationPlayback(entityId, animationId, true, false, false);
        WaitFor(
            ((CharacterType(10000, TargetType.Alive)
                || CharacterType(10000, TargetType.WhitePhantom))
                && EntityInRadiusOfEntity(entityId, 10000, 7))
                || (CharacterHasEventMessage(2300603, 10)
                    || CharacterHasEventMessage(2300604, 10)
                    || CharacterHasEventMessage(2300605, 10))
                || HasDamageType(entityId, -1, DamageType.Unspecified));
    }
L0:
    ForceAnimationPlayback(entityId, 0, false, false, false);
});

// 周囲強化_強制咆哮
$Event(12305501, Restart, function() {
    if (!ThisEvent()) {
        WaitFor(
            (CharacterType(10000, TargetType.Alive)
                || CharacterType(10000, TargetType.WhitePhantom))
                && InArea(10000, 2302130));
        RequestCharacterAICommand(2300606, 40, 0);
        RequestCharacterAIReplan(2300606);
        WaitFor(CharacterAIState(2300606, AIStateType.Combat));
    }
L0:
    RequestCharacterAICommand(2300606, -1, 0);
});

// 周囲強化_強制咆哮2
$Event(12305502, Restart, function(areaEntityId, eventSlotId) {
    EndIf(ThisEvent());
    WaitFor(
        (CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
            && InArea(10000, areaEntityId));
    RequestCharacterAICommand(2300605, 40, 0);
    RequestCharacterAIReplan(2300605);
    WaitFor(CharacterHasEventMessage(2300605, 10));
    RequestCharacterAICommand(2300605, -1, 0);
    SetEventState(12305502, eventSlotId, EventEndType.End);
});

// 周囲強化_向き直り_XX
$Event(12305510, Restart, function(chrEntityId, areaEntityId, areaEntityId2, aiId, aiId2) {
    if (!ThisEventSlot()) {
        WaitFor(
            (CharacterType(10000, TargetType.Alive)
                || CharacterType(10000, TargetType.WhitePhantom))
                && InArea(10000, 2302060)
                && CharacterHasEventMessage(2300605, 10));
        SetCharacterHome(chrEntityId, areaEntityId);
        SetCharacterAIId(chrEntityId, aiId);
        WaitFixedTimeSeconds(20);
    }
L0:
    SetCharacterHome(chrEntityId, areaEntityId2);
    SetCharacterAIId(chrEntityId, aiId2);
});

// 獣の守護者_通常
$Event(12300700, Restart, function() {
    if (!EventFlag(1320)) {
        WaitFor(
            !EventFlag(1323)
                && !EventFlag(1324)
                && !EventFlag(1325)
                && CharacterType(10000, TargetType.Alive)
                && InArea(10000, 2302711));
    }
L0:
    SetCharacterTeamType(2300710, TeamType.FriendlyNPC);
    BatchSetEventFlags(1320, 1325, OFF);
    SetEventFlag(1320, ON);
});

// 獣の守護者_警告
$Event(12300701, Restart, function() {
    EndIf(ThisEvent());
    EndIf(EventFlag(1323));
    EndIf(EventFlag(1324));
    WaitFor(
        (CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
            && InArea(10000, 2302710)
            && EventFlag(1320));
    SetCharacterTeamType(2300710, TeamType.Enemy1);
    BatchSetEventFlags(1320, 1325, OFF);
    SetEventFlag(1321, ON);
});

// 獣の守護者_威嚇
$Event(12300702, Restart, function() {
    if (EventFlag(1322)) {
        SetCharacterTeamType(2300710, TeamType.Enemy1);
    }
L0:
    WaitFor(
        (InArea(10000, 2302020) || InArea(10000, 2302021) || InArea(10000, 2302714))
            && CharacterType(10000, TargetType.Alive)
            && !EventFlag(1323)
            && !EventFlag(1325)
            && !CharacterDead(2300710));
    SetCharacterTeamType(2300710, TeamType.Enemy1);
    BatchSetEventFlags(1320, 1325, OFF);
    SetEventFlag(1322, ON);
});

// 獣の守護者_敵対
$Event(12300703, Restart, function() {
    if (!EventFlag(1323)) {
        chr = CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom);
        WaitFor(
            (chr && EventFlag(1320) && HasDamageType(2300710, 10000, DamageType.Unspecified))
                || (chr && EventFlag(1325) && HasDamageType(2300710, 10000, DamageType.Unspecified))
                || (EventFlag(1325) && AnyBatchEventFlags(12300710, 12300739))
                || EventFlag(72300307));
    }
L0:
    SetCharacterTeamType(2300710, TeamType.Enemy1);
    RequestCharacterAIReplan(2300710);
    BatchSetEventFlags(1320, 1325, OFF);
    SetEventFlag(1323, ON);
    SaveRequest(0);
});

// 獣の守護者_死亡
$Event(12300704, Restart, function() {
    if (EventFlag(1324)) {
        ChangeCharacterEnableState(2300710, Disabled);
        ForceCharacterTreasure(2300710);
        EndEvent();
    }
L0:
    WaitFor(CharacterDead(2300710));
L1:
    WaitFixedTimeFrames(1);
    BatchSetEventFlags(1320, 1325, OFF);
    SetEventFlag(1324, ON);
    SetEventFlag(5914, ON);
    SaveRequest(0);
});

// 獣の守護者_友好
$Event(12300705, Restart, function() {
    if (EventFlag(1325)) {
        SetCharacterTeamType(2300710, TeamType.FriendlyNPC);
        EndEvent();
    }
L0:
    WaitFor(EventFlag(1320) && EventFlag(72300305));
    BatchSetEventFlags(1320, 1325, OFF);
    SetEventFlag(1325, ON);
});

// 獣の守護者_後ろを振り向く
$Event(12305701, Restart, function() {
    EndIf(ThisEvent());
    EndIf(EventFlag(1324));
    ForceAnimationPlayback(2300710, 103041, true, false, false);
    chr = CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom);
    WaitFor(
        (chr && InArea(10000, 2302700) && (EventFlag(1321) || EventFlag(1322) || EventFlag(1323)))
            || (chr && InArea(10000, 2302701) && (EventFlag(1320) || EventFlag(1325))));
    RotateCharacter(2300710, 10000, 103040, false);
    ChangeCharacterPatrolBehavior(2300710, 2303060);
});

// 獣の守護者_強制帰巣
$Event(12300707, Restart, function() {
    cond = EventFlag(1321) || EventFlag(1322) || EventFlag(1323);
    WaitFor(!AllPlayersInArea(2302500) && cond);
    SetCharacterHome(2300710, 2302320);
    RequestCharacterAICommand(2300710, 20, 0);
    RequestCharacterAIReplan(2300710);
    chr = CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom);
    WaitFor(cond && InArea(10000, 2302500));
    RequestCharacterAICommand(2300710, -1, 0);
    RequestCharacterAIReplan(2300710);
    RestartEvent();
});

// 獣の守護者_危険域察知
$Event(12300708, Restart, function() {
    WaitFor(InArea(2300710, 2302502));
    RequestCharacterAICommand(2300710, 100, 1);
    WaitFor(!InArea(2300710, 2302502));
    RequestCharacterAICommand(2300710, -1, 1);
    RestartEvent();
});

// 獣の守護者を裏切る
$Event(12300710, Restart, function(entityId) {
    if (!AnyBatchEventFlags(12300710, 12300739)) {
        WaitFor(EventFlag(1325) && HasDamageType(entityId, 10000, DamageType.Unspecified));
    }
L0:
    SetEventFlag(12300709, ON);
});

// 獣の守護者_会話抑制
$Event(12300750, Restart, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    SetEventFlag(12300751, OFF);
    WaitFor(
        !InArea(10000, 2302160) && !InArea(10000, 2302161) && CharacterType(10000, TargetType.Alive));
    SetEventFlag(12300751, ON);
    WaitFor(
        (InArea(10000, 2302160) || InArea(10000, 2302161)) && CharacterType(10000, TargetType.Alive));
    RestartEvent();
});

// 獣の守護者_AI更新権限を固定
$Event(12300752, Restart, function() {
    if (CharacterType(10000, TargetType.Alive)) {
        SetNetworkUpdateAuthority(2300710, AuthorityLevel.Forced);
        SetNetworkUpdateAuthority(2300730, AuthorityLevel.Forced);
    }
L0:
    SetNetworkUpdateRate(2300730, true, CharacterUpdateFrequency.AlwaysUpdate);
    SetNetworkUpdateRate(2300710, true, CharacterUpdateFrequency.AlwaysUpdate);
});

// 獣の守護者_会話限界距離制御
$Event(12300753, Restart, function() {
    WaitFor(PlayerInMap(23, 0));
    SetDistanceLimitForConversationStateProcessing(2300710, 130);
    WaitFor(!PlayerInMap(23, 0));
    SetDistanceLimitForConversationStateProcessing(2300710, 17);
    RestartEvent();
});

// マップ初回入場_プレイログ
$Event(12300990, Default, function() {
    EndIf(ThisEvent());
    WaitFor(PlayerStandingOnHit(2303500));
    ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 154, PlayLogMultiplayerType.HostOnly);
    ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 154, PlayLogMultiplayerType.HostOnly);
    ParameterOutput(PlayerPlayLogParameter.Weapon, 154, PlayLogMultiplayerType.HostOnly);
    ParameterOutput(PlayerPlayLogParameter.Armor, 154, PlayLogMultiplayerType.HostOnly);
});

// スナイパー到達
$Event(12304020, Default, function() {
    WaitFor(InArea(10000, 2302900));
    CreatePlaylog(176);
});

// 御神体破壊場所到達
$Event(12304021, Default, function() {
    WaitFor(InArea(10000, 2302901));
    CreatePlaylog(202);
});

// ボス戦毒効果発動
$Event(12304022, Default, function() {
    WaitFor(EventFlag(12304830) && CharacterHasSpEffect(10000, 5660));
    EndTimeMeasurement(2301000);
});


