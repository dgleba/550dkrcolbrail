# db/seeds.rb
(0..4).each do |i|
    Film.create(title: "Film-#{i}", description: "This is film #{i}")
  end