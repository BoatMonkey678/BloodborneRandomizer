// ==EMEVD==
// @docs    bb-common.emedf.json
// @compress    DCX_DFLT_10000_44_9
// @game    Bloodborne
// @string    "クリア時間_通し\u0000クリア時間_1プレイ\u0000ボス_撃破\u0000PC情報_ボス撃破_闇の旅団\u0000ボス_戦闘開始\u0000ボス戦_撃破時間\u0000ギミック_エレベーター起動\u0000PC情報_森到達時\u0000N:\\SPRJ\\data\\Param\\event\\common.emevd\u0000"
// @linked    [164]
// @version    3.6.2
// ==/EMEVD==

// コンストラクタ
$Event(0, Default, function() {
    $InitializeEvent(35, 7000, 2700950, 2701950, 999, 12707800);
    $InitializeEvent(36, 7000, 2700951, 2701951, 12701800, 12707820);
    $InitializeEvent(35, 7100, 72700200, 2701950);
    $InitializeEvent(36, 7100, 72700201, 2701951);
    $InitializeEvent(35, 7200, 72700100, 2701950, 2102951);
    $InitializeEvent(36, 7200, 72700101, 2701951, 2102951);
    $InitializeEvent(35, 7300, 72102700, 2701950);
    $InitializeEvent(36, 7300, 72102701, 2701951);
    $InitializeEvent(50, 7600, 2701999, 2703999);
    $InitializeEvent(51, 7600, 2701998, 2703998);
    $InitializeEvent(7, 9200, 2703900);
    $InitializeEvent(6, 9220, 2700710, 12704220, 12704221, 2700, 27, 0);
    $InitializeEvent(6, 9240, 2700710, 12704220, 12704221, 12704222, 27, 0);
    $InitializeEvent(6, 9260, 2700710, 12704220, 12704221, 12704222, 27, 0);
    $InitializeEvent(6, 9280, 2700710, 12704220, 12704221, 2700, 12704800, 27, 0);
    DeleteMapSFX(2703910, false);
    DeleteMapSFX(2703911, false);
    DeleteMapSFX(2703912, false);
    $InitializeEvent(0, 12704400, 12704440, 2703910, 12704420, 12704430, 12701800, 6001);
    $InitializeEvent(0, 12704401, 12704441, 2703911, 12704421, 12704431, 12701800, 6001);
    $InitializeEvent(0, 12704410, 5, 2700920, 2702910, 12704420, 12704430, 12704440, 12701800, 10561);
    $InitializeEvent(1, 12704410, 5, 2700921, 2702913, 12704421, 12704431, 12704441, 12701800, 10565);
    $InitializeEvent(0, 12704450, 2700920, 2702914, 12704420, 12704430, 12704800);
    $InitializeEvent(1, 12704450, 2700921, 2702911, 12704421, 12704431, 12704800);
    $InitializeEvent(0, 12704460, 2700920, 2702914, 2702800, 2702801, 101130, 12704800, 2702801);
    $InitializeEvent(1, 12704460, 2700921, 2702911, 2702800, 2702801, 101130, 12704800, 2702801);
    RegisterLadder(12700602, 12700603, 2701071);
    RegisterLadder(12700604, 12700605, 2701072);
    RegisterLadder(12700606, 12700607, 2701073);
    CreateDamagingObject(12700050, 2701080, 100, 6010, DamageTargetType.Character, 0.5, 0, 1);
    CreateDamagingObject(12700050, 2701081, 100, 6010, DamageTargetType.Character, 0.5, 0, 1);
    CreateDamagingObject(12700050, 2701082, 100, 6010, DamageTargetType.Character, 0.5, 0, 1);
    CreateDamagingObject(12700050, 2701083, 100, 6010, DamageTargetType.Character, 0.5, 0, 1);
    CreateDamagingObject(12700050, 2701084, 100, 6010, DamageTargetType.Character, 0.5, 0, 1);
    CreateDamagingObject(12700050, 2701085, 100, 6010, DamageTargetType.Character, 0.5, 0, 1);
    CreateDamagingObject(12700050, 2701086, 100, 6010, DamageTargetType.Character, 0.5, 0, 1);
    CreateDamagingObject(12701100, 2701300, 200, 6110, DamageTargetType.Character, 0.7, 0, 1);
    CreateDamagingObject(12701101, 2701301, 200, 6110, DamageTargetType.Character, 0.7, 0, 1);
    CreateDamagingObject(12701102, 2701302, 200, 6110, DamageTargetType.Character, 0.7, 0, 1);
    CreateDamagingObject(12701103, 2701303, 200, 6110, DamageTargetType.Character, 0.7, 0, 1);
    CreateDamagingObject(12701104, 2701304, 200, 6110, DamageTargetType.Character, 0.7, 0, 1);
    CreateDamagingObject(12701105, 2701305, 200, 6110, DamageTargetType.Character, 0.7, 0, 1);
    CreateDamagingObject(12701106, 2701306, 200, 6110, DamageTargetType.Character, 0.7, 0, 1);
    StartTimeMeasurement(2700000, 0, Disabled);
    StartTimeMeasurement(2700001, 18, Enabled);
    if (CharacterType(10000, TargetType.Alive)) {
        if (EventFlag(6316)) {
            SetEventFlag(12701999, ON);
        }
    }
    if (!EventFlag(12701999)) {
        DeactivateObject(2701500, Enabled);
        DeactivateObject(2701501, Disabled);
        SetObjectTreasureState(2701500, Enabled);
        SetObjectTreasureState(2701501, Disabled);
    } else {
        DeactivateObject(2701500, Disabled);
        DeactivateObject(2701501, Enabled);
        SetObjectTreasureState(2701500, Disabled);
        SetObjectTreasureState(2701501, Enabled);
    }
    if (CharacterType(10000, TargetType.Alive)) {
        if (EventFlag(6317)) {
            SetEventFlag(12701998, ON);
        }
    }
    if (!EventFlag(12701998)) {
        DeactivateObject(2701502, Enabled);
        DeactivateObject(2701503, Disabled);
        SetObjectTreasureState(2701502, Enabled);
        SetObjectTreasureState(2701503, Disabled);
    } else {
        DeactivateObject(2701502, Disabled);
        DeactivateObject(2701503, Enabled);
        SetObjectTreasureState(2701502, Disabled);
        SetObjectTreasureState(2701503, Enabled);
    }
    if (CharacterType(10000, TargetType.Alive)) {
        if (EventFlag(6318)) {
            SetEventFlag(12701997, ON);
        }
    }
    if (!EventFlag(12701997)) {
        DeactivateObject(2701504, Enabled);
        DeactivateObject(2701505, Disabled);
        SetObjectTreasureState(2701504, Enabled);
        SetObjectTreasureState(2701505, Disabled);
    } else {
        DeactivateObject(2701504, Disabled);
        DeactivateObject(2701505, Enabled);
        SetObjectTreasureState(2701504, Disabled);
        SetObjectTreasureState(2701505, Enabled);
    }
    if (CharacterType(10000, TargetType.Alive)) {
        if (EventFlag(6319)) {
            SetEventFlag(12701996, ON);
        }
    }
    if (!EventFlag(12701996)) {
        DeactivateObject(2701506, Enabled);
        DeactivateObject(2701507, Disabled);
        SetObjectTreasureState(2701506, Enabled);
        SetObjectTreasureState(2701507, Disabled);
    } else {
        DeactivateObject(2701506, Disabled);
        DeactivateObject(2701507, Enabled);
        SetObjectTreasureState(2701506, Disabled);
        SetObjectTreasureState(2701507, Enabled);
    }
    if (CharacterType(10000, TargetType.Alive)) {
        if (EventFlag(6320)) {
            SetEventFlag(12701995, ON);
        }
    }
    if (!EventFlag(12701995)) {
        DeactivateObject(2701508, Enabled);
        DeactivateObject(2701509, Disabled);
        SetObjectTreasureState(2701508, Enabled);
        SetObjectTreasureState(2701509, Disabled);
    } else {
        DeactivateObject(2701508, Disabled);
        DeactivateObject(2701509, Enabled);
        SetObjectTreasureState(2701508, Disabled);
        SetObjectTreasureState(2701509, Enabled);
    }
    $InitializeEvent(0, 12704842);
    $InitializeEvent(0, 12704843);
    $InitializeEvent(0, 12701800);
    $InitializeEvent(0, 12701801);
    $InitializeEvent(0, 12701802);
    $InitializeEvent(0, 12704840);
    $InitializeEvent(0, 12704841);
    $InitializeEvent(0, 12704802);
    $InitializeEvent(0, 12704803);
    $InitializeEvent(0, 12704804);
    $InitializeEvent(0, 12704805);
    $InitializeEvent(0, 12704806);
    $InitializeEvent(0, 12701803);
    $InitializeEvent(0, 12704807, 2700803, 2705001);
    $InitializeEvent(1, 12704807, 2700804, 2705002);
    $InitializeEvent(2, 12704807, 2700805, 2705003);
    $InitializeEvent(0, 12704812, 2700800, 2700801, 2700802);
    $InitializeEvent(1, 12704812, 2700801, 2700802, 2700800);
    $InitializeEvent(2, 12704812, 2700802, 2700800, 2700801);
    $InitializeEvent(0, 12704815, 2700810, 2700800, 60);
    $InitializeEvent(1, 12704815, 2700811, 2700800, 61);
    $InitializeEvent(3, 12704815, 2700813, 2700801, 61);
    $InitializeEvent(4, 12704815, 2700814, 2700802, 60);
    $InitializeEvent(0, 12704825, 2700801, 5536);
    $InitializeEvent(1, 12704825, 2700802, 5537);
    $InitializeEvent(0, 12704830, 2700803, 2705001, 0);
    $InitializeEvent(1, 12704830, 2700804, 2705002, 1);
    $InitializeEvent(2, 12704830, 2700805, 2705003, 2);
    $InitializeEvent(0, 12700000, 2700250, 52700990);
    $InitializeEvent(1, 12700000, 2700253, 52700980);
    $InitializeEvent(2, 12700000, 2700256, 52700970);
    $InitializeEvent(3, 12700000, 2700257, 52700960);
    $InitializeEvent(0, 12700100, 2700003, 2701010, 12700110);
    $InitializeEvent(1, 12700100, 2700001, 2701011, 12700111);
    $InitializeEvent(2, 12700100, 2700001, 2701012, 12700112);
    $InitializeEvent(0, 12700110, 2701010, 12705720, 1, 2700030);
    $InitializeEvent(1, 12700110, 2701011, 12705721, 1, 2700010);
    $InitializeEvent(2, 12700110, 2701012, 12705722, 1, 2700010);
    $InitializeEvent(0, 12700130);
    $InitializeEvent(0, 12700131);
    $InitializeEvent(0, 12700132);
    $InitializeEvent(0, 12700133);
    $InitializeEvent(0, 12700136);
    $InitializeEvent(0, 12700137);
    $InitializeEvent(0, 12700140);
    $InitializeEvent(0, 12700141);
    $InitializeEvent(0, 12700142);
    $InitializeEvent(0, 12700143);
    $InitializeEvent(0, 12700146);
    $InitializeEvent(0, 12700147);
    $InitializeEvent(0, 12700150);
    $InitializeEvent(0, 12700170);
    $InitializeEvent(0, 12700171);
    $InitializeEvent(0, 12700172);
    $InitializeEvent(0, 12700176);
    $InitializeEvent(0, 12700990);
    $InitializeEvent(0, 12700180, 2700550, 2700600);
    $InitializeEvent(1, 12700180, 2700552, 2700601);
    $InitializeEvent(0, 12700190, 2700550, 2700600);
    $InitializeEvent(1, 12700190, 2700552, 2700601);
    $InitializeEvent(0, 12700200, 2700550, 2700600);
    $InitializeEvent(1, 12700200, 2700552, 2700601);
    $InitializeEvent(0, 12700700);
    $InitializeEvent(0, 12700704);
    $InitializeEvent(0, 12700705);
    $InitializeEvent(0, 12700701);
    $InitializeEvent(0, 12700703);
    $InitializeEvent(0, 12700706);
    $InitializeEvent(0, 12700707);
    $InitializeEvent(0, 12700708);
    $InitializeEvent(0, 12700709);
    $InitializeEvent(0, 12700722);
    $InitializeEvent(0, 12700723);
    $InitializeEvent(0, 12705550);
    $InitializeEvent(0, 12700702);
    $InitializeEvent(0, 12705552);
    $InitializeEvent(0, 12700710);
    $InitializeEvent(0, 12705175);
    $InitializeEvent(0, 12705000, 2700655, 2702020, 5);
    $InitializeEvent(1, 12705000, 2700103, 2702022, 5);
    $InitializeEvent(2, 12705000, 2700104, 2702022, 5);
    $InitializeEvent(3, 12705000, 2700653, 2702022, 15);
    $InitializeEvent(4, 12705000, 2700110, 2702023, 10);
    $InitializeEvent(5, 12705000, 2700111, 2702023, 10);
    $InitializeEvent(6, 12705000, 2700651, 2702024, 5);
    $InitializeEvent(7, 12705000, 2700320, 2702025, 5);
    $InitializeEvent(8, 12705000, 2700321, 2702025, 5);
    $InitializeEvent(9, 12705000, 2700513, 2702027, 10);
    $InitializeEvent(10, 12705000, 2700500, 2702028, 5);
    $InitializeEvent(11, 12705000, 2700700, 2702030, 10);
    $InitializeEvent(12, 12705000, 2700435, 2702030, 5);
    $InitializeEvent(13, 12705000, 2700401, 2702030, 5);
    $InitializeEvent(14, 12705000, 2700352, 2702031, 5);
    $InitializeEvent(15, 12705000, 2700904, 2702032, 15);
    $InitializeEvent(16, 12705000, 2700915, 2702033, 15);
    $InitializeEvent(17, 12705000, 2700450, 2702034, 15);
    $InitializeEvent(18, 12705000, 2700451, 2702035, 15);
    $InitializeEvent(19, 12705000, 2700555, 2702036, 10);
    $InitializeEvent(20, 12705000, 2700131, 2702037, 12);
    $InitializeEvent(21, 12705000, 2700652, 2702038, 5);
    $InitializeEvent(22, 12705000, 2700134, 2702039, 5);
    $InitializeEvent(23, 12705000, 2700100, 2702042, 8);
    $InitializeEvent(24, 12705000, 2700146, 2702043, 7);
    $InitializeEvent(25, 12705000, 2700660, 2702044, 7);
    $InitializeEvent(26, 12705000, 2700659, 2702044, 7);
    $InitializeEvent(28, 12705000, 2700440, 2702212, 5);
    $InitializeEvent(29, 12705000, 2700441, 2702212, 5);
    $InitializeEvent(30, 12705000, 2700113, 2702231, 8);
    $InitializeEvent(31, 12705000, 2700611, 2702237, 6);
    $InitializeEvent(32, 12705000, 2700620, 2702237, 6);
    $InitializeEvent(33, 12705000, 2700616, 2702237, 6);
    $InitializeEvent(34, 12705000, 2700618, 2702237, 6);
    $InitializeEvent(35, 12705000, 2700625, 2702238, 8);
    $InitializeEvent(36, 12705000, 2700621, 2702238, 8);
    $InitializeEvent(37, 12705000, 2700613, 2702238, 8);
    $InitializeEvent(38, 12705000, 2700614, 2702238, 8);
    $InitializeEvent(39, 12705000, 2700615, 2702238, 8);
    $InitializeEvent(40, 12705000, 2700751, 2702240, 8);
    $InitializeEvent(41, 12705000, 2700752, 2702240, 8);
    $InitializeEvent(42, 12705000, 2700705, 2702241, 6);
    $InitializeEvent(43, 12705000, 2700515, 2702243, 8);
    $InitializeEvent(0, 12705090, 2701000, 12705060, 12705061, 12705062, 2702050, 9);
    $InitializeEvent(1, 12705090, 2701001, 12705063, 12705064, 12705065, 2702051, 5);
    $InitializeEvent(0, 12705070, 2701000, 2702050, 2701100, 1, 2);
    $InitializeEvent(1, 12705070, 2701001, 2702051, 2701101, 3, 4);
    $InitializeEvent(0, 12705080, 12705070, 12705060, 12705061, 12705062);
    $InitializeEvent(1, 12705080, 12705071, 12705063, 12705064, 12705065);
    $InitializeEvent(0, 12701190, 2702130, 2701050);
    $InitializeEvent(0, 12701191, 2702131, 2701051);
    $InitializeEvent(0, 12705200);
    $InitializeEvent(0, 12705201);
    $InitializeEvent(0, 12705290, 2700137, 2702142, 2, 7012, 7013, 263098, 263052);
    $InitializeEvent(1, 12705290, 2700138, 2702142, 2, 7014, 7015, 263098, 263052);
    $InitializeEvent(0, 12705098);
    $InitializeEvent(0, 12705099);
    $InitializeEvent(0, 12705100, 2700750, 2700751);
    $InitializeEvent(1, 12705100, 2700750, 2700610);
    $InitializeEvent(2, 12705100, 2700750, 2700611);
    $InitializeEvent(3, 12705100, 2700750, 2700612);
    $InitializeEvent(4, 12705100, 2700750, 2700613);
    $InitializeEvent(5, 12705100, 2700750, 2700614);
    $InitializeEvent(6, 12705100, 2700750, 2700615);
    $InitializeEvent(7, 12705100, 2700750, 2700616);
    $InitializeEvent(8, 12705100, 2700750, 2700617);
    $InitializeEvent(9, 12705100, 2700750, 2700618);
    $InitializeEvent(10, 12705100, 2700750, 2700619);
    $InitializeEvent(11, 12705100, 2700750, 2700620);
    $InitializeEvent(12, 12705100, 2700750, 2700621);
    $InitializeEvent(13, 12705100, 2700750, 2700622);
    $InitializeEvent(14, 12705100, 2700750, 2700623);
    $InitializeEvent(15, 12705100, 2700750, 2700624);
    $InitializeEvent(16, 12705100, 2700750, 2700625);
    $InitializeEvent(17, 12705100, 2700750, 2700626);
    $InitializeEvent(18, 12705100, 2700750, 2700627);
    $InitializeEvent(19, 12705100, 2700750, 2700628);
    $InitializeEvent(20, 12705100, 2700750, 2700629);
    $InitializeEvent(21, 12705100, 2700750, 2700630);
    $InitializeEvent(0, 12705300, 12705095, 2700900, 2701200);
    $InitializeEvent(0, 12705301, 2700139, 2701200, 5, 2702244);
    $InitializeEvent(0, 12705320, 2700427, 2702161, 0.5, 7000);
    $InitializeEvent(0, 12705350);
    $InitializeEvent(0, 12705360);
    $InitializeEvent(0, 12705370, 2700400, 0, 2700501, 2700907);
    $InitializeEvent(1, 12705370, 2700403, 0.3, 2700501, 2700908);
    $InitializeEvent(2, 12705370, 2700406, 0.2, 2700501, 2700909);
    $InitializeEvent(3, 12705370, 2700413, 0.6, 2700501, 2700910);
    $InitializeEvent(4, 12705370, 2700414, 0.3, 2700502, 2700916);
    $InitializeEvent(5, 12705370, 2700415, 1, 2700502, 2700917);
    $InitializeEvent(6, 12705370, 2700424, 0.5, 2700502, 2700918);
    $InitializeEvent(7, 12705370, 2700431, 0.6, 2700502, 2700919);
    $InitializeEvent(0, 12705400);
    $InitializeEvent(0, 12705440, 2700116, 2702230, 5, 7004, 7005);
    $InitializeEvent(1, 12705440, 2700117, 2702231, 5, 7005, 7006);
    $InitializeEvent(0, 12705460, 2700513);
    $InitializeEvent(1, 12705460, 2700515);
    $InitializeEvent(0, 12705480, 2700301, 3021, 125, 2702250, 4);
    $InitializeEvent(1, 12705480, 2700302, 3021, 150, 2702251, 10);
    $InitializeEvent(2, 12705480, 2700303, 3021, 100, 2702252, 10);
    $InitializeEvent(3, 12705480, 2700308, 3021, 175, 2702253, 10);
    $InitializeEvent(4, 12705480, 2700309, 3021, 200, 2702254, 10);
    $InitializeEvent(5, 12705480, 2700310, 3021, 225, 2702255, 10);
    $InitializeEvent(0, 12705490);
    $InitializeEvent(0, 12705491);
    $InitializeEvent(0, 12705500, 12705480, 2700301, 0, 2701110);
    $InitializeEvent(1, 12705500, 12705481, 2700302, 1, 2701112);
    $InitializeEvent(3, 12705500, 12705483, 2700308, 3, 2701113);
    $InitializeEvent(4, 12705500, 12705484, 2700309, 4, 2701114);
    $InitializeEvent(0, 12705510, 2700301, 12705500);
    $InitializeEvent(1, 12705510, 2700302, 12705501);
    $InitializeEvent(3, 12705510, 2700308, 12705503);
    $InitializeEvent(4, 12705510, 2700309, 12705504);
    $InitializeEvent(0, 12705520, 2700301, 2702046, 2701110, 0);
    $InitializeEvent(1, 12705520, 2700302, 2702047, 2701112, 1);
    $InitializeEvent(1, 12705530, 2700308, 2701113);
    $InitializeEvent(2, 12705530, 2700309, 2701114);
    $InitializeEvent(0, 12705540, 2700301, 12705500);
    $InitializeEvent(1, 12705540, 2700302, 12705501);
    $InitializeEvent(3, 12705540, 2700308, 12705503);
    $InitializeEvent(4, 12705540, 2700309, 12705504);
    $InitializeEvent(0, 12705600, 2790, 2790, NPCPartType.Part8, 7000, 5907, 12705700, 12705760, 2700750);
    $InitializeEvent(1, 12705600, 2791, 2791, NPCPartType.Part9, 7022, 5907, 12705700, 12705760, 2700750);
    $InitializeEvent(2, 12705600, 2792, 2792, NPCPartType.Part10, 7023, 5907, 12705700, 12705760, 2700750);
    $InitializeEvent(3, 12705600, 2790, 2790, NPCPartType.Part8, 7000, 5907, 12705701, 12705761, 2700751);
    $InitializeEvent(4, 12705600, 2791, 2791, NPCPartType.Part9, 7022, 5907, 12705701, 12705761, 2700751);
    $InitializeEvent(5, 12705600, 2792, 2792, NPCPartType.Part10, 7023, 5907, 12705701, 12705761, 2700751);
    $InitializeEvent(0, 12705630, 2790, 2790, NPCPartType.Part8, 40, 12705700, 2700750);
    $InitializeEvent(1, 12705630, 2791, 2791, NPCPartType.Part9, 40, 12705700, 2700750);
    $InitializeEvent(2, 12705630, 2792, 2792, NPCPartType.Part10, 40, 12705700, 2700750);
    $InitializeEvent(3, 12705630, 2790, 2790, NPCPartType.Part8, 40, 12705701, 2700751);
    $InitializeEvent(4, 12705630, 2791, 2791, NPCPartType.Part9, 40, 12705701, 2700751);
    $InitializeEvent(5, 12705630, 2792, 2792, NPCPartType.Part10, 40, 12705701, 2700751);
    $InitializeEvent(0, 12705660, 30, 40, 12705760, 2700750, 1, 11);
    $InitializeEvent(1, 12705660, 50, 40, 12705760, 2700750, 2, 12);
    $InitializeEvent(2, 12705660, 60, 40, 12705760, 2700750, 3, 13);
    $InitializeEvent(3, 12705660, 30, 40, 12705761, 2700751, 1, 11);
    $InitializeEvent(4, 12705660, 50, 40, 12705761, 2700751, 2, 12);
    $InitializeEvent(5, 12705660, 60, 40, 12705761, 2700751, 3, 13);
    $InitializeEvent(0, 12700500);
    $InitializeEvent(0, 1270501);
    $InitializeEvent(0, 12701000);
    $InitializeEvent(0, 12701001);
    $InitializeEvent(0, 12701002);
    $InitializeEvent(0, 12700902, 2701912);
    $InitializeEvent(0, 12700903, 2700912, 1790, 1809, 1799, 1790);
    $InitializeEvent(0, 12700904, 2700912, 72700320);
    $InitializeEvent(0, 12700905, 2700912, 72700320, 1790, 1809, 1805);
    $InitializeEvent(0, 12700906, 72700321, 43120, 6676);
    $InitializeEvent(1, 12700906, 72700322, 43130, 6678);
    $InitializeEvent(0, 12700908, 1790, 72700330, 43110);
    $InitializeEvent(0, 12700910);
    $InitializeEvent(0, 12700909);
});

// プリコンストラクタ
$Event(50, Default, function() {
    SetCharacterAnimationState(2703950, Disabled);
    SetCharacterGravity(2703950, Disabled);
    SetCharacterMaphits(2703950, true);
    SetCharacterAnimationState(2703951, Disabled);
    SetCharacterGravity(2703951, Disabled);
    SetCharacterMaphits(2703951, true);
    $InitializeEvent(0, 12700720);
    SetCharacterAIState(2700756, Disabled);
    SetCharacterGravity(2700756, Disabled);
    $InitializeEvent(0, 12700901, 2700912, 2701912);
    $InitializeEvent(0, 12700175);
});

// ボス撃破_闇の旅団
$Event(12701800, Default, function() {
    if (ThisEvent()) {
        ChangeCharacterEnableState(2700800, Disabled);
        ChangeCharacterEnableState(2700801, Disabled);
        ChangeCharacterEnableState(2700802, Disabled);
        ForceCharacterDeath(2700800, false);
        ForceCharacterDeath(2700801, false);
        ForceCharacterDeath(2700802, false);
        DeactivateObject(2701800, Disabled);
        DeactivateObject(2701801, Disabled);
        DeleteMapSFX(2703800, true);
        DeleteMapSFX(2703801, true);
        DeleteMapSFX(2703805, true);
        DeactivateGenerator(2705001, Disabled);
        DeactivateGenerator(2705002, Disabled);
        DeactivateGenerator(2705003, Disabled);
        EndEvent();
    }
L0:
    WaitFor(CharacterDead(2700800) && CharacterDead(2700801) && CharacterDead(2700802));
    DisplayBanner(TextBannerType.DemonKilled);
    DeactivateObject(2701800, Disabled);
    DeactivateObject(2701801, Disabled);
    DeleteMapSFX(2703800, true);
    DeleteMapSFX(2703801, true);
    DeactivateGenerator(2705001, Disabled);
    DeactivateGenerator(2705002, Disabled);
    DeactivateGenerator(2705003, Disabled);
    WaitFixedTimeSeconds(3);
    HandleBossDefeat(2700800);
    SetNetworkSyncState(Disabled);
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        WaitFor(CharacterType(10000, TargetType.Alive));
        $InitializeEvent(0, 9350, 2);
        AwardAchievement(16);
        if (!EventFlag(6321)) {
            AwardItemLot(2700990);
        } else {
            AwardItemLot(2700995);
        }
        SetEventFlag(2700, ON);
        SetEventFlag(2701, ON);
        SetEventFlag(9463, ON);
        EndTimeMeasurement(2700000);
        EndTimeMeasurement(2700001);
        EndTimeMeasurement(2700010);
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

// ボス撃破SE再生_闇の旅団
$Event(12701801, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12701800));
    flag = EventFlag(12701800);
    WaitFor(
        flag
            || (!CharacterBackreadStatus(2420800)
                && !CharacterBackreadStatus(2420801)
                && !CharacterBackreadStatus(2420802)
                && HPRatio(2420800) <= 0
                && HPRatio(2420801) <= 0
                && HPRatio(2420802) <= 0));
    EndIf(flag.Passed);
    PlaySE(2702800, SoundType.cCharacterMotion, 500099999);
});

// ホストがボス部屋入場_初戦_闇の旅団
$Event(12701802, Default, function() {
    EndIf(EventFlag(12701800));
    if (ThisEvent()) {
        IssueShortWarpRequest(2700800, TargetEntityType.Area, 2702236, -1);
        IssueShortWarpRequest(2700801, TargetEntityType.Area, 2702235, -1);
        IssueShortWarpRequest(2700802, TargetEntityType.Area, 2702234, -1);
        DeleteMapSFX(2703805, true);
        EndEvent();
    }
L0:
    ForceAnimationPlayback(2700800, 7001, true, false, false);
    ForceAnimationPlayback(2700801, 7001, true, false, false);
    ForceAnimationPlayback(2700802, 7001, true, false, false);
    WaitFor(
        !EventFlag(12701800)
            && !ThisEvent()
            && CharacterType(10000, TargetType.Alive)
            && InArea(10000, 2702805));
    SetEventFlag(12704800, ON);
    ForceAnimationPlayback(2700800, 7000, false, false, false);
    ForceAnimationPlayback(2700801, 7000, false, false, false);
    ForceAnimationPlayback(2700802, 7000, false, false, false);
    DeleteMapSFX(2703805, true);
});

// 闇の旅団_時間差入場ゲスト用対処処理
$Event(12701803, Default, function() {
    WaitFor(CharacterType(10000, TargetType.Alive) && EventFlag(12704800));
    EndIf(HasMultiplayerState(MultiplayerState.Host));
    DeleteMapSFX(2703805, true);
    SetEventFlag(12704800, ON);
    SetEventFlag(12701802, ON);
});

// ホストがボス部屋入場_再戦_闇の旅団
$Event(12704840, Default, function() {
    EndIf(EventFlag(12701800));
    if (!EventFlag(12701800)) {
        if (!HasMultiplayerState(MultiplayerState.Client)) {
            DeactivateObject(2701800, Disabled);
            DeleteMapSFX(2703800, true);
        }
        WaitFor(!EventFlag(12701800) && EventFlag(12701802));
        DeactivateObject(2701800, Enabled);
        SpawnMapSFX(2703800);
    }
L0:
    flagChrAct = !EventFlag(12701800)
        && CharacterType(10000, TargetType.Alive)
        && ActionButtonInArea(2700004, 2701800);
    flag = EventFlag(12701800);
    WaitFor(flagChrAct || flag);
    EndIf(flag.Passed);
    RotateCharacter(10000, 2702800, 101130, false);
    chrArea = CharacterType(10000, TargetType.Alive) && InArea(10000, 2702801);
    chrTime = CharacterType(10000, TargetType.Alive) && ElapsedSeconds(2);
    WaitFor(chrArea || chrTime);
    if (!chrTime.Passed) {
        SetEventFlag(12704800, ON);
    }
    RestartEvent();
});

// ゲストがボス部屋入場_闇の旅団
$Event(12704841, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12701800));
    WaitFor(
        !EventFlag(12701800)
            && EventFlag(12701802)
            && EventFlag(12704800)
            && CharacterType(10000, TargetType.WhitePhantom)
            && ActionButtonInArea(2700004, 2701800));
    RotateCharacter(10000, 2702800, 101130, false);
    chrArea = CharacterType(10000, TargetType.WhitePhantom) && InArea(10000, 2702801);
    chrTime = CharacterType(10000, TargetType.WhitePhantom) && ElapsedSeconds(2);
    WaitFor(chrArea || chrTime);
    if (!chrTime.Passed) {
        SetEventFlag(12704801, ON);
    }
    RestartEvent();
});

// 他人の世界で霧壁あたり無効_闇の旅団
$Event(12704842, Default, function() {
    WaitFor(CharacterType(10000, TargetType.Alive) && EntityInRadiusOfEntity(10000, 2701800, 4));
    SetCharacterGravityMaphitStateExcludingOwnWorld(10000, Disabled);
    WaitFixedTimeFrames(6);
    RestartEvent();
});

// 他人の世界で霧壁あたり無効2_闇の旅団
$Event(12704843, Default, function() {
    WaitFor(
        CharacterType(10000, TargetType.Alive)
            && !EntityInRadiusOfEntity(10000, 2701800, 4)
            && EntityInRadiusOfEntity(10000, 2701800, 8));
    SetCharacterGravityMaphitStateExcludingOwnWorld(10000, Enabled);
    WaitFixedTimeFrames(6);
    RestartEvent();
});

// ボスが動き出す_闇の旅団
$Event(12704802, Default, function() {
    EndIf(EventFlag(12701800));
    SetCharacterAIState(2700800, Disabled);
    SetCharacterAIState(2700801, Disabled);
    SetCharacterAIState(2700802, Disabled);
    SetCharacterHPBarDisplay(2700800, Disabled);
    SetCharacterHPBarDisplay(2700801, Disabled);
    SetCharacterHPBarDisplay(2700802, Disabled);
    DeactivateGenerator(2705001, Disabled);
    DeactivateGenerator(2705002, Disabled);
    DeactivateGenerator(2705003, Disabled);
    SetCharacterAIState(2700803, Disabled);
    SetCharacterAIState(2700804, Disabled);
    SetCharacterAIState(2700805, Disabled);
    ChangeCharacterEnableState(2700803, Disabled);
    ChangeCharacterEnableState(2700804, Disabled);
    ChangeCharacterEnableState(2700805, Disabled);
    SetCharacterInvincibility(2700803, Enabled);
    SetCharacterInvincibility(2700804, Enabled);
    SetCharacterInvincibility(2700805, Enabled);
    if (!ThisEvent()) {
        WaitFor(EventFlag(12704800));
        if (!HasMultiplayerState(MultiplayerState.Client)) {
            IssueBossRoomEntryNotification(0);
            SetNetworkUpdateAuthority(2700800, AuthorityLevel.Forced);
            SetNetworkUpdateAuthority(2700801, AuthorityLevel.Forced);
            SetNetworkUpdateAuthority(2700802, AuthorityLevel.Forced);
        }
    }
L0:
    SetEventFlag(12704800, ON);
    GotoIf(L1, NumberOfCoopClients() == 0);
    GotoIf(L2, NumberOfCoopClients() == 1);
    GotoIf(L3, NumberOfCoopClients() == 2);
L1:
    Goto(L4);
L2:
    SetSpEffect(2700800, 7500, true);
    SetSpEffect(2700801, 7500, true);
    SetSpEffect(2700802, 7500, true);
    WaitFixedTimeFrames(1);
    AdaptHpchangingSpEffectToNPCPartOfTarget(2700800);
    AdaptHpchangingSpEffectToNPCPartOfTarget(2700801);
    AdaptHpchangingSpEffectToNPCPartOfTarget(2700802);
    Goto(L4);
L3:
    SetSpEffect(2700800, 7501, true);
    SetSpEffect(2700801, 7501, true);
    SetSpEffect(2700802, 7501, true);
    WaitFixedTimeFrames(1);
    AdaptHpchangingSpEffectToNPCPartOfTarget(2700800);
    AdaptHpchangingSpEffectToNPCPartOfTarget(2700801);
    AdaptHpchangingSpEffectToNPCPartOfTarget(2700802);
    Goto(L4);
L4:
    SetCharacterAIState(2700800, Enabled);
    SetCharacterAIState(2700801, Enabled);
    SetCharacterAIState(2700802, Enabled);
    DisplayBossHealthBar(Enabled, 2700800, 2, 212010);
    DisplayBossHealthBar(Enabled, 2700801, 1, 212020);
    DisplayBossHealthBar(Enabled, 2700802, 0, 212030);
    CreatePlaylog(82);
    StartTimeMeasurement(2700010, 98, Enabled);
});

// ボスBGM ON_闇の旅団
$Event(12704803, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12701800));
    if (!ThisEvent()) {
        SetMapSoundState(2703802, Disabled);
        SetMapSoundState(2703803, Disabled);
        flagArea &= !EventFlag(12701800) && EventFlag(12704802);
        if (!HasMultiplayerState(MultiplayerState.Host)) {
            flagArea &= EventFlag(12704801);
        }
        flagArea &= InArea(10000, 2702802);
        WaitFor(flagArea);
        EnableBossMapSound(2703802, Enabled);
        flagArea2 &= EventFlag(12704808);
    }
L0:
    flagArea2 &= !EventFlag(12701800) && EventFlag(12704802);
    if (!HasMultiplayerState(MultiplayerState.Host)) {
        flagArea2 &= EventFlag(12704801);
    }
    flagArea2 &= InArea(10000, 2702802);
    WaitFor(flagArea2);
    EnableBossMapSound(2703802, Disabled);
    WaitFixedTimeFrames(0);
    EnableBossMapSound(2703803, Enabled);
});

// ボスカメラ_闇の旅団
$Event(12704804, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12701800));
    WaitFor(EventFlag(12704802));
    SetLockcamSlotNumber(27, 0, 1);
    WaitFor(EventFlag(12701800));
    SetLockcamSlotNumber(27, 0, 0);
});

// ボスBGM OFF_闇の旅団
$Event(12704805, Default, function() {
    SetNetworkSyncState(Disabled);
    if (EventFlag(12701800)) {
        SetMapSoundState(2703802, Disabled);
        SetMapSoundState(2703803, Disabled);
        EndEvent();
    }
L0:
    WaitFor(EventFlag(12701800));
    EnableBossMapSound(2703802, Disabled);
    EnableBossMapSound(2703803, Disabled);
    EnableBossMapSound(-1, Disabled);
});

// ボスラストヒートアップ
$Event(12704806, Restart, function() {
    WaitFor(
        (CharacterDead(2700800) && CharacterDead(2700801) && CharacterHasSpEffect(2700802, 5539))
            || (CharacterDead(2700801)
                && CharacterDead(2700802)
                && CharacterHasSpEffect(2700800, 5539))
            || (CharacterDead(2700802)
                && CharacterDead(2700800)
                && CharacterHasSpEffect(2700801, 5536))
            || (HPRatio(2700800) <= 0.3 && HPRatio(2700801) <= 0.3 && HPRatio(2700802) <= 0.3));
    RequestCharacterAICommand(2700800, 10, 1);
    RequestCharacterAICommand(2700801, 10, 1);
    RequestCharacterAICommand(2700802, 10, 1);
    RequestCharacterAIReplan(2700800);
    RequestCharacterAIReplan(2700801);
    RequestCharacterAIReplan(2700802);
    WaitFor(
        CharacterHasEventMessage(2700800, 40)
            || CharacterHasEventMessage(2700801, 40)
            || CharacterHasEventMessage(2700802, 40));
    RequestCharacterAICommand(2700800, 30, 1);
    RequestCharacterAICommand(2700801, 30, 1);
    RequestCharacterAICommand(2700802, 30, 1);
    RequestCharacterAIReplan(2700800);
    RequestCharacterAIReplan(2700801);
    RequestCharacterAIReplan(2700802);
    WaitFixedTimeSeconds(10);
    RestartEvent();
});

// 蛇魔法_XX
$Event(12704807, Restart, function(chrEntityId, generatorEntityId) {
    if (!ThisEventSlot()) {
        DeactivateGenerator(generatorEntityId, Disabled);
        SetCharacterAIState(chrEntityId, Disabled);
        ChangeCharacterEnableState(chrEntityId, Disabled);
    }
    WaitFor(
        CharacterHasEventMessage(2700800, 20)
            || CharacterHasEventMessage(2700801, 20)
            || CharacterHasEventMessage(2700802, 20));
    ChangeCharacterEnableState(chrEntityId, Enabled);
    DeactivateGenerator(generatorEntityId, Enabled);
    SetCharacterAIState(chrEntityId, Enabled);
    RequestCharacterAIReplan(chrEntityId);
    WaitFor(
        CharacterHasEventMessage(chrEntityId, 10)
            || (ElapsedSeconds(5) && !CharacterHasSpEffect(chrEntityId, 5546)));
    DeactivateGenerator(generatorEntityId, Disabled);
    ForceCharacterDeath(chrEntityId, false);
    RestartEvent();
});

// ボス_一斉攻撃準備
$Event(12704810, Restart, function() {
    WaitFor(
        (EntityInRadiusOfEntity(10000, 2700800, 7.3)
            && EntityInRadiusOfEntity(10000, 2700801, 7.3)
            && EntityInRadiusOfEntity(10000, 2700802, 8.8)
            && CharacterHasSpEffect(2700800, 5535)
            && CharacterHasSpEffect(2700801, 5535))
            || (EntityInRadiusOfEntity(10000, 2700800, 7.3)
                && EntityInRadiusOfEntity(10000, 2700801, 7.3)
                && EntityInRadiusOfEntity(10000, 2700802, 8.8)
                && CharacterHasSpEffect(2700801, 5535)
                && CharacterHasSpEffect(2700802, 5535))
            || (EntityInRadiusOfEntity(10000, 2700800, 7.3)
                && EntityInRadiusOfEntity(10000, 2700801, 7.3)
                && EntityInRadiusOfEntity(10000, 2700802, 8.8)
                && CharacterHasSpEffect(2700802, 5535)
                && CharacterHasSpEffect(2700800, 5535)));
    RequestCharacterAICommand(2700800, 50, 0);
    RequestCharacterAICommand(2700801, 50, 0);
    RequestCharacterAICommand(2700802, 50, 0);
    RequestCharacterAIReplan(2700800);
    RequestCharacterAIReplan(2700801);
    RequestCharacterAIReplan(2700802);
    WaitFixedTimeSeconds(2);
    RequestCharacterAICommand(2700800, -1, 0);
    RequestCharacterAICommand(2700801, -1, 0);
    RequestCharacterAICommand(2700802, -1, 0);
    RequestCharacterAIReplan(2700800);
    RequestCharacterAIReplan(2700801);
    RequestCharacterAIReplan(2700802);
    WaitFixedTimeSeconds(5);
    RestartEvent();
});

// ボス_一斉攻撃
$Event(12704811, Restart, function() {
    WaitFor(
        EntityInRadiusOfEntity(10000, 2700800, 7.3)
            && EntityInRadiusOfEntity(10000, 2700801, 7.3)
            && EntityInRadiusOfEntity(10000, 2700802, 8.8)
            && CharacterHasSpEffect(2700800, 5535)
            && CharacterHasSpEffect(2700801, 5535)
            && CharacterHasSpEffect(2700802, 5535));
    RequestCharacterAICommand(2700800, 40, 0);
    RequestCharacterAIReplan(2700800);
    WaitFixedTimeSeconds(0.2);
    RequestCharacterAICommand(2700801, 40, 0);
    RequestCharacterAIReplan(2700801);
    WaitFixedTimeSeconds(0.2);
    RequestCharacterAICommand(2700802, 40, 0);
    RequestCharacterAIReplan(2700802);
    WaitFixedTimeSeconds(0.001);
    RequestCharacterAICommand(2700800, -1, 0);
    RequestCharacterAICommand(2700801, -1, 0);
    RequestCharacterAICommand(2700802, -1, 0);
    RequestCharacterAIReplan(2700800);
    RequestCharacterAIReplan(2700801);
    RequestCharacterAIReplan(2700802);
    RestartEvent();
});

// ボスファーストヒートアップ_XX
$Event(12704812, Restart, function(chrEntityId, chrEntityId2, chrEntityId3) {
    WaitFor(
        (HPRatio(chrEntityId) <= 0.5
            && HPRatio(chrEntityId2) <= 0.5
            && HPRatio(chrEntityId3) <= 0.5)
            || HPRatio(chrEntityId) <= 0.3
            || HPRatio(chrEntityId2) <= 0.3
            || HPRatio(chrEntityId3) <= 0.3);
    RequestCharacterAICommand(chrEntityId, 50, 1);
    RequestCharacterAIReplan(chrEntityId);
    WaitFor(CharacterHasEventMessage(chrEntityId, 50));
    RequestCharacterAICommand(chrEntityId, 20, 1);
    RequestCharacterAIReplan(chrEntityId);
    if (chrEntityId != 2700801) {
        SetSpEffect(chrEntityId, 5539, false);
    }
    WaitFor(CharacterHasEventMessage(chrEntityId, 30));
    RequestCharacterAICommand(chrEntityId, 40, 1);
    RequestCharacterAIReplan(chrEntityId);
    chr = CharacterHasEventMessage(chrEntityId, 10);
    time = ElapsedSeconds(5);
    WaitFor(chr || time);
    if (!time.Passed) {
        EndEvent();
    }
    RestartEvent();
});

// ボスに蛇をアタッチ_XX
$Event(12704815, Restart, function(chrEntityId, hitEntityId, dummypolyId) {
    if (!ThisEventSlot()) {
        WaitFor(CharacterBackreadStatus(chrEntityId));
        ChangeCharacterEnableState(chrEntityId, Disabled);
        SetCharacterGravity(chrEntityId, Disabled);
        WaitFor(CharacterHasEventMessage(hitEntityId, 50));
    }
    if (HPRatio(hitEntityId) <= 0) {
        ForceCharacterDeath(chrEntityId, false);
    }
    ChangeCharacterEnableState(chrEntityId, Enabled);
    WarpCharacterAndSetFloor(chrEntityId, TargetEntityType.Character, hitEntityId, dummypolyId, hitEntityId);
    if (!ThisEventSlot()) {
        ForceAnimationPlayback(chrEntityId, 7000, false, false, false);
    }
    RestartEvent();
});

// 蛇魔法時のエンチャントSFX消去_XX
$Event(12704825, Restart, function(chrEntityId, spEffectId) {
    WaitFor(CharacterHasEventMessage(chrEntityId, 40));
    ClearSpEffect(chrEntityId, spEffectId);
    WaitFor(ElapsedFrames(70) || HasDamageType(chrEntityId, 10000, DamageType.Unspecified));
    SetSpEffect(chrEntityId, spEffectId, false);
    RestartEvent();
});

// 蛇魔法中断_XX
$Event(12704830, Restart, function(chrEntityId, generatorEntityId, eventSlotId) {
    WaitFor(HPRatio(2700800) <= 0 && HPRatio(2700801) <= 0 && HPRatio(2700802) <= 0);
    DeactivateGenerator(generatorEntityId, Disabled);
    SetEventState(12704807, eventSlotId, EventEndType.End);
    if (!CharacterHasSpEffect(chrEntityId, 5546)) {
        ForceCharacterDeath(chrEntityId, false);
        EndEvent();
    }
L0:
    WaitRandomTimeFrames(0, 25);
    ForceAnimationPlayback(chrEntityId, 7000, false, true, false);
    ForceCharacterDeath(chrEntityId, false);
});

// さまよう狂気_XX
$Event(12700000, Restart, function(chrEntityId, eventFlagId) {
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

// 一方通行扉を調べた時のMsg_XX
$Event(12700100, Default, function(actionButtonParameterId, areaEntityId, eventFlagId) {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(eventFlagId));
    act = ActionButtonInArea(actionButtonParameterId, areaEntityId);
    flag = EventFlag(eventFlagId);
    WaitFor(act || flag);
    if (!flag.Passed) {
        DisplayGenericDialog(10010161, PromptType.OKCANCEL, NumberofOptions.OneButton, areaEntityId, 3);
        WaitFixedTimeSeconds(1);
        RestartEvent();
    }
L0:
    WaitFixedTimeSeconds(0);
    RestartEvent();
});

// 扉開放処理_XX
$Event(12700110, Default, function(objEntityId, objactEventFlag, animationId, objParameterId) {
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

// エレベーター初期化2
$Event(12700130, Restart, function() {
    EndIf(EventFlag(12700135));
    flag = EventFlag(12700134);
    WaitFor(flag || !EventFlag(12700134));
    if (!flag.Passed) {
        ReproduceObjectAnimation(2701032, 0);
        SetObjactState(2701030, 2700000, Disabled);
        SetObjactState(2701031, 2700000, Enabled);
    } else {
        ReproduceObjectAnimation(2701032, 4);
        SetObjactState(2701030, 2700000, Enabled);
        SetObjactState(2701031, 2700000, Disabled);
    }
    if (!EventFlag(12700137)) {
        ReproduceObjectAnimation(2701032, 4);
        SetEventFlag(12700134, ON);
        SetObjactState(2701030, 2700000, Disabled);
        SetObjactState(2701031, 2700000, Disabled);
    }
});

// エレベーター下がる2
$Event(12700131, Restart, function() {
    if (!(!EventFlag(12700134) && EventFlag(12700135))) {
        WaitFor(EventFlag(12700137));
        WaitFor(
            (!EventFlag(12700134) && !EventFlag(12700135) && InArea(10000, 2702000))
                || (!EventFlag(12700134) && !EventFlag(12700135) && ObjActEventFlag(12700123)));
    }
L0:
    SetEventFlag(12700135, ON);
    ForceAnimationPlayback(2701032, 1, false, false, false);
    ForceAnimationPlayback(2701032, 2, false, false, false);
    WaitFixedTimeFrames(156);
    WaitFor(!AllPlayersInArea(2702001));
    ForceAnimationPlayback(2701032, 3, false, false, false);
    WaitFixedTimeFrames(7);
    SetObjactState(2701031, 2700000, Disabled);
    SetEventFlag(12700134, ON);
    SetEventFlag(12700135, OFF);
    SetObjactState(2701030, 2700000, Enabled);
    RestartEvent();
});

// エレベーター上がる2
$Event(12700132, Restart, function() {
    if (!(EventFlag(12700134) && EventFlag(12700135))) {
        WaitFor(EventFlag(12700137));
        WaitFor(
            (EventFlag(12700134) && !EventFlag(12700135) && InArea(10000, 2702001))
                || (EventFlag(12700134) && !EventFlag(12700135) && ObjActEventFlag(12700122)));
    }
L0:
    SetEventFlag(12700135, ON);
    ForceAnimationPlayback(2701032, 5, false, false, false);
    ForceAnimationPlayback(2701032, 6, false, false, false);
    WaitFixedTimeFrames(156);
    WaitFor(!AllPlayersInArea(2702000));
    ForceAnimationPlayback(2701032, 7, false, false, false);
    WaitFixedTimeFrames(7);
    SetObjactState(2701030, 2700000, Disabled);
    SetEventFlag(12700134, OFF);
    SetEventFlag(12700135, OFF);
    SetObjactState(2701031, 2700000, Enabled);
    RestartEvent();
});

// エレベーター仕掛けが動かない2
$Event(12700133, Restart, function() {
    SetNetworkSyncState(Disabled);
    WaitFor(
        (!EventFlag(12700134) || EventFlag(12700135) || !EventFlag(12700137))
            && ActionButtonInArea(7100, 2701030));
    DisplayGenericDialog(10010172, PromptType.OKCANCEL, NumberofOptions.OneButton, -1, 3);
    RestartEvent();
});

// エレベーター仕掛けが動かない_下2
$Event(12700136, Restart, function() {
    SetNetworkSyncState(Disabled);
    WaitFor(
        (EventFlag(12700134) || EventFlag(12700135) || !EventFlag(12700137))
            && ActionButtonInArea(7100, 2701031));
    DisplayGenericDialog(10010172, PromptType.OKCANCEL, NumberofOptions.OneButton, -1, 3);
    RestartEvent();
});

// エレベーター初回起動2
$Event(12700137, Restart, function() {
    EndIf(ThisEventSlot());
    SetObjactState(2701030, 2700000, Disabled);
    SetObjactState(2701031, 2700000, Disabled);
    WaitFor(InArea(10000, 2702002));
    CreatePlaylog(116);
    SetObjactState(2701030, 2700000, Enabled);
    SetObjactState(2701031, 2700000, Disabled);
});

// エレベーター初期化
$Event(12700140, Default, function() {
    flag = EventFlag(12700144);
    WaitFor(flag || !EventFlag(12700144));
    if (!flag.Passed) {
        ReproduceObjectAnimation(2701042, 0);
        SetObjactState(2701040, 2700000, Disabled);
        SetObjactState(2701041, 2700000, Enabled);
    } else {
        ReproduceObjectAnimation(2701042, 10);
        SetObjactState(2701040, 2700000, Enabled);
        SetObjactState(2701041, 2700000, Disabled);
    }
    if (!EventFlag(12700147)) {
        ReproduceObjectAnimation(2701042, 10);
        SetEventFlag(12700144, ON);
        SetObjactState(2701040, 2700000, Disabled);
        SetObjactState(2701041, 2700000, Disabled);
    }
});

// エレベーター下がる
$Event(12700141, Default, function() {
    if (!(EventFlag(12700145) && !EventFlag(12700144))) {
        WaitFor(EventFlag(12700147));
        WaitFor(
            (!EventFlag(12700144) && !EventFlag(12700145) && InArea(10000, 2702010))
                || (!EventFlag(12700144) && !EventFlag(12700145) && ObjActEventFlag(12700121)));
    }
L0:
    SetEventFlag(12700145, ON);
    ForceAnimationPlayback(2701042, 1, false, false, false);
    ForceAnimationPlayback(2701042, 8, false, false, false);
    WaitFixedTimeFrames(257);
    WaitFor(!AllPlayersInArea(2702011));
    ForceAnimationPlayback(2701042, 9, false, false, false);
    WaitFixedTimeFrames(7);
    SetObjactState(2701041, 2700000, Disabled);
    SetEventFlag(12700144, ON);
    SetEventFlag(12700145, OFF);
    SetObjactState(2701040, 2700000, Enabled);
    RestartEvent();
});

// エレベーター上がる
$Event(12700142, Default, function() {
    if (!(EventFlag(12700144) && EventFlag(12700145))) {
        WaitFor(EventFlag(12700147));
        WaitFor(
            (EventFlag(12700144) && !EventFlag(12700145) && InArea(10000, 2702011))
                || (EventFlag(12700144) && !EventFlag(12700145) && ObjActEventFlag(12700120)));
    }
L0:
    SetEventFlag(12700145, ON);
    ForceAnimationPlayback(2701042, 11, false, false, false);
    ForceAnimationPlayback(2701042, 12, false, false, false);
    WaitFixedTimeFrames(257);
    WaitFor(!AllPlayersInArea(2702010));
    ForceAnimationPlayback(2701042, 7, false, false, false);
    WaitFixedTimeFrames(7);
    SetObjactState(2701040, 2700000, Disabled);
    SetEventFlag(12700144, OFF);
    SetEventFlag(12700145, OFF);
    SetObjactState(2701041, 2700000, Enabled);
    RestartEvent();
});

// エレベーター仕掛けが動かない
$Event(12700143, Default, function() {
    SetNetworkSyncState(Disabled);
    WaitFor(
        (!EventFlag(12700144) || EventFlag(12700145) || !EventFlag(12700147))
            && ActionButtonInArea(7100, 2701040));
    DisplayGenericDialog(10010172, PromptType.OKCANCEL, NumberofOptions.OneButton, -1, 3);
    RestartEvent();
});

// エレベーター仕掛けが動かない_下
$Event(12700146, Default, function() {
    SetNetworkSyncState(Disabled);
    WaitFor(
        (EventFlag(12700144) || EventFlag(12700145) || !EventFlag(12700147))
            && ActionButtonInArea(7100, 2701041));
    DisplayGenericDialog(10010172, PromptType.OKCANCEL, NumberofOptions.OneButton, -1, 3);
    RestartEvent();
});

// エレベーター初回起動
$Event(12700147, Default, function() {
    EndIf(ThisEventSlot());
    SetObjactState(2701040, 2700000, Disabled);
    SetObjactState(2701041, 2700000, Disabled);
    WaitFor(InArea(10000, 2702012));
    CreatePlaylog(116);
    SetObjactState(2701040, 2700000, Enabled);
    SetObjactState(2701041, 2700000, Disabled);
});

// 宝箱
$Event(12700150, Default, function() {
    if (ThisEventSlot()) {
        ReproduceObjectAnimation(2701150, 0);
        SetObjactState(2701150, 9942, Disabled);
        SetObjectTreasureState(2701150, Enabled);
        EndEvent();
    }
    WaitFor(ObjActEventFlag(12700900));
    WaitFixedTimeFrames(10);
    SetObjectTreasureState(2701150, Enabled);
});

// 開閉門初期化
$Event(12700170, Restart, function() {
    SetEventFlag(0, OFF);
    GotoIf(L0, !EventFlag(12700175));
    GotoIf(L1, EventFlag(12700173));
L0:
    ReproduceObjectAnimation(2701013, 3);
    SetEventFlag(12700173, OFF);
    ModifyNavimeshConnectionBitflag(2703050, NavimeshType.Solid, BitopType.Delete);
    Goto(L2);
L1:
    ReproduceObjectAnimation(2701013, 0);
    SetEventFlag(12700173, ON);
    ModifyNavimeshConnectionBitflag(2703050, NavimeshType.Solid, BitopType.Add);
L2:
    NoOp();
});

// 開閉門_上げる
$Event(12700171, Restart, function() {
    WaitFor(EventFlag(12700173) && !EventFlag(12700174) && ObjActEventFlag(12700010));
    SetEventFlag(12700173, OFF);
    SetEventFlag(12700174, ON);
    ForceAnimationPlayback(2701013, 1, false, false, false);
    WaitFixedTimeFrames(100);
    SetEventFlag(12700174, OFF);
    SetObjactState(2701090, 2700000, Enabled);
    ModifyNavimeshConnectionBitflag(2703050, NavimeshType.Solid, BitopType.Delete);
    RestartEvent();
});

// 開閉門_下げる
$Event(12700172, Restart, function() {
    WaitFor(!EventFlag(12700173) && !EventFlag(12700174) && ObjActEventFlag(12700010));
    SetEventFlag(12700173, ON);
    SetEventFlag(12700174, ON);
    ForceAnimationPlayback(2701013, 2, false, false, false);
    ModifyNavimeshConnectionBitflag(2703050, NavimeshType.Solid, BitopType.Add);
    WaitFixedTimeFrames(100);
    SetEventFlag(12700174, OFF);
    SetObjactState(2701090, 2700000, Enabled);
    RestartEvent();
});

// 開閉門_群衆死亡
$Event(12700175, Restart, function() {
    if (ThisEvent()) {
        ForceCharacterDeath(2700145, false);
        ChangeCharacterEnableState(2700145, Disabled);
        SetCharacterBackreadState(2700145, true);
        EndEvent();
    }
L0:
    WaitFor(CharacterDead(2700145));
    WaitFixedTimeFrames(1);
});

// 開閉門が動かない
$Event(12700176, Restart, function() {
    SetNetworkSyncState(Disabled);
    WaitFor(EventFlag(12700174) && ActionButtonInArea(7100, 2701090));
    DisplayGenericDialog(10010172, PromptType.OKCANCEL, NumberofOptions.OneButton, -1, 3);
    RestartEvent();
});

// 月の使者触手アタッチ_XX
$Event(12700180, Default, function(chrEntityId, chrEntityId2) {
    SetNetworkSyncState(Disabled);
    WaitFor(!CharacterDead(chrEntityId) && CharacterBackreadStatus(chrEntityId));
    IssueShortWarpRequest(chrEntityId2, TargetEntityType.Character, chrEntityId, 40);
    RestartEvent();
});

// 触手連動死亡_XX
$Event(12700190, Restart, function(chrEntityId, chrEntityId2) {
    WaitFor(HPRatio(chrEntityId) <= 0);
    WaitFixedTimeSeconds(1);
    ForceAnimationPlayback(chrEntityId2, 2200, false, true, false);
    ChangeCharacterEnableState(chrEntityId2, Disabled);
});

// 月の使者LvUp_XX
$Event(12700200, Default, function(chrEntityId, chrEntityId2) {
    SetSpEffect(chrEntityId, 5609, false);
    SetCharacterGravity(chrEntityId2, Disabled);
});

// 人さらいでの生贄の街ワープ
$Event(12700500, Restart, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(
        !CharacterDead(2700680)
            && CharacterDamagedBy(10000, 2700680)
            && HPRatio(10000) == 0
            && EventFlag(9401)
            && EventFlag(9404));
    SetEventFlag(9420, ON);
});

// 人さらい出現
$Event(1270501, Restart, function() {
    if (!EventFlag(9802)) {
        EndIf(EventFlag(9453));
    }
L0:
    SetCharacterBackreadState(2700680, true);
});

// 感染者の乞食_初期化
$Event(12700700, Default, function() {
    if (CharacterType(10000, TargetType.Alive)) {
        SetEventFlag(72700440, OFF);
        SetEventFlag(72700445, OFF);
        SetEventFlag(72700361, OFF);
        SetEventFlag(72700364, OFF);
    }
L9:
    ForceAnimationPlayback(2700756, 7002, false, false, false);
    GotoIf(L1, EventFlag(1200));
    GotoIf(L2, EventFlag(1201));
    GotoIf(L2, EventFlag(1202));
    GotoIf(L3, EventFlag(1203));
    GotoIf(L4, EventFlag(1208));
    GotoIf(L4, EventFlag(1209));
    SetCharacterBackreadState(2700755, true);
    SetCharacterBackreadState(2700756, true);
    EndEvent();
L1:
    SetCharacterBackreadState(2700755, false);
    SetCharacterBackreadState(2700756, false);
    if (!EventFlag(12705552)) {
        ForceAnimationPlayback(2700755, 103070, false, false, false);
        EndEvent();
    }
L5:
    ForceAnimationPlayback(2700755, 103072, false, false, false);
    EndEvent();
L2:
    SetCharacterBackreadState(2700755, false);
    SetCharacterBackreadState(2700756, false);
    IssueShortWarpRequest(2700755, TargetEntityType.Area, 2702302, -1);
    ForceAnimationPlayback(2700755, 103072, false, false, false);
    EndEvent();
L3:
    SetCharacterBackreadState(2700755, true);
    ChangeCharacterEnableState(2700755, Disabled);
    SetCharacterBackreadState(2700756, true);
    ChangeCharacterEnableState(2700756, Disabled);
    ForceCharacterTreasure(2700755);
    EndEvent();
L4:
    SetCharacterBackreadState(2700755, false);
    SetCharacterBackreadState(2700756, false);
    IssueShortWarpRequest(2700755, TargetEntityType.Area, 2702302, -1);
    ForceAnimationPlayback(2700755, 103072, false, false, false);
    EndEvent();
});

// 感染者の乞食_死亡
$Event(12700701, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(
        (CharacterDead(2700755) || CharacterDead(2700756))
            && HasMultiplayerState(MultiplayerState.Host));
    BatchSetEventFlags(1200, 1219, OFF);
    SetEventFlag(1203, ON);
    SaveRequest(0);
});

// 感染者の乞食_リアルタイム初期化
$Event(12700702, Default, function() {
    EndIf(ThisEvent());
    WaitFor(EventFlag(1205));
    SetCharacterBackreadState(2700755, true);
    SetCharacterBackreadState(2700756, true);
});

// 感染者の乞食_変身
$Event(12700703, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(HPRatio(2700755) < 0.5 && HPRatio(2700755) != 0);
    SetEventFlag(12705551, ON);
});

// 感染者の乞食_診療所へ移動中状態へ
$Event(12700704, Default, function() {
    WaitFor(EventFlag(72700451));
    SetEventFlag(72700451, OFF);
    BatchSetEventFlags(1200, 1219, OFF);
    SetEventFlag(1209, ON);
});

// 感染者の乞食_避難所へ移動中状態へ
$Event(12700705, Default, function() {
    WaitFor(EventFlag(72700450));
    SetEventFlag(72700450, OFF);
    BatchSetEventFlags(1200, 1219, OFF);
    SetEventFlag(1208, ON);
});

// 感染者の乞食_アニメ制御_死亡
$Event(12700706, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(
        HPRatio(2700755) == 0
            && CharacterHasSpEffect(2700755, 151)
            && (EventFlag(1200) || EventFlag(1204) || EventFlag(1205)));
    ForceAnimationPlayback(2700755, 103132, false, false, false);
});

// 感染者の乞食_アニメ制御_被ダメージ
$Event(12700707, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(
        HasDamageType(2700755, -1, DamageType.Unspecified)
            && HPRatio(2700755) >= 0.5
            && HPRatio(2700755) != 0);
    GotoIf(L0, CharacterHasSpEffect(2700755, 153));
    GotoIf(L1, CharacterHasSpEffect(2700755, 151));
    RestartEvent();
L0:
    ForceAnimationPlayback(2700755, 103079, false, false, false);
    RestartEvent();
L1:
    ForceAnimationPlayback(2700755, 103131, false, false, false);
    RestartEvent();
});

// 感染者の乞食_アニメ制御_被ダメージから待機へ
$Event(12700708, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(CharacterHasSpEffect(2700755, 154) && cond && HPRatio(2700755) >= 0.5);
    ForceAnimationPlayback(2700755, 103072, false, false, false);
    RestartEvent();
});

// 感染者の乞食_アニメ制御_うんこ座り→首向け
$Event(12700709, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(CharacterHasSpEffect(2700755, 152));
    ForceAnimationPlayback(2700755, 103072, false, false, false);
    RestartEvent();
});

// 会話用_森前半クリア
$Event(12700710, Default, function() {
    EndIf(ThisEvent());
    WaitFor(CharacterType(10000, TargetType.Alive) && InArea(10000, 2702300));
    SetEventFlag(9467, ON);
    WaitFixedTimeSeconds(0);
});

// 感染者の乞食_状態遷移
$Event(12700720, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
L1:
    if ((EventFlag(1200) || EventFlag(1202)) && EventFlag(9802)) {
        BatchSetEventFlags(1200, 1219, OFF);
        SetEventFlag(1211, ON);
    }
L2:
    NoOp();
});

// 感染者の乞食_変身（2回目以降）
$Event(12700722, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFixedTimeFrames(30);
    WaitFor(
        EventFlag(1202)
            && (HasDamageType(2700755, 10000, DamageType.Unspecified) || InArea(10000, 2702301))
            && HPRatio(2700755) != 0);
    SetEventFlag(12705551, ON);
});

// 感染者の乞食_変身（3回攻撃されたら）
$Event(12700723, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(HasDamageType(2700755, 10000, DamageType.Unspecified));
    WaitFixedTimeFrames(1);
    WaitFor(HasDamageType(2700755, 10000, DamageType.Unspecified));
    WaitFixedTimeFrames(1);
    WaitFor(HasDamageType(2700755, 10000, DamageType.Unspecified) && HPRatio(2700755) != 0);
    SetEventFlag(12705551, ON);
});

// DLC_連盟の長初期化
$Event(12700901, Default, function(chrEntityId, objEntityId) {
    if (CharacterType(10000, TargetType.Alive)) {
        if (!AnyBatchEventFlags(1790, 1809)) {
            BatchSetEventFlags(1790, 1809, OFF);
            SetEventFlag(1800, ON);
        }
L0:
        if (EventFlag(1800) && EventFlag(72700304)) {
            BatchSetEventFlags(1790, 1809, OFF);
            SetEventFlag(1801, ON);
        }
L1:
        if (EventFlag(1801) && EventFlag(72700306)) {
            BatchSetEventFlags(1790, 1809, OFF);
            SetEventFlag(1791, ON);
        }
L2:
        if (EventFlag(1791) && EventFlag(12700902)) {
            BatchSetEventFlags(1790, 1809, OFF);
            SetEventFlag(1792, ON);
        }
L8:
        NoOp();
    }
L9:
    DeactivateObject(objEntityId, Disabled);
    GotoIf(L0, EventFlag(1800));
    GotoIf(L0, EventFlag(1801));
    GotoIf(L1, EventFlag(1805));
    GotoIf(L2, EventFlag(1790));
    GotoIf(L3, EventFlag(1791));
    ChangeCharacterEnableState(chrEntityId, Disabled);
    SetCharacterBackreadState(chrEntityId, true);
    EndEvent();
L0:
    SetCharacterTeamType(chrEntityId, TeamType.Ally);
    ForceAnimationPlayback(chrEntityId, 103140, false, false, false);
    EndEvent();
L1:
    SetCharacterTeamType(chrEntityId, TeamType.HostileNPC);
    EndEvent();
L2:
    ChangeCharacterEnableState(chrEntityId, Disabled);
    SetCharacterBackreadState(chrEntityId, true);
    ForceCharacterTreasure(chrEntityId);
    EndEvent();
L3:
    ChangeCharacterEnableState(chrEntityId, Disabled);
    SetCharacterBackreadState(chrEntityId, true);
    DeactivateObject(objEntityId, Enabled);
    SetObjectInvulnerability(objEntityId, Enabled);
    CreateObjectfollowingSFX(objEntityId, 200, 900201);
    EndEvent();
L4:
    ChangeCharacterEnableState(chrEntityId, Disabled);
    SetCharacterBackreadState(chrEntityId, true);
    EndEvent();
});

// DLC_連盟の長後継者
$Event(12700902, Default, function(objEntityId) {
    EndIf(!CharacterType(10000, TargetType.Alive));
    EndIf(EventFlag(12700902));
    WaitFor(EventFlag(1791) && ActionButtonInArea(2700005, objEntityId));
    AwardItemLot(43100);
    SetEventFlag(6813, ON);
    DeactivateObject(objEntityId, Disabled);
    DeleteObjectfollowingSFX(objEntityId, true);
});

// DLC_NPC死亡判定
$Event(12700903, Default, function(chrEntityId, eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4) {
    EndIf(!CharacterType(10000, TargetType.Alive));
    EndIf(AnyBatchEventFlags(eventFlagId, eventFlagId3));
    WaitFor(CharacterDead(chrEntityId));
    BatchSetEventFlags(eventFlagId, eventFlagId2, OFF);
    SetEventFlag(eventFlagId4, ON);
    SaveRequest(0);
});

// DLC_NPC攻撃回数判定
$Event(12700904, Default, function(entityId, eventFlagId) {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(HasDamageType(entityId, 10000, DamageType.Unspecified));
    WaitFixedTimeFrames(1);
    WaitFor(HasDamageType(entityId, 10000, DamageType.Unspecified));
    WaitFixedTimeFrames(1);
    WaitFor(HasDamageType(entityId, 10000, DamageType.Unspecified));
    WaitFixedTimeFrames(1);
    SetEventFlag(eventFlagId, ON);
});

// DLC_NPC敵対判定
$Event(12700905, Default, function(chrEntityId, eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4) {
    EndIf(!CharacterType(10000, TargetType.Alive));
    SetEventFlag(eventFlagId, OFF);
    WaitFor((EventFlag(eventFlagId) || HPRatio(chrEntityId) <= 0.9) && HPRatio(chrEntityId) != 0);
    SetCharacterTeamType(chrEntityId, TeamType.HostileNPC);
    BatchSetEventFlags(eventFlagId2, eventFlagId3, OFF);
    SetEventFlag(eventFlagId4, ON);
    SaveRequest(0);
});

// DLC_NPCアイテム入手XX
$Event(12700906, Default, function(eventFlagId, itemLotId, eventFlagId2) {
    EndIf(EventFlag(eventFlagId2));
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(EventFlag(eventFlagId));
    AwardItemLot(itemLotId);
});

// DLC_連盟：処刑人裏切り
$Event(12700910, Default, function() {
    GotoIf(L0, ThisEvent());
    Goto(L1);
L0:
    IssueShortWarpRequest(2700930, TargetEntityType.Area, 2702920, -1);
    EndEvent();
L1:
    ChangeCharacterEnableState(2700930, Disabled);
    SetCharacterAIState(2700930, Disabled);
    WaitFor(CharacterType(10000, TargetType.Alive) && (EventFlag(12700902) || EventFlag(1790)));
    ChangeCharacterEnableState(2700930, Enabled);
    SetCharacterAIState(2700930, Enabled);
    ChangeCharacterPatrolBehavior(2700930, 2703920);
});

// DLC_連盟の長死亡会話時兜強制取得
$Event(12700908, Default, function(eventFlagId, eventFlagId2, itemLotId) {
    EndIf(!CharacterType(10000, TargetType.Alive));
    if (EventFlag(eventFlagId)) {
        if (EventFlag(eventFlagId2)) {
            EndEvent();
        }
L1:
        SetEventFlag(eventFlagId2, ON);
    }
L0:
    WaitFor(EventFlag(eventFlagId2));
    AwardItemLot(itemLotId);
    SaveRequest(0);
});

// DLC_NPC死亡判定_処刑人
$Event(12700909, Default, function() {
    GotoIf(L0, ThisEvent());
    Goto(L1);
L0:
    ChangeCharacterEnableState(2700930, Disabled);
    SetCharacterBackreadState(2700930, true);
    EndEvent();
L1:
    WaitFor(CharacterDead(2700930));
    EndIf(!CharacterType(10000, TargetType.Alive));
    AwardItemLot(43840);
    SaveRequest(0);
});

// 復讐者_一時的にいない（衰弱ルート）
$Event(12701000, Default, function() {
    EndIf(ThisEvent());
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(EventFlag(1367) && EventFlag(12700710));
    BatchSetEventFlags(1360, 1379, OFF);
    SetEventFlag(1373, ON);
});

// 復讐者_一時的にいない（闇堕ちルート）
$Event(12701001, Default, function() {
    EndIf(ThisEvent());
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(
        (EventFlag(1361)
            || EventFlag(1363)
            || EventFlag(1364)
            || EventFlag(1365)
            || EventFlag(1369))
            && EventFlag(12700710));
    BatchSetEventFlags(1360, 1379, OFF);
    SetEventFlag(1374, ON);
});

// 復讐者_どこにもいない
$Event(12701002, Default, function() {
    EndIf(ThisEvent());
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor((EventFlag(1360) || EventFlag(1362)) && EventFlag(12700710));
    BatchSetEventFlags(1360, 1379, OFF);
    SetEventFlag(1375, ON);
});

// ロジックON_XX
$Event(12705000, Restart, function(chrEntityId, areaEntityId, targetDistance) {
    if (!ThisEventSlot()) {
        RequestCharacterAICommand(chrEntityId, 30, 0);
        chr = CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom);
        WaitFor(
            (InArea(10000, areaEntityId) && chr)
                || (EntityInRadiusOfEntity(10000, chrEntityId, targetDistance) && chr)
                || (CharacterDamagedBy(chrEntityId, 10000) && chr));
    }
L0:
    RequestCharacterAICommand(chrEntityId, -1, 0);
    RequestCharacterAIReplan(chrEntityId);
});

// 島近くのフランケンが寝ている
$Event(12705098, Restart, function() {
    ForceAnimationPlayback(0, 7010, false, false, false);
    SetCharacterAIId(0, 73420);
});

// 起きるフラグでフランケンが起きる
$Event(12705099, Restart, function() {
    WaitFor(ThisEvent());
    ForceAnimationPlayback(2700750, 7012, false, false, false);
    SetCharacterAIId(2700750, 273400);
    RequestCharacterAIReplan(2700750);
});

// 島で戦うとフランケンが起きるフラグがON_XX
$Event(12705100, Restart, function(chrEntityId, entityId) {
    ForceAnimationPlayback(chrEntityId, 7010, true, false, false);
    SetCharacterAIId(chrEntityId, 273420);
    WaitFor(
        HasDamageType(chrEntityId, 10000, DamageType.Unspecified)
            || ((InArea(entityId, 2709093) || InArea(10000, 2709093))
                && HasDamageType(entityId, 10000, DamageType.Unspecified)));
    SetEventFlag(12705099, ON);
});

// ペンデュラム再生_XX
$Event(12705070, Restart, function(entityId, areaEntityId, entityId2, animationId, animationId2) {
    EndIf(ThisEventSlot());
    ForceAnimationPlayback(entityId, 0, true, false, false);
    WaitFor(
        (CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
            && InArea(10000, areaEntityId));
    ForceAnimationPlayback(entityId2, 1, false, true, false);
    ForceAnimationPlayback(entityId, animationId, false, true, false);
    ForceAnimationPlayback(entityId, animationId2, true, false, false);
    WaitFixedTimeFrames(1);
});

// ペンデュラムダメージ削除_XX
$Event(12705080, Restart, function(eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4) {
    if (!ThisEventSlot()) {
        WaitFor(EventFlag(eventFlagId));
    }
L0:
    DeleteObjectEvent(eventFlagId2);
    DeleteObjectEvent(eventFlagId3);
    DeleteObjectEvent(eventFlagId4);
});

// ペンデュラムダメージ作成_XX
$Event(12705090, Restart, function(objEntityId, eventFlagId, eventFlagId2, eventFlagId3, areaEntityId, lifespan) {
    if (!ThisEventSlot()) {
        WaitFor(
            (CharacterType(10000, TargetType.Alive)
                || CharacterType(10000, TargetType.WhitePhantom))
                && InArea(10000, areaEntityId));
    }
L0:
    WaitFixedTimeFrames(0);
    CreateDamagingObject(eventFlagId, objEntityId, 101, 6100, DamageTargetType.Character, 1, lifespan, 0);
    CreateDamagingObject(eventFlagId2, objEntityId, 102, 6100, DamageTargetType.Character, 1, lifespan, 0);
    CreateDamagingObject(eventFlagId3, objEntityId, 103, 6100, DamageTargetType.Character, 1, lifespan, 0);
});

// 汎用住人設定
$Event(12705175, Restart, function() {
    WaitFor(CharacterBackreadStatus(2700118));
    ForceAnimationPlayback(2700118, 7010, true, false, false);
    SetCharacterAnimationState(2700118, Disabled);
    SetCharacterGravity(2700118, Disabled);
});

// 落とし穴起動＆ハシゴ登録
$Event(12701190, Restart, function(areaEntityId, objEntityId) {
    if (ThisEventSlot()) {
        ReproduceObjectDestruction(objEntityId, 1);
        RegisterLadder(12700600, 12700601, 2701070);
        EndEvent();
    }
L0:
    WaitFor(InArea(10000, areaEntityId));
    RequestObjectDestruction(objEntityId, 1);
    PlaySE(objEntityId, SoundType.oObject, 997400000);
    RegisterLadder(12700600, 12700601, 2701070);
});

// 落とし穴起動
$Event(12701191, Restart, function(areaEntityId, objEntityId) {
    if (ThisEventSlot()) {
        ReproduceObjectDestruction(objEntityId, 1);
        EndEvent();
    }
    WaitFor(InArea(10000, areaEntityId));
    RequestObjectDestruction(objEntityId, 1);
    PlaySE(objEntityId, SoundType.oObject, 997400000);
});

// 寝ているやつが起きそう
$Event(12705200, Restart, function() {
    ForceAnimationPlayback(2700135, 7010, false, false, false);
    SetCharacterAIId(2700135, 263098);
    WaitFor(
        CharacterAIState(2700135, AIStateType.Alert) || EntityInRadiusOfEntity(10000, 2700135, 2.5));
    SetCharacterAIId(2700135, 263097);
    ForceAnimationPlayback(2700135, 7016, false, false, false);
    WaitFor(CharacterAIState(2700135, AIStateType.Normal));
    RestartEvent();
});

// 寝ているやつが起る
$Event(12705201, Restart, function() {
    if (ThisEvent()) {
        SetCharacterAIId(2700135, 263050);
        EndEvent();
    }
L0:
    WaitFor(
        CharacterAIState(2700135, AIStateType.Recognition)
            || CharacterAIState(2700135, AIStateType.Combat)
            || HasDamageType(2700135, -1, DamageType.Unspecified));
    SetEventState(12705200, 0, EventEndType.End);
    WaitFixedTimeFrames(1);
    SetCharacterAIId(2700135, 263050);
    ForceAnimationPlayback(2700135, 7011, false, false, false);
});

// 群衆が起きる_XX
$Event(12705290, Restart, function(chrEntityId, areaEntityId, targetDistance, animationId, animationId2, aiId, aiId2) {
    if (!ThisEventSlot()) {
        ForceAnimationPlayback(chrEntityId, animationId, true, false, false);
        SetCharacterAIId(chrEntityId, aiId);
        chr = CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom);
        WaitFor(
            HasDamageType(chrEntityId, -1, DamageType.Unspecified)
                || (InArea(10000, areaEntityId) && chr)
                || (EntityInRadiusOfEntity(10000, chrEntityId, targetDistance) && chr));
        ForceAnimationPlayback(chrEntityId, animationId2, false, true, false);
    }
L0:
    SetCharacterAIId(chrEntityId, aiId2);
    RequestCharacterAIReplan(chrEntityId);
});

// 大砲発射_XX
$Event(12705300, Default, function(objactEventFlag, chrEntityId, objEntityId) {
    WaitFor(ObjActEventFlag(objactEventFlag));
    WaitFixedTimeSeconds(2.3);
    IssueShortWarpRequest(chrEntityId, TargetEntityType.Object, objEntityId, 200);
    SetSpEffect(chrEntityId, 5580, false);
    ForceAnimationPlayback(objEntityId, 1, false, false, false);
    WaitFixedTimeSeconds(1);
    ClearSpEffect(chrEntityId, 5580);
    WaitFixedTimeFrames(30);
    SetObjactState(objEntityId, 9800, Enabled);
    RestartEvent();
});

// 敵に大砲ObjAct起動要請_XX
$Event(12705301, Default, function(chrEntityId, objEntityId, targetDistance, areaEntityId) {
    chrArea = ((CharacterAIState(chrEntityId, AIStateType.Recognition)
        || CharacterAIState(chrEntityId, AIStateType.Combat))
        && EntityInRadiusOfEntity(chrEntityId, objEntityId, targetDistance))
        && ((CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
            && InArea(10000, areaEntityId));
    chrArea2 = !chrArea;
    WaitFor(chrArea || chrArea2);
    if (!chrArea2.Passed) {
        RequestObjactActivation(objEntityId, 9800, -1, chrEntityId);
    }
L0:
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

// 蛇玉落下_XX
$Event(12705320, Restart, function(chrEntityId, areaEntityId, timeSeconds, animationId) {
    if (!ThisEventSlot()) {
        SetCharacterGravity(chrEntityId, Disabled);
        SetCharacterAIState(chrEntityId, Disabled);
        ForceAnimationPlayback(chrEntityId, animationId, true, false, false);
        WaitFor(
            HasDamageType(chrEntityId, -1, DamageType.Unspecified)
                || (InArea(10000, areaEntityId)
                    && (CharacterType(10000, TargetType.Alive)
                        || CharacterType(10000, TargetType.WhitePhantom))));
        WaitFixedTimeSeconds(timeSeconds);
        ForceAnimationPlayback(chrEntityId, -1, false, false, false);
    }
L0:
    SetCharacterGravity(chrEntityId, Enabled);
    SetCharacterAIState(chrEntityId, Enabled);
});

// 蛇玉ジャマー_巣切替
$Event(12705350, Restart, function() {
    WaitFor(InArea(2700352, 2702180));
    WaitFixedTimeSeconds(10);
    ChangeCharacterPatrolBehavior(2700352, 2703011);
    WaitFor(InArea(2700352, 2702181));
    WaitFixedTimeSeconds(10);
    ChangeCharacterPatrolBehavior(2700352, 2703010);
    RestartEvent();
});

// 蛇沼使者が突き落とし
$Event(12705360, Restart, function() {
    EndIf(ThisEvent());
    WaitFor(
        InArea(10000, 2702190)
            && (CharacterType(10000, TargetType.Alive)
                || CharacterType(10000, TargetType.WhitePhantom)));
    SetCharacterHome(2700514, 2702190);
    RequestCharacterAICommand(2700514, 10, 0);
    RequestCharacterAIReplan(2700514);
    chrArea = (CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
        && EntityInRadiusOfEntity(2700514, 10000, 7);
    WaitFor(
        chrArea || InArea(2700514, 2702190) || HasDamageType(2700514, -1, DamageType.Unspecified));
    if (chrArea.Passed) {
        RotateCharacter(2700514, 10000, 3008, false);
    }
L0:
    RequestCharacterAICommand(2700514, -1, 0);
    RequestCharacterAIReplan(2700514);
});

// 蛇玉ワープ湧き_XX
$Event(12705370, Restart, function(chrEntityId, timeSeconds, chrEntityId2, chrEntityId3) {
    if (ThisEventSlot()) {
        SetCharacterAIState(chrEntityId, Enabled);
        ChangeCharacterEnableState(chrEntityId, Enabled);
        EndEvent();
    }
L0:
    SetCharacterAIState(chrEntityId, Disabled);
    ChangeCharacterEnableState(chrEntityId, Disabled);
    WaitFor(
        CharacterAIState(chrEntityId2, AIStateType.Recognition)
            || CharacterAIState(chrEntityId2, AIStateType.Combat));
    ForceAnimationPlayback(chrEntityId2, 3014, false, false, false);
    WaitFixedTimeSeconds(timeSeconds);
    WarpCharacterAndCopyFloor(chrEntityId, TargetEntityType.Character, chrEntityId3, 21, chrEntityId3);
    WaitFixedTimeFrames(75);
    ForceAnimationPlayback(chrEntityId, 6200, false, false, false);
    ChangeCharacterEnableState(chrEntityId, Enabled);
    ForceAnimationPlayback(chrEntityId, 6200, false, false, false);
    SetCharacterAIState(chrEntityId, Enabled);
    RequestCharacterAIReplan(chrEntityId);
});

// 思考パラ切替
$Event(12705400, Restart, function() {
    WaitFor(
        !AllPlayersInArea(2702200)
            && InArea(2700450, 2702200)
            && CharacterAIState(2700450, AIStateType.Normal));
    SetCharacterAIId(2700450, 127501);
    WaitFor(InArea(10000, 2702200));
    SetCharacterAIId(2700450, 127500);
    RestartEvent();
});

// 特殊待機解除_XX
$Event(12705440, Restart, function(chrEntityId, areaEntityId, targetDistance, animationId, animationId2) {
    EndIf(ThisEventSlot());
    ForceAnimationPlayback(chrEntityId, animationId, true, false, false);
    chr = CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom);
    areaChr = InArea(10000, areaEntityId) && chr;
    areaChr2 = EntityInRadiusOfEntity(10000, chrEntityId, targetDistance) && chr;
    dmg = HasDamageType(chrEntityId, -1, DamageType.Unspecified);
    WaitFor(areaChr || areaChr2 || dmg);
    EndIf(dmg.Passed);
    ForceAnimationPlayback(chrEntityId, animationId2, false, false, false);
    RequestCharacterAIReplan(chrEntityId);
});

// 蛇沼使者頭部ヒット操作_XX
$Event(12705460, Restart, function(chrEntityId) {
    ChangeCharacterHitmask(chrEntityId, 6, ON);
    WaitFor(CharacterHasEventMessage(chrEntityId, 10));
    ChangeCharacterHitmask(chrEntityId, 6, OFF);
});

// 檻の狂犬待機_XX
$Event(12705480, Restart, function(chrEntityId, animationId, timeFrames, entityId, targetDistance) {
    if (!ThisEventSlot()) {
        ForceAnimationPlayback(chrEntityId, 7000, true, false, false);
    }
    WaitFor(
        (CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
            && EntityInRadiusOfEntity(chrEntityId, 10000, targetDistance));
    if (!ThisEventSlot()) {
        WaitFor(CharacterHPValue(chrEntityId) < 0);
        ForceAnimationPlayback(chrEntityId, 7001, false, true, false);
    }
    WaitFixedTimeFrames(60);
    WaitFor(CharacterHPValue(chrEntityId) < 0);
    ForceAnimationPlayback(chrEntityId, animationId, false, true, false);
    IssueShortWarpRequest(chrEntityId, TargetEntityType.Area, entityId, -1);
    WaitFixedTimeFrames(timeFrames);
    RestartEvent();
});

// 門が閉まる
$Event(12705490, Restart, function() {
    EndIf(EventFlag(12700175));
    if (!ThisEvent()) {
        chrAreaHpFlag = (CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
            && InArea(10000, 2702040)
            && InArea(2700145, 2702045)
            && HPRatio(2700145) > 0
            && !EventFlag(12700173)
            && !EventFlag(12700174);
        flag = EventFlag(12700175);
        WaitFor(chrAreaHpFlag || flag);
    }
L0:
    EndIf(flag.Passed);
    SetEventState(12705491, 0, EventEndType.End);
    RotateCharacter(2700145, 2701090, 7100, false);
    ForceAnimationPlayback(2701090, 1, false, false, false);
    WaitFixedTimeFrames(55);
    ModifyNavimeshConnectionBitflag(2703050, NavimeshType.Solid, BitopType.Add);
    ForceAnimationPlayback(2701013, 2, false, false, false);
    SetEventFlag(12700173, ON);
    SetEventFlag(12700174, ON);
    WaitFixedTimeFrames(55);
    SetEventFlag(12705495, ON);
    RotateCharacter(2700145, 10000, 3009, false);
    WaitFixedTimeFrames(45);
    SetEventFlag(12700174, OFF);
});

// 狂犬を呼ぶ
$Event(12705491, Restart, function() {
    EndIf(EventFlag(12700175));
    if (!ThisEvent()) {
        chrFlagAreaHp = (CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
            && EventFlag(12700173)
            && !EventFlag(12700174)
            && InArea(10000, 2702040)
            && InArea(2700145, 2702045)
            && HPRatio(2700145) > 0;
        flag = EventFlag(12700175);
        WaitFor(chrFlagAreaHp || flag);
    }
L0:
    EndIf(flag.Passed);
    SetEventState(12705490, 0, EventEndType.End);
    ForceAnimationPlayback(2700145, 3009, false, false, false);
    SetEventFlag(12705495, ON);
});

// 狂犬が飛び出す_XX
$Event(12705500, Restart, function(eventFlagId, chrEntityId, eventSlotId, entityId) {
    EndIf(EventFlag(12700175));
    EndIf(EventFlag(12705495));
    if (!ThisEventSlot()) {
        SetCharacterAIState(chrEntityId, Disabled);
        WaitFor(EventFlag(12705495));
    }
L0:
    SetEventState(12705480, eventSlotId, EventEndType.End);
    if (!EventFlag(eventFlagId)) {
        ForceAnimationPlayback(chrEntityId, 7001, false, true, false);
        WaitFixedTimeFrames(60);
    }
L1:
    SetEventState(12705480, eventSlotId, EventEndType.End);
    ForceAnimationPlayback(entityId, 1, false, false, false);
    ForceAnimationPlayback(chrEntityId, 3014, false, false, false);
    WaitFixedTimeFrames(17);
    SetCharacterInvincibility(chrEntityId, Disabled);
    SetCharacterGravity(chrEntityId, Enabled);
    SetCharacterMaphits(chrEntityId, false);
    SetCharacterAIState(chrEntityId, Enabled);
    SetCharacterHome(chrEntityId, 2702041);
    RequestCharacterAICommand(chrEntityId, 10, 0);
    RequestCharacterAIReplan(chrEntityId);
});

// 狂犬が移動完了_XX
$Event(12705510, Restart, function(chrEntityId, eventFlagId) {
    if (!ThisEventSlot()) {
        areaChrDmgFlag &= EntityInRadiusOfEntity(chrEntityId, 10000, 5)
            && (CharacterType(10000, TargetType.Alive)
                || CharacterType(10000, TargetType.WhitePhantom));
        areaChrDmgFlag &= (areaChrDmgFlag
            || HasDamageType(chrEntityId, 10000, DamageType.Unspecified)
            || InArea(chrEntityId, 2702041)
            || CharacterAIState(chrEntityId, AIStateType.Recognition)
            || CharacterAIState(chrEntityId, AIStateType.Combat))
            && EventFlag(eventFlagId);
        WaitFor(areaChrDmgFlag);
    }
L0:
    RequestCharacterAICommand(chrEntityId, -1, 0);
    RequestCharacterAIReplan(chrEntityId);
});

// 狂犬配置換え_XX
$Event(12705520, Restart, function(chrEntityId, entityId, objEntityId, eventSlotId) {
    EndIf(!EventFlag(12700175));
    SetEventState(12705480, eventSlotId, EventEndType.End);
    IssueShortWarpRequest(chrEntityId, TargetEntityType.Area, entityId, -1);
    ReproduceObjectAnimation(objEntityId, 1);
});

// 狂犬削除_XX
$Event(12705530, Restart, function(chrEntityId, objEntityId) {
    EndIf(!EventFlag(12700175));
    ForceCharacterDeath(chrEntityId, false);
    ChangeCharacterEnableState(chrEntityId, Disabled);
    SetCharacterBackreadState(chrEntityId, true);
    ReproduceObjectAnimation(objEntityId, 1);
});

// 狂犬強制死亡_XX
$Event(12705540, Restart, function(chrEntityId, eventFlagId) {
    EndIf(EventFlag(12700175));
    WaitFor(!EventFlag(eventFlagId) && HasDamageType(chrEntityId, -1, DamageType.Unspecified));
    SetSpEffect(chrEntityId, 5915, false);
    ForceCharacterDeath(chrEntityId, true);
});

// 感染者の乞食_変身する
$Event(12705550, Default, function() {
    if (ThisEvent()) {
        ChangeCharacterEnableState(2700755, Disabled);
        EndEvent();
    }
L0:
    WaitFor(EventFlag(12705551));
    if (!CharacterType(10000, TargetType.Alive)) {
        WaitFixedTimeFrames(60);
        ChangeCharacterEnableState(2700755, Disabled);
        EndEvent();
    }
L1:
    ForceAnimationPlayback(2700755, 103073, false, true, false);
    ChangeCharacterEnableState(2700755, Disabled);
    WarpCharacterAndCopyFloor(2700756, TargetEntityType.Character, 2700755, 245, 2700755);
    SetCharacterGravity(2700756, Enabled);
    SetCharacterAIState(2700756, Enabled);
    ForceAnimationPlayback(2700756, 3030, false, false, false);
    BatchSetEventFlags(1200, 1219, OFF);
    SetEventFlag(1202, ON);
    SaveRequest(0);
});

// 感染者の乞食_立ち上がり済みフラグ
$Event(12705552, Default, function() {
    WaitFor(CharacterHasSpEffect(2700755, 153));
    WaitFixedTimeFrames(0);
});

// 医療協会のフランケン 部位損傷_XX
$Event(12705600, Default, function(npcPartId, npcPartId2, npcPartGroupIdx, animationId, spEffectId, eventFlagId, eventFlagId2, chrEntityId) {
    WaitFor(EventFlag(eventFlagId));
    hpDmgFlag = NPCPartHP(chrEntityId, npcPartId2) <= 0
        && CharacterDamagedBy(chrEntityId, 10000)
        && EventFlag(eventFlagId2);
    hpFlag = HPRatio(chrEntityId) <= 0 && EventFlag(eventFlagId);
    WaitFor(hpDmgFlag || hpFlag);
    EndIf(hpFlag.Passed);
    if (!EventFlag(eventFlagId)) {
        SetNPCPartHP(chrEntityId, npcPartId2, 1, false);
        RestartEvent();
    }
    CreateNPCPart(chrEntityId, npcPartId, npcPartGroupIdx, 999999, 1, 1, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId2, 65, 65);
    RequestCharacterAnimationReset(chrEntityId, Interpolation.Interpolated);
    ForceAnimationPlayback(chrEntityId, animationId, false, false, false);
    WaitFor(CharacterHasEventMessage(chrEntityId, 400));
    SetSpEffect(chrEntityId, spEffectId, false);
    SetEventFlag(eventFlagId2, OFF);
    WaitFor(CharacterHasEventMessage(chrEntityId, 300));
    SetNPCPartHP(chrEntityId, npcPartId2, 80, true);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId2, 64, 64);
    ClearSpEffect(chrEntityId, spEffectId);
    RequestCharacterAICommand(chrEntityId, -1, 0);
    RequestCharacterAIReplan(chrEntityId);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// 医療協会のフランケン 部位登録_XX
$Event(12705630, Default, function(npcPartId, npcPartId2, npcPartGroupIdx, npcPartHP, eventFlagId, chrEntityId) {
    WaitFor(EntityInRadiusOfEntity(chrEntityId, 10000, 10));
    CreateNPCPart(chrEntityId, npcPartId, npcPartGroupIdx, npcPartHP, 1, 1, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId2, 64, 64);
    SetEventFlag(eventFlagId, ON);
});

// 医療協会のフランケン 部位破壊タイミング制限_XX
$Event(12705660, Default, function(eventMessageId, eventMessageId2, eventFlagId, chrEntityId, bitNumber, bitNumber2) {
    ChangeCharacterHitmask(chrEntityId, bitNumber, OFF);
    ChangeCharacterHitmask(chrEntityId, bitNumber2, ON);
    WaitFor(CharacterHasEventMessage(chrEntityId, eventMessageId));
    SetEventFlag(eventFlagId, ON);
    ChangeCharacterHitmask(chrEntityId, bitNumber, ON);
    ChangeCharacterHitmask(chrEntityId, bitNumber2, OFF);
    WaitFor(CharacterHasEventMessage(chrEntityId, eventMessageId2));
    SetEventFlag(eventFlagId, OFF);
    RestartEvent();
});

// マップ初回入場_プレイログ
$Event(12700990, Default, function() {
    EndIf(ThisEvent());
    WaitFor(PlayerStandingOnHit(2703500));
    ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 144, PlayLogMultiplayerType.HostOnly);
    ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 144, PlayLogMultiplayerType.HostOnly);
    ParameterOutput(PlayerPlayLogParameter.Weapon, 144, PlayLogMultiplayerType.HostOnly);
    ParameterOutput(PlayerPlayLogParameter.Armor, 144, PlayLogMultiplayerType.HostOnly);
});

// ★森_新NPC召喚_ボス部屋を目指す_XX
$Event(12704450, Restart, function(chrEntityId, entityId, eventFlagId, eventFlagId2, eventFlagId3) {
    EndIf(ThisEventSlot());
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    SetEventPoint(chrEntityId, entityId, 1);
    WaitFor(EventFlag(eventFlagId) && !EventFlag(eventFlagId2) && EventFlag(eventFlagId3));
    RequestCharacterAICommand(chrEntityId, 990, 0);
    RequestCharacterAIReplan(chrEntityId);
});

// ★森_新NPC召喚_召喚可否判定_連盟の狩人：ヘンリック
$Event(12704400, Restart, function(eventFlagId, entityId, eventFlagId2, eventFlagId3, eventFlagId4, eventFlagId5) {
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
                && (EventFlag(12410803) || EventFlag(12410804))
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
                && (EventFlag(12410803) || EventFlag(12410804))
                && !EventFlag(eventFlagId5)));
    SetEventFlag(eventFlagId, OFF);
    DeleteMapSFX(entityId, true);
    RestartEvent();
});

// ★森_新NPC召喚_召喚可否判定_連盟の狩人：処刑人
$Event(12704401, Restart, function(eventFlagId, entityId, eventFlagId2, eventFlagId3, eventFlagId4, eventFlagId5) {
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
                && !EventFlag(6813)
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
                && !EventFlag(6813)
                && !EventFlag(eventFlagId5)));
    SetEventFlag(eventFlagId, OFF);
    DeleteMapSFX(entityId, true);
    RestartEvent();
});

// ★森_新NPC召喚_参加_XX
$Event(12704410, Restart, function(signType, areaEntityId, entityId, eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4, actionButtonParameterId) {
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

// ★森_新NPC召喚_ボス部屋に入る_XX
$Event(12704460, Restart, function(chrEntityId, areaEntityId, entityId, areaEntityId2, playAnimationId, eventFlagId, areaEntityId3) {
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


