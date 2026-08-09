// ==EMEVD==
// @docs    bb-common.emedf.json
// @compress    DCX_DFLT_10000_44_9
// @game    Bloodborne
// @string    "クリア時間_通し\u0000クリア時間_1プレイ\u0000生贄の街_テレポーター使用_00\u0000生贄の街_テレポーター使用_01\u0000生贄の街_テレポーター領域侵入_00\u0000生贄の街_テレポーター領域侵入_01\u0000\u0000ボス_撃破\u0000PC情報_ボス撃破_なりそこないの邪神\u0000ボス_戦闘開始\u0000ボス戦_撃破時間\u0000PC情報_生贄の街到達時\u0000N:\\SPRJ\\data\\Param\\event\\common.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [298]
// @version    3.6.2
// ==/EMEVD==

// コンストラクタ
$Event(0, Default, function() {
    RegisterLadder(12800350, 12800351, 2801250);
    $InitializeEvent(60, 7600, 2801999, 2803999);
    $InitializeEvent(61, 7600, 2801998, 2803998);
    $InitializeEvent(40, 7000, 2800950, 2801950, 999, 12807800);
    $InitializeEvent(41, 7000, 2800951, 2801951, 12801800, 12807820);
    if (!EventFlag(9802)) {
        $InitializeEvent(42, 7000, 2800952, 2801952, 999, 12807840);
    }
    $InitializeEvent(43, 7000, 2800953, 2801953, 999, 12807860);
    $InitializeEvent(40, 7100, 72800200, 2801950);
    $InitializeEvent(41, 7100, 72800201, 2801951);
    if (!EventFlag(9802)) {
        $InitializeEvent(42, 7100, 72800202, 2801952);
    }
    $InitializeEvent(43, 7100, 72800203, 2801953);
    $InitializeEvent(40, 7200, 72800100, 2801950, 2102952);
    $InitializeEvent(41, 7200, 72800101, 2801951, 2102952);
    if (!EventFlag(9802)) {
        $InitializeEvent(42, 7200, 72800102, 2801952, 2102952);
    }
    $InitializeEvent(43, 7200, 72800103, 2801953, 2102953);
    $InitializeEvent(40, 7300, 72102800, 2801950);
    $InitializeEvent(41, 7300, 72102801, 2801951);
    if (!EventFlag(9802)) {
        $InitializeEvent(42, 7300, 72102802, 2801952);
    }
    $InitializeEvent(43, 7300, 72102803, 2801953);
    $InitializeEvent(0, 12800140);
    $InitializeEvent(8, 9200, 2803900);
    $InitializeEvent(0, 12800160);
    $InitializeEvent(7, 9220, 2800710, 12804220, 12804221, 2800, 28, 0);
    $InitializeEvent(7, 9240, 2800710, 12804220, 12804221, 12804222, 28, 0);
    $InitializeEvent(7, 9260, 2800710, 12804220, 12804221, 12804222, 28, 0);
    $InitializeEvent(7, 9280, 2800710, 12804220, 12804221, 2800, 12804223, 28, 0);
    $InitializeEvent(0, 12800999);
    $InitializeEvent(0, 12800435);
    $InitializeEvent(0, 12800436);
    $InitializeEvent(0, 12800400);
    $InitializeEvent(0, 12800401);
    $InitializeEvent(0, 12800402);
    $InitializeEvent(0, 12800403);
    CreateObjectfollowingSFX(2801010, 200, 900130);
    StartTimeMeasurement(2800000, 0, Enabled);
    StartTimeMeasurement(2800001, 18, Enabled);
    $InitializeEvent(0, 12800990);
    if (CharacterType(10000, TargetType.Alive)) {
        if (EventFlag(6322)) {
            SetEventFlag(12801999, ON);
        }
    }
    if (!EventFlag(12801999)) {
        DeactivateObject(2801550, Enabled);
        DeactivateObject(2801551, Disabled);
        SetObjectTreasureState(2801550, Enabled);
        SetObjectTreasureState(2801551, Disabled);
    } else {
        DeactivateObject(2801550, Disabled);
        DeactivateObject(2801551, Enabled);
        SetObjectTreasureState(2801550, Disabled);
        SetObjectTreasureState(2801551, Enabled);
    }
    if (CharacterType(10000, TargetType.Alive)) {
        if (EventFlag(6323)) {
            SetEventFlag(12801998, ON);
        }
    }
    if (!EventFlag(12801998)) {
        DeactivateObject(2801552, Enabled);
        DeactivateObject(2801553, Disabled);
        SetObjectTreasureState(2801552, Enabled);
        SetObjectTreasureState(2801553, Disabled);
    } else {
        DeactivateObject(2801552, Disabled);
        DeactivateObject(2801553, Enabled);
        SetObjectTreasureState(2801552, Disabled);
        SetObjectTreasureState(2801553, Enabled);
    }
    if (CharacterType(10000, TargetType.Alive)) {
        if (EventFlag(6324)) {
            SetEventFlag(12801997, ON);
        }
    }
    if (!EventFlag(12801997)) {
        DeactivateObject(2801554, Enabled);
        DeactivateObject(2801555, Disabled);
        SetObjectTreasureState(2801554, Enabled);
        SetObjectTreasureState(2801555, Disabled);
    } else {
        DeactivateObject(2801554, Disabled);
        DeactivateObject(2801555, Enabled);
        SetObjectTreasureState(2801554, Disabled);
        SetObjectTreasureState(2801555, Enabled);
    }
    $InitializeEvent(0, 12800901);
    $InitializeEvent(0, 12800902);
    $InitializeEvent(0, 12800903);
    $InitializeEvent(0, 12800904);
    $InitializeEvent(0, 12800905);
    $InitializeEvent(0, 12800906);
    $InitializeEvent(0, 12800908);
    $InitializeEvent(0, 12800909);
    $InitializeEvent(0, 12800910);
    DeleteMapSFX(2803920, false);
    DeleteMapSFX(2803921, false);
    $InitializeEvent(0, 12804400, 12804440, 2803920, 12804420, 12804430, 12801800, 12804421);
    $InitializeEvent(0, 12804401, 12804441, 2803921, 12804421, 12804431, 12801800, 12804420);
    $InitializeEvent(0, 12804410, 5, 2800910, 2802910, 12804420, 12804430, 12804440, 12801800, 10564);
    $InitializeEvent(1, 12804410, SingleplayerSummonSignType.NormalCoop, 2800911, 2802913, 12804421, 12804431, 12804441, 12801800, 10568);
    $InitializeEvent(0, 12804450, 2800910, 2802911, 12804420, 12804430, 12804800);
    $InitializeEvent(1, 12804450, 2800911, 2802914, 12804421, 12804431, 12804800);
    $InitializeEvent(0, 12804460, 2800910, 2802911, 2802800, 2802801, 101130, 12804450, 2802801);
    $InitializeEvent(1, 12804460, 2800911, 2802914, 2802800, 2802801, 101130, 12804451, 2802801);
    $InitializeEvent(0, 12804882);
    $InitializeEvent(0, 12804883);
    $InitializeEvent(0, 12801800);
    $InitializeEvent(0, 12801801);
    $InitializeEvent(0, 12801802);
    $InitializeEvent(0, 12804880);
    $InitializeEvent(0, 12804881);
    $InitializeEvent(0, 12804802);
    $InitializeEvent(0, 12804803);
    $InitializeEvent(0, 12804804);
    $InitializeEvent(0, 12804805);
    $InitializeEvent(0, 12804806);
    $InitializeEvent(0, 12804807);
    $InitializeEvent(0, 12801803);
    $InitializeEvent(0, 12804820, 2800, 2800, NPCPartType.Part1, 100, 480, 490, 7000);
    $InitializeEvent(1, 12804820, 2801, 2801, NPCPartType.Part2, 200, 481, 491, 7001);
    $InitializeEvent(2, 12804820, 2802, 2802, NPCPartType.Part3, 200, 482, 492, 7002);
    $InitializeEvent(3, 12804820, 2803, 2803, NPCPartType.Part4, 100, 483, 493, 7003);
    $InitializeEvent(4, 12804820, 2804, 2804, NPCPartType.Part5, 200, 484, 494, 7004);
    $InitializeEvent(5, 12804820, 2805, 2805, NPCPartType.Part6, 200, 485, 495, 7005);
    $InitializeEvent(6, 12804820, 2806, 2806, NPCPartType.Part7, 100, 486, 496, 7006);
    $InitializeEvent(0, 12804830);
    $InitializeEvent(0, 12804831);
    $InitializeEvent(0, 12804832);
    $InitializeEvent(0, 12804834);
    $InitializeEvent(0, 12804835);
    $InitializeEvent(0, 12804836);
    $InitializeEvent(0, 12804837);
    $InitializeEvent(0, 12804838);
    $InitializeEvent(0, 12804840, 2800522);
    $InitializeEvent(1, 12804840, 2800527);
    $InitializeEvent(0, 12804850, 2800520);
    $InitializeEvent(2, 12804850, 2800522);
    $InitializeEvent(4, 12804850, 2800524);
    $InitializeEvent(5, 12804850, 2800525);
    $InitializeEvent(7, 12804850, 2800527);
    $InitializeEvent(9, 12804850, 2800529);
    $InitializeEvent(0, 12804870);
    $InitializeEvent(0, 12804871);
    $InitializeEvent(0, 12800100, 2801350, 12800250);
    $InitializeEvent(1, 12800100, 2801351, 12800251);
    $InitializeEvent(2, 12800100, 2801352, 12800252);
    $InitializeEvent(3, 12800100, 2801353, 12800253);
    $InitializeEvent(4, 12800100, 2801354, 12800254);
    $InitializeEvent(5, 12800100, 2801355, 12800255);
    $InitializeEvent(0, 12800120, 2801010, 7413, 10012013);
    $InitializeEvent(0, 12800480, 2801200, 12800201, 1, 31);
    $InitializeEvent(1, 12800480, 2801202, 12800202, 1, 30);
    $InitializeEvent(2, 12800480, 2801203, 12800203, 1, 30);
    $InitializeEvent(3, 12800480, 2801206, 12800206, 1, 30);
    $InitializeEvent(4, 12800480, 2801208, 12800209, 1, 2800020);
    $InitializeEvent(0, 12800490, 7030, 2801200, 12800480);
    $InitializeEvent(1, 12800490, 7031, 2801202, 12800481);
    $InitializeEvent(2, 12800490, 7031, 2801203, 12800482);
    $InitializeEvent(3, 12800490, 7031, 2801206, 12800483);
    $InitializeEvent(4, 12800490, 7030, 2801208, 12800484);
    $InitializeEvent(0, 12800430);
    $InitializeEvent(0, 12800431);
    $InitializeEvent(0, 12800432);
    $InitializeEvent(0, 12800433, 2800740);
    $InitializeEvent(1, 12800433, 2800745);
    $InitializeEvent(0, 12805160, 2800244, 2802230, 1);
    $InitializeEvent(1, 12805160, 2800245, 2802230, 1);
    $InitializeEvent(2, 12805160, 2800243, 2802230, 1);
    $InitializeEvent(2, 12805180, 2800210, 2802270);
    $InitializeEvent(0, 12805470, 11, 11, NPCPartType.Part7, 7003, 5907, 12805655, 12805665, 2800210);
    $InitializeEvent(1, 12805470, 12, 12, NPCPartType.Part8, 7000, 5907, 12805655, 12805665, 2800210);
    $InitializeEvent(0, 12805480, 11, 11, NPCPartType.Part7, 80, 12805655, 2800210);
    $InitializeEvent(1, 12805480, 12, 12, NPCPartType.Part8, 80, 12805655, 2800210);
    $InitializeEvent(0, 12805490, 10, 40, 12805665, 2800210);
    $InitializeEvent(1, 12805490, 30, 40, 12805665, 2800210);
    $InitializeEvent(1, 12800500, 2800721, 52800980);
    $InitializeEvent(2, 12800500, 2800722, 52800970);
    $InitializeEvent(0, 12800500, 2800720, 52800990);
    $InitializeEvent(3, 12800500, 2800723, 52800960);
    if (EventFlag(9802)) {
        $InitializeEvent(0, 12800600, 12804700, 12800610, 12800611, 12800612, 2801400, 2801401, 2801402);
        $InitializeEvent(0, 12800601, 12804700, 12800610, 12800611, 12800612);
        $InitializeEvent(0, 12800602, 12804700, 12800610, 12800611, 12800612, 2802102, 12800280);
        $InitializeEvent(0, 12800604, 12804700, 12800610, 12800611, 12800612, 2802101, 12800281);
        $InitializeEvent(0, 12800606, 12804700, 12800610, 12800612, 2801401, 2801402);
        $InitializeEvent(0, 12800607, 12800612, 2802100, 2801401, 2801402);
        $InitializeEvent(0, 12800470, 2800742, 7000);
        $InitializeEvent(1, 12800470, 2800743, 7001);
        $InitializeEvent(2, 12800470, 2800744, 7003);
        $InitializeEvent(0, 12800460, 2801100, 2802001, 40);
        $InitializeEvent(1, 12800460, 2801101, 2802000, 74);
        $InitializeEvent(0, 12800620, 2802880, 108);
        $InitializeEvent(1, 12800620, 2802881, 146);
        $InitializeEvent(0, 12800700, 2800700);
        $InitializeEvent(1, 12800700, 2800701);
        $InitializeEvent(2, 12800700, 2800702);
        $InitializeEvent(0, 12805500, 2800482, 2802483, 2803482, 0);
        $InitializeEvent(1, 12805500, 2800483, 2802483, 2803483, 0);
        $InitializeEvent(2, 12805500, 2800562, 2802562, 2803562, 0);
        $InitializeEvent(3, 12805500, 2800570, 2802570, 2803570, 0);
        $InitializeEvent(4, 12805500, 2800571, 2802570, 2803571, 0);
        $InitializeEvent(5, 12805500, 2800540, 2802540, 2803540, 0);
        $InitializeEvent(6, 12805500, 2800542, 2802542, 2803542, 0);
        $InitializeEvent(7, 12805500, 2800543, 2802543, 2803543, 0);
        $InitializeEvent(8, 12805500, 2800301, 2802301, 2803301, 0);
        $InitializeEvent(9, 12805500, 2800308, 2802602, 2803308, 0);
        $InitializeEvent(10, 12805500, 2800309, 2802602, 2803309, 0);
        $InitializeEvent(11, 12805500, 2800310, 2802602, 2803310, 0);
        $InitializeEvent(12, 12805500, 2800311, 2802602, 2803311, 0);
        $InitializeEvent(13, 12805500, 2800312, 2802602, 2803312, 0);
        $InitializeEvent(14, 12805500, 2800313, 2802602, 2803313, 0);
        $InitializeEvent(15, 12805500, 2800314, 2802602, 2803314, 0);
        $InitializeEvent(16, 12805500, 2800315, 2802602, 2803315, 0);
        $InitializeEvent(17, 12805500, 2800316, 2802502, 2803316, 1);
        $InitializeEvent(18, 12805500, 2800317, 2802502, 2803317, 3);
        $InitializeEvent(19, 12805500, 2800404, 2802507, 2803404, 0);
        $InitializeEvent(20, 12805500, 2800405, 2802507, 2803405, 0);
        $InitializeEvent(21, 12805500, 2800406, 2802507, 2803406, 0);
        $InitializeEvent(22, 12805500, 2800407, 2802507, 2803407, 0);
        $InitializeEvent(23, 12805500, 2800461, 2802461, 2803461, 0);
        $InitializeEvent(0, 12805600, 2800400, 7010, 261800, 7011, 261800, 2802400, 12805042, 1);
        $InitializeEvent(1, 12805600, 2800401, 7012, 261840, 7013, 261840, 2802400, 12805042, 1);
        $InitializeEvent(2, 12805600, 2800402, 7011, 261811, 0, 261811, 2802400, 12805042, 1);
        $InitializeEvent(3, 12805600, 2800403, 7012, 261810, 7013, 261810, 2802400, 12805042, 1);
        $InitializeEvent(4, 12805600, 2800408, 7010, 261800, 7011, 261800, 0, 12805042, 0);
        $InitializeEvent(6, 12805600, 2800410, 7010, 261840, 7011, 261840, 0, 12805042, 0);
        $InitializeEvent(7, 12805600, 2800411, 7012, 261810, 7013, 261810, 0, 12805042, 0);
        $InitializeEvent(10, 12805600, 2800382, 7010, 264801, 7011, 264800, 0, 12805042, 0);
        $InitializeEvent(30, 12805600, 2800318, 0, 263851, 3013, 263850, 0, 12805040, 1);
        $InitializeEvent(31, 12805600, 2800305, 0, 263851, 3013, 263850, 0, 12805040, 1);
        $InitializeEvent(0, 12805650, 2800400, 2802400, 2802401, 10, 12805660);
        $InitializeEvent(1, 12805650, 2800401, 2802400, 2802402, 10, 12805661);
        $InitializeEvent(2, 12805650, 2800402, 2802400, 2802403, 10, 12805662);
        $InitializeEvent(3, 12805650, 2800403, 2802400, 2802404, 10, 12805663);
        $InitializeEvent(4, 12805650, 2800480, 2802480, 2802481, 10, 12805664);
        $InitializeEvent(6, 12805650, 2800329, 2802329, 2802330, 10, 12805666);
        $InitializeEvent(0, 12805660, 2800400, 2802401);
        $InitializeEvent(1, 12805660, 2800401, 2802402);
        $InitializeEvent(2, 12805660, 2800402, 2802403);
        $InitializeEvent(3, 12805660, 2800403, 2802404);
        $InitializeEvent(4, 12805660, 2800480, 2802481);
        $InitializeEvent(6, 12805660, 2800329, 2802330);
        $InitializeEvent(0, 12805670, 2800400, 10, 12805660, 0, 0);
        $InitializeEvent(1, 12805670, 2800401, 10, 12805661, 0, 0);
        $InitializeEvent(2, 12805670, 2800402, 10, 12805662, 0, 0);
        $InitializeEvent(3, 12805670, 2800403, 10, 12805663, 0, 0);
        $InitializeEvent(4, 12805670, 2800480, 10, 12805664, 0, 0);
        $InitializeEvent(6, 12805670, 2800329, 10, 12805666, 1, 2);
        $InitializeEvent(0, 12805680, 2800501, 2802506, 1);
        DeactivateGenerator(2803000, Disabled);
        DeactivateGenerator(2803001, Disabled);
        DeactivateGenerator(2803002, Disabled);
        DeactivateGenerator(2803003, Disabled);
        DeactivateGenerator(2803004, Disabled);
        DeactivateGenerator(2803005, Disabled);
        DeactivateGenerator(2803006, Disabled);
        DeactivateGenerator(2803007, Disabled);
        DeactivateGenerator(2803008, Disabled);
        DeactivateGenerator(2803009, Disabled);
        DeactivateGenerator(2803010, Disabled);
        DeactivateGenerator(2803011, Disabled);
        DeactivateGenerator(2803012, Disabled);
        DeactivateGenerator(2803013, Disabled);
        DeactivateGenerator(2803014, Disabled);
        DeactivateGenerator(2803015, Disabled);
        DeactivateGenerator(2803016, Disabled);
        DeactivateGenerator(2803017, Disabled);
        DeactivateGenerator(2803018, Disabled);
        DeactivateGenerator(2803019, Disabled);
        DeactivateGenerator(2803020, Disabled);
        DeactivateGenerator(2803021, Disabled);
        DeactivateGenerator(2803022, Disabled);
        DeactivateGenerator(2803023, Disabled);
        DeactivateGenerator(2803024, Disabled);
        DeactivateGenerator(2803025, Disabled);
        DeactivateGenerator(2803026, Disabled);
        DeactivateGenerator(2803028, Disabled);
        DeactivateGenerator(2803080, Disabled);
        DeactivateGenerator(2803082, Disabled);
        DeactivateGenerator(2803083, Disabled);
        DeactivateGenerator(2803084, Disabled);
        DeactivateGenerator(2803100, Disabled);
        DeactivateGenerator(2803101, Disabled);
        DeactivateGenerator(2803102, Disabled);
        DeactivateGenerator(2803103, Disabled);
        DeactivateGenerator(2803104, Disabled);
        DeactivateGenerator(2803105, Disabled);
        DeactivateGenerator(2803106, Disabled);
        DeactivateGenerator(2803107, Disabled);
        DeactivateGenerator(2803108, Disabled);
        DeactivateGenerator(2803110, Disabled);
        DeactivateGenerator(2803111, Disabled);
        DeactivateGenerator(2803160, Disabled);
        DeactivateGenerator(2803161, Disabled);
        DeactivateGenerator(2803162, Disabled);
        DeactivateGenerator(2803163, Disabled);
        DeactivateGenerator(2803180, Disabled);
        DeactivateGenerator(2803181, Disabled);
        DeactivateGenerator(2803182, Disabled);
        DeactivateGenerator(2803183, Disabled);
        $InitializeEvent(2, 12804500, 12805030, 2803002, 12805040, 2800302, 0, 0, 0);
        $InitializeEvent(3, 12804500, 12805030, 2803003, 12805040, 2800303, 0, 0, 1);
        $InitializeEvent(1, 12804500, 9802, 2803001, 12805040, 2800301, 0, 0, 0);
        $InitializeEvent(0, 12804500, 9802, 2803000, 12805040, 2800300, 0, 0, 0);
        $InitializeEvent(160, 12804500, 9802, 2803160, 12805040, 2800460, 0, 0, 1);
        $InitializeEvent(4, 12804500, 9802, 2803004, 12805044, 2800304, 0, 0, 1);
        $InitializeEvent(5, 12804500, 9802, 2803005, 12805044, 2800305, 0, 0, 0);
        $InitializeEvent(6, 12804500, 9802, 2803006, 12805044, 2800306, 0, 0, 0);
        $InitializeEvent(7, 12804500, 9802, 2803007, 12805044, 2800307, 0, 0, 1);
        $InitializeEvent(182, 12804500, 9802, 2803182, 12805044, 2800482, 0, 0, 0);
        $InitializeEvent(183, 12804500, 9802, 2803183, 12805044, 2800483, 0, 0, 0);
        $InitializeEvent(8, 12804500, 9802, 2803008, 12805040, 2800308, 0, 0, 0);
        $InitializeEvent(9, 12804500, 9802, 2803009, 12805040, 2800309, 0, 0, 0);
        $InitializeEvent(10, 12804500, 9802, 2803010, 12805040, 2800310, 0, 0, 0);
        $InitializeEvent(11, 12804500, 9802, 2803011, 12805040, 2800311, 0, 0, 0);
        $InitializeEvent(12, 12804500, 9802, 2803012, 12805040, 2800312, 0, 0, 0);
        $InitializeEvent(13, 12804500, 9802, 2803013, 12805040, 2800313, 0, 0, 0);
        $InitializeEvent(14, 12804500, 9802, 2803014, 12805040, 2800314, 0, 0, 0);
        $InitializeEvent(15, 12804500, 9802, 2803015, 12805040, 2800315, 0, 0, 0);
        $InitializeEvent(16, 12804500, 12805031, 2803016, 12805040, 2800316, 0, 0, 0);
        $InitializeEvent(17, 12804500, 12805031, 2803017, 12805040, 2800317, 0, 0, 1);
        $InitializeEvent(18, 12804500, 9802, 2803018, 12805040, 2800318, 0, 0, 0);
        $InitializeEvent(20, 12804500, 12805021, 2803020, 12805041, 2800320, 0, 0, 0);
        $InitializeEvent(21, 12804500, 12805021, 2803021, 12805041, 2800321, 0, 0, 0.5);
        $InitializeEvent(80, 12804500, 12805021, 2803080, 12805041, 2800380, 0, 0, 1);
        $InitializeEvent(19, 12804500, 12805022, 2803019, 12805041, 2800319, 0, 0, 0);
        $InitializeEvent(162, 12804500, 12805022, 2803162, 12805041, 2800462, 0, 0, 1);
        $InitializeEvent(100, 12804500, 9802, 2803100, 12805042, 2800400, 0, 0, 0);
        $InitializeEvent(101, 12804500, 9802, 2803101, 12805042, 2800401, 0, 0, 0);
        $InitializeEvent(102, 12804500, 9802, 2803102, 12805042, 2800402, 0, 0, 0);
        $InitializeEvent(103, 12804500, 9802, 2803103, 12805042, 2800403, 0, 0, 0);
        $InitializeEvent(108, 12804500, 9802, 2803108, 12805042, 2800408, 0, 0, 0);
        $InitializeEvent(110, 12804500, 9802, 2803110, 12805042, 2800410, 0, 0, 0);
        $InitializeEvent(111, 12804500, 9802, 2803111, 12805042, 2800411, 0, 0, 0);
        $InitializeEvent(82, 12804500, 9802, 2803082, 12805042, 2800382, 0, 0, 0);
        $InitializeEvent(83, 12804500, 9802, 2803083, 12805042, 2800383, 0, 0, 0);
        $InitializeEvent(161, 12804500, 9802, 2803161, 12805042, 2800461, 0, 0, 0);
        $InitializeEvent(104, 12804500, 9802, 2803104, 12805042, 2800404, 0, 0, 0);
        $InitializeEvent(105, 12804500, 9802, 2803105, 12805042, 2800405, 0, 0, 0.5);
        $InitializeEvent(106, 12804500, 9802, 2803106, 12805042, 2800406, 0, 0, 1);
        $InitializeEvent(107, 12804500, 9802, 2803107, 12805042, 2800407, 0, 0, 1.5);
        $InitializeEvent(22, 12804500, 12805023, 2803022, 12805043, 2800322, 0, 0, 0.5);
        $InitializeEvent(23, 12804500, 12805023, 2803023, 12805043, 2800323, 0, 0, 0);
        $InitializeEvent(84, 12804500, 12805023, 2803084, 12805043, 2800384, 0, 0, 1);
        $InitializeEvent(24, 12804500, 9802, 2803024, 12805043, 2800324, 0, 0, 0);
        $InitializeEvent(25, 12804500, 9802, 2803025, 12805043, 2800325, 0, 0, 0);
        $InitializeEvent(180, 12804500, 9802, 2803180, 12805043, 2800480, 0, 0, 0);
        $InitializeEvent(181, 12804500, 9802, 2803181, 12805043, 2800481, 0, 0, 0);
        $InitializeEvent(26, 12804500, 12805033, 2803026, 12805045, 2800326, 0, 0, 0);
        $InitializeEvent(27, 12804500, 12805033, 2803027, 12805045, 2800327, 0, 0, 0.5);
        $InitializeEvent(28, 12804500, 12805025, 2803028, 12805045, 2800328, 0, 0, 1);
        $InitializeEvent(0, 12805020, 2800500, 2802504);
        $InitializeEvent(1, 12805020, 2800501, 2802505);
        $InitializeEvent(2, 12805020, 2800501, 2802506);
        $InitializeEvent(3, 12805020, 2800503, 2802509);
        $InitializeEvent(4, 12805020, 2800504, 2802514);
        $InitializeEvent(5, 12805020, 2800505, 2802513);
        $InitializeEvent(0, 12805030, 2802500, 2802501, 12805030, 12805040);
        $InitializeEvent(1, 12805030, 2802502, 2802503, 12805031, 12805040);
        $InitializeEvent(2, 12805030, 2802507, 2802508, 12805032, 12805042);
        $InitializeEvent(3, 12805030, 2802511, 2802512, 12805033, 12805045);
        $InitializeEvent(0, 12805040, 2800500);
        $InitializeEvent(1, 12805040, 2800501);
        $InitializeEvent(2, 12805040, 2800502);
        $InitializeEvent(3, 12805040, 2800503);
        $InitializeEvent(4, 12805040, 2800504);
        $InitializeEvent(5, 12805040, 2800505);
        $InitializeEvent(0, 12805700, 2800500, 2800300, 0, 0);
        $InitializeEvent(1, 12805700, 2800500, 2800301, 0, 0);
        $InitializeEvent(2, 12805700, 2800500, 2800302, 0, 0);
        $InitializeEvent(3, 12805700, 2800500, 2800303, 0, 0);
        $InitializeEvent(4, 12805700, 2800504, 2800304, 0, 0);
        $InitializeEvent(5, 12805700, 2800504, 2800305, 0, 0);
        $InitializeEvent(6, 12805700, 2800504, 2800306, 0, 0);
        $InitializeEvent(7, 12805700, 2800504, 2800307, 0, 0);
        $InitializeEvent(8, 12805700, 2800500, 2800308, 0, 0);
        $InitializeEvent(9, 12805700, 2800500, 2800309, 0, 0);
        $InitializeEvent(10, 12805700, 2800500, 2800310, 0, 0);
        $InitializeEvent(11, 12805700, 2800500, 2800311, 0, 0);
        $InitializeEvent(12, 12805700, 2800500, 2800312, 0, 0);
        $InitializeEvent(13, 12805700, 2800500, 2800313, 0, 0);
        $InitializeEvent(14, 12805700, 2800500, 2800314, 0, 0);
        $InitializeEvent(15, 12805700, 2800500, 2800315, 0, 0);
        $InitializeEvent(16, 12805700, 2800500, 2800316, 0, 0);
        $InitializeEvent(17, 12805700, 2800500, 2800317, 0, 0);
        $InitializeEvent(18, 12805700, 2800500, 2800318, 0, 0);
        $InitializeEvent(19, 12805700, 2800501, 2800319, 0, 0);
        $InitializeEvent(20, 12805700, 2800501, 2800320, 0, 0);
        $InitializeEvent(21, 12805700, 2800501, 2800321, 0, 0);
        $InitializeEvent(22, 12805700, 2800503, 2800322, 0, 0);
        $InitializeEvent(23, 12805700, 2800503, 2800323, 0, 0);
        $InitializeEvent(24, 12805700, 2800503, 2800324, 0, 0);
        $InitializeEvent(25, 12805700, 2800503, 2800325, 0, 0);
        $InitializeEvent(26, 12805700, 2800505, 2800326, 0, 0);
        $InitializeEvent(27, 12805700, 2800505, 2800327, 0, 0);
        $InitializeEvent(28, 12805700, 2800505, 2800328, 0, 0);
        $InitializeEvent(80, 12805700, 2800501, 2800380, 0, 0);
        $InitializeEvent(82, 12805700, 2800502, 2800382, 0, 0);
        $InitializeEvent(83, 12805700, 2800502, 2800383, 0, 0);
        $InitializeEvent(84, 12805700, 2800503, 2800384, 0, 0);
        $InitializeEvent(100, 12805700, 2800502, 2800400, 0, 0);
        $InitializeEvent(101, 12805700, 2800502, 2800401, 0, 0);
        $InitializeEvent(102, 12805700, 2800502, 2800402, 0, 0);
        $InitializeEvent(103, 12805700, 2800502, 2800403, 0, 0);
        $InitializeEvent(104, 12805700, 2800502, 2800404, 0, 0);
        $InitializeEvent(105, 12805700, 2800502, 2800405, 0, 0);
        $InitializeEvent(106, 12805700, 2800502, 2800406, 0, 0);
        $InitializeEvent(107, 12805700, 2800502, 2800407, 0, 0);
        $InitializeEvent(108, 12805700, 2800502, 2800408, 0, 0);
        $InitializeEvent(110, 12805700, 2800502, 2800410, 0, 0);
        $InitializeEvent(111, 12805700, 2800502, 2800411, 0, 0);
        $InitializeEvent(160, 12805700, 2800500, 2800460, 0, 0);
        $InitializeEvent(161, 12805700, 2800502, 2800461, 0, 0);
        $InitializeEvent(162, 12805700, 2800501, 2800462, 0, 0);
        $InitializeEvent(180, 12805700, 2800503, 2800480, 0, 0);
        $InitializeEvent(181, 12805700, 2800503, 2800481, 0, 0);
        $InitializeEvent(182, 12805700, 2800504, 2800482, 0, 0);
        $InitializeEvent(183, 12805700, 2800504, 2800483, 0, 0);
        $InitializeEvent(0, 12804000, 2800300);
        $InitializeEvent(1, 12804000, 2800301);
        $InitializeEvent(2, 12804000, 2800302);
        $InitializeEvent(3, 12804000, 2800303);
        $InitializeEvent(4, 12804000, 2800304);
        $InitializeEvent(5, 12804000, 2800305);
        $InitializeEvent(6, 12804000, 2800306);
        $InitializeEvent(7, 12804000, 2800307);
        $InitializeEvent(8, 12804000, 2800308);
        $InitializeEvent(9, 12804000, 2800309);
        $InitializeEvent(10, 12804000, 2800310);
        $InitializeEvent(11, 12804000, 2800311);
        $InitializeEvent(12, 12804000, 2800312);
        $InitializeEvent(13, 12804000, 2800313);
        $InitializeEvent(14, 12804000, 2800314);
        $InitializeEvent(15, 12804000, 2800315);
        $InitializeEvent(16, 12804000, 2800316);
        $InitializeEvent(17, 12804000, 2800317);
        $InitializeEvent(18, 12804000, 2800318);
        $InitializeEvent(19, 12804000, 2800319);
        $InitializeEvent(20, 12804000, 2800320);
        $InitializeEvent(21, 12804000, 2800321);
        $InitializeEvent(22, 12804000, 2800322);
        $InitializeEvent(23, 12804000, 2800323);
        $InitializeEvent(24, 12804000, 2800324);
        $InitializeEvent(25, 12804000, 2800325);
        $InitializeEvent(26, 12804000, 2800326);
        $InitializeEvent(27, 12804000, 2800327);
        $InitializeEvent(28, 12804000, 2800328);
        $InitializeEvent(80, 12804000, 2800380);
        $InitializeEvent(82, 12804000, 2800382);
        $InitializeEvent(83, 12804000, 2800383);
        $InitializeEvent(84, 12804000, 2800384);
        $InitializeEvent(100, 12804000, 2800400);
        $InitializeEvent(101, 12804000, 2800401);
        $InitializeEvent(102, 12804000, 2800402);
        $InitializeEvent(103, 12804000, 2800403);
        $InitializeEvent(104, 12804000, 2800404);
        $InitializeEvent(105, 12804000, 2800405);
        $InitializeEvent(106, 12804000, 2800406);
        $InitializeEvent(107, 12804000, 2800407);
        $InitializeEvent(108, 12804000, 2800408);
        $InitializeEvent(110, 12804000, 2800410);
        $InitializeEvent(111, 12804000, 2800411);
        $InitializeEvent(160, 12804000, 2800460);
        $InitializeEvent(161, 12804000, 2800461);
        $InitializeEvent(162, 12804000, 2800462);
        $InitializeEvent(180, 12804000, 2800480);
        $InitializeEvent(181, 12804000, 2800481);
        $InitializeEvent(182, 12804000, 2800482);
        $InitializeEvent(183, 12804000, 2800483);
        $InitializeEvent(0, 12805918);
        $InitializeEvent(0, 12805900, 2800562);
        $InitializeEvent(1, 12805900, 2800563);
        $InitializeEvent(2, 12805900, 2800564);
        $InitializeEvent(4, 12805900, 2800566);
        $InitializeEvent(5, 12805900, 2800567);
        $InitializeEvent(7, 12805900, 2800569);
        $InitializeEvent(8, 12805900, 2800570);
        $InitializeEvent(9, 12805900, 2800571);
        $InitializeEvent(10, 12805900, 2800572);
        $InitializeEvent(11, 12805900, 2800573);
        $InitializeEvent(0, 12805920, 2801600, 12805942);
        $InitializeEvent(1, 12805920, 2801601, 12805947);
        $InitializeEvent(2, 12805920, 2801602, 12805952);
        $InitializeEvent(3, 12805920, 2801603, 12805957);
        $InitializeEvent(0, 12805930, 12805940, 12805942, 2801600);
        $InitializeEvent(1, 12805930, 12805945, 12805947, 2801601);
        $InitializeEvent(2, 12805930, 12805950, 12805952, 2801602);
        $InitializeEvent(3, 12805930, 12805955, 12805957, 2801603);
        $InitializeEvent(0, 12805050);
    } else {
L4:
        $InitializeEvent(0, 12800608);
        $InitializeEvent(4, 12805460, 2800104, 7012, 7013, 2, 263899, 263890);
        $InitializeEvent(5, 12805460, 2800105, 7014, 7015, 2, 263899, 263890);
        $InitializeEvent(6, 12805460, 2800106, 7010, 7011, 2, 263899, 263890);
        $InitializeEvent(7, 12805460, 2800107, 7012, 7013, 2, 263899, 263890);
        $InitializeEvent(8, 12805460, 2800108, 7014, 7015, 2, 263899, 263890);
        $InitializeEvent(9, 12805460, 2800109, 7010, 7011, 2, 263899, 263890);
        $InitializeEvent(30, 12805500, 2800160, 2802160, 2803160, 0);
        $InitializeEvent(31, 12805500, 2800140, 2802140, 2803140, 0);
        $InitializeEvent(32, 12805500, 2800141, 2802140, 2803141, 0);
        $InitializeEvent(33, 12805500, 2800200, 2802200, 2803200, 0);
        $InitializeEvent(6, 12805550, 2800608, 2802608, 8);
        $InitializeEvent(6, 12805650, 2800160, 2802160, 2802161, 10, 12805666);
        $InitializeEvent(6, 12805660, 2800160, 2802161);
        $InitializeEvent(6, 12805670, 2800160, 10, 12805666, 0, 0);
    }
L5:
    NoOp();
});

// プリコンストラクタ
$Event(50, Default, function() {
    SetCharacterAnimationState(2800740, Disabled);
    SetCharacterGravity(2800740, Disabled);
    SetCharacterMaphits(2800740, true);
    SetNetworkUpdateRate(2800740, true, CharacterUpdateFrequency.AlwaysUpdate);
    SetCharacterAnimationState(2800741, Disabled);
    SetCharacterGravity(2800741, Disabled);
    SetCharacterMaphits(2800741, true);
    SetNetworkUpdateRate(2800741, true, CharacterUpdateFrequency.AlwaysUpdate);
    SetCharacterAnimationState(2800742, Disabled);
    SetCharacterGravity(2800742, Disabled);
    SetCharacterMaphits(2800742, true);
    SetNetworkUpdateRate(2800742, true, CharacterUpdateFrequency.AlwaysUpdate);
    SetCharacterAnimationState(2800743, Disabled);
    SetCharacterGravity(2800743, Disabled);
    SetCharacterMaphits(2800743, true);
    SetNetworkUpdateRate(2800743, true, CharacterUpdateFrequency.AlwaysUpdate);
    SetCharacterAnimationState(2800744, Disabled);
    SetCharacterGravity(2800744, Disabled);
    SetCharacterMaphits(2800744, true);
    SetNetworkUpdateRate(2800744, true, CharacterUpdateFrequency.AlwaysUpdate);
    SetCharacterAnimationState(2800745, Disabled);
    SetCharacterGravity(2800745, Disabled);
    SetCharacterMaphits(2800745, true);
    SetNetworkUpdateRate(2800745, true, CharacterUpdateFrequency.AlwaysUpdate);
    ChangeCharacterDispmask(2800745, 0, OFF);
    ChangeCharacterDispmask(2800745, 2, OFF);
    ChangeCharacterDispmask(2800745, 10, OFF);
    SetCharacterAnimationState(2800990, Disabled);
    SetCharacterGravity(2800990, Disabled);
    SetCharacterMaphits(2800990, true);
    SetNetworkUpdateRate(2800990, true, CharacterUpdateFrequency.AlwaysUpdate);
    SetCharacterDefaultBackreadState(2800990, Enabled);
    SetCharacterAnimationState(2800991, Disabled);
    SetCharacterGravity(2800991, Disabled);
    SetCharacterMaphits(2800991, true);
    SetNetworkUpdateRate(2800991, true, CharacterUpdateFrequency.AlwaysUpdate);
    SetCharacterDefaultBackreadState(2800991, Enabled);
    $InitializeEvent(0, 12800911);
});

// ジェネレーター有効化_XX
$Event(12804500, Restart, function(eventFlagId, generatorEntityId, eventFlagId2, chrEntityId, value, eventFlagId3, timeSeconds) {
    if (!EventFlag(eventFlagId2)) {
        if (!EventFlag(eventFlagId)) {
            ChangeCharacterEnableState(chrEntityId, Disabled);
            WaitFor(EventFlag(eventFlagId));
            WaitFixedTimeSeconds(timeSeconds);
            ChangeCharacterEnableState(chrEntityId, Enabled);
            ForceAnimationPlayback(chrEntityId, 6200, false, true, false);
        }
L0:
        DeactivateGenerator(generatorEntityId, Enabled);
        flag &= EventFlag(eventFlagId2);
        if (value != 0) {
            flag &= EventFlag(eventFlagId3);
        }
        WaitFor(flag);
    }
L1:
    DeactivateGenerator(generatorEntityId, Disabled);
});

// 寡婦が鐘を鳴らす_XX
$Event(12805020, Restart, function(chrEntityId, areaEntityId) {
    EndIf(ThisEventSlot());
    WaitFor(
        CharacterAIState(chrEntityId, AIStateType.Recognition)
            || CharacterAIState(chrEntityId, AIStateType.Combat)
            || ((CharacterType(10000, TargetType.Alive)
                || CharacterType(10000, TargetType.WhitePhantom))
                && InArea(10000, areaEntityId)));
    ForceAnimationPlayback(chrEntityId, 3010, false, false, false);
    WaitFor(CharacterHasEventMessage(chrEntityId, 30));
    WaitFixedTimeSeconds(0);
});

// 鐘が鳴る_XX
$Event(12805030, Restart, function(areaEntityId, entityId, eventFlagId, eventFlagId2) {
    EndIf(ThisEventSlot());
    WaitFor(
        (CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.Alive))
            && InArea(10000, areaEntityId)
            && !EventFlag(eventFlagId2));
    PlaySE(entityId, SoundType.cCharacterMotion, 105006003);
    WaitFixedTimeFrames(20);
    PlaySE(entityId, SoundType.cCharacterMotion, 105006102);
    SetEventFlag(eventFlagId, ON);
    WaitFixedTimeFrames(13);
    PlaySE(entityId, SoundType.cCharacterMotion, 105006102);
    WaitFixedTimeFrames(9);
    PlaySE(entityId, SoundType.cCharacterMotion, 105006102);
    WaitFixedTimeFrames(7);
    PlaySE(entityId, SoundType.cCharacterMotion, 105006102);
    WaitFixedTimeFrames(11);
    PlaySE(entityId, SoundType.cCharacterMotion, 105006102);
    WaitFixedTimeFrames(7);
    PlaySE(entityId, SoundType.cCharacterMotion, 105006102);
    WaitFixedTimeFrames(9);
    PlaySE(entityId, SoundType.cCharacterMotion, 105006102);
    WaitFixedTimeFrames(6);
    PlaySE(entityId, SoundType.cCharacterMotion, 105006102);
    WaitFixedTimeFrames(9);
    PlaySE(entityId, SoundType.cCharacterMotion, 105006102);
    WaitFixedTimeFrames(8);
    PlaySE(entityId, SoundType.cCharacterMotion, 105006102);
    WaitFixedTimeFrames(11);
    PlaySE(entityId, SoundType.cCharacterMotion, 105006102);
});

// 寡婦死亡_XX
$Event(12805040, Restart, function(chrEntityId) {
    EndIf(ThisEventSlot());
    WaitFor(CharacterDead(chrEntityId));
    WaitFixedTimeSeconds(0);
});

// ミミックびっくり_00
$Event(12805050, Restart, function() {
    if (!ThisEvent()) {
        SetCharacterAIState(2800563, Disabled);
        WaitFor(CharacterBackreadStatus(2800563));
        IssueShortWarpRequest(2800563, TargetEntityType.Area, 2802564, -1);
        ForceAnimationPlayback(2800563, 7005, true, false, false);
        ForceAnimationPlayback(2801965, 1, true, false, false);
        WaitFor(
            (CharacterType(10000, TargetType.Alive)
                || CharacterType(10000, TargetType.WhitePhantom))
                && InArea(10000, 2802563));
        IssueShortWarpRequest(2800563, TargetEntityType.Area, 2802564, -1);
        ForceAnimationPlayback(2800563, 7006, false, false, false);
        ForceAnimationPlayback(2801965, 2, false, true, false);
        SetCharacterAIState(2800563, Enabled);
    }
L0:
    ForceAnimationPlayback(2801965, 3, true, false, false);
    SetCharacterHome(2800563, 2802565);
});

// 処刑人巡回開始_XX
$Event(12805140, Default, function(chrEntityId, areaEntityId, targetDistance) {
    SetCharacterAIState(chrEntityId, Disabled);
    WaitFor(
        InArea(10000, areaEntityId)
            || EntityInRadiusOfEntity(10000, chrEntityId, targetDistance)
            || HasDamageType(chrEntityId, -1, DamageType.Unspecified));
    SetCharacterAIState(chrEntityId, Enabled);
    RequestCharacterAIReplan(chrEntityId);
});

// 領域侵入で射撃敵ロジックON_XX
$Event(12805160, Default, function(chrEntityId, areaEntityId, targetDistance) {
    SetCharacterAIState(chrEntityId, Disabled);
    WaitFor(
        InArea(10000, areaEntityId)
            || EntityInRadiusOfEntity(10000, chrEntityId, targetDistance)
            || HasDamageType(chrEntityId, -1, DamageType.Unspecified));
    SetCharacterAIState(chrEntityId, Enabled);
    RequestCharacterAIReplan(chrEntityId);
});

// NPC巡回開始_XX
$Event(12805180, Restart, function(chrEntityId, areaEntityId) {
    SetCharacterAIState(chrEntityId, Disabled);
    WaitFor(
        InArea(10000, areaEntityId)
            || EntityInRadiusOfEntity(10000, chrEntityId, 4)
            || HasDamageType(chrEntityId, -1, DamageType.Unspecified));
    SetCharacterAIState(chrEntityId, Enabled);
    RequestCharacterAIReplan(chrEntityId);
});

// 牢内の群衆A_XX
$Event(12805460, Restart, function(chrEntityId, animationId, animationId2, targetDistance, aiId, aiId2) {
    if (ThisEventSlot()) {
        SetCharacterAIId(chrEntityId, aiId2);
    }
L0:
    ForceAnimationPlayback(chrEntityId, animationId, true, false, true);
    SetCharacterAIId(chrEntityId, aiId);
    SetCharacterGravity(chrEntityId, Disabled);
    WaitFor(
        CharacterAIState(chrEntityId, AIStateType.Recognition)
            || CharacterAIState(chrEntityId, AIStateType.Combat)
            || ((CharacterType(10000, TargetType.Alive)
                || CharacterType(10000, TargetType.WhitePhantom))
                && EntityInRadiusOfEntity(chrEntityId, 10000, targetDistance)));
    SetCharacterAIId(chrEntityId, aiId2);
    SetCharacterGravity(chrEntityId, Enabled);
    ForceAnimationPlayback(chrEntityId, animationId2, false, false, false);
});

// 医療協会のフランケン(斧) 部位損傷_XX
$Event(12805470, Restart, function(npcPartId, npcPartId2, npcPartGroupIdx, animationId, spEffectId, eventFlagId, eventFlagId2, chrEntityId) {
    WaitFor(EventFlag(eventFlagId));
    hp = NPCPartHP(chrEntityId, npcPartId2) <= 0;
    hpFlag = HPRatio(chrEntityId) <= 0 && EventFlag(eventFlagId);
    WaitFor(hp || hpFlag);
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

// 医療協会のフランケン(斧) 部位登録_XX
$Event(12805480, Restart, function(npcPartId, npcPartId2, npcPartGroupIdx, npcPartHP, eventFlagId, chrEntityId) {
    WaitFor(CharacterBackreadStatus(chrEntityId) && EntityInRadiusOfEntity(chrEntityId, 10000, 10));
    CreateNPCPart(chrEntityId, npcPartId, npcPartGroupIdx, npcPartHP, 1, 1, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId2, 64, 64);
    SetEventFlag(eventFlagId, ON);
});

// 医療協会のフランケン(斧) 部位破壊タイミング制限_XX
$Event(12805490, Restart, function(eventMessageId, eventMessageId2, eventFlagId, chrEntityId) {
    WaitFor(CharacterHasEventMessage(chrEntityId, eventMessageId));
    SetEventFlag(eventFlagId, ON);
    WaitFor(CharacterHasEventMessage(chrEntityId, eventMessageId2));
    SetEventFlag(eventFlagId, OFF);
    RestartEvent();
});

// 敵の巡回情報変更_領域_XX
$Event(12805500, Restart, function(chrEntityId, areaEntityId, patrolInformationEntityId, timeSeconds) {
    WaitFor(
        (CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
            && InArea(10000, areaEntityId));
L0:
    WaitFixedTimeSeconds(timeSeconds);
    ChangeCharacterPatrolBehavior(chrEntityId, patrolInformationEntityId);
    RequestCharacterAIReplan(chrEntityId);
    WaitFor(CharacterDead(chrEntityId));
    WaitFor(!CharacterDead(chrEntityId));
    RestartEvent();
});

// ダミーリーダーロジックON_XX
$Event(12805550, Restart, function(chrEntityId, areaEntityId, targetDistance) {
    EndIf(ThisEventSlot());
    SetCharacterAIState(chrEntityId, Disabled);
    WaitFor(
        (CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
            && (InArea(10000, areaEntityId)
                || EntityInRadiusOfEntity(10000, chrEntityId, targetDistance)));
    SetCharacterAIState(chrEntityId, Enabled);
});

// ダミーリーダー制御_XX
$Event(12805570, Restart, function(chrEntityId, areaEntityId, areaEntityId2) {
    WaitFor(InArea(chrEntityId, areaEntityId));
    SetCharacterAIState(chrEntityId, Disabled);
    IssueShortWarpRequest(chrEntityId, TargetEntityType.Area, areaEntityId, -1);
    WaitFixedTimeSeconds(15);
    SetCharacterAIState(chrEntityId, Enabled);
    WaitFor(InArea(chrEntityId, areaEntityId2));
    SetCharacterAIState(chrEntityId, Disabled);
    IssueShortWarpRequest(chrEntityId, TargetEntityType.Area, areaEntityId2, -1);
    WaitFixedTimeSeconds(15);
    SetCharacterAIState(chrEntityId, Enabled);
    RestartEvent();
});

// 敵の特殊待機_XX
$Event(12805600, Restart, function(chrEntityId, animationId, aiId, animationId2, aiId2, areaEntityId, eventFlagId, value) {
    if (!ThisEventSlot()) {
        ForceAnimationPlayback(chrEntityId, animationId, true, false, false);
        SetCharacterAIId(chrEntityId, aiId);
        chrArea = (CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
            && InArea(10000, areaEntityId);
        flag = EventFlag(eventFlagId);
        WaitFor(
            CharacterAIState(chrEntityId, AIStateType.Recognition)
                || CharacterAIState(chrEntityId, AIStateType.Combat)
                || chrArea
                || flag);
        if (!flag.Passed) {
            if (value != 1) {
                ForceAnimationPlayback(chrEntityId, animationId2, false, false, false);
            } else {
                RotateCharacter(chrEntityId, 10000, animationId2, false);
            }
        } else {
L1:
            ForceAnimationPlayback(chrEntityId, 0, false, false, false);
        }
    }
L0:
    SetCharacterAIId(chrEntityId, aiId2);
});

// 敵が指定ポイントに移動開始_XX
$Event(12805650, Restart, function(chrEntityId, areaEntityId, areaEntityId2, commandId, eventFlagId) {
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
$Event(12805660, Restart, function(chrEntityId, areaEntityId) {
    if (!ThisEventSlot()) {
        WaitFor(InArea(chrEntityId, areaEntityId));
    }
L0:
    RequestCharacterAICommand(chrEntityId, -1, 0);
    RequestCharacterAIReplan(chrEntityId);
});

// 敵が指定ポイントに移動中断_XX
$Event(12805670, Restart, function(chrEntityId, commandId, eventFlagId, value, targetDistance) {
    EndIf(EventFlag(eventFlagId));
    if (value != 1) {
        chr |= CharacterAIState(chrEntityId, AIStateType.Recognition)
            || CharacterAIState(chrEntityId, AIStateType.Alert)
            || CharacterAIState(chrEntityId, AIStateType.Combat);
        chrArea &= chr;
    } else {
L0:
        chr |= CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom);
        chrArea &= chr && EntityInRadiusOfEntity(10000, chrEntityId, targetDistance);
    }
L1:
    flag = EventFlag(eventFlagId);
    WaitFor(chrArea || flag);
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

// 敵のロジックON_XX
$Event(12805680, Restart, function(chrEntityId, areaEntityId, targetDistance) {
    EndIf(ThisEventSlot());
    SetCharacterAIState(chrEntityId, Disabled);
    WaitFor(
        ((CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
            && (InArea(10000, areaEntityId)
                || EntityInRadiusOfEntity(10000, chrEntityId, targetDistance)))
            || HasDamageType(chrEntityId, -1, DamageType.Unspecified));
    SetCharacterAIState(chrEntityId, Enabled);
});

// 寡婦の制御が切れる_XX
$Event(12805700, Restart, function(chrEntityId, chrEntityId2, value, chrEntityId3) {
    if (ThisEventSlot()) {
        SetSpEffect(chrEntityId2, 4672, false);
        ClearSpEffect(chrEntityId2, 4671);
    }
L0:
    if (value != 1) {
        WaitFor(CharacterDead(chrEntityId));
        WaitRandomTimeSeconds(0, 1);
        SetSpEffect(chrEntityId2, 4672, false);
        ClearSpEffect(chrEntityId2, 4671);
        WaitFixedTimeFrames(1);
        ForceAnimationPlayback(chrEntityId2, 7025, false, true, false);
    } else {
L1:
        WaitFor(CharacterDead(chrEntityId) && CharacterDead(chrEntityId3));
        WaitRandomTimeSeconds(0, 1);
        SetSpEffect(chrEntityId2, 4672, false);
        ClearSpEffect(chrEntityId2, 4671);
        WaitFixedTimeFrames(1);
        ForceAnimationPlayback(chrEntityId2, 7025, false, true, false);
    }
L2:
    WaitFor(CharacterDead(chrEntityId2));
    WaitFor(!CharacterDead(chrEntityId2));
    RestartEvent();
});

// ミミック弱体化_XX
$Event(12805900, Restart, function(chrEntityId) {
    WaitFor(CharacterHasSpEffect(chrEntityId, 5510));
    WaitFixedTimeFrames(1);
    RequestCharacterAnimationReset(chrEntityId, Interpolation.Interpolated);
    ForceAnimationPlayback(chrEntityId, 7010, false, false, false);
    SetSpEffect(chrEntityId, 5511, false);
    WaitFixedTimeSeconds(1.9);
    RequestCharacterAIReplan(chrEntityId);
});

// ミミック殺し_弾丸オーナー
$Event(12805918, Restart, function() {
    SetCharacterTeamType(2800560, TeamType.StrongEnemy);
    CreateBulletOwner(2800560);
});

// ミミック殺し_XX
$Event(12805920, Restart, function(objEntityId, eventFlagId) {
    if (EventFlag(eventFlagId)) {
        DeleteObjectfollowingSFX(objEntityId, true);
        EndEvent();
    }
L0:
    if (!ThisEventSlot()) {
        CreateObjectfollowingSFX(objEntityId, 100, 928020);
    }
    ShootBullet(2800560, objEntityId, 100, 6032, 0, 0, 0);
    WaitFixedTimeSeconds(2);
    RestartEvent();
});

// ミミック殺し_使用回数カウント
$Event(12805930, Restart, function(baseEventFlagId, eventFlagId, entityId) {
    EndIf(EventFlag(eventFlagId));
    WaitFor(
        (CharacterHasSpEffect(10000, 5510)
            || CharacterHasSpEffect(2800562, 5510)
            || CharacterHasSpEffect(2800563, 5510)
            || CharacterHasSpEffect(2800564, 5510)
            || CharacterHasSpEffect(2800566, 5510)
            || CharacterHasSpEffect(2800567, 5510)
            || CharacterHasSpEffect(2800569, 5510)
            || CharacterHasSpEffect(2800570, 5510)
            || CharacterHasSpEffect(2800571, 5510)
            || CharacterHasSpEffect(2800572, 5510)
            || CharacterHasSpEffect(2800573, 5510))
            && (EntityInRadiusOfEntity(10000, entityId, 2)
                || EntityInRadiusOfEntity(2800562, entityId, 2)
                || EntityInRadiusOfEntity(2800563, entityId, 2)
                || EntityInRadiusOfEntity(2800564, entityId, 2)
                || EntityInRadiusOfEntity(2800566, entityId, 2)
                || EntityInRadiusOfEntity(2800567, entityId, 2)
                || EntityInRadiusOfEntity(2800569, entityId, 2)
                || EntityInRadiusOfEntity(2800570, entityId, 2)
                || EntityInRadiusOfEntity(2800571, entityId, 2)
                || EntityInRadiusOfEntity(2800572, entityId, 2)
                || EntityInRadiusOfEntity(2800573, entityId, 2)));
    IncrementEventValue(baseEventFlagId, 2, 3);
    if (EventValue(baseEventFlagId, 2) == 3) {
        SetEventFlag(eventFlagId, ON);
    }
    WaitFixedTimeFrames(1);
    RestartEvent();
});

// 敵死体フェードアウト_XX
$Event(12804000, Restart, function(chrEntityId) {
    SetNetworkSyncState(Disabled);
    if (!ThisEventSlot()) {
        ClearSpEffect(chrEntityId, 4673);
    }
L0:
    WaitFor(CharacterDead(chrEntityId));
    WaitFixedTimeSeconds(1);
    SetSpEffect(chrEntityId, 5560, false);
    WaitFor(!CharacterDead(chrEntityId));
    SetSpEffect(chrEntityId, 5025, false);
    RestartEvent();
});

// 宝箱_XX
$Event(12800100, Default, function(objEntityId, objactEventFlag) {
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

// 紙片_生贄の街_XX
$Event(12800120, Default, function(areaEntityId, actionButtonParameterId, messageId) {
    SetNetworkSyncState(Disabled);
    WaitFor(ActionButtonInArea(actionButtonParameterId, areaEntityId));
    DisplayGenericDialog(messageId, PromptType.OKCANCEL, NumberofOptions.OneButton, -1, 3);
    RestartEvent();
});

// 大学からのワープ後処理
$Event(12800140, Default, function() {
    EndIf(ThisEvent());
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    WaitFor(EventFlag(13201803) && ElapsedFrames(55));
    SetEventFlag(13207850, ON);
    DisplayGenericDialog(10012014, PromptType.OKCANCEL, NumberofOptions.OneButton, -1, 3);
});

// 初回生贄マルチ禁止
$Event(12800160, Default, function() {
    SetNetworkSyncState(Disabled);
    WaitFor(!EventFlag(9802) && PlayerInMap(28, 0));
    SetSpEffect(10000, 9120, false);
    SetSpEffect(10000, 9121, false);
    WaitFor(!(!EventFlag(9802) && PlayerInMap(28, 0)));
    ClearSpEffect(10000, 9120);
    ClearSpEffect(10000, 9121);
    RestartEvent();
});

// 時間帯変化_生贄の街
$Event(12800400, Restart, function() {
    SetEventFlag(2800, ON);
    if (!EventFlag(9802)) {
        if (!EventFlag(9801)) {
            if (!EventFlag(9800)) {
            }
L0:
            ActivateMapPart(2804000, Enabled);
            ActivateMapPart(2804001, Disabled);
            ActivateMapPart(2804002, Disabled);
            DeactivateObject(2801000, Disabled);
            DeleteMapSFX(2803910, false);
            DeleteMapSFX(2803911, false);
        } else {
L1:
            ActivateMapPart(2804000, Disabled);
            ActivateMapPart(2804001, Enabled);
            ActivateMapPart(2804002, Disabled);
            DeleteMapSFX(2803911, false);
        }
L4:
        DeactivateObject(2801000, Disabled);
        DeactivateObject(2801052, Disabled);
        DeactivateObject(2801140, Disabled);
        DeactivateObject(2801141, Disabled);
        DeactivateObject(2801142, Disabled);
        DeactivateObject(2801143, Disabled);
        DeactivateObject(2801144, Disabled);
        DeactivateObject(2801145, Disabled);
        ChangeCharacterEnableState(2800740, Disabled);
        ChangeCharacterEnableState(2800741, Disabled);
        ChangeCharacterEnableState(2800742, Disabled);
        ChangeCharacterEnableState(2800743, Disabled);
        ChangeCharacterEnableState(2800744, Disabled);
        SetCharacterBackreadState(2800700, true);
        SetCharacterBackreadState(2800701, true);
        SetCharacterBackreadState(2800702, true);
        SetCharacterBackreadState(2800500, true);
        SetCharacterBackreadState(2800501, true);
        SetCharacterBackreadState(2800502, true);
        SetCharacterBackreadState(2800503, true);
        SetCharacterBackreadState(2800504, true);
        SetCharacterBackreadState(2800505, true);
        SetCharacterBackreadState(2800480, true);
        SetCharacterBackreadState(2800481, true);
        SetCharacterBackreadState(2800482, true);
        SetCharacterBackreadState(2800483, true);
        SetCharacterBackreadState(2800400, true);
        SetCharacterBackreadState(2800401, true);
        SetCharacterBackreadState(2800402, true);
        SetCharacterBackreadState(2800403, true);
        SetCharacterBackreadState(2800404, true);
        SetCharacterBackreadState(2800405, true);
        SetCharacterBackreadState(2800406, true);
        SetCharacterBackreadState(2800407, true);
        SetCharacterBackreadState(2800408, true);
        SetCharacterBackreadState(2800410, true);
        SetCharacterBackreadState(2800411, true);
        SetCharacterBackreadState(2800460, true);
        SetCharacterBackreadState(2800461, true);
        SetCharacterBackreadState(2800462, true);
        SetCharacterBackreadState(2800300, true);
        SetCharacterBackreadState(2800301, true);
        SetCharacterBackreadState(2800302, true);
        SetCharacterBackreadState(2800303, true);
        SetCharacterBackreadState(2800304, true);
        SetCharacterBackreadState(2800305, true);
        SetCharacterBackreadState(2800306, true);
        SetCharacterBackreadState(2800307, true);
        SetCharacterBackreadState(2800308, true);
        SetCharacterBackreadState(2800309, true);
        SetCharacterBackreadState(2800310, true);
        SetCharacterBackreadState(2800311, true);
        SetCharacterBackreadState(2800312, true);
        SetCharacterBackreadState(2800313, true);
        SetCharacterBackreadState(2800314, true);
        SetCharacterBackreadState(2800315, true);
        SetCharacterBackreadState(2800316, true);
        SetCharacterBackreadState(2800317, true);
        SetCharacterBackreadState(2800318, true);
        SetCharacterBackreadState(2800319, true);
        SetCharacterBackreadState(2800320, true);
        SetCharacterBackreadState(2800321, true);
        SetCharacterBackreadState(2800322, true);
        SetCharacterBackreadState(2800323, true);
        SetCharacterBackreadState(2800324, true);
        SetCharacterBackreadState(2800325, true);
        SetCharacterBackreadState(2800326, true);
        SetCharacterBackreadState(2800327, true);
        SetCharacterBackreadState(2800328, true);
        SetCharacterBackreadState(2800329, true);
        SetCharacterBackreadState(2800380, true);
        SetCharacterBackreadState(2800382, true);
        SetCharacterBackreadState(2800383, true);
        SetCharacterBackreadState(2800384, true);
        SetCharacterBackreadState(2800560, true);
        SetCharacterBackreadState(2800562, true);
        SetCharacterBackreadState(2800563, true);
        SetCharacterBackreadState(2800564, true);
        SetCharacterBackreadState(2800566, true);
        SetCharacterBackreadState(2800567, true);
        SetCharacterBackreadState(2800569, true);
        SetCharacterBackreadState(2800570, true);
        SetCharacterBackreadState(2800571, true);
        SetCharacterBackreadState(2800572, true);
        SetCharacterBackreadState(2800573, true);
        SetCharacterBackreadState(2800540, true);
        SetCharacterBackreadState(2800541, true);
        SetCharacterBackreadState(2800542, true);
        SetCharacterBackreadState(2800543, true);
        SetCharacterBackreadState(2800544, true);
        SetCharacterBackreadState(2800721, true);
        SetCharacterBackreadState(2800722, true);
        DeactivateObject(2801600, Disabled);
        DeactivateObject(2801601, Disabled);
        DeactivateObject(2801602, Disabled);
        DeactivateObject(2801603, Disabled);
    } else {
L2:
        if (EventFlag(12801800)) {
            SetEventFlag(2800, ON);
        } else {
            SetEventFlag(2800, OFF);
        }
        ActivateMapPart(2804000, Disabled);
        ActivateMapPart(2804001, Disabled);
        ActivateMapPart(2804002, Enabled);
        DeactivateObject(2801000, Enabled);
        DeleteMapSFX(2803910, false);
        DeactivateObject(2801052, Enabled);
        DeactivateObject(2801952, Disabled);
        ChangeCharacterEnableState(2800952, Disabled);
        ChangeCharacterEnableState(2803952, Disabled);
        SetEventFlag(70002802, ON);
        SetObjectTreasureState(2801140, Enabled);
        SetObjectTreasureState(2801141, Enabled);
        SetObjectTreasureState(2801142, Enabled);
        SetObjectTreasureState(2801143, Enabled);
        SetObjectTreasureState(2801144, Enabled);
        SetObjectTreasureState(2801145, Enabled);
        SetCharacterBackreadState(2800140, true);
        SetCharacterBackreadState(2800141, true);
        SetCharacterBackreadState(2800142, true);
        SetCharacterBackreadState(2800143, true);
        SetCharacterBackreadState(2800144, true);
        SetCharacterBackreadState(2800145, true);
        SetCharacterBackreadState(2800160, true);
        SetCharacterBackreadState(2800161, true);
        SetCharacterBackreadState(2800162, true);
        SetCharacterBackreadState(2800163, true);
        SetCharacterBackreadState(2800104, true);
        SetCharacterBackreadState(2800105, true);
        SetCharacterBackreadState(2800106, true);
        SetCharacterBackreadState(2800107, true);
        SetCharacterBackreadState(2800108, true);
        SetCharacterBackreadState(2800109, true);
        SetCharacterBackreadState(2800180, true);
        SetCharacterBackreadState(2800181, true);
        SetCharacterBackreadState(2800182, true);
        SetCharacterBackreadState(2800183, true);
        SetCharacterBackreadState(2800184, true);
        SetCharacterBackreadState(2800185, true);
        SetCharacterBackreadState(2800186, true);
        SetCharacterBackreadState(2800187, true);
        SetCharacterBackreadState(2800188, true);
        SetCharacterBackreadState(2800189, true);
        SetCharacterBackreadState(2800190, true);
        SetCharacterBackreadState(2800191, true);
        SetCharacterBackreadState(2800200, true);
        SetCharacterBackreadState(2800201, true);
        SetCharacterBackreadState(2800720, true);
        SetCharacterBackreadState(2800723, true);
    }
L3:
    WaitFor(
        EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 9800)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 9801)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 9802));
    RestartEvent();
});

// 時間帯変化_異様な月状態で邪神出現
$Event(12800401, Default, function() {
    if (!(EventFlag(9802) || PlayerInsightAmount() >= 40)) {
        ChangeCharacterDispmask(2800745, 0, OFF);
        ChangeCharacterDispmask(2800745, 2, OFF);
        ChangeCharacterDispmask(2800745, 10, OFF);
        SetSpEffect(2800745, 5686, false);
        SetEventFlag(12800435, ON);
        EndEvent();
    }
L0:
    ChangeCharacterDispmask(2800745, 0, ON);
    ChangeCharacterDispmask(2800745, 2, ON);
    ChangeCharacterDispmask(2800745, 10, ON);
    SetEventFlag(12800435, OFF);
});

// 時間帯変化_下層大扉
$Event(12800402, Restart, function() {
    if (EventFlag(9802)) {
        ReproduceObjectAnimation(2801300, 1);
        NotifySoundDampeningOfDoorEvent(2801300, DoorState.DoorOpening);
        EndEvent();
    }
L0:
    SetNetworkSyncState(Disabled);
    WaitFor(ActionButtonInArea(2800000, 2801300));
    DisplayGenericDialog(10010171, PromptType.OKCANCEL, NumberofOptions.OneButton, 2801300, 3);
    RestartEvent();
});

// 時間帯変化_生贄の街への大扉
$Event(12800403, Default, function() {
    if (EventFlag(9802)) {
        ReproduceObjectAnimation(2801150, 1);
        NotifySoundDampeningOfDoorEvent(2801150, DoorState.DoorOpening);
        EndEvent();
    }
L0:
    SetNetworkSyncState(Disabled);
    WaitFor(ActionButtonInArea(2800001, 2801150));
    DisplayGenericDialog(10010171, PromptType.OKCANCEL, NumberofOptions.OneButton, 2801150, 3);
    RestartEvent();
});

// 悪夢教室へのワープ_00_なり邪後
$Event(12800430, Default, function() {
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    WaitFor(ActionButtonInArea(2800020, 2801500));
    IssueShortWarpRequest(10000, TargetEntityType.Object, 2801500, 220);
    ForceAnimationPlayback(10000, 101169, false, false, false);
    WaitFixedTimeFrames(180);
    WarpPlayerToRespawnPoint(3202959);
});

// 悪夢教室へのワープ_01_邪神投げ
$Event(12800431, Default, function() {
    WaitFor(CharacterHasEventMessage(2800745, 10) && PlayerHasItem(ItemType.Goods, 4310));
    SetCharacterImmortality(10000, Enabled);
    WaitFixedTimeFrames(30);
    SetEventFlag(9180, ON);
    WaitFixedTimeFrames(1);
    if (!HasMultiplayerState(MultiplayerState.Multiplayer)) {
        if (!PlayerGender(Gender.Female)) {
            PlayCutsceneToPlayer(28000040, CutscenePlayMode.Skippable, 10000);
        } else {
            PlayCutsceneToPlayer(28001040, CutscenePlayMode.Skippable, 10000);
        }
    } else {
L0:
        if (!PlayerGender(Gender.Female)) {
            PlayCutsceneToPlayer(28000040, CutscenePlayMode.Unskippable, 10000);
        } else {
            PlayCutsceneToPlayer(28001040, CutscenePlayMode.Unskippable, 10000);
        }
    }
L1:
    WaitFixedTimeFrames(1);
    SetEventFlag(9180, OFF);
    SetEventFlag(12800434, ON);
    WarpPlayerToRespawnPoint(3202958);
});

// 邪神投げワープ時の邪神の透明解除
$Event(12800432, Restart, function() {
    WaitFor(EventFlag(12800435) && CharacterHasEventMessage(2800745, 20));
    ChangeCharacterDispmask(2800745, 0, ON);
    ChangeCharacterDispmask(2800745, 2, ON);
    ChangeCharacterDispmask(2800745, 10, ON);
    SetSpEffect(2800745, 5687, false);
    ClearSpEffect(2800745, 5686);
    WaitFor(CharacterHasEventMessage(2800745, 30));
    SetSpEffect(2800745, 5686, false);
    ClearSpEffect(2800745, 5687);
    RestartEvent();
});

// 邪神投げ暗転
$Event(12800433, Restart, function(chrEntityId) {
    SetNetworkSyncState(Disabled);
    WaitFor(CharacterHasEventMessage(chrEntityId, 700) && CharacterHasSpEffect(10000, 5577));
    DisplayBanner(TextBannerType.StadiumLoss);
    RestartEvent();
});

// 生贄街のテーマ再生
$Event(12800435, Default, function() {
    SetNetworkSyncState(Disabled);
    SetMapSoundState(2803600, Disabled);
    WaitFor(!EventFlag(9802) && PlayerInMap(28, 0) && !InArea(10000, 2802650));
    SetMapSoundState(2803600, Enabled);
    WaitFor(EventFlag(9802) || !PlayerInMap(28, 0) || InArea(10000, 2802650));
    SetMapSoundState(2803600, Disabled);
    RestartEvent();
});

// 生贄街のテーマ再生_廃墟側でフェード
$Event(12800436, Default, function() {
    SetNetworkSyncState(Disabled);
    WaitFor(InArea(10000, 2802020) && !EventFlag(9802));
    SetMapSoundState(2803600, Disabled);
    WaitFor(InArea(10000, 2802021) && !EventFlag(9802));
    SetMapSoundState(2803600, Enabled);
    RestartEvent();
});

// ワープ_XX
$Event(12800460, Default, function(areaEntityId, entityId, playlogName) {
    SetNetworkSyncState(Disabled);
    WaitFor(ActionButtonInArea(2800030, areaEntityId));
    CreatePlaylog(playlogName);
    ForceAnimationPlayback(10000, 101167, false, false, false);
    WaitFixedTimeFrames(150);
    DummyPlayCutsceneAndWarpPlayer(entityId, 28, 0);
    WaitFixedTimeFrames(1);
    ForceAnimationPlayback(10000, 101168, false, false, false);
    WaitFixedTimeFrames(120);
    RestartEvent();
});

// 邪神_待機アニメ再生_XX
$Event(12800470, Default, function(entityId, animationId) {
    ForceAnimationPlayback(entityId, animationId, true, false, false);
    WaitFor(EventFlag(0));
    WaitFixedTimeSeconds(10);
});

// 扉を開ける_XX
$Event(12800480, Default, function(objEntityId, objactEventFlag, animationId, objParameterId) {
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
$Event(12800490, Default, function(actionButtonParameterId, areaEntityId, eventFlagId) {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(eventFlagId));
    act = ActionButtonInArea(actionButtonParameterId, areaEntityId);
    flag = EventFlag(eventFlagId);
    WaitFor(act || flag);
    if (!flag.Passed) {
        DisplayGenericDialog(10010161, PromptType.OKCANCEL, NumberofOptions.OneButton, areaEntityId, 3);
        RestartEvent();
    }
L0:
    NoOp();
});

// さまよう狂気_XX
$Event(12800500, Restart, function(chrEntityId, eventFlagId) {
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

// SCエレベーター初期化_生贄
$Event(12800600, Default, function(eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4, objEntityId, objEntityId2, objEntityId3) {
    if (!EventFlag(eventFlagId4)) {
        SetEventFlag(eventFlagId2, OFF);
        SetEventFlag(eventFlagId3, OFF);
        ReproduceObjectAnimation(objEntityId, 3);
        SetObjactState(objEntityId2, 100, Disabled);
        SetObjactState(objEntityId3, 100, Disabled);
    } else {
L0:
        if (!EventFlag(eventFlagId2)) {
            SetEventFlag(eventFlagId3, OFF);
            ReproduceObjectAnimation(objEntityId, 3);
            SetObjactState(objEntityId2, 100, Enabled);
            SetObjactState(objEntityId3, 100, Disabled);
        } else {
L1:
            SetEventFlag(eventFlagId3, ON);
            ReproduceObjectAnimation(objEntityId, 13);
            SetObjactState(objEntityId2, 100, Disabled);
            SetObjactState(objEntityId3, 100, Enabled);
        }
    }
L2:
    EndEvent();
    SetEventFlag(eventFlagId, OFF);
});

// SCエレベーターホスト状態管理_生贄
$Event(12800601, Default, function(eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4) {
    WaitFor(
        CharacterType(10000, TargetType.Alive) && EventFlag(eventFlagId4) && EventFlag(eventFlagId));
    if (!EventFlag(eventFlagId2)) {
        SetEventFlag(eventFlagId3, OFF);
    } else {
        SetEventFlag(eventFlagId3, ON);
    }
    WaitFor(
        CharacterType(10000, TargetType.Alive) && EventFlag(eventFlagId4) && !EventFlag(eventFlagId));
    RestartEvent();
});

// SCエレベーター上がる_生贄
$Event(12800602, Default, function(eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4, areaEntityId, objactEventFlag) {
    if (EventFlag(eventFlagId) && EventFlag(eventFlagId2)) {
        ReproduceObjectAnimation(2801400, 12);
    } else {
L0:
        WaitFor(
            EventFlag(eventFlagId4)
                && !EventFlag(eventFlagId)
                && !EventFlag(eventFlagId2)
                && (InArea(10000, areaEntityId)
                    || ObjActEventFlag(objactEventFlag)
                    || (EventFlagState(CHANGE, TargetEventFlagType.EventFlag, eventFlagId3)
                        && EventFlag(eventFlagId3))));
        SetEventFlag(eventFlagId, ON);
        SetEventFlag(eventFlagId2, ON);
        ForceAnimationPlayback(2801400, 11, false, true, false);
        ForceAnimationPlayback(2801400, 12, false, true, false);
    }
L1:
    WaitFor(!AllPlayersInArea(2802101));
    ForceAnimationPlayback(2801400, 13, false, true, false);
    SetObjactState(2801401, 100, Disabled);
    SetObjactState(2801402, 100, Enabled);
    SetEventFlag(eventFlagId, OFF);
    RestartEvent();
});

// SCエレベーター下がる_生贄
$Event(12800604, Default, function(eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4, areaEntityId, objactEventFlag) {
    if (EventFlag(eventFlagId) && !EventFlag(eventFlagId2)) {
        ReproduceObjectAnimation(2801400, 2);
    } else {
L0:
        WaitFor(
            EventFlag(eventFlagId4)
                && !EventFlag(eventFlagId)
                && EventFlag(eventFlagId2)
                && (InArea(10000, areaEntityId)
                    || ObjActEventFlag(objactEventFlag)
                    || (EventFlagState(CHANGE, TargetEventFlagType.EventFlag, eventFlagId3)
                        && !EventFlag(eventFlagId3))));
        SetEventFlag(eventFlagId, ON);
        SetEventFlag(eventFlagId2, OFF);
        ForceAnimationPlayback(2801400, 1, false, true, false);
        ForceAnimationPlayback(2801400, 2, false, true, false);
    }
L1:
    WaitFor(!AllPlayersInArea(2802102));
    ForceAnimationPlayback(2801400, 3, false, true, false);
    SetObjactState(2801401, 100, Enabled);
    SetObjactState(2801402, 100, Disabled);
    SetEventFlag(eventFlagId, OFF);
    RestartEvent();
});

// SCエレベータ_呼び出しレバー操作不能_生贄
$Event(12800606, Default, function(eventFlagId, eventFlagId2, eventFlagId3, areaEntityId, areaEntityId2) {
    SetNetworkSyncState(Disabled);
    WaitFor(
        (!EventFlag(eventFlagId3) && ActionButtonInArea(7100, areaEntityId))
            || (!EventFlag(eventFlagId3) && ActionButtonInArea(7100, areaEntityId2))
            || (EventFlag(eventFlagId) && ActionButtonInArea(7100, areaEntityId))
            || (EventFlag(eventFlagId) && ActionButtonInArea(7100, areaEntityId2))
            || (EventFlag(eventFlagId2) && ActionButtonInArea(7100, areaEntityId))
            || (!EventFlag(eventFlagId2) && ActionButtonInArea(7100, areaEntityId2)));
    DisplayGenericDialog(10010172, PromptType.OKCANCEL, NumberofOptions.OneButton, -1, 3);
    RestartEvent();
});

// SCエレベーター初回起動_生贄
$Event(12800607, Default, function(eventFlagId, areaEntityId, objEntityId, objEntityId2) {
    EndIf(EventFlag(eventFlagId));
    WaitFor(InArea(10000, areaEntityId));
    SetObjactState(objEntityId, 100, Enabled);
    SetObjactState(objEntityId2, 100, Disabled);
    SetEventFlag(eventFlagId, ON);
});

// SCエレベーター_初回来訪
$Event(12800608, Default, function() {
    ReproduceObjectAnimation(2801400, 0);
    SetObjactState(2801401, 100, Disabled);
    SetObjactState(2801402, 100, Disabled);
    WaitFor(ActionButtonInArea(7100, 2801402));
    DisplayGenericDialog(10010172, PromptType.OKCANCEL, NumberofOptions.OneButton, -1, 3);
    RestartEvent();
});

// Log_ワープOBJ付近到達
$Event(12800620, Default, function(areaEntityId, playlogName) {
    WaitFor(InArea(10000, areaEntityId));
    CreatePlaylog(playlogName);
});

// NPC死亡再現_XX
$Event(12800700, Default, function(chrEntityId) {
    if (ThisEventSlot()) {
        SetCharacterBackreadState(chrEntityId, true);
        ForceCharacterTreasure(chrEntityId);
        ChangeCharacterEnableState(chrEntityId, Disabled);
        EndEvent();
    }
L0:
    WaitFor(CharacterDead(chrEntityId));
    WaitFixedTimeSeconds(0);
});

// 寡婦バックリード
$Event(12800999, Restart, function() {
    ChangeCharacterEnableState(2800509, Disabled);
    SetCharacterDefaultBackreadState(2800509, Enabled);
});

// ボス撃破_なりそこないの邪神
$Event(12801800, Default, function() {
    if (ThisEvent()) {
        SetMapSoundState(2803802, Disabled);
        SetMapSoundState(2803803, Disabled);
        SetMapSoundState(2803804, Disabled);
        ChangeCharacterEnableState(2800800, Disabled);
        ChangeCharacterEnableState(2800801, Disabled);
        ChangeCharacterEnableState(2800802, Disabled);
        ChangeCharacterEnableState(2800803, Disabled);
        ForceCharacterDeath(2800800, false);
        ForceCharacterDeath(2800801, false);
        ForceCharacterDeath(2800802, false);
        ForceCharacterDeath(2800803, false);
        SetCharacterBackreadState(2800520, true);
        SetCharacterBackreadState(2800522, true);
        SetCharacterBackreadState(2800524, true);
        SetCharacterBackreadState(2800525, true);
        SetCharacterBackreadState(2800527, true);
        SetCharacterBackreadState(2800529, true);
        DeactivateObject(2801800, Disabled);
        DeactivateObject(2801801, Disabled);
        DeleteMapSFX(2803800, false);
        DeleteMapSFX(2803801, false);
        EndEvent();
    }
L0:
    WaitFor(HPRatio(2800803) <= 0);
    RequestCharacterAnimationReset(2800800, Interpolation.Uninterpolated);
    RequestCharacterAnimationReset(2800801, Interpolation.Uninterpolated);
    ForceCharacterDeath(2800800, false);
    ForceCharacterDeath(2800801, false);
    WaitFor(CharacterDead(2800800));
    ForceCharacterDeath(2800520, true);
    ForceCharacterDeath(2800522, true);
    ForceCharacterDeath(2800524, true);
    ForceCharacterDeath(2800525, true);
    ForceCharacterDeath(2800527, true);
    ForceCharacterDeath(2800529, true);
    DisplayBanner(TextBannerType.DemonKilled);
    DeactivateObject(2801800, Disabled);
    DeactivateObject(2801801, Disabled);
    DeleteMapSFX(2803800, true);
    DeleteMapSFX(2803801, true);
    SetLockcamSlotNumber(28, 0, 0);
    WaitFixedTimeSeconds(3);
    HandleBossDefeat(2800803);
    SetNetworkSyncState(Disabled);
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        WaitFor(CharacterType(10000, TargetType.Alive));
        $InitializeEvent(0, 9350, 3);
        AwardAchievement(18);
        AwardItemLot(50700000);
        SetEventFlag(2800, ON);
        SetEventFlag(9464, ON);
        CreatePlaylog(186);
        EndTimeMeasurement(2800000);
        EndTimeMeasurement(2800001);
        EndTimeMeasurement(2800010);
        ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 198, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 198, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Weapon, 198, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Armor, 198, PlayLogMultiplayerType.HostOnly);
        EndEvent();
    }
L1:
    WaitFor(CharacterType(10000, TargetType.WhitePhantom));
    WaitFixedTimeSeconds(0);
});

// ボス撃破SE再生_なりそこないの邪神
$Event(12801801, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12801800));
    flag = EventFlag(12801800);
    WaitFor(flag || (!CharacterBackreadStatus(2800800) && HPRatio(2800803) <= 0));
    EndIf(flag.Passed);
    PlaySE(2802800, SoundType.cCharacterMotion, 0);
});

// ホストがボス部屋入場_初戦_なりそこないの邪神
$Event(12801802, Default, function() {
    EndIf(EventFlag(12801800));
    EndIf(ThisEvent());
    ChangeCharacterEnableState(2800800, Disabled);
    ChangeCharacterEnableState(2800801, Disabled);
    WaitFor(
        !EventFlag(12801800)
            && !ThisEventSlot()
            && CharacterType(10000, TargetType.Alive)
            && InArea(10000, 2802805));
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        IssueBossRoomEntryNotification(0);
    }
    SetEventFlag(12804223, ON);
    EndIf(CharacterType(10000, TargetType.BlackPhantom));
    SetEventFlag(9180, ON);
    WaitFixedTimeFrames(1);
    DeleteMapSFX(2803911, false);
    if (!HasMultiplayerState(MultiplayerState.Multiplayer)) {
        PlayCutsceneToPlayer(28000000, CutscenePlayMode.Skippable, 10000);
    } else {
        PlayCutsceneToPlayer(28000000, CutscenePlayMode.Unskippable, 10000);
    }
    WaitFixedTimeFrames(1);
    SetEventFlag(9180, OFF);
    SpawnMapSFX(2803911);
    SetEventFlag(12804800, ON);
    ChangeCharacterEnableState(2800800, Enabled);
    ChangeCharacterEnableState(2800801, Enabled);
    EndIf(EventFlag(9305));
    $InitializeEvent(0, 9350, 1);
    SetEventFlag(9305, ON);
});

// なりそこないの邪神_時間差入場ゲスト用対処処理
$Event(12801803, Default, function() {
    WaitFor(CharacterType(10000, TargetType.Alive) && EventFlag(12804800));
    EndIf(HasMultiplayerState(MultiplayerState.Host));
    ChangeCharacterEnableState(2800800, Enabled);
    ChangeCharacterEnableState(2800801, Enabled);
    SetEventFlag(12804800, ON);
    SetEventFlag(12801802, ON);
});

// ホストがボス部屋入場_再戦_なりそこないの邪神
$Event(12804880, Default, function() {
    EndIf(EventFlag(12801800));
    if (!EventFlag(12801802)) {
        if (!HasMultiplayerState(MultiplayerState.Client)) {
            DeactivateObject(2801800, Disabled);
            DeleteMapSFX(2803800, false);
        }
        DeactivateObject(2801801, Disabled);
        DeleteMapSFX(2803801, false);
        WaitFor(!EventFlag(12801800) && EventFlag(12801802));
        DeactivateObject(2801800, Enabled);
        SpawnMapSFX(2803800);
        DeactivateObject(2801801, Enabled);
        SpawnMapSFX(2803801);
    }
L0:
    flagChrAct = !EventFlag(12801800)
        && CharacterType(10000, TargetType.Alive)
        && ActionButtonInArea(2800800, 2801800);
    flag = EventFlag(12801800);
    WaitFor(flagChrAct || flag);
    EndIf(flag.Passed);
    RotateCharacter(10000, 2802800, 101130, true);
    chrArea = CharacterType(10000, TargetType.Alive) && InArea(10000, 2802801);
    chrTime = CharacterType(10000, TargetType.Alive) && ElapsedSeconds(2);
    WaitFor(chrArea || chrTime);
    if (!chrTime.Passed) {
        SetEventFlag(12804800, ON);
    }
    RestartEvent();
});

// ゲストがボス部屋入場_なりそこないの邪神
$Event(12804881, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12801800));
    WaitFor(
        !EventFlag(12801800)
            && EventFlag(12801802)
            && EventFlag(12804800)
            && CharacterType(10000, TargetType.WhitePhantom)
            && ActionButtonInArea(2800800, 2801800));
    RotateCharacter(10000, 2802800, 101130, true);
    chrArea = CharacterType(10000, TargetType.WhitePhantom) && InArea(10000, 2802801);
    time = ElapsedSeconds(2);
    WaitFor(chrArea || time);
    if (!time.Passed) {
        SetEventFlag(12804801, ON);
    }
    RestartEvent();
});

// 他人の世界で霧壁あたり無効_なりそこないの邪神
$Event(12804882, Default, function() {
    WaitFor(CharacterType(10000, TargetType.Alive) && EntityInRadiusOfEntity(10000, 2801800, 6));
    SetCharacterGravityMaphitStateExcludingOwnWorld(10000, Disabled);
    WaitFixedTimeFrames(6);
    RestartEvent();
});

// 他人の世界で霧壁あたり無効2_なりそこないの邪神
$Event(12804883, Default, function() {
    WaitFor(
        CharacterType(10000, TargetType.Alive)
            && !EntityInRadiusOfEntity(10000, 2801800, 6)
            && EntityInRadiusOfEntity(10000, 2801800, 12));
    SetCharacterGravityMaphitStateExcludingOwnWorld(10000, Enabled);
    WaitFixedTimeFrames(6);
    RestartEvent();
});

// ボスが動き出す_なりそこないの邪神
$Event(12804802, Default, function() {
    EndIf(EventFlag(12801800));
    SetCharacterAIState(2800800, Disabled);
    SetCharacterAIState(2800801, Disabled);
    SetCharacterAIState(2800802, Disabled);
    SetCharacterAIState(2800803, Disabled);
    SetCharacterAIState(2800520, Disabled);
    SetCharacterAIState(2800522, Disabled);
    SetCharacterAIState(2800524, Disabled);
    SetCharacterAIState(2800525, Disabled);
    SetCharacterAIState(2800527, Disabled);
    SetCharacterAIState(2800529, Disabled);
    SetCharacterHPBarDisplay(2800800, Disabled);
    SetCharacterHPBarDisplay(2800801, Disabled);
    SetCharacterHPBarDisplay(2800802, Disabled);
    SetCharacterHPBarDisplay(2800803, Disabled);
    SetCharacterGravity(2800801, Disabled);
    SetCharacterGravity(2800802, Disabled);
    SetCharacterGravity(2800803, Disabled);
    SetCharacterImmortality(2800800, Enabled);
    SetCharacterImmortality(2800801, Enabled);
    if (!ThisEvent()) {
        WaitFor(EventFlag(12804800));
        if (!HasMultiplayerState(MultiplayerState.Client)) {
            if (!EventFlag(12804223)) {
                IssueBossRoomEntryNotification(0);
            }
            SetNetworkUpdateAuthority(2800800, AuthorityLevel.Forced);
            SetNetworkUpdateAuthority(2800801, AuthorityLevel.Forced);
            SetNetworkUpdateAuthority(2800802, AuthorityLevel.Forced);
            SetNetworkUpdateAuthority(2800803, AuthorityLevel.Forced);
        }
    }
L0:
    SetEventFlag(12804223, ON);
    SetEventFlag(12804800, ON);
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
    SetCharacterAIState(2800800, Enabled);
    SetCharacterAIState(2800801, Enabled);
    SetCharacterAIState(2800802, Enabled);
    SetCharacterAIState(2800803, Enabled);
    SetCharacterAIState(2800520, Enabled);
    SetCharacterAIState(2800522, Enabled);
    SetCharacterAIState(2800524, Enabled);
    SetCharacterAIState(2800525, Enabled);
    SetCharacterAIState(2800527, Enabled);
    SetCharacterAIState(2800529, Enabled);
    DisplayBossHealthBar(Enabled, 2800803, 0, 507000);
    CreateReferredDamagePair(2800800, 2800803);
    CreateReferredDamagePair(2800801, 2800803);
    SetCharacterEventTarget(2800800, 2800803);
    SetCharacterEventTarget(2800801, 2800803);
    CreatePlaylog(238);
    StartTimeMeasurement(2800010, 254, Enabled);
});

// ボスBGM ON_なりそこないの邪神
$Event(12804803, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12801800));
    if (!ThisEvent()) {
        SetMapSoundState(2803802, Disabled);
        SetMapSoundState(2803803, Disabled);
        flagArea &= !EventFlag(12801800) && EventFlag(12804802);
        if (!HasMultiplayerState(MultiplayerState.Host)) {
            flagArea &= EventFlag(12804801);
        }
        flagArea &= InArea(10000, 2802802);
        WaitFor(flagArea);
        SetMapSoundState(2803804, Disabled);
        EnableBossMapSound(2803802, Enabled);
        chrFlagArea &= CharacterHasEventMessage(2800800, 300);
    }
L0:
    chrFlagArea &= !EventFlag(12801800) && EventFlag(12804802);
    if (!HasMultiplayerState(MultiplayerState.Host)) {
        chrFlagArea &= EventFlag(12804801);
    }
    chrFlagArea &= InArea(10000, 2802802);
    WaitFor(chrFlagArea);
    SetMapSoundState(2803804, Disabled);
    EnableBossMapSound(2803802, Disabled);
    WaitFixedTimeFrames(0);
    EnableBossMapSound(2803803, Enabled);
});

// ボスカメラ_なりそこないの邪神
$Event(12804804, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12801800));
    WaitFor(HPRatio(2800803) > 0 && EntityInRadiusOfEntity(10000, 2800800, 12));
    SetLockcamSlotNumber(28, 0, 1);
    WaitFor(HPRatio(2800803) > 0 && !EntityInRadiusOfEntity(10000, 2800800, 12.5));
    SetLockcamSlotNumber(28, 0, 0);
    RestartEvent();
});

// ボスBGM OFF_なりそこないの邪神
$Event(12804805, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12801800));
    WaitFor(EventFlag(12801800));
    EnableBossMapSound(2803802, Disabled);
    EnableBossMapSound(2803803, Disabled);
    EnableBossMapSound(-1, Disabled);
});

// ボス_上の人接続_なりそこないの邪神
$Event(12804806, Default, function() {
    EndIf(EventFlag(12801800));
    if (!ThisEventSlot()) {
        WaitFor(CharacterBackreadStatus(2800800));
        SetCharacterGravity(2800801, Disabled);
        WaitFixedTimeSeconds(1);
    }
L0:
    WarpCharacterAndSetFloor(2800801, TargetEntityType.Character, 2800800, 100, 2800801);
    RestartEvent();
});

// ボス_部位損傷禁止_なりそこないの邪神
$Event(12804807, Default, function() {
    EndIf(EventFlag(12801800));
    WaitFor(CharacterHasSpEffect(2800800, 489));
    SetEventFlag(12804808, ON);
    WaitFor(!CharacterHasSpEffect(2800800, 489));
    SetEventFlag(12804808, OFF);
    RestartEvent();
});

// ボス_部位損傷_なりそこないの邪神_XX
$Event(12804820, Default, function(npcPartId, npcPartId2, npcPartGroupIdx, npcPartHP, spEffectId, spEffectId2, animationId) {
    EndIf(EventFlag(12801800));
    CreateNPCPart(2800800, npcPartId, npcPartGroupIdx, npcPartHP, 1, 1, false, false);
    SetNPCPartSEAndSFX(2800800, npcPartId2, 59, 59);
    hp = NPCPartHP(2800800, npcPartId2) <= 0;
    hp2 = HPRatio(2800800) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    if (EventFlag(12804808)) {
        SetNPCPartHP(2800800, npcPartId2, 50, false);
        RestartEvent();
    }
    CreateNPCPart(2800800, npcPartId, npcPartGroupIdx, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(2800800, npcPartId2, 60, 60);
    RequestCharacterAnimationReset(2800800, Interpolation.Interpolated);
    RequestCharacterAnimationReset(2800801, Interpolation.Interpolated);
    ForceAnimationPlayback(2800800, animationId, false, false, false);
    ForceAnimationPlayback(2800801, 7000, false, false, false);
    SetSpEffect(2800800, spEffectId, true);
    ClearSpEffect(2800800, spEffectId2);
    if (!CharacterHasSpEffect(2800800, 489)) {
        RequestCharacterAIReplan(2800800);
    }
    WaitFixedTimeSeconds(30);
    if (!CharacterHasSpEffect(2800800, 489)) {
        RequestCharacterAIReplan(2800800);
    }
    WaitFor(CharacterHasEventMessage(2800800, 300));
    CreateNPCPart(2800800, npcPartId, npcPartGroupIdx, npcPartHP, 1, 1, false, false);
    SetNPCPartSEAndSFX(2800800, npcPartId2, 59, 59);
    SetSpEffect(2800800, spEffectId2, true);
    ClearSpEffect(2800800, spEffectId);
    if (!CharacterHasSpEffect(2800800, 489)) {
        RequestCharacterAIReplan(2800800);
    }
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// ボス_上の人魔法1
$Event(12804830, Default, function() {
    EndIf(EventFlag(12801800));
    WaitFor(
        EventFlag(12804802)
            && CharacterTargetedBy(2800801, 10000)
            && CharacterHasEventMessage(2800801, 10));
    IssueShortWarpRequest(2800802, TargetEntityType.Character, 10000, 246);
    RequestCharacterAICommand(2800802, 200, 0);
    RequestCharacterAIReplan(2800802);
    WaitFixedTimeFrames(1);
    RequestCharacterAICommand(2800802, -1, 0);
    RequestCharacterAIReplan(2800802);
    RestartEvent();
});

// ボス_上の人魔法2
$Event(12804831, Default, function() {
    EndIf(EventFlag(12801800));
    WaitFor(
        EventFlag(12804802)
            && CharacterTargetedBy(2800801, 10000)
            && CharacterHasEventMessage(2800801, 20));
    IssueShortWarpRequest(2800802, TargetEntityType.Character, 2800800, 100);
    RequestCharacterAICommand(2800802, 210, 0);
    RequestCharacterAIReplan(2800802);
    WaitFixedTimeFrames(1);
    RequestCharacterAICommand(2800802, -1, 0);
    RequestCharacterAIReplan(2800802);
    RestartEvent();
});

// ボス_上の人魔法3
$Event(12804832, Default, function() {
    EndIf(EventFlag(12801800));
    WaitFor(
        EventFlag(12804802)
            && CharacterTargetedBy(2800801, 10000)
            && CharacterHasEventMessage(2800801, 30));
    SetSpEffect(2800800, 5585, false);
    WaitFor(ElapsedSeconds(1.1));
    ClearSpEffect(2800800, 5585);
    IssueShortWarpRequest(2800802, TargetEntityType.Character, 2800800, 10);
    RequestCharacterAICommand(2800802, 220, 0);
    RequestCharacterAIReplan(2800802);
    WaitFixedTimeFrames(1);
    RequestCharacterAICommand(2800802, -1, 0);
    RequestCharacterAIReplan(2800802);
    RestartEvent();
});

// ボス_上の人魔法4
$Event(12804834, Default, function() {
    EndIf(EventFlag(12801800));
    WaitFor(
        EventFlag(12804802)
            && CharacterTargetedBy(2800801, 10000)
            && CharacterHasEventMessage(2800801, 40));
    SetSpEffect(2800800, 5586, false);
    WaitFor(ElapsedSeconds(1.1));
    ClearSpEffect(2800800, 5586);
    IssueShortWarpRequest(2800802, TargetEntityType.Character, 2800800, 15);
    RequestCharacterAICommand(2800802, 220, 0);
    RequestCharacterAIReplan(2800802);
    WaitFixedTimeFrames(1);
    RequestCharacterAICommand(2800802, -1, 0);
    RequestCharacterAIReplan(2800802);
    RestartEvent();
});

// ボス_上の人魔法5
$Event(12804835, Default, function() {
    EndIf(EventFlag(12801800));
    WaitFor(
        EventFlag(12804802)
            && CharacterTargetedBy(2800801, 10000)
            && CharacterHasEventMessage(2800801, 50));
    SetSpEffect(2800800, 5587, false);
    WaitFor(ElapsedSeconds(1.1));
    ClearSpEffect(2800800, 5587);
    IssueShortWarpRequest(2800802, TargetEntityType.Character, 2800800, 50);
    RequestCharacterAICommand(2800802, 220, 0);
    RequestCharacterAIReplan(2800802);
    WaitFixedTimeFrames(1);
    RequestCharacterAICommand(2800802, -1, 0);
    RequestCharacterAIReplan(2800802);
    RestartEvent();
});

// ボス_上の人魔法6
$Event(12804836, Default, function() {
    EndIf(EventFlag(12801800));
    WaitFor(
        EventFlag(12804802)
            && CharacterTargetedBy(2800801, 10000)
            && CharacterHasEventMessage(2800801, 60));
    SetSpEffect(2800800, 5588, false);
    WaitFor(ElapsedSeconds(1.1));
    ClearSpEffect(2800800, 5588);
    IssueShortWarpRequest(2800802, TargetEntityType.Character, 2800800, 55);
    RequestCharacterAICommand(2800802, 220, 0);
    RequestCharacterAIReplan(2800802);
    WaitFixedTimeFrames(1);
    RequestCharacterAICommand(2800802, -1, 0);
    RequestCharacterAIReplan(2800802);
    RestartEvent();
});

// ボス_大魔法1
$Event(12804837, Default, function() {
    EndIf(EventFlag(12801800));
    WaitFor(
        EventFlag(12804802)
            && CharacterTargetedBy(2800801, 10000)
            && CharacterHasEventMessage(2800801, 100));
    IssueShortWarpRequest(2800802, TargetEntityType.Character, 10000, 246);
    WaitFixedTimeFrames(1);
    RequestCharacterAICommand(2800802, 100, 0);
    RequestCharacterAIReplan(2800802);
    WaitFixedTimeFrames(1);
    RequestCharacterAICommand(2800802, -1, 0);
    RequestCharacterAIReplan(2800802);
    WaitFixedTimeSeconds(0.8);
    IssueShortWarpRequest(2800802, TargetEntityType.Character, 10000, 246);
    WaitFixedTimeFrames(1);
    RequestCharacterAICommand(2800802, 100, 0);
    RequestCharacterAIReplan(2800802);
    WaitFixedTimeFrames(1);
    RequestCharacterAICommand(2800802, -1, 0);
    RequestCharacterAIReplan(2800802);
    WaitFixedTimeSeconds(1);
    IssueShortWarpRequest(2800802, TargetEntityType.Character, 10000, 246);
    WaitFixedTimeFrames(1);
    RequestCharacterAICommand(2800802, 100, 0);
    RequestCharacterAIReplan(2800802);
    WaitFixedTimeFrames(1);
    RequestCharacterAICommand(2800802, -1, 0);
    RequestCharacterAIReplan(2800802);
    WaitFixedTimeSeconds(1.2);
    IssueShortWarpRequest(2800802, TargetEntityType.Character, 10000, 246);
    WaitFixedTimeFrames(1);
    RequestCharacterAICommand(2800802, 100, 0);
    RequestCharacterAIReplan(2800802);
    WaitFixedTimeFrames(1);
    RequestCharacterAICommand(2800802, -1, 0);
    RequestCharacterAIReplan(2800802);
    WaitFixedTimeSeconds(1.4);
    IssueShortWarpRequest(2800802, TargetEntityType.Character, 10000, 246);
    WaitFixedTimeFrames(1);
    RequestCharacterAICommand(2800802, 100, 0);
    RequestCharacterAIReplan(2800802);
    WaitFixedTimeFrames(1);
    RequestCharacterAICommand(2800802, -1, 0);
    RequestCharacterAIReplan(2800802);
    WaitFixedTimeSeconds(1.6);
    RestartEvent();
});

// ボス_大魔法1同期
$Event(12804838, Restart, function() {
    EndIf(EventFlag(12801800));
    WaitFor(CharacterHasEventMessage(2800800, 100));
    ForceAnimationPlayback(2800801, 3000, false, false, false);
    RequestCharacterAICommand(2800801, 1, 1);
    RequestCharacterAIReplan(2800801);
    WaitFor(CharacterHasEventMessage(2800800, 300));
    if (!CharacterHasSpEffect(2800800, 489)) {
        RequestCharacterAIReplan(2800800);
    }
    WaitFixedTimeSeconds(10);
    RequestCharacterAICommand(2800801, -1, 1);
    RequestCharacterAIReplan(2800801);
    RestartEvent();
});

// ボス_とりまき寡婦（援護）死亡_XX
$Event(12804840, Restart, function(chrEntityId) {
    EndIf(EventFlag(12801800));
    SetCharacterEventTarget(chrEntityId, 2800801);
    EndIf(ThisEventSlot());
    WaitFor(EventFlag(12804802) && CharacterDead(chrEntityId));
    ForceAnimationPlayback(2800801, 7010, false, false, false);
    RequestCharacterAICommand(2800800, 1, 2);
    RequestCharacterAICommand(2800801, 1, 2);
    if (!CharacterHasSpEffect(2800800, 489)) {
        RequestCharacterAIReplan(2800800);
    }
    RequestCharacterAIReplan(2800801);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(2800800, -1, 2);
    RequestCharacterAICommand(2800801, -1, 2);
    if (!CharacterHasSpEffect(2800800, 489)) {
        RequestCharacterAIReplan(2800800);
    }
    RequestCharacterAIReplan(2800801);
});

// ボス_とりまき寡婦死亡カウント
$Event(12804850, Restart, function(chrEntityId) {
    EndIf(ThisEventSlot());
    WaitFor(EventFlag(12804802) && CharacterDead(chrEntityId));
    IncrementEventValue(12804860, 4, 10);
});

// ボス_ヒートアップ00
$Event(12804870, Restart, function() {
    WaitFor(EventFlag(12804802) && HPRatio(2800803) < 1);
    if (!EventFlag(12804871)) {
        RequestCharacterAICommand(2800800, 1, 0);
        RequestCharacterAICommand(2800801, 1, 0);
    }
    RequestCharacterAICommand(2800520, 1, 0);
    RequestCharacterAICommand(2800522, 1, 0);
    RequestCharacterAICommand(2800524, 1, 0);
    RequestCharacterAICommand(2800525, 1, 0);
    RequestCharacterAICommand(2800527, 1, 0);
    RequestCharacterAICommand(2800529, 1, 0);
    if (!CharacterHasSpEffect(2800800, 489)) {
        RequestCharacterAIReplan(2800800);
    }
    RequestCharacterAIReplan(2800801);
    RequestCharacterAIReplan(2800520);
    RequestCharacterAIReplan(2800522);
    RequestCharacterAIReplan(2800524);
    RequestCharacterAIReplan(2800525);
    RequestCharacterAIReplan(2800527);
    RequestCharacterAIReplan(2800529);
});

// ボス_ヒートアップ01
$Event(12804871, Restart, function() {
    WaitFor(EventFlag(12804802) && (HPRatio(2800803) < 0.5 || EventValue(12804860, 4) >= 3));
    RequestCharacterAICommand(2800800, 2, 0);
    RequestCharacterAICommand(2800801, 2, 0);
    RequestCharacterAICommand(2800800, 1, 1);
    if (!CharacterHasSpEffect(2800800, 489)) {
        RequestCharacterAIReplan(2800800);
    }
});

// マップ初回入場_プレイログ
$Event(12800990, Default, function() {
    EndIf(ThisEvent());
    WaitFor(PlayerStandingOnHit(2803500));
    ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 272, PlayLogMultiplayerType.HostOnly);
    ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 272, PlayLogMultiplayerType.HostOnly);
    ParameterOutput(PlayerPlayLogParameter.Weapon, 272, PlayLogMultiplayerType.HostOnly);
    ParameterOutput(PlayerPlayLogParameter.Armor, 272, PlayLogMultiplayerType.HostOnly);
});

// 囚われた尼僧_死亡状態へ
$Event(12800901, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    EndIf(EventFlag(1315));
    EndIf(EventFlag(1310));
    WaitFor(CharacterDead(2800670));
    BatchSetEventFlags(1300, 1319, OFF);
    SetEventFlag(1315, ON);
    SaveRequest(0);
});

// 囚われた尼僧_打ち解けた状態へ
$Event(12800902, Default, function() {
    WaitFor(EventFlag(72800312));
    SetEventFlag(72800312, OFF);
    BatchSetEventFlags(1300, 1319, OFF);
    SetEventFlag(1301, ON);
    ForceAnimationPlayback(2800670, 103107, true, false, true);
    SaveRequest(0);
});

// 囚われた尼僧_避難所へ移動中状態へ
$Event(12800903, Default, function() {
    WaitFor(EventFlag(72800314));
    SetEventFlag(72800314, OFF);
    BatchSetEventFlags(1300, 1319, OFF);
    SetEventFlag(1313, ON);
});

// 囚われた尼僧_診療所へ移動中状態へ
$Event(12800904, Default, function() {
    WaitFor(EventFlag(72800315));
    SetEventFlag(72800315, OFF);
    BatchSetEventFlags(1300, 1319, OFF);
    SetEventFlag(1314, ON);
});

// 囚われた尼僧_聖堂街へ移動中状態へ
$Event(12800905, Default, function() {
    WaitFor(EventFlag(72800316));
    SetEventFlag(72800316, OFF);
    BatchSetEventFlags(1300, 1319, OFF);
    SetEventFlag(1311, ON);
});

// 囚われた尼僧_会話範囲
$Event(12800906, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    SetEventFlag(72800310, OFF);
    WaitFor(InArea(10000, 2802450));
    SetEventFlag(72800310, ON);
    WaitFor(!InArea(10000, 2802450));
    RestartEvent();
});

// 囚われた尼僧_アニメ制御_被ダメージ
$Event(12800908, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(HasDamageType(2800670, -1, DamageType.Unspecified) && HPRatio(2800670) != 0);
    ForceAnimationPlayback(2800670, 103093, false, false, false);
    RestartEvent();
});

// 囚われた尼僧_アニメ制御_死亡
$Event(12800909, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(!EventFlag(1310) && HPRatio(2800670) == 0);
    ForceAnimationPlayback(2800670, 103094, false, false, false);
});

// 囚われた尼僧_アニメ制御_待機アニメに戻る
$Event(12800910, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(CharacterHasSpEffect(2800670, 151) && HPRatio(2800670) != 0);
    if (!EventFlag(1300)) {
        ForceAnimationPlayback(2800670, 103091, false, false, false);
    } else {
L0:
        ForceAnimationPlayback(2800670, 103092, false, false, false);
        Goto(L9);
    }
L9:
    WaitFixedTimeFrames(5);
    RestartEvent();
});

// 囚われた尼僧_初期化
$Event(12800911, Default, function() {
    if (CharacterType(10000, TargetType.Alive)) {
        if (EventFlag(1313)) {
            BatchSetEventFlags(1300, 1319, OFF);
            SetEventFlag(1304, ON);
        }
L0:
        if (EventFlag(1314)) {
            BatchSetEventFlags(1300, 1319, OFF);
            SetEventFlag(1309, ON);
        }
L1:
        GotoIf(L2, !EventFlag(1311));
        GotoIf(L4, !EventFlag(72800317));
        GotoIf(L5, !EventFlag(72800318));
        BatchSetEventFlags(1300, 1319, OFF);
        SetEventFlag(1310, ON);
    } else {
L4:
        SetEventFlag(72800317, ON);
        Goto(L2);
L5:
        SetEventFlag(72800318, ON);
        Goto(L2);
    }
L2:
    if ((EventFlag(1300) || EventFlag(1301)) && EventFlag(9802)) {
        BatchSetEventFlags(1300, 1319, OFF);
        SetEventFlag(1316, ON);
        Goto(L3);
    }
L3:
    SetEventFlag(72800308, OFF);
L4:
    GotoIf(L0, EventFlag(1300));
    GotoIf(L1, EventFlag(1301));
    GotoIf(L1, EventFlag(1311));
    GotoIf(L2, EventFlag(1310));
    GotoIf(L3, EventFlag(1315));
    GotoIf(L1, EventFlag(1313));
    GotoIf(L1, EventFlag(1314));
    SetCharacterBackreadState(2800670, true);
    SetCharacterBackreadState(2800671, true);
    EndEvent();
L0:
    SetCharacterBackreadState(2800670, false);
    SetCharacterBackreadState(2800671, true);
    ForceAnimationPlayback(2800670, 103092, true, false, true);
    EndEvent();
L1:
    SetCharacterBackreadState(2800670, false);
    SetCharacterBackreadState(2800671, true);
    ForceAnimationPlayback(2800670, 103091, true, false, true);
    EndEvent();
L2:
    SetCharacterBackreadState(2800670, true);
    SetCharacterBackreadState(2800671, false);
    EzstateInstructionRequest(2800671, 6, 1);
    ForceCharacterTreasure(2800671);
    EndEvent();
L3:
    SetCharacterBackreadState(2800670, false);
    SetCharacterBackreadState(2800671, true);
    IssueShortWarpRequest(2800670, TargetEntityType.Area, 2802452, -1);
    EzstateInstructionRequest(2800670, 7, 1);
    WaitFixedTimeFrames(1);
    ForceCharacterTreasure(2800670);
    EndEvent();
});

// NPC汎用_死亡位置にアイテム出現_XX
$Event(12800920, Default, function(eventFlagId, eventFlagId2, eventFlagId3, objEntityId, itemLotId) {
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    EndIf(ThisEventSlot());
    WaitFor(EventFlag(eventFlagId) || EventFlag(eventFlagId2) || EventFlag(eventFlagId3));
    CreateObjectfollowingSFX(objEntityId, 200, 900201);
    WaitFor(ActionButtonInArea(7500, objEntityId));
    ForceAnimationPlayback(10000, 101140, false, false, false);
    AwardItemLot(itemLotId);
    DeleteObjectfollowingSFX(objEntityId, true);
});

// ★生贄の街_新NPC召喚_ボス部屋を目指す_XX
$Event(12804450, Restart, function(chrEntityId, entityId, eventFlagId, eventFlagId2, eventFlagId3) {
    EndIf(ThisEventSlot());
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    SetEventPoint(chrEntityId, entityId, 1);
    WaitFor(EventFlag(eventFlagId) && !EventFlag(eventFlagId2) && EventFlag(eventFlagId3));
    RequestCharacterAICommand(chrEntityId, 990, 0);
    RequestCharacterAIReplan(chrEntityId);
});

// ★生贄の街_新NPC召喚_召喚可否判定_連盟の狩人：和装
$Event(12804400, Restart, function(eventFlagId, entityId, eventFlagId2, eventFlagId3, eventFlagId4, eventFlagId5) {
    if (!EventFlag(eventFlagId)) {
        SetEventFlag(eventFlagId, OFF);
        DeleteMapSFX(entityId, true);
        itemFlagOnlineSp &= PlayerHasItem(ItemType.Goods, 4312)
            && !EventFlag(eventFlagId2)
            && !EventFlag(eventFlagId3)
            && !EventFlag(eventFlagId4)
            && NumberOfClientsOfType(ClientType.Coop) < 2
            && EventFlag(9802)
            && CharacterHasSpEffect(10000, 6142)
            && EventFlag(13501900);
        itemFlagOnlineSp &= !EventFlag(eventFlagId5) && HasMultiplayerState(MultiplayerState.Host);
        WaitFor(itemFlagOnlineSp);
    }
L0:
    SetEventFlag(eventFlagId, ON);
    SpawnMapSFX(entityId);
    itemFlagOnlineSp &= EventFlag(13501900);
    WaitFor(
        HasMultiplayerState(MultiplayerState.Host)
            && !(PlayerHasItem(ItemType.Goods, 4312)
                && !EventFlag(eventFlagId2)
                && !EventFlag(eventFlagId3)
                && !EventFlag(eventFlagId4)
                && NumberOfClientsOfType(ClientType.Coop) < 2
                && EventFlag(9802)
                && CharacterHasSpEffect(10000, 6142)
                && !EventFlag(eventFlagId5)));
    SetEventFlag(eventFlagId, OFF);
    DeleteMapSFX(entityId, true);
    RestartEvent();
});

// ★生贄の街_新NPC召喚_召喚可否判定_ヤハグル装備
$Event(12804401, Restart, function(eventFlagId, entityId, eventFlagId2, eventFlagId3, eventFlagId4, eventFlagId5) {
    if (!EventFlag(eventFlagId)) {
        SetEventFlag(eventFlagId, OFF);
        DeleteMapSFX(entityId, true);
        WaitFor(
            PlayerHasItem(ItemType.Goods, 4312)
                && !EventFlag(eventFlagId2)
                && !EventFlag(eventFlagId3)
                && !EventFlag(eventFlagId4)
                && NumberOfClientsOfType(ClientType.Coop) < 2
                && EventFlag(9802)
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
                && EventFlag(9802)
                && !EventFlag(eventFlagId5)));
    SetEventFlag(eventFlagId, OFF);
    DeleteMapSFX(entityId, true);
    RestartEvent();
});

// ★生贄の街_新NPC召喚_参加_XX
$Event(12804410, Restart, function(signType, areaEntityId, entityId, eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4, actionButtonParameterId) {
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

// ★生贄の街_新NPC召喚_ボス部屋に入る_XX
$Event(12804460, Restart, function(chrEntityId, areaEntityId, entityId, areaEntityId2, playAnimationId, eventFlagId, areaEntityId3) {
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
    SetCharacterEventTarget(chrEntityId, 2800800);
    RequestCharacterAICommand(chrEntityId, -1, 0);
    RequestCharacterAIReplan(chrEntityId);
});


