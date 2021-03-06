/**
 * Created by Duy on 7/6/2016.
 */
/**
 * THIS CLASS MANAGES BUTTON UI
 */
function CInterfacePO(my, parentGroup) {
    var that = new CInterfaceBase(my, parentGroup, true, true, false, function(){
        Manager4State.setCurrentState(my.currentGameSlot.GameConstant.State.Bonus);
        that.hideSpinBtn();
        that.hideStartBonusBut();
        my.currentGameSlot.manager4Network.callBonus(0, 0);

        my.currentGameSlot.s_oGame.getBonusStage1().show();
    }, function(_oContainer){
        return new CFreespinIndicatorPO(my, _oContainer, 250, settings.CANVAS_HEIGHT - 200);
    });

    my.currentGameSlot.s_oInterface = that;

    return that;
}