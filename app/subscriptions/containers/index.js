import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Plans from '../components/Plans'
import PlanContent from '../components/PlanContent'
import Offices from '../components/Offices'
import Card from '../components/Card'
import Coupon from '../components/Coupon'
import Summary from '../components/Summary'
import * as PlanActions from '../actions/plans'
import * as OfficeActions from '../actions/offices'
import * as CouponActions from '../actions/coupon'

class Subscriptions extends Component {
  render() {
    const { plans, offices, card, coupon, planActions, officeActions, couponActions } = this.props
    const plan = plans.find(plan => plan.selected)

    return (
      <div className="container">
        <h1 className="text-center">Subscriptions</h1>
        <Plans plans={plans} actions={planActions} />
        <PlanContent plan={plan} actions={planActions} />
        <Offices offices={offices} actions={officeActions} />
        <div>
          <div className="col-sm-6">
            <Card card={card} />
          </div>
          <div className="col-sm-6">
            <Coupon coupon={coupon} actions={couponActions} />
            <Summary plan={plan} offices={offices} coupon={coupon} />
          </div>
        </div>
      </div>
    )
  }
}

Subscriptions.propTypes = {
  plans: PropTypes.array.isRequired,
  offices: PropTypes.array.isRequired,
  card: PropTypes.object.isRequired,
  coupon: PropTypes.object.isRequired,
  planActions: PropTypes.object.isRequired,
  officeActions: PropTypes.object.isRequired,
  couponActions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    plans: state.plans,
    offices: state.offices,
    card: state.card,
    coupon: state.coupon
  }
}

function mapDispatchToProps(dispatch) {
  return {
    planActions: bindActionCreators(PlanActions, dispatch),
    officeActions: bindActionCreators(OfficeActions, dispatch),
    couponActions: bindActionCreators(CouponActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Subscriptions)
