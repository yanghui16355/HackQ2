package com.expedia.lodging.connectivity.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.expedia.lodging.connectivity.model.MessageAggregator;
import com.expedia.lodging.connectivity.model.PartnerInfo;

public class MessageService {
	
	List<PartnerInfo> partnerInfo;
	Map<String,PartnerInfo> partnerMap;
	
	public List<PartnerInfo> getPartnerInfoList(){
		//List<PartnerInfo> partnerInfo = new ArrayList<PartnerInfo>();
		
		createParterInfoList();
		
		return partnerInfo;
	}
	
	public PartnerInfo getPartnerInfo(String partnerID){
		return partnerMap.get(partnerID);
	}
	
	
	private void createParterInfoList(){
		partnerInfo = new ArrayList<PartnerInfo>();
		partnerMap = new HashMap<String,PartnerInfo>();
		MessageAggregator hs1 = new MessageAggregator("RQIn","Success",1000,"Hilton","Polaris","Hilton","00CC00");
		MessageAggregator hf1 = new MessageAggregator("RQIn","Fail",50,"Hilton","Polaris","Hilton","FF3333");
		MessageAggregator hs2 = new MessageAggregator("RQOut","Success",1000,"Polaris","Expedia","Hilton","00CC00");
		MessageAggregator hf2 = new MessageAggregator("RQOut","Fail",30,"Polaris","Expedia","Hilton","FF3333");
		MessageAggregator hs3 = new MessageAggregator("RSIn","Success",1000,"Expedia","Polaris","Hilton","00CC00");
		MessageAggregator hf3 = new MessageAggregator("RSIn","Fail",80,"Expedia","Polaris","Hilton","FF3333");
		MessageAggregator hs4 = new MessageAggregator("RSOut","Success",1000,"Polaris","Hilton","Hilton","00CC00");
		MessageAggregator hf4 = new MessageAggregator("RSOut","Fail",100,"Polaris","Hilton","Hilton","FF3333");
		
		PartnerInfo h = new PartnerInfo("Hilton");
		h.setCategory("ARI");
		h.setRQInS(hs1);
		h.setRQInF(hf1);
		h.setRQOutS(hs2);
		h.setRQOutF(hf2);
		h.setRSInS(hs3);
		h.setRSInF(hf3);
		h.setRSOutS(hs4);
		h.setRSOutF(hf4);
		
		
		MessageAggregator ms1 = new MessageAggregator("RQIn","Success",100,"Expedia","Polaris","Marriott","33FF33");
		MessageAggregator mf1 = new MessageAggregator("RQIn","Fail",5,"Expedia","Polaris","Marriott","FF9999");
		MessageAggregator ms2 = new MessageAggregator("RQOut","Success",100,"Polaris","Marriott","Marriott","33FF33");
		MessageAggregator mf2 = new MessageAggregator("RQOut","Fail",3,"Polaris","Marriott","Marriott","FF9999");
		MessageAggregator ms3 = new MessageAggregator("RSIn","Success",100,"Marriott","Polaris","Marriott","33FF33");
		MessageAggregator mf3 = new MessageAggregator("RSIn","Fail",8,"Marriott","Polaris","Marriott","FF9999");
		MessageAggregator ms4 = new MessageAggregator("RSOut","Success",100,"Polaris","Expedia","Marriott","33FF33");
		MessageAggregator mf4 = new MessageAggregator("RSOut","Fail",10,"Polaris","Expedia","Marriott","FF9999");
		
		PartnerInfo m = new PartnerInfo("Marriott");
		m.setCategory("Booking");
		m.setRQInS(ms1);
		m.setRQInF(mf1);
		m.setRQOutS(ms2);
		m.setRQOutF(mf2);
		m.setRSInS(ms3);
		m.setRSInF(mf3);
		m.setRSOutS(ms4);
		m.setRSOutF(mf4);
		
		partnerInfo.add(h);
		partnerInfo.add(m);
		
		partnerMap.put(h.getPartnerID(), h);
		partnerMap.put(m.getPartnerID(), m);
	}
}
