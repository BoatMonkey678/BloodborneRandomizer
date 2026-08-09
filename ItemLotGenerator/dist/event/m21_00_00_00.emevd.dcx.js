// ==EMEVD==
// @docs    bb-common.emedf.json
// @compress    DCX_DFLT_10000_44_9
// @game    Bloodborne
// @string    "PC情報_拠点到達時\u0000ボス_撃破\u0000PC情報_ボス撃破_拠点ボス\u0000ボス_戦闘開始\u0000ボス_撃破時間\u0000PC情報_ボス撃破_拠点ボス2\u0000ボス_戦闘開始2\u0000ボス_撃破時間2\u0000N:\\SPRJ\\data\\Param\\event\\common.emevd\u0000"
// @linked    [164]
// @version    3.6.2
// ==/EMEVD==

// コンストラクタ
$Event(0, Default, function() {
    $InitializeEvent(0, 12100010);
    if (EventFlag(9400)) {
        SetPlayerRespawnPoint(2102961);
    }
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        if (EventFlag(6600)) {
            SetEventFlag(12101999, ON);
        }
    }
    if (!EventFlag(12101999)) {
        DeactivateObject(2101100, Disabled);
    }
    SetNetworkUpdateRate(2100700, true, CharacterUpdateFrequency.AlwaysUpdate);
    SetSpEffect(10000, 110, false);
    SetSpEffect(10000, 111, false);
    SetSpEffect(10000, 112, false);
    SetSpEffect(10000, 113, false);
    SetSpEffect(10000, 114, false);
    SetSpEffect(10000, 115, false);
    SetSpEffect(10000, 116, false);
    SetEventFlag(72100100, OFF);
    SetEventFlag(72100101, OFF);
    SetEventFlag(72100102, OFF);
    SetEventFlag(72102110, OFF);
    SetEventFlag(72102200, OFF);
    SetEventFlag(72102201, OFF);
    SetEventFlag(72102300, OFF);
    SetEventFlag(72102301, OFF);
    SetEventFlag(72102302, OFF);
    SetEventFlag(72102400, OFF);
    SetEventFlag(72102401, OFF);
    SetEventFlag(72102410, OFF);
    SetEventFlag(72102411, OFF);
    SetEventFlag(72102412, OFF);
    SetEventFlag(72102413, OFF);
    SetEventFlag(72102420, OFF);
    SetEventFlag(72102421, OFF);
    SetEventFlag(72102422, OFF);
    SetEventFlag(72102500, OFF);
    SetEventFlag(72102501, OFF);
    SetEventFlag(72102502, OFF);
    SetEventFlag(72102600, OFF);
    SetEventFlag(72102601, OFF);
    SetEventFlag(72102602, OFF);
    SetEventFlag(72102603, OFF);
    SetEventFlag(72102700, OFF);
    SetEventFlag(72102701, OFF);
    SetEventFlag(72102800, OFF);
    SetEventFlag(72102801, OFF);
    SetEventFlag(72102802, OFF);
    SetEventFlag(72102803, OFF);
    SetEventFlag(72103200, OFF);
    SetEventFlag(72103201, OFF);
    SetEventFlag(72103202, OFF);
    SetEventFlag(72103203, OFF);
    SetEventFlag(72103300, OFF);
    SetEventFlag(72103301, OFF);
    SetEventFlag(72103400, OFF);
    SetEventFlag(72103401, OFF);
    SetEventFlag(72103402, OFF);
    SetEventFlag(72103403, OFF);
    SetEventFlag(72103500, OFF);
    SetEventFlag(72103501, OFF);
    SetEventFlag(72103502, OFF);
    SetEventFlag(72103600, OFF);
    SetEventFlag(72103601, OFF);
    SetEventFlag(72103602, OFF);
    $InitializeEvent(0, 12105210);
    $InitializeEvent(52, 12107000, 72102110, 2100952, 2112950);
    $InitializeEvent(0, 12107000, 72102200, 2100951, 2202950);
    $InitializeEvent(1, 12107000, 72102201, 2100951, 2202951);
    $InitializeEvent(5, 12107000, 72102300, 2100950, 2302950);
    $InitializeEvent(6, 12107000, 72102301, 2100950, 2302951);
    $InitializeEvent(7, 12107000, 72102302, 2100950, 2302952);
    $InitializeEvent(10, 12107000, 72102400, 2100950, 2402950);
    $InitializeEvent(11, 12107000, 72102401, 2100950, 2402951);
    $InitializeEvent(15, 12107000, 72102410, 2100950, 2412950);
    $InitializeEvent(16, 12107000, 72102411, 2100950, 2412951);
    $InitializeEvent(17, 12107000, 72102412, 2100950, 2412952);
    $InitializeEvent(18, 12107000, 72102413, 2100950, 2412953);
    $InitializeEvent(20, 12107000, 72102420, 2100950, 2422950);
    $InitializeEvent(21, 12107000, 72102421, 2100950, 2422951);
    $InitializeEvent(22, 12107000, 72102422, 2100950, 2422952);
    $InitializeEvent(25, 12107000, 72102500, 2100952, 2502950);
    $InitializeEvent(26, 12107000, 72102501, 2100952, 2502951);
    $InitializeEvent(27, 12107000, 72102502, 2100952, 2502952);
    $InitializeEvent(30, 12107000, 72102600, 2100953, 2602950);
    $InitializeEvent(31, 12107000, 72102601, 2100953, 2602951);
    $InitializeEvent(32, 12107000, 72102602, 2100953, 2602952);
    $InitializeEvent(33, 12107000, 72102603, 2100953, 2602953);
    $InitializeEvent(35, 12107000, 72102700, 2100951, 2702950);
    $InitializeEvent(36, 12107000, 72102701, 2100951, 2702951);
    $InitializeEvent(40, 12107000, 72102800, 2100952, 2802950);
    $InitializeEvent(41, 12107000, 72102801, 2100952, 2802951);
    $InitializeEvent(42, 12107000, 72102802, 2100952, 2802952);
    $InitializeEvent(43, 12107000, 72102803, 2100952, 2802953);
    $InitializeEvent(45, 12107000, 72103200, 2100951, 3202950);
    $InitializeEvent(46, 12107000, 72103201, 2100953, 3202951);
    $InitializeEvent(47, 12107000, 72103202, 2100951, 3202952);
    $InitializeEvent(48, 12107000, 72103203, 2100953, 3202953);
    $InitializeEvent(50, 12107000, 72103300, 2100953, 3302950);
    $InitializeEvent(51, 12107000, 72103301, 2100953, 3302951);
    $InitializeEvent(55, 12107000, 72103400, 2100231, 3402950);
    $InitializeEvent(56, 12107000, 72103401, 2100231, 3402951);
    $InitializeEvent(57, 12107000, 72103402, 2100231, 3402952);
    $InitializeEvent(58, 12107000, 72103403, 2100231, 3402953);
    $InitializeEvent(60, 12107000, 72103500, 2100231, 3502950);
    $InitializeEvent(61, 12107000, 72103501, 2100231, 3502951);
    $InitializeEvent(62, 12107000, 72103502, 2100231, 3502952);
    $InitializeEvent(65, 12107000, 72103600, 2100231, 3602950);
    $InitializeEvent(66, 12107000, 72103601, 2100231, 3602951);
    $InitializeEvent(67, 12107000, 72103602, 2100231, 3602952);
    SetEventFlag(72100420, OFF);
    SetEventFlag(72100421, OFF);
    SetEventFlag(72100422, OFF);
    SetEventFlag(72100423, OFF);
    SetEventFlag(72100424, OFF);
    SetEventFlag(72100425, OFF);
    SetEventFlag(72100426, OFF);
    $InitializeEvent(0, 12107100, 72100420, 2100954, 9020);
    $InitializeEvent(1, 12107100, 72100421, 2100955, 9021);
    $InitializeEvent(2, 12107100, 72100422, 2100956, 9022);
    $InitializeEvent(3, 12107100, 72100423, 2100957, 9023);
    $InitializeEvent(4, 12107100, 72100424, 2100958, 9024);
    $InitializeEvent(5, 12107100, 72100425, 2100959, 9025);
    $InitializeEvent(6, 12107100, 72100426, 2100960, 9026);
    SetEventFlag(72100300, OFF);
    SetEventFlag(72100301, OFF);
    SetEventFlag(72100302, OFF);
    SetEventFlag(72100303, OFF);
    SetEventFlag(72100304, OFF);
    SetEventFlag(72100305, OFF);
    SetEventFlag(72100306, OFF);
    SetEventFlag(72100307, OFF);
    SetEventFlag(72100308, OFF);
    SetEventFlag(72100309, OFF);
    $InitializeEvent(0, 12107200, 72100300, 2902950, 9001);
    $InitializeEvent(1, 12107200, 72100301, 2902951, 9002);
    $InitializeEvent(2, 12107200, 72100302, 2902952, 9003);
    $InitializeEvent(3, 12107200, 72100303, 2902953, 9004);
    $InitializeEvent(4, 12107200, 72100304, 2902954, 9005);
    $InitializeEvent(5, 12107200, 72100305, 2902955, 9006);
    $InitializeEvent(6, 12107200, 72100306, 2902956, 9007);
    $InitializeEvent(7, 12107200, 72100307, 2902957, 9008);
    $InitializeEvent(8, 12107200, 72100308, 2902958, 9009);
    $InitializeEvent(9, 12107200, 72100309, 2902959, 9010);
    $InitializeEvent(0, 12100300);
    $InitializeEvent(0, 12100310);
    $InitializeEvent(0, 12100800);
    $InitializeEvent(0, 12100180);
    $InitializeEvent(0, 12101800);
    $InitializeEvent(0, 12101801);
    $InitializeEvent(0, 12101802);
    $InitializeEvent(0, 12104810);
    $InitializeEvent(0, 12104811);
    $InitializeEvent(0, 12104802);
    $InitializeEvent(0, 12104803);
    $InitializeEvent(0, 12104804);
    $InitializeEvent(0, 12104805);
    $InitializeEvent(0, 12104807);
    $InitializeEvent(0, 12104808);
    $InitializeEvent(0, 12101803);
    $InitializeEvent(0, 12100000);
    $InitializeEvent(0, 12100002);
    $InitializeEvent(0, 12101850);
    $InitializeEvent(0, 12101851);
    $InitializeEvent(0, 12101852);
    $InitializeEvent(0, 12104880);
    $InitializeEvent(0, 12104881);
    $InitializeEvent(0, 12104852);
    $InitializeEvent(0, 12104853);
    $InitializeEvent(0, 12104854);
    $InitializeEvent(0, 12104855);
    $InitializeEvent(0, 12101853);
    $InitializeEvent(0, 12104860, 5, 5, NPCPartType.Part1, 100, 480, 490, 8000);
    $InitializeEvent(1, 12104860, 6, 6, NPCPartType.Part2, 150, 481, 491, 8010);
    $InitializeEvent(2, 12104860, 7, 7, NPCPartType.Part3, 150, 482, 492, 8030);
    $InitializeEvent(3, 12104860, 8, 8, NPCPartType.Part4, 200, 483, 493, 8020);
    $InitializeEvent(4, 12104860, 9, 9, NPCPartType.Part5, 200, 484, 494, 8040);
    $InitializeEvent(0, 12104870);
    $InitializeEvent(0, 12100400);
    $InitializeEvent(0, 12100410, 7002, 2101000, 9462, 10010171);
    $InitializeEvent(1, 12100410, 7030, 2101010, 9403, 10010171);
    $InitializeEvent(2, 12100410, 7030, 2101020, 9403, 10010171);
    $InitializeEvent(3, 12100410, 7030, 2101030, 9403, 10010171);
    $InitializeEvent(0, 9401);
    $InitializeEvent(0, 12100990);
    $InitializeEvent(0, 12105000, 2100950, 12105030);
    $InitializeEvent(1, 12105000, 2100951, 12105031);
    $InitializeEvent(2, 12105000, 2100952, 12105032);
    $InitializeEvent(3, 12105000, 2100953, 12105033);
    $InitializeEvent(3, 12105004, 2100231, 12105034);
    $InitializeEvent(0, 12105020);
    $InitializeEvent(0, 12105021);
    $InitializeEvent(0, 12105022);
    $InitializeEvent(0, 12105023);
    $InitializeEvent(0, 12105024);
    $InitializeEvent(0, 12105040);
    $InitializeEvent(0, 12101000, 4110, 2100211, 1, 10);
    $InitializeEvent(1, 12101000, 4111, 2100211, 2, 13);
    $InitializeEvent(2, 12101000, 4112, 2100211, 3, 15);
    $InitializeEvent(3, 12101000, 4113, 2100212, 0, 15);
    $InitializeEvent(4, 12101000, 4114, 2100212, 1, 12);
    $InitializeEvent(5, 12101000, 4115, 2100212, 2, 11);
    $InitializeEvent(6, 12101000, 4116, 2100212, 3, 15);
    $InitializeEvent(7, 12101000, 4117, 2100213, 0, 15);
    $InitializeEvent(8, 12101000, 4118, 2100213, 1, 15);
    $InitializeEvent(9, 12101000, 4119, 2100213, 2, 15);
    $InitializeEvent(0, 12101010);
    $InitializeEvent(0, 12105043);
    $InitializeEvent(0, 12101020);
    $InitializeEvent(0, 12101021);
    $InitializeEvent(0, 12101022);
    $InitializeEvent(0, 12101024);
    $InitializeEvent(0, 12101026);
    $InitializeEvent(0, 12101028);
    $InitializeEvent(0, 12105010);
    $InitializeEvent(0, 12105011);
    $InitializeEvent(0, 12105012);
    $InitializeEvent(0, 12105013);
    $InitializeEvent(0, 12105014);
    $InitializeEvent(0, 12105015);
    $InitializeEvent(0, 12105016);
    $InitializeEvent(0, 12105310, 94005001, 2100954);
    $InitializeEvent(1, 12105310, 94105001, 2100955);
    $InitializeEvent(2, 12105310, 94205001, 2100956);
    $InitializeEvent(3, 12105310, 94305001, 2100957);
    $InitializeEvent(4, 12105310, 94405001, 2100958);
    $InitializeEvent(5, 12105310, 94505001, 2100959);
    $InitializeEvent(6, 12105310, 94605001, 2100960);
    $InitializeEvent(0, 12100110);
    $InitializeEvent(0, 12105200);
    $InitializeEvent(0, 12100115);
    $InitializeEvent(0, 12100116);
    $InitializeEvent(0, 12100117);
    $InitializeEvent(0, 12100120);
    $InitializeEvent(0, 12100121);
    $InitializeEvent(0, 12100123);
    $InitializeEvent(0, 12100112);
    $InitializeEvent(0, 12100113);
    $InitializeEvent(0, 12100114);
    $InitializeEvent(0, 12100160);
    $InitializeEvent(0, 12100162);
    $InitializeEvent(0, 12100163);
    $InitializeEvent(0, 12100164);
    $InitializeEvent(0, 12100165);
    SetCharacterHPBarDisplay(2100600, Disabled);
    $InitializeEvent(0, 12105060);
    $InitializeEvent(0, 12105062);
    $InitializeEvent(0, 12105070, 72100141, 6011, 20);
    $InitializeEvent(1, 12105070, 72100142, 6012, 21);
    $InitializeEvent(2, 12105070, 72100143, 6013, 22);
    $InitializeEvent(3, 12105070, 72100144, 6014, 23);
    $InitializeEvent(4, 12105070, 72100145, 6015, 24);
    $InitializeEvent(5, 12105070, 72100146, 6016, 25);
    $InitializeEvent(6, 12105070, 72100147, 6017, 26);
    $InitializeEvent(7, 12105070, 72100148, 6018, 27);
    $InitializeEvent(8, 12105070, 72100149, 6019, 28);
    $InitializeEvent(9, 12105070, 72100150, 6020, 0);
    $InitializeEvent(10, 12105070, 72100151, 6021, 0);
    $InitializeEvent(11, 12105070, 72100152, 6022, 0);
    $InitializeEvent(12, 12105070, 72100153, 6023, 0);
    $InitializeEvent(13, 12105070, 72100154, 6024, 0);
    $InitializeEvent(14, 12105070, 72100155, 6025, 0);
    $InitializeEvent(0, 12100020, 4900, 6071, 1);
    $InitializeEvent(1, 12100020, 4901, 6072, 1);
    $InitializeEvent(2, 12100020, 4902, 6073, 1);
    $InitializeEvent(3, 12100020, 4903, 6074, 0);
    $InitializeEvent(4, 12100020, 4904, 6075, 0);
    $InitializeEvent(5, 12100020, 4905, 6076, 0);
    $InitializeEvent(6, 12100020, 4906, 6077, 0);
    $InitializeEvent(7, 12100020, 4907, 6078, 0);
    $InitializeEvent(8, 12100020, 4908, 6079, 0);
    $InitializeEvent(9, 12100020, 4909, 6080, 0);
    $InitializeEvent(10, 12100020, 4910, 6081, 0);
    $InitializeEvent(11, 12100020, 4911, 6082, 0);
    $InitializeEvent(12, 12100020, 4912, 6083, 0);
    $InitializeEvent(13, 12100020, 4913, 6084, 0);
    $InitializeEvent(14, 12100020, 4914, 6085, 0);
    $InitializeEvent(0, 12105064);
    $InitializeEvent(0, 12101100);
    $InitializeEvent(0, 12105300);
    SetSpEffect(10000, 9121, false);
    if (!EventFlag(12101802)) {
        SetSpEffect(10000, 9120, false);
    }
    $InitializeEvent(0, 12100330);
});

// プリコンストラクタ
$Event(50, Default, function() {
    if (EventFlag(12101020)) {
        SetCharacterBackreadState(2100215, true);
        SetCharacterBackreadState(2100220, true);
    }
    if (EventFlag(12101021)) {
        SetCharacterBackreadState(2100216, true);
        SetCharacterBackreadState(2100221, true);
    }
    if (!EventFlag(9462)) {
        SetCharacterBackreadState(2100800, true);
        SetCharacterBackreadState(2100810, true);
    }
    if (!EventFlag(12101802)) {
        SetEventFlag(2100, ON);
    }
    if (EventFlag(1003)) {
        SetEventFlag(1003, OFF);
        SetEventFlag(72100110, OFF);
        SetEventFlag(72100111, OFF);
        SetEventFlag(72100112, OFF);
        SetEventFlag(72100113, OFF);
        SetEventFlag(72100114, OFF);
        if (EventFlag(9462)) {
            SetEventFlag(1002, ON);
        } else {
L1:
            SetEventFlag(1000, ON);
        }
    }
L0:
    $InitializeEvent(0, 12100100, 1000, 1019);
    $InitializeEvent(0, 12100101, 1000, 1019);
    $InitializeEvent(0, 12100140, 1020, 1039);
    $InitializeEvent(0, 12100141, 1020, 1039);
    $InitializeEvent(0, 12100142, 1020, 1039);
    $InitializeEvent(0, 12100143, 1020, 1039);
    $InitializeEvent(0, 12100144, 1020, 1039);
    $InitializeEvent(0, 12100145, 1020, 1039);
    $InitializeEvent(0, 12100146);
    SetCharacterAnimationState(2100200, Disabled);
    SetCharacterAnimationState(2100201, Disabled);
    SetCharacterAnimationState(2100202, Disabled);
    SetCharacterAnimationState(2100203, Disabled);
    SetCharacterAnimationState(2100211, Disabled);
    SetCharacterAnimationState(2100212, Disabled);
    SetCharacterAnimationState(2100219, Disabled);
    SetCharacterAnimationState(2100214, Disabled);
    SetCharacterAnimationState(2100215, Disabled);
    SetCharacterAnimationState(2100216, Disabled);
    SetCharacterAnimationState(2100217, Disabled);
    SetCharacterAnimationState(2100218, Disabled);
    SetCharacterAnimationState(2100220, Disabled);
    SetCharacterAnimationState(2100221, Disabled);
    SetCharacterAnimationState(2100222, Disabled);
    SetCharacterAnimationState(2100230, Disabled);
    SetCharacterAnimationState(2100231, Disabled);
    SetCharacterAnimationState(2100950, Disabled);
    SetCharacterAnimationState(2100951, Disabled);
    SetCharacterAnimationState(2100952, Disabled);
    SetCharacterAnimationState(2100953, Disabled);
    SetCharacterAnimationState(2100954, Disabled);
    SetCharacterAnimationState(2100955, Disabled);
    SetCharacterAnimationState(2100956, Disabled);
    SetCharacterAnimationState(2100957, Disabled);
    SetCharacterAnimationState(2100958, Disabled);
    SetCharacterAnimationState(2100959, Disabled);
    SetCharacterAnimationState(2100960, Disabled);
    SetCharacterGravity(2100200, Disabled);
    SetCharacterGravity(2100201, Disabled);
    SetCharacterGravity(2100202, Disabled);
    SetCharacterGravity(2100203, Disabled);
    SetCharacterGravity(2100211, Disabled);
    SetCharacterGravity(2100212, Disabled);
    SetCharacterGravity(2100219, Disabled);
    SetCharacterGravity(2100214, Disabled);
    SetCharacterGravity(2100215, Disabled);
    SetCharacterGravity(2100216, Disabled);
    SetCharacterGravity(2100217, Disabled);
    SetCharacterGravity(2100218, Disabled);
    SetCharacterGravity(2100220, Disabled);
    SetCharacterGravity(2100221, Disabled);
    SetCharacterGravity(2100222, Disabled);
    SetCharacterGravity(2100230, Disabled);
    SetCharacterGravity(2100231, Disabled);
    SetCharacterGravity(2100950, Disabled);
    SetCharacterGravity(2100951, Disabled);
    SetCharacterGravity(2100952, Disabled);
    SetCharacterGravity(2100953, Disabled);
    SetCharacterGravity(2100954, Disabled);
    SetCharacterGravity(2100955, Disabled);
    SetCharacterGravity(2100956, Disabled);
    SetCharacterGravity(2100957, Disabled);
    SetCharacterGravity(2100958, Disabled);
    SetCharacterGravity(2100959, Disabled);
    SetCharacterGravity(2100960, Disabled);
    SetCharacterMaphits(2100200, true);
    SetCharacterMaphits(2100201, true);
    SetCharacterMaphits(2100202, true);
    SetCharacterMaphits(2100203, true);
    SetCharacterMaphits(2100211, true);
    SetCharacterMaphits(2100212, true);
    SetCharacterMaphits(2100219, true);
    SetCharacterMaphits(2100214, true);
    SetCharacterMaphits(2100215, true);
    SetCharacterMaphits(2100216, true);
    SetCharacterMaphits(2100217, true);
    SetCharacterMaphits(2100218, true);
    SetCharacterMaphits(2100220, true);
    SetCharacterMaphits(2100221, true);
    SetCharacterMaphits(2100222, true);
    SetCharacterMaphits(2100230, true);
    SetCharacterMaphits(2100231, true);
    SetCharacterMaphits(2100950, true);
    SetCharacterMaphits(2100951, true);
    SetCharacterMaphits(2100952, true);
    SetCharacterMaphits(2100953, true);
    SetCharacterMaphits(2100954, true);
    SetCharacterMaphits(2100955, true);
    SetCharacterMaphits(2100956, true);
    SetCharacterMaphits(2100957, true);
    SetCharacterMaphits(2100958, true);
    SetCharacterMaphits(2100959, true);
    SetCharacterMaphits(2100960, true);
    if (EventFlag(12411000)) {
        SetCharacterBackreadState(2100800, true);
        SetCharacterBackreadState(2100810, true);
    }
});

// 初回死亡で拠点に来たポリ劇
$Event(9401, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    EndIf(ThisEvent());
    SetEventFlag(9180, ON);
    PlayCutsceneToPlayer(21000000, CutscenePlayMode.SkippableWithFadeOut, 10000);
    WaitFixedTimeFrames(1);
    SetEventFlag(9180, OFF);
    SetEventFlag(12417810, ON);
});

// Bエンド
$Event(12100000, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    WaitFor(
        EventFlag(12101800)
            && CharacterType(10000, TargetType.Alive)
            && (PlayerStandingOnHit(2103601)
                || PlayerStandingOnHit(2103602)
                || PlayerStandingOnHit(2103603)
                || PlayerStandingOnHit(2103604)
                || PlayerStandingOnHit(2103605))
            && !EventFlag(9900));
    WaitFixedTimeSeconds(3);
    DeleteMapSFX(2103300, true);
    DeleteMapSFX(2103500, true);
    DeleteMapSFX(2103501, true);
    DeleteMapSFX(2103502, true);
    DeleteMapSFX(2103503, true);
    DeleteMapSFX(2103504, true);
    DeleteMapSFX(2103505, true);
    DeleteMapSFX(2103506, true);
    DeleteMapSFX(2103507, true);
    DeleteMapSFX(2103510, true);
    DeleteMapSFX(2103511, true);
    DeleteMapSFX(2103512, true);
    DeleteMapSFX(2103513, true);
    DeleteMapSFX(2103514, true);
    DeleteMapSFX(2103515, true);
    DeleteMapSFX(2103516, true);
    DeleteMapSFX(2103517, true);
    DeleteMapSFX(2103518, true);
    DeleteMapSFX(2103519, true);
    DeleteMapSFX(2103520, true);
    SetEventFlag(9180, ON);
    WaitFixedTimeFrames(1);
    PlayCutsceneToPlayer(21000020, CutscenePlayMode.Skippable, 10000);
    WaitFixedTimeFrames(1);
    SetEventFlag(9180, OFF);
    AwardAchievement(2);
    $InitializeEvent(0, 12100450);
    $InitializeEvent(0, 12100451);
    $InitializeEvent(0, 12100452);
    WaitFixedTimeFrames(1);
    IncrementGameCycle(1);
    SetEventFlag(6604, ON);
    SetEventFlag(6601, ON);
    SetEventFlag(6603, ON);
    SetEventFlag(22, ON);
});

// Cエンド
$Event(12100002, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    WaitFor(
        EventFlag(12101850)
            && (PlayerStandingOnHit(2103601)
                || PlayerStandingOnHit(2103602)
                || PlayerStandingOnHit(2103603)
                || PlayerStandingOnHit(2103604)
                || PlayerStandingOnHit(2103605)));
    WaitFixedTimeSeconds(5);
    SetEventFlag(9180, ON);
    WaitFixedTimeFrames(1);
    DeleteMapSFX(2103300, true);
    DeleteMapSFX(2103500, true);
    DeleteMapSFX(2103501, true);
    DeleteMapSFX(2103502, true);
    DeleteMapSFX(2103503, true);
    DeleteMapSFX(2103504, true);
    DeleteMapSFX(2103505, true);
    DeleteMapSFX(2103506, true);
    DeleteMapSFX(2103507, true);
    if (!PlayerGender(Gender.Female)) {
        PlayCutsceneToPlayer(21000030, CutscenePlayMode.Skippable, 10000);
    } else {
L0:
        PlayCutsceneToPlayer(21001030, CutscenePlayMode.Skippable, 10000);
    }
L1:
    WaitFixedTimeFrames(1);
    SetEventFlag(9180, OFF);
    AwardAchievement(3);
    $InitializeEvent(0, 12100450);
    $InitializeEvent(0, 12100451);
    $InitializeEvent(0, 12100452);
    WaitFixedTimeFrames(1);
    IncrementGameCycle(1);
    SetEventFlag(6604, ON);
    SetEventFlag(6602, ON);
    SetEventFlag(6603, ON);
    SetEventFlag(23, ON);
});

// はまり対応
$Event(12100010, Default, function() {
    WaitFor(!EventFlag(9403) && InArea(10000, 2102100));
    DeactivateObject(2101010, Disabled);
    DeactivateObject(2101011, Enabled);
    DeactivateObject(2101020, Disabled);
    DeactivateObject(2101021, Enabled);
    DeactivateObject(2101030, Disabled);
    DeactivateObject(2101031, Enabled);
});

// アイテム所持判定_XX
$Event(12100020, Default, function(itemId, eventFlagId, value) {
    SetNetworkSyncState(Disabled);
    EndIf(!CharacterType(10000, TargetType.Alive));
    if (value != 0) {
        SetEventFlag(eventFlagId, OFF);
    }
    WaitFor(PlayerHasItem(ItemType.Goods, itemId));
    SetEventFlag(eventFlagId, ON);
});

// 人形のヒロイン_ゲールマン様がお待ちです
$Event(12100100, Default, function(eventFlagId, eventFlagId2) {
    WaitFor(!EventFlag(1003) && EventFlag(9462));
    BatchSetEventFlags(eventFlagId, eventFlagId2, OFF);
    SetEventFlag(1002, ON);
});

// 人形のヒロイン_死んでいる
$Event(12100101, Default, function(eventFlagId, eventFlagId2) {
    WaitFor(CharacterDead(2100700));
    BatchSetEventFlags(eventFlagId, eventFlagId2, OFF);
    SetEventFlag(1003, ON);
    SaveRequest(0);
});

// 人形のヒロイン_立ち位置制御
$Event(12100110, Default, function() {
    SetEventFlag(72100105, OFF);
    SetEventFlag(72100106, OFF);
    SetEventFlag(72100107, OFF);
    SetEventFlag(12100510, OFF);
    if (!(!EventFlag(9401) || PlayerInsightAmount() == 0)) {
        SetEventFlag(12100105, ON);
        SetEventFlag(9404, ON);
        EndIf(
            (EventFlag(13501800) && !EventFlag(72100116))
                || (EventFlag(13601800)
                    && !EventFlag(72100117)
                    && (EventFlag(1026) || EventFlag(1027))));
        EndIf(EventFlag(1000));
        GotoIf(L0, EventFlag(1001));
        EndIf(EventFlag(1002));
        if (!EventFlag(1003)) {
L0:
            if (!EventFlag(100)) {
                BatchSetEventFlags(12100500, 12100509, OFF);
                RandomlySetEventFlagInRange(12100500, 12100509, ON);
            }
            if (EventFlag(12105034)) {
                BatchSetEventFlags(12100501, 12100502, OFF);
            }
            GotoIf(L1, EventFlag(12100500));
            GotoIf(L2, EventFlag(12100501));
            GotoIf(L3, EventFlag(12100502));
            EndEvent();
L1:
            IssueShortWarpRequest(2100700, TargetEntityType.Area, 2102301, -1);
            ForceAnimationPlayback(2100700, 9009, true, false, false);
            Goto(L8);
L2:
            SetEventFlag(12100510, ON);
            IssueShortWarpRequest(2100700, TargetEntityType.Area, 2102302, -1);
            ForceAnimationPlayback(2100700, 9000, true, false, false);
            Goto(L8);
L3:
            SetEventFlag(12100510, ON);
            if (!EventFlag(6600)) {
                SetEventFlag(12100502, OFF);
                EndEvent();
            }
            IssueShortWarpRequest(2100700, TargetEntityType.Area, 2102303, -1);
            ForceAnimationPlayback(2100700, 9000, true, false, false);
            Goto(L8);
        }
L4:
        GotoIf(L5, EventFlag(12100500));
        GotoIf(L6, EventFlag(12100501));
        GotoIf(L7, EventFlag(12100502));
        IssueShortWarpRequest(2100700, TargetEntityType.Area, 2102300, -1);
        ForceCharacterTreasure(2100700);
        EndEvent();
L5:
        IssueShortWarpRequest(2100700, TargetEntityType.Area, 2102301, -1);
        ForceCharacterTreasure(2100700);
        EndEvent();
L6:
        IssueShortWarpRequest(2100700, TargetEntityType.Area, 2102302, -1);
        ForceCharacterTreasure(2100700);
        EndEvent();
L7:
        IssueShortWarpRequest(2100700, TargetEntityType.Area, 2102303, -1);
        ForceCharacterTreasure(2100700);
        EndEvent();
L8:
        $InitializeEvent(0, 12100111);
        EndEvent();
    }
L9:
    IssueShortWarpRequest(2100700, TargetEntityType.Area, 2102304, -1);
    ForceAnimationPlayback(2100700, 9011, true, false, false);
    SetEventFlag(12105100, ON);
});

// 人形のヒロイン_ランダム自動会話
$Event(12100111, Default, function() {
    GotoIf(L0, EventFlag(12100500));
    GotoIf(L1, EventFlag(12100501));
    GotoIf(L1, EventFlag(12100502));
L0:
    SetEventFlag(72100105, ON);
    EndEvent();
L1:
    EndIf(!EventFlag(9802));
    if (!EventFlag(102)) {
        BatchSetEventFlags(12100520, 12100524, OFF);
        RandomlySetEventFlagInRange(12100520, 12100524, ON);
        EndIf(!EventFlag(12100520));
    }
    SetEventFlag(72100105, ON);
    EndEvent();
});

// 人形のヒロイン_レベルアップアニメ_PC
$Event(12100112, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(EventFlag(72100100));
    GotoIf(L0, EventFlag(1003));
    GotoIf(L1, EventFlag(12105100));
    if (!(CharacterType(10000, TargetType.Alive) && EntityInRadiusOfEntity(10000, 2100700, 1))) {
        RotateCharacter(10000, 2100700, 101290, false);
        WaitFor(
            (CharacterType(10000, TargetType.Alive) && EntityInRadiusOfEntity(10000, 2100700, 1))
                || ElapsedFrames(89));
    }
L2:
    RotateCharacter(10000, 2100700, 101270, false);
    WaitFixedTimeFrames(0);
    SetEventFlag(72100101, ON);
    WaitFixedTimeFrames(54);
    WaitFor(!EventFlag(72100100));
    ForceAnimationPlayback(10000, 101272, false, false, false);
    WaitFixedTimeFrames(19);
    SetEventFlag(72100101, OFF);
    RestartEvent();
L0:
    if (!(CharacterType(10000, TargetType.Alive) && EntityInRadiusOfEntity(10000, 2100700, 1.5))) {
        RotateCharacter(10000, 2100700, 101290, false);
        WaitFor(
            (CharacterType(10000, TargetType.Alive) && EntityInRadiusOfEntity(10000, 2100700, 1.5))
                || ElapsedFrames(89));
    }
L3:
    RotateCharacter(10000, 2100700, 101280, false);
    WaitFixedTimeFrames(0);
    SetEventFlag(72100101, ON);
    WaitFixedTimeFrames(54);
    WaitFor(!EventFlag(72100100));
    ForceAnimationPlayback(10000, 101282, false, false, false);
    WaitFixedTimeFrames(25);
    SetEventFlag(72100101, OFF);
    RestartEvent();
L1:
    if (!(CharacterType(10000, TargetType.Alive) && EntityInRadiusOfEntity(10000, 2100700, 2))) {
        RotateCharacter(10000, 2100700, 101290, false);
        WaitFor(
            CharacterType(10000, TargetType.Alive) && EntityInRadiusOfEntity(10000, 2100700, 2));
    }
L4:
    RotateCharacter(10000, 2100700, 101270, false);
    WaitFixedTimeFrames(0);
    SetEventFlag(72100101, ON);
    WaitFixedTimeFrames(54);
    WaitFor(!EventFlag(72100100));
    ForceAnimationPlayback(10000, 101272, false, false, false);
    WaitFixedTimeFrames(19);
    SetEventFlag(72100101, OFF);
    RestartEvent();
});

// 人形のヒロイン_レベルアップアニメ_人形
$Event(12100113, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFixedTimeFrames(1);
    if (HPRatio(2100700) == 0 || EventFlag(12105100)) {
        SetEventFlag(72100102, ON);
        EndEvent();
    }
L0:
    WaitFor(EventFlag(72100100));
    RotateCharacter(2100700, 10000, 7021, false);
    WaitFixedTimeFrames(0);
    SetEventFlag(72100102, ON);
    WaitFixedTimeFrames(89);
    ForceAnimationPlayback(2100700, 9010, true, false, false);
    WaitFor(!EventFlag(72100100));
    ForceAnimationPlayback(2100700, 7020, false, false, false);
    SetEventFlag(72100102, OFF);
    WaitFixedTimeFrames(92);
    RestartEvent();
});

// 人形のヒロイン_レベルアップ_SFX
$Event(12100114, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(EventFlag(7500));
    SpawnOneshotSFX(TargetEntityType.Character, 10000, 1, 178);
    SetEventFlag(7500, OFF);
    RestartEvent();
});

// 人形のヒロイン_おじぎ
$Event(12100115, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFixedTimeFrames(2);
    WaitFor(CharacterType(10000, TargetType.Alive) && EntityInRadiusOfEntity(10000, 2100700, 8));
    EndIf(HPRatio(2100700) == 0 || EventFlag(12105100) || EventFlag(72100105));
    if (CharacterHasSpEffect(2100700, 151)) {
        RotateCharacter(2100700, 10000, 7010, false);
        WaitFixedTimeFrames(89);
        if (CharacterHasSpEffect(2100700, 152)) {
            RotateCharacter(2100700, 10000, 7012, false);
            WaitFixedTimeFrames(0);
        }
    }
L0:
    WaitFixedTimeSeconds(0);
});

// 人形のヒロイン_ハッと驚く
$Event(12100116, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(EventFlag(72100108));
    SetEventFlag(72100108, OFF);
    if (CharacterHasSpEffect(2100700, 151)) {
        RotateCharacter(2100700, 10000, 7011, false);
        WaitFixedTimeFrames(89);
        EndEvent();
    }
L0:
    if (CharacterHasSpEffect(2100700, 152)) {
        RotateCharacter(2100700, 10000, 7013, false);
        WaitFixedTimeFrames(0);
        EndEvent();
    }
L1:
    if (CharacterHasSpEffect(2100700, 153)) {
        RotateCharacter(2100700, 10000, 7019, false);
        WaitFixedTimeFrames(89);
    }
L2:
    WaitFixedTimeSeconds(0);
});

// 人形のヒロイン_ジェスチャーに反応
$Event(12100117, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(!CharacterType(10000, TargetType.Alive));
    sp = CharacterHasSpEffect(10000, 161);
    sp2 = CharacterHasSpEffect(10000, 162);
    sp3 = CharacterHasSpEffect(10000, 163);
    WaitFor(
        CharacterHasSpEffect(2100700, 160)
            && EventFlag(12100118)
            && CharacterType(10000, TargetType.Alive)
            && (sp || sp2 || sp3));
    if (!sp3.Passed) {
        if (!sp2.Passed) {
            RotateCharacter(2100700, 10000, 7001, false);
            WaitFixedTimeFrames(1);
            RestartEvent();
        }
L0:
        RotateCharacter(2100700, 10000, 7000, false);
        WaitFixedTimeFrames(1);
        RestartEvent();
    }
L1:
    RotateCharacter(2100700, 10000, 7026, false);
    WaitFixedTimeFrames(39);
    RotateCharacter(2100700, 10000, 7025, false);
    RestartEvent();
});

// 人形のヒロイン_殺害
$Event(12100120, Default, function() {
    EndIf(ThisEvent());
});

// 人形のヒロイン_キーアイテム所持判定
$Event(12100121, Default, function() {
    WaitFor(PlayerHasItemIncludingBBox(ItemType.Goods, 4300));
    SetEventFlag(12100122, ON);
    WaitFor(!PlayerHasItemIncludingBBox(ItemType.Goods, 4300));
    SetEventFlag(12100122, OFF);
    RestartEvent();
});

// 人形のヒロイン_キーアイテム譲渡
$Event(12100123, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(ThisEvent());
    EndIf(!CharacterType(10000, TargetType.Alive));
    SetEventFlag(72100114, OFF);
    WaitFor(CharacterHasSpEffect(2100700, 160) && EventFlag(72100114));
    ForceAnimationPlayback(2100700, 7030, false, false, false);
    WaitFor(EventFlag(72100112));
    AwardItemLot(14000);
    RemoveItemFromPlayer(ItemType.Goods, 4300, 1);
});

// 拠点老人_ようこそ
$Event(12100140, Default, function(eventFlagId, eventFlagId2) {
    WaitFor(EventFlag(1020) && EventFlag(9403));
    BatchSetEventFlags(eventFlagId, eventFlagId2, OFF);
    SetEventFlag(1021, ON);
});

// 拠点老人_廃墟に聖杯があるよ
$Event(12100141, Default, function(eventFlagId, eventFlagId2) {
    WaitFor(EventFlag(1022) && EventFlag(9800));
    BatchSetEventFlags(eventFlagId, eventFlagId2, OFF);
    SetEventFlag(1023, ON);
});

// 拠点老人_オドン教会に上れ
$Event(12100142, Default, function(eventFlagId, eventFlagId2) {
    WaitFor(EventFlag(1024) && (EventFlag(12301800) || EventFlag(9801)));
    BatchSetEventFlags(eventFlagId, eventFlagId2, OFF);
    SetEventFlag(1025, ON);
});

// 拠点老人_介錯したい
$Event(12100143, Default, function(eventFlagId, eventFlagId2) {
    WaitFor(!EventFlag(1029) && !EventFlag(1030) && EventFlag(9462));
    BatchSetEventFlags(eventFlagId, eventFlagId2, OFF);
    SetEventFlag(1028, ON);
});

// 拠点老人_戦闘中
$Event(12100144, Default, function(eventFlagId, eventFlagId2) {
    WaitFor(!EventFlag(1030) && EventFlag(12101802));
    BatchSetEventFlags(eventFlagId, eventFlagId2, OFF);
    SetEventFlag(1029, ON);
    SaveRequest(0);
});

// 拠点老人_死んでいる
$Event(12100145, Default, function(eventFlagId, eventFlagId2) {
    WaitFor(EventFlag(12101800));
    BatchSetEventFlags(eventFlagId, eventFlagId2, OFF);
    SetEventFlag(1030, ON);
    SaveRequest(0);
});

// 拠点老人_会話ステート処理限界距離制御
$Event(12100146, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    SetDistanceLimitForConversationStateProcessing(2100800, 17);
    WaitFor(EventFlag(1029));
    SetDistanceLimitForConversationStateProcessing(2100800, 80);
});

// 拠点老人_立ち位置制御
$Event(12100160, Default, function() {
    SetEventFlag(72100133, OFF);
    SetEventFlag(72100134, OFF);
    SetEventFlag(72100135, OFF);
    BatchSetEventFlags(12105800, 12105809, OFF);
    WaitFor(CharacterBackreadStatus(2100600));
    GotoIf(L0, EventFlag(1020));
    GotoIf(L1, EventFlag(1021));
    GotoIf(L0, EventFlag(1022));
    GotoIf(L1, EventFlag(1023));
    GotoIf(L0, EventFlag(1024));
    GotoIf(L1, EventFlag(1025));
    GotoIf(L0, EventFlag(1026));
    GotoIf(L0, EventFlag(1027));
    GotoIf(L2, EventFlag(1028));
    GotoIf(L3, EventFlag(1029));
    GotoIf(L3, EventFlag(1030));
L0:
    ChangeCharacterEnableState(2100600, Disabled);
    $InitializeEvent(0, 12100161);
    EndEvent();
L1:
    IssueShortWarpRequest(2100600, TargetEntityType.Area, 2102310, -1);
    EndEvent();
L2:
    ForceAnimationPlayback(2100600, 9002, true, false, false);
    IssueShortWarpRequest(2100600, TargetEntityType.Area, 2102312, -1);
    EndEvent();
L3:
    ChangeCharacterEnableState(2100600, Disabled);
});

// 拠点老人_ランダム自動会話
$Event(12100161, Default, function() {
    EndIf(EventFlag(13601800) && !EventFlag(72100117));
    if (!EventFlag(1027)) {
        if (!EventFlag(1026)) {
            if (!EventFlag(100)) {
                RandomlySetEventFlagInRange(12105800, 12105804, ON);
                EndIf(!EventFlag(12105800));
            }
            SetEventFlag(72100133, ON);
            ChangeCharacterEnableState(2100600, Enabled);
            ForceAnimationPlayback(2100600, 9000, true, false, false);
            IssueShortWarpRequest(2100600, TargetEntityType.Area, 2102311, -1);
            EndEvent();
        }
L0:
        if (!EventFlag(100)) {
            RandomlySetEventFlagInRange(12105800, 12105809, ON);
            EndIf(!EventFlag(12105800));
        }
        SetEventFlag(72100133, ON);
        ChangeCharacterEnableState(2100600, Enabled);
        ForceAnimationPlayback(2100600, 9000, true, false, false);
        IssueShortWarpRequest(2100600, TargetEntityType.Area, 2102311, -1);
        EndEvent();
    }
L1:
    if (!EventFlag(100)) {
        RandomlySetEventFlagInRange(12105800, 12105809, ON);
        EndIf(!EventFlag(12105800));
    }
    SetEventFlag(72100133, ON);
    ChangeCharacterEnableState(2100600, Enabled);
    ForceAnimationPlayback(2100600, 9000, true, false, false);
    IssueShortWarpRequest(2100600, TargetEntityType.Area, 2102311, -1);
});

// 拠点老人_建物OPEN
$Event(12100162, Default, function() {
    if (EventFlag(9403)) {
        DeactivateObject(2101010, Disabled);
        DeactivateObject(2101011, Enabled);
        DeactivateObject(2101020, Disabled);
        DeactivateObject(2101021, Enabled);
        DeactivateObject(2101030, Disabled);
        DeactivateObject(2101031, Enabled);
        EndEvent();
    }
L0:
    DeactivateObject(2101010, Enabled);
    DeactivateObject(2101011, Disabled);
    DeactivateObject(2101020, Enabled);
    DeactivateObject(2101021, Disabled);
    DeactivateObject(2101030, Enabled);
    DeactivateObject(2101031, Disabled);
});

// 拠点老人_攻撃で消える
$Event(12100163, Restart, function() {
    SetEventFlag(12100163, OFF);
    WaitFor(
        !EventFlag(1028)
            && !EventFlag(1029)
            && !EventFlag(1030)
            && CharacterHasEventMessage(2100600, 10));
    SetEventFlag(12100163, ON);
});

// 拠点老人_ヒント
$Event(12100164, Default, function() {
    SetVisibilityOfMessage(2103000, Disabled);
    SetVisibilityOfMessage(2103001, Disabled);
    if (EventFlag(1024)) {
        if (!EventFlag(5000)) {
            SetVisibilityOfMessage(2103000, Enabled);
        }
    }
    if (EventFlag(1026) || EventFlag(1027)) {
        if (!EventFlag(52400480)) {
            SetVisibilityOfMessage(2103001, Enabled);
        }
    }
});

// 拠点老人_顔を上げる
$Event(12100165, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(!CharacterType(10000, TargetType.Alive));
    SetEventFlag(72100136, OFF);
    WaitFor(EventFlag(72100136));
    ForceAnimationPlayback(2100600, 7000, false, false, false);
    WaitFixedTimeFrames(129);
    ForceAnimationPlayback(2100600, 9003, true, false, false);
});

// Aエンド
$Event(12100180, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    WaitFor(EventFlag(72100130));
    SetEventFlag(9180, ON);
    WaitFixedTimeFrames(1);
    DeleteMapSFX(2103300, true);
    DeleteMapSFX(2103500, true);
    DeleteMapSFX(2103501, true);
    DeleteMapSFX(2103502, true);
    DeleteMapSFX(2103503, true);
    DeleteMapSFX(2103504, true);
    DeleteMapSFX(2103505, true);
    DeleteMapSFX(2103506, true);
    DeleteMapSFX(2103507, true);
    IncrementGameCycle(1);
    if (!PlayerGender(Gender.Female)) {
        PlayCutsceneToPlayer(21000010, CutscenePlayMode.Skippable, 10000);
    } else {
L0:
        PlayCutsceneToPlayer(21001010, CutscenePlayMode.Skippable, 10000);
    }
L1:
    WaitFixedTimeFrames(1);
    SetEventFlag(9180, OFF);
    AwardAchievement(1);
    SetEventFlag(6604, ON);
    $InitializeEvent(0, 12100450);
    $InitializeEvent(0, 12100451);
    $InitializeEvent(0, 12100452);
    WaitFixedTimeFrames(1);
    SetEventFlag(21, ON);
    SetEventFlag(6600, ON);
    SetEventFlag(6603, ON);
});

// 時間帯変化
$Event(12100300, Default, function() {
    if (!EventFlag(12101852)) {
        if (!EventFlag(9462)) {
            if (!EventFlag(9802)) {
                if (!EventFlag(9801)) {
                    if (!EventFlag(9800)) {
                        if (EventFlag(9800)) {
                        }
L0:
                        NoOp();
                    }
L1:
                    NoOp();
                }
L2:
                NoOp();
            }
L3:
            DeactivateObject(2101310, Enabled);
            DeactivateObject(2101311, Disabled);
            DeactivateObject(2101300, Enabled);
            DeactivateObject(2101301, Disabled);
            DeleteMapSFX(2103300, false);
            DeleteMapSFX(2103500, false);
            DeleteMapSFX(2103501, false);
            DeleteMapSFX(2103502, false);
            DeleteMapSFX(2103503, false);
            DeleteMapSFX(2103504, false);
            DeleteMapSFX(2103505, false);
            DeleteMapSFX(2103506, false);
            DeleteMapSFX(2103507, false);
            EndEvent();
        }
L4:
        DeactivateObject(2101310, Enabled);
        DeactivateObject(2101311, Disabled);
        DeactivateObject(2101300, Enabled);
        DeactivateObject(2101301, Disabled);
        EndEvent();
    }
L5:
    DeactivateObject(2101310, Disabled);
    DeactivateObject(2101311, Enabled);
    DeactivateObject(2101300, Disabled);
    DeactivateObject(2101301, Enabled);
});

// 拠点BGM変化
$Event(12100310, Default, function() {
    if (!EventFlag(9462)) {
        if (!(PlayerInsightAmount() >= 50 || EventFlag(9802))) {
            SetMapSoundState(2103900, Enabled);
            SetMapSoundState(2103901, Disabled);
            EndEvent();
        }
L0:
        SetMapSoundState(2103900, Disabled);
        SetMapSoundState(2103901, Enabled);
        EndEvent();
    }
L1:
    SetMapSoundState(2103900, Disabled);
    SetMapSoundState(2103901, Disabled);
});

// 略式儀式の汎聖杯入手判定
$Event(12100330, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(EventFlag(5051) || EventFlag(6660));
    SetEventFlag(5051, ON);
    SetEventFlag(6660, ON);
});

// 宝箱_XX
$Event(12100350, Default, function(objEntityId, objactEventFlag) {
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

// トラップロードクリアで扉が開く
$Event(12100400, Default, function() {
    EndIf(!EventFlag(9462));
    ReproduceObjectAnimation(2101000, 1);
});

// 開けない扉Msg表示_XX
$Event(12100410, Default, function(actionButtonParameterId, areaEntityId, eventFlagId, messageId) {
    SetNetworkSyncState(Disabled);
    WaitFor(ActionButtonInArea(actionButtonParameterId, areaEntityId) || EventFlag(eventFlagId));
    EndIf(EventFlag(eventFlagId));
    DisplayGenericDialog(messageId, PromptType.OKCANCEL, NumberofOptions.OneButton, areaEntityId, 3);
    RestartEvent();
});

// 解禁アイテム取得済みフラグを立てる
$Event(12100450, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(!CharacterType(10000, TargetType.Alive));
    if (PlayerHasItem(ItemType.Goods, 4103)) {
        SetEventFlag(6630, ON);
    }
    if (PlayerHasItem(ItemType.Goods, 4104)) {
        SetEventFlag(6631, ON);
    }
    if (PlayerHasItem(ItemType.Goods, 4105)) {
        SetEventFlag(6632, ON);
    }
    if (PlayerHasItem(ItemType.Goods, 4102)) {
        SetEventFlag(6633, ON);
    }
    if (PlayerHasItem(ItemType.Goods, 4110)) {
        SetEventFlag(6640, ON);
    }
    if (PlayerHasItem(ItemType.Goods, 4112)) {
        SetEventFlag(6641, ON);
    }
    if (PlayerHasItem(ItemType.Goods, 4113)) {
        SetEventFlag(6642, ON);
    }
    if (PlayerHasItem(ItemType.Goods, 4111)) {
        SetEventFlag(6643, ON);
    }
    if (PlayerHasItem(ItemType.Goods, 4118)) {
        SetEventFlag(6644, ON);
    }
    if (PlayerHasItem(ItemType.Goods, 4114)) {
        SetEventFlag(6645, ON);
    }
    if (PlayerHasItem(ItemType.Goods, 4115)) {
        SetEventFlag(6646, ON);
    }
    if (PlayerHasItem(ItemType.Goods, 4116)) {
        SetEventFlag(6647, ON);
    }
    if (PlayerHasItem(ItemType.Goods, 4119)) {
        SetEventFlag(6648, ON);
    }
    if (PlayerHasItem(ItemType.Goods, 4117)) {
        SetEventFlag(6649, ON);
    }
    EndEvent();
});

// BJ取得済みフラグを立てる_00
$Event(12100451, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    if (EventFlag(50000400)) {
        SetEventFlag(6300, ON);
    }
    if (EventFlag(50000600)) {
        SetEventFlag(6301, ON);
    }
    if (EventFlag(50000800)) {
        SetEventFlag(6302, ON);
    }
    if (EventFlag(50001100)) {
        SetEventFlag(6303, ON);
    }
    if (EventFlag(50001300)) {
        SetEventFlag(6304, ON);
    }
    if (EventFlag(50001610)) {
        SetEventFlag(6305, ON);
    }
    if (EventFlag(50002110)) {
        SetEventFlag(6306, ON);
    }
    if (EventFlag(50003400)) {
        SetEventFlag(6307, ON);
    }
    if (EventFlag(50003500)) {
        SetEventFlag(6308, ON);
    }
    if (EventFlag(52200380)) {
        SetEventFlag(6309, ON);
    }
    if (EventFlag(52420640)) {
        SetEventFlag(6310, ON);
    }
    if (EventFlag(52420690)) {
        SetEventFlag(6311, ON);
    }
    if (EventFlag(52410640)) {
        SetEventFlag(6312, ON);
    }
    if (EventFlag(52420120)) {
        SetEventFlag(6313, ON);
    }
    if (EventFlag(52600390)) {
        SetEventFlag(6314, ON);
    }
    if (EventFlag(52600300)) {
        SetEventFlag(6315, ON);
    }
    if (EventFlag(52700180)) {
        SetEventFlag(6316, ON);
    }
    if (EventFlag(52700200)) {
        SetEventFlag(6317, ON);
    }
    if (EventFlag(52700380)) {
        SetEventFlag(6318, ON);
    }
    if (EventFlag(52700540)) {
        SetEventFlag(6319, ON);
    }
    if (EventFlag(52700570)) {
        SetEventFlag(6320, ON);
    }
    if (EventFlag(52700950)) {
        SetEventFlag(6321, ON);
    }
    if (EventFlag(52800050)) {
        SetEventFlag(6322, ON);
    }
    if (EventFlag(52800140)) {
        SetEventFlag(6323, ON);
    }
    if (EventFlag(52800350)) {
        SetEventFlag(6324, ON);
    }
    if (EventFlag(53200010)) {
        SetEventFlag(6325, ON);
    }
    if (EventFlag(53200640)) {
        SetEventFlag(6326, ON);
    }
    if (EventFlag(53300110)) {
        SetEventFlag(6327, ON);
    }
    if (EventFlag(53300150)) {
        SetEventFlag(6328, ON);
    }
    if (EventFlag(53300320)) {
        SetEventFlag(6329, ON);
    }
});

// BJ取得済みフラグを立てる_01
$Event(12100452, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    if (EventFlag(53300420)) {
        SetEventFlag(6330, ON);
    }
    if (EventFlag(53300480)) {
        SetEventFlag(6331, ON);
    }
    if (EventFlag(9458)) {
        SetEventFlag(6332, ON);
    }
    if (EventFlag(12400861)) {
        SetEventFlag(6333, ON);
    }
    if (EventFlag(50003100)) {
        SetEventFlag(6334, ON);
    }
    if (EventFlag(50001500)) {
        SetEventFlag(6335, ON);
    }
    if (EventFlag(52605000)) {
        SetEventFlag(6336, ON);
    }
    if (EventFlag(50000200)) {
        SetEventFlag(6340, ON);
    }
    if (EventFlag(50001820)) {
        SetEventFlag(6341, ON);
    }
    if (EventFlag(50001910)) {
        SetEventFlag(6342, ON);
    }
    if (EventFlag(50002260)) {
        SetEventFlag(6677, ON);
    }
});

// マップ初回入場_プレイログ
$Event(12100990, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    EndIf(ThisEvent());
    WaitFor(PlayerStandingOnHit(2103600));
    ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 0, PlayLogMultiplayerType.HostOnly);
    ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 0, PlayLogMultiplayerType.HostOnly);
    ParameterOutput(PlayerPlayLogParameter.Weapon, 0, PlayLogMultiplayerType.HostOnly);
    ParameterOutput(PlayerPlayLogParameter.Armor, 0, PlayLogMultiplayerType.HostOnly);
});

// ボス関連配置物の初期化
$Event(12100800, Default, function() {
    if (EventFlag(12101850)) {
        ChangeCharacterEnableState(2100810, Disabled);
        ChangeCharacterEnableState(2100800, Disabled);
        if (!HasMultiplayerState(MultiplayerState.Client)) {
            DeactivateObject(2101800, Disabled);
            DeleteMapSFX(2103800, false);
        }
        EndEvent();
    }
L0:
    if (EventFlag(12101852)) {
        ChangeCharacterEnableState(2100800, Disabled);
        EndEvent();
    }
L1:
    if (EventFlag(12101800)) {
        ChangeCharacterEnableState(2100810, Disabled);
        ChangeCharacterEnableState(2100800, Disabled);
        if (!HasMultiplayerState(MultiplayerState.Client)) {
            DeactivateObject(2101800, Disabled);
            DeleteMapSFX(2103800, false);
        }
        EndEvent();
    }
L2:
    if (EventFlag(12101802)) {
        ChangeCharacterEnableState(2100810, Disabled);
        EndEvent();
    }
L3:
    ChangeCharacterEnableState(2100810, Disabled);
    ChangeCharacterEnableState(2100800, Disabled);
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        DeactivateObject(2101800, Disabled);
        DeleteMapSFX(2103800, false);
    }
});

// ボス撃破_拠点老人（覚醒）
$Event(12101800, Default, function() {
    if (ThisEventSlot()) {
        SetMapSoundState(2103802, Disabled);
        SetMapSoundState(2103803, Disabled);
        EndEvent();
    }
L0:
    SetEventFlag(12104809, OFF);
    WaitFor(HPRatio(2100800) == 0);
    SetEventFlag(12104809, ON);
    WaitFor(CharacterDead(2100800));
    DisplayBanner(TextBannerType.DemonKilled);
    SetLockcamSlotNumber(21, 0, 0);
    WaitFixedTimeSeconds(3);
    if (!EventFlag(9900)) {
        HandleBossDefeat(2100800);
    } else {
        HandleMinibossDefeat(2100800);
    }
    SetNetworkSyncState(Disabled);
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        WaitFor(CharacterType(10000, TargetType.Alive));
        $InitializeEvent(0, 9350, 3);
        if (!EventFlag(6642)) {
            AwardItemLot(15000);
        } else {
            AwardItemLot(15005);
        }
        EndTimeMeasurement(2100000);
        EndTimeMeasurement(2100001);
        EndTimeMeasurement(2100010);
        CreatePlaylog(22);
        ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 34, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 34, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Weapon, 34, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Armor, 34, PlayLogMultiplayerType.HostOnly);
        EndEvent();
    }
L1:
    WaitFor(CharacterType(10000, TargetType.WhitePhantom));
    WaitFixedTimeSeconds(0);
});

// ボス撃破SE再生_拠点老人（覚醒）
$Event(12101801, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12101800));
    flag = EventFlag(12101800);
    WaitFor(flag || (!CharacterBackreadStatus(2100800) && HPRatio(2100800) <= 0));
    EndIf(flag.Passed);
    PlaySE(2102800, SoundType.cCharacterMotion, 0);
});

// ホストがボス戦開始_初戦_拠点老人（覚醒）
$Event(12101802, Default, function() {
    EndIf(EventFlag(12101800));
    EndIf(ThisEvent());
    ChangeCharacterEnableState(2100800, Disabled);
    SetEventFlag(72100131, OFF);
    WaitFor(EventFlag(72100131));
    SetEventFlag(9180, ON);
    WaitFixedTimeFrames(1);
    PlayCutsceneAndWarpPlayer(21000040, CutscenePlayMode.Skippable, 2102808, 21, 0, 10000);
    WaitFixedTimeFrames(1);
    SetEventFlag(9180, OFF);
    ChangeCharacterEnableState(2100800, Enabled);
    ChangeCharacterEnableState(2100600, Disabled);
    SetEventFlag(12104800, ON);
    SetEventFlag(2100, OFF);
    EndIf(EventFlag(9343));
    $InitializeEvent(0, 9350, 1);
    SetEventFlag(9343, ON);
});

// 拠点老人（覚醒）_時間差入場ゲスト用対処処理
$Event(12101803, Default, function() {
    WaitFor(CharacterType(10000, TargetType.Alive) && EventFlag(12104800));
    EndIf(HasMultiplayerState(MultiplayerState.Host));
    ChangeCharacterEnableState(2100800, Enabled);
    ChangeCharacterEnableState(2100600, Disabled);
    SetEventFlag(12104800, ON);
    SetEventFlag(12101802, ON);
});

// ホストがボス戦開始_再戦_拠点老人（覚醒）
$Event(12104810, Default, function() {
    EndIf(EventFlag(12101800));
    if (!EventFlag(12101802)) {
        WaitFor(!EventFlag(12101800) && EventFlag(12101802));
        DeactivateObject(2101800, Enabled);
        SpawnMapSFX(2103800);
    }
L0:
    flagChrAct = !EventFlag(12101800)
        && CharacterType(10000, TargetType.Alive)
        && ActionButtonInArea(2100800, 2101800);
    flag = EventFlag(12101800);
    WaitFor(flagChrAct || flag);
    EndIf(flag.Passed);
    RotateCharacter(10000, 2102800, 101130, false);
    chrArea = CharacterType(10000, TargetType.Alive) && InArea(10000, 2102801);
    chrTime = CharacterType(10000, TargetType.Alive) && ElapsedSeconds(2);
    WaitFor(chrArea || chrTime);
    if (!chrTime.Passed) {
        SetEventFlag(12104800, ON);
    }
    RestartEvent();
});

// ゲストがボス戦開始_拠点老人（覚醒）
$Event(12104811, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12101800));
    WaitFor(
        !EventFlag(12101800)
            && EventFlag(12101802)
            && EventFlag(12104800)
            && CharacterType(10000, TargetType.WhitePhantom)
            && ActionButtonInArea(2100800, 2101800));
    RotateCharacter(10000, 2102800, 101130, false);
    chrArea = CharacterType(10000, TargetType.WhitePhantom) && InArea(10000, 2102801);
    chrTime = CharacterType(10000, TargetType.WhitePhantom) && ElapsedSeconds(2);
    WaitFor(chrArea || chrTime);
    if (!chrTime.Passed) {
        SetEventFlag(12104801, ON);
    }
    RestartEvent();
});

// ボスが動き出す_拠点老人（覚醒）
$Event(12104802, Default, function() {
    EndIf(EventFlag(12101800));
    SetCharacterAIState(2100800, Disabled);
    SetCharacterHPBarDisplay(2100800, Disabled);
    SetCharacterInvincibility(2100800, Enabled);
    if (!ThisEvent()) {
        WaitFor(EventFlag(12104800));
        if (!HasMultiplayerState(MultiplayerState.Client)) {
            IssueBossRoomEntryNotification(0);
            SetNetworkUpdateAuthority(2100800, AuthorityLevel.Normal);
        }
    }
L0:
    SetEventFlag(12104800, ON);
    GotoIf(L1, NumberOfCoopClients() == 0);
    GotoIf(L2, NumberOfCoopClients() == 1);
    GotoIf(L3, NumberOfCoopClients() == 2);
L1:
    Goto(L4);
L2:
    SetSpEffect(2100800, 7500, false);
    WaitFixedTimeFrames(1);
    AdaptHpchangingSpEffectToNPCPartOfTarget(2100800);
    Goto(L4);
L3:
    SetSpEffect(2100800, 7501, false);
    WaitFixedTimeFrames(1);
    AdaptHpchangingSpEffectToNPCPartOfTarget(2100800);
    Goto(L4);
L4:
    SetCharacterAIState(2100800, Enabled);
    DisplayBossHealthBar(Enabled, 2100800, 0, 804000);
    SetCharacterInvincibility(2100800, Disabled);
    SetCharacterEventTarget(2100800, 2100801);
    CreatePlaylog(64);
    StartTimeMeasurement(2100010, 80, Enabled);
});

// ボスBGM_ON_拠点老人（覚醒）
$Event(12104803, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12101800));
    if (!ThisEvent()) {
        SetMapSoundState(2103802, Disabled);
        SetMapSoundState(2103803, Disabled);
        flagArea &= !EventFlag(12101800) && EventFlag(12104802);
        if (!HasMultiplayerState(MultiplayerState.Host)) {
            flagArea &= EventFlag(12104801);
        }
        flagArea &= InArea(10000, 2102802);
        WaitFor(flagArea);
        SetMapSoundState(2103900, Disabled);
        SetMapSoundState(2103901, Disabled);
        EnableBossMapSound(2103802, Enabled);
        chrFlagArea &= CharacterHasEventMessage(2100800, 100);
    }
L0:
    chrFlagArea &= !EventFlag(12101800) && EventFlag(12104802);
    if (!HasMultiplayerState(MultiplayerState.Host)) {
        chrFlagArea &= EventFlag(12104801);
    }
    chrFlagArea &= InArea(10000, 2102802);
    WaitFor(chrFlagArea);
    EnableBossMapSound(2103802, Disabled);
    WaitFixedTimeFrames(0);
    EnableBossMapSound(2103803, Enabled);
});

// ボスカメラ_拠点老人（覚醒）
$Event(12104804, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12101800));
    WaitFor(HPRatio(2100800) > 0 && EntityInRadiusOfEntity(10000, 2100800, 8));
    SetLockcamSlotNumber(21, 0, 1);
    WaitFor(HPRatio(2100800) > 0 && !EntityInRadiusOfEntity(10000, 2100800, 10));
    SetLockcamSlotNumber(21, 0, 0);
    RestartEvent();
});

// ボスBGM_OFF_拠点老人（覚醒）
$Event(12104805, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12101800));
    WaitFor(EventFlag(12104809));
    EnableBossMapSound(2103802, Disabled);
    EnableBossMapSound(2103803, Disabled);
    EnableBossMapSound(-1, Disabled);
});

// ボスヒートアップ_拠点老人（覚醒）
$Event(12104807, Default, function() {
    EndIf(EventFlag(12101800));
    WaitFor(HPRatio(2100800) < 0.5);
    RequestCharacterAICommand(2100800, 100, 0);
    WaitFor(CharacterHasEventMessage(2100800, 100));
    ClearSpEffect(2100800, 5305);
    RequestCharacterAICommand(2100800, -1, 0);
    RequestCharacterAIReplan(2100800);
    WaitFixedTimeSeconds(0.1);
    RequestCharacterAICommand(2100800, 1, 1);
});

// ボス強化解除_拠点老人（覚醒）
$Event(12104808, Default, function() {
    EndIf(EventFlag(12101800));
    WaitFor(CharacterHasEventMessage(2100800, 20));
    ClearSpEffect(2100800, 5526);
    WaitFixedTimeSeconds(0.1);
    RestartEvent();
});

// ボス撃破_悪夢を継ぐもの
$Event(12101850, Default, function() {
    if (ThisEventSlot()) {
        SetMapSoundState(2103812, Disabled);
        SetMapSoundState(2103813, Disabled);
        EndEvent();
    }
L0:
    WaitFor(CharacterDead(2100810));
    SetEventFlag(12104859, ON);
    DisplayBanner(TextBannerType.StadiumDraw);
    SetLockcamSlotNumber(21, 0, 0);
    WaitFixedTimeSeconds(3);
    HandleBossDefeat(2100810);
    SetNetworkSyncState(Disabled);
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        WaitFor(CharacterType(10000, TargetType.Alive));
        $InitializeEvent(0, 9350, 5);
        EndTimeMeasurement(2100011);
        CreatePlaylog(22);
        ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 96, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 96, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Weapon, 96, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Armor, 96, PlayLogMultiplayerType.HostOnly);
        EndEvent();
    }
L1:
    WaitFor(CharacterType(10000, TargetType.WhitePhantom));
    WaitFixedTimeSeconds(0);
});

// ボス撃破SE再生_悪夢を継ぐもの
$Event(12101851, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12101850));
    flag = EventFlag(12101850);
    WaitFor(flag || (!CharacterBackreadStatus(2100810) && HPRatio(2100810) <= 0));
    EndIf(flag.Passed);
    PlaySE(2102800, SoundType.cCharacterMotion, 0);
});

// ホストがボス戦開始_初戦_悪夢を継ぐもの
$Event(12101852, Default, function() {
    EndIf(EventFlag(12101850));
    EndIf(ThisEvent());
    WaitFor(
        EventFlag(12101800)
            && CharacterType(10000, TargetType.Alive)
            && (PlayerStandingOnHit(2103601)
                || PlayerStandingOnHit(2103602)
                || PlayerStandingOnHit(2103603)
                || PlayerStandingOnHit(2103604)
                || PlayerStandingOnHit(2103605))
            && EventFlag(9900));
    WaitFixedTimeSeconds(3);
    SetEventFlag(9180, ON);
    WaitFixedTimeFrames(1);
    DeleteMapSFX(2103510, true);
    DeleteMapSFX(2103511, true);
    DeleteMapSFX(2103512, true);
    DeleteMapSFX(2103513, true);
    DeleteMapSFX(2103514, true);
    DeleteMapSFX(2103515, true);
    DeleteMapSFX(2103516, true);
    DeleteMapSFX(2103517, true);
    DeleteMapSFX(2103518, true);
    DeleteMapSFX(2103519, true);
    DeleteMapSFX(2103520, true);
    if (!HasMultiplayerState(MultiplayerState.Multiplayer)) {
        PlayCutsceneAndWarpPlayer(21000050, CutscenePlayMode.Skippable, 2102809, 21, 0, 10000);
    } else {
        PlayCutsceneAndWarpPlayer(21000050, CutscenePlayMode.Unskippable, 2102809, 21, 0, 10000);
    }
    WaitFixedTimeFrames(1);
    SetEventFlag(9180, OFF);
    SpawnMapSFX(2103510);
    SpawnMapSFX(2103511);
    SpawnMapSFX(2103512);
    SpawnMapSFX(2103513);
    SpawnMapSFX(2103514);
    SpawnMapSFX(2103515);
    SpawnMapSFX(2103516);
    SpawnMapSFX(2103517);
    SpawnMapSFX(2103518);
    SpawnMapSFX(2103519);
    SpawnMapSFX(2103520);
    DeactivateObject(2101310, Disabled);
    DeactivateObject(2101311, Enabled);
    DeactivateObject(2101300, Disabled);
    DeactivateObject(2101301, Enabled);
    ChangeCharacterEnableState(2100810, Enabled);
    SetEventFlag(12104850, ON);
    EndIf(EventFlag(9307));
    $InitializeEvent(0, 9350, 5);
    SetEventFlag(9307, ON);
});

// 悪夢を継ぐもの_時間差入場ゲスト用対処処理
$Event(12101853, Default, function() {
    WaitFor(CharacterType(10000, TargetType.Alive) && EventFlag(12104850));
    EndIf(HasMultiplayerState(MultiplayerState.Host));
    DeactivateObject(2101310, Disabled);
    DeactivateObject(2101311, Enabled);
    DeactivateObject(2101300, Disabled);
    DeactivateObject(2101301, Enabled);
    ChangeCharacterEnableState(2100810, Enabled);
    SetEventFlag(12104850, ON);
    SetEventFlag(12101852, ON);
});

// ホストがボス戦開始_再戦_悪夢を継ぐもの
$Event(12104880, Default, function() {
    EndIf(EventFlag(12101850));
    if (!EventFlag(12101852)) {
        WaitFor(!EventFlag(12101850) && EventFlag(12101852));
        DeactivateObject(2101800, Enabled);
        SpawnMapSFX(2103800);
    }
L0:
    flagChrAct = !EventFlag(12101850)
        && CharacterType(10000, TargetType.Alive)
        && ActionButtonInArea(2100800, 2101800);
    flag = EventFlag(12101850);
    WaitFor(flagChrAct || flag);
    EndIf(flag.Passed);
    RotateCharacter(10000, 2102800, 101130, false);
    chrArea = CharacterType(10000, TargetType.Alive) && InArea(10000, 2102801);
    chrTime = CharacterType(10000, TargetType.Alive) && ElapsedSeconds(2);
    WaitFor(chrArea || chrTime);
    if (!chrTime.Passed) {
        SetEventFlag(12104850, ON);
    }
    RestartEvent();
});

// ゲストがボス戦開始_悪夢を継ぐもの
$Event(12104881, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12101850));
    WaitFor(
        !EventFlag(12101850)
            && EventFlag(12101852)
            && EventFlag(12104850)
            && CharacterType(10000, TargetType.WhitePhantom)
            && ActionButtonInArea(2100800, 2101800));
    RotateCharacter(10000, 2102800, 101130, false);
    chrArea = CharacterType(10000, TargetType.WhitePhantom) && InArea(10000, 2102801);
    chrTime = CharacterType(10000, TargetType.WhitePhantom) && ElapsedSeconds(2);
    WaitFor(chrArea || chrTime);
    if (!chrTime.Passed) {
        SetEventFlag(12104851, ON);
    }
    RestartEvent();
});

// ボスが動き出す_悪夢を継ぐもの
$Event(12104852, Default, function() {
    EndIf(EventFlag(12101850));
    SetCharacterAIState(2100810, Disabled);
    SetCharacterHPBarDisplay(2100810, Disabled);
    SetCharacterInvincibility(2100810, Enabled);
    if (!ThisEvent()) {
        WaitFor(EventFlag(12104850));
        if (!HasMultiplayerState(MultiplayerState.Client)) {
            IssueBossRoomEntryNotification(0);
            SetNetworkUpdateAuthority(2100810, AuthorityLevel.Forced);
        }
    }
L0:
    SetEventFlag(12104850, ON);
    GotoIf(L1, NumberOfCoopClients() == 0);
    GotoIf(L2, NumberOfCoopClients() == 1);
    GotoIf(L3, NumberOfCoopClients() == 2);
L1:
    Goto(L4);
L2:
    SetSpEffect(2100810, 7500, true);
    WaitFixedTimeFrames(1);
    AdaptHpchangingSpEffectToNPCPartOfTarget(2100810);
    Goto(L4);
L3:
    SetSpEffect(2100810, 7501, true);
    WaitFixedTimeFrames(1);
    AdaptHpchangingSpEffectToNPCPartOfTarget(2100810);
    Goto(L4);
L4:
    SetCharacterAIState(2100810, Enabled);
    DisplayBossHealthBar(Enabled, 2100810, 0, 540000);
    SetCharacterInvincibility(2100810, Disabled);
    CreatePlaylog(128);
    StartTimeMeasurement(2100011, 146, Enabled);
});

// ボスBGM_ON_悪夢を継ぐもの
$Event(12104853, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12101850));
    GotoIf(L0, ThisEvent());
    SetMapSoundState(2103812, Disabled);
    SetMapSoundState(2103813, Disabled);
    flagArea &= !EventFlag(12101850) && EventFlag(12101852);
    if (!HasMultiplayerState(MultiplayerState.Host)) {
        flagArea &= EventFlag(12104851);
    }
    flagArea &= InArea(10000, 2102801);
    WaitFor(flagArea);
    SetMapSoundState(2103900, Disabled);
    SetMapSoundState(2103901, Disabled);
    EnableBossMapSound(2103812, Enabled);
    WaitFor(CharacterHasEventMessage(2100810, 500));
    flagArea2 &= !EventFlag(12101850) && EventFlag(12101852);
    if (!HasMultiplayerState(MultiplayerState.Host)) {
        flagArea2 &= EventFlag(12104851);
    }
    flagArea2 &= InArea(10000, 2102801);
    WaitFor(flagArea2);
    EnableBossMapSound(2103812, Disabled);
    WaitFixedTimeFrames(0);
    EnableBossMapSound(2103813, Enabled);
});

// ボスカメラ_悪夢を継ぐもの
$Event(12104854, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12101850));
    WaitFor(HPRatio(2100810) > 0 && EntityInRadiusOfEntity(10000, 2100810, 8));
    SetLockcamSlotNumber(21, 0, 1);
    WaitFor(HPRatio(2100810) > 0 && !EntityInRadiusOfEntity(10000, 2100810, 12));
    SetLockcamSlotNumber(21, 0, 0);
    RestartEvent();
});

// ボスBGM_OFF_悪夢を継ぐもの
$Event(12104855, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12101850));
    WaitFor(EventFlag(12104859));
    EnableBossMapSound(2103812, Disabled);
    EnableBossMapSound(2103813, Disabled);
    EnableBossMapSound(-1, Disabled);
});

// 部位損傷_悪夢を継ぐもの_XX
$Event(12104860, Default, function(npcPartId, npcPartId2, npcPartGroupIdx, npcPartHP, spEffectId, spEffectId2, animationId) {
    EndIf(EventFlag(12101850));
    CreateNPCPart(2100810, npcPartId, npcPartGroupIdx, npcPartHP, 1, 1, false, false);
    SetNPCPartSEAndSFX(2100810, npcPartId2, 59, 59);
    hp = NPCPartHP(2100810, npcPartId2) <= 0;
    hp2 = HPRatio(2100810) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(2100810, npcPartId, npcPartGroupIdx, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(2100810, npcPartId2, 60, 60);
    RequestCharacterAnimationReset(2100810, Interpolation.Interpolated);
    ForceAnimationPlayback(2100810, animationId, false, false, false);
    SetSpEffect(2100810, spEffectId, false);
    ClearSpEffect(2100810, spEffectId2);
    RequestCharacterAIReplan(2100810);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(2100810, 10, 1);
    RequestCharacterAIReplan(2100810);
    WaitFor(CharacterHasEventMessage(2100810, 300));
    SetNPCPartHP(2100810, npcPartId2, -1, true);
    SetSpEffect(2100810, spEffectId2, false);
    ClearSpEffect(2100810, spEffectId);
    RequestCharacterAICommand(2100810, -1, 1);
    RequestCharacterAIReplan(2100810);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// 悪夢を継ぐもの_見つめる攻撃処理
$Event(12104870, Default, function() {
    SetNetworkSyncState(Disabled);
    WaitFor(CharacterHasEventMessage(2100810, 10));
    SetCharacterImmortality(10000, Enabled);
    WaitFor(CharacterHasSpEffect(10000, 5570) || ElapsedFrames(70));
    WaitFixedTimeFrames(5);
    SetCharacterImmortality(10000, Disabled);
    WaitFor(HasDamageType(10000, 2100810, DamageType.Unspecified) || ElapsedSeconds(10));
    ClearSpEffect(10000, 5572);
    RestartEvent();
});

// 墓石メッセンジャーアニメ
$Event(12105000, Restart, function(entityId, eventFlagId) {
    SetNetworkSyncState(Disabled);
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(EventFlag(eventFlagId));
    ForceAnimationPlayback(entityId, 7000, false, false, false);
    WaitFixedTimeFrames(109);
    ForceAnimationPlayback(entityId, 7001, true, false, false);
    WaitFor(!EventFlag(eventFlagId));
    ForceAnimationPlayback(entityId, 7002, false, false, false);
    WaitFixedTimeFrames(74);
    RestartEvent();
});

// 墓石メッセンジャーアニメ_狩人悪夢
$Event(12105004, Restart, function(chrEntityId, eventFlagId) {
    SetNetworkSyncState(Disabled);
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(EventFlag(eventFlagId));
    IssueShortWarpRequest(chrEntityId, TargetEntityType.Area, 2102305, -1);
    SetSpEffect(chrEntityId, 5401, false);
    ForceAnimationPlayback(chrEntityId, 7000, false, false, false);
    WaitFixedTimeFrames(109);
    ForceAnimationPlayback(chrEntityId, 7001, true, false, false);
    WaitFor(!EventFlag(eventFlagId));
    ForceAnimationPlayback(chrEntityId, 7002, false, false, false);
    WaitFixedTimeFrames(74);
    RestartEvent();
});

// 聖杯セット_00（クイックダンジョン）
$Event(12105010, Restart, function() {
    DeactivateObject(2101200, Disabled);
    DeactivateObject(2101201, Disabled);
    DeactivateObject(2101202, Disabled);
    DeactivateObject(2101203, Disabled);
    DeactivateObject(2101204, Disabled);
    DeactivateObject(2101205, Disabled);
    DeactivateObject(2101206, Disabled);
    DeactivateObject(2101207, Disabled);
    DeactivateObject(2101208, Disabled);
    GotoIf(L0, EventFlag(94005500) && AnyBatchEventFlags(94005100, 94005101));
    GotoIf(L1, EventFlag(94005500) && AnyBatchEventFlags(94005103, 94005104));
    GotoIf(L2, EventFlag(94005500) && EventFlag(94005102));
    GotoIf(L3, EventFlag(94005503));
    GotoIf(L4, EventFlag(94005504));
    GotoIf(L5, EventFlag(94005505));
    GotoIf(L6, EventFlag(94005502));
    GotoIf(L7, EventFlag(94005507));
    GotoIf(L8, EventFlag(94005501));
    flag = EventFlag(94005500) && AnyBatchEventFlags(94005100, 94005101);
    flag2 = EventFlag(94005500) && AnyBatchEventFlags(94005103, 94005104);
    flag3 = EventFlag(94005500) && EventFlag(94005102);
    flag4 = EventFlag(94005503);
    flag5 = EventFlag(94005504);
    flag6 = EventFlag(94005505);
    flag7 = EventFlag(94005502);
    flag8 = EventFlag(94005507);
    flag9 = EventFlag(94005501);
    WaitFor(flag || flag2 || flag3 || flag4 || flag5 || flag6 || flag7 || flag8 || flag9);
    WaitFixedTimeFrames(31);
    SpawnOneshotSFX(TargetEntityType.Character, 2100954, 200, 350);
    GotoIf(L0, flag.Passed);
    GotoIf(L1, flag2.Passed);
    GotoIf(L2, flag3.Passed);
    GotoIf(L3, flag4.Passed);
    GotoIf(L4, flag5.Passed);
    GotoIf(L5, flag6.Passed);
    GotoIf(L6, flag7.Passed);
    GotoIf(L7, flag8.Passed);
    GotoIf(L8, flag9.Passed);
L0:
    DeactivateObject(2101200, Enabled);
    WaitFor(!EventFlag(94005500));
    Goto(L9);
L1:
    DeactivateObject(2101201, Enabled);
    WaitFor(!EventFlag(94005500));
    Goto(L9);
L2:
    DeactivateObject(2101202, Enabled);
    WaitFor(!EventFlag(94005500));
    Goto(L9);
L3:
    DeactivateObject(2101203, Enabled);
    WaitFor(!EventFlag(94005503));
    Goto(L9);
L4:
    DeactivateObject(2101204, Enabled);
    WaitFor(!EventFlag(94005504));
    Goto(L9);
L5:
    DeactivateObject(2101205, Enabled);
    WaitFor(!EventFlag(94005505));
    Goto(L9);
L6:
    DeactivateObject(2101206, Enabled);
    WaitFor(!EventFlag(94005502));
    Goto(L9);
L7:
    DeactivateObject(2101207, Enabled);
    WaitFor(!EventFlag(94005507));
    Goto(L9);
L8:
    DeactivateObject(2101208, Enabled);
    WaitFor(!EventFlag(94005501));
L9:
    SpawnOneshotSFX(TargetEntityType.Character, 2100954, 200, 351);
    RestartEvent();
});

// 聖杯セット_01（チャネルダンジョン1）
$Event(12105011, Restart, function() {
    DeactivateObject(2101210, Disabled);
    DeactivateObject(2101211, Disabled);
    DeactivateObject(2101212, Disabled);
    DeactivateObject(2101213, Disabled);
    DeactivateObject(2101214, Disabled);
    DeactivateObject(2101215, Disabled);
    DeactivateObject(2101216, Disabled);
    DeactivateObject(2101217, Disabled);
    DeactivateObject(2101218, Disabled);
    GotoIf(L0, EventFlag(94105500) && AnyBatchEventFlags(94105100, 94105101));
    GotoIf(L1, EventFlag(94105500) && AnyBatchEventFlags(94105103, 94105104));
    GotoIf(L2, EventFlag(94105500) && EventFlag(94105102));
    GotoIf(L3, EventFlag(94105503));
    GotoIf(L4, EventFlag(94105504));
    GotoIf(L5, EventFlag(94105505));
    GotoIf(L6, EventFlag(94105502));
    GotoIf(L7, EventFlag(94105507));
    GotoIf(L8, EventFlag(94105501));
    flag = EventFlag(94105500) && AnyBatchEventFlags(94105100, 94105101);
    flag2 = EventFlag(94105500) && AnyBatchEventFlags(94105103, 94105104);
    flag3 = EventFlag(94105500) && EventFlag(94105102);
    flag4 = EventFlag(94105503);
    flag5 = EventFlag(94105504);
    flag6 = EventFlag(94105505);
    flag7 = EventFlag(94105502);
    flag8 = EventFlag(94105507);
    flag9 = EventFlag(94105501);
    WaitFor(flag || flag2 || flag3 || flag4 || flag5 || flag6 || flag7 || flag8 || flag9);
    WaitFixedTimeFrames(31);
    SpawnOneshotSFX(TargetEntityType.Character, 2100955, 200, 350);
    GotoIf(L0, flag.Passed);
    GotoIf(L1, flag2.Passed);
    GotoIf(L2, flag3.Passed);
    GotoIf(L3, flag4.Passed);
    GotoIf(L4, flag5.Passed);
    GotoIf(L5, flag6.Passed);
    GotoIf(L6, flag7.Passed);
    GotoIf(L7, flag8.Passed);
    GotoIf(L8, flag9.Passed);
L0:
    DeactivateObject(2101210, Enabled);
    WaitFixedTimeFrames(45);
    SetEventFlag(70000221, ON);
    WaitFor(!EventFlag(94105500));
    Goto(L9);
L1:
    DeactivateObject(2101211, Enabled);
    WaitFixedTimeFrames(45);
    SetEventFlag(70000221, ON);
    WaitFor(!EventFlag(94105500));
    Goto(L9);
L2:
    DeactivateObject(2101212, Enabled);
    WaitFixedTimeFrames(45);
    SetEventFlag(70000221, ON);
    WaitFor(!EventFlag(94105500));
    Goto(L9);
L3:
    DeactivateObject(2101213, Enabled);
    WaitFixedTimeFrames(45);
    SetEventFlag(70000221, ON);
    WaitFor(!EventFlag(94105503));
    Goto(L9);
L4:
    DeactivateObject(2101214, Enabled);
    WaitFixedTimeFrames(45);
    SetEventFlag(70000221, ON);
    WaitFor(!EventFlag(94105504));
    Goto(L9);
L5:
    DeactivateObject(2101215, Enabled);
    WaitFixedTimeFrames(45);
    SetEventFlag(70000221, ON);
    WaitFor(!EventFlag(94105505));
    Goto(L9);
L6:
    DeactivateObject(2101216, Enabled);
    WaitFixedTimeFrames(45);
    SetEventFlag(70000221, ON);
    WaitFor(!EventFlag(94105502));
    Goto(L9);
L7:
    DeactivateObject(2101217, Enabled);
    WaitFixedTimeFrames(45);
    SetEventFlag(70000221, ON);
    WaitFor(!EventFlag(94105507));
    Goto(L9);
L8:
    DeactivateObject(2101218, Enabled);
    WaitFixedTimeFrames(45);
    SetEventFlag(70000221, ON);
    WaitFor(!EventFlag(94105501));
L9:
    SpawnOneshotSFX(TargetEntityType.Character, 2100955, 200, 351);
    RestartEvent();
});

// 聖杯セット_02（チャネルダンジョン2）
$Event(12105012, Restart, function() {
    DeactivateObject(2101220, Disabled);
    DeactivateObject(2101221, Disabled);
    DeactivateObject(2101222, Disabled);
    DeactivateObject(2101223, Disabled);
    DeactivateObject(2101224, Disabled);
    DeactivateObject(2101225, Disabled);
    DeactivateObject(2101226, Disabled);
    DeactivateObject(2101227, Disabled);
    DeactivateObject(2101228, Disabled);
    GotoIf(L0, EventFlag(94205500) && AnyBatchEventFlags(94205100, 94205101));
    GotoIf(L1, EventFlag(94205500) && AnyBatchEventFlags(94205103, 94205104));
    GotoIf(L2, EventFlag(94205500) && EventFlag(94205102));
    GotoIf(L3, EventFlag(94205503));
    GotoIf(L4, EventFlag(94205504));
    GotoIf(L5, EventFlag(94205505));
    GotoIf(L6, EventFlag(94205502));
    GotoIf(L7, EventFlag(94205507));
    GotoIf(L8, EventFlag(94205501));
    flag = EventFlag(94205500) && AnyBatchEventFlags(94205100, 94205101);
    flag2 = EventFlag(94205500) && AnyBatchEventFlags(94205103, 94205104);
    flag3 = EventFlag(94205500) && EventFlag(94205102);
    flag4 = EventFlag(94205503);
    flag5 = EventFlag(94205504);
    flag6 = EventFlag(94205505);
    flag7 = EventFlag(94205502);
    flag8 = EventFlag(94205507);
    flag9 = EventFlag(94205501);
    WaitFor(flag || flag2 || flag3 || flag4 || flag5 || flag6 || flag7 || flag8 || flag9);
    WaitFixedTimeFrames(31);
    SpawnOneshotSFX(TargetEntityType.Character, 2100956, 200, 350);
    GotoIf(L0, flag.Passed);
    GotoIf(L1, flag2.Passed);
    GotoIf(L2, flag3.Passed);
    GotoIf(L3, flag4.Passed);
    GotoIf(L4, flag5.Passed);
    GotoIf(L5, flag6.Passed);
    GotoIf(L6, flag7.Passed);
    GotoIf(L7, flag8.Passed);
    GotoIf(L8, flag9.Passed);
L0:
    DeactivateObject(2101220, Enabled);
    WaitFixedTimeFrames(45);
    SetEventFlag(70000222, ON);
    WaitFor(!EventFlag(94205500));
    Goto(L9);
L1:
    DeactivateObject(2101221, Enabled);
    WaitFixedTimeFrames(45);
    SetEventFlag(70000222, ON);
    WaitFor(!EventFlag(94205500));
    Goto(L9);
L2:
    DeactivateObject(2101222, Enabled);
    WaitFixedTimeFrames(45);
    SetEventFlag(70000222, ON);
    WaitFor(!EventFlag(94205500));
    Goto(L9);
L3:
    DeactivateObject(2101223, Enabled);
    WaitFixedTimeFrames(45);
    SetEventFlag(70000222, ON);
    WaitFor(!EventFlag(94205503));
    Goto(L9);
L4:
    DeactivateObject(2101224, Enabled);
    WaitFixedTimeFrames(45);
    SetEventFlag(70000222, ON);
    WaitFor(!EventFlag(94205504));
    Goto(L9);
L5:
    DeactivateObject(2101225, Enabled);
    WaitFixedTimeFrames(45);
    SetEventFlag(70000222, ON);
    WaitFor(!EventFlag(94205505));
    Goto(L9);
L6:
    DeactivateObject(2101226, Enabled);
    WaitFixedTimeFrames(45);
    SetEventFlag(70000222, ON);
    WaitFor(!EventFlag(94205502));
    Goto(L9);
L7:
    DeactivateObject(2101227, Enabled);
    WaitFixedTimeFrames(45);
    SetEventFlag(70000222, ON);
    WaitFor(!EventFlag(94205507));
    Goto(L9);
L8:
    DeactivateObject(2101228, Enabled);
    WaitFixedTimeFrames(45);
    SetEventFlag(70000222, ON);
    WaitFor(!EventFlag(94205501));
L9:
    SpawnOneshotSFX(TargetEntityType.Character, 2100956, 200, 351);
    RestartEvent();
});

// 聖杯セット_03（チャネルダンジョン3）
$Event(12105013, Restart, function() {
    DeactivateObject(2101230, Disabled);
    DeactivateObject(2101231, Disabled);
    DeactivateObject(2101232, Disabled);
    DeactivateObject(2101233, Disabled);
    DeactivateObject(2101234, Disabled);
    DeactivateObject(2101235, Disabled);
    DeactivateObject(2101236, Disabled);
    DeactivateObject(2101237, Disabled);
    DeactivateObject(2101238, Disabled);
    GotoIf(L0, EventFlag(94305500) && AnyBatchEventFlags(94305100, 94305101));
    GotoIf(L1, EventFlag(94305500) && AnyBatchEventFlags(94305103, 94305104));
    GotoIf(L2, EventFlag(94305500) && EventFlag(94305102));
    GotoIf(L3, EventFlag(94305503));
    GotoIf(L4, EventFlag(94305504));
    GotoIf(L5, EventFlag(94305505));
    GotoIf(L6, EventFlag(94305502));
    GotoIf(L7, EventFlag(94305507));
    GotoIf(L8, EventFlag(94305501));
    flag = EventFlag(94305500) && AnyBatchEventFlags(94305100, 94305101);
    flag2 = EventFlag(94305500) && AnyBatchEventFlags(94305103, 94305104);
    flag3 = EventFlag(94305500) && EventFlag(94305102);
    flag4 = EventFlag(94305503);
    flag5 = EventFlag(94305504);
    flag6 = EventFlag(94305505);
    flag7 = EventFlag(94305502);
    flag8 = EventFlag(94305507);
    flag9 = EventFlag(94305501);
    WaitFor(flag || flag2 || flag3 || flag4 || flag5 || flag6 || flag7 || flag8 || flag9);
    WaitFixedTimeFrames(31);
    SpawnOneshotSFX(TargetEntityType.Character, 2100957, 200, 350);
    GotoIf(L0, flag.Passed);
    GotoIf(L1, flag2.Passed);
    GotoIf(L2, flag3.Passed);
    GotoIf(L3, flag4.Passed);
    GotoIf(L4, flag5.Passed);
    GotoIf(L5, flag6.Passed);
    GotoIf(L6, flag7.Passed);
    GotoIf(L7, flag8.Passed);
    GotoIf(L8, flag9.Passed);
L0:
    DeactivateObject(2101230, Enabled);
    WaitFixedTimeFrames(45);
    SetEventFlag(70000223, ON);
    WaitFor(!EventFlag(94305500));
    Goto(L9);
L1:
    DeactivateObject(2101231, Enabled);
    WaitFixedTimeFrames(45);
    SetEventFlag(70000223, ON);
    WaitFor(!EventFlag(94305500));
    Goto(L9);
L2:
    DeactivateObject(2101232, Enabled);
    WaitFixedTimeFrames(45);
    SetEventFlag(70000223, ON);
    WaitFor(!EventFlag(94305500));
    Goto(L9);
L3:
    DeactivateObject(2101233, Enabled);
    WaitFixedTimeFrames(45);
    SetEventFlag(70000223, ON);
    WaitFor(!EventFlag(94305503));
    Goto(L9);
L4:
    DeactivateObject(2101234, Enabled);
    WaitFixedTimeFrames(45);
    SetEventFlag(70000223, ON);
    WaitFor(!EventFlag(94305504));
    Goto(L9);
L5:
    DeactivateObject(2101235, Enabled);
    WaitFixedTimeFrames(45);
    SetEventFlag(70000223, ON);
    WaitFor(!EventFlag(94305505));
    Goto(L9);
L6:
    DeactivateObject(2101236, Enabled);
    WaitFixedTimeFrames(45);
    SetEventFlag(70000223, ON);
    WaitFor(!EventFlag(94305502));
    Goto(L9);
L7:
    DeactivateObject(2101237, Enabled);
    WaitFixedTimeFrames(45);
    SetEventFlag(70000223, ON);
    WaitFor(!EventFlag(94305507));
    Goto(L9);
L8:
    DeactivateObject(2101238, Enabled);
    WaitFixedTimeFrames(45);
    SetEventFlag(70000223, ON);
    WaitFor(!EventFlag(94305501));
L9:
    SpawnOneshotSFX(TargetEntityType.Character, 2100957, 200, 351);
    RestartEvent();
});

// 聖杯セット_04（チャネルダンジョン4）
$Event(12105014, Restart, function() {
    DeactivateObject(2101240, Disabled);
    DeactivateObject(2101241, Disabled);
    DeactivateObject(2101242, Disabled);
    DeactivateObject(2101243, Disabled);
    DeactivateObject(2101244, Disabled);
    DeactivateObject(2101245, Disabled);
    DeactivateObject(2101246, Disabled);
    DeactivateObject(2101247, Disabled);
    DeactivateObject(2101248, Disabled);
    GotoIf(L0, EventFlag(94405500) && AnyBatchEventFlags(94405100, 94405101));
    GotoIf(L1, EventFlag(94405500) && AnyBatchEventFlags(94405103, 94405104));
    GotoIf(L2, EventFlag(94405500) && EventFlag(94405102));
    GotoIf(L3, EventFlag(94405503));
    GotoIf(L4, EventFlag(94405504));
    GotoIf(L5, EventFlag(94405505));
    GotoIf(L6, EventFlag(94405502));
    GotoIf(L7, EventFlag(94405507));
    GotoIf(L8, EventFlag(94405501));
    flag = EventFlag(94405500) && AnyBatchEventFlags(94405100, 94405101);
    flag2 = EventFlag(94405500) && AnyBatchEventFlags(94405103, 94405104);
    flag3 = EventFlag(94405500) && EventFlag(94405102);
    flag4 = EventFlag(94405503);
    flag5 = EventFlag(94405504);
    flag6 = EventFlag(94405505);
    flag7 = EventFlag(94405502);
    flag8 = EventFlag(94405507);
    flag9 = EventFlag(94405501);
    WaitFor(flag || flag2 || flag3 || flag4 || flag5 || flag6 || flag7 || flag8 || flag9);
    WaitFixedTimeFrames(31);
    SpawnOneshotSFX(TargetEntityType.Character, 2100958, 200, 350);
    GotoIf(L0, flag.Passed);
    GotoIf(L1, flag2.Passed);
    GotoIf(L2, flag3.Passed);
    GotoIf(L3, flag4.Passed);
    GotoIf(L4, flag5.Passed);
    GotoIf(L5, flag6.Passed);
    GotoIf(L6, flag7.Passed);
    GotoIf(L7, flag8.Passed);
    GotoIf(L8, flag9.Passed);
L0:
    DeactivateObject(2101240, Enabled);
    WaitFixedTimeFrames(45);
    SetEventFlag(70000224, ON);
    WaitFor(!EventFlag(94405500));
    Goto(L9);
L1:
    DeactivateObject(2101241, Enabled);
    WaitFixedTimeFrames(45);
    SetEventFlag(70000224, ON);
    WaitFor(!EventFlag(94405500));
    Goto(L9);
L2:
    DeactivateObject(2101242, Enabled);
    WaitFixedTimeFrames(45);
    SetEventFlag(70000224, ON);
    WaitFor(!EventFlag(94405500));
    Goto(L9);
L3:
    DeactivateObject(2101243, Enabled);
    WaitFixedTimeFrames(45);
    SetEventFlag(70000224, ON);
    WaitFor(!EventFlag(94405503));
    Goto(L9);
L4:
    DeactivateObject(2101244, Enabled);
    WaitFixedTimeFrames(45);
    SetEventFlag(70000224, ON);
    WaitFor(!EventFlag(94405504));
    Goto(L9);
L5:
    DeactivateObject(2101245, Enabled);
    WaitFixedTimeFrames(45);
    SetEventFlag(70000224, ON);
    WaitFor(!EventFlag(94405505));
    Goto(L9);
L6:
    DeactivateObject(2101246, Enabled);
    WaitFixedTimeFrames(45);
    SetEventFlag(70000224, ON);
    WaitFor(!EventFlag(94405502));
    Goto(L9);
L7:
    DeactivateObject(2101247, Enabled);
    WaitFixedTimeFrames(45);
    SetEventFlag(70000224, ON);
    WaitFor(!EventFlag(94405507));
    Goto(L9);
L8:
    DeactivateObject(2101248, Enabled);
    WaitFixedTimeFrames(45);
    SetEventFlag(70000224, ON);
    WaitFor(!EventFlag(94405501));
L9:
    SpawnOneshotSFX(TargetEntityType.Character, 2100958, 200, 351);
    RestartEvent();
});

// 聖杯セット_05（チャネルダンジョン5）
$Event(12105015, Restart, function() {
    DeactivateObject(2101250, Disabled);
    DeactivateObject(2101251, Disabled);
    DeactivateObject(2101252, Disabled);
    DeactivateObject(2101253, Disabled);
    DeactivateObject(2101254, Disabled);
    DeactivateObject(2101255, Disabled);
    DeactivateObject(2101256, Disabled);
    DeactivateObject(2101257, Disabled);
    DeactivateObject(2101258, Disabled);
    GotoIf(L0, EventFlag(94505500) && AnyBatchEventFlags(94505100, 94505101));
    GotoIf(L1, EventFlag(94505500) && AnyBatchEventFlags(94505103, 94505104));
    GotoIf(L2, EventFlag(94505500) && EventFlag(94505102));
    GotoIf(L3, EventFlag(94505503));
    GotoIf(L4, EventFlag(94505504));
    GotoIf(L5, EventFlag(94505505));
    GotoIf(L6, EventFlag(94505502));
    GotoIf(L7, EventFlag(94505507));
    GotoIf(L8, EventFlag(94505501));
    flag = EventFlag(94505500) && AnyBatchEventFlags(94505100, 94505101);
    flag2 = EventFlag(94505500) && AnyBatchEventFlags(94505103, 94505104);
    flag3 = EventFlag(94505500) && EventFlag(94505102);
    flag4 = EventFlag(94505503);
    flag5 = EventFlag(94505504);
    flag6 = EventFlag(94505505);
    flag7 = EventFlag(94505502);
    flag8 = EventFlag(94505507);
    flag9 = EventFlag(94505501);
    WaitFor(flag || flag2 || flag3 || flag4 || flag5 || flag6 || flag7 || flag8 || flag9);
    WaitFixedTimeFrames(31);
    SpawnOneshotSFX(TargetEntityType.Character, 2100959, 200, 350);
    GotoIf(L0, flag.Passed);
    GotoIf(L1, flag2.Passed);
    GotoIf(L2, flag3.Passed);
    GotoIf(L3, flag4.Passed);
    GotoIf(L4, flag5.Passed);
    GotoIf(L5, flag6.Passed);
    GotoIf(L6, flag7.Passed);
    GotoIf(L7, flag8.Passed);
    GotoIf(L8, flag9.Passed);
L0:
    DeactivateObject(2101250, Enabled);
    WaitFixedTimeFrames(45);
    SetEventFlag(70000225, ON);
    WaitFor(!EventFlag(94505500));
    Goto(L9);
L1:
    DeactivateObject(2101251, Enabled);
    WaitFixedTimeFrames(45);
    SetEventFlag(70000225, ON);
    WaitFor(!EventFlag(94505500));
    Goto(L9);
L2:
    DeactivateObject(2101252, Enabled);
    WaitFixedTimeFrames(45);
    SetEventFlag(70000225, ON);
    WaitFor(!EventFlag(94505500));
    Goto(L9);
L3:
    DeactivateObject(2101253, Enabled);
    WaitFixedTimeFrames(45);
    SetEventFlag(70000225, ON);
    WaitFor(!EventFlag(94505503));
    Goto(L9);
L4:
    DeactivateObject(2101254, Enabled);
    WaitFixedTimeFrames(45);
    SetEventFlag(70000225, ON);
    WaitFor(!EventFlag(94505504));
    Goto(L9);
L5:
    DeactivateObject(2101255, Enabled);
    WaitFixedTimeFrames(45);
    SetEventFlag(70000225, ON);
    WaitFor(!EventFlag(94505505));
    Goto(L9);
L6:
    DeactivateObject(2101256, Enabled);
    WaitFixedTimeFrames(45);
    SetEventFlag(70000225, ON);
    WaitFor(!EventFlag(94505502));
    Goto(L9);
L7:
    DeactivateObject(2101257, Enabled);
    WaitFixedTimeFrames(45);
    SetEventFlag(70000225, ON);
    WaitFor(!EventFlag(94505507));
    Goto(L9);
L8:
    DeactivateObject(2101258, Enabled);
    WaitFixedTimeFrames(45);
    SetEventFlag(70000225, ON);
    WaitFor(!EventFlag(94505501));
L9:
    SpawnOneshotSFX(TargetEntityType.Character, 2100959, 200, 351);
    RestartEvent();
});

// 聖杯セット_06（チャネルダンジョン6）
$Event(12105016, Restart, function() {
    DeactivateObject(2101260, Disabled);
    DeactivateObject(2101261, Disabled);
    DeactivateObject(2101262, Disabled);
    DeactivateObject(2101263, Disabled);
    DeactivateObject(2101264, Disabled);
    DeactivateObject(2101265, Disabled);
    DeactivateObject(2101266, Disabled);
    DeactivateObject(2101267, Disabled);
    DeactivateObject(2101268, Disabled);
    GotoIf(L0, EventFlag(94605500) && AnyBatchEventFlags(94605100, 94605101));
    GotoIf(L1, EventFlag(94605500) && AnyBatchEventFlags(94605103, 94605104));
    GotoIf(L2, EventFlag(94605500) && EventFlag(94605102));
    GotoIf(L3, EventFlag(94605503));
    GotoIf(L4, EventFlag(94605504));
    GotoIf(L5, EventFlag(94605505));
    GotoIf(L6, EventFlag(94605502));
    GotoIf(L7, EventFlag(94605507));
    GotoIf(L8, EventFlag(94605501));
    flag = EventFlag(94605500) && AnyBatchEventFlags(94605100, 94605101);
    flag2 = EventFlag(94605500) && AnyBatchEventFlags(94605103, 94605104);
    flag3 = EventFlag(94605500) && EventFlag(94605102);
    flag4 = EventFlag(94605503);
    flag5 = EventFlag(94605504);
    flag6 = EventFlag(94605505);
    flag7 = EventFlag(94605502);
    flag8 = EventFlag(94605507);
    flag9 = EventFlag(94605501);
    WaitFor(flag || flag2 || flag3 || flag4 || flag5 || flag6 || flag7 || flag8 || flag9);
    WaitFixedTimeFrames(31);
    SpawnOneshotSFX(TargetEntityType.Character, 2100960, 200, 350);
    GotoIf(L0, flag.Passed);
    GotoIf(L1, flag2.Passed);
    GotoIf(L2, flag3.Passed);
    GotoIf(L3, flag4.Passed);
    GotoIf(L4, flag5.Passed);
    GotoIf(L5, flag6.Passed);
    GotoIf(L6, flag7.Passed);
    GotoIf(L7, flag8.Passed);
    GotoIf(L8, flag9.Passed);
L0:
    DeactivateObject(2101260, Enabled);
    WaitFixedTimeFrames(45);
    SetEventFlag(70000226, ON);
    WaitFor(!EventFlag(94605500));
    Goto(L9);
L1:
    DeactivateObject(2101261, Enabled);
    WaitFixedTimeFrames(45);
    SetEventFlag(70000226, ON);
    WaitFor(!EventFlag(94605500));
    Goto(L9);
L2:
    DeactivateObject(2101262, Enabled);
    WaitFixedTimeFrames(45);
    SetEventFlag(70000226, ON);
    WaitFor(!EventFlag(94605500));
    Goto(L9);
L3:
    DeactivateObject(2101263, Enabled);
    WaitFixedTimeFrames(45);
    SetEventFlag(70000226, ON);
    WaitFor(!EventFlag(94605503));
    Goto(L9);
L4:
    DeactivateObject(2101264, Enabled);
    WaitFixedTimeFrames(45);
    SetEventFlag(70000226, ON);
    WaitFor(!EventFlag(94605504));
    Goto(L9);
L5:
    DeactivateObject(2101265, Enabled);
    WaitFixedTimeFrames(45);
    SetEventFlag(70000226, ON);
    WaitFor(!EventFlag(94605505));
    Goto(L9);
L6:
    DeactivateObject(2101266, Enabled);
    WaitFixedTimeFrames(45);
    SetEventFlag(70000226, ON);
    WaitFor(!EventFlag(94605502));
    Goto(L9);
L7:
    DeactivateObject(2101267, Enabled);
    WaitFixedTimeFrames(45);
    SetEventFlag(70000226, ON);
    WaitFor(!EventFlag(94605507));
    Goto(L9);
L8:
    DeactivateObject(2101268, Enabled);
    WaitFixedTimeFrames(45);
    SetEventFlag(70000226, ON);
    WaitFor(!EventFlag(94605501));
L9:
    SpawnOneshotSFX(TargetEntityType.Character, 2100960, 200, 351);
    RestartEvent();
});

// 墓石メッセンジャーアニメ可否判定_墓石0
$Event(12105020, Restart, function() {
    WaitFor(
        EventFlag(12417810)
            || EventFlag(12417830)
            || EventFlag(12417850)
            || EventFlag(12417870)
            || EventFlag(12407810)
            || EventFlag(12407830)
            || EventFlag(12427810)
            || EventFlag(12427830)
            || EventFlag(12427850)
            || EventFlag(12307810)
            || EventFlag(12307830)
            || EventFlag(12307850));
    SetEventFlag(12105030, ON);
    WaitFor(
        !(EventFlag(12417810)
            || EventFlag(12417830)
            || EventFlag(12417850)
            || EventFlag(12417870)
            || EventFlag(12407810)
            || EventFlag(12407830)
            || EventFlag(12427810)
            || EventFlag(12427830)
            || EventFlag(12427850)
            || EventFlag(12307810)
            || EventFlag(12307830)
            || EventFlag(12307850)));
    SetEventFlag(12105030, OFF);
    RestartEvent();
});

// 墓石メッセンジャーアニメ可否判定_墓石1
$Event(12105021, Restart, function() {
    WaitFor(
        EventFlag(12207810)
            || EventFlag(12207830)
            || EventFlag(12707810)
            || EventFlag(12707830)
            || EventFlag(13207810)
            || EventFlag(13207850));
    SetEventFlag(12105031, ON);
    WaitFor(
        !(EventFlag(12207810)
            || EventFlag(12207830)
            || EventFlag(12707810)
            || EventFlag(12707830)
            || EventFlag(13207810)
            || EventFlag(13207850)));
    SetEventFlag(12105031, OFF);
    RestartEvent();
});

// 墓石メッセンジャーアニメ可否判定_墓石2
$Event(12105022, Restart, function() {
    WaitFor(
        EventFlag(12807810)
            || EventFlag(12807830)
            || EventFlag(12807850)
            || EventFlag(12807870)
            || EventFlag(12507810)
            || EventFlag(12507830)
            || EventFlag(12507850)
            || EventFlag(12117810));
    SetEventFlag(12105032, ON);
    WaitFor(
        !(EventFlag(12807810)
            || EventFlag(12807830)
            || EventFlag(12807850)
            || EventFlag(12807870)
            || EventFlag(12507810)
            || EventFlag(12507830)
            || EventFlag(12507850)
            || EventFlag(12117810)));
    SetEventFlag(12105032, OFF);
    RestartEvent();
});

// 墓石メッセンジャーアニメ可否判定_墓石3
$Event(12105023, Restart, function() {
    WaitFor(
        EventFlag(13207830)
            || EventFlag(13207870)
            || EventFlag(13307810)
            || EventFlag(13307830)
            || EventFlag(12607810)
            || EventFlag(12607830)
            || EventFlag(12607850)
            || EventFlag(12607870)
            || EventFlag(13307810));
    SetEventFlag(12105033, ON);
    WaitFor(
        !(EventFlag(13207830)
            || EventFlag(13207870)
            || EventFlag(13307810)
            || EventFlag(13307830)
            || EventFlag(12607810)
            || EventFlag(12607830)
            || EventFlag(12607850)
            || EventFlag(12607870)
            || EventFlag(13307810)));
    SetEventFlag(12105033, OFF);
    RestartEvent();
});

// 墓石メッセンジャーアニメ可否判定_墓石4
$Event(12105024, Restart, function() {
    WaitFor(
        EventFlag(13407810)
            || EventFlag(13407830)
            || EventFlag(13407850)
            || EventFlag(13407870)
            || EventFlag(13507810)
            || EventFlag(13507830)
            || EventFlag(13507850)
            || EventFlag(13607810)
            || EventFlag(13607830)
            || EventFlag(13607850));
    SetEventFlag(12105034, ON);
    WaitFor(
        !(EventFlag(13407810)
            || EventFlag(13407830)
            || EventFlag(13407850)
            || EventFlag(13407870)
            || EventFlag(13507810)
            || EventFlag(13507830)
            || EventFlag(13507850)
            || EventFlag(13607810)
            || EventFlag(13607830)
            || EventFlag(13607850)));
    SetEventFlag(12105034, OFF);
    RestartEvent();
});

// 売買メッセンジャーアニメ
$Event(12105040, Restart, function() {
    ForceAnimationPlayback(2100211, 7001, true, false, false);
    ForceAnimationPlayback(2100212, 7002, true, false, false);
    ForceAnimationPlayback(2100213, 7041, true, false, false);
    WaitFor(EventFlag(12105041));
    ForceAnimationPlayback(2100211, 7005, false, false, false);
    ForceAnimationPlayback(2100212, 7006, false, false, false);
    ForceAnimationPlayback(2100213, 7045, false, false, false);
    WaitFixedTimeFrames(29);
    ForceAnimationPlayback(2100211, 7003, true, false, false);
    ForceAnimationPlayback(2100212, 7004, true, false, false);
    ForceAnimationPlayback(2100213, 7043, true, false, false);
    WaitFor(!EventFlag(12105041));
    ForceAnimationPlayback(2100211, 7007, false, false, false);
    ForceAnimationPlayback(2100212, 7008, false, false, false);
    ForceAnimationPlayback(2100213, 7047, false, false, false);
    WaitFixedTimeFrames(28);
    RestartEvent();
});

// 売買メッセンジャー_ラインナップ拡充_XX
$Event(12101000, Default, function(itemId, chrEntityId, bitNumber, bitNumber2) {
    EndIf(ThisEventSlot());
    WaitFor(CharacterBackreadStatus(chrEntityId));
    ChangeCharacterDispmask(chrEntityId, bitNumber, OFF);
    ChangeCharacterDispmask(chrEntityId, bitNumber2, OFF);
    WaitFor(PlayerHasItem(ItemType.Goods, itemId));
    ChangeCharacterDispmask(chrEntityId, bitNumber, ON);
    ChangeCharacterDispmask(chrEntityId, bitNumber2, ON);
});

// 売買メッセンジャー＿ラインナップ拡充_時間帯フラグ
$Event(12101010, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(!CharacterType(10000, TargetType.Alive));
    if (EventFlag(9800)) {
        SetEventFlag(5900, ON);
    }
    if (EventFlag(9801)) {
        SetEventFlag(5901, ON);
    }
    if (EventFlag(9802)) {
        SetEventFlag(5902, ON);
    }
    if (EventFlag(12801800)) {
        SetEventFlag(5903, ON);
    }
    if (EventFlag(12601800)) {
        SetEventFlag(5904, ON);
    }
    if (EventFlag(6603)) {
        BatchSetEventFlags(5900, 5904, ON);
    }
});

// 売買メッセンジャー（SAN値）アニメ
$Event(12105043, Restart, function() {
    SetNetworkSyncState(Disabled);
    EndIf(!CharacterType(10000, TargetType.Alive));
    if (!EventFlag(12100320)) {
        ForceAnimationPlayback(2100219, 7030, true, false, false);
        EndIf(HasMultiplayerState(MultiplayerState.Client));
        WaitFor(PlayerInsightAmount() >= 1);
        SetEventFlag(12100320, ON);
        ForceAnimationPlayback(2100219, 7031, false, false, false);
        WaitFixedTimeFrames(30);
        SetEventFlag(12105045, ON);
        WaitFixedTimeFrames(79);
    }
L0:
    SetEventFlag(12105045, ON);
    ForceAnimationPlayback(2100219, 7032, true, false, false);
    WaitFor(EventFlag(12105044));
    ForceAnimationPlayback(2100219, 7034, false, false, false);
    WaitFixedTimeFrames(29);
    ForceAnimationPlayback(2100219, 7035, true, false, false);
    WaitFor(!EventFlag(12105044));
    ForceAnimationPlayback(2100219, 7036, false, false, false);
    WaitFixedTimeFrames(28);
    RestartEvent();
});

// 右手武器くれるメッセンジャーアニメ
$Event(12101020, Default, function() {
    if (!ThisEvent()) {
        ForceAnimationPlayback(2100215, 7013, true, false, false);
        ForceAnimationPlayback(2100220, 7013, true, false, false);
        WaitFor(
            CharacterBackreadStatus(2100215)
                && CharacterType(10000, TargetType.Alive)
                && EntityInRadiusOfEntity(10000, 2100215, 6));
        ForceAnimationPlayback(2100215, 7014, false, false, false);
        ForceAnimationPlayback(2100220, 7014, false, false, false);
        WaitFixedTimeFrames(30);
        SetEventFlag(12105050, ON);
        WaitFixedTimeFrames(79);
        ForceAnimationPlayback(2100215, 7011, true, false, false);
        ForceAnimationPlayback(2100220, 7011, true, false, false);
        WaitFor(EventFlag(72101000) || EventFlag(72101001) || EventFlag(72101002));
        SetEventFlag(12105050, OFF);
        SetEventFlag(12101020, ON);
        ForceAnimationPlayback(2100215, 7012, false, false, false);
        ForceAnimationPlayback(2100220, 7012, false, false, false);
        WaitFixedTimeFrames(49);
    }
L0:
    SetCharacterBackreadState(2100215, true);
    SetCharacterBackreadState(2100220, true);
});

// 左手武器くれるメッセンジャーアニメ
$Event(12101021, Default, function() {
    if (!ThisEvent()) {
        ForceAnimationPlayback(2100216, 7023, true, false, false);
        ForceAnimationPlayback(2100221, 7023, true, false, false);
        WaitFor(
            CharacterBackreadStatus(2100216)
                && CharacterType(10000, TargetType.Alive)
                && EntityInRadiusOfEntity(10000, 2100216, 6));
        ForceAnimationPlayback(2100216, 7024, false, false, false);
        ForceAnimationPlayback(2100221, 7024, false, false, false);
        WaitFixedTimeFrames(30);
        SetEventFlag(12105051, ON);
        WaitFixedTimeFrames(79);
        ForceAnimationPlayback(2100216, 7021, true, false, false);
        ForceAnimationPlayback(2100221, 7021, true, false, false);
        WaitFor(EventFlag(72101010) || EventFlag(72101011));
        EventValueOperation(12104010, 8, 10, 0, 1, CalculationType.Assign);
        StoreItemAmountHeldInEventValue(ItemType.Goods, 900, 12104020, 8);
        EventValueOperation(12104010, 8, 0, 12104020, 8, CalculationType.Sub);
        WaitFor(EventValue(0, 1) == 0);
        if (CharacterType(10000, TargetType.Alive)) {
            DirectlyGivePlayerItem(ItemType.Goods, 900, 12104010, 8);
        }
        SetEventFlag(12105051, OFF);
        SetEventFlag(12101021, ON);
        ForceAnimationPlayback(2100216, 7022, false, false, false);
        ForceAnimationPlayback(2100221, 7022, false, false, false);
        WaitFixedTimeFrames(49);
    }
L0:
    SetCharacterBackreadState(2100216, true);
    SetCharacterBackreadState(2100221, true);
});

// 手記くれるメッセンジャーアニメ
$Event(12101022, Default, function() {
    if (!EventFlag(6620)) {
        ForceAnimationPlayback(2100230, 7053, true, false, false);
        WaitFor(
            CharacterBackreadStatus(2100230)
                && CharacterType(10000, TargetType.Alive)
                && EntityInRadiusOfEntity(10000, 2100230, 6));
        ForceAnimationPlayback(2100230, 7054, false, false, false);
        WaitFixedTimeFrames(30);
        SetEventFlag(12105052, ON);
        WaitFixedTimeFrames(79);
        ForceAnimationPlayback(2100230, 7051, true, false, false);
        WaitFor(EventFlag(12101023));
        if (CharacterType(10000, TargetType.Alive)) {
            AwardItemLot(10000);
        }
        SetEventFlag(12105052, OFF);
        ForceAnimationPlayback(2100230, 7052, false, false, false);
        WaitFixedTimeFrames(74);
    }
L0:
    ForceAnimationPlayback(2100230, 7053, true, false, false);
});

// マルチアイテムくれるメッセンジャーアニメ
$Event(12101024, Default, function() {
    if (!EventFlag(6622)) {
        ForceAnimationPlayback(2100231, 7053, true, false, false);
        WaitFor(CharacterBackreadStatus(2100231) && EventFlag(12100105));
        ForceAnimationPlayback(2100231, 7054, false, false, false);
        WaitFixedTimeFrames(30);
        SetEventFlag(12105054, ON);
        WaitFixedTimeFrames(79);
        ForceAnimationPlayback(2100231, 7051, true, false, false);
        WaitFor(EventFlag(12101025));
        if (CharacterType(10000, TargetType.Alive)) {
            AwardItemLot(10010);
        }
        SetEventFlag(12105054, OFF);
        ForceAnimationPlayback(2100231, 7052, false, false, false);
        WaitFixedTimeFrames(74);
    }
L0:
    ForceAnimationPlayback(2100231, 7053, true, false, false);
});

// NPC呼びの鐘くれるメッセンジャーアニメ
$Event(12101026, Default, function() {
    if (!EventFlag(6670)) {
        WaitFor(CharacterBackreadStatus(2100230) && EventFlag(12101022) && EventFlag(12100105));
        WaitFixedTimeFrames(1);
        ForceAnimationPlayback(2100230, 7054, false, false, false);
        WaitFixedTimeFrames(30);
        SetEventFlag(12105056, ON);
        WaitFixedTimeFrames(79);
        ForceAnimationPlayback(2100230, 7051, true, false, false);
        WaitFor(EventFlag(12101027));
        if (CharacterType(10000, TargetType.Alive)) {
            AwardItemLot(10050);
        }
        SetEventFlag(12105056, OFF);
        ForceAnimationPlayback(2100230, 7052, false, false, false);
        WaitFixedTimeFrames(74);
    }
L0:
    ForceAnimationPlayback(2100230, 7053, true, false, false);
});

// 聖Dへのワープアイテムくれるメッセンジャーアニメ
$Event(12101028, Default, function() {
    if (!EventFlag(50000100)) {
        WaitFor(
            CharacterBackreadStatus(2100231)
                && EventFlag(12101024)
                && EventFlag(9801)
                && EventFlag(6899)
                && CharacterType(10000, TargetType.Alive));
        WaitFixedTimeFrames(1);
        ForceAnimationPlayback(2100231, 7054, false, false, false);
        WaitFixedTimeFrames(30);
        SetEventFlag(12105058, ON);
        WaitFixedTimeFrames(79);
        ForceAnimationPlayback(2100231, 7051, true, false, false);
        WaitFor(EventFlag(12101029));
        if (CharacterType(10000, TargetType.Alive)) {
            AwardItemLot(10040);
        }
        SetEventFlag(12105058, OFF);
        ForceAnimationPlayback(2100231, 7052, false, false, false);
        WaitFixedTimeFrames(74);
    }
L0:
    ForceAnimationPlayback(2100231, 7053, true, false, false);
});

// 聖堂街Dへのワープアイテム販売開始
$Event(12101100, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(EventFlag(6899) && EventFlag(9801));
    SetEventFlag(12101101, ON);
});

// 着せ替えメッセンジャー_フラグ制御_裸専用
$Event(12105060, Restart, function() {
    SetNetworkSyncState(Disabled);
    EndIf(!CharacterType(10000, TargetType.Alive));
    SetEventFlag(12105061, OFF);
    WaitFor(EventFlag(72100140));
    SetEventFlag(12105061, ON);
    SetEventFlag(72100140, OFF);
    BatchSetEventFlags(6011, 6025, OFF);
    RotateCharacter(10000, 2100218, 101310, false);
    WaitFixedTimeSeconds(1);
    ForceAnimationPlayback(2100218, 7003, false, false, false);
    WaitFixedTimeFrames(39);
    ChangeCharacterDispmask(2100218, 20, OFF);
    ChangeCharacterDispmask(2100218, 21, OFF);
    ChangeCharacterDispmask(2100218, 22, OFF);
    ChangeCharacterDispmask(2100218, 23, OFF);
    ChangeCharacterDispmask(2100218, 24, OFF);
    ChangeCharacterDispmask(2100218, 25, OFF);
    ChangeCharacterDispmask(2100218, 26, OFF);
    ChangeCharacterDispmask(2100218, 27, OFF);
    ChangeCharacterDispmask(2100218, 28, OFF);
    ForceAnimationPlayback(2100218, 7004, false, false, false);
    WaitFixedTimeFrames(49);
    ForceAnimationPlayback(2100218, 7001, true, false, false);
    RestartEvent();
});

// 着せ替えメッセンジャー_アイテムを1つでも持っているか判定
$Event(12105062, Default, function() {
    SetNetworkSyncState(Disabled);
    if (!EventFlag(12105063)) {
        ForceAnimationPlayback(2100218, 0, true, false, false);
        EndIf(!CharacterType(10000, TargetType.Alive));
        if (EventFlag(6011)) {
            ChangeCharacterDispmask(2100218, 20, ON);
        }
        if (EventFlag(6012)) {
            ChangeCharacterDispmask(2100218, 21, ON);
        }
        if (EventFlag(6013)) {
            ChangeCharacterDispmask(2100218, 22, ON);
        }
        if (EventFlag(6014)) {
            ChangeCharacterDispmask(2100218, 23, ON);
        }
        if (EventFlag(6015)) {
            ChangeCharacterDispmask(2100218, 24, ON);
        }
        if (EventFlag(6016)) {
            ChangeCharacterDispmask(2100218, 25, ON);
        }
        if (EventFlag(6017)) {
            ChangeCharacterDispmask(2100218, 26, ON);
        }
        if (EventFlag(6018)) {
            ChangeCharacterDispmask(2100218, 27, ON);
        }
        if (EventFlag(6019)) {
            ChangeCharacterDispmask(2100218, 28, ON);
        }
        WaitFor(
            EventFlag(6071)
                || EventFlag(6072)
                || EventFlag(6073)
                || EventFlag(6074)
                || EventFlag(6075)
                || EventFlag(6076)
                || EventFlag(6077)
                || EventFlag(6078)
                || EventFlag(6079)
                || EventFlag(6080)
                || EventFlag(6081)
                || EventFlag(6082)
                || EventFlag(6083)
                || EventFlag(6084)
                || EventFlag(6085));
        ForceAnimationPlayback(2100218, 7004, false, false, false);
        WaitFixedTimeFrames(89);
    }
L0:
    ForceAnimationPlayback(2100218, 7001, true, false, false);
    EndIf(!CharacterType(10000, TargetType.Alive));
    SetEventFlag(12105063, ON);
    WaitFor(
        !(EventFlag(6071)
            || EventFlag(6072)
            || EventFlag(6073)
            || EventFlag(6074)
            || EventFlag(6075)
            || EventFlag(6076)
            || EventFlag(6077)
            || EventFlag(6078)
            || EventFlag(6079)
            || EventFlag(6080)
            || EventFlag(6081)
            || EventFlag(6082)
            || EventFlag(6083)
            || EventFlag(6084)
            || EventFlag(6085)));
    SetEventFlag(12105063, OFF);
    ForceAnimationPlayback(2100218, 7003, false, false, false);
    WaitFixedTimeFrames(39);
    RestartEvent();
});

// 着せ替えメッセンジャー_DLC有効判定
$Event(12105064, Default, function() {
    SetNetworkSyncState(Disabled);
    ForceAnimationPlayback(2100232, 7053, true, false, false);
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    WaitFor(
        (EventFlag(6900) && !EventFlag(6071))
            || (EventFlag(6901) && !EventFlag(6072))
            || (EventFlag(6902) && !EventFlag(6073)));
    ForceAnimationPlayback(2100232, 7054, false, false, false);
    WaitFixedTimeFrames(30);
    WaitFixedTimeFrames(79);
    ForceAnimationPlayback(2100232, 7051, true, false, false);
    WaitFor(CharacterType(10000, TargetType.Alive) && ActionButtonInArea(6025, 2100232));
    if (!EventFlag(6071)) {
        if (EventFlag(6900)) {
            AwardItemLot(2100900);
            SetEventFlag(6071, ON);
        }
    }
    if (!EventFlag(6072)) {
        if (EventFlag(6901)) {
            AwardItemLot(2100910);
            SetEventFlag(6072, ON);
        }
    }
    if (!EventFlag(6073)) {
        if (EventFlag(6902)) {
            AwardItemLot(2100920);
            SetEventFlag(6073, ON);
        }
    }
    ForceAnimationPlayback(2100232, 7052, false, false, false);
    WaitFixedTimeFrames(74);
L0:
    ChangeCharacterEnableState(2100232, Disabled);
});

// 着せ替えメッセンジャー_フラグ制御_裸以外
$Event(12105070, Restart, function(eventFlagId, eventFlagId2, bitNumber) {
    SetNetworkSyncState(Disabled);
    EndIf(!CharacterType(10000, TargetType.Alive));
    SetEventFlag(12105061, OFF);
    WaitFor(EventFlag(eventFlagId));
    SetEventFlag(12105061, ON);
    SetEventFlag(eventFlagId, OFF);
    BatchSetEventFlags(6011, 6025, OFF);
    RotateCharacter(10000, 2100218, 101310, false);
    WaitFixedTimeSeconds(1);
    ForceAnimationPlayback(2100218, 7003, false, false, false);
    WaitFixedTimeFrames(39);
    SetEventFlag(eventFlagId2, ON);
    ChangeCharacterDispmask(2100218, 20, OFF);
    ChangeCharacterDispmask(2100218, 21, OFF);
    ChangeCharacterDispmask(2100218, 22, OFF);
    ChangeCharacterDispmask(2100218, 23, OFF);
    ChangeCharacterDispmask(2100218, 24, OFF);
    ChangeCharacterDispmask(2100218, 25, OFF);
    ChangeCharacterDispmask(2100218, 26, OFF);
    ChangeCharacterDispmask(2100218, 27, OFF);
    ChangeCharacterDispmask(2100218, 28, OFF);
    ChangeCharacterDispmask(2100218, bitNumber, ON);
    ForceAnimationPlayback(2100218, 7004, false, false, false);
    WaitFixedTimeFrames(49);
    ForceAnimationPlayback(2100218, 7001, true, false, false);
    RestartEvent();
});

// 人形のヒロイン_座り状態判定
$Event(12105200, Default, function() {
    SetEventFlag(12105200, OFF);
    WaitFor(CharacterHasSpEffect(2100700, 153));
    WaitFixedTimeFrames(1);
});

// アイテムエンチャント効果消去
$Event(12105210, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(EventFlag(70000100));
    SetEventFlag(70000100, OFF);
    ClearSpEffect(10000, 2200);
    ClearSpEffect(10000, 2210);
    ClearSpEffect(10000, 2220);
    RestartEvent();
});

// 汎聖杯ダンジョン解禁
$Event(12105300, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    if (EventFlag(5020)) {
        SetEventFlag(6228, ON);
    }
    if (EventFlag(5021)) {
        SetEventFlag(6235, ON);
    }
    if (EventFlag(5023) || EventFlag(70009200)) {
        SetEventFlag(6242, ON);
    }
    if (EventFlag(5027)) {
        SetEventFlag(6249, ON);
    }
    if (EventFlag(5029) || EventFlag(70009220)) {
        SetEventFlag(6256, ON);
    }
    if (EventFlag(5022)) {
        SetEventFlag(6236, ON);
    }
    if (EventFlag(5025) || EventFlag(70009210)) {
        SetEventFlag(6243, ON);
    }
    if (EventFlag(5028)) {
        SetEventFlag(6251, ON);
    }
    if (EventFlag(5031) || EventFlag(70009230)) {
        SetEventFlag(6258, ON);
    }
    if (EventFlag(5033) || EventFlag(70009240)) {
        SetEventFlag(6259, ON);
    }
});

// 聖杯メッセンジャー_XX
$Event(12105310, Restart, function(eventFlagId, entityId) {
    WaitFor(EventFlag(eventFlagId));
    WaitFixedTimeFrames(31);
    ForceAnimationPlayback(entityId, 7000, false, false, false);
    WaitFixedTimeFrames(109);
    ForceAnimationPlayback(entityId, 7001, true, false, false);
    WaitFor(!EventFlag(eventFlagId));
    ForceAnimationPlayback(entityId, 7002, false, false, false);
    WaitFixedTimeFrames(74);
    RestartEvent();
});

// ワープOBJ_地上へのワープ_XX
$Event(12107000, Default, function(eventFlagId, entityId, entityId2) {
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    WaitFor(EventFlag(eventFlagId));
    RotateCharacter(10000, entityId, 101164, false);
    WaitFixedTimeSeconds(4);
    WarpPlayerToRespawnPoint(entityId2);
});

// ワープOBJ_ダンジョンへのワープ_前半_XX
$Event(12107100, Default, function(eventFlagId, entityId, eventFlagId2) {
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    WaitFor(EventFlag(eventFlagId));
    WaitFixedTimeSeconds(4);
    SetEventFlag(9020, OFF);
    SetEventFlag(9021, OFF);
    SetEventFlag(9022, OFF);
    SetEventFlag(9023, OFF);
    SetEventFlag(9024, OFF);
    SetEventFlag(9025, OFF);
    SetEventFlag(9026, OFF);
    SetEventFlag(eventFlagId2, ON);
    SetEventFlag(eventFlagId, OFF);
    EndEvent();
    RotateCharacter(10000, entityId, 101164, false);
});

// ワープOBJ_ダンジョンへのワープ_後半_XX
$Event(12107200, Default, function(eventFlagId, entityId, eventFlagId2) {
    WaitFor(EventFlag(eventFlagId));
    SetEventFlag(eventFlagId, OFF);
    WarpPlayerToRespawnPoint(entityId);
    SetEventFlag(eventFlagId2, ON);
});


