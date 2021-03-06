//client only code

Template.leaderboard.helpers({
  players: function () {
    return Players.find({}, { sort: { score: -1, name: 1 } });
  },
  selectedName: function () {
    var player = Players.findOne(Session.get("selectedPlayer"));
    return player && player.name;
  }
});

Template.leaderboard.events({
  'click .inc': function () {
    Players.update(Session.get("selectedPlayer"), {$inc: {score: 5}});
  }
});

Template.player.helpers({
  selected: function () {
    return Session.equals("selectedPlayer", this._id) ? "selected" : '';
  }
});

Template.player.events({
  'click': function () {
    Session.set("selectedPlayer", this._id);
  }
});