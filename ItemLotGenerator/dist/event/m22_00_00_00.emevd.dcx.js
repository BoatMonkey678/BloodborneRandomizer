// ==EMEVD==
// @docs    bb-common.emedf.json
// @compress    DCX_DFLT_10000_44_9
// @game    Bloodborne
// @string    "クリア時間_通し\u0000クリア時間_1プレイ\u0000ボス_撃破\u0000PC情報_ボス撃破_アイコレクター\u0000ボス_戦闘開始\u0000ボス戦_撃破時間\u0000ギミック_m22_最初の門を開けた\u0000ギミック_m22_SC開通\u0000ギミック_エレベーター起動\u0000PC情報_墓地街到達\u0000N:\\SPRJ\\data\\Param\\event\\common.emevd\u0000\u0000\u0000\u0000\u0000"
// @linked    [236]
// @version    3.6.2
// ==/EMEVD==

// コンストラクタ
$Event(0, Default, function() {
    $InitializeEvent(0, 7000, 2200950, 2201950, 999, 12207800);
    $InitializeEvent(1, 7000, 2200951, 2201951, 12201800, 12207820);
    $InitializeEvent(0, 7100, 72200200, 2201950);
    $InitializeEvent(1, 7100, 72200201, 2201951);
    $InitializeEvent(0, 7200, 72200100, 2201950, 2102951);
    $InitializeEvent(1, 7200, 72200101, 2201951, 2102951);
    $InitializeEvent(0, 7300, 72102200, 2201950);
    $InitializeEvent(1, 7300, 72102201, 2201951);
    $InitializeEvent(0, 7600, 2201999, 2203999);
    $InitializeEvent(0, 9200, 2203900);
    $InitializeEvent(0, 9220, 2200710, 12204220, 12204221, 2200, 22, 0);
    $InitializeEvent(0, 9240, 2200710, 12204220, 12204221, 12204222, 22, 0);
    $InitializeEvent(0, 9260, 2200710, 12204220, 12204221, 12204222, 22, 0);
    $InitializeEvent(0, 9280, 2200710, 12204220, 12204221, 2200, 12204800, 22, 0);
    CreateObjectfollowingSFX(2201000, 750, 900110);
    CreateObjectfollowingSFX(2201003, 750, 900110);
    CreateObjectfollowingSFX(2201004, 750, 900110);
    CreateDamagingObject(12200050, 2201000, 100, 6010, DamageTargetType.Character, 0.5, 0, 1);
    CreateDamagingObject(12200051, 2201003, 100, 6010, DamageTargetType.Character, 0.5, 0, 1);
    CreateDamagingObject(12200052, 2201004, 100, 6010, DamageTargetType.Character, 0.5, 0, 1);
    RegisterLadder(12200000, 12200001, 2201100);
    StartTimeMeasurement(2200000, 0, Disabled);
    StartTimeMeasurement(2200001, 18, Enabled);
    CreateBulletOwner(2200420);
    CreateBulletOwner(2200421);
    CreateBulletOwner(2200422);
    RequestCharacterAICommand(2200310, 200, 0);
    RequestCharacterAICommand(2200311, 200, 0);
    $InitializeEvent(0, 12204892);
    $InitializeEvent(0, 12204893);
    $InitializeEvent(0, 12201800);
    $InitializeEvent(0, 12201801);
    $InitializeEvent(0, 12201802);
    $InitializeEvent(0, 12201803);
    $InitializeEvent(0, 12204890);
    $InitializeEvent(0, 12204891);
    $InitializeEvent(0, 12204802);
    $InitializeEvent(0, 12204803);
    $InitializeEvent(0, 12204804);
    $InitializeEvent(0, 12204805);
    $InitializeEvent(0, 12204807);
    $InitializeEvent(0, 12201804);
    $InitializeEvent(0, 12204808, 2200800, 12204848);
    $InitializeEvent(1, 12204808, 2200801, 12204849);
    $InitializeEvent(0, 12204810);
    $InitializeEvent(0, 12204811);
    $InitializeEvent(0, 12204812, 2200800, 2200801, 2202810, 12204848);
    $InitializeEvent(1, 12204812, 2200801, 2200800, 2202815, 12204849);
    $InitializeEvent(0, 12204814, 2200800, 12204850, 12204853, 12204850, 12204851, 12204852, 12204853, 12204848);
    $InitializeEvent(1, 12204814, 2200801, 12204855, 12204858, 12204855, 12204856, 12204857, 12204858, 12204849);
    $InitializeEvent(0, 12204820, 2200800, 12204850, 2202810, 2202812, 12204854);
    $InitializeEvent(1, 12204820, 2200800, 12204851, 2202811, 2202810, 12204854);
    $InitializeEvent(2, 12204820, 2200800, 12204852, 2202812, 2202817, 12204854);
    $InitializeEvent(3, 12204820, 2200800, 12204853, 2202817, 2202811, 12204854);
    $InitializeEvent(4, 12204820, 2200801, 12204855, 2202813, 2202814, 12204859);
    $InitializeEvent(5, 12204820, 2200801, 12204856, 2202814, 2202815, 12204859);
    $InitializeEvent(6, 12204820, 2200801, 12204857, 2202815, 2202816, 12204859);
    $InitializeEvent(7, 12204820, 2200801, 12204858, 2202816, 2202813, 12204859);
    $InitializeEvent(0, 12204830, 2200800, 12204854, 12204848);
    $InitializeEvent(1, 12204830, 2200801, 12204859, 12204849);
    $InitializeEvent(0, 12204832, 2200810);
    $InitializeEvent(1, 12204832, 2200811);
    $InitializeEvent(2, 12204832, 2200812);
    $InitializeEvent(0, 12204835, 2200810, 12204870);
    $InitializeEvent(1, 12204835, 2200811, 12204871);
    $InitializeEvent(2, 12204835, 2200812, 12204872);
    $InitializeEvent(0, 12204838);
    $InitializeEvent(0, 12204839);
    $InitializeEvent(0, 12204840);
    $InitializeEvent(0, 12204841);
    $InitializeEvent(0, 12204842);
    $InitializeEvent(0, 12204843);
    $InitializeEvent(0, 12204844);
    $InitializeEvent(0, 12200100);
    $InitializeEvent(0, 12200101);
    $InitializeEvent(0, 12200110);
    $InitializeEvent(0, 12200111);
    $InitializeEvent(0, 12200112);
    $InitializeEvent(0, 12200120);
    $InitializeEvent(0, 12200122);
    $InitializeEvent(0, 12200123);
    $InitializeEvent(0, 12200121);
    $InitializeEvent(0, 12200124);
    $InitializeEvent(0, 12200130);
    $InitializeEvent(0, 12200131);
    $InitializeEvent(0, 12200132);
    $InitializeEvent(0, 12200150, 2200261, 2202660);
    $InitializeEvent(1, 12200150, 2200250, 2202661);
    $InitializeEvent(2, 12200150, 2200251, 2202662);
    $InitializeEvent(3, 12200150, 2200260, 2202663);
    $InitializeEvent(4, 12200150, 2200201, 2202664);
    $InitializeEvent(5, 12200150, 2200205, 2202665);
    $InitializeEvent(6, 12200150, 2200204, 2202666);
    $InitializeEvent(7, 12200150, 2200252, 2202667);
    $InitializeEvent(8, 12200150, 2200335, 2202668);
    $InitializeEvent(9, 12200150, 2200330, 2202669);
    $InitializeEvent(10, 12200150, 2200331, 2202670);
    $InitializeEvent(11, 12200150, 2200332, 2202671);
    $InitializeEvent(12, 12200150, 2200333, 2202672);
    $InitializeEvent(13, 12200150, 2200334, 2202673);
    $InitializeEvent(14, 12200150, 2200280, 2202674);
    $InitializeEvent(15, 12200150, 2200340, 2202675);
    $InitializeEvent(16, 12200150, 2200341, 2202676);
    $InitializeEvent(17, 12200150, 2200273, 2202677);
    $InitializeEvent(18, 12200150, 2200270, 2202678);
    $InitializeEvent(19, 12200150, 2200271, 2202679);
    $InitializeEvent(20, 12200150, 2200272, 2202680);
    $InitializeEvent(21, 12200150, 2200202, 2202681);
    $InitializeEvent(22, 12200150, 2200311, 2202682);
    $InitializeEvent(23, 12200150, 2200120, 2202683);
    $InitializeEvent(0, 12200300);
    $InitializeEvent(0, 12200310, 2201050, 12200900, 9942);
    $InitializeEvent(0, 12200210, 2201010, 7, 0, 2202020, 10);
    $InitializeEvent(1, 12200210, 2201011, 7, 30, 2202020, 10);
    $InitializeEvent(2, 12200210, 2201016, 7, 15, 2202020, 10);
    $InitializeEvent(3, 12200210, 2201017, 7, 0, 2202020, 10);
    $InitializeEvent(4, 12200210, 2201018, 7, 5, 2202020, 10);
    $InitializeEvent(5, 12200210, 2201012, 10, 10, 2202021, 11);
    $InitializeEvent(6, 12200210, 2201013, 10, 0, 2202021, 11);
    $InitializeEvent(7, 12200210, 2201014, 10, 30, 2202021, 11);
    $InitializeEvent(8, 12200210, 2201015, 10, 0, 2202021, 11);
    $InitializeEvent(0, 12200220, 2200111, 52200990);
    $InitializeEvent(1, 12200220, 2200170, 52200980);
    $InitializeEvent(2, 12200220, 2200110, 52200970);
    if (CharacterType(10000, TargetType.Alive)) {
        if (EventFlag(6631)) {
            SetEventFlag(12201999, ON);
        }
    }
    if (!EventFlag(12201999)) {
        DeactivateObject(2201150, Enabled);
        DeactivateObject(2201151, Disabled);
        SetObjectTreasureState(2201150, Enabled);
        SetObjectTreasureState(2201151, Disabled);
    } else {
        DeactivateObject(2201150, Disabled);
        DeactivateObject(2201151, Enabled);
        SetObjectTreasureState(2201150, Disabled);
        SetObjectTreasureState(2201151, Enabled);
    }
    if (CharacterType(10000, TargetType.Alive)) {
        if (EventFlag(6309)) {
            SetEventFlag(12201998, ON);
        }
    }
    if (!EventFlag(12201998)) {
        DeactivateObject(2201500, Enabled);
        DeactivateObject(2201501, Disabled);
        SetObjectTreasureState(2201500, Enabled);
        SetObjectTreasureState(2201501, Disabled);
    } else {
        DeactivateObject(2201500, Disabled);
        DeactivateObject(2201501, Enabled);
        SetObjectTreasureState(2201500, Disabled);
        SetObjectTreasureState(2201501, Enabled);
    }
    $InitializeEvent(0, 12200990);
    $InitializeEvent(0, 12204000, 2200500, 20);
    $InitializeEvent(1, 12204000, 2200501, 20);
    $InitializeEvent(2, 12204000, 2200502, 20);
    $InitializeEvent(3, 12204000, 2200503, 20);
    $InitializeEvent(4, 12204000, 2200504, 20);
    $InitializeEvent(5, 12204000, 2200505, 20);
    $InitializeEvent(6, 12204000, 2200506, 20);
    $InitializeEvent(7, 12204000, 2200507, 20);
    $InitializeEvent(8, 12204000, 2200508, 20);
    $InitializeEvent(0, 12205000);
    $InitializeEvent(0, 12205001);
    $InitializeEvent(0, 12205002);
    $InitializeEvent(0, 12205003);
    $InitializeEvent(0, 12205040);
    $InitializeEvent(0, 12205041);
    $InitializeEvent(0, 12205020);
    $InitializeEvent(0, 12205030);
    $InitializeEvent(0, 12205031);
    $InitializeEvent(0, 12205060);
    $InitializeEvent(0, 12205050);
    $InitializeEvent(0, 12205051);
    $InitializeEvent(0, 12205070);
    $InitializeEvent(0, 12205080);
    $InitializeEvent(0, 12205010, 2200240, 2200130, 2202070, 2202370, 2202080, 12205015);
    $InitializeEvent(1, 12205010, 2200223, 2200310, 2202071, 2202371, 2202171, 12205016);
    $InitializeEvent(0, 12205015, 2200130, 2202370, -1, 12205010);
    $InitializeEvent(1, 12205015, 2200310, 2202371, 200, 12205011);
    $InitializeEvent(0, 12205100, 2200202, 2202130, 3, 12205105, 50);
    $InitializeEvent(1, 12205100, 2200200, 2202150, 3, 12205106, 50);
    $InitializeEvent(2, 12205100, 2200201, 2202151, 3, 12205107, 60);
    $InitializeEvent(3, 12205100, 2200204, 2202152, 5, 12205108, 50);
    $InitializeEvent(0, 12205105, 2200202, 2202130, 3007, 3);
    $InitializeEvent(1, 12205105, 2200200, 2202150, 3009, 2.5);
    $InitializeEvent(2, 12205105, 2200201, 2202154, 3022, 2);
    $InitializeEvent(3, 12205105, 2200204, 2202153, 3011, 2.7);
    $InitializeEvent(0, 12205110, 2200203, 2202140, 3, 3006);
    $InitializeEvent(0, 12205120, 2200211, 2202160, 5, 2202161);
    $InitializeEvent(1, 12205120, 2200212, 2202160, 5, 2202161);
    $InitializeEvent(2, 12205120, 2200213, 2202160, 5, 2202161);
    $InitializeEvent(3, 12205120, 2200223, 2202170, 15, 2202171);
    $InitializeEvent(4, 12205120, 2200224, 2202170, 15, 2202171);
    $InitializeEvent(5, 12205120, 2200230, 2202180, 6, 2202180);
    $InitializeEvent(6, 12205120, 2200231, 2202180, 6, 2202180);
    $InitializeEvent(7, 12205120, 2200232, 2202180, 6, 2202180);
    $InitializeEvent(8, 12205120, 2200240, 2202190, 15, 2202191);
    $InitializeEvent(9, 12205120, 2200250, 2202200, 10, 2202201);
    $InitializeEvent(10, 12205120, 2200251, 2202200, 10, 2202201);
    $InitializeEvent(11, 12205120, 2200252, 2202200, 10, 2202201);
    $InitializeEvent(12, 12205120, 2200260, 2202200, 10, 2202201);
    $InitializeEvent(13, 12205120, 2200261, 2202200, 10, 2202201);
    $InitializeEvent(14, 12205120, 2200270, 2202220, 10, 2202221);
    $InitializeEvent(15, 12205120, 2200271, 2202220, 10, 2202221);
    $InitializeEvent(16, 12205120, 2200272, 2202220, 10, 2202221);
    $InitializeEvent(17, 12205120, 2200290, 2202230, 8, 2202231);
    $InitializeEvent(18, 12205120, 2200291, 2202230, 8, 2202231);
    $InitializeEvent(19, 12205120, 2200292, 2202230, 8, 2202231);
    $InitializeEvent(20, 12205120, 2200280, 2202240, 5, 2202240);
    $InitializeEvent(21, 12205120, 2200412, 2202260, 5, 2202260);
    $InitializeEvent(22, 12205120, 2200310, 2202170, 15, 2202171);
    $InitializeEvent(23, 12205120, 2200450, 2202270, 15, 2202271);
    $InitializeEvent(24, 12205120, 2200460, 2202310, 15, 2202310);
    $InitializeEvent(25, 12205120, 2200470, 2202430, 3, 2202431);
    $InitializeEvent(26, 12205120, 2200430, 2202170, 7, 2202171);
    $InitializeEvent(0, 12205150, 2200100, 7014, 0, 0);
    $InitializeEvent(1, 12205150, 2200301, 7010, 7011, 7);
    $InitializeEvent(2, 12205150, 2200303, 7012, 7013, 0);
    $InitializeEvent(3, 12205150, 2200300, 7014, 0, 0);
    $InitializeEvent(4, 12205150, 2200212, 7014, 0, 0);
    $InitializeEvent(0, 12205160, 2202040, 2201401, 2200410, 2200400);
    $InitializeEvent(1, 12205160, 2202041, 2201406, 2200411, 2200401);
    $InitializeEvent(0, 12205170, 2201400, 2200420);
    $InitializeEvent(1, 12205170, 2201401, 2200420);
    $InitializeEvent(2, 12205170, 2201402, 2200420);
    $InitializeEvent(3, 12205170, 2201403, 2200420);
    $InitializeEvent(4, 12205170, 2201404, 2200420);
    $InitializeEvent(5, 12205170, 2201405, 2200420);
    $InitializeEvent(6, 12205170, 2201406, 2200420);
    $InitializeEvent(7, 12205170, 2201407, 2200422);
    $InitializeEvent(8, 12205170, 2201408, 2200422);
    $InitializeEvent(9, 12205170, 2201409, 2200422);
    $InitializeEvent(10, 12205170, 2201410, 2200421);
    $InitializeEvent(11, 12205170, 2201411, 2200421);
    $InitializeEvent(12, 12205170, 2201412, 2200421);
    $InitializeEvent(13, 12205170, 2201413, 2200421);
    $InitializeEvent(14, 12205170, 2201414, 2200421);
    $InitializeEvent(15, 12205170, 2201415, 2200421);
    $InitializeEvent(16, 12205170, 2201416, 2200421);
    $InitializeEvent(17, 12205170, 2201417, 2200421);
    $InitializeEvent(18, 12205170, 2201418, 2200421);
    $InitializeEvent(19, 12205170, 2201419, 2200421);
    $InitializeEvent(20, 12205170, 2201420, 2200420);
    $InitializeEvent(21, 12205170, 2201421, 2200420);
    $InitializeEvent(22, 12205170, 2201422, 2200421);
    $InitializeEvent(23, 12205170, 2201423, 2200421);
    $InitializeEvent(24, 12205170, 2201424, 2200421);
    $InitializeEvent(25, 12205170, 2201425, 2200421);
    $InitializeEvent(26, 12205170, 2201426, 2200421);
    $InitializeEvent(27, 12205170, 2201427, 2200421);
    $InitializeEvent(0, 12205200, 2200200);
    $InitializeEvent(1, 12205200, 2200201);
    $InitializeEvent(2, 12205200, 2200202);
    $InitializeEvent(3, 12205200, 2200204);
    $InitializeEvent(4, 12205200, 2200205);
    $InitializeEvent(5, 12205200, 2200251);
    $InitializeEvent(6, 12205200, 2200270);
    $InitializeEvent(7, 12205200, 2200271);
    $InitializeEvent(0, 12205210, 2200320);
    $InitializeEvent(1, 12205210, 2200321);
    $InitializeEvent(0, 12205220, 2200240, 2202282, 3006, 2202302);
    $InitializeEvent(1, 12205220, 2200250, 2202280, 7001, 2202300);
    $InitializeEvent(2, 12205220, 2200250, 2202281, 7001, 2202301);
    $InitializeEvent(3, 12205220, 2200252, 2202279, 3006, 2202299);
    $InitializeEvent(4, 12205220, 2200251, 2202278, 7001, 2202298);
    $InitializeEvent(5, 12205220, 2200450, 2202283, 7014, 2202283);
    $InitializeEvent(0, 12205230, 2200330, 114093);
    $InitializeEvent(1, 12205230, 2200331, 114094);
    $InitializeEvent(2, 12205230, 2200332, 114094);
    $InitializeEvent(3, 12205230, 2200333, 114093);
    $InitializeEvent(4, 12205230, 2200334, 114094);
    $InitializeEvent(0, 12205240, 2200340);
    $InitializeEvent(1, 12205240, 2200341);
    $InitializeEvent(0, 12205260, 2200110, 2202630, 12205265, 12205270);
    $InitializeEvent(1, 12205260, 2200111, 2202632, 12205266, 12205271);
    $InitializeEvent(0, 12205265, 2200110, 2202631, 2202380, 12205260, 12205270);
    $InitializeEvent(1, 12205265, 2200111, 2202633, 2202381, 12205261, 12205271);
    $InitializeEvent(0, 12205270, 2200110, 2202380, 12205265, 2202630, 2202381, 12205260);
    $InitializeEvent(1, 12205270, 2200111, 2202381, 12205266, 2202633, 2202382, 12205261);
    $InitializeEvent(0, 12205300, 2203300, 1439, 6001, 9802);
});

// プリコンストラクタ
$Event(50, Default, function() {
    SetCharacterAnimationState(2203950, Disabled);
    SetCharacterGravity(2203950, Disabled);
    SetCharacterMaphits(2203950, true);
    SetCharacterAnimationState(2203951, Disabled);
    SetCharacterGravity(2203951, Disabled);
    SetCharacterMaphits(2203951, true);
    $InitializeEvent(0, 12204010);
});

// ボス撃破_アイコレクター
$Event(12201800, Default, function() {
    if (ThisEvent()) {
        SetMapSoundState(2203802, Disabled);
        SetMapSoundState(2203803, Disabled);
        ChangeCharacterEnableState(2200800, Disabled);
        ForceCharacterDeath(2200800, false);
        ChangeCharacterEnableState(2200801, Disabled);
        ForceCharacterDeath(2200801, false);
        DeactivateObject(2201800, Disabled);
        DeactivateObject(2201801, Disabled);
        DeleteMapSFX(2203800, true);
        DeleteMapSFX(2203801, true);
        EndEvent();
    }
L0:
    WaitFor(CharacterDead(2200800) && CharacterDead(2200801));
    DisplayBanner(TextBannerType.DemonKilled);
    DeactivateObject(2201800, Disabled);
    DeactivateObject(2201801, Disabled);
    DeleteMapSFX(2203800, true);
    DeleteMapSFX(2203801, true);
    SetLockcamSlotNumber(22, 0, 0);
    WaitFixedTimeSeconds(3);
    HandleBossDefeat(2200800);
    SetNetworkSyncState(Disabled);
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        AwardAchievement(23);
        AwardItemLot(21002950);
        WaitFor(CharacterType(10000, TargetType.Alive));
        $InitializeEvent(0, 9350, 2);
        SetEventFlag(72400512, ON);
        SetEventFlag(2200, ON);
        SetEventFlag(9452, ON);
        SetEventFlag(5911, ON);
        EndTimeMeasurement(2200000);
        EndTimeMeasurement(2200001);
        EndTimeMeasurement(2200010);
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

// ボス撃破SE再生_アイコレクター
$Event(12201801, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12201800));
    flag = EventFlag(12201800);
    WaitFor(flag || (!CharacterBackreadStatus(2200800) && HPRatio(2200800) <= 0));
    EndIf(flag.Passed);
    PlaySE(2202800, SoundType.cCharacterMotion, 0);
});

// ホストがボス部屋入場_初戦_アイコレクター
$Event(12201802, Default, function() {
    EndIf(EventFlag(12201800));
    EndIf(ThisEvent());
    ChangeCharacterEnableState(2200800, Disabled);
    WaitFor(
        !EventFlag(12201800)
            && !ThisEvent()
            && CharacterType(10000, TargetType.Alive)
            && InArea(10000, 2202805));
    ChangeCharacterEnableState(2200800, Enabled);
    WaitFixedTimeSeconds(0.1);
    if (!(PlayerInsightAmount() == 0 && CharacterType(10000, TargetType.Alive))) {
        ForceAnimationPlayback(2200800, 3011, false, false, false);
    }
    SetEventFlag(12204800, ON);
    EndIf(EventFlag(9338));
    $InitializeEvent(0, 9350, 1);
    SetEventFlag(9338, ON);
});

// お供が追従死亡_アイコレクター
$Event(12201803, Default, function() {
    if (ThisEvent()) {
        DeactivateGenerator(2205000, Disabled);
        DeactivateGenerator(2205001, Disabled);
        DeactivateGenerator(2205002, Disabled);
        SetCharacterBackreadState(2200810, true);
        SetCharacterBackreadState(2200811, true);
        SetCharacterBackreadState(2200812, true);
        EndEvent();
    }
L0:
    WaitFor(EventFlag(12201800));
    DeactivateGenerator(2205000, Disabled);
    DeactivateGenerator(2205001, Disabled);
    DeactivateGenerator(2205002, Disabled);
    ForceCharacterDeath(2200810, false);
    ForceCharacterDeath(2200811, false);
    ForceCharacterDeath(2200812, false);
});

// アイコレクター__時間差入場ゲスト用対処処理
$Event(12201804, Default, function() {
    WaitFor(CharacterType(10000, TargetType.Alive) && EventFlag(12204800));
    EndIf(HasMultiplayerState(MultiplayerState.Host));
    ChangeCharacterEnableState(2200800, Enabled);
    SetEventFlag(12204800, ON);
    SetEventFlag(12201802, ON);
});

// ホストがボス部屋入場_再戦_アイコレクター
$Event(12204890, Default, function() {
    EndIf(EventFlag(12201800));
    if (!EventFlag(12201802)) {
        if (!HasMultiplayerState(MultiplayerState.Client)) {
            DeactivateObject(2201800, Disabled);
            DeleteMapSFX(2203800, false);
        }
        DeactivateObject(2201801, Disabled);
        DeleteMapSFX(2203801, false);
        WaitFor(!EventFlag(12201800) && EventFlag(12201802));
        DeactivateObject(2201800, Enabled);
        DeactivateObject(2201801, Enabled);
        SpawnMapSFX(2203800);
        SpawnMapSFX(2203801);
    }
L0:
    chrActFlag = CharacterType(10000, TargetType.Alive)
        && ActionButtonInArea(2200800, 2201800)
        && !EventFlag(12201800);
    flag = EventFlag(12201800);
    WaitFor(chrActFlag || flag);
    EndIf(flag.Passed);
    RotateCharacter(10000, 2202800, 101130, false);
    chrArea = CharacterType(10000, TargetType.Alive) && InArea(10000, 2202801);
    timeChr = ElapsedSeconds(2) && CharacterType(10000, TargetType.Alive);
    WaitFor(chrArea || timeChr);
    if (!timeChr.Passed) {
        SetEventFlag(12204800, ON);
    }
    RestartEvent();
});

// ゲストがボス部屋入場_アイコレクター
$Event(12204891, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12201800));
    WaitFor(
        !EventFlag(12201800)
            && EventFlag(12201802)
            && EventFlag(12204800)
            && CharacterType(10000, TargetType.WhitePhantom)
            && ActionButtonInArea(2200800, 2201800));
    RotateCharacter(10000, 2202800, 101130, false);
    chrArea = CharacterType(10000, TargetType.WhitePhantom) && InArea(10000, 2202801);
    chrTime = CharacterType(10000, TargetType.WhitePhantom) && ElapsedSeconds(2);
    WaitFor(chrArea || chrTime);
    if (!chrTime.Passed) {
        SetEventFlag(12204801, ON);
    }
    RestartEvent();
});

// 他人の世界で霧壁あたり無効_アイコレクター
$Event(12204892, Default, function() {
    WaitFor(CharacterType(10000, TargetType.Alive) && EntityInRadiusOfEntity(10000, 2201800, 2));
    SetCharacterGravityMaphitStateExcludingOwnWorld(10000, Disabled);
    WaitFixedTimeFrames(6);
    RestartEvent();
});

// 他人の世界で霧壁あたり無効2_アイコレクター
$Event(12204893, Default, function() {
    WaitFor(
        CharacterType(10000, TargetType.Alive)
            && !EntityInRadiusOfEntity(10000, 2201800, 2)
            && EntityInRadiusOfEntity(10000, 2201800, 4));
    SetCharacterGravityMaphitStateExcludingOwnWorld(10000, Enabled);
    WaitFixedTimeFrames(6);
    RestartEvent();
});

// ボスが動き出す_アイコレクター
$Event(12204802, Default, function() {
    EndIf(EventFlag(12201800));
    SetCharacterAIState(2200800, Disabled);
    SetCharacterHPBarDisplay(2200800, Disabled);
    if (!ThisEvent()) {
        WaitFor(EventFlag(12204800));
        if (!HasMultiplayerState(MultiplayerState.Client)) {
            IssueBossRoomEntryNotification(0);
            SetNetworkUpdateAuthority(2200800, AuthorityLevel.Forced);
        }
    }
L0:
    SetEventFlag(12204800, ON);
    GotoIf(L1, NumberOfCoopClients() == 0);
    GotoIf(L2, NumberOfCoopClients() == 1);
    GotoIf(L3, NumberOfCoopClients() == 2);
L1:
    Goto(L4);
L2:
    SetSpEffect(2200800, 7500, true);
    WaitFixedTimeFrames(1);
    AdaptHpchangingSpEffectToNPCPartOfTarget(2200800);
    Goto(L4);
L3:
    SetSpEffect(2200800, 7501, true);
    WaitFixedTimeFrames(1);
    AdaptHpchangingSpEffectToNPCPartOfTarget(2200800);
    Goto(L4);
L4:
    SetCharacterAIState(2200800, Enabled);
    DisplayBossHealthBar(Enabled, 2200800, 0, 210000);
    CreatePlaylog(88);
    StartTimeMeasurement(2200010, 104, Enabled);
});

// ボスBGM　ON_アイコレクター
$Event(12204803, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12201800));
    if (!ThisEvent()) {
        SetMapSoundState(2203802, Disabled);
        SetMapSoundState(2203803, Disabled);
        flagArea &= !EventFlag(12201800) && EventFlag(12204802);
        if (!HasMultiplayerState(MultiplayerState.Host)) {
            flagArea &= EventFlag(12204801);
        }
        flagArea &= InArea(10000, 2202801);
        WaitFor(flagArea);
        EnableBossMapSound(2203802, Enabled);
        hpFlagArea &= CharacterHPValue(2200800) == 1 || CharacterHPValue(2200801) == 1;
    }
L0:
    hpFlagArea &= !EventFlag(12201800) && EventFlag(12204802);
    if (!HasMultiplayerState(MultiplayerState.Host)) {
        hpFlagArea &= EventFlag(12204801);
    }
    hpFlagArea &= InArea(10000, 2202801);
    WaitFor(hpFlagArea);
    EnableBossMapSound(2203802, Disabled);
    WaitFixedTimeFrames(0);
    EnableBossMapSound(2203803, Enabled);
});

// ボスカメラ_アイコレクター
$Event(12204804, Default, function() {
    EndIf(EventFlag(12201800));
    SetNetworkSyncState(Disabled);
    WaitFor(
        (CharacterType(10000, TargetType.Alive) && EventFlag(12204800))
            || (CharacterType(10000, TargetType.WhitePhantom) && EventFlag(12204801)));
    SetLockcamSlotNumber(22, 0, 1);
});

// ボスBGM　OFF_アイコレクター
$Event(12204805, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12201800));
    WaitFor(EventFlag(12201800));
    EnableBossMapSound(2203802, Disabled);
    EnableBossMapSound(2203803, Disabled);
    EnableBossMapSound(-1, Disabled);
});

// ボスヒートアップ_アイコレクター
$Event(12204807, Default, function() {
    EndIf(EventFlag(12201800));
    WaitFor(CharacterHPValue(2200800) == 1 || CharacterHPValue(2200801) == 1);
    RequestCharacterAICommand(2200800, 100, 0);
    RequestCharacterAICommand(2200801, 100, 0);
    WaitFixedTimeSeconds(10);
    EndIf(CharacterDead(2200800) && CharacterDead(2200801));
    DisplayBossHealthBar(Enabled, 2200801, 1, 210000);
});

// ボス透明化_アイコレクター_XX
$Event(12204808, Default, function(chrEntityId, eventFlagId) {
    EndIf(EventFlag(12201800));
    SetNetworkSyncState(Disabled);
    WaitFor(
        !EntityInRadiusOfEntity(10000, chrEntityId, 12) || CharacterHasEventMessage(chrEntityId, 10));
    SetSpEffectAndUnknown200455(chrEntityId, 5686, false);
L0:
    WaitFor(EntityInRadiusOfEntity(10000, chrEntityId, 6) && !EventFlag(eventFlagId));
    SetSpEffectAndUnknown200455(chrEntityId, 5688, false);
    RestartEvent();
});

// ボスが動き出す_2体目_アイコレクター
$Event(12204810, Default, function() {
    EndIf(EventFlag(12201800));
    if (!ThisEvent()) {
        SetCharacterAIState(2200801, Disabled);
        SetCharacterHPBarDisplay(2200801, Disabled);
        ChangeCharacterEnableState(2200801, Disabled);
        WaitFor(HPRatio(2200800) <= 0.5);
        if (!HasMultiplayerState(MultiplayerState.Client)) {
            IssueBossRoomEntryNotification(0);
            SetNetworkUpdateAuthority(2200801, AuthorityLevel.Forced);
        }
    }
L0:
    GotoIf(L1, NumberOfCoopClients() == 0);
    GotoIf(L2, NumberOfCoopClients() == 1);
    GotoIf(L3, NumberOfCoopClients() == 2);
L1:
    Goto(L4);
L2:
    SetSpEffect(2200801, 7500, true);
    WaitFixedTimeFrames(1);
    AdaptHpchangingSpEffectToNPCPartOfTarget(2200801);
    Goto(L4);
L3:
    SetSpEffect(2200801, 7501, true);
    WaitFixedTimeFrames(1);
    AdaptHpchangingSpEffectToNPCPartOfTarget(2200801);
    Goto(L4);
L4:
    ChangeCharacterEnableState(2200801, Enabled);
    SetCharacterAIState(2200801, Enabled);
});

// 1体目最初は巡回_アイコレクター
$Event(12204811, Default, function() {
    EndIf(EventFlag(12201800));
    if (!ThisEvent()) {
        SetCharacterAIId(2200800, 210021);
        WaitFor(CharacterDead(2200810) || HasDamageType(2200800, -1, DamageType.Unspecified));
    }
L0:
    SetCharacterAIId(2200800, 210020);
});

// ボス仮死状態_アイコレクター_XX
$Event(12204812, Default, function(chrEntityId, chrEntityId2, entityId, eventFlagId) {
    EndIf(EventFlag(12201800));
    SetCharacterImmortality(chrEntityId, Enabled);
    hp = CharacterHPValue(chrEntityId) == 1 && CharacterHPValue(chrEntityId2) < 1;
    hp2 = CharacterHPValue(chrEntityId) == 1 && CharacterHPValue(chrEntityId2) == 1;
    WaitFor(hp || hp2);
    if (!hp2.Passed) {
        WaitFixedTimeSeconds(0);
        RequestCharacterAnimationReset(chrEntityId, Interpolation.Interpolated);
        WaitFixedTimeSeconds(0.1);
        ForceAnimationPlayback(chrEntityId, 7000, false, false, false);
        WaitFixedTimeFrames(75);
        ForceAnimationPlayback(chrEntityId, 7001, true, false, false);
        time = ElapsedSeconds(45);
        hp3 = CharacterHPValue(chrEntityId2) == 1;
        WaitFor(time || hp3);
        if (!hp3.Passed) {
            SetSpEffect(chrEntityId, 5686, false);
            WaitFixedTimeSeconds(3);
            ChangeCharacterEnableState(chrEntityId, Disabled);
            ForceAnimationPlayback(chrEntityId, 0, false, false, false);
            IssueShortWarpRequest(chrEntityId, TargetEntityType.Area, entityId, -1);
            SetSpEffect(chrEntityId, 5698, false);
            WaitFixedTimeSeconds(3);
            ChangeCharacterEnableState(chrEntityId, Enabled);
            RequestCharacterAIReplan(chrEntityId);
            SetEventFlag(eventFlagId, OFF);
            RestartEvent();
        }
    }
L0:
    ForceCharacterDeath(chrEntityId, false);
    ForceCharacterDeath(chrEntityId2, false);
});

// ワープ先選択_アイコレクター_XX
$Event(12204814, Default, function(chrEntityId, eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4, eventFlagId5, eventFlagId6, eventFlagId7) {
    EndIf(EventFlag(12201800));
    WaitFor(CharacterHasEventMessage(chrEntityId, 30));
    SetSpEffect(chrEntityId, 5686, false);
    WaitFor(CharacterHasEventMessage(chrEntityId, 10) && CharacterHPValue(chrEntityId) != 1);
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        RandomlySetEventFlagInRange(eventFlagId, eventFlagId2, ON);
        if (EventFlag(eventFlagId3)) {
            BatchSetEventFlags(eventFlagId3, eventFlagId6, OFF);
            SetEventFlag(eventFlagId3, ON);
        } else {
L1:
            if (EventFlag(eventFlagId4)) {
                BatchSetEventFlags(eventFlagId3, eventFlagId6, OFF);
                SetEventFlag(eventFlagId4, ON);
            } else {
L2:
                if (EventFlag(eventFlagId5)) {
                    BatchSetEventFlags(eventFlagId3, eventFlagId6, OFF);
                    SetEventFlag(eventFlagId5, ON);
                } else {
L3:
                    if (EventFlag(eventFlagId6)) {
                        BatchSetEventFlags(eventFlagId3, eventFlagId6, OFF);
                        SetEventFlag(eventFlagId6, ON);
                    }
                }
            }
        }
    }
L0:
    WaitFor(
        EventFlag(eventFlagId3)
            || EventFlag(eventFlagId4)
            || EventFlag(eventFlagId5)
            || EventFlag(eventFlagId6));
    SetEventFlag(eventFlagId7, ON);
    RestartEvent();
});

// ワープ_アイコレクター_XX
$Event(12204820, Default, function(chrEntityId, eventFlagId, areaEntityId, entityId, eventFlagId2) {
    EndIf(EventFlag(12201800));
    WaitFor(EventFlag(eventFlagId));
    SetEventFlag(eventFlagId, OFF);
    if (!InArea(chrEntityId, areaEntityId)) {
        ChangeCharacterEnableState(chrEntityId, Disabled);
        IssueShortWarpRequest(chrEntityId, TargetEntityType.Area, areaEntityId, -1);
    } else {
L0:
        ChangeCharacterEnableState(chrEntityId, Disabled);
        IssueShortWarpRequest(chrEntityId, TargetEntityType.Area, entityId, -1);
    }
L1:
    SetEventFlag(eventFlagId2, ON);
    RestartEvent();
});

// ワープ後動作_アイコレクター_XX
$Event(12204830, Default, function(chrEntityId, eventFlagId, eventFlagId2) {
    EndIf(EventFlag(12201800));
    SetNetworkSyncState(Disabled);
    WaitFor(EventFlag(eventFlagId));
    WaitFixedTimeSeconds(2);
    ChangeCharacterEnableState(chrEntityId, Enabled);
    RequestCharacterAIReplan(chrEntityId);
    SetEventFlag(eventFlagId2, OFF);
    SetEventFlag(eventFlagId, OFF);
    RestartEvent();
});

// お供撃破数カウント_アイコレクター_XX
$Event(12204832, Default, function(chrEntityId) {
    EndIf(EventFlag(12201800));
    WaitFor(CharacterDead(chrEntityId));
    IncrementEventValue(12204860, 10, 10);
    WaitFor(CharacterHasEventMessage(chrEntityId, 10));
    RestartEvent();
});

// お供死亡監視_アイコレクター_XX
$Event(12204835, Default, function(chrEntityId, eventFlagId) {
    EndIf(EventFlag(12201800));
    WaitFor(CharacterDead(chrEntityId));
    SetEventFlag(eventFlagId, ON);
    WaitFor(CharacterHasEventMessage(chrEntityId, 10));
    SetEventFlag(eventFlagId, OFF);
    RestartEvent();
});

// お供を召喚_アイコレクター
$Event(12204838, Default, function() {
    EndIf(EventFlag(12201800));
    WaitFor(!EventFlag(12204845));
    chrFlag = (CharacterHasEventMessage(2200800, 20) || CharacterHasEventMessage(2200801, 20))
        && EventFlag(12204870);
    chrFlag2 = (CharacterHasEventMessage(2200800, 20) || CharacterHasEventMessage(2200801, 20))
        && EventFlag(12204871);
    WaitFor(
        chrFlag
            || chrFlag2
            || ((CharacterHasEventMessage(2200800, 20) || CharacterHasEventMessage(2200801, 20))
                && EventFlag(12204872)));
    if (chrFlag.Passed) {
        DeactivateGenerator(2205000, Enabled);
        WaitFor(CharacterHasEventMessage(2200810, 10));
        DeactivateGenerator(2205000, Disabled);
        RestartEvent();
    }
L0:
    if (chrFlag2.Passed) {
        DeactivateGenerator(2205001, Enabled);
        WaitFor(CharacterHasEventMessage(2200811, 10));
        DeactivateGenerator(2205001, Disabled);
        RestartEvent();
    }
L1:
    DeactivateGenerator(2205002, Enabled);
    WaitFor(CharacterHasEventMessage(2200812, 10));
    DeactivateGenerator(2205002, Disabled);
    RestartEvent();
});

// ジェネレータ管理_アイコレクター
$Event(12204839, Restart, function() {
    EndIf(EventFlag(12201800));
    WaitFor(!EventFlag(12204845));
    hpFlag = (CharacterHPValue(2200800) == 1 || CharacterHPValue(2200801) == 1) || EventFlag(12204812);
    flag = EventFlag(12201802) && !ThisEvent() && !EventFlag(12201810);
    flagHp = (EventValue(12204860, 10) == 3 && !EventFlag(12204875))
        || (HPRatio(2200800) <= 0.3 && EventValue(12204860, 10) <= 2 && !EventFlag(12204875))
        || (HPRatio(2200801) <= 0.5 && EventValue(12204860, 10) <= 2 && !EventFlag(12204875));
    flagHp2 = EventValue(12204860, 10) >= 5
        || ((CharacterHPValue(2200800) == 1 || CharacterHPValue(2200801) == 1)
            && EventValue(12204860, 10) <= 4
            && EventValue(12204860, 10) >= 3);
    WaitFor(hpFlag || flag || flagHp || flagHp2);
L1:
    hp = CharacterHPValue(2200800) == 1;
    hp2 = hp || CharacterHPValue(2200800) != 1;
    if (!hp) {
        RequestCharacterAnimationReset(2200800, Interpolation.Interpolated);
        WaitFixedTimeSeconds(0.1);
        ForceAnimationPlayback(2200800, 3011, false, false, false);
    } else {
L2:
        RequestCharacterAnimationReset(2200801, Interpolation.Interpolated);
        WaitFixedTimeSeconds(0.1);
        ForceAnimationPlayback(2200801, 3011, false, false, false);
    }
L3:
    GotoIf(L4, flag.Passed);
    GotoIf(L5, flagHp.Passed);
    GotoIf(L6, flagHp2.Passed);
    WaitFixedTimeFrames(65);
    ForceAnimationPlayback(2200811, 6200, false, false, false);
    ChangeCharacterEnableState(2200811, Enabled);
    SetCharacterAnimationState(2200811, Enabled);
    DeactivateGenerator(2205001, Disabled);
    WaitFixedTimeFrames(35);
    ForceAnimationPlayback(2200812, 6200, false, false, false);
    ChangeCharacterEnableState(2200812, Enabled);
    SetCharacterAnimationState(2200812, Enabled);
    DeactivateGenerator(2205002, Disabled);
    EndEvent();
L4:
    ForceAnimationPlayback(2200810, 6200, false, false, false);
    ChangeCharacterEnableState(2200810, Enabled);
    SetCharacterAnimationState(2200810, Enabled);
    DeactivateGenerator(2205000, Disabled);
    SetEventFlag(12204876, ON);
    SetEventFlag(12201810, ON);
    RestartEvent();
L5:
    ForceAnimationPlayback(2200811, 6200, false, false, false);
    ChangeCharacterEnableState(2200811, Enabled);
    SetCharacterAnimationState(2200811, Enabled);
    DeactivateGenerator(2205001, Disabled);
    SetEventFlag(12204875, ON);
    RestartEvent();
L6:
    ForceAnimationPlayback(2200812, 6200, false, false, false);
    ChangeCharacterEnableState(2200812, Enabled);
    SetCharacterAnimationState(2200812, Enabled);
    DeactivateGenerator(2205002, Disabled);
    EndEvent();
});

// 召喚許可第1段階_アイコレクター
$Event(12204840, Restart, function() {
    EndIf(EventFlag(12201800));
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(!EventFlag(12204845));
    flag = EventValue(12204860, 10) >= 3;
    flag2 = EventFlag(12204870) && EventValue(12204860, 10) <= 2;
    WaitFor(flag || flag2 || (CharacterHPValue(2200800) == 1 && CharacterHPValue(2200801) == 1));
    if (flag2.Passed) {
        hp = CharacterHPValue(2200800) == 1;
        WaitFor(hp || CharacterHPValue(2200800) != 1);
        if (hp.Passed) {
            WaitRandomTimeSeconds(5, 15);
            RequestCharacterAICommand(2200801, 10, 2);
            RequestCharacterAIReplan(2200801);
        } else {
L1:
            WaitRandomTimeSeconds(5, 15);
            RequestCharacterAICommand(2200800, 10, 2);
            RequestCharacterAIReplan(2200800);
        }
L2:
        WaitFor(!EventFlag(12204870));
        RequestCharacterAICommand(2200800, -1, 2);
        RequestCharacterAIReplan(2200800);
        RestartEvent();
    }
L0:
    SetEventFlag(12204880, ON);
});

// 召喚許可第2段階_アイコレクター
$Event(12204841, Restart, function() {
    EndIf(EventFlag(12201800));
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(EventFlag(12204880));
    flag = EventValue(12204860, 10) >= 5;
    flag2 = EventValue(12204860, 10) <= 4 && EventFlag(12204870);
    flag3 = EventValue(12204860, 10) <= 4 && EventFlag(12204871);
    hp = CharacterHPValue(2200800) == 1 && CharacterHPValue(2200801) == 1;
    WaitFor(flag || flag2 || flag3 || hp);
    if (!flag.Passed) {
        if (!hp.Passed) {
            cond &= CharacterHPValue(2200800) == 1;
            WaitFor(cond || CharacterHPValue(2200800) != 1);
            if (cond.Passed) {
                WaitRandomTimeSeconds(10, 20);
                RequestCharacterAICommand(2200801, 10, 2);
                RequestCharacterAIReplan(2200801);
            } else {
L1:
                WaitRandomTimeSeconds(10, 20);
                RequestCharacterAICommand(2200800, 10, 2);
                RequestCharacterAIReplan(2200800);
            }
L2:
            cond &= !EventFlag(12204870) && !EventFlag(12204871);
            WaitFor(cond);
            RequestCharacterAICommand(2200800, -1, 2);
            RequestCharacterAIReplan(2200800);
            RestartEvent();
        }
    }
L0:
    SetEventFlag(12204881, ON);
});

// 召喚許可第3段階_アイコレクター
$Event(12204842, Restart, function() {
    EndIf(EventFlag(12201800));
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(EventFlag(12204881));
    WaitFor(EventFlag(12204870) || EventFlag(12204871) || EventFlag(12204872));
    WaitRandomTimeSeconds(15, 25);
    RequestCharacterAICommand(2200800, 10, 2);
    RequestCharacterAICommand(2200801, 10, 2);
    RequestCharacterAIReplan(2200800);
    RequestCharacterAIReplan(2200801);
    WaitFor(!EventFlag(12204870) && !EventFlag(12204871) && !EventFlag(12204872));
    RequestCharacterAICommand(2200800, -1, 2);
    RequestCharacterAICommand(2200801, -1, 2);
    RequestCharacterAIReplan(2200800);
    RequestCharacterAIReplan(2200801);
    RestartEvent();
});

// お供無効化_アイコレクター
$Event(12204843, Restart, function() {
    WaitFixedTimeSeconds(1);
    ChangeCharacterEnableState(2200810, Disabled);
    ChangeCharacterEnableState(2200811, Disabled);
    ChangeCharacterEnableState(2200812, Disabled);
    SetCharacterAnimationState(2200810, Disabled);
    SetCharacterAnimationState(2200811, Disabled);
    SetCharacterAnimationState(2200812, Disabled);
    EndIf(!EventFlag(12201810));
    if (!ThisEvent()) {
        WaitFor(!EventFlag(12204845));
    }
L0:
    ForceAnimationPlayback(2200800, 3011, false, false, false);
    ForceAnimationPlayback(2200810, 6200, false, false, false);
    ChangeCharacterEnableState(2200810, Enabled);
    SetCharacterAnimationState(2200810, Enabled);
    DeactivateGenerator(2205000, Disabled);
});

// ホストSAN値判定_アイコレクター
$Event(12204844, Restart, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(PlayerInsightAmount() <= 0);
    SetEventFlag(12204845, ON);
    WaitFor(PlayerInsightAmount() >= 1);
    SetEventFlag(12204845, OFF);
    RestartEvent();
});

// 入口扉を開放
$Event(12200100, Default, function() {
    if (ThisEvent()) {
        ReproduceObjectAnimation(2201001, 1);
        SetObjactState(2201001, 2200010, Disabled);
        NotifySoundDampeningOfDoorEvent(2201001, DoorState.DoorOpening);
        EndEvent();
    }
L0:
    WaitFor(ObjActEventFlag(12200101));
    CreatePlaylog(122);
    WaitFixedTimeSeconds(0);
});

// ボス部屋後の扉を開放
$Event(12200101, Default, function() {
    if (ThisEvent()) {
        ReproduceObjectAnimation(2201060, 0);
        SetObjactState(2201060, 2200030, Disabled);
        NotifySoundDampeningOfDoorEvent(2201060, DoorState.DoorOpening);
        EndEvent();
    }
L0:
    WaitFor(ObjActEventFlag(12200500));
    WaitFixedTimeSeconds(0);
});

// 城門SC解放
$Event(12200110, Default, function() {
    if (ThisEventSlot()) {
        ReproduceObjectAnimation(2201002, 1);
        SetObjactState(2201220, 100, Disabled);
        NotifySoundDampeningOfDoorEvent(2201002, DoorState.DoorOpening);
        EndEvent();
    }
L0:
    WaitFor(ObjActEventFlag(12200112));
    CreatePlaylog(158);
    SetObjactState(2201220, 100, Disabled);
    ForceAnimationPlayback(2201002, 1, false, false, false);
    WaitFixedTimeSeconds(0);
});

// 城門SC施錠Msg表示
$Event(12200111, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12200110));
    act = ActionButtonInArea(2200000, 2201002);
    act2 = ActionButtonInArea(2200001, 2201002);
    flag = EventFlag(12200110);
    WaitFor(act || act2 || flag);
    EndIf(flag.Passed);
    DisplayGenericDialog(10010160, PromptType.OKCANCEL, NumberofOptions.OneButton, 2201002, 3);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

// 城門SC_レバー扉を開けたあとのレバー
$Event(12200112, Default, function() {
    SetNetworkSyncState(Disabled);
    WaitFor(EventFlag(12200110) && ActionButtonInArea(7100, 2201220));
    DisplayGenericDialog(10010172, PromptType.OKCANCEL, NumberofOptions.OneButton, 2201220, 3);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

// SCエレベーター初期化
$Event(12200120, Default, function() {
    flag = EventFlag(12200125);
    WaitFor(flag || !EventFlag(12200125));
    if (!flag.Passed) {
        ReproduceObjectAnimation(2201210, 0);
        SetObjactState(2201200, 100, Disabled);
        SetObjactState(2201201, 100, Enabled);
    } else {
L0:
        ReproduceObjectAnimation(2201210, 4);
        SetObjactState(2201200, 100, Enabled);
        SetObjactState(2201201, 100, Disabled);
    }
L1:
    if (!EventFlag(12200121)) {
        SetObjactState(2201200, 100, Disabled);
        SetObjactState(2201201, 100, Disabled);
    }
L2:
    NoOp();
});

// SCエレベーター初回起動
$Event(12200121, Default, function() {
    EndIf(ThisEventSlot());
    SetObjactState(2201200, 100, Disabled);
    SetObjactState(2201201, 100, Disabled);
    WaitFor(InArea(10000, 2202010));
    CreatePlaylog(186);
    SetObjactState(2201200, 100, Disabled);
    SetObjactState(2201201, 100, Enabled);
});

// SCエレベーター下がる
$Event(12200122, Default, function() {
    if (!(!EventFlag(12200125) && EventFlag(12200126))) {
        WaitFor(
            (!EventFlag(12200125) && !EventFlag(12200126) && InArea(10000, 2202000))
                || (!EventFlag(12200125) && !EventFlag(12200126) && ObjActEventFlag(12200128)));
    }
L0:
    SetEventFlag(12200126, ON);
    ForceAnimationPlayback(2201210, 1, false, false, false);
    WaitFixedTimeFrames(15);
    ForceAnimationPlayback(2201210, 2, false, false, false);
    WaitFixedTimeFrames(150);
    WaitFor(!AllPlayersInArea(2202001));
    ForceAnimationPlayback(2201210, 3, false, false, false);
    WaitFixedTimeFrames(30);
    SetEventFlag(12200125, ON);
    SetEventFlag(12200126, OFF);
    SetObjactState(2201200, 100, Enabled);
    SetObjactState(2201201, 100, Disabled);
    RestartEvent();
});

// SCエレベーター上がる
$Event(12200123, Default, function() {
    if (!(EventFlag(12200125) && EventFlag(12200126))) {
        WaitFor(
            (EventFlag(12200125) && !EventFlag(12200126) && InArea(10000, 2202001))
                || (EventFlag(12200125) && !EventFlag(12200126) && ObjActEventFlag(12200127)));
    }
L0:
    SetEventFlag(12200126, ON);
    ForceAnimationPlayback(2201210, 5, false, false, false);
    WaitFixedTimeFrames(15);
    ForceAnimationPlayback(2201210, 6, false, false, false);
    WaitFixedTimeFrames(150);
    WaitFor(!AllPlayersInArea(2202000));
    ForceAnimationPlayback(2201210, 7, false, false, false);
    WaitFixedTimeFrames(30);
    SetEventFlag(12200125, OFF);
    SetEventFlag(12200126, OFF);
    SetObjactState(2201200, 100, Disabled);
    SetObjactState(2201201, 100, Enabled);
    RestartEvent();
});

// SCエレベータ_呼び出しレバー操作不能
$Event(12200124, Default, function() {
    SetNetworkSyncState(Disabled);
    WaitFor(
        (!EventFlag(12200121) && ActionButtonInArea(7100, 2201200))
            || (!EventFlag(12200121) && ActionButtonInArea(7100, 2201201))
            || (!EventFlag(12200126) && !EventFlag(12200125) && ActionButtonInArea(7100, 2201200))
            || (!EventFlag(12200126) && EventFlag(12200125) && ActionButtonInArea(7100, 2201201))
            || (EventFlag(12200126) && ActionButtonInArea(7100, 2201200))
            || (EventFlag(12200126) && ActionButtonInArea(7100, 2201201)));
    DisplayGenericDialog(10010172, PromptType.OKCANCEL, NumberofOptions.OneButton, -1, 3);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

// 馬車が登場
$Event(12200130, Restart, function() {
    ChangeCharacterEnableState(2201310, Disabled);
    DeactivateObject(2201300, Disabled);
    SetCharacterHPBarDisplay(2201310, Disabled);
    EndIf(EventFlag(12507810));
    if (!ThisEvent()) {
        WaitFor(
            PlayerHasItem(ItemType.Goods, 4003) && EventFlag(12201800) && InArea(10000, 2202410));
        SetEventFlag(9180, ON);
        WaitFixedTimeFrames(1);
        PlayCutsceneToPlayer(22000030, CutscenePlayMode.Skippable, 10000);
        WaitFixedTimeFrames(1);
        SetEventFlag(9180, OFF);
        SetEventFlag(12204020, ON);
    }
L0:
    ChangeCharacterEnableState(2201310, Enabled);
    DeactivateObject(2201300, Enabled);
    SetCharacterHPBarDisplay(2201310, Disabled);
});

// 馬車ワープ
$Event(12200131, Restart, function() {
    EndIf(EventFlag(12507810));
    WaitFor(EventFlag(12200130) && !CharacterDead(2201310) && ActionButtonInArea(2200010, 2201300));
    SetEventFlag(9180, ON);
    WaitFixedTimeFrames(1);
    PlayCutsceneToPlayer(22000040, CutscenePlayMode.Skippable, 10000);
    WaitFixedTimeFrames(1);
    SetEventFlag(9180, OFF);
    WarpPlayerToRespawnPoint(2502959);
});

// 馬車馬を殺害判定
$Event(12200132, Restart, function() {
    EndIf(EventFlag(12507810));
    WaitFor(HPRatio(2201310) <= 0);
    SetEventState(12200131, 0, EventEndType.End);
});

// 馬車出現時敵ワープ_XX
$Event(12200150, Restart, function(chrEntityId, entityId) {
    EndIf(EventFlag(12200130));
    WaitFor(EventFlag(12204020));
    EndIf(!InArea(chrEntityId, 2202640));
    WarpCharacterAndSetFloor(chrEntityId, TargetEntityType.Area, entityId, -1, 0);
});

// カラスが飛び立つ_XX
$Event(12200210, Restart, function(objEntityId, targetDistance, timeFrames, areaEntityId, animationId) {
    if (ThisEventSlot()) {
        ReproduceObjectAnimation(objEntityId, animationId);
        DeactivateObject(objEntityId, Disabled);
        EndEvent();
    }
    WaitFor(
        InArea(10000, areaEntityId) || EntityInRadiusOfEntity(objEntityId, 10000, targetDistance));
    WaitFixedTimeFrames(timeFrames);
    ForceAnimationPlayback(objEntityId, animationId, false, true, false);
    DeactivateObject(objEntityId, Disabled);
});

// さまよう狂気_XX
$Event(12200220, Restart, function(chrEntityId, eventFlagId) {
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

// 時間帯変化_墓地街
$Event(12200300, Default, function() {
    if (!EventFlag(9802)) {
        GotoIf(L1, EventFlag(9801));
        if (!EventFlag(9800)) {
        }
L0:
        ActivateMapPart(2206000, Enabled);
        ActivateMapPart(2206001, Disabled);
        Goto(L3);
L1:
        ActivateMapPart(2206000, Disabled);
        ActivateMapPart(2206001, Enabled);
    } else {
L2:
        ActivateMapPart(2206000, Disabled);
        ActivateMapPart(2206001, Enabled);
    }
L3:
    WaitFor(
        EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 9800)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 9801)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 9802));
    RestartEvent();
});

// 宝箱_XX
$Event(12200310, Default, function(objEntityId, objactEventFlag, objParameterId) {
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

// SAN値で狂気の悪霊出現_墓地街_XX
$Event(12204000, Restart, function(chrEntityId, targetDistance) {
    if (!EventFlag(12204011)) {
        ChangeCharacterEnableState(chrEntityId, Disabled);
        EndEvent();
    }
L0:
    ChangeCharacterEnableState(chrEntityId, Disabled);
    WaitFor(
        ((EventFlag(9801) || EventFlag(9802))
            && EntityInRadiusOfEntity(10000, chrEntityId, targetDistance)
            && CharacterType(10000, TargetType.Alive))
            || ThisEventSlot());
    ChangeCharacterEnableState(chrEntityId, Enabled);
    ForceAnimationPlayback(chrEntityId, 6200, false, false, false);
});

// SAN値判定
$Event(12204010, Restart, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    EndIf(PlayerInsightAmount() < 15);
    SetEventFlag(12204011, ON);
});

// 群衆Bが駆け寄る
$Event(12205000, Restart, function() {
    EndIf(EventFlag(12205001));
    if (!ThisEvent()) {
        SetCharacterAIState(2200120, Disabled);
        WaitFor(
            (CharacterType(10000, TargetType.Alive)
                || CharacterType(10000, TargetType.WhitePhantom))
                && InArea(10000, 2202061));
    }
L0:
    SetEventState(12205001, 0, EventEndType.End);
    SetCharacterAIState(2200120, Enabled);
    SetCharacterHome(2200120, 2202360);
    RequestCharacterAICommand(2200120, 10, 0);
    RequestCharacterAIReplan(2200120);
});

// 群衆Bが駆け寄る_ロジックONのみ
$Event(12205001, Restart, function() {
    EndIf(EventFlag(12205000));
    if (!ThisEvent()) {
        SetCharacterAIState(2200120, Disabled);
        WaitFor(
            ((CharacterType(10000, TargetType.Alive)
                || CharacterType(10000, TargetType.WhitePhantom))
                && (InArea(10000, 2202062) || InArea(10000, 2202060)))
                || EntityInRadiusOfEntity(10000, 2200120, 10)
                || CharacterDamagedBy(2200120, 10000));
    }
L0:
    SetEventState(12205000, 0, EventEndType.End);
    SetCharacterAIState(2200120, Enabled);
});

// 群衆Bが駆け寄る_移動完了
$Event(12205002, Restart, function() {
    if (!ThisEvent()) {
        WaitFor(InArea(2200120, 2202360) && CharacterAIState(2200120, AIStateType.Normal));
        ForceAnimationPlayback(2200120, 3006, false, false, false);
    }
L0:
    RequestCharacterAICommand(2200120, -1, 0);
    RequestCharacterAIReplan(2200120);
});

// 群衆Bが駆け寄る_移動中断
$Event(12205003, Restart, function() {
    EndIf(ThisEvent());
    WaitFor(
        ((CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
            && EntityInRadiusOfEntity(10000, 2200120, 4))
            || HasDamageType(2200120, -1, DamageType.Unspecified)
            || CharacterAIState(2200120, AIStateType.Combat)
            || EventFlag(12205002));
    RequestCharacterAICommand(2200120, -1, 0);
    RequestCharacterAIReplan(2200120);
});

// 群衆女が合流
$Event(12205010, Restart, function(chrEntityId, chrEntityId2, areaEntityId, areaEntityId2, areaEntityId3, eventFlagId) {
    EndIf(EventFlag(eventFlagId));
    if (!ThisEventSlot()) {
        SetCharacterAIState(chrEntityId2, Disabled);
        chr = CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom);
        WaitFor(
            (chr
                && InArea(10000, areaEntityId)
                && CharacterAIState(chrEntityId, AIStateType.Combat))
                || EntityInRadiusOfEntity(chrEntityId2, 10000, 7)
                || (chr && InArea(10000, areaEntityId3))
                || HasDamageType(chrEntityId, -1, DamageType.Unspecified));
    }
L0:
    SetCharacterAIState(chrEntityId2, Enabled);
    SetCharacterHome(chrEntityId2, areaEntityId2);
    RequestCharacterAICommand(chrEntityId2, 20, 0);
    RequestCharacterAIReplan(chrEntityId2);
});

// 群衆女が合流_移動完了
$Event(12205015, Restart, function(chrEntityId, areaEntityId, commandId, eventFlagId) {
    EndIf(ThisEventSlot());
    WaitFor(EventFlag(eventFlagId));
    WaitFor(
        ((CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
            && EntityInRadiusOfEntity(chrEntityId, 10000, 7))
            || InArea(chrEntityId, areaEntityId)
            || HasDamageType(chrEntityId, 10000, DamageType.Unspecified));
    RequestCharacterAICommand(chrEntityId, commandId, 0);
    RequestCharacterAIReplan(chrEntityId);
});

// 群衆女が合流_走って来る
$Event(12205040, Restart, function() {
    EndIf(EventFlag(12205041));
    if (!ThisEvent()) {
        WaitFor(
            ((CharacterAIState(2200212, AIStateType.Combat) && !CharacterDead(2200212))
                || (CharacterAIState(2200303, AIStateType.Combat) && !CharacterDead(2200303))
                || (CharacterAIState(2200300, AIStateType.Combat) && !CharacterDead(2200300))
                || (CharacterAIState(2200100, AIStateType.Combat) && !CharacterDead(2200100))
                || (CharacterAIState(2200213, AIStateType.Combat) && !CharacterDead(2200213)))
                && (CharacterType(10000, TargetType.Alive)
                    || CharacterType(10000, TargetType.WhitePhantom))
                && InArea(10000, 2202320));
    }
L0:
    SetSpEffect(2200211, 5000, false);
    ChangeCharacterPatrolBehavior(2200211, 2203030);
    RequestCharacterAIReplan(2200211);
});

// 群衆女が合流_通常に戻る
$Event(12205041, Restart, function() {
    EndIf(ThisEvent());
    WaitFor(CharacterAIState(2200211, AIStateType.Combat) || InArea(2200211, 2202320));
    WaitFor(CharacterAIState(2200211, AIStateType.Normal));
    ClearSpEffect(2200211, 5000);
    ChangeCharacterPatrolBehavior(2200211, 2203031);
    RequestCharacterAIReplan(2200211);
});

// 群衆女が背撃
$Event(12205020, Restart, function() {
    if (!ThisEvent()) {
        ForceAnimationPlayback(2200140, 7004, true, false, false);
        SetCharacterAIId(2200140, 261091);
        chr = CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom);
        areaChr = (!areaChr && InArea(10000, 2202080))
            || (CharacterAIState(2200140, AIStateType.Alert)
                && EntityInRadiusOfEntity(2200140, 10000, 5));
        WaitFor(areaChr);
    }
L0:
    SetCharacterAIId(2200140, 261003);
    ForceAnimationPlayback(2200140, 7005, false, false, false);
});

// 狂信者の獣が飛びかかる_移動
$Event(12205030, Restart, function() {
    if (!ThisEvent()) {
        area = InArea(10000, 2202090);
        area2 = EntityInRadiusOfEntity(10000, 2200150, 10);
        WaitFor(area || area2);
        EndIf(area2.Passed);
    }
L0:
    SetCharacterHome(2200150, 2202390);
    RequestCharacterAICommand(2200150, 10, 0);
    RequestCharacterAIReplan(2200150);
});

// 狂信者の獣飛びかかる_攻撃
$Event(12205031, Restart, function() {
    EndIf(ThisEvent());
    area = InArea(2200150, 2202390);
    chrArea = (CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
        && EntityInRadiusOfEntity(10000, 2200150, 3.5);
    WaitFor(area || chrArea);
    if (!chrArea.Passed) {
        RequestCharacterAnimationReset(2200150, Interpolation.Interpolated);
        RotateCharacter(2200150, 10000, 3001, false);
    }
L0:
    RequestCharacterAICommand(2200150, -1, 0);
    RequestCharacterAIReplan(2200150);
});

// 処刑人が合流
$Event(12205050, Restart, function() {
    EndIf(EventFlag(12205051));
    if (!ThisEvent()) {
        SetCharacterAIState(2200280, Disabled);
        chrArea = (CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
            && EntityInRadiusOfEntity(2200280, 10000, 3);
        dmg = HasDamageType(2200280, -1, DamageType.Unspecified);
        chr = CharacterAIState(2200270, AIStateType.Combat);
        WaitFor(chrArea || dmg || chr);
    }
L0:
    SetCharacterAIState(2200280, Enabled);
    EndIf(!chr.Passed);
    WaitFixedTimeSeconds(5);
    SetCharacterHome(2200280, 2209005);
    RequestCharacterAICommand(2200280, 10, 0);
    RequestCharacterAIReplan(2200280);
});

// 処刑人が合流_移動完了
$Event(12205051, Restart, function() {
    if (!ThisEvent()) {
        WaitFor(
            ((CharacterType(10000, TargetType.Alive)
                || CharacterType(10000, TargetType.WhitePhantom))
                && EntityInRadiusOfEntity(2200280, 10000, 5))
                || InArea(2200280, 2209005)
                || HasDamageType(2200280, -1, DamageType.Unspecified));
    }
L0:
    RequestCharacterAICommand(2200280, -1, 0);
    RequestCharacterAIReplan(2200280);
});

// さまよう狂気落下
$Event(12205060, Restart, function() {
    if (!ThisEvent()) {
        SetCharacterAIState(2200170, Disabled);
        SetCharacterGravity(2200170, Disabled);
        SetCharacterInvincibility(2200170, Enabled);
        WaitFor(ObjectDestroyed(2201030) || ObjectDestroyed(2201031) || ObjectDestroyed(2201032));
    }
L0:
    SetCharacterInvincibility(2200170, Disabled);
    SetCharacterGravity(2200170, Enabled);
    SetCharacterAIState(2200170, Enabled);
    RequestCharacterAIReplan(2200170);
});

// 群衆A銃が狙撃ポイントへ
$Event(12205070, Restart, function() {
    if (!ThisEvent()) {
        SetCharacterAIState(2200411, Disabled);
        WaitFor(
            ((CharacterType(10000, TargetType.Alive)
                || CharacterType(10000, TargetType.WhitePhantom))
                && EntityInRadiusOfEntity(2200411, 100000, 10))
                || CharacterAIState(2200160, AIStateType.Combat)
                || CharacterAIState(2200161, AIStateType.Combat));
    }
L0:
    SetCharacterAIState(2200411, Enabled);
    RequestCharacterAIReplan(2200411);
});

// 群衆女が背後投げ
$Event(12205080, Restart, function() {
    if (!ThisEvent()) {
        SetCharacterAIState(2200205, Disabled);
        area = InArea(10000, 2202155);
        WaitFor(area || InArea(10000, 2202156) || CharacterDamagedBy(2200205, 10000));
        if (area.Passed) {
            RotateCharacter(2200205, 10000, 3012, false);
        }
    }
L0:
    WaitFixedTimeFrames(35);
    SetCharacterAIState(2200205, Enabled);
});

// 群衆女がブラインド攻撃_移動_XX
$Event(12205100, Restart, function(chrEntityId, areaEntityId, targetDistance, eventFlagId, commandId) {
    EndIf(EventFlag(eventFlagId));
    if (!ThisEventSlot()) {
        chr = CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom);
        WaitFor(
            HasDamageType(chrEntityId, -1, DamageType.Unspecified)
                || (chr && InArea(10000, areaEntityId))
                || (chr && EntityInRadiusOfEntity(10000, chrEntityId, targetDistance)));
    }
L0:
    SetCharacterEventTarget(chrEntityId, 10000);
    RequestCharacterAICommand(chrEntityId, commandId, 0);
    RequestCharacterAIReplan(chrEntityId);
});

// 群衆女がブラインド攻撃_攻撃_XX
$Event(12205105, Restart, function(chrEntityId, areaEntityId, playAnimationId, targetDistance) {
    EndIf(ThisEventSlot());
    chr = CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom);
    chrArea = chr
        && EntityInRadiusOfEntity(10000, chrEntityId, targetDistance)
        && InArea(chrEntityId, areaEntityId);
    chrArea2 = chr
        && EntityInRadiusOfEntity(10000, chrEntityId, targetDistance)
        && !InArea(chrEntityId, areaEntityId);
    WaitFor(chrArea || chrArea2);
    if (!chrArea2.Passed) {
        RotateCharacter(chrEntityId, 10000, playAnimationId, false);
    }
L1:
    RequestCharacterAICommand(chrEntityId, -1, 0);
    RequestCharacterAIReplan(chrEntityId);
});

// アニメ再生起動_XX
$Event(12205110, Restart, function(chrEntityId, areaEntityId, targetDistance, playAnimationId) {
    EndIf(ThisEventSlot());
    SetCharacterAIState(chrEntityId, Disabled);
    chr = CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom);
    areaDmgChr |= InArea(10000, areaEntityId) || EntityInRadiusOfEntity(10000, chrEntityId, targetDistance);
    chr2 = chr && areaDmgChr;
    areaDmgChr |= HasDamageType(chrEntityId, -1, DamageType.Unspecified) || chr2;
    WaitFor(areaDmgChr);
    GotoIf(L0, !chr2.Passed);
    RotateCharacter(chrEntityId, 10000, playAnimationId, false);
    SetCharacterAIState(chrEntityId, Enabled);
    EndEvent();
    SetCharacterAIState(chrEntityId, Enabled);
});

// 敵ロジックON_XX
$Event(12205120, Restart, function(chrEntityId, areaEntityId, targetDistance, areaEntityId2) {
    EndIf(ThisEventSlot());
    SetCharacterAIState(chrEntityId, Disabled);
    WaitFor(
        ((CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
            && (InArea(10000, areaEntityId)
                || InArea(10000, areaEntityId2)
                || EntityInRadiusOfEntity(10000, chrEntityId, targetDistance)))
            || CharacterDamagedBy(chrEntityId, 10000));
    SetCharacterAIState(chrEntityId, Enabled);
});

// 特殊待機_XX
$Event(12205150, Restart, function(chrEntityId, animationId, animationId2, targetDistance) {
    EndIf(ThisEventSlot());
    ForceAnimationPlayback(chrEntityId, animationId, true, false, false);
    WaitFor(
        ((CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
            && EntityInRadiusOfEntity(chrEntityId, 10000, targetDistance))
            || CharacterAIState(chrEntityId, AIStateType.Alert)
            || CharacterAIState(chrEntityId, AIStateType.Recognition)
            || CharacterAIState(chrEntityId, AIStateType.Combat)
            || HasDamageType(chrEntityId, -1, DamageType.Unspecified));
    ForceAnimationPlayback(chrEntityId, animationId2, false, false, false);
    RequestCharacterAIReplan(chrEntityId);
});

// 誘爆攻撃_XX
$Event(12205160, Restart, function(areaEntityId, objEntityId, chrEntityId, chrEntityId2) {
    WaitFor(
        (CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
            && InArea(10000, areaEntityId)
            && !ObjectDestroyed(objEntityId));
    SetCharacterEventTarget(chrEntityId, chrEntityId2);
    RequestCharacterAICommand(chrEntityId, 100, 0);
    RequestCharacterAIReplan(chrEntityId);
    WaitFor(CharacterHasEventMessage(chrEntityId, 100));
    RequestCharacterAICommand(chrEntityId, -1, 0);
    RequestCharacterAIReplan(chrEntityId);
    RestartEvent();
});

// 爆発壺_XX
$Event(12205170, Restart, function(objEntityId, chrEntityId) {
    if (ThisEventSlot()) {
        ReproduceObjectDestruction(objEntityId, 1);
        EndEvent();
    }
L1:
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

// 押し出し推奨_XX
$Event(12205200, Restart, function(chrEntityId) {
    WaitFor(
        (CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
            && (InArea(10000, 2202100)
                || InArea(10000, 2202101)
                || InArea(10000, 2202102)
                || InArea(10000, 2202103)
                || InArea(10000, 2202104)
                || InArea(10000, 2202105)
                || InArea(10000, 2202106)
                || InArea(10000, 2202107)
                || InArea(10000, 2202108)
                || InArea(10000, 2202109)));
    RequestCharacterAICommand(chrEntityId, 100, 0);
    WaitFor(
        !AllPlayersInArea(2202100)
            && !AllPlayersInArea(2202101)
            && !AllPlayersInArea(2202102)
            && !AllPlayersInArea(2202103)
            && !AllPlayersInArea(2202104)
            && !AllPlayersInArea(2202105)
            && !AllPlayersInArea(2202106)
            && !AllPlayersInArea(2202107)
            && !AllPlayersInArea(2202108)
            && !AllPlayersInArea(2202109));
    RequestCharacterAICommand(chrEntityId, -1, 0);
    RestartEvent();
});

// 屍肉鳥が死んだふり_XX
$Event(12205210, Restart, function(chrEntityId) {
    EndIf(ThisEventSlot());
    ForceAnimationPlayback(chrEntityId, 9003, true, false, false);
    SetCharacterAIId(chrEntityId, 117007);
    chr = CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom);
    WaitFor(
        (CharacterAIState(chrEntityId, AIStateType.Alert)
            && EntityInRadiusOfEntity(chrEntityId, 10000, 5)
            && chr)
            || (chr && CharacterDamagedBy(chrEntityId, 10000))
            || (chr
                && EntityInRadiusOfEntity(chrEntityId, 10000, 3)
                && ((CharacterDead(2200230) && CharacterDead(2200231) && CharacterDead(2200203))
                    || (CharacterDead(2200230) && CharacterDead(2200231) && CharacterDead(2200232))
                    || (CharacterDead(2200230) && CharacterDead(2200203) && CharacterDead(2200232))
                    || (CharacterDead(2200231) && CharacterDead(2200203) && CharacterDead(2200232)))));
    SetCharacterAIId(chrEntityId, 117000);
    ForceAnimationPlayback(chrEntityId, 9060, false, false, false);
});

// 巡回中アニメ_固定_XX
$Event(12205220, Restart, function(chrEntityId, areaEntityId, animationId, areaEntityId2) {
    chrArea = CharacterBackreadStatus(chrEntityId)
        && CharacterAIState(chrEntityId, AIStateType.Normal)
        && InArea(chrEntityId, areaEntityId);
    hp = HPRatio(chrEntityId) <= 0;
    WaitFor(hp || chrArea);
    EndIf(hp.Passed);
    RequestCharacterAnimationReset(chrEntityId, Interpolation.Interpolated);
    ForceAnimationPlayback(chrEntityId, animationId, false, false, false);
    chr = CharacterAIState(chrEntityId, AIStateType.Alert)
        || CharacterAIState(chrEntityId, AIStateType.Recognition)
        || CharacterAIState(chrEntityId, AIStateType.Combat);
    area = !InArea(chrEntityId, areaEntityId2);
    hp2 = HPRatio(chrEntityId) <= 0;
    WaitFor(chr || area || hp2);
    EndIf(hp2.Passed);
    RestartIf(area.Passed);
    RequestCharacterAnimationReset(chrEntityId, Interpolation.Interpolated);
    ForceAnimationPlayback(chrEntityId, 0, false, true, false);
    RestartEvent();
});

// 獣テリトリー_XX
$Event(12205230, Restart, function(chrEntityId, aiId) {
    SetCharacterAIId(chrEntityId, 114097);
    RequestCharacterAIReplan(chrEntityId);
    WaitFor(
        ((CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
            && (InArea(10000, 2202620) || EntityInRadiusOfEntity(10000, chrEntityId, 10)))
            || CharacterDamagedBy(chrEntityId, 10000));
    SetCharacterAIId(chrEntityId, aiId);
    RequestCharacterAIReplan(chrEntityId);
    WaitFor(!AllPlayersInArea(2202620) && CharacterAIState(chrEntityId, AIStateType.Normal));
    RestartEvent();
});

// 処刑人巡回起動_XX
$Event(12205240, Restart, function(chrEntityId) {
    if (!ThisEventSlot()) {
        SetCharacterAIState(chrEntityId, Disabled);
        if (EventFlag(12200110)) {
            chr = CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom);
            WaitFor(
                (chr
                    && (InArea(10000, 2202250)
                        || InArea(10000, 2202251)
                        || InArea(10000, 2202252)
                        || InArea(10000, 2202253)))
                    || EntityInRadiusOfEntity(10000, chrEntityId, 5)
                    || CharacterDamagedBy(chrEntityId, 10000));
        } else {
L0:
            chr2 = CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom);
            area = InArea(10000, 2202250) || InArea(10000, 2202251) || InArea(10000, 2202253);
            chrAreaDmg = (chr && area)
                || EntityInRadiusOfEntity(10000, chrEntityId, 5)
                || CharacterDamagedBy(chrEntityId, 10000);
            WaitFor(area);
        }
    }
L1:
    SetCharacterAIState(chrEntityId, Enabled);
});

// 処刑人待ち合わせ_XX
$Event(12205250, Restart, function(chrEntityId, areaEntityId, chrEntityId2, areaEntityId2) {
    WaitFor(
        !CharacterDead(chrEntityId2)
            && InArea(chrEntityId, areaEntityId)
            && CharacterAIState(chrEntityId, AIStateType.Normal));
    RequestCharacterAICommand(chrEntityId, 30, 0);
    WaitFor(
        ((CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
            && EntityInRadiusOfEntity(chrEntityId, 10000, 10))
            || InArea(chrEntityId2, areaEntityId2)
            || HasDamageType(chrEntityId, -1, DamageType.Unspecified));
    RequestCharacterAICommand(chrEntityId, -1, 0);
    WaitFor(!InArea(chrEntityId, areaEntityId));
    RestartEvent();
});

// さまよう狂気が逃げる_XX
$Event(12205260, Restart, function(chrEntityId, areaEntityId, eventFlagId, eventFlagId2) {
    EndIf(EventFlag(eventFlagId));
    EndIf(EventFlag(eventFlagId2));
    if (!ThisEventSlot()) {
        SetCharacterAIState(chrEntityId, Disabled);
        SetSpEffect(chrEntityId, 5000, false);
        WaitFor(
            HasDamageType(chrEntityId, -1, DamageType.Unspecified)
                || ((CharacterType(10000, TargetType.Alive)
                    || CharacterType(10000, TargetType.WhitePhantom))
                    && (InArea(10000, areaEntityId) || EntityInRadiusOfEntity(chrEntityId, 10000, 3))));
    }
L0:
    SetCharacterAIState(chrEntityId, Enabled);
});

// さまよう狂気が逃げる_消える_XX
$Event(12205265, Restart, function(chrEntityId, areaEntityId, areaEntityId2, eventId, eventId2) {
    EndIf(EventFlag(eventId));
    EndIf(ThisEventSlot());
    WaitFor(
        InArea(chrEntityId, areaEntityId2)
            || ((CharacterType(10000, TargetType.Alive)
                || CharacterType(10000, TargetType.WhitePhantom))
                && InArea(10000, areaEntityId)));
    SetEventState(eventId, 0, EventEndType.End);
    SetEventState(eventId2, 0, EventEndType.End);
    RequestCharacterAnimationReset(chrEntityId, Interpolation.Interpolated);
    ForceAnimationPlayback(chrEntityId, 3000, false, false, false);
});

// さまよう狂気が逃げる_巣に逃げる_XX
$Event(12205270, Restart, function(chrEntityId, areaEntityId, eventFlagId, areaEntityId2, areaEntityId3, eventId) {
    EndIf(EventFlag(eventFlagId));
    GotoIf(L0, ThisEventSlot());
    WaitFor(
        ((CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
            && InArea(10000, areaEntityId2))
            || InArea(chrEntityId, areaEntityId3)
            || CharacterAIState(chrEntityId, AIStateType.Combat));
    SetEventState(eventId, 0, EventEndType.End);
    SetCharacterAIState(chrEntityId, Enabled);
    SetCharacterHome(chrEntityId, areaEntityId);
    RequestCharacterAICommand(chrEntityId, 10, 0);
    RequestCharacterAIReplan(chrEntityId);
});

// 汎用住人_SE再生
$Event(12205300, Restart, function(entityId, eventFlagId, eventFlagId2, eventFlagId3) {
    SetMapSoundState(entityId, Disabled);
    DeleteMapSFX(2203040, false);
    EndIf(EventFlag(eventFlagId3));
    SpawnMapSFX(2203040);
    WaitFor(!EventFlag(eventFlagId) && !EventFlag(eventFlagId2));
    SetMapSoundState(entityId, Enabled);
    WaitFor(EventFlag(eventFlagId) || EventFlag(eventFlagId2));
    SetMapSoundState(entityId, Disabled);
    RestartEvent();
});

// マップ初回入場_プレイログ
$Event(12200990, Default, function() {
    EndIf(ThisEvent());
    WaitFor(PlayerStandingOnHit(2203500));
    ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 214, PlayLogMultiplayerType.HostOnly);
    ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 214, PlayLogMultiplayerType.HostOnly);
    ParameterOutput(PlayerPlayLogParameter.Weapon, 214, PlayLogMultiplayerType.HostOnly);
    ParameterOutput(PlayerPlayLogParameter.Armor, 214, PlayLogMultiplayerType.HostOnly);
});


