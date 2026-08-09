// ==EMEVD==
// @docs    bb-common.emedf.json
// @compress    DCX_DFLT_10000_44_9
// @game    Bloodborne
// @string    "ボス_撃破\u0000PC情報_ボス撃破_ルドウイーク\u0000ボス_戦闘開始\u0000ボス戦_撃破時間\u0000PC情報_ボス撃破_教区長Ω\u0000N:\\SPRJ\\data\\Param\\event\\common.emevd\u0000\u0000\u0000\u0000"
// @linked    [110]
// @version    3.6.2
// ==/EMEVD==

// コンストラクタ
$Event(0, Default, function() {
    if (!EventFlag(13400999)) {
        $InitializeEvent(55, 7000, 3400950, 3401950, 999, 13407800);
        $InitializeEvent(56, 7000, 3400951, 3401951, 999, 13407820);
        $InitializeEvent(57, 7000, 3400952, 3401952, 13401800, 13407840);
        $InitializeEvent(58, 7000, 3400953, 3401953, 13401850, 13407860);
        $InitializeEvent(55, 7100, 73400200, 3401950);
        $InitializeEvent(56, 7100, 73400201, 3401951);
        $InitializeEvent(57, 7100, 73400202, 3401952);
        $InitializeEvent(58, 7100, 73400203, 3401953);
        $InitializeEvent(55, 7200, 73400100, 3401950, 2102953);
        $InitializeEvent(56, 7200, 73400101, 3401951, 2102953);
        $InitializeEvent(57, 7200, 73400102, 3401952, 2102953);
        $InitializeEvent(58, 7200, 73400103, 3401953, 2102953);
        $InitializeEvent(55, 7300, 72103400, 3401950);
        $InitializeEvent(56, 7300, 72103401, 3401951);
        $InitializeEvent(57, 7300, 72103402, 3401952);
        $InitializeEvent(58, 7300, 72103403, 3401953);
        DeactivateObject(3401999, Disabled);
        DeleteMapSFX(3403999, false);
    } else {
L0:
        ChangeCharacterEnableState(3400950, Disabled);
        ChangeCharacterEnableState(3400951, Disabled);
        ChangeCharacterEnableState(3400952, Disabled);
        ChangeCharacterEnableState(3400953, Disabled);
        DeactivateObject(3401950, Disabled);
        DeactivateObject(3401951, Disabled);
        DeactivateObject(3401952, Disabled);
        DeactivateObject(3401953, Disabled);
        SetPlayerRespawnPoint(3402955);
        SetEventFlag(9401, ON);
        SetEventFlag(9404, ON);
    }
L1:
    SetEventFlag(3400, OFF);
    SetEventFlag(3401, OFF);
    SetEventFlag(3402, OFF);
    SetEventFlag(3403, ON);
    if (EventFlag(13401800)) {
        SetEventFlag(3400, ON);
        SetEventFlag(3401, ON);
        SetEventFlag(3402, ON);
        SetEventFlag(3403, ON);
    }
    if (EventFlag(13401852)) {
        SetEventFlag(3400, OFF);
        SetEventFlag(3401, OFF);
        SetEventFlag(3402, ON);
        SetEventFlag(3403, OFF);
    }
    if (EventFlag(13401850)) {
        SetEventFlag(3400, ON);
        SetEventFlag(3401, ON);
        SetEventFlag(3402, ON);
        SetEventFlag(3403, ON);
    }
    $InitializeEvent(0, 13400010);
    $InitializeEvent(0, 13401000);
    RegisterLadder(13400000, 13400001, 3401000);
    RegisterLadder(13400002, 13400003, 3401001);
    $InitializeEvent(0, 13401500);
    $InitializeEvent(0, 13404700, 3400790, 13404701, 13404711, 3400, 999);
    $InitializeEvent(5, 13404700, 3400791, 13404702, 13404712, 3400, 999);
    $InitializeEvent(0, 13404710, 3400790, 13404701, 13404711, 13404721);
    $InitializeEvent(5, 13404710, 3400701, 13404702, 13404712, 13404722);
    $InitializeEvent(0, 13404720, 3400790, 13404701, 13404711, 13404721);
    $InitializeEvent(5, 13404720, 3400791, 13404702, 13404712, 13404722);
    $InitializeEvent(0, 13404730, 3400790, 13404701, 13404711, 3400, 13404810, 999, 999, 13404712);
    $InitializeEvent(5, 13404730, 3400791, 13404702, 13404712, 3400, 13404810, 999, 999, 13404711);
    $InitializeEvent(0, 13404740);
    $InitializeEvent(0, 13404742);
    $InitializeEvent(0, 13401800);
    $InitializeEvent(0, 13404811);
    $InitializeEvent(0, 13401801);
    $InitializeEvent(0, 13404800);
    $InitializeEvent(0, 13404801);
    $InitializeEvent(0, 13404802);
    $InitializeEvent(0, 13404803);
    $InitializeEvent(0, 13404804);
    $InitializeEvent(0, 13404805);
    $InitializeEvent(0, 13404806);
    $InitializeEvent(0, 13404807);
    $InitializeEvent(0, 13401802);
    $InitializeEvent(0, 13401803);
    $InitializeEvent(0, 13404820);
    $InitializeEvent(0, 13404821);
    $InitializeEvent(0, 13404822);
    $InitializeEvent(0, 13404823);
    $InitializeEvent(0, 13404840);
    $InitializeEvent(0, 13401804);
    if (!EventFlag(13400999)) {
        $InitializeEvent(0, 13404824);
        $InitializeEvent(0, 13404825);
        $InitializeEvent(0, 13404830, 3400, 3400, NPCPartType.Part1, 300, 480, 7001, 152);
        $InitializeEvent(1, 13404830, 3401, 3401, NPCPartType.Part2, 150, 482, 7004, 72);
        $InitializeEvent(2, 13404830, 3402, 3402, NPCPartType.Part3, 150, 481, 7002, 72);
        $InitializeEvent(0, 13404835);
        $InitializeEvent(0, 13404841);
    } else {
        $InitializeEvent(0, 13404830, 3400, 3400, NPCPartType.Part1, 400, 480, 7001, 152);
        $InitializeEvent(1, 13404830, 3401, 3401, NPCPartType.Part2, 200, 482, 7004, 72);
        $InitializeEvent(2, 13404830, 3402, 3402, NPCPartType.Part3, 200, 481, 7002, 72);
    }
    $InitializeEvent(0, 13401850);
    $InitializeEvent(0, 13404861);
    $InitializeEvent(0, 13401851);
    $InitializeEvent(0, 13404850);
    $InitializeEvent(0, 13404851);
    $InitializeEvent(0, 13404852);
    $InitializeEvent(0, 13404853);
    $InitializeEvent(0, 13404854);
    $InitializeEvent(0, 13404855);
    $InitializeEvent(0, 13404856);
    $InitializeEvent(0, 13404857);
    $InitializeEvent(0, 13404870, 3450, 3450, NPCPartType.Part1, 480, 490, 60, 8020);
    $InitializeEvent(1, 13404870, 3451, 3451, NPCPartType.Part2, 481, 491, 150, 8000);
    $InitializeEvent(2, 13404870, 3452, 3452, NPCPartType.Part3, 482, 492, 150, 8010);
    $InitializeEvent(3, 13404870, 3453, 3453, NPCPartType.Part4, 483, 493, 250, 8030);
    $InitializeEvent(4, 13404870, 3454, 3454, NPCPartType.Part5, 484, 494, 250, 8040);
    $InitializeEvent(0, 13404875);
    $InitializeEvent(0, 13401853);
    $InitializeEvent(0, 13401200, 3400950, 3401020, 13401211);
    $InitializeEvent(0, 13401210, 3401010, 13400000, 1, 3400000);
    $InitializeEvent(1, 13401210, 3401020, 13400001, 1, 3400010);
    $InitializeEvent(0, 13401220);
    $InitializeEvent(0, 13400100);
    $InitializeEvent(0, 13400220, 3400680, 53401710);
    $InitializeEvent(1, 13400220, 3400681, 53401720);
    $InitializeEvent(0, 13405103);
    $InitializeEvent(0, 13400310, 3400590, 3402341);
    $InitializeEvent(0, 13400320);
    $InitializeEvent(0, 13404799);
    $InitializeEvent(0, 13405100, 3401400, 3402531, 3402554);
    $InitializeEvent(0, 13405105, 3402370, 3401350, 3401351, 0, 0, 0);
    $InitializeEvent(0, 13405115, 3401366, 13405130, 0, 50, 6280, 6281, 6282, 6283);
    $InitializeEvent(1, 13405115, 3401356, 13405131, 0, 60, 6284, 6285, 6286, 6287);
    $InitializeEvent(2, 13405115, 3401359, 13405132, 0, 70, 6280, 6281, 6282, 6283);
    $InitializeEvent(3, 13405115, 3401363, 13405132, 20, 80, 6280, 6281, 6282, 6283);
    $InitializeEvent(4, 13405115, 3401364, 13405132, 10, 40, 6280, 6281, 6282, 6283);
    $InitializeEvent(5, 13405115, 3401365, 13405132, 30, 50, 6280, 6281, 6282, 6283);
    $InitializeEvent(6, 13405115, 3401364, 13405133, 10, 60, 6280, 6281, 6282, 6283);
    $InitializeEvent(7, 13405115, 3401359, 13405135, 20, 40, 6280, 6281, 6282, 6283);
    $InitializeEvent(9, 13405115, 3401363, 13405135, 10, 70, 6280, 6281, 6282, 6283);
    $InitializeEvent(10, 13405115, 3401364, 13405135, 17, 60, 6280, 6281, 6282, 6283);
    $InitializeEvent(11, 13405115, 3401365, 13405135, 6, 50, 6280, 6281, 6282, 6283);
    $InitializeEvent(0, 13405113, 3401360, 13405136, 6, 50, 6280, 6281, 6282, 6283);
    $InitializeEvent(1, 13405140, 3400207, 3402510, 13405132, 3402371, 3401367, 30);
    $InitializeEvent(2, 13405140, 3400207, 3402376, 13405133, 3402371, 3401367, 10);
    $InitializeEvent(4, 13405140, 3400210, 3402377, 13405136, 3402374, 3401368, 20);
    $InitializeEvent(0, 13405145, 3402374, 3401368, 13405130);
    $InitializeEvent(1, 13405145, 3402372, 3401357, 13405131);
    $InitializeEvent(2, 13405145, 3402371, 3401367, 13405135);
    $InitializeEvent(3, 13405145, 3402374, 3401368, 13405136);
    $InitializeEvent(0, 13405155, 3402515);
    $InitializeEvent(0, 13405160, 3401330);
    $InitializeEvent(1, 13405160, 3401331);
    $InitializeEvent(2, 13405160, 3401332);
    $InitializeEvent(3, 13405160, 3401333);
    $InitializeEvent(4, 13405160, 3401334);
    $InitializeEvent(5, 13405160, 3401335);
    $InitializeEvent(6, 13405160, 3401336);
    $InitializeEvent(7, 13405160, 3401337);
    $InitializeEvent(8, 13405160, 3401338);
    $InitializeEvent(9, 13405160, 3401339);
    $InitializeEvent(10, 13405160, 3401340);
    $InitializeEvent(11, 13405160, 3401341);
    $InitializeEvent(12, 13405160, 3401342);
    $InitializeEvent(13, 13405160, 3401343);
    $InitializeEvent(14, 13405160, 3401344);
    $InitializeEvent(0, 13405110);
    $InitializeEvent(0, 13405112);
    $InitializeEvent(0, 13405200, 3400300, 3402600, 3004, 3402601);
    $InitializeEvent(0, 13400330, 3400650);
    $InitializeEvent(1, 13405211, 3402301);
    $InitializeEvent(2, 13405211, 3402302);
    $InitializeEvent(0, 13405220, 3400152, 7015, 109900, 7016, 109955, 0, 0, 1);
    $InitializeEvent(2, 13405220, 3400154, 7015, 109900, 7016, 109955, 0, 0, 1);
    $InitializeEvent(16, 13405220, 3400315, 7001, 400010, 7002, 400010, 3402555, 0, 0);
    $InitializeEvent(17, 13405220, 3400169, 7015, 109900, 7016, 109955, 0, 0, 2);
    $InitializeEvent(18, 13405220, 3400170, 7015, 109900, 7016, 109955, 0, 0, 2);
    $InitializeEvent(19, 13405220, 3400171, 7015, 109900, 7016, 109955, 0, 0, 2);
    $InitializeEvent(20, 13405220, 3400172, 7015, 109900, 7016, 109955, 0, 0, 2);
    $InitializeEvent(3, 13405220, 3400350, 7000, 6550, 0, 6550, 0, 0, 0);
    $InitializeEvent(4, 13405550, 3400141, 7000, 109900, 7002, 109950, 2, 3);
    $InitializeEvent(5, 13405550, 3400146, 7000, 109900, 7002, 109950, 2, 4);
    $InitializeEvent(7, 13405550, 3400147, 7003, 109900, 7005, 109953, 4, 6);
    $InitializeEvent(8, 13405550, 3400148, 7006, 109900, 7008, 109953, 0, 0);
    $InitializeEvent(1, 13405300, 3400208, 0, 3, 0);
    $InitializeEvent(2, 13405300, 3400209, 0, 3, 0);
    $InitializeEvent(3, 13405300, 3400207, 0, 3, 0);
    $InitializeEvent(4, 13405300, 3400210, 0, 3, 0);
    $InitializeEvent(7, 13405300, 3400160, 3402506, 10, 0);
    $InitializeEvent(8, 13405300, 3400309, 3402508, 10, 2);
    $InitializeEvent(9, 13405300, 3400280, 3402510, 10, 0);
    $InitializeEvent(10, 13405300, 3400281, 3402510, 10, 0);
    $InitializeEvent(15, 13405300, 3400664, 3402536, 10, 0);
    $InitializeEvent(16, 13405300, 3400510, 3402539, 10, 0);
    $InitializeEvent(17, 13405300, 3400550, 3402538, 10, 0);
    $InitializeEvent(18, 13405300, 3400580, 3402544, 5, 0);
    $InitializeEvent(0, 13405350, 3400405, 3402512, 0, 3403303, 0, 0);
    $InitializeEvent(1, 13405350, 3400204, 3402315, 0, 3403353, 0, 0);
    $InitializeEvent(2, 13405350, 3400253, 3402315, 0, 3403354, 0, 0);
    $InitializeEvent(3, 13405350, 3400508, 3402504, 0, 3403335, 0, 0);
    $InitializeEvent(4, 13405350, 3400203, 3402504, 0, 3403335, 1, 0);
    $InitializeEvent(5, 13405350, 3400200, 3402534, 0, 3403351, 0, 1);
    $InitializeEvent(6, 13405350, 3400105, 3402512, 0, 3403356, 0, 1);
    $InitializeEvent(7, 13405350, 3400106, 3402512, 0, 3403356, 4, 1);
    $InitializeEvent(8, 13405350, 3400202, 3402505, 0, 3403339, 0, 0);
    $InitializeEvent(9, 13405350, 3400252, 3402505, 0, 3403339, 0, 0);
    $InitializeEvent(10, 13405350, 3400411, 3402360, 0, 3403310, 0, 0);
    $InitializeEvent(11, 13405350, 3400601, 3402650, 0, 3403347, 0, 0);
    $InitializeEvent(12, 13405350, 3400552, 3402558, 0, 3403348, 0, 0);
    $InitializeEvent(13, 13405350, 3400105, 3402559, 0, 3403305, 0, 1);
    $InitializeEvent(14, 13405350, 3400106, 3402559, 0, 3403305, 2, 1);
    $InitializeEvent(15, 13405350, 3400665, 3402315, 0, 3403336, 0, 0);
    $InitializeEvent(16, 13405350, 3400601, 3402555, 0, 3403347, 0, 1);
    $InitializeEvent(17, 13405350, 3400137, 3402502, 0, 3403301, 1, 0);
    $InitializeEvent(18, 13405350, 3400107, 3402513, 0, 3403352, 0, 1);
    $InitializeEvent(19, 13405350, 3400412, 3402553, 0, 3403343, 0, 0);
    $InitializeEvent(20, 13405350, 3400165, 3402526, 0, 3403311, 0, 0);
    $InitializeEvent(24, 13405350, 3400166, 3402526, 0, 3403311, 0, 0);
    $InitializeEvent(25, 13405350, 3400167, 3402526, 0, 3403311, 0, 0);
    $InitializeEvent(26, 13405350, 3400168, 3402526, 0, 3403311, 0, 0);
    $InitializeEvent(27, 13405350, 3400611, 3402561, 0, 3403315, 2, 0);
    $InitializeEvent(34, 13405350, 3400158, 3402560, 0, 3403304, 0, 0);
    $InitializeEvent(35, 13405350, 3400159, 3402560, 0, 3403304, 0, 0);
    $InitializeEvent(36, 13405350, 3400160, 3402560, 0, 3403304, 0, 0);
    $InitializeEvent(37, 13405350, 3400161, 3402560, 0, 3403304, 0, 0);
    $InitializeEvent(38, 13405350, 3400162, 3402560, 0, 3403304, 0, 0);
    $InitializeEvent(39, 13405350, 3400403, 3402517, 0, 3403302, 8, 1);
    $InitializeEvent(40, 13405350, 3400303, 3402517, 0, 3403309, 16, 1);
    $InitializeEvent(41, 13405350, 3400205, 3402304, 0, 3403307, 0, 1);
    $InitializeEvent(42, 13405350, 3400206, 3402304, 0, 3403308, 0, 1);
    $InitializeEvent(43, 13405350, 3400111, 3402552, 0, 3403355, 0, 1);
    $InitializeEvent(44, 13405350, 3400112, 3402511, 0, 3403355, 0, 1);
    $InitializeEvent(45, 13405350, 3400113, 3402511, 0, 3403355, 4, 1);
    $InitializeEvent(46, 13405350, 3400130, 3402517, 0, 3403301, 8, 0);
    $InitializeEvent(47, 13405350, 3400131, 3402500, 0, 3403306, 2, 0);
    $InitializeEvent(48, 13405350, 3400132, 3402517, 0, 3403301, 9, 0);
    $InitializeEvent(49, 13405350, 3400133, 3402517, 0, 3403301, 9, 0);
    $InitializeEvent(50, 13405350, 3400134, 3402517, 0, 3403301, 8, 0);
    $InitializeEvent(51, 13405350, 3400135, 3402502, 0, 3403301, 2, 0);
    $InitializeEvent(52, 13405350, 3400137, 3402517, 0, 3403301, 9, 0);
    $InitializeEvent(53, 13405350, 3400140, 3402517, 0, 3403301, 2, 0);
    $InitializeEvent(54, 13405350, 3400149, 3402517, 0, 3403301, 7, 0);
    $InitializeEvent(55, 13405350, 3400178, 3402517, 0, 3403314, 15, 1);
    $InitializeEvent(56, 13405350, 3400179, 3402517, 0, 3403314, 15, 1);
    $InitializeEvent(57, 13405350, 3400180, 3402517, 0, 3403314, 15, 1);
    $InitializeEvent(58, 13405350, 3400181, 3402517, 0, 3403314, 9, 1);
    $InitializeEvent(59, 13405350, 3400182, 3402517, 0, 3403314, 15, 1);
    $InitializeEvent(60, 13405350, 3400183, 3402517, 0, 3403314, 15, 1);
    $InitializeEvent(61, 13405350, 3400139, 3402508, 0, 3403358, 0, 0);
    $InitializeEvent(62, 13405350, 3400136, 3402508, 0, 3403358, 0, 0);
    $InitializeEvent(63, 13405350, 3400173, 3402500, 0, 3403312, 0, 0);
    $InitializeEvent(64, 13405350, 3400610, 3402503, 0, 3403313, 0, 0);
    $InitializeEvent(65, 13405350, 3400204, 3402316, 0, 3403353, 0, 0);
    $InitializeEvent(66, 13405350, 3400253, 3402316, 0, 3403354, 0, 0);
    $InitializeEvent(21, 13405350, 3400401, 3402535, 0, 3403331, 0, 0);
    $InitializeEvent(22, 13405350, 3400143, 3402537, 0, 3403340, 0, 0);
    $InitializeEvent(23, 13405350, 3400145, 3402537, 0, 3403340, 2, 0);
    $InitializeEvent(28, 13405350, 3400110, 3402545, 0, 3403341, 5, 1);
    $InitializeEvent(29, 13405350, 3400109, 3402545, 0, 3403341, 1, 1);
    $InitializeEvent(30, 13405350, 3400144, 3402537, 0, 3403340, 0, 0);
    $InitializeEvent(32, 13405350, 3400550, 3402555, 0, 3403346, 0, 0);
    $InitializeEvent(33, 13405350, 3400580, 3402544, 0, 3403342, 0, 1);
    $InitializeEvent(1, 13405510, 3400141);
    $InitializeEvent(2, 13405510, 3400142);
    $InitializeEvent(3, 13405510, 3400143);
    $InitializeEvent(4, 13405510, 3400144);
    $InitializeEvent(5, 13405510, 3400145);
    $InitializeEvent(6, 13405510, 3400146);
    $InitializeEvent(7, 13405510, 3400147);
    $InitializeEvent(8, 13405510, 3400148);
    $InitializeEvent(0, 13405610, 3400169);
    $InitializeEvent(1, 13405610, 3400170);
    $InitializeEvent(2, 13405610, 3400171);
    $InitializeEvent(3, 13405610, 3400172);
    $InitializeEvent(1, 13405520, 3400141, 3402541);
    $InitializeEvent(2, 13405520, 3400142, 3402541);
    $InitializeEvent(3, 13405520, 3400143, 3402541);
    $InitializeEvent(4, 13405520, 3400144, 3402541);
    $InitializeEvent(5, 13405520, 3400145, 3402541);
    $InitializeEvent(6, 13405520, 3400146, 3402541);
    $InitializeEvent(7, 13405520, 3400147, 3402541);
    $InitializeEvent(8, 13405520, 3400148, 3402541);
    $InitializeEvent(0, 13405530, 3400143, 3402549);
    $InitializeEvent(1, 13405530, 3400144, 3402549);
    $InitializeEvent(2, 13405530, 3400145, 3402549);
    $InitializeEvent(1, 13405540, 3400142, 3403340, 2, 1, 0);
    $InitializeEvent(2, 13405540, 3400155, 3403345, 2, 1, 2);
    $InitializeEvent(3, 13405540, 3400316, 3403344, 4, 0, 0);
    $InitializeEvent(0, 13405640, 3400404, 7000, 400028, 7001, 400028, 0, 0);
    $InitializeEvent(0, 13405680, 3400165, 3400166, 13);
    $InitializeEvent(1, 13405680, 3400165, 3400167, 13);
    $InitializeEvent(2, 13405680, 3400165, 3400168, 13);
    $InitializeEvent(0, 13405216, 3400509, 3402542, 0, 3403338, 1, 0);
    $InitializeEvent(0, 13405480, 3400207, 3402515, 3, 3010, 0, Disabled);
    $InitializeEvent(1, 13405480, 3400105, 3402512, 5, 7002, 0, Enabled);
    $InitializeEvent(2, 13405480, 3400106, 3402512, 5, 7003, 4, Enabled);
    $InitializeEvent(3, 13405480, 3400107, 3402513, 3, 7004, 0, Disabled);
    $InitializeEvent(4, 13405480, 3400505, 3402553, 3, 700, 1, Disabled);
    $InitializeEvent(5, 13405480, 3400506, 3402553, 3, 700, 0, Disabled);
    $InitializeEvent(6, 13405480, 3400282, 3402303, 3, 3006, 0, Disabled);
    $InitializeEvent(8, 13405480, 3400507, 3402553, 3, 605, 0, Disabled);
    $InitializeEvent(9, 13405480, 3400468, 3402562, 0, 3001, 1, Disabled);
    $InitializeEvent(10, 13405480, 3400469, 3402562, 0, 3001, 0, Disabled);
    $InitializeEvent(13, 13405480, 3400472, 3402562, 0, 3001, 2, Disabled);
    $InitializeEvent(11, 13405480, 3400315, 3402540, 1, 702, 2, Disabled);
    $InitializeEvent(12, 13405480, 3400409, 3402552, 1, 3012, 0, Disabled);
    $InitializeEvent(0, 13400930);
    $InitializeEvent(2, 13400900, 3400902, 1710, 1729, 1719, 1710);
    $InitializeEvent(3, 13400900, 3400903, 1710, 1729, 1719, 1711);
    $InitializeEvent(2, 13400910, 3400902, 73400420);
    $InitializeEvent(3, 13400910, 3400903, 73400421);
    $InitializeEvent(2, 13400920, 3400902, 73400420, 1710, 1729, 1725);
    $InitializeEvent(3, 13400920, 3400903, 73400421, 1710, 1729, 1726);
    $InitializeEvent(0, 13400970, 3400910);
    $InitializeEvent(1, 13400970, 3400911);
    $InitializeEvent(0, 13400980, 73400424, 43211);
    $InitializeEvent(0, 13400953, 1710, 73400430, 43200);
    $InitializeEvent(1, 13400953, 1711, 73400431, 43210);
    $InitializeEvent(0, 13400995, 13400970, 43800, 43802, 6671);
    $InitializeEvent(1, 13400980, 13400971, 43810);
    if (!EventFlag(13400999)) {
        $InitializeEvent(0, 13400941);
        $InitializeEvent(0, 13400942, 73400512);
        $InitializeEvent(0, 13400943, 3400900);
        $InitializeEvent(0, 13400944);
    } else {
L2:
        ChangeCharacterEnableState(3400900, Disabled);
    }
L3:
    $InitializeEvent(0, 13400951, 3400902, 73400422, 1720);
    $InitializeEvent(1, 13400951, 3400903, 73400423, 1721);
    DeleteMapSFX(3403911, false);
    DeleteMapSFX(3403912, false);
    DeleteMapSFX(3403913, false);
    DeleteMapSFX(3403914, false);
    DeleteMapSFX(3403915, false);
    DeleteMapSFX(3403916, false);
    $InitializeEvent(0, 13404401, 13404441, 3403911, 13404421, 13404431, 13401800, 6001);
    $InitializeEvent(0, 13404402, 13404442, 3403912, 13404422, 13404432, 13401800, 13404421);
    $InitializeEvent(0, 13404403, 13404443, 3403913, 13404423, 13404433, 13401800, 13404421);
    $InitializeEvent(0, 13404404, 13404444, 3403914, 13404424, 13404434, 13401800, 13404421);
    $InitializeEvent(0, 13404405, 13404445, 3403915, 13404425, 13404435, 13401850, 13404421);
    $InitializeEvent(0, 13404406, 13404446, 3403916, 13404426, 13404436, 13401850, 13404421);
    $InitializeEvent(1, 13404410, SingleplayerSummonSignType.NormalCoop, 3400921, 3402921, 13404421, 13404431, 13404441, 13401800, 10567);
    $InitializeEvent(2, 13404410, 6, 3400922, 3402922, 13404422, 13404432, 13404442, 13401800, 10562);
    $InitializeEvent(3, 13404410, 6, 3400923, 3402923, 13404423, 13404433, 13404443, 13401800, 10563);
    $InitializeEvent(4, 13404410, 5, 3400924, 3402924, 13404424, 13404434, 13404444, 13401800, 10565);
    $InitializeEvent(5, 13404410, 6, 3400925, 3402925, 13404425, 13404435, 13404445, 13401850, 10562);
    $InitializeEvent(6, 13404410, 6, 3400926, 3402926, 13404426, 13404436, 13404446, 13401850, 10563);
    $InitializeEvent(1, 13404450, 3400921, 3402930, 13404421, 13404431, 13404808);
    $InitializeEvent(2, 13404450, 3400922, 3402931, 13404422, 13404432, 13404808);
    $InitializeEvent(3, 13404450, 3400923, 3402931, 13404423, 13404433, 13404808);
    $InitializeEvent(4, 13404450, 3400924, 3402932, 13404424, 13404434, 13404808);
    $InitializeEvent(5, 13404450, 3400925, 3402935, 13404425, 13404435, 13404858);
    $InitializeEvent(6, 13404450, 3400926, 3402935, 13404426, 13404436, 13404858);
    $InitializeEvent(1, 13404460, 3400921, 3402930, 3402800, 3402801, 101130, 13404451, 3402801);
    $InitializeEvent(2, 13404460, 3400922, 3402931, 3402800, 3402801, 101130, 13404452, 3402801);
    $InitializeEvent(3, 13404460, 3400923, 3402931, 3402800, 3402801, 101130, 13404453, 3402801);
    $InitializeEvent(4, 13404460, 3400924, 3402932, 3402800, 3402801, 101130, 13404454, 3402801);
    $InitializeEvent(5, 13404460, 3400925, 3402935, 3402850, 3402851, 101130, 13404455, 3402851);
    $InitializeEvent(6, 13404460, 3400926, 3402935, 3402850, 3402851, 101130, 13404456, 3402851);
    $InitializeEvent(0, 13404490, 3400925, 13404425, 13404435, 13404858);
    $InitializeEvent(1, 13404490, 3400926, 13404426, 13404436, 13404858);
    SetEventPoint(3400911, 3402910, 0);
    $InitializeEvent(0, 13401250, 3401250, 0);
    $InitializeEvent(1, 13401250, 3401251, 0);
    $InitializeEvent(2, 13401250, 3401252, 0);
    $InitializeEvent(3, 13401250, 3401253, 0);
    $InitializeEvent(4, 13401250, 3401254, 0);
    $InitializeEvent(5, 13401250, 3401255, 0);
    $InitializeEvent(6, 13401250, 3401256, 0);
    $InitializeEvent(7, 13401250, 3401257, 0);
    $InitializeEvent(8, 13401250, 3401258, 0);
    $InitializeEvent(9, 13401250, 3401259, 0);
    $InitializeEvent(10, 13401250, 3401260, 0);
    $InitializeEvent(11, 13401250, 3401261, 0);
    $InitializeEvent(12, 13401250, 3401262, 0);
    $InitializeEvent(13, 13401250, 3401263, 0);
    $InitializeEvent(14, 13401250, 3401264, 0);
    $InitializeEvent(15, 13401250, 3401265, 0);
    $InitializeEvent(16, 13401250, 3401266, 0);
    $InitializeEvent(17, 13401250, 3401267, 0);
    $InitializeEvent(18, 13401250, 3401268, 0);
    $InitializeEvent(19, 13401250, 3401269, 0);
    $InitializeEvent(20, 13401250, 3401270, 0);
    $InitializeEvent(21, 13401250, 3401271, 0);
    $InitializeEvent(22, 13401250, 3401272, 0);
    $InitializeEvent(23, 13401250, 3401273, 0);
    $InitializeEvent(24, 13401250, 3401274, 0);
    $InitializeEvent(25, 13401250, 3401275, 0);
    $InitializeEvent(26, 13401250, 3401276, 0);
    $InitializeEvent(27, 13401250, 3401277, 0);
    $InitializeEvent(28, 13401250, 3401278, 0);
    $InitializeEvent(29, 13401250, 3401279, 0);
    $InitializeEvent(30, 13401250, 3401280, 0);
    $InitializeEvent(31, 13401250, 3401281, 0);
    $InitializeEvent(32, 13401250, 3401282, 0);
    $InitializeEvent(33, 13401250, 3401283, 0);
    $InitializeEvent(34, 13401250, 3401284, 0);
    $InitializeEvent(35, 13401250, 3401285, 0);
    $InitializeEvent(36, 13401250, 3401286, 0);
    $InitializeEvent(37, 13401250, 3401287, 0);
    $InitializeEvent(38, 13401250, 3401288, 0);
    $InitializeEvent(39, 13401250, 3401289, 0);
    $InitializeEvent(40, 13401250, 3401290, 0);
    $InitializeEvent(41, 13401250, 3401291, 0);
    $InitializeEvent(42, 13401250, 3401292, 0);
    $InitializeEvent(43, 13401250, 3401293, 0);
    $InitializeEvent(0, 13401350, 3401294, 0, 3402547);
    $InitializeEvent(1, 13401350, 3401295, 0, 3402547);
    $InitializeEvent(2, 13401350, 3401296, 0, 3402547);
    $InitializeEvent(3, 13401350, 3401297, 0, 3402547);
    $InitializeEvent(4, 13401350, 3401298, 0, 3402547);
    $InitializeEvent(5, 13401350, 3401299, 0, 3402547);
    $InitializeEvent(6, 13401350, 3401300, 0, 3402547);
    $InitializeEvent(7, 13401350, 3401301, 0, 3402547);
    $InitializeEvent(8, 13401350, 3401302, 0, 3402547);
    $InitializeEvent(9, 13401350, 3401303, 0, 3402547);
    $InitializeEvent(10, 13401350, 3401304, 0, 3402547);
    $InitializeEvent(0, 13400998);
});

// プリコンストラクタ
$Event(50, Default, function() {
    $InitializeEvent(0, 13400940);
    $InitializeEvent(0, 13400950, 3400902, 3400903);
});

// 聖堂街D_マルチ閉じ込め壁
$Event(13400010, Default, function() {
    SetNetworkSyncState(Disabled);
    DeactivateObject(3401801, Disabled);
    DeleteMapSFX(3403801, true);
    WaitFor(
        HasMultiplayerState(MultiplayerState.ConnectingtoMultiplayer)
            || HasMultiplayerState(MultiplayerState.Multiplayer)
            || !EventFlag(9471));
    DeactivateObject(3401801, Enabled);
    SpawnMapSFX(3403801);
    WaitFor(
        !(HasMultiplayerState(MultiplayerState.ConnectingtoMultiplayer)
            || HasMultiplayerState(MultiplayerState.Multiplayer))
            && EventFlag(9471));
    RestartEvent();
});

// TGS版と通常版の切り替え
$Event(13400998, Restart, function() {
    if (!EventFlag(13400999)) {
        ChangeCharacterEnableState(3400316, Disabled);
        ChangeCharacterEnableState(3400509, Disabled);
        ChangeCharacterEnableState(3400550, Disabled);
        ChangeCharacterEnableState(3400143, Disabled);
        ChangeCharacterEnableState(3400144, Disabled);
        ChangeCharacterEnableState(3400142, Disabled);
        ChangeCharacterEnableState(3400141, Disabled);
        ChangeCharacterEnableState(3400145, Disabled);
        ChangeCharacterEnableState(3400146, Disabled);
        ChangeCharacterEnableState(3400147, Disabled);
        ChangeCharacterEnableState(3400148, Disabled);
        ChangeCharacterEnableState(3400155, Disabled);
        ChangeCharacterEnableState(3400452, Disabled);
        ChangeCharacterEnableState(3400453, Disabled);
        ChangeCharacterEnableState(3400461, Disabled);
        ChangeCharacterEnableState(3400462, Disabled);
        ChangeCharacterEnableState(3400470, Disabled);
        ChangeCharacterEnableState(3400471, Disabled);
        DeactivateObject(3401180, Disabled);
        DeactivateObject(3401181, Disabled);
        DeactivateObject(3401182, Disabled);
        DeactivateObject(3401183, Disabled);
        DeactivateObject(3401184, Disabled);
        DeactivateObject(3401185, Disabled);
        DeactivateObject(3401186, Disabled);
        DeactivateObject(3401187, Disabled);
        DeactivateObject(3401188, Disabled);
        DeactivateObject(3401189, Disabled);
        DeactivateObject(3401190, Disabled);
        DeactivateObject(3401191, Disabled);
        DeactivateObject(3401192, Disabled);
        DeactivateObject(3401193, Disabled);
        DeactivateObject(3401194, Disabled);
        SetObjectTreasureState(3401180, Disabled);
        SetObjectTreasureState(3401181, Disabled);
        SetObjectTreasureState(3401182, Disabled);
        SetObjectTreasureState(3401183, Disabled);
        SetObjectTreasureState(3401184, Disabled);
        SetObjectTreasureState(3401185, Disabled);
        SetObjectTreasureState(3401186, Disabled);
        SetObjectTreasureState(3401187, Disabled);
        SetObjectTreasureState(3401188, Disabled);
        SetObjectTreasureState(3401189, Disabled);
        SetObjectTreasureState(3401190, Disabled);
        SetObjectTreasureState(3401191, Disabled);
        SetObjectTreasureState(3401192, Disabled);
        SetObjectTreasureState(3401193, Disabled);
        ChangeCharacterEnableState(3400920, Disabled);
        DeleteMapSFX(3403910, true);
        EndEvent();
    }
L0:
    ChangeCharacterEnableState(3400601, Disabled);
    ChangeCharacterEnableState(3400552, Disabled);
    ChangeCharacterEnableState(3400511, Disabled);
    ChangeCharacterEnableState(3400409, Disabled);
    ChangeCharacterEnableState(3400412, Disabled);
    ChangeCharacterEnableState(3400413, Disabled);
    ChangeCharacterEnableState(3400510, Disabled);
    ChangeCharacterEnableState(3400465, Disabled);
    ChangeCharacterEnableState(3400466, Disabled);
    ChangeCharacterEnableState(3400467, Disabled);
    ChangeCharacterEnableState(3400468, Disabled);
    ChangeCharacterEnableState(3400469, Disabled);
    ChangeCharacterEnableState(3400655, Disabled);
    DeactivateObject(3401195, Disabled);
    DeactivateObject(3401196, Disabled);
    DeactivateObject(3401197, Disabled);
    DeactivateObject(3401198, Disabled);
    DeactivateObject(3401199, Disabled);
    DeactivateObject(3401200, Disabled);
    DeactivateObject(3401201, Disabled);
    DeactivateObject(3401202, Disabled);
    DeactivateObject(3401203, Disabled);
    DeactivateObject(3401204, Disabled);
    DeactivateObject(3401205, Disabled);
    DeactivateObject(3401206, Disabled);
    DeactivateObject(3401207, Disabled);
    SetObjectTreasureState(3401195, Disabled);
    SetObjectTreasureState(3401196, Disabled);
    SetObjectTreasureState(3401197, Disabled);
    SetObjectTreasureState(3401198, Disabled);
    SetObjectTreasureState(3401199, Disabled);
    SetObjectTreasureState(3401200, Disabled);
    SetObjectTreasureState(3401201, Disabled);
    SetObjectTreasureState(3401202, Disabled);
    SetObjectTreasureState(3401203, Disabled);
    SetObjectTreasureState(3401204, Disabled);
    SetObjectTreasureState(3401205, Disabled);
    SetObjectTreasureState(3401206, Disabled);
    SetObjectTreasureState(3401207, Disabled);
});

// 死体が動く_XX
$Event(13401250, Default, function(entityId, animationId) {
    SetNetworkSyncState(Disabled);
    if (!EntityInRadiusOfEntity(10000, entityId, 5)) {
        ForceAnimationPlayback(entityId, 6, false, true, false);
        WaitFor(EntityInRadiusOfEntity(10000, entityId, 5));
    }
L0:
    ForceAnimationPlayback(entityId, animationId, false, true, false);
    RestartEvent();
});

// 死体が動く_一斉起動_XX
$Event(13401350, Default, function(entityId, animationId, areaEntityId) {
    SetNetworkSyncState(Disabled);
    if (!InArea(10000, areaEntityId)) {
        ForceAnimationPlayback(entityId, 6, false, true, false);
        WaitFor(EntityInRadiusOfEntity(10000, entityId, 5));
    }
L0:
    WaitRandomTimeFrames(0, 75);
    ForceAnimationPlayback(entityId, animationId, false, true, false);
    RestartEvent();
});

// 天球の削除
$Event(13401500, Default, function() {
    if (!EventFlag(9469)) {
        DeactivateObject(3400600, Disabled);
        WaitFor(EventFlag(9469));
    }
L0:
    ActivateMapPart(3404200, Disabled);
    ActivateMapPart(3404201, Disabled);
    ActivateMapPart(3404202, Disabled);
    ActivateMapPart(3404203, Disabled);
    DeleteMapSFX(3403600, true);
    DeleteMapSFX(3403601, true);
    DeleteMapSFX(3403602, true);
    DeactivateObject(3400600, Enabled);
});

// 聖堂街Aからのワープ
$Event(13401000, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(EventFlag(12401000));
    SetEventFlag(12401000, OFF);
    SetSpEffect(10000, 110, false);
    SetSpEffect(10000, 111, false);
    SetSpEffect(10000, 112, false);
    SetSpEffect(10000, 113, false);
    SetSpEffect(10000, 114, false);
    SetSpEffect(10000, 115, false);
    SetSpEffect(10000, 116, false);
    SetPlayerRespawnPoint(3402958);
    EndIf(ThisEvent());
    $InitializeEvent(0, 9350, 2);
});

// 聖堂街D_出現寡婦_出現_XX
$Event(13404700, Restart, function(chrEntityId, eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4) {
    if (EventFlag(eventFlagId2)) {
        SetCharacterAIState(chrEntityId, Disabled);
        ForceAnimationPlayback(chrEntityId, 7010, false, false, false);
        EndEvent();
    }
L0:
    EndIf(EventFlag(eventFlagId));
    SetCharacterAIState(chrEntityId, Disabled);
    ForceAnimationPlayback(chrEntityId, 7010, true, false, false);
    onlineFlagMapChrSp &= IsOnline() && !EventFlag(eventFlagId2) && !EventFlag(eventFlagId3) && PlayerInMap(34, 0);
    chrOnline &= CharacterType(10000, TargetType.Alive) && PlayersSoulLevel() >= 30;
    if (EventFlag(eventFlagId4)) {
        chrOnline &= NumberOfClientsOfType(ClientType.Coop) >= 1;
    }
    onlineFlagMapChrSp &= chrOnline || CharacterHasSpEffect(10000, 9025);
    WaitFor(onlineFlagMapChrSp);
    WaitFor(RandomElapsedSeconds(10, 10));
    if (EventFlag(eventFlagId4)) {
        DisplayMessage(109000, 0);
    }
    ForceAnimationPlayback(chrEntityId, 7011, false, false, false);
    WaitFixedTimeFrames(59);
    SetCharacterAIState(chrEntityId, Enabled);
    SetEventFlag(eventFlagId, ON);
});

// 聖堂街D_出現寡婦_鐘を鳴らす_XX
$Event(13404710, Restart, function(chrEntityId, eventFlagId, eventFlagId2, eventFlagId3) {
    EndIf(EventFlag(eventFlagId2));
    WaitFor(
        EventFlag(eventFlagId)
            && !EventFlag(eventFlagId3)
            && !EventFlag(eventFlagId2)
            && PlayerInMap(34, 0)
            && NumberOfClientsOfType(ClientType.Invader) == 0);
    WaitFor(CharacterType(10000, TargetType.Alive) && RandomElapsedSeconds(10, 10));
    SetSpEffect(10000, 9020, false);
    SetSpEffect(chrEntityId, 9100, false);
    RequestCharacterAIReplan(chrEntityId);
    SetEventFlag(eventFlagId3, ON);
    DisplayMessage(100002, 0);
    RestartEvent();
});

// 聖堂街D_出現寡婦_鐘を止める_XX
$Event(13404720, Restart, function(chrEntityId, eventFlagId, eventFlagId2, eventFlagId3) {
    EndIf(EventFlag(eventFlagId2));
    WaitFor(
        EventFlag(eventFlagId)
            && EventFlag(eventFlagId3)
            && (EventFlag(eventFlagId2)
                || NumberOfClientsOfType(ClientType.Invader) >= 1
                || !PlayerInMap(34, 0)));
    WaitFor(CharacterType(10000, TargetType.Alive));
    ClearSpEffect(10000, 9020);
    ClearSpEffect(chrEntityId, 9100);
    RequestCharacterAIReplan(chrEntityId);
    SetEventFlag(eventFlagId3, OFF);
    RestartEvent();
});

// 聖堂街D_出現寡婦_消滅_XX
$Event(13404730, Restart, function(chrEntityId, eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4, eventFlagId5, eventFlagId6, eventFlagId7) {
    EndIf(EventFlag(eventFlagId2) || EventFlag(eventFlagId3) || EventFlag(eventFlagId4));
    hp = HPRatio(chrEntityId) == 0;
    flag = EventFlag(eventFlagId4) || EventFlag(13404860) || EventFlag(eventFlagId7);
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

// 聖堂街D_同一領域判定_前半
$Event(13404740, Restart, function() {
    cond = PlayerStandingOnHit(3404000)
        || PlayerStandingOnHit(3404001)
        || PlayerStandingOnHit(3404002)
        || PlayerStandingOnHit(3404003)
        || PlayerStandingOnHit(3404004)
        || PlayerStandingOnHit(3404005)
        || PlayerStandingOnHit(3404006)
        || PlayerStandingOnHit(3404007)
        || PlayerStandingOnHit(3404008)
        || PlayerStandingOnHit(3404009);
    WaitFor(CharacterType(10000, TargetType.Alive) && cond);
    SetEventFlag(13404741, ON);
    hit = PlayerStandingOnHit(3404000)
        || PlayerStandingOnHit(3404001)
        || PlayerStandingOnHit(3404002)
        || PlayerStandingOnHit(3404003)
        || PlayerStandingOnHit(3404004)
        || PlayerStandingOnHit(3404005)
        || PlayerStandingOnHit(3404006)
        || PlayerStandingOnHit(3404007)
        || PlayerStandingOnHit(3404008)
        || PlayerStandingOnHit(3404009);
    WaitFor(CharacterType(10000, TargetType.Alive) && !cond);
    SetEventFlag(13404741, OFF);
    RestartEvent();
});

// 聖堂街D_同一領域判定_後半
$Event(13404742, Restart, function() {
    WaitFor(
        CharacterType(10000, TargetType.Alive)
            && (PlayerStandingOnHit(3404020)
                || PlayerStandingOnHit(3404021)
                || PlayerStandingOnHit(3404022)
                || PlayerStandingOnHit(3404023)
                || PlayerStandingOnHit(3404024)
                || PlayerStandingOnHit(3404025)
                || PlayerStandingOnHit(3404026)
                || PlayerStandingOnHit(3404027)
                || PlayerStandingOnHit(3404028)
                || PlayerStandingOnHit(3404029)
                || PlayerStandingOnHit(3404030)
                || PlayerStandingOnHit(3404031)
                || PlayerStandingOnHit(3404032)
                || PlayerStandingOnHit(3404033)
                || PlayerStandingOnHit(3404034)
                || PlayerStandingOnHit(3404035)
                || PlayerStandingOnHit(3404036)
                || PlayerStandingOnHit(3404037)
                || PlayerStandingOnHit(3404038)
                || PlayerStandingOnHit(3404039)
                || PlayerStandingOnHit(3404040)
                || PlayerStandingOnHit(3404041)
                || PlayerStandingOnHit(3404042)
                || PlayerStandingOnHit(3404043)
                || PlayerStandingOnHit(3404044)
                || PlayerStandingOnHit(3404045)));
    SetEventFlag(13404743, ON);
    WaitFor(
        CharacterType(10000, TargetType.Alive)
            && !(PlayerStandingOnHit(3404020)
                || PlayerStandingOnHit(3404021)
                || PlayerStandingOnHit(3404022)
                || PlayerStandingOnHit(3404023)
                || PlayerStandingOnHit(3404024)
                || PlayerStandingOnHit(3404025)
                || PlayerStandingOnHit(3404026)
                || PlayerStandingOnHit(3404027)
                || PlayerStandingOnHit(3404028)
                || PlayerStandingOnHit(3404029)
                || PlayerStandingOnHit(3404030)
                || PlayerStandingOnHit(3404031)
                || PlayerStandingOnHit(3404032)
                || PlayerStandingOnHit(3404033)
                || PlayerStandingOnHit(3404034)
                || PlayerStandingOnHit(3404035)
                || PlayerStandingOnHit(3404036)
                || PlayerStandingOnHit(3404037)
                || PlayerStandingOnHit(3404038)
                || PlayerStandingOnHit(3404039)
                || PlayerStandingOnHit(3404040)
                || PlayerStandingOnHit(3404041)
                || PlayerStandingOnHit(3404042)
                || PlayerStandingOnHit(3404043)
                || PlayerStandingOnHit(3404044)
                || PlayerStandingOnHit(3404045)));
    SetEventFlag(13404743, OFF);
    RestartEvent();
});

// ルドウイーク_ボス撃破
$Event(13401800, Default, function() {
    if (EventFlag(9471)) {
        ChangeCharacterEnableState(3400800, Disabled);
        ChangeCharacterEnableState(3400801, Disabled);
        ForceCharacterDeath(3400800, false);
        ForceCharacterDeath(3400801, false);
        DeactivateObject(3401800, Disabled);
        DeleteMapSFX(3403800, true);
        EndEvent();
    }
L0:
    chr |= CharacterDead(3400800);
    if (!EventFlag(13400999)) {
        chr2 = CharacterDead(3400801);
        chr |= chr2;
    }
    WaitFor(chr);
    DisplayBanner(TextBannerType.DemonKilled);
    DeactivateObject(3401800, Disabled);
    DeleteMapSFX(3403800, true);
    SetLockcamSlotNumber(34, 0, 0);
    WaitFixedTimeSeconds(3);
    if (!chr2.Passed) {
        HandleBossDefeat(3400800);
    } else {
        HandleBossDefeat(3400801);
    }
    SetNetworkSyncState(Disabled);
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        WaitFor(CharacterType(10000, TargetType.Alive));
        if (EventFlag(13400999)) {
            WaitFixedTimeSeconds(3);
            PlayCutsceneToPlayer(34000040, CutscenePlayMode.Unskippable, 10000);
            WaitFixedTimeFrames(1);
            Missing(0);
        }
        AwardAchievement(36);
        $InitializeEvent(0, 9350, 3);
        if (!EventFlag(6674)) {
            AwardItemLot(3401800);
        } else {
            AwardItemLot(3401802);
        }
        SetEventFlag(3400, ON);
        SetEventFlag(3401, ON);
        SetEventFlag(3402, ON);
        SetEventFlag(3403, ON);
        SetEventFlag(9471, ON);
        EndTimeMeasurement(9340000);
        EndTimeMeasurement(9340001);
        EndTimeMeasurement(9340010);
        CreatePlaylog(0);
        ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 12, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 12, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Weapon, 12, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Armor, 12, PlayLogMultiplayerType.HostOnly);
        EndEvent();
    }
L1:
    WaitFor(CharacterType(10000, TargetType.WhitePhantom));
    WaitFixedTimeSeconds(0);
});

// ルドウイーク_ホストがボス部屋入場_初戦
$Event(13404811, Default, function() {
    EndIf(EventFlag(9471));
    EndIf(EventFlag(13401801));
    ChangeCharacterEnableState(3400800, Disabled);
    WaitFor(
        !EventFlag(13401800)
            && !EventFlag(13401801)
            && CharacterType(10000, TargetType.Alive)
            && InArea(10000, 3402805));
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        IssueBossRoomEntryNotification(0);
    }
    SetEventFlag(13404810, ON);
    EndIf(CharacterType(10000, TargetType.BlackPhantom));
    SetEventFlag(9180, ON);
});

// ルドウイーク_ホストがボス部屋入場_初戦_後半
$Event(13401801, Default, function() {
    EndIf(EventFlag(9471));
    EndIf(ThisEvent());
    if (!CharacterType(10000, TargetType.BlackPhantom)) {
        WaitFor(
            !EventFlag(13401800)
                && !ThisEvent()
                && EventFlag(13404811)
                && CharacterType(10000, TargetType.Alive)
                && InArea(10000, 3402805));
        if (!HasMultiplayerState(MultiplayerState.Multiplayer)) {
            PlayCutsceneToPlayer(34000020, CutscenePlayMode.Skippable, 10000);
        } else if (!HasMultiplayerState(MultiplayerState.Client)) {
            PlayCutsceneToPlayer(34000020, CutscenePlayMode.Unskippable, 10000);
        } else {
            PlayCutsceneToPlayer(34000020, CutscenePlayMode.Unskippable, 10000);
        }
        WaitFixedTimeFrames(1);
        SetEventFlag(9180, OFF);
        SetEventFlag(13404808, ON);
        ChangeCharacterEnableState(3400800, Enabled);
        EndIf(EventFlag(9344));
        $InitializeEvent(0, 9350, 1);
        SetEventFlag(9344, ON);
        EndEvent();
    }
L0:
    WaitFor(EventFlag(6001));
    WaitFixedTimeSeconds(0);
});

// ルドウイーク_死体が怯える
$Event(13401802, Default, function() {
    EndIf(EventFlag(13401803));
    EndIf(EventFlag(13401800));
    SetCharacterInvincibility(3400810, Enabled);
    WaitFor(EventFlag(13401801));
    SetSpEffect(3400810, 5401, false);
    SetCharacterInvincibility(3400810, Disabled);
    ForceAnimationPlayback(3400810, 3000, false, false, false);
    WaitFor(!CharacterDead(3400810) && EventFlag(13401800));
    ForceAnimationPlayback(3400810, 7000, false, false, false);
});

// ルドウイーク_死体が死亡
$Event(13401803, Restart, function() {
    if (ThisEvent()) {
        ForceCharacterTreasure(3400810);
        EndEvent();
    }
L0:
    WaitFor(CharacterDead(3400810));
    WaitFixedTimeSeconds(0);
});

// ルドウイーク_時間差入場ゲスト用対処処理
$Event(13401804, Default, function() {
    WaitFor(CharacterType(10000, TargetType.Alive) && EventFlag(13404808));
    EndIf(HasMultiplayerState(MultiplayerState.Host));
    ChangeCharacterEnableState(3400800, Enabled);
    SetEventFlag(13404808, ON);
    SetEventFlag(13401801, ON);
});

// ルドウイーク_ホストがボス部屋入場_再戦
$Event(13404800, Default, function() {
    EndIf(EventFlag(9471));
    if (!EventFlag(13401801)) {
        if (!HasMultiplayerState(MultiplayerState.Client)) {
            DeactivateObject(3401800, Disabled);
            DeleteMapSFX(3403800, false);
        }
        WaitFor(!EventFlag(13401800) && EventFlag(13401801));
        DeactivateObject(3401800, Enabled);
        SpawnMapSFX(3403800);
    }
L0:
    flagChrAct = !EventFlag(13401800)
        && CharacterType(10000, TargetType.Alive)
        && ActionButtonInArea(3400800, 3401800);
    flag = EventFlag(13401800);
    WaitFor(flagChrAct || flag);
    EndIf(flag.Passed);
    RotateCharacter(10000, 3402800, 101130, true);
    chrArea = CharacterType(10000, TargetType.Alive) && InArea(10000, 3402801);
    chrTime = CharacterType(10000, TargetType.Alive) && ElapsedSeconds(2);
    WaitFor(chrArea || chrTime);
    if (!chrTime.Passed) {
        SetEventFlag(13404808, ON);
    }
    RestartEvent();
});

// ルドウイーク_ゲストがボス部屋入場
$Event(13404801, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(9471));
    WaitFor(
        !EventFlag(13401800)
            && EventFlag(13401801)
            && EventFlag(13404808)
            && CharacterType(10000, TargetType.WhitePhantom)
            && ActionButtonInArea(3400800, 3401800));
    RotateCharacter(10000, 3402800, 101130, true);
    chrArea = CharacterType(10000, TargetType.WhitePhantom) && InArea(10000, 3402801);
    time = ElapsedSeconds(2);
    WaitFor(chrArea || time);
    if (!time.Passed) {
        SetEventFlag(13404809, ON);
    }
    RestartEvent();
});

// ルドウイーク_ボスが動き出す
$Event(13404802, Default, function() {
    EndIf(EventFlag(9471));
    SetCharacterAIState(3400800, Disabled);
    SetCharacterAIState(3400801, Disabled);
    SetCharacterHPBarDisplay(3400800, Disabled);
    SetCharacterHPBarDisplay(3400801, Disabled);
    CreateReferredDamagePair(3400800, 3400801);
    if (EventFlag(13400999)) {
        SetSpEffect(3400800, 8040, false);
        SetSpEffect(3400801, 8040, false);
    }
    if (!ThisEvent()) {
        WaitFor(EventFlag(13404808));
        if (!HasMultiplayerState(MultiplayerState.Client)) {
            if (!EventFlag(13404810)) {
                IssueBossRoomEntryNotification(0);
            }
            SetNetworkUpdateAuthority(3400800, AuthorityLevel.Forced);
            SetNetworkUpdateAuthority(3400801, AuthorityLevel.Forced);
        }
    }
L0:
    SetEventFlag(13404810, ON);
    SetEventFlag(13404808, ON);
    GotoIf(L1, NumberOfCoopClients() == 0);
    GotoIf(L2, NumberOfCoopClients() == 1);
    GotoIf(L3, NumberOfCoopClients() == 2);
L1:
    Goto(L4);
L2:
    SetSpEffect(3400800, 7500, true);
    SetSpEffect(3400801, 7500, true);
    WaitFixedTimeFrames(1);
    AdaptHpchangingSpEffectToNPCPartOfTarget(3400800);
    AdaptHpchangingSpEffectToNPCPartOfTarget(3400801);
    Goto(L4);
L3:
    SetSpEffect(3400800, 7501, true);
    SetSpEffect(3400801, 7501, true);
    WaitFixedTimeFrames(1);
    AdaptHpchangingSpEffectToNPCPartOfTarget(3400800);
    AdaptHpchangingSpEffectToNPCPartOfTarget(3400801);
    Goto(L4);
L4:
    if (!EventFlag(13404825)) {
        SetCharacterAIState(3400800, Enabled);
        SetNetworkUpdateRate(3400800, true, CharacterUpdateFrequency.AlwaysUpdate);
        SetNetworkUpdateRate(3400801, true, CharacterUpdateFrequency.Every2Frames);
        DisplayBossHealthBar(Enabled, 3400800, 0, 451000);
    } else {
        SetCharacterAIState(3400801, Enabled);
        SetNetworkUpdateRate(3400800, true, CharacterUpdateFrequency.NoUpdate);
        SetNetworkUpdateRate(3400801, true, CharacterUpdateFrequency.AlwaysUpdate);
        DisplayBossHealthBar(Enabled, 3400801, 0, 451005);
    }
    CreatePlaylog(46);
    StartTimeMeasurement(3400010, 62, Enabled);
});

// ルドウイーク_ボスBGM_ON
$Event(13404803, Default, function() {
    SetNetworkSyncState(Disabled);
    SetMapSoundState(3403802, Disabled);
    SetMapSoundState(3403803, Disabled);
    EndIf(EventFlag(9471));
    if (!ThisEvent()) {
        flagArea &= !EventFlag(13401800) && EventFlag(13404802);
        if (!HasMultiplayerState(MultiplayerState.Host)) {
            flagArea &= EventFlag(13404809);
        }
        flagArea &= InArea(10000, 3402802);
        WaitFor(flagArea);
        EnableBossMapSound(3403802, Enabled);
        flagArea2 &= EventFlag(13404824);
    }
L0:
    flagArea2 &= !EventFlag(13401800) && EventFlag(13404802);
    if (!HasMultiplayerState(MultiplayerState.Host)) {
        flagArea2 &= EventFlag(13404809);
    }
    flagArea2 &= InArea(10000, 3402802);
    WaitFor(flagArea2);
    EnableBossMapSound(3403802, Disabled);
    WaitFixedTimeFrames(0);
    EnableBossMapSound(3403803, Enabled);
});

// ルドウイーク_ボスカメラ
$Event(13404804, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(9471));
    WaitFor(EventFlag(13404825));
    WaitFor(!CharacterDead(3400801) && EntityInRadiusOfEntity(10000, 3400801, 9));
    SetLockcamSlotNumber(34, 0, 1);
    WaitFor(!CharacterDead(3400801) && !EntityInRadiusOfEntity(10000, 3400801, 12));
    SetLockcamSlotNumber(34, 0, 0);
    RestartEvent();
});

// ルドウイーク_ボスBGM_OFF
$Event(13404805, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(9471));
    WaitFor(EventFlag(13401800));
    EnableBossMapSound(3403802, Disabled);
    EnableBossMapSound(3403803, Disabled);
    EnableBossMapSound(-1, Disabled);
});

// ルドウイーク_他人の世界で霧壁あたり無効
$Event(13404806, Default, function() {
    WaitFor(CharacterType(10000, TargetType.Alive) && EntityInRadiusOfEntity(10000, 3401800, 6));
    SetCharacterGravityMaphitStateExcludingOwnWorld(10000, Disabled);
    WaitFixedTimeFrames(6);
    RestartEvent();
});

// ルドウイーク_他人の世界で霧壁あたり無効2
$Event(13404807, Default, function() {
    WaitFor(
        CharacterType(10000, TargetType.Alive)
            && !EntityInRadiusOfEntity(10000, 3401800, 6)
            && EntityInRadiusOfEntity(10000, 3401800, 12));
    SetCharacterGravityMaphitStateExcludingOwnWorld(10000, Enabled);
    WaitFixedTimeFrames(6);
    RestartEvent();
});

// ルドウイーク_ヒートアップ0
$Event(13404820, Default, function() {
    EndIf(EventFlag(9471));
    flagHpChr = ((EventFlag(13400999) && HPRatio(3400800) < 0.9)
        || (!EventFlag(13400999) && HPRatio(3400800) < 0.9))
        && CharacterHasEventMessage(3400800, 10);
    chr = CharacterHasEventMessage(3400800, 20);
    WaitFor(flagHpChr || chr);
    EndIf(chr.Passed);
    RequestCharacterAICommand(3400800, 100, 0);
    WaitFor(CharacterHasEventMessage(3400800, 20));
    RequestCharacterAICommand(3400800, -1, 0);
});

// ルドウイーク_ヒートアップ1
$Event(13404821, Default, function() {
    EndIf(EventFlag(9471));
    flagHpChr = ((EventFlag(13400999) && HPRatio(3400800) < 0.8)
        || (!EventFlag(13400999) && HPRatio(3400800) < 0.85))
        && CharacterHasEventMessage(3400800, 10)
        && EventFlag(13404820);
    chr = CharacterHasEventMessage(3400800, 30);
    WaitFor(flagHpChr || chr);
    EndIf(chr.Passed);
    RequestCharacterAICommand(3400800, 101, 0);
    WaitFor(CharacterHasEventMessage(3400800, 30));
    RequestCharacterAICommand(3400800, -1, 0);
});

// ルドウイーク_ヒートアップ2
$Event(13404822, Default, function() {
    EndIf(EventFlag(9471));
    flagHpChr = ((EventFlag(13400999) && HPRatio(3400800) < 0.7)
        || (!EventFlag(13400999) && HPRatio(3400800) < 0.8))
        && CharacterHasEventMessage(3400800, 10)
        && EventFlag(13404821);
    chr = CharacterHasEventMessage(3400800, 40);
    WaitFor(flagHpChr || chr);
    EndIf(chr.Passed);
    RequestCharacterAICommand(3400800, 102, 0);
    WaitFor(CharacterHasEventMessage(3400800, 40));
    RequestCharacterAICommand(3400800, -1, 0);
});

// ルドウイーク_ヒートアップ3
$Event(13404823, Default, function() {
    EndIf(EventFlag(9471));
    flagHpChr = ((EventFlag(13400999) && HPRatio(3400800) < 0.5)
        || (!EventFlag(13400999) && HPRatio(3400800) < 0.75))
        && CharacterHasEventMessage(3400800, 10)
        && EventFlag(13404822);
    chr = CharacterHasEventMessage(3400800, 50);
    WaitFor(flagHpChr || chr);
    EndIf(chr.Passed);
    RequestCharacterAICommand(3400800, 103, 0);
    WaitFor(CharacterHasEventMessage(3400800, 50));
    RequestCharacterAICommand(3400800, -1, 0);
});

// ルドウイーク_ヒートアップ4
$Event(13404824, Default, function() {
    EndIf(EventFlag(9471));
    EndIf(EventFlag(13404825));
    WaitFor(HPRatio(3400800) < 0.5 && HPRatio(3400800) > 0);
    SetEventFlag(9180, ON);
});

// ルドウイーク_ヒートアップ4_後半
$Event(13404825, Default, function() {
    EndIf(EventFlag(9471));
    if (ThisEvent()) {
        ChangeCharacterEnableState(3400800, Disabled);
        EndEvent();
    }
L0:
    SetCharacterGravity(3400801, Disabled);
    SetCharacterAnimationState(3400801, Disabled);
    WaitFor(CharacterType(10000, TargetType.Alive) && EventFlag(13404824));
    if (!HasMultiplayerState(MultiplayerState.Multiplayer)) {
        PlayCutsceneAndWarpPlayer(34000030, CutscenePlayMode.Skippable, 3402807, 34, 0, 10000);
    } else if (!HasMultiplayerState(MultiplayerState.Client)) {
        PlayCutsceneAndWarpPlayer(34000030, CutscenePlayMode.Unskippable, 3402807, 34, 0, 10000);
    } else {
        PlayCutsceneToPlayer(34000030, CutscenePlayMode.Unskippable, 10000);
    }
    WaitFixedTimeFrames(1);
    DisplayBossHealthBar(Disabled, 3400800, 0, 451000);
    SetEventFlag(9180, OFF);
    ChangeCharacterEnableState(3400800, Disabled);
    SetNetworkUpdateRate(3400801, true, CharacterUpdateFrequency.AlwaysUpdate);
    SetNetworkUpdateRate(3400800, true, CharacterUpdateFrequency.NoUpdate);
    CharacterWarpRequest(3400800, TargetEntityType.Area, 3402900, -1);
    WarpCharacterAndCopyFloor(3400801, TargetEntityType.Area, 3402806, -1, 3400800);
    SetCharacterGravity(3400801, Enabled);
    SetCharacterAnimationState(3400801, Enabled);
    ForceAnimationPlayback(3400801, 7000, false, false, false);
    WaitFixedTimeFrames(96);
    ClearSpEffect(3400801, 5300);
    SetSpEffect(3400801, 5333, false);
    SetCharacterAIState(3400801, Enabled);
    DisplayBossHealthBar(Enabled, 3400801, 0, 451005);
});

// ルドウイーク_部位損傷_XX
$Event(13404830, Default, function(npcPartId, npcPartId2, npcPartGroupIdx, npcPartHP, spEffectId, animationId, timeFrames) {
    EndIf(EventFlag(9471));
    CreateNPCPart(3400800, npcPartId, npcPartGroupIdx, npcPartHP, 1, 1, false, false);
    SetNPCPartSEAndSFX(3400800, npcPartId2, 72, 72);
    hp = NPCPartHP(3400800, npcPartId2) <= 0;
    hpFlag = HPRatio(3400800) <= 0 || EventFlag(13404825);
    WaitFor(hp || hpFlag);
    EndIf(hpFlag.Passed);
    CreateNPCPart(3400800, npcPartId, npcPartGroupIdx, 9999999, 1.5, 1, false, false);
    SetNPCPartSEAndSFX(3400800, npcPartId2, 73, 73);
    ForceAnimationPlayback(3400800, animationId, false, false, false);
    SetSpEffect(3400800, spEffectId, false);
    WaitFixedTimeFrames(timeFrames);
    time = ElapsedFrames(timeFrames);
    hpFlag2 = HPRatio(3400800) <= 0 || EventFlag(13404825);
    WaitFor(time || hpFlag2);
    EndIf(hpFlag2.Passed);
    RequestCharacterAIReplan(3400800);
    time2 = ElapsedSeconds(5);
    hpFlag3 = HPRatio(3400800) <= 0 || EventFlag(13404825);
    WaitFor(time2 || hpFlag3);
    EndIf(hpFlag3.Passed);
    SetNPCPartHP(3400800, npcPartId2, -1, true);
    ClearSpEffect(3400800, spEffectId);
    WaitFixedTimeFrames(10);
    time3 = ElapsedFrames(10);
    hpFlag4 = HPRatio(3400800) <= 0 || EventFlag(13404825);
    WaitFor(time3 || hpFlag4);
    EndIf(hpFlag4.Passed);
    RestartEvent();
});

// ルドウイーク_人モード崩れ
$Event(13404835, Default, function() {
    EndIf(EventFlag(9471));
    WaitFor(HPRatio(3400801) < 0.35 && HPRatio(3400801) > 0);
    ForceAnimationPlayback(3400801, 7002, false, false, false);
    RequestCharacterAICommand(3400801, 110, 0);
    RequestCharacterAIReplan(3400801);
    WaitFor(HPRatio(3400801) < 0.067 && HPRatio(3400801) > 0);
    ForceAnimationPlayback(3400801, 7003, false, false, false);
    WaitFor(HPRatio(3400801) < 0.033 && HPRatio(3400801) > 0);
    ForceAnimationPlayback(3400801, 7002, false, false, false);
});

// ルドウイーク_大ジャンプ
$Event(13404840, Default, function() {
    EndIf(EventFlag(9471));
    WaitFor(CharacterHasEventMessage(3400800, 100));
    SpawnOneshotSFX(TargetEntityType.Character, 10000, 236, 645114);
    WaitFixedTimeSeconds(0.1);
    SpawnOneshotSFX(TargetEntityType.Character, 10000, 236, 645114);
    WaitFixedTimeSeconds(0.1);
    SpawnOneshotSFX(TargetEntityType.Character, 10000, 236, 645114);
    WaitFixedTimeSeconds(0.1);
    SpawnOneshotSFX(TargetEntityType.Character, 10000, 236, 645114);
    WaitFixedTimeSeconds(0.1);
    SpawnOneshotSFX(TargetEntityType.Character, 10000, 236, 645114);
    WaitFixedTimeSeconds(0.1);
    SpawnOneshotSFX(TargetEntityType.Character, 10000, 236, 645114);
    WaitFixedTimeSeconds(0.5);
    ChangeCharacterEnableState(3400800, Disabled);
    SpawnOneshotSFX(TargetEntityType.Character, 10000, 236, 645114);
    SpawnOneshotSFX(TargetEntityType.Character, 10000, 236, 645114);
    SpawnOneshotSFX(TargetEntityType.Character, 10000, 236, 645114);
    SpawnOneshotSFX(TargetEntityType.Character, 10000, 236, 645114);
    WaitFixedTimeSeconds(0.1);
    SpawnOneshotSFX(TargetEntityType.Character, 10000, 236, 645114);
    SpawnOneshotSFX(TargetEntityType.Character, 10000, 236, 645114);
    SpawnOneshotSFX(TargetEntityType.Character, 10000, 236, 645114);
    WaitFixedTimeSeconds(0.1);
    SpawnOneshotSFX(TargetEntityType.Character, 10000, 236, 645114);
    SpawnOneshotSFX(TargetEntityType.Character, 10000, 236, 645114);
    WaitFixedTimeSeconds(0.1);
    SpawnOneshotSFX(TargetEntityType.Character, 10000, 236, 645114);
    WaitFixedTimeSeconds(1.2);
    ChangeCharacterEnableState(3400800, Enabled);
    IssueShortWarpRequest(3400800, TargetEntityType.Character, 10000, 236);
    ForceAnimationPlayback(3400800, 3017, false, false, false);
    RestartEvent();
});

// ルドウイーク_ハイパーオーラ斬り
$Event(13404841, Default, function() {
    EndIf(EventFlag(9471));
    WaitFor(CharacterHasEventMessage(3400801, 300));
    RequestCharacterAICommand(3400801, -1, 0);
    RequestCharacterAIReplan(3400801);
});

// 教区長Ω_ボス撃破
$Event(13401850, Default, function() {
    if (ThisEvent()) {
        SetMapSoundState(3403802, Disabled);
        SetMapSoundState(3403803, Disabled);
        ChangeCharacterEnableState(3400850, Disabled);
        ForceCharacterDeath(3400850, true);
        DeactivateObject(3401850, Disabled);
        DeleteMapSFX(3403850, true);
        EndEvent();
    }
L0:
    WaitFor(CharacterDead(3400850));
    SetEventFlag(3400, ON);
    DisplayBanner(TextBannerType.DemonKilled);
    DeactivateObject(3401850, Disabled);
    DeleteMapSFX(3403850, true);
    SetLockcamSlotNumber(34, 0, 0);
    WaitFixedTimeSeconds(3);
    HandleBossDefeat(3400850);
    SetNetworkSyncState(Disabled);
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        WaitFor(CharacterType(10000, TargetType.Alive));
        AwardAchievement(39);
        $InitializeEvent(0, 9350, 3);
        if (!EventFlag(6673)) {
            AwardItemLot(3401850);
        } else {
            AwardItemLot(3401852);
        }
        SetEventFlag(3400, ON);
        SetEventFlag(3401, ON);
        SetEventFlag(3402, ON);
        SetEventFlag(3403, ON);
        EndTimeMeasurement(3400020);
        EndTimeMeasurement(3400021);
        EndTimeMeasurement(3400030);
        CreatePlaylog(0);
        ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 80, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 80, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Weapon, 80, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Armor, 80, PlayLogMultiplayerType.HostOnly);
        EndEvent();
    }
L1:
    WaitFor(CharacterType(10000, TargetType.WhitePhantom));
    WaitFixedTimeSeconds(0);
});

// 教区長Ω_ホストがボス部屋入場_初戦
$Event(13404861, Restart, function() {
    EndIf(EventFlag(13401850));
    if (EventFlag(13401851)) {
        IssueShortWarpRequest(3400850, TargetEntityType.Area, 3402853, -1);
        EndEvent();
    }
L0:
    SetCharacterMaphits(3400850, true);
    SetCharacterGravity(3400850, Disabled);
    SetCharacterInvincibility(3400850, Enabled);
    ForceAnimationPlayback(3400850, 7002, true, false, false);
    WaitFor(
        !EventFlag(13401850)
            && !EventFlag(13401851)
            && PlayerHasItem(ItemType.Goods, 4014)
            && InArea(10000, 3402855));
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        IssueBossRoomEntryNotification(0);
    }
    SetEventFlag(13404860, ON);
    EndIf(CharacterType(10000, TargetType.BlackPhantom));
    SetEventFlag(9180, ON);
});

// 教区長Ω_ホストがボス部屋入場_初戦_後半
$Event(13401851, Restart, function() {
    EndIf(EventFlag(13401850));
    EndIf(ThisEvent());
    if (!CharacterType(10000, TargetType.BlackPhantom)) {
        WaitFor(
            !EventFlag(13401850)
                && !EventFlag(13401851)
                && EventFlag(13404861)
                && PlayerHasItem(ItemType.Goods, 4014)
                && InArea(10000, 3402855));
        if (!HasMultiplayerState(MultiplayerState.Multiplayer)) {
            PlayCutsceneAndWarpPlayer(34000010, CutscenePlayMode.Skippable, 3402856, 34, 0, 10000);
        } else if (!HasMultiplayerState(MultiplayerState.Client)) {
            PlayCutsceneAndWarpPlayer(34000010, CutscenePlayMode.Unskippable, 3402856, 34, 0, 10000);
        } else {
            PlayCutsceneToPlayer(34000010, CutscenePlayMode.Unskippable, 10000);
        }
        WaitFixedTimeFrames(1);
        SetEventFlag(9180, OFF);
        SetEventFlag(13404858, ON);
        IssueShortWarpRequest(3400850, TargetEntityType.Area, 3402853, -1);
        SetCharacterGravity(3400850, Enabled);
        SetCharacterInvincibility(3400850, Disabled);
        SetCharacterMaphits(3400850, false);
        ForceAnimationPlayback(3400850, 3029, false, false, false);
        EndIf(EventFlag(9302));
        $InitializeEvent(0, 9350, 1);
        SetEventFlag(9302, ON);
        EndEvent();
    }
L0:
    WaitFor(EventFlag(6001));
    WaitFixedTimeSeconds(0);
});

// 教区長Ω_時間差入場ゲスト用対処処理
$Event(13401853, Default, function() {
    WaitFor(CharacterType(10000, TargetType.Alive) && EventFlag(13404858));
    EndIf(HasMultiplayerState(MultiplayerState.Host));
    SetCharacterGravity(3400850, Enabled);
    SetCharacterInvincibility(3400850, Disabled);
    SetCharacterMaphits(3400850, false);
    SetEventFlag(13404858, ON);
    SetEventFlag(13401851, ON);
});

// 教区長Ω_ホストがボス部屋入場_再戦
$Event(13404850, Default, function() {
    EndIf(EventFlag(13401850));
    if (!EventFlag(13401851)) {
        if (!HasMultiplayerState(MultiplayerState.Client)) {
            DeactivateObject(3401850, Disabled);
            DeleteMapSFX(3403850, false);
        }
        WaitFor(!EventFlag(13401850) && EventFlag(13401851));
        DeactivateObject(3401850, Enabled);
        SpawnMapSFX(3403850);
    }
L0:
    chrActFlag = CharacterType(10000, TargetType.Alive)
        && ActionButtonInArea(3400850, 3401850)
        && !EventFlag(13401850);
    flag = EventFlag(13401850);
    WaitFor(chrActFlag || flag);
    EndIf(flag.Passed);
    RotateCharacter(10000, 3402850, 101130, false);
    chrArea = CharacterType(10000, TargetType.Alive) && InArea(10000, 3402851);
    chrTime = CharacterType(10000, TargetType.Alive) && ElapsedSeconds(2);
    WaitFor(chrArea || chrTime);
    if (!chrTime.Passed) {
        SetEventFlag(13404858, ON);
    }
    RestartEvent();
});

// 教区長Ω_ゲストがボス部屋入場
$Event(13404851, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(13401850));
    WaitFor(
        !EventFlag(13401850)
            && EventFlag(13401851)
            && EventFlag(13404858)
            && CharacterType(10000, TargetType.WhitePhantom)
            && ActionButtonInArea(3400850, 3401850));
    RotateCharacter(10000, 3402850, 101130, false);
    chrArea = CharacterType(10000, TargetType.WhitePhantom) && InArea(10000, 3402851);
    chrTime = CharacterType(10000, TargetType.WhitePhantom) && ElapsedSeconds(2);
    WaitFor(chrArea || chrTime);
    if (!chrTime.Passed) {
        SetEventFlag(13404859, ON);
    }
    RestartEvent();
});

// 教区長Ω_ボスが動き出す
$Event(13404852, Restart, function() {
    EndIf(EventFlag(13401850));
    SetCharacterAIState(3400850, Disabled);
    SetCharacterHPBarDisplay(3400850, Disabled);
    if (!ThisEvent()) {
        WaitFor(EventFlag(13404858));
        if (!HasMultiplayerState(MultiplayerState.Client)) {
            if (!EventFlag(13404860)) {
                IssueBossRoomEntryNotification(0);
            }
            SetNetworkUpdateAuthority(3400850, AuthorityLevel.Forced);
        }
    }
L0:
    SetEventFlag(13404860, ON);
    SetEventFlag(13404858, ON);
    GotoIf(L1, NumberOfCoopClients() == 0);
    GotoIf(L2, NumberOfCoopClients() == 1);
    GotoIf(L3, NumberOfCoopClients() == 2);
L1:
    Goto(L4);
L2:
    SetSpEffect(3400850, 7500, true);
    WaitFixedTimeFrames(1);
    AdaptHpchangingSpEffectToNPCPartOfTarget(3400850);
    Goto(L4);
L3:
    SetSpEffect(3400850, 7501, true);
    WaitFixedTimeFrames(1);
    AdaptHpchangingSpEffectToNPCPartOfTarget(3400850);
    Goto(L4);
L4:
    SetCharacterAIState(3400850, Enabled);
    DisplayBossHealthBar(Enabled, 3400850, 0, 450000);
    CreatePlaylog(46);
    StartTimeMeasurement(3400030, 62, Enabled);
});

// 教区長Ω_ボスBGM_ON
$Event(13404853, Default, function() {
    SetNetworkSyncState(Disabled);
    SetMapSoundState(3403852, Disabled);
    SetMapSoundState(3403853, Disabled);
    EndIf(EventFlag(13401850));
    if (!ThisEvent()) {
        flagArea &= !EventFlag(13401850) && EventFlag(13404852);
        if (!HasMultiplayerState(MultiplayerState.Host)) {
            flagArea &= EventFlag(13404859);
        }
        flagArea &= InArea(10000, 3402852);
        WaitFor(flagArea);
        EnableBossMapSound(3403852, Enabled);
        chrFlagArea &= CharacterHasEventMessage(3400850, 400);
    }
L0:
    chrFlagArea &= !EventFlag(13401850) && EventFlag(13404852);
    if (!HasMultiplayerState(MultiplayerState.Host)) {
        chrFlagArea &= EventFlag(13404859);
    }
    chrFlagArea &= InArea(10000, 3402852);
    WaitFor(chrFlagArea);
    EnableBossMapSound(3403852, Disabled);
    WaitFixedTimeFrames(0);
    EnableBossMapSound(3403853, Enabled);
});

// 教区長Ω_ボスカメラ
$Event(13404854, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(13401850));
    WaitFor(!CharacterDead(3400850) && EntityInRadiusOfEntity(10000, 3400850, 14));
    SetLockcamSlotNumber(34, 0, 1);
    WaitFor(!CharacterDead(3400850) && !EntityInRadiusOfEntity(10000, 3400850, 17));
    SetLockcamSlotNumber(34, 0, 0);
    RestartEvent();
});

// 教区長Ω_ボスBGM_OFF
$Event(13404855, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(13401850));
    WaitFor(EventFlag(13401850));
    EnableBossMapSound(3403852, Disabled);
    EnableBossMapSound(3403853, Disabled);
    EnableBossMapSound(-1, Disabled);
});

// 教区長Ω_他人の世界で霧壁あたり無効
$Event(13404856, Default, function() {
    WaitFor(CharacterType(10000, TargetType.Alive) && EntityInRadiusOfEntity(10000, 3401850, 6));
    SetCharacterGravityMaphitStateExcludingOwnWorld(10000, Disabled);
    WaitFixedTimeFrames(6);
    RestartEvent();
});

// 教区長Ω_他人の世界で霧壁あたり無効2
$Event(13404857, Default, function() {
    WaitFor(
        CharacterType(10000, TargetType.Alive)
            && !EntityInRadiusOfEntity(10000, 3401850, 6)
            && EntityInRadiusOfEntity(10000, 3401850, 12));
    SetCharacterGravityMaphitStateExcludingOwnWorld(10000, Enabled);
    WaitFixedTimeFrames(6);
    RestartEvent();
});

// 教区長Ω_部位損傷_XX
$Event(13404870, Restart, function(npcPartId, npcPartId2, npcPartGroupIdx, spEffectId, spEffectId2, npcPartHP, animationId) {
    EndIf(EventFlag(13401850));
    CreateNPCPart(3400850, npcPartId, npcPartGroupIdx, npcPartHP, 1, 1, false, false);
    SetNPCPartSEAndSFX(3400850, npcPartId2, 64, 64);
    hp = NPCPartHP(3400850, npcPartId2) <= 0;
    hp2 = HPRatio(3400850) <= 0;
    sp = CharacterHasSpEffect(3400850, 5402);
    WaitFor(hp || hp2 || sp);
    EndIf(hp2.Passed);
    EndIf(sp.Passed);
    CreateNPCPart(3400850, npcPartId, npcPartGroupIdx, 9999999, 1, 1, false, false);
    SetNPCPartSEAndSFX(3400850, npcPartId2, 65, 65);
    ForceAnimationPlayback(3400850, animationId, false, false, false);
    SetSpEffect(3400850, spEffectId, false);
    ClearSpEffect(3400850, spEffectId2);
    RequestCharacterAIReplan(3400850);
    time = ElapsedSeconds(30);
    sp2 = CharacterHasSpEffect(3400850, 5402);
    WaitFor(time || sp2);
    EndIf(sp2.Passed);
    RequestCharacterAICommand(3400850, 100, 1);
    RequestCharacterAIReplan(3400850);
    chr = CharacterHasEventMessage(3400850, 300);
    sp3 = CharacterHasSpEffect(3400850, 5402);
    WaitFor(chr || sp3);
    if (!sp3.Passed) {
        SetNPCPartHP(3400850, npcPartId2, -1, true);
        ClearSpEffect(3400850, spEffectId);
        SetSpEffect(3400850, spEffectId2, false);
    }
L0:
    RequestCharacterAICommand(3400850, -1, 1);
    RequestCharacterAIReplan(3400850);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// 教区長Ω_半身切断
$Event(13404875, Default, function() {
    if (!ThisEvent()) {
        WaitFor(CharacterHasEventMessage(3400850, 400));
    }
L0:
    ChangeCharacterHitmask(3400850, 10, ON);
});

// 一方通行扉を調べた時のMsg_XX
$Event(13401200, Default, function(actionButtonParameterId, areaEntityId, eventFlagId) {
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

// 扉解放処理_XX
$Event(13401210, Default, function(objEntityId, objactEventFlag, animationId, objParameterId) {
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

// SC扉を開放
$Event(13401220, Default, function() {
    if (ThisEventSlot()) {
        ReproduceObjectAnimation(3401100, 1);
        SetObjactState(3401110, 3400020, Disabled);
        NotifySoundDampeningOfDoorEvent(3401100, DoorState.DoorOpening);
        EndEvent();
    }
L0:
    WaitFor(ObjActEventFlag(13400002));
    SetObjactState(3401110, 3400020, Disabled);
    ForceAnimationPlayback(3401100, 1, false, false, false);
    WaitFixedTimeSeconds(0);
});

// 聖堂街D_啓蒙入手
$Event(13400100, Default, function() {
    EndIf(ThisEvent());
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(PlayerStandingOnHit(3404000));
    $InitializeEvent(0, 9350, 2);
});

// さまよう狂気_ｘｘ
$Event(13400220, Restart, function(chrEntityId, eventFlagId) {
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

// 空からヤドカリが落ちてくる
$Event(13400310, Restart, function(chrEntityId, areaEntityId) {
    SetCharacterGravity(chrEntityId, Disabled);
    if (ThisEventSlot()) {
        ForceAnimationPlayback(chrEntityId, 7004, true, false, true);
        EndEvent();
    }
L0:
    ForceAnimationPlayback(chrEntityId, 7005, true, false, false);
    WaitFor(
        (CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
            && InArea(10000, areaEntityId));
    ForceAnimationPlayback(chrEntityId, 7003, false, true, false);
});

// 教区長Ωの宝
$Event(13400320, Restart, function() {
    EndIf(EventFlag(9470));
    EndIf(!CharacterType(10000, TargetType.Alive));
    CreateObjectfollowingSFX(3401500, 200, 900201);
    WaitFor(ActionButtonInArea(3400100, 3401500));
    ForceAnimationPlayback(10000, 101140, false, false, false);
    AwardItemLot(3401810);
    DeleteObjectfollowingSFX(3401500, true);
});

// 聖堂街D_死亡再現&宝化_XX
$Event(13400330, Restart, function(chrEntityId) {
    if (ThisEventSlot()) {
        SetCharacterBackreadState(chrEntityId, true);
        ForceCharacterTreasure(chrEntityId);
        EndEvent();
    }
L0:
    WaitFor(CharacterDead(chrEntityId));
    WaitFixedTimeSeconds(0);
});

// 弾丸オーナーの作成
$Event(13404799, Restart, function() {
    CreateBulletOwner(3400799);
});

// 藁玉転がし
$Event(13405100, Restart, function(objEntityId, areaEntityId, areaEntityId2) {
    WaitFixedTimeFrames(1);
    GotoIf(L0, 
        CharacterDead(3400206)
            || CharacterDead(3400205)
            || ObjectDestroyed(3401401)
            || ThisEventSlot());
    Goto(L1);
L0:
    DeleteObjectEvent(13405101);
    DeleteObjectfollowingSFX(objEntityId, true);
    DeactivateObject(3401401, Enabled);
    DeactivateObject(objEntityId, Disabled);
    RequestObjectDestruction(3401401, 1);
    EndEvent();
L1:
    DeactivateObject(3401401, Disabled);
    ForceAnimationPlayback(objEntityId, 0, true, false, false);
    area = InArea(10000, areaEntityId);
    area2 = InArea(10000, areaEntityId2);
    flag = EventFlag(13405101);
    WaitFor(area || area2 || flag);
    SetEventFlag(13405101, ON);
    if (!flag.Passed) {
        WaitFor(EntityInRadiusOfEntity(objEntityId, 10000, 22) || ElapsedSeconds(4));
    }
L2:
    CreateObjectfollowingSFX(objEntityId, 100, 900260);
    CreateDamagingObject(13405101, objEntityId, 100, 6291, DamageTargetType.Character, 1.6, 9999, 0);
    PlaySE(3402531, SoundType.aEnvironmentalSound, 411005001);
    WaitFixedTimeFrames(30);
    ForceAnimationPlayback(objEntityId, 1, false, true, false);
    ForceAnimationPlayback(objEntityId, 2, true, false, false);
    DeleteObjectEvent(13405101);
    DeleteObjectfollowingSFX(objEntityId, true);
    DeactivateObject(3401401, Enabled);
    DeactivateObject(objEntityId, Disabled);
    RequestObjectDestruction(3401401, 1);
});

// Ω聖堂の処刑人登場
$Event(13405103, Restart, function() {
    GotoIf(L0, ThisEventSlot() || CharacterDead(3400551));
    Goto(L1);
L0:
    ForceAnimationPlayback(3401010, 11, true, false, false);
    ReproduceObjectAnimation(3401010, 11);
    SetCharacterAIState(3400551, Enabled);
    SetCharacterHome(3400551, 3402310);
    RequestCharacterAIReplan(3400551);
    SetObjactState(3401010, 3400000, Disabled);
    NotifySoundDampeningOfDoorEvent(3401010, DoorState.DoorOpening);
    EndEvent();
L1:
    SetCharacterAIState(3400551, Disabled);
    WaitFor(
        ((CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
            && (InArea(10000, 3402300) || EntityInRadiusOfEntity(10000, 3400551, 7)))
            || HasDamageType(3400551, -1, DamageType.Unspecified));
    PlaySE(3402300, SoundType.aEnvironmentalSound, 340000000);
    ForceAnimationPlayback(3400551, 7015, false, false, false);
    ForceAnimationPlayback(3401010, 10, false, false, false);
    WaitFixedTimeFrames(260);
    SetCharacterAIState(3400551, Enabled);
    SetCharacterHome(3400551, 3402310);
    RequestCharacterAIReplan(3400551);
    SetObjactState(3401010, 3400000, Disabled);
});

// 仕掛け銃_ｘｘ
$Event(13405105, Restart, function(areaEntityId, entityId, objEntityId, firingAngleX, firingAngleY, firingAngleZ) {
    WaitFor(InArea(10000, areaEntityId));
    ForceAnimationPlayback(entityId, 1, false, true, false);
    WaitFor(!ObjectDestroyed(objEntityId));
    ForceAnimationPlayback(objEntityId, 1, false, false, false);
    ShootBullet(3400799, objEntityId, 200, 6280, firingAngleX, firingAngleY, firingAngleZ);
    WaitFixedTimeFrames(2);
    ShootBullet(3400799, objEntityId, 200, 6281, firingAngleX, firingAngleY, firingAngleZ);
    WaitFixedTimeFrames(2);
    ShootBullet(3400799, objEntityId, 200, 6282, firingAngleX, firingAngleY, firingAngleZ);
    WaitFixedTimeFrames(2);
    ShootBullet(3400799, objEntityId, 200, 6283, firingAngleX, firingAngleY, firingAngleZ);
    WaitFixedTimeFrames(2);
    ShootBullet(3400799, objEntityId, 200, 6280, firingAngleX, firingAngleY, firingAngleZ);
    WaitFixedTimeFrames(60);
    WaitFor(!AllPlayersInArea(areaEntityId));
    ForceAnimationPlayback(entityId, 0, true, false, false);
    RestartEvent();
});

// 血の川スナイパー
$Event(13405110, Restart, function() {
    if (ThisEventSlot()) {
        SetCharacterAIId(3400200, 263757);
        RequestCharacterAIReplan(3400200);
        SetCharacterAIId(3400406, 400002);
        RequestCharacterAIReplan(3400406);
        EndEvent();
    }
L0:
    WaitFor(CharacterHasEventMessage(3400200, 10));
    RequestCharacterAIReplan(3400406);
    SetCharacterAIId(3400406, 400018);
    SetCharacterAIId(3400200, 263757);
    RequestCharacterAIReplan(3400200);
    if (1 != 0) {
        SetSpEffect(3400406, 5000, false);
    }
    ChangeCharacterPatrolBehavior(3400406, 3403350);
    WaitFixedTimeSeconds(3);
    SetCharacterAIId(3400406, 400002);
    RequestCharacterAIReplan(3400406);
});

// 車椅子爆発
$Event(13405112, Restart, function() {
    if (ThisEventSlot()) {
        DeactivateObject(3401320, Disabled);
        EndEvent();
    }
L0:
    WaitFor(InArea(10000, 3402533));
    ForceAnimationPlayback(3401352, 1, false, true, false);
    ShootBullet(3400799, 3401320, 10, 6290, 0, 0, 0);
    WaitFixedTimeFrames(80);
    DeactivateObject(3401320, Disabled);
});

// 仕掛け銃_永続（角度調整）_xx
$Event(13405113, Restart, function(objEntityId, eventFlagId, targetTimeFrames, targetTimeFrames2, behaviorId, behaviorId2, behaviorId3, behaviorId4) {
    WaitFor(EventFlag(eventFlagId) && !ObjectDestroyed(objEntityId));
    WaitFor(ElapsedFrames(targetTimeFrames));
    ForceAnimationPlayback(objEntityId, 1, false, false, false);
    ShootBullet(3400799, objEntityId, 200, behaviorId, 340, 0, 0);
    WaitFor(ElapsedFrames(2));
    ShootBullet(3400799, objEntityId, 200, behaviorId2, 340, 0, 0);
    WaitFor(ElapsedFrames(2));
    ShootBullet(3400799, objEntityId, 200, behaviorId3, 340, 0, 0);
    WaitFor(ElapsedFrames(2));
    ShootBullet(3400799, objEntityId, 200, behaviorId4, 340, 0, 0);
    WaitFor(ElapsedFrames(2));
    ShootBullet(3400799, objEntityId, 200, behaviorId, 340, 0, 0);
    WaitFor(ElapsedFrames(2));
    WaitFor(ElapsedFrames(targetTimeFrames2));
    RestartEvent();
});

// 仕掛け銃_永続_ｘｘ
$Event(13405115, Restart, function(objEntityId, eventFlagId, targetTimeFrames, targetTimeFrames2, behaviorId, behaviorId2, behaviorId3, behaviorId4) {
    WaitFor(EventFlag(eventFlagId) && !ObjectDestroyed(objEntityId));
    WaitFor(ElapsedFrames(targetTimeFrames));
    ForceAnimationPlayback(objEntityId, 1, false, false, false);
    ShootBullet(3400799, objEntityId, 200, behaviorId, 0, 0, 0);
    WaitFor(ElapsedFrames(2));
    ShootBullet(3400799, objEntityId, 200, behaviorId2, 0, 0, 0);
    WaitFor(ElapsedFrames(2));
    ShootBullet(3400799, objEntityId, 200, behaviorId3, 0, 0, 0);
    WaitFor(ElapsedFrames(2));
    ShootBullet(3400799, objEntityId, 200, behaviorId4, 0, 0, 0);
    WaitFor(ElapsedFrames(2));
    ShootBullet(3400799, objEntityId, 200, behaviorId, 0, 0, 0);
    WaitFor(ElapsedFrames(2));
    WaitFor(ElapsedFrames(targetTimeFrames2));
    RestartEvent();
});

// 仕掛け銃_永続_起動（領域）_ｘｘ
$Event(13405140, Restart, function(chrEntityId, areaEntityId, eventFlagId, areaEntityId2, entityId, targetTimeFrames) {
    WaitFor(
        !CharacterDead(chrEntityId)
            && InArea(chrEntityId, areaEntityId2)
            && InArea(10000, areaEntityId));
    ForceAnimationPlayback(entityId, 1, false, true, false);
    WaitFor(ElapsedFrames(targetTimeFrames));
    RestartIf(
        !(!CharacterDead(chrEntityId)
            && InArea(chrEntityId, areaEntityId2)
            && InArea(10000, areaEntityId)));
    SetEventFlag(eventFlagId, ON);
    WaitFor(
        CharacterDead(chrEntityId)
            || !InArea(chrEntityId, areaEntityId2)
            || !InArea(10000, areaEntityId));
    WaitFixedTimeFrames(10);
    ForceAnimationPlayback(entityId, 0, true, false, false);
    SetEventFlag(eventFlagId, OFF);
    RestartEvent();
});

// 仕掛け銃_永続_起動（スイッチ）_ｘｘ
$Event(13405145, Restart, function(areaEntityId, entityId, eventFlagId) {
    WaitFor(InArea(10000, areaEntityId));
    ForceAnimationPlayback(entityId, 1, false, true, false);
    SetEventFlag(eventFlagId, ON);
    WaitFor(!AllPlayersInArea(areaEntityId));
    WaitFixedTimeFrames(10);
    ForceAnimationPlayback(entityId, 0, true, false, false);
    SetEventFlag(eventFlagId, OFF);
    RestartEvent();
});

// 仕掛け銃_掛け声
$Event(13405155, Restart, function(areaEntityId) {
    if (ThisEventSlot()) {
        EndEvent();
    }
L0:
    WaitFor(
        (CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
            && InArea(10000, areaEntityId));
    PlaySE(3402515, SoundType.aEnvironmentalSound, 411005002);
});

// 火薬壺_ｘｘ
$Event(13405160, Restart, function(objEntityId) {
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
        ShootBullet(3400799, objEntityId, -1, 6051, 270, 0, 0);
        RequestObjectDestruction(objEntityId, 1);
        PlaySE(objEntityId, SoundType.oObject, 299961000);
        EndEvent();
    }
L0:
    ShootBullet(3400799, objEntityId, -1, 6292, 0, 90, 0);
    RequestObjectDestruction(objEntityId, 1);
    PlaySE(objEntityId, SoundType.oObject, 299961000);
});

// 巡回中アニメ_固定_XX
$Event(13405200, Restart, function(chrEntityId, areaEntityId, animationId, areaEntityId2) {
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

// 鐘の音が鳴る
$Event(13405211, Restart, function(areaEntityId) {
    WaitFor(
        (CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
            && InArea(10000, areaEntityId));
    PlaySE(areaEntityId, SoundType.aEnvironmentalSound, 340000000);
});

// TGS爆槌起動
$Event(13405216, Restart, function(chrEntityId, areaEntityId, areaEntityId2, patrolInformationEntityId, timeSeconds, value) {
    if (!ThisEventSlot()) {
        WaitFor(InArea(3400316, areaEntityId) || InArea(3400316, areaEntityId2));
        WaitFixedTimeSeconds(timeSeconds);
    }
L0:
    if (value != 0) {
        SetSpEffect(chrEntityId, 5000, false);
    }
    ChangeCharacterPatrolBehavior(chrEntityId, patrolInformationEntityId);
    RequestCharacterAIReplan(chrEntityId);
});

// TGS敵壁無効
$Event(13405218, Restart, function() {
    if (!ThisEvent()) {
        WaitFor(
            (CharacterType(10000, TargetType.Alive)
                || CharacterType(10000, TargetType.WhitePhantom))
                && InArea(10000, 3402553));
    }
L0:
    ActivateHit(3404250, Disabled);
});

// 敵の特殊待機_XX
$Event(13405220, Restart, function(chrEntityId, animationId, aiId, playAnimationId, aiId2, areaEntityId, minTimeSeconds, maxTimeSeconds) {
    if (!ThisEventSlot()) {
        WaitRandomTimeFrames(0, 180);
        ForceAnimationPlayback(chrEntityId, animationId, true, false, false);
        SetCharacterAIId(chrEntityId, aiId);
        chr = CharacterAIState(chrEntityId, AIStateType.Recognition)
            || CharacterAIState(chrEntityId, AIStateType.Combat);
        chrArea = (CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
            && InArea(10000, areaEntityId);
        dmg = HasDamageType(chrEntityId, -1, DamageType.Unspecified);
        WaitFor(chr || chrArea || dmg);
        if (!dmg.Passed) {
            WaitRandomTimeSeconds(minTimeSeconds, maxTimeSeconds);
            RotateCharacter(chrEntityId, 10000, playAnimationId, false);
        }
    }
L0:
    SetCharacterAIId(chrEntityId, aiId2);
});

// ロジックON_XX
$Event(13405300, Restart, function(chrEntityId, areaEntityId, targetDistance, timeSeconds) {
    EndIf(ThisEventSlot());
    SetCharacterAIState(chrEntityId, Disabled);
    WaitFor(
        ((CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
            && InArea(10000, areaEntityId))
            || (EntityInRadiusOfEntity(10000, chrEntityId, targetDistance)
                || HasDamageType(chrEntityId, -1, DamageType.Unspecified)));
    WaitFixedTimeSeconds(timeSeconds);
    SetCharacterAIState(chrEntityId, Enabled);
});

// 敵の巡回開始_XX
$Event(13405350, Restart, function(chrEntityId, areaEntityId, areaEntityId2, patrolInformationEntityId, timeSeconds, value) {
    if (!ThisEventSlot()) {
        WaitFor(
            (CharacterType(10000, TargetType.Alive)
                || CharacterType(10000, TargetType.WhitePhantom))
                && (InArea(10000, areaEntityId) || InArea(10000, areaEntityId2)));
        WaitFixedTimeSeconds(timeSeconds);
    }
L0:
    if (value != 0) {
        SetSpEffect(chrEntityId, 5000, false);
    }
    ChangeCharacterPatrolBehavior(chrEntityId, patrolInformationEntityId);
    RequestCharacterAIReplan(chrEntityId);
});

// アニメ再生起動_XX
$Event(13405480, Restart, function(chrEntityId, areaEntityId, targetDistance, animationId, timeSeconds, disabledEnabled) {
    if (ThisEventSlot()) {
        SetCharacterAIState(chrEntityId, Enabled);
        EndEvent();
    }
L0:
    SetCharacterAIState(chrEntityId, disabledEnabled);
    chr = CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom);
    area = InArea(10000, areaEntityId);
    area2 = EntityInRadiusOfEntity(10000, chrEntityId, targetDistance);
    chrArea = chr && (area || area2);
    dmg = HasDamageType(chrEntityId, -1, DamageType.Unspecified);
    WaitFor(chrArea || dmg);
    if (!area2.Passed) {
        if (!dmg.Passed) {
            WaitFixedTimeSeconds(timeSeconds);
            ForceAnimationPlayback(chrEntityId, animationId, false, false, false);
        }
    }
    SetCharacterAIState(chrEntityId, Enabled);
    RequestCharacterAIReplan(chrEntityId);
});

// 異形ビースト_死亡数カウント_XX
$Event(13405510, Restart, function(chrEntityId) {
    WaitFor(CharacterDead(chrEntityId));
    IncrementEventValue(13405500, 4, 15);
});

// 異形ビースト_一定数死んだか判定
$Event(13405520, Restart, function(chrEntityId, entityId) {
    WaitFor(EventValue(13405500, 4) >= 4);
    SetEventPoint(chrEntityId, entityId, 0.5);
    RequestCharacterAICommand(chrEntityId, 100, 2);
    RequestCharacterAIReplan(chrEntityId);
});

// 異形ビースト_一定数死んだか判定②
$Event(13405530, Restart, function(chrEntityId, entityId) {
    WaitFor(EventValue(13405500, 4) >= 2);
    SetEventPoint(chrEntityId, entityId, 0.5);
    RequestCharacterAICommand(chrEntityId, 100, 3);
    RequestCharacterAIReplan(chrEntityId);
});

// 異形ビースト_一定数死んだか判定③
$Event(13405540, Restart, function(chrEntityId, patrolInformationEntityId, thresholdValue, value, timeSeconds) {
    WaitFor(EventValue(13405500, 4) >= thresholdValue);
    if (value != 0) {
        SetSpEffect(chrEntityId, 5000, false);
    }
    WaitFixedTimeSeconds(timeSeconds);
    ChangeCharacterPatrolBehavior(chrEntityId, patrolInformationEntityId);
    RequestCharacterAIReplan(chrEntityId);
});

// 異形ビースト_一定数死んだか判定④
$Event(13405550, Restart, function(chrEntityId, animationId, aiId, playAnimationId, aiId2, minTimeSeconds, maxTimeSeconds) {
    if (!ThisEventSlot()) {
        ForceAnimationPlayback(chrEntityId, animationId, true, false, false);
        SetCharacterAIId(chrEntityId, aiId);
        chr = CharacterAIState(chrEntityId, AIStateType.Recognition)
            || CharacterAIState(chrEntityId, AIStateType.Combat);
        WaitFor(EventValue(13405500, 4) >= 2);
        WaitRandomTimeSeconds(minTimeSeconds, maxTimeSeconds);
        RotateCharacter(chrEntityId, 10000, playAnimationId, false);
    }
L0:
    SetCharacterAIId(chrEntityId, aiId2);
});

// イベントリクエストの発信
$Event(13405570, Restart, function(chrEntityId, entityId, areaEntityId, commandId, slotNumber) {
    WaitFor(
        (CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
            && InArea(10000, areaEntityId));
    SetEventPoint(chrEntityId, entityId, 0.5);
    RequestCharacterAIReplan(chrEntityId);
    RequestCharacterAICommand(chrEntityId, commandId, slotNumber);
});

// 異形ビースト_死亡数カウントⅡ_XX
$Event(13405610, Restart, function(chrEntityId) {
    WaitFor(CharacterDead(chrEntityId));
    IncrementEventValue(13405600, 4, 15);
});

// 異形ビースト_一定数死んだか判定Ⅱ①
$Event(13405620, Restart, function(chrEntityId, entityId) {
    WaitFor(EventValue(13405600, 4) >= 4);
    SetEventPoint(chrEntityId, entityId, 0.5);
    RequestCharacterAICommand(chrEntityId, 100, 2);
    RequestCharacterAIReplan(chrEntityId);
});

// 異形ビースト_一定数死んだか判定Ⅱ②
$Event(13405630, Restart, function(chrEntityId, entityId) {
    WaitFor(EventValue(13405600, 4) >= 2);
    SetEventPoint(chrEntityId, entityId, 0.5);
    RequestCharacterAICommand(chrEntityId, 100, 3);
    RequestCharacterAIReplan(chrEntityId);
});

// 異形ビースト_死亡判定Ⅱ爆槌
$Event(13405640, Restart, function(chrEntityId, animationId, aiId, playAnimationId, aiId2, minTimeSeconds, maxTimeSeconds) {
    if (!ThisEventSlot()) {
        ForceAnimationPlayback(chrEntityId, animationId, true, false, false);
        SetCharacterAIId(chrEntityId, aiId);
        WaitFor(EventValue(13405600, 4) >= 1);
        WaitRandomTimeSeconds(minTimeSeconds, maxTimeSeconds);
        RotateCharacter(chrEntityId, 10000, playAnimationId, false);
    }
L0:
    SetCharacterAIId(chrEntityId, aiId2);
    RequestCharacterAIReplan(chrEntityId);
});

// 異形ビースト_一定数死んだか判定Ⅱ④
$Event(13405650, Restart, function(chrEntityId, animationId, aiId, playAnimationId, aiId2, minTimeSeconds, maxTimeSeconds) {
    if (!ThisEventSlot()) {
        ForceAnimationPlayback(chrEntityId, animationId, true, false, false);
        SetCharacterAIId(chrEntityId, aiId);
        chr = CharacterAIState(chrEntityId, AIStateType.Recognition)
            || CharacterAIState(chrEntityId, AIStateType.Combat);
        WaitFor(EventValue(13405600, 4) >= 2);
        WaitRandomTimeSeconds(minTimeSeconds, maxTimeSeconds);
        RotateCharacter(chrEntityId, 10000, playAnimationId, false);
    }
L0:
    SetCharacterAIId(chrEntityId, aiId2);
});

// 異形ビースト_感染強化_ｘｘ
$Event(13405680, Restart, function(chrEntityId, chrEntityId2, targetDistance) {
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

// 会話NPCルドウイーク（頭部）初期化
$Event(13400940, Default, function() {
    if (CharacterType(10000, TargetType.Alive)) {
        if (!AnyBatchEventFlags(1670, 1689)) {
            BatchSetEventFlags(1670, 1689, OFF);
            SetEventFlag(1680, ON);
        }
L1:
        if (EventFlag(13401800) && !AnyBatchEventFlags(1670, 1674)) {
            BatchSetEventFlags(1670, 1689, OFF);
            SetEventFlag(1681, ON);
        }
L2:
        if (EventFlag(1681)
            && (EventFlag(1720) || EventFlag(1721))
            && EventFlag(73400513)
            && EventFlag(73400403)) {
            BatchSetEventFlags(1670, 1689, OFF);
            SetEventFlag(1671, ON);
        }
L3:
        if (EventFlag(13500100)
            && (EventFlag(1720) || EventFlag(1721) || EventFlag(1724) || EventFlag(1722))
            && EventFlag(73400403)
            && ((EventFlag(1681) && !EventFlag(73400512)) || EventFlag(1671))) {
            BatchSetEventFlags(1670, 1689, OFF);
            SetEventFlag(1672, ON);
        }
L4:
        NoOp();
    }
L0:
    GotoIf(L5, EventFlag(1670));
    GotoIf(L6, EventFlag(1671));
    GotoIf(L7, EventFlag(1672));
    GotoIf(L8, EventFlag(1680));
    GotoIf(L9, EventFlag(1681));
    SetCharacterBackreadState(3400900, true);
    ChangeCharacterEnableState(3400900, Disabled);
    EndEvent();
L8:
    SetCharacterBackreadState(3400900, false);
    ChangeCharacterEnableState(3400900, Disabled);
    DeactivateObject(3400907, Disabled);
    DeactivateObject(3400908, Disabled);
    SetCharacterBackreadState(3400906, false);
    ChangeCharacterEnableState(3400906, Disabled);
    EndEvent();
L9:
    SetCharacterBackreadState(3400900, false);
    ChangeCharacterEnableState(3400900, Enabled);
    DeactivateObject(3400907, Disabled);
    DeactivateObject(3400908, Disabled);
    SetCharacterBackreadState(3400906, false);
    ChangeCharacterEnableState(3400906, Enabled);
    SetCharacterImmortality(3400900, Enabled);
    if (!EventFlag(50002360) && EventFlag(73400512)) {
        ForceCharacterTreasure(3400906);
    }
    if (EventFlag(73400512)) {
        ForceAnimationPlayback(3400900, 7002, true, false, true);
    }
    EndEvent();
L6:
    SetCharacterBackreadState(3400900, true);
    ChangeCharacterEnableState(3400900, Disabled);
    DeactivateObject(3400907, Enabled);
    DeactivateObject(3400908, Disabled);
    SetCharacterBackreadState(3400906, true);
    ChangeCharacterEnableState(3400906, Disabled);
    EndEvent();
L5:
    SetCharacterBackreadState(3400900, true);
    ChangeCharacterEnableState(3400900, Disabled);
    DeactivateObject(3400907, Disabled);
    DeactivateObject(3400908, Enabled);
    if (!EventFlag(50002360)) {
        SetCharacterBackreadState(3400906, false);
        ChangeCharacterEnableState(3400906, Enabled);
        ForceCharacterTreasure(3400906);
        EndEvent();
    }
    SetCharacterBackreadState(3400906, true);
    ChangeCharacterEnableState(3400906, Disabled);
    EndEvent();
L7:
    SetCharacterBackreadState(3400900, true);
    ChangeCharacterEnableState(3400900, Disabled);
    DeactivateObject(3400907, Enabled);
    DeactivateObject(3400908, Disabled);
    if (!EventFlag(50002360)) {
        SetCharacterBackreadState(3400906, false);
        ChangeCharacterEnableState(3400906, Enabled);
        ForceCharacterTreasure(3400906);
        EndEvent();
    }
    SetCharacterBackreadState(3400906, true);
    ChangeCharacterEnableState(3400906, Disabled);
    EndEvent();
});

// 会話NPCルドウイーク（頭部）_ボス撃破時配置2
$Event(13400941, Default, function() {
    EndIf(!EventFlag(1680));
    WaitFor(CharacterDead(3400800) || CharacterDead(3400801));
    if (!AllPlayersInArea(3402915)
        && !InArea(3400921, 3402915)
        && !InArea(3400922, 3402915)
        && !InArea(3400923, 3402915)
        && !InArea(3400924, 3402915)) {
        IssueShortWarpRequest(3400900, TargetEntityType.Area, 3402911, -1);
    } else {
L0:
        if (!AllPlayersInArea(3402916)
            && !InArea(3400921, 3402916)
            && !InArea(3400922, 3402916)
            && !InArea(3400923, 3402916)
            && !InArea(3400924, 3402916)) {
            IssueShortWarpRequest(3400900, TargetEntityType.Area, 3402912, -1);
        } else {
L1:
            if (!AllPlayersInArea(3402917)
                && !InArea(3400921, 3402917)
                && !InArea(3400922, 3402917)
                && !InArea(3400923, 3402917)
                && !InArea(3400924, 3402917)) {
                IssueShortWarpRequest(3400900, TargetEntityType.Area, 3402913, -1);
            } else {
L2:
                IssueShortWarpRequest(3400900, TargetEntityType.Area, 34029134, -1);
                Goto(L9);
            }
        }
    }
L9:
    BatchSetEventFlags(1670, 1689, OFF);
    SetEventFlag(1681, ON);
L8:
    ChangeCharacterEnableState(3400900, Enabled);
    SetCharacterImmortality(3400900, Enabled);
});

// 会話NPCルドウイーク（頭部）_月光剣入手
$Event(13400942, Default, function(eventFlagId) {
    chr &= CharacterType(10000, TargetType.Alive);
    EndIf(!chr);
    EndIf(ThisEventSlot());
    EndIf(!AnyBatchEventFlags(1680, 1681));
    EndIf(EventFlag(eventFlagId));
    EndIf(EventFlag(73400519));
    chr &= CharacterType(10000, TargetType.Alive);
    EndIf(!chr);
    WaitFor(EventFlag(eventFlagId) || EventFlag(73400519) || CharacterDead(3400900));
    ChangeCharacterEnableState(3400906, Enabled);
    IssueShortWarpRequest(3400906, TargetEntityType.Character, 3400900, 10);
    WaitFixedTimeFrames(1);
    ForceCharacterTreasure(3400906);
    EndIf(EventFlag(73400519));
    ForceAnimationPlayback(3400900, 7002, true, false, true);
});

// 会話NPCルドウイーク（頭部）_被ダメで即死
$Event(13400943, Default, function(entityId) {
    WaitFor(EventFlag(1681) && HasDamageType(entityId, 10000, DamageType.Unspecified));
    BatchSetEventFlags(1670, 1689, OFF);
    SetEventFlag(1670, ON);
    SaveRequest(0);
    WaitFixedTimeFrames(1);
    ForceAnimationPlayback(entityId, 7010, false, false, true);
    WaitFixedTimeFrames(119);
    ForceAnimationPlayback(entityId, 7011, true, false, true);
    SetEventFlag(73400519, ON);
});

// 会話NPCルドウイーク（頭部）_くちパクアニメ
$Event(13400944, Default, function() {
    SetEventFlag(73400510, OFF);
    EndIf(EventFlag(1670) || EventFlag(1671) || EventFlag(1672) || EventFlag(73400512));
    WaitFor(EventFlag(73400510));
    EndIf(HPRatio(3400900) == 0 || EventFlag(73400512) || EventFlag(1670));
    ForceAnimationPlayback(3400900, 7001, true, false, true);
    WaitFor(!EventFlag(73400510));
    EndIf(HPRatio(3400900) == 0 || EventFlag(73400512) || EventFlag(1670));
    ForceAnimationPlayback(3400900, 0, true, false, true);
    RestartEvent();
});

// 会話NPC汎用死亡判定_XX
$Event(13400900, Default, function(chrEntityId, eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4) {
    EndIf(!CharacterType(10000, TargetType.Alive));
    EndIf(AnyBatchEventFlags(eventFlagId, eventFlagId3));
    WaitFor(CharacterDead(chrEntityId));
    BatchSetEventFlags(eventFlagId, eventFlagId2, OFF);
    SetEventFlag(eventFlagId4, ON);
    SaveRequest(0);
});

// 会話NPC汎用攻撃回数判定_XX
$Event(13400910, Default, function(entityId, eventFlagId) {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(HasDamageType(entityId, 10000, DamageType.Unspecified));
    WaitFixedTimeFrames(1);
    WaitFor(HasDamageType(entityId, 10000, DamageType.Unspecified));
    WaitFixedTimeFrames(1);
    WaitFor(HasDamageType(entityId, 10000, DamageType.Unspecified));
    WaitFixedTimeFrames(1);
    SetEventFlag(eventFlagId, ON);
});

// 会話NPC汎用敵対判定_XX
$Event(13400920, Default, function(chrEntityId, eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4) {
    EndIf(!CharacterType(10000, TargetType.Alive));
    SetEventFlag(eventFlagId, OFF);
    WaitFor((EventFlag(eventFlagId) || HPRatio(chrEntityId) <= 0.9) && HPRatio(chrEntityId) != 0);
    SetCharacterTeamType(chrEntityId, TeamType.HostileNPC);
    BatchSetEventFlags(eventFlagId2, eventFlagId3, OFF);
    SetEventFlag(eventFlagId4, ON);
    SaveRequest(0);
});

// 完全獣化NPC戦闘開始
$Event(13400930, Default, function() {
    SetCharacterAIState(3400910, Disabled);
    WaitFor(InArea(10000, 3402949) || HasDamageType(3400910, 10000, DamageType.Unspecified));
    SetCharacterAIState(3400910, Enabled);
});

// 会話NPC秘密を探る者_初期化
$Event(13400950, Default, function(chrEntityId, chrEntityId2) {
    if (CharacterType(10000, TargetType.Alive)) {
        if (!AnyBatchEventFlags(1710, 1729)) {
            BatchSetEventFlags(1710, 1729, OFF);
            SetEventFlag(1720, ON);
        } else {
L0:
            if (EventFlag(1724)) {
                BatchSetEventFlags(1710, 1729, OFF);
                SetEventFlag(1720, ON);
            }
L1:
            if ((EventFlag(1720)
                && (EventFlag(1681) || EventFlag(1671))
                && EventFlag(73400403)
                && EventFlag(73400513))
                || (EventFlag(1720) && EventFlag(73400403) && EventFlag(1670))) {
                BatchSetEventFlags(1710, 1729, OFF);
                SetEventFlag(1721, ON);
            }
L2:
            if (AnyBatchEventFlags(1720, 1721) && EventFlag(73400403) && EventFlag(13500100)) {
                BatchSetEventFlags(1710, 1729, OFF);
                SetEventFlag(1722, ON);
            }
L3:
            if (AnyBatchEventFlags(1720, 1722) && EventFlag(73400403) && EventFlag(1650)) {
                BatchSetEventFlags(1710, 1729, OFF);
                SetEventFlag(1723, ON);
            }
        }
L8:
        NoOp();
    }
L9:
    ChangeCharacterEnableState(chrEntityId, Disabled);
    SetCharacterBackreadState(chrEntityId, true);
    ChangeCharacterEnableState(chrEntityId2, Disabled);
    SetCharacterBackreadState(chrEntityId2, true);
    GotoIf(L0, EventFlag(1720));
    GotoIf(L1, EventFlag(1725));
    GotoIf(L2, EventFlag(1710));
    GotoIf(L3, EventFlag(1721));
    GotoIf(L4, EventFlag(1726));
    GotoIf(L5, EventFlag(1711));
    EndEvent();
L0:
    ChangeCharacterEnableState(chrEntityId, Enabled);
    SetCharacterBackreadState(chrEntityId, false);
    SetCharacterTeamType(chrEntityId, TeamType.Ally);
    ForceAnimationPlayback(chrEntityId, 103150, false, false, false);
    EndEvent();
L1:
    ChangeCharacterEnableState(chrEntityId, Enabled);
    SetCharacterBackreadState(chrEntityId, false);
    SetCharacterTeamType(chrEntityId, TeamType.HostileNPC);
    EndEvent();
L2:
    ForceCharacterTreasure(chrEntityId);
    EndEvent();
L3:
    ChangeCharacterEnableState(chrEntityId2, Enabled);
    SetCharacterBackreadState(chrEntityId2, false);
    SetCharacterTeamType(chrEntityId2, TeamType.Ally);
    ForceAnimationPlayback(chrEntityId2, 103150, false, false, false);
    EndEvent();
L4:
    ChangeCharacterEnableState(chrEntityId2, Enabled);
    SetCharacterBackreadState(chrEntityId2, false);
    SetCharacterTeamType(chrEntityId2, TeamType.HostileNPC);
    EndEvent();
L5:
    ForceCharacterTreasure(chrEntityId2);
    EndEvent();
});

// 会話NPC秘密を探る者_会話中アニメ再生
$Event(13400951, Default, function(chrEntityId, eventFlagId, eventFlagId2) {
    EndIf(!CharacterType(10000, TargetType.Alive));
    SetEventFlag(eventFlagId, OFF);
    EndIf(!EventFlag(eventFlagId2));
    WaitFor(
        EventFlag(eventFlagId2) && EventFlag(eventFlagId) && CharacterHasSpEffect(chrEntityId, 151));
    ForceAnimationPlayback(chrEntityId, 103155, false, false, false);
    WaitFor(
        EventFlag(eventFlagId2) && !EventFlag(eventFlagId) && CharacterHasSpEffect(chrEntityId, 152));
    ForceAnimationPlayback(chrEntityId, 103150, false, false, false);
    RestartEvent();
});

// 秘密を探るもの_死亡時アイテム入手XX
$Event(13400953, Default, function(eventFlagId, eventFlagId2, itemLotId) {
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
});

// 聖堂街D_NPC死亡再現_XX
$Event(13400970, Default, function(chrEntityId) {
    if (ThisEventSlot()) {
        SetCharacterBackreadState(chrEntityId, true);
        EndEvent();
    }
L0:
    WaitFor(CharacterDead(chrEntityId));
    WaitFixedTimeSeconds(0);
});

// 聖堂街D_NPCアイテム入手_XX
$Event(13400980, Default, function(eventFlagId, itemLotId) {
    EndIf(ThisEventSlot());
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(EventFlag(eventFlagId));
    AwardItemLot(itemLotId);
});

// 聖堂街D_NPCアイテム入手_何度でも_XX
$Event(13400990, Default, function(eventFlagId, itemLotId) {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(EventFlag(eventFlagId));
    SetEventFlag(eventFlagId, OFF);
    AwardItemLot(itemLotId);
    RestartEvent();
});

// 聖堂街D_NPCアイテム入手_周回変化_XX
$Event(13400995, Default, function(eventFlagId, itemLotId, itemLotId2, eventFlagId2) {
    EndIf(EventFlag(eventFlagId));
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    WaitFor(EventFlag(eventFlagId));
    if (!EventFlag(eventFlagId2)) {
        AwardItemLot(itemLotId);
    } else {
        AwardItemLot(itemLotId2);
    }
});

// ★聖堂街D_新NPC召喚_ボス部屋を目指す_XX
$Event(13404450, Restart, function(chrEntityId, entityId, eventFlagId, eventFlagId2, eventFlagId3) {
    EndIf(ThisEventSlot());
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    SetEventPoint(chrEntityId, entityId, 1);
    WaitFor(EventFlag(eventFlagId) && !EventFlag(eventFlagId2) && EventFlag(eventFlagId3));
    RequestCharacterAICommand(chrEntityId, 990, 0);
    RequestCharacterAIReplan(chrEntityId);
});

// ★聖堂街D_新NPC召喚_召喚可否判定_トップハット_vsルド
$Event(13404401, Restart, function(eventFlagId, entityId, eventFlagId2, eventFlagId3, eventFlagId4, eventFlagId5) {
    if (!EventFlag(eventFlagId)) {
        SetEventFlag(eventFlagId, OFF);
        DeleteMapSFX(entityId, true);
        WaitFor(
            PlayerHasItem(ItemType.Goods, 4312)
                && !EventFlag(eventFlagId2)
                && !EventFlag(eventFlagId3)
                && !EventFlag(eventFlagId4)
                && NumberOfClientsOfType(ClientType.Coop) < 2
                && !AnyBatchEventFlags(13404422, 13404426)
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
                && !AnyBatchEventFlags(13404422, 13404426)
                && !EventFlag(eventFlagId5)));
    SetEventFlag(eventFlagId, OFF);
    DeleteMapSFX(entityId, true);
    RestartEvent();
});

// ★聖堂街D_新NPC召喚_召喚可否判定_連盟の長（兜あり）_vsルド
$Event(13404402, Restart, function(eventFlagId, entityId, eventFlagId2, eventFlagId3, eventFlagId4, eventFlagId5) {
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
                && (EventFlag(1800) || EventFlag(1801))
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
                && (EventFlag(1800) || EventFlag(1801))
                && !EventFlag(eventFlagId5)));
    SetEventFlag(eventFlagId, OFF);
    DeleteMapSFX(entityId, true);
    RestartEvent();
});

// ★聖堂街D_新NPC召喚_召喚可否判定_連盟の長（兜なし）vsルド
$Event(13404403, Restart, function(eventFlagId, entityId, eventFlagId2, eventFlagId3, eventFlagId4, eventFlagId5) {
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
                && EventFlag(6813)
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
                && EventFlag(6813)
                && !EventFlag(eventFlagId5)));
    SetEventFlag(eventFlagId, OFF);
    DeleteMapSFX(entityId, true);
    RestartEvent();
});

// ★聖堂街D_新NPC召喚_召喚可否判定_連盟：処刑人_vsΩ
$Event(13404404, Restart, function(eventFlagId, entityId, eventFlagId2, eventFlagId3, eventFlagId4, eventFlagId5) {
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

// ★聖堂街D_新NPC召喚_召喚可否判定_連盟の長（兜あり）_vsΩ
$Event(13404405, Restart, function(eventFlagId, entityId, eventFlagId2, eventFlagId3, eventFlagId4, eventFlagId5) {
    if (!EventFlag(eventFlagId)) {
        SetEventFlag(eventFlagId, OFF);
        DeleteMapSFX(entityId, true);
        WaitFor(
            PlayerHasItem(ItemType.Goods, 4312)
                && !EventFlag(eventFlagId2)
                && !EventFlag(eventFlagId3)
                && !EventFlag(eventFlagId4)
                && NumberOfClientsOfType(ClientType.Coop) < 2
                && PlayerHasItem(ItemType.Goods, 4014)
                && CharacterHasSpEffect(10000, 6142)
                && (EventFlag(1800) || EventFlag(1801))
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
                && PlayerHasItem(ItemType.Goods, 4014)
                && CharacterHasSpEffect(10000, 6142)
                && (EventFlag(1800) || EventFlag(1801))
                && !EventFlag(eventFlagId5)));
    SetEventFlag(eventFlagId, OFF);
    DeleteMapSFX(entityId, true);
    RestartEvent();
});

// ★聖堂街D_新NPC召喚_召喚可否判定_連盟の長（兜なし）_vsΩ
$Event(13404406, Restart, function(eventFlagId, entityId, eventFlagId2, eventFlagId3, eventFlagId4, eventFlagId5) {
    if (!EventFlag(eventFlagId)) {
        SetEventFlag(eventFlagId, OFF);
        DeleteMapSFX(entityId, true);
        WaitFor(
            PlayerHasItem(ItemType.Goods, 4312)
                && !EventFlag(eventFlagId2)
                && !EventFlag(eventFlagId3)
                && !EventFlag(eventFlagId4)
                && NumberOfClientsOfType(ClientType.Coop) < 2
                && PlayerHasItem(ItemType.Goods, 4014)
                && CharacterHasSpEffect(10000, 6142)
                && EventFlag(6813)
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
                && PlayerHasItem(ItemType.Goods, 4014)
                && CharacterHasSpEffect(10000, 6142)
                && EventFlag(6813)
                && !EventFlag(eventFlagId5)));
    SetEventFlag(eventFlagId, OFF);
    DeleteMapSFX(entityId, true);
    RestartEvent();
});

// ★聖堂街D_新NPC召喚_参加_XX
$Event(13404410, Restart, function(signType, areaEntityId, entityId, eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4, actionButtonParameterId) {
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

// ★聖堂街D_新NPC召喚_ボス部屋に入る_XX
$Event(13404460, Restart, function(chrEntityId, areaEntityId, entityId, areaEntityId2, playAnimationId, eventFlagId, areaEntityId3) {
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

// ★聖堂街D_新NPC召喚_ボス戦中投げ無効_XX
$Event(13404490, Restart, function(chrEntityId, eventFlagId, eventFlagId2, eventFlagId3) {
    SetNetworkSyncState(Disabled);
    WaitFor(
        HasMultiplayerState(MultiplayerState.Host)
            && EventFlag(eventFlagId)
            && !EventFlag(eventFlagId2)
            && EventFlag(eventFlagId3));
    SetSpEffectAndUnknown200455(chrEntityId, 35, false);
    WaitFixedTimeFrames(1);
    RestartEvent();
});


