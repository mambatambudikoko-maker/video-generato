export default async function handler(req, res) {
const { taskId } = req.query;

if (!taskId) {
return res.status(400).json({ error: ‘taskId manquant’ });
}

const apiKey = process.env.KIE_API_KEY;

if (!apiKey) {
return res.status(500).json({ error: ‘Configuration serveur manquante (clé API absente).’ });
}

try {
const response = await fetch(https://api.kie.ai/api/v1/jobs/recordInfo?taskId=${taskId}, {
method: ‘GET’,
headers: {
‘Authorization’: Bearer ${apiKey}
}
});

const data = await response.json();

if (!response.ok || data.code !== 200) {
  return res.status(502).json({ status: 'failed', error: data.msg || 'Erreur de statut' });
}

const state = data.data.state; // ex: "waiting" | "success" | "fail"

if (state === 'success') {
  const videoUrl = data.data.resultJson
    ? JSON.parse(data.data.resultJson).resultUrls?.[0]
    : null;
  return res.status(200).json({ status: 'success', videoUrl });
} else if (state === 'fail') {
  return res.status(200).json({ status: 'failed' });
} else {
  return res.status(200).json({ status: 'pending' });
}

} catch (err) {
return res.status(500).json({ status: ‘failed’, error: ‘Erreur de connexion.’ });
}
}
HTTP Status 400 – Bad Request
api.kie.ai
