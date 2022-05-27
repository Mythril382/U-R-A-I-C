Events.on(WorldLoadEvent, () => {
  if (Vars.state.isCampaign() && !Vars.net.client()) {
    Vars.state.rules.unitAmmo = true;
  }
});
