// ==EMEVD==
// @docs    bb-common.emedf.json
// @compress    DCX_DFLT_10000_44_9
// @game    Bloodborne
// @string    "PC情報_大学到達時\u0000クリア時間_通し\u0000クリア時間_1プレイ\u0000ボス戦_撃破時間\u0000ボス_撃破\u0000PC情報_ボス撃破_白痴の蜘蛛\u0000ボス_戦闘開始\u0000N:\\SPRJ\\data\\Param\\event\\common.emevd\u0000\u0000\u0000\u0000\u0000"
// @linked    [140]
// @version    3.6.2
// ==/EMEVD==

// コンストラクタ
$Event(0, Default, function() {
    $InitializeEvent(45, 7000, 3200950, 3201950, 999, 13207800);
    $InitializeEvent(46, 7000, 3200951, 3201951, 999, 13207820);
    $InitializeEvent(47, 7000, 3200952, 3201952, 13201803, 13207840);
    $InitializeEvent(48, 7000, 3200953, 3201953, 999, 13207860);
    $InitializeEvent(45, 7100, 73200200, 3201950);
    $InitializeEvent(46, 7100, 73200201, 3201951);
    $InitializeEvent(47, 7100, 73200202, 3201952);
    $InitializeEvent(48, 7100, 73200203, 3201953);
    $InitializeEvent(45, 7200, 73200100, 3201950, 2102951);
    $InitializeEvent(46, 7200, 73200101, 3201951, 2102953);
    $InitializeEvent(47, 7200, 73200102, 3201952, 2102951);
    $InitializeEvent(48, 7200, 73200103, 3201953, 2102953);
    $InitializeEvent(45, 7300, 72103200, 3201950);
    $InitializeEvent(46, 7300, 72103201, 3201951);
    $InitializeEvent(47, 7300, 72103202, 3201952);
    $InitializeEvent(48, 7300, 72103203, 3201953);
    $InitializeEvent(70, 7600, 3201999, 3203999);
    $InitializeEvent(9, 9200, 3203900);
    $InitializeEvent(8, 9220, 3200710, 13204220, 13204221, 3200, 32, 0);
    $InitializeEvent(8, 9240, 3200710, 13204220, 13204221, 13204222, 32, 0);
    $InitializeEvent(8, 9260, 3200710, 13204220, 13204221, 13204222, 32, 0);
    $InitializeEvent(8, 9280, 3200710, 13204220, 13204221, 3200, 13204800, 32, 0);
    RegisterLadder(13200000, 13200001, 3201130);
    RegisterLadder(13200002, 13200003, 3201131);
    $InitializeEvent(0, 13200990);
    $InitializeEvent(0, 13200950);
    $InitializeEvent(0, 13200960);
    CreateObjectfollowingSFX(3201000, 200, 900130);
    CreateObjectfollowingSFX(3201001, 200, 900130);
    CreateObjectfollowingSFX(3201002, 200, 900130);
    CreateObjectfollowingSFX(3201003, 200, 900130);
    CreateObjectfollowingSFX(3201004, 200, 900130);
    CreateObjectfollowingSFX(3201005, 200, 900130);
    DeleteMapSFX(3203910, false);
    DeleteMapSFX(3203911, false);
    DeleteMapSFX(3203912, false);
    $InitializeEvent(0, 13204400, 13204440, 3203910, 13204420, 13204430, 13201800, 6001);
    $InitializeEvent(0, 13204401, 13204441, 3203911, 13204421, 13204431, 13201800, 13204420);
    $InitializeEvent(0, 13204402, 13204442, 3203912, 13204422, 13204432, 13201800, 13204420);
    $InitializeEvent(0, 13204410, SingleplayerSummonSignType.NormalCoop, 3200910, 3202910, 13204420, 13204430, 13204440, 13201800, 10566);
    $InitializeEvent(1, 13204410, 5, 3200911, 3202913, 13204421, 13204431, 13204441, 13201800, 10565);
    $InitializeEvent(2, 13204410, 5, 3200912, 3202914, 13204422, 13204432, 13204442, 13201800, 10561);
    $InitializeEvent(0, 13204450, 3200910, 3202911, 13204420, 13204430, 13204800);
    $InitializeEvent(1, 13204450, 3200911, 3202915, 13204421, 13204431, 13204800);
    $InitializeEvent(2, 13204450, 3200912, 3202916, 13204422, 13204432, 13204800);
    $InitializeEvent(0, 13204460, 3200910, 3202911, 3202800, 3202809, 101130, 13204450, 3202809);
    $InitializeEvent(1, 13204460, 3200911, 3202915, 3202800, 3202809, 101130, 13204451, 3202809);
    $InitializeEvent(2, 13204460, 3200912, 3202916, 3202800, 3202809, 101130, 13204452, 3202809);
    $InitializeEvent(0, 13204470, 3200910);
    $InitializeEvent(1, 13204470, 3200911);
    $InitializeEvent(2, 13204470, 3200912);
    $InitializeEvent(0, 13204832);
    $InitializeEvent(0, 13204833);
    $InitializeEvent(0, 13204834);
    $InitializeEvent(0, 13201800);
    $InitializeEvent(0, 13201801);
    $InitializeEvent(0, 13201802);
    $InitializeEvent(0, 13201803);
    $InitializeEvent(0, 13204830);
    $InitializeEvent(0, 13204831);
    $InitializeEvent(0, 13204802);
    $InitializeEvent(0, 13204803);
    $InitializeEvent(0, 13204804);
    $InitializeEvent(0, 13204805);
    $InitializeEvent(0, 13204807);
    $InitializeEvent(0, 13204808);
    $InitializeEvent(0, 13204809);
    $InitializeEvent(0, 13204810);
    $InitializeEvent(0, 13204820);
    $InitializeEvent(0, 13204821);
    $InitializeEvent(0, 13201804);
    $InitializeEvent(0, 13204000, 3200200, 13204802);
    $InitializeEvent(1, 13204000, 3200201, 13204802);
    $InitializeEvent(2, 13204000, 3200202, 13204802);
    $InitializeEvent(3, 13204000, 3200203, 13204802);
    $InitializeEvent(4, 13204000, 3200204, 13204802);
    $InitializeEvent(5, 13204000, 3200205, 13204802);
    $InitializeEvent(6, 13204000, 3200206, 13204802);
    $InitializeEvent(7, 13204000, 3200207, 13204802);
    $InitializeEvent(8, 13204000, 3200208, 13204802);
    $InitializeEvent(9, 13204000, 3200209, 13204802);
    $InitializeEvent(10, 13204000, 3200210, 13204811);
    $InitializeEvent(11, 13204000, 3200211, 13204811);
    $InitializeEvent(12, 13204000, 3200212, 13204811);
    $InitializeEvent(13, 13204000, 3200213, 13204811);
    $InitializeEvent(14, 13204000, 3200214, 13204811);
    $InitializeEvent(15, 13204000, 3200215, 13204811);
    $InitializeEvent(16, 13204000, 3200216, 13204811);
    $InitializeEvent(17, 13204000, 3200217, 13204811);
    $InitializeEvent(18, 13204000, 3200218, 13204811);
    $InitializeEvent(19, 13204000, 3200219, 13204811);
    $InitializeEvent(20, 13204000, 3200220, 13204812);
    $InitializeEvent(21, 13204000, 3200221, 13204812);
    $InitializeEvent(22, 13204000, 3200222, 13204812);
    $InitializeEvent(23, 13204000, 3200223, 13204812);
    $InitializeEvent(24, 13204000, 3200224, 13204812);
    $InitializeEvent(25, 13204000, 3200225, 13204812);
    $InitializeEvent(26, 13204000, 3200226, 13204812);
    $InitializeEvent(27, 13204000, 3200227, 13204812);
    $InitializeEvent(28, 13204000, 3200228, 13204812);
    $InitializeEvent(29, 13204000, 3200229, 13204812);
    $InitializeEvent(0, 13204050, 3200200, 13204802);
    $InitializeEvent(1, 13204050, 3200201, 13204802);
    $InitializeEvent(2, 13204050, 3200202, 13204802);
    $InitializeEvent(3, 13204050, 3200203, 13204802);
    $InitializeEvent(4, 13204050, 3200204, 13204802);
    $InitializeEvent(5, 13204050, 3200205, 13204802);
    $InitializeEvent(6, 13204050, 3200206, 13204802);
    $InitializeEvent(7, 13204050, 3200207, 13204802);
    $InitializeEvent(8, 13204050, 3200208, 13204802);
    $InitializeEvent(9, 13204050, 3200209, 13204802);
    $InitializeEvent(10, 13204050, 3200210, 13204811);
    $InitializeEvent(11, 13204050, 3200211, 13204811);
    $InitializeEvent(12, 13204050, 3200212, 13204811);
    $InitializeEvent(13, 13204050, 3200213, 13204811);
    $InitializeEvent(14, 13204050, 3200214, 13204811);
    $InitializeEvent(15, 13204050, 3200215, 13204811);
    $InitializeEvent(16, 13204050, 3200216, 13204811);
    $InitializeEvent(17, 13204050, 3200217, 13204811);
    $InitializeEvent(18, 13204050, 3200218, 13204811);
    $InitializeEvent(19, 13204050, 3200219, 13204811);
    $InitializeEvent(20, 13204050, 3200220, 13204812);
    $InitializeEvent(21, 13204050, 3200221, 13204812);
    $InitializeEvent(22, 13204050, 3200222, 13204812);
    $InitializeEvent(23, 13204050, 3200223, 13204812);
    $InitializeEvent(24, 13204050, 3200224, 13204812);
    $InitializeEvent(25, 13204050, 3200225, 13204812);
    $InitializeEvent(26, 13204050, 3200226, 13204812);
    $InitializeEvent(27, 13204050, 3200227, 13204812);
    $InitializeEvent(28, 13204050, 3200228, 13204812);
    $InitializeEvent(29, 13204050, 3200229, 13204812);
    $InitializeEvent(0, 13204730, 3200200);
    $InitializeEvent(1, 13204730, 3200201);
    $InitializeEvent(2, 13204730, 3200202);
    $InitializeEvent(3, 13204730, 3200203);
    $InitializeEvent(4, 13204730, 3200204);
    $InitializeEvent(5, 13204730, 3200205);
    $InitializeEvent(6, 13204730, 3200206);
    $InitializeEvent(7, 13204730, 3200207);
    $InitializeEvent(8, 13204730, 3200208);
    $InitializeEvent(9, 13204730, 3200209);
    $InitializeEvent(10, 13204730, 3200210);
    $InitializeEvent(11, 13204730, 3200211);
    $InitializeEvent(12, 13204730, 3200212);
    $InitializeEvent(13, 13204730, 3200213);
    $InitializeEvent(14, 13204730, 3200214);
    $InitializeEvent(15, 13204730, 3200215);
    $InitializeEvent(16, 13204730, 3200216);
    $InitializeEvent(17, 13204730, 3200217);
    $InitializeEvent(18, 13204730, 3200218);
    $InitializeEvent(19, 13204730, 3200219);
    $InitializeEvent(20, 13204730, 3200220);
    $InitializeEvent(21, 13204730, 3200221);
    $InitializeEvent(22, 13204730, 3200222);
    $InitializeEvent(23, 13204730, 3200223);
    $InitializeEvent(24, 13204730, 3200224);
    $InitializeEvent(25, 13204730, 3200225);
    $InitializeEvent(26, 13204730, 3200226);
    $InitializeEvent(27, 13204730, 3200227);
    $InitializeEvent(28, 13204730, 3200228);
    $InitializeEvent(29, 13204730, 3200229);
    $InitializeEvent(0, 13200010, 3201110, 1, 13200100, 3201100, 100);
    $InitializeEvent(0, 13200020, 7030, 7031, 3201110, 13200010);
    $InitializeEvent(0, 13200030, 3201100, 7100, 10010172, 13200010);
    $InitializeEvent(0, 13200040, 3201120, 13200120, 1, 3200040);
    $InitializeEvent(1, 13200040, 3201122, 13200122, 1, 31);
    $InitializeEvent(2, 13200040, 3201201, 13200203, 1, 31);
    $InitializeEvent(3, 13200040, 3201210, 13200211, 1, 31);
    $InitializeEvent(0, 13200050, 7030, 3201122, 13200041);
    $InitializeEvent(1, 13200050, 7030, 3201201, 13200042);
    $InitializeEvent(0, 13200055, 7030, 3201210, 13200043);
    $InitializeEvent(0, 13200060, 3201200, 13200200, 13200201, 1, 30, 31);
    $InitializeEvent(2, 13200060, 3201202, 13200204, 13200205, 1, 30, 31);
    $InitializeEvent(3, 13200060, 3201203, 13200206, 13200207, 1, 3200030, 31);
    $InitializeEvent(4, 13200060, 3201204, 13200208, 13200209, 1, 30, 31);
    $InitializeEvent(6, 13200060, 3201211, 13200212, 13200213, 1, 30, 31);
    $InitializeEvent(7, 13200060, 3201212, 13200214, 13200215, 1, 30, 31);
    $InitializeEvent(8, 13200060, 3201213, 13200216, 13200217, 1, 30, 31);
    $InitializeEvent(9, 13200060, 3201214, 13200218, 13200219, 1, 30, 31);
    $InitializeEvent(10, 13200060, 3201220, 13200220, 13200221, 1, 30, 31);
    $InitializeEvent(11, 13200060, 3201221, 13200222, 13200223, 1, 30, 31);
    $InitializeEvent(12, 13200060, 3201222, 13200224, 13200225, 1, 30, 31);
    $InitializeEvent(13, 13200060, 3201223, 13200226, 13200227, 1, 30, 31);
    $InitializeEvent(14, 13200060, 3201224, 13200228, 13200229, 1, 30, 31);
    $InitializeEvent(17, 13200060, 3201232, 13200234, 13200235, 1, 30, 31);
    $InitializeEvent(18, 13200060, 3201233, 13200236, 13200237, 1, 30, 31);
    $InitializeEvent(19, 13200060, 3201234, 13200238, 13200239, 1, 30, 31);
    $InitializeEvent(0, 13200200, 3201050, 13200050);
    $InitializeEvent(1, 13200200, 3201051, 13200051);
    $InitializeEvent(3, 13200200, 3201053, 13200053);
    $InitializeEvent(4, 13200200, 3201054, 13200054);
    $InitializeEvent(10, 13200200, 3201060, 13200060);
    $InitializeEvent(12, 13200200, 3201062, 13200062);
    if (CharacterType(10000, TargetType.Alive)) {
        if (EventFlag(6325)) {
            SetEventFlag(13201999, ON);
        }
    }
    if (!EventFlag(13201999)) {
        DeactivateObject(3201500, Enabled);
        DeactivateObject(3201501, Disabled);
        SetObjectTreasureState(3201500, Enabled);
        SetObjectTreasureState(3201501, Disabled);
    } else {
        DeactivateObject(3201500, Disabled);
        DeactivateObject(3201501, Enabled);
        SetObjectTreasureState(3201500, Disabled);
        SetObjectTreasureState(3201501, Enabled);
    }
    if (CharacterType(10000, TargetType.Alive)) {
        if (EventFlag(6326)) {
            SetEventFlag(13201998, ON);
        }
    }
    if (!EventFlag(13201998)) {
        DeactivateObject(3201064, Enabled);
        DeactivateObject(3201065, Disabled);
        SetObjactState(3201064, 9942, Enabled);
        SetObjactState(3201065, 9942, Disabled);
        $InitializeEvent(14, 13200200, 3201064, 13200064);
    } else {
        DeactivateObject(3201064, Disabled);
        DeactivateObject(3201065, Enabled);
        SetObjactState(3201064, 9942, Disabled);
        SetObjactState(3201065, 9942, Enabled);
        $InitializeEvent(15, 13200200, 3201065, 13200065);
    }
    $InitializeEvent(0, 13204100, 3201000, 7407, 10012007);
    $InitializeEvent(1, 13204100, 3201001, 7408, 10012008);
    $InitializeEvent(2, 13204100, 3201002, 7409, 10012009);
    $InitializeEvent(3, 13204100, 3201003, 7410, 10012010);
    $InitializeEvent(4, 13204100, 3201004, 7411, 10012011);
    $InitializeEvent(5, 13204100, 3201005, 7412, 10012012);
    $InitializeEvent(0, 13200400);
    $InitializeEvent(0, 13200500, 3200110);
    $InitializeEvent(0, 13205000, 3200500, 3202500, 0, 2, 3203500);
    $InitializeEvent(1, 13205000, 3200501, 3202501, 0, 2, 3203501);
    $InitializeEvent(11, 13205000, 3200315, 3202315, 0, 2, 3203315);
    $InitializeEvent(12, 13205000, 3200337, 3202337, 0, 2, 3203337);
    $InitializeEvent(13, 13205000, 3200340, 3202337, 0, 2, 3203340);
    $InitializeEvent(14, 13205000, 3200341, 3202337, 0, 2, 3203341);
    $InitializeEvent(15, 13205000, 3200345, 3202337, 0, 2, 3203345);
    $InitializeEvent(16, 13205000, 3200343, 3202342, 0, 2, 3203343);
    $InitializeEvent(17, 13205000, 3200110, 3202110, 0, 2, 3203110);
    $InitializeEvent(18, 13205000, 3200620, 3202620, 0, 2, 3203620);
    $InitializeEvent(0, 13205200);
    $InitializeEvent(0, 13205040, 3200505, 3202505, 2, 0, 3202506);
    $InitializeEvent(1, 13205040, 3200508, 3202505, 2, 1, 3202507);
    $InitializeEvent(0, 13205080, 3200333, 3202334, 7000, 7001, 0, 0);
    $InitializeEvent(1, 13205080, 3200336, 3202336, 7002, 7003, 1, 53200110);
    $InitializeEvent(2, 13205080, 3200342, 3202342, 7000, 7001, 0, 0);
    $InitializeEvent(3, 13205080, 3200346, 3202315, 7000, 7001, 0, 0);
    $InitializeEvent(0, 13205100, 3200300, 0);
    $InitializeEvent(1, 13205100, 3200301, 0);
    $InitializeEvent(2, 13205100, 3200302, 0);
    $InitializeEvent(3, 13205100, 3200303, 0);
    $InitializeEvent(4, 13205100, 3200304, 0);
    $InitializeEvent(5, 13205100, 3200305, 0);
    $InitializeEvent(6, 13205100, 3200306, 0);
    $InitializeEvent(7, 13205100, 3200307, 0);
    $InitializeEvent(8, 13205100, 3200308, 0);
    $InitializeEvent(9, 13205100, 3200309, 0);
    $InitializeEvent(10, 13205100, 3200310, 0);
    $InitializeEvent(11, 13205100, 3200311, 0);
    $InitializeEvent(12, 13205100, 3200312, 0);
    $InitializeEvent(13, 13205100, 3200313, 0);
    $InitializeEvent(14, 13205100, 3200314, 0);
    $InitializeEvent(16, 13205100, 3200316, 0);
    $InitializeEvent(17, 13205100, 3200317, 0);
    $InitializeEvent(18, 13205100, 3200318, 0);
    $InitializeEvent(19, 13205100, 3200319, 0);
    $InitializeEvent(20, 13205100, 3200320, 0);
    $InitializeEvent(21, 13205100, 3200321, 0);
    $InitializeEvent(22, 13205100, 3200322, 0);
    $InitializeEvent(23, 13205100, 3200323, 0);
    $InitializeEvent(24, 13205100, 3200324, 0);
    $InitializeEvent(25, 13205100, 3200325, 0);
    $InitializeEvent(26, 13205100, 3200326, 0);
    $InitializeEvent(27, 13205100, 3200327, 0);
    $InitializeEvent(28, 13205100, 3200328, 0);
    $InitializeEvent(29, 13205100, 3200329, 0);
    $InitializeEvent(30, 13205100, 3200330, 0);
    $InitializeEvent(31, 13205100, 3200331, 0);
    $InitializeEvent(0, 13205140, 3200347, 3202347);
    $InitializeEvent(0, 13205600, 3290, 3290, NPCPartType.Part8, 7000, 5907, 13205700, 13205760, 3200420);
    $InitializeEvent(1, 13205600, 3291, 3291, NPCPartType.Part9, 7022, 5907, 13205700, 13205760, 3200420);
    $InitializeEvent(2, 13205600, 3292, 3292, NPCPartType.Part10, 7023, 5907, 13205700, 13205760, 3200420);
    $InitializeEvent(3, 13205600, 3290, 3290, NPCPartType.Part8, 7000, 5907, 13205701, 13205761, 3200421);
    $InitializeEvent(4, 13205600, 3291, 3291, NPCPartType.Part9, 7022, 5907, 13205701, 13205761, 3200421);
    $InitializeEvent(5, 13205600, 3292, 3292, NPCPartType.Part10, 7023, 5907, 13205701, 13205761, 3200421);
    $InitializeEvent(0, 13205630, 3290, 3290, NPCPartType.Part8, 40, 13205700, 3200420);
    $InitializeEvent(1, 13205630, 3291, 3291, NPCPartType.Part9, 40, 13205700, 3200420);
    $InitializeEvent(2, 13205630, 3292, 3292, NPCPartType.Part10, 40, 13205700, 3200420);
    $InitializeEvent(3, 13205630, 3290, 3290, NPCPartType.Part8, 40, 13205701, 3200421);
    $InitializeEvent(4, 13205630, 3291, 3291, NPCPartType.Part9, 40, 13205701, 3200421);
    $InitializeEvent(5, 13205630, 3292, 3292, NPCPartType.Part10, 40, 13205701, 3200421);
    $InitializeEvent(0, 13205660, 30, 40, 13205760, 3200420, 1, 11);
    $InitializeEvent(1, 13205660, 50, 40, 13205760, 3200420, 2, 12);
    $InitializeEvent(2, 13205660, 60, 40, 13205760, 3200420, 3, 13);
    $InitializeEvent(3, 13205660, 30, 40, 13205761, 3200421, 1, 11);
    $InitializeEvent(4, 13205660, 50, 40, 13205761, 3200421, 2, 12);
    $InitializeEvent(5, 13205660, 60, 40, 13205761, 3200421, 3, 13);
    $InitializeEvent(0, 13200310);
    $InitializeEvent(0, 13200311);
});

// プリコンストラクタ
$Event(50, Default, function() {
    $InitializeEvent(0, 13200100);
    $InitializeEvent(0, 13200102);
    $InitializeEvent(0, 13200103);
    $InitializeEvent(0, 13200105);
    $InitializeEvent(0, 13200106);
    $InitializeEvent(0, 13200107);
    $InitializeEvent(0, 13200108);
    $InitializeEvent(0, 13200109);
    $InitializeEvent(0, 13200110);
    $InitializeEvent(0, 13200120);
    $InitializeEvent(0, 13200121);
    if (EventFlag(1420)) {
        SetCharacterGravity(3200101, Disabled);
        SetCharacterMaphits(3200101, true);
        $InitializeEvent(0, 13200102);
    }
});

// レバー扉を開ける_XX
$Event(13200010, Default, function(objEntityId, animationId, objactEventFlag, objEntityId2, objParameterId) {
    if (ThisEventSlot()) {
        ReproduceObjectAnimation(objEntityId, animationId);
        SetObjactState(objEntityId2, objParameterId, Disabled);
        NotifySoundDampeningOfDoorEvent(objEntityId, DoorState.DoorOpening);
        EndEvent();
    }
L0:
    WaitFor(ObjActEventFlag(objactEventFlag));
    SetObjactState(objEntityId2, objParameterId, Disabled);
    ForceAnimationPlayback(objEntityId, animationId, false, true, false);
    WaitFixedTimeSeconds(0);
});

// レバー扉を調べたときのMsg_XX
$Event(13200020, Default, function(actionButtonParameterId, actionButtonParameterId2, areaEntityId, eventFlagId) {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(eventFlagId));
    act = ActionButtonInArea(actionButtonParameterId, areaEntityId);
    act2 = ActionButtonInArea(actionButtonParameterId2, areaEntityId);
    flag = EventFlag(eventFlagId);
    WaitFor(act || act2 || flag);
    EndIf(flag.Passed);
    DisplayGenericDialog(10010160, PromptType.OKCANCEL, NumberofOptions.OneButton, -1, 3);
    RestartEvent();
});

// レバー扉を開けたあとのレバー_XX
$Event(13200030, Default, function(areaEntityId, actionButtonParameterId, messageId, eventFlagId) {
    SetNetworkSyncState(Disabled);
    WaitFor(EventFlag(eventFlagId) && ActionButtonInArea(actionButtonParameterId, areaEntityId));
    DisplayGenericDialog(messageId, PromptType.OKCANCEL, NumberofOptions.OneButton, -1, 3);
    RestartEvent();
});

// 扉を開ける_XX
$Event(13200040, Default, function(objEntityId, objactEventFlag, animationId, objParameterId) {
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

// 扉を調べたときのMsg_XX
$Event(13200050, Default, function(actionButtonParameterId, areaEntityId, eventFlagId) {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(eventFlagId));
    act = ActionButtonInArea(actionButtonParameterId, areaEntityId);
    flag = EventFlag(eventFlagId);
    WaitFor(act || flag);
    if (!flag.Passed) {
        DisplayGenericDialog(10010161, PromptType.OKCANCEL, NumberofOptions.OneButton, -1, 3);
        RestartEvent();
    }
L0:
    RestartEvent();
});

// 扉を調べたときのMsg_パッチ部屋
$Event(13200055, Default, function(actionButtonParameterId, areaEntityId, eventFlagId) {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(eventFlagId));
    flagAct = !EventFlag(1420) && cond && ActionButtonInArea(actionButtonParameterId, areaEntityId);
    flag = EventFlag(eventFlagId);
    WaitFor(flagAct || flag);
    if (!flag.Passed) {
        DisplayGenericDialog(10010161, PromptType.OKCANCEL, NumberofOptions.OneButton, -1, 3);
        WaitFixedTimeSeconds(1);
        RestartEvent();
    }
L0:
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

// 扉を開ける_校舎_XX
$Event(13200060, Default, function(objEntityId, objactEventFlag, objactEventFlag2, animationId, objParameterId, objParameterId2) {
    if (ThisEventSlot()) {
        ReproduceObjectAnimation(objEntityId, animationId);
        SetObjactState(objEntityId, objParameterId, Disabled);
        SetObjactState(objEntityId, objParameterId2, Disabled);
        NotifySoundDampeningOfDoorEvent(objEntityId, DoorState.DoorOpening);
    }
L0:
    obj = ObjActEventFlag(objactEventFlag);
    WaitFor(obj || ObjActEventFlag(objactEventFlag2));
    if (!obj.Passed) {
        SetObjactState(objEntityId, objParameterId, Disabled);
    } else {
        SetObjactState(objEntityId, objParameterId2, Disabled);
    }
});

// クモ男パッチ_裏に回った判定
$Event(13200100, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    SetEventFlag(13200101, OFF);
    EndIf(!EventFlag(1420));
    SetCharacterAnimationState(3200101, Disabled);
    WaitFor(InArea(10000, 3202850));
    SetEventFlag(13200101, ON);
    SetCharacterAnimationState(3200101, Enabled);
    WaitFor(!InArea(10000, 3202850));
    RestartEvent();
});

// クモ男パッチ_立ち位置切り替え
$Event(13200102, Default, function() {
    GotoIf(L0, EventFlag(1431));
    GotoIf(L0, EventFlag(1430));
    GotoIf(L0, EventFlag(1423));
    GotoIf(L0, EventFlag(1422));
    GotoIf(L0, EventFlag(1421));
    GotoIf(L1, EventFlag(1420));
L0:
    ReproduceObjectDestruction(3201300, 1);
    ReproduceObjectDestruction(3201301, 1);
    ReproduceObjectDestruction(3201302, 1);
    ReproduceObjectDestruction(3201303, 1);
    ReproduceObjectDestruction(3201304, 1);
    ReproduceObjectDestruction(3201305, 1);
    ReproduceObjectDestruction(3201306, 1);
    ReproduceObjectDestruction(3201307, 1);
    ReproduceObjectDestruction(3201308, 1);
    ReproduceObjectDestruction(3201309, 1);
    ReproduceObjectDestruction(3201310, 1);
    ReproduceObjectDestruction(3201311, 1);
    ReproduceObjectDestruction(3201312, 1);
    ReproduceObjectDestruction(3201313, 1);
    ReproduceObjectDestruction(3201314, 1);
    ReproduceObjectDestruction(3201315, 1);
    ReproduceObjectDestruction(3201316, 1);
    ReproduceObjectDestruction(3201317, 1);
    ReproduceObjectDestruction(3201318, 1);
    ReproduceObjectDestruction(3201319, 1);
    ReproduceObjectDestruction(3201320, 1);
    SetCharacterHome(3200101, 3202852);
    IssueShortWarpRequest(3200101, TargetEntityType.Area, 3202852, -1);
    SetSpEffect(3200101, 5327, false);
    SetSpEffect(3200101, 5403, false);
    if (EventFlag(1423) || EventFlag(1432)) {
        SetCharacterBackreadState(3200101, true);
    }
    if (EventFlag(1431)) {
        ForceCharacterTreasure(3200101);
    }
    EndEvent();
L1:
    ForceAnimationPlayback(3200101, 7010, true, false, false);
    IssueShortWarpRequest(3200101, TargetEntityType.Area, 3202851, -1);
    SetObjactState(3201210, 31, Disabled);
});

// クモ男パッチ_扉張り付き解除
$Event(13200103, Default, function() {
    EndIf(AnyBatchEventFlags(1421, 1437));
    SetEventFlag(73200327, OFF);
    flag = EventFlag(1420) && EventFlag(73200327);
    dmg = HasDamageType(3200101, 10000, DamageType.Unspecified);
    WaitFor(flag || dmg);
    if (dmg.Passed) {
        SetEventFlag(13200104, ON);
    }
    SetCharacterHome(3200101, 3202852);
    SetSpEffect(3200101, 5327, false);
    ForceAnimationPlayback(3200101, 7011, false, false, false);
    WaitFixedTimeFrames(54);
    SetCharacterGravity(3200101, Enabled);
    SetCharacterMaphits(3200101, false);
    SetObjactState(3201210, 31, Enabled);
});

// クモ男パッチ_対面
$Event(13200105, Default, function() {
    WaitFor(
        EventFlag(1420) && (EventFlag(73200321) || (EventFlag(13200104) && EventFlag(73200321))));
    BatchSetEventFlags(1420, 1437, OFF);
    SetEventFlag(1421, ON);
    SaveRequest(0);
});

// クモ男パッチ_対面SAN値
$Event(13200106, Default, function() {
    EndIf(ThisEvent());
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(EventFlag(13200101) && EntityInRadiusOfEntity(10000, 3200101, 5));
    $InitializeEvent(0, 9350, 2);
});

// クモ男パッチ_旅立ち直前
$Event(13200107, Default, function() {
    WaitFor(EventFlag(9466) && EventFlag(9461) && EventFlag(1421) && EventFlag(73200324));
    BatchSetEventFlags(1420, 1437, OFF);
    SetEventFlag(1422, ON);
});

// クモ男パッチ_敵対した
$Event(13200108, Default, function() {
    EndIf(EventFlag(1430));
    EndIf(EventFlag(1431));
    WaitFor(
        (EventFlag(1421) || EventFlag(1422))
            && HPRatio(3200101) < 0.5
            && CharacterDamagedBy(3200101, 10000));
    ForceAnimationPlayback(3200101, 3000, false, false, false);
    BatchSetEventFlags(1420, 1437, OFF);
    SetEventFlag(1430, ON);
    SaveRequest(0);
});

// クモ男パッチ_チームタイプ切替
$Event(13200109, Default, function() {
    EndIf(EventFlag(1431));
    SetCharacterTeamType(3200101, TeamType.FriendlyNPC);
    WaitFor(EventFlag(1430));
    SetCharacterTeamType(3200101, TeamType.HostileNPC);
});

// クモ男パッチ_死亡した
$Event(13200110, Default, function() {
    if (EventFlag(1431)) {
        EndEvent();
    }
L0:
    WaitFor(CharacterDead(3200101));
    BatchSetEventFlags(1420, 1437, OFF);
    SetEventFlag(1431, ON);
    SaveRequest(0);
});

// 学長_死んでいる
$Event(13200120, Default, function() {
    if (EventFlag(1061)) {
        ChangeCharacterEnableState(3200100, Disabled);
        ForceCharacterTreasure(3200100);
        EndEvent();
    }
L0:
    WaitFor(CharacterDead(3200100));
    BatchSetEventFlags(1060, 1079, OFF);
    SetEventFlag(1061, ON);
    SaveRequest(0);
});

// 学長が月を指す
$Event(13200121, Default, function() {
    EndIf(EventFlag(1061));
    WaitFor(EventFlag(73200300) && CharacterHasSpEffect(3200100, 151));
    SetEventFlag(73200300, OFF);
    ForceAnimationPlayback(3200100, 7010, false, false, false);
    if (!ThisEvent()) {
        $InitializeEvent(0, 9350, 2);
    }
    RestartEvent();
});

// 宝箱_XX
$Event(13200200, Default, function(objEntityId, objactEventFlag) {
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

// 扉を開けるとTRにワープ
$Event(13200310, Default, function() {
    WaitFor(ObjActEventFlag(13200124));
    SpawnOneshotSFX(TargetEntityType.Area, 3202001, -1, 932201);
    WaitFixedTimeSeconds(6);
    WarpPlayerToRespawnPoint(2602959);
});

// 扉を開けると故郷へワープ
$Event(13200311, Default, function() {
    WaitFor(ObjActEventFlag(13200123));
    SpawnOneshotSFX(TargetEntityType.Area, 3202000, -1, 932201);
    WaitFixedTimeSeconds(6);
    WarpPlayerToRespawnPoint(3302959);
});

// テラスのカギ入手
$Event(13200400, Default, function() {
    EndIf(EventFlag(53200810));
    EndIf(!CharacterType(10000, TargetType.Alive));
    CreateObjectfollowingSFX(3201010, 200, 900201);
    WaitFor(ActionButtonInArea(3200010, 3201010));
    ForceAnimationPlayback(10000, 101140, false, false, false);
    AwardItemLot(3200810);
    DeleteObjectfollowingSFX(3201010, true);
});

// NPC死亡再現_大学_XX
$Event(13200500, Default, function(chrEntityId) {
    if (ThisEventSlot()) {
        SetCharacterBackreadState(chrEntityId, true);
        ChangeCharacterEnableState(chrEntityId, Disabled);
        ForceCharacterTreasure(chrEntityId);
        EndEvent();
    }
L0:
    WaitFor(CharacterDead(chrEntityId));
    WaitFixedTimeSeconds(0);
});

// マップ初回入場_プレイログ
$Event(13200990, Default, function() {
    EndIf(ThisEvent());
    WaitFor(PlayerStandingOnHit(3204000));
    ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 0, PlayLogMultiplayerType.HostOnly);
    ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 0, PlayLogMultiplayerType.HostOnly);
    ParameterOutput(PlayerPlayLogParameter.Weapon, 0, PlayLogMultiplayerType.HostOnly);
    ParameterOutput(PlayerPlayLogParameter.Armor, 0, PlayLogMultiplayerType.HostOnly);
});

// ボス撃破_白痴の蜘蛛
$Event(13201800, Default, function() {
    if (ThisEvent()) {
        SetMapSoundState(3203802, Disabled);
        SetMapSoundState(3203803, Disabled);
        ChangeCharacterEnableState(3200800, Disabled);
        ForceCharacterDeath(3200800, false);
        DeactivateObject(3201800, Disabled);
        DeleteMapSFX(3203800, false);
        ActivateHit(3204010, Disabled);
        EndEvent();
    }
L0:
    WaitFor(CharacterDead(3200800));
    DisplayBanner(TextBannerType.DemonKilled);
    DeactivateObject(3201800, Disabled);
    DeleteMapSFX(3203800, true);
    ActivateHit(3204010, Disabled);
    SetLockcamSlotNumber(32, 0, 0);
    WaitFixedTimeSeconds(3);
    HandleBossDefeat(3200800);
    SetNetworkSyncState(Disabled);
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        WaitFor(CharacterType(10000, TargetType.Alive));
        $InitializeEvent(0, 9350, 2);
        AwardAchievement(17);
        AwardItemLot(51001900);
        SetEventFlag(3200, ON);
        SetEventFlag(9465, ON);
        StartTimeMeasurement(3200000, 22, Disabled);
        StartTimeMeasurement(3200001, 40, Disabled);
        StartTimeMeasurement(3200010, 62, Disabled);
        CreatePlaylog(80);
        ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 92, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 92, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Weapon, 92, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Armor, 92, PlayLogMultiplayerType.HostOnly);
        EndEvent();
    }
L1:
    WaitFor(CharacterType(10000, TargetType.WhitePhantom));
    WaitFixedTimeSeconds(0);
});

// ボス撃破SE再生_白痴の蜘蛛
$Event(13201801, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(13201800));
    flag = EventFlag(13201800);
    WaitFor(flag || (!CharacterBackreadStatus(3200800) && HPRatio(3200800) <= 0));
    EndIf(flag.Passed);
    PlaySE(3202800, SoundType.cCharacterMotion, 0);
});

// ホストがボス部屋入場_初戦_白痴の蜘蛛
$Event(13201802, Default, function() {
    EndIf(EventFlag(13201800));
    EndIf(ThisEvent());
    WaitFor(
        !EventFlag(13201800) && !ThisEvent() && HasDamageType(3200800, -1, DamageType.Unspecified));
    SetEventFlag(13204800, ON);
    EndIf(EventFlag(9303));
    $InitializeEvent(0, 9350, 2);
    SetEventFlag(9303, ON);
});

// ボス撃破後花嫁出現
$Event(13201803, Restart, function() {
    if (ThisEvent()) {
        ChangeCharacterEnableState(3200801, Disabled);
        EndEvent();
    }
L0:
    SetCharacterAIState(3200801, Disabled);
    if (CharacterType(10000, TargetType.Alive)) {
        SetNetworkUpdateAuthority(3200801, AuthorityLevel.Forced);
    }
    GotoIf(L1, EventFlag(13201800));
    GotoIf(L2, !CharacterType(10000, TargetType.Alive));
    WaitFor(EventFlag(13201800));
    chrArea = CharacterType(10000, TargetType.Alive) && InArea(10000, 3202811);
    chrArea2 = CharacterType(10000, TargetType.Alive) && InArea(10000, 3202812);
    chrArea3 = CharacterType(10000, TargetType.Alive) && InArea(10000, 3202813);
    WaitFor(
        chrArea
            || chrArea2
            || chrArea3
            || (CharacterType(10000, TargetType.Alive) && InArea(10000, 3202814)));
    GotoIf(S2, chrArea.Passed);
    GotoIf(S1, chrArea2.Passed);
    GotoIf(S0, chrArea3.Passed);
    IssueShortWarpRequest(3200801, TargetEntityType.Area, 3202815, -1);
    Goto(L1);
S0:
    IssueShortWarpRequest(3200801, TargetEntityType.Area, 3202816, -1);
    Goto(L1);
S1:
    IssueShortWarpRequest(3200801, TargetEntityType.Area, 3202817, -1);
    Goto(L1);
S2:
    IssueShortWarpRequest(3200801, TargetEntityType.Area, 3202818, -1);
L1:
    ForceAnimationPlayback(3200801, 7001, false, false, false);
    WaitFor(CharacterType(10000, TargetType.Alive) && EntityInRadiusOfEntity(10000, 3200801, 12));
    SetEventFlag(9180, ON);
    WaitFixedTimeFrames(1);
    PlayCutsceneAndChangeTimePeriod(32000000, CutscenePlayMode.Skippable, 10000, 3);
    WaitFixedTimeFrames(1);
    SetEventFlag(9180, OFF);
    SetEventFlag(70002802, ON);
    WarpPlayerToRespawnPoint(2802958);
    EndEvent();
L2:
    WaitFor(EventFlag(6001));
    WaitFixedTimeSeconds(0);
});

// 白痴の蜘蛛_時間差入場ゲスト用対処処理
$Event(13201804, Default, function() {
    WaitFor(CharacterType(10000, TargetType.Alive) && EventFlag(13204800));
    EndIf(HasMultiplayerState(MultiplayerState.Host));
    SetEventFlag(13204800, ON);
    SetEventFlag(13201802, ON);
});

// 白痴の蜘蛛（子）_出現_XX
$Event(13204000, Default, function(chrEntityId, eventFlagId) {
    EndIf(ThisEventSlot());
    SetCharacterAIState(chrEntityId, Disabled);
    SetCharacterGravity(chrEntityId, Disabled);
    WaitFor(
        EventFlag(eventFlagId)
            && (RandomElapsedSeconds(2, 3)
                || (CharacterType(10000, TargetType.WhitePhantom) && ElapsedSeconds(3))));
    SetCharacterAIState(chrEntityId, Enabled);
    RotateCharacter(chrEntityId, 10000, 7000, true);
    SetCharacterGravity(chrEntityId, Enabled);
});

// 白痴の蜘蛛（子）_強制死亡_XX
$Event(13204050, Default, function(chrEntityId, eventFlagId) {
    if (EventFlag(13201800)) {
        ChangeCharacterEnableState(chrEntityId, Disabled);
        ForceCharacterDeath(chrEntityId, false);
        EndEvent();
    }
L0:
    WaitFor(EventFlag(eventFlagId) && CharacterDead(3200800));
    WaitFor(RandomElapsedSeconds(0, 1));
    ForceCharacterDeath(chrEntityId, false);
});

// 紙片_XX
$Event(13204100, Default, function(areaEntityId, actionButtonParameterId, messageId) {
    SetNetworkSyncState(Disabled);
    WaitFor(ActionButtonInArea(actionButtonParameterId, areaEntityId));
    DisplayGenericDialog(messageId, PromptType.OKCANCEL, NumberofOptions.OneButton, -1, 3);
    RestartEvent();
});

// イベントターゲット指定_XX
$Event(13204730, Default, function(chrEntityId) {
    EndIf(EventFlag(13201800));
    WaitFor(EventFlag(13204802));
    SetCharacterEventTarget(chrEntityId, 3200800);
});

// ホストがボス部屋入場_再戦_白痴の蜘蛛
$Event(13204830, Default, function() {
    EndIf(EventFlag(13201800));
    if (!EventFlag(13201802)) {
        if (!HasMultiplayerState(MultiplayerState.Client)) {
            DeactivateObject(3201800, Disabled);
            DeleteMapSFX(3203800, false);
        }
        ActivateHit(3204010, Disabled);
        WaitFor(!EventFlag(13201800) && EventFlag(13201802));
        DeactivateObject(3201800, Enabled);
        SpawnMapSFX(3203800);
        ActivateHit(3204010, Enabled);
    }
L0:
    flagChrAct = !EventFlag(13201800)
        && CharacterType(10000, TargetType.Alive)
        && ActionButtonInArea(3200800, 3201800);
    flag = EventFlag(13201800);
    WaitFor(flagChrAct || flag);
    EndIf(flag.Passed);
    RotateCharacter(10000, 3202800, 101130, false);
    WaitFor(
        (CharacterType(10000, TargetType.Alive) && InArea(10000, 3202809))
            || (CharacterType(10000, TargetType.Alive) && ElapsedSeconds(2)));
    RestartEvent();
});

// ゲストがボス部屋入場_白痴の蜘蛛
$Event(13204831, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(13201800));
    WaitFor(
        !EventFlag(13201800)
            && EventFlag(13201802)
            && EventFlag(13204800)
            && CharacterType(10000, TargetType.WhitePhantom)
            && ActionButtonInArea(3200800, 3201800));
    RotateCharacter(10000, 3202800, 101130, false);
    WaitFor(
        (CharacterType(10000, TargetType.WhitePhantom) && InArea(10000, 3202801))
            || (CharacterType(10000, TargetType.WhitePhantom) && ElapsedSeconds(2)));
    RestartEvent();
});

// 他人の世界で霧壁あたり無効_白痴の蜘蛛
$Event(13204832, Default, function() {
    WaitFor(CharacterType(10000, TargetType.Alive) && EntityInRadiusOfEntity(10000, 3201800, 2));
    SetCharacterGravityMaphitStateExcludingOwnWorld(10000, Disabled);
    WaitFixedTimeFrames(6);
    RestartEvent();
});

// 他人の世界で霧壁あたり無効2_白痴の蜘蛛
$Event(13204833, Default, function() {
    WaitFor(
        CharacterType(10000, TargetType.Alive)
            && !EntityInRadiusOfEntity(10000, 3201800, 2)
            && EntityInRadiusOfEntity(10000, 3201800, 4));
    SetCharacterGravityMaphitStateExcludingOwnWorld(10000, Enabled);
    WaitFixedTimeFrames(6);
    RestartEvent();
});

// 他人の世界で霧壁あたり無効3_聖歌隊NPC
$Event(13204834, Default, function() {
    WaitFor(EntityInRadiusOfEntity(3200110, 3201800, 2));
    SetCharacterGravityMaphitStateExcludingOwnWorld(3200110, Disabled);
    WaitFor(!EntityInRadiusOfEntity(3200110, 3201800, 2));
    SetCharacterGravityMaphitStateExcludingOwnWorld(3200110, Enabled);
    RestartEvent();
});

// ボスが動き出す_白痴の蜘蛛
$Event(13204802, Default, function() {
    EndIf(EventFlag(13201800));
    SetCharacterAIState(3200800, Disabled);
    SetCharacterHPBarDisplay(3200800, Disabled);
    SetCharacterImmortality(3200800, Enabled);
    if (!ThisEvent()) {
        WaitFor(EventFlag(13201802) && EventFlag(13204800));
        if (!HasMultiplayerState(MultiplayerState.Client)) {
            IssueBossRoomEntryNotification(0);
            SetNetworkUpdateAuthority(3200800, AuthorityLevel.Forced);
        }
    }
L0:
    SetEventFlag(13204800, ON);
    GotoIf(L1, NumberOfCoopClients() == 0);
    GotoIf(L2, NumberOfCoopClients() == 1);
    GotoIf(L3, NumberOfCoopClients() == 2);
L1:
    Goto(L4);
L2:
    SetSpEffect(3200800, 7500, true);
    WaitFixedTimeFrames(1);
    AdaptHpchangingSpEffectToNPCPartOfTarget(3200800);
    Goto(L4);
L3:
    SetSpEffect(3200800, 7501, true);
    WaitFixedTimeFrames(1);
    AdaptHpchangingSpEffectToNPCPartOfTarget(3200800);
    Goto(L4);
L4:
    SetCharacterAIState(3200800, Enabled);
    SetCharacterImmortality(3200800, Disabled);
    SetSpEffect(3200800, 3011, true);
    DisplayBossHealthBar(Enabled, 3200800, 0, 510000);
    SetNetworkUpdateRate(3200800, true, CharacterUpdateFrequency.AlwaysUpdate);
    CreatePlaylog(124);
    StartTimeMeasurement(3200010, 62, Enabled);
});

// ボスBGM ON_白痴の蜘蛛
$Event(13204803, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(13201800));
    if (!ThisEvent()) {
        SetMapSoundState(3203802, Disabled);
        SetMapSoundState(3203803, Disabled);
        flagArea &= !EventFlag(13201800) && EventFlag(13204802);
        if (!HasMultiplayerState(MultiplayerState.Host)) {
            flagArea &= EventFlag(13204801);
        }
        flagArea &= InArea(10000, 3202801);
        WaitFor(flagArea);
        EnableBossMapSound(3203802, Enabled);
        chrFlagArea &= CharacterHasEventMessage(3200800, 10);
    }
L0:
    chrFlagArea &= !EventFlag(13201800) && EventFlag(13204802);
    if (!HasMultiplayerState(MultiplayerState.Host)) {
        chrFlagArea &= EventFlag(13204801);
    }
    chrFlagArea &= InArea(10000, 3202801);
    WaitFor(chrFlagArea);
    EnableBossMapSound(3203802, Disabled);
    WaitFixedTimeFrames(0);
    EnableBossMapSound(3203803, Enabled);
});

// ボスカメラ_白痴の蜘蛛
$Event(13204804, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(13201800));
    WaitFor(HPRatio(3200800) > 0 && EntityInRadiusOfEntity(10000, 3200800, 4));
    SetLockcamSlotNumber(32, 0, 1);
    WaitFor(HPRatio(3200800) > 0 && !EntityInRadiusOfEntity(10000, 3200800, 6));
    SetLockcamSlotNumber(32, 0, 0);
    RestartEvent();
});

// ボスBGM OFF_白痴の蜘蛛
$Event(13204805, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(13201800));
    WaitFor(EventFlag(13201800));
    EnableBossMapSound(3203802, Disabled);
    EnableBossMapSound(3203803, Disabled);
    EnableBossMapSound(-1, Disabled);
});

// ヒートアップ_白痴の蜘蛛
$Event(13204807, Default, function() {
    EndIf(EventFlag(13201800));
    WaitFor(HPRatio(3200800) <= 0.75);
    RequestCharacterAICommand(3200800, 100, 0);
    RequestCharacterAIReplan(3200800);
    WaitFor(CharacterHasEventMessage(3200800, 10));
    ChangeCharacterEnableState(3200800, Disabled);
    WaitFixedTimeSeconds(3);
    IssueShortWarpRequest(3200800, TargetEntityType.Area, 3202806, -1);
    ChangeCharacterEnableState(3200800, Enabled);
    ForceAnimationPlayback(3200800, 3021, false, false, false);
    RequestCharacterAICommand(3200800, 101, 0);
    RequestCharacterAIReplan(3200800);
    SetEventFlag(13204811, ON);
    WaitFor(HPRatio(3200800) <= 0.5);
    RequestCharacterAICommand(3200800, 110, 0);
    RequestCharacterAIReplan(3200800);
    WaitFor(CharacterHasEventMessage(3200800, 10));
    ChangeCharacterEnableState(3200800, Disabled);
    WaitFixedTimeSeconds(3);
    IssueShortWarpRequest(3200800, TargetEntityType.Area, 3202807, -1);
    ChangeCharacterEnableState(3200800, Enabled);
    ForceAnimationPlayback(3200800, 3021, false, false, false);
    RequestCharacterAICommand(3200800, 111, 0);
    RequestCharacterAIReplan(3200800);
    SetEventFlag(13204812, ON);
});

// 左半身損傷_白痴の蜘蛛
$Event(13204808, Default, function() {
    EndIf(EventFlag(13201800));
    CreateNPCPart(3200800, 3201, NPCPartType.Part2, 100, 1, 1, false, false);
    SetNPCPartSEAndSFX(3200800, 3201, 59, 59);
    hp = NPCPartHP(3200800, 3201) <= 0;
    hp2 = HPRatio(3200800) <= 0;
    chr = CharacterHasEventMessage(3200800, 20);
    WaitFor(hp || hp2 || chr);
    EndIf(hp2.Passed);
    if (!chr.Passed) {
        RequestCharacterAnimationReset(3200800, Interpolation.Interpolated);
        ForceAnimationPlayback(3200800, 7000, false, false, false);
        SetNPCPartHP(3200800, 3201, 50, true);
        hp3 = NPCPartHP(3200800, 3201) <= 0;
        hp4 = HPRatio(3200800) <= 0;
        chr2 = CharacterHasEventMessage(3200800, 20);
        WaitFor(hp3 || hp4 || chr2);
        EndIf(hp4.Passed);
        if (!chr2.Passed) {
            RequestCharacterAnimationReset(3200800, Interpolation.Interpolated);
            ForceAnimationPlayback(3200800, 7001, false, false, false);
            SetNPCPartHP(3200800, 3201, 25, true);
            hp5 = NPCPartHP(3200800, 3201) <= 0;
            hp6 = HPRatio(3200800) <= 0;
            chr3 = CharacterHasEventMessage(3200800, 20);
            WaitFor(hp5 || hp6 || chr3);
            EndIf(hp6.Passed);
            if (!chr3.Passed) {
                RequestCharacterAnimationReset(3200800, Interpolation.Interpolated);
                ForceAnimationPlayback(3200800, 7002, false, false, false);
                CreateNPCPart(3200800, 3201, NPCPartType.Part2, 9999, 1, 1.25, false, false);
                SetNPCPartSEAndSFX(3200800, 3201, 60, 60);
                RequestCharacterAIReplan(3200800);
                WaitFor(ElapsedSeconds(30));
            }
        }
    }
L0:
    SetNPCPartHP(3200800, 3201, -1, true);
    RequestCharacterAIReplan(2420800);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// 右半身損傷_白痴の蜘蛛
$Event(13204809, Default, function() {
    EndIf(EventFlag(13201800));
    CreateNPCPart(3200800, 3202, NPCPartType.Part3, 100, 1, 1, false, false);
    SetNPCPartSEAndSFX(3200800, 3202, 59, 59);
    hp = NPCPartHP(3200800, 3202) <= 0;
    hp2 = HPRatio(3200800) <= 0;
    chr = CharacterHasEventMessage(3200800, 20);
    WaitFor(hp || hp2 || chr);
    EndIf(hp2.Passed);
    if (!chr.Passed) {
        RequestCharacterAnimationReset(3200800, Interpolation.Interpolated);
        ForceAnimationPlayback(3200800, 7005, false, false, false);
        SetNPCPartHP(3200800, 3202, 50, true);
        hp3 = NPCPartHP(3200800, 3202) <= 0;
        hp4 = HPRatio(3200800) <= 0;
        chr2 = CharacterHasEventMessage(3200800, 20);
        WaitFor(hp3 || hp4 || chr2);
        EndIf(hp4.Passed);
        if (!chr2.Passed) {
            RequestCharacterAnimationReset(3200800, Interpolation.Interpolated);
            ForceAnimationPlayback(3200800, 7006, false, false, false);
            SetNPCPartHP(3200800, 3202, 25, true);
            hp5 = NPCPartHP(3200800, 3) <= 0;
            hp6 = HPRatio(3200800) <= 0;
            chr3 = CharacterHasEventMessage(3200800, 20);
            WaitFor(hp5 || hp6 || chr3);
            EndIf(hp6.Passed);
            if (!chr3.Passed) {
                RequestCharacterAnimationReset(3200800, Interpolation.Interpolated);
                ForceAnimationPlayback(3200800, 7007, false, false, false);
                CreateNPCPart(3200800, 3202, NPCPartType.Part3, 9999, 1, 1.3, false, false);
                SetNPCPartSEAndSFX(3200800, 3202, 60, 60);
                RequestCharacterAIReplan(3200800);
                WaitFor(ElapsedSeconds(30));
            }
        }
    }
L0:
    SetNPCPartHP(3200800, 3202, -1, true);
    RequestCharacterAIReplan(2420800);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// 頭部部位設定_白痴の蜘蛛
$Event(13204810, Default, function() {
    EndIf(EventFlag(13201800));
    CreateNPCPart(3200800, 3200, NPCPartType.Part1, 50, 0.5, 0.5, false, false);
    SetNPCPartSEAndSFX(3200800, 3200, 61, 61);
    WaitFor(NPCPartHP(3200800, 3200) <= 0);
    RestartEvent();
});

// ホストが着地_白痴の蜘蛛
$Event(13204820, Default, function() {
    WaitFor(CharacterType(10000, TargetType.Alive) && InArea(10000, 3202800));
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        SetCharacterInvincibility(10000, Enabled);
        SpawnOneshotSFX(TargetEntityType.Character, 10000, 246, 932210);
    }
L0:
    WaitFixedTimeSeconds(5);
    SetCharacterInvincibility(10000, Disabled);
    if (EventFlag(13201802)) {
        SetEventFlag(13204800, ON);
    }
    RestartEvent();
});

// ゲストが着地_白痴の蜘蛛
$Event(13204821, Default, function() {
    SetNetworkSyncState(Disabled);
    WaitFor(EventFlag(13204800) && InArea(10000, 3202800));
    SetCharacterInvincibility(10000, Enabled);
    SpawnOneshotSFX(TargetEntityType.Character, 10000, 246, 932210);
    WaitFixedTimeSeconds(5);
    SetCharacterInvincibility(10000, Disabled);
    SetEventFlag(13204801, ON);
    RestartEvent();
});

// 領域進入で敵が巡回開始_XX
$Event(13205000, Restart, function(chrEntityId, areaEntityId, areaEntityId2, targetDistance, patrolInformationEntityId) {
    if (!ThisEventSlot()) {
        ChangeCharacterPatrolBehavior(chrEntityId, -1);
        WaitFor(
            ((CharacterType(10000, TargetType.Alive)
                || CharacterType(10000, TargetType.WhitePhantom))
                && (InArea(10000, areaEntityId)
                    || InArea(10000, areaEntityId2)
                    || EntityInRadiusOfEntity(10000, chrEntityId, targetDistance)))
                || HasDamageType(chrEntityId, -1, DamageType.Unspecified));
    }
L0:
    ChangeCharacterPatrolBehavior(chrEntityId, patrolInformationEntityId);
    RequestCharacterAIReplan(chrEntityId);
});

// 領域進入で蜘蛛ルフが飛び降りてくる_XX
$Event(13205040, Restart, function(chrEntityId, areaEntityId, targetDistance, timeSeconds, areaEntityId2) {
    EndIf(ThisEventSlot());
    SetCharacterAIState(chrEntityId, Disabled);
    chrArea = (CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
        && (InArea(10000, areaEntityId) || EntityInRadiusOfEntity(10000, chrEntityId, targetDistance));
    dmg = HasDamageType(chrEntityId, -1, DamageType.Unspecified);
    WaitFor(chrArea || dmg);
    if (dmg.Passed) {
        SetCharacterAIState(chrEntityId, Enabled);
        EndEvent();
    }
L0:
    WaitFixedTimeSeconds(timeSeconds);
    SetCharacterAIState(chrEntityId, Enabled);
    SetCharacterHome(chrEntityId, areaEntityId2);
    RequestCharacterAICommand(chrEntityId, 10, 0);
    RequestCharacterAIReplan(chrEntityId);
    WaitFor(InArea(chrEntityId, areaEntityId2));
    ForceAnimationPlayback(chrEntityId, 3013, false, false, false);
    WaitFixedTimeFrames(34);
    RequestCharacterAICommand(chrEntityId, -1, 0);
    RequestCharacterAIReplan(chrEntityId);
});

// 目的地到達で敵が巡回変更_XX
$Event(13205050, Restart, function(chrEntityId, areaEntityId, patrolInformationEntityId) {
    if (!ThisEventSlot()) {
        ChangeCharacterPatrolBehavior(chrEntityId, -1);
        WaitFor(InArea(chrEntityId, areaEntityId));
    }
L0:
    ChangeCharacterPatrolBehavior(chrEntityId, patrolInformationEntityId);
    RequestCharacterAIReplan(chrEntityId);
});

// 移動後に自由巡回_XX
$Event(13205060, Restart, function(chrEntityId, areaEntityId, patrolInformationEntityId) {
    WaitFor(
        InArea(chrEntityId, areaEntityId)
            || CharacterAIState(chrEntityId, AIStateType.Combat)
            || HasDamageType(chrEntityId, 10000, DamageType.Unspecified));
    ChangeCharacterPatrolBehavior(chrEntityId, patrolInformationEntityId);
});

// 学徒の落下投げ_XX
$Event(13205080, Restart, function(chrEntityId, areaEntityId, animationId, animationId2, value, eventFlagId) {
    EndIf(ThisEventSlot());
    SetCharacterGravity(chrEntityId, Disabled);
    SetCharacterMaphits(chrEntityId, true);
    SetCharacterAIState(chrEntityId, Disabled);
    ForceAnimationPlayback(chrEntityId, animationId, true, false, false);
    chrAreaFlag &= (CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
        && InArea(10000, areaEntityId);
    if (value != 0) {
        chrAreaFlag &= EventFlag(eventFlagId);
    }
    WaitFor(chrAreaFlag || HasDamageType(chrEntityId, -1, DamageType.Unspecified));
    SetCharacterGravity(chrEntityId, Enabled);
    SetCharacterAIState(chrEntityId, Enabled);
    ForceAnimationPlayback(chrEntityId, animationId2, false, true, false);
    SetCharacterMaphits(chrEntityId, false);
});

// 学徒が立ち上がる_XX
$Event(13205100, Restart, function(chrEntityId, areaEntityId) {
    EndIf(ThisEventSlot());
    WaitFor(CharacterBackreadStatus(chrEntityId));
    ForceAnimationPlayback(chrEntityId, 7004, true, false, false);
    WaitFor(
        CharacterAIState(chrEntityId, AIStateType.Recognition)
            || CharacterAIState(chrEntityId, AIStateType.Combat)
            || ((CharacterType(10000, TargetType.Alive)
                || CharacterType(10000, TargetType.WhitePhantom))
                && InArea(10000, areaEntityId)));
    ForceAnimationPlayback(chrEntityId, 7005, false, false, false);
    WaitFixedTimeFrames(59);
    RotateCharacter(chrEntityId, 10000, 3011, false);
});

// 学徒の不意打ち_XX
$Event(13205140, Restart, function(chrEntityId, areaEntityId) {
    EndIf(ThisEventSlot());
    chr = CharacterAIState(chrEntityId, AIStateType.Recognition)
        || CharacterAIState(chrEntityId, AIStateType.Combat);
    chrArea = (CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
        && InArea(10000, areaEntityId);
    dmg = HasDamageType(chrEntityId, -1, DamageType.Unspecified);
    WaitFor(chr || chrArea || dmg);
    EndIf(chr.Passed);
    EndIf(dmg.Passed);
    RotateCharacter(chrEntityId, 10000, 3002, false);
});

// 星の花_死亡演出
$Event(13205200, Restart, function() {
    if (!ThisEventSlot()) {
        ChangeCharacterEnableState(3200621, Disabled);
        WaitFor(HPRatio(3200620) == 0 && CharacterHasEventMessage(3200620, 10));
        WarpCharacterAndCopyFloor(3200621, TargetEntityType.Character, 3200620, 90, 3200620);
        ChangeCharacterEnableState(3200621, Enabled);
    }
L0:
    ForceCharacterTreasure(3200621);
});

// 白痴の蜘蛛（子）_頭部ダメージ_XX
$Event(13205300, Restart, function(chrEntityId, npcPartId, npcPartId2) {
    WaitFor(CharacterBackreadStatus(chrEntityId));
    CreateNPCPart(chrEntityId, npcPartId, NPCPartType.Part1, 30, 1, 1, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId2, 61, 61);
    WaitFor(NPCPartHP(chrEntityId, npcPartId2) <= 0);
    RequestCharacterAnimationReset(chrEntityId, Interpolation.Uninterpolated);
    ForceAnimationPlayback(chrEntityId, 9930, false, false, false);
    SetNPCPartHP(chrEntityId, npcPartId2, -1, false);
    RestartEvent();
});

// 医療協会のフランケン 部位損傷_XX
$Event(13205600, Default, function(npcPartId, npcPartId2, npcPartGroupIdx, animationId, spEffectId, eventFlagId, eventFlagId2, chrEntityId) {
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
$Event(13205630, Default, function(npcPartId, npcPartId2, npcPartGroupIdx, npcPartHP, eventFlagId, chrEntityId) {
    WaitFor(EntityInRadiusOfEntity(chrEntityId, 10000, 10));
    CreateNPCPart(chrEntityId, npcPartId, npcPartGroupIdx, npcPartHP, 1, 1, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId2, 64, 64);
    SetEventFlag(eventFlagId, ON);
});

// 医療協会のフランケン 部位破壊タイミング制限_XX
$Event(13205660, Default, function(eventMessageId, eventMessageId2, eventFlagId, chrEntityId, bitNumber, bitNumber2) {
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

// 邪神ワープで悪夢校舎に到達した時にSAN値上げる
$Event(13200950, Default, function() {
    if (CharacterType(10000, TargetType.Alive)) {
        WaitFor(PlayerStandingOnHit(3204001) && EventFlag(12800434));
        SetEventFlag(12800434, OFF);
        SetSpEffect(10000, 110, false);
        SetSpEffect(10000, 111, false);
        SetSpEffect(10000, 112, false);
        SetSpEffect(10000, 113, false);
        SetSpEffect(10000, 114, false);
        SetSpEffect(10000, 115, false);
        SetSpEffect(10000, 116, false);
        EndIf(ThisEvent());
        $InitializeEvent(0, 9350, 2);
        EndEvent();
    }
L0:
    WaitFor(EventFlag(6001));
    WaitFixedTimeSeconds(0);
});

// 悪夢校舎到達_トロフィー解放
$Event(13200960, Default, function() {
    EndIf(ThisEvent());
    if (CharacterType(10000, TargetType.Alive)) {
        WaitFor(PlayerStandingOnHit(3204001) || PlayerStandingOnHit(3204002));
        AwardAchievement(13);
        EndEvent();
    }
L0:
    WaitFor(EventFlag(6001));
    WaitFixedTimeSeconds(0);
});

// ★大学_新NPC召喚_ボス部屋を目指す_XX
$Event(13204450, Restart, function(chrEntityId, entityId, eventFlagId, eventFlagId2, eventFlagId3) {
    EndIf(ThisEventSlot());
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    SetEventPoint(chrEntityId, entityId, 1);
    WaitFor(EventFlag(eventFlagId) && !EventFlag(eventFlagId2) && EventFlag(eventFlagId3));
    RequestCharacterAICommand(chrEntityId, 990, 0);
    RequestCharacterAIReplan(chrEntityId);
});

// ★大学_新NPC召喚_着地_XX
$Event(13204470, Default, function(chrEntityId) {
    WaitFor(InArea(chrEntityId, 3202800));
    SetCharacterInvincibility(chrEntityId, Enabled);
L0:
    WaitFixedTimeSeconds(5);
    SetCharacterInvincibility(chrEntityId, Disabled);
});

// ★大学_新NPC召喚_召喚可否判定_上位者狩り
$Event(13204400, Restart, function(eventFlagId, entityId, eventFlagId2, eventFlagId3, eventFlagId4, eventFlagId5) {
    if (!EventFlag(eventFlagId)) {
        SetEventFlag(eventFlagId, OFF);
        DeleteMapSFX(entityId, true);
        WaitFor(
            PlayerHasItem(ItemType.Goods, 4312)
                && !EventFlag(eventFlagId2)
                && !EventFlag(eventFlagId3)
                && !EventFlag(eventFlagId4)
                && NumberOfClientsOfType(ClientType.Coop) < 2
                && !EventFlag(13204421)
                && !EventFlag(13204422)
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
                && !EventFlag(13204421)
                && !EventFlag(13204422)
                && !EventFlag(eventFlagId5)));
    SetEventFlag(eventFlagId, OFF);
    DeleteMapSFX(entityId, true);
    RestartEvent();
});

// ★大学_新NPC召喚_召喚可否判定_連盟：処刑人
$Event(13204401, Restart, function(eventFlagId, entityId, eventFlagId2, eventFlagId3, eventFlagId4, eventFlagId5) {
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

// ★大学_新NPC召喚_召喚可否判定_連盟：ヘンリック
$Event(13204402, Restart, function(eventFlagId, entityId, eventFlagId2, eventFlagId3, eventFlagId4, eventFlagId5) {
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

// ★大学_新NPC召喚_参加_XX
$Event(13204410, Restart, function(signType, areaEntityId, entityId, eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4, actionButtonParameterId) {
    SetCharacterDefaultBackreadState(areaEntityId, Enabled);
    SetNetworkUpdateRate(areaEntityId, true, CharacterUpdateFrequency.AlwaysUpdate);
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

// ★大学_新NPC召喚_ボス部屋に入る_XX
$Event(13204460, Restart, function(chrEntityId, areaEntityId, entityId, areaEntityId2, playAnimationId, eventFlagId, areaEntityId3) {
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


