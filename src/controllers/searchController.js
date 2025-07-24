import axios from 'axios';

//WWE
export const searchFlights = async (req, res) => {
  const {
    from_airport_id,
    to_airport_id,
    pax,
    date,
    date_as_text,
    App_Out_Date_As_Text,
    time_as_text
  } = req.body;

  if (!from_airport_id || !to_airport_id || !pax || !date) {
    return res.status(400).json({ error: "Missing required search parameters" });
  }

  try {
    const response = await axios.post(
      "https://operators-dashboard.bubbleapps.io/api/1.1/wf/webflow_one_way_flight",
      {
        "from airport id": from_airport_id,
        "to airport id": to_airport_id,
        "pax": pax,
        "date": date,
        "date_as_text": date_as_text,
        "App_Out_Date_As_Text": App_Out_Date_As_Text,
        "time_as_text": time_as_text
      }
    );

    res.status(200).json({ flights: response.data.response });

  } catch (error) {
    console.error("Flight search error:", error.message);
    res.status(500).json({ error: "Flight search failed" });
  }
};
