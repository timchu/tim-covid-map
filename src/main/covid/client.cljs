(ns covid.client
  (:require
   ["jquery-mapael"]))

(defn init []
  (let [container (-> js/document
                      (.getElementById "container"))]
    #_(-> container
        (.mapael (-> {:map {:name "world_countries"}}
                            (clj->js))))))