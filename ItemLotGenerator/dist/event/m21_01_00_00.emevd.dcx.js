// ==EMEVD==
// @docs    bb-common.emedf.json
// @compress    DCX_DFLT_10000_44_9
// @game    Bloodborne
// @string    "PC情報_現実拠点到達時\u0000N:\\SPRJ\\data\\Param\\event\\common.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [26]
// @version    3.6.2
// ==/EMEVD==

// コンストラクタ
$Event(0, Default, function() {
    $InitializeEvent(0, 12110200, 2111000, 12110000);
    $InitializeEvent(0, 12110990);
    $InitializeEvent(0, 12110400);
    $InitializeEvent(0, 12110100);
    $InitializeEvent(0, 12110300);
    $InitializeEvent(0, 12110301);
    $InitializeEvent(0, 12110302);
    $InitializeEvent(52, 7000, 2110950, 2111950, 999, 12117800);
    $InitializeEvent(52, 7100, 72110200, 2111950);
    $InitializeEvent(52, 7200, 72110100, 2111950, 2102952);
    $InitializeEvent(52, 7300, 72102110, 2111950);
});

// プリコンストラクタ
$Event(50, Default, function() {
    SetCharacterHPBarDisplay(2110700, Disabled);
    SetCharacterGravity(2110700, Disabled);
    SetCharacterMaphits(2110700, true);
});

// ヒロインの人形_調べる
$Event(12110100, Default, function() {
    SetNetworkSyncState(Disabled);
    WaitFor(ActionButtonInArea(2110000, 2110700));
    DisplayGenericDialog(10010190, PromptType.OKCANCEL, NumberofOptions.OneButton, -1, 3);
    RestartEvent();
});

// 宝箱_XX
$Event(12110200, Default, function(objEntityId, objactEventFlag) {
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

// 棚を調べる
$Event(12110300, Default, function() {
    EndIf(ThisEvent());
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    CreateObjectfollowingSFX(2111100, 200, 900201);
    WaitFor(ActionButtonInArea(2110010, 2111100));
    ForceAnimationPlayback(10000, 101140, false, false, false);
    AwardItemLot(2110800);
    DeleteObjectfollowingSFX(2111100, true);
});

// 祭壇を調べる
$Event(12110301, Default, function() {
    EndIf(ThisEvent());
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    CreateObjectfollowingSFX(2111101, 200, 900201);
    WaitFor(ActionButtonInArea(2110011, 2111101));
    ForceAnimationPlayback(10000, 101140, false, false, false);
    AwardItemLot(2110810);
    DeleteObjectfollowingSFX(2111101, true);
});

// 墓を調べる
$Event(12110302, Default, function() {
    EndIf(ThisEvent());
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    CreateObjectfollowingSFX(2111102, 200, 900201);
    WaitFor(ActionButtonInArea(2110012, 2111102));
    ForceAnimationPlayback(10000, 101140, false, false, false);
    AwardItemLot(2110000);
    DeleteObjectfollowingSFX(2111102, true);
});

// 時間帯変化
$Event(12110400, Default, function() {
    if (!EventFlag(9802)) {
        if (!EventFlag(9801)) {
            if (!EventFlag(9800)) {
            }
L2:
            ActivateMapPart(2114002, Enabled);
            ActivateMapPart(2114000, Disabled);
            ActivateMapPart(2114001, Disabled);
            EndEvent();
        }
L1:
        ActivateMapPart(2114002, Disabled);
        ActivateMapPart(2114000, Enabled);
        ActivateMapPart(2114001, Disabled);
        EndEvent();
    }
L0:
    ActivateMapPart(2114002, Disabled);
    ActivateMapPart(2114000, Disabled);
    ActivateMapPart(2114001, Enabled);
    EndEvent();
});

// マップ初回入場_プレイログ
$Event(12110990, Default, function() {
    EndIf(ThisEvent());
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    WaitFor(PlayerStandingOnHit(2113500));
    ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 0, PlayLogMultiplayerType.HostOnly);
    ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 0, PlayLogMultiplayerType.HostOnly);
    ParameterOutput(PlayerPlayLogParameter.Weapon, 0, PlayLogMultiplayerType.HostOnly);
    ParameterOutput(PlayerPlayLogParameter.Armor, 0, PlayLogMultiplayerType.HostOnly);
    $InitializeEvent(0, 9350, 2);
    AwardAchievement(12);
});


