// ==EMEVD==
// @docs    bb-common.emedf.json
// @compress    DCX_DFLT_10000_44_9
// @game    Bloodborne
// @string    "クリア時間_通し\u0000クリア時間_1プレイ\u0000ボス戦_撃破時間\u0000ボス_撃破\u0000PC情報_ボス撃破_月の落とし子\u0000ボス_戦闘開始\u0000PC情報_ボス撃破_月からの使者\u0000PC情報_聖堂街C到達時\u0000N:\\SPRJ\\data\\Param\\event\\common.emevd\u0000"
// @linked    [180]
// @version    3.6.2
// ==/EMEVD==

// コンストラクタ
$Event(0, Default, function() {
    $InitializeEvent(20, 7000, 2420950, 2421950, 999, 12427800);
    $InitializeEvent(21, 7000, 2420951, 2421951, 12421800, 12427820);
    $InitializeEvent(22, 7000, 2420952, 2421952, 12421700, 12427840);
    $InitializeEvent(20, 7100, 72420200, 2421950);
    $InitializeEvent(21, 7100, 72420201, 2421951);
    $InitializeEvent(22, 7100, 72420202, 2421952);
    $InitializeEvent(20, 7200, 72420100, 2421950, 2102950);
    $InitializeEvent(21, 7200, 72420101, 2421951, 2102950);
    $InitializeEvent(22, 7200, 72420102, 2421952, 2102950);
    $InitializeEvent(20, 7300, 72102420, 2421950);
    $InitializeEvent(21, 7300, 72102421, 2421951);
    $InitializeEvent(22, 7300, 72102422, 2421952);
    DeleteMapSFX(2423910, false);
    $InitializeEvent(0, 12424400, 12424440, 2423910, 12424420, 12424430, 12421800, 6001);
    $InitializeEvent(0, 12424410, SingleplayerSummonSignType.NormalCoop, 2420910, 2422910, 12424420, 12424430, 12424440, 12421800, 10566);
    $InitializeEvent(0, 12424450, 2420910, 2422911, 12424420, 12424430, 12424800);
    $InitializeEvent(0, 12424460, 2420910, 2422911, 2422800, 2422801, 101130, 12424450, 2422801);
    $InitializeEvent(4, 9200, 2423900);
    $InitializeEvent(4, 9220, 2420710, 12424220, 12424221, 2420, 24, 2);
    $InitializeEvent(4, 9240, 2420710, 12424220, 12424221, 12424222, 24, 2);
    $InitializeEvent(4, 9260, 2420710, 12424220, 12424221, 12424222, 24, 2);
    $InitializeEvent(4, 9280, 2420710, 12424220, 12424221, 2420, 12424700, 24, 2);
    StartTimeMeasurement(2420000, 0, Enabled);
    StartTimeMeasurement(2420001, 18, Enabled);
    $InitializeEvent(0, 12420990);
    $InitializeEvent(0, 12420400);
    $InitializeEvent(40, 7600, 2421999, 2423999);
    $InitializeEvent(41, 7600, 2421998, 2423998);
    CreateDamagingObject(12420020, 2421230, 100, 6110, DamageTargetType.Character, 0.6, 0, 1);
    $InitializeEvent(0, 12420123);
    $InitializeEvent(0, 12420124);
    $InitializeEvent(0, 12420140);
    $InitializeEvent(0, 12420150);
    $InitializeEvent(0, 12420151);
    $InitializeEvent(0, 12420152);
    $InitializeEvent(0, 12420153);
    $InitializeEvent(0, 12420156);
    $InitializeEvent(0, 12420850, 2427020, 2427021, 2427022, 12420130, 12420102, 2, 2427000, 920200);
    $InitializeEvent(1, 12420850, 2427025, 2427026, 2427027, 12420132, 12420110, 3, 2427017, 920202);
    $InitializeEvent(2, 12420850, 2427028, 2427029, 2427030, 12420131, 12420111, 3, 2427016, 920203);
    $InitializeEvent(0, 12420853);
    $InitializeEvent(0, 12420854);
    $InitializeEvent(0, 12420280, 2422500);
    $InitializeEvent(1, 12420280, 2422501);
    $InitializeEvent(0, 12420285, 2422502, 12420032);
    $InitializeEvent(1, 12420285, 2422503, 12420033);
    $InitializeEvent(0, 12420000, 2421201, 1, 2420020, 12420120);
    $InitializeEvent(1, 12420000, 2421223, 1, 2420030, 12420121);
    $InitializeEvent(0, 12420030, 12420120);
    $InitializeEvent(2, 12420030, 12420126);
    $InitializeEvent(3, 12420030, 12420127);
    $InitializeEvent(0, 12420050, 2421100, 12421000, 9942);
    $InitializeEvent(1, 12420050, 2421101, 12421001, 9942);
    SetMapSoundState(2423802, Disabled);
    SetMapSoundState(2423803, Disabled);
    SetMapSoundState(2423812, Disabled);
    SetMapSoundState(2423813, Disabled);
    CreateBulletOwner(2420801);
    $InitializeEvent(0, 12424812);
    $InitializeEvent(0, 12424813);
    $InitializeEvent(0, 12421800);
    $InitializeEvent(0, 12421801);
    $InitializeEvent(0, 12421802);
    $InitializeEvent(0, 12424810);
    $InitializeEvent(0, 12424811);
    $InitializeEvent(0, 12424802);
    $InitializeEvent(0, 12424803);
    $InitializeEvent(0, 12424804);
    $InitializeEvent(0, 12424805);
    $InitializeEvent(0, 12424980);
    $InitializeEvent(0, 12424990);
    $InitializeEvent(0, 12421803);
    $InitializeEvent(0, 12424870, 2420, 2420, NPCPartType.Part5, 200, 480, 490, 8040);
    $InitializeEvent(0, 12424871, 2421, 2421, NPCPartType.Part1, 200, 481, 491, 8010);
    $InitializeEvent(1, 12424871, 2422, 2422, NPCPartType.Part2, 200, 482, 492, 8000);
    $InitializeEvent(2, 12424871, 2423, 2423, NPCPartType.Part3, 200, 483, 493, 8030);
    $InitializeEvent(3, 12424871, 2424, 2424, NPCPartType.Part4, 200, 484, 494, 8020);
    $InitializeEvent(0, 12424712);
    $InitializeEvent(0, 12424713);
    $InitializeEvent(0, 12421700);
    $InitializeEvent(0, 12421701);
    $InitializeEvent(0, 12421702);
    $InitializeEvent(0, 12424710);
    $InitializeEvent(0, 12424711);
    $InitializeEvent(0, 12424702);
    $InitializeEvent(0, 12424703);
    $InitializeEvent(0, 12424704);
    $InitializeEvent(0, 12424705);
    $InitializeEvent(0, 12424790);
    $InitializeEvent(0, 12424780);
    $InitializeEvent(0, 12424791);
    $InitializeEvent(0, 12424792, 2420750);
    $InitializeEvent(1, 12424792, 2420751);
    $InitializeEvent(0, 12421703);
    $InitializeEvent(0, 12424785, 2420810, 2422816, 10, 12424702);
    $InitializeEvent(1, 12424785, 2420811, 2422817, 20, 12424790);
    $InitializeEvent(0, 12424784);
    $InitializeEvent(0, 12424787, 2420711, 2422816, 10, 12424702, 2420810);
    $InitializeEvent(1, 12424787, 2420712, 2422816, 10, 12424702, 2420810);
    $InitializeEvent(0, 12424795);
    $InitializeEvent(0, 12424770, 2423711, 2420711);
    $InitializeEvent(1, 12424770, 2423712, 2420712);
    $InitializeEvent(2, 12424770, 2423713, 2420713);
    $InitializeEvent(5, 12424770, 2423716, 2420716);
    $InitializeEvent(6, 12424770, 2423717, 2420717);
    $InitializeEvent(8, 12424770, 2423719, 2420719);
    $InitializeEvent(9, 12424770, 2423720, 2420720);
    $InitializeEvent(12, 12424770, 2423720, 2420810);
L1:
    $InitializeEvent(0, 12420300);
    $InitializeEvent(0, 12420320);
    $InitializeEvent(0, 12420310);
    $InitializeEvent(0, 12425200, 2420262);
    $InitializeEvent(0, 12425210, 2420250);
    $InitializeEvent(1, 12425210, 2420258);
    $InitializeEvent(2, 12425210, 2420267);
    $InitializeEvent(0, 12425225);
    $InitializeEvent(0, 12425221, 2420256);
    $InitializeEvent(0, 12425250, 2420252, 1.5, 2422659, 9, 2422252, 20, 1, 1);
    $InitializeEvent(0, 12425245);
    SetEventFlag(12425246, OFF);
    $InitializeEvent(0, 12425300, 2420451);
    $InitializeEvent(0, 12425305, 2420452);
    $InitializeEvent(0, 12425310, 2420352);
    $InitializeEvent(1, 12425310, 2420375);
    $InitializeEvent(2, 12425310, 2420376);
    $InitializeEvent(3, 12425310, 2420387);
    $InitializeEvent(4, 12425310, 2420388);
    $InitializeEvent(0, 12425320, 2420380, 7012, 7013, 2422380);
    $InitializeEvent(1, 12425320, 2420381, 7012, 7013, 2422381);
    $InitializeEvent(2, 12425320, 2420382, 7012, 7013, 2422382);
    $InitializeEvent(3, 12425320, 2420383, 7012, 7013, 2422383);
    $InitializeEvent(4, 12425320, 2420384, 7012, 7013, 2422384);
    $InitializeEvent(5, 12425320, 2420350, 7012, 7013, 2422350);
    $InitializeEvent(6, 12425320, 2420351, 7012, 7013, 2422351);
    $InitializeEvent(7, 12425320, 2420377, 7012, 7013, 2422377);
    $InitializeEvent(8, 12425320, 2420357, 7012, 7013, 2422357);
    $InitializeEvent(9, 12425320, 2420358, 7012, 7013, 2422358);
    $InitializeEvent(10, 12425320, 2420359, 7012, 7013, 2422359);
    $InitializeEvent(11, 12425320, 2420363, 7012, 7013, 2422363);
    $InitializeEvent(12, 12425320, 2420364, 7012, 7013, 2422364);
    $InitializeEvent(13, 12425320, 2420385, 7012, 7013, 2422385);
    $InitializeEvent(14, 12425320, 2420386, 7012, 7013, 2422386);
    SetNetworkUpdateRate(2420811, true, CharacterUpdateFrequency.AlwaysUpdate);
    $InitializeEvent(0, 12425500, 2420357, 5, 1, 2422650, 0);
    $InitializeEvent(1, 12425500, 2420358, 5, 1, 2422650, 0);
    $InitializeEvent(2, 12425500, 2420359, 5, 1, 2422650, 0);
    $InitializeEvent(3, 12425500, 2420363, 5, 1, 2422650, 0);
    $InitializeEvent(4, 12425500, 2420364, 5, 1, 2422650, 0);
    $InitializeEvent(5, 12425500, 2420251, 5, 1, 2422251, 0);
    $InitializeEvent(6, 12425500, 2420255, 3, 1, 2422254, 0);
    $InitializeEvent(7, 12425500, 2420255, 3, 1, 2422255, 0);
    $InitializeEvent(8, 12425500, 2420256, 5, 1, 2422256, 0);
    $InitializeEvent(9, 12425500, 2420377, 5, 1, 2422656, 0);
    $InitializeEvent(10, 12425500, 2420351, 5, 1, 2422656, 0);
    $InitializeEvent(11, 12425500, 2420385, 5, 1, 2422650, 0);
    $InitializeEvent(12, 12425500, 2420386, 5, 1, 2422650, 0);
    $InitializeEvent(13, 12425500, 2420259, 5, 1, 2422259, 0);
    $InitializeEvent(14, 12425500, 2420350, 5, 1, 2422654, 0);
    $InitializeEvent(15, 12425500, 2420380, 5, 1, 2422654, 0);
    $InitializeEvent(16, 12425500, 2420381, 5, 1, 2422654, 0);
    $InitializeEvent(17, 12425500, 2420382, 5, 1, 2422654, 0);
    $InitializeEvent(18, 12425500, 2420383, 5, 1, 2422654, 0);
    $InitializeEvent(19, 12425500, 2420384, 5, 1, 2422654, 0);
    $InitializeEvent(20, 12425500, 2420203, 5, 1, 2422653, 0);
    $InitializeEvent(21, 12425500, 2420264, 2, 1, 2422264, 0);
    $InitializeEvent(22, 12425500, 2420400, 5, 1, 2422256, 0);
    $InitializeEvent(23, 12425500, 2420450, 5, 1, 2422300, 0);
    $InitializeEvent(24, 12425500, 2420451, 5, 1, 2422300, 0);
    $InitializeEvent(0, 12425600);
    $InitializeEvent(0, 12425601);
    $InitializeEvent(0, 12425602);
    $InitializeEvent(0, 12425603);
    $InitializeEvent(0, 12425350, 2420350, 252002, 252000);
    $InitializeEvent(1, 12425350, 2420351, 252002, 252000);
    $InitializeEvent(2, 12425350, 2420377, 252002, 252000);
    $InitializeEvent(3, 12425350, 2420380, 252002, 252000);
    $InitializeEvent(4, 12425350, 2420381, 252002, 252000);
    $InitializeEvent(5, 12425350, 2420382, 252002, 252000);
    $InitializeEvent(6, 12425350, 2420383, 252002, 252000);
    $InitializeEvent(7, 12425350, 2420384, 252002, 252000);
    $InitializeEvent(0, 12425400, 2420263, 2422265, 3000);
    $InitializeEvent(1, 12425400, 2420392, 2422686, 3004);
    $InitializeEvent(0, 12420100);
    RegisterLadder(12420600, 12420601, 2421600);
    $InitializeEvent(0, 12420500);
    $InitializeEvent(0, 12420700);
    if (CharacterType(10000, TargetType.Alive)) {
        if (EventFlag(6648)) {
            SetEventFlag(12421999, ON);
        }
    }
    if (!EventFlag(12421999)) {
        DeactivateObject(2421102, Enabled);
        DeactivateObject(2421103, Disabled);
        SetObjectTreasureState(2421102, Enabled);
        SetObjectTreasureState(2421103, Disabled);
    } else {
        DeactivateObject(2421102, Disabled);
        DeactivateObject(2421103, Enabled);
        SetObjectTreasureState(2421102, Disabled);
        SetObjectTreasureState(2421103, Enabled);
    }
    if (CharacterType(10000, TargetType.Alive)) {
        if (EventFlag(6313)) {
            SetEventFlag(12421998, ON);
        }
    }
    if (!EventFlag(12421998)) {
        DeactivateObject(2421500, Enabled);
        DeactivateObject(2421501, Disabled);
        SetObjectTreasureState(2421500, Enabled);
        SetObjectTreasureState(2421501, Disabled);
    } else {
        DeactivateObject(2421500, Disabled);
        DeactivateObject(2421501, Enabled);
        SetObjectTreasureState(2421500, Disabled);
        SetObjectTreasureState(2421501, Enabled);
    }
});

// プリコンストラクタ
$Event(50, Default, function() {
    SetCharacterAnimationState(2423950, Disabled);
    SetCharacterGravity(2423950, Disabled);
    SetCharacterMaphits(2423950, true);
    SetCharacterAnimationState(2423951, Disabled);
    SetCharacterGravity(2423951, Disabled);
    SetCharacterMaphits(2423951, true);
    SetCharacterAnimationState(2423952, Disabled);
    SetCharacterGravity(2423952, Disabled);
    SetCharacterMaphits(2423952, true);
    $InitializeEvent(0, 12425290);
});

// 脳喰らいが孤児院の鍵ドロップ
$Event(12420700, Restart, function() {
    EndIf(ThisEvent());
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(CharacterDead(2420268));
    AwardItemLot(2420900);
});

// ボス撃破_月の落とし子
$Event(12421800, Default, function() {
    if (ThisEvent()) {
        SetMapSoundState(2423802, Disabled);
        SetMapSoundState(2423803, Disabled);
        ChangeCharacterEnableState(2420800, Disabled);
        ForceCharacterDeath(2420800, false);
        DeactivateObject(2421800, Disabled);
        DeleteMapSFX(2423800, false);
        EndEvent();
    }
L0:
    WaitFor(CharacterDead(2420800));
    DisplayBanner(TextBannerType.DemonKilled);
    DeactivateObject(2421800, Disabled);
    DeleteMapSFX(2423800, true);
    SetLockcamSlotNumber(24, 2, 0);
    WaitFixedTimeSeconds(3);
    HandleBossDefeat(2420800);
    SetNetworkSyncState(Disabled);
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        WaitFor(CharacterType(10000, TargetType.Alive));
        $InitializeEvent(0, 9350, 3);
        AwardAchievement(28);
        AwardItemLot(80000300);
        SetEventFlag(2421, ON);
        SetEventFlag(9459, ON);
        StartTimeMeasurement(2420000, 0, Disabled);
        StartTimeMeasurement(2420001, 18, Disabled);
        StartTimeMeasurement(2420010, 40, Disabled);
        CreatePlaylog(58);
        ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 70, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 70, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Weapon, 70, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Armor, 70, PlayLogMultiplayerType.HostOnly);
        EndEvent();
    }
L1:
    WaitFor(CharacterType(10000, TargetType.WhitePhantom));
    WaitFixedTimeSeconds(0);
});

// ボス撃破SE再生_月の落とし子
$Event(12421801, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12421800));
    flag = EventFlag(12421800);
    WaitFor(flag || (!CharacterBackreadStatus(2420800) && HPRatio(2420800) <= 0));
    EndIf(flag.Passed);
    PlaySE(2422800, SoundType.cCharacterMotion, 500099999);
});

// ホストがボス部屋入場_初戦_月の落とし子
$Event(12421802, Default, function() {
    EndIf(EventFlag(12421800));
    if (ThisEvent()) {
        IssueShortWarpRequest(2420800, TargetEntityType.Area, 2422800, -1);
        RotateCharacter(2420800, 2422804, -1, false);
        EndEvent();
    }
L0:
    ForceAnimationPlayback(2420800, 7001, true, false, false);
    SetCharacterImmortality(2420800, Enabled);
    SetSpEffect(2420800, 5647, false);
    WaitFor(
        !EventFlag(12421800)
            && !ThisEvent()
            && CharacterType(10000, TargetType.Alive)
            && HasDamageType(2420800, 10000, DamageType.Unspecified));
    ForceAnimationPlayback(2420800, 7000, false, true, false);
    SetCharacterImmortality(2420800, Disabled);
    ClearSpEffect(2420800, 5647);
    SetEventFlag(12424800, ON);
    EndIf(EventFlag(9304));
    $InitializeEvent(0, 9350, 3);
    SetEventFlag(9304, ON);
});

// 月の落とし子_時間差入場ゲスト用対処処理
$Event(12421803, Default, function() {
    WaitFor(CharacterType(10000, TargetType.Alive) && EventFlag(12424800));
    EndIf(HasMultiplayerState(MultiplayerState.Host));
    SetEventFlag(12424800, ON);
    SetEventFlag(12421802, ON);
});

// ホストがボス部屋入場_再戦_月の落とし子
$Event(12424810, Default, function() {
    EndIf(EventFlag(12421800));
    if (!EventFlag(12421802)) {
        if (!HasMultiplayerState(MultiplayerState.Client)) {
            DeactivateObject(2421800, Disabled);
            DeleteMapSFX(2423800, false);
        }
        WaitFor(!EventFlag(12421800) && EventFlag(12421802));
        DeactivateObject(2421800, Enabled);
        SpawnMapSFX(2423800);
    }
L0:
    flagChrAct = !EventFlag(12421800)
        && CharacterType(10000, TargetType.Alive)
        && ActionButtonInArea(2420800, 2421800);
    flag = EventFlag(12421800);
    WaitFor(flagChrAct || flag);
    EndIf(flag.Passed);
    RotateCharacter(10000, 2422800, 101130, false);
    chrArea = CharacterType(10000, TargetType.Alive) && InArea(10000, 2422801);
    chrTime = CharacterType(10000, TargetType.Alive) && ElapsedSeconds(2);
    WaitFor(chrArea || chrTime);
    if (!chrTime.Passed) {
        SetEventFlag(12424800, ON);
    }
    RestartEvent();
});

// ゲストがボス部屋入場_月の落とし子
$Event(12424811, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12421800));
    WaitFor(
        !EventFlag(12421800)
            && EventFlag(12421802)
            && EventFlag(12424800)
            && CharacterType(10000, TargetType.WhitePhantom)
            && ActionButtonInArea(2420800, 2421800));
    RotateCharacter(10000, 2422800, 101130, false);
    chrArea = CharacterType(10000, TargetType.WhitePhantom) && InArea(10000, 2422801);
    chrTime = CharacterType(10000, TargetType.WhitePhantom) && ElapsedSeconds(2);
    WaitFor(chrArea || chrTime);
    if (!chrTime.Passed) {
        SetEventFlag(12424801, ON);
    }
    RestartEvent();
});

// 他人の世界で霧壁あたり無効_月の落とし子
$Event(12424812, Default, function() {
    WaitFor(CharacterType(10000, TargetType.Alive) && EntityInRadiusOfEntity(10000, 2421800, 6));
    SetCharacterGravityMaphitStateExcludingOwnWorld(10000, Disabled);
    WaitFixedTimeFrames(6);
    RestartEvent();
});

// 他人の世界で霧壁あたり無効2_月の落とし子
$Event(12424813, Default, function() {
    WaitFor(
        CharacterType(10000, TargetType.Alive)
            && !EntityInRadiusOfEntity(10000, 2421800, 6)
            && EntityInRadiusOfEntity(10000, 2421800, 12));
    SetCharacterGravityMaphitStateExcludingOwnWorld(10000, Enabled);
    WaitFixedTimeFrames(6);
    RestartEvent();
});

// ボスが動き出す_月の落とし子
$Event(12424802, Default, function() {
    EndIf(EventFlag(12421800));
    SetCharacterAIState(2420800, Disabled);
    SetCharacterHPBarDisplay(2420800, Disabled);
    if (!ThisEvent()) {
        WaitFor(EventFlag(12424800));
        if (!HasMultiplayerState(MultiplayerState.Client)) {
            IssueBossRoomEntryNotification(0);
            SetNetworkUpdateAuthority(2420800, AuthorityLevel.Forced);
        }
    }
L0:
    SetEventFlag(12424800, ON);
    GotoIf(L1, NumberOfCoopClients() == 0);
    GotoIf(L2, NumberOfCoopClients() == 1);
    GotoIf(L3, NumberOfCoopClients() == 2);
L1:
    Goto(L4);
L2:
    SetSpEffect(2420800, 7500, true);
    WaitFixedTimeFrames(1);
    AdaptHpchangingSpEffectToNPCPartOfTarget(2420800);
    Goto(L4);
L3:
    SetSpEffect(2420800, 7501, true);
    WaitFixedTimeFrames(1);
    AdaptHpchangingSpEffectToNPCPartOfTarget(2420800);
    Goto(L4);
L4:
    SetCharacterAIState(2420800, Enabled);
    DisplayBossHealthBar(Enabled, 2420800, 0, 251000);
    CreatePlaylog(104);
    StartTimeMeasurement(2420010, 40, Enabled);
});

// ボスBGM ON_月の落とし子
$Event(12424803, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12421800));
    if (!ThisEvent()) {
        SetMapSoundState(2423802, Disabled);
        SetMapSoundState(2423803, Disabled);
        flagArea &= !EventFlag(12421800) && EventFlag(12424802);
        if (!HasMultiplayerState(MultiplayerState.Host)) {
            flagArea &= EventFlag(12424801);
        }
        flagArea &= InArea(10000, 2422802);
        WaitFor(flagArea);
        EnableBossMapSound(2423802, Enabled);
        SetEventFlag(12425246, ON);
        chrFlagArea &= CharacterHasEventMessage(2420800, 100);
    }
L0:
    chrFlagArea &= !EventFlag(12421800) && EventFlag(12424802);
    if (!HasMultiplayerState(MultiplayerState.Host)) {
        chrFlagArea &= EventFlag(12424801);
    }
    chrFlagArea &= InArea(10000, 2422802);
    WaitFor(chrFlagArea);
    EnableBossMapSound(2423802, Disabled);
    SetEventFlag(12425246, ON);
    WaitFixedTimeFrames(0);
    EnableBossMapSound(2423803, Enabled);
});

// ボスカメラ_月の落とし子
$Event(12424804, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12421800));
    WaitFor(CharacterHasEventMessage(2420800, 10));
    SetLockcamSlotNumber(24, 2, 1);
    WaitFor(CharacterHasEventMessage(2420800, 20));
    SetLockcamSlotNumber(24, 2, 0);
    RestartEvent();
});

// ボスBGM OFF_月の落とし子
$Event(12424805, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12421800));
    WaitFor(EventFlag(12421800));
    EnableBossMapSound(2423802, Disabled);
    EnableBossMapSound(2423803, Disabled);
    EnableBossMapSound(-1, Disabled);
    SetEventFlag(12425246, OFF);
});

// 部位損傷_頭_月の落とし子
$Event(12424870, Restart, function(npcPartId, npcPartId2, npcPartGroupIdx, npcPartHP, spEffectId, spEffectId2, animationId) {
    CreateNPCPart(2420800, npcPartId, npcPartGroupIdx, npcPartHP, 1, 2, false, false);
    SetNPCPartSEAndSFX(2420800, npcPartId2, 75, 75);
    hp = NPCPartHP(2420800, npcPartId2) <= 0;
    hp2 = HPRatio(2420800) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(2420800, npcPartId, npcPartGroupIdx, 9999999, 1, 2.5, false, false);
    SetNPCPartSEAndSFX(2420800, npcPartId2, 75, 75);
    RequestCharacterAnimationReset(2420800, Interpolation.Interpolated);
    ForceAnimationPlayback(2420800, animationId, false, false, false);
    SetSpEffect(2420800, spEffectId, true);
    ClearSpEffect(2420800, spEffectId2);
    RequestCharacterAIReplan(2420800);
    WaitFor(CharacterHasEventMessage(2420800, 100));
    SetNPCPartHP(2420800, npcPartId2, -1, true);
    SetSpEffect(2420800, spEffectId2, true);
    ClearSpEffect(2420800, spEffectId);
    RequestCharacterAICommand(2420800, -1, 0);
    RequestCharacterAIReplan(2420800);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// 部位損傷_頭以外_月の落とし子
$Event(12424871, Restart, function(npcPartId, npcPartId2, npcPartGroupIdx, npcPartHP, spEffectId, spEffectId2, animationId) {
    CreateNPCPart(2420800, npcPartId, npcPartGroupIdx, npcPartHP, 1, 1, false, false);
    SetNPCPartSEAndSFX(2420800, npcPartId2, 74, 74);
    hp = NPCPartHP(2420800, npcPartId2) <= 0;
    hp2 = HPRatio(2420800) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(2420800, npcPartId, npcPartGroupIdx, 9999999, 1, 1.25, false, false);
    SetNPCPartSEAndSFX(2420800, npcPartId2, 74, 74);
    RequestCharacterAnimationReset(2420800, Interpolation.Interpolated);
    ForceAnimationPlayback(2420800, animationId, false, false, false);
    SetSpEffect(2420800, spEffectId, true);
    ClearSpEffect(2420800, spEffectId2);
    RequestCharacterAIReplan(2420800);
    WaitFor(CharacterHasEventMessage(2420800, 100));
    SetNPCPartHP(2420800, npcPartId2, -1, true);
    SetSpEffect(2420800, spEffectId2, true);
    ClearSpEffect(2420800, spEffectId);
    RequestCharacterAICommand(2420800, -1, 0);
    RequestCharacterAIReplan(2420800);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// 月の落とし子_ヒートアップ
$Event(12424980, Default, function() {
    WaitFixedTimeFrames(1);
    EndIf(CharacterDead(2420800));
    WaitFor(EventFlag(12424800) && HPRatio(2420800) < 0.5);
    RequestCharacterAICommand(2420800, 100, 0);
    RequestCharacterAIReplan(2420800);
    WaitFor(CharacterHasEventMessage(2420800, 500));
    RequestCharacterAICommand(2420800, -1, 0);
    RequestCharacterAIReplan(2420800);
});

// コジマ粒子_月の落とし子
$Event(12424990, Default, function() {
    WaitFor(CharacterHasSpEffect(2420800, 5650) && CharacterHPValue(2420800) < 0);
    ShootBullet(2420801, 2420800, 6, 225100310, 0, 0, 0);
    WaitFixedTimeSeconds(0.5);
    RestartEvent();
});

// ボス撃破_月からの使者
$Event(12421700, Default, function() {
    if (ThisEvent()) {
        SetMapSoundState(2423812, Disabled);
        SetMapSoundState(2423813, Disabled);
        ChangeCharacterEnableState(2420810, Disabled);
        ForceCharacterDeath(2420810, false);
        ChangeCharacterEnableState(2420711, Disabled);
        ChangeCharacterEnableState(2420712, Disabled);
        ChangeCharacterEnableState(2420713, Disabled);
        ChangeCharacterEnableState(2420716, Disabled);
        ChangeCharacterEnableState(2420717, Disabled);
        ChangeCharacterEnableState(2420719, Disabled);
        ChangeCharacterEnableState(2420720, Disabled);
        ChangeCharacterEnableState(2420750, Disabled);
        ChangeCharacterEnableState(2420751, Disabled);
        SetCharacterAIState(2420711, Disabled);
        SetCharacterAIState(2420712, Disabled);
        SetCharacterAIState(2420713, Disabled);
        SetCharacterAIState(2420716, Disabled);
        SetCharacterAIState(2420717, Disabled);
        SetCharacterAIState(2420719, Disabled);
        SetCharacterAIState(2420720, Disabled);
        DeactivateObject(2421700, Disabled);
        DeactivateObject(2421701, Disabled);
        DeleteMapSFX(2423810, false);
        DeleteMapSFX(2423811, false);
        EndEvent();
    }
L0:
    WaitFor(CharacterDead(2420811));
    DisplayBanner(TextBannerType.DemonKilled);
    DeactivateObject(2421700, Disabled);
    DeactivateObject(2421701, Disabled);
    DeleteMapSFX(2423810, true);
    DeleteMapSFX(2423811, true);
    SetLockcamSlotNumber(24, 2, 0);
    ChangeCharacterEnableState(2420750, Disabled);
    ChangeCharacterEnableState(2420751, Disabled);
    WaitFixedTimeSeconds(3);
    HandleBossDefeat(2420811);
    SetNetworkSyncState(Disabled);
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        WaitFor(CharacterType(10000, TargetType.Alive));
        $InitializeEvent(0, 9350, 2);
        AwardAchievement(27);
        if (!EventFlag(6332)) {
            AwardItemLot(25700000);
        } else {
            AwardItemLot(25700005);
        }
        SetEventFlag(2420, ON);
        SetEventFlag(9458, ON);
        StartTimeMeasurement(2420000, 0, Disabled);
        StartTimeMeasurement(2420001, 18, Disabled);
        StartTimeMeasurement(2420010, 40, Disabled);
        CreatePlaylog(58);
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

// ボス撃破SE再生_月からの使者
$Event(12421701, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12421800));
    flag = EventFlag(12421800);
    WaitFor(flag || (!CharacterBackreadStatus(2420800) && HPRatio(2420800) <= 0));
    EndIf(flag.Passed);
    PlaySE(2422800, SoundType.cCharacterMotion, 500099999);
});

// ホストがボス部屋入場_初戦_月からの使者
$Event(12421702, Default, function() {
    EndIf(EventFlag(12421700));
    EndIf(ThisEvent());
    ChangeCharacterEnableState(2420810, Disabled);
    ChangeCharacterEnableState(2420711, Disabled);
    ChangeCharacterEnableState(2420712, Disabled);
    ChangeCharacterEnableState(2420713, Disabled);
    ChangeCharacterEnableState(2420716, Disabled);
    ChangeCharacterEnableState(2420717, Disabled);
    ChangeCharacterEnableState(2420719, Disabled);
    ChangeCharacterEnableState(2420720, Disabled);
    WaitFor(
        !EventFlag(12421700)
            && !ThisEventSlot()
            && CharacterType(10000, TargetType.Alive)
            && InArea(10000, 2422815));
    SetEventFlag(12424700, ON);
    SetEventFlag(12421702, ON);
    ChangeCharacterEnableState(2420716, Enabled);
    SetCharacterAIState(2420716, Enabled);
    ForceAnimationPlayback(2420716, 6200, false, false, false);
    ChangeCharacterEnableState(2420717, Enabled);
    SetCharacterAIState(2420717, Enabled);
    ForceAnimationPlayback(2420717, 6200, false, false, false);
    ChangeCharacterEnableState(2420720, Enabled);
    SetCharacterAIState(2420720, Enabled);
    ForceAnimationPlayback(2420720, 6200, false, false, false);
    WaitFixedTimeSeconds(2);
    ChangeCharacterEnableState(2420810, Enabled);
    SetCharacterAIState(2420810, Enabled);
    ForceAnimationPlayback(2420810, 6200, false, false, false);
    ChangeCharacterEnableState(2420711, Enabled);
    SetCharacterAIState(2420711, Enabled);
    ForceAnimationPlayback(2420711, 6200, false, false, false);
    ChangeCharacterEnableState(2420713, Enabled);
    SetCharacterAIState(2420713, Enabled);
    ForceAnimationPlayback(2420713, 6200, false, false, false);
    WaitFixedTimeSeconds(2.5);
    ChangeCharacterEnableState(2420712, Enabled);
    SetCharacterAIState(2420712, Enabled);
    ForceAnimationPlayback(2420712, 6200, false, false, false);
    ChangeCharacterEnableState(2420719, Enabled);
    SetCharacterAIState(2420719, Enabled);
    ForceAnimationPlayback(2420719, 6200, false, false, false);
});

// 月からの使者_時間差入場ゲスト用対処処理
$Event(12421703, Default, function() {
    WaitFor(CharacterType(10000, TargetType.Alive) && EventFlag(12424700));
    EndIf(HasMultiplayerState(MultiplayerState.Host));
    SetEventFlag(12424700, ON);
    SetEventFlag(12421702, ON);
    ChangeCharacterEnableState(2420716, Enabled);
    SetCharacterAIState(2420716, Enabled);
    ForceAnimationPlayback(2420716, 6200, false, false, false);
    ChangeCharacterEnableState(2420717, Enabled);
    SetCharacterAIState(2420717, Enabled);
    ForceAnimationPlayback(2420717, 6200, false, false, false);
    ChangeCharacterEnableState(2420720, Enabled);
    SetCharacterAIState(2420720, Enabled);
    ForceAnimationPlayback(2420720, 6200, false, false, false);
    WaitFixedTimeSeconds(2);
    ChangeCharacterEnableState(2420810, Enabled);
    SetCharacterAIState(2420810, Enabled);
    ForceAnimationPlayback(2420810, 6200, false, false, false);
    ChangeCharacterEnableState(2420711, Enabled);
    SetCharacterAIState(2420711, Enabled);
    ForceAnimationPlayback(2420711, 6200, false, false, false);
    ChangeCharacterEnableState(2420713, Enabled);
    SetCharacterAIState(2420713, Enabled);
    ForceAnimationPlayback(2420713, 6200, false, false, false);
    WaitFixedTimeSeconds(2.5);
    ChangeCharacterEnableState(2420712, Enabled);
    SetCharacterAIState(2420712, Enabled);
    ForceAnimationPlayback(2420712, 6200, false, false, false);
    ChangeCharacterEnableState(2420719, Enabled);
    SetCharacterAIState(2420719, Enabled);
    ForceAnimationPlayback(2420719, 6200, false, false, false);
});

// ホストがボス部屋入場_再戦_月からの使者
$Event(12424710, Default, function() {
    EndIf(EventFlag(12421700));
    if (!EventFlag(12421702)) {
        if (!HasMultiplayerState(MultiplayerState.Client)) {
            DeactivateObject(2421700, Disabled);
            DeleteMapSFX(2423810, false);
        }
        DeactivateObject(2421701, Disabled);
        DeleteMapSFX(2423811, false);
        WaitFor(!EventFlag(12421700) && EventFlag(12421702));
        DeactivateObject(2421700, Enabled);
        DeactivateObject(2421701, Enabled);
        SpawnMapSFX(2423810);
        SpawnMapSFX(2423811);
    }
L0:
    flag = !EventFlag(12421700);
    chrAct = CharacterType(10000, TargetType.Alive) && ActionButtonInArea(2420700, 2421700);
    flag2 = EventFlag(12421700);
    WaitFor(chrAct || flag2);
    EndIf(flag2.Passed);
    RotateCharacter(10000, 2422810, 101130, false);
    chrArea = CharacterType(10000, TargetType.Alive) && InArea(10000, 2422811);
    chrTime = CharacterType(10000, TargetType.Alive) && ElapsedSeconds(2);
    WaitFor(chrArea || chrTime);
    if (!chrTime.Passed) {
        SetEventFlag(12424700, ON);
    }
    RestartEvent();
});

// ゲストがボス部屋入場_月からの使者
$Event(12424711, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12421700));
    WaitFor(
        !EventFlag(12421700)
            && EventFlag(12424700)
            && CharacterType(10000, TargetType.WhitePhantom)
            && ActionButtonInArea(2420700, 2421700));
    RotateCharacter(10000, 2422810, 101130, false);
    chrArea = CharacterType(10000, TargetType.WhitePhantom) && InArea(10000, 2422811);
    chrTime = CharacterType(10000, TargetType.WhitePhantom) && ElapsedSeconds(2);
    WaitFor(chrArea || chrTime);
    if (!chrTime.Passed) {
        SetEventFlag(12424701, ON);
    }
    RestartEvent();
});

// 他人の世界で霧壁あたり無効_月からの使者
$Event(12424712, Default, function() {
    WaitFor(CharacterType(10000, TargetType.Alive) && EntityInRadiusOfEntity(10000, 2421700, 4));
    SetCharacterGravityMaphitStateExcludingOwnWorld(10000, Disabled);
    WaitFixedTimeFrames(6);
    RestartEvent();
});

// 他人の世界で霧壁あたり無効2_月からの使者
$Event(12424713, Default, function() {
    WaitFor(
        CharacterType(10000, TargetType.Alive)
            && !EntityInRadiusOfEntity(10000, 2421700, 4)
            && EntityInRadiusOfEntity(10000, 2421700, 8));
    SetCharacterGravityMaphitStateExcludingOwnWorld(10000, Enabled);
    WaitFixedTimeFrames(6);
    RestartEvent();
});

// ボスが動き出す_月からの使者
$Event(12424702, Default, function() {
    EndIf(EventFlag(12421700));
    SetCharacterAIState(2420810, Disabled);
    SetCharacterAIState(2420711, Disabled);
    SetCharacterAIState(2420712, Disabled);
    SetCharacterAIState(2420713, Disabled);
    SetCharacterAIState(2420716, Disabled);
    SetCharacterAIState(2420717, Disabled);
    SetCharacterAIState(2420719, Disabled);
    SetCharacterAIState(2420720, Disabled);
    SetCharacterImmortality(2420810, Enabled);
    if (!ThisEvent()) {
        WaitFor(EventFlag(12424700));
        if (!HasMultiplayerState(MultiplayerState.Client)) {
            IssueBossRoomEntryNotification(0);
            SetNetworkUpdateAuthority(2800810, AuthorityLevel.Forced);
            SetNetworkUpdateAuthority(2800811, AuthorityLevel.Forced);
        }
    }
L0:
    SetEventFlag(12424700, ON);
    GotoIf(L1, NumberOfCoopClients() == 0);
    GotoIf(L2, NumberOfCoopClients() == 1);
    GotoIf(L3, NumberOfCoopClients() == 2);
L1:
    Goto(L4);
L2:
    SetSpEffect(2800800, 7500, true);
    SetSpEffect(2800801, 7500, true);
    SetSpEffect(2800802, 7500, true);
    SetSpEffect(2800803, 7500, true);
    WaitFixedTimeFrames(1);
    AdaptHpchangingSpEffectToNPCPartOfTarget(2800800);
    AdaptHpchangingSpEffectToNPCPartOfTarget(2800801);
    AdaptHpchangingSpEffectToNPCPartOfTarget(2800802);
    AdaptHpchangingSpEffectToNPCPartOfTarget(2800803);
    Goto(L4);
L3:
    SetSpEffect(2800800, 7501, true);
    SetSpEffect(2800801, 7501, true);
    SetSpEffect(2800802, 7501, true);
    SetSpEffect(2800803, 7501, true);
    WaitFixedTimeFrames(1);
    AdaptHpchangingSpEffectToNPCPartOfTarget(2800800);
    AdaptHpchangingSpEffectToNPCPartOfTarget(2800801);
    AdaptHpchangingSpEffectToNPCPartOfTarget(2800802);
    AdaptHpchangingSpEffectToNPCPartOfTarget(2800803);
    Goto(L4);
L4:
    DisplayBossHealthBar(Enabled, 2420810, 0, 257000);
    CreatePlaylog(104);
    StartTimeMeasurement(2800010, 40, Enabled);
    EndIf(!EventFlag(12421702));
    WaitFor(
        InArea(10000, 2422817)
            || HasDamageType(2420810, 10000, DamageType.Unspecified)
            || HasDamageType(2420711, 10000, DamageType.Unspecified)
            || HasDamageType(2420712, 10000, DamageType.Unspecified)
            || HasDamageType(2420713, 10000, DamageType.Unspecified)
            || HasDamageType(2420716, 10000, DamageType.Unspecified)
            || HasDamageType(2420717, 10000, DamageType.Unspecified)
            || HasDamageType(2420719, 10000, DamageType.Unspecified)
            || HasDamageType(2420720, 10000, DamageType.Unspecified));
    SetCharacterAIState(2420810, Enabled);
    SetCharacterAIState(2420711, Enabled);
    SetCharacterAIState(2420712, Enabled);
    SetCharacterAIState(2420713, Enabled);
    SetCharacterAIState(2420716, Enabled);
    SetCharacterAIState(2420717, Enabled);
    SetCharacterAIState(2420719, Enabled);
    SetCharacterAIState(2420720, Enabled);
});

// ボスBGM ON_月からの使者
$Event(12424703, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12421700));
    if (!ThisEvent()) {
        SetMapSoundState(2703802, Disabled);
        SetMapSoundState(2703803, Disabled);
        flagArea &= !EventFlag(12421700) && EventFlag(12424702);
        if (!HasMultiplayerState(MultiplayerState.Host)) {
            flagArea &= EventFlag(12424701);
        }
        flagArea &= InArea(10000, 2422812);
        WaitFor(flagArea);
        EnableBossMapSound(2423812, Enabled);
        SetEventFlag(12425246, ON);
        WaitFor(EventFlag(12424790));
    }
L0:
    flagArea2 &= !EventFlag(12421700) && EventFlag(12424702);
    if (!HasMultiplayerState(MultiplayerState.Host)) {
        flagArea2 &= EventFlag(12424701);
    }
    flagArea2 &= InArea(10000, 2422812);
    WaitFor(flagArea2);
    EnableBossMapSound(2423812, Disabled);
    SetEventFlag(12425246, ON);
    WaitFixedTimeFrames(0);
    EnableBossMapSound(2423813, Enabled);
});

// ボスカメラ_月からの使者
$Event(12424704, Default, function() {
    SetNetworkSyncState(Disabled);
    WaitFor(
        HPRatio(2420811) > 0
            && HPRatio(2420811) <= 0.6
            && EntityInRadiusOfEntity(10000, 2420811, 5.5));
    SetLockcamSlotNumber(24, 2, 1);
    WaitFor(HPRatio(2420811) > 0 && !EntityInRadiusOfEntity(10000, 2420811, 6));
    SetLockcamSlotNumber(24, 2, 0);
    RestartEvent();
});

// ボスBGM OFF_月からの使者
$Event(12424705, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12421700));
    WaitFor(EventFlag(12421700));
    EnableBossMapSound(2423812, Disabled);
    EnableBossMapSound(2423813, Disabled);
    EnableBossMapSound(-1, Disabled);
    SetEventFlag(12425246, OFF);
});

// 月からの使者ボス死亡で道連れ＆ジェネレート停止_XX
$Event(12424770, Restart, function(generatorEntityId, chrEntityId) {
    chr = !CharacterDead(generatorEntityId);
    WaitFor(CharacterDead(2420811) && (chr || CharacterDead(generatorEntityId)));
    SetCharacterImmortality(chrEntityId, Disabled);
    DeactivateGenerator(generatorEntityId, Disabled);
    ForceCharacterDeath(chrEntityId, true);
    if (!chr.Passed) {
        ChangeCharacterEnableState(generatorEntityId, Disabled);
    }
    WaitFor(!CharacterDead(chrEntityId));
    RestartEvent();
});

// 月からの使者（大）　周囲強化魔法
$Event(12424780, Restart, function() {
    WaitFor(CharacterHasEventMessage(2420811, 40));
    SetSpEffect(2420711, 5530, false);
    SetSpEffect(2420712, 5530, false);
    SetSpEffect(2420713, 5530, false);
    SetSpEffect(2420716, 5530, false);
    SetSpEffect(2420717, 5530, false);
    SetSpEffect(2420719, 5530, false);
    SetSpEffect(2420720, 5530, false);
    RestartEvent();
});

// 月からの使者本体が指定の領域から出ない_XX
$Event(12424785, Restart, function(chrEntityId, areaEntityId, commandId, eventFlagId) {
    WaitFor(EventFlag(eventFlagId) && !InArea(chrEntityId, areaEntityId));
    RequestCharacterAICommand(chrEntityId, commandId, 0);
    RequestCharacterAIReplan(chrEntityId);
    WaitFor(InArea(10000, areaEntityId));
    WaitRandomTimeFrames(0, 60);
    RequestCharacterAICommand(chrEntityId, -1, 0);
    RequestCharacterAIReplan(chrEntityId);
    RestartEvent();
});

// 月からの使者ザコが指定の領域から出ない_XX
$Event(12424787, Restart, function(chrEntityId, areaEntityId, commandId, eventFlagId, chrEntityId2) {
    WaitFor(
        EventFlag(eventFlagId) && HPRatio(chrEntityId2) > 0.6 && !InArea(chrEntityId, areaEntityId));
    RequestCharacterAICommand(chrEntityId, commandId, 0);
    RequestCharacterAIReplan(chrEntityId);
    WaitFor(InArea(10000, areaEntityId));
    WaitRandomTimeFrames(0, 60);
    RequestCharacterAICommand(chrEntityId, -1, 0);
    RequestCharacterAIReplan(chrEntityId);
    RestartEvent();
});

// 月からの使者本体が指定の領域から魔法を撃つ
$Event(12424784, Restart, function() {
    WaitFor(CharacterHasSpEffect(2420811, 5609) && !InArea(2420811, 2422816));
    RequestCharacterAICommand(2420811, 20, 0);
    RequestCharacterAIReplan(2420811);
    WaitFor(InArea(2420811, 2422722));
    RequestCharacterAICommand(2420811, 40, 0);
    RequestCharacterAIReplan(2420811);
    WaitFor(InArea(10000, 2422816));
    WaitRandomTimeFrames(0, 60);
    RequestCharacterAICommand(2420811, -1, 0);
    RequestCharacterAIReplan(2420811);
    RestartEvent();
});

// 月からの使者（大）に変身
$Event(12424790, Restart, function() {
    WaitFor(CharacterBackreadStatus(2420811));
    SetCharacterAIState(2420811, Disabled);
    SetCharacterGravity(2420811, Disabled);
    SetCharacterHPBarDisplay(2420811, Disabled);
    CreateReferredDamagePair(2420810, 2420811);
    SetCharacterGravity(2420750, Disabled);
    SetCharacterGravity(2420751, Disabled);
    WaitFor(HPRatio(2420810) < 0.6 && HPRatio(2420811) > 0);
    SetCharacterHome(2420811, 2422721);
    RequestCharacterAICommand(2420810, 40, 1);
    RequestCharacterAIReplan(2420810);
    WaitFor(CharacterHasEventMessage(2420810, 30));
    DisplayBossHealthBar(Disabled, 2420810, 0, 257000);
    WaitFixedTimeFrames(5);
    ChangeCharacterEnableState(2420810, Disabled);
    WarpCharacterAndCopyFloor(2420811, TargetEntityType.Character, 2420810, 203, 2420810);
    SetCharacterGravity(2420811, Enabled);
    SetCharacterAIState(2420811, Enabled);
    ForceAnimationPlayback(2420811, 3025, false, true, false);
    DisplayBossHealthBar(Enabled, 2420811, 0, 257000);
});

// 月からの使者（大）触手ワープ
$Event(12424791, Restart, function() {
    WaitFor(HPRatio(2420811) <= 0.3);
    if (!ThisEvent()) {
        WaitFixedTimeFrames(135);
    }
    WarpCharacterAndCopyFloor(2420750, TargetEntityType.Character, 2420811, 40, 2420811);
    WarpCharacterAndCopyFloor(2420751, TargetEntityType.Character, 2420811, 41, 2420811);
    RestartEvent();
});

// 月からの使者（大）触手の伸縮制御_XX
$Event(12424792, Restart, function(chrEntityId) {
    WaitFor(HPRatio(2420811) <= 0.3);
    if (!ThisEventSlot()) {
        WaitFixedTimeFrames(145);
        ForceAnimationPlayback(chrEntityId, 3000, false, false, false);
    }
    WaitFor(CharacterHasSpEffect(2420811, 5402));
    ForceAnimationPlayback(chrEntityId, 3000, false, false, false);
    WaitFixedTimeSeconds(3.5);
    ChangeCharacterEnableState(chrEntityId, Disabled);
    WaitFor(CharacterHasSpEffect(2420811, 5400));
    WaitFixedTimeSeconds(1.5);
    ChangeCharacterEnableState(chrEntityId, Enabled);
    ForceAnimationPlayback(chrEntityId, 3000, false, false, false);
    RestartEvent();
});

// 月からの使者（大）魔法3詠唱中崩れ
$Event(12424795, Restart, function() {
    WaitFor(
        CharacterHasSpEffect(2420811, 5531) && HasDamageType(2420811, 10000, DamageType.Unspecified));
    ForceAnimationPlayback(2420811, 3030, false, false, false);
    WaitFixedTimeFrames(59);
    ForceAnimationPlayback(2420811, 7000, true, true, true);
    WaitFixedTimeFrames(150);
    ForceAnimationPlayback(2420811, 3000, true, true, true);
    RestartEvent();
});

// 扉開放処理_XX
$Event(12420000, Default, function(objEntityId, animationId, objParameterId, objactEventFlag) {
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

// 扉開放時Mｓｇ_XX
$Event(12420030, Default, function(objactEventFlag) {
    SetNetworkSyncState(Disabled);
    EndIf(ThisEventSlot());
    WaitFor(ObjActEventFlag(objactEventFlag));
    WaitFixedTimeSeconds(0);
});

// 宝箱_XX
$Event(12420050, Default, function(objEntityId, objactEventFlag, objParameterId) {
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

// ボス部屋窓ガラス破壊
$Event(12420100, Default, function() {
    if (ThisEvent()) {
        ReproduceObjectDestruction(2421850, 1);
        EndEvent();
    }
    WaitFor(ObjectDestroyed(2421850));
    SetEventFlag(12420100, ON);
});

// レバー扉
$Event(12420123, Default, function() {
    if (ThisEvent()) {
        ReproduceObjectAnimation(2421200, 1);
        SetObjactState(2421270, 2420000, Disabled);
        EndEvent();
    }
L0:
    WaitFor(ObjActEventFlag(12420122));
    ForceAnimationPlayback(2421200, 1, false, false, false);
    CreateObjectfollowingSFX(2421200, 200, 920204);
    CreateObjectfollowingSFX(2421200, 201, 920205);
});

// レバー扉_仕掛けで閉じられている表示
$Event(12420124, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12420123));
    act = ActionButtonInArea(2420030, 2421200);
    act2 = ActionButtonInArea(2420000, 2421200);
    obj = ObjActEventFlag(12420122);
    flag = EventFlag(12420123);
    WaitFor(act || act2 || obj || flag);
    EndIf(obj.Passed);
    EndIf(flag.Passed);
    DisplayGenericDialog(10010160, PromptType.OKCANCEL, NumberofOptions.OneButton, 2421200, 3);
    WaitFixedTimeSeconds(0);
    RestartEvent();
});

// 開けた扉の結果再現_XX
$Event(12420130, Default, function(objEntityId, animationId, objactEventFlag, objParameterId) {
    if (ThisEventSlot()) {
        ReproduceObjectAnimation(objEntityId, animationId);
        SetObjactState(objEntityId, objParameterId, Disabled);
        EndEvent();
    }
L0:
    WaitFor(ObjActEventFlag(objactEventFlag));
    WaitFixedTimeSeconds(0);
});

// 開いた後のレバー
$Event(12420140, Default, function() {
    SetNetworkSyncState(Disabled);
    WaitFor(EventFlag(12420123) && ActionButtonInArea(7100, 2421270));
    DisplayGenericDialog(10010172, PromptType.OKCANCEL, NumberofOptions.OneButton, -1, 3);
    WaitFixedTimeSeconds(0);
    RestartEvent();
});

// 月の落とし子前エレベーター_初期化
$Event(12420150, Default, function() {
    flag = EventFlag(12420154);
    WaitFor(flag || !EventFlag(12420154));
    if (!flag.Passed) {
        ReproduceObjectAnimation(2421250, 0);
        SetObjactState(2421251, 2420000, Disabled);
        SetObjactState(2421252, 2420000, Enabled);
    } else {
        ReproduceObjectAnimation(2421250, 8);
        SetObjactState(2421251, 2420000, Enabled);
        SetObjactState(2421252, 2420000, Disabled);
    }
});

// 月の落とし子前エレベーター_下がる
$Event(12420151, Default, function() {
    if (!(!EventFlag(12420154) && EventFlag(12420155))) {
        WaitFor(
            (!EventFlag(12420154) && !EventFlag(12420155) && InArea(10000, 2422651))
                || (!EventFlag(12420154) && !EventFlag(12420155) && ObjActEventFlag(12420124)));
    }
L0:
    SetEventFlag(12420155, ON);
    ForceAnimationPlayback(2421250, 1, false, false, false);
    ForceAnimationPlayback(2421250, 8, false, false, false);
    WaitFixedTimeFrames(250);
    WaitFor(!AllPlayersInArea(2422652));
    SetObjactState(2421252, 2420000, Disabled);
    ForceAnimationPlayback(2421250, 9, false, false, false);
    WaitFixedTimeFrames(10);
    SetEventFlag(12420154, ON);
    SetEventFlag(12420155, OFF);
    SetObjactState(2421251, 2420000, Enabled);
    RestartEvent();
});

// 月の落とし子前エレベーター_上がる
$Event(12420152, Default, function() {
    if (!(EventFlag(12420154) && EventFlag(12420155))) {
        WaitFor(
            (EventFlag(12420154) && !EventFlag(12420155) && InArea(10000, 2422652))
                || (EventFlag(12420154) && !EventFlag(12420155) && ObjActEventFlag(12420123)));
    }
L0:
    SetEventFlag(12420155, ON);
    ForceAnimationPlayback(2421250, 11, false, false, false);
    ForceAnimationPlayback(2421250, 12, false, false, false);
    WaitFixedTimeFrames(250);
    WaitFor(!AllPlayersInArea(2422651));
    SetObjactState(2421251, 2420000, Disabled);
    ForceAnimationPlayback(2421250, 7, false, false, false);
    WaitFixedTimeFrames(10);
    SetEventFlag(12420154, OFF);
    SetEventFlag(12420155, OFF);
    SetObjactState(2421252, 2420000, Enabled);
    RestartEvent();
});

// 月の落とし子前エレベーター_仕掛けが動かない
$Event(12420153, Default, function() {
    SetNetworkSyncState(Disabled);
    WaitFor((!EventFlag(12420154) || EventFlag(12420155)) && ActionButtonInArea(7100, 2421251));
    DisplayGenericDialog(10010172, PromptType.OKCANCEL, NumberofOptions.OneButton, -1, 3);
    RestartEvent();
});

// 月の落とし子前エレベーター_仕掛けが動かない_下
$Event(12420156, Default, function() {
    SetNetworkSyncState(Disabled);
    WaitFor((EventFlag(12420154) || EventFlag(12420155)) && ActionButtonInArea(7100, 2421252));
    DisplayGenericDialog(10010172, PromptType.OKCANCEL, NumberofOptions.OneButton, -1, 3);
    RestartEvent();
});

// 一方通行の扉_XX
$Event(12420280, Restart, function(areaEntityId) {
    SetNetworkSyncState(Disabled);
    WaitFor(InArea(10000, areaEntityId));
    SetSpEffect(10000, 4150, false);
    WaitFixedTimeSeconds(3);
    RestartEvent();
});

// 一方通行の扉_解放後反対側_XX
$Event(12420285, Restart, function(areaEntityId, eventFlagId) {
    WaitFor(EventFlag(eventFlagId));
    SetNetworkSyncState(Disabled);
    WaitFor(InArea(10000, areaEntityId));
    SetSpEffect(10000, 4150, false);
    WaitFixedTimeSeconds(3);
    RestartEvent();
});

// 環境音再生
$Event(12420300, Restart, function() {
    SetNetworkSyncState(Disabled);
    EndIf(ThisEvent());
    WaitFor(InArea(10000, 2422681));
    PlaySE(2422680, SoundType.aEnvironmentalSound, 20011001);
    SetEventFlag(12420301, ON);
});

// 猟犬急襲
$Event(12420310, Restart, function() {
    if (ThisEventSlot()) {
        ChangeCharacterEnableState(2420205, Enabled);
        ChangeCharacterEnableState(2420204, Disabled);
        IssueShortWarpRequest(2420205, TargetEntityType.Area, 2422205, -1);
        ReproduceObjectDestruction(2421210, 1);
        EndEvent();
    }
    SetCharacterAIState(2420205, Disabled);
    SetCharacterGravity(2420205, Disabled);
    SetCharacterMaphits(2420205, true);
    ChangeCharacterEnableState(2420205, Disabled);
    WaitFor(
        (CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
            && EventFlag(52420170)
            && InArea(10000, 2422660));
    PlaySE(2421121, SoundType.aEnvironmentalSound, 20011004);
    ChangeCharacterEnableState(2420205, Enabled);
    ForceAnimationPlayback(2420205, 7004, false, false, false);
    WaitFixedTimeFrames(10);
    RequestObjectDestruction(2421210, 1);
    SetCharacterGravity(2420205, Enabled);
    SetCharacterMaphits(2420205, false);
    SetCharacterAIState(2420205, Enabled);
});

// シャンデリアが落ちる
$Event(12420320, Restart, function() {
    if (ThisEvent()) {
        DeactivateObject(2421300, Disabled);
        WarpCharacterAndSetFloor(2420200, TargetEntityType.Area, 2422200, -1, 2420203);
        WarpCharacterAndSetFloor(2420201, TargetEntityType.Area, 2422201, -1, 2420203);
        WarpCharacterAndSetFloor(2420202, TargetEntityType.Area, 2422202, -1, 2420203);
        SetCharacterHome(2420200, 2422200);
        SetCharacterHome(2420201, 2422201);
        SetCharacterHome(2420202, 2422202);
        ReproduceObjectDestruction(2421301, 1);
        EndEvent();
    }
L0:
    DeactivateObject(2421301, Disabled);
    ChangeCharacterEnableState(2420200, Disabled);
    SetCharacterAIState(2420200, Disabled);
    SetCharacterGravity(2420200, Disabled);
    SetCharacterAIState(2420201, Disabled);
    SetCharacterGravity(2420201, Disabled);
    ForceAnimationPlayback(2420201, 7011, true, false, false);
    SetCharacterAIState(2420202, Disabled);
    SetCharacterGravity(2420202, Disabled);
    ForceAnimationPlayback(2420202, 7012, true, false, false);
    CreateObjectfollowingSFX(2421300, 100, 924500);
    CreateObjectfollowingSFX(2421300, 101, 924500);
    CreateObjectfollowingSFX(2421300, 102, 924500);
    CreateObjectfollowingSFX(2421300, 103, 924500);
    CreateObjectfollowingSFX(2421300, 104, 924500);
    CreateObjectfollowingSFX(2421300, 105, 924500);
    CreateObjectfollowingSFX(2421300, 106, 924500);
    CreateObjectfollowingSFX(2421300, 107, 924500);
    CreateObjectfollowingSFX(2421300, 108, 924500);
    CreateObjectfollowingSFX(2421300, 109, 924500);
    CreateObjectfollowingSFX(2421300, 110, 924500);
    CreateObjectfollowingSFX(2421300, 111, 924500);
    CreateObjectfollowingSFX(2421300, 112, 924500);
    CreateObjectfollowingSFX(2421300, 113, 924500);
    CreateObjectfollowingSFX(2421300, 114, 924500);
    CreateObjectfollowingSFX(2421300, 115, 924500);
    CreateObjectfollowingSFX(2421300, 116, 924500);
    CreateObjectfollowingSFX(2421300, 117, 924500);
    CreateObjectfollowingSFX(2421300, 118, 924500);
    CreateObjectfollowingSFX(2421300, 119, 924500);
    CreateObjectfollowingSFX(2421300, 120, 924500);
    CreateObjectfollowingSFX(2421300, 121, 924500);
    CreateObjectfollowingSFX(2421300, 122, 924500);
    CreateObjectfollowingSFX(2421300, 123, 924500);
    CreateObjectfollowingSFX(2421300, 124, 924500);
    CreateObjectfollowingSFX(2421300, 125, 924500);
    CreateObjectfollowingSFX(2421300, 126, 924500);
    CreateObjectfollowingSFX(2421300, 127, 924500);
    CreateObjectfollowingSFX(2421300, 128, 924500);
    CreateObjectfollowingSFX(2421300, 129, 924500);
    CreateObjectfollowingSFX(2421300, 130, 924500);
    CreateObjectfollowingSFX(2421300, 131, 924500);
    CreateObjectfollowingSFX(2421300, 132, 924500);
    CreateObjectfollowingSFX(2421300, 133, 924500);
    CreateObjectfollowingSFX(2421300, 134, 924500);
    CreateObjectfollowingSFX(2421300, 135, 924500);
    CreateObjectfollowingSFX(2421300, 136, 924500);
    CreateObjectfollowingSFX(2421300, 137, 924500);
    CreateObjectfollowingSFX(2421300, 138, 924500);
    CreateObjectfollowingSFX(2421300, 139, 924500);
    CreateObjectfollowingSFX(2421300, 201, 924501);
    WaitFor(
        InArea(10000, 2422653)
            && (CharacterType(10000, TargetType.Alive)
                || CharacterType(10000, TargetType.WhitePhantom)));
    ChangeCharacterEnableState(2420200, Enabled);
    ForceAnimationPlayback(2420200, 7007, false, false, false);
    ForceAnimationPlayback(2420201, 7008, false, false, false);
    ForceAnimationPlayback(2420202, 7009, false, false, false);
    ForceAnimationPlayback(2421300, 1, false, false, false);
    WaitFixedTimeFrames(81);
    DeleteObjectfollowingSFX(2421300, false);
    CreateObjectfollowingSFX(2421300, 201, 924502);
    WaitFixedTimeFrames(32);
    CreateObjectfollowingSFX(2421300, 201, 924503);
    DeactivateObject(2421300, Disabled);
    DeactivateObject(2421301, Enabled);
    RequestObjectDestruction(2421301, 1);
    SetCharacterAIState(2420200, Enabled);
    SetCharacterGravity(2420200, Enabled);
    SetCharacterHome(2420200, 2422200);
    SetCharacterAIState(2420201, Enabled);
    SetCharacterGravity(2420201, Enabled);
    SetCharacterHome(2420201, 2422201);
    SetCharacterAIState(2420202, Enabled);
    SetCharacterGravity(2420202, Enabled);
    SetCharacterHome(2420202, 2422202);
    WaitFixedTimeSeconds(10);
    SetCharacterAIId(2420200, 100000);
    SetCharacterAIId(2420201, 100000);
    SetCharacterAIId(2420202, 100000);
});

// 時間帯変化_聖堂街C
$Event(12420400, Default, function() {
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
        ActivateMapPart(2424000, Enabled);
        ActivateMapPart(2424010, Disabled);
        EndEvent();
    }
L3:
    ActivateMapPart(2424000, Disabled);
    ActivateMapPart(2424010, Enabled);
});

// 穢れた血族の女王_復活
$Event(12420500, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    SetEventFlag(72500326, OFF);
    WaitFor(EventFlag(72500326));
    BatchSetEventFlags(72500304, 72500309, OFF);
    SetEventFlag(72500328, ON);
    RemoveItemFromPlayer(ItemType.Goods, 4305, 1);
    PlayCutsceneToPlayer(24020000, CutscenePlayMode.Skippable, 10000);
    WaitFixedTimeFrames(10);
    SetEventFlag(72500339, OFF);
    SaveRequest(0);
    RestartEvent();
});

// 新風切替_扉を開く_XX
$Event(12420850, Restart, function(entityId, entityId2, entityId3, eventFlagId, objactEventFlag, timeSeconds, entityId4, sfxId) {
    DeleteMapSFX(entityId, false);
    DeleteMapSFX(entityId2, false);
    DeleteMapSFX(entityId3, false);
    if (EventFlag(eventFlagId)) {
        SpawnMapSFX(entityId2);
        SpawnMapSFX(entityId3);
        EndEvent();
    }
    WaitFor(ObjActEventFlag(objactEventFlag));
    WaitFixedTimeSeconds(timeSeconds);
    SpawnMapSFX(entityId);
    SpawnOneshotSFX(TargetEntityType.Area, entityId4, -1, sfxId);
    WaitFixedTimeSeconds(4);
    SpawnMapSFX(entityId2);
    SpawnMapSFX(entityId3);
});

// 新風切替_扉を開く_聖堂
$Event(12420853, Restart, function() {
    DeleteMapSFX(2427031, false);
    DeleteMapSFX(2427032, false);
    DeleteMapSFX(2427033, false);
    if (EventFlag(12420133)) {
        SpawnMapSFX(2427032);
        SpawnMapSFX(2427033);
        EndEvent();
    }
    WaitFor(ObjActEventFlag(12420112));
    WaitFixedTimeSeconds(6);
    SpawnMapSFX(2427031);
    SpawnOneshotSFX(TargetEntityType.Object, 2421204, 200, 920206);
    SpawnOneshotSFX(TargetEntityType.Object, 2421204, 242, 920207);
    WaitFixedTimeSeconds(4);
    SpawnMapSFX(2427032);
    SpawnMapSFX(2427033);
});

// 新風切替_窓破壊
$Event(12420854, Restart, function() {
    DeleteMapSFX(2427023, false);
    DeleteMapSFX(2427024, false);
    if (EventFlag(12420310)) {
        SpawnMapSFX(2427024);
        EndEvent();
    }
    WaitFor(EventFlag(12420310));
    WaitFixedTimeSeconds(1);
    SpawnMapSFX(2427023);
    WaitFixedTimeSeconds(4);
    SpawnMapSFX(2427024);
});

// 飛び出してくる脳喰らい
$Event(12425200, Restart, function(chrEntityId) {
    ForceAnimationPlayback(chrEntityId, 7000, true, false, false);
    chr = CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom);
    dmg = HasDamageType(chrEntityId, -1, DamageType.Unspecified);
    areaChr = EntityInRadiusOfEntity(chrEntityId, 10000, 2) && chr;
    areaChr2 = InArea(10000, 2422661) && chr;
    WaitFor(dmg || areaChr || areaChr2);
    if (!areaChr2.Passed) {
        ForceAnimationPlayback(chrEntityId, 7001, false, false, false);
        RequestCharacterAIReplan(chrEntityId);
        EndEvent();
    }
    ForceAnimationPlayback(chrEntityId, 7001, false, false, false);
    RequestCharacterAICommand(chrEntityId, 10, 0);
    SetCharacterHome(chrEntityId, 2422262);
    RequestCharacterAIReplan(chrEntityId);
    WaitFor(CharacterDamagedBy(chrEntityId, 10000) || InArea(chrEntityId, 2422262));
    RequestCharacterAICommand(chrEntityId, -1, 0);
    RequestCharacterAIReplan(chrEntityId);
});

// 脳喰らい特殊待機_XX
$Event(12425210, Restart, function(chrEntityId) {
    EndIf(ThisEventSlot());
    ForceAnimationPlayback(chrEntityId, 7000, true, false, false);
    WaitFor(
        ((CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
            && EntityInRadiusOfEntity(chrEntityId, 10000, 2))
            || HasDamageType(chrEntityId, -1, DamageType.Unspecified));
    ForceAnimationPlayback(chrEntityId, 7001, false, false, false);
    RequestCharacterAIReplan(chrEntityId);
});

// 脳喰らい巡回変更
$Event(12425221, Restart, function(chrEntityId) {
    WaitFor(InArea(chrEntityId, 2422655));
    ChangeCharacterPatrolBehavior(chrEntityId, 2423210);
});

// 領域侵入で巣へ移動開始_XX
Event(12425250, Restart, function(chrEntityId, timeSeconds, areaEntityId, targetDistance, areaEntityId2, commandId, value, numberOfSkippedLines) {
    IfCharacterBackreadStatus(MAIN, chrEntityId, true);
    WaitFixedTimeSeconds(1);
    SetCharacterHome(chrEntityId, areaEntityId2);
    RequestCharacterAICommand(chrEntityId, 20, 0);
    RequestCharacterAIReplan(chrEntityId);
    WaitFixedTimeSeconds(timeSeconds);
    RequestCharacterAICommand(chrEntityId, 30, 0);
    RequestCharacterAIReplan(chrEntityId);
    IfCharacterType(OR_03, 10000, TargetType.Alive);
    IfCharacterType(OR_03, 10000, TargetType.WhitePhantom);
    IfInoutsideArea(OR_04, InsideOutsideState.Inside, 10000, areaEntityId);
    IfEntityInoutsideRadiusOfEntity(OR_04, InsideOutsideState.Inside, 10000, chrEntityId, targetDistance);
    IfConditionGroup(AND_01, PASS, OR_03);
    IfConditionGroup(AND_01, PASS, OR_04);
    IfConditionGroup(OR_01, PASS, AND_01);
    IfDamageType(OR_01, chrEntityId, -1, DamageType.Unspecified);
    IfConditionGroup(MAIN, PASS, OR_01);
    RequestCharacterAICommand(chrEntityId, commandId, 0);
    RequestCharacterAIReplan(chrEntityId);
    SkipIfComparison(numberOfSkippedLines, ComparisonType.NotEqual, 0, value);
    IfCharacterAIState(OR_02, chrEntityId, AIStateType.Alert);
    IfCharacterAIState(OR_02, chrEntityId, AIStateType.Recognition);
    IfCharacterAIState(OR_02, chrEntityId, AIStateType.Combat);
    IfDamageType(OR_02, chrEntityId, 10000, DamageType.Unspecified);
    IfConditionGroup(MAIN, PASS, OR_02);
    RequestCharacterAICommand(chrEntityId, -1, 0);
    RequestCharacterAIReplan(chrEntityId);
});

// 脳喰らい特殊待機_距離_領域
$Event(12425225, Restart, function() {
    EndIf(ThisEvent());
    ForceAnimationPlayback(2420253, 7000, true, false, false);
    WaitFor(
        ((CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
            && (InArea(10000, 2422253) || EntityInRadiusOfEntity(2420253, 10000, 2)))
            || HasDamageType(2420253, -1, DamageType.Unspecified));
    ForceAnimationPlayback(2420253, 7001, false, false, false);
    RequestCharacterAIReplan(2420253);
});

// 聖堂街C_BGM_再生
$Event(12425245, Restart, function() {
    SetNetworkSyncState(Disabled);
    SetMapSoundState(2423600, Disabled);
    WaitFor(PlayerInMap(24, 2) && !EventFlag(12425246));
    SetMapSoundState(2423600, Enabled);
    WaitFor(!PlayerInMap(24, 2) || EventFlag(12425246));
    SetMapSoundState(2423600, Disabled);
    RestartEvent();
});

// SAN値判定
$Event(12425290, Restart, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    EndIf(PlayerInsightAmount() < 10);
    SetEventFlag(12425291, ON);
});

// 教会の使者がSAN値によって見た目変化
$Event(12425300, Restart, function(chrEntityId) {
    WaitFor(EventFlag(12425291) || EventFlag(9802));
    ChangeCharacterDispmask(chrEntityId, 3, OFF);
    ChangeCharacterDispmask(chrEntityId, 4, ON);
    SetSpEffect(chrEntityId, 5696, false);
});

// 教会の使者がSAN値によって見た目変化(鎌)
$Event(12425305, Restart, function(chrEntityId) {
    WaitFor(EventFlag(12425291) || EventFlag(9802));
    SetSpEffect(chrEntityId, 5552, false);
    SetSpEffect(chrEntityId, 5553, false);
    SetSpEffect(chrEntityId, 5554, false);
});

// 月の幼生_壁張り付きアニメ再生
$Event(12425310, Restart, function(chrEntityId) {
    EndIf(ThisEventSlot());
    ForceAnimationPlayback(chrEntityId, 7018, true, false, false);
    dmg = HasDamageType(chrEntityId, 10000, DamageType.Unspecified);
    WaitFor(
        CharacterAIState(chrEntityId, AIStateType.Alert)
            || CharacterAIState(chrEntityId, AIStateType.Recognition)
            || CharacterAIState(chrEntityId, AIStateType.Combat)
            || dmg);
    if (!dmg.Passed) {
        WaitRandomTimeSeconds(0, 2);
        ForceAnimationPlayback(chrEntityId, 7019, false, false, false);
    }
    RequestCharacterAIReplan(chrEntityId);
});

// 孤児院前の月の幼生が合流して祈る_XX
$Event(12425320, Restart, function(chrEntityId, animationId, animationId2, areaEntityId) {
    EndIf(ThisEventSlot());
    WaitFor(CharacterBackreadStatus(chrEntityId));
    WaitFixedTimeSeconds(1);
    SetCharacterHome(chrEntityId, areaEntityId);
    WaitFor(
        InArea(chrEntityId, areaEntityId)
            && (CharacterAIState(chrEntityId, AIStateType.Normal)
                || CharacterAIState(chrEntityId, AIStateType.Recognition)
                || CharacterAIState(chrEntityId, AIStateType.Alert)));
    WaitRandomTimeSeconds(0, 2);
    ForceAnimationPlayback(chrEntityId, animationId, false, true, false);
    ForceAnimationPlayback(chrEntityId, animationId2, true, false, false);
    WaitFor(CharacterAIState(chrEntityId, AIStateType.Combat));
    ForceAnimationPlayback(chrEntityId, 0, false, false, false);
    RestartEvent();
});

// 攻撃されるか戦闘状態になるまでPCを感知しない_XX
$Event(12425350, Restart, function(chrEntityId, aiId, aiId2) {
    EndIf(ThisEventSlot());
    WaitFor(CharacterBackreadStatus(chrEntityId));
    SetCharacterAIId(chrEntityId, aiId);
    WaitFor(
        CharacterDamagedBy(chrEntityId, 10000) || CharacterAIState(chrEntityId, AIStateType.Combat));
    WaitRandomTimeSeconds(1, 3);
    SetCharacterAIId(chrEntityId, aiId2);
    RequestCharacterAIReplan(chrEntityId);
});

// 領域侵入で敵のロジックON_XX
$Event(12425500, Restart, function(chrEntityId, targetDistance, value, areaEntityId, timeSeconds) {
    EndIf(ThisEventSlot());
    WaitFor(CharacterBackreadStatus(chrEntityId));
    WaitFixedTimeSeconds(timeSeconds);
    SetCharacterAIState(chrEntityId, Disabled);
    chr = CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom);
    chrAreaDmg |= (chr && EntityInRadiusOfEntity(10000, chrEntityId, targetDistance))
        || CharacterDamagedBy(chrEntityId, 10000);
    if (1 == value) {
        chrAreaDmg |= InArea(10000, areaEntityId) && chr;
    }
    WaitFor(chrAreaDmg);
    SetCharacterAIState(chrEntityId, Enabled);
    RequestCharacterAIReplan(chrEntityId);
});

// 落とし子前の月からの使者が動き始める
$Event(12425600, Restart, function() {
    EndIf(ThisEvent());
    WaitFor(CharacterBackreadStatus(2420401) && CharacterBackreadStatus(2420402));
    SetCharacterAIState(2420401, Disabled);
    SetCharacterAIState(2420402, Disabled);
    chr = CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom);
    WaitFor(
        (chr
            && (EntityInRadiusOfEntity(10000, 2420401, 5) || EntityInRadiusOfEntity(10000, 2420402, 5)))
            || (chr && InArea(10000, 2422685))
            || CharacterDamagedBy(2420401, 10000)
            || CharacterDamagedBy(2420402, 10000));
    SetCharacterAIState(2420401, Enabled);
    RequestCharacterAIReplan(2420401);
    WaitFixedTimeSeconds(3);
    SetCharacterAIState(2420402, Enabled);
    RequestCharacterAIReplan(2420402);
});

// 落とし子前_触手アタッチ
$Event(12425601, Default, function() {
    SetNetworkSyncState(Disabled);
    WaitFor(!CharacterDead(2420402) && CharacterBackreadStatus(2420402));
    IssueShortWarpRequest(2420731, TargetEntityType.Character, 2420402, 40);
    RestartEvent();
});

// 落とし子前_連動死亡
$Event(12425602, Restart, function() {
    WaitFor(HPRatio(2420402) <= 0);
    WaitFixedTimeSeconds(1);
    ForceAnimationPlayback(2420731, 2200, false, true, false);
    ChangeCharacterEnableState(2420731, Disabled);
});

// 落とし子前_LvUp
$Event(12425603, Default, function() {
    SetSpEffect(2420402, 5609, false);
    SetCharacterGravity(2420731, Disabled);
});

// 不意打ち_XX
$Event(12425400, Restart, function(entityId, areaEntityId, animationId) {
    EndIf(ThisEventSlot());
    chr = CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom);
    areaChr = InArea(10000, areaEntityId) && chr;
    dmgChr = HasDamageType(entityId, 10000, DamageType.Unspecified) && chr;
    WaitFor(areaChr || dmgChr);
    EndIf(dmgChr.Passed);
    ForceAnimationPlayback(entityId, animationId, false, false, false);
});

// マップ初回入場_プレイログ
$Event(12420990, Default, function() {
    EndIf(ThisEvent());
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    WaitFor(PlayerStandingOnHit(2423500));
    ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 154, PlayLogMultiplayerType.HostOnly);
    ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 154, PlayLogMultiplayerType.HostOnly);
    ParameterOutput(PlayerPlayLogParameter.Weapon, 154, PlayLogMultiplayerType.HostOnly);
    ParameterOutput(PlayerPlayLogParameter.Armor, 154, PlayLogMultiplayerType.HostOnly);
    AwardAchievement(11);
});

// ★聖堂街C_新NPC召喚_ボス部屋を目指す_XX
$Event(12424450, Restart, function(chrEntityId, entityId, eventFlagId, eventFlagId2, eventFlagId3) {
    EndIf(ThisEventSlot());
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    SetEventPoint(chrEntityId, entityId, 1);
    WaitFor(EventFlag(eventFlagId) && !EventFlag(eventFlagId2) && EventFlag(eventFlagId3));
    RequestCharacterAICommand(chrEntityId, 990, 0);
    RequestCharacterAIReplan(chrEntityId);
});

// ★聖堂街C_新NPC召喚_召喚可否判定_上位者狩り
$Event(12424400, Restart, function(eventFlagId, entityId, eventFlagId2, eventFlagId3, eventFlagId4, eventFlagId5) {
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

// ★聖堂街C_新NPC召喚_参加_XX
$Event(12424410, Restart, function(signType, areaEntityId, entityId, eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4, actionButtonParameterId) {
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

// ★聖堂街C_新NPC召喚_ボス部屋に入る_XX
$Event(12424460, Restart, function(chrEntityId, areaEntityId, entityId, areaEntityId2, playAnimationId, eventFlagId, areaEntityId3) {
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


