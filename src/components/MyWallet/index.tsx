import { useLanguage } from '@/context/LanguageContext';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const colors = {
  primary: '#1E9E4A',
  background: '#FFF',
  white: '#FFFFFF',
  textDark: '#1A2B49',
  textGray: '#6B7280',
  border: '#E5E9F0',
  success: '#16A34A',
  successBg: '#E6F4EA',
  danger: '#DC2626',
  dangerBg: '#FDE7EE',
};

// Placeholder data — wire up to real wallet/transaction data whenever available
const wallet = {
  balance: 3250,
  thisMonthCredit: 3800,
  thisMonthDebit: 550,
};

const transactions = [
  {
    id: 't1',
    title: 'Incentive Credited',
    subtitle: 'Weekly performance bonus',
    date: '18 May, 08:15 AM',
    amount: 500,
    type: 'credit',
    icon: 'trending-up',
  },
  {
    id: 't2',
    title: 'Fuel Voucher Redeemed',
    subtitle: 'Reward points used',
    date: '17 May, 10:30 PM',
    amount: -150,
    type: 'debit',
    icon: 'gas-station-outline',
  },
  {
    id: 't3',
    title: 'Trip Payout',
    subtitle: 'Duty completed payout',
    date: '17 May, 09:00 AM',
    amount: 1200,
    type: 'credit',
    icon: 'car-outline',
  },
  {
    id: 't4',
    title: 'Money Added',
    subtitle: 'Via UPI',
    date: '16 May, 06:20 PM',
    amount: 2000,
    type: 'credit',
    icon: 'arrow-down-circle-outline',
  },
  {
    id: 't5',
    title: 'Withdrawal',
    subtitle: 'To bank account',
    date: '15 May, 04:45 PM',
    amount: -1000,
    type: 'debit',
    icon: 'arrow-up-circle-outline',
  },
];

const WalletView = () => {
  const { t } = useLanguage();
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      {/* Balance card */}
      <View style={styles.balanceCard}>
        <View style={styles.balanceTopRow}>
          <View style={styles.walletIconWrap}>
            <MaterialCommunityIcons name="wallet-outline" size={22} color={colors.white} />
          </View>
          <TouchableOpacity style={styles.historyButton} activeOpacity={0.7}>
            <Ionicons name="time-outline" size={14} color={colors.white} />
            <Text style={styles.historyButtonText}>{t('History')}</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.balanceLabel}>{t('Available Balance')}</Text>
        <Text style={styles.balanceValue}>₹{wallet.balance.toLocaleString('en-IN')}</Text>

        <TouchableOpacity style={styles.addMoneyButton} activeOpacity={0.85}>
          <Ionicons name="add-circle-outline" size={18} color={colors.primary} />
          <Text style={styles.addMoneyText}>{t('Add Money')}</Text>
        </TouchableOpacity>
      </View>

      {/* This month summary */}
      <View style={styles.summaryRow}>
        <View style={styles.summaryCard}>
          <View style={[styles.summaryIconWrap, { backgroundColor: colors.successBg }]}>
            <Ionicons name="arrow-down" size={16} color={colors.success} />
          </View>
          <Text style={styles.summaryLabel}>{t('Credited')}</Text>
          <Text style={[styles.summaryValue, { color: colors.success }]}>
            +₹{wallet.thisMonthCredit.toLocaleString('en-IN')}
          </Text>
          <Text style={styles.summarySubtext}>{t('This month')}</Text>
        </View>

        <View style={styles.summaryCard}>
          <View style={[styles.summaryIconWrap, { backgroundColor: colors.dangerBg }]}>
            <Ionicons name="arrow-up" size={16} color={colors.danger} />
          </View>
          <Text style={styles.summaryLabel}>{t('Debited')}</Text>
          <Text style={[styles.summaryValue, { color: colors.danger }]}>
            -₹{wallet.thisMonthDebit.toLocaleString('en-IN')}
          </Text>
          <Text style={styles.summarySubtext}>{t('This month')}</Text>
        </View>
      </View>

      {/* Quick actions */}
      <View style={styles.quickActionsRow}>
        <TouchableOpacity style={styles.quickAction} activeOpacity={0.7}>
          <View style={styles.quickActionIconWrap}>
            <MaterialCommunityIcons name="bank-transfer-out" size={20} color={colors.primary} />
          </View>
          <Text style={styles.quickActionText}>{t('Withdraw')}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.quickAction} activeOpacity={0.7}>
          <View style={styles.quickActionIconWrap}>
            <MaterialCommunityIcons name="bank-outline" size={20} color={colors.primary} />
          </View>
          <Text style={styles.quickActionText}>{t('Bank Details')}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.quickAction} activeOpacity={0.7}>
          <View style={styles.quickActionIconWrap}>
            <MaterialCommunityIcons name="star-outline" size={20} color={colors.primary} />
          </View>
          <Text style={styles.quickActionText}>{t('Rewards')}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.quickAction} activeOpacity={0.7}>
          <View style={styles.quickActionIconWrap}>
            <MaterialCommunityIcons name="file-document-outline" size={20} color={colors.primary} />
          </View>
          <Text style={styles.quickActionText}>{t('Statements')}</Text>
        </TouchableOpacity>
      </View>

      {/* Transaction history */}
      <View style={styles.historyHeaderRow}>
        <Text style={styles.sectionTitle}>{t('Recent Transactions')}</Text>
        <TouchableOpacity activeOpacity={0.7}>
          <Text style={styles.viewAllText}>{t('View All')}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.transactionsCard}>
        {transactions.map((txn, index) => (
          <View
            key={txn.id}
            style={[
              styles.transactionRow,
              index !== transactions.length - 1 && styles.transactionRowBorder,
            ]}
          >
            <View
              style={[
                styles.transactionIconWrap,
                { backgroundColor: txn.type === 'credit' ? colors.successBg : colors.dangerBg },
              ]}
            >
              <MaterialCommunityIcons
                name={txn.icon as any}
                size={18}
                color={txn.type === 'credit' ? colors.success : colors.danger}
              />
            </View>

            <View style={styles.transactionTextWrap}>
              <Text style={styles.transactionTitle}>{t(txn.title)}</Text>
              <Text style={styles.transactionSubtitle}>{t(txn.subtitle)}</Text>
            </View>

            <View style={styles.transactionRight}>
              <Text
                style={[
                  styles.transactionAmount,
                  { color: txn.type === 'credit' ? colors.success : colors.danger },
                ]}
              >
                {txn.type === 'credit' ? '+' : '-'}₹{Math.abs(txn.amount)}
              </Text>
              <Text style={styles.transactionDate}>{t(txn.date)}</Text>
            </View>
          </View>
        ))}
      </View>
      <View style={{ paddingBottom: 40 }} />
    </ScrollView>
  );
};

export default WalletView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    padding: 16,
    paddingBottom: 40,
  },
  balanceCard: {
    backgroundColor: colors.primary,
    borderRadius: 18,
    padding: 20,
  },
  balanceTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  walletIconWrap: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  historyButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.5)',
  },
  historyButtonText: {
    color: colors.white,
    fontSize: 12,
    fontWeight: '600',
  },
  balanceLabel: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 13,
    marginTop: 18,
  },
  balanceValue: {
    color: colors.white,
    fontSize: 32,
    fontWeight: '700',
    marginTop: 4,
  },
  addMoneyButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    backgroundColor: colors.white,
    borderRadius: 12,
    paddingVertical: 12,
    marginTop: 18,
  },
  addMoneyText: {
    color: colors.primary,
    fontSize: 14.5,
    fontWeight: '700',
  },
  summaryRow: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 16,
  },
  summaryCard: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 14,
  },
  summaryIconWrap: {
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  summaryLabel: {
    fontSize: 12,
    color: colors.textGray,
    marginTop: 8,
  },
  summaryValue: {
    fontSize: 16,
    fontWeight: '700',
    marginTop: 2,
  },
  summarySubtext: {
    fontSize: 10.5,
    color: colors.textGray,
    marginTop: 2,
  },
  quickActionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.border,
    paddingVertical: 16,
    paddingHorizontal: 8,
    marginTop: 16,
  },
  quickAction: {
    alignItems: 'center',
    flex: 1,
  },
  quickActionIconWrap: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#EAF0FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  quickActionText: {
    fontSize: 11,
    color: colors.textDark,
    fontWeight: '600',
    marginTop: 6,
    textAlign: 'center',
  },
  historyHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 22,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.textDark,
  },
  viewAllText: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.primary,
  },
  transactionsCard: {
    backgroundColor: colors.white,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.border,
  },
  transactionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 13,
    paddingHorizontal: 14,
  },
  transactionRowBorder: {
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  transactionIconWrap: {
    width: 38,
    height: 38,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  transactionTextWrap: {
    flex: 1,
  },
  transactionTitle: {
    fontSize: 13.5,
    fontWeight: '600',
    color: colors.textDark,
  },
  transactionSubtitle: {
    fontSize: 11.5,
    color: colors.textGray,
    marginTop: 2,
  },
  transactionRight: {
    alignItems: 'flex-end',
  },
  transactionAmount: {
    fontSize: 13.5,
    fontWeight: '700',
  },
  transactionDate: {
    fontSize: 10.5,
    color: colors.textGray,
    marginTop: 3,
  },
});