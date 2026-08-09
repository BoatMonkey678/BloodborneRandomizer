// ==EMEVD==
// @docs    bb-common.emedf.json
// @compress    DCX_DFLT_10000_44_9
// @game    Bloodborne
// @string    "クリア時間_通し\u0000クリア時間_1プレイ\u0000ボス_撃破\u0000PC情報_ボス撃破_死と闇レッサー\u0000ボス_戦闘開始\u0000ボス戦_撃破時間\u0000トラップロード_闇魔法_解除状態\u0000トラップロード_闇魔法_発動状態\u0000PC情報_ボス撃破_トラップロード中ボス\u0000トラップロード_中ボス戦_撃破時間\u0000PC情報_トラップロード到達時\u0000N:\\SPRJ\\data\\Param\\event\\common.emevd\u0000\u0000\u0000\u0000\u0000"
// @linked    [300]
// @version    3.6.2
// ==/EMEVD==

// コンストラクタ
$Event(0, Default, function() {
    $InitializeEvent(30, 7000, 2600950, 2601950, 999, 12607800);
    $InitializeEvent(31, 7000, 2600951, 2601951, 12601800, 12607820);
    $InitializeEvent(32, 7000, 2600952, 2601952, 999, 12607840);
    $InitializeEvent(33, 7000, 2600953, 2601953, 999, 12607860);
    $InitializeEvent(30, 7100, 72600200, 2601950);
    $InitializeEvent(31, 7100, 72600201, 2601951);
    $InitializeEvent(32, 7100, 72600202, 2601952);
    $InitializeEvent(33, 7100, 72600203, 2601953);
    $InitializeEvent(30, 7200, 72600100, 2601950, 2102953);
    $InitializeEvent(31, 7200, 72600101, 2601951, 2102953);
    $InitializeEvent(32, 7200, 72600102, 2601952, 2102953);
    $InitializeEvent(33, 7200, 72600103, 2601953, 2102953);
    $InitializeEvent(30, 7300, 72102600, 2601950);
    $InitializeEvent(31, 7300, 72102601, 2601951);
    $InitializeEvent(32, 7300, 72102602, 2601952);
    $InitializeEvent(33, 7300, 72102603, 2601953);
    $InitializeEvent(6, 9200, 2603900);
    StartTimeMeasurement(2600000, 0, Disabled);
    StartTimeMeasurement(2600001, 18, Enabled);
    $InitializeEvent(0, 12600990);
    $InitializeEvent(0, 12604700, 2600700, 12604701, 12604711, 2600, 12604741, 12601700);
    $InitializeEvent(5, 12604700, 2600701, 12604702, 12604712, 2601, 12604743, 12601701);
    $InitializeEvent(0, 12604710, 2600700, 12604701, 12604711, 12604721, 12604741);
    $InitializeEvent(5, 12604710, 2600701, 12604702, 12604712, 12604722, 12604743);
    $InitializeEvent(0, 12604720, 2600700, 12604701, 12604711, 12604721, 12604741);
    $InitializeEvent(5, 12604720, 2600701, 12604702, 12604712, 12604722, 12604743);
    $InitializeEvent(0, 12604730, 2600700, 12604701, 12604711, 2600, 12604731, 12601700, 12604741);
    $InitializeEvent(5, 12604730, 2600701, 12604702, 12604712, 2601, 12604732, 12601701, 12604743);
    $InitializeEvent(0, 12604740);
    $InitializeEvent(0, 12604742);
    $InitializeEvent(0, 12604847);
    $InitializeEvent(0, 12604848);
    $InitializeEvent(0, 12601800);
    $InitializeEvent(0, 12601801);
    $InitializeEvent(0, 12601802);
    $InitializeEvent(0, 12604845);
    $InitializeEvent(0, 12604846);
    $InitializeEvent(0, 12604802);
    $InitializeEvent(0, 12604803);
    $InitializeEvent(0, 12604804);
    $InitializeEvent(0, 12604805);
    $InitializeEvent(0, 12604807);
    $InitializeEvent(0, 12601803);
    $InitializeEvent(0, 12604820, 2600800, 12605880, 12605885);
    $InitializeEvent(0, 12604830, 2600800, 12605880, 2602830, 2602831);
    $InitializeEvent(1, 12604830, 2600800, 12605881, 2602831, 2602832);
    $InitializeEvent(2, 12604830, 2600800, 12605882, 2602832, 2602830);
    $InitializeEvent(3, 12604830, 2600800, 12605883, 2602833, 2602834);
    $InitializeEvent(4, 12604830, 2600800, 12605884, 2602834, 2602835);
    $InitializeEvent(5, 12604830, 2600800, 12605885, 2602835, 2602833);
    $InitializeEvent(0, 12604806);
    $InitializeEvent(0, 12604810);
    $InitializeEvent(0, 12604840);
    $InitializeEvent(0, 12604815);
    $InitializeEvent(0, 12604862);
    $InitializeEvent(0, 12604863);
    $InitializeEvent(0, 12601850);
    $InitializeEvent(0, 12601851);
    $InitializeEvent(0, 12601852);
    $InitializeEvent(0, 12601853);
    $InitializeEvent(0, 12604860);
    $InitializeEvent(0, 12604861);
    $InitializeEvent(0, 12604852);
    $InitializeEvent(0, 12604853);
    $InitializeEvent(0, 12604854);
    $InitializeEvent(0, 12604855);
    $InitializeEvent(0, 12604856);
    $InitializeEvent(0, 12604985);
    $InitializeEvent(0, 12604986);
    $InitializeEvent(0, 12601854);
    $InitializeEvent(0, 12601855);
    $InitializeEvent(0, 12604870, 2602040, 2602042, 2602041, 2602042, 2602042, 12604942, 12604941, 12604942);
    $InitializeEvent(1, 12604870, 2602041, 2602043, 2602040, 2602043, 2602043, 12604943, 12604940, 12604943);
    $InitializeEvent(2, 12604870, 2602042, 2602040, 2602044, 2602040, 2602044, 12604940, 12604944, 12604940);
    $InitializeEvent(3, 12604870, 2602043, 2602046, 2602045, 2602041, 2602046, 12604946, 12604945, 12604941);
    $InitializeEvent(4, 12604870, 2602044, 2602042, 2602042, 2602045, 2602042, 12604942, 12604942, 12604945);
    $InitializeEvent(5, 12604870, 2602045, 2602043, 2602043, 2602044, 2602043, 12604943, 12604943, 12604944);
    $InitializeEvent(0, 12604877);
    $InitializeEvent(0, 12604888);
    $InitializeEvent(0, 12604878);
    $InitializeEvent(0, 12604880, 2602060, 2602062, 2602061, 2602062, 12604952, 12604951, 12604952, 2602070);
    $InitializeEvent(1, 12604880, 2602061, 2602065, 2602060, 2602065, 12604955, 12604950, 12604955, 2602070);
    $InitializeEvent(2, 12604880, 2602062, 2602063, 2602063, 2602060, 12604953, 12604953, 12604950, 2602070);
    $InitializeEvent(3, 12604880, 2602063, 2602064, 2602064, 2602064, 12604954, 12604954, 12604954, 2602070);
    $InitializeEvent(4, 12604880, 2602065, 2602066, 2602067, 2602061, 12604956, 12604957, 12604951, 2602079);
    $InitializeEvent(5, 12604880, 2602067, 2602065, 2602065, 2602068, 12604955, 12604955, 12604958, 2602070);
    $InitializeEvent(6, 12604880, 2602068, 2602069, 2602069, 2602067, 12604959, 12604959, 12604957, 2602070);
    $InitializeEvent(7, 12604880, 2602059, 2602065, 2602065, 2602065, 12604955, 12604955, 12604955, 2602070);
    $InitializeEvent(0, 12604956);
    $InitializeEvent(0, 12604879);
    $InitializeEvent(0, 12604930);
    $InitializeEvent(0, 12604889);
    $InitializeEvent(1, 12604890, 2600161, 12601850, 12604857);
    $InitializeEvent(2, 12604890, 2600162, 12601850, 12604857);
    $InitializeEvent(3, 12604890, 2600163, 12601850, 12604857);
    $InitializeEvent(4, 12604890, 2600164, 12601850, 12604857);
    $InitializeEvent(5, 12604890, 2600165, 12601850, 12604857);
    $InitializeEvent(7, 12604890, 2600167, 12601850, 12604857);
    $InitializeEvent(9, 12604890, 2600169, 12601850, 12604857);
    $InitializeEvent(10, 12604890, 2600170, 12601850, 12604857);
    $InitializeEvent(11, 12604890, 2600171, 12601850, 12604857);
    $InitializeEvent(12, 12604890, 2600172, 12601850, 12604857);
    $InitializeEvent(13, 12604890, 2600173, 12601850, 12604857);
    $InitializeEvent(15, 12604890, 2600175, 12601850, 12604857);
    $InitializeEvent(16, 12604890, 2600176, 12601850, 12604857);
    $InitializeEvent(17, 12604890, 2600177, 12601850, 12604857);
    $InitializeEvent(18, 12604890, 2600178, 12601850, 12604857);
    $InitializeEvent(19, 12604890, 2600179, 12601850, 12604857);
    $InitializeEvent(1, 12604910, 2600161, 12601850);
    $InitializeEvent(2, 12604910, 2600162, 12601850);
    $InitializeEvent(3, 12604910, 2600163, 12601850);
    $InitializeEvent(4, 12604910, 2600164, 12601850);
    $InitializeEvent(5, 12604910, 2600165, 12601850);
    $InitializeEvent(7, 12604910, 2600167, 12601850);
    $InitializeEvent(9, 12604910, 2600169, 12601850);
    $InitializeEvent(10, 12604910, 2600170, 12601850);
    $InitializeEvent(11, 12604910, 2600171, 12601850);
    $InitializeEvent(12, 12604910, 2600172, 12601850);
    $InitializeEvent(13, 12604910, 2600173, 12601850);
    $InitializeEvent(15, 12604910, 2600175, 12601850);
    $InitializeEvent(16, 12604910, 2600176, 12601850);
    $InitializeEvent(17, 12604910, 2600177, 12601850);
    $InitializeEvent(18, 12604910, 2600178, 12601850);
    $InitializeEvent(19, 12604910, 2600179, 12601850);
    $InitializeEvent(0, 12604931, 12604946, 12604856);
    $InitializeEvent(1, 12604931, 12604956, 12601850);
    $InitializeEvent(0, 12604960, 2602040);
    $InitializeEvent(1, 12604960, 2602041);
    $InitializeEvent(2, 12604960, 2602042);
    $InitializeEvent(3, 12604960, 2602043);
    $InitializeEvent(4, 12604960, 2602044);
    $InitializeEvent(5, 12604960, 2602045);
    $InitializeEvent(6, 12604960, 2602046);
    $InitializeEvent(0, 12604970, 2602060);
    $InitializeEvent(1, 12604970, 2602061);
    $InitializeEvent(2, 12604970, 2602062);
    $InitializeEvent(3, 12604970, 2602063);
    $InitializeEvent(4, 12604970, 2602064);
    $InitializeEvent(5, 12604970, 2602065);
    $InitializeEvent(6, 12604970, 2602066);
    $InitializeEvent(7, 12604970, 2602067);
    $InitializeEvent(8, 12604970, 2602068);
    $InitializeEvent(9, 12604970, 2602059);
    $InitializeEvent(0, 12604980, 20, 72600307, 72600311, 72600307, 72600311, 72600311, 72600306);
    $InitializeEvent(1, 12604980, 10, 72600312, 72600316, 72600312, 72600316, 72600316, 72600306);
    $InitializeEvent(0, 12600020, 2600100, 2600101);
    $InitializeEvent(0, 12600021);
    $InitializeEvent(0, 12600025);
    $InitializeEvent(0, 12600026);
    $InitializeEvent(0, 12600027);
    $InitializeEvent(0, 12600028);
    $InitializeEvent(0, 12600029);
    $InitializeEvent(0, 12600500, 2600720);
    $InitializeEvent(0, 12600030);
    $InitializeEvent(0, 12600031);
    SetMapSoundState(2603100, Disabled);
    $InitializeEvent(0, 12600010, 2602301, 260000001, 0);
    $InitializeEvent(1, 12600010, 2602302, 260000001, 0);
    $InitializeEvent(2, 12600010, 2602303, 260000001, 0);
    $InitializeEvent(3, 12600010, 2602304, 260000001, 0);
    $InitializeEvent(4, 12600010, 2602305, 260000001, 0);
    $InitializeEvent(5, 12600010, 2602310, 2603100, 1);
    $InitializeEvent(0, 12600130, 10000);
    $InitializeEvent(1, 12600130, 10000);
    $InitializeEvent(2, 12600130, 10000);
    $InitializeEvent(3, 12600130, 2600104);
    $InitializeEvent(4, 12600130, 2600113);
    $InitializeEvent(5, 12600130, 2600150);
    $InitializeEvent(6, 12600130, 2600153);
    $InitializeEvent(7, 12600130, 2600155);
    $InitializeEvent(8, 12600130, 2600201);
    $InitializeEvent(9, 12600130, 2600180);
    $InitializeEvent(10, 12600130, 2600181);
    $InitializeEvent(11, 12600130, 2600182);
    $InitializeEvent(12, 12600130, 2600183);
    $InitializeEvent(13, 12600130, 2600103);
    $InitializeEvent(0, 12600150, 10000);
    $InitializeEvent(1, 12600150, 2600104);
    $InitializeEvent(2, 12600150, 2600113);
    $InitializeEvent(3, 12600150, 2600150);
    $InitializeEvent(4, 12600150, 2600153);
    $InitializeEvent(5, 12600150, 2600155);
    $InitializeEvent(6, 12600150, 2600201);
    $InitializeEvent(7, 12600150, 2600180);
    $InitializeEvent(8, 12600150, 2600181);
    $InitializeEvent(9, 12600150, 2600182);
    $InitializeEvent(10, 12600150, 2600183);
    $InitializeEvent(11, 12600150, 2600103);
    $InitializeEvent(0, 12601294);
    $InitializeEvent(0, 12601295, 2601211, 12601294, 12605250, 12601250, OFF);
    $InitializeEvent(1, 12601295, 2601212, 12601294, 12605250, 12601250, ON);
    $InitializeEvent(2, 12601295, 2601221, 12601331, 12605251, 12601251, OFF);
    $InitializeEvent(3, 12601295, 2601222, 12601331, 12605251, 12601251, ON);
    $InitializeEvent(4, 12601295, 2601231, 12601294, 12605252, 12601252, OFF);
    $InitializeEvent(5, 12601295, 2601232, 12601294, 12605252, 12601252, ON);
    $InitializeEvent(6, 12601295, 2601241, 12601323, 12605256, 12601256, ON);
    $InitializeEvent(7, 12601295, 2601242, 12601323, 12605256, 12601256, OFF);
    $InitializeEvent(8, 12601295, 2601281, 12601334, 12605253, 12601254, OFF);
    $InitializeEvent(9, 12601295, 2601282, 12601334, 12605253, 12601254, ON);
    $InitializeEvent(10, 12601295, 2601291, 12601335, 12605254, 12601255, OFF);
    $InitializeEvent(11, 12601295, 2601292, 12601335, 12605254, 12601255, ON);
    $InitializeEvent(0, 12601340, 12601331, 12601251, 2601221);
    $InitializeEvent(1, 12601340, 12601334, 12601254, 2601281);
    $InitializeEvent(2, 12601340, 12601335, 12601255, 2601291);
    $InitializeEvent(0, 12601310, 12601250, 2601210, 2601211, 2601212, 12601294);
    $InitializeEvent(1, 12601310, 12601251, 2601220, 2601221, 2601222, 12601331);
    $InitializeEvent(2, 12601310, 12601252, 2601230, 2601231, 2601232, 12601294);
    $InitializeEvent(0, 12601315, 12601256, 2601240, 2601241, 2601242, 12601323);
    $InitializeEvent(3, 12601310, 12601254, 2601280, 2601281, 2601282, 12601334);
    $InitializeEvent(4, 12601310, 12601255, 2601290, 2601291, 2601292, 12601335);
    $InitializeEvent(0, 12601320, 12605250, 12601250, 2602211, 2602212, 2601211, 2601212, 2601210, 12601211);
    $InitializeEvent(0, 12601330, 12605250, 12601250, 2602211, 2602212, 2601211, 2601212, 2601210, 12601211);
    $InitializeEvent(1, 12601320, 12605251, 12601251, 2602221, 2602222, 2601221, 2601222, 2601220, 12601221);
    $InitializeEvent(1, 12601330, 12605251, 12601251, 2602221, 2602222, 2601221, 2601222, 2601220, 12601221);
    $InitializeEvent(2, 12601320, 12605252, 12601252, 2602231, 2602232, 2601231, 2601232, 2601230, 12601231);
    $InitializeEvent(2, 12601330, 12605252, 12601252, 2602231, 2602232, 2601231, 2601232, 2601230, 12601231);
    $InitializeEvent(3, 12601320, 12605256, 12601256, 2602252, 2602251, 2601242, 2601241, 2601240, 12601241);
    $InitializeEvent(3, 12601330, 12605256, 12601256, 2602252, 2602251, 2601242, 2601241, 2601240, 12601241);
    $InitializeEvent(4, 12601320, 12605253, 12601254, 2602281, 2602282, 2601281, 2601282, 2601280, 12601281);
    $InitializeEvent(4, 12601330, 12605253, 12601254, 2602281, 2602282, 2601281, 2601282, 2601280, 12601281);
    $InitializeEvent(5, 12601320, 12605254, 12601255, 2602291, 2602292, 2601291, 2601292, 2601290, 12601291);
    $InitializeEvent(5, 12601330, 12605254, 12601255, 2602291, 2602292, 2601291, 2601292, 2601290, 12601291);
    $InitializeEvent(0, 12601351, 12601850, 2601260, 2601261);
    $InitializeEvent(0, 12601352);
    $InitializeEvent(0, 12605200, 2600300, 2600310);
    $InitializeEvent(1, 12605200, 2600301, 2600311);
    $InitializeEvent(2, 12605200, 2600302, 2600312);
    $InitializeEvent(3, 12605200, 2600303, 2600313);
    $InitializeEvent(0, 12600080, 2600183, 7011, 7013, 7014);
    $InitializeEvent(0, 12600040, 2602001, 2600105, 2602004, 10000, 2602015);
    $InitializeEvent(0, 12600041, 2600105);
    $InitializeEvent(1, 12600041, 2600111);
    $InitializeEvent(2, 12600041, 2600106);
    $InitializeEvent(3, 12600041, 2600195);
    $InitializeEvent(4, 12600041, 2600196);
    $InitializeEvent(5, 12600041, 2600197);
    $InitializeEvent(1, 12600047, 2600109);
    $InitializeEvent(2, 12600047, 2600110);
    $InitializeEvent(3, 12600047, 2600198);
    $InitializeEvent(0, 12600180, 2600106, 22502610);
    $InitializeEvent(0, 12600400, 2600400, 52600990);
    $InitializeEvent(1, 12600400, 2600401, 52600980);
    $InitializeEvent(2, 12600400, 2600402, 52600970);
    $InitializeEvent(3, 12600400, 2600403, 52600960);
    $InitializeEvent(4, 12600400, 2600404, 52600950);
    $InitializeEvent(0, 12600410);
    $InitializeEvent(0, 12600050, 2600134, 2602020);
    $InitializeEvent(1, 12600050, 2600135, 2602020);
    $InitializeEvent(2, 12600050, 2600136, 2602020);
    $InitializeEvent(3, 12600050, 2600137, 2602020);
    $InitializeEvent(4, 12600050, 2600138, 2602031);
    $InitializeEvent(5, 12600050, 2600139, 2602031);
    $InitializeEvent(6, 12600050, 2600140, 2602020);
    $InitializeEvent(7, 12600050, 2600141, 2602031);
    $InitializeEvent(8, 12600050, 2600102, 2602020);
    $InitializeEvent(0, 12600035, 2600104);
    $InitializeEvent(1, 12600035, 2600201);
    $InitializeEvent(2, 12600035, 2600190);
    $InitializeEvent(3, 12600035, 2600220);
    $InitializeEvent(4, 12600035, 2600221);
    $InitializeEvent(0, 12600190, 2600191, 2600192);
    $InitializeEvent(1, 12600190, 2600192, 2600191);
    $InitializeEvent(0, 12600110, 2600104, 2600210, 2600211);
    $InitializeEvent(1, 12600110, 2600113, 2600212, 2600213);
    $InitializeEvent(2, 12600110, 2600201, 2600214, 2600215);
    $InitializeEvent(3, 12600110, 2600103, 2600216, 2600217);
    $InitializeEvent(0, 12600070, 2600114, 2602012, 16);
    $InitializeEvent(3, 12600070, 2600117, 2602013, 15);
    $InitializeEvent(4, 12600070, 2600118, 2602014, 15);
    $InitializeEvent(5, 12600070, 2600119, 2602014, 15);
    $InitializeEvent(0, 12600105, 2600123, 7010, 7011, 2600120, 2600121, 2600122);
    $InitializeEvent(1, 12600105, 2600145, 7010, 7011, 2600125, 2600126, 0);
    $InitializeEvent(0, 12600060, 2600120, 9001, 9060);
    $InitializeEvent(1, 12600060, 2600121, 9000, 9060);
    $InitializeEvent(2, 12600060, 2600122, 9000, 9060);
    $InitializeEvent(3, 12600060, 2600125, 9000, 9060);
    $InitializeEvent(4, 12600060, 2600126, 9001, 9060);
    $InitializeEvent(5, 12600060, 2600129, 9000, 9060);
    $InitializeEvent(0, 12600090, 2600107, 2602008);
    $InitializeEvent(1, 12600090, 2600108, 2602009);
    $InitializeEvent(2, 12600090, 2600116, 2602009);
    $InitializeEvent(3, 12600090, 2600202, 2602005);
    $InitializeEvent(0, 12600120, 12601000, 2601005);
    $InitializeEvent(1, 12600120, 12601001, 2601006);
    $InitializeEvent(2, 12600120, 12601002, 2601007);
    $InitializeEvent(3, 12600120, 12601003, 2601009);
    $InitializeEvent(0, 12600125, 2601008, 2600570);
    if (CharacterType(10000, TargetType.Alive)) {
        if (EventFlag(6314)) {
            SetEventFlag(12601999, ON);
        }
    }
    if (!EventFlag(12601999)) {
        DeactivateObject(2601500, Enabled);
        DeactivateObject(2601501, Disabled);
        SetObjectTreasureState(2601500, Enabled);
        SetObjectTreasureState(2601501, Disabled);
    } else {
        DeactivateObject(2601500, Disabled);
        DeactivateObject(2601501, Enabled);
        SetObjectTreasureState(2601500, Disabled);
        SetObjectTreasureState(2601501, Enabled);
    }
    if (CharacterType(10000, TargetType.Alive)) {
        if (EventFlag(6315)) {
            SetEventFlag(12601998, ON);
        }
    }
    if (!EventFlag(12601998)) {
        DeactivateObject(2601502, Enabled);
        DeactivateObject(2601503, Disabled);
        SetObjectTreasureState(2601502, Enabled);
        SetObjectTreasureState(2601503, Disabled);
    } else {
        DeactivateObject(2601502, Disabled);
        DeactivateObject(2601503, Enabled);
        SetObjectTreasureState(2601502, Disabled);
        SetObjectTreasureState(2601503, Enabled);
    }
    $InitializeEvent(0, 12601050);
    $InitializeEvent(0, 12601051);
    $InitializeEvent(0, 12600701);
    $InitializeEvent(0, 12600703);
});

// 出現寡婦_出現_TR
$Event(12604700, Restart, function(chrEntityId, eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4, eventFlagId5) {
    if (EventFlag(eventFlagId2)) {
        SetCharacterAIState(chrEntityId, Disabled);
        ForceAnimationPlayback(chrEntityId, 7010, false, false, false);
        EndEvent();
    }
L0:
    EndIf(EventFlag(eventFlagId));
    SetCharacterAIState(chrEntityId, Disabled);
    ForceAnimationPlayback(chrEntityId, 7010, true, false, false);
    onlineFlagChrSp &= IsOnline() && !EventFlag(eventFlagId2) && !EventFlag(eventFlagId3) && EventFlag(eventFlagId4);
    chrOnline &= CharacterType(10000, TargetType.Alive) && PlayersSoulLevel() >= 30;
    if (EventFlag(eventFlagId5)) {
        chrOnline &= NumberOfClientsOfType(ClientType.Coop) >= 1;
    }
    onlineFlagChrSp &= chrOnline || CharacterHasSpEffect(10000, 9025);
    WaitFor(onlineFlagChrSp);
    WaitFor(RandomElapsedSeconds(10, 10));
    if (EventFlag(eventFlagId5)) {
        DisplayMessage(109000, 0);
    }
    ForceAnimationPlayback(chrEntityId, 7011, false, false, false);
    WaitFixedTimeFrames(59);
    SetCharacterAIState(chrEntityId, Enabled);
    SetEventFlag(eventFlagId, ON);
});

// 出現寡婦_鐘を鳴らす_TR
$Event(12604710, Restart, function(chrEntityId, eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4) {
    EndIf(EventFlag(eventFlagId2));
    WaitFor(
        EventFlag(eventFlagId)
            && !EventFlag(eventFlagId3)
            && !EventFlag(eventFlagId2)
            && EventFlag(eventFlagId4)
            && NumberOfClientsOfType(ClientType.Invader) == 0);
    WaitFor(CharacterType(10000, TargetType.Alive) && RandomElapsedSeconds(10, 10));
    SetSpEffect(10000, 9020, false);
    SetSpEffect(chrEntityId, 9100, false);
    RequestCharacterAIReplan(chrEntityId);
    SetEventFlag(eventFlagId3, ON);
    DisplayMessage(100002, 0);
    RestartEvent();
});

// 出現寡婦_鐘を止める_TR
$Event(12604720, Restart, function(chrEntityId, eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4) {
    EndIf(EventFlag(eventFlagId2));
    WaitFor(
        EventFlag(eventFlagId)
            && EventFlag(eventFlagId3)
            && (EventFlag(eventFlagId2)
                || NumberOfClientsOfType(ClientType.Invader) >= 1
                || !EventFlag(eventFlagId4)));
    WaitFor(CharacterType(10000, TargetType.Alive));
    ClearSpEffect(10000, 9020);
    ClearSpEffect(chrEntityId, 9100);
    RequestCharacterAIReplan(chrEntityId);
    SetEventFlag(eventFlagId3, OFF);
    RestartEvent();
});

// 出現寡婦_消滅_TR
$Event(12604730, Restart, function(chrEntityId, eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4, eventFlagId5, eventFlagId6) {
    EndIf(EventFlag(eventFlagId2) || EventFlag(eventFlagId3) || EventFlag(eventFlagId4));
    hp = HPRatio(chrEntityId) == 0;
    flag = EventFlag(eventFlagId4);
    WaitFor(EventFlag(eventFlagId) && EventFlag(eventFlagId6) && (hp || flag));
    SetEventFlag(eventFlagId2, ON);
    if (!flag.Passed) {
        SetEventFlag(eventFlagId5, ON);
        WaitFixedTimeSeconds(5);
        DisplayMessage(109001, 0);
        EndEvent();
    }
L0:
    SetCharacterAIState(chrEntityId, Disabled);
    ForceAnimationPlayback(chrEntityId, 7012, false, false, false);
    WaitFixedTimeFrames(88);
    ForceAnimationPlayback(chrEntityId, 7010, false, false, false);
});

// 出現寡婦_同一領域判定_TR_悪夢の主エリア
$Event(12604740, Restart, function() {
    WaitFor(
        CharacterType(10000, TargetType.Alive)
            && (PlayerStandingOnHit(2604000)
                || PlayerStandingOnHit(2604001)
                || PlayerStandingOnHit(2604002)
                || PlayerStandingOnHit(2604003)
                || PlayerStandingOnHit(2604004)
                || PlayerStandingOnHit(2604005)
                || PlayerStandingOnHit(2604006)
                || PlayerStandingOnHit(2604007)
                || PlayerStandingOnHit(2604008)
                || PlayerStandingOnHit(2604009)
                || PlayerStandingOnHit(2604010)
                || PlayerStandingOnHit(2604011)
                || PlayerStandingOnHit(2604012)
                || PlayerStandingOnHit(2604013)
                || PlayerStandingOnHit(2604014)
                || PlayerStandingOnHit(2604015)
                || PlayerStandingOnHit(2604016)
                || PlayerStandingOnHit(2604017)
                || PlayerStandingOnHit(2604018)
                || PlayerStandingOnHit(2604019)
                || PlayerStandingOnHit(2604020)
                || PlayerStandingOnHit(2604021)
                || PlayerStandingOnHit(2604022)
                || PlayerStandingOnHit(2604023)
                || PlayerStandingOnHit(2604024)
                || PlayerStandingOnHit(2604025)
                || PlayerStandingOnHit(2604026)));
    SetEventFlag(12604741, ON);
    WaitFor(
        CharacterType(10000, TargetType.Alive)
            && !(PlayerStandingOnHit(2604000)
                || PlayerStandingOnHit(2604001)
                || PlayerStandingOnHit(2604002)
                || PlayerStandingOnHit(2604003)
                || PlayerStandingOnHit(2604004)
                || PlayerStandingOnHit(2604005)
                || PlayerStandingOnHit(2604006)
                || PlayerStandingOnHit(2604007)
                || PlayerStandingOnHit(2604008)
                || PlayerStandingOnHit(2604009)
                || PlayerStandingOnHit(2604010)
                || PlayerStandingOnHit(2604011)
                || PlayerStandingOnHit(2604012)
                || PlayerStandingOnHit(2604013)
                || PlayerStandingOnHit(2604014)
                || PlayerStandingOnHit(2604015)
                || PlayerStandingOnHit(2604016)
                || PlayerStandingOnHit(2604017)
                || PlayerStandingOnHit(2604018)
                || PlayerStandingOnHit(2604019)
                || PlayerStandingOnHit(2604020)
                || PlayerStandingOnHit(2604021)
                || PlayerStandingOnHit(2604022)
                || PlayerStandingOnHit(2604023)
                || PlayerStandingOnHit(2604024)
                || PlayerStandingOnHit(2604025)
                || PlayerStandingOnHit(2604026)));
    SetEventFlag(12604741, OFF);
    RestartEvent();
});

// 出現寡婦_同一領域判定_TR_死と闇レッサーエリア
$Event(12604742, Restart, function() {
    WaitFor(
        CharacterType(10000, TargetType.Alive)
            && (PlayerStandingOnHit(2604100)
                || PlayerStandingOnHit(2604101)
                || PlayerStandingOnHit(2604102)
                || PlayerStandingOnHit(2604103)
                || PlayerStandingOnHit(2604104)
                || PlayerStandingOnHit(2604105)
                || PlayerStandingOnHit(2604106)
                || PlayerStandingOnHit(2604107)
                || PlayerStandingOnHit(2604108)
                || PlayerStandingOnHit(2604109)
                || PlayerStandingOnHit(2604110)
                || PlayerStandingOnHit(2604111)
                || PlayerStandingOnHit(2604112)
                || PlayerStandingOnHit(2604113)
                || PlayerStandingOnHit(2604114)
                || PlayerStandingOnHit(2604115)
                || PlayerStandingOnHit(2604116)
                || PlayerStandingOnHit(2604117)
                || PlayerStandingOnHit(2604118)
                || PlayerStandingOnHit(2604119)));
    SetEventFlag(12604743, ON);
    WaitFor(
        CharacterType(10000, TargetType.Alive)
            && !(PlayerStandingOnHit(2604100)
                || PlayerStandingOnHit(2604101)
                || PlayerStandingOnHit(2604102)
                || PlayerStandingOnHit(2604103)
                || PlayerStandingOnHit(2604104)
                || PlayerStandingOnHit(2604105)
                || PlayerStandingOnHit(2604106)
                || PlayerStandingOnHit(2604107)
                || PlayerStandingOnHit(2604108)
                || PlayerStandingOnHit(2604109)
                || PlayerStandingOnHit(2604110)
                || PlayerStandingOnHit(2604111)
                || PlayerStandingOnHit(2604112)
                || PlayerStandingOnHit(2604113)
                || PlayerStandingOnHit(2604114)
                || PlayerStandingOnHit(2604115)
                || PlayerStandingOnHit(2604116)
                || PlayerStandingOnHit(2604117)
                || PlayerStandingOnHit(2604118)
                || PlayerStandingOnHit(2604119)));
    SetEventFlag(12604743, OFF);
    RestartEvent();
});

// ボス撃破_レッサーデーモン（死と闇）
$Event(12601800, Default, function() {
    if (ThisEvent()) {
        SetMapSoundState(2603802, Disabled);
        SetMapSoundState(2603803, Disabled);
        ChangeCharacterEnableState(2600800, Disabled);
        ChangeCharacterEnableState(2600801, Disabled);
        ChangeCharacterEnableState(2600802, Disabled);
        DeactivateObject(2601800, Disabled);
        DeleteMapSFX(2603800, false);
        EndEvent();
    }
L0:
    WaitFor(HPRatio(2600802) <= 0);
    RequestCharacterAnimationReset(2600800, Interpolation.Uninterpolated);
    RequestCharacterAnimationReset(2600801, Interpolation.Uninterpolated);
    ForceCharacterDeath(2600800, false);
    ForceCharacterDeath(2600801, false);
    WaitFor(CharacterDead(2600800));
    SetEventFlag(12604808, ON);
    WaitFixedTimeSeconds(3);
    PlaySE(2602300, SoundType.aEnvironmentalSound, 260000004);
    WaitFixedTimeSeconds(18);
    DisplayBanner(TextBannerType.StadiumDraw);
    DeactivateObject(2601800, Disabled);
    DeleteMapSFX(2603800, true);
    SetLockcamSlotNumber(26, 0, 0);
    ClearSpEffect(10000, 5630);
    WaitFixedTimeSeconds(3);
    HandleBossDefeat(2600803);
    SetNetworkSyncState(Disabled);
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        WaitFor(CharacterType(10000, TargetType.Alive));
        $InitializeEvent(0, 9350, 3);
        AwardAchievement(20);
        AwardItemLot(55100000);
        SetEventFlag(2601, ON);
        SetEventFlag(9462, ON);
        EndTimeMeasurement(2600000);
        EndTimeMeasurement(2600001);
        EndTimeMeasurement(2600010);
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

// ボス撃破SE再生_レッサーデーモン（死と闇）
$Event(12601801, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12601800));
    flag = EventFlag(12601800);
    WaitFor(flag || (!CharacterBackreadStatus(2600800) && HPRatio(2600802) <= 0));
    EndIf(flag.Passed);
    PlaySE(2602800, SoundType.cCharacterMotion, 0);
});

// ホストがボス部屋入場_初戦_レッサーデーモン（死と闇）
$Event(12601802, Default, function() {
    EndIf(EventFlag(12601800));
    EndIf(ThisEvent());
    ChangeCharacterEnableState(2600800, Disabled);
    ChangeCharacterEnableState(2600801, Disabled);
    SetObjectInvulnerability(2601856, Enabled);
    WaitFor(
        !EventFlag(12601800)
            && !ThisEvent()
            && CharacterType(10000, TargetType.Alive)
            && InArea(10000, 2602805));
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        IssueBossRoomEntryNotification(0);
    }
    SetEventFlag(12604732, ON);
    EndIf(CharacterType(10000, TargetType.BlackPhantom));
    SetEventFlag(9180, ON);
    SetMapSoundState(2603100, Disabled);
    WaitFixedTimeFrames(1);
    if (!HasMultiplayerState(MultiplayerState.Multiplayer)) {
        PlayCutsceneToPlayer(26000010, CutscenePlayMode.Skippable, 10000);
    } else {
        PlayCutsceneToPlayer(26000010, CutscenePlayMode.Unskippable, 10000);
    }
    WaitFixedTimeFrames(1);
    SetEventFlag(9180, OFF);
    SetObjectInvulnerability(2601856, Disabled);
    ReproduceObjectDestruction(2601856, 1);
    SetEventFlag(12604800, ON);
    ChangeCharacterEnableState(2600800, Enabled);
    EndIf(EventFlag(9306));
    $InitializeEvent(0, 9350, 3);
    SetEventFlag(9306, ON);
});

// レッサーデーモン（死と闇）_時間差入場ゲスト用対処処理
$Event(12601803, Default, function() {
    WaitFor(CharacterType(10000, TargetType.Alive) && EventFlag(12604800));
    EndIf(HasMultiplayerState(MultiplayerState.Host));
    SetObjectInvulnerability(2601856, Disabled);
    ReproduceObjectDestruction(2601856, 1);
    ChangeCharacterEnableState(2600800, Enabled);
    SetEventFlag(12604800, ON);
    SetEventFlag(12601802, ON);
});

// ホストがボス部屋入場_再戦_レッサーデーモン（死と闇）
$Event(12604845, Default, function() {
    EndIf(EventFlag(12601800));
    if (!EventFlag(12601802)) {
        if (!HasMultiplayerState(MultiplayerState.Client)) {
            DeactivateObject(2601800, Disabled);
            DeleteMapSFX(2603800, false);
        }
        WaitFor(!EventFlag(12601800) && EventFlag(12601802));
        DeactivateObject(2601800, Enabled);
        SpawnMapSFX(2603800);
    }
L0:
    ReproduceObjectDestruction(2601856, 1);
    flagChrAct = !EventFlag(12601800)
        && CharacterType(10000, TargetType.Alive)
        && ActionButtonInArea(2600800, 2601800);
    flag = EventFlag(12601800);
    WaitFor(flagChrAct || flag);
    EndIf(flag.Passed);
    RotateCharacter(10000, 2602800, 101130, true);
    chrArea = CharacterType(10000, TargetType.Alive) && InArea(10000, 2602801);
    chrTime = CharacterType(10000, TargetType.Alive) && ElapsedSeconds(2);
    WaitFor(chrArea || chrTime);
    if (!chrTime.Passed) {
        SetEventFlag(12604800, ON);
    }
    RestartEvent();
});

// ゲストがボス部屋入場_レッサーデーモン（死と闇）
$Event(12604846, Default, function() {
    SetNetworkSyncState(Disabled);
    WaitFor(
        !EventFlag(12601800)
            && EventFlag(12601802)
            && EventFlag(12604800)
            && CharacterType(10000, TargetType.WhitePhantom)
            && ActionButtonInArea(2600800, 2601800));
    RotateCharacter(10000, 2602800, 101130, true);
    chrArea = CharacterType(10000, TargetType.WhitePhantom) && InArea(10000, 2602801);
    chrTime = CharacterType(10000, TargetType.WhitePhantom) && ElapsedSeconds(2);
    WaitFor(chrArea || chrTime);
    if (!chrTime.Passed) {
        SetEventFlag(12604801, ON);
    }
    RestartEvent();
});

// 他人の世界で霧壁あたり無効_レッサーデーモン（死と闇）
$Event(12604847, Default, function() {
    WaitFor(CharacterType(10000, TargetType.Alive) && EntityInRadiusOfEntity(10000, 2601800, 4));
    SetCharacterGravityMaphitStateExcludingOwnWorld(10000, Disabled);
    WaitFixedTimeFrames(6);
    RestartEvent();
});

// 他人の世界で霧壁あたり無効2_レッサーデーモン（死と闇）
$Event(12604848, Default, function() {
    WaitFor(
        CharacterType(10000, TargetType.Alive)
            && !EntityInRadiusOfEntity(10000, 2601800, 4)
            && EntityInRadiusOfEntity(10000, 2601800, 8));
    SetCharacterGravityMaphitStateExcludingOwnWorld(10000, Enabled);
    WaitFixedTimeFrames(6);
    RestartEvent();
});

// ボスが動き出す_レッサーデーモン（死と闇）
$Event(12604802, Default, function() {
    EndIf(EventFlag(12601800));
    SetCharacterAIState(2600800, Disabled);
    SetCharacterAIState(2600801, Disabled);
    SetCharacterAIState(2600802, Disabled);
    SetCharacterHPBarDisplay(2600800, Disabled);
    SetCharacterHPBarDisplay(2600801, Disabled);
    SetCharacterHPBarDisplay(2600802, Disabled);
    SetCharacterGravity(2600802, Disabled);
    SetCharacterImmortality(2600800, Enabled);
    SetCharacterImmortality(2600801, Enabled);
    if (!ThisEvent()) {
        WaitFor(EventFlag(12604800));
        if (!HasMultiplayerState(MultiplayerState.Client)) {
            if (!EventFlag(12604732)) {
                IssueBossRoomEntryNotification(0);
            }
            SetNetworkUpdateAuthority(2600800, AuthorityLevel.Forced);
            SetNetworkUpdateAuthority(2600801, AuthorityLevel.Forced);
            SetNetworkUpdateAuthority(2600802, AuthorityLevel.Forced);
        }
    }
L0:
    SetEventFlag(12604732, ON);
    SetEventFlag(12604800, ON);
    GotoIf(L1, NumberOfCoopClients() == 0);
    GotoIf(L2, NumberOfCoopClients() == 1);
    GotoIf(L3, NumberOfCoopClients() == 2);
L1:
    Goto(L4);
L2:
    SetSpEffect(2600800, 7500, true);
    SetSpEffect(2600801, 7500, true);
    SetSpEffect(2600802, 7500, true);
    WaitFixedTimeFrames(1);
    AdaptHpchangingSpEffectToNPCPartOfTarget(2600800);
    AdaptHpchangingSpEffectToNPCPartOfTarget(2600801);
    AdaptHpchangingSpEffectToNPCPartOfTarget(2600802);
    Goto(L4);
L3:
    SetSpEffect(2600800, 7501, true);
    SetSpEffect(2600801, 7501, true);
    SetSpEffect(2600802, 7501, true);
    WaitFixedTimeFrames(1);
    AdaptHpchangingSpEffectToNPCPartOfTarget(2600800);
    AdaptHpchangingSpEffectToNPCPartOfTarget(2600801);
    AdaptHpchangingSpEffectToNPCPartOfTarget(2600802);
    Goto(L4);
L4:
    SetCharacterAIState(2600800, Enabled);
    SetCharacterAIState(2600801, Enabled);
    DisplayBossHealthBar(Enabled, 2600802, 0, 551000);
    CreateReferredDamagePair(2600800, 2600802);
    CreateReferredDamagePair(2600801, 2600802);
    CreatePlaylog(88);
    StartTimeMeasurement(2600010, 104, Enabled);
});

// ボスBGM ON_レッサーデーモン（死と闇）
$Event(12604803, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12601800));
    if (!ThisEvent()) {
        SetMapSoundState(2603802, Disabled);
        SetMapSoundState(2603803, Disabled);
        flagArea &= !EventFlag(12601800) && EventFlag(12604802);
        if (!HasMultiplayerState(MultiplayerState.Host)) {
            flagArea &= EventFlag(12604801);
        }
        flagArea &= InArea(10000, 2602801);
        WaitFor(flagArea);
        EnableBossMapSound(2603802, Enabled);
        SetEventFlag(12604815, ON);
        WaitFor(HPRatio(2600802) < 0.7);
    }
L0:
    flagArea2 &= !EventFlag(12601800) && EventFlag(12604802);
    if (!HasMultiplayerState(MultiplayerState.Host)) {
        flagArea2 &= EventFlag(12604801);
    }
    flagArea2 &= InArea(10000, 2602801);
    WaitFor(flagArea2);
    EnableBossMapSound(2603802, Disabled);
    WaitFixedTimeFrames(0);
    EnableBossMapSound(2603803, Enabled);
});

// ボスカメラ_レッサーデーモン（死と闇）
$Event(12604804, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12601800));
    WaitFor(EventFlag(12604800) && !CharacterDead(2600803));
    SetLockcamSlotNumber(26, 0, 1);
});

// ボスBGM OFF_レッサーデーモン（死と闇）
$Event(12604805, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12601800));
    WaitFor(EventFlag(12604808));
    EnableBossMapSound(2603802, Disabled);
    EnableBossMapSound(2603803, Disabled);
    EnableBossMapSound(-1, Disabled);
});

// ボス分身セットアップ
$Event(12604806, Default, function() {
    ChangeCharacterEnableState(2600801, Disabled);
    SetCharacterGravity(2600801, Disabled);
    SetCharacterMaphits(2600801, true);
});

// ボス暗闇魔法_プレイログ出力
$Event(12604807, Default, function() {
    SetNetworkSyncState(Disabled);
    WaitFor(EventFlag(12604802) && !CharacterHasSpEffect(10000, 5630));
    CreatePlaylog(122);
    WaitFor(EventFlag(12604802) && CharacterHasSpEffect(10000, 5630));
    CreatePlaylog(156);
    RestartEvent();
});

// ボス暗闇魔法管理
$Event(12604810, Default, function() {
    WaitFor(CharacterHasSpEffect(10000, 5630));
    SetSpEffect(2600800, 5631, false);
    RequestCharacterAICommand(2600800, 100, 0);
    WaitFor(!CharacterHasSpEffect(10000, 5630));
    RequestCharacterAICommand(2600800, 110, 0);
    RestartEvent();
});

// ボスが抱える赤子の声
$Event(12604815, Default, function() {
    SetNetworkSyncState(Disabled);
    flag = ThisEvent();
    flag2 = EventFlag(12601800);
    hp = HPRatio(2600800) <= 0;
    WaitFor(flag || flag2 || hp);
    EndIf(flag2.Passed);
    EndIf(hp.Passed);
    PlaySE(2600800, SoundType.aEnvironmentalSound, 260000003);
    WaitRandomTimeSeconds(5, 10);
    RestartEvent();
});

// ボスランダムワープ先選択_XX
$Event(12604820, Default, function(chrEntityId, eventFlagId, eventFlagId2) {
    WaitFor(CharacterHasEventMessage(chrEntityId, 10));
    RandomlySetEventFlagInRange(eventFlagId, eventFlagId2, ON);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

// ボスランダムワープ_XX
$Event(12604830, Default, function(chrEntityId, eventFlagId, areaEntityId, entityId) {
    SetEventFlag(eventFlagId, OFF);
    WaitFor(EventFlag(eventFlagId));
    if (!InArea(chrEntityId, areaEntityId)) {
        ChangeCharacterEnableState(chrEntityId, Disabled);
        WarpCharacterAndSetFloor(chrEntityId, TargetEntityType.Area, areaEntityId, -1, 0);
    } else {
        ChangeCharacterEnableState(chrEntityId, Disabled);
        WarpCharacterAndSetFloor(chrEntityId, TargetEntityType.Area, entityId, -1, 0);
    }
    WaitFixedTimeSeconds(2);
    ChangeCharacterEnableState(chrEntityId, Enabled);
    RequestAnimationPlayback(chrEntityId, 7000, false, true);
    RestartEvent();
});

// 分身召喚攻撃
$Event(12604840, Default, function() {
    WaitFor(
        EventFlag(12604803)
            && CharacterHasEventMessage(2600800, 20)
            && CharacterHasSpEffect(2600800, 5631));
    WarpObjectToCharacter(2601857, 10000, 245);
    WaitFixedTimeFrames(1);
    ChangeCharacterEnableState(2600801, Enabled);
    RequestCharacterAnimationReset(2600801, Interpolation.Interpolated);
    BatchSetEventFlags(12604841, 12604844, OFF);
    RandomlySetEventFlagInRange(12604841, 12604844, ON);
    GotoIf(L0, EventFlag(12604841));
    GotoIf(L1, EventFlag(12604842));
    GotoIf(L2, EventFlag(12604843));
    GotoIf(L3, EventFlag(12604844));
L0:
    IssueShortWarpRequest(2600801, TargetEntityType.Object, 2601857, 4);
    Goto(L4);
L1:
    IssueShortWarpRequest(2600801, TargetEntityType.Object, 2601857, 104);
    Goto(L4);
L2:
    IssueShortWarpRequest(2600801, TargetEntityType.Object, 2601857, 10);
    Goto(L4);
L3:
    IssueShortWarpRequest(2600801, TargetEntityType.Object, 2601857, 110);
L4:
    WaitFixedTimeFrames(1);
    SpawnOneshotSFX(TargetEntityType.Character, 2600801, 220, 655105);
    RequestCharacterAIReplan(2600801);
    RequestCharacterAICommand(2600801, 100, 0);
    SetSpEffect(2600801, 5631, false);
    WaitFor(
        CharacterHasEventMessage(2600801, 20)
            || HasDamageType(2600801, 10000, DamageType.Unspecified));
    SpawnOneshotSFX(TargetEntityType.Character, 2600801, 220, 655105);
    WaitFixedTimeFrames(10);
    ChangeCharacterEnableState(2600801, Disabled);
    RestartEvent();
});

// ボス撃破_悪夢の主
$Event(12601850, Default, function() {
    if (ThisEvent()) {
        SetMapSoundState(2603852, Disabled);
        SetMapSoundState(2603853, Disabled);
        ChangeCharacterEnableState(2600850, Disabled);
        ForceCharacterDeath(2600850, false);
        DeactivateObject(2601850, Disabled);
        DeactivateObject(2601851, Disabled);
        DeactivateObject(2601859, Disabled);
        DeleteMapSFX(2603850, false);
        DeleteMapSFX(2603851, false);
        DeleteMapSFX(2603859, false);
        EndEvent();
    }
L0:
    WaitFor(HPRatio(2600850) == 0);
    SetEventFlag(12604858, ON);
    WaitFor(CharacterDead(2600850));
    SetEventFlag(12604857, ON);
    WaitFor(EventFlag(72600301));
    DisplayBanner(TextBannerType.DemonKilled);
    DeactivateObject(2601850, Disabled);
    DeactivateObject(2601851, Disabled);
    DeactivateObject(2601859, Disabled);
    DeleteMapSFX(2603850, true);
    DeleteMapSFX(2603851, true);
    DeleteMapSFX(2603859, true);
    SetCharacterDefaultBackreadState(2600850, Disabled);
    SetNetworkUpdateRate(2600850, false, CharacterUpdateFrequency.AlwaysUpdate);
    WaitFixedTimeSeconds(3);
    HandleBossDefeat(2600850);
    SetNetworkSyncState(Disabled);
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        AwardAchievement(19);
        AwardItemLot(21000);
        WaitFor(CharacterType(10000, TargetType.Alive));
        $InitializeEvent(0, 9350, 2);
        SetEventFlag(2600, ON);
        SetEventFlag(9461, ON);
        BatchSetEventFlags(1080, 1099, OFF);
        SetEventFlag(1082, ON);
        CreatePlaylog(40);
        EndTimeMeasurement(2601000);
        EndTimeMeasurement(2601001);
        EndTimeMeasurement(2601010);
        ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 190, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 190, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Weapon, 190, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Armor, 190, PlayLogMultiplayerType.HostOnly);
        EndEvent();
    }
L1:
    WaitFor(CharacterType(10000, TargetType.WhitePhantom));
    WaitFixedTimeSeconds(0);
});

// ボス撃破SE再生_悪夢の主
$Event(12601851, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12601850));
    flag = EventFlag(12601800);
    WaitFor(flag || (!CharacterBackreadStatus(2600850) && HPRatio(2600850) <= 0));
    EndIf(flag.Passed);
    PlaySE(2602850, SoundType.cCharacterMotion, 0);
});

// ホストがボス部屋入場_初戦_悪夢の主
$Event(12601852, Default, function() {
    EndIf(EventFlag(12601850));
    EndIf(ThisEvent());
    ChangeCharacterEnableState(2600850, Disabled);
    WaitFor(
        !EventFlag(12601850)
            && !ThisEventSlot()
            && CharacterType(10000, TargetType.Alive)
            && EntityInRadiusOfEntity(10000, 2600850, 32));
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        IssueBossRoomEntryNotification(0);
    }
    SetEventFlag(12604731, ON);
    EndIf(CharacterType(10000, TargetType.BlackPhantom));
    SetEventFlag(9180, ON);
    WaitFixedTimeFrames(1);
    if (!HasMultiplayerState(MultiplayerState.Multiplayer)) {
        PlayCutsceneToPlayer(26000060, CutscenePlayMode.Skippable, 10000);
    } else {
L0:
        PlayCutsceneToPlayer(26000060, CutscenePlayMode.Unskippable, 10000);
    }
L1:
    WaitFixedTimeFrames(1);
    SetEventFlag(9180, OFF);
    SetEventFlag(12604850, ON);
    ChangeCharacterEnableState(2600850, Enabled);
    DeactivateObject(2601850, Enabled);
    SpawnMapSFX(2603850);
    DeactivateObject(2601859, Enabled);
    SpawnMapSFX(2603859);
    EndIf(EventFlag(9342));
    $InitializeEvent(0, 9350, 2);
    SetEventFlag(9342, ON);
});

// 悪夢の主_撃破後扉制御
$Event(12601853, Default, function() {
    if (ThisEventSlot()) {
        ReproduceObjectAnimation(2601852, 2);
        SetObjactState(2601251, 2600000, Disabled);
        EndEvent();
    }
L0:
    SetObjactState(2601251, 2600000, Disabled);
    WaitFor(EventFlag(12601850));
    EndIf(!EventFlag(12604879));
    SetObjactState(2601251, 2600000, Enabled);
    WaitFor(ObjActEventFlag(12601261));
    ForceAnimationPlayback(2601852, 1, false, false, false);
});

// 悪夢の主_撃破後カットシーン
$Event(12601854, Default, function() {
    if (ThisEvent()) {
        ReproduceObjectAnimation(2601250, 1);
        ReproduceObjectAnimation(2601852, 1);
        EndEvent();
    }
L0:
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    WaitFor(
        EventFlag(12601850)
            && CharacterType(10000, TargetType.Alive)
            && (InArea(10000, 2602853) || InArea(10000, 2602854)));
    WaitFixedTimeSeconds(3);
    SetEventFlag(9180, ON);
    WaitFixedTimeFrames(1);
    if (EventFlag(12604879)) {
        PlayCutsceneToPlayer(26000000, CutscenePlayMode.Skippable, 10000);
        WaitFixedTimeFrames(1);
        ReproduceObjectAnimation(2601250, 1);
        ForceAnimationPlayback(2601852, 2, false, false, false);
    } else {
L1:
        PlayCutsceneToPlayer(26000005, CutscenePlayMode.Skippable, 10000);
        WaitFixedTimeFrames(1);
        ReproduceObjectAnimation(2601250, 1);
    }
L2:
    SetEventFlag(9180, OFF);
});

// 悪夢の主_時間差入場ゲスト用対処処理
$Event(12601855, Default, function() {
    WaitFor(CharacterType(10000, TargetType.Alive) && EventFlag(12604850));
    EndIf(HasMultiplayerState(MultiplayerState.Host));
    SetEventFlag(12604850, ON);
    ChangeCharacterEnableState(2600850, Enabled);
    DeactivateObject(2601850, Enabled);
    SpawnMapSFX(2603850);
    DeactivateObject(2601859, Enabled);
    SpawnMapSFX(2603859);
    SetEventFlag(12604850, ON);
    SetEventFlag(12601852, ON);
});

// ホストがボス部屋入場_再戦_悪夢の主
$Event(12604860, Default, function() {
    EndIf(EventFlag(12601850));
    if (!EventFlag(12601852)) {
        if (!HasMultiplayerState(MultiplayerState.Client)) {
            DeactivateObject(2601850, Disabled);
            DeleteMapSFX(2603850, false);
        }
        DeactivateObject(2601859, Disabled);
        DeleteMapSFX(2603859, false);
        WaitFor(!EventFlag(12601850) && EventFlag(12601852));
        DeactivateObject(2601850, Enabled);
        SpawnMapSFX(2603850);
        DeactivateObject(2601859, Enabled);
        SpawnMapSFX(2603859);
    }
L0:
    flagChrAct = !EventFlag(12601850)
        && CharacterType(10000, TargetType.Alive)
        && ActionButtonInArea(2600850, 2601850);
    flag = EventFlag(12601850);
    WaitFor(flagChrAct || flag);
    EndIf(flag.Passed);
    RotateCharacter(10000, 2602850, 101130, true);
    chrArea = CharacterType(10000, TargetType.Alive) && InArea(10000, 2602851);
    chrTime = CharacterType(10000, TargetType.Alive) && ElapsedSeconds(2);
    WaitFor(chrArea || chrTime);
    if (!chrTime.Passed) {
        SetEventFlag(12604850, ON);
    }
    RestartEvent();
});

// ゲストがボス部屋入場_悪夢の主
$Event(12604861, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12601850));
    WaitFor(
        !EventFlag(12601850)
            && EventFlag(12601852)
            && EventFlag(12604850)
            && CharacterType(10000, TargetType.WhitePhantom)
            && ActionButtonInArea(2600850, 2601850));
    RotateCharacter(10000, 2602850, 101130, true);
    chrArea = CharacterType(10000, TargetType.WhitePhantom) && InArea(10000, 2602851);
    chrTime = CharacterType(10000, TargetType.WhitePhantom) && ElapsedSeconds(2);
    WaitFor(chrArea || chrTime);
    if (!chrTime.Passed) {
        SetEventFlag(12604851, ON);
    }
    RestartEvent();
});

// 他人の世界で霧壁あたり無効_悪夢の主
$Event(12604862, Default, function() {
    WaitFor(CharacterType(10000, TargetType.Alive) && EntityInRadiusOfEntity(10000, 2601850, 4));
    SetCharacterGravityMaphitStateExcludingOwnWorld(10000, Disabled);
    WaitFixedTimeFrames(6);
    RestartEvent();
});

// 他人の世界で霧壁あたり無効2_悪夢の主
$Event(12604863, Default, function() {
    WaitFor(
        CharacterType(10000, TargetType.Alive)
            && !EntityInRadiusOfEntity(10000, 2601850, 4)
            && EntityInRadiusOfEntity(10000, 2601850, 8));
    SetCharacterGravityMaphitStateExcludingOwnWorld(10000, Enabled);
    WaitFixedTimeFrames(6);
    RestartEvent();
});

// ボスが動き出す_悪夢の主
$Event(12604852, Default, function() {
    EndIf(EventFlag(12601850));
    SetCharacterAIState(2600850, Disabled);
    SetCharacterHPBarDisplay(2600850, Disabled);
    if (!ThisEvent()) {
        WaitFor(EventFlag(12604850));
        if (!HasMultiplayerState(MultiplayerState.Client)) {
            if (!EventFlag(12604731)) {
                IssueBossRoomEntryNotification(0);
            }
            SetNetworkUpdateAuthority(2600850, AuthorityLevel.Forced);
        }
    }
L0:
    SetEventFlag(12604731, ON);
    SetEventFlag(12604850, ON);
    GotoIf(L1, NumberOfCoopClients() == 0);
    GotoIf(L2, NumberOfCoopClients() == 1);
    GotoIf(L3, NumberOfCoopClients() == 2);
L1:
    Goto(L4);
L2:
    SetSpEffect(2600850, 7500, true);
    WaitFixedTimeFrames(1);
    AdaptHpchangingSpEffectToNPCPartOfTarget(2600850);
    Goto(L4);
L3:
    SetSpEffect(2600850, 7501, true);
    WaitFixedTimeFrames(1);
    AdaptHpchangingSpEffectToNPCPartOfTarget(2600850);
    Goto(L4);
L4:
    SetCharacterDefaultBackreadState(2600850, Enabled);
    SetNetworkUpdateRate(2600850, true, CharacterUpdateFrequency.AlwaysUpdate);
    SetCharacterAIState(2600850, Enabled);
    DisplayBossHealthBar(Enabled, 2600850, 0, 899000);
    SetDistanceLimitForConversationStateProcessing(2600850, 100);
    RequestCharacterAICommand(2600850, 10, 0);
    CreatePlaylog(88);
    StartTimeMeasurement(2601010, 232, Enabled);
});

// ボスBGM ON_悪夢の主
$Event(12604853, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12601850));
    if (!ThisEvent()) {
        SetMapSoundState(2603852, Disabled);
        SetMapSoundState(2603853, Disabled);
        flagArea &= !EventFlag(12601850) && EventFlag(12604852);
        if (!HasMultiplayerState(MultiplayerState.Host)) {
            flagArea &= EventFlag(12604851);
        }
        flagArea &= InArea(10000, 2602852);
        WaitFor(flagArea);
        EnableBossMapSound(2603852, Enabled);
        WaitFor(EventFlag(72600300));
    }
L0:
    flagArea2 &= !EventFlag(12601850) && EventFlag(12604852);
    if (!HasMultiplayerState(MultiplayerState.Host)) {
        flagArea2 &= EventFlag(12604851);
    }
    flagArea2 &= InArea(10000, 2602852);
    WaitFor(flagArea2);
    EnableBossMapSound(2603852, Disabled);
    WaitFixedTimeFrames(0);
    EnableBossMapSound(2603853, Enabled);
});

// ボスカメラ_悪夢の主
$Event(12604854, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12601850));
    WaitFor(EventFlag(12604850) && CharacterDead(2600850));
    SetLockcamSlotNumber(26, 0, 1);
});

// ボスBGM OFF_悪夢の主
$Event(12604855, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12601850));
    WaitFor(EventFlag(12604858));
    EnableBossMapSound(2603852, Disabled);
    EnableBossMapSound(2603853, Disabled);
    EnableBossMapSound(-1, Disabled);
});

// ボス撤退_悪夢の主
$Event(12604856, Default, function() {
    EndIf(EventFlag(12601850));
    SetCharacterImmortality(2600850, Enabled);
    if (!ThisEvent()) {
        WaitFor(HPRatio(2600850) <= 0.5);
        DisplayBossHealthBar(Disabled, 2600850, 0, 899000);
        SetEventFlag(12604985, ON);
        WaitFor(EventFlag(12604986));
        DisplayBossHealthBar(Enabled, 2600850, 0, 899000);
        WarpCharacterAndSetFloor(2600850, TargetEntityType.Area, 2602062, -1, 2604810);
        RequestCharacterAnimationReset(2600850, Interpolation.Uninterpolated);
    }
L0:
    SetCharacterImmortality(2600850, Disabled);
    SetCharacterHome(2600850, 2602062);
    BatchSetEventFlags(12604949, 12604959, OFF);
    SetEventFlag(12604952, ON);
    RequestCharacterAIReplan(2600850);
    RequestCharacterAICommand(2600850, 10, 0);
    DeactivateObject(2601851, Disabled);
    DeleteMapSFX(2603851, true);
});

// ボス撤退_偽死亡する悪夢の主_アニメ再生要求
$Event(12604985, Default, function() {
    EndIf(EventFlag(12601850));
    EndIf(EventFlag(12604856));
    flag = EventFlag(12604986);
    WaitFor(flag || ThisEvent());
    EndIf(flag.Passed);
    EzstateInstructionRequest(2600850, 12, 1);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// ボス撤退_偽死亡する悪夢の主_再生要求終了
$Event(12604986, Default, function() {
    EndIf(EventFlag(12601850));
    EndIf(ThisEvent());
    WaitFor(CharacterHasEventMessage(2600850, 50));
    SetEventState(12604985, 0, EventEndType.End);
    WaitFixedTimeSeconds(6);
    EndEvent();
});

// 前半ボス（NPC）イベント
$Event(12604870, Default, function(areaEntityId, areaEntityId2, areaEntityId3, areaEntityId4, areaEntityId5, eventFlagId, eventFlagId2, eventFlagId3) {
    EndIf(EventFlag(12601850));
    flagArea = !EventFlag(12604946)
        && InArea(2600850, areaEntityId)
        && EntityInRadiusOfEntity(10000, 2600850, 9);
    flagArea2 = flagArea && InArea(10000, 2602050);
    flagArea3 = flagArea && InArea(10000, 2602051);
    flagArea4 = flagArea && InArea(10000, 2602052);
    flagArea5 = flagArea && EntityInRadiusOfEntity(10000, 2600850, 3);
    WaitFor(flagArea2 || flagArea3 || flagArea4 || flagArea5);
    GotoIf(L7, InArea(2600850, 2602043));
    BatchSetEventFlags(12604870, 12604873, OFF);
    RandomlySetEventFlagInRange(12604870, 12604873, ON);
    if (!EventFlag(12604870)) {
L7:
        GotoIf(L0, flagArea2.Passed);
        GotoIf(L1, flagArea3.Passed);
        GotoIf(L2, flagArea4.Passed);
        GotoIf(L3, flagArea5.Passed);
L0:
        GotoIf(L6, !InArea(2600850, 2602042));
        BatchSetEventFlags(12604870, 12604871, OFF);
        RandomlySetEventFlagInRange(12604870, 12604871, ON);
        if (!EventFlag(12604870)) {
L6:
            SetCharacterHome(2600850, areaEntityId2);
            RequestCharacterAICommand(2600850, 10, 0);
            BatchSetEventFlags(12604940, 12604946, OFF);
            SetEventFlag(eventFlagId, ON);
            WaitFixedTimeSeconds(2);
            RestartEvent();
        }
L4:
        SetCharacterHome(2600850, areaEntityId5);
        RequestCharacterAICommand(2600850, 10, 0);
        BatchSetEventFlags(12604940, 12604946, OFF);
        SetEventFlag(eventFlagId2, ON);
        WaitFixedTimeSeconds(2);
        RestartEvent();
L1:
        SetCharacterHome(2600850, areaEntityId3);
        RequestCharacterAICommand(2600850, 10, 0);
        BatchSetEventFlags(12604940, 12604946, OFF);
        SetEventFlag(eventFlagId2, ON);
        WaitFixedTimeSeconds(2);
        RestartEvent();
L2:
        SetCharacterHome(2600850, areaEntityId4);
        RequestCharacterAICommand(2600850, 10, 0);
        BatchSetEventFlags(12604940, 12604946, OFF);
        SetEventFlag(eventFlagId3, ON);
        WaitFixedTimeSeconds(2);
        RestartEvent();
L3:
        BatchSetEventFlags(12604870, 12604871, OFF);
        RandomlySetEventFlagInRange(12604870, 12604871, ON);
        if (!EventFlag(12604870)) {
            SetCharacterHome(2600850, areaEntityId3);
            RequestCharacterAICommand(2600850, 10, 0);
            BatchSetEventFlags(12604940, 12604946, OFF);
            SetEventFlag(eventFlagId2, ON);
            WaitFixedTimeSeconds(2);
            RestartEvent();
        }
L5:
        SetCharacterHome(2600850, areaEntityId4);
        RequestCharacterAICommand(2600850, 10, 0);
        BatchSetEventFlags(12604940, 12604946, OFF);
        SetEventFlag(eventFlagId3, ON);
        WaitFixedTimeSeconds(2);
        RestartEvent();
    }
L8:
    SetCharacterHome(2600850, 2602043);
    RequestCharacterAICommand(2600850, 10, 0);
    BatchSetEventFlags(12604940, 12604946, OFF);
    SetEventFlag(12604943, ON);
    WaitFixedTimeSeconds(2);
    RestartEvent();
});

// 前半ボス（NPC）イベントラスト
$Event(12604877, Default, function() {
    EndIf(EventFlag(12601850));
    flagHp = !EventFlag(12604856) && HPRatio(2600850) < 0.7 && !EventFlag(12604946);
    flagArea = !EventFlag(12604856) && InArea(2600850, 2602046) && EventFlag(12604946);
    WaitFor(flagHp || flagArea);
    if (!flagArea.Passed) {
        SetCharacterHome(2600850, 2602046);
        RequestCharacterAICommand(2600850, 10, 0);
        BatchSetEventFlags(12604940, 12604946, OFF);
        SetEventFlag(12604946, ON);
        WaitFor(InArea(2600850, 2602046));
    }
L0:
    RequestCharacterAICommand(2600850, -1, 0);
});

// 後半ボス（NPC）ワープイベント
$Event(12604878, Default, function() {
    EndIf(EventFlag(12601850));
    chrArea = CharacterType(10000, TargetType.Alive) && InArea(2600850, 2602064);
    chrArea2 = CharacterType(10000, TargetType.Alive) && InArea(2600850, 2602069);
    WaitFor(chrArea || chrArea2);
    SetCharacterMaphits(2600850, true);
    SetCharacterGravity(2600850, Disabled);
    SetCharacterInvincibility(2600850, Enabled);
    GotoIf(S0, chrArea.Passed);
    GotoIf(S1, chrArea2.Passed);
S0:
    SpawnOneshotSFX(TargetEntityType.Object, 2601853, 800, 926201);
    ForceAnimationPlayback(2600850, 103122, false, true, false);
    Goto(S2);
S1:
    SpawnOneshotSFX(TargetEntityType.Object, 2601854, 800, 926201);
    ForceAnimationPlayback(2600850, 103122, false, true, false);
S2:
    WarpCharacterAndSetFloor(2600850, TargetEntityType.Area, 2602073, -1, 2604811);
    SetCharacterHome(2600850, 2602065);
    WaitFixedTimeFrames(5);
    SpawnOneshotSFX(TargetEntityType.Object, 2601855, 800, 926201);
    ForceAnimationPlayback(2600850, 103120, false, false, false);
    SetCharacterMaphits(2600850, false);
    SetCharacterGravity(2600850, Enabled);
    SetCharacterInvincibility(2600850, Disabled);
    RestartEvent();
});

// 最終部屋の移動目標フラグ同期
$Event(12604956, Default, function() {
    WaitFor(ThisEvent());
    EndEvent();
});

// 最終部屋へ逃走完了_悪夢の主
$Event(12604879, Default, function() {
    if (!EventFlag(12601850)) {
        WaitFor(CharacterType(10000, TargetType.Alive) && InArea(2600850, 2602066));
        SetEventFlag(12604879, ON);
        ForceAnimationPlayback(2601852, 3, false, false, false);
        WaitFixedTimeSeconds(1);
        RequestCharacterAICommand(2600850, -1, 0);
        EndEvent();
    }
L0:
    WaitFor(InArea(10000, 0));
    WaitFixedTimeSeconds(0);
});

// 後半ボス（NPC）イベント
$Event(12604880, Default, function(areaEntityId, areaEntityId2, areaEntityId3, areaEntityId4, eventFlagId, eventFlagId2, eventFlagId3, areaEntityId5) {
    EndIf(EventFlag(12601850));
    flagAreaDmg = (!EventFlag(12604956)
        && InArea(2600850, areaEntityId)
        && EntityInRadiusOfEntity(10000, 2600850, 9))
        || (!EventFlag(12604956)
            && InArea(2600850, areaEntityId)
            && InArea(2600850, 2602063)
            && HasDamageType(2600850, -1, DamageType.Unspecified));
    flagAreaDmg2 = flagAreaDmg && InArea(10000, areaEntityId5);
    flagAreaDmg3 = flagAreaDmg && InArea(10000, 2602071);
    flagAreaDmg4 = flagAreaDmg && InArea(10000, 2602072);
    flagAreaDmg5 = flagAreaDmg && EntityInRadiusOfEntity(10000, 2600850, 3);
    WaitFor(flagAreaDmg2 || flagAreaDmg3 || flagAreaDmg4 || flagAreaDmg5);
    GotoIf(L9, 
        InArea(2600850, 2602059)
            || InArea(2600850, 2602063)
            || InArea(2600850, 2602068)
            || InArea(2600850, 2602065));
    BatchSetEventFlags(12604865, 12604868, OFF);
    RandomlySetEventFlagInRange(12604865, 12604868, ON);
    if (!EventFlag(12604865)) {
L9:
        GotoIf(L0, flagAreaDmg2.Passed);
        GotoIf(L1, flagAreaDmg3.Passed);
        GotoIf(L2, flagAreaDmg4.Passed);
        GotoIf(L3, flagAreaDmg5.Passed);
L0:
        SetCharacterHome(2600850, areaEntityId2);
        RequestCharacterAICommand(2600850, 10, 0);
        BatchSetEventFlags(12604949, 12604959, OFF);
        SetEventFlag(eventFlagId, ON);
        WaitFixedTimeSeconds(2);
        RestartEvent();
L1:
        SetCharacterHome(2600850, areaEntityId3);
        RequestCharacterAICommand(2600850, 10, 0);
        BatchSetEventFlags(12604949, 12604959, OFF);
        SetEventFlag(eventFlagId2, ON);
        WaitFixedTimeSeconds(2);
        RestartEvent();
L2:
        SetCharacterHome(2600850, areaEntityId4);
        RequestCharacterAICommand(2600850, 10, 0);
        BatchSetEventFlags(12604949, 12604959, OFF);
        SetEventFlag(eventFlagId3, ON);
        WaitFixedTimeSeconds(2);
        RestartEvent();
L3:
        BatchSetEventFlags(12604880, 12604881, OFF);
        RandomlySetEventFlagInRange(12604880, 12604881, ON);
        if (!EventFlag(12604880)) {
            SetCharacterHome(2600850, areaEntityId3);
            RequestCharacterAICommand(2600850, 10, 0);
            BatchSetEventFlags(12604949, 12604959, OFF);
            SetEventFlag(eventFlagId2, ON);
            WaitFixedTimeSeconds(2);
            RestartEvent();
        }
L4:
        SetCharacterHome(2600850, areaEntityId4);
        RequestCharacterAICommand(2600850, 10, 0);
        BatchSetEventFlags(12604949, 12604959, OFF);
        SetEventFlag(eventFlagId3, ON);
        WaitFixedTimeSeconds(2);
        RestartEvent();
    }
L5:
    SetCharacterHome(2600850, 2602059);
    RequestCharacterAICommand(2600850, 10, 0);
    BatchSetEventFlags(12604949, 12604959, OFF);
    SetEventFlag(12604949, ON);
    WaitFixedTimeSeconds(2);
    RestartEvent();
});

// 前半ボス（NPC）イベント_被ダメワープ
$Event(12604888, Default, function() {
    EndIf(EventFlag(12601850));
    WaitFor(
        CharacterType(10000, TargetType.Alive)
            && HasDamageType(2600850, -1, DamageType.Unspecified)
            && !EventFlag(12604946)
            && !EventFlag(12604856)
            && HPRatio(2600850) > 0.5);
    WaitFixedTimeFrames(15);
    RestartIf(EventFlag(12604946));
    ForceAnimationPlayback(2600850, 103120, false, false, false);
    SpawnOneshotSFX(TargetEntityType.Character, 2600850, 200, 926210);
    GotoIf(L0, EventFlag(12604940));
    GotoIf(L1, EventFlag(12604941));
    GotoIf(L2, EventFlag(12604942));
    GotoIf(L3, EventFlag(12604943));
    GotoIf(L4, EventFlag(12604944));
    GotoIf(L5, EventFlag(12604945));
    RestartEvent();
L0:
    WarpCharacterAndSetFloor(2600850, TargetEntityType.Area, 2602040, -1, 2604800);
    RestartEvent();
L1:
    WarpCharacterAndSetFloor(2600850, TargetEntityType.Area, 2602041, -1, 2604800);
    RestartEvent();
L2:
    WarpCharacterAndSetFloor(2600850, TargetEntityType.Area, 2602042, -1, 2604801);
    RestartEvent();
L3:
    WarpCharacterAndSetFloor(2600850, TargetEntityType.Area, 2602043, -1, 2604801);
    RestartEvent();
L4:
    WarpCharacterAndSetFloor(2600850, TargetEntityType.Area, 2602044, -1, 2604802);
    RestartEvent();
L5:
    WarpCharacterAndSetFloor(2600850, TargetEntityType.Area, 2602045, -1, 2604802);
    RestartEvent();
});

// 後半ボス（NPC）イベント_被ダメワープ
$Event(12604889, Default, function() {
    EndIf(EventFlag(12601850));
    WaitFor(
        CharacterType(10000, TargetType.Alive)
            && HasDamageType(2600850, -1, DamageType.Unspecified)
            && !EventFlag(12604956)
            && EventFlag(12604856)
            && HPRatio(2600850) > 0);
    RestartIf(InArea(2600850, 2602063));
    WaitFixedTimeFrames(15);
    ForceAnimationPlayback(2600850, 103120, false, false, false);
    SpawnOneshotSFX(TargetEntityType.Character, 2600850, 200, 926210);
    GotoIf(S0, EventFlag(12604949));
    GotoIf(S1, EventFlag(12604950));
    GotoIf(S2, EventFlag(12604951));
    GotoIf(S3, EventFlag(12604952));
    GotoIf(S4, EventFlag(12604953));
    GotoIf(S5, EventFlag(12604954));
    GotoIf(S6, EventFlag(12604955));
    GotoIf(S7, EventFlag(12604956));
    GotoIf(S8, EventFlag(12604957));
    GotoIf(S9, EventFlag(12604958));
    GotoIf(S10, EventFlag(12604959));
S0:
    WarpCharacterAndSetFloor(2600850, TargetEntityType.Area, 2602059, -1, 2604810);
    RestartEvent();
S1:
    WarpCharacterAndSetFloor(2600850, TargetEntityType.Area, 2602060, -1, 2604812);
    RestartEvent();
S2:
    WarpCharacterAndSetFloor(2600850, TargetEntityType.Area, 2602061, -1, 2604812);
    RestartEvent();
S3:
    WarpCharacterAndSetFloor(2600850, TargetEntityType.Area, 2602062, -1, 2604810);
    RestartEvent();
S4:
    WarpCharacterAndSetFloor(2600850, TargetEntityType.Area, 2602063, -1, 2604810);
    RestartEvent();
S5:
    WarpCharacterAndSetFloor(2600850, TargetEntityType.Area, 2602077, -1, 2604810);
    RestartEvent();
S6:
    WarpCharacterAndSetFloor(2600850, TargetEntityType.Area, 2602065, -1, 2604811);
    RestartEvent();
S7:
    WarpCharacterAndSetFloor(2600850, TargetEntityType.Area, 2602066, -1, 2604813);
    RestartEvent();
S8:
    WarpCharacterAndSetFloor(2600850, TargetEntityType.Area, 2602067, -1, 2604811);
    RestartEvent();
S9:
    WarpCharacterAndSetFloor(2600850, TargetEntityType.Area, 2602068, -1, 2604811);
    RestartEvent();
S10:
    WarpCharacterAndSetFloor(2600850, TargetEntityType.Area, 2602078, -1, 2604811);
    RestartEvent();
});

// 共通ボス（NPC）イベント_操り骸初期化
$Event(12604890, Default, function(chrEntityId, eventFlagId, eventFlagId2) {
    if (EventFlag(eventFlagId)) {
        ChangeCharacterEnableState(chrEntityId, Disabled);
        EndEvent();
    }
L0:
    SetCharacterImmortality(chrEntityId, Enabled);
    WaitFor(EventFlag(eventFlagId2));
    SetSpEffect(chrEntityId, 5914, false);
    ForceAnimationPlayback(chrEntityId, 7002, false, false, false);
});

// 共通ボス（NPC）イベント_操り骸制御
$Event(12604910, Default, function(chrEntityId, eventFlagId) {
    EndIf(EventFlag(eventFlagId));
    EndIf(ThisEventSlot());
    SetCharacterGravity(chrEntityId, Disabled);
    ForceAnimationPlayback(chrEntityId, 7000, true, false, false);
    chrArea = (CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
        && EntityInRadiusOfEntity(10000, chrEntityId, 7);
    flag = EventFlag(eventFlagId);
    WaitFor(chrArea || flag);
    EndIf(flag.Passed);
    ClearSpEffect(chrEntityId, 5914);
    SetCharacterGravity(chrEntityId, Enabled);
    ForceAnimationPlayback(chrEntityId, 7001, false, false, false);
});

// 最終部屋ロジック制御_悪夢の主
$Event(12604930, Default, function() {
    EndIf(EventFlag(12601850));
    WaitFor(EventFlag(12604879));
    SetCharacterAIState(2600850, Disabled);
    WaitFor(InArea(10000, 2602007) || HasDamageType(2600850, 10000, DamageType.Unspecified));
    SetCharacterAIState(2600850, Enabled);
});

// 悪夢の主_被ダメAIリセット_XX
$Event(12604931, Default, function(eventFlagId, eventFlagId2) {
    EndIf(EventFlag(12601850));
    WaitFor(EventFlag(eventFlagId) && HasDamageType(2600850, -1, DamageType.Unspecified));
    WaitFixedTimeFrames(1);
    WaitFor(EventFlag(eventFlagId) && HasDamageType(2600850, -1, DamageType.Unspecified));
    WaitFixedTimeFrames(1);
    WaitFor(EventFlag(eventFlagId) && HasDamageType(2600850, -1, DamageType.Unspecified));
    WaitFixedTimeFrames(1);
    EndIf(EventFlag(eventFlagId2));
    RequestCharacterAICommand(2600850, -1, 0);
    RequestCharacterAIReplan(2600850);
});

// 悪夢の主_うわ言（前半）_XX
$Event(12604960, Default, function(areaEntityId) {
    EndIf(EventFlag(12601850));
    WaitFor(EventFlag(12604852) && !EventFlag(72600300));
    SetEventFlag(72600302, OFF);
    WaitFor(InArea(2600850, areaEntityId) && !EventFlag(72600302));
    WaitFor(ElapsedSeconds(20));
    RestartIf(!(InArea(2600850, areaEntityId) && !EntityInRadiusOfEntity(2600850, 10000, 15)));
    SetEventFlag(72600302, ON);
    RandomlySetEventFlagInRange(72600303, 72600305, ON);
    WaitFor(!EventFlag(72600302));
    BatchSetEventFlags(72600303, 72600305, OFF);
    RestartEvent();
});

// 悪夢の主_うわ言（後半）_XX
$Event(12604970, Default, function(areaEntityId) {
    EndIf(EventFlag(12601850));
    WaitFor(EventFlag(12604852) && EventFlag(72600300));
    SetEventFlag(72600302, OFF);
    WaitFor(InArea(2600850, areaEntityId) && !EventFlag(72600302));
    WaitFor(ElapsedSeconds(20));
    RestartIf(!(InArea(2600850, areaEntityId) && !EntityInRadiusOfEntity(2600850, 10000, 15)));
    SetEventFlag(72600302, ON);
    if (EventFlag(12604879)) {
        SetEventFlag(72600317, ON);
    } else {
L0:
        RandomlySetEventFlagInRange(72600303, 72600305, ON);
    }
L1:
    WaitFor(!EventFlag(72600302));
    BatchSetEventFlags(72600303, 72600305, OFF);
    SetEventFlag(72600317, OFF);
    RestartEvent();
});

// 悪夢の主_宇宙魔法セリフ
$Event(12604980, Default, function(eventMessageId, eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4, eventFlagId5, eventFlagId6) {
    EndIf(EventFlag(12601850));
    WaitFor(EventFlag(12604852));
    BatchSetEventFlags(eventFlagId, eventFlagId2, OFF);
    WaitFor(CharacterHasEventMessage(2600850, eventMessageId) && !EventFlag(eventFlagId6));
    RandomlySetEventFlagInRange(eventFlagId3, eventFlagId4, ON);
    RestartIf(!EventFlag(eventFlagId5));
    SetEventFlag(eventFlagId6, ON);
    WaitFor(!EventFlag(eventFlagId6));
    RestartEvent();
});

// SAN値で狂気の悪霊出現_トラップロード_XX
$Event(12604000, Restart, function(chrEntityId, targetInsightAmount, targetDistance) {
    EndIf(ThisEventSlot());
    ChangeCharacterEnableState(chrEntityId, Disabled);
    WaitFor(
        PlayerInsightAmount() >= targetInsightAmount
            && CharacterType(10000, TargetType.Alive)
            && EntityInRadiusOfEntity(10000, chrEntityId, targetDistance));
    ChangeCharacterEnableState(chrEntityId, Enabled);
    ForceAnimationPlayback(chrEntityId, 6200, false, true, false);
});

// SAN値で狂気の悪霊消滅_トラップロード_XX
$Event(12604005, Restart, function(chrEntityId, targetInsightAmount, eventFlagId) {
    if (!ThisEventSlot()) {
        WaitFor(EventFlag(eventFlagId) && PlayerInsightAmount() <= targetInsightAmount);
    }
L0:
    ForceCharacterDeath(chrEntityId, false);
});

// リスポン禁止_XX_トラップロード
$Event(12600500, Restart, function(chrEntityId) {
    if (ThisEventSlot()) {
        ForceCharacterTreasure(chrEntityId);
        SetCharacterBackreadState(chrEntityId, true);
        EndEvent();
    }
L0:
    WaitFor(CharacterDead(chrEntityId));
    EndEvent();
});

// 邪眼_制御
$Event(12600020, Restart, function(chrEntityId, chrEntityId2) {
    SetCharacterGravity(chrEntityId, Disabled);
    SetCharacterGravity(chrEntityId2, Disabled);
    SetCharacterInvincibility(chrEntityId, Enabled);
    SetCharacterInvincibility(chrEntityId2, Enabled);
    SetCharacterDefaultBackreadState(chrEntityId, Enabled);
    SetNetworkUpdateRate(chrEntityId, true, CharacterUpdateFrequency.AlwaysUpdate);
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        SetNetworkUpdateAuthority(chrEntityId, AuthorityLevel.Forced);
    }
    SetCharacterAnimationState(chrEntityId, Disabled);
    DeleteMapSFX(2603000, false);
});

// 邪眼_弾丸キャラ位置制御
$Event(12600021, Restart, function() {
    WaitFor(InArea(10000, 2602017));
    IssueShortWarpRequest(2600100, TargetEntityType.Area, 2602019, -1);
    WaitFor(!AllPlayersInArea(2602017));
    IssueShortWarpRequest(2600100, TargetEntityType.Area, 2602018, -1);
    RestartEvent();
});

// 邪眼_効果本体1
$Event(12600130, Default, function(chrEntityId) {
    SetNetworkSyncState(Disabled);
    if (!CharacterHasSpEffect(chrEntityId, 4691)) {
        WaitFor(CharacterHasSpEffect(chrEntityId, 4690));
        WaitFixedTimeSeconds(2);
        sp = CharacterHasSpEffect(chrEntityId, 4690);
        sp2 = !CharacterHasSpEffect(chrEntityId, 4690);
        WaitFor(sp || sp2);
        RestartIf(sp2.Passed);
    }
L0:
    SetSpEffectAndUnknown200455(chrEntityId, 4691, false);
    RestartEvent();
});

// 邪眼_効果本体2
$Event(12600150, Default, function(chrEntityId) {
    SetNetworkSyncState(Disabled);
    WaitFor(!CharacterHasSpEffect(chrEntityId, 4690) && CharacterHasSpEffect(chrEntityId, 4691));
    ClearSpEffect(chrEntityId, 4691);
    RestartEvent();
});

// 邪眼_光源制御
$Event(12600025, Default, function() {
    WaitFor(
        CharacterType(10000, TargetType.Alive)
            && (CharacterAIState(2600100, AIStateType.Recognition)
                || CharacterAIState(2600100, AIStateType.Alert)
                || CharacterAIState(2600100, AIStateType.Combat)));
    SpawnMapSFX(2603000);
    WaitFor(
        CharacterType(10000, TargetType.Alive) && CharacterAIState(2600100, AIStateType.Normal));
    DeleteMapSFX(2603000, true);
    RestartEvent();
});

// 邪眼_機能停止
$Event(12600026, Restart, function() {
    if (!ThisEvent()) {
        WaitFor(ActionButtonInArea(7100, 2601271));
        DeleteMapSFX(2603050, false);
        DeleteMapSFX(2603051, false);
        DeleteMapSFX(2603052, false);
        DeleteMapSFX(2603053, false);
        DeleteMapSFX(2603054, false);
        DeleteMapSFX(2603055, false);
        DeleteMapSFX(2603056, false);
        DeleteMapSFX(2603057, false);
        DeleteMapSFX(2603058, false);
        DeleteMapSFX(2603059, false);
        DeleteMapSFX(2603060, false);
        DeleteMapSFX(2603061, false);
        DeleteMapSFX(2603062, false);
        DeleteMapSFX(2603063, false);
        DeleteMapSFX(2603064, false);
        DeleteMapSFX(2603065, false);
        DeleteMapSFX(2603066, false);
        DeleteMapSFX(2603067, false);
        DeleteMapSFX(2603068, false);
        SetEventFlag(9180, ON);
        WaitFixedTimeFrames(1);
        if (!HasMultiplayerState(MultiplayerState.Multiplayer)) {
            PlayCutsceneToPlayer(26000040, CutscenePlayMode.Skippable, 10000);
        } else {
            PlayCutsceneToPlayer(26000040, CutscenePlayMode.Unskippable, 10000);
        }
        WaitFixedTimeFrames(1);
        SetEventFlag(9180, OFF);
        SpawnMapSFX(2603050);
        SpawnMapSFX(2603051);
        SpawnMapSFX(2603052);
        SpawnMapSFX(2603053);
        SpawnMapSFX(2603054);
        SpawnMapSFX(2603055);
        SpawnMapSFX(2603056);
        SpawnMapSFX(2603057);
        SpawnMapSFX(2603058);
        SpawnMapSFX(2603059);
        SpawnMapSFX(2603060);
        SpawnMapSFX(2603061);
        SpawnMapSFX(2603062);
        SpawnMapSFX(2603063);
        SpawnMapSFX(2603064);
        SpawnMapSFX(2603065);
        SpawnMapSFX(2603066);
        SpawnMapSFX(2603067);
        SpawnMapSFX(2603068);
    }
L0:
    SetObjactState(2601271, 2600000, Disabled);
    SetCharacterAIState(2600100, Disabled);
    SetCharacterAIState(2600101, Disabled);
    ChangeCharacterEnableState(2600100, Disabled);
    ChangeCharacterEnableState(2600101, Disabled);
    DeleteMapSFX(2603000, true);
});

// 邪眼_落下位置に出現
$Event(12600027, Restart, function() {
    ChangeCharacterEnableState(2600129, Disabled);
    if (ThisEvent()) {
        ChangeCharacterEnableState(2600129, Enabled);
        EndEvent();
    }
L0:
    WaitFor(EventFlag(12600026));
    ChangeCharacterEnableState(2600129, Enabled);
});

// 邪眼_交信ジェスチャーでボディジェム入手
$Event(12600028, Default, function() {
    EndIf(ThisEvent());
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    WaitFor(EventFlag(12600027) && InArea(10000, 2602022) && CharacterHasSpEffect(10000, 164));
    if (!EventFlag(6336)) {
        AwardItemLot(2605000);
        EndEvent();
    }
L0:
    AwardItemLot(2605005);
    EndEvent();
});

// 邪眼_殺害で儀式素材入手
$Event(12600029, Restart, function() {
    EndIf(ThisEvent());
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    WaitFor(
        EventFlag(12600027)
            && HPRatio(2600129) == 0
            && HasDamageType(2600129, 10000, DamageType.Unspecified));
    AwardItemLot(2605010);
    SetEventFlag(5913, ON);
    WaitFixedTimeFrames(0);
});

// 赤子の声_XX
$Event(12600010, Default, function(areaEntityId, soundId, value) {
    EndIf(EventFlag(12601802));
    WaitFor(HasMultiplayerState(MultiplayerState.Host) && InArea(10000, areaEntityId));
    if (value != 1) {
        PlaySE(2602300, SoundType.aEnvironmentalSound, soundId);
        EndEvent();
    }
L0:
    SetMapSoundState(soundId, Enabled);
    EndEvent();
});

// 花嫁_制御
$Event(12600030, Default, function() {
    SetCharacterTeamType(2600500, TeamType.FriendlyNPC);
    if (ThisEvent()) {
        SetCharacterBackreadState(2600500, true);
        EndEvent();
    }
L0:
    if (!EventFlag(12601800)) {
        ForceAnimationPlayback(2600500, 7005, false, false, false);
        WaitFor(EventFlag(12601800));
    }
L1:
    ForceAnimationPlayback(2600500, 0, false, false, false);
    WaitFor(EntityInRadiusOfEntity(2600500, 10000, 10) && HPRatio(2600500) > 0);
    SetCharacterInvincibility(2600500, Enabled);
    ForceAnimationPlayback(2600500, 7006, false, false, false);
    WaitFixedTimeSeconds(2);
    ChangeCharacterEnableState(2600500, Disabled);
});

// 花嫁_一撃死
$Event(12600031, Default, function() {
    if (ThisEvent()) {
        SetCharacterBackreadState(2600500, true);
        EndEvent();
    }
L0:
    SetSpEffect(2600500, 5915, false);
    WaitFor(HasDamageType(2600500, -1, DamageType.Unspecified));
    ForceCharacterDeath(2600500, false);
});

// 特殊待機_敵対時解除
$Event(12600035, Default, function(chrEntityId) {
    ForceAnimationPlayback(chrEntityId, 7000, false, false, false);
    chr = CharacterTargetedBy(chrEntityId, 10000)
        || CharacterAIState(chrEntityId, AIStateType.Recognition)
        || CharacterAIState(chrEntityId, AIStateType.Alert)
        || CharacterAIState(chrEntityId, AIStateType.Combat);
    dmg = CharacterDamagedBy(chrEntityId, 10000);
    WaitFor(chr || dmg);
    EndIf(dmg.Passed);
    ForceAnimationPlayback(chrEntityId, 7001, false, false, false);
});

// 牢番Ａ初登場演出
$Event(12600040, Default, function(areaEntityId, chrEntityId, areaEntityId2, entityId, areaEntityId3) {
    SetCharacterAIState(chrEntityId, Disabled);
    WaitFor(InArea(entityId, areaEntityId) || InArea(entityId, areaEntityId3));
    SetCharacterAIState(chrEntityId, Enabled);
    SetCharacterHome(chrEntityId, areaEntityId2);
    RequestCharacterAICommand(chrEntityId, 20, 0);
    WaitFor(
        HasDamageType(chrEntityId, 10000, DamageType.Unspecified)
            || HPRatio(chrEntityId) < 1
            || InArea(chrEntityId, areaEntityId2));
    RequestCharacterAICommand(chrEntityId, -1, 0);
    RequestCharacterAIReplan(chrEntityId);
});

// 牢番Ａ非戦闘主義
$Event(12600041, Default, function(chrEntityId) {
    SetSpEffect(chrEntityId, 5641, false);
    WaitFor(HasDamageType(chrEntityId, 10000, DamageType.Unspecified));
    ClearSpEffect(chrEntityId, 5641);
    RequestCharacterAIReplan(chrEntityId);
});

// 牢番Ａ不意打ちマン
$Event(12600047, Default, function(chrEntityId) {
    RequestCharacterAICommand(chrEntityId, 40, 0);
    WaitFor(CharacterAIState(2600202, AIStateType.Combat));
    RequestCharacterAIReplan(chrEntityId);
    RequestCharacterAICommand(chrEntityId, 10, 0);
    SetCharacterHome(chrEntityId, 2602005);
    WaitFor(CharacterAIState(chrEntityId, AIStateType.Combat));
    RequestCharacterAIReplan(chrEntityId);
    RequestCharacterAICommand(chrEntityId, -1, 0);
});

// 牢番Ａ_便所男
$Event(12600180, Default, function(chrEntityId, itemLotId) {
    SetNetworkSyncState(Disabled);
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    SetSpEffect(chrEntityId, 5001, false);
    WaitFor(
        CharacterAIState(chrEntityId, AIStateType.Recognition)
            || CharacterAIState(chrEntityId, AIStateType.Alert)
            || CharacterAIState(chrEntityId, AIStateType.Combat));
    WaitFixedTimeSeconds(60);
    WarpObjectToCharacter(2601040, chrEntityId, -1);
    CreateObjectfollowingSFX(2601040, 200, 900201);
    act = ActionButtonInArea(2600030, 2601040);
    time = ElapsedSeconds(15);
    WaitFor(act || time);
    DeleteObjectfollowingSFX(2601040, true);
    RestartIf(time.Passed);
    ForceAnimationPlayback(10000, 101140, false, false, false);
    AwardItemLot(itemLotId);
    RestartEvent();
});

// 死と闇の眷属の特殊待機
$Event(12600050, Default, function(chrEntityId, areaEntityId) {
    SetCharacterAIState(chrEntityId, Disabled);
    ForceAnimationPlayback(chrEntityId, 7000, false, false, false);
    WaitFor(InArea(10000, areaEntityId) || CharacterDamagedBy(chrEntityId, 10000));
    WaitRandomTimeFrames(10, 60);
    ForceAnimationPlayback(chrEntityId, 7001, false, false, false);
    SetCharacterAIState(chrEntityId, Enabled);
});

// 敵対時特殊待機解除
$Event(12600060, Default, function(chrEntityId, animationId, animationId2) {
    ForceAnimationPlayback(chrEntityId, animationId, true, false, true);
    WaitFor(
        HasDamageType(chrEntityId, 10000, DamageType.Unspecified)
            || CharacterAIState(chrEntityId, AIStateType.Combat));
    RequestCharacterAnimationReset(chrEntityId, Interpolation.Interpolated);
    ForceAnimationPlayback(chrEntityId, animationId2, false, false, false);
});

// 屍肉鳥が籠から落ちてくる
$Event(12600070, Default, function(chrEntityId, areaEntityId, targetDistance) {
    WaitFor(EntityInRadiusOfEntity(10000, chrEntityId, targetDistance));
    SetCharacterHome(chrEntityId, areaEntityId);
    RequestCharacterAICommand(chrEntityId, 20, 0);
    WaitFor(InArea(chrEntityId, areaEntityId));
    RequestCharacterAICommand(chrEntityId, -1, 0);
    RequestCharacterAIReplan(chrEntityId);
});

// 捨て子の巨人特殊待機
$Event(12600080, Default, function(entityId, animationId, animationId2, animationId3) {
    ForceAnimationPlayback(entityId, animationId, true, false, true);
    WaitFor(
        HasDamageType(entityId, 10000, DamageType.Unspecified)
            || EntityInRadiusOfEntity(entityId, 10000, 5));
    BatchSetEventFlags(12600080, 12600081, OFF);
    RandomlySetEventFlagInRange(12600080, 12600081, ON);
    GotoIf(S0, EventFlag(12600080));
    GotoIf(S1, EventFlag(12600081));
S0:
    ForceAnimationPlayback(entityId, animationId2, false, false, false);
    EndEvent();
S1:
    ForceAnimationPlayback(entityId, animationId3, false, false, false);
    EndEvent();
});

// ロジック起動_領域判定
$Event(12600090, Default, function(chrEntityId, areaEntityId) {
    SetCharacterAIState(chrEntityId, Disabled);
    WaitFor(InArea(10000, areaEntityId) || HasDamageType(chrEntityId, -1, DamageType.Unspecified));
    SetCharacterAIState(chrEntityId, Enabled);
});

// 狂犬の特殊待機_連動解除
$Event(12600105, Default, function(entityId, animationId, animationId2, chrEntityId, chrEntityId2, chrEntityId3) {
    ForceAnimationPlayback(entityId, animationId, true, false, true);
    dmg = HasDamageType(entityId, -1, DamageType.Unspecified);
    WaitFor(
        CharacterAIState(chrEntityId, AIStateType.Combat)
            || CharacterAIState(chrEntityId2, AIStateType.Combat)
            || CharacterAIState(chrEntityId3, AIStateType.Combat)
            || dmg);
    if (!dmg.Passed) {
        WaitFor(HasDamageType(entityId, -1, DamageType.Unspecified) || ElapsedSeconds(10));
    }
    ForceAnimationPlayback(entityId, animationId2, false, false, false);
});

// 銀の獣の眷属死亡時に寄生虫発生_XX
$Event(12600110, Restart, function(chrEntityId, chrEntityId2, chrEntityId3) {
    ChangeCharacterEnableState(chrEntityId2, Disabled);
    ChangeCharacterEnableState(chrEntityId3, Disabled);
    WaitFor(CharacterHasEventMessage(chrEntityId, 100));
    WaitFixedTimeFrames(5);
    WarpCharacterAndCopyFloor(chrEntityId2, TargetEntityType.Character, chrEntityId, 30, chrEntityId);
    ChangeCharacterEnableState(chrEntityId2, Enabled);
    ForceAnimationPlayback(chrEntityId2, 7000, false, false, false);
    WaitFixedTimeFrames(15);
    WarpCharacterAndCopyFloor(chrEntityId3, TargetEntityType.Character, chrEntityId, 30, chrEntityId);
    ChangeCharacterEnableState(chrEntityId3, Enabled);
    ForceAnimationPlayback(chrEntityId3, 7000, false, false, false);
});

// 宝箱_XX
$Event(12600120, Restart, function(objactEventFlag, objEntityId) {
    if (ThisEventSlot()) {
        ReproduceObjectAnimation(objEntityId, 0);
        SetObjactState(objEntityId, -1, Disabled);
        SetObjectTreasureState(objEntityId, Enabled);
        EndEvent();
    }
    WaitFor(ObjActEventFlag(objactEventFlag));
    WaitFixedTimeFrames(10);
    SetObjectTreasureState(objEntityId, Enabled);
});

// 宝_XX
$Event(12600125, Restart, function(objEntityId, itemLotId) {
    EndIf(ThisEventSlot());
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    CreateObjectfollowingSFX(objEntityId, 200, 900201);
    WaitFor(ActionButtonInArea(2600030, objEntityId));
    ForceAnimationPlayback(10000, 101140, false, false, false);
    AwardItemLot(itemLotId);
    DeleteObjectfollowingSFX(objEntityId, true);
});

// ロジック起動_距離判定
$Event(12600190, Restart, function(chrEntityId, entityId) {
    SetCharacterAIState(chrEntityId, Disabled);
    areaDmg |= EntityInRadiusOfEntity(chrEntityId, 10000, 30);
    if (entityId != 0) {
        areaDmg |= EntityInRadiusOfEntity(entityId, 10000, 30);
    }
    areaDmg |= HasDamageType(chrEntityId, -1, DamageType.Unspecified);
    WaitFor(areaDmg);
    SetCharacterAIState(chrEntityId, Enabled);
});

// さまよう狂気_TR_XX
$Event(12600400, Restart, function(chrEntityId, eventFlagId) {
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

// さまよう狂気_逃げる方向指定
$Event(12600410, Restart, function() {
    EndIf(EventFlag(12600403));
    WaitFor(
        CharacterAIState(2600403, AIStateType.Recognition)
            || CharacterAIState(2600403, AIStateType.Alert)
            || CharacterAIState(2600403, AIStateType.Combat));
    SetCharacterHome(2600403, 2602029);
    RequestCharacterAICommand(2600403, 10, 0);
    WaitFor(InArea(2600403, 2602029));
    RequestCharacterAICommand(2600403, -1, 0);
});

// 悪夢の主_後半戦
$Event(12600701, Restart, function() {
    WaitFor(EventFlag(1080) && EventFlag(72600300));
    BatchSetEventFlags(1080, 1099, OFF);
    SetEventFlag(1081, ON);
});

// 悪夢の主_初期化
$Event(12600703, Restart, function() {
    WaitFor(!EventFlag(1082));
    BatchSetEventFlags(1080, 1099, OFF);
    SetEventFlag(1080, ON);
    SetEventFlag(72600300, OFF);
    BatchSetEventFlags(72600300, 72600319, OFF);
});

// 共通_エレベータ_疑似起動済みフラグ
$Event(12601294, Default, function() {
    WaitFixedTimeFrames(0);
});

// 共通_エレベータレバー_操作不可msg_XX
$Event(12601295, Default, function(areaEntityId, eventFlagId, eventFlagId2, eventFlagId3, desiredFlagState) {
    SetNetworkSyncState(Disabled);
    WaitFor(
        (!EventFlag(eventFlagId) && ActionButtonInArea(7100, areaEntityId))
            || (EventFlag(eventFlagId2) && ActionButtonInArea(7100, areaEntityId))
            || (EventFlagState(desiredFlagState, TargetEventFlagType.EventFlag, eventFlagId3)
                && ActionButtonInArea(7100, areaEntityId)));
    DisplayGenericDialog(10010172, PromptType.OKCANCEL, NumberofOptions.OneButton, -1, 3);
    RestartEvent();
});

// 共通エレベータ_初期化_XX
$Event(12601310, Default, function(eventFlagId, objEntityId, objEntityId2, objEntityId3, eventFlagId2) {
    if (!EventFlag(eventFlagId)) {
        ReproduceObjectAnimation(objEntityId, 4);
        WaitFixedTimeSeconds(1);
        SetObjactState(objEntityId2, 2600000, Disabled);
        SetObjactState(objEntityId3, 2600000, Enabled);
        EndIf(EventFlag(eventFlagId2));
        SetObjactState(objEntityId3, 2600000, Disabled);
        EndEvent();
    }
    ReproduceObjectAnimation(objEntityId, 0);
    WaitFixedTimeSeconds(1);
    SetObjactState(objEntityId2, 2600000, Enabled);
    SetObjactState(objEntityId3, 2600000, Disabled);
});

// 第一SCエレベータ_初期化
$Event(12601315, Default, function(eventFlagId, objEntityId, objEntityId2, objEntityId3, eventFlagId2) {
    if (!EventFlag(eventFlagId)) {
        ReproduceObjectAnimation(objEntityId, 4);
        WaitFixedTimeSeconds(1);
        SetObjactState(objEntityId2, 2600000, Enabled);
        SetObjactState(objEntityId3, 2600000, Disabled);
        EndIf(EventFlag(eventFlagId2));
        SetObjactState(objEntityId2, 2600000, Disabled);
        EndEvent();
    }
    ReproduceObjectAnimation(objEntityId, 0);
    WaitFixedTimeSeconds(1);
    SetObjactState(objEntityId2, 2600000, Disabled);
    SetObjactState(objEntityId3, 2600000, Enabled);
});

// 共通エレベータ_上昇_XX
$Event(12601320, Default, function(eventFlagId, eventFlagId2, areaEntityId, areaEntityId2, objEntityId, objEntityId2, entityId, objactEventFlag) {
    WaitFor(
        (!EventFlag(eventFlagId) && !EventFlag(eventFlagId2) && InArea(10000, areaEntityId))
            || (!EventFlag(eventFlagId)
                && !EventFlag(eventFlagId2)
                && ObjActEventFlag(objactEventFlag)));
    SetEventFlag(eventFlagId, ON);
    SetObjactState(objEntityId2, 2600000, Disabled);
    ForceAnimationPlayback(entityId, 5, false, true, false);
    ForceAnimationPlayback(entityId, 6, false, true, false);
    WaitFor(!AllPlayersInArea(areaEntityId2));
    ForceAnimationPlayback(entityId, 7, false, true, false);
    SetEventFlag(eventFlagId, OFF);
    SetEventFlag(eventFlagId2, ON);
    SetObjactState(objEntityId, 2600000, Enabled);
    RestartEvent();
});

// 共通エレベータ_下降_XX
$Event(12601330, Default, function(eventFlagId, eventFlagId2, areaEntityId, areaEntityId2, objEntityId, objEntityId2, entityId, objactEventFlag) {
    WaitFor(
        (!EventFlag(eventFlagId) && EventFlag(eventFlagId2) && InArea(10000, areaEntityId2))
            || (!EventFlag(eventFlagId) && EventFlag(eventFlagId2) && ObjActEventFlag(objactEventFlag)));
    SetEventFlag(eventFlagId, ON);
    SetObjactState(objEntityId, 2600000, Disabled);
    ForceAnimationPlayback(entityId, 1, false, true, false);
    ForceAnimationPlayback(entityId, 2, false, true, false);
    WaitFor(!AllPlayersInArea(areaEntityId));
    ForceAnimationPlayback(entityId, 3, false, true, false);
    SetEventFlag(eventFlagId, OFF);
    SetEventFlag(eventFlagId2, OFF);
    SetObjactState(objEntityId2, 2600000, Enabled);
    RestartEvent();
});

// 屋上エレベータ_初期状態逆転_XX
$Event(12601340, Default, function(eventFlagId, eventFlagId2, objEntityId) {
    EndIf(EventFlag(eventFlagId));
    SetEventFlag(eventFlagId2, ON);
    WaitFixedTimeSeconds(2);
    SetObjactState(objEntityId, 2600000, Disabled);
});

// 図書館エレベータ_初期化
$Event(12601351, Default, function(eventFlagId, objEntityId, objEntityId2) {
    if (!EventFlag(eventFlagId)) {
        ReproduceObjectAnimation(objEntityId, 0);
        ReproduceObjectAnimation(objEntityId2, 1);
        WaitFor(EventFlag(eventFlagId));
    }
    if (EventFlag(12601253)) {
        ReproduceObjectAnimation(objEntityId, 2);
        ReproduceObjectAnimation(objEntityId2, 4);
        EndEvent();
    }
    ReproduceObjectAnimation(objEntityId, 4);
    ReproduceObjectAnimation(objEntityId2, 2);
    EndEvent();
});

// 図書館エレベータ_作動
$Event(12601352, Default, function() {
    WaitFor(EventFlag(12601351));
    if (!EventFlag(12601253)) {
        WaitFor((InArea(10000, 2602241) || InArea(10000, 2602244)) && !EventFlag(12601253));
        ForceAnimationPlayback(2601261, 6, false, false, false);
        ForceAnimationPlayback(2601260, 8, false, true, false);
        ForceAnimationPlayback(2601261, 3, false, false, false);
        ForceAnimationPlayback(2601260, 5, false, true, false);
    } else {
L0:
        WaitFor((InArea(10000, 2602242) || InArea(10000, 2602243)) && EventFlag(12601253));
        ForceAnimationPlayback(2601261, 8, false, false, false);
        ForceAnimationPlayback(2601260, 6, false, true, false);
        ForceAnimationPlayback(2601261, 5, false, false, false);
        ForceAnimationPlayback(2601260, 3, false, true, false);
    }
L1:
    WaitFor(
        !InArea(10000, 2602241)
            && !InArea(10000, 2602242)
            && !InArea(10000, 2602243)
            && !InArea(10000, 2602244));
    if (!EventFlag(12601253)) {
        ForceAnimationPlayback(2601261, 9, false, false, false);
        ForceAnimationPlayback(2601260, 7, false, true, false);
        SetEventFlag(12601253, ON);
        RestartEvent();
    }
L2:
    ForceAnimationPlayback(2601261, 7, false, false, false);
    ForceAnimationPlayback(2601260, 9, false, true, false);
    SetEventFlag(12601253, OFF);
    RestartEvent();
});

// ほおずき_弾丸ダミーキャラ接続_XX
$Event(12605200, Restart, function(hitEntityId, chrEntityId) {
    SetCharacterGravity(chrEntityId, Disabled);
    if (!ThisEventSlot()) {
        WaitFor(CharacterBackreadStatus(hitEntityId));
        WaitFixedTimeSeconds(1);
    }
    if (HPRatio(hitEntityId) <= 0) {
        SetCharacterBackreadState(chrEntityId, true);
        EndEvent();
    }
    WarpCharacterAndSetFloor(chrEntityId, TargetEntityType.Character, hitEntityId, 100, hitEntityId);
    RestartEvent();
});

// マップ初回入場_プレイログ
$Event(12600990, Default, function() {
    EndIf(ThisEvent());
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    WaitFor(PlayerStandingOnHit(2604000));
    ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 268, PlayLogMultiplayerType.HostOnly);
    ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 268, PlayLogMultiplayerType.HostOnly);
    ParameterOutput(PlayerPlayLogParameter.Weapon, 268, PlayLogMultiplayerType.HostOnly);
    ParameterOutput(PlayerPlayLogParameter.Armor, 268, PlayLogMultiplayerType.HostOnly);
    $InitializeEvent(0, 9350, 3);
});

// 礼拝堂扉を開放
$Event(12601050, Default, function() {
    if (ThisEvent()) {
        ReproduceObjectAnimation(2601050, 1);
        SetObjactState(2601050, 2600010, Disabled);
        NotifySoundDampeningOfDoorEvent(2601050, DoorState.DoorOpening);
        EndEvent();
    }
L0:
    WaitFor(ObjActEventFlag(12600200));
    WaitFixedTimeSeconds(0);
});

// 邪眼橋扉を開放
$Event(12601051, Default, function() {
    if (ThisEvent()) {
        ReproduceObjectAnimation(2601051, 0);
        SetObjactState(2601051, 2600020, Disabled);
        SetObjactState(2601051, 2600021, Disabled);
        NotifySoundDampeningOfDoorEvent(2601051, DoorState.DoorOpening);
        EndEvent();
    }
L0:
    WaitFor(ObjActEventFlag(12600201) || ObjActEventFlag(12600202));
    SetObjactState(2601051, 2600020, Disabled);
    SetObjactState(2601051, 2600021, Disabled);
    WaitFixedTimeSeconds(0);
});

// ワープ椅子_ワープアニメ再生_XX
$Event(12607010, Default, function(eventFlagId, entityId) {
    WaitFor(EventFlag(eventFlagId));
    IssueShortWarpRequest(10000, TargetEntityType.Object, entityId, 200);
    ForceAnimationPlayback(10000, 101160, false, false, true);
    WaitFixedTimeSeconds(4);
    SetEventFlag(eventFlagId, OFF);
});

// ワープ椅子_ワープ_XX
$Event(12607020, Default, function(eventFlagId, entityId, eventFlagId2) {
    WaitFor(EventFlag(eventFlagId));
    SetEventFlag(eventFlagId, OFF);
    WarpPlayerToRespawnPoint(entityId);
    SetEventFlag(eventFlagId2, ON);
});

// ワープ椅子_ワープ後処理
$Event(12607040, Default, function() {
    if (!AnyBatchEventFlags(9001, 9010)) {
        EndEvent();
    }
    SetEventFlag(9210, ON);
    WaitFor(!EventFlag(9210));
    if (EventFlag(9001)) {
        SetEventFlag(12607810, ON);
        SetEventFlag(12607811, ON);
    }
    if (EventFlag(9002)) {
        SetEventFlag(12607830, ON);
        SetEventFlag(12607831, ON);
    }
    if (EventFlag(9003)) {
        SetEventFlag(12607850, ON);
        SetEventFlag(12607851, ON);
    }
    if (EventFlag(9004)) {
        SetEventFlag(12607870, ON);
        SetEventFlag(12607871, ON);
    }
    if (EventFlag(9005)) {
        SetEventFlag(12607890, ON);
        SetEventFlag(12607891, ON);
    }
    if (EventFlag(9006)) {
        SetEventFlag(12607910, ON);
        SetEventFlag(12607911, ON);
    }
    if (EventFlag(9007)) {
        SetEventFlag(12607930, ON);
        SetEventFlag(12607931, ON);
    }
    if (EventFlag(9008)) {
        SetEventFlag(12607950, ON);
        SetEventFlag(12607951, ON);
    }
    if (EventFlag(9009)) {
        SetEventFlag(12607970, ON);
        SetEventFlag(12607971, ON);
    }
    if (EventFlag(9010)) {
        SetEventFlag(12607990, ON);
        SetEventFlag(12607991, ON);
    }
    BatchSetEventFlags(9000, 9010, OFF);
});

// ワープ椅子_初回起動演出_XX
$Event(12607050, Default, function(eventFlagId, chrEntityId, entityId) {
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


