// ==EMEVD==
// @docs    bb-common.emedf.json
// @compress    DCX_DFLT_10000_44_9
// @game    Bloodborne
// @string    "\u0000聖堂街A_邪神投げ開始\u0000聖堂街A_扉を閉じる領域侵入\u0000聖堂街A_ショートカット領域侵入\u0000聖堂街A_トラップ発動\u0000ボス_撃破\u0000PC情報_ボス撃破_聖女ビースト\u0000ボス_戦闘開始\u0000ボス戦_撃破時間\u0000PC情報_聖堂街A到達時\u0000N:\\SPRJ\\data\\Param\\event\\common.emevd\u0000\u0000\u0000\u0000\u0000"
// @linked    [220]
// @version    3.6.2
// ==/EMEVD==

// コンストラクタ
$Event(0, Default, function() {
    $InitializeEvent(20, 7600, 2401999, 2403999);
    $InitializeEvent(21, 7600, 2401998, 2403998);
    $InitializeEvent(22, 7600, 2401997, 2403997);
    $InitializeEvent(23, 7600, 2401996, 2403996);
    $InitializeEvent(24, 7600, 2401995, 2403995);
    $InitializeEvent(10, 7000, 2400950, 2401950, 999, 12407800);
    $InitializeEvent(11, 7000, 2400951, 2401951, 12401800, 12407820);
    $InitializeEvent(10, 7100, 72400200, 2401950);
    $InitializeEvent(11, 7100, 72400201, 2401951);
    $InitializeEvent(10, 7200, 72400100, 2401950, 2102950);
    $InitializeEvent(11, 7200, 72400101, 2401951, 2102950);
    $InitializeEvent(10, 7300, 72102400, 2401950);
    $InitializeEvent(11, 7300, 72102401, 2401951);
    $InitializeEvent(2, 9200, 2403900);
    $InitializeEvent(2, 9220, 2400710, 12404220, 12404221, 2400, 24, 0);
    $InitializeEvent(2, 9240, 2400710, 12404220, 12404221, 12404222, 24, 0);
    $InitializeEvent(2, 9260, 2400710, 12404220, 12404221, 12404222, 24, 0);
    $InitializeEvent(2, 9280, 2400710, 12404220, 12404221, 2400, 12404223, 24, 0);
    if (!EventFlag(12400160)) {
        SetEventFlag(2400, ON);
        SetEventFlag(2401, ON);
        SetEventFlag(2405, ON);
        SetEventFlag(2406, ON);
        SetEventFlag(2402, OFF);
        SetEventFlag(2407, OFF);
    } else if (!EventFlag(12401800)) {
        SetEventFlag(2400, OFF);
        SetEventFlag(2401, OFF);
        SetEventFlag(2405, OFF);
        SetEventFlag(2406, OFF);
        SetEventFlag(2402, OFF);
        SetEventFlag(2407, OFF);
    } else {
        SetEventFlag(2400, ON);
        SetEventFlag(2401, ON);
        SetEventFlag(2405, OFF);
        SetEventFlag(2406, OFF);
        SetEventFlag(2402, ON);
        SetEventFlag(2407, OFF);
    }
    DeleteMapSFX(2403910, false);
    $InitializeEvent(0, 12404400, 12404440, 2403910, 12404420, 12404430, 12401800, 6001);
    $InitializeEvent(0, 12404410, SingleplayerSummonSignType.NormalCoop, 2400910, 2402910, 12404420, 12404430, 12404440, 12401800, 10567);
    $InitializeEvent(0, 12404450, 2400910, 2402911, 12404420, 12404430, 12404800);
    $InitializeEvent(0, 12404460, 2400910, 2402911, 2402800, 2402801, 101130, 12404450, 2402801);
    $InitializeEvent(0, 12404490);
    CreateObjectfollowingSFX(2401900, 200, 900130);
    CreateObjectfollowingSFX(2401901, 200, 900130);
    RegisterLadder(12400600, 12400601, 2401020);
    RegisterLadder(12400602, 12400603, 2401021);
    RegisterLadder(12400604, 12400605, 2401022);
    RegisterLadder(12400606, 12400607, 2401023);
    RegisterLadder(12400608, 12400609, 2401024);
    CreateBulletOwner(2400000);
    CreateBulletOwner(2402070);
    CreateBulletOwner(2402071);
    CreateBulletOwner(2402072);
    SetCharacterGravity(2400899, Disabled);
    SetCharacterMaphits(2400899, true);
    CreateDamagingObject(12400190, 2401017, 100, 6110, DamageTargetType.Character, 0.6, 0, 1);
    CreateDamagingObject(12400191, 2401018, 100, 6110, DamageTargetType.Character, 0.6, 0, 1);
    if (CharacterType(10000, TargetType.Alive)) {
        if (EventFlag(6646)) {
            SetEventFlag(12401999, ON);
        }
    }
    if (!EventFlag(12401999)) {
        DeactivateObject(2401501, Enabled);
        DeactivateObject(2401505, Disabled);
        SetObjactState(2401501, 9942, Enabled);
        SetObjactState(2401505, 9942, Disabled);
        $InitializeEvent(4, 12400350, 2401501, 12400451);
    } else {
        DeactivateObject(2401501, Disabled);
        DeactivateObject(2401505, Enabled);
        SetObjactState(2401501, 9942, Disabled);
        SetObjactState(2401505, 9942, Enabled);
        $InitializeEvent(5, 12400350, 2401505, 12400455);
    }
    if (CharacterType(10000, TargetType.Alive)) {
        if (EventFlag(6310)) {
            SetEventFlag(12401998, ON);
        }
    }
    if (!EventFlag(12401998)) {
        DeactivateObject(2401502, Enabled);
        DeactivateObject(2401508, Disabled);
        SetObjactState(2401502, 9942, Enabled);
        SetObjactState(2401508, 9942, Disabled);
        $InitializeEvent(7, 12400350, 2401502, 12400452);
    } else {
        DeactivateObject(2401502, Disabled);
        DeactivateObject(2401508, Enabled);
        SetObjactState(2401502, 9942, Disabled);
        SetObjactState(2401508, 9942, Enabled);
        $InitializeEvent(8, 12400350, 2401508, 12400458);
    }
    if (CharacterType(10000, TargetType.Alive)) {
        if (EventFlag(6311)) {
            SetEventFlag(12401997, ON);
        }
    }
    if (!EventFlag(12401997)) {
        DeactivateObject(2401504, Enabled);
        DeactivateObject(2401507, Disabled);
        SetObjactState(2401504, 9942, Enabled);
        SetObjactState(2401507, 9942, Disabled);
        $InitializeEvent(9, 12400350, 2401504, 12400454);
    } else {
        DeactivateObject(2401504, Disabled);
        DeactivateObject(2401507, Enabled);
        SetObjactState(2401504, 9942, Disabled);
        SetObjactState(2401507, 9942, Enabled);
        $InitializeEvent(10, 12400350, 2401507, 12400457);
    }
    $InitializeEvent(0, 12400070, 2421201, 1, 2420020, 12420120);
    $InitializeEvent(0, 12400080, 2401207, 12400177, 12400178, 2400050);
    $InitializeEvent(1, 12400080, 2401207, 12400177, 12400178, 2400051);
    $InitializeEvent(2, 12400080, 2401208, 12400157, 12405179, 2400050);
    $InitializeEvent(3, 12400080, 2401208, 12400157, 12405179, 2400051);
    $InitializeEvent(4, 12400080, 2401220, 12400160, 12400160, 2400031);
    $InitializeEvent(5, 12400080, 2401209, 12400167, 12405175, 2400050);
    $InitializeEvent(6, 12400080, 2401209, 12400167, 12405175, 2400051);
    $InitializeEvent(0, 12400095, 2401095);
    $InitializeEvent(0, 12400100, 2401040, 12400190, 9921, 19921);
    $InitializeEvent(1, 12400100, 2401040, 12400191, 9921, 19921);
    $InitializeEvent(0, 12400125);
    $InitializeEvent(0, 12400126);
    $InitializeEvent(0, 12400127);
    $InitializeEvent(0, 12400128);
    $InitializeEvent(0, 12400130, 2401204, 1, 12400112, 12400130);
    $InitializeEvent(1, 12400130, 2401200, 2, 12400113, 12400131);
    $InitializeEvent(2, 12400130, 2101201, 1, 12400102, 12400132);
    $InitializeEvent(3, 12400130, 2101202, 2, 12400103, 12400133);
    $InitializeEvent(5, 12400130, 2401211, 1, 12400190, 12400135);
    $InitializeEvent(6, 12400130, 2401212, 1, 12400191, 12400136);
    $InitializeEvent(7, 12400130, 2401201, 1, 12400114, 12400137);
    $InitializeEvent(8, 12400130, 2401213, 2, 12400200, 12400138);
    $InitializeEvent(0, 12400146);
    $InitializeEvent(0, 12400147);
    $InitializeEvent(0, 12400148);
    $InitializeEvent(0, 12400149);
    $InitializeEvent(0, 12400159);
    $InitializeEvent(0, 12400155);
    $InitializeEvent(0, 12400156);
    $InitializeEvent(0, 12400158);
    $InitializeEvent(0, 12400161);
    $InitializeEvent(0, 12400174);
    $InitializeEvent(0, 12400175);
    $InitializeEvent(0, 12400179, 2401015);
    $InitializeEvent(1, 12400179, 2401016);
    $InitializeEvent(0, 12400185);
    $InitializeEvent(2, 12400200, 2400344, 52400980);
    $InitializeEvent(3, 12400200, 2400371, 52400960);
    $InitializeEvent(4, 12400200, 2400372, 52400990);
    $InitializeEvent(5, 12400200, 2400373, 52400970);
    $InitializeEvent(6, 12400200, 2400374, 52400950);
    $InitializeEvent(7, 12400200, 2400375, 52400940);
    $InitializeEvent(0, 12400300);
    $InitializeEvent(0, 12400350, 2401500, 12400450);
    $InitializeEvent(2, 12400350, 2401503, 12400453);
    $InitializeEvent(3, 12400350, 2401504, 12400454);
    $InitializeEvent(6, 12400350, 2401506, 12400456);
    $InitializeEvent(0, 12400750);
    $InitializeEvent(0, 12400765);
    $InitializeEvent(0, 12400760);
    $InitializeEvent(0, 12400420);
    $InitializeEvent(0, 12400823);
    $InitializeEvent(0, 12400824);
    $InitializeEvent(0, 12400825);
    $InitializeEvent(0, 12400826);
    $InitializeEvent(0, 12400850, 2407020, 2407021, 2407022, 12400130, 0, 0, 0, 0);
    $InitializeEvent(1, 12400850, 2407025, 2407026, 2407027, 12400132, 0, 0, 0, 0);
    $InitializeEvent(2, 12400850, 2407028, 2407029, 2407030, 12400131, 0, 0, 0, 0);
    $InitializeEvent(3, 12400850, 2406700, 2406701, 2406702, 12400133, 0, 0, 0, 0);
    $InitializeEvent(0, 12400854);
    $InitializeEvent(0, 12400860);
    $InitializeEvent(0, 12405710);
    $InitializeEvent(0, 12400865, 2400660);
    $InitializeEvent(1, 12400865, 2400661);
    $InitializeEvent(0, 12400780, 2400360);
    $InitializeEvent(1, 12400780, 2400361);
    $InitializeEvent(2, 12400780, 2400362);
    $InitializeEvent(3, 12400780, 2400363);
    $InitializeEvent(0, 12400791, 2400360);
    $InitializeEvent(1, 12400791, 2400361);
    $InitializeEvent(2, 12400791, 2400363);
    $InitializeEvent(0, 12400797);
    $InitializeEvent(1, 12405210, 2400116, 5696);
    $InitializeEvent(2, 12405210, 2400122, 5696);
    $InitializeEvent(4, 12405210, 2400125, 5696);
    $InitializeEvent(5, 12405210, 2400127, 5696);
    $InitializeEvent(7, 12405210, 2400161, 5696);
    $InitializeEvent(0, 12405220, 2400137, 5552, 5553, 5554);
    $InitializeEvent(1, 12405220, 2400210, 5555, 5556, 0);
    $InitializeEvent(2, 12405220, 2400211, 5555, 5556, 0);
    $InitializeEvent(0, 12404100, 2401900, 7405, 10012005);
    $InitializeEvent(1, 12404100, 2401901, 7406, 10012006);
    RequestCharacterAICommand(2400420, 100, 0);
    $InitializeEvent(1, 12405600, 2400400, 2402022, 5, 0);
    $InitializeEvent(2, 12405600, 2400400, 2402017, 5, 0);
    $InitializeEvent(3, 12405600, 2400126, 2402012, 5, 0);
    $InitializeEvent(4, 12405600, 2400127, 2402013, 5, 0);
    $InitializeEvent(5, 12405600, 2400128, 2402013, 5, 0);
    $InitializeEvent(6, 12405600, 2400136, 2402015, 5, 0);
    $InitializeEvent(7, 12405600, 2400137, 2402015, 5, 0);
    $InitializeEvent(8, 12405600, 2400125, 2404302, 5, 0);
    $InitializeEvent(10, 12405600, 2400231, 2404312, 5, 0);
    $InitializeEvent(11, 12405600, 2400508, 2404320, 5, 0);
    $InitializeEvent(12, 12405600, 2400508, 2404310, 5, 0);
    $InitializeEvent(13, 12405600, 2400120, 2402073, 5, 0);
    $InitializeEvent(14, 12405600, 2400121, 2402073, 5, 0);
    $InitializeEvent(15, 12405600, 2400392, 2402016, 5, 0);
    $InitializeEvent(18, 12405600, 2400401, 2402029, 5, 0);
    $InitializeEvent(19, 12405600, 2400401, 2402017, 5, 0);
    $InitializeEvent(20, 12405600, 2400106, 2404310, 5, 0);
    $InitializeEvent(22, 12405600, 2400122, 2402081, 5, 0);
    $InitializeEvent(23, 12405600, 2400116, 2404302, 5, 0);
    $InitializeEvent(24, 12405600, 2400211, 2402075, 5, 0);
    $InitializeEvent(0, 12405660);
    $InitializeEvent(0, 12405350, 2400391, 2402310, 2409015, 2403105, 2402311);
    $InitializeEvent(0, 12405195);
    $InitializeEvent(0, 12405370, 2400210);
    $InitializeEvent(1, 12405370, 2400211);
    $InitializeEvent(0, 12405670, 2400203, 2404332, 2404301, 5, 0);
    $InitializeEvent(0, 12405330, 2400500);
    $InitializeEvent(0, 12405360);
    $InitializeEvent(0, 12405365, 2400374, 2404087, 2403108);
    $InitializeEvent(1, 12405365, 2400375, 2404086, 2403107);
    $InitializeEvent(0, 12405850, 2400450, 2401652, 2402061, 10, 12405521);
    $InitializeEvent(0, 12405810, 2400408, 2402022, 2404083, 10, 12405520);
    $InitializeEvent(0, 12405820, 2400408, 2404083);
    $InitializeEvent(1, 12405820, 2400450, 2402061);
    $InitializeEvent(0, 12405840, 2400408, 10, 12405520);
    $InitializeEvent(1, 12405840, 2400450, 10, 12405521);
    $InitializeEvent(0, 12405240);
    $InitializeEvent(0, 12405241);
    $InitializeEvent(0, 12405680);
    $InitializeEvent(0, 12405682, 2400107, 2400002, 6, 12405686, 0);
    $InitializeEvent(2, 12405682, 2400109, 2400001, 1, 12405688, 0);
    $InitializeEvent(3, 12405682, 2400110, 2400004, 1, 12405689, 0);
    $InitializeEvent(0, 12405140);
    $InitializeEvent(0, 12405686, 2400107);
    $InitializeEvent(2, 12405686, 2400109);
    $InitializeEvent(3, 12405686, 2400110);
    $InitializeEvent(0, 12405690);
    $InitializeEvent(0, 12405130, 2400107, 12405682, 0);
    $InitializeEvent(1, 12405130, 2400111, 12405140, 0);
    $InitializeEvent(2, 12405130, 2400109, 12405682, 2);
    $InitializeEvent(3, 12405130, 2400110, 12405682, 3);
    $InitializeEvent(4, 12405130, 2400106, 12405680, 0);
    $InitializeEvent(41, 12405600, 2400410, 2402028, 3, 0);
    $InitializeEvent(42, 12405600, 2400420, 2402511, 3, 0);
    $InitializeEvent(43, 12405600, 2400423, 2402511, 3, 0);
    $InitializeEvent(44, 12405600, 2400501, 2402157, 3, 0);
    $InitializeEvent(45, 12405600, 2400502, 2402157, 3, 0);
    $InitializeEvent(46, 12405600, 2400503, 2402157, 3, 0);
    $InitializeEvent(47, 12405600, 2400504, 2402157, 3, 0);
    $InitializeEvent(48, 12405600, 2400505, 2402157, 3, 0);
    $InitializeEvent(49, 12405600, 2400506, 2402157, 3, 0);
    $InitializeEvent(50, 12405600, 2400507, 2402157, 3, 0);
    $InitializeEvent(0, 12405700);
    $InitializeEvent(0, 12405701, 2400398, 2404370);
    $InitializeEvent(1, 12405701, 2400399, 2404371);
    $InitializeEvent(52, 12405600, 2400600, 2402500, 1, 0);
    $InitializeEvent(53, 12405600, 2400601, 2402500, 1, 0);
    $InitializeEvent(54, 12405600, 2400602, 2402500, 1, 0);
    $InitializeEvent(55, 12405600, 2400603, 2402507, 5, 0);
    $InitializeEvent(56, 12405600, 2400603, 2402508, 5, 0);
    $InitializeEvent(0, 12405380, 2400604, 2402509, 2402502);
    $InitializeEvent(0, 12406900, 2402103, 2402101, 20011001);
    $InitializeEvent(1, 12406900, 2402104, 2402101, 20011001);
    $InitializeEvent(3, 12406900, 2402107, 2402101, 20011001);
    $InitializeEvent(4, 12406900, 2404301, 2402101, 20011001);
    $InitializeEvent(0, 12405000, 2400205, 7010, 7013, 273150, 273140);
    $InitializeEvent(1, 12405000, 2400156, 7014, 7018, 263252, 263251);
    $InitializeEvent(0, 12405010, 2400205, 7012, 0, 273130);
    $InitializeEvent(1, 12405010, 2400156, 7015, 1, 263250);
    $InitializeEvent(0, 12405020, 2400207, 7010, 7013, 273120, 273110);
    $InitializeEvent(1, 12405020, 2400126, 7010, 7013, 273120, 273110);
    $InitializeEvent(2, 12405020, 2400203, 7010, 7013, 273120, 273110);
    $InitializeEvent(4, 12405020, 2400119, 7010, 7013, 273120, 273110);
    $InitializeEvent(0, 12405030, 2400207, 7012, 0, 273100);
    $InitializeEvent(1, 12405030, 2400126, 7012, 1, 273100);
    $InitializeEvent(2, 12405030, 2400203, 7012, 2, 273100);
    $InitializeEvent(4, 12405030, 2400119, 7012, 4, 273100);
    $InitializeEvent(0, 12405335);
    $InitializeEvent(1, 12405120, 2400156, 5569);
    $InitializeEvent(2, 12405120, 2400162, 5569);
    $InitializeEvent(3, 12405120, 2400220, 5557);
    $InitializeEvent(4, 12405120, 2400116, 5557);
    $InitializeEvent(5, 12405120, 2400114, 5557);
    $InitializeEvent(6, 12405120, 2400127, 5557);
    $InitializeEvent(8, 12405120, 2400139, 5557);
    $InitializeEvent(9, 12405120, 2400137, 5557);
    $InitializeEvent(0, 12405320);
    $InitializeEvent(0, 12405250, 12400168, 2406790, 12405175);
    $InitializeEvent(0, 12405251, 12400177, 2406791, 12400178);
    $InitializeEvent(1, 12405251, 12400157, 2406792, 12405179);
    $InitializeEvent(0, 12405259);
    $InitializeEvent(0, 12405260);
    $InitializeEvent(0, 12405262);
    $InitializeEvent(0, 12400410);
    $InitializeEvent(0, 12405263);
    $InitializeEvent(0, 12405430, 2490, 2490, NPCPartType.Part7, 40, 12405500, 2400114);
    $InitializeEvent(1, 12405430, 2491, 2491, NPCPartType.Part8, 40, 12405500, 2400114);
    $InitializeEvent(2, 12405430, 2490, 2490, NPCPartType.Part7, 40, 12405501, 2400126);
    $InitializeEvent(3, 12405430, 2491, 2491, NPCPartType.Part8, 40, 12405501, 2400126);
    $InitializeEvent(6, 12405430, 2490, 2490, NPCPartType.Part7, 40, 12405503, 2400133);
    $InitializeEvent(7, 12405430, 2491, 2491, NPCPartType.Part8, 40, 12405503, 2400133);
    $InitializeEvent(8, 12405430, 2490, 2490, NPCPartType.Part7, 40, 12405504, 2400203);
    $InitializeEvent(9, 12405430, 2491, 2491, NPCPartType.Part8, 40, 12405504, 2400203);
    $InitializeEvent(10, 12405430, 2490, 2490, NPCPartType.Part7, 40, 12405505, 2400205);
    $InitializeEvent(11, 12405430, 2491, 2491, NPCPartType.Part8, 40, 12405505, 2400205);
    $InitializeEvent(14, 12405430, 2490, 2490, NPCPartType.Part7, 40, 12405507, 2400207);
    $InitializeEvent(15, 12405430, 2491, 2491, NPCPartType.Part8, 40, 12405507, 2400207);
    $InitializeEvent(16, 12405430, 2490, 2490, NPCPartType.Part7, 40, 12405508, 2400603);
    $InitializeEvent(17, 12405430, 2491, 2491, NPCPartType.Part8, 40, 12405508, 2400603);
    $InitializeEvent(0, 12405400, 2490, 2490, NPCPartType.Part7, 7003, 5907, 12405500, 12405530, 2400114);
    $InitializeEvent(1, 12405400, 2491, 2491, NPCPartType.Part8, 7000, 5907, 12405500, 12405560, 2400114);
    $InitializeEvent(2, 12405400, 2490, 2490, NPCPartType.Part7, 7003, 5907, 12405501, 12405531, 2400126);
    $InitializeEvent(3, 12405400, 2491, 2491, NPCPartType.Part8, 7000, 5907, 12405501, 12405561, 2400126);
    $InitializeEvent(6, 12405400, 2490, 2490, NPCPartType.Part7, 7003, 5907, 12405503, 12405533, 2400133);
    $InitializeEvent(7, 12405400, 2491, 2491, NPCPartType.Part8, 7000, 5907, 12405503, 12405563, 2400133);
    $InitializeEvent(8, 12405400, 2490, 2490, NPCPartType.Part7, 7003, 5907, 12405504, 12405534, 2400203);
    $InitializeEvent(9, 12405400, 2491, 2491, NPCPartType.Part8, 7000, 5907, 12405504, 12405564, 2400203);
    $InitializeEvent(10, 12405400, 2490, 2490, NPCPartType.Part7, 7003, 5907, 12405505, 12405535, 2400205);
    $InitializeEvent(11, 12405400, 2491, 2491, NPCPartType.Part8, 7000, 5907, 12405505, 12405565, 2400205);
    $InitializeEvent(14, 12405400, 2490, 2490, NPCPartType.Part7, 7003, 5907, 12405507, 12405537, 2400207);
    $InitializeEvent(15, 12405400, 2491, 2491, NPCPartType.Part8, 7000, 5907, 12405507, 12405567, 2400207);
    $InitializeEvent(16, 12405400, 2490, 2490, NPCPartType.Part7, 7003, 5907, 12405508, 12405538, 2400603);
    $InitializeEvent(17, 12405400, 2491, 2491, NPCPartType.Part8, 7000, 5907, 12405508, 12405568, 2400603);
    $InitializeEvent(0, 12405460, 10, 40, 12405530, 2400114, 0, 10);
    $InitializeEvent(1, 12405460, 30, 40, 12405560, 2400114, 1, 11);
    $InitializeEvent(2, 12405460, 10, 40, 12405531, 2400126, 0, 10);
    $InitializeEvent(3, 12405460, 30, 40, 12405561, 2400126, 1, 11);
    $InitializeEvent(6, 12405460, 10, 40, 12405533, 2400133, 0, 10);
    $InitializeEvent(7, 12405460, 30, 40, 12405563, 2400133, 1, 11);
    $InitializeEvent(8, 12405460, 10, 40, 12405534, 2400203, 0, 10);
    $InitializeEvent(9, 12405460, 30, 40, 12405564, 2400203, 1, 11);
    $InitializeEvent(10, 12405460, 10, 40, 12405535, 2400205, 0, 10);
    $InitializeEvent(11, 12405460, 30, 40, 12405565, 2400205, 1, 11);
    $InitializeEvent(14, 12405460, 10, 40, 12405537, 2400207, 0, 10);
    $InitializeEvent(15, 12405460, 30, 40, 12405567, 2400207, 1, 11);
    $InitializeEvent(16, 12405460, 10, 40, 12405538, 2400603, 0, 10);
    $InitializeEvent(17, 12405460, 30, 40, 12405568, 2400603, 1, 11);
    $InitializeEvent(0, 12405790, 2401150, 9802, 924110);
    $InitializeEvent(1, 12405790, 2401151, 9801, 924110);
    $InitializeEvent(2, 12405790, 2401152, 6001, 924113);
    $InitializeEvent(3, 12405790, 2401153, 9802, 924110);
    $InitializeEvent(4, 12405790, 2401154, 9801, 924113);
    $InitializeEvent(0, 12405800, 2403310, 1439, 70000052, 9802);
    $InitializeEvent(1, 12405800, 2403311, 1439, 70000053, 9801);
    $InitializeEvent(2, 12405800, 2403312, 1439, 70000054, 6001);
    $InitializeEvent(3, 12405800, 2403313, 1439, 70000072, 9802);
    $InitializeEvent(4, 12405800, 2403314, 1439, 70000073, 9801);
    $InitializeEvent(0, 12404842);
    $InitializeEvent(0, 12404843);
    $InitializeEvent(0, 12401800);
    $InitializeEvent(0, 12401801);
    $InitializeEvent(0, 12401802);
    $InitializeEvent(0, 12401803);
    $InitializeEvent(0, 12404840);
    $InitializeEvent(0, 12404841);
    $InitializeEvent(0, 12404802);
    $InitializeEvent(0, 12404803);
    $InitializeEvent(0, 12404804);
    $InitializeEvent(0, 12404805);
    $InitializeEvent(0, 12404807);
    $InitializeEvent(0, 12404808);
    $InitializeEvent(0, 12404830);
    $InitializeEvent(0, 12401804);
    $InitializeEvent(0, 12404810, 2400, 2400, NPCPartType.Part1, 80, 480, 490, 8020);
    $InitializeEvent(1, 12404810, 2401, 2401, NPCPartType.Part2, 150, 481, 491, 8000);
    $InitializeEvent(2, 12404810, 2402, 2402, NPCPartType.Part3, 150, 482, 492, 8010);
    $InitializeEvent(3, 12404810, 2403, 2403, NPCPartType.Part4, 200, 483, 493, 8030);
    $InitializeEvent(4, 12404810, 2404, 2404, NPCPartType.Part5, 200, 484, 494, 8040);
    $InitializeEvent(0, 12404820, 480, 490, 5, 10);
    $InitializeEvent(1, 12404820, 481, 491, 6, 11);
    $InitializeEvent(2, 12404820, 482, 492, 7, 12);
    $InitializeEvent(3, 12404820, 483, 493, 8, 13);
    $InitializeEvent(4, 12404820, 484, 494, 9, 14);
    $InitializeEvent(0, 12400800);
    $InitializeEvent(0, 12400801);
    $InitializeEvent(1, 12400840, 70000052, 6030, 2400860);
    $InitializeEvent(2, 12400840, 70000053, 6030, 2400861);
    $InitializeEvent(3, 12400840, 70000054, 6030, 2400862);
    $InitializeEvent(4, 12400840, 70000072, 6030, 2400863);
    $InitializeEvent(5, 12400840, 70000073, 6030, 2400864);
    $InitializeEvent(6, 12400840, 72400513, 6030, 2400749);
    $InitializeEvent(0, 12400630, 2400765);
    $InitializeEvent(1, 12400630, 2400730);
    $InitializeEvent(2, 12400630, 2400754);
    $InitializeEvent(3, 12400630, 2400757);
    $InitializeEvent(4, 12400630, 2400750);
    $InitializeEvent(5, 12400630, 2400770);
    $InitializeEvent(6, 12400630, 2400772);
    $InitializeEvent(7, 12400630, 2400774);
    $InitializeEvent(8, 12400630, 2400700);
    $InitializeEvent(0, 12400501);
    InitializeEvent(0, 12400504, 0);
    $InitializeEvent(0, 12400507);
    $InitializeEvent(0, 12400512);
    $InitializeEvent(0, 12400508);
    $InitializeEvent(0, 12400513);
    $InitializeEvent(0, 12400514);
    $InitializeEvent(0, 12400505);
    $InitializeEvent(0, 12400901);
    $InitializeEvent(0, 12400903);
    $InitializeEvent(0, 12400904);
    $InitializeEvent(0, 12400952);
    $InitializeEvent(0, 12400953);
    $InitializeEvent(0, 12400954);
    $InitializeEvent(0, 12400940, 2400770);
    $InitializeEvent(1, 12400940, 2400774);
    $InitializeEvent(0, 12400910, 2400770);
    $InitializeEvent(1, 12400910, 2400772);
    $InitializeEvent(2, 12400910, 2400774);
    $InitializeEvent(0, 12400915, 2400770);
    $InitializeEvent(1, 12400915, 2400772);
    $InitializeEvent(2, 12400915, 2400774);
    $InitializeEvent(0, 12400920, 2400770);
    $InitializeEvent(1, 12400920, 2400774);
    $InitializeEvent(0, 12400925, 2400770);
    $InitializeEvent(1, 12400925, 2400772);
    $InitializeEvent(2, 12400925, 2400774);
    $InitializeEvent(0, 12400930, 2400770);
    $InitializeEvent(1, 12400930, 2400774);
    $InitializeEvent(0, 12400935, 2400770);
    $InitializeEvent(1, 12400935, 2400774);
    $InitializeEvent(0, 12400521);
    $InitializeEvent(0, 12400525);
    $InitializeEvent(0, 12400523);
    $InitializeEvent(0, 12400524);
    $InitializeEvent(0, 12400531);
    $InitializeEvent(0, 12400522);
    $InitializeEvent(0, 12400810, 2400750, 103085);
    $InitializeEvent(1, 12400810, 2400754, 103088);
    $InitializeEvent(2, 12400810, 2400757, 103088);
    $InitializeEvent(3, 12400810, 2400758, 103089);
    $InitializeEvent(0, 12400805, 2400750, 103080, 151);
    $InitializeEvent(1, 12400805, 2400754, 103081, 152);
    $InitializeEvent(2, 12400805, 2400757, 103081, 152);
    $InitializeEvent(3, 12400805, 2400758, 103082, 153);
    $InitializeEvent(0, 12400830, 2400750, 103086);
    $InitializeEvent(1, 12400830, 2400754, 103086);
    $InitializeEvent(2, 12400830, 2400757, 103086);
    $InitializeEvent(3, 12400830, 2400758, 103086);
    $InitializeEvent(0, 12400610);
    $InitializeEvent(0, 12400611);
    $InitializeEvent(0, 12405150, 2400755, 12405155);
    $InitializeEvent(1, 12405150, 2400759, 12405156);
    $InitializeEvent(0, 12400612, 2400755, 12405155);
    $InitializeEvent(1, 12400612, 2400759, 12405156);
    $InitializeEvent(0, 12400614, 2400755, 103076);
    $InitializeEvent(1, 12400614, 2400759, 103076);
    $InitializeEvent(0, 12400616, 2400755);
    $InitializeEvent(1, 12400616, 2400759);
    $InitializeEvent(0, 12400618, 2400755);
    $InitializeEvent(1, 12400618, 2400759);
    $InitializeEvent(0, 12400620, 2400755);
    $InitializeEvent(1, 12400620, 2400759);
    $InitializeEvent(0, 12400625, 2400755, 12405155);
    $InitializeEvent(0, 12400627, 2400755, 12405155);
    $InitializeEvent(1, 12400627, 2400759, 12405156);
    $InitializeEvent(0, 12405157);
    $InitializeEvent(0, 12405158);
    $InitializeEvent(0, 12405159);
    $InitializeEvent(0, 12400561);
    $InitializeEvent(0, 12400563);
    $InitializeEvent(0, 12400564);
    $InitializeEvent(0, 12400565);
    $InitializeEvent(0, 12400566);
    $InitializeEvent(0, 12400567);
    $InitializeEvent(0, 12400569);
    $InitializeEvent(0, 12400570);
    $InitializeEvent(0, 12400571);
    $InitializeEvent(0, 12400572);
    $InitializeEvent(0, 12400568);
    SetEventFlag(72400310, OFF);
    SetEventFlag(72400311, OFF);
    SetCharacterTeamType(2400700, TeamType.Ally);
    $InitializeEvent(0, 12400701);
    $InitializeEvent(0, 12400702);
    $InitializeEvent(0, 12400703);
    $InitializeEvent(0, 12400704);
    $InitializeEvent(0, 12400705);
    $InitializeEvent(0, 12400706);
    $InitializeEvent(0, 12400707);
    $InitializeEvent(0, 12400708, 1164, 72400316, 1163, 1161, 0);
    $InitializeEvent(1, 12400708, 1181, 72400317, 1190, 1183, 0);
    $InitializeEvent(2, 12400708, 1304, 72400318, 1309, 1303, 1);
    $InitializeEvent(3, 12400708, 1224, 72400319, 1223, 1222, 0);
    $InitializeEvent(0, 12400713, 1164, 1163);
    $InitializeEvent(1, 12400713, 1181, 1190);
    $InitializeEvent(2, 12400713, 1304, 1309);
    $InitializeEvent(3, 12400713, 1224, 1223);
    $InitializeEvent(0, 12400720);
    $InitializeEvent(0, 12400721);
    $InitializeEvent(0, 12400722);
    $InitializeEvent(0, 12400723);
    $InitializeEvent(0, 12400728);
    $InitializeEvent(0, 12400729);
    $InitializeEvent(0, 12400730);
    $InitializeEvent(0, 12400731);
    $InitializeEvent(3, 12400732);
    $InitializeEvent(0, 12400737);
    $InitializeEvent(0, 12400738);
    $InitializeEvent(0, 12400580);
    $InitializeEvent(0, 12400581);
    $InitializeEvent(0, 12400582);
    $InitializeEvent(0, 12400401);
    $InitializeEvent(0, 12400402);
    $InitializeEvent(0, 12400403);
    $InitializeEvent(0, 12400591);
    $InitializeEvent(0, 12400592, 2400760, 72400475);
    $InitializeEvent(1, 12400592, 2400763, 72400476);
    $InitializeEvent(0, 12400593, 2400760, 1341, 72400475);
    $InitializeEvent(1, 12400593, 2400763, 1345, 72400476);
    $InitializeEvent(0, 12400594, 2400760, 1342);
    $InitializeEvent(1, 12400594, 2400763, 1346);
    $InitializeEvent(0, 12405271);
    $InitializeEvent(0, 12405272);
    $InitializeEvent(0, 12400990);
    if (EventFlag(12401800)) {
        ActivateHit(2404121, Disabled);
    }
L0:
    NoOp();
});

// プリコンストラクタ
$Event(50, Default, function() {
    ReproduceObjectDestruction(2404301, 1);
    SetCharacterAnimationState(2403950, Disabled);
    SetCharacterGravity(2403950, Disabled);
    SetCharacterMaphits(2403950, true);
    SetCharacterAnimationState(2403951, Disabled);
    SetCharacterGravity(2403951, Disabled);
    SetCharacterMaphits(2403951, true);
    SetCharacterAnimationState(2403952, Disabled);
    SetCharacterGravity(2403952, Disabled);
    SetCharacterMaphits(2403952, true);
    $InitializeEvent(0, 12404000);
    $InitializeEvent(0, 12400500);
    $InitializeEvent(0, 12400560);
    $InitializeEvent(0, 12400900);
    $InitializeEvent(0, 12400520);
    $InitializeEvent(0, 12400622);
    $InitializeEvent(0, 12400624);
    $InitializeEvent(0, 12400629);
    $InitializeEvent(0, 12400650);
    $InitializeEvent(0, 12400700);
    $InitializeEvent(0, 12400590);
    SetEventFlag(9432, OFF);
    SetCharacterAnimationState(2400899, Disabled);
    SetCharacterGravity(2400899, Disabled);
    SetCharacterMaphits(2400899, true);
    SetNetworkUpdateRate(2400899, true, CharacterUpdateFrequency.AlwaysUpdate);
    ChangeCharacterDispmask(2400899, 0, OFF);
    ChangeCharacterDispmask(2400899, 2, OFF);
    ChangeCharacterDispmask(2400899, 10, OFF);
    SetCharacterAnimationState(2400650, Disabled);
    SetCharacterGravity(2400650, Disabled);
    SetCharacterMaphits(2400650, true);
});

// SAN値判定
$Event(12404000, Restart, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    if (PlayerInsightAmount() >= 50) {
        SetEventFlag(12404001, ON);
        SetEventFlag(12404002, ON);
        SetEventFlag(12404003, ON);
        EndEvent();
    }
L0:
    if (PlayerInsightAmount() >= 40) {
        SetEventFlag(12404001, ON);
        SetEventFlag(12404002, ON);
        EndEvent();
    }
L1:
    EndIf(PlayerInsightAmount() < 15);
    SetEventFlag(12404002, ON);
});

// 紙片_聖堂街A_XX
$Event(12404100, Default, function(areaEntityId, actionButtonParameterId, messageId) {
    SetNetworkSyncState(Disabled);
    WaitFor(ActionButtonInArea(actionButtonParameterId, areaEntityId));
    DisplayGenericDialog(messageId, PromptType.OKCANCEL, NumberofOptions.OneButton, -1, 3);
    RestartEvent();
});

// 扉開放処理_XX
$Event(12400070, Default, function(objEntityId, objactEventFlag, animationId, objParameterId) {
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

// 仕掛けで閉じられているメッセージ_XX
$Event(12400080, Default, function(areaEntityId, eventFlagId, eventFlagId2, actionButtonParameterId) {
    SetNetworkSyncState(Disabled);
    WaitFor(!EventFlag(eventFlagId) && !EventFlag(eventFlagId2));
    act = ActionButtonInArea(actionButtonParameterId, areaEntityId);
    flag = EventFlagState(CHANGE, TargetEventFlagType.EventFlag, eventFlagId);
    WaitFor(act || flag);
    if (!flag.Passed) {
        DisplayGenericDialog(10010160, PromptType.OKCANCEL, NumberofOptions.OneButton, -1, 3);
    }
    RestartEvent();
});

// 完全に閉じられているメッセージ_XX
$Event(12400095, Default, function(areaEntityId) {
    SetNetworkSyncState(Disabled);
    WaitFor(ActionButtonInArea(2400040, areaEntityId));
    DisplayGenericDialog(10010171, PromptType.OKCANCEL, NumberofOptions.OneButton, 10000, 3);
    RestartEvent();
});

// 扉アクション削除
$Event(12400100, Default, function(objEntityId, objactEventFlag, objParameterId, objParameterId2) {
    if (!ThisEventSlot()) {
        WaitFor(ObjActEventFlag(objactEventFlag));
    }
    SetObjactState(objEntityId, objParameterId, Disabled);
    SetObjactState(objEntityId, objParameterId2, Disabled);
});

// 広場仕掛け扉
$Event(12400125, Default, function() {
    WaitFor(
        (ObjActEventFlag(12400162) || ObjActEventFlag(12400163))
            && !EventFlag(12400177)
            && !EventFlag(12400178));
    SetEventFlag(12400177, ON);
    SetEventFlag(12400178, ON);
    ForceAnimationPlayback(2401207, 1, false, false, false);
    WaitFixedTimeSeconds(1);
    CreateObjectfollowingSFX(2401207, 200, 920204);
    CreateObjectfollowingSFX(2401207, 201, 920205);
    WaitFixedTimeSeconds(3);
    SetEventFlag(12400178, OFF);
    SetObjactState(2401006, 2400000, Enabled);
    RestartEvent();
});

// 広場仕掛け扉_閉じる
$Event(12400126, Default, function() {
    WaitFor(
        (ObjActEventFlag(12400162) || ObjActEventFlag(12400163))
            && EventFlag(12400177)
            && !EventFlag(12400178));
    SetEventFlag(12400177, OFF);
    SetEventFlag(12400178, ON);
    ForceAnimationPlayback(2401207, 2, false, false, false);
    WaitFixedTimeSeconds(1);
    CreateObjectfollowingSFX(2401207, 200, 920204);
    CreateObjectfollowingSFX(2401207, 201, 920205);
    WaitFixedTimeSeconds(3);
    SetEventFlag(12400178, OFF);
    SetObjactState(2401006, 2400000, Enabled);
    RestartEvent();
});

// 広場仕掛け扉_レバーが動かない
$Event(12400127, Default, function() {
    SetNetworkSyncState(Disabled);
    WaitFor(EventFlag(12400178) && ActionButtonInArea(7100, 2401006));
    DisplayGenericDialog(10010172, PromptType.OKCANCEL, NumberofOptions.OneButton, -1, 3);
    RestartEvent();
});

// 広場仕掛け扉_初期化
$Event(12400128, Default, function() {
    if (!EventFlag(12400177)) {
        ReproduceObjectAnimation(2401207, 2);
        SetObjactState(2401006, 2400000, Enabled);
        EndEvent();
    }
L0:
    ReproduceObjectAnimation(2401207, 1);
    SetObjactState(2401006, 2400000, Enabled);
});

// 扉状態保存_XX
$Event(12400130, Default, function(objEntityId, animationId, objactEventFlag, eventFlagId) {
    if (EventFlag(eventFlagId)) {
        ReproduceObjectAnimation(objEntityId, animationId);
        SetObjactState(objEntityId, -1, Disabled);
        NotifySoundDampeningOfDoorEvent(objEntityId, DoorState.DoorOpening);
        EndEvent();
    }
    WaitFor(ObjActEventFlag(objactEventFlag));
    WaitFixedTimeFrames(0);
});

// 教会エレベーター初期化
$Event(12400146, Default, function() {
    flag = EventFlag(12400150);
    WaitFor(flag || !EventFlag(12400150));
    if (!flag.Passed) {
        ReproduceObjectAnimation(2401101, 15);
        SetObjactState(2401003, 2400000, Enabled);
        SetObjactState(2401004, 2400000, Disabled);
    } else {
        ReproduceObjectAnimation(2401101, 0);
        SetObjactState(2401003, 2400000, Disabled);
        SetObjactState(2401004, 2400000, Enabled);
    }
});

// 教会エレベーター下がる
$Event(12400147, Default, function() {
    if (!(EventFlag(12400150) && EventFlag(12400151))) {
        WaitFor(
            (EventFlag(12400150) && !EventFlag(12400151) && InArea(10000, 2402054))
                || (EventFlag(12400150) && !EventFlag(12400151) && ObjActEventFlag(12400161)));
    }
L0:
    SetEventFlag(12400151, ON);
    ForceAnimationPlayback(2401101, 1, false, true, false);
    ForceAnimationPlayback(2401101, 13, false, true, false);
    WaitFor(!AllPlayersInArea(2402055));
    ForceAnimationPlayback(2401101, 14, false, true, false);
    SetEventFlag(12400150, OFF);
    SetEventFlag(12400151, OFF);
    SetObjactState(2401003, 2400000, Enabled);
    SetObjactState(2401004, 2400000, Disabled);
    RestartEvent();
});

// 教会エレベーター上がる
$Event(12400148, Default, function() {
    if (!(!EventFlag(12400150) && EventFlag(12400151))) {
        WaitFor(
            (!EventFlag(12400150) && !EventFlag(12400151) && InArea(10000, 2402055))
                || (!EventFlag(12400150) && !EventFlag(12400151) && ObjActEventFlag(12400160)));
    }
L0:
    SetEventFlag(12400151, ON);
    ForceAnimationPlayback(2401101, 16, false, true, false);
    ForceAnimationPlayback(2401101, 17, false, true, false);
    WaitFor(!AllPlayersInArea(2402054));
    ForceAnimationPlayback(2401101, 7, false, true, false);
    SetEventFlag(12400150, ON);
    SetEventFlag(12400151, OFF);
    SetObjactState(2401003, 2400000, Disabled);
    SetObjactState(2401004, 2400000, Enabled);
    RestartEvent();
});

// 教会エレベーター仕掛けが動かない
$Event(12400149, Default, function() {
    SetNetworkSyncState(Disabled);
    WaitFor(
        (EventFlag(12400150) && ActionButtonInArea(7100, 2401003))
            || (!EventFlag(12400150) && ActionButtonInArea(7100, 2401004))
            || (EventFlag(12400151) && ActionButtonInArea(7100, 2401003))
            || (EventFlag(12400151) && ActionButtonInArea(7100, 2401004)));
    DisplayGenericDialog(10010172, PromptType.OKCANCEL, NumberofOptions.OneButton, -1, 3);
    RestartEvent();
});

// 教会ルート仕掛け扉
$Event(12400155, Default, function() {
    WaitFor(
        (ObjActEventFlag(12400164) || ObjActEventFlag(12400165))
            && !EventFlag(12400157)
            && !EventFlag(12405179));
    SetEventFlag(12400157, ON);
    SetEventFlag(12405179, ON);
    ForceAnimationPlayback(2401208, 1, false, false, false);
    WaitFixedTimeSeconds(1);
    CreateObjectfollowingSFX(2401208, 200, 920204);
    CreateObjectfollowingSFX(2401208, 201, 920205);
    WaitFixedTimeSeconds(3);
    SetEventFlag(12405179, OFF);
    SetObjactState(2401008, 2400000, Enabled);
    RestartEvent();
});

// 教会ルート仕掛け扉_閉じる
$Event(12400156, Default, function() {
    WaitFor(
        (ObjActEventFlag(12400164) || ObjActEventFlag(12400165))
            && EventFlag(12400157)
            && !EventFlag(12405179));
    SetEventFlag(12400157, OFF);
    SetEventFlag(12405179, ON);
    ForceAnimationPlayback(2401208, 2, false, false, false);
    WaitFixedTimeSeconds(1);
    CreateObjectfollowingSFX(2401208, 200, 920204);
    CreateObjectfollowingSFX(2401208, 201, 920205);
    WaitFixedTimeSeconds(3);
    SetEventFlag(12405179, OFF);
    SetObjactState(2401008, 2400000, Enabled);
    RestartEvent();
});

// 教会仕掛け扉レバーが動かない
$Event(12400158, Default, function() {
    SetNetworkSyncState(Disabled);
    WaitFor(EventFlag(12405179) && ActionButtonInArea(7100, 2401008));
    DisplayGenericDialog(10010172, PromptType.OKCANCEL, NumberofOptions.OneButton, -1, 3);
    RestartEvent();
});

// 教会仕掛け扉_初期化
$Event(12400159, Default, function() {
    if (!EventFlag(12400157)) {
        ReproduceObjectAnimation(2401208, 2);
        SetObjactState(2401008, 2400000, Enabled);
        EndEvent();
    }
L0:
    ReproduceObjectAnimation(2401208, 1);
    SetObjactState(2401008, 2400000, Enabled);
});

// 円形広場の門の開閉
$Event(12400760, Restart, function() {
    if (EventFlag(12400160)) {
        ForceAnimationPlayback(2400650, 7020, true, false, false);
        ReproduceObjectAnimation(2401220, 1);
        SetObjactState(2401014, 2400000, Disabled);
        EndEvent();
    }
L0:
    ForceAnimationPlayback(2400650, 7022, true, false, false);
    itemAct = !PlayerHasItem(ItemType.Goods, 4011) && ActionButtonInArea(2400030, 2401220);
    itemAct2 = PlayerHasItem(ItemType.Goods, 4011) && ActionButtonInArea(2400030, 2401220);
    WaitFor(itemAct || itemAct2 || ObjActEventFlag(12400170));
    if (!itemAct.Passed) {
        if (!itemAct2.Passed) {
            SetObjactState(2401014, 2400000, Disabled);
            ForceAnimationPlayback(2400650, 7024, false, false, false);
            WaitFixedTimeFrames(74);
            ForceAnimationPlayback(2400650, 7020, true, false, false);
            WaitFixedTimeFrames(31);
            ForceAnimationPlayback(2401220, 1, false, false, false);
            WaitFixedTimeFrames(30);
            CreateObjectfollowingSFX(2401220, 200, 920204);
            CreateObjectfollowingSFX(2401220, 201, 920205);
            SetEventFlag(12400160, ON);
            EndIf(EventFlag(12401800));
            SetEventFlag(2400, OFF);
            SetEventFlag(2401, OFF);
            SetEventFlag(2405, OFF);
            SetEventFlag(2406, OFF);
            EndEvent();
        }
L2:
        SetObjactState(2401014, 2400000, Disabled);
        RotateCharacter(10000, 2401014, 101310, false);
        WaitFixedTimeSeconds(1);
        ForceAnimationPlayback(2400650, 7023, false, false, false);
        ForceAnimationPlayback(2401014, 1, false, false, false);
        WaitFixedTimeFrames(105);
        ForceAnimationPlayback(2401220, 1, false, false, false);
        WaitFixedTimeFrames(24);
        ForceAnimationPlayback(2400650, 7022, true, false, false);
        WaitFixedTimeFrames(6);
        CreateObjectfollowingSFX(2401220, 200, 920204);
        CreateObjectfollowingSFX(2401220, 201, 920205);
        DisplayGenericDialog(10010174, PromptType.OKCANCEL, NumberofOptions.OneButton, -1, 3);
        SetEventFlag(12400160, ON);
        EndIf(EventFlag(12401800));
        SetEventFlag(2400, OFF);
        SetEventFlag(2401, OFF);
        SetEventFlag(2405, OFF);
        SetEventFlag(2406, OFF);
        EndEvent();
    }
L1:
    DisplayGenericDialog(10010173, PromptType.OKCANCEL, NumberofOptions.OneButton, -1, 3);
    RestartEvent();
});

// 広場前の門のレバーが動かない
$Event(12400161, Restart, function() {
    SetNetworkSyncState(Disabled);
    WaitFor(EventFlag(12400160) && ActionButtonInArea(7100, 2401014));
    DisplayGenericDialog(10010172, PromptType.OKCANCEL, NumberofOptions.OneButton, -1, 3);
    RestartEvent();
});

// 階段仕掛け扉_初期化
$Event(12400174, Restart, function() {
    if (!EventFlag(12400168)) {
        SetEventFlag(12400167, ON);
    }
L0:
    NoOp();
});

// 階段仕掛け扉
$Event(12400175, Default, function() {
    if (EventFlag(12400168)) {
        ReproduceObjectAnimation(2401209, 2);
        SetEventFlag(12400169, ON);
    } else {
L0:
        WaitFor(ObjActEventFlag(12400172) || ObjActEventFlag(12400173));
        SetEventFlag(12400167, OFF);
        SetEventFlag(12400169, ON);
        SetEventFlag(12400168, ON);
        SetEventFlag(12405175, ON);
        SetObjactState(2401015, 2400000, Disabled);
        SetObjactState(2401016, 2400000, Disabled);
        ForceAnimationPlayback(2401209, 2, false, false, false);
        WaitFixedTimeSeconds(1);
        CreateObjectfollowingSFX(2401209, 200, 920204);
        CreateObjectfollowingSFX(2401209, 201, 920205);
        WaitFixedTimeSeconds(3);
        SetEventFlag(12405175, OFF);
        SetObjactState(2401015, 2400000, Enabled);
        SetObjactState(2401016, 2400000, Enabled);
    }
L1:
    WaitFor(ObjActEventFlag(12400172) || ObjActEventFlag(12400173));
    SetEventFlag(12400167, ON);
    SetEventFlag(12400168, OFF);
    SetEventFlag(12405175, ON);
    SetObjactState(2401015, 2400000, Disabled);
    SetObjactState(2401016, 2400000, Disabled);
    ForceAnimationPlayback(2401209, 1, false, false, false);
    WaitFixedTimeSeconds(1);
    CreateObjectfollowingSFX(2401209, 200, 920204);
    CreateObjectfollowingSFX(2401209, 201, 920205);
    WaitFixedTimeSeconds(3);
    SetEventFlag(12400169, OFF);
    SetEventFlag(12405175, OFF);
    SetObjactState(2401015, 2400000, Enabled);
    SetObjactState(2401016, 2400000, Enabled);
    RestartEvent();
});

// 階段仕掛け扉_レバーが動かない
$Event(12400179, Restart, function(areaEntityId) {
    SetNetworkSyncState(Disabled);
    WaitFor(EventFlag(12405175) && ActionButtonInArea(7100, areaEntityId));
    DisplayGenericDialog(10010172, PromptType.OKCANCEL, NumberofOptions.OneButton, -1, 0);
    RestartEvent();
});

// 廃墟の隠し扉起動
$Event(12400185, Default, function() {
    if (ThisEvent()) {
        ReproduceObjectAnimation(2401012, 1);
        SetObjactState(2401013, 2400000, Disabled);
        EndEvent();
    }
L0:
    WaitFor(ObjActEventFlag(12400123));
    ForceAnimationPlayback(2401012, 1, false, false, false);
});

// さまよう狂気_XX
$Event(12400200, Default, function(chrEntityId, eventFlagId) {
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

// 鍵を開けた_XX
$Event(12400250, Default, function(objactEventFlag, messageId, entityId) {
    EndIf(ThisEventSlot());
    WaitFor(ObjActEventFlag(objactEventFlag));
    DisplayGenericDialog(messageId, PromptType.OKCANCEL, NumberofOptions.OneButton, entityId, 3);
});

// 時間帯変化_聖堂街A
$Event(12400300, Default, function() {
    if (!EventFlag(9802)) {
        GotoIf(L1, EventFlag(9801));
        if (!EventFlag(9800)) {
        }
L0:
        ActivateMapPart(2404000, Enabled);
        ActivateMapPart(2404001, Disabled);
        ActivateMapPart(2404002, Disabled);
        ChangeCharacterEnableState(2400321, Disabled);
        ChangeCharacterEnableState(2400322, Disabled);
        ActivateMapPart(2404750, Disabled);
        ActivateMapPart(2404751, Disabled);
        Goto(L3);
L1:
        ActivateMapPart(2404000, Disabled);
        ActivateMapPart(2404001, Enabled);
        ActivateMapPart(2404002, Disabled);
        ChangeCharacterEnableState(2400321, Enabled);
        ChangeCharacterEnableState(2400322, Enabled);
        SetCharacterBackreadState(2400350, true);
        SetCharacterBackreadState(2400351, true);
        SetCharacterBackreadState(2400352, true);
        SetCharacterBackreadState(2400220, true);
        SetCharacterBackreadState(2400116, true);
        SetCharacterBackreadState(2400125, true);
        ActivateMapPart(2404700, Disabled);
        ActivateMapPart(2404701, Disabled);
        DeleteMapSFX(2403400, false);
        DeleteMapSFX(2403401, false);
        DeleteMapSFX(2403402, false);
        DeleteMapSFX(2403403, false);
        DeleteMapSFX(2403404, false);
        DeleteMapSFX(2403405, false);
        DeleteMapSFX(2403406, false);
        DeleteMapSFX(2403407, false);
        DeleteMapSFX(2403408, false);
        DeleteMapSFX(2403409, false);
        DeleteMapSFX(2403410, false);
        DeleteMapSFX(2403411, false);
        DeleteMapSFX(2403412, false);
    } else {
L2:
        ActivateMapPart(2404000, Disabled);
        ActivateMapPart(2404001, Disabled);
        ActivateMapPart(2404002, Enabled);
        ChangeCharacterEnableState(2400321, Enabled);
        ChangeCharacterEnableState(2400322, Enabled);
        SetCharacterBackreadState(2400350, true);
        SetCharacterBackreadState(2400351, true);
        SetCharacterBackreadState(2400352, true);
        SetCharacterBackreadState(2400220, true);
        SetCharacterBackreadState(2400116, true);
        SetCharacterBackreadState(2400125, true);
        ActivateMapPart(2404700, Disabled);
        ActivateMapPart(2404701, Disabled);
    }
L3:
    WaitFor(
        EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 9800)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 9801)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 9802));
    RestartEvent();
});

// 時間帯変化_異様な月状態で邪神出現
$Event(12400765, Default, function() {
    if (!(EventFlag(9802) || EventFlag(12404001))) {
        DeactivateObject(2400898, Disabled);
        ForceAnimationPlayback(2400898, 0, true, false, false);
        ChangeCharacterDispmask(2400899, 0, OFF);
        ChangeCharacterDispmask(2400899, 2, OFF);
        ChangeCharacterDispmask(2400899, 10, OFF);
        SetSpEffect(2400899, 5686, false);
        SetEventFlag(12405263, ON);
        EndEvent();
    }
L0:
    DeactivateObject(2400898, Enabled);
    ForceAnimationPlayback(2400898, 0, true, false, false);
    ChangeCharacterDispmask(2400899, 0, ON);
    ChangeCharacterDispmask(2400899, 2, ON);
    ChangeCharacterDispmask(2400899, 10, ON);
    SetEventFlag(12405263, OFF);
});

// 宝箱_XX
$Event(12400350, Restart, function(objEntityId, objactEventFlag) {
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

// 門番_扉を開く
$Event(12400401, Restart, function() {
    WaitFor(EventFlag(72400440));
    BatchSetEventFlags(1400, 1402, OFF);
    SetEventFlag(1401, ON);
    ForceAnimationPlayback(2401200, 1, false, true, false);
    SetEventFlag(12400131, ON);
    SaveRequest(0);
});

// 門番_扉を開いたので会話キャラをワープ
$Event(12400402, Default, function() {
    WaitFor(EventFlag(72400440));
    IssueShortWarpRequest(2400830, TargetEntityType.Area, 2402033, -1);
});

// 門番_門を開いた状態で話しかけ、SAN値UP
$Event(12400403, Default, function() {
    EndIf(ThisEvent());
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(EventFlag(72400441));
    AwardItemLot(37000);
});

// 邪神投げでSAN値UP
$Event(12400410, Default, function() {
    EndIf(ThisEvent());
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(CharacterHasSpEffect(10000, 6421));
    $InitializeEvent(0, 9350, 1);
});

// 夜になった後の鐘の音
$Event(12400420, Default, function() {
    SetMapSoundState(2406831, Disabled);
    EndIf(ThisEvent());
    WaitFor(EventFlag(9801));
    WaitFixedTimeSeconds(4);
    SetMapSoundState(2406831, Enabled);
});

// 時間帯変化_聖堂街B→A
$Event(12400750, Default, function() {
    SetMapSoundState(2406832, Disabled);
    if (!ThisEvent()) {
        WaitFor(ActionButtonInArea(7030, 2401210));
        SetEventFlag(9180, ON);
        WaitFixedTimeFrames(1);
        PlayCutsceneChangeTimePeriodAndWarpPlayer(24000020, CutscenePlayMode.Skippable, 2402200, 24, 0, 10000, 1);
        WaitFixedTimeFrames(1);
        SetEventFlag(9180, OFF);
        SetMapSoundState(2406832, Enabled);
    }
L0:
    ReproduceObjectAnimation(2401210, 2);
    NotifySoundDampeningOfDoorEvent(2401210, DoorState.DoorOpening);
});

// 人さらいでの聖堂街→生贄の街ワープ
$Event(12400780, Restart, function(chrEntityId) {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(
        !CharacterDead(chrEntityId)
            && CharacterDamagedBy(10000, chrEntityId)
            && HPRatio(10000) == 0
            && EventFlag(9401)
            && EventFlag(9404));
    SetEventFlag(9420, ON);
});

// 人さらい出現
$Event(12400791, Restart, function(chrEntityId) {
    if (!EventFlag(9802)) {
        EndIf(EventFlag(9453));
    }
L0:
    SetCharacterBackreadState(chrEntityId, true);
});

// 人さらい出現_敵差し替え
$Event(12400797, Restart, function() {
    if (!EventFlag(9802)) {
        if (EventFlag(9453)) {
            SetCharacterBackreadState(2400350, true);
            SetCharacterBackreadState(2400351, true);
            SetCharacterBackreadState(2400352, true);
            EndEvent();
        }
    }
L0:
    SetCharacterBackreadState(2400362, true);
});

// AC接続エレベーター初期化
$Event(12400823, Default, function() {
    flag = EventFlag(12400827);
    WaitFor(flag || !EventFlag(12400827));
    if (!flag.Passed) {
        ReproduceObjectAnimation(2401102, 30);
        SetObjactState(2401104, 2400000, Enabled);
        SetObjactState(2401103, 2400000, Disabled);
    } else {
        ReproduceObjectAnimation(2401102, 0);
        SetObjactState(2401104, 2400000, Disabled);
        SetObjactState(2401103, 2400000, Enabled);
    }
});

// AC接続エレベーター下がる
$Event(12400824, Default, function() {
    if (!(EventFlag(12400827) && EventFlag(12400828))) {
        WaitFor(
            (EventFlag(12400827) && !EventFlag(12400828) && InArea(10000, 2402058))
                || (EventFlag(12400827) && !EventFlag(12400828) && ObjActEventFlag(12400169)));
    }
L0:
    SetEventFlag(12400828, ON);
    ForceAnimationPlayback(2401102, 1, false, true, false);
    ForceAnimationPlayback(2401102, 28, false, true, false);
    WaitFor(!AllPlayersInArea(2402059));
    ForceAnimationPlayback(2401102, 29, false, true, false);
    SetEventFlag(12400827, OFF);
    SetEventFlag(12400828, OFF);
    SetObjactState(2401104, 2400000, Enabled);
    SetObjactState(2401103, 2400000, Disabled);
    RestartEvent();
});

// AC接続エレベーター上がる
$Event(12400825, Default, function() {
    if (!(!EventFlag(12400827) && EventFlag(12400828))) {
        WaitFor(
            (!EventFlag(12400827) && !EventFlag(12400828) && InArea(10000, 2402059))
                || (!EventFlag(12400827) && !EventFlag(12400828) && ObjActEventFlag(12400168)));
    }
L0:
    SetEventFlag(12400828, ON);
    ForceAnimationPlayback(2401102, 31, false, true, false);
    ForceAnimationPlayback(2401102, 32, false, true, false);
    WaitFor(!AllPlayersInArea(2402058));
    ForceAnimationPlayback(2401102, 7, false, true, false);
    SetEventFlag(12400827, ON);
    SetEventFlag(12400828, OFF);
    SetObjactState(2401104, 2400000, Disabled);
    SetObjactState(2401103, 2400000, Enabled);
    RestartEvent();
});

// AC接続エレベーター仕掛けが動かない
$Event(12400826, Default, function() {
    SetNetworkSyncState(Disabled);
    WaitFor(
        (EventFlag(12400827) && ActionButtonInArea(7100, 2401104))
            || (!EventFlag(12400827) && ActionButtonInArea(7100, 2401103))
            || (EventFlag(12400828) && ActionButtonInArea(7100, 2401104))
            || (EventFlag(12400828) && ActionButtonInArea(7100, 2401103)));
    DisplayGenericDialog(10010172, PromptType.OKCANCEL, NumberofOptions.OneButton, -1, 3);
    RestartEvent();
});

// 新風切替_扉を開く_XX
$Event(12400850, Restart, function(entityId, entityId2, entityId3, eventFlagId, objactEventFlag, timeSeconds, entityId4, sfxId) {
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
$Event(12400854, Restart, function() {
    DeleteMapSFX(2406711, false);
    DeleteMapSFX(2406712, false);
    DeleteMapSFX(2406713, false);
    if (EventFlag(12400133)) {
        SpawnMapSFX(2406712);
        SpawnMapSFX(2406713);
        EndEvent();
    }
    WaitFor(ObjActEventFlag(12400112));
    WaitFixedTimeSeconds(6);
    SpawnMapSFX(2406711);
    SpawnOneshotSFX(TargetEntityType.Object, 2401204, 200, 920206);
    SpawnOneshotSFX(TargetEntityType.Object, 2401204, 201, 920207);
    WaitFixedTimeSeconds(4);
    SpawnMapSFX(2406712);
    SpawnMapSFX(2406713);
});

// 寝ているやつが起きそうになる_XX
$Event(12405000, Restart, function(chrEntityId, animationId, animationId2, aiId, aiId2) {
    SetCharacterAIId(chrEntityId, aiId);
    ForceAnimationPlayback(chrEntityId, animationId, true, false, false);
    WaitFor(
        EntityInRadiusOfEntity(10000, chrEntityId, 3)
            || CharacterAIState(chrEntityId, AIStateType.Alert));
    SetCharacterAIId(chrEntityId, aiId2);
    ForceAnimationPlayback(chrEntityId, animationId2, true, false, false);
    WaitFor(CharacterAIState(chrEntityId, AIStateType.Normal));
    RestartEvent();
});

// 起きそうなやつが起きる_XX
$Event(12405010, Restart, function(chrEntityId, animationId, eventSlotId, aiId) {
    WaitFor(
        CharacterAIState(chrEntityId, AIStateType.Recognition)
            || CharacterAIState(chrEntityId, AIStateType.Combat));
    SetCharacterAIId(chrEntityId, aiId);
    ForceAnimationPlayback(chrEntityId, animationId, false, false, false);
    SetEventState(12405000, eventSlotId, EventEndType.End);
});

// 夜になったらフランケンが寝る_寝ているやつが起きそうになる_XX
$Event(12405020, Default, function(chrEntityId, animationId, animationId2, aiId, aiId2) {
    WaitFor(EventFlag(9801));
    SetCharacterAIId(chrEntityId, aiId);
    ForceAnimationPlayback(chrEntityId, animationId, true, false, false);
    WaitFor(
        EntityInRadiusOfEntity(10000, chrEntityId, 1)
            || CharacterAIState(chrEntityId, AIStateType.Alert));
    SetCharacterAIId(chrEntityId, aiId2);
    ForceAnimationPlayback(chrEntityId, animationId2, true, false, false);
    WaitFor(CharacterAIState(chrEntityId, AIStateType.Normal));
    RestartEvent();
});

// 夜になったらフランケンが寝る_起きそうなやつが起きる_XX
$Event(12405030, Default, function(chrEntityId, animationId, eventSlotId, aiId) {
    WaitFor(EventFlag(9801));
    WaitFor(
        CharacterAIState(chrEntityId, AIStateType.Recognition)
            || CharacterAIState(chrEntityId, AIStateType.Combat));
    SetCharacterAIId(chrEntityId, aiId);
    ForceAnimationPlayback(chrEntityId, animationId, false, false, false);
    SetEventState(12405020, eventSlotId, EventEndType.End);
});

// 裏路地_教会の使者と戦っていると寝ているやつが起床
$Event(12405060, Restart, function(chrEntityId, animationId, animationId2, aiId, aiId2) {
    SetCharacterAIId(chrEntityId, aiId);
    ForceAnimationPlayback(chrEntityId, animationId, true, false, false);
    areaChr = EntityInRadiusOfEntity(10000, chrEntityId, 3) && CharacterAIState(2400160, AIStateType.Combat);
    dmg = CharacterDamagedBy(chrEntityId, 10000);
    WaitFor(areaChr || dmg);
    SetCharacterAIId(chrEntityId, aiId2);
    if (!dmg.Passed) {
        ForceAnimationPlayback(chrEntityId, animationId2, false, false, false);
    }
});

// 群衆Aを強制移動_XX
$Event(12405080, Restart, function(eventFlagId, chrEntityId, areaEntityId, targetDistance) {
    WaitFor(EventFlag(eventFlagId));
    RequestCharacterAICommand(chrEntityId, 10, 0);
    SetCharacterHome(chrEntityId, areaEntityId);
    WaitFor(
        InArea(chrEntityId, areaEntityId)
            || EntityInRadiusOfEntity(chrEntityId, 10000, targetDistance)
            || CharacterDamagedBy(chrEntityId, 10000));
    RequestCharacterAICommand(chrEntityId, -1, 0);
    RequestCharacterAIReplan(chrEntityId);
});

// 巣の設定
$Event(12405100, Restart, function(chrEntityId, areaEntityId, areaEntityId2) {
    area = InArea(10000, 2404306);
    flag = EventFlag(12405431);
    WaitFor((area || flag) && CharacterAIState(chrEntityId, AIStateType.Normal));
    SetCharacterAIState(chrEntityId, Disabled);
    if (!flag.Passed) {
        SetCharacterHome(chrEntityId, areaEntityId);
    }
    if (!area.Passed) {
        SetCharacterHome(chrEntityId, areaEntityId2);
    }
    RequestCharacterAICommand(chrEntityId, 10, 0);
    SetCharacterAIState(chrEntityId, Enabled);
    RequestCharacterAIReplan(chrEntityId);
    WaitFor(InArea(chrEntityId, areaEntityId) || InArea(chrEntityId, areaEntityId2));
    RequestCharacterAICommand(chrEntityId, -1, 0);
    RequestCharacterAIReplan(chrEntityId);
});

// 火矢トラップ
$Event(12405110, Restart, function(areaEntityId, objEntityId, entityId, objEntityId2, firingAngleY, eventFlagId, playlogName) {
    WaitFor(!ObjectDestroyed(objEntityId2));
    SetEventFlag(eventFlagId, OFF);
    if (EventFlag(eventFlagId)) {
        ReproduceObjectAnimation(objEntityId, 0);
    } else {
        objArea = !ObjectDestroyed(objEntityId2) && InArea(10000, areaEntityId);
        obj = ObjectDestroyed(objEntityId2);
        WaitFor(objArea || obj);
        GotoIf(S0, obj.Passed);
        GotoIf(S1, objArea.Passed);
    }
S0:
    ForceAnimationPlayback(objEntityId, 0, false, true, false);
    EndEvent();
S1:
    PlaySE(objEntityId, SoundType.oObject, 990100001);
    ForceAnimationPlayback(objEntityId, 0, false, true, false);
    SetEventFlag(eventFlagId, ON);
    SpawnOneshotSFX(TargetEntityType.Object, objEntityId, 101, 150005);
    DeleteMapSFX(entityId, false);
    EndIf(obj.Passed);
    WaitFixedTimeSeconds(0.2);
    CreatePlaylog(playlogName);
    ShootBullet(2400000, objEntityId2, 101, 5071, 0, firingAngleY, 0);
    PlaySE(objEntityId2, SoundType.aEnvironmentalSound, 243007000);
    SpawnOneshotSFX(TargetEntityType.Object, objEntityId2, 101, 929208);
    WaitFixedTimeSeconds(0.7);
    ShootBullet(2400000, objEntityId2, 101, 5071, 0, firingAngleY, 0);
    PlaySE(objEntityId2, SoundType.aEnvironmentalSound, 243007000);
    SpawnOneshotSFX(TargetEntityType.Object, objEntityId2, 101, 929208);
    WaitFixedTimeSeconds(0.7);
    ShootBullet(2400000, objEntityId2, 101, 5071, 0, firingAngleY, 0);
    PlaySE(objEntityId2, SoundType.aEnvironmentalSound, 243007000);
    SpawnOneshotSFX(TargetEntityType.Object, objEntityId2, 101, 929208);
    WaitFixedTimeSeconds(3);
    WaitFor(!InArea(10000, areaEntityId) && !ObjectDestroyed(objEntityId2));
    SetEventFlag(eventFlagId, OFF);
    PlaySE(objEntityId2, SoundType.aEnvironmentalSound, 243007001);
    PlaySE(objEntityId, SoundType.oObject, 990100001);
    ForceAnimationPlayback(objEntityId, 1, false, true, false);
    RestartEvent();
});

// 特殊効果設定
$Event(12405120, Default, function(chrEntityId, spEffectId) {
    WaitFixedTimeFrames(1);
    SetSpEffect(chrEntityId, spEffectId, false);
});

// 逆走で裏路地に来たらロジックON_XX
$Event(12405130, Restart, function(chrEntityId, eventId, eventSlotId) {
    WaitFor(
        (CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
            && InArea(10000, 2402151));
    SetCharacterAIState(chrEntityId, Enabled);
    SetEventState(eventId, eventSlotId, EventEndType.End);
});

// 裏路地の群衆が狙撃ポイントに移動
$Event(12405140, Restart, function() {
    if (ThisEvent()) {
        SetCharacterAIId(2400111, 263381);
        EndEvent();
    }
L0:
    WaitFor(CharacterBackreadStatus(2400111));
    SetCharacterAIState(2400111, Disabled);
    flag = EventFlag(12405681);
    dmg = HasDamageType(2400111, 10000, DamageType.Unspecified);
    chrFlagDmgArea |= CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom);
    chrFlagDmgArea |= flag || dmg || (chrFlagDmgArea && EntityInRadiusOfEntity(10000, 2400111, 5));
    WaitFor(chrFlagDmgArea);
    SetCharacterAIState(2400111, Enabled);
    EndIf(!flag.Passed);
    SetCharacterAIId(2400111, 263380);
    WaitFor(
        InArea(2400111, 2402046)
            || HasDamageType(2400111, 10000, DamageType.Unspecified)
            || EntityInRadiusOfEntity(10000, 2400111, 5));
    SetCharacterAIId(2400111, 263381);
    RequestCharacterAIReplan(2400111);
});

// 感染者の乞食_変身する_XX
$Event(12405150, Default, function(chrEntityId, eventFlagId) {
    WaitFixedTimeFrames(10);
    if (ThisEventSlot()) {
        EndIf(EventFlag(1210));
        SetCharacterBackreadState(2400756, false);
        SetCharacterBackreadState(chrEntityId, true);
        EndEvent();
    }
L0:
    WaitFor(EventFlag(eventFlagId));
    SetCharacterBackreadState(2400756, false);
    SetCharacterInvincibility(chrEntityId, Enabled);
    WaitFor(CharacterBackreadStatus(2400756));
    if (!CharacterType(10000, TargetType.Alive)) {
        WaitFixedTimeFrames(60);
        SetCharacterBackreadState(chrEntityId, true);
        EndEvent();
    }
L1:
    ForceAnimationPlayback(chrEntityId, 103073, false, true, false);
    SetCharacterBackreadState(chrEntityId, true);
    CharacterWarpRequest(2400756, TargetEntityType.Area, 2404507, -1);
    SetCharacterGravity(2400756, Enabled);
    ForceAnimationPlayback(2400756, 3030, false, false, false);
    SetCharacterAIState(2400756, Enabled);
    SetCharacterHome(2400756, 2404507);
    BatchSetEventFlags(1200, 1219, OFF);
    SetEventFlag(1207, ON);
    SetEventFlag(9432, ON);
    SaveRequest(0);
});

// 感染者の乞食_立ち上がり済みフラグ
$Event(12405157, Default, function() {
    WaitFor(CharacterHasSpEffect(2400755, 153) || CharacterHasSpEffect(2400759, 153));
    WaitFixedTimeFrames(0);
});

// 感染者の乞食_殺害数が1以上フラグ
$Event(12405158, Default, function() {
    WaitFor(EventValue(72400372, 2) != 0);
    WaitFixedTimeFrames(0);
});

// 血族狩り_立ち上がり済み判定
$Event(12405159, Default, function() {
    WaitFor(CharacterHasSpEffect(2400760, 151));
    WaitFor(!CharacterHasSpEffect(2400760, 151));
    RestartIf(!CharacterBackreadStatus(2400760));
    SetEventFlag(12405160, ON);
});

// 階段フランケン往復切り替え
$Event(12405195, Restart, function() {
    area = InArea(2400203, 2402411);
    area2 = InArea(2400203, 2402412);
    WaitFor(area || area2);
    if (!area2.Passed) {
        WaitFor(InArea(2400203, 2402411));
        WaitFor(InArea(2400203, 2402406));
        if (!EventFlag(12400169)) {
            ChangeCharacterPatrolBehavior(2400203, 2403111);
        } else {
L0:
            ChangeCharacterPatrolBehavior(2400203, 2403112);
            RestartEvent();
        }
    }
L1:
    WaitFor(InArea(2400203, 2402412));
    WaitFor(InArea(2400203, 2402407));
    if (!EventFlag(12400169)) {
        ChangeCharacterPatrolBehavior(2400203, 2403110);
    } else {
L2:
        ChangeCharacterPatrolBehavior(2400203, 2403113);
    }
L3:
    RestartEvent();
});

// 初回だけ_レバーを開ける敵
$Event(12405200, Restart, function() {
    WaitFor(!EventFlag(12400168));
    WaitFixedTimeFrames(1);
    RequestObjactActivation(2401015, 2400000, -1, 2400113);
    RestartEvent();
});

// 教会の使者がSAN値によって見た目変化
$Event(12405210, Restart, function(chrEntityId, spEffectId) {
    EndIf(!EventFlag(12404002));
    ChangeCharacterDispmask(chrEntityId, 3, OFF);
    ChangeCharacterDispmask(chrEntityId, 4, ON);
    SetSpEffect(chrEntityId, spEffectId, false);
});

// 教会の使者がSAN値によって見た目変化(鎌、十字架)
$Event(12405220, Restart, function(chrEntityId, spEffectId, spEffectId2, spEffectId3) {
    EndIf(!EventFlag(12404002));
    SetSpEffect(chrEntityId, spEffectId, false);
    SetSpEffect(chrEntityId, spEffectId2, false);
    SetSpEffect(chrEntityId, spEffectId3, false);
});

// 階段のフランケンが辺りをうかがう
$Event(12405240, Restart, function() {
    area = InArea(2400203, 2404311) || InArea(10000, 2404311);
    chr = !CharacterTargetedBy(2400203, 10000);
    chr2 = CharacterTargetedBy(2400203, 10000);
    WaitFor(area && (chr || chr2) && !EventFlag(9801));
    PlaySE(2404290, SoundType.aEnvironmentalSound, 20011002);
    WaitFixedTimeFrames(40);
    EndIf(chr2.Passed);
    ForceAnimationPlayback(2400203, 3039, false, false, false);
});

// SAN値で使者に特殊効果かける
$Event(12405241, Restart, function() {
    if (!EventFlag(12404003)) {
        SetCharacterBackreadState(2400650, true);
        EndEvent();
    }
L0:
    SetCharacterBackreadState(2400650, false);
});

// ナビメッシュノードバンク_XX
$Event(12405250, Restart, function(eventFlagId, entityId, eventFlagId2) {
    flag = !EventFlag(eventFlagId);
    flag2 = EventFlag(eventFlagId);
    WaitFor(flag || flag2);
    if (!flag2.Passed) {
        ModifyNavimeshConnectionBitflag(entityId, NavimeshType.Solid, BitopType.Delete);
    } else {
        ModifyNavimeshConnectionBitflag(entityId, NavimeshType.Solid, BitopType.Add);
    }
    WaitFor(EventFlag(eventFlagId2));
    RestartEvent();
});

// ナビメッシュノードバンク_逆_XX
$Event(12405251, Restart, function(eventFlagId, entityId, eventFlagId2) {
    flag = EventFlag(eventFlagId);
    flag2 = !EventFlag(eventFlagId);
    WaitFor(flag || flag2);
    if (!flag2.Passed) {
        ModifyNavimeshConnectionBitflag(entityId, NavimeshType.Solid, BitopType.Delete);
    } else {
        ModifyNavimeshConnectionBitflag(entityId, NavimeshType.Solid, BitopType.Add);
    }
    WaitFor(EventFlag(eventFlagId2));
    RestartEvent();
});

// 邪神投げ暗転
$Event(12405259, Restart, function() {
    SetNetworkSyncState(Disabled);
    WaitFor(CharacterHasEventMessage(2400899, 700) && CharacterHasSpEffect(10000, 5577));
    DisplayBanner(TextBannerType.StadiumLoss);
    RestartEvent();
});

// 邪神アニメ強制再生
$Event(12405260, Restart, function() {
    WaitFor(
        (CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
            && InArea(10000, 2402018));
    CreatePlaylog(2);
    ForceAnimationPlayback(2400899, 3000, false, false, false);
    WaitFixedTimeFrames(250);
    RestartEvent();
});

// 邪神の投げアニメ強制再生
$Event(12405261, Restart, function() {
    WaitFor(CharacterDamagedBy(10000, 2402018));
    WaitFixedTimeSeconds(3);
    ForceAnimationPlayback(10000, 9580, false, true, false);
    RestartEvent();
});

// 邪神投げ時の邪神の透明解除
$Event(12405262, Restart, function() {
    WaitFor(EventFlag(12405263) && CharacterHasEventMessage(2400899, 10));
    ChangeCharacterDispmask(2400899, 0, ON);
    ChangeCharacterDispmask(2400899, 2, ON);
    ChangeCharacterDispmask(2400899, 10, ON);
    SetSpEffect(2400899, 5687, false);
    ClearSpEffect(2400899, 5686);
    WaitFor(CharacterHasEventMessage(2400899, 20));
    SetSpEffect(2400899, 5686, false);
    ClearSpEffect(2400899, 5687);
    RestartEvent();
});

// 邪神投げでDLCマップへ
$Event(12405263, Restart, function() {
    WaitFor(CharacterHasEventMessage(2400899, 710) && PlayerHasItem(ItemType.Goods, 4311));
    SetCharacterImmortality(10000, Enabled);
    WaitFixedTimeFrames(30);
    SetEventFlag(9180, ON);
    WaitFixedTimeFrames(1);
    if (!HasMultiplayerState(MultiplayerState.Multiplayer)) {
        PlayCutsceneToPlayer(24000000, CutscenePlayMode.Skippable, 10000);
    } else {
L0:
        PlayCutsceneToPlayer(24000000, CutscenePlayMode.Unskippable, 10000);
    }
L1:
    WaitFixedTimeFrames(1);
    SetEventFlag(9180, OFF);
    EndIf(!CharacterType(10000, TargetType.Alive));
    SetEventFlag(12401000, ON);
    WarpPlayerToRespawnPoint(3402959);
});

// PlayLog_聖堂街A_扉を閉じる領域侵入
$Event(12405270, Restart, function() {
    WaitFor(InArea(10000, 2402190));
    CreatePlaylog(26);
});

// PlayLog_聖堂街A_ショートカット領域侵入
$Event(12405271, Restart, function() {
    WaitFor(InArea(10000, 2402191));
    CreatePlaylog(56);
});

// PlayLog_聖堂街A_トラップ領域侵入
$Event(12405272, Restart, function() {
    WaitFor(InArea(10000, 2402192));
    CreatePlaylog(90);
});

// PlayLog_聖堂街A_トラップ発動
$Event(12405273, Restart, function() {
    WaitFor(InArea(10000, 2402193));
    CreatePlaylog(2);
});

// チームタイプ変更
$Event(12405289, Restart, function() {
    SetCharacterTeamType(2400000, TeamType.Human);
});

// 巡回情報の切替_領域侵入
$Event(12405300, Restart, function(chrEntityId, areaEntityId, patrolInformationEntityId, eventFlagId) {
    WaitFor(InArea(chrEntityId, areaEntityId));
    ChangeCharacterPatrolBehavior(chrEntityId, patrolInformationEntityId);
    SetEventFlag(eventFlagId, OFF);
});

// 巡回情報の切替_バックリードから復帰
$Event(12405320, Restart, function() {
    WaitFor(
        EventFlag(12405300) || EventFlag(12405301) || EventFlag(12405302) || EventFlag(12405303));
    WaitFor(!CharacterBackreadStatus(2400300));
    WaitFor(CharacterBackreadStatus(2400300));
    flag = EventFlag(12405300);
    flag2 = EventFlag(12405301);
    flag3 = EventFlag(12405302);
    flag4 = EventFlag(12405303);
    WaitFor(flag || flag2 || flag3 || flag4);
    WaitFixedTimeSeconds(2);
    if (flag.Passed) {
        ChangeCharacterPatrolBehavior(2400300, 2403101);
        RestartEvent();
    }
    if (flag2.Passed) {
        ChangeCharacterPatrolBehavior(2400300, 2403102);
        RestartEvent();
    }
    if (flag3.Passed) {
        ChangeCharacterPatrolBehavior(2400300, 2403103);
        RestartEvent();
    }
    if (flag4.Passed) {
        ChangeCharacterPatrolBehavior(2400300, 2403104);
        RestartEvent();
    }
});

// 地下街の脳喰らいが特殊待機_XX
$Event(12405330, Restart, function(chrEntityId) {
    ForceAnimationPlayback(chrEntityId, 7000, true, false, false);
    WaitFor(
        ((CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
            && EntityInRadiusOfEntity(chrEntityId, 10000, 4))
            || HasDamageType(chrEntityId, -1, DamageType.Unspecified));
    ForceAnimationPlayback(chrEntityId, 7001, false, false, false);
    RequestCharacterAIReplan(chrEntityId);
});

// 車椅子が掃射開始
$Event(12405335, Restart, function() {
    WaitFor(CharacterBackreadStatus(2400421));
    SetCharacterAIState(2400421, Disabled);
    area = InArea(10000, 2402031);
    area2 = EntityInRadiusOfEntity(10000, 2400421, 5);
    WaitFor(area || area2);
    if (!area2.Passed) {
        ForceAnimationPlayback(2400421, 3011, false, false, false);
    }
    SetCharacterAIState(2400421, Enabled);
});

// 敵の巡回情報変更_領域2個_XX
$Event(12405350, Restart, function(chrEntityId, areaEntityId, areaEntityId2, patrolInformationEntityId, areaEntityId3) {
    if (!ThisEventSlot()) {
        WaitFor(
            (CharacterType(10000, TargetType.Alive)
                || CharacterType(10000, TargetType.WhitePhantom))
                && (InArea(10000, areaEntityId) || InArea(10000, areaEntityId3)));
    }
L0:
    SetCharacterHome(chrEntityId, areaEntityId2);
    ChangeCharacterPatrolBehavior(chrEntityId, patrolInformationEntityId);
    EndIf(ThisEventSlot());
    RequestCharacterAIReplan(chrEntityId);
});

// さまよう狂気（小）がルートに沿って逃走
$Event(12405360, Restart, function() {
    if (!ThisEventSlot()) {
        WaitFor(CharacterBackreadStatus(2400371));
        SetSpEffect(2400371, 5000, false);
        WaitFor(CharacterAIState(2400371, AIStateType.Combat));
    }
L0:
    SetCharacterHome(2400371, 2404085);
    ChangeCharacterPatrolBehavior(2400371, 2403106);
    WaitFor(InArea(2400371, 2404085));
    ClearSpEffect(2400371, 5000);
    RequestCharacterAICommand(2400371, -1, 0);
    RequestCharacterAIReplan(2400371);
});

// さまよう狂気_教会から出てきて逃走_XX
$Event(12405365, Restart, function(chrEntityId, areaEntityId, patrolInformationEntityId) {
    if (!ThisEventSlot()) {
        WaitFor(CharacterBackreadStatus(chrEntityId));
        SetSpEffect(chrEntityId, 5000, false);
        WaitFor(CharacterAIState(chrEntityId, AIStateType.Combat));
    }
L0:
    SetCharacterHome(chrEntityId, areaEntityId);
    ChangeCharacterPatrolBehavior(chrEntityId, patrolInformationEntityId);
    RequestCharacterAIReplan(chrEntityId);
    WaitFor(InArea(chrEntityId, areaEntityId));
    ClearSpEffect(chrEntityId, 5000);
    RequestCharacterAICommand(chrEntityId, -1, 0);
    RequestCharacterAIReplan(chrEntityId);
});

// 異様な月で敵を消滅させる
$Event(12405370, Restart, function(chrEntityId) {
    WaitFor(EventFlag(9802));
    SetCharacterBackreadState(chrEntityId, true);
});

// 接続前の敵_巣切り替え
$Event(12405380, Default, function(chrEntityId, areaEntityId, areaEntityId2) {
    WaitFor(
        CharacterAIState(chrEntityId, AIStateType.Recognition)
            || CharacterAIState(chrEntityId, AIStateType.Combat));
    SetCharacterHome(chrEntityId, areaEntityId);
    WaitFor(CharacterAIState(chrEntityId, AIStateType.Normal));
    SetCharacterHome(chrEntityId, areaEntityId2);
    RestartEvent();
});

// 生贄接続NPC撃破_XX
$Event(12400865, Default, function(chrEntityId) {
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

// 医療協会のフランケン(斧) 部位損傷_XX
$Event(12405400, Restart, function(npcPartId, npcPartId2, npcPartGroupIdx, animationId, spEffectId, eventFlagId, eventFlagId2, chrEntityId) {
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
    CreateNPCPart(chrEntityId, npcPartId, npcPartGroupIdx, 9999999, 1, 1, false, false);
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

// 医療協会のフランケン(斧) 部位登録_XX
$Event(12405430, Restart, function(npcPartId, npcPartId2, npcPartGroupIdx, npcPartHP, eventFlagId, chrEntityId) {
    WaitFor(EntityInRadiusOfEntity(chrEntityId, 10000, 10));
    CreateNPCPart(chrEntityId, npcPartId, npcPartGroupIdx, npcPartHP, 1, 1, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId2, 64, 64);
    SetEventFlag(eventFlagId, ON);
});

// 医療協会のフランケン(斧) 部位破壊タイミング制限_XX
$Event(12405460, Restart, function(eventMessageId, eventMessageId2, eventFlagId, chrEntityId, bitNumber, bitNumber2) {
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

// 汎用住人_SFX制御
$Event(12405790, Restart, function(objEntityId, eventFlagId, sfxId) {
    DeleteObjectfollowingSFX(objEntityId, true);
    EndIf(EventFlag(eventFlagId));
    CreateObjectfollowingSFX(objEntityId, 200, sfxId);
});

// 汎用住人SE再生
$Event(12405800, Restart, function(entityId, eventFlagId, eventFlagId2, eventFlagId3) {
    SetMapSoundState(entityId, Disabled);
    EndIf(EventFlag(eventFlagId3));
    WaitFor(!EventFlag(eventFlagId) && !EventFlag(eventFlagId2));
    SetMapSoundState(entityId, Enabled);
    WaitFor(EventFlag(eventFlagId) || EventFlag(eventFlagId2));
    SetMapSoundState(entityId, Disabled);
    RestartEvent();
});

// 敵が指定ポイントに移動開始_XX
$Event(12405810, Restart, function(chrEntityId, areaEntityId, areaEntityId2, commandId, eventFlagId) {
    EndIf(EventFlag(eventFlagId));
    if (!ThisEventSlot()) {
        WaitFor(
            (CharacterType(10000, TargetType.Alive)
                || CharacterType(10000, TargetType.WhitePhantom))
                && InArea(10000, areaEntityId));
    }
L0:
    SetCharacterHome(chrEntityId, areaEntityId2);
    RequestCharacterAICommand(chrEntityId, commandId, 0);
    RequestCharacterAIReplan(chrEntityId);
});

// 敵が指定ポイントに移動完了_XX
$Event(12405820, Restart, function(chrEntityId, areaEntityId) {
    if (!ThisEventSlot()) {
        WaitFor(InArea(chrEntityId, areaEntityId));
    }
L0:
    RequestCharacterAICommand(chrEntityId, -1, 0);
    RequestCharacterAIReplan(chrEntityId);
});

// 敵が指定ポイントに移動中断_XX
$Event(12405840, Restart, function(chrEntityId, commandId, eventFlagId) {
    EndIf(EventFlag(eventFlagId));
    chr = CharacterAIState(chrEntityId, AIStateType.Recognition)
        || CharacterAIState(chrEntityId, AIStateType.Alert)
        || CharacterAIState(chrEntityId, AIStateType.Combat);
    flag = EventFlag(eventFlagId);
    WaitFor(chr || flag);
    EndIf(flag.Passed);
    RequestCharacterAICommand(chrEntityId, -1, 0);
    RequestCharacterAIReplan(chrEntityId);
    chr2 = CharacterAIState(chrEntityId, AIStateType.Normal);
    flag2 = EventFlag(eventFlagId);
    WaitFor(chr2 || flag2);
    EndIf(flag2.Passed);
    RequestCharacterAICommand(chrEntityId, commandId, 0);
    RequestCharacterAIReplan(chrEntityId);
    RestartEvent();
});

// 敵アバターがOBJ破壊で指定ポイントに移動開始
$Event(12405850, Restart, function(chrEntityId, objEntityId, areaEntityId, commandId, eventFlagId) {
    EndIf(EventFlag(eventFlagId));
    if (!ThisEventSlot()) {
        ForceAnimationPlayback(chrEntityId, 7013, true, false, false);
        WaitFor(
            ObjectDestroyed(objEntityId)
                || EntityInRadiusOfEntity(10000, chrEntityId, 4)
                || CharacterDamagedBy(chrEntityId, 10000));
        WaitFixedTimeFrames(0);
        ForceAnimationPlayback(chrEntityId, 7012, false, false, false);
    }
L0:
    SetCharacterHome(chrEntityId, areaEntityId);
    ForceAnimationPlayback(chrEntityId, 7011, false, false, false);
    ForceAnimationPlayback(chrEntityId, 7012, false, false, false);
    RequestCharacterAICommand(chrEntityId, commandId, 0);
    RequestCharacterAIReplan(chrEntityId);
});

// 敵アバター撃破
$Event(12400860, Default, function() {
    if (EventFlag(12400861)) {
        ChangeCharacterEnableState(2400450, Disabled);
        EndEvent();
    }
L0:
    WaitFor(CharacterDead(2400450));
    if (!EventFlag(6333)) {
        AwardItemLot(75002400);
    } else {
        AwardItemLot(75002405);
    }
    SetEventFlag(12400861, ON);
});

// ロジックON_XX
$Event(12405600, Restart, function(chrEntityId, areaEntityId, targetDistance, timeSeconds) {
    SetCharacterAIState(chrEntityId, Disabled);
    chr = CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom);
    areaChr = InArea(10000, areaEntityId) && chr;
    areaChr2 = EntityInRadiusOfEntity(10000, chrEntityId, targetDistance) && chr;
    dmg = CharacterDamagedBy(chrEntityId, 10000);
    WaitFor(areaChr || areaChr2 || dmg);
    if (!areaChr2.Passed) {
        if (!dmg.Passed) {
            WaitFixedTimeSeconds(timeSeconds);
        }
    }
    SetCharacterAIState(chrEntityId, Enabled);
    WaitFixedTimeFrames(1);
    RequestCharacterAIReplan(chrEntityId);
});

// ロジックON_SCの教会の使者2体目
$Event(12405660, Restart, function() {
    SetCharacterAIState(2400114, Disabled);
    WaitFor(
        InArea(2400122, 2404151)
            || CharacterDamagedBy(2400114, 10000)
            || ((CharacterType(10000, TargetType.Alive)
                || CharacterType(10000, TargetType.WhitePhantom))
                && (InArea(10000, 2402082) || EntityInRadiusOfEntity(2400114, 10000, 5))));
    SetCharacterAIState(2400114, Enabled);
    RequestCharacterAIReplan(2400114);
});

// ロジックON_XX_2領域監視
$Event(12405670, Restart, function(chrEntityId, areaEntityId, areaEntityId2, targetDistance, timeSeconds) {
    SetCharacterAIState(chrEntityId, Disabled);
    chr = CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom);
    WaitFor(
        (InArea(10000, areaEntityId) && chr)
            || (InArea(10000, areaEntityId2) && chr)
            || (EntityInRadiusOfEntity(10000, chrEntityId, targetDistance) && chr)
            || CharacterDamagedBy(chrEntityId, 10000));
    WaitFixedTimeSeconds(timeSeconds);
    SetCharacterAIState(chrEntityId, Enabled);
    WaitFixedTimeFrames(1);
    RequestCharacterAIReplan(chrEntityId);
});

// ロジックON_XX_階段の門が開いたら移動開始
$Event(12405675, Restart, function(chrEntityId) {
    SetCharacterAIState(chrEntityId, Disabled);
    WaitFor(
        InArea(10000, 2404332)
            || CharacterDamagedBy(chrEntityId, 10000)
            || EntityInRadiusOfEntity(chrEntityId, 10000, 3));
    SetCharacterAIState(chrEntityId, Enabled);
    WaitFixedTimeFrames(1);
    RequestCharacterAIReplan(chrEntityId);
});

// 裏路地広場で増援を呼ぶ_呼ぶ役
$Event(12405680, Restart, function() {
    WaitFor(CharacterTargetedBy(2400106, 10000));
    WaitFixedTimeFrames(1);
    ForceAnimationPlayback(2400106, 3010, false, true, false);
    WaitFixedTimeFrames(75);
    WaitFor(HPRatio(2400106) == 1);
    SetEventFlag(12405681, ON);
    ForceAnimationPlayback(2400106, 3009, false, true, false);
});

// 裏路地広場で増援を呼ぶ_呼ばれる役
$Event(12405682, Restart, function(chrEntityId, chrEntityId2, timeSeconds, eventFlagId, timeSeconds2) {
    SetCharacterAIState(chrEntityId, Disabled);
    SetCharacterAnimationState(chrEntityId2, Disabled);
    dmg = CharacterDamagedBy(chrEntityId, 10000);
    chrArea = (CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
        && EntityInRadiusOfEntity(chrEntityId, 10000, 10);
    WaitFor(dmg || chrArea || EventFlag(12405681));
    SetCharacterAIState(chrEntityId, Enabled);
    if (EventFlag(12405681)) {
        WaitFixedTimeSeconds(timeSeconds);
        SetEventPoint(chrEntityId, chrEntityId2, 1);
        RequestCharacterAICommand(chrEntityId, 90, 0);
        RequestCharacterAIReplan(chrEntityId);
        WaitFor(
            EntityInRadiusOfEntity(chrEntityId, chrEntityId2, 4)
                || ((CharacterType(10000, TargetType.Alive)
                    || CharacterType(10000, TargetType.WhitePhantom))
                    && EntityInRadiusOfEntity(chrEntityId, 10000, 3)));
        if (!chrArea.Passed) {
            SetSpEffect(chrEntityId, 4662, false);
            RequestCharacterAICommand(chrEntityId, -1, 0);
            RequestCharacterAIReplan(chrEntityId);
            WaitRandomTimeSeconds(1, 2);
            GotoIf(S0, EventFlag(eventFlagId));
            WaitRandomTimeSeconds(1, 2);
            GotoIf(S0, EventFlag(eventFlagId));
            WaitRandomTimeSeconds(1, 2);
            GotoIf(S0, EventFlag(eventFlagId));
        }
        WaitRandomTimeSeconds(1, 2);
        GotoIf(S0, EventFlag(eventFlagId));
    }
    WaitRandomTimeSeconds(1, 2);
    if (!EventFlag(eventFlagId)) {
        WaitRandomTimeSeconds(1, 2);
    }
S0:
    WaitFixedTimeSeconds(timeSeconds2);
    ClearSpEffect(chrEntityId, 4662);
    RequestCharacterAICommand(chrEntityId, -1, 0);
    RequestCharacterAIReplan(chrEntityId);
});

// 裏路地広場の増援_戦闘開始フラグ
$Event(12405686, Restart, function(chrEntityId) {
    WaitFor(
        ((CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
            && EntityInRadiusOfEntity(chrEntityId, 10000, 2))
            || HasDamageType(chrEntityId, 10000, DamageType.Unspecified)
            || CharacterAIState(chrEntityId, AIStateType.Recognition)
            || CharacterAIState(chrEntityId, AIStateType.Alert)
            || CharacterAIState(chrEntityId, AIStateType.Combat));
    WaitFixedTimeFrames(1);
});

// 裏路地広場_巡回ポイントで止まる
$Event(12405690, Restart, function() {
    WaitFor(InArea(2400106, 2404111));
    SetSpEffect(2400106, 5002, false);
    WaitFor(InArea(2400106, 2404113));
    WaitFixedTimeFrames(30);
    ClearSpEffect(2400106, 5002);
    RestartEvent();
});

// 孤独な老婆_初期化
$Event(12400500, Default, function() {
    if (CharacterType(10000, TargetType.Alive)) {
        if (EventFlag(1193)) {
            BatchSetEventFlags(1180, 1199, OFF);
            SetEventFlag(1181, ON);
        }
L1:
        if (EventFlag(1181) && EventFlag(9801)) {
            BatchSetEventFlags(1180, 1199, OFF);
            SetEventFlag(1185, ON);
        }
L2:
        if (EventFlag(9467) && EventFlag(1185)) {
            BatchSetEventFlags(1180, 1199, OFF);
            SetEventFlag(1186, ON);
        }
L3:
        if (EventFlag(1186) && EventFlag(72400900)) {
            BatchSetEventFlags(1180, 1199, OFF);
            SetEventFlag(1187, ON);
        }
L9:
        if (EventFlag(1187) && EventFlag(72400919)) {
            if (!EventFlag(72400918)) {
                SetEventFlag(72400918, ON);
            } else {
                BatchSetEventFlags(1180, 1199, OFF);
                SetEventFlag(1188, ON);
            }
        }
L4:
        if (EventFlag(1188) && EventFlag(72400350)) {
            BatchSetEventFlags(1180, 1199, OFF);
            SetEventFlag(1189, ON);
        }
L5:
        SetEventFlag(72400348, OFF);
        SetEventFlag(72400356, OFF);
    }
L6:
    SetCharacterGravity(2400730, Disabled);
    SetCharacterMaphits(2400730, true);
    SetCharacterGravity(2400732, Disabled);
    SetCharacterMaphits(2400732, true);
    GotoIf(L0, EventFlag(1181));
    GotoIf(L0, EventFlag(1184));
    GotoIf(L5, EventFlag(1185));
    GotoIf(L0, EventFlag(1186));
    GotoIf(L0, EventFlag(1188));
    GotoIf(L1, EventFlag(1191));
    GotoIf(L2, EventFlag(1189));
    GotoIf(L3, EventFlag(1183));
    GotoIf(L4, EventFlag(1189));
    GotoIf(L4, EventFlag(1187));
    SetCharacterBackreadState(2400730, true);
    SetCharacterBackreadState(2400732, true);
    DeactivateObject(2400731, Disabled);
    EndEvent();
L0:
    SetCharacterBackreadState(2400730, false);
    SetCharacterBackreadState(2400732, true);
    DeactivateObject(2400731, Enabled);
    RequestObjectRestoration(2400731);
    ForceAnimationPlayback(2400730, 103060, true, false, true);
    IssueShortWarpRequest(2400730, TargetEntityType.Area, 2404501, -1);
    EndEvent();
L5:
    SetCharacterBackreadState(2400730, false);
    SetCharacterBackreadState(2400732, true);
    DeactivateObject(2400731, Enabled);
    ForceAnimationPlayback(2400730, 103066, true, false, true);
    IssueShortWarpRequest(2400730, TargetEntityType.Area, 2404501, -1);
    EndEvent();
L1:
    SetCharacterBackreadState(2400730, true);
    SetCharacterBackreadState(2400732, true);
    DeactivateObject(2400731, Enabled);
    RequestObjectRestoration(2400731);
    EzstateInstructionRequest(2400730, 3, 1);
    IssueShortWarpRequest(2400730, TargetEntityType.Area, 2404501, -1);
    ForceCharacterTreasure(2400730);
    EndEvent();
L2:
    SetCharacterBackreadState(2400730, true);
    SetCharacterBackreadState(2400732, false);
    DeactivateObject(2400731, Enabled);
    ReproduceObjectDestruction(2400731, 1);
    EzstateInstructionRequest(2400732, 10, 1);
    IssueShortWarpRequest(2400732, TargetEntityType.Area, 2404382, -1);
    ForceCharacterTreasure(2400732);
    EndEvent();
L3:
    SetCharacterBackreadState(2400730, false);
    SetCharacterBackreadState(2400732, true);
    DeactivateObject(2400731, Enabled);
    RequestObjectRestoration(2400731);
    EzstateInstructionRequest(2400730, 3, 1);
    IssueShortWarpRequest(2400730, TargetEntityType.Area, 2404501, -1);
    ForceCharacterTreasure(2400730);
    EndEvent();
L4:
    SetCharacterBackreadState(2400730, true);
    SetCharacterBackreadState(2400732, true);
    DeactivateObject(2400731, Enabled);
    ReproduceObjectDestruction(2400731, 1);
    EndEvent();
});

// 孤独な老婆_状態変化_死亡
$Event(12400501, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    EndIf(EventFlag(1183));
    EndIf(EventFlag(1189));
    EndIf(EventFlag(1191));
    WaitFor(CharacterDead(2400730));
    BatchSetEventFlags(1180, 1199, OFF);
    SetEventFlag(1183, ON);
    SaveRequest(0);
});

// 孤独な老婆_血糊制御
$Event(12400505, Default, function() {
    if (!ThisEvent()) {
        if (!EventFlag(1191)) {
            ActivateMapPart(2404602, Disabled);
            WaitFor(EventFlag(6001));
            EndEvent();
        }
    }
L0:
    ActivateMapPart(2404602, Enabled);
    EndEvent();
});

// 孤独な老婆_アニメ制御_被ダメージ
$Event(12400507, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(HasDamageType(2400730, -1, DamageType.Unspecified) && HPRatio(2400730) != 0);
    if (!EventFlag(1185)) {
        ForceAnimationPlayback(2400730, 103063, false, false, false);
        RestartEvent();
    }
L0:
    ForceAnimationPlayback(2400730, 103067, false, false, false);
    RestartEvent();
});

// 孤独な老婆_アニメ制御_死亡
$Event(12400508, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(HPRatio(2400730) == 0);
    ForceAnimationPlayback(2400730, 103064, false, false, false);
});

// 孤独な老婆_アニメ制御_待機へ
$Event(12400512, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(
        (CharacterHasSpEffect(2400730, 151) || CharacterHasSpEffect(2400730, 153))
            && HPRatio(2400730) != 0);
    if (!EventFlag(1185)) {
        GotoIf(L1, EventFlag(9432));
        ForceAnimationPlayback(2400730, 103060, false, false, false);
        Goto(L9);
L1:
        ForceAnimationPlayback(2400730, 103061, false, false, false);
    } else {
L0:
        ForceAnimationPlayback(2400730, 103066, false, false, false);
        Goto(L9);
    }
L9:
    WaitFixedTimeFrames(5);
    RestartEvent();
});

// 孤独な老婆_アニメ制御_おびえる
$Event(12400513, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(
        EventFlag(9432)
            && (EventFlag(1181)
                || EventFlag(1184)
                || EventFlag(1186)
                || EventFlag(1187)
                || EventFlag(1188)));
    ForceAnimationPlayback(2400730, 103061, false, false, false);
    WaitFor(!EventFlag(9432));
    ForceAnimationPlayback(2400730, 103060, false, false, false);
    RestartEvent();
});

// 孤独な老婆_置き手紙
$Event(12400514, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    GotoIf(L0, EventFlag(1187));
    GotoIf(L1, EventFlag(1189));
    EndEvent();
L0:
    WaitFor(ActionButtonInArea(2400020, 2400731));
    DisplayGenericDialog(14001000, PromptType.OKCANCEL, NumberofOptions.OneButton, 2400731, 3);
    SetEventFlag(72400919, ON);
    RestartEvent();
L1:
    WaitFor(ActionButtonInArea(2400020, 2400731));
    DisplayGenericDialog(14001001, PromptType.OKCANCEL, NumberofOptions.OneButton, 2400731, 3);
    RestartEvent();
});

// 娼婦_初期化
$Event(12400520, Default, function() {
    if (CharacterType(10000, TargetType.Alive)) {
        if (EventFlag(1232)) {
            BatchSetEventFlags(1220, 1239, OFF);
            SetEventFlag(1224, ON);
        }
L0:
        if (EventFlag(1233)) {
            BatchSetEventFlags(1220, 1239, OFF);
            SetEventFlag(1223, ON);
        }
L1:
        if (EventFlag(9802) && EventFlag(1224)) {
            BatchSetEventFlags(1220, 1239, OFF);
            SetEventFlag(1225, ON);
        }
L2:
        if (EventFlag(1225) && EventFlag(9464)) {
            BatchSetEventFlags(1220, 1239, OFF);
            SetEventFlag(1226, ON);
        }
L3:
        if (EventFlag(1226) && EventFlag(9461)) {
            BatchSetEventFlags(1220, 1239, OFF);
            SetEventFlag(1228, ON);
        }
L5:
        if (EventFlag(1220) && EventFlag(9802)) {
            BatchSetEventFlags(1220, 1239, OFF);
            SetEventFlag(1234, ON);
        }
L6:
        NoOp();
    }
L7:
    SetCharacterGravity(2400750, Disabled);
    SetCharacterMaphits(2400750, true);
    SetCharacterGravity(2400754, Disabled);
    SetCharacterMaphits(2400754, true);
    SetCharacterGravity(2400757, Disabled);
    SetCharacterMaphits(2400757, true);
    GotoIf(L0, EventFlag(1220));
    GotoIf(L1, EventFlag(1224));
    GotoIf(L2, EventFlag(1225));
    GotoIf(L3, EventFlag(1226));
    GotoIf(L4, EventFlag(1228));
    GotoIf(L4, EventFlag(1229));
    GotoIf(L4, EventFlag(1235));
    GotoIf(L5, EventFlag(1222));
    GotoIf(L5, EventFlag(1230));
    GotoIf(L6, EventFlag(1231));
    DeactivateObject(2400748, Disabled);
    ActivateMapPart(2404601, Disabled);
    SetCharacterBackreadState(2400750, true);
    SetCharacterBackreadState(2400754, true);
    SetCharacterBackreadState(2400757, true);
    EndEvent();
L0:
    DeactivateObject(2400748, Disabled);
    ActivateMapPart(2404601, Disabled);
    SetCharacterBackreadState(2400750, true);
    SetCharacterBackreadState(2400754, true);
    SetCharacterBackreadState(2400757, true);
    EndEvent();
L1:
    DeactivateObject(2400748, Enabled);
    ActivateMapPart(2404601, Disabled);
    SetCharacterBackreadState(2400750, false);
    SetCharacterBackreadState(2400754, true);
    SetCharacterBackreadState(2400757, true);
    ForceAnimationPlayback(2400750, 103080, false, false, false);
    IssueShortWarpRequest(2400750, TargetEntityType.Area, 2404502, -1);
    EndEvent();
L2:
    DeactivateObject(2400748, Enabled);
    ActivateMapPart(2404601, Disabled);
    SetCharacterBackreadState(2400750, true);
    SetCharacterBackreadState(2400754, false);
    SetCharacterBackreadState(2400757, true);
    ForceAnimationPlayback(2400754, 103081, false, false, false);
    IssueShortWarpRequest(2400754, TargetEntityType.Area, 2404504, -1);
    EndEvent();
L3:
    DeactivateObject(2400748, Enabled);
    ActivateMapPart(2404601, Disabled);
    SetCharacterBackreadState(2400750, true);
    SetCharacterBackreadState(2400754, true);
    SetCharacterBackreadState(2400757, false);
    ForceAnimationPlayback(2400757, 103081, false, false, false);
    IssueShortWarpRequest(2400757, TargetEntityType.Area, 2404504, -1);
    EndEvent();
L4:
    DeactivateObject(2400748, Enabled);
    ActivateMapPart(2404601, Enabled);
    SetCharacterBackreadState(2400750, true);
    SetCharacterBackreadState(2400754, true);
    SetCharacterBackreadState(2400757, true);
    EndEvent();
L5:
    DeactivateObject(2400748, Enabled);
    ActivateMapPart(2404601, Disabled);
    SetCharacterBackreadState(2400750, false);
    ChangeCharacterEnableState(2400750, Enabled);
    SetCharacterBackreadState(2400754, true);
    ChangeCharacterEnableState(2400754, Disabled);
    SetCharacterBackreadState(2400757, true);
    ChangeCharacterEnableState(2400757, Disabled);
    EzstateInstructionRequest(2400750, 5, 1);
    IssueShortWarpRequest(2400750, TargetEntityType.Area, 2404502, -1);
    ForceCharacterTreasure(2400750);
    EndEvent();
L6:
    DeactivateObject(2400748, Enabled);
    ActivateMapPart(2404601, Disabled);
    SetCharacterBackreadState(2400750, true);
    ChangeCharacterEnableState(2400750, Disabled);
    SetCharacterBackreadState(2400754, true);
    ChangeCharacterEnableState(2400754, Disabled);
    SetCharacterBackreadState(2400757, true);
    ChangeCharacterEnableState(2400757, Disabled);
    ForceCharacterTreasure(2400750);
    EndEvent();
});

// 娼婦_死亡
$Event(12400521, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    EndIf(EventFlag(1222));
    EndIf(EventFlag(1230));
    EndIf(EventFlag(1231));
    WaitFor(
        CharacterDead(2400750)
            || CharacterDead(2400754)
            || CharacterDead(2400757)
            || CharacterDead(2400758));
    BatchSetEventFlags(1220, 1239, OFF);
    SetEventFlag(1222, ON);
    SaveRequest(0);
});

// 娼婦_血糊制御
$Event(12400522, Default, function() {
    if (!ThisEvent()) {
        if (!EventFlag(1230)) {
            if (!EventFlag(1231)) {
                ActivateMapPart(2404600, Disabled);
                WaitFor(EventFlag(6001));
                EndEvent();
            }
        }
    }
L0:
    ActivateMapPart(2404600, Enabled);
    EndEvent();
});

// 娼婦_避難所へ移動中状態へ
$Event(12400523, Default, function() {
    WaitFor(EventFlag(72400510));
    SetEventFlag(72400510, OFF);
    BatchSetEventFlags(1220, 1239, OFF);
    SetEventFlag(1232, ON);
});

// 娼婦_診療所へ移動中状態へ
$Event(12400524, Default, function() {
    WaitFor(EventFlag(72400511));
    SetEventFlag(72400511, OFF);
    BatchSetEventFlags(1220, 1239, OFF);
    SetEventFlag(1233, ON);
});

// 娼婦_血の施しを行った
$Event(12400525, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(EventFlag(72400499));
    SetEventFlag(72400499, OFF);
    if (EventFlag(72400950)) {
        if (EventFlag(72400951)) {
            if (EventFlag(72400952)) {
                if (EventFlag(72400953)) {
                    if (EventFlag(72400954)) {
                    }
L4:
                    SetEventFlag(72400954, ON);
                }
L3:
                SetEventFlag(72400953, ON);
            }
L2:
            SetEventFlag(72400952, ON);
        }
L1:
        SetEventFlag(72400951, ON);
    }
L0:
    SetEventFlag(72400950, ON);
    WaitFor(EventFlag(1304) || EventFlag(1305));
    if (EventFlag(72400940)) {
        if (EventFlag(72400941)) {
            if (EventFlag(72400942)) {
                if (EventFlag(72400943)) {
                    if (EventFlag(72400944)) {
                    }
L9:
                    SetEventFlag(72400944, ON);
                }
L8:
                SetEventFlag(72400943, ON);
            }
L7:
            SetEventFlag(72400942, ON);
        }
L6:
        SetEventFlag(72400941, ON);
    }
L5:
    SetEventFlag(72400940, ON);
});

// 娼婦_血の施しCD解除
$Event(12400531, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    if (!PlayerHasItem(ItemType.Goods, 701)) {
        SetEventFlag(72400498, OFF);
        EndEvent();
    }
L0:
    EndEvent();
});

// 偏屈な老人_初期化
$Event(12400560, Default, function() {
    if (CharacterType(10000, TargetType.Alive)) {
        if (EventFlag(1168)) {
            BatchSetEventFlags(1160, 1179, OFF);
            SetEventFlag(1164, ON);
        }
L0:
        if (EventFlag(1169)) {
            BatchSetEventFlags(1160, 1179, OFF);
            SetEventFlag(1163, ON);
        }
L1:
        if (EventFlag(9802) && EventFlag(1164)) {
            BatchSetEventFlags(1160, 1179, OFF);
            SetEventFlag(1165, ON);
        }
L2:
        if (EventFlag(1160) && EventFlag(9802)) {
            BatchSetEventFlags(1160, 1179, OFF);
            SetEventFlag(1170, ON);
        }
    }
L3:
    SetCharacterGravity(2400765, Disabled);
    SetCharacterMaphits(2400765, true);
    GotoIf(L4, EventFlag(1161));
    GotoIf(L1, EventFlag(1164));
    GotoIf(L1, EventFlag(1165));
    GotoIf(L3, EventFlag(1166));
    GotoIf(L2, EventFlag(1167));
    SetCharacterBackreadState(2400765, true);
    EndEvent();
L1:
    SetCharacterBackreadState(2400765, false);
    ForceAnimationPlayback(2400765, 103050, false, false, false);
    IssueShortWarpRequest(2400765, TargetEntityType.Area, 2404500, -1);
    EndEvent();
L3:
    SetCharacterBackreadState(2400765, true);
    EzstateInstructionRequest(2400765, 2, 1);
    IssueShortWarpRequest(2400765, TargetEntityType.Area, 2404500, -1);
    ForceCharacterTreasure(2400765);
    EndEvent();
L4:
    SetCharacterBackreadState(2400765, false);
    EzstateInstructionRequest(2400765, 2, 1);
    IssueShortWarpRequest(2400765, TargetEntityType.Area, 2404500, -1);
    ForceCharacterTreasure(2400765);
    EndEvent();
});

// 偏屈な老人_死亡
$Event(12400561, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    EndIf(EventFlag(1161));
    EndIf(EventFlag(1166));
    WaitFor(CharacterDead(2400765));
    BatchSetEventFlags(1160, 1179, OFF);
    SetEventFlag(1161, ON);
    SaveRequest(0);
});

// 偏屈な老人_娼婦＆尼僧会話発生
$Event(12400563, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    if (!EventFlag(72400330)) {
        WaitFor(
            (EventFlag(1304)
                || EventFlag(1305)
                || EventFlag(1306)
                || EventFlag(1307)
                || EventFlag(1308))
                && (EventFlag(1224) || EventFlag(1225) || EventFlag(1226) || EventFlag(1227)));
        SetEventFlag(72400330, ON);
    }
L0:
    WaitFor(
        (EventFlag(1312) || EventFlag(1303) || EventFlag(1317))
            || (EventFlag(1228)
                || EventFlag(1229)
                || EventFlag(1235)
                || EventFlag(1236)
                || EventFlag(1230)
                || EventFlag(1231)
                || EventFlag(1222)));
    SetEventFlag(72400330, OFF);
});

// 偏屈な老人_老婆会話発生
$Event(12400564, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    if (!EventFlag(72400331)) {
        WaitFor(EventFlag(1188) && EventFlag(1164));
        SetEventFlag(72400331, ON);
    }
L0:
    WaitFor(EventFlag(1189) || EventFlag(1191) || EventFlag(1183));
    SetEventFlag(72400331, OFF);
});

// 偏屈な老人_盲人会話発生
$Event(12400565, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    if (!EventFlag(72400332)) {
        WaitFor(
            EventFlag(1100)
                || EventFlag(1101)
                || EventFlag(1102)
                || EventFlag(1103)
                || EventFlag(1104)
                || EventFlag(1105));
        SetEventFlag(72400332, ON);
    }
L0:
    WaitFor(EventFlag(1108) || EventFlag(1106));
    SetEventFlag(72400332, OFF);
});

// 偏屈な老人_避難所へ移動中状態へ
$Event(12400566, Default, function() {
    WaitFor(EventFlag(72400970));
    SetEventFlag(72400970, OFF);
    BatchSetEventFlags(1160, 1179, OFF);
    SetEventFlag(1168, ON);
    RestartEvent();
});

// 偏屈な老人_診療所へ移動中状態へ
$Event(12400567, Default, function() {
    WaitFor(EventFlag(72400971));
    SetEventFlag(72400971, OFF);
    BatchSetEventFlags(1160, 1179, OFF);
    SetEventFlag(1169, ON);
    RestartEvent();
});

// 偏屈な老人_血糊制御
$Event(12400568, Default, function() {
    if (!ThisEvent()) {
        if (!EventFlag(1166)) {
            ActivateMapPart(2404603, Disabled);
            WaitFor(EventFlag(6001));
            EndEvent();
        }
    }
L0:
    ActivateMapPart(2404603, Enabled);
    EndEvent();
});

// 偏屈な老人_アニメ制御_死亡
$Event(12400569, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    EndIf(EventFlag(1161));
    EndIf(EventFlag(1166));
    WaitFor(HPRatio(2400765) == 0);
    ForceAnimationPlayback(2400765, 103053, false, false, false);
});

// 偏屈な老人_アニメ制御_被ダメージ
$Event(12400570, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(HasDamageType(2400765, -1, DamageType.Unspecified) && HPRatio(2400765) != 0);
    ForceAnimationPlayback(2400765, 103052, false, false, false);
    RestartEvent();
});

// 偏屈な老人_アニメ制御_被ダメージ後
$Event(12400571, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(CharacterHasSpEffect(2400765, 151) && HPRatio(2400765) != 0);
    if (!(EventFlag(9432) && !EventFlag(1165))) {
        ForceAnimationPlayback(2400765, 103050, false, false, false);
    } else {
L0:
        ForceAnimationPlayback(2400765, 103051, false, false, false);
        Goto(L9);
    }
L9:
    WaitFixedTimeFrames(5);
    RestartEvent();
});

// 偏屈な老人_アニメ制御_おびえる
$Event(12400572, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(EventFlag(9432) && !EventFlag(1165));
    ForceAnimationPlayback(2400765, 103051, false, false, false);
    WaitFor(!EventFlag(9432));
    ForceAnimationPlayback(2400765, 103050, false, false, false);
    RestartEvent();
});

// 生贄街の聖女_話しかけ開始
$Event(12400580, Default, function() {
    EndIf(ThisEvent());
    area = InArea(10000, 2402280);
    flag = EventFlag(72400400);
    WaitFor(area || flag);
    EndIf(flag.Passed);
    SetMapSoundState(2403300, Enabled);
});

// 生贄街の聖女_聖女ビーストになった
$Event(12400581, Default, function() {
    WaitFor(EventFlag(72400400));
    SetMapSoundState(2403300, Disabled);
});

// 生贄街の聖女_ロウソクマップパーツを消す
$Event(12400582, Default, function() {
    ActivateMapPart(2404010, Enabled);
    WaitFor(EventFlag(12401802));
    ActivateMapPart(2404010, Disabled);
});

// 血族狩り_初期化
$Event(12400590, Default, function() {
    if (CharacterType(10000, TargetType.Alive)) {
        if (EventFlag(1340) && EventFlag(9801)) {
            BatchSetEventFlags(1340, 1359, OFF);
            SetEventFlag(1344, ON);
        }
L1:
        if (EventFlag(1351) && EventFlag(72500359)) {
            BatchSetEventFlags(1340, 1359, OFF);
            SetEventFlag(1343, ON);
        }
L2:
        SetEventFlag(72400471, OFF);
    }
L0:
    SetCharacterGravity(2400762, Disabled);
    SetCharacterMaphits(2400762, true);
    GotoIf(L0, EventFlag(1340));
    GotoIf(L1, EventFlag(1341));
    GotoIf(L2, EventFlag(1342));
    GotoIf(L3, EventFlag(1343));
    GotoIf(L4, EventFlag(1344));
    GotoIf(L5, EventFlag(1345));
    GotoIf(L6, EventFlag(1346));
    GotoIf(L4, EventFlag(1347));
    SetCharacterBackreadState(2400760, true);
    SetCharacterBackreadState(2400762, true);
    SetCharacterBackreadState(2400763, true);
    DeactivateObject(2400761, Disabled);
    EndEvent();
L0:
    SetCharacterBackreadState(2400760, false);
    SetCharacterBackreadState(2400762, true);
    SetCharacterBackreadState(2400763, true);
    DeactivateObject(2400761, Disabled);
    if (!EventFlag(12405160)) {
        ForceAnimationPlayback(2400760, 103020, true, false, true);
        EndEvent();
    }
L7:
    EndEvent();
L1:
    SetCharacterBackreadState(2400760, false);
    SetCharacterBackreadState(2400762, true);
    SetCharacterBackreadState(2400763, true);
    DeactivateObject(2400761, Disabled);
    SetCharacterTeamType(2400760, TeamType.HostileNPC);
    EndEvent();
L2:
    SetCharacterBackreadState(2400760, true);
    SetCharacterBackreadState(2400762, true);
    SetCharacterBackreadState(2400763, true);
    DeactivateObject(2400761, Disabled);
    ChangeCharacterEnableState(2400760, Disabled);
    ForceCharacterTreasure(2400760);
    EndEvent();
L3:
    SetCharacterBackreadState(2400760, true);
    SetCharacterBackreadState(2400762, false);
    SetCharacterBackreadState(2400763, true);
    DeactivateObject(2400761, Enabled);
    IssueShortWarpRequest(2400762, TargetEntityType.Area, 2404508, -1);
    EzstateInstructionRequest(2400762, 11, 1);
    ForceCharacterTreasure(2400762);
    EndEvent();
L4:
    SetCharacterBackreadState(2400760, true);
    SetCharacterBackreadState(2400762, true);
    SetCharacterBackreadState(2400763, false);
    DeactivateObject(2400761, Disabled);
    SetCharacterTeamType(2400763, TeamType.FriendlyNPC);
    EndEvent();
L5:
    SetCharacterBackreadState(2400760, true);
    SetCharacterBackreadState(2400762, true);
    SetCharacterBackreadState(2400763, false);
    DeactivateObject(2400761, Disabled);
    SetCharacterTeamType(2400763, TeamType.HostileNPC);
    EndEvent();
L6:
    SetCharacterBackreadState(2400760, true);
    SetCharacterBackreadState(2400762, true);
    SetCharacterBackreadState(2400763, true);
    DeactivateObject(2400761, Disabled);
    ChangeCharacterEnableState(2400763, Disabled);
    ForceCharacterTreasure(2400763);
    EndEvent();
});

// 血族狩り_招待状を渡した
$Event(12400591, Default, function() {
    WaitFor(EventFlag(72400465));
    SetEventFlag(72400465, OFF);
    BatchSetEventFlags(1340, 1359, OFF);
    SetEventFlag(1347, ON);
    SaveRequest(0);
});

// 血族狩り_攻撃回数カウントイベント_XX
$Event(12400592, Default, function(entityId, eventFlagId) {
    EndIf(!CharacterType(10000, TargetType.Alive));
    SetEventFlag(eventFlagId, OFF);
    WaitFor(HasDamageType(entityId, 10000, DamageType.Unspecified));
    WaitFixedTimeFrames(1);
    WaitFor(HasDamageType(entityId, 10000, DamageType.Unspecified));
    WaitFixedTimeFrames(1);
    WaitFor(HasDamageType(entityId, 10000, DamageType.Unspecified));
    WaitFixedTimeFrames(1);
    SetEventFlag(eventFlagId, ON);
});

// 血族狩り_敵対_XX
$Event(12400593, Default, function(chrEntityId, eventFlagId, eventFlagId2) {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor((EventFlag(eventFlagId2) || HPRatio(chrEntityId) <= 0.9) && HPRatio(chrEntityId) != 0);
    SetCharacterTeamType(chrEntityId, TeamType.HostileNPC);
    BatchSetEventFlags(1340, 1359, OFF);
    SetEventFlag(eventFlagId, ON);
    SaveRequest(0);
});

// 血族狩り_死亡_XX
$Event(12400594, Default, function(chrEntityId, eventFlagId) {
    EndIf(ThisEventSlot());
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(CharacterDead(chrEntityId));
    BatchSetEventFlags(1340, 1359, OFF);
    SetEventFlag(eventFlagId, ON);
    SaveRequest(0);
});

// 感染者の乞食_初期化
$Event(12400610, Default, function() {
    SetEventFlag(72400362, OFF);
    SetEventFlag(72400921, OFF);
    SetEventFlag(72400924, OFF);
    SetCharacterGravity(2400756, Disabled);
    ForceAnimationPlayback(2400756, 7002, true, false, false);
    SetCharacterAIState(2400756, Disabled);
    SetCharacterBackreadState(2400756, true);
    GotoIf(L0, EventFlag(1205));
    GotoIf(L1, EventFlag(1206));
    GotoIf(L1, EventFlag(1207));
    GotoIf(L3, EventFlag(1210));
    SetCharacterBackreadState(2400755, true);
    SetCharacterBackreadState(2400759, true);
    SetCharacterBackreadState(2400220, false);
    EndEvent();
L0:
    if (!(EventValue(72400372, 2) != 0 || EventFlag(12405158))) {
        SetCharacterBackreadState(2400755, true);
        SetCharacterBackreadState(2400759, false);
        SetCharacterBackreadState(2400220, true);
        if (!EventFlag(12405157)) {
            ForceAnimationPlayback(2400759, 103074, false, false, false);
            EndEvent();
        }
L5:
        ForceAnimationPlayback(2400759, 103072, false, false, false);
        EndEvent();
    }
L2:
    SetCharacterBackreadState(2400755, false);
    SetCharacterBackreadState(2400759, true);
    SetCharacterBackreadState(2400220, true);
    if (!EventFlag(12405157)) {
        ForceAnimationPlayback(2400755, 103074, false, false, false);
        EndEvent();
    }
L4:
    ForceAnimationPlayback(2400755, 103072, false, false, false);
    EndEvent();
L1:
    SetCharacterBackreadState(2400755, false);
    SetCharacterBackreadState(2400759, true);
    SetCharacterBackreadState(2400220, true);
    ForceAnimationPlayback(2400755, 103072, false, false, false);
    EndEvent();
L3:
    SetCharacterBackreadState(2400755, true);
    ChangeCharacterEnableState(2400755, Disabled);
    SetCharacterBackreadState(2400759, true);
    ChangeCharacterEnableState(2400759, Disabled);
    SetCharacterBackreadState(2400220, true);
    ChangeCharacterEnableState(2400220, Disabled);
    ForceCharacterTreasure(2400755);
    EndEvent();
});

// 感染者の乞食_死亡
$Event(12400611, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    EndIf(EventFlag(1210));
    WaitFor(CharacterDead(2400755) || CharacterDead(2400756) || CharacterDead(2400759));
    BatchSetEventFlags(1200, 1219, OFF);
    SetEventFlag(1210, ON);
    if (CharacterDead(2400756)) {
        SetEventFlag(9432, OFF);
    }
L0:
    SaveRequest(0);
});

// 感染者の乞食_変身_XX
$Event(12400612, Default, function(chrEntityId, eventFlagId) {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(HPRatio(chrEntityId) < 0.5 && HPRatio(chrEntityId) != 0);
    SetEventFlag(eventFlagId, ON);
});

// 感染者の乞食_アニメ制御_死亡_XX
$Event(12400614, Default, function(chrEntityId, animationId) {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(HPRatio(chrEntityId) == 0 && CharacterHasSpEffect(chrEntityId, 155));
    ForceAnimationPlayback(chrEntityId, animationId, false, false, false);
});

// 感染者の乞食_アニメ制御_被ダメージ_XX
$Event(12400616, Default, function(chrEntityId) {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(
        HasDamageType(chrEntityId, 10000, DamageType.Unspecified)
            && HPRatio(chrEntityId) != 0
            && HPRatio(chrEntityId) > 0.5);
    GotoIf(L0, CharacterHasSpEffect(chrEntityId, 153));
    GotoIf(L1, CharacterHasSpEffect(chrEntityId, 155));
    RestartEvent();
L0:
    ForceAnimationPlayback(chrEntityId, 103079, false, false, false);
    RestartEvent();
L1:
    ForceAnimationPlayback(chrEntityId, 103130, false, false, false);
    RestartEvent();
});

// 感染者の乞食_アニメ制御_被ダメージから待機へ_XX
$Event(12400618, Default, function(chrEntityId) {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(CharacterHasSpEffect(chrEntityId, 154));
    ForceAnimationPlayback(chrEntityId, 103072, false, false, false);
    RestartEvent();
});

// 感染者の乞食_アニメ制御_立ち待機遷移から立ち待機へ_XX
$Event(12400620, Default, function(chrEntityId) {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(CharacterHasSpEffect(chrEntityId, 156));
    ForceAnimationPlayback(chrEntityId, 103072, false, false, false);
});

// 感染者の乞食_避難所状態へ
$Event(12400622, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    if (!EventFlag(1208)) {
        EndEvent();
    }
L0:
    BatchSetEventFlags(1200, 1219, OFF);
    SetEventFlag(1205, ON);
});

// 感染者の乞食_診療所状態へ
$Event(12400623, Default, function() {
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    if (!EventFlag(1209)) {
        EndEvent();
    }
L0:
    BatchSetEventFlags(1200, 1219, OFF);
    SetEventFlag(1204, ON);
});

// 感染者の乞食_満足
$Event(12400624, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    EndIf(!EventFlag(1205));
    WaitFor(
        (EventFlag(1106) || EventFlag(1108))
            && (EventFlag(1222)
                || EventFlag(1223)
                || EventFlag(1230)
                || EventFlag(1231)
                || EventFlag(1235)
                || EventFlag(1228)
                || EventFlag(1229)
                || EventFlag(1234))
            && (EventFlag(1303)
                || EventFlag(1308)
                || EventFlag(1309)
                || EventFlag(1315)
                || EventFlag(1310)
                || EventFlag(1312)
                || EventFlag(1316))
            && (EventFlag(1163) || EventFlag(1161) || EventFlag(1166) || EventFlag(1170))
            && (EventFlag(1183)
                || EventFlag(1190)
                || EventFlag(1189)
                || EventFlag(1191)
                || EventFlag(1195))
            && !EventFlag(72400934)
            && !EventFlag(72400935)
            && !EventFlag(72400936)
            && !EventFlag(72400937)
            && !EventFlag(72400938));
    BatchSetEventFlags(1200, 1219, OFF);
    SetEventFlag(1211, ON);
});

// 感染者の乞食_変身（2回目以降）_XX
$Event(12400625, Default, function(chrEntityId, eventFlagId) {
    EndIf(!CharacterType(10000, TargetType.Alive));
    EndIf(!EventFlag(1207));
    WaitFixedTimeFrames(30);
    WaitFor(
        (HasDamageType(chrEntityId, 10000, DamageType.Unspecified) || InArea(10000, 2404383))
            && EventFlag(1207)
            && CharacterBackreadStatus(chrEntityId)
            && HPRatio(chrEntityId) != 0);
    SetEventFlag(eventFlagId, ON);
});

// 感染者の乞食_変身（3回以上攻撃された）_XX
$Event(12400627, Default, function(chrEntityId, eventFlagId) {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(HasDamageType(chrEntityId, 10000, DamageType.Unspecified));
    WaitFixedTimeFrames(1);
    WaitFor(HasDamageType(chrEntityId, 10000, DamageType.Unspecified));
    WaitFixedTimeFrames(1);
    WaitFor(HasDamageType(chrEntityId, 10000, DamageType.Unspecified) && HPRatio(chrEntityId) != 0);
    SetEventFlag(eventFlagId, ON);
});

// 感染者の乞食_他NPC殺害
$Event(12400629, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    GotoIf(L6, !(EventFlag(1208) || EventFlag(1205) || EventFlag(1207)));
    GotoIf(L0, EventFlag(1208));
    GotoIf(L5, !EventFlag(72400360));
    GotoIf(L5, !AnyBatchEventFlags(70000200, 70000202));
L0:
    if (EventFlag(1164) || EventFlag(1165)) {
        BatchSetEventFlags(1160, 1179, OFF);
        SetEventFlag(1166, ON);
        SetEventFlag(72400934, ON);
    } else {
L1:
        if (EventFlag(1181)
            || EventFlag(1184)
            || EventFlag(1185)
            || EventFlag(1186)
            || EventFlag(1187)
            || EventFlag(1188)) {
            BatchSetEventFlags(1180, 1199, OFF);
            SetEventFlag(1191, ON);
            SetEventFlag(72400935, ON);
        } else {
L2:
            if (EventFlag(1304) || EventFlag(1305) || EventFlag(1306) || EventFlag(1307)) {
                BatchSetEventFlags(1300, 1319, OFF);
                SetEventFlag(1312, ON);
                SetEventFlag(72400936, ON);
            } else {
L3:
                if (EventFlag(1100)
                    || EventFlag(1101)
                    || EventFlag(1102)
                    || EventFlag(1103)
                    || EventFlag(1104)
                    || EventFlag(1105)) {
                    BatchSetEventFlags(1100, 1119, OFF);
                    SetEventFlag(1108, ON);
                    SetEventFlag(72400937, ON);
                } else {
L4:
                    GotoIf(L5, 
                        !(EventFlag(1224)
                            || EventFlag(1225)
                            || EventFlag(1226)
                            || EventFlag(1228)
                            || EventFlag(1229)));
                    BatchSetEventFlags(1220, 1239, OFF);
                    SetEventFlag(1231, ON);
                    SetEventFlag(72400938, ON);
                    Goto(L9);
                }
            }
        }
    }
L9:
    IncrementEventValue(72400375, 3, 7);
    IncrementEventValue(72400372, 2, 2);
    SetEventFlag(72400490, ON);
    GotoIf(L5, EventFlag(1208));
    EventValueOperation(70000200, 3, 1, 0, 1, CalculationType.Sub);
L5:
    EndEvent();
});

// NPC汎用_死亡した時に怯えるフラグを立てる
$Event(12400630, Default, function(chrEntityId) {
    GotoIf(L0, !CharacterType(10000, TargetType.Alive));
    WaitFor(HPRatio(chrEntityId) == 0 && HasDamageType(chrEntityId, 10000, DamageType.Unspecified));
    WaitFor(CharacterDead(chrEntityId));
    SetEventFlag(9432, ON);
    SetEventFlag(72400490, ON);
});

// 復讐者_初期化（聖堂街A）
$Event(12400650, Default, function() {
    if (CharacterType(10000, TargetType.Alive)) {
        if (EventFlag(1362) && EventFlag(72400520)) {
            BatchSetEventFlags(1360, 1379, OFF);
            SetEventFlag(1363, ON);
        }
        if (EventFlag(72400524)) {
            BatchSetEventFlags(1360, 1379, OFF);
            SetEventFlag(1368, ON);
            SetEventFlag(1376, ON);
        }
    }
L0:
    GotoIf(L0, AnyBatchEventFlags(1373, 1375));
    GotoIf(L1, EventFlag(1372));
    GotoIf(L2, EventFlag(1371));
    GotoIf(L3, EventFlag(1370));
    GotoIf(L4, EventFlag(1369));
    GotoIf(L5, EventFlag(1368));
    GotoIf(L6, AnyBatchEventFlags(1365, 1367));
    GotoIf(L7, AnyBatchEventFlags(1362, 1364));
    GotoIf(L8, AnyBatchEventFlags(1360, 1361));
L0:
    SetCharacterBackreadState(2400900, true);
    SetCharacterBackreadState(2400902, true);
    SetCharacterBackreadState(2400903, true);
    Goto(L9);
L1:
    SetCharacterBackreadState(2400900, true);
    SetCharacterBackreadState(2400902, false);
    SetCharacterTeamType(2400902, TeamType.HostileNPC);
    SetCharacterBackreadState(2400903, true);
    Goto(L9);
L2:
    SetCharacterBackreadState(2400900, true);
    SetCharacterBackreadState(2400902, true);
    SetCharacterBackreadState(2400903, false);
    ForceAnimationPlayback(2400903, 103031, true, false, false);
    Goto(L9);
L3:
    SetCharacterBackreadState(2400900, true);
    SetCharacterBackreadState(2400902, true);
    SetCharacterBackreadState(2400903, false);
    ForceAnimationPlayback(2400903, 103031, true, false, false);
    Goto(L9);
L4:
    GotoIf(S0, !EventFlag(1705));
    SetCharacterBackreadState(2400900, true);
    SetCharacterBackreadState(2400902, false);
    SetCharacterTeamType(2400902, TeamType.HostileNPC);
    SetCharacterBackreadState(2400903, true);
    Goto(L9);
S0:
    GotoIf(S1, !EventFlag(1704));
    SetCharacterBackreadState(2400900, true);
    SetCharacterBackreadState(2400902, true);
    SetCharacterBackreadState(2400903, false);
    SetCharacterTeamType(2400903, TeamType.HostileNPC);
    Goto(L9);
S1:
    GotoIf(S2, !EventFlag(1701));
    SetCharacterBackreadState(2400900, false);
    SetCharacterTeamType(2400900, TeamType.HostileNPC);
    SetCharacterBackreadState(2400902, true);
    SetCharacterBackreadState(2400903, true);
    Goto(L9);
S2:
    GotoIf(S3, !EventFlag(1703));
    SetCharacterBackreadState(2400900, true);
    SetCharacterBackreadState(2400902, true);
    SetCharacterBackreadState(2400903, true);
    Goto(L9);
    if (EventFlag(1702)) {
S3:
        SetCharacterBackreadState(2400900, true);
        SetCharacterBackreadState(2400902, true);
        SetCharacterBackreadState(2400903, true);
        Goto(L9);
    }
    SetCharacterBackreadState(2400900, true);
    SetCharacterBackreadState(2400902, true);
    SetCharacterBackreadState(2400903, true);
    Goto(L9);
L5:
    SetCharacterBackreadState(2400900, true);
    ChangeCharacterEnableState(2400900, Disabled);
    SetCharacterBackreadState(2400902, true);
    ChangeCharacterEnableState(2400902, Disabled);
    SetCharacterBackreadState(2400903, true);
    ChangeCharacterEnableState(2400903, Disabled);
    GotoIf(S4, !EventFlag(1705));
    ForceCharacterTreasure(2400902);
    Goto(L9);
S4:
    GotoIf(S5, !EventFlag(1704));
    ForceCharacterTreasure(2400903);
    Goto(L9);
S5:
    GotoIf(S6, !EventFlag(1701));
    ForceCharacterTreasure(2400900);
    Goto(L9);
S6:
    GotoIf(S7, !EventFlag(1703));
    Goto(L9);
S7:
    GotoIf(S8, !EventFlag(1702));
    Goto(L9);
S8:
    Goto(L9);
L6:
    SetCharacterBackreadState(2400900, true);
    SetCharacterBackreadState(2400902, true);
    SetCharacterBackreadState(2400903, true);
    Goto(L9);
L7:
    SetCharacterBackreadState(2400900, false);
    ForceAnimationPlayback(2400900, 103030, true, false, false);
    SetCharacterBackreadState(2400902, true);
    SetCharacterBackreadState(2400903, true);
    Goto(L9);
L8:
    SetCharacterBackreadState(2400900, true);
    SetCharacterBackreadState(2400902, true);
    SetCharacterBackreadState(2400903, true);
    Goto(L9);
L9:
    $InitializeEvent(0, 12400651);
    $InitializeEvent(0, 12400652);
    $InitializeEvent(0, 12400653);
    $InitializeEvent(0, 12400654);
    $InitializeEvent(0, 12400655);
    $InitializeEvent(0, 12400657);
    $InitializeEvent(0, 12400658);
    $InitializeEvent(0, 12400659);
    $InitializeEvent(0, 12400660);
    $InitializeEvent(0, 12400661);
    $InitializeEvent(0, 12400662);
    $InitializeEvent(0, 12400663);
    $InitializeEvent(0, 12400665);
});

// 復讐者_初対面（聖堂街A）
$Event(12400651, Default, function() {
    WaitFor(EventFlag(1360) && CharacterType(10000, TargetType.Alive) && InArea(10000, 2404390));
    BatchSetEventFlags(1360, 1379, OFF);
    SetEventFlag(1362, ON);
    SetCharacterBackreadState(2400900, false);
    ForceAnimationPlayback(2400900, 103030, true, false, false);
    SetCharacterBackreadState(2400902, true);
    SetCharacterBackreadState(2400903, true);
});

// 復讐者_面識有（聖堂街A）（ヘンリック出現）
$Event(12400652, Default, function() {
    WaitFor(EventFlag(1361) && CharacterType(10000, TargetType.Alive) && InArea(10000, 2404390));
    BatchSetEventFlags(1360, 1379, OFF);
    SetEventFlag(1363, ON);
    SetCharacterBackreadState(2400900, false);
    ForceAnimationPlayback(2400900, 103030, true, false, false);
    SetCharacterBackreadState(2400902, true);
    SetCharacterBackreadState(2400903, true);
});

// 復讐者_衰弱血糊
$Event(12400653, Default, function() {
    EndIf(ThisEvent());
    ActivateMapPart(2404610, Disabled);
    WaitFor(EventFlag(1370));
    ActivateMapPart(2404610, Enabled);
});

// 復讐者_衰弱2
$Event(12400654, Default, function() {
    GotoIf(L0, !ThisEvent());
    SetCharacterBackreadState(2400901, true);
    ChangeCharacterEnableState(2400901, Disabled);
    ForceCharacterTreasure(2400901);
    EndEvent();
    EndIf(!CharacterType(10000, TargetType.Alive));
L0:
    WaitFor(CharacterDead(2400901));
    EndIf(!EventFlag(1370));
    BatchSetEventFlags(1360, 1379, OFF);
    SetEventFlag(1371, ON);
});

// 復讐者_NPC2出現
$Event(12400655, Default, function() {
    EndIf(ThisEvent());
    SetCharacterBackreadState(2400901, true);
    WaitFor(EventFlag(1370));
    SetCharacterBackreadState(2400901, false);
});

// 復讐者_闇落ち
$Event(12400656, Default, function() {
    EndIf(ThisEvent());
    WaitFor(CharacterType(10000, TargetType.Alive) && EventFlag(1374) && EventFlag(9802));
    BatchSetEventFlags(1360, 1379, OFF);
    SetEventFlag(1372, ON);
    SetCharacterBackreadState(2400900, true);
    SetCharacterBackreadState(2400902, false);
    SetCharacterTeamType(2400902, TeamType.HostileNPC);
    SetCharacterBackreadState(2400903, true);
});

// 復讐者_死亡（聖堂街A）
$Event(12400657, Default, function() {
    EndIf(ThisEvent());
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(CharacterDead(2400900) || CharacterDead(2400902) || CharacterDead(2400903));
    if (!EventFlag(1369)) {
        BatchSetEventFlags(1700, 1705, OFF);
        if (AnyBatchEventFlags(1362, 1364)) {
            SetEventFlag(1701, ON);
        }
        if (AnyBatchEventFlags(1370, 1371)) {
            SetEventFlag(1704, ON);
        }
        if (EventFlag(1372)) {
            SetEventFlag(1705, ON);
        }
    }
    BatchSetEventFlags(1360, 1379, OFF);
    SetEventFlag(1368, ON);
    SaveRequest(0);
});

// 復讐者_敵対（聖堂街A）
$Event(12400658, Default, function() {
    EndIf(ThisEvent());
    WaitFor(EventFlag(72400526));
    BatchSetEventFlags(1700, 1705, OFF);
    if (AnyBatchEventFlags(1362, 1364)) {
        SetEventFlag(1701, ON);
    }
    if (AnyBatchEventFlags(1370, 1371)) {
        SetEventFlag(1704, ON);
    }
    if (EventFlag(1372)) {
        SetEventFlag(1705, ON);
    }
    BatchSetEventFlags(1360, 1379, OFF);
    SetEventFlag(1369, ON);
    SetCharacterTeamType(2400900, TeamType.HostileNPC);
    SaveRequest(0);
});

// 復讐者_攻撃回数カウント（聖堂街A）
$Event(12400659, Default, function() {
    EndIf(ThisEvent());
    WaitFor(CharacterDamagedBy(2400900, 10000));
    WaitFixedTimeFrames(1);
    WaitFor(CharacterDamagedBy(2400900, 10000));
    WaitFixedTimeFrames(1);
    WaitFor(CharacterDamagedBy(2400900, 10000));
    WaitFixedTimeFrames(1);
});

// 復讐者_一時的にいない（衰弱ルート）（保険）
$Event(12400660, Default, function() {
    EndIf(ThisEvent());
    WaitFor(EventFlag(1373));
    SetCharacterBackreadState(2400900, true);
    SetCharacterBackreadState(2400902, true);
    SetCharacterBackreadState(2400903, true);
});

// 復讐者_一時的にいない（闇堕ちルート）（保険）
$Event(12400661, Default, function() {
    EndIf(ThisEvent());
    WaitFor(EventFlag(1374));
    SetCharacterBackreadState(2400900, true);
    SetCharacterBackreadState(2400902, true);
    SetCharacterBackreadState(2400903, true);
});

// 復讐者_衰弱会話制御
$Event(12400662, Default, function() {
    WaitFor(EventFlag(1370) && EventFlag(72400530));
    ForceAnimationPlayback(2400903, 103034, true, false, false);
    WaitFor(!EventFlag(72400530));
    ForceAnimationPlayback(2400903, 103031, true, false, false);
    RestartEvent();
});

// 復讐者_衰弱中の被ダメで必ず死ぬ
$Event(12400663, Default, function() {
    EndIf(ThisEvent());
    WaitFor(
        (EventFlag(1370) || EventFlag(1371))
            && HasDamageType(2400903, 10000, DamageType.Unspecified));
    ForceAnimationPlayback(2400903, 103032, false, false, false);
    ForceCharacterDeath(2400903, true);
});

// 復讐者_ヘンリック戦開始後位置制御
$Event(12400665, Default, function() {
    EndIf(ThisEvent());
    WaitFor(EventFlag(1365) || EventFlag(1366) || EventFlag(1367));
    SetCharacterBackreadState(2400900, true);
    SetCharacterBackreadState(2400902, true);
    SetCharacterBackreadState(2400903, true);
});

// 避難所の盲人_初期化
$Event(12400700, Restart, function() {
    if (EventFlag(1106)) {
        ForceAnimationPlayback(2400700, 2250, false, false, false);
        ForceCharacterTreasure(2400700);
    }
L0:
    if (EventFlag(1108)) {
        SetCharacterBackreadState(2400700, true);
        ForceCharacterTreasure(2400700);
        ActivateMapPart(2404604, Enabled);
    }
L1:
    EndIf(!EventFlag(1109));
    SetEventFlag(1109, OFF);
});

// 避難所の盲人_受入中
$Event(12400701, Restart, function() {
    EndIf(ThisEvent());
    WaitFor(EventFlag(72400300));
    BatchSetEventFlags(1100, 1119, OFF);
    SetEventFlag(1101, ON);
});

// 避難所の盲人_惨劇1
$Event(12400702, Restart, function() {
    EndIf(ThisEvent());
    EndIf(EventFlag(1106));
    EndIf(EventFlag(1108));
    flag = AnyBatchEventFlags(12400720, 12400724);
    WaitFor(flag || EventFlag(1106) || EventFlag(1108));
    EndIf(!flag.Passed);
    BatchSetEventFlags(1100, 1119, OFF);
    SetEventFlag(1102, ON);
});

// 避難所の盲人_惨劇2
$Event(12400703, Restart, function() {
    EndIf(ThisEvent());
    EndIf(EventFlag(1106));
    EndIf(EventFlag(1108));
    flag = EventFlag(72400985);
    WaitFor(flag || EventFlag(1106) || EventFlag(1108));
    EndIf(!flag.Passed);
    BatchSetEventFlags(1100, 1119, OFF);
    SetEventFlag(1103, ON);
});

// 避難所の盲人_依頼成功
$Event(12400704, Restart, function() {
    EndIf(ThisEvent());
    EndIf(EventFlag(1106));
    EndIf(EventFlag(1108));
    flag = EventFlag(1164) || EventFlag(1165) || EventFlag(1167);
    flag2 = EventFlag(1181) || EventFlag(1185) || EventFlag(1186) || EventFlag(1188);
    flag3 = EventFlag(1224) || EventFlag(1225) || EventFlag(1226);
    flag4 = EventFlag(1304) || EventFlag(1305) || EventFlag(1307) || EventFlag(1308);
    flag5 = EventFlag(1106) || EventFlag(1108);
    flag6 = flag && flag2 && flag3 && flag4;
    WaitFor(flag6 || flag5);
    EndIf(flag5.Passed);
    BatchSetEventFlags(1100, 1119, OFF);
    SetEventFlag(1104, ON);
});

// 避難所の盲人_依頼失敗
$Event(12400705, Restart, function() {
    EndIf(ThisEvent());
    EndIf(EventFlag(1106));
    EndIf(EventFlag(1108));
    flag = !EventFlag(1164) && !EventFlag(1165) && !EventFlag(1167);
    flag2 = !EventFlag(1181) && !EventFlag(1185) && !EventFlag(1186) && !EventFlag(1188);
    flag3 = !EventFlag(1224) && !EventFlag(1225) && !EventFlag(1226);
    flag4 = !EventFlag(1304) && !EventFlag(1305) && !EventFlag(1307) && !EventFlag(1308);
    flag5 = EventFlag(1106) || EventFlag(1108);
    WaitFor(flag5 || ((flag || flag2 || flag3 || flag4) && AllBatchEventFlags(12400708, 12400711)));
    EndIf(flag5.Passed);
    BatchSetEventFlags(1100, 1119, OFF);
    SetEventFlag(1105, ON);
});

// 避難所の盲人_死亡
$Event(12400706, Restart, function() {
    EndIf(EventFlag(1106));
L0:
    WaitFor(CharacterDead(2400700) && !EventFlag(1108));
    BatchSetEventFlags(1100, 1119, OFF);
    SetEventFlag(1106, ON);
    SaveRequest(0);
});

// 避難所の盲人_避難人数カウント
$Event(12400707, Restart, function() {
    WaitFor(EventValue(12400733, 3) >= 3);
    SetEventFlag(72400309, ON);
});

// 避難所の盲人_住人を保護_XX
$Event(12400708, Restart, function(eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4, value) {
    EndIf(ThisEventSlot());
    flag = EventFlag(eventFlagId);
    flag2 |= flag || EventFlag(eventFlagId3) || EventFlag(eventFlagId4);
    if (value == 1) {
        flag2 |= EventFlag(1315);
    }
    WaitFor(flag2);
    EndIf(!flag.Passed);
    IncrementEventValue(12400733, 3, 5);
    SetEventFlag(72400313, ON);
    BatchSetEventFlags(72400314, 72400319, OFF);
    SetEventFlag(eventFlagId2, ON);
});

// 避難所の盲人_最後の避難者_行き先判定
$Event(12400713, Restart, function(eventFlagId, eventFlagId2) {
    flag = EventFlag(eventFlagId);
    WaitFor(flag || EventFlag(eventFlagId2));
    if (flag.Passed) {
        SetEventFlag(72400308, OFF);
        SetEventFlag(72400307, ON);
        EndEvent();
    }
L0:
    SetEventFlag(72400307, OFF);
    SetEventFlag(72400308, ON);
});

// 避難所の盲人_惨劇1_人物特定_老人
$Event(12400720, Restart, function() {
    EndIf(ThisEvent());
    WaitFor(EventFlag(1161) || EventFlag(1166));
    SetEventFlag(12400724, ON);
    SetEventState(12400721, 0, EventEndType.End);
    SetEventState(12400722, 0, EventEndType.End);
    SetEventState(12400723, 0, EventEndType.End);
    SetEventState(12400728, 0, EventEndType.End);
});

// 避難所の盲人_惨劇1_人物特定_老婆
$Event(12400721, Restart, function() {
    EndIf(ThisEvent());
    WaitFor(EventFlag(1183) || EventFlag(1189) || EventFlag(1191));
    SetEventFlag(12400725, ON);
    SetEventState(12400720, 0, EventEndType.End);
    SetEventState(12400722, 0, EventEndType.End);
    SetEventState(12400723, 0, EventEndType.End);
    SetEventState(12400729, 0, EventEndType.End);
});

// 避難所の盲人_惨劇1_人物特定_娼婦
$Event(12400722, Restart, function() {
    EndIf(ThisEvent());
    WaitFor(EventFlag(1222) || EventFlag(1230) || EventFlag(1231));
    SetEventFlag(12400726, ON);
    SetEventState(12400720, 0, EventEndType.End);
    SetEventState(12400721, 0, EventEndType.End);
    SetEventState(12400723, 0, EventEndType.End);
    SetEventState(12400730, 0, EventEndType.End);
});

// 避難所の盲人_惨劇1_人物特定_尼僧
$Event(12400723, Restart, function() {
    EndIf(ThisEvent());
    WaitFor(EventFlag(1303) || EventFlag(1312));
    SetEventFlag(12400727, ON);
    SetEventState(12400720, 0, EventEndType.End);
    SetEventState(12400721, 0, EventEndType.End);
    SetEventState(12400722, 0, EventEndType.End);
    SetEventState(12400731, 0, EventEndType.End);
});

// 避難所の盲人_惨劇2_人物特定_老人
$Event(12400728, Restart, function() {
    EndIf(ThisEvent());
    WaitFor(AnyBatchEventFlags(12400720, 12400723));
    WaitFor(EventFlag(1161) || EventFlag(1166));
    SetEventFlag(72400985, ON);
    SetEventState(12400729, 0, EventEndType.End);
    SetEventState(12400730, 0, EventEndType.End);
    SetEventState(12400731, 0, EventEndType.End);
});

// 避難所の盲人_惨劇2_人物特定_老婆
$Event(12400729, Restart, function() {
    EndIf(ThisEvent());
    WaitFor(AnyBatchEventFlags(12400720, 12400723));
    WaitFor(EventFlag(1183) || EventFlag(1189) || EventFlag(1191));
    SetEventFlag(72400985, ON);
    SetEventState(12400728, 0, EventEndType.End);
    SetEventState(12400730, 0, EventEndType.End);
    SetEventState(12400731, 0, EventEndType.End);
});

// 避難所の盲人_惨劇2_人物特定_娼婦
$Event(12400730, Restart, function() {
    EndIf(ThisEvent());
    WaitFor(AnyBatchEventFlags(12400720, 12400723));
    WaitFor(EventFlag(1222) || EventFlag(1230) || EventFlag(1231));
    SetEventFlag(72400985, ON);
    SetEventState(12400728, 0, EventEndType.End);
    SetEventState(12400729, 0, EventEndType.End);
    SetEventState(12400731, 0, EventEndType.End);
});

// 避難所の盲人_惨劇2_人物特定_尼僧
$Event(12400731, Restart, function() {
    EndIf(ThisEvent());
    WaitFor(AnyBatchEventFlags(12400720, 12400723));
    WaitFor(EventFlag(1303) || EventFlag(1312));
    SetEventFlag(72400985, ON);
    SetEventState(12400728, 0, EventEndType.End);
    SetEventState(12400729, 0, EventEndType.End);
    SetEventState(12400730, 0, EventEndType.End);
});

// 避難所の盲人_殴られて会話できない
$Event(12400732, Restart, function() {
    WaitFor(HasDamageType(2400700, -1, DamageType.Unspecified) && EventFlag(72400981));
    SetEventFlag(1109, ON);
});

// 避難所の盲人_乞食に殺される
$Event(12400737, Restart, function() {
    EndIf(EventFlag(1108));
    ActivateMapPart(2404604, Disabled);
L0:
    WaitFor(EventFlag(1108));
    ActivateMapPart(2404604, Enabled);
    ForceCharacterTreasure(2400700);
});

// 避難所の盲人_怯える
$Event(12400738, Restart, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(EventFlag(9432));
    SetSpEffect(2400700, 5401, false);
    WaitFixedTimeFrames(1);
    ForceAnimationPlayback(2400700, 7000, false, false, false);
    WaitFor(!EventFlag(9432));
    SetSpEffect(2400700, 5402, false);
    WaitFixedTimeFrames(1);
    ForceAnimationPlayback(2400700, 0, false, false, false);
    RestartEvent();
});

// 囚われた尼僧_初期化
$Event(12400900, Default, function() {
    if (CharacterType(10000, TargetType.Alive)) {
        if (EventFlag(1313)) {
            BatchSetEventFlags(1300, 1319, OFF);
            SetEventFlag(1304, ON);
        }
L1:
        if (EventFlag(72400942)
            && EventFlag(72400380)
            && (EventFlag(1304) || EventFlag(1305))
            && (EventFlag(1224) || EventFlag(1225) || EventFlag(1226) || EventFlag(1227))) {
            BatchSetEventFlags(1300, 1319, OFF);
            SetEventFlag(1306, ON);
            BatchSetEventFlags(1220, 1239, OFF);
            SetEventFlag(1230, ON);
            Goto(L2);
        }
L2:
        GotoIf(L5, !EventFlag(9802));
        GotoIf(L3, EventFlag(1304));
        GotoIf(L3, EventFlag(1305));
        GotoIf(L4, EventFlag(1306));
        Goto(L5);
L4:
        BatchSetEventFlags(1300, 1319, OFF);
        SetEventFlag(1308, ON);
        Goto(L5);
L3:
        BatchSetEventFlags(1300, 1319, OFF);
        SetEventFlag(1307, ON);
        Goto(L5);
L5:
        SetEventFlag(72400393, OFF);
    }
L6:
    SetCharacterGravity(2400770, Disabled);
    SetCharacterMaphits(2400770, true);
    SetCharacterGravity(2400772, Disabled);
    SetCharacterMaphits(2400772, true);
    SetCharacterGravity(2400774, Disabled);
    SetCharacterMaphits(2400774, true);
    GotoIf(L0, EventFlag(1304));
    GotoIf(L0, EventFlag(1305));
    GotoIf(L4, EventFlag(1306));
    GotoIf(L1, EventFlag(1307));
    GotoIf(L2, EventFlag(1308));
    GotoIf(L3, EventFlag(1312));
    GotoIf(L5, EventFlag(1317));
    GotoIf(L6, EventFlag(1303));
    SetCharacterBackreadState(2400770, true);
    SetCharacterBackreadState(2400772, true);
    SetCharacterBackreadState(2400774, true);
    SetCharacterBackreadState(2400775, true);
    EndEvent();
L0:
    SetCharacterBackreadState(2400770, false);
    SetCharacterBackreadState(2400772, true);
    SetCharacterBackreadState(2400774, true);
    SetCharacterBackreadState(2400775, true);
    ForceAnimationPlayback(2400770, 103096, true, false, true);
    IssueShortWarpRequest(2400770, TargetEntityType.Area, 2404503, -1);
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    SetEventFlag(72400491, ON);
    EndEvent();
L4:
    SetCharacterBackreadState(2400770, true);
    SetCharacterBackreadState(2400772, true);
    SetCharacterBackreadState(2400774, false);
    SetCharacterBackreadState(2400775, true);
    ReproduceObjectDestruction(2400773, 1);
    ForceAnimationPlayback(2400774, 103096, true, false, true);
    IssueShortWarpRequest(2400774, TargetEntityType.Area, 2404503, -1);
    EndEvent();
L1:
    SetCharacterBackreadState(2400770, true);
    SetCharacterBackreadState(2400772, false);
    SetCharacterBackreadState(2400774, true);
    SetCharacterBackreadState(2400775, true);
    ForceAnimationPlayback(2400772, 103096, true, false, true);
    IssueShortWarpRequest(2400772, TargetEntityType.Area, 2404503, -1);
    EndEvent();
L2:
    SetCharacterBackreadState(2400770, true);
    SetCharacterBackreadState(2400772, true);
    SetCharacterBackreadState(2400774, true);
    SetCharacterBackreadState(2400775, false);
    ReproduceObjectDestruction(2400773, 1);
    SetCharacterAIState(2400775, Disabled);
    WarpCharacterAndSetFloor(2400775, TargetEntityType.Area, 2404381, -1, 2404100);
    SetCharacterTeamType(2400775, TeamType.HostileNPC);
    EndEvent();
L3:
    SetCharacterBackreadState(2400770, true);
    ChangeCharacterEnableState(2400770, Disabled);
    SetCharacterBackreadState(2400772, true);
    ChangeCharacterEnableState(2400772, Disabled);
    SetCharacterBackreadState(2400774, true);
    ChangeCharacterEnableState(2400774, Disabled);
    SetCharacterBackreadState(2400775, true);
    ChangeCharacterEnableState(2400775, Disabled);
    ReproduceObjectDestruction(2400773, 1);
    EzstateInstructionRequest(2400770, 8, 1);
    IssueShortWarpRequest(2400770, TargetEntityType.Area, 2404506, -1);
    WaitFixedTimeFrames(1);
    ForceCharacterTreasure(2400770);
    EndEvent();
L5:
    SetCharacterBackreadState(2400770, true);
    ChangeCharacterEnableState(2400770, Disabled);
    SetCharacterBackreadState(2400772, true);
    ChangeCharacterEnableState(2400772, Disabled);
    SetCharacterBackreadState(2400774, true);
    ChangeCharacterEnableState(2400774, Disabled);
    SetCharacterBackreadState(2400775, true);
    ChangeCharacterEnableState(2400775, Disabled);
    ReproduceObjectDestruction(2400773, 1);
    SetCharacterAIState(2400775, Disabled);
    WarpCharacterAndSetFloor(2400775, TargetEntityType.Area, 2404381, -1, 2404100);
    WaitFixedTimeFrames(1);
    ForceCharacterTreasure(2400775);
    EndEvent();
L6:
    SetCharacterBackreadState(2400770, false);
    ChangeCharacterEnableState(2400770, Enabled);
    SetCharacterBackreadState(2400772, true);
    ChangeCharacterEnableState(2400772, Disabled);
    SetCharacterBackreadState(2400774, true);
    ChangeCharacterEnableState(2400774, Disabled);
    SetCharacterBackreadState(2400775, true);
    ChangeCharacterEnableState(2400775, Disabled);
    ReproduceObjectDestruction(2400773, 1);
    EzstateInstructionRequest(2400770, 8, 1);
    IssueShortWarpRequest(2400770, TargetEntityType.Area, 2404506, -1);
    WaitFixedTimeFrames(1);
    ForceCharacterTreasure(2400770);
    EndEvent();
});

// 囚われた尼僧_娼婦に嫉妬状態へ
$Event(12400901, Default, function() {
    WaitFor(EventFlag(72400394));
    SetEventFlag(72400394, OFF);
    if (!(EventFlag(1304) && EventFlag(72400380))) {
        EndEvent();
    }
L0:
    BatchSetEventFlags(1300, 1319, OFF);
    SetEventFlag(1305, ON);
});

// 囚われた尼僧_アニメ制御_チラ見終了_XX
$Event(12400940, Default, function(chrEntityId) {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(EventFlag(72400955));
    WaitFor(CharacterHasSpEffect(chrEntityId, 157) && !EventFlag(72400955));
    ForceAnimationPlayback(chrEntityId, 103106, false, false, false);
    RestartEvent();
});

// 囚われた尼僧_死亡
$Event(12400903, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    EndIf(EventFlag(1317));
    EndIf(EventFlag(1312));
    EndIf(EventFlag(1303));
    WaitFor(
        CharacterDead(2400770)
            || CharacterDead(2400772)
            || CharacterDead(2400774)
            || CharacterDead(2400775));
    if (!EventFlag(1308)) {
        BatchSetEventFlags(1300, 1319, OFF);
        SetEventFlag(1303, ON);
        SaveRequest(0);
        EndEvent();
    }
L0:
    BatchSetEventFlags(1300, 1319, OFF);
    SetEventFlag(1317, ON);
    SaveRequest(0);
    EndEvent();
});

// 囚われた尼僧_襲ってくる
$Event(12400904, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(
        (EventFlag(1308) && InArea(10000, 2404380))
            || HasDamageType(2400775, -1, DamageType.Unspecified));
    SetEventFlag(72400397, ON);
    SetCharacterAIState(2400775, Enabled);
});

// 囚われた尼僧_アニメ制御_被ダメージ_XX
$Event(12400910, Default, function(chrEntityId) {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(HasDamageType(chrEntityId, -1, DamageType.Unspecified) && HPRatio(chrEntityId) != 0);
    if (!CharacterHasSpEffect(chrEntityId, 151)) {
        if (!CharacterHasSpEffect(chrEntityId, 158)) {
            ForceAnimationPlayback(chrEntityId, 103134, false, false, false);
            RestartEvent();
        }
    }
L0:
    ForceAnimationPlayback(chrEntityId, 103098, false, false, false);
    WaitFixedTimeFrames(20);
    RestartEvent();
});

// 囚われた尼僧_アニメ制御_死亡_XX
$Event(12400915, Default, function(chrEntityId) {
    EndIf(!CharacterType(10000, TargetType.Alive));
    EndIf(EventFlag(1317));
    EndIf(EventFlag(1312));
    EndIf(EventFlag(1303));
    WaitFor(HPRatio(chrEntityId) == 0);
    if (!(CharacterHasSpEffect(chrEntityId, 151) || CharacterHasSpEffect(chrEntityId, 158))) {
        ForceAnimationPlayback(chrEntityId, 103135, false, false, false);
        EndEvent();
    }
L0:
    ForceAnimationPlayback(chrEntityId, 103099, false, false, false);
    EndEvent();
});

// 囚われた尼僧_アニメ制御_チラ見開始_XX
$Event(12400920, Default, function(chrEntityId) {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(!EventFlag(72400955));
    WaitFor(EventFlag(72400955));
    if (!CharacterHasSpEffect(chrEntityId, 151)) {
        ForceAnimationPlayback(chrEntityId, 103104, false, false, false);
        RestartEvent();
    }
L0:
    ForceAnimationPlayback(chrEntityId, 103101, false, false, false);
    WaitFor(CharacterHasSpEffect(chrEntityId, 152));
    ForceAnimationPlayback(chrEntityId, 103104, false, false, false);
    RestartEvent();
});

// 囚われた尼僧_アニメ制御_被ダメージアニメ終了_XX
$Event(12400925, Default, function(chrEntityId) {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(
        (CharacterHasSpEffect(chrEntityId, 153) || CharacterHasSpEffect(chrEntityId, 159))
            && HPRatio(chrEntityId) != 0);
    if (!CharacterHasSpEffect(chrEntityId, 153)) {
        if (!CharacterHasSpEffect(chrEntityId, 159)) {
        }
L0:
        GotoIf(L1, EventFlag(9432) && !EventFlag(1307) && !EventFlag(1306));
        ForceAnimationPlayback(chrEntityId, 103102, true, false, false);
        Goto(L9);
L1:
        ForceAnimationPlayback(chrEntityId, 103103, true, false, false);
    } else {
L2:
        if (!(EventFlag(9432) && !EventFlag(1307) && !EventFlag(1306))) {
            ForceAnimationPlayback(chrEntityId, 103096, true, false, false);
        } else {
L3:
            ForceAnimationPlayback(chrEntityId, 103097, true, false, false);
            Goto(L9);
        }
    }
L9:
    WaitFixedTimeFrames(5);
    RestartEvent();
});

// 囚われた尼僧_アニメ制御_チラ見待機→立ち待機_XX
$Event(12400930, Default, function(chrEntityId) {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(CharacterHasSpEffect(chrEntityId, 156));
    ForceAnimationPlayback(chrEntityId, 103102, false, false, false);
    RestartEvent();
});

// 囚われた尼僧_アニメ制御_立ち待機へ_XX
$Event(12400935, Default, function(chrEntityId) {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(
        EntityInRadiusOfEntity(10000, chrEntityId, 5)
            && CharacterHasSpEffect(chrEntityId, 151)
            && HPRatio(chrEntityId) != 0);
    ForceAnimationPlayback(chrEntityId, 103101, false, true, false);
});

// 囚われの尼僧_座っているOBJに血を付ける
$Event(12400952, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    if (!ThisEvent()) {
        if (!EventFlag(1306)) {
            if (!EventFlag(1308)) {
                if (!EventFlag(1312)) {
                    WaitFor(EventFlag(6001));
                    EndEvent();
                }
            }
        }
    }
L0:
    RequestObjectDestruction(2400773, 1);
    EndEvent();
});

// 囚われた尼僧_アニメ制御_おびえる
$Event(12400953, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(HPRatio(2400770) != 0 && HPRatio(2400774) != 0 && EventFlag(9432));
    if (!CharacterHasSpEffect(2400770, 151)) {
        ForceAnimationPlayback(2400770, 103103, false, false, false);
        WaitFor(!EventFlag(9432));
        ForceAnimationPlayback(2400770, 103102, false, false, false);
        RestartEvent();
    }
L0:
    ForceAnimationPlayback(2400770, 103097, false, false, false);
    WaitFor(!EventFlag(9432));
    ForceAnimationPlayback(2400770, 103096, false, false, false);
    RestartEvent();
});

// 囚われた尼僧_地の施しCD解除
$Event(12400954, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    if (!PlayerHasItem(ItemType.Goods, 702)) {
        SetEventFlag(72400392, OFF);
        EndEvent();
    }
L0:
    EndEvent();
});

// NPC汎用_PCがNPCを殺害した
$Event(12400800, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(
        (HasDamageType(2400765, 10000, DamageType.Unspecified) && HPRatio(2400765) == 0)
            || (HasDamageType(2400730, 10000, DamageType.Unspecified) && HPRatio(2400730) == 0)
            || (HasDamageType(2400750, 10000, DamageType.Unspecified) && HPRatio(2400750) == 0)
            || (HasDamageType(2400754, 10000, DamageType.Unspecified) && HPRatio(2400754) == 0)
            || (HasDamageType(2400757, 10000, DamageType.Unspecified) && HPRatio(2400757) == 0)
            || (HasDamageType(2400770, 10000, DamageType.Unspecified) && HPRatio(2400770) == 0)
            || (HasDamageType(2400772, 10000, DamageType.Unspecified) && HPRatio(2400772) == 0)
            || (HasDamageType(2400774, 10000, DamageType.Unspecified) && HPRatio(2400774) == 0)
            || (HasDamageType(2400700, 10000, DamageType.Unspecified) && HPRatio(2400700) == 0));
    SetEventFlag(9432, ON);
    SetEventFlag(72400490, ON);
});

// NPC汎用_状態整合
$Event(12400801, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    if (EventFlag(1166)) {
        SetCharacterBackreadState(2400765, true);
        IssueShortWarpRequest(2400765, TargetEntityType.Area, 2404500, -1);
        ForceCharacterTreasure(2400765);
    }
L0:
    if (EventFlag(1191)) {
        SetCharacterBackreadState(2400730, true);
        SetCharacterBackreadState(2400732, true);
        DeactivateObject(2400731, Enabled);
        IssueShortWarpRequest(2400730, TargetEntityType.Area, 2404501, -1);
        ForceCharacterTreasure(2400730);
    }
L1:
    if (EventFlag(1231)) {
        DeactivateObject(2400748, Enabled);
        ActivateMapPart(2404601, Disabled);
        SetCharacterBackreadState(2400750, true);
        SetCharacterBackreadState(2400754, true);
        SetCharacterBackreadState(2400757, true);
        IssueShortWarpRequest(2400750, TargetEntityType.Area, 2404502, -1);
        ForceCharacterTreasure(2400750);
    }
L2:
    if (EventFlag(1230)) {
        DeactivateObject(2400748, Enabled);
        ActivateMapPart(2404601, Disabled);
        SetCharacterBackreadState(2400750, false);
        SetCharacterBackreadState(2400754, true);
        SetCharacterBackreadState(2400757, true);
        ForceAnimationPlayback(2400750, 103087, false, false, false);
        EzstateInstructionRequest(2400750, 5, 1);
        IssueShortWarpRequest(2400750, TargetEntityType.Area, 2404502, -1);
        ForceCharacterTreasure(2400750);
    }
L3:
    if (EventFlag(1312)) {
        SetCharacterBackreadState(2400770, true);
        SetCharacterBackreadState(2400772, true);
        SetCharacterBackreadState(2400774, true);
        SetCharacterBackreadState(2400775, true);
        IssueShortWarpRequest(2400770, TargetEntityType.Area, 2404506, -1);
        ForceCharacterTreasure(2400770);
    }
L4:
    GotoIf(L4, !EventFlag(1108));
    ActivateMapPart(2404604, Enabled);
    ForceCharacterTreasure(2400700);
    SetCharacterBackreadState(2400700, true);
L5:
    NoOp();
});

// NPC汎用_アニメ制御_被ダメージから待機へ_XX
$Event(12400805, Default, function(chrEntityId, animationId, spEffectId) {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(CharacterHasSpEffect(chrEntityId, spEffectId) && HPRatio(chrEntityId) != 0);
    ForceAnimationPlayback(chrEntityId, animationId, false, false, false);
    WaitFixedTimeFrames(5);
    RestartEvent();
});

// NPC汎用_アニメ制御_被ダメージ_XX
$Event(12400810, Default, function(chrEntityId, animationId) {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(HPRatio(chrEntityId) != 0 && HasDamageType(chrEntityId, -1, DamageType.Unspecified));
    ForceAnimationPlayback(chrEntityId, animationId, false, false, false);
    RestartEvent();
});

// NPC汎用_アニメ制御_死亡_XX
$Event(12400830, Default, function(chrEntityId, animationId) {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(HPRatio(chrEntityId) == 0);
    ForceAnimationPlayback(chrEntityId, animationId, false, false, false);
});

// NPC汎用_扉をノックする_XX
$Event(12400840, Default, function(eventFlagId, actionButtonParameterId, areaEntityId) {
    EndIf(!CharacterType(10000, TargetType.Alive));
    SetEventFlag(eventFlagId, OFF);
    WaitFor(!EventFlag(eventFlagId) && ActionButtonInArea(actionButtonParameterId, areaEntityId));
    IssueShortWarpRequest(10000, TargetEntityType.Object, areaEntityId, 210);
    ForceAnimationPlayback(10000, 101320, false, false, false);
    WaitFixedTimeFrames(25);
    WaitFixedTimeFrames(20);
    SetEventFlag(eventFlagId, ON);
    WaitFor(!EventFlag(eventFlagId));
    RestartEvent();
});

// 生き残りが逃げる
$Event(12405700, Restart, function() {
    chr = CharacterDead(2400393) && CharacterDead(2400410);
    chr2 = CharacterDead(2400393) && CharacterDead(2400396);
    chr3 = CharacterDead(2400410) && CharacterDead(2400396);
    WaitFor(chr || chr2 || chr3);
    GotoIf(L0, chr);
    GotoIf(L1, chr2);
    GotoIf(L2, chr3);
L0:
    RequestCharacterAICommand(2400396, 10, 0);
    SetCharacterHome(2400396, 2409007);
    RequestCharacterAIReplan(2400396);
L1:
    RequestCharacterAICommand(2400410, 10, 0);
    SetCharacterHome(2400410, 2409007);
    RequestCharacterAIReplan(2400410);
L2:
    RequestCharacterAICommand(2400393, 10, 0);
    SetCharacterHome(2400393, 2409007);
    RequestCharacterAIReplan(2400393);
    WaitFor(InArea(2400393, 2402030) || InArea(2400396, 2402030) || InArea(2400410, 2402030));
    WaitFor(
        EntityInRadiusOfEntity(2400393, 10000, 5)
            || EntityInRadiusOfEntity(2400396, 10000, 5)
            || EntityInRadiusOfEntity(2400410, 10000, 5));
    RequestCharacterAICommand(2400393, -1, 0);
    RequestCharacterAIReplan(2400393);
    RequestCharacterAICommand(2400396, -1, 0);
    RequestCharacterAIReplan(2400396);
    RequestCharacterAICommand(2400410, -1, 0);
    RequestCharacterAIReplan(2400410);
});

// 応戦準備_XX
$Event(12405701, Restart, function(chrEntityId, areaEntityId) {
    WaitFor(InArea(2400393, 2402030) || InArea(2400396, 2402030) || InArea(2400410, 2402030));
    RequestCharacterAICommand(chrEntityId, 10, 0);
    SetCharacterHome(chrEntityId, areaEntityId);
    RequestCharacterAIReplan(chrEntityId);
    WaitFor(InArea(10000, 2402030) && EntityInRadiusOfEntity(10000, chrEntityId, 5));
    RequestCharacterAICommand(chrEntityId, -1, 0);
    RequestCharacterAIReplan(chrEntityId);
});

// 聖堂街C前半の扉の封印
$Event(12405710, Restart, function() {
    if (EventFlag(9453)) {
        ReproduceObjectAnimation(2401202, 1);
        NotifySoundDampeningOfDoorEvent(2401202, DoorState.DoorOpening);
        EndEvent();
    }
L0:
    SetNetworkSyncState(Disabled);
    WaitFor(ActionButtonInArea(7000, 2401202));
    DisplayGenericDialog(10010171, PromptType.OKCANCEL, NumberofOptions.OneButton, 2401202, 5);
    RestartEvent();
});

// アニメ再生_ターゲット判定
$Event(12405750, Restart, function(entityId, animationId, targetDistance) {
    EndIf(ThisEventSlot());
    area = EntityInRadiusOfEntity(entityId, 10000, targetDistance);
    dmg = HasDamageType(entityId, 10000, DamageType.Unspecified);
    WaitFor(area || dmg);
    EndIf(dmg.Passed);
    ForceAnimationPlayback(entityId, animationId, false, false, false);
});

// ボス撃破_聖女ビースト
$Event(12401800, Default, function() {
    if (ThisEvent()) {
        SetMapSoundState(2403802, Disabled);
        SetMapSoundState(2403803, Disabled);
        ChangeCharacterEnableState(2400800, Disabled);
        DeactivateObject(2400801, Disabled);
        ForceCharacterDeath(2400800, false);
        DeactivateObject(2401800, Disabled);
        DeleteMapSFX(2403800, false);
        EndEvent();
    }
L0:
    WaitFor(CharacterDead(2400800));
    DisplayBanner(TextBannerType.DemonKilled);
    DeactivateObject(2401800, Disabled);
    DeleteMapSFX(2403800, true);
    SetLockcamSlotNumber(24, 0, 0);
    WaitFixedTimeSeconds(3);
    HandleBossDefeat(2400800);
    SetNetworkSyncState(Disabled);
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        WaitFor(CharacterType(10000, TargetType.Alive));
        $InitializeEvent(0, 9350, 3);
        AwardAchievement(15);
        AwardItemLot(50000001);
        SetEventFlag(2400, ON);
        SetEventFlag(2401, ON);
        SetEventFlag(9455, ON);
        SetEventFlag(2402, ON);
        SetEventFlag(72400512, ON);
        EndTimeMeasurement(2400000);
        EndTimeMeasurement(2400001);
        EndTimeMeasurement(2400010);
        CreatePlaylog(114);
        ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 126, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 126, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Weapon, 126, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Armor, 126, PlayLogMultiplayerType.HostOnly);
        EndEvent();
    }
L1:
    WaitFor(CharacterType(10000, TargetType.WhitePhantom));
    WaitFixedTimeSeconds(0);
    EndIf(HasMultiplayerState(MultiplayerState.Client));
});

// ボス撃破SE再生_聖女ビースト
$Event(12401801, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12401800));
    flag = EventFlag(12401800);
    WaitFor(flag || (!CharacterBackreadStatus(2400800) && HPRatio(2400800) <= 0));
    EndIf(flag.Passed);
    PlaySE(2402800, SoundType.cCharacterMotion, 0);
});

// ホストがボス部屋入場_初戦_聖女ビースト
$Event(12401802, Default, function() {
    EndIf(EventFlag(12401800));
    DeactivateObject(2400801, Disabled);
    EndIf(ThisEvent());
    ChangeCharacterEnableState(2400800, Disabled);
    DeactivateObject(2400801, Enabled);
    SetObjectInvulnerability(2400801, Enabled);
    WaitFor(
        !EventFlag(12401800)
            && !ThisEvent()
            && CharacterType(10000, TargetType.Alive)
            && InArea(10000, 2402805));
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        IssueBossRoomEntryNotification(0);
    }
    SetEventFlag(12404223, ON);
    EndIf(CharacterType(10000, TargetType.BlackPhantom));
    SetEventFlag(9180, ON);
    WaitFixedTimeFrames(1);
    SetEventFlag(72400400, ON);
    if (!HasMultiplayerState(MultiplayerState.Multiplayer)) {
        PlayCutsceneToPlayer(24000060, CutscenePlayMode.Skippable, 10000);
    } else {
        PlayCutsceneToPlayer(24000060, CutscenePlayMode.Unskippable, 10000);
    }
    WaitFixedTimeFrames(1);
    DeactivateObject(2400801, Disabled);
    SetEventFlag(9180, OFF);
    ChangeCharacterEnableState(2400800, Enabled);
    ForceAnimationPlayback(2400800, 7000, false, false, false);
    ForceAnimationPlayback(2400800, 7001, false, false, false);
    SetEventFlag(12404800, ON);
    EndIf(EventFlag(9301));
    $InitializeEvent(0, 9350, 1);
    SetEventFlag(9301, ON);
});

// 学長の記憶ポリ劇
$Event(12401803, Default, function() {
    DeleteMapSFX(2403413, false);
    EndIf(ThisEvent());
    if (!EventFlag(12401800)) {
        WaitFor(EventFlag(12401800));
    }
L0:
    SpawnMapSFX(2403413);
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    WaitFor(CharacterType(10000, TargetType.Alive) && ActionButtonInArea(2400010, 2401801));
    SetEventFlag(9180, ON);
    WaitFixedTimeFrames(1);
    DeleteMapSFX(2403413, true);
    PlayCutsceneChangeTimePeriodAndWarpPlayer(24000030, CutscenePlayMode.Skippable, -1, 24, 0, 10000, 2);
    WaitFixedTimeFrames(1);
    SetEventFlag(9180, OFF);
});

// 聖女ビースト_時間差入場ゲスト用対処処理
$Event(12401804, Default, function() {
    WaitFor(CharacterType(10000, TargetType.Alive) && EventFlag(12404800));
    EndIf(HasMultiplayerState(MultiplayerState.Host));
    ChangeCharacterEnableState(2400800, Enabled);
    SetEventFlag(12404800, ON);
    SetEventFlag(12401802, ON);
});

// ホストがボス部屋入場_再戦_聖女ビースト
$Event(12404840, Default, function() {
    EndIf(EventFlag(12401800));
    if (!EventFlag(12401802)) {
        if (!HasMultiplayerState(MultiplayerState.Client)) {
            DeactivateObject(2401800, Disabled);
            DeleteMapSFX(2403800, false);
        }
        WaitFor(!EventFlag(12401800) && EventFlag(12401802));
        DeactivateObject(2401800, Enabled);
        SpawnMapSFX(2403800);
    }
L0:
    flagChrAct = !EventFlag(12401800)
        && CharacterType(10000, TargetType.Alive)
        && ActionButtonInArea(2400800, 2401800);
    flag = EventFlag(12401800);
    WaitFor(flagChrAct || flag);
    EndIf(flag.Passed);
    RotateCharacter(10000, 2402800, 101130, false);
    chrArea = CharacterType(10000, TargetType.Alive) && InArea(10000, 2402801);
    chrTime = CharacterType(10000, TargetType.Alive) && ElapsedSeconds(2);
    WaitFor(chrArea || chrTime);
    if (!chrTime.Passed) {
        SetEventFlag(12404800, ON);
    }
    RestartEvent();
});

// ゲストがボス部屋入場_聖女ビースト
$Event(12404841, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12401800));
    WaitFor(
        !EventFlag(12401800)
            && EventFlag(12401802)
            && EventFlag(12404800)
            && CharacterType(10000, TargetType.WhitePhantom)
            && ActionButtonInArea(2400800, 2401800));
    RotateCharacter(10000, 2402800, 101130, false);
    chrArea = CharacterType(10000, TargetType.WhitePhantom) && InArea(10000, 2402801);
    chrTime = CharacterType(10000, TargetType.WhitePhantom) && ElapsedSeconds(2);
    WaitFor(chrArea || chrTime);
    if (!chrTime.Passed) {
        SetEventFlag(12404801, ON);
    }
    RestartEvent();
});

// 他人の世界で霧壁あたり無効_聖女ビースト
$Event(12404842, Default, function() {
    WaitFor(CharacterType(10000, TargetType.Alive) && EntityInRadiusOfEntity(10000, 2401800, 6));
    SetCharacterGravityMaphitStateExcludingOwnWorld(10000, Disabled);
    WaitFixedTimeFrames(6);
    RestartEvent();
});

// 他人の世界で霧壁あたり無効2_聖女ビースト
$Event(12404843, Default, function() {
    WaitFor(
        CharacterType(10000, TargetType.Alive)
            && !EntityInRadiusOfEntity(10000, 2401800, 6)
            && EntityInRadiusOfEntity(10000, 2401800, 12));
    SetCharacterGravityMaphitStateExcludingOwnWorld(10000, Enabled);
    WaitFixedTimeFrames(6);
    RestartEvent();
});

// ボスが動き出す_聖女ビースト
$Event(12404802, Default, function() {
    EndIf(EventFlag(12401800));
    SetCharacterAIState(2400800, Disabled);
    SetCharacterHPBarDisplay(2400800, Disabled);
    if (!ThisEvent()) {
        WaitFor(EventFlag(12404800));
        if (!HasMultiplayerState(MultiplayerState.Client)) {
            if (!EventFlag(12404223)) {
                IssueBossRoomEntryNotification(0);
            }
            SetNetworkUpdateAuthority(2400800, AuthorityLevel.Forced);
        }
    }
L0:
    SetEventFlag(12404223, ON);
    SetEventFlag(12404800, ON);
    GotoIf(L1, NumberOfCoopClients() == 0);
    GotoIf(L2, NumberOfCoopClients() == 1);
    GotoIf(L3, NumberOfCoopClients() == 2);
L1:
    Goto(L4);
L2:
    SetSpEffect(2400800, 7500, true);
    WaitFixedTimeFrames(1);
    AdaptHpchangingSpEffectToNPCPartOfTarget(2400800);
    Goto(L4);
L3:
    SetSpEffect(2400800, 7501, true);
    WaitFixedTimeFrames(1);
    AdaptHpchangingSpEffectToNPCPartOfTarget(2400800);
    Goto(L4);
L4:
    SetCharacterAIState(2400800, Enabled);
    DisplayBossHealthBar(Enabled, 2400800, 0, 502000);
    ForceAnimationPlayback(2400800, 7002, false, false, false);
    CreatePlaylog(160);
    StartTimeMeasurement(2410010, 176, Enabled);
});

// ボスBGM ON_聖女ビースト
$Event(12404803, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12401800));
    if (!ThisEvent()) {
        SetMapSoundState(2403802, Disabled);
        SetMapSoundState(2403803, Disabled);
        flagArea &= !EventFlag(12401800) && EventFlag(12404802);
        if (!HasMultiplayerState(MultiplayerState.Host)) {
            flagArea &= EventFlag(12404801);
        }
        flagArea &= InArea(10000, 2402802);
        WaitFor(flagArea);
        EnableBossMapSound(2403802, Enabled);
        chrFlagArea &= CharacterHasEventMessage(2400800, 100);
    }
L0:
    chrFlagArea &= !EventFlag(12401800) && EventFlag(12404802);
    if (!HasMultiplayerState(MultiplayerState.Host)) {
        chrFlagArea &= EventFlag(12404801);
    }
    chrFlagArea &= InArea(10000, 2402802);
    WaitFor(chrFlagArea);
    EnableBossMapSound(2403802, Disabled);
    WaitFixedTimeFrames(0);
    EnableBossMapSound(2403803, Enabled);
});

// ボスカメラ_聖女ビースト
$Event(12404804, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12401800));
    WaitFor(HPRatio(2400800) > 0 && EntityInRadiusOfEntity(10000, 2400800, 5.5));
    SetLockcamSlotNumber(24, 0, 1);
    WaitFor(HPRatio(2400800) > 0 && !EntityInRadiusOfEntity(10000, 2400800, 6));
    SetLockcamSlotNumber(24, 0, 0);
    RestartEvent();
});

// ボスBGM OFF_聖女ビースト
$Event(12404805, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12401800));
    WaitFor(EventFlag(12401800));
    EnableBossMapSound(2403802, Disabled);
    EnableBossMapSound(2403803, Disabled);
    EnableBossMapSound(-1, Disabled);
});

// ボスヒートアップ_聖女ビースト
$Event(12404807, Default, function() {
    EndIf(EventFlag(12401800));
    WaitFor(HPRatio(2400800) < 0.5);
    RequestCharacterAICommand(2400800, 100, 1);
    RequestCharacterAIReplan(2400800);
    WaitFor(CharacterHasEventMessage(2400800, 100));
    RequestCharacterAICommand(2400800, -1, 1);
    RequestCharacterAIReplan(2400800);
});

// ボス部位損傷_クロスしんなり_聖女ビースト
$Event(12404808, Default, function() {
    EndIf(EventFlag(12401800));
    if (!ThisEvent()) {
        WaitFor(CharacterHasSpEffect(2400800, 482));
    }
L0:
    ChangeCharactersCloth(2400800, 15, 2);
});

// ボス部位損傷_聖女ビースト_XX
$Event(12404810, Restart, function(npcPartId, npcPartId2, npcPartGroupIdx, npcPartHP, spEffectId, spEffectId2, animationId) {
    EndIf(EventFlag(12401800));
    CreateNPCPart(2400800, npcPartId, npcPartGroupIdx, npcPartHP, 1, 1, false, false);
    SetNPCPartSEAndSFX(2400800, npcPartId2, 72, 72);
    hp = NPCPartHP(2400800, npcPartId2) <= 0;
    hp2 = HPRatio(2400800) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(2400800, npcPartId, npcPartGroupIdx, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(2400800, npcPartId2, 73, 73);
    WaitFixedTimeFrames(1);
    RequestCharacterAnimationReset(2400800, Interpolation.Interpolated);
    ForceAnimationPlayback(2400800, animationId, false, false, false);
    SetSpEffect(2400800, spEffectId, false);
    ClearSpEffect(2400800, spEffectId2);
    RequestCharacterAIReplan(2400800);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(2400800, 1, 0);
    RequestCharacterAIReplan(2400800);
    WaitFor(CharacterHasEventMessage(2400800, 300));
    SetNPCPartHP(2400800, npcPartId2, -1, true);
    SetSpEffect(2400800, spEffectId2, false);
    ClearSpEffect(2400800, spEffectId);
    RequestCharacterAICommand(2400800, -1, 0);
    RequestCharacterAIReplan(2400800);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// ボス部位損傷演出_聖女ビースト_XX
$Event(12404820, Default, function(spEffectId, spEffectId2, bitNumber, bitNumber2) {
    EndIf(EventFlag(12401800));
    WaitFor(
        CharacterHasSpEffect(2400800, spEffectId) && !CharacterHasSpEffect(2400800, spEffectId2));
    ChangeCharacterDispmask(2400800, bitNumber2, OFF);
    ChangeCharacterDispmask(2400800, bitNumber, ON);
    WaitFor(
        !CharacterHasSpEffect(2400800, spEffectId) && CharacterHasSpEffect(2400800, spEffectId2));
    ChangeCharacterDispmask(2400800, bitNumber, OFF);
    ChangeCharacterDispmask(2400800, bitNumber2, ON);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// 聖女ビースト_回復行動中に回復不可になった
$Event(12404830, Restart, function() {
    WaitFor(CharacterHasSpEffect(2400800, 2150) && CharacterHasSpEffect(2400800, 5639));
    ForceAnimationPlayback(2400800, 3035, false, false, false);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// 環境音再生
$Event(12406900, Restart, function(areaEntityId, entityId, soundId) {
    WaitFor(InArea(10000, areaEntityId));
    PlaySE(entityId, SoundType.aEnvironmentalSound, soundId);
    WaitFixedTimeFrames(1);
});

// マップ初回入場_プレイログ
$Event(12400990, Default, function() {
    EndIf(ThisEvent());
    WaitFor(PlayerStandingOnHit(2404101));
    ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 194, PlayLogMultiplayerType.HostOnly);
    ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 194, PlayLogMultiplayerType.HostOnly);
    ParameterOutput(PlayerPlayLogParameter.Weapon, 194, PlayLogMultiplayerType.HostOnly);
    ParameterOutput(PlayerPlayLogParameter.Armor, 194, PlayLogMultiplayerType.HostOnly);
});

// ワープ椅子_ワープアニメ再生_XX
$Event(12407020, Default, function(eventFlagId, entityId) {
    WaitFor(EventFlag(eventFlagId));
    IssueShortWarpRequest(10000, TargetEntityType.Object, entityId, 200);
    ForceAnimationPlayback(10000, 101160, false, false, true);
    WaitFixedTimeSeconds(4);
    SetEventFlag(eventFlagId, OFF);
});

// ワープ椅子_ワープ_XX
$Event(12407040, Default, function(eventFlagId, entityId, eventFlagId2) {
    WaitFor(EventFlag(eventFlagId));
    SetEventFlag(eventFlagId, OFF);
    WarpPlayerToRespawnPoint(entityId);
    SetEventFlag(eventFlagId2, ON);
});

// ワープ椅子_初回起動演出_XX
$Event(12407050, Restart, function(eventFlagId, chrEntityId, entityId) {
    EndIf(EventFlag(eventFlagId));
    WaitFor(CharacterBackreadStatus(chrEntityId));
    IssueShortWarpRequest(chrEntityId, TargetEntityType.Object, entityId, 250);
    ForceAnimationPlayback(chrEntityId, 101165, true, false, false);
    WaitFixedTimeSeconds(1);
    IssueShortWarpRequest(chrEntityId, TargetEntityType.Object, entityId, 250);
    WaitFor(EventFlag(eventFlagId));
    ForceAnimationPlayback(chrEntityId, 101166, false, true, false);
    ChangeCharacterEnableState(chrEntityId, Disabled);
});

// ワープ椅子_ワープ後処理
$Event(12407000, Default, function() {
    if (!AnyBatchEventFlags(9001, 9010)) {
        EndEvent();
    }
    SetEventFlag(9210, ON);
    WaitFor(!EventFlag(9210));
    if (EventFlag(9001)) {
        SetEventFlag(12407811, ON);
        SetEventFlag(12407810, ON);
        SetPlayerRespawnPoint(2402950);
    }
    if (EventFlag(9002)) {
        SetEventFlag(12407831, ON);
        SetEventFlag(12407830, ON);
        SetPlayerRespawnPoint(2402951);
    }
    if (EventFlag(9003)) {
        SetEventFlag(12407851, ON);
        SetEventFlag(12407850, ON);
        SetPlayerRespawnPoint(2402952);
    }
    if (EventFlag(9004)) {
        SetEventFlag(12407871, ON);
        SetEventFlag(12407870, ON);
        SetPlayerRespawnPoint(2402953);
    }
    if (EventFlag(9005)) {
        SetEventFlag(12407891, ON);
        SetEventFlag(12407890, ON);
        SetPlayerRespawnPoint(2402954);
    }
    if (EventFlag(9006)) {
        SetEventFlag(12407911, ON);
        SetEventFlag(12407910, ON);
        SetPlayerRespawnPoint(2402955);
    }
    if (EventFlag(9007)) {
        SetEventFlag(12407931, ON);
        SetEventFlag(12407930, ON);
        SetPlayerRespawnPoint(2402956);
    }
    if (EventFlag(9008)) {
        SetEventFlag(12407951, ON);
        SetEventFlag(12407950, ON);
        SetPlayerRespawnPoint(2402957);
    }
    if (EventFlag(9009)) {
        SetEventFlag(12407971, ON);
        SetEventFlag(12407970, ON);
        SetPlayerRespawnPoint(2402958);
    }
    if (EventFlag(9010)) {
        SetEventFlag(12407991, ON);
        SetEventFlag(12407990, ON);
        SetPlayerRespawnPoint(2402959);
    }
    BatchSetEventFlags(9000, 9010, OFF);
});

// ★聖堂街_新NPC召喚_ボス部屋を目指す_XX
$Event(12404450, Restart, function(chrEntityId, entityId, eventFlagId, eventFlagId2, eventFlagId3) {
    EndIf(ThisEventSlot());
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    SetEventPoint(chrEntityId, entityId, 1);
    WaitFor(EventFlag(eventFlagId) && !EventFlag(eventFlagId2) && EventFlag(eventFlagId3));
    RequestCharacterAICommand(chrEntityId, 990, 0);
    RequestCharacterAIReplan(chrEntityId);
});

// ★聖堂街_新NPC召喚_召喚可否判定_トップ・ハットの狩人
$Event(12404400, Restart, function(eventFlagId, entityId, eventFlagId2, eventFlagId3, eventFlagId4, eventFlagId5) {
    if (!EventFlag(eventFlagId)) {
        SetEventFlag(eventFlagId, OFF);
        DeleteMapSFX(entityId, true);
        WaitFor(
            PlayerHasItem(ItemType.Goods, 4312)
                && !EventFlag(eventFlagId2)
                && !EventFlag(eventFlagId3)
                && !EventFlag(eventFlagId4)
                && NumberOfClientsOfType(ClientType.Coop) < 2
                && !EventFlag(2400)
                && !EventFlag(2401)
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
                && !EventFlag(2400)
                && !EventFlag(2401)
                && !EventFlag(eventFlagId5)));
    SetEventFlag(eventFlagId, OFF);
    DeleteMapSFX(entityId, true);
    RestartEvent();
});

// ★聖堂街_新NPC召喚_参加_XX
$Event(12404410, Restart, function(signType, areaEntityId, entityId, eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4, actionButtonParameterId) {
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
    ActivateHit(2404120, Disabled);
});

// ★聖堂街_新NPC召喚_ボス部屋に入る_XX
$Event(12404460, Restart, function(chrEntityId, areaEntityId, entityId, areaEntityId2, playAnimationId, eventFlagId, areaEntityId3) {
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

// ★聖堂街_新NPC召喚_ボス戦中投げ無効__トップ・ハットの狩人
$Event(12404490, Restart, function() {
    SetNetworkSyncState(Disabled);
    WaitFor(
        HasMultiplayerState(MultiplayerState.Host)
            && EventFlag(12404420)
            && !EventFlag(12404430)
            && EventFlag(12404800));
    SetSpEffectAndUnknown200455(2400910, 35, false);
    WaitFixedTimeFrames(1);
    RestartEvent();
});


